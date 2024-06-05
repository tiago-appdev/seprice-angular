import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavBarAdminComponent } from '../layout/nav-bar-admin/nav-bar-admin.component';
import { FooterComponent } from '../layout/footer/footer.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RouterLink, NavBarAdminComponent, FooterComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
})
export class AdminDashboardComponent {}
