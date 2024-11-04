import searchGray from "../images/search-gray.png";
import searchBlack from "../images/search-black.png";

const SearchBar = () => {
  return (
    <div className="form__search-bar">
      <img
        src={searchGray}
        alt="Gray magnifying glass icon representing search function"
        className="form__search-icon--gray"
        width="15"
        height="15"
      />
      <img
        src={searchBlack}
        alt="Black magnifying glass icon representing search function"
        className="form__search-icon--black"
        width="15"
        height="15"
      />
      <input
        className="form__search-input"
        type="search"
        name="search"
        placeholder="Find members"
      />
    </div>
  );
};

export default SearchBar;
