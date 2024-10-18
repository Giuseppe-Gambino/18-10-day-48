import { Component, OnInit } from '@angular/core';
import { iTodos } from '../../interfaces/i-todos';
import { UsersService } from '../../services/users.service';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private userSvc: UsersService, private taskSvc: TodosService) {}

  tasksArr: iTodos[] = [];

  nameForm!: string;

  ngOnInit() {
    this.tasksArr = this.taskSvc.getTasksWithUser(this.userSvc.user);
  }

  getByName() {
    this.tasksArr = this.taskSvc.getTasksWithUser(this.userSvc.user);
    this.tasksArr = this.taskSvc.getByNameService(this.tasksArr, this.nameForm);
  }
}
