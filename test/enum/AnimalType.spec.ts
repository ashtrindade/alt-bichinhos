import { AnimalType } from 'src/enum/AnimalType'

describe('AnimalType', () => {
  it('should have the correct values', () => {
    const expected = [
      'dog',
      'cat',
      'rabbit',
      'bird',
      'fish',
      'reptile',
      'other'
    ]

    expect(Object.values(AnimalType)).toEqual(expected)
  })

  it('should have the correct keys', () => {
    const expected = [
      'DOG',
      'CAT',
      'RABBIT',
      'BIRD',
      'FISH',
      'REPTILE',
      'OTHER'
    ]

    expect(Object.keys(AnimalType)).toEqual(expected)
  })

  it('should have the correct length', () => {
    expect(Object.keys(AnimalType).length).toBe(7)
  })

  it('should have the correct values and keys', () => {
    const expected = {
      DOG: 'dog',
      CAT: 'cat',
      RABBIT: 'rabbit',
      BIRD: 'bird',
      FISH: 'fish',
      REPTILE: 'reptile',
      OTHER: 'other'
    }

    expect(AnimalType).toEqual(expected)
  })
})
