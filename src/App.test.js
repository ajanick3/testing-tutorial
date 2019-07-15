import { add, totalCost } from './App'

// Unit Test
test('add', () => {
  expect(add(1, 2)).toBe(3)
})

// Integration Test
// Tests that work together
test('total cost', () => {
  expect(totalCost(5, 19.99)).toBe('$24.99')
})
