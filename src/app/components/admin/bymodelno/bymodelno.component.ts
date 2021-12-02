/**This class describes  Values of  bymodelno component with features of findbymodelno,remove, edit
* @author S.Swetha, Shruthi Sunil Mayekar 
* @version 12.0.2
**/

import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../models/product.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-bymodelno',
  templateUrl: './bymodelno.component.html',
  styleUrls: ['./bymodelno.component.css']
})
export class BymodelnoComponent implements OnInit {
  product: Product = new Product()
  model: string = '';
  alert: boolean = false;


  constructor(private service: ProductService, private router: Router) { }

  ngOnInit(): void {

  }

  findByModelNo() {
    this.service.getByModel(this.model).then(data => {
      if (data != null) {
        this.product = data;
        this.alert = this.product.modelNo == this.model ? false : true;
       }
      else
        throw new Error("No pRoduct found")
    })
    this.service.getByModel(this.model).catch(err => this.alert = true)
  }


  remove(modelNo: string) {
    var answer = confirm('Are you sure to delete entry?');
    if (answer)
      this.service.delProduct(modelNo);
    location.reload();
  }
  edit(model: string) {
    this.router.navigate((['admin-edit']), { queryParams: { model: model } }).then(() =>
      location.reload()
    );
  }

}
