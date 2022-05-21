import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPublicComponent } from './components/layouts/layout-public/layout-public.component';
import { DetailsComponent } from './pages/details/details.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
    {
        path: '', component: LayoutPublicComponent, children: [
            { path: '', component: HomeComponent },
            { path: 'products', component: ProductsComponent, },
            { path: 'details/:id', component: DetailsComponent, },
            { path: 'products/:id', component: DetailsComponent }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
