import { Component } from "react";


class Search extends Component {

    constructor (props) {
        super(props);
        this.state = {
            term: ''
        }
    }
    
    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }
    
    render () {
        return (
            <div className="filter">
                <label>Looking for</label>
                <input type = "text"
                placeholder = "start typing here..."
                value = {this.state.term}
                onChange={this.onUpdateSearch}
                />
            </div>
        )
    }
}


export default Search;