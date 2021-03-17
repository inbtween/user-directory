
import React from 'react'
// import Form from "react-bootstrap/Form"

function SearchBar(props) {
    return (
        <form>
            <div class="form-group" style={{ display: "flex" }}>
            <label htmlFor="search"></label>
            <input
            value={props.search}
            onChange={props.handleInputChange}
            name="search"
            type="text"
            className="form-control"
            id="search" aria-describedby="searchHelp" placeholder="Search Employee"
            />
             <button onClick={props.handleFormSubmit} className="btn btn-primary">
            Search
            </button>
            <button onClick={props.refreshPage} className="btn btn-primary ml-1">
            Reset
            </button>
            </div>
        </form>
    )

}


export default SearchBar;
