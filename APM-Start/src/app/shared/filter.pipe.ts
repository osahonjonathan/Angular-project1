import { LowerCasePipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";
import { IProduct } from "../products/product";


@Pipe({
    name: 'Filter'
})



export class FilterPipe implements PipeTransform{
     transform(productypes: IProduct[], listFilter: string):any{
         
         if (listFilter === undefined) return productypes;
         return productypes.filter(function(productype){
             return productype.productName. toLowerCase().includes(listFilter.toLowerCase())
         })
     }
 }