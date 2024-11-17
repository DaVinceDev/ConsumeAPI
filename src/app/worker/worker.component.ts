import { Component } from '@angular/core';
import { WorkerService } from './worker.service';
import { NgFor } from '@angular/common';
import { WorkerClass } from './Worker';
import { FormsModule, NgForm } from '@angular/forms';
import { WorkerVM } from './workerVM';
import stringify from 'json-stringify-safe';

@Component({
  selector: 'app-worker',
  standalone: true,
  imports: [NgFor,FormsModule],
  templateUrl: './worker.component.html',
  styleUrl: './worker.component.css'
})
export class WorkerComponent {

  data: WorkerClass[] = [];
  currentItem: any;
  formData =  new WorkerClass(
    0,
    'dummy',
    'dummy',
    'dummy',
    0,
    'dummy',
    null,
    null,
    0
  );
  constructor(private dataService: WorkerService) {
  }
  // the problem was that the constructor was not providing the optional parameters of the class WorkerClass, so it was giving a 400 error because the server was not recieving the correct data.
  
  ngOnInit(): void {
    this.dataService.getAll().subscribe((response) => {
      this.data = response;
    });
  }

  // Create new item
  addItem(newItem: WorkerClass): void {
    const serializedItem = stringify(newItem,null,2);
    console.log(serializedItem);
    this.dataService.create(serializedItem).subscribe((response) => {
      this.data.push(response);
    });
  }

}
