import { Injectable } from "@angular/core";

import {IProduct} from './product'
import { Observable, throwError } from "rxjs";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, tap } from 'rxjs/operators';







@Injectable({
    providedIn: 'root' 
})
export class ProductService {
  private productypeUrl ='api/products/products.json';

  constructor(private http: HttpClient){}

    getProductypes(): Observable<IProduct[]> {
      return this.http.get<IProduct[]>(this.productypeUrl).pipe(
        tap(data=>console.log('ALL:'+ JSON.stringify(data))),
        catchError(this.handleError)
      );
      
    }
    private handleError(err:HttpErrorResponse){
      let errorMessage = '';
      if (err.error instanceof ErrorEvent) {
        errorMessage = `An error occurred: ${err.error.message}`;

      } else{
        errorMessage = `Server returned code: ${err.status}, error message is: $(err.message)`;
      }
      console.error(errorMessage);
      return throwError(errorMessage);
    }



}