import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

// Custom components
import SearchBar from './components/search_bar'
import VideoList from './components/video_list';

const YT_API_KEY = 'AIzaSyC_dyS2xqOgdPiR_3tK5Yumd0YBqNK_4Bg';


// create a component
class App extends Component{
	constructor(props){
		super(props);		
		this.state = { videos: [] };
		
		this.videoSearch('pushto songs');

	}

	videoSearch(term){
		YTSearch({key: YT_API_KEY, term: term}, (videos)=> {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			})
		})
	}


	render(){
		return (
			<div>
				<SearchBar onSearchTermChange={ term => this.videoSearch(term) } />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

// link it to the DOM

ReactDom.render(<App />, document.querySelector('.container'));