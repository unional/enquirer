import { keypress } from './keypress'
import a from 'assertron'

test('with number', () => {
  a.satisfies(keypress(0), { name: 'number', sequence: '0', raw: 0 })
  a.satisfies(keypress(1), { name: 'number', sequence: '1', raw: 1 })
  a.satisfies(keypress(2), { name: 'number', sequence: '2', raw: 2 })
  a.satisfies(keypress(3), { name: 'number', sequence: '3', raw: 3 })
  a.satisfies(keypress(4), { name: 'number', sequence: '4', raw: 4 })
  a.satisfies(keypress(5), { name: 'number', sequence: '5', raw: 5 })
  a.satisfies(keypress(6), { name: 'number', sequence: '6', raw: 6 })
  a.satisfies(keypress(7), { name: 'number', sequence: '7', raw: 7 })
  a.satisfies(keypress(8), { name: 'number', sequence: '8', raw: 8 })
  a.satisfies(keypress(9), { name: 'number', sequence: '9', raw: 9 })
})
