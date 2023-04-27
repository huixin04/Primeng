import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareModule } from './share/share.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FormComponent } from './form/form.component';
import { SurveyComponent } from './survey/survey.component';
import { TableComponent } from './table/table.component';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CrudComponent } from './crud/crud.component';
import { EditComponent } from './crud/edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FormComponent,
    SurveyComponent,
    TableComponent,
    CrudComponent,
    EditComponent
   ],
  imports: [
    ShareModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    CalendarModule,
    RadioButtonModule,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
