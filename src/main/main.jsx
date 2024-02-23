import Card from '../card/card';
import './main.css';

function Main() {
  return (
    <main className="main">
      {/* <div></div> Это будет фильтр*/}
      <ul className='main__card-list'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </ul>
      {/* <div></div> Это будет кнопка для переключения страниц*/}
    </main>
  );
}

export default Main;
