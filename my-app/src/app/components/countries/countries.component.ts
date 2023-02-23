import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  countriesData: any;

  getCountriesData = () =>{
    axios.get('https://restcountries.com/v3.1/all').then(res =>{
      console.log(res.data)
      this.countriesData = res.data
    })
  }
  ngOnInit(){
  this.getCountriesData();
  }
}
