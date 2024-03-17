import { useState } from "react";
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function RatingComponent() {
    let [value, setValue] = useState(1);
    return (
        <div>
            <Typography component="legend">Rating</Typography>
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                //here we can add disabled or readOnly or stuff like that
            />
        </div>
    );
}