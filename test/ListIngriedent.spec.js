import { shallowMount } from '@vue/test-utils'
import ListIngriedent from '../components/ListIngriedent.vue'

describe('ListIngrident', () => {
  it('props recipe based on props', () => {
    const amount = 0.5
    const measurement = 'gr'
    const ingriedent = 'Test'

    const wrapper = shallowMount(ListIngriedent, {
      propsData: { amount, measurement, ingriedent }
    })
    expect(wrapper.text()).toMatch(`0.5 gr test`)
  })

  it('Show kg when ammount is exactly 1000 grams', () => {
    const amount = 1000
    const measurement = 'gr'
    const ingriedent = 'Test'

    const wrapper = shallowMount(ListIngriedent, {
      propsData: { amount, measurement, ingriedent }
    })
    expect(wrapper.text()).toMatch(`1kg test`)
  })

  it('Show kg when ammount is more than 1000 grams', () => {
    const amount = 1200
    const measurement = 'gr'
    const ingriedent = 'Test'

    const wrapper = shallowMount(ListIngriedent, {
      propsData: { amount, measurement, ingriedent }
    })
    expect(wrapper.text()).toMatch(`1.2kg test`)
  })

  it('Show L when ammount is exactly 1000 ML', () => {
    const amount = 1000
    const measurement = 'ml'
    const ingriedent = 'Test'

    const wrapper = shallowMount(ListIngriedent, {
      propsData: { amount, measurement, ingriedent }
    })

    expect(wrapper.text()).toMatch(`1l test`)
  })

  it('Show L when ammount is more than 1000 ML', () => {
    const amount = 1200
    const measurement = 'ml'
    const ingriedent = 'Test'

    const wrapper = shallowMount(ListIngriedent, {
      propsData: { amount, measurement, ingriedent }
    })
    expect(wrapper.text()).toMatch(`1.2l test`)
  })

  it('Show recipe without measurement and amount', () => {
    const ingriedent = 'Test'

    const wrapper = shallowMount(ListIngriedent, {
      propsData: { ingriedent }
    })
    expect(wrapper.text()).toMatch(`test`)
  })
})
