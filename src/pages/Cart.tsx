import { useState } from "react";

function Cart() {

  function Cart() {
    const [orderRows, setOrderRows] = useState(JSON.parse(localStorage.getItem("cart") || "[]"));
  }

  // TODO: frontendis andmemudelid korda
  // lisame tellimusi backendi
  // toote kustutamine ostukorvist
  // suurenda ja vähenda kogust ostukorvis
  // URLi muutuja --> edit product ja product details

  return (
    <div>
      {orderRows.map(orderRow =>
        <div key={orderRow.product.id}>
          <div>{orderRow.product.name}</div>
          <div>{orderRow.product.price}€</div>
          <div>{orderRow.quantity}tk</div>
          <div>{orderRow.product.price * orderRow.quantity}€</div>
        </div>
      )}
    </div>
  )
}



export default Cart