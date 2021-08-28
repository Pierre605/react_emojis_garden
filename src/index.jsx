import React, { useEffect } from 'react'
import ReactDOM from "react-dom"
import AddEmoji from './AddEmoji';
import Garden from './Garden'
import AddGardens from './AddGardens';
import './App.css'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            garden: [],
            farm: [],
            nb_garden: 1
        }
    }

    GenerateGarden = (size) => {
        let tab = []
        for (let i = 0; i < size; i++) {
            tab.push({id: i, valeur: null})
        }
        return tab
    }
    componentDidMount() {
        const size_garden = 25
        this.setState({garden: this.GenerateGarden(size_garden),
                        farm: [this.GenerateGarden(size_garden)]})
    }

    addEmoji = (key) => {
        console.log(key)
        let items = this.state.garden
        let depart = []
        for (let j = 0; j < this.state.garden.length; j++) {
            if (this.state.garden[j]['valeur'] == null) {
                depart.push(j)
            }
        }
        console.log(depart)

        if (depart.length > 0) {
        let item = items[depart[0]].valeur
        item = '🌱'
        items[depart[0]].valeur = item
        this.setState({garden: items})
        }

        setTimeout(() => {
            switch(items[depart[0]].valeur) {
                case '🌱': let item = items[depart[0]].valeur
                            item = '🌿'
                            items[depart[0]].valeur = item
                            this.setState({garden: items})
            break;      
            }}, 2000)
    

        setTimeout(() => {
            switch(items[depart[0]].valeur) {
                case '🌿': let item2 = items[depart[0]].valeur
                            item2 = '🌳'
                            items[depart[0]].valeur = item2
                            this.setState({garden: items})
                break;
        }}, 4000)
    
    }
    

    RemoveEmoji = (id) => {
        let items = this.state.garden
        let item = this.state.garden[id].valeur
        item = null
        items[id].valeur = item
        this.setState({garden: items})
    }

    
    addGarden = (event) => {
        let nb_jardins = this.state.nb_garden
        let nb = nb_jardins + 1
        
        let farm = this.state.farm
        farm.push(this.state.garden)
        this.setState({ nb_garden: nb, farm: farm})

    }

    render() {
        return (  
            <>
            {this.state.farm.map((garden, i) => { 
                return (
                    <div>
                    <Garden key={i} jardin={this.state.farm[i]} delete={this.RemoveEmoji}/>
                    <AddEmoji addEmo={this.addEmoji} key={i}/>
                    </div>
                    )})}
            <div>
            <AddGardens addGarden={this.addGarden}/>
            </div>
            </>
        )
      
}}



ReactDOM.render(<App />, document.getElementById('root'))

