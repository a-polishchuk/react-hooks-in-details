import React from 'react';

function FormField({ label, name, value, onChange, type = 'text' }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

const initialState = {
  firstName: '',
  lastName: '',
  age: 21,
};

export class ClassExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  clearState = () => {
    this.setState(initialState);
  };

  render() {
    return (
      <>
        <form>
          <FormField
            name="firstName"
            label="First name"
            value={this.state.firstName}
            onChange={(firstName) => this.setState({ firstName })}
          />
          <FormField
            name="lastName"
            label="Last name"
            value={this.state.lastName}
            onChange={(lastName) => this.setState({ lastName })}
          />
          <FormField
            name="age"
            label="Age"
            type="number"
            value={this.state.age}
            onChange={(ageString) => {
              const age = ageString ? parseInt(ageString) : '';
              this.setState({ age });
            }}
          />
        </form>
        <div>
          <button onClick={this.clearState}>CLEAR</button>
        </div>
        <div>{JSON.stringify(this.state)}</div>
      </>
    );
  }
}
