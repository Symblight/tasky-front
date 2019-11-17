import axios from "axios"
import url from "url"

import { join as joinPath } from "path"

const COMMIT_REQUEST = "COMMIT_REQUEST"

function getApiUrl(path, rootRelative) {
  if (rootRelative) {
    return url.resolve(window.config.apiUrl, path)
  }

  const apiUrl = url.parse(window.config.apiUrl)

  const parsedPath = url.parse(path)

  return url.format({
    host: apiUrl.host,
    protocol: apiUrl.protocol,
    pathname: joinPath(apiUrl.pathname, parsedPath.pathname),
    search: parsedPath.search,
  })
}

export const apiMiddleware = (store) => (next) => (action) => {
  if (action.type === COMMIT_REQUEST) {
    const {
      meta: {
        types: [SUCCESS, ERROR],
        request,
      },
      ...payload
    } = action.action

    const formattedUrl = getApiUrl(request.url)

    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Accepts: "*/*",
      ...request.header,
    }

    if (request.unsetContentType) {
      delete headers["Content-Type"]
    }

    axios({
      method: request.method,
      url: formattedUrl,
      crossDomain: true,
      withCredentials: true,
      headers,
      data: {
        ...request.data,
      },
    })
      .then((data) => {
        store.dispatch({
          type: SUCCESS,
          payload: { ...data, ...payload },
        })
      })
      .catch((error) => {
        const errorResponse = error.response
        store.dispatch({
          type: ERROR,
          payload: {
            message: errorResponse && errorResponse.data,
            status: errorResponse && errorResponse.status,
            error: true,
          },
        })
      })
  } else {
    return next(action)
  }
  return next(action)
}

export function commitRequest(action, { token, cookies }) {
  return {
    type: COMMIT_REQUEST,
    action,
    data: action.meta,
    token,
    cookies,
  }
}
