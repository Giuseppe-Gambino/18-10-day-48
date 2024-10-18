import { Component } from '@angular/core';
import { iTodos } from '../../interfaces/i-todos';
import { TodosService } from '../../services/todos.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss',
})
export class CompletedComponent {
  constructor(private userSvc: UsersService, private taskSvc: TodosService) {}

  tasksArr: iTodos[] = [];

  nameForm!: string;

  ngOnInit() {
    this.tasksArr = this.taskSvc
      .getTasksWithUser(this.userSvc.user)
      .filter((task) => task.completed === true);
  }

  getByName() {
    this.tasksArr = this.taskSvc.getTasksWithUser(this.userSvc.user);
    this.tasksArr = this.taskSvc.getByNameService(this.tasksArr, this.nameForm);
  }
}
