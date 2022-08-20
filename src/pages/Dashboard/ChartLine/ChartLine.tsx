import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    Tooltip,
    PointElement,
    Filler,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Tooltip,
    Filler
);

type Props = {};

const ChartLine = (props: Props) => {
    const [chartData, setChartData] = useState<any>({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState<any>({});

    useEffect(() => {
        setChartData({
            labels: [
                '',
                'Thứ 2',
                '',
                'Thứ 3',
                '',
                'Thứ 4',
                '',
                'Thứ 5',
                '',
                'Thứ 6',
                '',
                'Thứ 7',
                '',
                'Chủ Nhật',
            ],
            datasets: [
                {
                    label: "Let's go",
                    tension: 0.3,
                    data: [
                        150, 170, 180, 150, 190, 230, 220, 220, 260, 210, 180,
                        180, 200, 260,
                    ],
                    borderColor: 'orange',
                    backgroundColor: 'rgba(250, 160, 95, 0.26)',
                    fill: true,
                    fillerColor: 'red',
                    pointStyle: 'none',
                    pointRadius: 0,
                    pointBorderColor: 'orange',
                },
            ],
        });
        setChartOptions({
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    min: 140,
                    max: 260,
                    stepSize: 40,
                    grid: {
                        display: true,
                    },
                    ticks: {
                        maxTicksLimit: 8,
                        display: true,
                    },
                },
                x: {
                    grid: {
                        display: false,
                    },
                },
            },
        });
    }, []);

    return <Line options={chartOptions} data={chartData} height='40px' />;
};

export default ChartLine;
