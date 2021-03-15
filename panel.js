import { Component } from "../../cthulhu/call.js";

class PanelComponent extends Component{
    constructor(){
        super({
            div:{
                class:'r1'
            }
        })
    }

    build=(param=undefined)=>
        !!param?
            super.build(
            {
                style:!!param.style?param.style:undefined,
                css:()=>{
                    let css='';

                    if (!!param.mobile){
                        css+=!!param.mobile.size?param.mobile.size:'r1'
                        css+=!!param.mobile.display?' mobile-' + param.mobile.display:'';
                    }else css+='r1';
            
            
                    if (!!param.tablet){
                        css+=!!param.tablet.size?' tablet-' + param.tablet.size:'';
                        css+=!!param.tablet.display?' tablet-' + param.tablet.display:'';
                    }
            
                    if (!!param.desktop){
                        css+=!!param.desktop.size?' desktop-' + param.desktop.size:'';
                        css+=!!param.desktop.display?' desktop-' + param.desktop.display:'';
                    }
            
                    if (!!param.picture){
                        css+=param.picture.backPattern?' ' + param.picture.backPattern:' picture';
                        css+=!!param.picture.parallax?' parallax':'';
                        if (!!param.style)
                            param.style.backgroundImage=param.picture.url;
                        else
                            param.style={
                                backgroundImage:param.picture.url
                            };
                    }
                    
                    css+=!!param.css?' ' + param.css:'';
                    
                    return css;
                }
            }):
            super.build();
}

let PanelComponentInstance = new PanelComponent();
export {PanelComponentInstance};