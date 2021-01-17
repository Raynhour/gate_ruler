import ErrorHandler from '@/data/api/errorHandler'
import instance from '@/data/api/initApi'
import AuthService from '@/data/services/auth.service'
import LoginValidate from '@/domain/entities/validation/loginValidate'
import { handleError } from 'vue'

describe('LoginValidate', () => {
  describe('When username less than 3 chars', () => {
    it('Then i expect username not valid', async () => {
      const mock = {
        login: jest.fn()
      }
      let validate = new LoginValidate(mock)

      await expect(
        validate.login({
          username: 'An',
          password: ''
        })
      ).rejects.toMatchObject({
        error: {
          message: {
            invalid_fields: {
              username: expect.any(String)
            }
          }
        }
      })
    })
  })

  describe('When username moree than 3 chars', () => {
    it('Then i expect username valid', async () => {
      const mock = {
        login: jest.fn()
      }
      let validate = new LoginValidate(mock)

      validate.login({
        username: 'Andrew',
        password: ''
      })
      expect(mock.login).toBeCalled()
    })
  })
})
