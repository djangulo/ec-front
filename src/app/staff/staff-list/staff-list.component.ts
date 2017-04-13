import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Staff } from './../'
import { StaffService } from './../staff.service';

@Component({
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit {
  staff: Staff[];
  selectedMember: Staff;

  constructor(
    private staffService: StaffService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getStaffMembers();
    console.log("so far were here")
  }

  getStaffMembers(): void {
    this.staffService
      .getStaff()
      .then(staff => this.staff = staff)
  }
  onSelect(member: Staff): void {
    this.selectedMember = member;
  }

}
