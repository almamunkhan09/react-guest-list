import PendingIcon from '@mui/icons-material/Pending';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import {
  Button,
  Checkbox,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { deleteAGuest, updateAGuest } from '../Controller/APIControl';

const baseUrl = 'http://localhost:4000/guests/';

// const guestList = [
//   {
//     id: '8',
//     firstName: 'Al Mamun ',
//     lastName: 'Khan',
//     attending: false,
//   },
//   {
//     id: '9',
//     firstName: 'Shayan ',
//     lastName: 'Chowdhury',
//     attending: false,
//   },
//   {
//     id: '10',
//     firstName: 'Majharul ',
//     lastName: 'Islam',
//     attending: true,
//   },
// ];

export default function ShowGuests({ guestList, anyChange }) {
  // const [guestList, setGuestList] = useState([]);

  // useEffect(() => {
  //   getAllGuest(baseUrl)
  //     .then((res) => setGuestList(res))
  //     .catch((err) => err);
  // }, []);

  // const handleCheckBox = (event, id) => {
  //   console.log(id);
  //   // const previous
  //   setAcceptInvitation(event.target.checked);
  // };

  const handleDelete = async (id) => {
    await deleteAGuest(baseUrl, id);
    anyChange((prevValue) => (prevValue === 0 ? 1 : 0));
  };

  if (guestList.length === 0) return '';

  return (
    <Stack mt={4} bgcolor="#b2dfdb" spacing={1} borderRadius={2}>
      <Typography variant="h4"> Guests</Typography>
      <Divider />
      <List>
        {guestList.map((guest) => {
          return (
            <ListItem
              key={guest.id}
              secondaryAction={
                <IconButton edge="end">
                  {guest.attending === true ? (
                    <PublishedWithChangesIcon />
                  ) : (
                    <PendingIcon />
                  )}
                </IconButton>
              }
            >
              <Checkbox
                value={guest.id}
                edge="start"
                aria-label="mamun"
                // onChange={(event) => {
                //   console.log(guest.id);
                // }}
                checked={guest.attending}
                // tabIndex={guest.id}
                disableRipple
                onClick={async (event) => {
                  await updateAGuest(baseUrl, guest.id, {
                    attending: event.target.checked,
                  });
                  anyChange((prevValue) => (prevValue === 0 ? 1 : 0));
                }}
                inputProps={{ 'aria-labelledby': 'khan' }}
              />
              <ListItemText primary={` ${guest.firstName} ${guest.lastName}`} />
              <Button
                onClick={() => handleDelete(guest.id)}
                variant="contained"
                color="error"
                size="small"
              >
                {' '}
                Remove
              </Button>
            </ListItem>
          );
        })}
      </List>
    </Stack>
  );
}
