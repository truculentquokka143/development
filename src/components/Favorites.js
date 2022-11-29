import "./Favorites.css"

export default function Favorites(props) {
  let buttonText = props.favorites.includes(props.name) ? "Remove" : "Add to Favorites";

  const handleClick = () => {
    if (props.favorites.includes(props.name)) {
      props.setFavorites(props.favorites.filter((item) => (item !== props.name)));
      props.setFavoritesMass(props.favoritesMass - props.mass)
    } else {
      props.setFavorites([...props.favorites, props.name]);
      props.setFavoritesMass(props.favoritesMass + props.mass);
    }
  }

  return (
    <div>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
}