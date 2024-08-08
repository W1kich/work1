import React from 'react';
import './LatestBlocksTable.css';
import burger from './burger.svg';

const LatestBlocksTable = ({ blocks }) => {
	return (
		<div className="table-container">
			<div className="table-wrapper">
				<div className="table-header">
					<h3>Latest Blocks</h3>
					<img src={burger} alt="burger" />
				</div>
				<div className="table-content">
					<table className="blocks-table">
						<thead>
							<tr>
								<th>Block number</th>
								<th>Commission</th>
								<th>Speed</th>
								<th>Amount</th>
							</tr>
						</thead>
						<tbody>
							{blocks.map((block, index) => (
								<tr key={index}>
									<td className='block-number'>
										<img src={block.img}  alt={block.number} />
										<div className="block-number-text">
											{block.numberTime}
											<br/>
											{block.number}
										</div>
										</td>
									<td>
										Fee Recipient <a href={block.recipientLink}>{block.recipientLinkText}</a> <br /> in {block.commissionTime}
									</td>
									<td>{block.speed}</td>
									<td>{block.amount}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<div className="view-all">
					View all
				</div>
			</div>
		</div>
	);
};

export default LatestBlocksTable;
