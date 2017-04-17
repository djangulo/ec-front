import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Staff } from './../staff.model';
import { StaffService } from './../staff.service';

@Component({
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit {
  staffMembers: Staff[];
  interns: Staff[];
  selectedMember: Staff;

  constructor(
    private staffService: StaffService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getStaffMembers();
  }

  getStaffMembers(): void {
    this.staffService
      .getStaff()
      .then(staffMembers => this.staffMembers = staffMembers);
  }
  onSelect(member: Staff): void {
    this.selectedMember = member;
  }
  clearSelection(): void {
    this.selectedMember = null;
  }

}
