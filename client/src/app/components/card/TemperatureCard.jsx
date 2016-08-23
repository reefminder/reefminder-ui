import React from 'react';
import Card from './Card.jsx';
import { Line } from 'react-chartjs-2';

export default class TemperatureCard extends React.Component {

    static data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'My First dataset',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'white',
                borderColor: 'white',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'white',
                pointBackgroundColor: 'white',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40]
            }
        ]
    };

    static options = {
        legend: {
            labels: {
                fontColor: 'white'
            }
        },
        scales: {
            scaleLabel: {
                fontColor: 'white'
            },
            xAxes: [{
                gridLines: {
                    color: 'white'
                },
                scaleLabel: {
                    fontColor: 'white',
                    display: true,
                    labelString: 'Hello',
                    fontSize: 20
                },
                ticks: {
                    fontColor: 'white'
                }
            }],
            yAxes: [{
                gridLines: {
                    color: 'white'
                },
                scaleLabel: {
                    fontColor: 'white',
                    display: true,
                    labelString: 'Hello',
                    fontSize: 20
                },
                ticks: {
                    fontColor: 'white'
                }
            }]
        }
    };

    render() {
        return <div>
            <Line data={ TemperatureCard.data } options={ TemperatureCard.options }/>
        </div>;
    }
}