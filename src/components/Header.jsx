import React, { Component } from 'react'

import '../assets/css/Header.css'

export default class Header extends Component {
    render() {
        //TODO: Add logo? <img src="./src/assets/img/cdll_logo-ar.png" alt=""/>
        return (
            <header>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="shortcut icon" href="#" />

                    <ul>
                        <li><a className="menu-item" href="http://www.cahiersdelaliberte.org">Cahiers de la Liberté</a></li>
                        <li><a className="menu-item" href='https://www.openfisca.tn'>OpenFisca Tunisia</a></li>
                    </ul>
            </header>
        )
    }
}
