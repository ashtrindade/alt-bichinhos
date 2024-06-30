import { imageSchema, paramsSchema } from 'src/schema/imageSchema'

describe('imageSchema', () => {
  it('should validate a valid image object', () => {
    const validImage = {
      fileUrl: 'https://example.com/image.jpg',
      type: 'dog',
      description: 'A cute dog',
      alt: {
        pt_br: 'Um cachorro fofo',
        en: 'A cute dog',
        es: 'Un perro lindo',
        de: 'Ein süßer Hund'
      }
    }

    const { error } = imageSchema.validate(validImage)
    expect(error).toBeUndefined()
  })

  it('should have the correct error messages with missing properties', () => {
    const invalidImage = {}

    const { error } = imageSchema.validate(invalidImage, { abortEarly: false })
    const messages = error?.details.map((detail) => detail.message)
    const expected = [
      '"fileUrl" is required',
      '"type" is required',
      '"description" is required',
      '"alt" is required'
    ]

    expect(error?.details).toHaveLength(4)
    expect(messages).toEqual(expected)
  })

  it('should have the correct error messages with invalid alt properties', () => {
    const invalidImage = {
      fileUrl: 'https://example.com/image.jpg',
      type: 'dog',
      description: 'A cute dog',
      alt: { }
    }

    const { error } = imageSchema.validate(invalidImage, { abortEarly: false })
    const messages = error?.details.map((detail) => detail.message)
    const expected = [
      '"alt.pt_br" is required',
      '"alt.en" is required',
      '"alt.es" is required',
      '"alt.de" is required'
    ]

    expect(error?.details).toHaveLength(4)
    expect(messages).toEqual(expected)
  })

  it('should have the correct error messages with invalid types', () => {
    const invalidImage = {
      fileUrl: 123,
      type: '123',
      description: 123,
      alt: {
        pt_br: 123,
        en: 123,
        es: 123,
        de: 123
      }
    }

    const { error } = imageSchema.validate(invalidImage, { abortEarly: false })
    const messages = error?.details.map((detail) => detail.message)
    const expected = [
      '"fileUrl" must be a string',
      '"type" must be one of [dog, cat, rabbit, bird, fish, reptile, other]',
      '"description" must be a string',
      '"alt.pt_br" must be a string',
      '"alt.en" must be a string',
      '"alt.es" must be a string',
      '"alt.de" must be a string'
    ]

    expect(error?.details).toHaveLength(7)
    expect(messages).toEqual(expected)
  })
})

describe('paramsSchema', () => {
  it('should validate a valid params object', () => {
    const validParams = {
      id: '55ba6637-e1b1-44c2-a3d3-628c5855c026',
      language: 'pt_br',
      type: 'dog',
      page: 1,
      limit: 10
    }

    const { error } = paramsSchema.validate(validParams)
    expect(error).toBeUndefined()
  })

  it('should have the correct error messages with wrong types', () => {
    const invalidParams = {
      id: 123,
      language: 123,
      type: 123,
      page: 'aaaa',
      limit: 'aaaa'
    }

    const { error } = paramsSchema.validate(invalidParams, { abortEarly: false })
    const messages = error?.details.map((detail) => detail.message)
    const expected = [
      '"id" must be a string',
      '"language" must be one of [pt_br, en, es, de]',
      '"language" must be a string',
      '"type" must be one of [dog, cat, rabbit, bird, fish, reptile, other]',
      '"type" must be a string',
      '"page" must be a number',
      '"limit" must be a number'
    ]

    expect(error?.details).toHaveLength(7)
    expect(messages).toEqual(expected)
  })
})
