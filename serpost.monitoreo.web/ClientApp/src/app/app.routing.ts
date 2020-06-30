import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AdminComponent } from './admin';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';
import { Role } from './_models';
import { CamarasModule } from './_views/camaras/camaras.module';
import { NgModule } from '@angular/core';
import { DefaultComponent } from './_containers/default/default.component';
import { MonitorComponent } from './_containers/monitor/monitor.component';

const routes: Routes = [
    
    {
        path: '',
        component: DefaultComponent,
        canActivate: [AuthGuard],
        children: [
            {
              path: '',
              redirectTo: 'camaras',
              pathMatch: 'full',
            },
            {
              path: 'camaras',
              loadChildren: './_views/camaras/camaras.module#CamarasModule'
            //   canLoad: [EnterpriceGuard],
            //   data: {
            //     title: 'Inicio',
            //     roles: [Role.Admin, Role.Client, Role.Supplier]
            //   }
            }
        ]
    },
    {
        path:'monitor',
        component: MonitorComponent
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
    },
    {
        path: 'login',
        component: LoginComponent
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
  
    
  }
  