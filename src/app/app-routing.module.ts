import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionsComponent } from './components/collections/collections.component';
import { CollectionComponent } from './components/collection/collection.component';

const routes: Routes = [

    {
        path: "g/:color",
        redirectTo: "generator/:color",
        pathMatch: "full"
    },

    {
        path: "g",
        redirectTo: "generator",
        pathMatch: "full"
    },

    {
        path: ":collection/:color",
        component: CollectionComponent
    },

    {
        path: ":collection",
        component: CollectionComponent
    },

    {
        path: "",
        component: CollectionsComponent
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
