import React, { Component } from 'react'
import './SignPad.css';
import SignaturePad from 'signature_pad';
import openSocket from 'socket.io-client';
import axios from 'axios';

const pnumber  = "+971507021612"
const socket = openSocket('http://10.85.30.133:4000');

class SignPad extends Component {
  constructor(props) {
    super();


    if ("ontouchstart" in document.documentElement) {
      this.state = {
        isTouch: true,
        messageSent: false
      }
    }
    else {
      this.state = {
        isTouch: false,
        messageSent: false
      }
    }
  }

  componentDidMount() {
    var canvas = document.getElementById('signature-pad');


    // Initialize Signature Pad
    const signaturePad = new SignaturePad(canvas, {
      backgroundColor: 'rgb(255, 255, 255)', // necessary for saving image as JPEG; can be removed is only saving as PNG or SVG
      onEnd: function (a, b) {
        //console.log(a, b);
        const data = signaturePad.toData();
        socket.emit('draw', data);
      }
    });

    function resizeCanvas() {
      // When zoomed out to less than 100%, for some very strange reason,
      // some browsers report devicePixelRatio as less than 1
      // and only part of the canvas is cleared then.
      var ratio = Math.max(window.devicePixelRatio || 1, 1);
      canvas.width = canvas.offsetWidth * ratio;
      canvas.height = canvas.offsetHeight * ratio;
      canvas.getContext("2d").scale(ratio, ratio);

      // Broadcast Clear Canvas Event
      socket.emit('clear');
    }

    
    
    resizeCanvas();
    window.onresize = resizeCanvas;


    // Setup Socket Events
    socket.on('draw', (msg) => {
      //signaturePad.clear();
      signaturePad.fromData(msg);
    });
    socket.on('clear', () => {
      signaturePad.clear();
    });

    if (this.state.isTouch === false) {
      signaturePad.off();
    }

  }

  clearCanvas(){
   socket.emit('clear');
  }

  sendMessage = ()=>{
    console.log('send');
    this.setState({
        messageSent: true
    });

    axios.post('http://localhost:4000/message', {
      number: pnumber,
      loc: window.location.href
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="uk-placeholder signature-pad uk-position-relative">
        <div className="uk-grid-small uk-flex-center" data-uk-grid>
          <div className="uk-width-2-3@s">
            <div className="wrapper">
              <canvas id="signature-pad" width="300" height="200"></canvas>
            </div>
          </div>
          <div className="uk-width-1-3@s">
            <button onClick={this.clearCanvas} className="uk-button uk-button-default">Clear</button>
            
          </div>
        </div>

          {!this.state.isTouch && !this.state.messageSent && <div className="uk-overlay-default uk-position-cover">
                <div className="uk-position-center">
                <button onClick={this.sendMessage} className="uk-button uk-button-default">Sign on my phone <i data-uk-icon="phone"></i></button>
                </div>
            </div>}
      </div>

    )
  }
}


export default SignPad;
