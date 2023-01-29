import ClearAllIcon from '@mui/icons-material/ClearAll';
import { Button, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { deleteAGuest, getAllGuest } from '../Controller/APIControl';

export default function DealeAllGuest() {
  const baseUrl = 'http://localhost:4000/guests/';
  const [guestList, setGuestList] = useState([]);
  const [anyDelete, setAnyDelete] = useState(false);

  useEffect(() => {
    getAllGuest(baseUrl)
      .then((res) => setGuestList(res))
      .catch((err) => err);
  }, [anyDelete]);

  const deleteAll = () => {
    console.log(guestList);
    if (!anyDelete && guestList.length) {
      guestList.map(
        async (singleGuest) => await deleteAGuest(baseUrl, singleGuest.id),
      );
      setAnyDelete(true);
    }
    setGuestList([]);
    setAnyDelete(false);
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
