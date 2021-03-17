import React, { Component } from "react"
import SearchBar from "./SearchBar"
import Table from "./Table"
import Api from "../utils/Api"

// table

export default class Main extends Component {
    state = {
        users: [{}],
        order: "descend",
        filteredUsers: [{}]
    }
    handleSearchChange = event => {
        console.log(event.target.value)
        const filter = event.target.value
        const filteredList = this.state.users.filter( item => {
          let values = Object.values(item).join("").toLowerCase()
          return values.indexOf(filter.toLowerCase()) !== -1
        })
        this.setState({
            filteredUsers: filteredList
        })
    }
    componentDidMount() {
        Api.getUsers().then(results => {
            console.log(results)
        
            this.setState({
                users: results.data.results.map((e) => ({
                    picture: e.picture.large,
                    firstName: e.name.first,
                    lastName: e.name.last,
                    email: e.email,
                  })),
                filteredUsers: results.data.results.filter((e) => ({
                    firstName: e.name.first,
                    lastName: e.name.last
                }))
            })
        }).catch(err => {
            console.log(err)
        })
    }
    reloadPage() {
        window.location.reload(false);
    }

    render() {
        return (
            <div>
                <SearchBar/>
                <div>
                    <Table users= {this.state.users}/>
                    
                </div>
            </div>
        )
    }
   

}
