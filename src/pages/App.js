import React, { Component } from 'react'
import Header from '../components/Header'
import FbButton from '../components/FbButton'
import axios from 'axios';


class App extends Component {
    state = { 
        
        data: null,
        name:''
    
    
    
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts?userId=1')
            .then(function (response) {
                this.setState({ data: response.data })
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            })
        this.txt2.focus();
    }
    state = { like: 0, dislike: 0 }
    render() {
        const { data } = this.state
        let { like, dislike } = this.state
        return (
            <div>
                <Header title="I am Header" like={like} />
                <h4>Like: {like}</h4>
                <h4>DisLike: {dislike}</h4>
                <FbButton handleClick={this.onLike} caption="Like" />
                <FbButton handleClick={this.onDisLike} caption="DisLike" />
                <input type="text" ref={(input) => {
                    this.txt1 = input;
                }} />
                <input type="text" ref={(input) => {
                    this.txt2 = input;
                }} />
                {data && data.map(d => {
                    return (
                        <div key={d.id}>
                            <div><b>{d.title}</b></div>
                            <div>{d.body}</div>
                        </div>
                    )
                })}

                <h1>App Form</h1>
                <form>
                    <label>
                        Name:
                        <input
                            name="name"
                            placeholder="enter Name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </label>
                </form>
                <button onClick={this.handleClick}>Change Text</button>
            </div>
        )
    }

    onLike = () => {

        this.setState(prevState => {
            return {
                like: prevState.like + 1
            }
        })

        this.setState(prevState => {
            return {
                like: prevState.like + 1
            }
        })


    }

    onDisLike = () => {
        let { dislike } = this.state
        this.setState({ dislike: dislike + 1 })
    }

    handleClick = e =>{
        this.setState({name:"I am React"})
    }
    handleChange = e =>{
        this.setState({name:e.target.value})
    }


}
export default App
/* 
form แบบควบคุมได้
คำตอบคือ พอทำงานจริงๆ การที่เราจะส่งค่าของฟอร์มไปบันทุกข้อมูล เราจะส่งไปกับ state ครับหรือไม่เขาก็จะใช้ module ตัวหนึ่งที่ชื่อว่า redux-form ในการเก็บค่าของ form เข้า state แบบอัตโนมัติเพื่อเอาไปใช้งาน

จากโค้ดจะเห็นว่ามีการใช้งาน state ซึ้ง state นี้เราเอาไปใช้กำหนดค่าใน textbox และเหมือนเดิมใน TextBox เราต้องกำหนด event onChange ด้วยนะครับ โดยเรียก function handleChange
และที่สำคัญ ปุ่ม ที่เพิ่มเข้ามาผมทำเพื่อแสดงให้เห็นว่าในกรณีที่เราต้องการเปลียนแปลงค่าของ TextBox เราก็สั่ง setState เพื่อให้ค่าใน TextBox มันเปลียน (เพราะ TextBox ตัวนี้ผูก value ไว้กับ state.name) ถ้าเป็นการใช้งาน form ก่อนหน้านี้เราจะสั่งเปลียนค่าใน textbox ไม่ได้นะครับ

*/