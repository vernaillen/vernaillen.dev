import { describe, expect, it } from 'vitest'

describe('test', () => {
  it('works', () => {
    expect(Object.keys(useAppConfig())).toMatchInlineSnapshot(`
      [
        "nuxt",
      ]
    `)
  })
})
