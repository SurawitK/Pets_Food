// import React from 'react';
import styles from './Footer.module.css'

function Footer() {
  const img = 'https://source.unsplash.com/random'
  return (
    <div className={styles.abc}>
      Footer
      <button
        type='button'
        style={{
          color: 'green',
          padding: '20px',
          border: '1px solid',
          backgroundImage: `url(${img})`,
        }}
      >
        Click meh!
      </button>
    </div>
  )
}

export { Footer }
