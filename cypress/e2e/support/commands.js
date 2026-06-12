import _ from 'lodash'
import util from './util'

it('uses modules', () => {
  expect(_.kebabCase('FooBar')).to.equal('foo-bar')
  expect(util.secretCode()).to.equal('1-2-3-4')
})