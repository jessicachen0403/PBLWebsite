const PurchaseForm = ({id, setPurchased, handlePurchase}) => {
  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log("here");
    // fetch('http://localhost:8000/items/' + id, {
    // // fetch('https://my-json-server.typicode.com/jessicachen0403/PBLWebsite2022/items/' + item.id, {
    //   method: 'DELETE'
    // }).then(() => {
    //   handlePurchase();
    // })
  }

  return (
    <div className="sell">
      {/*<form onSubmit={handleSubmit}>*/}
        <label>Name:</label>
        <input
          type="text"
          required
        />
        <label>Credit Card Number:</label>
        <input
          required
        ></input>
        <label>Expiration Date:</label>
        <input
          required
        ></input>
        <label>CVV:</label>
        <input
          required
        ></input>
        <button onSubmit={handleSubmit}>Confirm Purchase</button>
      {/*</form>*/}
    </div>
  );
}

export default PurchaseForm;