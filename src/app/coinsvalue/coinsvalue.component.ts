import { LiveAnnouncer } from '@angular/cdk/a11y';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { coin } from './coin';
import { CoinsvalueService } from './coinsvalue.service';

@Component({
  selector: 'app-coinsvalue',
  templateUrl: './coinsvalue.component.html',
  styleUrls: ['./coinsvalue.component.css']
})
export class CoinsvalueComponent implements OnInit {
  
  dataSource=new MatTableDataSource<coin>();
  displayedColumns = ['market_cap_rank','name','image','current_price','price_change_percentage_24h'];
   

      constructor(public cons:CoinsvalueService){}
      @ViewChild(MatPaginator) paginator!: MatPaginator;
      @ViewChild(MatSort) sort!: MatSort;

    ngOnInit() {
      this.cons.ObtainValue().subscribe((response:any) => {
        this.dataSource.data = response;
        console.log(this.dataSource.data);
        
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
    error => {  
      console.log('There was an error while retrieving Coin!' + error);  
    });  

  
     
  }
  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  
}

 
}
  
