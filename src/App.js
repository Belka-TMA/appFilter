import React from 'react';
import logo from './logo.svg';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import Filter from './component/Filter.js';
import { Tullets, TulletContent, TulletSection} from './component/Tullet.js';

const mainTheme = createMuiTheme({
  palette: {
    primary: {
      main: "rgba(255,124,23,0.8)",
    },
  },
});

const testJson = [{
    "coach": 'Dominique Girard',
    "prestations": ["Bilan de compétences"," Accompagnement à la VAE"],
    "accompagnement": ["En présentiel"," En visio grâce au bilan digital"],
    "secteur": ["Associatif/Arts/culture"," Banque/Assurance/Finance"," Commerce/Distribution "," Communication/Publicité/Médias"," Conseil/Consulting"," Enseignement/formation/Animation/Recherche"," Industrie"," Informatique/Télécom/Digital"," Ingénierie/Bureau d'étude"," Santé/Social"," Services"," Tourisme/Hétellerie/Restauration/Loisirs"," Transports/Logistique/Messagerie Expresse"],
    "formation": "Oui",
    "certification": "Non",
    "disponibilite": "La semaine",
    "experience": "7 ans et +"
  },
  {
      "coach": 'TEST test',
      "prestations": ["Bilan de compéts"," Accompagnemesdnt à la VAE"],
      "accompagnement": ["En présentisel"," En visio gsrâce au bilan digital"],
      "secteur": ["Associatifd/Arts/culture"," Banque/Assurdance/Finance"," Commerce/Distribution "," Communication/Publicité/Médias"," Conseil/Consulting"," Enseignement/formation/Animation/Recherche"," Industrie"," Informatique/Télécom/Digital"," Ingénierie/Bureau d'étude"," Santé/Social"," Services"," Tourisme/Hétellerie/Restauration/Loisirs"," Transports/Logistique/Messagerie Expresse"],
      "formation": "Non",
      "certification": "Oui",
      "disponibilite": "La semaine",
      "experience": "7 ans et +"
    }
]


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      data : [],
      filters : this.settingFilters(),
    }
  this.filterInput = this.filterInput.bind(this)
  this.dataToExploit = this.dataToExploit.bind(this)
  }
  settingFilters(){
    var filterToKeep = {}
    if(this.props.filter.length > 0){
      this.props.filter.map((e)=>{
            filterToKeep[e] = null
        })
    }
    return {...filterToKeep}
  }
  fetchingData(){
    fetch('media/microsite/5aconseil/coachApp/data.json',
        {
            credentials: "same-origin",
            method: "GET",
        }
    )
    .then(response => response.json())
    .then((json) => {
        var dataFetched = json
        this.setState({ data: dataFetched})
      });
  }
  filterInput(data){
    this.setState({
      filters : data
    })
  }
  dataToExploit(){
    var toGoData = [...testJson];
    this.setState({
      data : toGoData
    })
  }
  componentDidMount() {
    if(this.state.data.length <= 0){
      this.dataToExploit()
    }else{
      console.log('pas de données')
    }
  }
  render(){
      return(
        <div className="App">
          <header className="App-header sectionWrapper">
              <p>Coach 5aconseil</p>
          </header>
          <section className="App-filter sectionWrapper">
              {this.state.data.length &&   <Filter data={this.state.data} filterInput={this.filterInput} returninFilter={this.state.filters} filtre={['prestations','secteur','experience','formation','certification','accompagnement']}/>}
          </section>
          <section className="App-list sectionWrapper">
              {this.state.data.length &&
              <Tullets content={this.state.data} filters={this.state.filters} >
                  <TulletContent group={['coach','prestations']}>

                  </TulletContent>
              </Tullets>
            }
          </section>
        </div>
      );
  }
}

export default App;
