import Ws from "@adonisjs/websocket-client"

import { getSocketProtocol } from "./protocol"

export class SocketConnection {
  connect() {
    const { host } = window.config
    this.ws = Ws(`${getSocketProtocol()}${host}`).connect()
    console.log(this.ws)

    this.ws.on("open", () => {
      console.log("Connection initialized")
    })

    this.ws.on("close", () => {
      console.log("Connection closed")
    })

    return this
  }

  subscribe(channel, handler) {
    if (!this.ws) {
      setTimeout(() => this.subscribe(channel), 1000)
    } else {
      const result = this.ws.subscribe(channel)

      result.on("message", (message) => {
        handler(message)
      })

      result.on("error", (error) => {
        console.error(error)
      })

      return result
    }
    return null
  }
}

export default new SocketConnection()
