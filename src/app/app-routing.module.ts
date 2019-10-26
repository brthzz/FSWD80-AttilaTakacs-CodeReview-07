import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { MainComponent } from './main/main.component';
import { BlogComponent } from './blog/blog.component';
import { DestinationsComponent } from './destinations/destinations.component';


const routes: Routes = [{
	path: "", component: MainComponent
},{
	path: "blog", component: BlogComponent 
}, {
	path: "destinations", component: DestinationsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
