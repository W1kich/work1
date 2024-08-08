import './DashboardTable.css';
import React from 'react';
const DashboardTable = ({ data }) => {
  return (
		<div className="DashboardTable-wrapper">
			<div className="DashboardTable__container">
				<div className="inner-container">
					{data.map((columnData, columnIndex) => (
						<React.Fragment key={columnIndex}>
							<div className="column">
								{columnData.map((row, rowIndex) => {
									const arrow = row.change.includes('↑') ? '↑' : row.change.includes('↓') ? '↓' : '';
									const value = row.change.replace(/[↑↓]/g, '');

									return (
										<div className="row" key={rowIndex}>
											<span className='label'>{row.label}</span>
											<div className='change-value'>
											<span className='change'>
												<span className={arrow === '↑' ? 'arrow up' : 'arrow down'}>{arrow}</span>
												<span>{value}</span>
											</span>
											<span className='value'>{row.value}</span>
											</div>
										</div>
									);
								})}
							</div>
							{columnIndex < data.length - 1 && <div className="table-line"></div>}
						</React.Fragment>
					))}
				</div>
				<div className="DashboardTable-bottom">
					<p>Current/Max TPS 85/1,035</p>
					<p>Nodes 7,441</p>
					<p>Total Contracts 4,759,712</p>
					<p>Total Tokens 85,531</p>
				</div>
			</div>
		</div>
    
  );
};

export default DashboardTable;
