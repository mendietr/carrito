import { Component } from 'react'
import Logo from './Logo.js'
import Carro from './Carro.js'

const styles = {
    navbar: {
        display: 'flex',
        flexFirection: 'row',
        alignItems: 'center',
        height: '100px',
        justifyContent: 'space-between',
        position: 'relative',
        padding: '0 50px',
        boxShadow: '0 2px 3px rgb(0,0,0,0.1)'
    }
}

class Navbar extends Component {
    render () {
        return (
            <nav style={styles.navbar}>
                <Logo />
                <Carro />
            </nav>
        )
    }
}

export default Navbar