/**This class describes  functions of product-list component with updateUrl,sort,pricesort,rating sort
* @author S.Swetha, Shruti Sunil Mayekar 
* @version 12.0.2
**/

import { Component, OnInit } from '@angular/core';
import { ProductListModel } from '../models/productList.model';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Brand } from '../models/brand.model';
import { Collection } from '../models/collection.model';

type FilterType = {
	name: string,
	select: boolean
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  page: number = 1;
  maxItem: number = 12;
  products: ProductListModel[] = [];
  brands: Brand[] = [];
  collections: Collection[] = [];
  lastPage: number = 1;
  aBrand: Brand | undefined;
  brandFilter: FilterType = {
	  name: '',
	  select: false
  };
  collectionFilter: FilterType = {
	name: '',
	select: false
  };
  constructor(private service: ProductService, private router: Router, private aroute: ActivatedRoute) {
	this.aroute.queryParams.subscribe(params => {
		this.setFilter(this.brandFilter, params.brand);
		this.setFilter(this.collectionFilter, params.collection);
		
		this.setABrand()
		this.service.getProductList(this.brandFilter.name, this.collectionFilter.name).then(data => {
		  this.products = data;
		  if (params.sortBy != null) {
			this.sort();
		  }
		  this.lastPage = this.products.length as number / this.maxItem;
		});
	  });
  }

  ngOnInit(): void {
    this.getAllBrands();
    this.getAllCollections();
  }

  updateUrl(key: string , value: string) {
    this.router.navigate(
      [], 
      {
        relativeTo:this.aroute,
        queryParams: {[key] : value}, 
        queryParamsHandling: 'merge',
      });
  }

  getAllBrands() {
    this.service.getAllBrands().then((data) => this.brands = data).then(() => {
		this.setABrand();
	});
  }

  getAllCollections() {
    this.service.getAllCollections().then((data) => this.collections = data);
  }

  sort() {
    this.aroute.queryParams.subscribe(params => {
      if (params.sortBy == 'price') {
        this.priceSort();
      }
      if (params.sortBy == 'rating') {
        this.ratingSort();
      }
    });
  }
   next() {
    if (this.page < this.lastPage)
      this.page = this.page + 1;
  }
  prev() {
    if (this.page > 1) {
      this.page = this.page - 1;
    }
  }

  priceSort() {
    this.products.sort((a: ProductListModel, b: ProductListModel) => (a.price > b.price ? 1 : -1));
  }

  ratingSort() {
    this.products.sort((a: ProductListModel, b: ProductListModel) => (a.starRating > b.starRating) ? -1 : 1);
  }
  private setFilter(filterObject: FilterType, name: string | null | undefined): void {
	if(name) {
		filterObject.name = name;
		filterObject.select = true;
	} else {
		filterObject.name = '';
		filterObject.select = false;
	}
  }
  private setABrand() {
	if(this.brands && this.brandFilter.select) {
		  this.aBrand = this.brands.find(brand => brand.name == this.brandFilter.name)
	}
  }
}