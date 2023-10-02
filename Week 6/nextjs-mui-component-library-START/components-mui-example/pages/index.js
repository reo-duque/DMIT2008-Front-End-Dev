import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

const COMPONENTS_USED = [
  "Box",
  "Container",
  "Grid",
  "Typography",
  "List",
  "ListItem",
  "ListItemText"
]

export default function Home() {
  return (
    <main>
      <Container>
        <Box
          sx={{ bgcolor: '#cfe8fc', height: '100vh' }}
          >
            <Typography variant="h1">
              Learning how to use MUI.
            </Typography>
            <Grid container>
              <Grid Item xs={4}>
                <List>
                  {COMPONENTS_USED.map((componentName) => {
                    return <ListItem>
                      <ListItemText primary={componentName} />
                    </ListItem>
                  })}
                </List>
              </Grid>
              <Grid Item xs ={8}>
                <Button variant="contained">Contained</Button>
              </Grid>
            </Grid>
          </Box>
      </Container>
    </main>
  )
}
