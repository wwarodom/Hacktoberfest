import React from 'react'
import { mount } from 'enzyme'
import RamdaMapComponent from './RamdaMapComponent'

describe('RamdaMapComponent', () => {
    it('test <RamdaMapComponent/>', () => {
        const Bear = [
            { code: '242-101', subject: 'INTRO TO COMP PROGRAM' },
            { code: '242-360', subject: 'MODEL&ANALYSIS FOR NETWORK' },
            { code: '322-101', subject: 'BASIC MATHEMATICS I' },
            { code: '640-101', subject: 'HEALTHY BODY AND MIND' },
            { code: '999-101', subject: 'JAVASCRIPT FRAMEWORK' },
        ]
        const wrapper = mount(<RamdaMapComponent Bear={Bear} />)
        expect(wrapper.find('#count')).children().to.have.lengthOf(Bear.length);
    })
})