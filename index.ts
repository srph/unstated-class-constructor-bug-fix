import { Container } from '@gitbook/unstated'

class X extends Container {
  log() {
    console.log('X:log')
  }
}

const x = new X()
x.log()