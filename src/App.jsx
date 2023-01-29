import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Stack, { Typography } from '@mui/material';
import DealeAllGuest from './Components/DeleteAllGuest';
import ShowGuests from './Components/ShowGuests';
import InputGuest from './InputGuest';

function App() {
  return (
    <>
      <Stack mb={5}>
        <Typography variant="h1"> Athithi </Typography>
        <Typography variant="h4"> Don't Miss A Friend </Typography>
      </Stack>
      <InputGuest />
      <DealeAllGuest />
      <ShowGuests />
    </>
  );
}

export default App;
