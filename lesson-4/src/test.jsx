import React from "react";
import { student } from "./api.js";

class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      surname: "",
      data: student,
    };
  }
  render() {
    const onnames = (e) => {
      console.log(e);
      this.setState({ name: e?.target?.value });
    };
    const surname = (e) => {
      console.log(e);
      this.setState({ surname: e?.target?.value });
    };

    //!FIlter
    const onFilter = (e) => {
      let res = student.filter((value) => value.ism.includes(e.target.value));
      this.setState({
        data: res,
      });
    };
    return (
      <div>
        <h2>Ism: {this.state.name} </h2>
        <h2>Familiya: {this.state.surname}</h2>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => onnames(e, "hey")}
        />
        <input
          type="text"
          placeholder="SurName"
          onChange={(e) => surname(e, "hey")}
        />
        <br />
        <hr />

        <input onChange={onFilter} placeholder="Filter" type="text" />
        {this.state.data.map(({ id, ism, daraja }) => {
          return (
            <h1 key={id}>
              {id} {ism} {daraja}
            </h1>
          );
        })}
        <hr />
      </div>
    );
  }
}

export default Test;
