import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [BrowserModule, FormsModule, CoreModule, PagesModule, SharedModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
