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
            farm: []
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

    addEmoji = (idg) => {
        console.log("cliqué")
        console.log(idg)
        let items = this.state.farm
        let depart = []
        for (let j = 0; j < this.state.garden.length; j++) {
            if (items[idg][j].valeur == null) {
                depart.push(j)
            }
        }

        if (depart.length > 0) {
        let item = items[idg][depart[0]].valeur
        item = '🌱'
        items[idg][depart[0]].valeur = item
        this.setState({farm: items})
        }

        setTimeout(() => {
            switch(items[idg][depart[0]].valeur) {
                case '🌱': let item = items[idg][depart[0]].valeur
                            item = '🌿'
                            items[idg][depart[0]].valeur = item
                            this.setState({farm: items})
            break;      
            }}, 2000)
    

        setTimeout(() => {
            switch(items[idg][depart[0]].valeur) {
                case '🌿': let item2 = items[idg][depart[0]].valeur
                            item2 = '🌳'
                            items[idg][depart[0]].valeur = item2
                            this.setState({farm: items})
                break;
        }}, 4000)
    }
    

    RemoveEmoji = (id, idg) => {
        console.log(id, idg)
        let items = this.state.farm
        let item = items[idg][id].valeur
        item = null
        items[idg][id].valeur = item
        this.setState({farm: items})
    }

    
    addGarden = () => {
        let farm = this.state.farm
        farm.push(this.state.garden)
        this.setState({farm: farm})

    }

    render() {
        return (  
            <>
            <div className="aside">
            {this.state.farm.map((garden, i) => { 
                return (
                    <div>
                    <Garden id={i} jardin={garden} delete={this.RemoveEmoji}/>
                    <AddEmoji id={i} addEmo={this.addEmoji}/>
                    </div>
                    )})}
            </div>
            <div>
            <AddGardens addGarden={this.addGarden}/>
            </div>
            </>
        )
      
}}



ReactDOM.render(<App />, document.getElementById('root'))

