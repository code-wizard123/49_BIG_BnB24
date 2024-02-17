import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'

export const LineChart = () => {
    const xValues = ["Feb 2022", "March 2022", "Dec 2022", "Jan 2023"];
    const yValues = [45, 50, 76, 90];
    return (
        <div>
            <Line
                data={{
                    labels: xValues,
                    datasets: [{
                        label: 'Ethereum',
                        fill: false,
                        lineTension: 0,
                        backgroundColor: "white",
                        borderColor: "yellow",
                        data: yValues,
                        pointStyle: 'circle',
                        pointRadius: 8,
                        pointHoverRadius: 12
                    }]
                }}
                height={400}
                width={600}
                options={{
                    maintainAspectRatio: false
                }}
            />
        </div>
    )
}
