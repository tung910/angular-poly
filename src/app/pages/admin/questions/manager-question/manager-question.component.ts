import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Isubject from 'src/app/models/subject';
import { SubjectsService } from 'src/app/services/subjects.service';

@Component({
  selector: 'app-manager-question',
  templateUrl: './manager-question.component.html',
  styleUrls: ['./manager-question.component.scss'],
})
export class ManagerQuestionComponent implements OnInit {
  subjects: Array<Isubject> = [];
  constructor(private subjectsService: SubjectsService) {}
  editCache: /* { [key: string]: { edit: boolean; data: ItemData } } */ any =
    {};
  isVisible = false;

  startEdit(id: number): void {
    this.editCache[id].edit = true;
  }
  cancelEdit(id: number): void {
    const index = this.subjects.findIndex((item: any) => item.id == id);
    this.editCache[id] = {
      data: { ...this.subjects[index] },
      edit: false,
    };
  }

  saveEdit(id: number): void {
    const index = this.subjects.findIndex((item: any) => item.id === id);
    const data = Object.assign(this.subjects[index], this.editCache[id].data);
    this.subjectsService.updateSubject(data).subscribe((data) => {
      console.log(data);
    });
    this.editCache[id].edit = false;
  }

  updateEditCache(): void {
    this.subjects.forEach((item: any) => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item },
      };
    });
  }

  ngOnInit(): void {
    // const data = [];
    // for (let i = 0; i < 100; i++) {
    //   data.push({
    //     id: i,
    //     name: ` `,
    //     icon: ' ',
    //     slug: ` `,
    //   });
    // }
    this.subjectsService.getSubject().subscribe((data) => {
      this.subjects = data;
      this.updateEditCache();
    });
  }
  addRow(): void {
    // this.subjects = [
    //   ...this.subjects,
    //   {
    //     id: this.subjects.length + 1,
    //     name: `Edrward  ${this.subjects.length + 1}`,
    //     icon: ' ',
    //     slug: `London Park no.  ${this.subjects.length + 1}`,
    //   },
    // ];
    // this.updateEditCache();
  }
  startDelete(id: number) {
    this.subjects = this.subjects.filter((d: any) => d.id != id);
    this.subjectsService.deleteSubject(id).subscribe();
  }
  showModal(): void {
    this.isVisible = true;
  }
  slugify(input: string) {
    return input
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w\-]+/g, '') // Remove all non-word chars
      .replace(/\-\-+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, ''); // Trim - from end of text
  }
  handleOk(formData: NgForm): void {
    console.log('Button ok clicked!');
    const data: any = {
      name: formData.value.titleSubject,
      icon: formData.value.avatar,
      slug: this.slugify(formData.value.titleSubject + new Date().getTime()),
    };
    this.subjectsService.createSubject(data).subscribe((res) => {
      this.isVisible = false;
      this.ngOnInit();
    });
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');

    this.isVisible = false;
  }
}
