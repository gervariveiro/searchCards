import React, { useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import ScrollRact from '../assets/Scroll.JPG';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Searcher() {

const [searchText, setSearchText] = useState("");
const [cardData, setCardData] = useState(searchForCard);




function searchForCard(event) {
 // probar evento click console.log("HELLO");

const API_KEY = `https://api.magicthegathering.io/v1/cards?name=${searchText}`;

//axios get api

axios.get(API_KEY).then(function(response) { 
  //exito
  console.log(response.data); //con arreglo sin setear el estado cardData
/********************************************************************************************************************* */
    //const arrayClear = []
    // response.data.cards.map((item)=>{     /******mapeamos lo que llega de la api */
    //   if (item.imageUrl !== undefined) {   /******condicional si tiene la imagen o no */
    //     arrayClear.push(item)             /******si la imagen se ecuentra lo agrega a un array limpio */
    //   }
    // })
    // console.log(arrayClear)               /******este es el array limpio te lo dejo ahi para que lo metas al estado y ya solo renderiza cartas que tengan imagen */   
    
    const cardsFilter = response.data.cards.filter((item)=>item.imageUrl !== undefined) /****** */  
    console.log(cardsFilter)               /****** */  
    
    
 /********************************************************************************************************************* */ 
  
  setCardData(cardsFilter);
  //console.log(cardData);
  

}).catch(function (error) {
  console.log(error);
});

}




//console.log(searchText) console log para controlar lo escrito en el input.

  return (
    <Container className='justify-content-md-center'>
      <h3 className="my-5 justify-content-center title pt-5">¿Qué carta te gustaría encontrar?</h3>
      <img className='pb-5 scrollImg' alt='' src={ScrollRact}/>
      <p className="title2 py-4">Proyecto de portfolio. Utilizando React y axios para realizar consultas
         a una api externa. <br></br> El resultado muestra distintas versiones de la carta.</p>
      <Form.Control className="my-2 inputName" type="text"  name="name" onChange={e => setSearchText(e.target.value)} placeholder="Ingresa aquí tu consulta" />
      <Button variant="primary" className='my-3' type="submit" onClick={e => searchForCard(e)}>
        Buscar Carta
      </Button>

      {searchText !== ("") ?
          <ul> 
          {cardData.map((data) => {
//slice(0,1) 
console.log(data.imageUrl)
          return<li>
          <ul>
            <li>
              <Card className="d-inline">
                <Card.Title className='title'>{data.name}</Card.Title>
                <img className="cardImage" variant="top" src={data.imageUrl} alt="" />
                <p className='title2 mt-3'>{data.text}</p>
              </Card>       
              </li>
            </ul>
          </li>
        })}
    </ul>
  
      :
       <></>
      }

    </Container>
  );
}

export default Searcher;

