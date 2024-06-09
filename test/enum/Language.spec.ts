import { Language } from 'src/enum/Language'

describe('Language', () => {
  it('should have the correct keys', () => {
    const expected = [
      'PT_BR',
      'EN',
      'ES',
      'DE'
    ]

    expect(Object.keys(Language)).toEqual(expected)
  })

  it('should have the correct values', () => {
    const expected = [
      'pt_br',
      'en',
      'es',
      'de'
    ]

    expect(Object.values(Language)).toEqual(expected)
  })

  it('should have the correct length', () => {
    expect(Object.keys(Language).length).toBe(4)
  })

  it('should have the correct values and keys', () => {
    const expected = {
      PT_BR: 'pt_br',
      EN: 'en',
      ES: 'es',
      DE: 'de'
    }

    expect(Language).toEqual(expected)
  })
})
