import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  Properties:Array<any>=[
    {
    "id":1,
    "Type":"House",
    "Price":12000,
    "Name":"Ash House"
    },
    {
      "id":2,
      "Type":"House",
      "Price":12000,
      "Name":"Ash House"
      },
      {
        "id":3,
        "Type":"House",
        "Price":12000,
        "Name":"Ash House"
        },
        {
          "id":4,
          "Type":"House",
          "Price":12000,
          "Name":"Ash House"
          }

    ]
  constructor() { }

  ngOnInit(): void {
  }

}
