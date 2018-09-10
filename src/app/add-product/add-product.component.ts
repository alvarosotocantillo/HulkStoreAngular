import { Component, OnInit, Input } from '@angular/core';
import { HulkService } from '../hulk.service';
import { Router } from '@angular/router';
import { Response } from '@angular/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private _hulkService: HulkService, private router: Router ) { }

  @Input() product = { sku:'', name: '', stock: 0 };

  ngOnInit() {
  }

  public createProduct(){
    this._hulkService.createProduct(this.product).subscribe((result) => {
      console.log("created!");
      this.router.navigate(['list']);
    }, (err) => {
      console.log(err);
    });
  }
}
