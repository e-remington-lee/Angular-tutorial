import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homestyle: boolean = false;

  constructor() { }

  ngOnInit() {
  console.log("Home page!!")
  }

  firstclick(){

    this.homestyle = true;
  }

}
