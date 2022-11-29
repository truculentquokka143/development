import './Filters.css';
import Aggregator from "./Aggregator";


export default function Filters(props) {

  return (
    <div className="filter-section">
      <p className="filters">Filters</p>
      <form onClick={(event) => props.setFilter1(event.target.value)}>
        <p>Diet:</p>
        <div className="filter">
          <div>
            <input type="radio" name="diet" value="all" defaultChecked></input>
            <label>All</label>
          </div>
          <div>
            <input type="radio" name="diet" value="Herbivore"></input>
            <label>Herbivore</label>
          </div>
          <div>
            <input type="radio" name="diet" value="Omnivore"></input>
            <label>Omnivore</label>
          </div>
          <div>
            <input type="radio" name="diet" value="Carnivore"></input>
            <label>Carnivore</label>
          </div>
        </div>
      </form>

      <form onClick={(event) => props.setFilter2(event.target.value)}>
        <p>Average Length:</p>
        <div className="filter">
          <div>
            <input type="radio" name="length" value="all" defaultChecked></input>
            <label>All</label>
          </div>
          <div>
            <input type="radio" name="length" value="under 10"></input>
            <label>&lt; 10in</label>
          </div>
          <div>
            <input type="radio" name="length" value="10 to 20"></input>
            <label>10in - 20in</label>
          </div>
          <div>
            <input type="radio" name="length" value="20 above"></input>
            <label>&gt; 20in</label>
          </div>
        </div>
      </form>

      <form>
        <p>Other:</p>
        <div>
          <input type="checkbox" name="favorites" value="favorites"
            onClick={() => props.setFavoritesClicked(!props.favoritesClicked)}></input>
          <label>Favorites</label>
        </div>
      </form>

      <div className="total">
        <p>Favorites Mass: {Math.abs(props.favoritesMass.toFixed(2))} g</p>
      </div>
    </div>
  )
}