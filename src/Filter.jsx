import { Stack } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

export default function Filter({ value, setValue }) {
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
          {/* <FormControlLabel
            value="disabled"
            disabled
            control={<Radio />}
            label="other"
          /> */}
        </RadioGroup>
      </FormControl>
    </Stack>
  );
}
