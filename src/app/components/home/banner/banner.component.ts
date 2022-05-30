import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  array = [
    {
      id: 3,
      image:
        'https://wiibook.net/wp-content/uploads/2020/03/sach-hay-ve-phuong-phap-hoc-tap-cover-780x470.png',
    },
    {
      id: 1,
      image:
        'http://static.ybox.vn/2018/8/0/1535295203370-Untitled%20design.jpg',
    },
    {
      id: 2,
      image:
        'https://career.gpo.vn/uploads/images/10202010/images/learning-skills.jpg',
    },
  ];
  effect = 'scrollx';
  constructor() {}

  ngOnInit(): void {}
}
