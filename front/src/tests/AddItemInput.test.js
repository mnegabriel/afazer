import React from 'react'
import { shallow, configure } from 'enzyme'
import AddItemInput from '../components/AddItemInput'
import Adapter from 'enzyme-adapter-react-16';
import { Simulate } from 'react-dom/test-utils';

configure({ adapter: new Adapter() });


describe('Configuration of the AddItemInput component', () => {
  let wrapper
  beforeEach( () => {
    wrapper = shallow(<AddItemInput/>)
  })

  it('should render input text box', () => {
    let type = wrapper.find('input').prop('type')
    expect(type).toBe('text')
  })

  it('should render a button named "Add Item"', () => {
    let addBtnText = wrapper.find('#add-btn').text()
    expect(addBtnText).toBe('Add Item')
  })

  it('should render a button named "Remove Checked"', () => {
    let rmvCheckedBtnText = wrapper.find('#rmv-checked-btn').text()
    expect(rmvCheckedBtnText).toBe('Remove Checked')
  })

  it('should empty the input box when "Add Item" button is pressed', () => {
    let inputBox = wrapper.find('input')
    let addBtn = wrapper.find('#add-btn')
    inputBox.simulate('change', {target : { value: 'oi'}})
    console.log(inputBox.debug())
    addBtn.simulate('click')
    expect(inputBox.prop('value')).toBe('')

  })

})
