import { getReviews } from '../utils/reviews';

import { useState, useEffect } from 'react'

import Head from 'next/head'
import Image from 'next/image'

import Navbar from '../components/Navbar';

import AdaptationReviewCard from '../components/AdaptationReviewCard';
import AdaptationReviewForm from '../components/AdaptationReviewForm';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import CardMedia from '@mui/material/CardMedia';

import Container from '@mui/material/Container';

import InputLabel from '@mui/material/InputLabel';

export default function Home() {
  const [reviews, setReviews] = useState([])
  
  const MOCK_ADAPTATION_RATING = [{
    'title': 'Fight Club',
    'comment': 'Great movie and book',
    'rating': 10
  }]

  const loadAllCurrentReviews = async () => {
    const reviewData = await getReviews()
    setReviews(reviewData)
  }

  // effect fired on mounting of the component.
  useEffect(() => {
    loadAllCurrentReviews()
  }, [])

  return (
    <div>
      <Head>
        <title>Adaptation Reviews.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar title={"Adaptation Reviews App"}/>
      <main>
        <Container maxWidth="md">
          <AdaptationReviewForm
            reviews = {reviews}  
            setReviews={setReviews}
            />
          {reviews.map((adaptation)=> {
            return <AdaptationReviewCard
              key={adaptation.id}
              id={adaptation.id}
              title={adaptation.title}
              rating={adaptation.rating}
              comment={adaptation.comment}
              reviews={reviews}
              setReviews={setReviews}
            />
          })}

        </Container>
      </main>
    </div>
  )
}
