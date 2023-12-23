import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
@Component({
  selector: 'app-sidenav-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
  ],
  templateUrl: './sidenav-list.component.html',
  styleUrl: './sidenav-list.component.css',
})
export class SidenavListComponent {
  @Output() closeSidenav = new EventEmitter<void>();

  onToggle() {
    this.closeSidenav.emit();
  }
}
