import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClient, HttpHandler, provideHttpClient, withFetch } from '@angular/common/http';
import { WorkerService } from './worker/worker.service';
import { WorkerComponent } from './worker/worker.component';
import { FormsModule, NgForm } from '@angular/forms';
import { WorkerVM } from './worker/workerVM';
import { WorkerClass } from './worker/Worker';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(),
  provideHttpClient(withFetch()), WorkerService, WorkerComponent,FormsModule, ]
};
