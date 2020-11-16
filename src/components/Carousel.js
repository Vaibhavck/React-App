import React, {Component} from 'react';
import M from 'materialize-css';

class Carousel extends Component{
    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.carousel');
            var instances = M.Carousel.init(elems,{fullWidth:true});
          });
    }
    render(){
        return(
            <div className="carousel carousel-slider">
                <a className="carousel-item" href="#one!"><img alt="" src="../images/Picture1.jpg"/></a>
                <a className="carousel-item" href="#two!"><img alt="" src="../images/Picture1.jpg"/></a>
                <a className="carousel-item" href="#three!"><img alt="" src="../images/Picture1.jpg"/></a>
                <a className="carousel-item" href="#four!"><img alt="" src="../images/Picture1.jpg"/></a>
            </div>
        )
    }
}


export default Carousel;