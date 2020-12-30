import React, {Component} from 'react';
import './home.css';
import { connect } from 'react-redux';
import {fetchPrograms} from '../../store/actions/ActionCreator';
import Card from '../card/Card';
class Home extends Component {

    componentDidMount(){
        this.props.fetchPrograms();
    }
    render(){
        const {programs} = this.props;
        return(
            <div className="container">
                <h1>SpaceX Launch Programs</h1>
                <div className="row">
                    {
                        programs && programs.map(program => (
                            <div className="col" key={program.flight_number}>
                                <Card program={program}/>
                            </div>
                        ))
                    }
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        programs : state.programs.programs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPrograms : () => dispatch(fetchPrograms())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);