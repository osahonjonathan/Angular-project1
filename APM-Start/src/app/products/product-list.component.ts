import { Component } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';


@Component({
    
    templateUrl: './product-list.component.html'
    
})
export class ProductListComponent{
    pageTitle: string = 'PRODUCT LIST';
    imageWidth: number = 50;
    imageMargin : number=2;
    showImage : boolean = false;
    errorMessage:string
    listFilter: string = '';
    productypes: IProduct[] =[]
        
  
    
    toggleImage() : void {
      this.showImage = ! this .showImage
    }

    constructor(private productService:ProductService){
      

    }

    ngOnInit(): void {
       this.productService.getProductypes().subscribe({
         next:productypes=>this.productypes = productypes,
         error:err=> this.errorMessage = err
       });
    }
}

