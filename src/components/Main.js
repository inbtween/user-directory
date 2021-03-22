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
        
        this.sortByAsc = this.sortByAsc.bind(this);
        this.sortByDesc = this.sortByDesc.bind(this);
      }
      // 1. you need a handleSort function
      handleSort = heading => {
        // 2. check for the state of order -> updated the state 'des, asc'
         if (this.state === "ascend") {
            this.setState({
                order: "descend"
            })
         } else {
             this.setState({
                 order: "ascend"
             })
         }
         
         // 4.  compareOrder takes 2 parametes a, b -> if and else
         const compareOrder = (a, b) => {
            let nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
            if (nameA < nameB) //sort string ascending
                return a.name.first.localeCompare(b.name.first)> -1 
            if (nameA > nameB)
                return a.name.first.localeCompare(b.name.first)> 1
            return 0 //default return value (no sorting)
            // if (this.state === "ascend") {
            //     // if(heading === "name") {return a[heading].first.localeCompare(b[heading].first);}
            //     if(a[heading] === "name") {
            //         return a[heading].first.localeCompare(b[heading].first)
            //     } else {                         
            //         return b[heading] - a[heading]
            //     }
            // } else {
            //     if (this.state === "descend") {
            //         if(a[heading] === "name") {
            //             return b[heading].first.localeCompare(a[heading].first)
            //         } else {
            //             return b[heading] - a[heading]
            //         }
            //     }
            // }
         }
         // 5. const sortedUsers = this.state.filteredUsers.sort(compareOrder)
         const sortedUsers = this.state.filteredUsers.sort(compareOrder)          

         // 6. set state for sortedUsers 
         this.setState({
             ...this.state, filteredUsers: sortedUsers
         })
         
      }
              
      sortByAsc() {
        this.setState(prevState => {
          this.state.filteredUsers.sort((a, b) => (a.name - b.name))
      });
      }

      sortByDesc() {
        this.setState(prevState => {
          this.state.filteredUsers.sort((a, b) => (b.name - a.name))
      });
      }

    handleSearchChange = event => {
        console.log(event.target.value)
        const filter = event.target.value
        console.log("filter:", filter)
        const filteredList = this.state.users.filter( item => {
            let values = Object.values(item).join("").toLowerCase()
          console.log(`value: ${values}, item: ${item}`)
          return values.indexOf(filter.toLowerCase()) !== -1
        })
        console.log("filteredList:::: ",filteredList)
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
                <button onClick={this.sortByAsc}>
                Ascend
                </button>
                <button onClick={this.sortByDesc}>
                Descend
                </button>
                <Table users= {this.state.filteredUsers} handleSort={ this.handleSort}
                />
                </div>
            
            {/* <Main users= {this.state.filteredUsers.sortByDesc} /> */}
                
            </div>
        )
    }
   

}



