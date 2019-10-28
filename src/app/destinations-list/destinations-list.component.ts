import { Component, OnInit } from '@angular/core';
import { DestinationsService } from '../shared/destinations.service';

@Component({
  selector: 'app-destinations-list',
  templateUrl: './destinations-list.component.html',
  styleUrls: ['./destinations-list.component.css']
})
export class DestinationsListComponent implements OnInit {
 placesArray =[];
 showDeletedMessage : boolean;
 searchText:string = "";

constructor(private destinationsService: DestinationsService) { }

ngOnInit() {
         this.destinationsService.getDestinations().subscribe(
                 (list) => {
                         this.placesArray = list.map( (item) => {
                                return {
                                        $key : item.key,
                                        ...item.payload.val()
                                }
                        })
                 });

}

onDelete($key){
     if(confirm("Are you sure you want to delete this record?")){
       this.destinationsService.deleteDestination($key);
       this.showDeletedMessage = true;
       setTimeout(()=> this.showDeletedMessage=false , 3000)
       }
   }

filterCondition(destination){
     return destination.location.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 ;
   }

}