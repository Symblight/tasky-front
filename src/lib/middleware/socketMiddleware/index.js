export function socketMiddleware() {
  // return ({ dispatch }) => (next) => (action) => {
  //   if (typeof action === "function") {
  //     return next(action)
  //   }
  //   const { event, leave, handle, ...rest } = action
  //   if (!event) {
  //     return next(action)
  //   }
  //   const socket = io()
  //   if (leave) {
  //     socket.removeAllListeners(event)
  //     dispatch({ type: "DISCONNECT" })
  //   } else {
  //     let handleEvent = handle
  //     if (typeof handleEvent === "string") {
  //       handleEvent = (result) => dispatch({ type: handle, result, ...rest })
  //     }
  //     return socket.on(event, handleEvent)
  //   }
  //   return next(action)
  // }
}
