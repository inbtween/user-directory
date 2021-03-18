import React, { Component } from "react"
import SearchBar from "./SearchBar"
import Table from "./Table"
import Api from "../utils/Api"


// table

export default class Main extends Component {
    state = {
        users: [{}],
        order: "descend",
        filteredUsers: [{}],
        sortedUsers: [{}]

    }
    handleSearchChange = event => {
        console.log(event.target.value)
        const filter = event.target.value
        console.log(filter)
        const filteredList = this.state.users.filter( item => {
          let values = Object.values(item.name).join("").toLowerCase()
          console.log(values, item)
          return values.indexOf(filter.toLowerCase()) !== -1
        })
        console.log(filteredList)
        this.setState({
            filteredUsers: filteredList
        })
    }
    componentDidMount() {
        Api.getUsers().then(results => {
            console.log(results)
            this.setState({
                users: results.data.results,
                filteredUsers: results.data.results,
                sortedUsers: results.data.results
            })
        }).catch(err => {
            console.log(err)
        })
    }
  
    sortDescending = event => {
        
        const sortedUsers = ( filteredUsers ) => {
        this.setState({ filteredUsers: this.state.users.sort(this.name)
        // this.setState({ orderFirstName: !this.state.orderFirstName})
        })
        }
    }
       
        // const sortedUsers = this.state.filteredUsers.sort()
    

    // sort, button, onClick handle sort, that would be in the table, handle sort lives in the main, if ascend flip to descend. const sortedUsers, filtereduserts. sort filtered set state

    render() {

        return (
            <div>
                <SearchBar handleSearchChange= {this.handleSearchChange} />
                <div>
                    <Table users= {this.state.filteredUsers}
                    
                    />
                    
                </div>
            </div>
        )
    }
   

}
