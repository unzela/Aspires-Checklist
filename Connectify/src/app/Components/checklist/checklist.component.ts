import { Component, OnInit } from '@angular/core';
import {ConnectifyService} from '../../connectify.service'

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {

  constructor(private service: ConnectifyService) { }

  ngOnInit(): void {
    this.service.getCheckList().subscribe(data=>{
      console.log("Data is",data);
  })
}
}

