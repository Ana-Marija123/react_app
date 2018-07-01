import  React, {  Component  }  from  'react';
// import PropTypes from 'prop-types';

class  Calculator  extends  Component  {
    constructor() {
        super();

        this.state  =  {
            a:  0,
            b:  0,
            result:  0
        }


        this.calculateResult  =  this.calculateResult.bind(this);
        this.numChangeHandler  =  this.numChangeHandler.bind(this);

    }


    numChangeHandler(e) {
        console.log("numChangeHandler");
        console.log(e.target.name);
        console.log(e.target.value);

        let  v  =  {};
        v[e.target.name]  =  e.target.value;
        this.setState(v);
    }

    calculateResult() {
        let  r  =  parseInt(this.state.a)  +  parseInt(this.state.b);
        this.setState({ result: r });
    }

    render() {
        return  (
            <div  className="calc">
                <input  type="number"  name="a"  value={this.state.a}  onChange={this.numChangeHandler}  />
                <input  type="number"  name="b"  value={this.state.b}  onChange={this.numChangeHandler}  />

                <input  type="number"  value={this.state.result}  />
                <button  onClick={this.calculateResult}>Zbir
</button>

            </div>


        );
    }
}

export  default  Calculator; 
