import React from 'react';
import Navbar from '../../components/navbar';
import { Button } from 'react-bootstrap';
import './styles.css';

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
            <Button type='submit'>iniciar jogo</Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Home;