import React from 'react'

// importing React Component

// EXERCISE: import the PowerStatsView and add it
// NOTE: Do we need to add ".jsx" extension?


// import css
import './hero-view.css'

// NOTE: React component starts with Capital letter
class HeroView extends React.Component{

    render(){
        // NOTE: we extract the data first from 'props'
        const {hero} = this.props;

        return (
            // EXERCISE: pass css property 'class-name' = "hero-view"
            <div >
                <h3>{hero.name}</h3>
                <img src={hero.image}  alt={hero.image}/>
                {/* NOTE: we can use the child component directly in JSX */}
                {/* NOTE: we pass the data by a known name (i.e. 'data') */}

                {/*EXERCISE: Add the PowerStatsView here and pass the 'powerstats' from 'hero' */}



            </div>
        );
    }
}

export default HeroView;