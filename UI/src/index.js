import React from 'react';
import ReactDOM from 'react-dom';
import anime from 'animejs';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Styles
import "./index.css";

//uikit
import Icons from "uikit/dist/js/uikit-icons";
import UIkit from "uikit";
UIkit.use(Icons);


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


