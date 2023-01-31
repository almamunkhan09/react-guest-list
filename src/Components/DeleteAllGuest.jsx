import ClearAllIcon from '@mui/icons-material/ClearAll';
import { Button, Stack } from '@mui/material';
import { deleteAGuest } from '../Controller/APIControl';

export default function DealeAllGuest({ guestList, anyChange, baseUrl }) {
  if (!guestList.length > 0) return '';

  const deleteAll = async () => {
    guestList.forEach(async (element, index) => {
      if (index === guestList.length - 1) {
        await deleteAGuest(baseUrl, element.id);
        anyChange((prevValue) => (prevValue === 0 ? 1 : 0));
      } else {
        await deleteAGuest(baseUrl, element.id);
      }
    });
  };

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
