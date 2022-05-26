import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  OpenCoffee()
  {
    window.open("https://apps.preview.powerapps.com/play/db6e6806-1e68-427a-affc-940f7ee8e8be?tenantId=72f988bf-86f1-41af-91ab-2d7cd011db47&hint=ee168b26-5875-4b1f-812d-3a6a76619f89&screenColor=RGBA%280%2C176%2C240%2C1%29&skipAppMetadata=true");
  }

  OpenChecklist()
  {
    this.router.navigate(['checklist'])
  }
  OpenApplaude()
  {
    this.router.navigate(['applaude'])
  }
  OpenContact()
  {
    this.router.navigate(['contact'])
  }
  OpenAbout()
  {
    this.router.navigate(['about'])
  }
  OpenServices()
  {
    this.router.navigate(['services'])
  }
  OpenBlog()
  {
    this.router.navigate(['blog'])
  }
  OpenCC()
  {
    window.open("https://microsoft.sharepoint.com/teams/ConnectedCommunities?xsdata=MDV8MDF8fGQxNjg0Y2M0ZjIzNTQ5ZjYzMDE0MDhkYTIyOWZlMjM0fDcyZjk4OGJmODZmMTQxYWY5MWFiMmQ3Y2QwMTFkYjQ3fDB8MHw2Mzc4NjAzNjczMTY1NjE5NDB8R29vZHxWR1ZoYlhOVFpXTjFjbWwwZVZObGNuWnBZMlY4ZXlKV0lqb2lNQzR3TGpBd01EQWlMQ0pRSWpvaVYybHVNeklpTENKQlRpSTZJazkwYUdWeUlpd2lWMVFpT2pFeGZRPT18MXxNVGs2YldWbGRHbHVaMTlaVkVreFRVUkZORTFYVFhSYWFtc3lXV2t3TUUxWFdUTk1WMGw1VFZSamRFNXFaekZPVkZFelQxZFdiVmxxU21wQWRHaHlaV0ZrTG5ZeXx8&sdata=Zk9iRndpMldDQ3pqUGFLdEZwWWQyRVNzRmowem9tN0lXazFSMGxIQ0JHcz0%3D&ovuser=72f988bf-86f1-41af-91ab-2d7cd011db47%2Csimranjalan%40microsoft.com");
  }
}
