import { Component, OnInit, Input } from '@angular/core';
import { HulkService } from '../hulk.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(private _hulkService: HulkService, private router: Router ) { }

  public product:any;

  ngOnInit() {
    let sku = localStorage.getItem("editSku");
    this._hulkService.findBySku(sku)
      .subscribe( data => {
        this.product = data;
        console.log("data: ",data);
      });
  }

  public updateProduct(){
    if(this.product.stock < 0){
      return alert("El stock no puede ser menor a 0");
    }
    this._hulkService.updateProduct(this.product).subscribe((result) => {
      console.log("updated!");
      this.router.navigate(['list']);
    }, (err) => {
      console.log(err);
    });
  }

}
