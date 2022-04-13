import './styles/App.css';
import Bar from './components/Bar';
import Loading from './Loading';
import React from 'react';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
    }
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
