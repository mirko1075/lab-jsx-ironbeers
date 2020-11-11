const React = require('react');
function BeerCard(props) {
  return (
    <div>
      <img src={props.image_url} width="200" alt="" />
      <div>
        <h3>{props.name}</h3>
        <h5>{props.tagline}</h5>
        <p>{props.description}</p>
        {props.hideDetails ? null : (
          <div>
            <h4>Food Pairing</h4>
            <ul>
              {props.food_pairing.map((food, i) => {
                return <li key={i}> {food} </li>;
              })}
            </ul>{' '}
            <p>
              <strong>Brewers Tips:</strong> {props.brewers_tips}{' '}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
module.exports = BeerCard;
