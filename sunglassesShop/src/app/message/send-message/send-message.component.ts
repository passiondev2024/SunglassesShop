import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent {

  sendMessageHandler(form:NgForm){
    if(form.invalid){
      console.log('invalid form')
      return
    }

    console.log(form.value)
  }
}
