import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})

export class DataComponent {

  async getData() {
    let data: any[] = [];
    fetch('https://62afad433bbf46a35224d1bd.mockapi.io/JewishAPI').then(res => {
      data.push(res.json());
    });
    return data;
  }
  async displayData(data: any[]){
    let x = await data;
    console.log(x);
  }
}
