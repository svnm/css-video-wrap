import React from 'react';
import CSSModules from 'react-css-modules';

let styles = {}
import { wrapper } from 'css-video-wrap'
Object.assign(styles, wrapper)

function Video( props) {

    const { route } = props;

    return (
        <div styleName="videoWrapper">
        	<iframe width="560" height="315" src="https://www.youtube.com/embed/HBHJ0XGZfLs" frameBorder="0" allowFullScreen></iframe>
        </div>
    );
}

export default CSSModules(Video, styles, {allowMultiple: true} )
