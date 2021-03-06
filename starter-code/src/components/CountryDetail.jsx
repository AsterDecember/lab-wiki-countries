import React,{Component} from 'react'
import countries from '../countries'
import {Link} from 'react-router-dom'
class CountryDetail extends Component {

    componentWillMount() {
        const {id} = this.props.match.params
        this.setState({
            id
        })
    }

    render(){
        const {id} = this.state
        console.log(id)
        let country = countries.filter( c=> {
            return c.cca3 == id
        })
        console.log(country[0].borders)
        return(
            <div className="halfOver">
                <div className="card">

                    <p>Information</p>
                    <p>{country[0].name.common}</p>
                    <p>{country[0].flag}</p>
                    <ul className="list-group">
                    {country[0].borders.map((c)=>{
                        return(
                                <Link onClick={()=>this.setState({id:c})}  to={`/country/${c}`}>
                                    <li className="list-group-item">
                                        {c}
                                    </li>
                                </Link>
                        )
                    })}
                    </ul>
                    <button onClick={()=> this.props.history.push('/')}>
                        GoBack
                    </button>
                </div>
            </div>
        )
    }
}
export default CountryDetail