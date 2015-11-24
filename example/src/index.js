import React from 'react';
import ReactDOM from 'react-dom';
import VideoDemo from './containers/VideoDemo';

function App(props) {
    return (
        <main>
            <VideoDemo />
        </main>        
    );
}


ReactDOM.render(
	React.createElement(App), 
	document.getElementById('root'));
