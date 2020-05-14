import React from "react";
import ReactHighcharts from "react-highcharts";
import './graph-donut.scss';


class GraphDonut extends React.Component {
    constructor(props) {
        super(props);

        ReactHighcharts.Highcharts.setOptions({
          lang: {
            thousandsSep: ','
          }
        })
        this.state = {
          config : {
                chart: {
                    type: 'pie'
                },
                title: {
                    text: ''
                },
                plotOptions: {
                    pie: {
                        shadow: false,
                        center: ['50%', '50%']
                    }
                },
                tooltip: {
                    valuePrefix: '$'
                },
                series: [{
                    name: this.props.tooltiptext,
                    data: this.props.data,
                    size: '80%',
                    innerSize: '75%',
                    dataLabels: {
                        formatter: function () {
                            var display = '', amount = this.y;
                            amount.toString().split('').reverse().forEach((am,i)=>{
                                if((i+1)%3 || (i+1) == amount.toString().split('').length) {display = am+display} else {display = ','+am+display}
                            });

                            return this.y > 1  ? this.point.name +
                                ' $'+display : null;
                        }
                    },
                    id: 'versions'
                }],
                responsive: {
                    rules: [{
                        condition: {
                            maxWidth: 400
                        },
                        chartOptions: {
                            series: [{
                            }, {
                                id: 'versions',
                                dataLabels: {
                                    enabled: true
                                }
                            }]
                        }
                    }]
                }
            }
        }
    }

    componentDidMount() {
    }
  
    componentWillUnmount() {
    }

    render() {
        const { title, data, legend = true } = this.props;

        const legendItems = data.map((item) =>
            <div className="legendwrap">
                <div className="dot" style={{background: item.color}}></div>
                <div className="label"><b>30.4% -</b> {item.name}</div>
            </div>
        );


        return(
          <div className="graph-wrap">
            <div className="graph-header">
                <h4 className="graph-header-text">{title}</h4>
            </div>
            <div className="pt-2 pb-4">
                <ReactHighcharts config = {this.state.config}></ReactHighcharts>
                {legend && (
                    <div className="graph-legends col-two middle">
                        {legendItems}
                    </div>
                )}                
            </div>
        </div>
        );
    }
}

export default GraphDonut;