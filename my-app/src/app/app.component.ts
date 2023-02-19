import { Component } from '@angular/core';
import { IHandledData } from './app.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title: string = "Countries API"
  data: any = [];
  handleData = (handedData: any) =>{
  this.data = handedData;
  }
}
