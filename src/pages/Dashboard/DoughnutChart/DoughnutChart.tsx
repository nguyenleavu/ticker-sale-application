import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

type Props = {};

const DoughnutChart = (props: Props) => {
    ChartJS.register(ArcElement, Tooltip);
    const data = {
        labels: ['Blue', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 3],
                backgroundColor: [
                    'rgba(79, 117, 255, 1)',
                    'rgba(255, 138, 72, 1)'
                ],               
                borderWidth: 0,
            },
        ],
    };

    return (
        <Doughnut
            data={data}
            options={{
                maintainAspectRatio: false,
            }}
            height={246}
        />
    );
};

export default DoughnutChart;
