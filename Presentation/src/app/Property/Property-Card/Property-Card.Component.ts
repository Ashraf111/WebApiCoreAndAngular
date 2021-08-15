import { Component } from "@angular/core";

@Component({
  selector:'app-Property-Card',
  templateUrl:'Property-Card.Component.html',
  styleUrls:['Property-Card.Component.css']
})
export class PropertyCardComponent{

  Property:any={
"id":1,
"Type":"House",
"Price":12000,
"Name":"Ash House",

  }

}
