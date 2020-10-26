import React from 'react';
import walter from './walter-w.jpg';

class Person extends React.Component {

state = {
    fullName : '  ',
    bio : ' ',
    imgSrc : ``,
    show : ' false '
}

    handleClick = () => {

        this.setState({show : ! this.state.show})

    if(this.state.show) {
        this.setState({
            fullName : 'Najmeddine Hanzouli ',
            bio : 'Im Student ',
            imgSrc : `${walter}` 
    }) 
    }
    else {
        this.setState({
            fullName : '  ',
            bio : '  ',
            imgSrc : ` `,
        }) 
    }

}
    render(){

        return(

            <>
                <h1 style={{textAlign:"center" , fontFamily:"fantasy"}}> { this.state.fullName} </h1>
                <h2>{this.state.bio}</h2>
                <img src= {this.state.imgSrc}  style={{borderRadius : "90px", margin:"15px auto", height:"250px"}}  />
                <br />
                <button onClick={this.handleClick} style={{padding :"9px", borderRadius:"9px", border:"black solid 1px", backgroundColor:"teal"}}>Click to see</button>
            </>   
        )
    }
}

export default Person