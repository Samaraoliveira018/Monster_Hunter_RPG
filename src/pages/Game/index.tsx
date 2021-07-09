import React, { useState } from 'react';
import { useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Navbar from '../../components/navbar';
import './styles.css';


const Game: React.FC = () => {
  const [vidaMonstro, setvidaMonstro] = useState(100);
  const [vidaJogador, setvidaJogador] = useState(100);
  const [pontos, setPontos] = useState(0);
  const [log, setLog] = useState([''])

  let partida = true;
  

  useEffect(() => {
    
      
    
    setTimeout(()=>setLog(["ataqueM",...log]) ,3000);
    console.log(log)
  }, [pontos])

  function ataqueM() {
    
    const forcaAtaque = Math.floor(Math.random() * 11) + 7;
    setvidaJogador(vidaJogador - forcaAtaque)
    
  }

  function ataqueJ() {
    setvidaMonstro(vidaMonstro - 1)
    setLog(["Ataque", ...log])
    setTimeout(()=>{ataqueM();} ,3000);
    setPontos(pontos+1)
  }

  function ataqueEspecialJ() {
    setvidaMonstro(vidaMonstro - 15)
    setLog(["Ataque Especial", ...log])
    setTimeout(ataqueM, 3000);
    setPontos(pontos+1)
  }

  function curaJ() {
    setvidaMonstro(vidaJogador + 15)
    setLog(["Cura", ...log])
    setTimeout(ataqueM, 3000);
    setPontos(pontos+1)

  }
  function desistir() {
    window.location.reload()
  }


  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <div className="jogadores">
          <div className="jogador">
            <span>Jogador</span>
            <span style={{background: `linear-gradient(90deg, rgba(0,180,0,1) ${vidaJogador}%, rgba(255,255,255,1),0%, rgba(255,255,255,1) 100%)`}}>{`${vidaJogador}%`}</span>
            {/* <span >{`${vidaJogador}%`}</span> */}
          </div>
          <div className="monstro">
            <span>Monstro</span>
            <span style={{background: `linear-gradient(90deg, rgba(0,180,0,1) ${vidaMonstro}%, rgba(255,255,255,1),0%, rgba(255,255,255,1) 100%)`}}>{`${vidaMonstro}%`}</span>
          </div>
        </div>
        <div className="comandos">
          <span>Comandos</span>
          <div className="botoes">
            <button id="ataque" onClick={ataqueJ}>Ataque </button>
            <button id="ataque-especial" onClick={ataqueEspecialJ}>Ataque especial</button>
            <button id="curar" onClick={curaJ}>Curar</button>
            <button id="desistir" onClick={desistir}>Desistir</button>
          </div>
        </div>
        <div className="log">
          <span>Log</span>
          {
            <ul className="text">
              {log.map((e) => {
                if(e=='Ataque'){
                  return <li className="logAt">{e}</li>
                }
                if(e=='Ataque Especial'){
                  return <li className="logAtEsp">{e}</li>
                }
                if(e=='Cura'){
                  return <li className="logCura">{e}</li>
                }
                
                  if (e=='ataqueM'){
                  return <li className="logMons">{e}</li>
                  }
                return <li>{e}</li>
              })
              }

            </ul>
          }
        </div>
      </div>
      <ProgressBar animated now={45} />

    </>
  );
}

export default Game;