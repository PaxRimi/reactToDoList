import React,{Component} from 'react';

class AddElement extends Component{
    state = {
        content: "",
    };

    handleTextChange = (e) =>{
        this.setState({
            content: e.target.value,
        })
    };

    handelSubmit = (e) => {
        e.preventDefault();
        this.props.addNewElement(this.state);
        this.setState({
            content: "",
        });
    };



    render(){
        return(
            <div>
                <form onSubmit={this.handelSubmit}>
                    <label>Add new todo:
                        <input type="text" onChange={this.handleTextChange} value={this.state.content}/>
                        <button>Submit</button>
                    </label>
                </form>
            </div>
        )
    }
}

export default AddElement;