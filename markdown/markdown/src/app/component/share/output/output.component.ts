import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent {
  @Input() safeHtml!: SafeHtml;
}
