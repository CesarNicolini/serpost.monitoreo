import { Component, OnInit } from '@angular/core';
import { UserService, AuthenticationService, CamaraService } from '@app/_services';
import { User } from '@app/_models';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

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
        
        this.camaraService.getCameraPerUser().subscribe ( cam => 
            {
                this.loading = false;
                console.log (cam)
                this.cams = cam;
            }
        )
        
    }

}
