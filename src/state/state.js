import React from 'react'

class MyState extends React.Component {

    constructor() {
        super();
        this.state = {
            visibility: false,

        }
        this.mercuryClick = this.mercuryClick.bind(this)
    }

    mercuryClick() {
        this.setState(state => ({
            visibility: !state.visibility
        }))
    }

    render() {
        {
            if (this.state.visibility) {
                return (
                    <>
                        <h1>Сегодня будет дождь!</h1>
                        <div>true</div>
                        <button onClick={this.mercuryClick} style={{display: 'flex', justifyContent: 'center'}}>Меркурий
                            вращается
                        </button>
                    </>
                )
            } else {
                return (
                    <>
                        <h1>Сегодня будет солнце!</h1>
                        <div>false</div>
                        <button onClick={this.mercuryClick} style={{display: 'flex', justifyContent: 'center'}}>Меркурий
                            вращается
                        </button>
                    </>
                )
            }
            {
                if (this.state.visibility) {
                    return (
                        <>
                            <h1>Сегодня будет дождь!</h1>
                            <div>true</div>
                            <button onClick={this.mercuryClick}
                                    style={{display: 'flex', justifyContent: 'center'}}>Меркурий вращается
                            </button>
                        </>
                    )
                } else {
                    return (
                        <>
                            <h1>Сегодня будет солнце!</h1>
                            <div>false</div>
                            <button onClick={this.mercuryClick}
                                    style={{display: 'flex', justifyContent: 'center'}}>Меркурий вращается
                            </button>
                        </>
                    )
                }
            }


        }
    }
}

export default MyState;
