import { Component } from '@angular/core';
import { MdChipInputEvent } from '@angular/material';
import { ENTER } from '@angular/cdk/keycodes';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tags-editor',
  templateUrl: './tags-editor.component.html'
})

export class TagsEditorComponent {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  // Enter, --comma
  separatorKeysCodes = [ENTER];

  tags = [
  ];


  add(event: MdChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.tags.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(tag: any): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }
}
