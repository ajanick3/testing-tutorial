import { add } from './add'

test('add', () => {
  expect(add(1, 2)).toBe(3)
  expect(add(1, 3)).toBe(4)
  expect(add(2, 2)).toBe(4)
})
