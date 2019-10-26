import { Injectable } from '@angular/core';
import { FormControl , FormGroup , Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {
 
constructor(private firebase: AngularFireDatabase) { }
    
    destinationList: AngularFireList<any>;

    form = new FormGroup({
  	$key: new FormControl(null),
  	picture: new FormControl('', Validators.required),
  	location: new FormControl('', Validators.required),
  	date: new FormControl('', Validators.required),
  	price: new FormControl('', [Validators.required, Validators.minLength(3)])
         });

    getDestinations(){
                 this.destinationList = this.firebase.list('destinations');
                 return this.destinationList.snapshotChanges();
         }


	insertDestination(destination){
                 this.destinationList.push({
                 	picture: destination.picture,
                    location: destination.location,
                    date: destination.date,
                    price: destination.price
                  });
         }

}

// ADD VALIDATORS.REQUIRED SO THE USER MUST FILL THE FORM