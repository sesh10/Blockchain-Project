const cryptoHash = require('./crypto-hash');

describe ('cryptoHash()', () => {
    
    it('generates a sha256 hashed output', () => {
        expect(cryptoHash('data')).toEqual('519b3ed503c6a825347f28dfd269c0a422e3b923858410e3abbab2d2a99837f2');
    });

    it('produces the same hash irrespective of input order', () => {
        expect(cryptoHash('one', 'two', 'three')).toEqual(cryptoHash('three', 'one', 'two'));
    });

    it('produces a unique hash when properties have changed on an input', () => {
        const foo = {};
        const originalHash = cryptoHash(foo);
        foo['a'] = 'a';

        expect(cryptoHash(foo)).not.toEqual(originalHash);
    })
}); 