import React from 'react';
import Navbar from '../../components/navbar';
import { Button } from 'react-bootstrap';
import './styles.css';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {

  return (
    <>
      <Navbar></Navbar>
      <div className="card">
        <div className="area">
          <form className="formu">

            <div className='name'>

            <label>Nome do Jogador</label>
            <input type='text'/>
            </div>
            <a href="/game">Iniciar Jogo</a>
            
          </form>
        </div>
      </div>
    </>
  );
}

export default Home;