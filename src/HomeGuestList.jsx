import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import DealeAllGuest from './Components/DeleteAllGuest';
import ShowGuests from './Components/ShowGuests';
import { getAllGuest } from './Controller/APIControl';
import InputGuest from './InputGuest';

const baseUrl =
  'https://express-guest-list-api-memory-data-store.al-mamunmamun4.repl.co/guests/';

function HomeGuestList() {
  const [guestList, setGuestList] = useState([]);
  const [backendConnect, setBackendConnect] = useState(false);
  const [isAnyChanged, setIsAnyChanged] = useState(0);
  // const [dataBaseFailed, setDataBaseFailed] = useState(false);
  useEffect(() => {
    getAllGuest(baseUrl)
      .then((res) => {
        setGuestList(res);
        setBackendConnect(true);
      })
      .catch((err) => err);
  }, [isAnyChanged]);

  // if (dataBaseFailed) return <>Datbase failed to load</>;

  if (!backendConnect) {
    return <Typography variant="h1"> Loading... </Typography>;
  }
  return (
    <>
      <Stack mb={5}>
        <Typography variant="h1"> Athithi </Typography>
        <Typography variant="h4"> Don't Miss A Friend </Typography>
      </Stack>
      <InputGuest anyChange={setIsAnyChanged} baseUrl={baseUrl} />
      <ShowGuests
        guestList={guestList}
        anyChange={setIsAnyChanged}
        baseUrl={baseUrl}
      />
      <DealeAllGuest
        anyChange={setIsAnyChanged}
        guestList={guestList}
        baseUrl={baseUrl}
      />
    </>
  );
}

export default HomeGuestList;
