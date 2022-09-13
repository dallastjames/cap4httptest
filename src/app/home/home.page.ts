import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private http: HttpClient) {}

  makeRequest() {
    this.http.get('http://localhost:3000').subscribe({
      next: (res) => console.log(`SUCCESS: ${res}`),
      error: (err) => console.error(`ERROR:`, err),
    });
  }
}
