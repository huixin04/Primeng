import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { SurveyComponent } from './survey/survey.component';
import { CrudComponent } from './crud/crud.component';
import{EditComponent} from'./crud/edit/edit.component';
import { PuchaseComponent } from './puchase/puchase.component';
import { Edit2Component } from './puchase/edit2/edit2.component';


const routes: Routes = [
  { path: 'form', component:  FormComponent  },
  { path: 'table', component:  TableComponent  },
  { path: 'survey', component: SurveyComponent  },
  { path: 'crud', component: CrudComponent  },
  { path: 'crud/edit/:id', component: EditComponent },
  { path: 'puchase', component: PuchaseComponent },
  { path: 'puchase/edit2/:purchase_id', component: Edit2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
