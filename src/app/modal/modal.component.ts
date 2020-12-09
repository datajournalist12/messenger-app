import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  // messages: any[] = [];
  messages = [
    'test1',
    'test2',
    'test3'
  ]
  subscription: Subscription;

  constructor(private messageService: MessageService) {
      // subscribe to home component messages
      this.subscription = this.messageService.onMessage().subscribe(
        message => {console.log(message)
      });
  }

  ngOnInit(): void {
  }

}
