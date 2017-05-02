import React, {Component} from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';

export class GameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Frogger',
            cover: 'https://placekitten.com/g/350/438',
            errors: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {

        if(!!this.state.errors[e.target.name]) {
            let errors = Object.assign({}, this.state.errors);
            delete errors[e.target.name];
            this.setState({
                [e.target.name]: e.target.value,
                errors
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value
            });
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(this);
        let errors = {};
        if(this.state.title === '') errors.title = 'Title can not be empty';
        if(this.state.cover === '') errors.cover = 'Cover can not be empty';
        this.setState({errors});

    }
    render() {
        return (
            <form className="ui form" onSubmit={this.handleSubmit}>
                <h1>Add New Game</h1>
                <div className={classnames('field', {error: !!this.state.errors.title})}>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}/>
                    <span>{this.state.errors.title}</span>
                </div>
                <div className={classnames('field', {error: !!this.state.errors.cover})}>
                    <label htmlFor="cover">Cover URL</label>
                    <input
                        id="cover"
                        name="cover"
                        value={this.state.cover}
                        type="text"
                        title="cover"
                        onChange={this.handleChange}/>
                    <span>{this.state.errors.cover}</span>
                </div>
                <div className="field">
                    {this.state.cover !== '' && <img src={this.state.cover} alt="cover" className="ui small bordered image"/>}
                </div>
                <div className="field">
                    <button className="ui primary button">Save</button>
                </div>
            </form>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        newGame: state.newGame
    }
}
export default GameForm;
