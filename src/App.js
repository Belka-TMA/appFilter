import React from 'react';
import logo from './logo.svg';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import Filter from './component/Filter.js';
import { Tullets, TulletContent} from './component/Tullet.js';
import 'react-app-polyfill/ie11';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const mainTheme = createMuiTheme({
  palette: {
    primary: {
      main: "rgba(255,124,23,0.8)",
    },
  },
});

const testJson = [{
    "nom": "girard",
    "prenom": "dominique",
    "prestations": "Bilan de compétences, Accompagnement à la VAE",
    "secteur": "Associatif/Arts/culture, Banque/Assurance/Finance, Commerce/Distribution, Communication/Publicité/Médias, Conseil/Consulting, Enseignement/Formation/Animation/Recherche, Industrie, Informatique/Télécom/Digital, Ingénierie/Bureau d'étude, Santé/Social, Services, Tourisme/Hétellerie/Restauration/Loisirs, Transports/Logistique/Messagerie Expresse",
    "disponibilite": "La semaine ",
    "experience": "7 ans et +",
    "Formation": "Oui",
    "certification": "Non",
    "accompagnement": "En présentiel, En visio grâce au bilan digital"
  },
  {
    "nom": "Chadelaud",
    "prenom": "Muriel",
    "prestations": "Bilan de compétences, Formation",
    "secteur": "Banque/Assurance/Finance, Commerce/Distribution, Communication/Publicité/Médias, Conseil/Consulting, Construction/Immobilier/BTP, Enseignement/Formation/Animation/Recherche, Industrie, Informatique/Télécom/Digital, Ingénierie/Bureau d'étude, Santé/Social, Services, Tourisme/Hétellerie/Restauration/Loisirs, Transports/Logistique/Messagerie Expresse",
    "disponibilite": "Le samedi",
    "experience": "2-7 ans",
    "Formation": "Oui",
    "certification": "Non",
    "accompagnement": "En présentiel, En visio grâce au bilan digital"
  },
  {
    "nom": "MARINHO",
    "prenom": "Anne",
    "prestations": "Bilan de compétences, Bilan de compétences pour personnes en situation de handicap, Bilan de compétences pour femmes expatriées, Bilan de compétences entrepreneurial, Coaching pour les particuliers, Coaching pour les entreprises : coaching de manager, Coaching pour les entreprises : coaching de cadres dirigeants ou hauts potentiels, Coaching pour les entreprises : coaching d'équipe, Outplacement, Formation",
    "secteur": "Associatif/Arts/culture, Banque/Assurance/Finance, Commerce/Distribution, Communication/Publicité/Médias, Conseil/Consulting, Construction/Immobilier/BTP, Enseignement/Formation/Animation/Recherche, Industrie, Informatique/Télécom/Digital, Ingénierie/Bureau d'étude, Santé/Social, Services, Service Public/Administration/Collectivité, Tourisme/Hétellerie/Restauration/Loisirs, Transports/Logistique/Messagerie Expresse",
    "disponibilite": "La semaine,Le samedi",
    "experience": "2-7 ans",
    "Formation": "Oui",
    "certification": "Oui",
    "accompagnement": "En présentiel, En visio grâce au bilan digital"
  },
  {
    "nom": "Scholtz",
    "prenom": "Peggy",
    "prestations": "Bilan de compétences, Bilan de compétences pour femmes expatriées, Bilan de compétences entrepreneurial, Coaching pour les particuliers, Coaching pour les entreprises : coaching de manager, Coaching pour les entreprises : coaching de cadres dirigeants ou hauts potentiels, Formation",
    "secteur": "Banque/Assurance/Finance, Commerce/Distribution, Communication/Publicité/Médias, Conseil/Consulting, Construction/Immobilier/BTP, Industrie, Informatique/Télécom/Digital, Ingénierie/Bureau d'étude, Services, Service Public/Administration/Collectivité, Tourisme/Hétellerie/Restauration/Loisirs, Transports/Logistique/Messagerie Expresse",
    "disponibilite": "La semaine,Le samedi",
    "experience": "7 ans et +",
    "Formation": "Oui",
    "certification": "Oui",
    "accompagnement": "En visio grâce au bilan digital"
  },
  {
    "nom": "souhami",
    "prenom": "olivia",
    "prestations": "Bilan de compétences, Bilan de compétences pour femmes expatriées, Coaching pour les particuliers",
    "secteur": "Banque/Assurance/Finance, Commerce/Distribution, Communication/Publicité/Médias, Conseil/Consulting, Construction/Immobilier/BTP, Enseignement/Formation/Animation/Recherche, Industrie, Informatique/Télécom/Digital, Santé/Social, Tourisme/Hétellerie/Restauration/Loisirs",
    "disponibilite": "La semaine ",
    "experience": "7 ans et +",
    "Formation": "Oui",
    "certification": "Oui",
    "accompagnement": "En présentiel, En visio grâce au bilan digital"
  },
  {
    "nom": "Voinéon",
    "prenom": "Isabelle",
    "prestations": "Bilan de compétences, Coaching pour les particuliers, Coaching pour les entreprises : coaching de manager, Coaching pour les entreprises : coaching de cadres dirigeants ou hauts potentiels",
    "secteur": "Communication/Publicité/Médias, Construction/Immobilier/BTP, Enseignement/Formation/Animation/Recherche, Informatique/Télécom/Digital, Santé/Social, Services",
    "disponibilite": "La semaine ",
    "experience": "2-7 ans",
    "Formation": "Oui",
    "certification": "Oui",
    "accompagnement": "En présentiel, En visio grâce au bilan digital"
  },
  {
    "nom": "LAVAINE",
    "prenom": "Charlotte",
    "prestations": "Bilan de compétences, Bilan de compétences pour personnes en situation de handicap, Bilan de compétences entrepreneurial, Outplacement, Formation",
    "secteur": "Associatif/Arts/culture, Banque/Assurance/Finance, Commerce/Distribution, Communication/Publicité/Médias, Conseil/Consulting, Enseignement/Formation/Animation/Recherche, Santé/Social, Services, Service Public/Administration/Collectivité, Tourisme/Hétellerie/Restauration/Loisirs",
    "disponibilite": "La semaine ",
    "experience": "7 ans et +",
    "Formation": "Oui",
    "certification": "Oui",
    "accompagnement": "En présentiel, En visio grâce au bilan digital"
  },
  {
    "nom": "THIERRY",
    "prenom": "VALERIE",
    "prestations": "Bilan de compétences, Bilan de compétences pour personnes en situation de handicap, Bilan de compétences pour femmes expatriées, Accompagnement à la VAE, Formation",
    "secteur": "Associatif/Arts/culture, Banque/Assurance/Finance, Commerce/Distribution, Communication/Publicité/Médias, Construction/Immobilier/BTP, Enseignement/Formation/Animation/Recherche, Industrie, Santé/Social, Services, Service Public/Administration/Collectivité, Tourisme/Hétellerie/Restauration/Loisirs",
    "disponibilite": "La semaine,Le samedi",
    "experience": "7 ans et +",
    "Formation": "Oui",
    "certification": "Non",
    "accompagnement": "En présentiel, En visio grâce au bilan digital"
  },
  {
    "nom": "Fournié",
    "prenom": "Marjorie",
    "prestations": "Bilan de compétences, Bilan de compétences pour personnes en situation de handicap, Bilan de compétences entrepreneurial, Coaching pour les particuliers, Coaching pour les entreprises : coaching de manager, Coaching pour les entreprises : coaching de cadres dirigeants ou hauts potentiels, Outplacement",
    "secteur": "Associatif/Arts/culture, Banque/Assurance/Finance, Commerce/Distribution, Communication/Publicité/Médias, Conseil/Consulting, Construction/Immobilier/BTP, Informatique/Télécom/Digital, Ingénierie/Bureau d'étude, Services, Tourisme/Hétellerie/Restauration/Loisirs, Transports/Logistique/Messagerie Expresse",
    "disponibilite": "La semaine ",
    "experience": "2-7 ans",
    "Formation": "Oui",
    "certification": "Oui",
    "accompagnement": "En présentiel"
  },
  {
    "nom": "KALEMBA",
    "prenom": "NATHALIE",
    "prestations": "Bilan de compétences, Bilan de compétences pour personnes en situation de handicap, Bilan de compétences pour femmes expatriées, Bilan de compétences entrepreneurial",
    "secteur": "Associatif/Arts/culture, Banque/Assurance/Finance, Commerce/Distribution, Communication/Publicité/Médias, Industrie, Informatique/Télécom/Digital, Santé/Social, Services, Tourisme/Hétellerie/Restauration/Loisirs, Transports/Logistique/Messagerie Expresse",
    "disponibilite": "La semaine,Le samedi",
    "experience": "0-2 ans",
    "Formation": "Oui",
    "certification": "Non",
    "accompagnement": "En visio grâce au bilan digital"
  },
  {
    "nom": "HERON",
    "prenom": "Nathalie",
    "prestations": "Bilan de compétences, Coaching pour les particuliers, Coaching pour les entreprises : coaching de manager, Outplacement, Formation",
    "secteur": "Associatif/Arts/culture, Banque/Assurance/Finance, Commerce/Distribution, Communication/Publicité/Médias, Conseil/Consulting, Construction/Immobilier/BTP, Enseignement/Formation/Animation/Recherche, Industrie, Informatique/Télécom/Digital, Ingénierie/Bureau d'étude, Santé/Social, Services, Service Public/Administration/Collectivité, Tourisme/Hétellerie/Restauration/Loisirs, Transports/Logistique/Messagerie Expresse",
    "disponibilite": "La semaine ",
    "experience": "7 ans et +",
    "Formation": "Oui",
    "certification": "Oui",
    "accompagnement": "En présentiel, En visio grâce au bilan digital"
  },
  {
    "nom": "ROUBERT",
    "prenom": "Héléne",
    "prestations": "Bilan de compétences, Bilan de compétences entrepreneurial, Coaching pour les particuliers, Coaching pour les entreprises : coaching de manager, Coaching pour les entreprises : coaching de cadres dirigeants ou hauts potentiels, Coaching pour les entreprises : coaching d'équipe, Outplacement, Formation",
    "secteur": "Associatif/Arts/culture, Banque/Assurance/Finance, Commerce/Distribution, Communication/Publicité/Médias, Conseil/Consulting, Construction/Immobilier/BTP, Enseignement/Formation/Animation/Recherche, Informatique/Télécom/Digital, Santé/Social, Services, Tourisme/Hétellerie/Restauration/Loisirs",
    "disponibilite": "La semaine ",
    "experience": "7 ans et +",
    "Formation": "Non",
    "certification": "Oui",
    "accompagnement": "En présentiel, En visio grâce au bilan digital"
  },
  {
    "nom": "Chambon",
    "prenom": "Caroline",
    "prestations": "Bilan de compétences, Bilan de compétences pour personnes en situation de handicap, Coaching pour les particuliers, Coaching pour les entreprises : coaching d'équipe, Formation",
    "secteur": "Associatif/Arts/culture, Banque/Assurance/Finance, Commerce/Distribution, Communication/Publicité/Médias, Conseil/Consulting, Construction/Immobilier/BTP, Enseignement/Formation/Animation/Recherche, Informatique/Télécom/Digital, Ingénierie/Bureau d'étude, Santé/Social, Services, Transports/Logistique/Messagerie Expresse",
    "disponibilite": "La semaine ",
    "experience": "2-7 ans",
    "Formation": "Oui",
    "certification": "Oui",
    "accompagnement": "En présentiel"
  },
  {
    "nom": "pierel",
    "prenom": "michelle",
    "prestations": "Bilan de compétences, Bilan de compétences pour personnes en situation de handicap, Coaching pour les particuliers",
    "secteur": "Associatif/Arts/culture, Banque/Assurance/Finance, Commerce/Distribution, Communication/Publicité/Médias, Conseil/Consulting, Construction/Immobilier/BTP, Enseignement/Formation/Animation/Recherche, Industrie, Informatique/Télécom/Digital, Ingénierie/Bureau d'étude, Santé/Social, Services, Service Public/Administration/Collectivité, Tourisme/Hétellerie/Restauration/Loisirs, Transports/Logistique/Messagerie Expresse",
    "disponibilite": "La semaine, Le samedi",
    "experience": "7 ans et +",
    "Formation": "Non",
    "certification": "Oui",
    "accompagnement": "En présentiel, En visio grâce au bilan digital"
  },
  {
    "nom": "FRANCOIS",
    "prenom": "Marie-Agnés",
    "prestations": "Bilan de compétences, Bilan de compétences pour femmes expatriées, Bilan de compétences entrepreneurial, Coaching pour les particuliers, Coaching pour les entreprises : coaching de manager, Coaching pour les entreprises : coaching de cadres dirigeants ou hauts potentiels, Coaching pour les entreprises : coaching d'équipe, Outplacement, Formation",
    "secteur": "Associatif/Arts/culture, Banque/Assurance/Finance, Commerce/Distribution, Communication/Publicité/Médias, Conseil/Consulting, Construction/Immobilier/BTP, Enseignement/Formation/Animation/Recherche, Industrie, Informatique/Télécom/Digital, Ingénierie/Bureau d'étude, Santé/Social, Services, Service Public/Administration/Collectivité, Tourisme/Hétellerie/Restauration/Loisirs, Transports/Logistique/Messagerie Expresse",
    "disponibilite": "La semaine ",
    "experience": "7 ans et +",
    "Formation": "Oui",
    "certification": "Oui",
    "accompagnement": "En présentiel, En visio grâce au bilan digital"
  },
  {
    "nom": "MARANDJIAN",
    "prenom": "Alexandra",
    "prestations": "Bilan de compétences, Bilan de compétences pour femmes expatriées, Coaching pour les particuliers, Coaching pour les entreprises : coaching de manager, Coaching pour les entreprises : coaching de cadres dirigeants ou hauts potentiels, Outplacement, Formation",
    "secteur": "Associatif/Arts/culture, Banque/Assurance/Finance, Commerce/Distribution, Communication/Publicité/Médias, Conseil/Consulting, Enseignement/Formation/Animation/Recherche, Informatique/Télécom/Digital, Santé/Social",
    "disponibilite": "La semaine, Le samedi",
    "experience": "2-7 ans",
    "Formation": "Oui",
    "certification": "Oui",
    "accompagnement": "En visio grâce au bilan digital"
  },
  {
    "nom": "Roost",
    "prenom": "Adélaéde",
    "prestations": "Bilan de compétences, Accompagnement à la VAE",
    "secteur": "Associatif/Arts/culture, Banque/Assurance/Finance, Commerce/Distribution, Communication/Publicité/Médias, Conseil/Consulting, Construction/Immobilier/BTP, Enseignement/Formation/Animation/Recherche, Industrie, Informatique/Télécom/Digital, Santé/Social, Service Public/Administration/Collectivité, Transports/Logistique/Messagerie Expresse",
    "disponibilite": "La semaine ",
    "experience": "7 ans et +",
    "Formation": "Oui",
    "certification": "Non",
    "accompagnement": "En présentiel, En visio grâce au bilan digital"
  },
  {
    "nom": "Stotzenbach-Laék",
    "prenom": "Myriam",
    "prestations": "Bilan de compétences, Bilan de compétences pour personnes en situation de handicap, Bilan de compétences pour femmes expatriées, Outplacement",
    "secteur": "Associatif/Arts/culture, Banque/Assurance/Finance, Commerce/Distribution, Communication/Publicité/Médias, Conseil/Consulting, Construction/Immobilier/BTP, Santé/Social, Services, Service Public/Administration/Collectivité, Tourisme/Hétellerie/Restauration/Loisirs",
    "disponibilite": "La semaine,Le samedi",
    "experience": "7 ans et +",
    "Formation": "Oui",
    "certification": "Non",
    "accompagnement": "En présentiel, En visio grâce au bilan digital"
  },
  {
    "nom": "Neveux",
    "prenom": "Isabelle",
    "prestations": "Bilan de compétences, Coaching pour les particuliers, Coaching pour les entreprises : coaching de manager, Coaching pour les entreprises : coaching de cadres dirigeants ou hauts potentiels",
    "secteur": "Banque/Assurance/Finance, Commerce/Distribution, Communication/Publicité/Médias, Conseil/Consulting, Enseignement/Formation/Animation/Recherche, Industrie, Informatique/Télécom/Digital, Santé/Social, Services, Tourisme/Hétellerie/Restauration/Loisirs",
    "disponibilite": "La semaine ",
    "experience": "7 ans et +",
    "Formation": "Oui",
    "certification": "Oui",
    "accompagnement": "En présentiel, En visio grâce au bilan digital"
  },
  {
    "nom": "Charras",
    "prenom": "Aurore",
    "prestations": "Bilan de compétences",
    "secteur": "Associatif/Arts/culture, Banque/Assurance/Finance, Commerce/Distribution, Communication/Publicité/Médias, Informatique/Télécom/Digital, Santé/Social, Services, Service Public/Administration/Collectivité",
    "disponibilite": "La semaine ",
    "experience": "0-2 ans",
    "Formation": "Oui",
    "certification": "Non",
    "accompagnement": "En présentiel, En visio grâce au bilan digital"
  },
  {
    "nom": "Sanquer",
    "prenom": "Emilie",
    "prestations": "Bilan de compétences",
    "secteur": "Banque/Assurance/Finance, Commerce/Distribution, Communication/Publicité/Médias, Conseil/Consulting, Enseignement/Formation/Animation/Recherche, Santé/Social, Tourisme/Hétellerie/Restauration/Loisirs",
    "disponibilite": "La semaine,Le samedi",
    "experience": "0-2 ans",
    "Formation": "Oui",
    "certification": "Non",
    "accompagnement": "En présentiel, En visio grâce au bilan digital"
  },
  {
    "nom": "TIL",
    "prenom": "severine",
    "prestations": "Bilan de compétences",
    "secteur": "Communication/Publicité/Médias, Conseil/Consulting, Service Public/Administration/Collectivité, Tourisme/Hétellerie/Restauration/Loisirs",
    "disponibilite": "La semaine ",
    "experience": "0-2 ans",
    "Formation": "Oui",
    "certification": "Non",
    "accompagnement": "En présentiel, En visio grâce au bilan digital"
  },
  {
    "nom": "BERGER",
    "prenom": "Clémentine",
    "prestations": "Bilan de compétences",
    "secteur": "Banque/Assurance/Finance, Commerce/Distribution, Communication/Publicité/Médias, Conseil/Consulting, Construction/Immobilier/BTP, Informatique/Télécom/Digital, Ingénierie/Bureau d'étude, Santé/Social, Services, Service Public/Administration/Collectivité",
    "disponibilite": "La semaine,Le samedi",
    "experience": "0-2 ans",
    "Formation": "Oui",
    "certification": "Non",
    "accompagnement": "En présentiel, En visio grâce au bilan digital"
  },
  {
    "nom": "KATZ",
    "prenom": "Cecile",
    "prestations": "Bilan de compétences, Outplacement",
    "secteur": "Associatif/Arts/culture, Banque/Assurance/Finance, Commerce/Distribution, Communication/Publicité/Médias, Conseil/Consulting, Construction/Immobilier/BTP, Industrie, Informatique/Télécom/Digital, Ingénierie/Bureau d'étude, Santé/Social, Service Public/Administration/Collectivité, Tourisme/Hétellerie/Restauration/Loisirs",
    "disponibilite": "La semaine,Le samedi",
    "experience": "0-2 ans",
    "Formation": "Oui",
    "certification": "Non",
    "accompagnement": "En présentiel, En visio grâce au bilan digital"
  },
  {
    "nom": "francois",
    "prenom": "nathalie",
    "prestations": "Bilan de compétences, Bilan de compétences entrepreneurial, Coaching pour les particuliers, Coaching pour les entreprises : coaching de manager, Coaching pour les entreprises : coaching de cadres dirigeants ou hauts potentiels, Outplacement",
    "secteur": "Associatif/Arts/culture, Banque/Assurance/Finance, Commerce/Distribution, Communication/Publicité/Médias, Construction/Immobilier/BTP, Informatique/Télécom/Digital, Santé/Social, Services, Transports/Logistique/Messagerie Expresse",
    "disponibilite": "La semaine,Le samedi",
    "experience": "2-7 ans",
    "Formation": "Oui",
    "certification": "Oui",
    "accompagnement": "En présentiel, En visio grâce au bilan digital"
  },
  {
    "nom": "Rioual",
    "prenom": "Sandrine",
    "prestations": "Bilan de compétences, Accompagnement à la VAE, Coaching pour les particuliers, Coaching pour les entreprises : coaching de manager, Outplacement, Formation",
    "secteur": "Associatif/Arts/culture, Banque/Assurance/Finance, Commerce/Distribution, Communication/Publicité/Médias, Conseil/Consulting, Construction/Immobilier/BTP, Enseignement/Formation/Animation/Recherche, Industrie, Informatique/Télécom/Digital, Santé/Social, Services, Tourisme/Hétellerie/Restauration/Loisirs, Transports/Logistique/Messagerie Expresse",
    "disponibilite": "En soirée",
    "experience": "7 ans et +",
    "Formation": "Non",
    "certification": "Oui",
    "accompagnement": "En visio grâce au bilan digital"
  }
]
if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
    value: function(predicate) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== 'function') {
        throw TypeError('predicate must be a function');
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return kValue.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return undefined.
      return undefined;
    },
    configurable: true,
    writable: true
  });
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      data : [],
      filters : this.settingFilters(),
      filteredData : [],
      onSearch : false
    }
  this.filterInput = this.filterInput.bind(this)
  this.dataToExploit = this.dataToExploit.bind(this)
  this.updateData = this.updateData.bind(this)
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
  updateData(data){
    this.setState({
      filteredData : [...data]
    })
  }
  dataToExploit(){
    var toGoData = [...testJson];
    toGoData.map((strinData,index)=>{
        toGoData[index].prestations = strinData.prestations.split(',').map(function(item) {
          return item.trim();
        });

        toGoData[index].secteur = strinData.secteur.split(",").map(function(item) {
          return item.trim();
        });
        toGoData[index].disponibilite = strinData.disponibilite.split(",").map(function(item) {
          return item.trim();
        });
        toGoData[index].accompagnement = strinData.accompagnement.split(",").map(function(item) {
          return item.trim();
        });
    })
    this.setState({
      data : toGoData
    })
  }
  testFonction(){
    let filterToAdd = [];
    let dataFiltered = [];
    filterToAdd = Object.keys(this.state.filters).filter((el,i)=>{
      if(this.state.filters[el] != null){return el}
    })
    if(filterToAdd.length > 0){
      for(let i = 0; i < this.state.data.length; i++){
        let checked = [];
        for(let a = 0; a < filterToAdd.length; a++){
          if(this.state.data[i][filterToAdd[a]].indexOf(this.state.filters[filterToAdd[a]]) != -1){
            checked.push(true)
          }else{
            checked.push(false)
          }
        }
        if(checked.every((val)=>{ return val === true})){dataFiltered.push(this.state.data[i])}
      }
        if (dataFiltered.length === 0) {
            dataFiltered = 'No result'
        }
    }
    return dataFiltered
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
              {this.state.data.length &&   <Filter data={this.state.data} filterInput={this.filterInput} returninFilter={this.state.filters} filtre={['prestations','secteur','disponibilite','experience','certification','accompagnement']}/>}
          </section>
          <section className="App-list sectionWrapper">
          <ExpansionPanel className="semaine">
            <ExpansionPanelSummary

                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                className="semaine-title"
              >
              <h4>En semaine</h4>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={'wrapper-expansion'}>
                <Tullets content={this.state.data} filters={this.state.filters} filteredData={this.testFonction()} onSearch={this.state.onSearch} type="La semaine"/>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel className="samedi">
            <ExpansionPanelSummary

                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                className="semaine-title"
              >
              <h4>En samedi</h4>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={'wrapper-expansion'}>
                <Tullets content={this.state.data} filters={this.state.filters} filteredData={this.testFonction()} onSearch={this.state.onSearch} type="Le samedi"/>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          </section>
        </div>
      );
  }
}

export default App;
