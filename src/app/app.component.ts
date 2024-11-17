import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WorkerComponent } from './worker/worker.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WorkerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ConsumeAPI';
}
