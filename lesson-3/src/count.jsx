import React from "react";

class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      title: "",
    };
  }
  render() {
    //
    const onchange = (e) => {
      this.setState({ title: e.target.value });
    };
    //
    const pilus = () => {
      if (this.state.num < 33) {
        this.setState({ num: this.state.num + 1 });
      } else {
        this.setState({ num: 0 });
      }
    };
    //
    const minus = () => {
      if (this.state.num > 0) {
        this.setState({ num: this.state.num - 1 });
      }
    };
    // 
    const select = (e)=>{
        console.log(e.target.value);
    }
    // 
    const check = (e) =>{
        console.log(e.target.checked);
    }

    return (
      <div>
        <h1>
          Maxsulotni nomi: {this.state.title} va sanog'i: {this.state.num}
        </h1>
        <input onChange={onchange} type="text" name="" id="" />
        <br />
        <button onClick={pilus}>+</button>
        <button onClick={minus}>-</button>

        <select onChange={select}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <input onChange={check} type="checkbox" />
      </div>
    );
  }
}

export default Count;
