import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/components/sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <aside className='app-sidebar'>
      <Link to='/'>
        <img src={mapMarkerImg} alt='Happy' />
      </Link>

      <footer>
        <Link to='/app'>
          <FiArrowLeft size={24} color='#FFF' />
        </Link>
      </footer>
    </aside>
  );
};

export default Sidebar;
