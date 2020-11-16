import React, {Component} from 'react';
import Card from './Card';
import '../css/navbar.css';
import axios from 'axios';

class Grid extends Component{

    state = {
        rows : null
    }

    componentDidMount(){

        axios.get("https://api.rawg.io/api/games?dates=2020-09-01,2020-09-30").then((response) => {
            console.log(response.data.results);
            var numCards = response.data.results.length;
            var numColumns = 3;
            var numRows = Math.ceil(numCards/ numColumns);
            var rows = [];
            var cols = [];
            for (var i = 0; i < numRows; i++) {
                cols = [];
                for (var j = 0; j < numColumns; j++){
                    var cardIndex = (i*numColumns + j+1);
                    if(cardIndex <= numCards){
                        var cardInfo = {
                            name: response.data.results[cardIndex-1].name,
                            backgroundImage : response.data.results[cardIndex-1].background_image,
                            cardIndex: cardIndex,
                            released: response.data.results[cardIndex-1].released,
                        }
                        cols.push(<a href="#" className="cardlink"><Card cardInfo={cardInfo} cardIndex={cardIndex}/></a>);
                    }
                    else{
                        cols.push(null);
                    }
                }
                rows.push(<div className="row">{cols}</div>)
            }
            this.setState({
                rows: rows
            });
          });
    }

    render() {
        return (
            <div className="grid">
                {this.state.rows}
            </div>
        )
    }
}

export default Grid;