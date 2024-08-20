import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { UserDashboardComponent } from './shared/components/user-dashboard/user-dashboard.component';
import { ProdDashboardComponent } from './shared/components/prod-dashboard/prod-dashboard.component';
import { FairDashboardComponent } from './shared/components/fair-dashboard/fair-dashboard.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { UserResolverService } from './shared/services/user-resolver.service';
import { UserFormComponent } from './shared/components/user-dashboard/user-form/user-form.component';
import { ProdFormComponent } from './shared/components/prod-dashboard/prod-form/prod-form.component';
import { ProdInfoComponent } from './shared/components/prod-dashboard/prod-info/prod-info.component';
import { UserInfoComponent } from './shared/components/user-dashboard/user-info/user-info.component';
import { ProdResolverService } from './shared/services/prod-resolver.service';
import { FairDetailsComponent } from './shared/components/fair-dashboard/fair-details/fair-details.component';
import { FairsResolverService } from './shared/services/fairs-resolver.service';
import { CanDeactivateGuard } from './shared/services/can-deactivate.guard';
import { AuthComponent } from './shared/components/auth/auth.component';
import { AuthGuard } from './shared/services/auth.guard';
import { UserRoleGuard } from './shared/services/user-role.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    // canActivate : [UserRoleGuard],
    data : {
      userRole : ['buyer' , 'admin' , 'sa']
    }
  },
  {
    path: 'users',
    component: UserDashboardComponent,
    resolve : {userData : UserResolverService},
    canActivate : [AuthGuard],
    data : {
      userRole : ['admin' , 'sa']
   },
    children : [
      {
        path : 'addUser',
        component  : UserFormComponent
      },
      {
        path : ':userId',
        component : UserInfoComponent
      },
      {
        path : ':userId/editUser',
        component : UserFormComponent,
        canDeactivate : [CanDeactivateGuard],
      }
    ],
  },
  {
    path: 'products',
    component: ProdDashboardComponent,
    resolve : {prodData : ProdResolverService},
    canActivate : [AuthGuard],
    data : {
       userRole : ['buyer' , 'admin' , 'sa']
    },
    children : [
      {
        path : 'addProd',
        component  : ProdFormComponent
      },
      {
        path : ':prodId',
        component : ProdInfoComponent
      },
      {
        path : ':prodId/editProd',
        component : ProdFormComponent,
      canDeactivate : [CanDeactivateGuard],

      }
    ],
  },
  {
    path: 'fairs',
    component: FairDashboardComponent,
    resolve : {fairData : FairsResolverService},
    canActivate : [AuthGuard],
    data : {
      userRole : ['sa']
   },
    children : [
      {
        path : ':fairId',
        component : FairDetailsComponent
      }
    ]
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'page-not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}



