import React from 'react'
import LinkWave from '../src/index'
import { configure, mount } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

// ? hex color will be auto transform to the rgb
// ? i need to solve it

describe('test color', () => {
    it('get the default color', () => {
        const wrapper = mount(<LinkWave />)
        const res = `<a href="" style="color: rgb(0, 0, 238);"></a>`
        expect(wrapper.html()).to.equal(res)
        wrapper.unmount()
    })
    it('with color prop', () => {
        const wrapper = mount(<LinkWave color="#000000" />)
        expect(wrapper.html()).to.equal('<a href="" style="color: rgb(0, 0, 0);"></a>')
        wrapper.unmount()
    })
    it('with style prop', () => {
        const wrapper = mount(<LinkWave style={{color: '#000000', fontSize: 12}} />)
        expect(wrapper.html()).to.equal('<a href="" style="color: rgb(0, 0, 0); font-size: 12px;"></a>')
        wrapper.unmount()
    })
    it('with color && style prop, the style should be available', () => {
        const wrapper = mount(<LinkWave color="#666666" style={{color: '#000000', fontSize: 12}} />)
        expect(wrapper.html()).to.equal('<a href="" style="color: rgb(0, 0, 0); font-size: 12px;"></a>')
        wrapper.unmount()
    })
})