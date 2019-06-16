import React, { Component } from 'react'

class Header extends Component {

  componentWillMount(){
    console.log('Header: willMoint')
  }

  componentDidMount(){
    console.log('Header: didMoint')
  }

  /* 
  จะทำงานเมื่อ component ถูก rerender อีกครั้ง (render ครั้งที่ 2)
  
  */
  componentWillReceiveProps(nextProps){
    
    if(nextProps.like > this.props.like){

      console.log('nextProps.like > 0');

    }
  }


  render() {
    console.log('Header: render')
    return (
      <div>
        {/*  
        shouldComponentUpdate()
        ไม่ render สิ่งกับสิ่งที่ไม่เกิด action เช่น header เพราะไม่มี action อะไร 
        เราสามารถเช็คค่า nextProps กับ nextState ได้ กับ component ที่ไม่มี action อะไรเลยตัวอย่าง
        default คือ true
        shouldComponentUpdate(nextProps, nextState){
            return false
        }
        */}
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}

export default Header
