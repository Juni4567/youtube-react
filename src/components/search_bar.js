import React, {Component} from 'react';

// Functional component
// const SearchBar = () =>{
// 	return <input />;
// }

// A class based component can change with the change in state --> functional component are dumb
class SearchBar extends Component {
	constructor(props){
		super(props);

		this.state = {term: ''};
	}

	render() {
		return(
			<div>
				<input value={this.state.term} 
				placeholder="Your Query..."
				onChange={ event => this.inputChanged(event.target.value) }
				/>
			</div>
		);
	}

	inputChanged(term){
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}


export default SearchBar;