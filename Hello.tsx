import React from 'react';

export default class Todo extends React.Component {
  handleFilterClick = (e) => {
    const name = e.target.name;
  }
  render() {
    return (
      <div>
        <button onClick={this.handleFilterClick} name="SHOW_ALL">SHOW ALL</button>
        <button onClick={this.handleFilterClick} name="SHOW_COMPLETED">SHOW COMPLETED</button>
        <button onClick={this.handleFilterClick} name="SHOW_PENDING">SHOW PENDING</button>
        <br />
        <div>
          {}
        </div>
      </div>
    );
  }
}
