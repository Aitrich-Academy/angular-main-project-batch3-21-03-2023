import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminlandingComponent } from '../adminmodule/adminlanding/adminlanding.component';
import { UserlandingComponent } from './userlanding/userlanding.component';
import { MyordersComponent } from './myorders/myorders.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UserorderhistoryComponent } from './userorderhistory/userorderhistory.component';
import { ProductplaceorderComponent } from './productplaceorder/productplaceorder.component';
import { OrdershippingComponent } from './ordershipping/ordershipping.component';
import { UserosGuard } from '../guards/useros.guard';

const routes: Routes = [
  // {path: 'userlanding' , component : UserlandingComponent},
  // {path: '' , redirectTo:'/userlanding', pathMatch : 'full'},
  // {path:'adminlanding', component: AdminlandingComponent},
  {path:"",component:UserprofileComponent},
{path:"myorders/:pid",component: MyordersComponent},
{path:"userpro",component:UserprofileComponent},
{path:"useroh/:pid",component:UserorderhistoryComponent},
{
  path:"placeorder/:id",component:ProductplaceorderComponent
},
{
  path:"ordership/:idpro",component:OrdershippingComponent,canActivate:[UserosGuard]
  
},
  
];

@NgModule({
  declarations: [],


  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserlandingRoutingModule { }
