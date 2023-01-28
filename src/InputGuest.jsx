import { Stack, Typography } from '@mui/material';
import MuiTextField from './Components/MuiTextField';

export default function InputGuest() {
  return (
    <Stack alignItems="center" justifyItems="center">
      <Typography> Input Your Guest Here </Typography>
      <MuiTextField />
    </Stack>
  );
}
