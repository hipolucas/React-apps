import React from 'react';
import './Shared.scss';

import GraphBar from '../../SharedComponents/graph-bar/graph-bar';
import Content from '../../SharedComponents/Content';
import Tables from '../../SharedComponents/Tables';

class Shared extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            graphBar:{
                title: 'Monthly Cash Outflow',
                crosshair: false,
                outflowData: {
                    name: 'Outflow:',
                    data: [115360, 54950, 76550, 77050, 95000, 94900, 115900, 161900, 162100, 198300, 229300, 255500, 474780, 297790, 324901, 354944, 387990, 424341, 464327, 508313, 556694, 609914, 668459, 732858],
                    color: '#F4A24C',
                },
                xAxis: ['Jan 19', 'Feb 19', 'Mar 19', 'Apr 19', 'May 19', 'Jun 19','Jul 19', 'Aug 19', 'Sep 19', 'Oct 19', 'Nov 19', 'Dec 19', 'Jan 20', 'Feb 20', 'Mar 20', 'Apr 20', 'May 20', 'Jun 20','Jul 20', 'Aug 20', 'Sep 20', 'Oct 20', 'Nov 20', 'Dec 20'],
                series: [{
                    name: 'Outflow:',
                    data: [115360, 54950, 76550, 77050, 95000, 94900, 115900, 161900, 162100, 198300, 229300, 255500, 474780, 297790, 324901, 354944, 387990, 424341, 464327, 508313, 556694, 609914, 668459, 732858],
                    color: '#F4A24C',
                }],
                legend: false,
                resetToggle: false
            },
            graphDonutData: [
                {
                    name: 'Asset & Investment',
                    y: 2080000,
                    display: 2080000,
                    color: '#F4A24C',
                },
                {
                    name: 'Cost of Sale (COS)',
                    y: 2064376,
                    display: '$2,064,376',
                    color: '#F0AD92',
                },
                {
                    name: 'Staff Expenses',
                    y: 1814379,
                    display: '$2080000',
                    color: '#C1DBD0',
                },
                {
                    name: 'Technical Support',
                    y: 851529,
                    display: '$2080000',
                    color: '#FFE264',
                },
                {
                    name: 'Marketing Expenses',
                    y: 818034,
                    display: '$2080000',
                    color: '#95ACA4',
                },
                {
                    name: 'Taxes',
                    y: 412876,
                    display: '$2080000',
                    color: '#EBDECB',
                },
                {
                    name: 'Professional Fees',
                    y: 391611,
                    display: '$2080000',
                    color: '#443742',
                },
                {
                    name: 'Facilities',
                    y: 379410,
                    display: '$2080000',
                    color: '#004777',
                },
                {
                    name: 'Project Contract Resources',
                    y: 143424,
                    display: '$2080000',
                    color: '#C1DBD0',
                },
                {
                    name: 'Financial',
                    y: 130000,
                    display: '$2080000',
                    color: '#ECE4B7',
                },
                {
                    name: 'Office Support',
                    y: 106922,
                    display: '$2080000',
                    color: '#7FB069',
                },
                {
                    name: 'IT/IS',
                    y: 43050,
                    display: '$2080000',
                    color: '#4D9078',
                },
                {
                    name: 'Banking Charges',
                    y: 6510,
                    display: '$2080000',
                    color: '#EDD892',
                },
            ],
        }
    }

    render(){
        return(
            <>
                <div className="container">
                    <div className="graph-container">
                        <GraphBar data={this.state.graphBar} />  
                    </div>
                    {/* <Content /> */}
                    <Tables />
                </div>
            </>
        )
    }
}

export default Shared;