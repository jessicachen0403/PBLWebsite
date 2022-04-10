import { Link } from 'react-router-dom';
import {Card} from "react-bootstrap";

const ItemCard = ({ items }) => {
  return (
    <div className="item-list">
      {items.map(item => (
        <div className="item-cards" key={item.id}>
          <Link to={`/items/${item.id}`}>
            <Card>
              <Card.Img src={ item.image }/>
              <Card.Text>Seller: { item.seller }</Card.Text>
              <Card.Text>Price: { item.price }</Card.Text>
            </Card>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default ItemCard;