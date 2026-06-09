import "./App.css";
import Accordian from "./components/Accordian";
import ModalTest from "./components/Custommodalpopup/modaltest";
import TabTest from "./components/CustomTabs/tabtest";
import GithubProfileFinder from "./components/GithubProfileFinder";
import ImageSlider from "./components/ImageSlider";
import LightDarkMode from "./components/LightDarkMode";
import LoadMoreData from "./components/LoadMoreData";
import QRCodeGenerator from "./components/QrCodeGenerator";
import RandomColor from "./components/RandomColor";
import ScrollIndicator from "./components/ScrollIndicator";
import StarRating from "./components/StarRating";
import TicTacToe from "./components/TicTactToe";
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
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}

      {/* Custom Tabs */}
        {/* <TabTest/> */}
      
      {/* Custom Modal Component */}
       {/* <ModalTest/> */}

      {/* Github profile finder */}
      {/* <GithubProfileFinder/> */}

      {/* Search Autocomplete */}
      {/* <SearchAutocomplete/> */}

      {/* Tic tac toe */}
      <TicTacToe/>

      {/* Feature Flag IMplementation */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}

      {/* useFetch - Custom Hook Test*/}
      {/* <UseFetchHookTest/> */}

      {/* Use Onclick Outside Hook Test */}
      {/* <UseOnclickOutsideTest/> */}

      {/* Use Window Resize Hook Test */}
      {/* <UseWindowResizeTest/> */}

      {/* Scroll to Top and Bottom */}
      {/* <ScrollToTopAndBottom/> */}

      {/* Scroll to a Particular Section */}
      {/* <ScrollToSection/> */}

    </div>
  );
}

export default App;