import MongoDBError from 'src/enum/MongoDbError'

describe('MongoDbError', () => {
  it('should have correct keys', () => {
    const expected = [
      'DUPLICATE_KEY',
      'INTERNAL_ERROR'
    ]

    expect(Object.keys(MongoDBError.code)).toEqual(expected)
  })

  it('should have correct values', () => {
    const expected = [
      11000,
      1
    ]

    expect(Object.values(MongoDBError.code)).toEqual(expected)
  })

  it('should have correct keys and values', () => {
    const expected = {
      DUPLICATE_KEY: 11000,
      INTERNAL_ERROR: 1
    }

    expect(MongoDBError.code).toEqual(expected)
  })
})
