import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { TodosService } from '../../services/todos.service';
import { iUsers } from '../../interfaces/i-users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  constructor(private userSvc: UsersService, private taskSvc: TodosService) {}

  tasksArr: iUsers[] = [];

  nameForm!: string;

  ngOnInit() {
    this.tasksArr = this.userSvc.getUserWithTasks(this.taskSvc.todos);
  }

  getByName() {
    this.tasksArr = this.userSvc.getUserWithTasks(this.taskSvc.todos);
    this.tasksArr = this.userSvc.getByNameService(this.tasksArr, this.nameForm);
  }
}
