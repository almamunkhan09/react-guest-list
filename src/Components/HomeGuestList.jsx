// Import Required packages
import '../App.css';
// These are suggested font by meterial ui and some packages from mUI
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { getAllGuest } from '../Controller/APIControl'; // import function from APIControl
// Importing Components from ./components folder
import DeleteAllGuest from './DeleteAllGuest'; // DeleteAllGuest component
import Filter from './Filter';
import InputGuest from './InputGuest';
import ShowGuests from './ShowGuests';

// Base url of API after deploying in replit
const baseUrl =
  'https://express-guest-list-api-memory-data-store.al-mamunmamun4.repl.co/guests/';

function HomeGuestList() {
  const [guestList, setGuestList] = useState([]);
  const [backendConnect, setBackendConnect] = useState(false); // Track the backend connection. If there is no connection the page will show loading
  const [isAnyChanged, setIsAnyChanged] = useState(0); // Track any change happened in any component. If there is any change we will make api request
  const [filterType, setFilterType] = useState('all'); // Set for filter operation in filter component

  useEffect(() => {
    getAllGuest(baseUrl)
      .then((res) => {
        setGuestList(res);
        setBackendConnect(true);
      })
      .catch((err) => err);
  }, [isAnyChanged]);

  if (!backendConnect) {
    return <Typography variant="h1"> Loading... </Typography>; // Showes before the page load and also if the connection with backend api is missing
  }

  return (
    <>
      <Stack mb={5}>
        <Typography variant="h1"> Athithi </Typography>
        <Typography variant="h4"> Don't Miss A Friend </Typography>
      </Stack>
      <InputGuest anyChange={setIsAnyChanged} baseUrl={baseUrl} />

      {/* prevent the loading of other components if there is no guest  */}
      {!guestList.length > 0 ? (
        ''
      ) : (
        <>
          <Filter value={filterType} setValue={setFilterType} />
          <ShowGuests
            guestList={guestList}
            anyChange={setIsAnyChanged}
            baseUrl={baseUrl}
            filterType={filterType}
          />
          <DeleteAllGuest
            anyChange={setIsAnyChanged}
            guestList={guestList}
            baseUrl={baseUrl}
          />
        </>
      )}
    </>
  );
}

export default HomeGuestList;
