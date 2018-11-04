
import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import loader from '../loader.svg'
import './App.css';
import Now from '../components/Now';
import Days from '../components/Days';
import FindCity from '../components/FindCity/FindCity';
import Message from '../components/Message/Message';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name : null,
			weather : null,
			icon : null,
			temp : 0,
			list : [],
			city : null,
			isForecastShowed : false,
			loaderClass : 'hide',
			message : 'no data'
		}
	
		this.handleChange = this.handleChange.bind(this);
		this.showForcast = this.showForcast.bind(this);
	}
	  
	handleChange = (event) => {
		this.setState({city: event.target.value});
	}

	showForcast = ( ) => {


		this.setState({
			loaderClass : 'show'
		});

		let showForDays = [];
		for(let i = 0; i <= 5; i++) {
			showForDays.push(moment().add(i, 'days').format("YYYY-MM-DD") + " 15:00:00");
		}

		axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + this.state.city + '&units=metric&lang=hr&appid=a033c80fc22a346b73c366e384f8f6f8').then(response => {
			
			this.setState({
				name : response.data.name,
				weather : response.data.weather[0].main,
				icon : 'http://openweathermap.org/img/w/' + response.data.weather[0].icon + '.png',
				temp : Math.round(response.data.main.temp),
				isForecastShowed : true
			});

		}).catch((error) => {
			this.setState({
				isForecastShowed : false,
				message : error.response.data.message
			});
		});

		axios.get('https://api.openweathermap.org/data/2.5/forecast?q=' + this.state.city + '&units=metric&lang=hr&appid=a033c80fc22a346b73c366e384f8f6f8').then(response => {
			
			let list = response.data.list;
			let forecastList = [];
			
			for(let i = 0; i < list.length; i++) {
				if(showForDays.includes(list[i].dt_txt)) {
					forecastList.push(list[i]);
				}
			}

			this.setState({
				list : forecastList,
				loaderClass : 'hide'
			});
			
		}).catch((error) => {
			this.setState({
				isForecastShowed : false,
				message : error.response.data.message,
				loaderClass : 'hide'
			});
		});
	}

  	render() {
		
		let data;

		if(this.state.isForecastShowed) {
			data = [
				<Now
					key="0"
					name={this.state.name}
					weather={this.state.weather} 
					icon={this.state.icon}
					temp={this.state.temp} />,
				<Days 
					key="1"
					days={this.state.list} />
			];

		} else {
			data = <Message msg={this.state.message}/>;
		}

		return (
			<div className="App">
				<FindCity 
					changed={this.handleChange}
					clicked={this.showForcast} />
				
				{ this.state.loaderClass === 'hide' ? data : null }
				
				<img src={loader} alt="Loader" className={this.state.loaderClass}/>
			</div>
		);
  	}
}

export default App;
