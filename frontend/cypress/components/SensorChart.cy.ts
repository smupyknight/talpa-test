import SensorChart from '../../src/components/common/SensorChart.vue'
import { mount } from 'cypress/vue'

const CHART_SELECTOR = 'canvas'
const props = { data: [] }
describe('Sensor Chart Component', () => {
    context('Mount', () => {
        it('renders properly', () => {
            mount(SensorChart, {
                props: {
                    ...props,
                },
            })
            cy.get(CHART_SELECTOR).should('be.visible')
        })

        it('renders properly with data', () => {
            mount(SensorChart, {
                props: {
                    ...props,
                    data: [{ timestamp: '2022-09-01T07:07:19.174Z', value: 1 }],
                },
            })
            cy.get(CHART_SELECTOR).should('be.visible')
        })
    })
})
