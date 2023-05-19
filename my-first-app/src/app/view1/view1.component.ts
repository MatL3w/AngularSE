import { Component,OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html'
})
export class View1 {

    constructor(private route:ActivatedRoute){}
  ngOnInit(){
    console.log(this.route.snapshot.params['id']);
  }
}
