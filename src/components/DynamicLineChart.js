import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Line} from 'react-chartjs-2'

const DynamicLineChart = () => {
    const [chartData, setChartData] = useState({})

    const employeeAge = []
    const employeeSalary = []

    const Chart = () =>{ 

        axios.get('http://dummy.restapiexample.com/api/v1/employees')
        .then(res => {
            console.log(res)
            for(const dataObj of res.data.data){
                employeeSalary.push(parseInt(dataObj.employee_salary))
                employeeAge.push(dataObj.employee_age)
            }

            //console.log(employeeSalary)

            setChartData({
                labels: employeeAge.sort(),
                datasets: [
                    {
                    label: 'Salary in $',
                    data: employeeSalary,
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderColor: [
                        'rgba(153, 102, 255, 1)',
                    ],
                    borderWidth: 4
                    }
                ]
            })
        })
        .catch(err => console.log(err))


        
    }

    useEffect(() => {
        Chart()
    },[])

    return (
        <div>
            <Line
            options = {{
                title:{
                    text: 'Data from API: Age vs Salary',
                    display: true,
                    fontSize: 25
                },
                maintainAspectRatio: false,
                scales:{
                    yAxes:[
                        {
                            ticks:{
                                beginAtZero: true
                            }
                        }
                    ]
                }
                
            }}
            height={400}
            width={600}
            data={chartData}
            />
        </div>
    )
}

export default DynamicLineChart
