import assert from 'assert'
import ApiRequest from '../lib/ApiRequest'

describe('ApiRequest', () => {
  it('will only ever accept json', () => {
    const { headers } = new ApiRequest('GET', '/').toJSON();
    assert.equal(headers.accept, 'application/json');
  })

  it('will authorize in auth() using a token', () => {
    const { headers } = new ApiRequest('GET', '/')
      .auth('token')
      .toJSON();
    assert.equal(headers.authorization, 'Bearer token');
  })

  it('will authorize in auth() using a basic auth object', () => {
    const user = 'user';
    const pass = 'pass';
    const authHeader = new Buffer(`${user}:${pass}`).toString('base64');
    const { headers } = new ApiRequest('GET', '/')
      .auth({ user, pass })
      .toJSON();
    assert.equal(headers.authorization, `Basic ${authHeader}`)
  })

  it('will translate match() key/values to filter', () => {
    const { qs } = new ApiRequest('GET', '/').match({ key1: 'value1', key2: 'value2' })
    assert.deepEqual(qs, { key1: 'eq.value1', key2: 'eq.value2' })
  })

  it('won‘t assign to the passed match() filter', () => {
    const match = { key1: 'value1', key2: 'value2' }
    const { qs } = new ApiRequest('GET', '/').match(match)
    assert.deepEqual(qs, { key1: 'eq.value1', key2: 'eq.value2' })
    assert.deepEqual(match, { key1: 'value1', key2: 'value2' })
  })

  it('will return a promise from end()', () => {
    const request = new ApiRequest('GET', '/')
    assert(request.end() instanceof Promise)
  })

  it('can be resolved', done => {
    const request = new ApiRequest('GET', '/')
    Promise.resolve(request).catch(() => done())
  })

  it('can be used in an async/await context', async () => {
    try {
      await new ApiRequest('GET', '/')
      throw new Error('Another error should be thrown')
    }
    catch (error) {
      if (error.code !== 'ECONNREFUSED') {
        throw error
      }
    }
  })
})
