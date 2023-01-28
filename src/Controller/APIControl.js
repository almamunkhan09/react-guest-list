// import axios from 'axios';
import axios from 'axios';

// Create A User in Guest List
const createAGuest = async (url, guestInfo) => {
  const { data } = await axios.post(url, guestInfo);
  return data;
};

// Get all the Guest Name from GuestList
const getAllGuest = async (url) => {
  const { data } = await axios(url);
  return data;
};

// Get a Single Guest name from the GuestList
const getASingleGuest = async (url, guestId) => {
  const { data } = await axios(`${url}${guestId}`);
  return data;
};

// Udate a guest Information
const updateAGuest = async (url, id, updateInfo) => {
  const { data } = await axios.put(`${url}${id}`, updateInfo);
  return data;
};

// Delete A Guest
const deleteAGuest = async (url, id) => {
  const { data } = await axios.delete(`${url}${id}`);
  return data;
};

export {
  createAGuest,
  deleteAGuest,
  getAllGuest,
  getASingleGuest,
  updateAGuest,
};

// console.log(
//   await createAGuest('http://localhost:4000/guests/', {
//     firstName: 'Al Mamun ',
//     lastName: 'Khan',
//   }),
// );
