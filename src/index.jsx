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
            score: [{id: "human", state: false, val: 0, lay: "🙂: "}, {id: "sea", state: false, val: 0, lay: "🐟: "}, {id: "plant", state: true, val: 0, lay: "🌱: "}]
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
        let select = document.querySelector("select")
        let contain = document.getElementsByClassName("wrapper")
        let score = this.state.score
        let items = this.state.farm

        {for (let m = 0; m < score.length; m ++) {
            if (select.value == score[m].id) {
                score[m].state = true
                this.setState({score: score})
        }
            else {
                score[m].state = false
                this.setState({score: score})
            }
        }}

        {for (let j = 0; j < items.length; j++) {
             for (let i = 0; i < 25; i++) {
            if (select.value === "human") {
                let cell = items[j][i].valeur
                cell = null
                items[j][i].valeur = cell
                this.setState({farm: items})
                contain[j].childNodes[i].className=''
                contain[j].childNodes[i].classList.add('cell2')
            }
            if (select.value === "sea") {
                let cell = items[j][i].valeur
                cell = null
                items[j][i].valeur = cell
                this.setState({farm: items})
                contain[j].childNodes[i].className=''
                contain[j].childNodes[i].classList.add('cell3')
            }
            if (select.value === "plant") {
                let cell = items[j][i].valeur
                cell = null
                items[j][i].valeur = cell
                this.setState({farm: items})
                contain[j].childNodes[i].className=''
                contain[j].childNodes[i].classList.add('cell')
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
            let score1 = this.state.score
            {for (let j = 0; j < items.length; j++) {
             for (let i = 0; i < 25; i++) {
                if (select.value === "human") {
                    if (items[j][i].valeur === '😶' || items[j][i].valeur === '🙂' || items[j][i].valeur === '🤠') { 
                        Lh.push(items[j][i])
                        let countp = score1[0].val
                        countp = Lh.length
                        score1[0].val = countp
                        this.setState({score: score1})
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
            

                else if (select.value === "sea") {
                    if (items[j][i].valeur === '🐟' || items[j][i].valeur === '🐬' || items[j][i].valeur === '🐋') {
                        Ls.push(items[j][i])
                        let counts = score1[1].val
                        counts = Ls.length
                        score1[1].val = counts
                        this.setState({score: score1})
                        console.log(select.value)
                }
            }
                // else if (items[j][i].valeur === '🐬') {
                //     counters.count6 += 1
                //     this.setState({count: counters})
                // }
                // else if (items[j][i].valeur === '🐋') {
                //     counters.count6 += 1
                //     this.setState({count: counters})
                // }
            
                
                else if (select.value === "plant") {
                    if (items[j][i].valeur === '🌳' || items[j][i].valeur === '🌿' || items[j][i].valeur === '🌱') {
                        Lp.push(items[j][i])
                        let counta = score1[2].val
                        counta = Lp.length
                        score1[2].val = counta
                        this.setState({score: score1})
                        console.log(select.value)
                }
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
            <Score scorelayout={this.state.score}/>
            <div className="aside">
            {this.state.farm.map((garden, i) => { 
                return (
                    <div className="aerer" key={i}>
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

