import React, { Component } from 'react'
import './SignPad.css';
import SignaturePad from 'signature_pad';
import openSocket from 'socket.io-client';


const socket = openSocket('http://10.85.30.133:4000');

class SignPad extends Component {
  constructor(props) {
    super();
    

    if ("ontouchstart" in document.documentElement) {
      this.state = {
        isTouch: "true"
      }
    }
    else{
      this.state = {
        isTouch: "false"
      }
    }

    
    
      
    
    


  }
  componentDidMount() {
    var canvas = document.getElementById('signature-pad');
    
    function resizeCanvas() {
      // When zoomed out to less than 100%, for some very strange reason,
      // some browsers report devicePixelRatio as less than 1
      // and only part of the canvas is cleared then.
      var ratio = Math.max(window.devicePixelRatio || 1, 1);
      canvas.width = canvas.offsetWidth * ratio;
      canvas.height = canvas.offsetHeight * ratio;
      canvas.getContext("2d").scale(ratio, ratio);

      socket.emit('clear');
    }

    
    const signaturePad = new SignaturePad(canvas, {
      backgroundColor: 'rgb(255, 255, 255)', // necessary for saving image as JPEG; can be removed is only saving as PNG or SVG
      onEnd: function (a, b) {
        //console.log(a, b);
        const data = signaturePad.toData();
        socket.emit('draw', data);
      }
    });
    
  window.onresize = resizeCanvas;
  setTimeout(()=>{
    resizeCanvas();
  },500);
    

  // Setup Socket Events
  socket.on('draw', (msg)=>{
    //signaturePad.clear();
    signaturePad.fromData(msg);
  });
  socket.on('clear',()=>{
    signaturePad.clear();
  });


  }
  render() {
    return (
      <div className="uk-placeholder signature-pad">
        <div className="wrapper">
          <canvas id="signature-pad" width="300" height="200"></canvas>
        </div>

        
      </div>

    )
  }
}


export default SignPad;
