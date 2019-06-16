import React, { Component } from 'react'
import Header from '../components/Header'
import FbButton from '../components/FbButton'
import axios from 'axios';


class App extends Component {
    state = { data: null }
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


}
export default App

/* 
อธิบายโค๊ด
A. สร้าง state และกำหนดค่าเริ่มต้นให้ data มีค่าเท่ากับ null เพื่อที่เราจะใช้เก็บค่าที่ได้จากการ fetchdata 
B. จัดเก็บค่าที่ได้ลง state ครับ สังเกตุว่าผมสั่ง setState แบบธรรมดาเนื่องจากเรารู้แน่นอนแล้วว่าเราจะ set 
ค่านี้ลงไปใน state มันไม่เหมือนการบวกเลขในตัวอย่างก่อนๆนะครับ 
C. โค้ดบรรทัดนี้อาจจะแปลกตาหน่อยนะครับ ใน ES6 เขาเรียกว่าเป็นการ destructruring ออกจาก object โดยเรากำหนดชื่อตัวแปรเป็นชื่อเดียวกันกับ ตัวแปรที่อยู่ใน Onject ครับ ข้อดีของการ destructruring คือถ้าเราไม่ทำเหมือนโค้ด ข้างบน ทุกครั้งที่เราจะเรียกใช้ data ใน state เราจะต้องเขียนเป็น this.state.data แบบนี้ตลอดถ้ามีหลายบรรทัดคงไม่ดี
D.เป็นการ loop Array โยใช้คำสั่ง map โดยเราจะต้องเช็คก่อนว่า data มีค่าหรือไม่ โดยใน map เราก็เขียนเป็น Arrow Function เหมือนในโค๊ด ตรงนี้ทำบ่อยๆ จุดที่น่าสังเกตคือ <div key={d.id}> ในการ map นั้น react บอกว่าจะมีการกำหนด key ไว้ด้วยใน elemant ที่มีการ loop จากโค้ดเราเอา div ครอบไว้จึงต้องกำหนด key ใน element ที่มีการ loop จากโค้ดเราเอา div ครอบไว้จึงต้องกำหนด key (react มันใช้ key ในการเช็ดครับว่า dom มีการเปลียนแปลงหรือไม่ การแสดงข้อมูลจากการ map เช่น d.title, d.body ส่วน object ชื่อ title กับ body ก็ได้มีการ fetch data นั้นเองครับ)

เราสามารถเปลียนชื่อตัวแปรที่ destructuring ได้โดยใช้เครื่องหมาย : เช่น
const{data:ac} = this.state

*/