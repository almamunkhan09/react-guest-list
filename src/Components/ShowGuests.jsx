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
import { useEffect, useState } from 'react';
import { getAllGuest } from '../Controller/APIControl';

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

export default function ShowGuests() {
  const [guestList, setGuestList] = useState([]);
  const [acceptInvitation, setAcceptInvitation] = useState(false);
  useEffect(() => {
    getAllGuest(baseUrl)
      .then((res) => setGuestList(res))
      .catch((err) => err);
  }, []);

  console.log(acceptInvitation);
  const handleCheckBox = (event) => {
    console.log(event);
    // const previous
    setAcceptInvitation(event.target.checked);
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
                onChange={handleCheckBox}
                // checked={guest.attending}
                tabIndex={guest.id}
                disableRipple
                inputProps={{ 'aria-labelledby': 'khan' }}
              />
              <ListItemText primary={` ${guest.firstName} ${guest.lastName}`} />
              <Button variant="contained" color="error" size="small">
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
