import SensorTable from '../../src/components/common/SensorTable.vue'
import { mount } from 'cypress/vue'

const TABLE_SELECTOR = 'table'
const props = { data: [] }
describe('Sensor Table Component', () => {
    context('Mount', () => {
        it('renders properly with empty data', () => {
            mount(SensorTable, { props: { ...props } })
            cy.get(TABLE_SELECTOR).should('be.visible')
        })

        it('renders properly with data', () => {
            mount(SensorTable, {
                props: {
                    ...props,
                    data: [{ timestamp: '2022-09-01T07:07:19.174Z', value: 1 }],
                },
            })
            cy.get(TABLE_SELECTOR).should('be.visible')
            cy.get(TABLE_SELECTOR).should('contain', '2022 / 09 / 01')
            cy.get(TABLE_SELECTOR).should('contain', '1')
        })
    })
})
