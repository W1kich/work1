import DashboardTable from "../dashboardTable/DashboardTable";
import LatestBlocksTable from "../latestBlocksTable/LatestBlocksTable";
import LatestTransactionsTable from "../latestTransactionsTable/LatestTransactionsTable";
import './FullTable.css';
import cub from './cub.png';
import block from './block.svg';

const data = [
  [
    { label: 'Total Accounts:', change: '↓ 0.2%', value: '464.1M / 580.1M' },
    { label: 'New accounts in 24 hours:', change: '↑ 0.2%', value: '464.1M / 580.1M' },
    { label: 'Number of transactions in 24 hours:', change: '↓ 0.2%', value: '464.1M / 580.1M' },
    { label: '80.0% is circulating:', change: '↑ 0.2%', value: '464.1M / 580.1M' },
    { label: 'Circulating Supply:', change: '↑ 0.2%', value: '464.1M / 580.1M' },
  ],
  [
    { label: 'Current/Maximum AI transaction processing:', change: '↑ 0.2%', value: '464.1M / 580.1M' },
    { label: 'Number of models trained by AI:', change: '↑ 0.2%', value: '464.1M / 580.1M' },
    { label: 'Total number of AI training iterations per:', change: '↓ 0.2%', value: '464.1M / 580.1M' },
    { label: 'Number of nodes:', change: '↑ 0.2%', value: '464.1M / 580.1M' },
    { label: 'Total computing power of nodes:', change: '↑ 0.2%', value: '464.1M / 580.1M' },
    { label: 'Node data storage capacity:', change: '↓ 0.2%', value: '464.1M / 580.1M' },
  ],
];

const blocksData = [
  {
		img: block,
		numberTime:'10secs',
    number: '12215522',
    recipientLink: '1215155txns',
    recipientLinkText: '1215155txns',
    commissionTime: '10secs',
    speed: '10 min/hour',
    amount: '0,0014 Eth'
  },
	{
		img: block,
		numberTime:'10secs',
    number: '12215522',
    recipientLink: '1215155txns',
    recipientLinkText: '1215155txns',
    commissionTime: '10secs',
    speed: '10 min/hour',
    amount: '0,0014 Eth'
  },
	{
		img: block,
		numberTime:'10secs',
    number: '12215522',
    recipientLink: '1215155txns',
    recipientLinkText: '1215155txns',
    commissionTime: '10secs',
    speed: '10 min/hour',
    amount: '0,0014 Eth'
  },
	{
		img: block,
		numberTime:'10secs',
    number: '12215522',
    recipientLink: '1215155txns',
    recipientLinkText: '1215155txns',
    commissionTime: '10secs',
    speed: '10 min/hour',
    amount: '0,0014 Eth'
  },
	{
		img: block,
		numberTime:'10secs',
    number: '12215522',
    recipientLink: '1215155txns',
    recipientLinkText: '1215155txns',
    commissionTime: '10secs',
    speed: '10 min/hour',
    amount: '0,0014 Eth'
  }
];

function FullTable(){
	return(
		<div className="FullTable">
			<img className="cub" src={cub} alt="" />
			<DashboardTable data={data}/>
			<div className="LatestTables">
				<LatestBlocksTable blocks={blocksData} />
				<LatestTransactionsTable blocks={blocksData} />
			</div>
		</div>
	)
}

export default FullTable;