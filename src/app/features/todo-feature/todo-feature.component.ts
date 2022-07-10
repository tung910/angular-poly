import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { job } from './job.type';
import { addJob, removeJob } from './todo.actions';
import { jobSelectors } from './todo.selectors';

@Component({
  selector: 'app-todo-feature',
  templateUrl: './todo-feature.component.html',
  styleUrls: ['./todo-feature.component.scss'],
})
export class TodoFeatureComponent implements OnInit, AfterViewInit {
  jobs$: Observable<any> | undefined;
  @ViewChild('inputJob') inputRef: ElementRef | any;
  constructor(private _store: Store) {}
  ngAfterViewInit(): void {
    this.handlerFocus();
  }

  ngOnInit(): void {
    this.jobs$ = this._store.pipe(select(jobSelectors));
  }
  handlerFocus() {
    this.inputRef.nativeElement.value = '';
    this.inputRef?.nativeElement.focus();
  }
  onSubmit($event: NgForm) {
    const job = {
      id: Math.floor(Math.random() * 999),
      name: $event?.value?.job,
    };
    this._store.dispatch(addJob(job));
    this.handlerFocus();
  }
  onRemove(data: job) {
    this._store.dispatch(removeJob(data));
  }
}
