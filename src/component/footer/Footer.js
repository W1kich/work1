import React from 'react';
import './Footer.css'; 
import footerCub from './img/footer-cub.png';
import b from './img/b.png';
import github from './img/github.svg';
import bnpm from './img/npm.svg';
import thing from './img/thing.svg';
import twitter_x from './img/twitter_x.svg';


const Footer = () => {
	return (
		<footer className="footer">
			<img src={footerCub} className="footer-cub"></img>
			<div className="footer-plpscan">
				<h1>plpscan</h1>
				<p>platarium network</p>
			</div>
			<div className="footer-menu">
				<div className="footer-menu-column-left">
					<div className="footer-menu-row-left">
						<div className="footer-menu-row-left-column">
								<h3>About plpscan</h3>
								<a href="">Suspendisse laoreet</a>
								<a href="">Proin interdum turpis</a>
								<a href="">Duis dignissim</a>
						</div>
						<div className="footer-menu-row-left-column">
								<h3>Product</h3>
								<a href="">Maecenas in urna justo</a>
								<a href="">Etiam sodales</a>
								<a href="">Cras posuere egestas</a>
								<a href="">Phasellus eget eleifend velit</a>
						</div>
					</div>
					<div className="footer-menu-row-left-big">
						<h3>Social media :</h3>
						<div className="footer-menu-row-left-big-img">
							<a href=""><img src={twitter_x} alt="" /></a>
							<a href=""><img src={thing} alt="" /></a>
							<a href=""><img src={github} alt="" /></a>
							<a href=""><img src={bnpm} alt="" /></a>
							<a href=""><img src={b} alt="" /></a>
						</div>
						<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
					</div>
				</div>
				<div className="footer-menu-column-right">
					<div className="footer-menu-row-right">
						<h3>About plpscan</h3>
						<div className="footer-menu-row-right-column">
							<div className="footer-menu-row-right-column-left">
								<a href="">Buy Bitcoin (BTC)</a>
								<a href="">Buy Ethereum (ETH)</a>
								<a href="">Buy Binance coin <br /> (BNB)</a>
							</div>
							<div className="footer-menu-row-right-column-right">
								<a href="">Buy Tron (TRX)</a>
								<a href="">Buy XRP (XRP)</a>
								<a href="">Buy Cardano (ADA)</a>
								<a href="">Buy Optimism (OP)</a>
							</div>
						</div>
					</div>
					<div className="footer-menu-row-right">
						<h3>Find out prices for cryptocurrencies</h3>
						<div className="footer-menu-row-right-column">
						<div className="footer-menu-row-right-column-left">
							<a href="">Bitcoin (BTC) price</a>
							<a href="">Ethereum (ETH) price</a>
							<a href="">Bitcoin (BTC) price</a>
							<a href="">Binance coin <br /> (BNB) price</a>
						</div>
						<div className="footer-menu-row-right-column-right">
						<a href="">XRP (XRP) price</a>
							<a href="">Cardano (ADA) price</a>
							<a href="">Tron (TRX) price</a>
							<a href="">Optimism (OP) price</a>
						</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
