import { Component, EventEmitter, Output } from '@angular/core';

import axios from 'axios';
@Component({
  selector: 'app-handle-data',
  templateUrl: './handle-data.component.html',
  styleUrls: ['./handle-data.component.scss']
})
export class HandleDataComponent {
  @Output() apiData = new EventEmitter<any>(); 
  getData = () =>{
  axios.get('https://62afad433bbf46a35224d1bd.mockapi.io/JewishAPI').then(res =>{
    console.log(res.data)
    this.apiData.emit(res.data);
  })
  }
}
