import Card from '../card/card';
import './main.css';


function Main({cards}) {
  const cardList = cards.map((card) => (
    <Card
      {...card}
      key={card.id}
    />
  ))

  console.log(cardList)
  return (
    <main className="main">
      {/* <div></div> Это будет фильтр*/}
      <ul className='main__card-list'>
        {cardList}
      </ul>
      {/* <div></div> Это будет кнопка для переключения страниц*/}
    </main>
  );
}

export default Main;
