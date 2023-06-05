import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
interface Task {
  id: number;
  title: string;
  completed: boolean;
}
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  tasks!: Observable<Task[]>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.tasks = this.http.get<Task[]>('https://jsonplaceholder.typicode.com/todos');
  }

  updateTask(task: Task, completed: boolean) {
    task.completed = completed;
   
  }
  
  
  
  
}
