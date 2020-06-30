import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';


import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { AdminComponent } from './admin';
import { LoginComponent } from './login';
import { AppRoutingModule } from './app.routing';;
import { LoaderComponent } from './_containers/loader/loader.component'
import { LoaderService } from './_services/loader.service';
import { LoaderInterceptor } from './_helpers/loader.interceptor';;
import { DefaultComponent } from './_containers/default/default.component'
;
import { MonitorComponent } from './_containers/monitor/monitor.component'
import { PipesModule } from './_pipes/pipes.module';

@NgModule({
    imports: [
        BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
        BrowserAnimationsModule,
        ReactiveFormsModule,
        PipesModule,
        
        HttpClientModule,
        
        AppRoutingModule,

    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AdminComponent,
        LoginComponent
,
        LoaderComponent
,
        DefaultComponent
,
        MonitorComponent
    ],
    providers: [
        LoaderService,
        

        {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true},
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    exports:
    [
        PipesModule
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }