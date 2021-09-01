import React from 'react'
import ReactDOM from "react-dom"
import AddEmoji from './AddEmoji';
import Garden from './Garden'
import AddGardens from './AddGardens';
import './App.css'
import Settings from './Settings';
import Score from './Score';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            farm: [],
            growthSpeed: 2000,
            count: {count1: 0, count2: 0, count3: 0, count4: 0, count5: 0, count6: 0, count7: 0, count8: 0, count9: 0}
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
        this.setState({farm: [this.GenerateGarden(size_garden)]})
    }

    setGrowthSpeed = (event) => {
        let speed = event.currentTarget.value
        this.setState({growthSpeed: speed*1000})
    }

    addEmoji = (idg) => {
        console.log("cliqué")
        console.log(idg)
        let items = this.state.farm
        let depart = []
        for (let j = 0; j < items[idg].length; j++) {
            if (items[idg][j].valeur == null) {
                depart.push(j)
            }
        }

        let select = document.querySelector("select")

        if (depart.length > 0 && select.value === "plant") {
        let item = items[idg][depart[0]].valeur
        item = '🌱'
        items[idg][depart[0]].valeur = item
        this.setState({farm: items})
        }
        else if (depart.length > 0 && select.value === "sea") {
            let item = items[idg][depart[0]].valeur
            item = '🐟'
            items[idg][depart[0]].valeur = item
            this.setState({farm: items})
            }
        else if (depart.length > 0 && select.value === "human") {
            let item = items[idg][depart[0]].valeur
            item = '😶'
            items[idg][depart[0]].valeur = item
            this.setState({farm: items})
            }

        let growth = this.state.growthSpeed

        setTimeout(() => {
            switch(items[idg][depart[0]].valeur) {
                case '🌱': let item = items[idg][depart[0]].valeur
                            item = '🌿'
                            items[idg][depart[0]].valeur = item
                            this.setState({farm: items})
            break;
                case '🐟': let item_sea = items[idg][depart[0]].valeur
                            item_sea = '🐬'
                            items[idg][depart[0]].valeur = item_sea
                            this.setState({farm: items})
            break;
                case '😶': let item_fc = items[idg][depart[0]].valeur
                            item_fc = '🙂'
                            items[idg][depart[0]].valeur = item_fc
                            this.setState({farm: items})
            break;
            }}, growth)
        
    

        setTimeout(() => {
            switch(items[idg][depart[0]].valeur) {
                case '🌿': let item2 = items[idg][depart[0]].valeur
                            item2 = '🌳'
                            items[idg][depart[0]].valeur = item2
                            this.setState({farm: items})
                break;
                case '🐬': let item2sea = items[idg][depart[0]].valeur
                            item2sea = '🐋'
                            items[idg][depart[0]].valeur = item2sea
                            this.setState({farm: items})

                break;
                case '🙂': let item2_fc = items[idg][depart[0]].valeur
                            item2_fc = '🤠'
                            items[idg][depart[0]].valeur = item2_fc
                            this.setState({farm: items})
                break;
        }}, growth * 2)

        this.scoreEmos()
    }
    

    RemoveEmoji = (id, idg) => {
        console.log(id, idg)
        let items = this.state.farm
        let item = items[idg][id].valeur
        item = null
        items[idg][id].valeur = item
        this.setState({farm: items})
        this.scoreEmos()
    }

    
    addGarden = () => {
        const garden = this.GenerateGarden(25)
        let newfarm = this.state.farm
        newfarm.push(garden)
        this.setState({farm: newfarm})

    }

    changeTheme = () => {
        let counters = this.state.count
        let select = document.querySelector("select")
        let contain = document.getElementsByClassName("wrapper")
        let items = this.state.farm
        {for (let j = 0; j < items.length; j++) {
             for (let i = 0; i < 25; i++) {
            if (select.value === "human") {
                let cell = items[j][i].valeur
                cell = null
                items[j][i].valeur = cell
                this.setState({farm: items})
                contain[j].childNodes[i].className=''
                contain[j].childNodes[i].classList.add('cell2')
                let countp = counters.count3
                countp = 0
                counters.count3 = countp
                counters.count6 = countp
                counters.count9 = countp
                this.setState({count: counters})
            }
            if (select.value === "sea") {
                let cell = items[j][i].valeur
                cell = null
                items[j][i].valeur = cell
                this.setState({farm: items})
                contain[j].childNodes[i].className=''
                contain[j].childNodes[i].classList.add('cell3')
                let countp = counters.count6
                countp = 0
                counters.count3 = countp
                counters.count6 = countp
                counters.count9 = countp
                this.setState({count: counters})
            }
            if (select.value === "plant") {
                let cell = items[j][i].valeur
                cell = null
                items[j][i].valeur = cell
                this.setState({farm: items})
                contain[j].childNodes[i].className=''
                contain[j].childNodes[i].classList.add('cell')
                let countp = counters.count9
                countp = 0
                counters.count3 = countp
                counters.count6 = countp
                counters.count9 = countp
                this.setState({count: counters})
            }
        }
        }}
    }

        scoreEmos = () => {
            let Lp = []
            let Lh = []
            let Ls = []
            let select = document.querySelector("select")
            let items = this.state.farm
            let counters = this.state.count
            {for (let j = 0; j < items.length; j++) {
             for (let i = 0; i < 25; i++) {
                if (select.value === "human") {
                    if (items[j][i].valeur === '😶' || items[j][i].valeur === '🙂' || items[j][i].valeur === '🤠') { 
                    Lh.push(items[j][i])
                    let countp = counters.count3
                    countp = Lh.length
                    counters.count3 = countp
                    this.setState({count: counters})
                    console.log(this.state.count.count3)
                    console.log(select.value)
                }
            }
                // else if (items[j][i].valeur === '🙂') {
                //     counters.count3 += 1
                //     this.setState({count: counters})
                // }
                // if (items[j][i].valeur === '🤠') {
                //     counters.count3 += 1
                //     this.setState({count: counters})
                // }
            

                else if (items[j][i].valeur === '🐟' || items[j][i].valeur === '🐬' || items[j][i].valeur === '🐋') {
                Ls.push(items[j][i])
                let countp = counters.count6
                countp = Ls.length
                counters.count6 = countp
                this.setState({count: counters})
                console.log(this.state.count.count6)
                console.log(select.value)
                }
                // else if (items[j][i].valeur === '🐬') {
                //     counters.count6 += 1
                //     this.setState({count: counters})
                // }
                // else if (items[j][i].valeur === '🐋') {
                //     counters.count6 += 1
                //     this.setState({count: counters})
                // }
            
                
                else if (items[j][i].valeur === '🌳' || items[j][i].valeur === '🌿' || items[j][i].valeur === '🌱') {
                Lp.push(items[j][i])
                let countp = counters.count9
                countp = Lp.length
                counters.count9 = countp
                this.setState({count: counters})
                console.log(this.state.count.count9)
                console.log(select.value)
                }
                // else if (items[j][i].valeur === '🌿') {
                //     counters.count9 += 1
                //     this.setState({count: counters})
                // }
                // else if (items[j][i].valeur === '🌳') {
                //     counters.count9 += 1
                //     this.setState({count: counters})
                //     console.log(this.state.count.count9)
                // }
            
        }
        }
        }
}

    render() {
        return (  
            <>
            <h2>My Emoji Garden</h2>
            <Settings toggle={this.changeTheme} growth={this.setGrowthSpeed}/>
            <Score scoreplant={this.state.count.count9} scoreh={this.state.count.count3} scoresea={this.state.count.count6}/>
            <div className="aside">
            {this.state.farm.map((garden, i) => { 
                return (
                    <div key={i}>
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

