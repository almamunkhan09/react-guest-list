import PendingIcon from '@mui/icons-material/Pending';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import {
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
  useEffect(() => {
    getAllGuest(baseUrl)
      .then((res) => setGuestList(res))
      .catch((err) => err);
  }, []);

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
                edge="start"
                // checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                // inputProps={{ 'aria-labelledby': labelId }}
              />
              <ListItemText primary={` ${guest.firstName} ${guest.lastName}`} />
            </ListItem>
          );
        })}
      </List>
    </Stack>
  );
}
