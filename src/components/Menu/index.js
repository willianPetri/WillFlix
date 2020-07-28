import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png';
import './index.css'; 
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="logo"/>
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  )
}

export default Menu;