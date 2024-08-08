import { useState } from 'react';
import './Dropdown.css';
import arrow from './dropdown.svg';

const Dropdown = () => {
	const [selectedOption, setSelectedOption] = useState('');
	const [isOpen, setIsOpen] = useState(false);

	const options = [
		'rpc-melancholy-testnet',
		'option2',
		'option3',
	];

	const handleSelect = (option) => {
		setSelectedOption(option);
		setIsOpen(false);
	};

	return (
		<div className="dropdown">
			<div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
				{selectedOption || 'rpc-melancholy-testnet'}
				<img 
					src={arrow} 
					alt="Dropdown Arrow" 
					className={`dropdown-arrow ${isOpen ? 'open' : ''}`} 
				/>
			</div>
			<ul className={`dropdown-list ${isOpen ? 'open' : ''}`}>
				{options.map((option, index) => (
					<li
						key={index}
						className="dropdown-list-item font-size-15"
						onClick={() => handleSelect(option)}
					>
						{option}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Dropdown;
