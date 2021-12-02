/**This class describes  functions of home Component with updateUrl
* @author Varsha Vaitla, Surya Alapati
* @version 12.0.2
**/

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private aroute:ActivatedRoute) { }

  ngOnInit(): void {
  }
updateUrl(key:string,value:string){
  this.router.navigate(['/products'],
    {
      relativeTo:this.aroute,
      queryParams:{[key]:value},
      queryParamsHandling:'merge',
    });
}
}
