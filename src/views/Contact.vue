<template>
  <main>
    <h1>Contact</h1>

    <article>
      <section>
        <address> <!-- Assuming that these addresses are to contact the team responsible for the website http://html5doctor.com/the-address-element/-->
          <div>
            <strong>2022 HARIBO GmbH & Co. KG</strong>
            <p>Carretera de Girona</p>
            <p>17844 Banyoles</p>
            <p>Girona</p>
          </div>

          <ul>
            <li>Email: haribo.es@haribo.com</li>
            <li>Phone: 972 59 50 00</li>
          </ul>
        </address>
      </section>
      <section>
        <h2>Contact form</h2>
        <form>
          <fieldset>
            <legend>Personal data</legend>
            <div>
              <label for="name">Name</label>
              <input type="text" id="name" name="name">
            </div>
            <div>
              <label for="email">Email</label>
              <input type="text" id="email" name="email">
            </div>
            <div>
              <label for="date">Date</label>
              <input type="text" id="date" name="date">
            </div>
          </fieldset>
          <div>
            <label for="phone">Phone</label>
            <input type="text" id="phone" name="phone">
          </div>
          <div>
            <label for="message">Message</label>
            <input type="text" id="message" name="message">
          </div>
        </form>
        <button>Send</button>
      </section>
    </article>

  </main>

  <footer>
    <a href="#">Data policy & Terms of use</a><br>
    <strong>Haribo 2022</strong>
  </footer>
</template>
