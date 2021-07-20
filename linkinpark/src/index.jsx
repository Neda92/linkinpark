import {h,render,Component} from "preact";
import {useState,useEffect} from "preact/hooks";
import logo from './ang.jpg';
import petar from './petar.jpg';

const  people= [{name:"Petar Petrovic", img:petar},
                {name:"Milica Markovic",img:'./milica.jpg'},
                {name:"Ivan Ljubinkovic",img:""},
				{name:"Ranka Huljic"}];
  	function App() {
	const [searchTerm, setSearchTerm] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const handleChange = e => {
	  setSearchTerm(e.target.value);
	};
	useEffect(() => {
	  const results = people.filter(person =>
		person.name.toLowerCase().includes(searchTerm)
	  );
	  setSearchResults(results);
	}, [searchTerm]);
	return (
	  <div className="App">
		<img src={logo} alt="logo"/> <br/>
		<input
		  type="text"
		  placeholder="Search"
		  value={searchTerm}
		  onInput={handleChange}
		/>
		  {searchResults.map(item => (
			<p><img src={item.img}/> {item.name}</p>
		  ))}
		
		
	  </div>
	);
  }
	
  render(<App />, document.body);