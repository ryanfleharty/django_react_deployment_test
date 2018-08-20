import React, {Component} from 'react';

export default class CatsContainer extends Component {
    constructor(){
        super();
        this.state = {
            "cats": []
        }
    }
    getCats = async () => {
        const cats = await fetch('https://django-react-cats.herokuapp.com/cats')
        const catsJson = await cats.json();
        console.log(catsJson);
        return catsJson
    }
    componentDidMount(){
        this.getCats().then((cats)=>{
            this.setState({
                cats: cats
            })
        })
    }
    render(){
        const cats = this.state.cats.map((cat)=>{
            return(
                <h2>{cat.name}</h2>
            )
        })
        return(
            <div>
                <h1>Hi here are the cats</h1>
                {cats}
            </div>
        )
    }
}