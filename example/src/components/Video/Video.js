import React from 'react';
import CSSModules from 'react-css-modules';

/*
let styles = {}
import { wrapper } from 'css-video-wrap'
Object.assign(styles, wrapper)
*/

import styles from './Video.css'

function Video( props) {

    const { route } = props;

    return (
        <div styleName="videoWrapper">
        	<iframe width="560" height="315" src="https://www.youtube.com/embed/HBHJ0XGZfLs" frameborder="0" allowfullscreen></iframe>
        </div>
    );
}

export default CSSModules(Video, styles, {allowMultiple: true} )
