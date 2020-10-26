import App from './app'
import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json';


describe('App',()=>{
	test('should match snapshot',()=>{
		const wrapper = shallow (<App />)

		expect(wrapper.find('div').text()).toBe("Welcome to React Boilerplate App")
		expect(wrapper).toMatchSnapshot()
	})
})
