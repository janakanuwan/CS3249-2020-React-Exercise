import React from 'react'
import PowerStatsChart from "./PowerStatsChart";

class PowerStatsView extends React.Component {
    // static utility function that maps the data parsed from props to Chart supported format
    static graphDataMapper(data){
        const {intelligence, strength, speed} = data;
        return (
            [
                {
                    name: 'Powers', intelligence: intelligence, strength: strength, speed: speed,
                }
            ]
        );
    }

    render() {
        const {data} = this.props;

        return (
            <div>
                {/* EXERCISE: Add the 'PowerStatsChart'*/}


            </div>
        );
    }
}

export default PowerStatsView;