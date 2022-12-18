import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {
  constructor(){
  this.text = '';  
  this.color = '';
  this.message = 'Initial text';
  }
  @Input() text: string;
  @Input() color: string;
  @Output() btnClick = new EventEmitter();
  onClick(){
    this.btnClick.emit();
    console.log("Add");
  }
  @Input() message: string;
  @Output() alertt = new EventEmitter();
  alertBox(myMessage: string){
    console.log(myMessage);
   }
}
