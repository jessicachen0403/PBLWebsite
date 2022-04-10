import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const ItemDetails = () => {
  const { id } = useParams();
  const { data: item, error, isPending } = useFetch('http://localhost:8000/shop/' + id);
  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:8000/shop/' + item.id, {
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