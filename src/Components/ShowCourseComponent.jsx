import React from "react";

const ShowCourseComponent = ({
  courses,
  filterCourseFunction,
  addCourseToCartFunction,
}) => {
  return (

    <div className="product-list">
      {filterCourseFunction.length === 0 ? (
        <p className="no-results">Sorry No Products Available</p>
      ) : (


        filterCourseFunction.slice(0, 10).map((product) => (
        
          <div className="product" key={product.id}>
              {console.log(product)
          }
            <img src={product.images} alt={product.name} />
            <h2
              style={{
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              {product.title}
            </h2>
            <p>Price:{product.price}</p>
            <button
              className="add-to-cart-button"
              onClick={() => addCourseToCartFunction(product)}
            >
              Add to cart
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default ShowCourseComponent;
