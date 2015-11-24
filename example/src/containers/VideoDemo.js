import React from 'react'
import CSSModules from 'react-css-modules'

import Video from '../components/Video/Video'
import Snippet from '../components/Snippet/Snippet'
import js from '!!raw!../components/Video/Video'
import css from '!!raw!../../../lib/wrapper.css'

/* Video Demo */
function VideoDemo( props) {

    const { route } = props;

    const files = [
      { name: './Video.js', source: js },
      { name: './wrapper.css', source: css }
    ];

    return (
        <div>        
          <Snippet files={files}>
            <Video />
          </Snippet>
        </div>
    );
}

export default VideoDemo
