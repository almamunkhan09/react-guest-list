import EditIcon from '@mui/icons-material/Edit';
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
import { deleteAGuest, updateAGuest } from '../Controller/APIControl';

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

export default function ShowGuests({
  guestList,
  anyChange,
  baseUrl,
  filterType,
}) {
  let filteredGuestList;
  if (filterType === 'attending') {
    filteredGuestList = guestList.filter((guest) => guest.attending === true);
  } else if (filterType === 'notAttending') {
    filteredGuestList = guestList.filter((guest) => guest.attending === false);
  } else {
    filteredGuestList = [...guestList];
  }

  const handleDelete = async (id) => {
    await deleteAGuest(baseUrl, id);
    anyChange((prevValue) => (prevValue === 0 ? 1 : 0));
  };

  if (filteredGuestList.length === 0) {
    return (
      <Stack mt={4} bgcolor="error" spacing={1} borderRadius={2}>
        {' '}
        Ops there is no guest
      </Stack>
    );
  }

  return (
    <Stack mt={4} bgcolor="#b2dfdb" spacing={1} borderRadius={2}>
      <Stack>
        <Typography variant="h4"> Guests</Typography>
        <Divider />
      </Stack>

      <List>
        {filteredGuestList.map((guest) => {
          return (
            <ListItem
              data-test-id="guest"
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
                // aria-label="attending "
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
                inputProps={{ 'aria-label': 'attending' }}
              />
              <ListItemText primary={` ${guest.firstName} ${guest.lastName}`} />
              <Button
                onClick={() => handleDelete(guest.id)}
                variant="contained"
                color="error"
                size="small"
                aria-label="Remove fistname lastname"
                m={2}
              >
                {' '}
                Remove
              </Button>
              <IconButton m={2} size="small">
                {' '}
                <EditIcon />
              </IconButton>
            </ListItem>
          );
        })}
      </List>
    </Stack>
  );
}
