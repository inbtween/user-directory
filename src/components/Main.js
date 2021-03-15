import React, { Component } from "react"
import SearchBar from "./SearchBar"
import Table from "./Table"
import Api from "../utils/Api"
// need a Nav bar
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
        
            this.setState({
                users: results.data.results,
                filteredUsers: results.data.results
            })
        })
    }

    render() {
        return (
            <div>
                <SearchBar/>
                <div>
                    <Table/>
                </div>
            </div>
        )
    }

}