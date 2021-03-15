import { Component } from "../../cthulhu/call.js";

class ImageWrapComponent extends Component{
    constructor(){
        super({
            div:{
                class:'img-wrap',
                children:[
                    {
                        img:{

                        }
                    }
                ]
            }
        });
    }

    build=param=>{
        let thisView = !!param?
                            super.build({
                                style:!!param.style?param.style:undefined,
                                css:()=>{
                                    let css = !!param.isBoard?
                                            param.isBoard?
                                                'board':''
                                            :'';

                                    css+=param.css?' ' + param.css:'';
                                    return css;
                                }
                            }):
                            super.build();

        thisView.setAttribute({
            q:'img',
            name:'class',
            value:css
        });

        thisView.setAttribute({
            q:'img',
            name:'src',
            value:param.src
        });

        thisView.setAttribute({
            q:'img',
            name:'alt',
            value:param.alt
        });

        if (!!param.style){
            thisView.setStyle({
                q:'img',
                content:param.style
            });
        }

        return thisView;
    }
}

let ImageWrapComponentInstance = new ImageWrapComponent();

export {ImageWrapComponentInstance};