import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ItemList } from 'src/Models/Itemlist';
import { EditItemComponent } from '../edit-item/edit-item.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {
  
  allList: ItemList[] = []

  constructor(public dialog: MatDialog){
  }

  ngOnInit(){
    let items = localStorage.getItem('addedItems');
    if(items){
      this.allList = JSON.parse(items)
    }
  }

  editHandler(data: ItemList){
    const dialogRef = this.dialog.open(EditItemComponent, {
      data: {item:data, list: this.allList},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.allList = result
      }
    });
  }

  deleteHandler(index: number){
    this.allList.splice(index, 1)
    localStorage.setItem('addedItems', JSON.stringify(this.allList))
  }
}
