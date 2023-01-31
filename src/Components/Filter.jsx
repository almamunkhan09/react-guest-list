import { Stack } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

// Implement filter option inthe app/
// Filter options are all, attending and not attending.

export default function Filter({ value, setValue }) {
  // Filter function based on user choise
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Stack m={2} alignItems="center">
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="attending"
            control={<Radio />}
            label="Attending"
          />
          <FormControlLabel
            value="notAttending"
            control={<Radio />}
            label="Not Attending"
          />
          <FormControlLabel value="all" control={<Radio />} label="All" />
        </RadioGroup>
      </FormControl>
    </Stack>
  );
}
