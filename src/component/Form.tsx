import * as React from 'react';

export interface Props {
}

export interface State {
  [key: string]: string | number
}

class Form extends React.Component<{}, State> {
  state = {
    name: 'alkaid',
    age: 24
  }
  render() {
    return (
      <div>
        <div>{this.state.name} is {this.state.age}</div>
        <input type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange} />
        <input type="text"
          name="age"
          value={this.state.age}
          onChange={this.handleChange} />
      </div>
    );
  }
  handleChange = (el: React.FormEvent<HTMLInputElement>) => {
    const { name, value }: { name: keyof State, value: number | string } = el.currentTarget
    this.setState({
      [name]: value
    })
  }
}

export default Form;