import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-tab',
  templateUrl: './video-tab.component.html',
  styleUrls: ['./video-tab.component.css']
})
export class VideoTabComponent implements OnInit {

  constructor() { }

  videoReference:any;
  ngOnInit(): void {
  }

  setupCamera(){
    this.videoReference = document.getElementById('video')
    navigator.mediaDevices.getUserMedia({
      video: {
        width: 320, height:320
      },
      audio: false
    }).then(stream => {
      this.videoReference.srcObject = stream
    })
  }

  stopCamera() {
    this.videoReference.srcObject
  }

}
