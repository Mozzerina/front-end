import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectLabels() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{
        m: 0,
        minWidth: 420,
        marginBottom: 3,
      }}
      >
        <Select
          MenuProps={{ disableScrollLock: true }}
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          sx={{
            borderRadius: '10px',
          }}
        >
          <MenuItem
            value=""
          >
            <em>Молоко</em>
          </MenuItem>
          <MenuItem>Вершки</MenuItem>
          <MenuItem>Ванільний млодкий крем</MenuItem>
          <MenuItem>Знижене молоко</MenuItem>
          <MenuItem>2% молока</MenuItem>
          <MenuItem>Незбиране молоко</MenuItem>
          <MenuItem>Мигдаль</MenuItem>
          <MenuItem>Кокос</MenuItem>
          <MenuItem>Вівсяне молоко</MenuItem>
        </Select>

      </FormControl>
    </div>
  );
}
