import './LatestTransactionsTable.css';
import burger from './burger.svg';

const LatestTransactionsTable = ({ blocks }) => {
	return (
		<div className="table-container">
			<div className="table-wrapper">
				<div className="table-header">
					<h3>Latest Transactions</h3>
					<img src={burger} alt="burger" />
				</div>
				<div className="table-content">
					<table className="blocks-table">
						<thead>
							<tr>
								<th>Block number</th>
								<th>Commission</th>
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
										<div className='block-commission'>
											<div className="block-commission-left">
												<p>From:</p>
												<p>To:</p>
											</div>
											<div className="block-commission-right">
												<a href={block.recipientLink}>{block.recipientLinkText}</a> 
												<a href={block.recipientLink}>{block.recipientLinkText}</a> 
											</div>
										</div>
										</td>
										
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

export default LatestTransactionsTable;
