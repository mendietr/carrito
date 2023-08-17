import { Component } from 'react'

const styles = {
    bubbleAlert: {
        backgroundColor: '#E9725A',
        borderRadius: '15px',
        color: '#fff',
        padding: '2px 10px',
        fronSize: '0.9rem',
        width: '20px',
    }
}

class BubbleAlert extends Component {
    getNumber() {
        if (!n) { return ' '}
        return n >9 ? '9+' : n
    }
    render() {
        const { value } = this.props
        return (
            <span>
                {this.getNumber()}
            </span>
        )
    }
}

export default BubbleAlert