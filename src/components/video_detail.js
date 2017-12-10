import React, {Component} from 'react';

class VideoPlayer extends Component{

	render(){
		return(
			<div className="video-player">
				<iframe 
				src="https://www.youtube.com/embed/${this.props.videoId}" 
				width="100%" 
				height="360" 
				frameborder="0" 
				gesture="media" 
				allow="encrypted-media" 
				allowfullscreen />

			</div>
		)
	}

}

export default VideoPlayer;