import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Iproperty } from '../Property/Iproperty.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }
   getAllProperties(sellRent: Number): Observable<Iproperty[]>{
   return  this.http.get('Data/properties.json').pipe(
        map(data => {
          const jsonData = JSON.stringify(data)
          const propertiesArray: Array<Iproperty> =JSON.parse(jsonData);
          return propertiesArray;
          // const propertiesArray: Array<Iproperty> =[];
          // for (const id in data ){

          //   if(data.hasOwnProperty(id) && data[id].sellRent===sellRent){
          //     propertiesArray.push(data[id]);
          //   }
          // }
          // return propertiesArray;

        })
   );

    }
}
