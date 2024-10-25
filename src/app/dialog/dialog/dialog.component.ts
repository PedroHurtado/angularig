import { Component, ElementRef, viewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class DialogComponent {
  private dialog = viewChild<ElementRef>("dialog")

  openDialog(){
     (this.dialog()?.nativeElement as  HTMLDialogElement)?.showModal();
  }
  closeDialog(){
    (this.dialog()?.nativeElement as  HTMLDialogElement)?.close()
  }
}
