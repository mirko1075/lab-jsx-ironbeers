const React = require('react');
const Layout = require('./Layout');
const BeerCard = require('./components/BeerCard');
function Beers(props) {
  return (
    <Layout>
      <div>
        {/* We are maping over the beersFromApi array we received */}
        {props.beersFromApi.map((beerObj, i) => {
          const link = `/beers/${beerObj.id}`;
          return (
            <a href={link}>
              <BeerCard
                name={beerObj.name}
                image_url={beerObj.image_url}
                description={beerObj.description}
                hideDetails={true}
              />
            </a>
          );
        })}
      </div>
    </Layout>
  );
}
module.exports = Beers;
