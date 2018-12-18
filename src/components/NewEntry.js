import React from 'react';

class NewEntry extends React.Component {
    render() {


        return (
            <div className='newEntry col-xs-4'>
                <form>
                <div className="form-group">
                        <input type="text" placeholder="Type of activity" id="activityNameInput" name="activityName" className="form-control"></input>
                </div>      
                <div className="form-group">      
                        <input type="number" placeholder="Distance" id="distanceInput" name="distance" className="form-control"></input>
                </div>
                <div className="form-group">
                        <input type="submit" value="Dodaj" id="submitInput" name="submitForm" className="form-control"></input>
                </div>
            
                </form>
            </div>
        )
    };
};

export default NewEntry;