import React, {Component} from 'react';
import {connect} from 'react-redux';
import {increment, decrement, reset} from 'actions/counter';
class Counter extends Component {   
    render() {
        console.log(this.props.dispatch)
        return (
            <div>
                <div>{this.props.counter.count}</div>
                <button onClick={() => this.props.increment()}>自增
                </button>
                <button onClick={() =>  this.props.decrement()}>自减
                </button>
                <button onClick={() => this.props.reset()}>重置
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
};
// 第二个参数接受函数的情况
const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            dispatch(increment())
        },
        decrement: () => {
            dispatch(decrement())
        },
        reset: () => {
            dispatch(reset())
        }
    }
};
// 第二个参数接受对象的情况
// const mapDispatchToProps = {
//     increment,
//     decrement,
//     reset
// }
export default connect(mapStateToProps, mapDispatchToProps)(Counter);