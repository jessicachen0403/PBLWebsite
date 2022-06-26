import {Link, useHistory, useParams} from "react-router-dom";
import useFetch from "./useFetch";
import {useState} from "react";
import {AiOutlineMail} from "react-icons/all";
import PurchaseForm from "./PurchaseForm";
import Popup from "./Popup";

const ItemDetails = () => {
  const { id } = useParams();
  const { data: item, error, isPending } = useFetch('http://localhost:8000/items/' + id);
  // const { data: item, error, isPending } = useFetch('https://my-json-server.typicode.com/jessicachen0403/PBLWebsite2022/items/' + id);
  // const history = useHistory();
  const [purchased, setPurchased] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
    handlePurchase();
  }

  const handlePurchase = () => {
    fetch('http://localhost:8000/items/' + id, {
    // fetch('https://my-json-server.typicode.com/jessicachen0403/PBLWebsite2022/items/' + item.id, {
      method: 'DELETE'
    }).then(() => {
      setPurchased(true);
      window.scrollTo(0, 0);
    })
  }

  return (
    <div className="item-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { item && (
        <article>
          <h2>{ item.name }</h2>
          <img src={ item.image } alt={ item.name }/>
          <span>
            <p>Seller: { item.seller } <AiOutlineMail /></p>
          </span>
          <p>Price: { item.price }</p>
          <p>Description: { item.description }</p>
          { !purchased && <button onClick={togglePopup}>Purchase</button>}
          { isOpen && <Popup content={<PurchaseForm id={item.id} setPurchased={setPurchased} handlePurchase={handlePurchase}/>} handleClose={togglePopup}/>}
          { purchased && <button disabled>Purchased Successful</button>}
          <Link to="/">Back Home</Link>
        </article>
      )}
    </div>
  );
}
 
export default ItemDetails;