import "./App.css";
import Accordian from "./components/Accordian";
import ImageSlider from "./components/ImageSlider";
import LightDarkMode from "./components/LightDarkMode";
import LoadMoreData from "./components/LoadMoreData";
import QRCodeGenerator from "./components/QrCodeGenerator";
import RandomColor from "./components/RandomColor";
import ScrollIndicator from "./components/ScrollIndicator";
import StarRating from "./components/StarRating";
import TreeView from "./components/TreeView";




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
        {/* <LoadMoreData /> */}

      {/* Tree view componet */}
      {/* <TreeView menus={menus} /> */}

      {/* Custom Modal Poppup */}
        {/* <modalTest /> */}

      {/* Qr code Generator */}
      {/* <QRCodeGenerator/> */}

      {/* Light mode Dark mode */}
       {/* <LightDarkMode /> */}

      {/* Scroll inidiacator */}
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
    </div>
  );
}

export default App;