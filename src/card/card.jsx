import './card.css';

function Card({product, price, brand, id}) {
  return (
    <li className="card">
      <h3 className='card__product'>{product || 'Неизвестно'}</h3>
      <p className='card__price'>{price || 'Неизвестно'}</p>
      <p className='card__brand'>{brand || 'Неизвестно'}</p>
      <span className='card__id'>{id || 'Неизвестно'}</span>
    </li>
  );
}

export default Card;