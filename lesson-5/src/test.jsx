import React from "react";
import { student } from "./api.js";

class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      daraja: "",
      data: student,
      search: "id",
      active: null,
    };
  }
  render() {
    const onSelect = (e) => {
      this.setState({ search: e.target.value });
    };
    // !
    const onChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
    };

    //!FIlter
    const onFilter = (e) => {
      const { value } = e.target;
      let res = student.filter((item) =>
        `${item[this.state.search]}`
          .toLocaleLowerCase()
          .includes(value.toLowerCase())
      );
      this.setState({
        data: res,
      });
    };

    // ! Delete = O'chirish

    const onDelete = (id) => {
      let res = this.state.data.filter((value) => value.id !== id);
      this.setState({ data: res });
    };
    // ! Edir o'zgartirsh
    const onEdit = ({ id, ism, daraja }, isSave) => {
      if (isSave) {
        let res = this.state.data.map((value) => 
          value.id === this.state.active.id
            ? {...value, ism: this.state.ism , daraja: this.state.daraja}
            : value
        );
        this.setState({ active: null , data: res});
      } else {
        this.setState({ ism:ism,
          daraja:daraja,
           active: { id, ism, daraja } });
      }
    };

    // ! Todo list qo'shish
    const onAdd = () => {
      let user = {
        id: Date.now(),
        ism: this.state.ism,
        daraja: this.state.daraja,
      };
      this.setState({
        data: [...this.state.data, user],
        name: "",
        daraja: "",
      });
    };
    return (
      <div>
        <h2>Ism: {this.state.ism} </h2>
        <h2>Daraja: {this.state.daraja}</h2>
        <input
          value={this.state.ism}
          name="ism"
          type="text"
          placeholder="Ism"
          onChange={onChange}
        />
        <input
          value={this.state.daraja}
          name="daraja"
          type="text"
          placeholder="Daraja"
          onChange={onChange}
        />
        <button onClick={onAdd}>Add</button>
        <br />
        <hr />
        <select onChange={onSelect} name="" id="">
          <option value="id">Id</option>
          <option value="ism">Ism</option>
          <option value="daraja">Daraja</option>
        </select>
        <input
          id="serchinp"
          onChange={onFilter}
          placeholder="Filter"
          type="text"
        />
        <hr />
        <table border="1" id="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Ism</th>
              <th>Daraja</th>
              <th>O'chirsh</th>
              <th>O'zgartirsh</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.length ? (
              this.state.data.map(({ id, ism, daraja }) => {
                return (
                  <tr key={id}>
                    <td> {id}</td>
                    <td>
                      {" "}
                      {this.state.active?.id === id ? (
                        <input
                          onChange={onChange}
                          name="ism"
                          value={this.state.ism}
                          type="text"
                        />
                      ) : (
                        ism
                      )}
                    </td>
                    <td>
                      {" "}
                      <td>
                        {" "}
                        {this.state.active?.id === id ? (
                          <input
                            onChange={onChange}
                            name="daraja"
                            value={this.state.daraja}
                            type="text"
                          />
                        ) : (
                          daraja
                        )}
                      </td>
                    </td>
                    <td>
                      <button onClick={() => onDelete(id)}>O'chirsh</button>
                    </td>
                    <td>
                      <button
                        onClick={() =>
                          onEdit(
                            { id, ism, daraja },
                            this.state.active?.id === id
                          )
                        }
                      >
                        {this.state.active?.id === id
                          ? "Saqlash"
                          : "O'zgartirish"}
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <th colSpan={5}>
                  <h1>Ma'lumot yo'q</h1>
                </th>
              </tr>
            )}
          </tbody>
        </table>
        <hr />
      </div>
    );
  }
}

export default Test;
