import React from 'react'
import {Bar} from 'react-chartjs-2'

const BarChart = () => {
    return (
        <div>
            <Bar 
                data={{
                    labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
                    datasets: [
                        {
                        label: 'Population (millions)',
                        data: [2478,5267,734,784,433],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    },
                ]
                }}
                height={400}
                width={600}
                options={{
                    maintainAspectRatio: false,
                    legend:{
                        position: 'bottom'
                    },
                    title:{
                        text: 'Bar Graph: Predicted Population in 2050',
                        display: true,
                        fontSize: 25
                    },
                    scales:{
                        yAxes:[{
                            ticks:{
                                beginAtZero: true
                            }
                        }]
                    }
                }}
            />
        </div>
    )
}

export default BarChart
