import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { TestModalComponent } from './test-modal/test-modal.component';
import { SohoModalDialogService } from 'ids-enterprise-ng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('dialogPlaceholder', { read: ViewContainerRef, static: true })
  placeholder: ViewContainerRef;

  constructor(private modalService: SohoModalDialogService) {
    Soho.Locale.culturesPath = '/assets/ids-enterprise/js/cultures/';
    Soho.Locale.set('en-US').done(() => {
      console.log('Locale set');
    });
  }

  public openModal() {
    const cancelText = 'Cancel';
    const updateText = 'Update';
    const titleText = 'Test Modal';
    let dialog = this.modalService
      .modal(TestModalComponent, this.placeholder)
      .buttons([
        {
          text: cancelText,
          click: (e, modal) => {
            modal.isCancelled = true;
            dialog.close('Cancel');
          },
          isDefault: false
        },
        {
          text: updateText,
          click: (e, modal) => {
            dialog.close('Update');
          },
          isDefault: true
        }
      ])
      .title(titleText)
      .open()
      .afterClose((result, dialogRef) => {
        dialog = null;
      });
  }
}

