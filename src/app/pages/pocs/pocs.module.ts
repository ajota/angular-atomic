import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClockComponent } from './clock/clock.component';
import { PocsRoutingModule } from './pocs-routing.module';

@NgModule({
  imports: [CommonModule, PocsRoutingModule],
  exports: [PocsModule],
  declarations: [ClockComponent],
})
export class PocsModule {}
