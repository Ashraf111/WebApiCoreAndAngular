

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
// import { HousingService } from 'src/app/services/housing.service';
import { Iproperty } from '../Iproperty.interface';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  sellRent: number=1;
  properties: Array<Iproperty>=[];
  constructor(private route:ActivatedRoute,private housingservice:HousingService) { }

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.sellRent=2;

    }
this.housingservice.getAllProperties(this.sellRent).subscribe(

  data=>{
           this.properties=data;
           console.log(data);
          //  console.log(this.route.snapshot.url.toString());
        }, error=>{
          console.log(error)
        }

)

  }

}
