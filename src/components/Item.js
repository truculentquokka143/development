import Favorites from "./Favorites"
import "./Item.css"

export default function Item(props) {
    return (
        <div className="item">
            <h1 className="item-name">{props.data.name}</h1>
            <img src={props.data.image} alt="item picture"></img>
            <div className="item-data">
                <p>Diet: {props.data.vore}</p>
                <p>Length: {props.data.length} in</p>
                <p>Mass: {props.data.mass} lbs</p>
            </div>
            <div className="favorites">
                <Favorites favorites={props.favorites} setFavorites={props.setFavorites}
                    name={props.data.name} mass={props.data.mass}
                    favoritesMass={props.favoritesMass} setFavoritesMass={props.setFavoritesMass}>
                </Favorites>
            </div>
        </div>
    );
}