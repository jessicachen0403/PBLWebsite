import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const ItemDetails = () => {
  const { id } = useParams();
  const { data: item, error, isPending } = useFetch('https://my-json-server.typicode.com/jessicachen0403/PBLWebsite2022/items/' + id);
  const history = useHistory();

  const handleClick = () => {
    fetch('https://my-json-server.typicode.com/jessicachen0403/PBLWebsite2022/items/' + item.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
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
          <button onClick={handleClick}>Purchase</button>
        </article>
      )}
    </div>
  );
}
 
export default ItemDetails;