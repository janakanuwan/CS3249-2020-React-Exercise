import React from 'react'

// NOTE: We did not added the extension. Will it be a problem?
// React Component
import PowerStatsView from './PowerStatsView'

// import css
import './hero-view.css'

// NOTE: React component starts with Capital letter
class HeroView extends React.Component{

    constructor(props){
        super(props);

        const {hero} = props;

        // EXERCISE: Bind the functions

    }

    // EXERCISE: Add increaseStrength() function


    // EXERCISE: Add decreaseStrength() function


    render(){
        const {hero} = this.props;

        return (
            <div className={"hero-view"}>
                <h3>{hero.name}</h3>
                <img src={hero.image}  alt={hero.image}/>

                {/* EXERCISE: Link the functions to "onclick" HTML attribute of button*/}
                <button >Increase Strength</button>
                <button >Decrease Strength</button>

                <PowerStatsView data={this.props}/>
            </div>
        );
    }
}

export default HeroView