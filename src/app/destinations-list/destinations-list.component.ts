import { Component, OnInit } from '@angular/core';
import { DestinationsService } from '../shared/destinations.service';

@Component({
  selector: 'app-destinations-list',
  templateUrl: './destinations-list.component.html',
  styleUrls: ['./destinations-list.component.css']
})
export class DestinationsListComponent implements OnInit {
 placesArray =[];
constructor(private destinationService: DestinationsService) { }

ngOnInit() {
         this.destinationService.getDestinations().subscribe(
                 (list) => {
                         this.placesArray = list.map( (item) => {
                                return {
                                        $key : item.key,
                                        ...item.payload.val()
                                }
                        })
                 });

}

}