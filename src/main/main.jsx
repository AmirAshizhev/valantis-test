import Card from '../card/card';
import PageBtn from '../page-btn/page-btn';
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
      <div className='main__btns'>
        <PageBtn
          text={"Предыдущая"}
          onBtnClick={console.log('Вернуться на предыдущую страницу')}
        />
        <PageBtn
          text={"Следующая"}
          onBtnClick={console.log('Выйти на следующую страницу')}
        />
      </div>
    </main>
  );
}

export default Main;
