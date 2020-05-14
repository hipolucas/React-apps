import React from "react";
import ReactHighcharts from "react-highcharts";
import './graph-bar.scss';

class GraphBar extends React.Component {
    constructor(props) {
        super(props);

        // ReactHighcharts.Highcharts.setOptions({
        //   lang: {
        //     thousandsSep: ','
        //   }
        // })
        this.state = {
            config: {
                chart: {
                    type: 'column'
                },
                title: {
                    text: '',
                },
                xAxis: {
                    categories: [],
                    crosshair: false,
                    title: {
                        text: 'Months'
                    },
                    plotBands:[{
                        color: 'rgba(253, 255, 226, 1)',
                        from: 12.8,
                        to: 24
                    }],
                    plotLines: [{
                        value: 12.8,
                        dashStyle: 'dash',
                        width: 1,
                        color: '#d33',
                        label: {
                            text: 'Today',
                            align: 'right',
                            // rotation: 0,
                            y: 40,
                            x: -12
                        }
                    }],
                },
                legend: {
                    enabled: false
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Amount in Dollars'
                    }
                },
                tooltip: {
                    valuePrefix: '$',
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}</td>' +
                        '<td style="padding:0"><b>{point.y}</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                series: []
            },
            // resetToggle: this.props.data.resetToggle
        }
    }

    componentDidMount() {
        this.setGraphConfig();
    }

    componentDidUpdate(prevProps) {
        if(this.state.resetToggle != this.props.data.resetToggle) {
            this.setGraphConfig();
        }
    }
  
    componentWillUnmount() {
    }

    setGraphConfig() {
        let config = {
            chart: {
                type: 'column'
            },
            title: {
                text: '',
            },
            xAxis: {
                categories: this.props.data.xAxis,
                crosshair: this.props.data.crosshair,
                title: {
                    text: 'Months'
                },
                plotBands:[{
                    color: 'rgba(253, 255, 226, 1)',
                    from: 12.8,
                    to: 24
                }],
                plotLines: [{
                    value: 12.8,
                    dashStyle: 'dash',
                    width: 1,
                    color: '#d33',
                    label: {
                        text: 'Today',
                        align: 'right',
                        // rotation: 0,
                        y: 40,
                        x: -12
                    }
                }],
            },
            legend: {
                enabled: this.props.data.legend
            },
            yAxis: {
                title: {
                    text: this.props.xAxisText ? this.props.xAxisText : 'Amount in Dollars',
                }
            },
            tooltip: {
                valuePrefix: this.props.xAxisText ? '' : '$',
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}</td>' +
                    '<td style="padding:0"><b>{point.y}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            series: this.props.data.series
        }
        this.setState({resetToggle: this.props.data.resetToggle, config});
    }

    render() {
        return(          
            <div className="graph-wrap">
                <div className="graph-header">
                    <h4 className="graph-header-text">{this.props.data.title}</h4>
                </div>
                <div className="pt-2 pb-4">
                    <ReactHighcharts config = {this.state.config}></ReactHighcharts>
                </div>
            </div>
        );
    }
}

export default GraphBar;