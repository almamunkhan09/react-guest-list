import { Stack } from '@mui/material';
import MuiTextField from './Components/MuiTextField';

export default function InputGuest({ anyChange, baseUrl }) {
  return (
    <Stack alignItems="center" justifyItems="center">
      <MuiTextField anyChange={anyChange} baseUrl={baseUrl} />
    </Stack>
  );
}
