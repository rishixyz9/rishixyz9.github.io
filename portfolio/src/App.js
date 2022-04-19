import './styles/App.css';
import Bar from './components/Bar';
import Loading from './Loading';
import React, { useEffect, useState } from 'react';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
    }
  }

  async componentDidMount(){
    var sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
    await sleep(10000);
    this.setState({isLoading: false})
  }

  render(){
    let {isLoading} = this.state;
    if(isLoading) {
      return(
        <Loading/>
      );
    }
    else{
      return (
        <body>
          <Bar/>
        </body>
      );
    }
  }

}
