import "./App.css";
import Accordian from "./components/Accordian";
import RandomColor from "./components/RandomColor";
import StarRating from "./components/StarRating";




function App() {
  return (
    <div className="App">
      {/* Accordian component */}
       {/* <Accordian/>  */}

      {/* Random color component */}
        {/* <RandomColor /> */}

      {/* Star Rating */}
        <StarRating NoOfStarts={10} />
    </div>
  );
}

export default App;