import React, { Component } from 'react'
import Header from '../components/Header'
import FbButton from '../components/FbButton'


class App extends Component {
    componentDidMount(){
        this.txt2.focus();
    }
    state = {like:0, dislike:0}
    render() {
        let {like, dislike} = this.state
        return ( 
            <div>
            <Header title="I am Header" like={like}/>
            <h4>Like: {like}</h4>
            <h4>DisLike: {dislike}</h4>
            <FbButton handleClick={this.onLike} caption="Like"/>
            <FbButton handleClick={this.onDisLike} caption="DisLike"/>
            <input type="text" ref={(input) => {
                this.txt1 = input;
            }}/>
            <input type="text" ref={(input) => {
                this.txt2 = input;
            }}/>
            </div>
        )
    }

    onLike = () => {

        this.setState(prevState =>{
            return {
                like:prevState.like +1 
            }
        })

        this.setState(prevState =>{
            return {
                like:prevState.like +1
            }
        })


    }

    onDisLike = () => {
        let {dislike} = this.state
        this.setState({dislike:dislike + 1})
    }


}
export default App
/* 
การเข้าถึง DOM element ด้วย Ref
ปกติใน Jquery เวลาที่เราต้องการ set focus ให้กับ textbox เราจะสั่ง $('#textid').focus() สำหรับ Rect นั้น เราต้องใช้ Ref โดยมีวิธีใช้งานแบบนี้
เราต้องการเข้าถึง DOM ตัวไหนเราก็ระบุ props ว่า ref แล้วกำหนดชื่อให้มัน ซึ้งก็เหมือนใน javascript ทั้วๆไปที่มีการกำหนด id จากนั้นเราจะเข้าถึง ref ได้ที่ componentDidMount() โดยเรียก this.refs.txt2 สังเกตุว่า refs นี้เติม s นะครับแล้วต่อด้วยชื่อของ reft จากนั้นระบุว่าจะทำอะไร โดยส่วนใหญ่เป็นการ set focus ด้วยคำสั่ง focus() ครับ
การกำหนด ref วิธีข้างบนทาง React เขาไม่แนะนำให้ใช้ แต่เขาให้ใช้อีกวิธีครับเป็นลักษณะของการกำหนดแบบ function เหมือนเดิมครับ 

รูปแบบการประกาศ ref ก็คือ ref={(input) => {this.txt1=input}} โดยที่ input คือตัวแปรที่เราตั้งขึ้นครับเป็นอะไรก็ได้ไม่ต้องเป็นคำว่า input ส่วนการเข้าถึง ref ใน componentDidMount() ก็เปลียนจาก this.refs เป็นอ้างถึง this.txt2 คือชื่อของ ref ได้เลยครับ
*/