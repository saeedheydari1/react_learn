import React, { Component} from 'react';


class counter extends Component {
    state={
        value:this.props.value,
        // imageUrl:"htttps://picsum.photos/200"
        // tags:['tag1','tag2']
    }
    style={
        fontWeight:"bold"
    }

    render() {
        console.log('props' , this.props);
        
        return (
            <React.Fragment>
                {/* {this.props.id} */}
                {/* <img src={this.state.imageUrl} alt=""/> */}
                <span style={{fontSize:15}} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                style={this.style}
                 className="btn btn-secondary btn-sm"
                 onClick={()=>this.incrementHandel()}>
                    incremint
                </button>
                <button className="btn btn-danger btn-sm m-2" onClick={()=>this.props.onDelete(this.props.id)}>delete</button>
                {/* {this.state.tags.length===0 && <p>plz add tags!</p>}
                {this.renderTags()} */}
            </React.Fragment>
        );
    }

    // constructor(){
    //     super();
    //     this.incrementHandel = this.incrementHandel.bind(this)
    // }

    // incrementHandel(){
    //     console.log('hooy jada',this.state)
    // }

    incrementHandel=product=>{
        console.log(product);
        this.setState({value:this.state.value+1})
    }

    // doIncrementHandel=()=>{

    //     this.incrementHandel({id:1})

    // }

    renderTags(){
        if(this.state.tags.length===0) return <p className="ml-2">There arenot any tags!</p>;
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li> )}</ul>;
    }


    getBadgeClasses() {
        let classs = "badge m-2 badge-";
        classs += this.state.value === 0 ? "warning" : "primary";
        return classs;
    }

    formatCount(){
        const {value}=this.state
        return (value===0 ? "zero":value)
    }
};
 
export default counter;