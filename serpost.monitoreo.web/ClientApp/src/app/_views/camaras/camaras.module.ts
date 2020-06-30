import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './display/display.component';
import { CamarasRoutingModule } from './camaras-routing.module';



@NgModule({
  declarations: [DisplayComponent],
  imports: [
    
    CommonModule,
    CamarasRoutingModule
  ]
})
export class CamarasModule { }
