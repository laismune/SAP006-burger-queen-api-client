import { getErrorCase, orderAge, orderProcessAge, timeToProcess, orderCurrentAge } from "./general";

describe('getErrorCase', () => {
  it('getErrorCase should be a function', () => {
    expect(typeof getErrorCase).toBe('function')
  })

  it('when data=400, the error returned should be "Informações insuficientes"', () => {
    const result = getErrorCase(400)
    expect(result).toBe('Informações insuficientes!')
  })

  it('when data=401, the error returned should be "Usuário não autenticado!"', () => {
    const result = getErrorCase(401)
    expect(result).toBe('Usuário não autenticado!')
  })

  it('when data=403, the error returned should be "Este pedido não pertence ao BERG!"', () => {
    const result = getErrorCase(403)
    expect(result).toBe('Este pedido não pertence ao BERG!')
  })

  it('when data=404, the error returned should be "Pedido não encontrado!"', () => {
    const result = getErrorCase(404)
    expect(result).toBe('Pedido não encontrado!')
  })

  it('when data=405, the error returned should be "Desculpe-nos, mas um erro ocorreu."', () => {
    const result = getErrorCase(405)
    expect(result).toBe('Desculpe-nos, mas um erro ocorreu.')
  })
})

describe('orderAge', () => {
  it('orderAge should be a function', () => {
    expect(typeof orderAge).toBe('function')
  })

  it('when time in seconds = 59, the result should be "agora há pouco"', () => {
    const result = orderAge(59)
    expect(result).toBe('agora há pouco')
  })

  it('when time in seconds = 120, the result should be "há 2 min."', () => {
    const result = orderAge(120)
    expect(result).toBe('há 2 min.')
  })

  it('when time in seconds = 80000, the result should be "há 22 h."', () => {
    const result = orderAge(80000)
    expect(result).toBe('há 22 h.')
  })

  it('when time in seconds = 320000, the result should be "há 4 d."', () => {
    const result = orderAge(320000)
    expect(result).toBe('há 4 d.')
  })

  it('when time in seconds = 2000000, the result should be "há 3 sem."', () => {
    const result = orderAge(2000000)
    expect(result).toBe('há 3 sem.')
  })

  it('when time in seconds = 28000000, the result should be "há 11 m."', () => {
    const result = orderAge(28000000)
    expect(result).toBe('há 11 m.')
  })

  it('when time in seconds = 36000000, the result should be "há 1 a."', () => {
    const result = orderAge(36000000)
    expect(result).toBe('há 1 a.')
  })
  
})


describe('orderProcessAge', () => {
  it('orderProcessAge should be a function', () => {
    expect(typeof orderProcessAge).toBe('function')
  })

  it('when time in seconds = 59, the result should be "seg."', () => {
    const result = orderProcessAge(59)
    expect(result).toBe('59 seg.')
  })

  it('when time in seconds = 120, the result should be "2 min."', () => {
    const result = orderProcessAge(120)
    expect(result).toBe('2 min.')
  })

  it('when time in seconds = 80000, the result should be "22 h."', () => {
    const result = orderProcessAge(80000)
    expect(result).toBe('22 h.')
  })

  it('when time in seconds = 320000, the result should be "4 d."', () => {
    const result = orderProcessAge(320000)
    expect(result).toBe('4 d.')
  })

  it('when time in seconds = 2000000, the result should be "3 sem."', () => {
    const result = orderProcessAge(2000000)
    expect(result).toBe('3 sem.')
  })

  it('when time in seconds = 28000000, the result should be "11 m."', () => {
    const result = orderProcessAge(28000000)
    expect(result).toBe('11 m.')
  })

  it('when time in seconds = 36000000, the result should be "1 a."', () => {
    const result = orderProcessAge(36000000)
    expect(result).toBe('1 a.')
  })
})

describe('timeToProcess', () => {
  it('timeToProcess should be a function', () => {
    expect(typeof timeToProcess).toBe('function')
  })
})

describe('orderCurrentAge', () => {
  it('orderCurrentAge should be a function', () => {
    expect(typeof orderCurrentAge).toBe('function')
  })
})