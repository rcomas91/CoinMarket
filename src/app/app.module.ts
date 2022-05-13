import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import { MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';

import { MatCheckboxDefaultOptions, MatCheckboxModule, MAT_CHECKBOX_DEFAULT_OPTIONS} from '@angular/material/checkbox';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoinsvalueComponent } from './coinsvalue/coinsvalue.component';
import { CoinsvalueService } from './coinsvalue/coinsvalue.service';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
const appRoutes: Routes = [


  {path:'',redirectTo:'/',pathMatch:'full'},
  // { path: 'coinsvalue', component: CoinsvalueComponent },
];

@NgModule({

  declarations: [
    AppComponent,
    HeaderComponentComponent,
    CoinsvalueComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatSliderModule,
    MatSelectModule,
    MatRadioModule,
    MatGridListModule,
    MatTabsModule,
    MatMenuModule,
    MatSortModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatInputModule,
    

    ReactiveFormsModule,
    FormsModule,

    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } //
    ),



    BrowserAnimationsModule
  ],
  providers: [
   CoinsvalueService

  ],
  bootstrap: [AppComponent]



})
export class AppModule { }
