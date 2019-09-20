import { NgModule } from '@angular/core';
import { SmartadminModule } from '../shared/smartadmin.module'
import { Routes, RouterModule } from '@angular/router';
import { FileUploadComponent } from './file-upload.component';
import { FileUploadService } from './file-upload.service';
import { LoaderModule } from '../shared-modules/loader/loader.module';
const routes: Routes = [
    {
        path: '',
        component: FileUploadComponent
    }
]
@NgModule({
    imports: [
        SmartadminModule,
        LoaderModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        FileUploadComponent
    ],
    providers: [FileUploadService],
})
export class FileUploadModule {

}
