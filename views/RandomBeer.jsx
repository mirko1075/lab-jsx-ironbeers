const React = require('react');
const Layout = require('./Layout');
const BeerCard = require('./components/BeerCard');
function RandomBeer(props) {
  //   console.log('prop', props);
  return (
    <Layout>
      {
        <BeerCard
          name={props.randomBeersFromApi[0].name}
          image_url={props.randomBeersFromApi[0].image_url}
          description={props.randomBeersFromApi[0].description}
          tagline={props.randomBeersFromApi[0].tagline}
          food_pairing={props.randomBeersFromApi[0].food_pairing}
          brewers_tips={props.randomBeersFromApi[0].brewers_tips}
          hideDetails={false}
        />
      }
    </Layout>
  );
}
module.exports = RandomBeer;
