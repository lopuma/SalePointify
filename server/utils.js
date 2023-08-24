import pkg from 'chalk'
const { green, yellow, red, magenta } = pkg

export function ready (text) {
  console.info(green('ready'), text)
}

export function warn (text) {
  console.warn(yellow('warn'), text)
}

export function error (text) {
  console.error(red('error'), text)
}

export function debug (text) {
  console.log(magenta('debug'), text)
}

export function startServer (app, port, host) {
  app
    .listen(port, () => {
      const appUrl = `http://${host}:${port}/api/`
      ready(` started server on [::]:${port}, url: ${appUrl}`)
    })
    .on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        warn(`Port ${port} is in use, trying ${port + 1} instead.`)
        startServer(port + 1)
      } else {
        console.error(err)
      }
    })
}
