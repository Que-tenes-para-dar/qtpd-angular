import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

// Modules
import { ComponentsModule } from '../components/components.module';
import { PagesRoutingModule } from './pages-routing.module';

// Components
import { MapComponent } from './map/map.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { HowDoesItWorkComponent } from './how-does-it-work/how-does-it-work.component';
import { ContactUsComponent } from './contact/contact-us.component';

@NgModule({
    declarations: [
        MapComponent,
        WhoWeAreComponent,
        HowDoesItWorkComponent,
        ContactUsComponent,
    ],
    exports: [
        MapComponent
    ],
    imports: [
        CommonModule,
        ComponentsModule,
        PagesRoutingModule,
        SharedModule
    ]
})

export class PagesModule { }
