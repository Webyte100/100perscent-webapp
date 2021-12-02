/**This class describes  Values of AdminEdit Component to update,add and remove image, assign features
* @author S.Swetha, Shruti Sunil Mayekar 
* @version 12.0.2
**/

import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Brand } from '../../models/brand.model';
import { GENDERS, SPEEDS } from 'src/app/common/app.constants';

@Component({
	selector: 'app-admin-edit',
	templateUrl: './admin-edit.component.html',
	styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {
	responses:Array<any>=new Array<any>();
	product: Product = new Product()
	modelNo: string = "";
	brands: Brand[] = [];
	genders = GENDERS
	speeds = SPEEDS
	constructor(private service: ProductService, private router: Router, private aroute: ActivatedRoute) {

	}

	ngOnInit(): void {
		this.service.getAllBrands().then(brands => { this.brands = brands });
		this.modelNo = this.aroute.snapshot.paramMap.get('model') as string
		this.service.getByModel(this.modelNo).then((product: Product) => {
			this.product = Product.build(product);
		});

	}

	update() {
		
		this.service.editProduct(this.product);
		this.router.navigate(['admin-list']);
	}
	
	addImage(){
		
		if(this.responses.length!=0){
		  this.responses.forEach(response=>{
			this.product.images.push(response.data.secure_url);
	
		  });
		}
	  }
	  removeImg(i:number){
		this.responses.splice(i,1);
		this.product.images.splice(i,1);
	  }
	 }

