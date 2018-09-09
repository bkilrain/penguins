import React from 'react'

const styles = {
  penguinCard: {
    position: 'relative',
    display: 'inline-block',
    margin: '40px',
    border: 'black 2px solid',
    borderRadius: '2.8em',
  },
  title: {
    padding: '0 1.8em',
    textAlign: 'center',
    fontFamily: 'serif',
  },
  image: {
    margin: '8px',
    width: '19.5em',
  },
  captionContainer: {
    margin: 'auto',
    width: '19em',
    height: '4em',
    overflow: 'scroll',
  },
  rating: {
    position: 'absolute',
    bottom: '15px',
    right: '25px',
  },
}

const PenguinCard = ({
  url,
  text,
  rating,
  title,
  backgroundColor = '#00000',
}) => (
  <div css={styles.penguinCard} style={{ backgroundColor }}>
    <h3 css={styles.title}>{title}</h3>
    <figure>
      <img css={styles.image} src={url} alt={title} />
      <div css={styles.captionContainer}>
        <figcaption>{text}</figcaption>
      </div>
    </figure>
    <div css={styles.rating}>
      <p className={rating}>{`${rating}/5`}</p>
    </div>
  </div>
)

export default PenguinCard
