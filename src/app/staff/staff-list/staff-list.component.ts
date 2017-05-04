import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Staff } from './../staff.model';
import { StaffService } from './../staff.service';

import { Animations } from './../staff-animations';

@Component({
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css'],
  animations: [
    Animations.flyStaffIn
  ]
})
export class StaffListComponent implements OnInit {
  staff: Staff[];
  interns: Staff[];
  selectedMember: Staff;

  constructor(
    private staffService: StaffService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {
      this.staff = [];
      this.interns = [];
  }

  ngOnInit() {
    this.getStaffMembers();
  }

  getStaffMembers(): void {
    this.staffService
      .getStaff()
      .then((staff) => {
        for(let i = 0; i < staff.length; i++){
          if(staff[i].staff_or_intern === "Intern"){
            this.interns.push(staff[i]);
          }else if(staff[i].staff_or_intern === "Staff"){
            this.staff.push(staff[i]);
          }else if(staff[i].staff_or_intern === "Both"){
            this.interns.push(staff[i]);
            this.staff.push(staff[i]);
          }
        }
      });
        
      //   (staff) => {

      //   for(let s of staff){
      //     console.log(s.staff_of_intern)
      //     switch(s.staff_of_intern){
      //       case 'Staff': {
      //         this.staff.push(s);
      //         break;
      //       }
      //       case 'Intern': {
      //         this.interns.push(s);
      //         break;
      //       }
      //       case 'Both': {
      //         this.interns.push(s);
      //         this.staff.push(s);
      //         break;
      //       }
      //     }
      //     console.log(staff.length, s.staff_of_intern)
      //   }
      // });

  }
  onSelect(member: Staff): void {
    this.selectedMember = member;
  }
  clearSelection(): void {
    this.selectedMember = null;
  }

}
