import React from 'react'
import {render} from 'react-dom'

import './main.css'

const Home = () => (
    <div>
        <h1>Titulo (desde React)</h1>
        <p>Primer proyecto hecho con React y Parcel</p>
    </div>
)
render(
    <Home />,
    document.getElementById('app')
)