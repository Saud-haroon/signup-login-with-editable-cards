import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

const Note = ({ id ,text , HandleDelete }) => {
    let InitialData = {
        text: "",            
    }

    const [data, setdata] = useState(InitialData)

  

    const onChangeHandler = (e) => {
        let name = e.target.name
        let value = e.target.value

        setdata({ ...data, [name]: value })
    }

    return (
        <Card sx={{ maxWidth: 345, backgroundColor: 'lightgray' }}>

            <CardContent>
                <TextareaAutosize
                    aria-label="empty textarea"
                    placeholder="Empty"
                    name='text'
                    style={{ width: 200,backgroundColor: 'lightgray', border: 'none', resize: 'none' }}
                    value={data.text ? data.text : text}
                    // onChange={onChangeHandler}
                />

            </CardContent>
            <CardActions>
                <IconButton  onClick={() => HandleDelete(id)}  aria-label="delete" >
                    <DeleteIcon />
                </IconButton>                
            </CardActions>
        </Card>
    )
}

export default Note