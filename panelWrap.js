import { Component } from "../../cthulhu/call.js";

export class PanelWrapComponent extends Component{
    constructor(){
        super({
            div:{
            }
        });
    }

    build=param=>!!param?
        super.build({
            style:!!param.style?param.style:undefined,
            css:()=>'panel' + (!!param.css?' ' + param.css:'')
        }):
        super.build();
}

let PanelWrapComponentInstance= new PanelWrapComponent();
export {PanelWrapComponentInstance}