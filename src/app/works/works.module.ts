// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Components
import { WorksComponent } from './works.component';
import { WorkCategoriesComponent } from './work-categories/work-categories.component';
import { WorkListComponent } from './work-list/work-list.component';
import { WorkDetailComponent } from './work-detail/work-detail.component';

// Directives
import { ClickOutsideDirective } from './../app.directives';

// Routing
import { WorkRoutingModule } from './works-routing.module';

// Services
import { WorkService } from './work.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        WorkRoutingModule
    ],
    declarations: [
        WorksComponent,
        WorkCategoriesComponent,
        WorkListComponent,
        WorkDetailComponent,
        ClickOutsideDirective
    ],
    providers: [
        WorkService
    ]
})
export class WorksModule {}