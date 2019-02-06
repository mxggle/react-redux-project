import React,{Component} from 'react';


export default class Hello extends Component{
    constructor(props){
        super(props);
        this.state = {
            hello:'你好'
        }
    }
    render(){
        return (
            <div>{this.state.hello}</div>
        )
    }
}