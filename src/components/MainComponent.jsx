import React from 'react'
import Services from './Services'
import HowWeWork from './HowWeWork'
import Checkmark from './Checkmark'
import Pricing from './Pricing'

export default function MainComponent() {
    return (
        <div className="main_container">
            <Services />
            <HowWeWork />
            <Checkmark />
            <Pricing />
        </div>
    )
}
