import React, { Component } from 'react';

class Dashboard extends Component {

    render() {

        const activity = this.props.activities.map( activities => {
            return <div>
                    <p>Activity type: {activities.type}</p>
                    <p>Distance: {activities.distance}</p>
                    <p>Finished: {activities.ifFinished}</p>
                    </div>
        });
        


        return (
        <div className='dashboard col-xs-8'>
          <div> 
              {activity}
          </div>           
        </div>
        )
    };
};
export default Dashboard;