import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Isubject from 'src/app/models/subject';
import { SubjectsService } from 'src/app/services/subjects.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  loading = false;
  visible = false;
  data: Array<Isubject> = [];
  constructor(private subjectsService: SubjectsService) {}

  ngOnInit(): void {}
  handlerSearch(data: NgForm) {
    this.subjectsService.searchText(data.value.textSearch).subscribe((data) => {
      return (this.data = data);
    });
  }
}
