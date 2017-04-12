// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Vendor
// ...

// Components
import { WorkListComponent } from './work-list/work-list.component';
import { WorkDetailComponent } from './work-detail/work-detail.component';

// Routing
import { WorkRoutingModule } from './works-routing.module';

// Services
import { WorkService, CategoryService } from '../services';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        WorkRoutingModule
    ],
    declarations: [
        WorkDetailComponent,
        WorkListComponent
    ],
    providers: [
        CategoryService,
        WorkService
    ]
})
export class WorksModule {}