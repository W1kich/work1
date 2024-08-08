import './Search.css';
import { useState } from 'react';
import searchIcon from './icons/search-icon.svg';
import stUSDT from './icons/stUSDT.png';
import HTX from './icons/HTX.png';
import USDT from './icons/USDT.png';
import WTRX from './icons/WTRX.png';
import SUN from './icons/SUN.png';
import JST from './icons/JST.png';
import BTT from './icons/BTT.png';
import WIN from './icons/WIN.png';
import BTC from './icons/BTC.png';

const trendingItems = [
  { icon: stUSDT, label: 'stUSDT' },
  { icon: HTX, label: 'HTX' },
  { icon: USDT, label: 'USDT' },
  { icon: WTRX, label: 'WTRX' },
  { icon: SUN, label: 'SUN' },
  { icon: JST, label: 'JST' },
  { icon: BTT, label: 'BTT' },
  { icon: WIN, label: 'WIN' },
  { icon: BTC, label: 'BTC' }
];

function Search() {
  const [items, setItems] = useState(trendingItems);
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);

    if (value) {
      const filteredItems = trendingItems.filter(item =>
        item.label.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredItems);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <img src={searchIcon} alt="Search" className="search-icon" />
        <input
          type="text"
          placeholder="Px..."
          className="search-input"
          value={query}
          onChange={handleInputChange}
        />
      </div>
      {suggestions.length > 0 && (
        <div className={`suggestions ${suggestions.length > 0 ? 'visible' : ''}`}>
          {suggestions.map((item, index) => (
            <div key={index} className="suggestion-item">
              <img src={item.icon} alt={item.label} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      )}
      <div className="trending-search">
        <span className="trending-text">Trending Search:</span>
        <div className="trending-icons">
          {items.map((item, index) => (
            <a href="#" key={index} className="trending-item">
              <img src={item.icon} alt={item.label} />
              <span className="trending-label">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
