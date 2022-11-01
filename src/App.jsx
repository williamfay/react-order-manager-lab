import { useState } from 'react'
import './App.css'

function App() {
const [burgerQuantity, setBurgerQuantity] = useState('');
const [friesQuantity, setFriesQuantity] = useState('');
const [shakeQuantity, setShakeQuantity] = useState('');
const [saladQuantity, setSaladQuantity] = useState('');

function handleChange(event, updater) {
  updater(event.target.value)
}

function price(food) {
  if (food === 'burger') {
    '$'+(5 * parseInt(burgerQuantity)).toFixed(2)
  } if (food === 'fries') {
    '$'+(3.5 * parseInt(friesQuantity)).toFixed(2)
  } if (food === 'shake') {
    '$'+(2.75 * parseInt(shakerQuantity)).toFixed(2)
  } if (food === 'salad') {
    '$'+(4.75 * parseInt(saladQuantity)).toFixed(2)
  }
}

  return (
    <div className="App">
      <h2>React Order Manager</h2>
      <form id="order-form">
        <fieldset>
          <legend>Place your order here: </legend>
          <section>
            <label htmlFor="item-burger">Name: Burger, Price: $5.00</label>
            <input
              id="item-burger"
              type="text"
              placeholder="How many hamburgers"
              value={ burgerQuantity }
              onChange={ (event) =>  handleChange(event, setBurgerQuantity)}
            ></input>
          </section>
          <section>
            <label htmlFor="item-fries">Name: Fries, Price: $3.50</label>
            <input
              id="item-fries"
              type="text"
              placeholder="How many fries"
              value={ friesQuantity }
              onChange={ (event) =>  handleChange(event, setFriesQuantity)}
            ></input>
          </section>
          <section>
            <label htmlFor="item-shake">Name: Shake, Price: $2.75</label>
            <input
              id="item-shakes"
              type="text"
              placeholder="How many shakes"
              value={ shakeQuantity }
              onChange={ (event) =>  handleChange(event, setShakeQuantity)}
            ></input>
          </section>
          <section>
            <label htmlFor="item-salad">Name: Salad, Price: $4.75</label>
            <input
              id="item-salads"
              type="text"
              placeholder="How many salads"
              value={ saladQuantity }
              onChange={ (event) =>  handleChange(event, setSaladQuantity)}
            ></input>
          </section>
          <input id="submit-order" type="submit" />
        </fieldset>
      </form>
      <section className="order-items">
        <h2>Order Subtotal:</h2>
        <p class="order-subtotal"></p>
        <ol className="items-list"></ol>
         { burgerQuantity ?
          <li>Burger Quantity: {burgerQuantity} - Price: ${(5 * parseInt(burgerQuantity)).toFixed(2)}</li>
          : <li>Burger Quantity: None</li>
         }
          <li>Fries Quantity: {friesQuantity} - Price: ${(3.5 * parseInt(friesQuantity)).toFixed(2)}</li>
          <li>Shake Quantity: {shakeQuantity} - Price: ${(2.75 * parseInt(shakeQuantity)).toFixed(2)}</li>
          <li>Salad Quantity: {saladQuantity} - Price: ${(4.75 * parseInt(friesQuantity)).toFixed(2)}</li>
      </section>
    </div>
  );
}

export default App
