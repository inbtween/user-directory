// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.scss';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      users: []
    };
  }

  componentWillMount() {
    fetch('https://randomuser.me/api/?results=50')
    .then(response => {
      if(response.ok) return response.json();
      throw new Error('Request failed.');
    })
    .then(data => {
      this.setState({users: data.results});
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    const list = this.state.users.map( (u, i) => {
        return <User key={u.login.md5} name={`${u.name.first} ${u.name.last}`} email={u.email} />;
    });
    return (
      <div>

        <h1>My users are:</h1>
        {list}
      </div>
    );
  }
}

class User extends React.Component {
  render() {
    return (
      <div style={{'borderStyle': 'dotted'}}>
        <h3>{this.props.name}</h3>
        <p>{this.props.email}</p>
      </div>
    );
  }
}

// ReactDOM.render(
//   <UserProfiles />,
//   document.getElementById('root')
// );
export default App;
