import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/pages/landing.css';

import logoImg from '../images/logo.svg';
import arrowRightImg from '../images/arrow-right.svg';

function Landing() {
  return (
    <div id='page-landing'>
      <div className='content-wrapper'>
        <img src={logoImg} alt='Happy' />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className='location'>
          <strong>Uberlândia</strong>
          <span>Minas Gerais</span>
        </div>

        <Link to='/app' className='enter-app'>
          <img src={arrowRightImg} alt='Arrow Right' />
        </Link>
      </div>
    </div>
  );
}

export default Landing;
