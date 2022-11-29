import "./Aggregator.css"

export default function Aggregator(props) {
    return (
        <div className="aggregator">
            <p className="aggregator-faves">Favorites</p>
            {props.favorites.map(item => {
                return (
                    <div className="fave-name">&hearts; {item}</div>
                )
            })}
        </div>
    )
}