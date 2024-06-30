import HttpStatus from 'src/enum/HttpStatus'

describe('HttpStatus', () => {
  it('should have correct status codes', () => {
    expect(HttpStatus.code.OK).toBe(200)
    expect(HttpStatus.code.CREATED).toBe(201)
    expect(HttpStatus.code.NO_CONTENT).toBe(204)
    expect(HttpStatus.code.BAD_REQUEST).toBe(400)
    expect(HttpStatus.code.UNAUTHORIZED).toBe(401)
    expect(HttpStatus.code.FORBIDDEN).toBe(403)
    expect(HttpStatus.code.NOT_FOUND).toBe(404)
    expect(HttpStatus.code.CONFLICT).toBe(409)
    expect(HttpStatus.code.INTERNAL_SERVER_ERROR).toBe(500)
    expect(HttpStatus.code.BAD_GATEWAY).toBe(502)
    expect(HttpStatus.code.SERVICE_UNAVAILABLE).toBe(503)
    expect(HttpStatus.code.CONNECTION_TIMED_OUT).toBe(522)
  })

  it('should have correct status messages', () => {
    expect(HttpStatus.message[200]).toBe('OK')
    expect(HttpStatus.message[201]).toBe('Created')
    expect(HttpStatus.message[204]).toBe('No Content')
    expect(HttpStatus.message[400]).toBe('Bad Request')
    expect(HttpStatus.message[401]).toBe('Unauthorized')
    expect(HttpStatus.message[403]).toBe('Forbidden')
    expect(HttpStatus.message[404]).toBe('Not Found')
    expect(HttpStatus.message[409]).toBe('Conflict')
    expect(HttpStatus.message[500]).toBe('Internal Server Error')
    expect(HttpStatus.message[502]).toBe('Bad Gateway')
    expect(HttpStatus.message[503]).toBe('Service Unavailable')
    expect(HttpStatus.message[522]).toBe('Connection Timed Out')
  })

  it('should have the correct length', () => {
    expect(Object.keys(HttpStatus.code).length).toBe(12)
    expect(Object.keys(HttpStatus.message).length).toBe(12)
  })

  it('code should have the correct keys', () => {
    const expected = [
      'OK',
      'CREATED',
      'NO_CONTENT',
      'BAD_REQUEST',
      'UNAUTHORIZED',
      'FORBIDDEN',
      'NOT_FOUND',
      'CONFLICT',
      'INTERNAL_SERVER_ERROR',
      'BAD_GATEWAY',
      'SERVICE_UNAVAILABLE',
      'CONNECTION_TIMED_OUT'
    ]

    expect(Object.keys(HttpStatus.code)).toEqual(expected)
  })

  it('message should have the correct keys', () => {
    const expected = [
      '200',
      '201',
      '204',
      '400',
      '401',
      '403',
      '404',
      '409',
      '500',
      '502',
      '503',
      '522'
    ]

    expect(Object.keys(HttpStatus.message)).toEqual(expected)
  })

  it('code should have the correct values', () => {
    const expected = [
      200,
      201,
      204,
      400,
      401,
      403,
      404,
      409,
      500,
      502,
      503,
      522
    ]

    expect(Object.values(HttpStatus.code)).toEqual(expected)
  })

  it('message should have the correct values', () => {
    const expected = [
      'OK',
      'Created',
      'No Content',
      'Bad Request',
      'Unauthorized',
      'Forbidden',
      'Not Found',
      'Conflict',
      'Internal Server Error',
      'Bad Gateway',
      'Service Unavailable',
      'Connection Timed Out'
    ]

    expect(Object.values(HttpStatus.message)).toEqual(expected)
  })
})
