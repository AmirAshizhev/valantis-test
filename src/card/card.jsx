import './card.css';

function Card() {
  return (
    <li className="card">
      <h3 className='card__product'>Название продукта</h3>
      <p className='card__price'>16700.00</p>
      <p className='card__brand'>Бренд</p>
      <span className='card__id'>1789ecf3-f81c-4f49-ada2-83804dcc74b0</span>
    </li>
  );
}

export default Card;