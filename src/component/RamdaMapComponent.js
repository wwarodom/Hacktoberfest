import React from 'react'
import * as R from 'ramda'

//Hint Use R.map is a pure function for map array
// https://ramdajs.com/docs/#map

const ChildComponent = ({ code, subject }) => <p className="text" key={code + subject}>Code:{code} Subject:{subject}</p>

const RenderRamda = ({ Bear }) => R.map(ChildComponent, Bear) /*** Fix Here ***/


const RamdaMapComponent = (props) => (
    <div className="container">
        <div id="count">
            <RenderRamda {...props} />
        </div>
        <button>click to Learn R.path</button>
        <button>click to Learn R.path</button>
    </div>
)


export default RamdaMapComponent