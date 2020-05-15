import React from 'react';
import { render } from 'react-dom';
import MyComponent from './components/StrategyDropdown/StrategyDropdown';
// let data = [{"name":"Growth Long","uid":"WOUIUNW7387N83","value":{"value":"9.2","postfix":"%"}},{"name":"Value Long","uid":"UEYGD8398J930","value":{"value":"5.6","postfix":"%"}},{"name":"Growth Short","uid":"3809389SK03J8HD","value":{"value":"-1.6","postfix":"%"}},{"name":"Value Short","uid":"789H7S38789GH93PSJ","value":{"value":"5.6","postfix":"%"}},{"name":"Value Hedged","uid":"28S398BCSYUYEBUY","value":{"value":"-1.6","postfix":"%"}},{"name":"Growth Hedged","uid":"UIJUDU8309SK09JAY","value":{"value":"-1.6","postfix":"%"}}]
const App = () => ( < MyComponent / > );
render( < App / > , document.getElementById("react-strategy-list"));