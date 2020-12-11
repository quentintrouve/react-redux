

import React, { Component } from 'react'
import './Compteur.css';
import Resultat from '../Composants/Resultat/Resultat.js';
import IncrBtn from '../Composants/IncrBtn/IncrBtn.js';

class Compteur extends Component {

    state = {
        compteur : 0
    }

     calcul = (action) => {

        if(action === "plus1"){
            this.setState( ( statePrec ) => { return { compteur: statePrec.compteur + 1 } } )
        } 
        if(action === "moins1"){
            this.setState( ( statePrec ) => { return { compteur: statePrec.compteur - 1 } } )
        }
    
        
    }
    

    render() {
        return (
            <div className="cont">
            <div className="blocConmpt">
                <Resultat valeur={this.state.compteur} />
            </div>
            <div className="contBtn">
                <IncrBtn txt="Incremente" clicked={() => this.calcul("plus1")} />
                <IncrBtn txt="Decremente" clicked={() => this.calcul("moins1")} />
            </div>
        </div>
        )
    }
}

export default Compteur;
