import React from 'react'
import { mount, configure, shallow } from 'enzyme'
import { expect } from 'chai'
import RamdaMapComponent from './RamdaMapComponent'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const Bear = [
    { code: '242-101', subject: 'INTRO TO COMP PROGRAM' },
    { code: '242-360', subject: 'MODEL&ANALYSIS FOR NETWORK' },
    { code: '322-101', subject: 'BASIC MATHEMATICS I' },
    { code: '640-101', subject: 'HEALTHY BODY AND MIND' },
    { code: '999-101', subject: 'JAVASCRIPT FRAMEWORK' },
]

const myFevouriteCar = {
    vihecal: { car: { lambogini: 'Aventador' } }
}
describe('RamdaMapComponent', () => {
    it('test <RamdaMapComponent/> R.map', () => {

        const wrapper = mount(<RamdaMapComponent Bear={Bear} />)
        expect(wrapper.find('p')).to.have.lengthOf(5)
    })
    it('test <RamdaMapComponent/> R.map', () => {
        const wrapper = shallow(<RamdaMapComponent myFevouriteCar={myFevouriteCar} />)
        expect(wrapper.contains(<h1 className="text path">Aventador</h1>)).to.equal(true);
    })
    it('test <RamdaMapComponent/> R.compose', () => {
        const wrapper = shallow(<RamdaMapComponent />)
        expect(wrapper.contains(<h1 className="text">THE NAME'S DO, JOHN DO</h1>)).to.equal(true);
    })

})