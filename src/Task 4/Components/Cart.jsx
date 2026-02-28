import '../Components/Cart.styles.css';
import Button from './Button';

export default function Cart({names, price, image, discount}) {
  return (
<>
    <div className="cart">
       <div>
        <center><img src={`${image}`} alt="Image" /></center>
      
      
      <p className='names'>{names}</p><br />

      <p className="price">${price} <span className='strike'>${discount}</span></p> <br />

      <Button />
       </div>
      
    </div>
</>
  );
}