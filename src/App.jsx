import { useState } from 'react'
import './App.css'

function App() {

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
              value="0"
            ></input>
          </section>
          <section>
            <label htmlFor="item-fries">Name: Fries, Price: $3.50</label>
            <input
              id="item-fries"
              type="text"
              placeholder="How many fries"
              value="0"
            ></input>
          </section>
          <section>
            <label htmlFor="item-shake">Name: Shake, Price: $2.75</label>
            <input
              id="item-shakes"
              type="text"
              placeholder="How many shakes"
              value="0"
            ></input>
          </section>
          <section>
            <label htmlFor="item-salad">Name: Salad, Price: $4.75</label>
            <input
              id="item-salads"
              type="text"
              placeholder="How many salads"
              value="0"
            ></input>
          </section>
          <input id="submit-order" type="submit" />
        </fieldset>
      </form>
      <section className="order-items">
        <h2>Order Subtotal:</h2>
        <p class="order-subtotal"></p>
        <ol className="items-list"></ol>
      </section>
    </div>
  );
}

export default App
