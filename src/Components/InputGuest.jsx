// Add packages and functions
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Button, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import { createAGuest } from '../Controller/APIControl';

// This component is for creating a guest inside the backend server
// It takes firstName,last name and make a post Request to the server

export default function InputGuest({ anyChange, baseUrl }) {
  const defaultGuest = {
    firstName: '',
    lastName: '',
  };
  // Take a guest Instance and make request to server
  const [guest, setGuest] = useState(defaultGuest);

  // Invoke the post request the user press down the enter
  const handleOnKeyDown = async (event) => {
    if (event.key === 'Enter') {
      await createAGuest(baseUrl, guest);
      setGuest(defaultGuest);
      anyChange((prevValue) => (prevValue === 0 ? 1 : 0));
    }
  };

  // Also there is Add button that can add a guest in the list
  const handleSubmit = async () => {
    await createAGuest(baseUrl, guest);
    anyChange((prevValue) => (prevValue === 0 ? 1 : 0));
    setGuest(defaultGuest);
  };

  //

  return (
    <Stack spacing={2}>
      <form action="">
        <Stack
          direction="row"
          spacing={2}
          mb={2}
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            required
            name="firstName"
            label="First name"
            variant="outlined"
            size="meduim"
            color="secondary"
            value={guest.firstName}
            onChange={(event) => {
              const { name, value } = event.target;
              setGuest({ ...guest, [name]: value });
            }}
          />
          <TextField
            required
            label="Last name"
            name="lastName"
            variant="outlined"
            size="large"
            color="secondary"
            value={guest.lastName}
            onKeyDown={handleOnKeyDown}
            onChange={(event) => {
              const { name, value } = event.target;
              setGuest({ ...guest, [name]: value });
            }}
          />
        </Stack>
        <Button
          spacing={4}
          onClick={handleSubmit}
          variant="contained"
          endIcon={<PersonAddIcon />}
        >
          {' '}
          Add Guest
        </Button>
      </form>
    </Stack>
  );
}
