import CalendarIcon from '~/assets/icons/CalendarIcon';
import ChartLine from './ChartLine/ChartLine';
import './Dashboard.css';
import DoughnutChart from './DoughnutChart/DoughnutChart';

const Dashboard = () => {
    return (
        <div className='Home__wrapper'>
            <div className='Home__title-chart'>
                <h1>Thống kê</h1>
            </div>
            <div className='Home__chart-1'>
                <h5>Doanh Thu</h5>
                <ChartLine />
            </div>
            <div className='Home__total-chart'>
                <span>Tổng doanh thu theo tuần</span>
                <div>
                    <h2>525.145.000</h2>
                    <span>đồng</span>
                </div>
            </div>
            <div className='Home__chart-2'>
                <div className='Home__chart-wrapper'>
                    <div className='Home__chart-calender'>
                        <span className='Home__chart-date'>Tháng 4, 2021</span>
                        <span className='Home__chart-icon'>
                            <CalendarIcon />
                        </span>
                    </div>
                    <div className='Home__chart-pie'>
                        <DoughnutChart />
                    </div>
                    <div className='Home__chart-pie'>
                        <DoughnutChart />
                    </div>
                    <div className='Home__chart-tooltip-wrapper'>
                        <div className='Home__chart-tooltip'>
                            <div className='Home__chart-color-blue'></div>
                            <span>Vé đã sử dụng</span>
                        </div>
                        <div className='Home__chart-tooltip'>
                            <div></div>
                            <div className='Home__chart-color-orange'></div>
                            <span>Vé đã sử dụng</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
