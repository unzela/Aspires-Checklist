import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffee-chat',
  templateUrl: './coffee-chat.component.html',
  styleUrls: ['./coffee-chat.component.css']
})
export class CoffeeChatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  OpenCoffee()
  {
    window.open("https://apps.preview.powerapps.com/play/db6e6806-1e68-427a-affc-940f7ee8e8be?tenantId=72f988bf-86f1-41af-91ab-2d7cd011db47&hint=ee168b26-5875-4b1f-812d-3a6a76619f89&screenColor=RGBA%280%2C176%2C240%2C1%29&skipAppMetadata=true");
  }

}
