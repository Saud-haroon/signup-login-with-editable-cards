
import { Button, Grid, Paper } from '@mui/material'
import React,{useEffect} from 'react'
import Note from '../components/Note'
import AddNote from '../components/AddNote'
import { useNavigate } from 'react-router-dom'


const NoteList = ({notes, AddNewNote, deleteNote}) => {
    let navigate = useNavigate();

    

    const HandleLogOut = () => {
        localStorage.removeItem('loginData')
        navigate(`/login`)
    }

    useEffect(() =>{
        let loginDetails = localStorage.getItem('loginData')
        console.log(loginDetails);
        if(!loginDetails){
            navigate(`/login`)
        }
    })



    return (
        <>
            <Button onClick={HandleLogOut} variant='outlined' sx={{marginLeft: 140, marginTop: 5}}>
                LogOut
            </Button>
            <Paper sx={{ margin: 10 }}>
                <Grid container spacing={2}>
                    {notes.map((item, index) => (
                        <Grid key={index} item xs={4}>
                            <Note text={item.text} HandleDelete={deleteNote} id={item.id} />
                        </Grid>
                    )
                    )}
                    <Grid item xs={4}>
                        <AddNote AddNewNote={AddNewNote}/>
                    </Grid>
                </Grid>
            </Paper>

        </>
    )
}

export default NoteList