import "./categoryBar.css";

function categoryBar() {
  return (
    <div className="cat-bar-container">
      <ul className="cat-bar-ul">
        <li className="cat-bar-li">
          <button className="cat-button">All</button>
        </li>
        <li className="cat-bar-li">
          <button className="cat-button">T-shirts</button>
        </li>
        <li className="cat-bar-li">
          <button className="cat-button">Trousers</button>
        </li>
        <li className="cat-bar-li">
          <button className="cat-button">Coats</button>
        </li>
        <li className="cat-bar-li">
          <button className="cat-button">Jackets</button>
        </li>
        <li className="cat-bar-li">
          <button className="cat-button">Socks</button>
        </li>
        <li className="cat-bar-li">
          <button className="cat-button">Footwear</button>
        </li>
        <li className="cat-bar-li">
          <button className="cat-button">Hats</button>
        </li>
        <li className="cat-bar-li">
          <button className="cat-button"></button>
        </li>
      </ul>
    </div>
  );
}

export default categoryBar;
