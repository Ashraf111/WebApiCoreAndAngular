import { Component, Input } from "@angular/core";
import { Iproperty } from "../Iproperty.interface";

@Component({
  selector:'app-Property-Card',
  templateUrl:'Property-Card.Component.html',
  styleUrls:['Property-Card.Component.css']
})
export class PropertyCardComponent{
  @Input() property!: Iproperty;
}
