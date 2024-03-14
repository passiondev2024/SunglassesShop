import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendMessageComponent } from './send-message/send-message.component';
import { MessageRoutingModule } from './message-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    SendMessageComponent
  ],
  imports: [
    CommonModule,
    MessageRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class MessageModule { }
