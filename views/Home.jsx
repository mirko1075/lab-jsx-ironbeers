const React = require('react');
const Layout = require('./Layout');

function Home() {
  return (
    <Layout>
      <main>
        <h1>Home</h1>
        <img src="/public/images/beer.png" alt="" />
        <a href="/beers">Check the Beers!</a>
        <a href="/random-beers">Check a random beer</a>
      </main>
    </Layout>
  );
}

module.exports = Home;
