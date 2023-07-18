import { MdClose } from "react-icons/md";

import "./Search.scss";
import { useDispatch } from "react-redux";
import { changeShowSearchValue } from "../../../store/Slices";
import prod from "../../../assets/products/earbuds-prod-1.webp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

const Search = () => {
  const dispatch = useDispatch();

  const setShowSearch = () => {
    dispatch(changeShowSearchValue(false));
  };

  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    setQuery(target.value);
  };

  let { data } = useFetch(
    `/api/products?populate=*&filters[title][$contains]=${query}`
  );

  if (!query.length) {
    data = null;
  }

  return (
    <div className="search-modal">
      <div className="form-field">
        <input
          type="text"
          autoFocus
          placeholder="search for products"
          value={query}
          onChange={handleChange}
        />
        <MdClose onClick={setShowSearch} />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          {data?.data?.map((item) => (
            <div
            key={item.id}
            className="search-result-item"
            onClick={() => {
              navigate("/product/" + item.id);
              setShowSearch();
            }}
          >
              <div className="img-container">
                <img
                  src={
                    process.env.REACT_APP_DEV_URL +
                    item.attributes.img.data[0].attributes.url
                  }
                  alt=""
                />
              </div>
              <div className="prod-details">
                <span className="name">{item.attributes.title}</span>
                <span className="desc">{item.attributes.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
