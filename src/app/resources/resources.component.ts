import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-resources',
  standalone: true, // Mark it as a standalone component
  imports: [RouterOutlet], // Import RouterOutlet if needed
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css'] // Fix typo (styleUrl → styleUrls)
})
export class ResourcesComponent {}