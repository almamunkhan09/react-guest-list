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

// Show guest list function. It takes props from the Home page
export default function ShowGuests({
  guestList,
  anyChange,
  baseUrl,
  filterType,
}) {
  let filteredGuestList; // Define as an array to get all the filtered guest
  // Filter based on user choise
  if (filterType === 'attending') {
    filteredGuestList = guestList.filter((guest) => guest.attending === true);
  } else if (filterType === 'notAttending') {
    filteredGuestList = guestList.filter((guest) => guest.attending === false);
  } else {
    filteredGuestList = [...guestList];
  }

  // Function of remove button in each guest component
  const handleDelete = async (id) => {
    await deleteAGuest(baseUrl, id);
    anyChange((prevValue) => (prevValue === 0 ? 1 : 0));
  };
  // If there is no filtered list then it shows an message
  if (filteredGuestList.length === 0) {
    return (
      <Stack mt={4} bgcolor="error" spacing={1} borderRadius={2}>
        {' '}
        Ops ther is no guest for this filter
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
                checked={guest.attending}
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
              {/* <IconButton m={2} size="small">
                {' '}
                <EditIcon />
              </IconButton> */}
            </ListItem>
          );
        })}
      </List>
    </Stack>
  );
}
