import { useState } from 'react';
import api from '../api';
import Card from '../card/card';
import PageBtn from '../page-btn/page-btn';
import './main.css';


function Main({cards, setCardsIdsArray, setCards, loading, setLoading}) {

  const [pageCount, setPageCount] = useState(1)

  const cardList = cards.map((card) => (
    <Card
      {...card}
      key={card.id}
    />
  ))

  function getNextPage() {
    setLoading(true)
    setCards([])
    setPageCount(pageCount + 1)

    api.getPageCardsIdsByPageNumber(pageCount)
    .then((data) => {
      console.log(data)
      setCardsIdsArray(data.result)
    })
    .catch((err) => {
      console.log(err)
    })

  }

  function getPrevPage() {
    setLoading(true)
    setCards([])
    if(pageCount === 1) {
      return
    }
    setPageCount(pageCount - 1)
    api.getPageCardsIdsByPageNumber(pageCount)
    .then((data) => {
      console.log(data)
      setCardsIdsArray(data.result)
    })
    .catch((err) => {
      console.log(err)
    })

  }

  console.log(pageCount)

  return (
    <main className="main">
      {/* <div></div> Это будет фильтр*/}
      {loading ? 
      <div>
        Грузим карточки. Терпение.
      </div>
      :
      <ul className='main__card-list'>
        {cardList}
      </ul>
      }
      <div className='main__btns'>
        <PageBtn
          text={"< Предыдущая"}
          onBtnClick={getPrevPage}
        />
        <PageBtn
          text={"Следующая >"}
          onBtnClick={getNextPage}
        />
      </div>
    </main>
  );
}

export default Main;
