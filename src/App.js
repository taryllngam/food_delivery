import "./App.css";
import Landing from "./Landing-page/index";
import Billing from "./Billing-form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Details from "./Details";
import { FoodProvider, useLocalStorage } from "./context/FoodContext";
import Payment from "./Payment";
import SignUp from "./components/SignUp";
import Admin from "./components/Admin";

// import img1 from "../src/assets/burito.png"
// import img2 from "../src/assets/cheeseburger.png"
// import img3 from "../src/assets/cheesepizza.png"
// import img4 from "../src/assets/padtha.png"
// import img5 from "../src/assets/quesadilla.png"
// import img6 from "../src/assets/rolls.png"
// import img7 from "../src/assets/fried.png"
// import img8 from "../src/assets/salad.png"
// import img9 from "../src/assets/boeuf.png"
// import img10 from "../src/assets/ramen.png"
// import img11 from "../src/assets/pizza.png"
// import img12 from "../src/assets/Pierogi.png"
function App() {
  // const importImage = (name) => {
  //   return `assets/${name}.png`
  // }

  // const foodStorage = [
  //   { id: 1, name: "Burrito", image: img1, description: "The burrito includes seasoned ground beef, refried beans, shredded lettuce, diced tomatoes, sour cream, and your favorite chili sauce.", price: "$100"},
  //   { id: 2, name: "Cheeseburger", image: img2, description: "A  patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor" , price: "$100"},
  //   { id: 3, name: "Cheese Pizza", image: img3, description: "This classic cheese pizza recipe makes a chewy crust, homemade tomato sauce, and three different types of cheese." , price: "$100"},
  //   { id: 4, name: "Pad Tha", description: "Pad Thai is stir-fry dish made with rice noodles, shrimp, chicken, or tofu, peanuts, a scrambled egg and bean sprouts. ", image: img4 , price: "$100"},
  //   { id: 5, name: "Chicken Quesadilla", image: img5, description: "Craving for a crispy meal loaded with chicken, veggies & cheese? Explore our Chicken Quesadillas recipe with Maggi Chicken Stock. It's simple & delicious." , price: "$100"},
  //   { id: 6, name: "California Roll", image: img6, description: "A California roll is a fresh take on traditional Japanese rice rolls. Filled with avocado, crab, and cucumber, it's fresh and crunchy and makes a filling meal.", price: "$100" },
  //   { id: 7, name: "Fried Chicken Sandwich", image: img7, description: "Perfect in its simplicity: just fried chicken, lettuce, pickle, and aioli on a soft brioche bun. We could say more, but we’ll let this fried chicken sandwich recipe speak for itself." , price: "$100"},
  //   { id: 8, name: "Caesar Salad", image: img8, description: "What goes in Caesar Salad · cos lettuce (aka romaine) – or iceberg will do in a pinch! · crispy bacon · croutons – garlic croutons, at that!" , price: "$100"},
  //   { id: 9, name: "Boeuf Bourgignon", image: img9, description: "Considered by many to be the mother of all stews, Beef Bourguignon is a French dish made with beef, bacon lardons, carrots, onions and mushrooms slow cooked in a rich red wine sauce" , price: "$100"},
  //   { id: 10, name: "Ramen", image: img10, description: "“There are five basic elements to ramen: noodles, tare, broth, topping and aroma oil,” Sun Noodle's executive chef Shigetoshi “Jack” Nakamura says.", price: "$100" },
  //   { id: 11, name: "Pizza", image: img11, description: "Pizza has three main elements: crust, sauce, and toppings. All of them have a variety of preparation methods. Crust: Traditional pizza crust is similar to bread dough" , price: "$100"},
  //   { id: 12, name: "Pierogi", image: img12, description: "Pierogi are filled dumplings made by wrapping unleavened dough around a savory or sweet filling and cooking in boiling water." , price: "$100"},
  // ]
  // const [foodItems, setfoodItems] = useState(JSON.parse(localStorage.getItem("foodStorage")));
  const { value, setValue } = useLocalStorage("foodStorage", []);

  // const [foodStorage, setFoodStorage] = useState([{
  //   name: '',
  //   src: '',
  //   price: '',
  //   desc: ''
  // }])
  return (
    <div className="App">
      <FoodProvider value={{ value, setValue }}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/details/:id" element={<Details />} />
            <Route exact path="/billing/:id" element={<Billing />} />
            <Route exact path="/payment/:id" element={<Payment />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/admin" element={<Admin />} />
          </Routes>
        </BrowserRouter>
      </FoodProvider>
    </div>
  );
}

export default App;
