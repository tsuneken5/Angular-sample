import { Component, EventEmitter, ViewChild, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  message: string = '';
  testareaStyle = { height: '50px' };

  @ViewChild('fieldElement') fieldElement!: MatFormField;
  @Output() parseEvent = new EventEmitter<string>();

  public onParse() {
    this.parseEvent.emit(this.message);
  }

  public initLayout() {
    const height = this.fieldElement._elementRef.nativeElement.offsetHeight * 0.85;
    this.testareaStyle.height = height + 'px';
  }

  ngAfterViewInit() {
    this.initLayout();
  }

}
