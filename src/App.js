
import './App.css';
import React from 'react';
import Main from "./components/Main";
import SearchBar from "./components/SearchBar";
// import Row from "./components/Row"
// import API from "./utils/Api"
import 'bootstrap/dist/css/bootstrap.min.css';
// import Table from 'react-bootstrap/Table'
import NavBar from "./components/Navbar"
// import Table from "./components/Table";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      users: [],
      filteredUsers: [],
      sortedUsers: []
    };
  }

  render() {
    return (
      <div >
       <NavBar/>
       {/* <SearchBar/> */}
       <Main/>
        {/* <Table/> */}
        
      </div>
    );
  }
}


class User extends React.Component {
  render() {
    return (
      <>
        <tr>
        <td> <img alt={this.props.firstName} src={this.props.image} /> </td>
      <td>{this.props.firstName}</td>
      <td>{this.props.lastName}</td>
      <td>{this.props.email}</td>
    </tr>
    </>
    );
  }
}
export default App;
