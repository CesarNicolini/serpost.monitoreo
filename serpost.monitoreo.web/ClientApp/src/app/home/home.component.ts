import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { UserService, AuthenticationService, CamaraService } from '@app/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    currentUser: User;
    userFromApi: User;

    cams:any[] = [];

    constructor(
        private userService: UserService,
        private authenticationService: AuthenticationService,
        private camaraService:CamaraService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.loading = true;
        // this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
        //     this.loading = false;
        //     this.userFromApi = user;
        // });


        this.camaraService.getCameraPerUser().subscribe ( cam => 
            {
                this.loading = false;
                console.log (cam)
                this.cams = cam;
            }
        )
        
    }
}