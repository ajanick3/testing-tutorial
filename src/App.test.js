import { total } from './App'
import { add } from './add'

// Mock location of dependency
jest.mock('./add', () => ({
  // Fake function that returns 25
  add: jest.fn(() => 25),
}))

// Integration Test
// Tests that work together
test('total cost', () => {
  expect(total(5, 20)).toBe('$25')
  expect(add).toHaveBeenCalledTimes(1)

  // Redundant
  add.mockImplementation(() => 30)
  expect(total(5, 25)).toBe('$30')
  expect(add).toHaveBeenCalledTimes(2)
})
