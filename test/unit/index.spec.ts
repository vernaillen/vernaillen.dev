// @vitest-environment node
import { expect, test } from 'vitest'

test('window is undefined', () => {
  expect(typeof window).toBe('undefined')
})
