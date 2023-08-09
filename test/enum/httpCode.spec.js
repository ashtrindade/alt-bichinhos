const httpCode = require('../../src/enum/httpCode')
const { describe, it, expect } = require('@jest/globals')

describe.only('Enum :: HtpCode', () => {
  describe('When the enum is called', () => {

    it('Then it should return a valid object', () => {
      expect(httpCode).toEqual({
        SUCCESS: 200,
        BAD_REQUEST: 400,
        NOT_FOUND: 404,
        SERVER_ERROR: 500
      })
    })
  })
})