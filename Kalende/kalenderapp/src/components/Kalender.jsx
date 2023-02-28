import React from 'react';

const Kalender = () => {
  return (
    <div className='kalender'>
   <h1>Termine</h1>
   <div className='tabl'>
   <p className='item'>Titel</p>
      <p className='item'>Datum</p>
      <p className='item'>Uhr von</p>
      <p className='item'>Uhr bis</p>
      <p className='item'><button>löchen</button></p>
   </div>
   <span>es gibt keine Termine</span>
    </div>
  );
}

export default Kalender;
