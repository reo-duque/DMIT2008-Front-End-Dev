import { deleteReview } from '../utils/reviews';
import { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

//props is an object here
export default function AdaptationReviewCard(props) {

    const handleDeleteData = async () => {
      await deleteReview(props.id)

      const newReviews = props.reviews.filter((adaptation) => {
        return adaptation.id !== props.id
      })
      props.setReviews(newReviews)
    }

    //do something on the removal of the text
    useEffect(() => {
      //return the callback for unmounting.
      return () => {
        console.log(`removed ${props.title}`)
      }
    }, [])

    return <Card>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: 'blue' }} aria-label="recipe">
          {props.rating}
        </Avatar>
      }
      
      action={
        <IconButton onClick={handleDeleteData}>
          <DeleteForeverIcon />
        </IconButton>
      }

      title={
        <Typography variant="body2" color="text.secondary">
          {props.title}
        </Typography>
      }
      
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        {props.comment}
      </Typography>
    </CardContent>
  </Card>
}