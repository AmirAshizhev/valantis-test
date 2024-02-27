import { useEffect, useState } from 'react';
import api from '../api';
import Main from '../main/main';
import './app.css';

function App() {

  const [cardsIdsArray, setCardsIdsArray] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getInitialCardsIds()
      .then((data) => {
        console.log(data)
        setCardsIdsArray(data.result)
      })
      .catch((err) => {
        console.log(err)
      })
  }, []) //TODO посмотреть, иногда возвращается пустой массив карточек

  useEffect(() => {
    if (cardsIdsArray.length === 0){
      return
    }

    api.getCardsByIds(cardsIdsArray)
      .then((data) => {
        console.log(data)
        setCards(filterArrayMakingUniqueId(data.result))
      })
      .catch((err) => {
        console.log(err)
      })
  }, [cardsIdsArray])

  function filterArrayMakingUniqueId(arr){
    return arr.reduce(
      (acc, arrItem) => {
        const existingObj = acc.find(item => item.id === arrItem.id);
        if (!existingObj) {
            return [...acc, arrItem];
        }
        return acc;
      }, [])
  }


  console.log(cards.length)
  return (
    <div className="App">
      <Main
        cards={cards}
        setCardsIdsArray={setCardsIdsArray}
      />
    </div>
  );
}

export default App;
