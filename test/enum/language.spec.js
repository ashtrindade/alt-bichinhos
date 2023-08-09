const language = require('../../src/enum/language')
const { describe, it, expect } = require('@jest/globals')

describe.only('Enum :: Language', () => {
  describe('When the enum is called', () => {

    it('Then it should return a valid object', () => {
      expect(language).toEqual({
        EN: 'en',
        PT: 'pt',
        ES: 'es',
        DE: 'de'
      })
    })
  })
})