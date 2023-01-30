import { Stack } from '@mui/material';
import MuiTextField from './Components/MuiTextField';

export default function InputGuest({ anyChange }) {
  return (
    <Stack alignItems="center" justifyItems="center">
      <MuiTextField anyChange={anyChange} />
    </Stack>
  );
}
