import ClearAllIcon from '@mui/icons-material/ClearAll';
import { Button, Stack } from '@mui/material';
import { deleteAGuest } from '../Controller/APIControl';

export default function DealeAllGuest({ guestList, anyChange }) {
  const baseUrl = 'http://localhost:4000/guests/';

  const deleteAll = () => {
    if (guestList.length) {
      guestList.map(
        async (singleGuest) => await deleteAGuest(baseUrl, singleGuest.id),
      );
    }
    anyChange((prevValue) => (prevValue === 0 ? 1 : 0));
  };

  if (!guestList.length > 0) return '';
  return (
    <Stack spacing={4} mt={2}>
      <Button
        onClick={deleteAll}
        variant="contained"
        size="large"
        endIcon={<ClearAllIcon fontSize="large" />}
        color="error"
      >
        Delete All
      </Button>
    </Stack>
  );
}
