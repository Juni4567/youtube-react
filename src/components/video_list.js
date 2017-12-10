import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) =>{
	const videosItems = props.videos.map((video)=>{
		return <VideoListItem video={video} key={video.id.videoId} />
	})
	return(
		<div className="col-sm-4">
			<ul className="list-group">
				{videosItems}
			</ul>
		</div>
	)
}

export default VideoList;