import React, { useState } from 'react';
import { useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Navbar from '../../components/navbar';
import './styles.css';


const Game: React.FC = () => {
  const [vidaMonstro, setvidaMonstro] = useState(100);
  const [vidaJogador, setvidaJogador] = useState(100);
  const [log, setLog] = useState([''])

  let partida = true;
  let jogadorAtacou = 0;

  useEffect(()=>{
    setTimeout(ataqueM, 3000);
  },[log])

  function ataqueM(){
    const forcaAtaque = Math.floor(Math.random() * 11) + 7;
    setvidaJogador(vidaJogador-forcaAtaque)
  }

  function ataqueJ(){
    setvidaMonstro(vidaMonstro-1)
    setLog(["Ataque",...log])
  }

  function ataqueEspecialJ(){
    setvidaMonstro(vidaMonstro-15)
    setLog(["Ataque Especial",...log])
  }

  function curaJ(){
    setvidaMonstro(vidaJogador+15)
    setLog(["Cura",...log])
  }  
  function desistir(){
    window.location.reload()
  }  


  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <div className="jogadores">
          <div className="jogador">
            <span>jogador</span>
            <span>{`${vidaJogador}%`}</span>
          </div>
          <div className="monstro">
            <span>monstro</span>
            <span>{`${vidaMonstro}%`}</span>
          </div>
        </div>
        <div className="comandos">
          <span>Comandos</span>
          <div className="botoes">
            <button id="ataque" onClick={ataqueJ}>Ataque</button>
            <button id="ataque-especial" onClick={ataqueEspecialJ}>Ataque especial</button>
            <button id="curar" onClick={curaJ}>Curar</button>
            <button id="desistir" onClick={desistir}>Desistir</button>
          </div>
        </div>
        <div className="log">
          <span>Log</span>
          {
            <ul>
              {log.map((e)=>{return <li >{e}</li>})}
              
            </ul>
          }
        </div>
      </div>
      <ProgressBar animated now={45} />

    </>
  );
}

export default Game;