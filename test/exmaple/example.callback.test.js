
const isCallBacks = require('../../example/example');

test('CallBack', (done) => {
    function isCallBack(cb) {
        try {
            expect(cb).toBe('callback');
            done()
        } catch (e) {
            done(e)
        }
    }
    isCallBacks.isCallBack(isCallBack)
})

test('Promise result is must have value', () => {
    return isCallBacks.isCallBackPromise()
        .then((result)=> expect(result).toBe('promise'))
})

test('Promise resolve', () => {
    return expect(isCallBacks.isCallBackPromise()).resolves.toBe('resolve')
})

test('Promise reject', () => {
    return expect(isCallBacks.isCallBackPromise()).rejects.toMatch('error')
})