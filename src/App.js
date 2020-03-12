import React,{useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Frase from './component/Frase';

var Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5m;
  flex-direction: column;
`;

var Boton = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover{
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {

  //State de frases
  var[frase, guardarFrase] = useState({});

  var consultarApi = async () =>{

    var api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    var frase = await api.json();
    guardarFrase(frase[0]);
  
  }

  //Cargar una frase

  useEffect(() => {
    consultarApi()
  },[]);
    
  return (
    <Contenedor>

    <Frase

      frase={frase}
    />
     <Boton
     onClick={consultarApi}
     >
       Obtener Frase
     </Boton>
     </Contenedor>
  );
}


export default App;
