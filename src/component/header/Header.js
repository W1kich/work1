import './Header.css';
import icon from './Frame.svg';
import logo from './logo.svg';

import Dropdown from '../dropdown/Dropdown';

function Header() {
	return (
		<div className="Header__container">
			<div className="Header-top">
				<div className="Header-top-left">
					<div className="Header-top-left-img">
						<img src={icon} alt="icon"/>
					</div>
					<div className="Header-top-left-content">
						<h1 className="font-size-15">Transactions price</h1>
						<p className="font-size-14">2,440.1 M (12.2 TPS) 6 Gwei ($0.40)</p>
					</div>
				</div>
				<div className="Header-top-right">
					<div className="Header-top-right-top font-size-16">Platarium Network</div>
					<Dropdown/>
				</div>
			</div>
			<div className="Header-mid">
				<div className="Header-mid-left">
					<img src={logo} alt="logo" />
					<h1 className="font-size-64">plpscan</h1>
				</div>
				<div className="Header-mid-right">
					<div className="Header-mid-right-btn font-size-20">
						Wallet
					</div>
					<div className="Header-mid-right-regLog font-size-20">
						<a href="">Register </a>
						|
						<a href=""> Log In</a>
					</div>
				</div>
			</div>
			<div className="Header-bottom">
				<ul className='Header-bottom-list'>
					<li className='page-active'><a href="" className="font-size-20">Home</a></li>
					<li><a href="" className="font-size-20">Blockchain</a></li>
					<li><a href="" className="font-size-20">Tokens</a></li>
					<li><a href="" className="font-size-20">NFTs</a></li>
				</ul>
			</div>
		</div>
	);
}

export default Header;
