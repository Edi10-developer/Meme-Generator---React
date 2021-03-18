import React, { Component } from 'react'

class MemeGenerator extends Component {
    constructor() {
        super();
        this.state = {
            topText: '',
            bottomText: '',
            randomImage: 'http://i.imgflip.com/1bij.jpg',
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount() {
        // Meme API
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const { memes } = response.data
                console.log(memes[0]);
                this.setState({
                    allMemeImgs: memes
                })
            })


    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit() {

    }

    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="topText"
                        placeholder="Top text"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="bottomText"
                        placeholder="Bottom text"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />

                    <button>Generate</button>
                </form>
                <div>
                    <h2>{this.state.topText}</h2>
                    <img src={this.state.randomImage} />
                    <h3>{this.state.bottomText}</h3>
                </div>
            </div>
        )
    }
}

export default MemeGenerator;