import "./Dropdown.css"

export default function Dropdown(props) {
  return (
    <form>
      <label className="sort-by" >Sort by:  </label>
      <select name="sort by" onChange={(event) => props.setSort(event.target.value)}>
        <option value="Name: A-Z">Name: A-Z</option>
        <option value="Name: Z-A">Name: Z-A</option>
        <option value="Mass: Low to High">Mass: Low to High</option>
        <option value="Mass: High To Low">Mass: High To Low</option>
      </select>
    </form>
    )
}