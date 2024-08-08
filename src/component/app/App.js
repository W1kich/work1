import './App.css';
import "slick-carousel/slick/slick.css";

import Header from '../header/Header';
import Search from '../search/Search';
import CustomSlider from '../customSlider/Slider';
import FullTable from '../fulltable/FullTable';
import Footer from '../footer/Footer';


function App() {
	return (
		<div className="App">
			<Header/>
			<div className="line-540"></div>
			<Search/>
			<div className="line-640"></div>
			<CustomSlider/>
			<div className="line-640"></div>
			<FullTable/>
			<div className="line-640"></div>
			<Footer/>
		</div>
	);
}

export default App;

