import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';


import { useState } from 'react';


export default function TodoList() {
    //is going tob e the stateful value of the textfield
    const [todoText, setTodoText] = useState("")
    //we need an array of todos!
    const [allTodos, setAllTodos] = useState([])

    const onToDoTextChange = (event) => {
        setTodoText(event.target.value)
    }

    const onAddTodoClick = (event) => {
        //add it to the array of allTodos
        console.log("Before")
        console.log(allTodos)

        let newAllTodos = [todoText, ...allTodos]

        console.log("After")
        console.log(newAllTodos)

        //save it to the stateful allTodos
        setAllTodos(newAllTodos)

        //reset the todoText value
        setTodoText("")
    }

    return <Box sx={{flexGrow: 1}}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant='h2'>
                    Our To Do List.
                </Typography>
            </Grid>
            {/**Put a textfield **/}
            <Grid item xs={10}>
                <TextField 
                fullWidth
                id="todo-text" 
                label="New To Do Task"
                variant="filled"
                onChange={onToDoTextChange}
                value={todoText}
                />
            </Grid>
            <Grid item xs={2}>
                <Button 
                variant="contained" 
                size="large"
                onClick={onAddTodoClick}
                >
                    Add To Do
                </Button>
            </Grid>
            <Grid item xs={12}>
                <List>
                    {allTodos.map((todoItem, index) => {
                        return <ListItem key={index}>
                                <ListItemText primary={todoItem}/>
                                <Divider />
                            </ListItem>

                    })}
                </List>
            </Grid>
        </Grid>
    </Box>
}