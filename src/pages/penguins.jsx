import React from 'react'
import Link from 'gatsby-link'
import data from '../data/penguinCardData'
import PenguinCard from '../components/penguinCard'
import { getHashedHex } from '../utils'

const styles = {
  cardsContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    alignContent: 'space-between',
  },
}

const CardsPage = () => (
  <div>
    <h1>Wow Penguins!</h1>
    <div css={styles.cardsContainer}>
      {data.map(card => (
        <PenguinCard {...card} key={card.title} />
      ))}
    </div>
  </div>
)

export default CardsPage
