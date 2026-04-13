import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html'
})
export class ProfileComponent {

  skinType = '';
  skinProblem = '';
  budget = 0;

  constructor(private router: Router) {}

  submitProfile() {

    if (!this.skinType || !this.skinProblem  || !this.budget) {
      alert('Fill all fields');
      return;
    }

    localStorage.setItem('skinProfile', JSON.stringify({
      skinType: this.skinType,
      skinProblem: this.skinProblem,
      budget: this.budget
    }));

    this.router.navigate(['/recommendations']);
  }
}