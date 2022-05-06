import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { coin } from './coin';

@Injectable()

export class CoinsvalueService {
  constructor(private http: HttpClient) {}

  ObtainValue():Observable<coin[]> {
    return this.http
      .get<coin[]>(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false%27%20%20%20-H%20%27accept:%20application/json'
      )

  }
}
