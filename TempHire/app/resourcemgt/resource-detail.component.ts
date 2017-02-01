import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { BusyService, DialogService, CanComponentDeactivate } from '../core/services/common';

import { StaffingResource } from '../core/entities/entity-model';
import { ResourceMgtUnitOfWork } from './resource-mgt-unit-of-work';
import { ResourceNameEditorComponent } from './resource-name-editor.component';

@Component({
    moduleId: module.id,
    templateUrl: './resource-detail.html',
    providers: [
        ResourceMgtUnitOfWork   // Inject a new instance for this component
    ]
})
export class ResourceDetailComponent implements OnInit, CanComponentDeactivate {

    @ViewChild(ResourceNameEditorComponent) nameEditor: ResourceNameEditorComponent;

    model: StaffingResource;

    constructor(private unitOfWork: ResourceMgtUnitOfWork, private busyService: BusyService, private route: ActivatedRoute, private dialogService: DialogService) { }

    ngOnInit() {
        this.route.params.forEach(params => {
            let reportId = params['id'];

            this.unitOfWork.clear();
            this.busyService.busy(this.busy(this.unitOfWork, reportId).then((data) => {
                if (data) {
                    this.model = data;
                    this.model.fullName = this.getFullName(this.model); 
                } else {
                    this.dialogService.messageBox('Not found!', 'The staffing resource with the given identifier wasn\'t found.', ['Ok']);
                }
            }))
        });
    }

    getFullName(model: StaffingResource):string {
        return ['firstName', 'middleName', 'lastName']
            .map(x => model[x])
            .reduce((prev, cur) => prev ? `${prev} ${cur}` : cur, '');
    }

    busy(unitOfWork: ResourceMgtUnitOfWork, reportId: any): Promise<StaffingResource> {        
        return new Promise(function (resolve, reject) {
            unitOfWork.staffingResources.withId(reportId).then(data => {                
                resolve(data);
            }).catch(e => {
                reject(e);
            });
        });
    }

    canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
        if (!this.unitOfWork.hasChanges()) return true;

        let title = 'Confirm';
        let message = 'You have unsaved changes. Would you like to save?';
        let buttons = ['Yes', 'No', 'Cancel'];
        return this.dialogService.messageBox(title, message, buttons).then(result => {
            if (result === 'Yes') return this.save(true).then(() => true);
            if (result === 'No') {
                this.cancel();
                return true;
            }

            return false;
        });
    }

    get canSave(): boolean {
        return this.unitOfWork.hasChanges();
    }

    save(suppressConfirmation: boolean) {
        return this.busyService.busy(this.unitOfWork.commit()).then(() => {
            if (suppressConfirmation) return;

            return this.dialogService.messageBox('Success', 'Successfully saved data!', ['Ok']);
        });
    }

    cancel() {
        this.unitOfWork.rollback();
    }

    editName() {
        this.nameEditor.show(this).then(name => {
            if (name) {
                this.model.firstName = name.firstName;
                this.model.middleName = name.middleName;
                this.model.lastName = name.lastName;
            }
        });
    }
}