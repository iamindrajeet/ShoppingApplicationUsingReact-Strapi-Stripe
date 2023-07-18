import "./Category.scss";
import {useNavigate} from "react-router-dom";

const Category = ({ categories }) => {

  const navigate = useNavigate();

  const handleCategory = (id) => {
    navigate(`/category/${id}`)
  }

  return (
    <div className="shop-by-category" id="categories-section">
      <div className="categories">
        {
          categories?.data?.map((item) => (
            <div key={item.id} className="category" onClick={ () => handleCategory(item.id) }>
              <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data.attributes.url} alt=""/>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Category;
