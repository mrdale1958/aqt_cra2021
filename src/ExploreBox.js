import React from 'react';
import OpenSeaDragon from 'openseadragon';
//import FactsList from './FactsList.js';

// function loadImage(src) {
//     return new Promise(function(resolve, reject) {
//       var img = document.createElement('img')
//       img.addEventListener('load', function() {
//         resolve(img)
//       })
//       img.addEventListener('error', function(err) {
//         reject(404)
//       })
//       img.src = src;
//     });
// }
     
class ExploreBox extends React.Component{

    // constructor(props) {
    //     super(props)
    // }
    
    render() {
        // let self = this;
        // let { id } = this.props
        return (
            <div className="ocd-div" ref={node => {this.el = node;}}>
                
                <div className="openseadragon" id="openseadragon1"></div>
                <ul className="ocd-toolbar">
                   
                </ul>
            </div>
        )
    }

    // initSeaDragonIIIF(){
    //   // let { id, tileSources } = this.props
    //     //let image = "css/heididesigns/AQT_LA_TouchScreen_bg_v3.png" ;
    //     //loadImage(image).then(data => {
    //     self.viewer = OpenSeaDragon({
    //         id: "openseadragon1", //id + "osd",
    //       //let self = this
    //         showNavigationControl: false,
    //         prefixUrl: "css/openseadragon/images/",
    //         tileSources: [],
    //         visibilityRatio: 1.0,
    //         constrainDuringPan: true,
    //         overlays: [],
    //     });
    //     var vpArea = 872 / 1920; // in vp coordinates
    //     var floorColumnCount = Math.floor(1 / Math.sqrt(vpArea/this.props.blockCount));
    //     var floorRowCount = Math.floor(this.props.blockCount/floorColumnCount);
    //     var rowNum = 0;
    //     for (var imgnum = 0; imgnum < this.props.blockCount; imgnum++ ) {
    //         var str = "" + (1+imgnum);
    //         var pad = "00000"
    //         var imageName = pad.substring(0, pad.length - str.length) + str
    //         var curCol = imgnum % floorColumnCount;
    //         if (imgnum > 0 && curCol === 0) rowNum++;
    //         var ts = '/fcgi-bin/iipsrv.fcgi?DeepZoom=pyramids32/'+imageName+'.tiff.dzi';
    //         console.log('tileSource',imgnum,imageName,ts,floorColumnCount,floorRowCount,curCol, rowNum);
    //         self.viewer.addTiledImage({
    //             tileSource: ts,
    //             x: curCol , /// floorColumnCount,
    //             y: rowNum , /// floorRowCount,
    //             //width: 1 // / floorColumnCount
    //         });
    //     }
    //     self.viewer.viewport.fitHorizontally(true);
    // }

    initSeaDragonDZI(){
        let self = this;

        // let { id, tileSources } = this.props
        // let image = "css/heididesigns/AQT_LA_TouchScreen_bg_v3.png" ;
        //loadImage(image).then(data => {
            self.viewer = OpenSeaDragon({
                id: "openseadragon1", //id + "osd",
                showNavigationControl: false,
                prefixUrl: "css/seadragon_images/",
                tileSources:  this.props.tileSources,
                visibilityRatio: 1.0,
                constrainDuringPan: true,
                overlays: [
                /*{
                    id: 'overlay2890',
                    x: 0.039, 
                    y: 0.2185, 
                    lastx: 0.039452, 
                    lasty: 0.218675, 
                    width: 0.0081, 
                    height: 0.0081,
                    className: 'highlight'
                },
                {
                    id: 'overlay4174',
                    x: 0.414, 
                    y: 0.3125, 
                    lastx: 0.413702, 
                    lasty: 0.313700, 
                    width: 0.0081, 
                    height: 0.0081,
                    className: 'highlight'
                },
                {
                    id: 'overlay0335',
                    x: 0.1952, 
                    y: 0.02328, 
                    lastx: 0.193452, 
                    lasty: 0.024675, 
                    width: 0.0081, 
                    height: 0.0081,
                    className: 'highlight'
                },
                {
                    id: 'overlay1321',
                    x: 0.6561, 
                    y: 0.0936, 
                    lastx: 0.551702, 
                    lasty: 0.103700, 
                    width: 0.0081, 
                    height: 0.0081, 
                    className: 'highlight'
                }*/
                {
                    id: 'overlay3877',
                    x: 0.5076, 
                    y: 0.2891, 
                    lastx: 0.4870, 
                    lasty: 0.2691, 
                    width: 0.0081, 
                    height: 0.0081,
                    className: 'highlight'
                }],
            });
         //});
    }

    initSeaDragon() {
        //console.log("this.props.useIIIF=",this.props.useIIIF);
        if (this.props.useIIIF==='yes') {
            this.initSeaDragonIIIF();
        } else {
            this.initSeaDragonDZI();
        }
    }
    componentDidMount(){
        //debugger;
        this.initSeaDragon()
    }
     shouldComponentUpdate(nextProps, nextState){
        return false
    }
}

//ExploreBox.defaultProps = { id:            "2012",
//                tileSources:   "dz.xml"
//                }
ExploreBox.defaultProps = { id:            "2021",
                tileSources:  "http://localhost:8099/pyramids/uber_quilt_100x60.dzi"
                }
export default ExploreBox;
