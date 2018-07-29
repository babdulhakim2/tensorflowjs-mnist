import { Component, ViewChild, OnInit } from '@angular/core';
import { DrawableDirective } from './drawable.directive';

import * as tf from '@tensorflow/tfjs';
import { image } from '@tensorflow/tfjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

   model:tf.Model;
   predictions:any;


  ngOnInit() {
   this.loadModel()
  }

  async loadModel(){
    this.model = await tf.loadModel('/assets/model.json');
  }
  //// LOAD PRETRAINED KERAS MODEL ////

  async predict(imageData:ImageData){
    const pred = await tf.tidy(()=>{
      let img = tf.fromPixels(imageData, 1) 
      // console.log(img);
      img = img.reshape([1,28,28,1]);
      img = tf.cast(img,'float32');

      const output = this.model.predict(img) as any;

      this.predictions = Array.from(output.dataSync());
      console.log(this.predictions);
    })
  }
  
}

