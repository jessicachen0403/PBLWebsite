import ItemCard from "./ItemCard";
import useFetch from "./useFetch";
import {useEffect} from "react";

const Home = () => {
  // const { error, isPending, data: items } = useFetch('http://localhost:8000/items/');
  const { error, isPending, data: items } = useFetch('http://my-json-server.typicode.com/jessicachen0403/PBLWebsite2022/items/');

  useEffect( () => {
        window.scrollTo(0, 0);
    }, [])

  return (
    <div className="home">
      <h2>Trending Today!</h2>
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { items && <ItemCard items={items} /> }
    </div>
  );
}
 
export default Home;
