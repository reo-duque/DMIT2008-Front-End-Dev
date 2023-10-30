import { postReview } from '../utils/reviews';

import { useState } from "react"


import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';


export default function AdaptationReviewForm(props) {
    const [title, setTitle] = useState("")
    const [rating, setRating] = useState("")
    const [comment, setComment] = useState("")
    
    const handleSubmit = async (event) =>
    {
      event.preventDefault();
  
      const postData = await postReview({
        title: title, 
        comment: comment, 
        rating: rating
      })
  
      //we passed state in as a prop from our parent component
      const newReviews=[...props.reviews, postData]
      props.setReviews(newReviews)
  
      setTitle("")
      setComment("")
      setRating("")
    }

    return <form
        onSubmit={handleSubmit}
        >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <TextField
            id="title"
            name="title"
            label="Adaptation Title"
            fullWidth
            variant="standard"
            onChange={(event)=> {
              setTitle(event.target.value)
            }}
            value={title}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            id="review-comments"
            name="review-comments"
            label="Comments"
            fullWidth
            variant="standard"
            onChange={(event)=> {
              setComment(event.target.value)
            }}
            value={comment}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <FormControl>
            <FormLabel id="adaptation-rating">Rating</FormLabel>
            <RadioGroup
              row
              aria-labelledby="adaptation-rating"
              name="rating-buttons-group"
              value={rating}
              onChange={(event) => {
                setRating(event.target.value)
              }}
            >
              <FormControlLabel value={1} control={<Radio />} label="1" />
              <FormControlLabel value={2} control={<Radio />} label="2" />
              <FormControlLabel value={3} control={<Radio />} label="3" />
              <FormControlLabel value={4} control={<Radio />} label="4" />
              <FormControlLabel value={5} control={<Radio />} label="5" />
              <FormControlLabel value={6} control={<Radio />} label="6" />
              <FormControlLabel value={7} control={<Radio />} label="7" />
              <FormControlLabel value={8} control={<Radio />} label="8" />
              <FormControlLabel value={9} control={<Radio />} label="9" />
              <FormControlLabel value={10} control={<Radio />} label="10" />
            </RadioGroup>
         </FormControl>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Button
            variant="contained"
            type="submit"
          >
            Add New Review
          </Button>
        </Grid>
      </Grid>
      </form>
}