import React from "react";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./view.css";

const View = () =>{
    return(
        <div className="main-card">
        <Carousel autoPlay={true} width={650} infiniteLoop={true} dynamicHeight={true}>
                <div>
                    <img alt="img1" src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg" />
                    <p className="legend">Image 1</p>
                </div>
                <div>
                    <img alt="img2" src="https://thumbs.dreamstime.com/b/autumn-fall-nature-scene-autumnal-park-beautiful-77869343.jpg" />
                    <p className="legend">Image 2</p>
                </div>
                <div>
                    <img alt="img3" src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg" />
                    <p className="legend">Image 3</p>
                </div>
                <div>
                    <img alt="img4" src="https://thumbs.dreamstime.com/b/landscape-nature-mountan-alps-rainbow-76824355.jpg" />
                    <p className="legend">Image 4</p>
                </div>
                <div>
                    <img alt="img5" src="https://assets.hongkiat.com/uploads/nature-photography/autumn-poolside.jpg" />
                    <p className="legend">Image 5</p>
                </div>
                <div>
                    <img alt="img6" src="https://m.media-amazon.com/images/I/8192Yt4zAfL._SL1500_.jpg" />
                    <p className="legend">Image 6</p>
                </div>
            </Carousel>
        </div>
    )
}

export default View;