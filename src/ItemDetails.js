import {Link, useHistory, useParams} from "react-router-dom";
import useFetch from "./useFetch";
import {useState} from "react";

const ItemDetails = () => {
  const { id } = useParams();
  const { data: item, error, isPending } = useFetch('https://localhost:8000/items/' + id);
  // const { data: item, error, isPending } = useFetch('https://my-json-server.typicode.com/jessicachen0403/PBLWebsite2022/items/' + id);
  // const history = useHistory();
  const [purchased, setPurchased] = useState(false);

  const handleClick = () => {
    fetch('https://localhost:8000/items/' + item.id, {
    // fetch('https://my-json-server.typicode.com/jessicachen0403/PBLWebsite2022/items/' + item.id, {
      method: 'DELETE'
    }).then(() => {
      // history.push('/');
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
          <p>Seller: { item.seller }</p>
          <p>Price: { item.price }</p>
          <p>Description: { item.description }</p>
          { !purchased && <button onClick={handleClick}>Purchase</button>}
          { purchased && <button disabled>Purchased Successful</button>}
          <Link to="/">Back Home</Link>
        </article>
      )}
    </div>
  );
}
 
export default ItemDetails;