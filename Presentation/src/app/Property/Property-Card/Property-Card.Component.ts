import { Component, Input } from "@angular/core";

@Component({
  selector:'app-Property-Card',
  templateUrl:'Property-Card.Component.html',
  styleUrls:['Property-Card.Component.css']
})
export class PropertyCardComponent{
@Input() properties: any
}
