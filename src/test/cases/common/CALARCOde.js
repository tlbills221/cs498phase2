const cnc = require('../../../main/common/CALARCOde')
const { expect } = require('../../chai')

describe('common - CALARCOde', () => {

	describe('Purell', () => {

		it('does nothing to good ints', async () => {
			const result = cnc.Purell("1", 'i')

			expect(result).to.equal(1)
		})
    
    		it('does nothing to good strings', async () => {
			const result = cnc.Purell("yo", 's')

			expect(result).to.equal("yo")
		})

    		it('returns NaN on bad int', async () => {
			const result = cnc.Purell("yo", 'i')

			expect(result).to.equal(NaN)
		})
	})
