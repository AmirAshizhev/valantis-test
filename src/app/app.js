import { useEffect, useState } from 'react';
import api from '../api';
import Main from '../main/main';
import './app.css';

function App() {

  const [cardsIdsArray, setCardsIdsArray] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getCardsIds()
      .then((data) => {
        console.log(data)
        setCardsIdsArray(data.result)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    api.getCardsByIds(cardsIdsArray)
      .then((data) => {
        console.log(data)
        setCards(data.result)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [cardsIdsArray])

  console.log(cards)

  return (
    <div className="App">
      <Main
        cards={cards}
      />
    </div>
  );
}

export default App;
