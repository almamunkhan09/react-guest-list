import axios from 'axios';
import { useEffect, useState } from 'react';

const guestList = [];

export default function Arif() {
  const defaultguest = {
    firstName: '',
    lastName: '',
    attending: false,
  };

  const [dataApi, setDataApi] = useState([]);
  const myUrl = 'http://localhost:4000/guests';

  useEffect(() => {
    axios(myUrl)
      .then((res) => setDataApi(res.data))
      .catch((err) => err);
  }, []);

  // console.log(name1);

  // create state variable

  console.log(dataApi);

  const [guest, setGuest] = useState(defaultguest);

  // console.log(guest);

  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');

  // const getLastName = (event) => {
  //   setFirstName(event.target.value);
  // };
  // console.log(firstName, lastName);
  return (
    <div>
      <input
        value={guest.firstName}
        placeholder="First Name"
        onChange={(event) => {
          setGuest({ ...guest, ['firstName']: event.target.value });
        }}
      />
      <input
        value={guest.lastName}
        placeholder="Last Name"
        onChange={(event) => {
          setGuest({ ...guest, ['lastName']: event.target.value });
        }}
      />
      <button
        onClick={() => {
          console.log(guest);
          console.log(guestList);

          guestList.push(guest);
          console.log(guestList);
          setGuest(defaultguest);
        }}
      >
        {' '}
        Add{' '}
      </button>

      {dataApi.map((item) => (
        <h2 key={item.id}>
          {`${item.firstName} ${item.lastName} ${item.attending}`}{' '}
        </h2>
      ))}
    </div>
  );
}
