import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplatesModule } from './templates/templates.module';
import { OrganismsModule } from './organisms/organisms.module';

@NgModule({
  imports: [
    CommonModule,
    OrganismsModule,
    TemplatesModule
  ],
  exports: [
    OrganismsModule,
    TemplatesModule,
  ],
})
export class SharedModule {}
