import { Component, ViewChild, OnInit } from '@angular/core';
import { DrawableDirective } from './drawable.directive';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // linearModel: tf.Sequential;
  // prediction: any;



  ngOnInit() {
    this.loadModel();
  }


  //// LOAD PRETRAINED KERAS MODEL ////

  async loadModel() {
   
  }

  async predict(imageData: ImageData) {



  }

}

