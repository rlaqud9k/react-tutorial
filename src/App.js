import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MyName from './MyName'
import Counter from './Counter'
import Contents from './Contents'

class App extends Component {
  constructor(props){ //초기화담당
    super(props);
    this.state = {
      MyName:{name : 'wdb', sub : 'woreld kdnid'},
      Contents : [
        {id :1, title : 'one`', desc : '32'},
        {id :2, title : 'two', desc : '53'},
        {id :3, title : 'three', desc : '54'}

      ]
    }
  }
  render() {
   return (
     <div>
      <MyName name = {this.state.MyName.name}/>
      <Contents name = {this.state.Contents} />
      <Counter/>
     </div>
   );
 }
}

export default App;
