import { Component, OnInit } from '@angular/core';
import { DestinationsService } from "../shared/destinations.service";



@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {

  
constructor(private destinationsService: DestinationsService) { } 
 submitted: boolean;
 formControls = this.destinationsService.form.controls;
 showSuccessMessage: boolean;
  ngOnInit() {
  }

onSubmit(){
   this.submitted = true;
   if(this.destinationsService.form.valid){
         if(this.destinationsService.form.get("$key").value == null ){ // here we said that if the value of the hidden input is null and it's by default null we will insert a new customer
                 // insert
    this.destinationsService.insertDestination(this.destinationsService.form.value);}
    else {
        this.destinationsService.updateCustomer(this.destinationsService.form.value);
    this.showSuccessMessage =true;
    setTimeout(()=> this.showSuccessMessage=false,3000); 
    this.submitted = false;}
         } else {
                 //update
         }
   }
 }
