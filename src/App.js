import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([])

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      <div class="main-content">
        <div class="menu">
        {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
          <div class="BakeryItem">
            <img src={item.image}></img>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <div class="purchase-zone">
              <h4>{item.price}</h4>
              <button onClick={e => setCart([...cart, item])}>Add to Cart</button>
            </div>
          </div> // replace with BakeryItem component
        ))}
        </div>

        <div class="cart">
          <h2>Cart</h2>
          {
            <div>
              Total: <b>${cart.reduce((prev, curr) => parseFloat((prev + parseFloat(curr.price)).toFixed(2)), 0.00)}</b>
            </div>
          }
          {/* TODO: render a list of items in the cart */
            cart.map(x => 
            <p>
              {x.name}: {x.price}
            </p>
            ).reverse()
          }
          
        </div>

      </div>
      
    </div>
  );
}

export default App;
