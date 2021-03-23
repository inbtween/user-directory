import React, { Component } from "react"
import SearchBar from "./SearchBar"
import Table from "./Table"
import Api from "../utils/Api"


// table

export default class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            order: "ascend",
            filteredUsers: [],
            sortedUsers: [],
            heading: [
                {name: "image"},
                {name: "firstName"},
                {name: "lastName"},
                {name: "email"}
            ]
          };
        
      }
      // 1. you need a handleSort function
      handleSort = heading => {
        // 2. check for the state of order -> updated the state 'des, asc'
         if (this.state.order === "ascend") {
            this.setState({
                order: "descend"
            })
         } else {
             this.setState({
                 order: "ascend"
             })

        // this.sortByAsc = this.sortByAsc.bind(this);
        // this.sortByDesc = this.sortByDesc.bind(this);
         }
         
         // 4.  compareOrder takes 2 parametes a, b -> if and else
         const compareOrder = (a, b) => {
             console.log(this.state)
            let nameA=a.name.last.toLowerCase(), nameB=b.name.last.toLowerCase()
                if (this.state.order === "ascend")  {
                    return a.name.last.localeCompare(b.name.last)
                } else {
                    return b.name.last.localeCompare(a.name.last)
                }

         }
         // 5. const sortedUsers = this.state.filteredUsers.sort(compareOrder)
         const sortedUsers = this.state.filteredUsers.sort(compareOrder)          

         // 6. set state for sortedUsers
            // console.log("setting state");
            this.setState({
            ...this.state, filteredUsers: sortedUsers,
            });
            console.log(this.state.filteredUsers)
         
      }
         

    handleSearchChange = event => {
        // console.log(event.target.value)
        const filter = event.target.value
        // console.log("filter:", filter)
        const filteredList = this.state.users.filter( item => {
            let values = Object.values(item).join("").toLowerCase()
        //   console.log(`value: ${values}, item: ${item}`)
          return values.indexOf(filter.toLowerCase()) !== -1
        })
        // console.log("filteredList:::: ",filteredList)
        this.setState({
            filteredUsers: filteredList
        })
        
    }
    componentDidMount() {
        Api.getUsers().then(results => {
            // console.log(results)
            this.setState({
                users: results.data.results,
                filteredUsers: results.data.results,
                sortedUsers: (a, b) => {
                    a = a.name || '';
                    b = b.name || '';
                    return a.localeCompare(b);
                }
                
            })
        }).catch(err => {
            console.log(err)
        })
    }

       
    // sort, button, onClick handle sort, that would be in the table, handle sort lives in the main, if ascend flip to descend. const sortedUsers = this.state.filteredUsers.sort()

    render() {

        return (
            <div>
                <SearchBar handleSearchChange= {this.handleSearchChange} />
                <div>
               
                <Table users= {this.state.filteredUsers} handleSort={this.handleSort}
                />
                </div>
            
            {/* <Main users= {this.state.filteredUsers.sortByDesc} /> */}
                
            </div>
        )
    }
   

}



