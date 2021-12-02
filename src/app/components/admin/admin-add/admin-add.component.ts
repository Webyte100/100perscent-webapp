/**This class describes  Values of AdminAdd Component to add image ,remove images and assign feature
* @author S.Swetha, Shruti Sunil Mayekar 
* @version 12.0.2
**/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../../models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { Brand } from '../../models/brand.model';
import { GENDERS, SPEEDS} from 'src/app/common/app.constants';


@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent implements OnInit {
  responses:Array<any>=new Array<any>();
  productAdd: Product = new Product();
  brands: Brand[] = [];
  genders = GENDERS
  speeds = SPEEDS
  constructor(private router: Router, private service: ProductService) { }

  ngOnInit(): void {

    this.service.getAllBrands().then(brands => { this.brands = brands })
  }

  add() {
    this.service.addProduct(this.productAdd).then(()=>{
      this.router.navigate(['admin-list']);
    });
    
   
  }
 
  addImage(){
    if(this.responses.length!=0){
      this.responses.forEach(response=>{
        this.productAdd.images.push(response.data.secure_url);

      });
    }
  }
  removeImg(i:number){
    this.responses.splice(i,1);
    this.productAdd.images.splice(i,1);
  }
}
