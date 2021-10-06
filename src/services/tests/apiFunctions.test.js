/*import { authLogin, authSignin } from "../auth";

const userData = {
  email:'salao@gmail.com',
  password: '123456',
}

const response = {
  status:'Erro'
}

const event = Object.assign(jest.fn(), {preventDefault: () => {}})

jest.mock('../auth')

describe('authLogin', () => {
  beforeEach(() => {
    jest.clearAllMocks();
});

  it('authLogin should be a function', () => {
    expect(typeof authLogin).toBe('function')
  })

  it('authLogin should have one assertion', async () => {
    authLogin.mockResolvedValueOnce(event, {userData})

    await expect(authLogin(event, {userData})).resolves.toEqual(Promise)
    expect.assertions(1); 
  })


})








describe('authSignin', () => {
  it('authSignIn should be a function', () => {
    expect(typeof authSignin).toBe('function')
  })


})
*/