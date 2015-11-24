# css-video-wrap

[![npm version](https://badge.fury.io/js/css-video-wrap.svg)](https://badge.fury.io/js/css-video-wrap)

A [css module](https://github.com/css-modules/css-modules) compatible css module wrapper for embedded video youtube, vimeo, etc...

Best to use this with [react-css-modules](https://github.com/gajus/react-css-modules)

## Install

`npm install css-video-wrap --save-dev`

## Usage

Simply import the video wrap css module and use it to wrap around an embed

`import { wrapper } from 'css-video-wrap'`

Then use it for styling your elements.

```jsx
	return (
        <div styleName="videoWrapper">
        	{/* video embed... */}
        </div>
    );
```

## Example

Check out the full working example [here](https://github.com/StevenIseki/css-video-wrap/tree/master/example)

**Run it**

`npm install; npm start`

```jsx
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
```

## License

[MIT](http://isekivacenz.mit-license.org/)
