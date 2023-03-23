import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareModule } from './share/share.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FormComponent } from './form/form.component';
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FormComponent,
  ],
  imports: [
    ShareModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
