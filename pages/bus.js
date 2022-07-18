import React from 'react';
import NavBar from '../components/NavBar';
import SideAdvertising from '../components/SideAdvertising';

function test() {
    return (
        <>
            <div className={`sideAdRight`}>
                <SideAdvertising side={'right'} />
            </div>
            <div className={`sideAdLeft`}>
                <SideAdvertising side={'left'} />
            </div>
        </>
    )
}

export default test