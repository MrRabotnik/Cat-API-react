import React from "react";
import Main from "./Main/Main";
import SideBar from "./SideBar/SideBar";

function App() {
  const [categories, setCategories] = React.useState([]);
  const [catImages, setCatImages] = React.useState([]);
  const [clickedCategoryId, setClickedCategoryId] = React.useState();

  let loadMore = false;

  React.useEffect(() => {
    fetch("https://api.thecatapi.com/v1/categories") // Getting Cats categories
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data = data.map((item) => {
          if (item.id === clickedCategoryId) {
            return {
              ...item,
              active: true,
            };
          } else {
            return {
              ...item,
              active: false,
            };
          }
        });
        setCategories(data);
      });
  }, [clickedCategoryId]);

  React.useEffect(() => {
    callCats();
  }, []);

  const callCats = () => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10") // Getting Cat Images
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (loadMore) {
          setCatImages([...catImages, ...data]);
          loadMore = false;
        } else {
          setCatImages(data);
        }
      });
  };

  const callCatsWithSelectedCategory = (categoryId) => {
    setClickedCategoryId(categoryId);
    fetch(
      `https://api.thecatapi.com/v1/images/search?limit=10&category_ids=${categoryId}`
    ) //
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (loadMore) {
          setCatImages([...catImages, ...data]);
          loadMore = false;
        } else {
          setCatImages(data);
        }
      });
  };

  const callMoreCats = () => {
    loadMore = true;
    if (clickedCategoryId) {
      callCatsWithSelectedCategory(clickedCategoryId);
    } else {
      callCats();
    }
  };

  return (
    <div className="container">
      <SideBar
        categories={categories}
        callCatsWithSelectedCategory={callCatsWithSelectedCategory}
      />
      <Main catImages={catImages} callMoreCats={callMoreCats} />
    </div>
  );
}

export default App;
