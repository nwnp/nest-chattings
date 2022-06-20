import { Logger } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway({ namespace: 'chattings' })
export class ChatsGateway implements OnGatewayConnection {
  private logger = new Logger('chat');

  /** 연결이 끊기는 순간 실행되는 함수 */
  handleDisconnect(@ConnectedSocket() socket: Socket) {
    this.logger.log(`disconnected : ${socket.id} ${socket.nsp.name}`);
  }

  /** 연결되는 순간 실행되는 함수 */
  @SubscribeMessage('new_user')
  handleConnection(
    @ConnectedSocket()
    socket: Socket,
    @MessageBody() username: string,
  ) {
    this.logger.log(
      `connected with ${username}: ${socket.id} ${socket.nsp.name}`,
    );
  }

  @SubscribeMessage('new_user')
  handleNewUser(
    @MessageBody() username: string,
    @ConnectedSocket() socket: Socket, // emit or on을 할 수 있음
  ) {
    socket.broadcast.emit('user_connected', username); // broadcasting
    return username;
  }
}
