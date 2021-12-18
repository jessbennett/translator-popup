import React from 'react';
// import { UserCard } from 'react-ui-cards';

function Card({ card }) {
  return (
    <div className='flip-card-outer'>
      <div className='flip-card-inner'>
        <div className='card front'>
          <div className='card-body d-flex justify-content-center align-items-center'>
            <p className='card-text fs-1 fw-bold'>{card.front}</p>
          </div>
        </div>
        <div className='card back'>
          <div className='card-body d-flex justify-content-center align-items-center'>
            <p className='card-text fs-1 fw-bold'>{card.back}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
