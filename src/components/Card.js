import React, {Component} from 'react';


class Card extends Component{
    render() {
        return (
            <div className="col s12 m4">
                <div className="card hoverable">
                    <div className="card-image">
                        <img alt="loading..." src={this.props.cardInfo.backgroundImage}/>
                        <span className="card-title">{this.props.cardInfo.name}</span>
                        <a href="#" className="btn-floating halfway-fab blue"><i className="material-icons">favorite</i></a>
                    </div>
                    <div className="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div className="card-action">Released : {this.props.cardInfo.released}</div>
                </div>
            </div>
        )
    }
}


export default Card;