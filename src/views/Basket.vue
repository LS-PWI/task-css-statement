<template>
  <main>
    <h1>Basket</h1>
    <p>Free delivery and free returns</p>

    <div>
      <table>
        <colgroup>
          <col class="column1">
          <col class="column2">
          <col class="column3">
          <col class="column4">
          <col class="column5">
          <col class="column6">
        </colgroup>
        <thead>
        <tr>
          <th>Image</th>
          <th>Product</th>
          <th>Price</th>
          <th>Units</th>
          <th>Total</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td><img
              src="https://assets.haribo.com/image/upload/s--w_IJRC43--/ar_2700:3534,c_fill,f_auto,q_60/w_728/v1/consumer-sites/en-gb/Products/Giant-Strawbs-uk.png"
              width="75" height="100" alt="Haribo strawberries"></td>
          <td>Haribo Strawbs</td>
          <td>2 €</td>
          <td>1</td>
          <td>2 €</td>
          <td><button>Delete</button></td>
        </tr>
        <tr>
          <td><img
              src="https://assets.haribo.com/image/upload/s--q8QScoFX--/ar_2700:3661,c_fill,f_auto,q_60/w_763/v1/consumer-sites/international/Goldbears.png"
              width="75" height="100" alt="Haribo goldbears"></td>
          <td>Haribo goldbears</td>
          <td>2 €</td>
          <td>2</td>
          <td>4 €</td>
          <td><button>Delete</button></td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>6 €</td>
          <td></td>
        </tr>
        </tfoot>
      </table>
    </div>
  </main>
</template>

