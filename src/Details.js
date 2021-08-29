import React from 'react';

export class Details extends React.Component {
    render() {
        return <p>I have a laptop with {this.props.ram} RAM, {this.props.hdd} Hard drive, core {this.props.processor} processor, the GC is {this.props.gc}</p>
    }
}