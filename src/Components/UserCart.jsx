import React from "react";

const UserCart = ({
  cartCourses,
  deletCourseFromCartFunction,
  totalAmountCalculationFunction,
  setCartCourses,
}) => {
  return (
    <div className={`cart ${cartCourses.length > 0 ? "active" : ""}`}>
      <h2>My Cart</h2>
      {cartCourses.length === 0 ? (
        <p className="empty-cart"> Your cart is Empty</p>
      ) : (
        <>
          <ul>
            {cartCourses.map((item) => (
              <li key={item.product.id} className="cart-item">
                <div>
                  <div className="item-info">
                    <div className="item-image">
                      <img src={item.product.images} alt={item.product.name} />
                    </div>
                    <div className="item-details">
                      <h3>{item.product.name}</h3>
                      <p>Price: ${item.product.price}</p>
                    </div>
                  </div>
                  {/* ITME INFO ENDS */}
                  <div className="item-actions">
                    <button
                      className="remove-button"
                      onClick={() => deletCourseFromCartFunction(item.product)}
                    >
                      Remove Product
                    </button>
                    <div className="quantity">
                      <button
                        style={{ margin: "1%" }}
                        onClick={() =>
                          setCartCourses((prevCartCourse) => {
                            const updatedCart = prevCartCourse.map((prevItem) =>
                              prevItem.product.id === item.product.id
                                ? {
                                    ...prevItem,
                                    quantity: item.quantity + 1,
                                  }
                                : prevItem
                            );
                            return updatedCart;
                          })
                        }
                      >
                        +
                      </button>
                      <p className="quant">{item.quantity}</p>
                      <button
                        onClick={() => {
                          setCartCourses((prevCartCourse) => {
                            const updatedCart = prevCartCourse.map((prevItem) =>
                              prevItem.product.id === item.product.id
                                ? {
                                    ...prevItem,
                                    quantity: Math.max(item.quantity - 1, 0),
                                  }
                                : prevItem
                            );
                            return updatedCart;
                          });
                        }}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="checkout-section">
            <div className="checkout-total">
              <p className="total">
                Total Amount:{totalAmountCalculationFunction()}
              </p>
            </div>
            <button
              className="checkout-button"
              disabled={
                cartCourses.length === 0 ||
                totalAmountCalculationFunction() === 0
              }
            >
              Proceed to Payment
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default UserCart;