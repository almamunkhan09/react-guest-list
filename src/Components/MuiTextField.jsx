import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Button, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import { createAGuest } from '../Controller/APIControl';

// create a function create a single user inthe backebd server
// It takes two input. A url and and a object of userInformation. It creates an user in the server with id,firstName and lastName
// and also with attending as false

export default function MuiTextField({ anyChange, baseUrl }) {
  const defaultGuest = {
    firstName: '',
    lastName: '',
    attending: false,
  };

  const [guest, setGuest] = useState(defaultGuest);
  const handleOnKeyDown = async (event) => {
    if (event.key === 'Enter') {
      await createAGuest(baseUrl, guest);
      setGuest(defaultGuest);
      anyChange((prevValue) => (prevValue === 0 ? 1 : 0));
    }
  };

  const handleSubmit = async () => {
    await createAGuest(baseUrl, guest);
    anyChange((prevValue) => (prevValue === 0 ? 1 : 0));
    setGuest(defaultGuest);
  };

  //

  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2}>
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
          // onChange={(event) => {
          //   setLastName(event.target.value);
          // }}
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
    </Stack>
  );
}
