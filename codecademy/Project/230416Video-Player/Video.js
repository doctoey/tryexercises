import React from 'react';

function Video(props) {
    return (
      <div>
        <video controls autostart autoPlay muted src={props.src} />
      </div>
    );
};
export default Video;