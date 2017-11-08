import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-text',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  title = 'New texte';
  nbCaracteres = 0;

  constructor() { 
  	console.log("Coucou")
  }

  afficherNombreCaracteres() {
 	this.nbCaracteres=document.getElementById("newText").value.length
  }

  ngOnInit() {
  }

}
