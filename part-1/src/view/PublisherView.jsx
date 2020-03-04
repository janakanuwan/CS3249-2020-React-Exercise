import React from 'react';

import HeroView from './HeroView'

import './publisher-view.css'

class PublisherView extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
        const {heroes} = this.props;

        // What will happen if heroes array is empty?
        const publisher = heroes[0]["publisher"];

        // NOTE: HTML uses simple names for its attributes, but JSX uses camel case!
        return (
            <div>
                <h2>Super Heroes from {publisher} </h2>
                <div className={"publisher-view"}>
                    {/* Use JS map function to create multiple heroes with looping*/}
                    {heroes.map( (heroData) =>
                        <HeroView key={heroData.id} hero={heroData}/>)}
                </div>
            </div>
        );
    }
}

export default PublisherView;