import "./App.css";
import Accordian from "./components/Accordian";
import ImageSlider from "./components/ImageSlider";
import LoadMoreData from "./components/LoadMoreData";
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
      {/* <StarRating NoOfStarts={10} /> */}

      {/* Image Slider  */}
      {/* <ImageSlider
      url={'https://picsum.photos/v2/list?page=1&limit=5'} 
      page={1} 
      limit={10} /> */}

      {/* Load More Data */}
        <LoadMoreData />
    </div>
  );
}

export default App;