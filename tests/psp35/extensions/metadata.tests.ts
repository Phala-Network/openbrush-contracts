import { bnArg, expect, setupContract } from '../../helpers'

describe('MY_PSP35_METADATA', () => {
    async function setup() {
        return setupContract('my_psp35_metadata', 'new', 'https://www.supercolony.net/')
    }

    it('Metadata works', async () => {
        const { query } = await setup()

        await expect(query.uri(bnArg(0))).to.have.output('https://www.supercolony.net/')
    })

})