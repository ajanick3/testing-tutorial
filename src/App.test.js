import { add, totalCost } from './App'

test('add', () => {
  expect(add(1, 2)).toBe(3)
})

test('total cost', () => {
  expect(totalCost(5, 19.99)).toBe('$24.99')
})
