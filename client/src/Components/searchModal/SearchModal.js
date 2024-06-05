import "./searchModal.css";
import { IoMdClose } from "react-icons/io";

function SearchModal({ isOpen, setIsOpen }) {
  const handleSearch = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="search-modal-container"
      style={{ display: isOpen ? "block" : "none" }}
    >
      <div className="x-button-container">
        <IoMdClose onClick={handleSearch} className="x-button" />
      </div>
      <section className="search-container">
        <div className="search-input-container">
          <input
            type="search"
            name="search"
            id="search"
            //   value={password}
            //   onChange={onChange}
            placeholder="What are you looking for?"
            className="search-input"
          />
        </div>
        <div className="search-list-container">
          <ul className="search-list">
            <li className="list-item-search">T-shirts</li>
            <li className="list-item-search">Trousers</li>
            <li className="list-item-search">Coats</li>
            <li className="list-item-search">Jackets</li>
            <li className="list-item-search">Socks</li>
            <li className="list-item-search">Footwear</li>
            <li className="list-item-search">Hats</li>
            <li className="list-item-search">Gloves</li>
          </ul>
        </div>
        <div>
          <div>
            <h5>Filter</h5>
          </div>
          <div className="filter-container">
            <div className="checkbox-container">
              <input type="range"></input>
              <div className="checkbox-text">price</div>
            </div>
            <div className="checkbox-list-container">
              <div className="checkbox-container">
                <input type="checkbox"></input>
                <div className="checkbox-text">price</div>
              </div>
              <div className="checkbox-container">
                <input type="checkbox"></input>
                <div className="checkbox-text">price</div>
              </div>
              <div className="checkbox-container">
                <input type="checkbox"></input>
                <div className="checkbox-text">price</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SearchModal;
