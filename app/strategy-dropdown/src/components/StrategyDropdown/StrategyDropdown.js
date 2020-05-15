import React from 'react';
import axios from 'axios';
import './StrategyDropdown.scss';

const graphIcon = {
    'Growth Long': 'growth-long.png',
    'Value Long': 'value-long.png',
    'Growth Short': 'growth-short.png',
    'Value Short': 'value-short.png',
    'Value Hedged': 'value-hedged.png',
    'Growth Hedged': 'growthHedged.png',
}

class OurStrategies extends React.Component{
    constructor(props){
        super(props),
        this.state = {
            strategylist:[]
        }
    }

    componentDidMount() {
        //window.addLoaderClass('strategy_links')
        axios.get('https://uisrv.thotakaa.com/rest/api/strategy/catalog').then(response =>{
            console.log('str links')
            this.setState({ strategylist: response.data.data });
            window.removeLoaderClass('strategy_links')
        } ).catch(error => {
                throw error
        });
    }

    renderData(data){
        return data.map((tag) => {
            return(
                <li className="menu-item">
                    <a href={"/strategy/"+tag.uid}>
                        <div className="strategy-element">
                            <div className="strategy-element-title">{tag.name}</div>
                            <div className={"strategy-element-value "+((tag.value.value < 0 ? "red" : "green"))}><span className="value">{tag.value.value}</span><span className="postfix">{tag.value.postfix}</span></div>
                            {graphIcon[tag.name] && 
                                <div className="strategy-element-graph">
                                    <img src={'/react/strategy-links/'+graphIcon[tag.name]} className="graph-icon" />
                                </div>
                            }
                        </div>                        
                    </a>         
                </li>
            )
        })
    }
    renderLoader(){
        return(
            <ul className="sub-menu-wrap">
                <li className="menu-item menu-item-mask">
                    <span></span>
                    <div>
                        <span></span>
                        <span></span>
                    </div>
                </li>
                <li className="menu-item menu-item-mask">
                    <span></span>
                    <div>
                        <span></span>
                        <span></span>
                    </div>
                </li>
                <li className="menu-item menu-item-mask">
                    <span></span>
                    <div>
                        <span></span>
                        <span></span>
                    </div>
                </li>
                <li className="menu-item menu-item-mask">
                    <span></span>
                    <div>
                        <span></span>
                        <span></span>
                    </div>
                </li>
                <li className="menu-item menu-item-mask">
                    <span></span>
                    <div>
                        <span></span>
                        <span></span>
                    </div>
                </li>
            </ul>
        )
    }
    render(){
        let {strategylist} = this.state;
        return(
            (strategylist.length>0) ? (
            <ul className="sub-menu-wrap">
                {this.renderData(strategylist)}                
            </ul>
            ) : (this.renderLoader())
        )
    }
}

export default OurStrategies