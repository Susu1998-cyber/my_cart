// import { useState } from "react";
// import "./App.css";
// import SearchComponent from "./Components/SearchComponent";
// import ShowCourseComponent from "./Components/ShowCourseComponent";
// import UserCart from "./Components/UserCart";

// function App() {
//   const [courses, setCourses] = useState([
//     {
//       id: 1,
//       name: "Allen Solly",
//       price: "1000",
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbmQ9gZiGiwC_r1LrsQc1EwKQztqVcvSM0yA&s",
//     },
//     {
//       id: 2,
//       name: "Peter England",
//       price: "1200",
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf2ppjPdH7xsmwRr4gb7jz0YruKNq3DH7HdA&s",
//     },
//     {
//       id: 3,
//       name: "Raymond",
//       price: "1300",
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTASnoHQQEx0xNg5sF4wl_0f_zRG7ovVLAq4w&s",
//     },
//     {
//       id: 4,
//       name: "Tommy Hilfiger",
//       price: "1400",
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6id54-Nv97D1Qc331HBMoe7nxdjL650cKHQ&s",
//     },
//   ]);

//   const [cartCourses, setCartCourses] = useState([]);
//   const [searchCourse, setSearchCourse] = useState("");

//   const addCourseToCartFunction = (GFGcourse) => {
//     const alreadyCourses = cartCourses.find(
//       (item) => item.product.id === GFGcourse.id
//     );
//     if (alreadyCourses) {
//       const latestCartUpdate = cartCourses.map((item) =>
//         item.product.id === GFGcourse.id
//           ? {
//               ...item,
//               quantity: item.quantity + 1,
//             }
//           : item
//       );

//       setCartCourses(latestCartUpdate);
//     } else {
//       setCartCourses([...cartCourses, { product: GFGcourse, quantity: 1 }]);
//     }
//   };

//   const deletCourseFromCartFunction = (GFGcourse) => {
//     const updatedCart = cartCourses.filter(
//       (item) => item.product.id !== GFGcourse.id
//     );
//     setCartCourses(updatedCart);
//   };

//   const totalAmountCalculationFunction = () => {
//     return cartCourses.reduce(
//       (total, item) => total + item.product.price * item.quantity,
//       0
//     );
//   };

//   const courseSearchUserFunction = (event) => {
//     setSearchCourse(event.target.value);
//   };

//   const filterCourseFunction = courses.filter((course) =>
//     course.name.toLowerCase().includes(searchCourse.toLowerCase())
//   );

//   return (
//     <div className="App">
//       <SearchComponent
//         searchCourse={searchCourse}
//         courseSearchUserFunction={courseSearchUserFunction}
//       />
//       <main className="App-main" />

//       <ShowCourseComponent
//         courses={courses}
//         filterCourseFunction={filterCourseFunction}
//         addCourseToCartFunction={addCourseToCartFunction}
//       />

//       <UserCart
//         cartCourses={cartCourses}
//         deletCourseFromCartFunction={deletCourseFromCartFunction}
//         totalAmountCalculationFunction={totalAmountCalculationFunction}
//         setCartCourses={setCartCourses}
//       />
//     </div>
//   );
// }

// export default App;



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
