import { Component } from "react";
import  banana  from "./banana.jpg"

export class GroceryList extends Component {
    constructor(){
        super();

        this.state = {
            userInput: "",
            groceryList: []
        }
    }

    onChangeEvent(e){
        this.setState({userInput : e})
    }

    addItem(input){
        if(input === ""){
            alert("Please enter an item")
        }
        else{
        let listArray = this.state.groceryList;
        listArray.push(input);
        this.setState({groceryList : listArray, userInput : ""})
        console.log(listArray)
        }
    }

    onFormSubmit(e){
        e.preventDefault();
    }

    crossedWord(e){
        const list = e.target;
        list.classList.toggle("crossed");
    }

    deleteItem(){
        let listArray = this.state.groceryList;
        listArray = [];
        this.setState( {groceryList : listArray} )
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                <div className='container'>
                    <input 
                        placeholder="What do you want to buy?"
                        type="text"
                        onChange ={ (e) => {this.onChangeEvent (e.target.value)}}
                        value={ this.state.userInput }
                    />
                    </div>
                    
                    <ul>{this.state.groceryList.map((item) => (
                        <li onClick={this.crossedWord}> 
                        <img src={banana} width="30px" alt="banana"/> {item}
                        </li>))}
                    </ul>
                
                <div className='container'>
                    <button className="button one" onClick={ () => this.addItem(this.state.userInput)}>Add</button>
                </div>
                <div className='container'>
                    <button className="button two" onClick={ () => this.deleteItem()}>Delete</button>
                </div>
                </form>
            </div>
        )
    }
}