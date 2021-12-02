/**This File describes function of address feild  like refresh ,add ,update,delete, save,select.
* @author S.Swetha, Shruti Sunil Mayekar 
* @version 12.0.2
**/

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AddressModel } from '../models/address.model';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @Input() userName: string;
  @Input() center: boolean = false;
  @Output() selectedAddress = new EventEmitter<AddressModel>();
  address: AddressModel[];
  selectedId: number;
  addr: AddressModel = new AddressModel();
  editAddr: AddressModel = new AddressModel();
  constructor(private service: AddressService) {
	this.address = []
  }

  ngOnInit(): void { 
    this.refreshAddressList()
  }

  refreshAddressList(): void {
	this.service.getAddressList(this.userName).then((addresses: AddressModel[]) => {
		this.address = addresses;
		if(addresses.length) {
			this.selectAddress(this.address.find(x => x.isDefault) || this.address[0])
		}
	})
  }
  
  isChecked(e: any, addr: AddressModel){
    if(e.target.checked){
      addr.isDefault = true
    }
  }

  refresh(){
    this.addr = new AddressModel();
  }

  saveAddress() {
      this.service.saveAddress(this.userName, this.addr).then(res => {
		this.address.push(this.addr)
	  }).catch(_ => {
		alert("This address is already present!")
	  }).finally(() => {
		this.refresh()
	  })
  }

  removeAddress(index: number){
    var ans = confirm('Are you sure you want to delete?')
      if(ans){
		const addressToDelete = this.address[index]
        this.service.removeAddress(this.userName, addressToDelete.id).then(_ => {
			this.address.splice(index, 1)
		})
    }
  }

  updateAddress(index: number){
    this.service.updateAddress(this.userName, this.editAddr).then(_ => {
		this.address[index] = this.editAddr
	}).finally(() => {
		this.refresh()
	})
  }

  onEdit(index: number){
    this.editAddr =JSON.parse(JSON.stringify(this.address[index])) 
  }

  selectAddress(addr: AddressModel){
	this.selectedId = addr.id
	this.selectedAddress.emit(addr)
  }

}
