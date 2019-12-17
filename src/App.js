import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MyName from './MyName'
import Counter from './Counter'

class App extends Component {
  constructor(props){ //초기화담당
    super(props);
    this.state = {
      MyName:{name : 'wdb', sub : 'woreld kdnid'}
    }
  }
  render() {
   return (
     <div>
      <MyName name = {this.state.MyName.name}/>
      <Counter/>
     </div>
   );
 }
}

export default App;
