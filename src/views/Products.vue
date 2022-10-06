<template>
  <main>
    <h1>Products</h1>
    <div id="product-list">
      <article class="product">
        <img
            src="https://assets.haribo.com/image/upload/s--Prk9L0M1--/ar_2700:3661,c_fill,f_auto,q_60/w_1044/v1/consumer-sites/international/Goldbears.png">
        <h2>Goldbears</h2>
      </article>
      <article class="product">
        <img
            src="https://assets.haribo.com/image/upload/s--Prk9L0M1--/ar_2700:3661,c_fill,f_auto,q_60/w_1044/v1/consumer-sites/international/Goldbears.png">
        <h2>Happy Cherries</h2>
      </article>
      <article class="product">
        <img
            src="https://assets.haribo.com/image/upload/s--Prk9L0M1--/ar_2700:3661,c_fill,f_auto,q_60/w_1044/v1/consumer-sites/international/Goldbears.png">
        <h2>Happy Cola</h2>
      </article>
      <article class="product">
        <img
            src="https://assets.haribo.com/image/upload/s--Prk9L0M1--/ar_2700:3661,c_fill,f_auto,q_60/w_1044/v1/consumer-sites/international/Goldbears.png">
        <h2>Pico-Balla</h2>
      </article>
      <article class="product">
        <img
            src="https://assets.haribo.com/image/upload/s--Prk9L0M1--/ar_2700:3661,c_fill,f_auto,q_60/w_1044/v1/consumer-sites/international/Goldbears.png">
        <h2>Tropifrutti</h2>
      </article>
      <article class="product">
        <img
            src="https://assets.haribo.com/image/upload/s--Prk9L0M1--/ar_2700:3661,c_fill,f_auto,q_60/w_1044/v1/consumer-sites/international/Goldbears.png">
        <h2>MyHaribo</h2>
      </article>
    </div>
  </main>
</template>

<style scoped>

#product-list {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 1.5rem;
  align-items: baseline;
  flex-wrap: wrap;
}

h1 {
  display: block;
  text-align: center;
}

.product {
  width: 150px;
}

.product img {
  max-width: 150px;
}

@media (min-width: 801px) {
  h1 {
    text-align: start;
  }
}

</style>

