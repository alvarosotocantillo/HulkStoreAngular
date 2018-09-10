import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from "@angular/core";
import { AppComponent } from './app.component';
import { ListProductComponent } from './list-product/list-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';


export const routes: Routes = [
    
    {
        path: '',
        data: {pageTitle: 'List all products'},
        component: ListProductComponent,
    },{
        path: `list`,
        data: {pageTitle: 'List all products'},
        component: ListProductComponent,
    },
    {
        path: `add`,
        data: {pageTitle: 'Add new product'},
        component: AddProductComponent,
    },
    {
        path: 'edit',
        data: {pageTitle: 'Edit selected product'},
        component: EditProductComponent,
    }
];

export const routing = RouterModule.forRoot(routes);