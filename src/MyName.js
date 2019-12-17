import React, { Component } from 'react';

class MyName extends Component {
  render() {
    return (
      <div>
        안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
        // ex> <MyName>
      </div>
    );
  }
}

MyName.defaultProps = {
  name : '김병관'

};

export default MyName;
