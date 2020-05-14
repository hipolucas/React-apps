/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Fragment, Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { WebView } from 'react-native-webview';
// import HeaderNavigation from '@bit/dcm.components.header-navigation';

import GraphBar from './reactweb/src/SharedComponents/graph-bar/graph-bar';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


class App extends Component {
  // constructor(props){
  //     super(props);
  //     this.state = {
  //         graphBar:{
  //             title: 'Monthly Cash Outflow',
  //             crosshair: false,
  //             outflowData: {
  //                 name: 'Outflow:',
  //                 data: [115360, 54950, 76550, 77050, 95000, 94900, 115900, 161900, 162100, 198300, 229300, 255500, 474780, 297790, 324901, 354944, 387990, 424341, 464327, 508313, 556694, 609914, 668459, 732858],
  //                 color: '#F4A24C',
  //             },
  //             xAxis: ['Jan 19', 'Feb 19', 'Mar 19', 'Apr 19', 'May 19', 'Jun 19','Jul 19', 'Aug 19', 'Sep 19', 'Oct 19', 'Nov 19', 'Dec 19', 'Jan 20', 'Feb 20', 'Mar 20', 'Apr 20', 'May 20', 'Jun 20','Jul 20', 'Aug 20', 'Sep 20', 'Oct 20', 'Nov 20', 'Dec 20'],
  //             series: [{
  //                 name: 'Outflow:',
  //                 data: [115360, 54950, 76550, 77050, 95000, 94900, 115900, 161900, 162100, 198300, 229300, 255500, 474780, 297790, 324901, 354944, 387990, 424341, 464327, 508313, 556694, 609914, 668459, 732858],
  //                 color: '#F4A24C',
  //             }],
  //             legend: false,
  //             resetToggle: false
  //         },          
  //     }
  // }

  renderDHtml(){
    return(
      <h1>Hello Word 20202</h1>
    )
  }

  render() {
    // const html = renderHTML(<GraphBar />)    
    // console.log(injectScript)
    let jsCode = ``;

    const html = `      
        <div>HTml goes here</div>
        <div id="react-strategy-list">Test goeslkjhflkesdn flksedn lkfjn sdlkjf l</div>
        <script src="https://uisrv.thotakaa.com/react/strategy-links/strategy-links.1585836301774.js"></script>
    `;
      return(
        <View style={{flex: 1}}>
          <WebView 
            source={{ html: html }}
            javaScriptEnabled={true}
            scalesPageToFit={true}
          />            
        </View>
      )
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
