import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendMessageComponent } from './send-message/send-message.component';
import { MessageRoutingModule } from './message-routing.module';




@NgModule({
  declarations: [
    SendMessageComponent
  ],
  imports: [
    CommonModule,
    MessageRoutingModule
  ]
})
export class MessageModule { }
