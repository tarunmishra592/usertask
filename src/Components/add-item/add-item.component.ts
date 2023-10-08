import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../../Services/validation.service';
import { ToastrService } from 'ngx-toastr';
import { ItemList } from 'src/Models/Itemlist';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent {

  currency = '$'
  addItemForm!: FormGroup;

  constructor(private _fb: FormBuilder, private toastService: ToastrService){
  }

  ngOnInit(){
    this.initForm()
  }

  initForm(): void {
    this.addItemForm = this._fb.group({
      name: ['', [Validators.required, ValidationService.nameValidation]],
      price: ['', [Validators.required, ValidationService.numberValidation]]
    });
  }

  addItem():void {
    console.log(this.addItemForm.value)
    const itemVal: ItemList = this.addItemForm.value;
    let addedItems;
    addedItems = localStorage.getItem('addedItems');
    if(addedItems){
      addedItems = JSON.parse(addedItems)
      let isAdded = addedItems.find((x: ItemList) => x.name == itemVal.name)
      if(!isAdded){
        addedItems.push(itemVal)
        this.toastService.success('Item added successfully..', 'Success!', {timeOut: 3000, closeButton: true})
        this.addItemForm.reset()
      }else{
        this.toastService.error('Item already exists.', 'Error', {timeOut: 3000, closeButton: true})
      }
    }else{
      addedItems = [itemVal]
      this.addItemForm.reset()
    }
    localStorage.setItem('addedItems', JSON.stringify(addedItems))
  }

}
