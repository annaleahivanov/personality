import React from 'react';
import styles from './Card.module.css'

const Card = ({ options, selectedOption, onSelect }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      {options.map((option) => (
        <button
          key={option}
          className={`${styles.Card} ${selectedOption === option ? styles.selected : ''} ${styles.cardButton}`}
          onClick={() => onSelect(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Card;