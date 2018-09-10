import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HulkService } from '../hulk.service';
import { ModalDirective } from 'ngx-bootstrap';

declare var $;

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  public products;
  public selectedProduct;

  @ViewChild('editProductModal') public editProductModal: ModalDirective;

  constructor(private router: Router, private _hulkService: HulkService) { }

  ngOnInit() {
    this.getAllProducts();
  }

  public addProduct() {
    this.router.navigate(['add']);
  }

  public sellProduct(product) {
    if (product.stock == 0) {
      return alert("No hay stock del item seleccionado");
    }
    product.stock = product.stock - 1;
    this._hulkService.updateProduct(product).subscribe((result) => {
      console.log("updated!");
      this.router.navigate(['list']);
    }, (err) => {
      console.log(err);
    });
  }

  public editProduct(product): void {
    if (product.stock == 0) {
      return alert("No se puede modificar el item seleccionado");
    }
    localStorage.removeItem("editSku");
    localStorage.setItem("editSku", product.sku);
    this.router.navigate(['edit']);
  };

  public getAllProducts() {
    this.products = [];
    this._hulkService.getProducts().subscribe((data: {}) => {
      console.log(data);
      this.products = data;
    });
  }
}
