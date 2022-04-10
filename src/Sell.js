import { useState } from "react";
import { useHistory } from "react-router-dom";

const Sell = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [seller, setSeller] = useState('');
  const [price, setPrice] = useState();
  const [image, setImage] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { seller, name, image, price, description };

    fetch('http://localhost:8000/items/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item)
    }).then(() => {
      // history.go(-1);
      history.push('/');
    })
  }

  return (
    <div className="sell">
      <h2>Want to Sell Something?</h2>
      <form onSubmit={handleSubmit}>
        <label>Name of Item:</label>
        <input 
          type="text" 
          required 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Seller's name:</label>
        <input
          required
          value={seller}
          onChange={(e) => setSeller(e.target.value)}
        ></input>
        <label>Product Description:</label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label>Upload Image:</label>
        <input
          required
          value={image}
          onChange={(e) => setImage(e.target.value)}
        ></input>
        <button>Sell</button>
      </form>
    </div>
  );
}
 
export default Sell;