import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Nouvelle Application !!';
  constructor(){
  	console.log("Coucou1")
  }
  ngOnInit() {
  }
}
