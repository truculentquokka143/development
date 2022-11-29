import { useState } from "react";
import './App.css';
import itemData from "./assets/marsupial-data.json";
import Item from "./components/Item"
import Filters from "./components/Filters"
import Dropdown from "./components/Dropdown";
import Aggregator from "./components/Aggregator";

itemData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {
  const [favorites, setFavorites] = useState([]);
  const [favoritesMass, setFavoritesMass] = useState(0);
  const [favoritesClicked, setFavoritesClicked] = useState(false);
  const [filter1, setFilter1] = useState("all");
  const [filter2, setFilter2] = useState("all");
  const [sort, setSort] = useState("Name: A-Z");

  const matchesFilterType1 = (itemFilterValue, filterType) => {
    // all items should be shown when no filter is selected
    if (filterType === "all") {
      return true
    } else if (filterType === itemFilterValue) {
      return true
    } else {
      return false
    }
  }

  const matchesFilterType2 = (itemFilterValue, filterType) => {
    // all items should be shown when no filter is selected
    if (filterType === "all") {
      return true;
    } else if (filterType === "under 10" && itemFilterValue < 10) {
      return true;
    } else if (filterType === "10 to 20" && itemFilterValue >= 10 && itemFilterValue <= 20) {
      return true;
    } else if (filterType === "20 above" && itemFilterValue > 20) {
      return true;
    } else {
      return false;
    }
  }

  const sortItems = (list) => {
    switch (sort) {
      case "Name: A-Z":
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Name: Z-A":
        list.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "Mass: Low to High":
        list.sort((a, b) => a.mass - b.mass);
        break;
      case "Mass: High To Low":
        list.sort((a, b) => b.mass - a.mass);
        break;
      default:
        break;
    }
  }

  const getFavoritedItems = (item) => {
    return favorites.includes(item.name);
  }

  const itemsToDisplay = () => {
    const itemDataCopy = [...itemData];
    const favoriteObjects = itemDataCopy.filter((item) => (getFavoritedItems(item)));
    const list = favoritesClicked ? favoriteObjects : itemDataCopy;
    sortItems(list);
    const filtered1 = list.filter((item) => matchesFilterType1(item.vore, filter1));
    const filtered2 = filtered1.filter((item) => matchesFilterType2(item.length, filter2));
    return filtered2;
  }

  const items = itemsToDisplay();

  return (
    <div className="App">

      <div className="title">
        <div className="animals-count">
          <h1 className="marsupials">Marsupials</h1>
          <p>({items.length} animals)</p>
        </div>
        <Dropdown setSort={setSort}></Dropdown>
      </div>

      <div className="page">
        <div className="left-column">
          <Filters setFilter1={setFilter1} setFilter2={setFilter2}
            favoritesClicked={favoritesClicked} setFavoritesClicked={setFavoritesClicked}
            favoritesMass={favoritesMass}>
          </Filters>
          <Aggregator favorites={favorites} />
        </div>

        <div className="items-section">
          {items.map((item, index) => (
            <Item key={index} data={item}
              favorites={favorites} setFavorites={setFavorites}
              favoritesMass={favoritesMass} setFavoritesMass={setFavoritesMass}>
            </Item>))}
        </div>

      </div>

    </div>
  );
}

export default App;
