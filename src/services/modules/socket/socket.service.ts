import { io } from 'socket.io-client'

export class SocketService {
  readonly socket
  constructor() {
    this.socket = io(import.meta.env.VITE_API_BASE_URL, { transports: ['websocket'] })
  }
}
