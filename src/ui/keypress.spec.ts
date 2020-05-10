import { keypress } from './keypress'
import a from 'assertron'

test('with number', () => {
  a.satisfies(keypress(0), {
    name: 'number',
    sequence: '0',
    raw: 0
  })
})
