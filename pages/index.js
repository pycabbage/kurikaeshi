import { Component } from "react"
import style from "../styles/Home.module.css"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "",
      dark: false,
      entering: true
    }
  }

  scroll(x, y) {
    return (scroll||((a, b)=>{}))(x, y)
  }

  render() {
    return (
      <div className={style.container}>
        <div style={{
          display: this.state.entering ? "none" : "inline",
          backgroundColor: this.state.dark ? "black" : "white",
          color: this.state.dark ? "white" : "black",
          textOverflow: ""
        }}>
        {
          (()=>{
            let ww = []
            for(let w=0; w<1000; w++) {
              ww.push(
                (
                  <div>
                    {(()=>{
                      let hh=[]
                      for(let w=0; w<100; w++) {
                        hh.push((this.state.text))
                      }
                      return hh
                    })()}
                  </div>
                )
              )
            }
            return ww
          })()
        }
        </div>
        <form onSubmit={e=>{
          e.preventDefault()
          console.log(e.target.text.value)
          this.setState({
            text: e.target.text.value,
            dark: e.target.dark.value==="dark"
          })
          if (e.target.autoscroll.checked) {
            this.count = 0
            this.scrollLoop = setInterval(()=>{
              this.count++
              this.scroll(0, this.count*10)
            }, 100)
          }
          this.setState({entering: false})
        }} style={{ display: this.state.entering?"inline":"none"}}>
          <input type="text" name="text" placeholder="繰り返すテキストをここに入力" minLength={1}></input>
          <br/>
          <label>
            <input type="radio" name="dark" value="light" defaultChecked={true}/>白背景
          </label>
          <label>
            <input type="radio" name="dark" value="dark" />黒背景
          </label>
          <br/>
          <label>
            <input type="checkbox" name="autoscroll"/>
            自動スクロール
          </label>
          <input type="submit" value="Loop!"/>
        </form>
      </div>
    )
  }
}
