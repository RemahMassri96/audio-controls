import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(){}
  title = 'audio-controls';
  @ViewChild('video') myVideo: ElementRef;
  isplay=false;
  name = 'Angular';

  playVideo(){
    if(this.isplay){
        this.myVideo.nativeElement.pause();
    }
    else{
        this.myVideo.nativeElement.play();
    }  
    this.isplay=!this.isplay
  }
}
