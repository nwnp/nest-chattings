import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway()
export class ChatsGateway {
  @SubscribeMessage('new_user')
  handleNewUser(
    @MessageBody() username: string,
    @ConnectedSocket() socket: Socket, // emit or on을 할 수 있음
  ) {
    console.log(socket.id);
    console.log(username);
    socket.emit('hello_user', 'hello ' + username);
  }
}
