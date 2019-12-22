import React, {Component} from 'react';

class Contents extends Component{
    constructor(props){
      super(props);
      this.state = {
        mode : 'start'
      }
    }
  render(){
      var lists = [];
      var name = this.props.name;
      var i = 0;
      while (i < name.length) {
        lists.push(<li onClick ={function(e){
          console.log(this.state.mode);
          //디버깅 가능하게 해줌
          //debugger;
          //e.preventDefault(); //이벤트 이후 기본동작 방지
          // event처리안에서 this의 값은 아무값도 들어있지 않다
          // 이럴때 this를 쓰고 싶은 경우에는 함수 끝에다가 .bind(this)입력
          this.setState({mode:'end'});
        }.bind(this)} key = {name[i].id}>{name[i].id}</li>)
        lists.push(<li key = {name[i].id}>{name[i].title}</li>)
        lists.push(<li key = {name[i].id}>{name[i].desc}</li>)
        i = i+1
      }
    return(


      <div onClick={function(e){
        e.preventDefault();
        // this.props.onChangePage(this.props.dename);
      }.bind(this)}>

        {lists}
      </div>
    );

  }



}

export default Contents;
