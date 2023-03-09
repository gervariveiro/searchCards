import React, { useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Searcher() {

const [searchText, setSearchText] = useState("");
const [cardData, setCardData] = useState(searchForCard);
const [inputText, setInputText] = useState("");

const handleInputChange = (e) => {
  const text = e.target.value
  setInputText(text);
  console.log(inputText);
}

const saveData = ()  => {
  localStorage.setItem("ck", inputText);
  console.log("se ha guardado CK")
}


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
    <Container>
      <h3 className="my-5 justify-content-center">Buscador de cartas</h3>
      <Form.Control className="my-2 inputName" type="text" name="name" onChange={e => setSearchText(e.target.value)} placeholder="Nombre de la carta" />
      <Button variant="primary" className='my-3' type="submit" onClick={e => searchForCard(e)}>
        Buscar Carta
      </Button>

      {searchText !== ("") ?
          <ul> 
          {cardData.slice(0,1).map((data) => {
//slice(0,1) 
console.log(data.imageUrl)
          return<li>
          <ul>
            <li>
            <Card className="d-inline">
              <Card.Title>{data.name}</Card.Title>
              <Card.Img className="cardImage" variant="top" src={data.imageUrl} />
              <p>{data.text}</p>
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

