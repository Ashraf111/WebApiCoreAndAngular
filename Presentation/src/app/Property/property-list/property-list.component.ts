
import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  Properties:any
  constructor(private housingservices:HousingService) { }

  ngOnInit(): void {
     this.housingservices.getAllProperties().subscribe(

      data=>{
          this.Properties=data;
          console.log(data);

      },
      error=>{
        console.log(error)
      }


     )
  }

}
