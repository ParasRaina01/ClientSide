import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

  Totalscore:string;

  constructor( private router: Router,private route:ActivatedRoute) {
  }

  ngOnInit() {
    this.Totalscore = this.route.snapshot.paramMap.get('key');
    this.Totalscore=this.Totalscore.slice(27,)
    console.log(this.Totalscore);
  }

}
