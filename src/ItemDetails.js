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
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { item && (
        <article>
          <h2>{ item.title }</h2>
          <p>Written by { item.author }</p>
          <div>{ item.body }</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
}
 
export default ItemDetails;