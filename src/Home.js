import ItemCard from "./ItemCard";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: items } = useFetch('https://my-json-server.typicode.com/jessicachen0403/PBLWebsite2022/items')

  return (
    <div className="home">
      <h2>Trending Today</h2>
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { items && <ItemCard items={items} /> }
    </div>
  );
}
 
export default Home;
