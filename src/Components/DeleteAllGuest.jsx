import ClearAllIcon from '@mui/icons-material/ClearAll';
import { Button, Stack } from '@mui/material';
import { deleteAGuest } from '../Controller/APIControl';

// Delete all function deletes all the entries inside the list
// This api dealete only on entry at atime. So delete all is implemented by mapping through each element of a list
export default function DeleteAllGuest({ guestList, anyChange, baseUrl }) {
  const deleteAll = () => {
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
