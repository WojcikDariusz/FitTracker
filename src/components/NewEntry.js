import React from 'react';

class NewEntry extends React.Component {

    constructor() {
        super();
        this.state = {
            activity : {
                type : "",
                distance : "",
                ifFinished : false
            }
        };   
    }
    //Due to arrow function we dont need to bind this.changeDistance= this.changeDistance.bind(this);
    changeValue = (event) => {
        
        let newValue;

        if (event.target.name==="ifFinished") {
            newValue = {
                ...this.state.activity,
                [event.target.name] : event.target.checked
            };
        } else {
            newValue = {
                ...this.state.activity,
                [event.target.name] : event.target.value
            };
        }
              
        this.setState({
            activity : newValue
        });
    
    }

    addNewActivity = (event) => {

        event.preventDefault();

        //Declaring spread operators to have a copy of state
        let activity = { ...this.state.activity };

        this.props.addActivity(activity);

        this.setState({
            activity : {
                type : "",
                distance : "",
                ifFinished : false
            }
        })

    }

    render() {

        return (
            <div className='newEntry col-xs-2'>
                <form onSubmit={this.addNewActivity}>
            <p>Add new exercise</p>
               
                <div className="form-group">
                    <select multiple className="form-control" id="activityType" name="type" onChange={this.changeValue}>
                        <option name="running">Running</option>
                        <option name="walking">Walking</option>
                        <option name="swimming">Swimming</option>
                        <option name="rollerSkating">Roller skating</option>
                    </select>
                </div>      
                <div className="form-group">      
                        <input type="number" placeholder="Distance [m]" id="distance" name="distance" className="form-control" onChange={this.changeValue} ></input>
                </div>
                <div className="form-group">
                    <input type="checkbox" id="ifFinished" name="ifFinished" onChange={this.changeValue}></input>
                    <label htmlFor="ifFinished"> Did you finished?</label>
                </div>
                <div className="form-group ">
                        <input type="submit" value="Dodaj" id="submit" className="btn btn-primary"></input>
                </div>
                </form>
            </div>
        )
    };
};

export default NewEntry;