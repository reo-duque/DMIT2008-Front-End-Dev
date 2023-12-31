import {useState, useEffect} from 'react'

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Container from '@mui/material/Container';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { getRandomQuote } from '../utils/api/quotes';

export default function Home() {
  const RANDOM_QUOTE_URL = 'https://api.quotable.io/random'
  const [quoteData, setQuoteData] = useState({
    quote: "Quote here.",
    author: "Author here"
  })
  //count the number of times I've loaded a quote
  const [quoteCount, setQouoteCount] = useState(0)

  //when the page is loaded I want to fetch a quote
  useEffect(() => {
    loadNewRandomQuote()
  }, [])

  //listen to Quote Data, when it fires, change the quote count to the number loaded

  const loadNewRandomQuote = async () => {
    //this is how you get the random quote data
    const data = await getRandomQuote()
    // set the state of the page
    setQuoteData({
      quote: data.content,
      author: data.author
    })
    setQouoteCount(quoteCount + 1)
  }

  return (
    <div>
      <Head>
        <title>We Love Quotes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            We Love Quotes
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container maxWidth="sm">
          <Box
            sx={{
              bgcolor: 'background.paper',
              pt: 8,
              pb: 6,
            }}
          >
            <Typography variant="h5" align="center" color="text.primary" paragraph>
              {quoteData.quote}
            </Typography>
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="text.secondary"
              gutterBottom
            >
              {quoteData.author}
            </Typography>
            <Typography>
              {quoteCount}
            </Typography>
            <Box
             display="flex"
             justifyContent="center"

            >
              <Button
                variant="contained"
                onClick={loadNewRandomQuote}
              >
                Get New Quote
              </Button>
            </Box>
          </Box>
        </Container>
      </main>
    </div>
  )
}
