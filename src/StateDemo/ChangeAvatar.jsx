import React, { Component } from 'react';

export default class ChangeAvatar extends Component {

    state = {
        person: {
            age: 18,
            img: 'https://i.pravatar.cc?u=18'
        }
    }

    render() {
        return (
            <div className='container'>
                <h3>Change Avatar</h3>
                <div className="w-25">
                    <div className="card">
                        <img src={this.state.person.img} alt="..." />
                        <div className="card-body">
                            <h4>Age: {this.state.person.age}</h4>
                            <button className='btn btn-success' onClick={() => {
                                let numRandom = Math.floor(Math.random() * 80 + 18);
                                let newPerson = {
                                    img: `https://i.pravatar.cc?u=${numRandom}`,
                                    age: numRandom
                                }
                                this.setState({
                                    person: newPerson
                                })
                            }}>Random</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
