import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { AddItemComponent } from 'src/Components/add-item/add-item.component';
import { ItemListComponent } from 'src/Components/item-list/item-list.component';
import { ShowErrorsComponent } from 'src/Components/show-errors/show-errors.component';
import { EditItemComponent } from 'src/Components/edit-item/edit-item.component';

// Packages
import { ToastrModule } from 'ngx-toastr';

// Services
import { ValidationService } from '../Services/validation.service';

// Material Modules
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    ItemListComponent,
    EditItemComponent,
    ShowErrorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatButtonModule,
    MatDialogModule,
    MatCardModule
  ],
  providers: [
    ValidationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
