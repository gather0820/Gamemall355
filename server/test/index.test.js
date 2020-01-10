const expect = require('chai').expect
import { parseTime, formatTime, param2Obj, isEmpty } from './../utils/util'

describe('Util Function Test', function() {
  describe('parseTime() to be null', function() {
    it('should return object when the value is not present', function() {
      expect(parseTime()).to.be.an('null')
    })
  })

  describe('parseTime() to be Time format', function() {
    it('should return 2020-01-10 10:55:19 when the value is 1578624919302', function() {
      expect(parseTime(1578624919302)).to.be.equal('2020-01-10 10:55:19')
    })
  })

  describe('formatTime() to be string', function() {
    it('should return object when the value is not present', function() {
      expect(formatTime()).to.be.an('string')
    })
  })

  describe('param2Obj() to be url format', function() {
    it('should return "{}" when the value is "http://electronjs.org/docs/tutorial/first-app"', function() {
      expect(param2Obj('http://electronjs.org/docs/tutorial/first-app')).to.be.an('object')
    })
  })

  describe('param2Obj() to be url format query', function() {
    it('should return "{ type: 1 }" when the value is "http://electronjs.org/docs/tutorial/first-app?type=1"', function() {
      expect(param2Obj('http://electronjs.org/docs/tutorial/first-app?type=1')).to.be.an('object')
    })
  })

  describe('isEmpty() is return undefined', function() {
    it('should return undefined when the value is void 0', function() {
      expect(isEmpty(void 0))
        .to.be.an('boolean')
        .to.be.equal(true)
    })
  })

   describe('isEmpty() is return null', function() {
     it('should return string when the value is ”“', function() {
       expect(isEmpty(''))
         .to.be.an('boolean')
         .to.be.equal(true)
     })
   })

  describe('isEmpty() is return string', function() {
    it('should return string when the value is 123', function() {
      expect(isEmpty('123'))
        .to.be.an('boolean')
        .to.be.equal(false)
    })
  })

  describe('isEmpty() is return boolean', function() {
    it('should return boolean when the value is 123', function() {
      expect(isEmpty(1))
        .to.be.an('boolean')
        .to.be.equal(false)
    })
  })

  describe('isEmpty() is return object', function() {
    it('should return object when the value is {a:1}', function() {
      expect(isEmpty({ a: 1 }))
        .to.be.an('boolean')
        .to.be.equal(false)
    })
  })
})
