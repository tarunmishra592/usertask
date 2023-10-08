import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ValidationService } from 'src/Services/validation.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { EditData, ItemList } from 'src/Models/Itemlist';
@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent {
  currency = '$'
  editItemForm!: FormGroup;

  constructor(
    private _fb: FormBuilder, 
    private toastService: ToastrService,
    public dialogRef: MatDialogRef<EditItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EditData
    ){
  }

  ngOnInit(){
    this.initForm()
  }

  initForm(): void {
    this.editItemForm = this._fb.group({
      name: [this.data.item.name, [Validators.required, ValidationService.nameValidation]],
      price: [this.data.item.price, [Validators.required, ValidationService.numberValidation]]
    });
  }


  updateItem(){
    let addedItems;
    const updatedItem = this.editItemForm.value;
    addedItems = localStorage.getItem('addedItems');
    if(addedItems){
      addedItems = JSON.parse(addedItems)
      let updatedIndex = addedItems.indexOf((item: ItemList) => item.name == updatedItem.name)
      addedItems.splice(updatedIndex, 1, updatedItem)
      localStorage.setItem('addedItems', JSON.stringify(addedItems))
      this.toastService.success('Item updated successfully..', 'Success!', {timeOut: 3000, closeButton: true})
      this.dialogRef.close(addedItems)
    }
  }
}
