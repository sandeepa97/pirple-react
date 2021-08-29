import React from 'react';
import {Details} from './Details';

export class Clscom extends React.Component {
    state = {
        laptops: [
            {ram: "16GB" , hdd: "2TB", processor: "i7"},
            {ram: "160GB" , hdd: "20TB", processor: "i70"},
            {ram: "1600GB" , hdd: "200TB", processor: "i700"}
        ],
        desktops: [
            {ram: "116GB" , gc: "4GB", hdd: "12TB", processor: "i17"},
            {ram: "1160GB" , gc: "14GB", hdd: "120TB", processor: "i170"},
            {ram: "11600GB" , gc: "114GB", hdd: "1200TB", processor: "i1700"}
        ]
    }
    render () {

        return (
            <div>
                <h2>Hello from class Component</h2>
                <h2>Hello From Other Side!</h2>
                <p>{this.props.classdata}</p>
                <p>{this.props.newcomponent}</p>
                <p>{this.props.children}</p>
                <Details ram = {this.state.desktops[1].ram} gc = {this.state.desktops[0].gc} hdd = {this.state.laptops[1].hdd} processor = {this.state.laptops[0].processor} />
                <Details ram = {this.state.laptops[2].ram} hdd = {this.state.laptops[1].hdd} processor = {this.state.laptops[2].processor} />
            </div>
        )
    }
}
