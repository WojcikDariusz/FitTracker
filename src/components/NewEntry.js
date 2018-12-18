import React from 'react';

class NewEntry extends React.Component {

    constructor() {
        super();
        this.state = {
            activity : {
                type : "",
                distance : "",
                ifFinished : ""
            }
        }
   
    }
    //Due to arrow function we dont need to bind this.changeDistance= this.changeDistance.bind(this);
    changeValue = (event) => {
        
        let newValue = {
            [event.target.name] : event.target.value
        }
        
        this.setState({
            activity : {
                [event.target.name] : newValue
            }
        });
    
    }


    render() {

        

        return (
            <div className='newEntry col-xs-4'>
                <form>
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
                <div className="form-group">
                        <input type="submit" value="Dodaj" id="submit" className="btn btn-primary"></input>
                </div>
                </form>
            </div>
        )
    };
};

export default NewEntry;