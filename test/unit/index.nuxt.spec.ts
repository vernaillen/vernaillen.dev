// @vitest-environment nuxt
import { expect, test } from 'vitest'

test('window is object', () => {
  expect(typeof window).toBe('object')
})
