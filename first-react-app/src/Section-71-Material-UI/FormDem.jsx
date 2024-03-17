import { useState } from "react"
import { TextField, Slider, Stack } from "@mui/material";
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

export default function FormDem() {
    let [name, setName] = useState("");
    function changeName(e) {
        setName(e.target.value);
    }
    const marks = [
        {
          value: 0,
          label: 'Quiet',
        },
        {
          value: 50,
          label: 'Normal',
        },
        {
          value: 100,
          label: 'Don\'t do this',
        },
      ];
    return (
        <div>
            <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                placeholder="Enter your name"
                value={name}
                onChange={changeName}
            />
            <Stack spacing={1} direction="row" sx={{ mb: 1 }} alignItems="center">
            <VolumeDown />
            <Slider
        aria-label="Custom marks"
        defaultValue={20}
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
      />
      <VolumeUp />
      </Stack>

        </div>
    )
}