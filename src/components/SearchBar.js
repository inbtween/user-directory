
import React from 'react'
// import Form from "react-bootstrap/Form"

function SearchBar(props) {
    return (
        <form>
            <div className="form-group" style={{ display: "flex" }}>
            <label htmlFor="search"></label>
            <input
            value={props.search}
            onChange={e => props.handleSearchChange(e)}
            name="search"
            type="text"
            className="form-control"
            id="search" aria-describedby="searchHelp" placeholder="Search Employee"
            />

            </div>
        </form>
    )

}


export default SearchBar;
