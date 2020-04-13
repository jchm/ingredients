import { shallowMount } from '@vue/test-utils'

describe('ListIngrident', () => {

  it('bla', () => {
    const amount = 1200
    const measurement = 'gr'
    const ingriedent = 'Test'

    const wrapper = shallowMount(ListIngriedent, {
      propsData: { amount, measurement, ingriedent }
    })
    expect(wrapper.text()).toMatch(`1.2kg test`)
  })

})
