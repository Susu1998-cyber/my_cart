import { useEffect, useState } from "react";
import "./App.css";
import SearchComponent from "./Components/SearchComponent";
import ShowCourseComponent from "./Components/ShowCourseComponent";
import UserCart from "./Components/UserCart";
import axios from "axios";

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");

        console.log(response.data.products);

        setCourses(response.data.products);
      } catch (error) {
        console.log("Error fetching data");
      }
    };
    fetchData();
  }, []);

  const [cartCourses, setCartCourses] = useState([]);
  const [searchCourse, setSearchCourse] = useState("");

  const addCourseToCartFunction = (GFGcourse) => {
    const alreadyCourses = cartCourses.find(
      (item) => item.product.id === GFGcourse.id
    );
    if (alreadyCourses) {
      const latestCartUpdate = cartCourses.map((item) =>
        item.product.id === GFGcourse.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );

      setCartCourses(latestCartUpdate);
    } else {
      setCartCourses([...cartCourses, { product: GFGcourse, quantity: 1 }]);
    }
  };

  const deletCourseFromCartFunction = (GFGcourse) => {
    const updatedCart = cartCourses.filter(
      (item) => item.product.id !== GFGcourse.id
    );
    setCartCourses(updatedCart);
  };

  const totalAmountCalculationFunction = () => {
    return cartCourses.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  const courseSearchUserFunction = (event) => {
    setSearchCourse(event.target.value);
  };

  const filterCourseFunction = courses.filter((course) =>
    course.title.toLowerCase().includes(searchCourse.toLowerCase())
  );

  return (
    <div className="App">
      <SearchComponent
        searchCourse={searchCourse}
        courseSearchUserFunction={courseSearchUserFunction}
      />
      <main className="App-main" />

      <ShowCourseComponent
        courses={courses}
        filterCourseFunction={filterCourseFunction}
        addCourseToCartFunction={addCourseToCartFunction}
      />

      <UserCart
        cartCourses={cartCourses}
        deletCourseFromCartFunction={deletCourseFromCartFunction}
        totalAmountCalculationFunction={totalAmountCalculationFunction}
        setCartCourses={setCartCourses}
      />
    </div>
  );
}

export default App;
