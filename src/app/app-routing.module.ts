import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './layout/admin/admin.component';
import {AuthComponent} from './layout/auth/auth.component';
import {EmailModule} from './theme/email/email.module';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'home/dashboard/default',
        pathMatch: 'full'
      },
      {
        path: 'home/dashboard',
        loadChildren: './theme/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'home/navigation',
        loadChildren: './theme/navigation/navigation.module#NavigationModule'
      },
      {
        path: 'home/widget',
        loadChildren: './theme/widget/widget.module#WidgetModule'
      },
      {
        path: 'ui/basic',
        loadChildren: './theme/ui-elements/basic/basic.module#BasicModule'
      },
      {
        path: 'ui/advance',
        loadChildren: './theme/ui-elements/advance/advance.module#AdvanceModule'
      },
      {
        path: 'ui/animations',
        loadChildren: './theme/ui-elements/animation/animation.module#AnimationModule'
      },
      {
        path: 'form',
        loadChildren: './theme/forms/forms.module#FormsModule'
      },
      {
        path: 'table/bootstrap-table',
        loadChildren: './theme/table/bootstrap-table/bootstrap-table.module#BootstrapTableModule'
      },
      {
        path: 'table/data-table',
        loadChildren: './theme/table/data-table/data-table.module#DataTableModule'
      },
      {
        path: 'cm/charts',
        loadChildren: './theme/chart/chart.module#ChartModule'
      },
      {
        path: 'cm/map',
        loadChildren: './theme/map/map.module#MapModule'
      },
      {
        path: 'page/user',
        loadChildren: './theme/user/user.module#UserModule'
      },
      {
        path: 'page/email',
        loadChildren: './theme/email/email.module#EmailModule'
      },
      {
        path: 'app/crm-contact',
        loadChildren: './theme/crm-contact/crm-contact.module#CrmContactModule'
      },
      {
        path: 'app/task',
        loadChildren: './theme/task/task.module#TaskModule'
      },
      {
        path: 'app/editor',
        loadChildren: './theme/extension/editor/editor.module#EditorModule'
      },
      {
        path: 'app/invoice',
        loadChildren: './theme/extension/invoice/invoice.module#InvoiceModule'
      },
      {
        path: 'app/file-upload-ui',
        loadChildren: './theme/extension/file-upload-ui/file-upload-ui.module#FileUploadUiModule'
      },
      {
        path: 'app/calendar',
        loadChildren: './theme/extension/event-calendar/event-calendar.module#EventCalendarModule'
      },
      {
        path: 'other/simple-page',
        loadChildren: './theme/simple-page/simple-page.module#SimplePageModule'
      }
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'page/auth',
        loadChildren: './theme/auth/auth.module#AuthModule'
      },
      {
        path: 'page/maintenance/error',
        loadChildren: './theme/maintenance/error/error.module#ErrorModule'
      },
      {
        path: 'page/maintenance/coming-soon',
        loadChildren: './theme/maintenance/coming-soon/coming-soon.module#ComingSoonModule'
      },
      {
        path: 'page/maintenance/offline-ui',
        loadChildren: './theme/maintenance/offline-ui/offline-ui.module#OfflineUiModule'
      },
      {
        path: 'page/email/email-template',
        loadChildren: './theme/email/email-template/email-template.module#EmailTemplateModule'
      },
      {
        path: 'cm/landing',
        loadChildren: './theme/landing/landing.module#LandingModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home/dashboard/default'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
