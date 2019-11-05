import React from 'react';
import logo from './logo.svg';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import Filter from './component/Filter.js';

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
    "prestations": "Bilan de compétences, Accompagnement é la VAE",
    "secteur": "Associatif/Arts/culture, Banque/Assurance/Finance, Commerce/Distribution, Communication/Publicité/Médias, Conseil/Consulting, Enseignement/formation/Animation/Recherche, Industrie, Informatique/Télécom/Digital, Ingénierie/Bureau d'étude, Santé/Social, Services, Tourisme/Hétellerie/Restauration/Loisirs, Transports/Logistique/Messagerie Expresse",
    "disponibilite": "La semaine, en journée",
    "experience": "7 ans et +",
    "formation": "Oui",
    "certification": "Non",
    "accompagnement": "En présentiel, En visio gréce au bilan digital"
  },
  {
    "nom": "Chadelaud",
    "prenom": "Muriel",
    "prestations": "Bilan de compétences, formation",
    "secteur": "Banque/Assurance/Finance, Commerce/Distribution, Communication/Publicité/Médias, Conseil/Consulting, Construction/Immobilier/BTP, Enseignement/formation/Animation/Recherche, Industrie, Informatique/Télécom/Digital, Ingénierie/Bureau d'étude, Santé/Social, Services, Tourisme/Hétellerie/Restauration/Loisirs, Transports/Logistique/Messagerie Expresse",
    "disponibilite": "En soirée, Le samedi",
    "experience": "2-7 ans",
    "formation": "Oui",
    "certification": "Non",
    "accompagnement": "En présentiel, En visio gréce au bilan digital"
  },
  {
    "nom": "MARINHO",
    "prenom": "Anne",
    "prestations": "Bilan de compétences, Bilan de compétences pour personnes en situation de handicap, Bilan de compétences pour femmes expatriées, Bilan de compétences entrepreneurial, Coaching pour les particuliers, Coaching pour les entreprises : coaching de manager, Coaching pour les entreprises : coaching de cadres dirigeants ou hauts potentiels, Coaching pour les entreprises : coaching d'équipe, Outplacement, formation",
    "secteur": "Associatif/Arts/culture, Banque/Assurance/Finance, Commerce/Distribution, Communication/Publicité/Médias, Conseil/Consulting, Construction/Immobilier/BTP, Enseignement/formation/Animation/Recherche, Industrie, Informatique/Télécom/Digital, Ingénierie/Bureau d'étude, Santé/Social, Services, Service Public/Administration/Collectivité, Tourisme/Hétellerie/Restauration/Loisirs, Transports/Logistique/Messagerie Expresse",
    "disponibilite": "La semaine, en journée, En soirée, Le samedi",
    "experience": "2-7 ans",
    "formation": "Oui",
    "certification": "Oui",
    "accompagnement": "En présentiel, En visio gréce au bilan digital"
  },
  {
    "nom": "Scholtz",
    "prenom": "Peggy",
    "prestations": "Bilan de compétences, Bilan de compétences pour femmes expatriées, Bilan de compétences entrepreneurial, Coaching pour les particuliers, Coaching pour les entreprises : coaching de manager, Coaching pour les entreprises : coaching de cadres dirigeants ou hauts potentiels, formation",
    "secteur": "Banque/Assurance/Finance, Commerce/Distribution, Communication/Publicité/Médias, Conseil/Consulting, Construction/Immobilier/BTP, Industrie, Informatique/Télécom/Digital, Ingénierie/Bureau d'étude, Services, Service Public/Administration/Collectivité, Tourisme/Hétellerie/Restauration/Loisirs, Transports/Logistique/Messagerie Expresse",
    "disponibilite": "La semaine, en journée, En soirée, Le samedi",
    "experience": "7 ans et +",
    "formation": "Oui",
    "certification": "Oui",
    "accompagnement": "En visio gréce au bilan digital"
  },
  {
    "nom": "souhami",
    "prenom": "olivia",
    "prestations": "Bilan de compétences, Bilan de compétences pour femmes expatriées, Coaching pour les particuliers",
    "secteur": "Banque/Assurance/Finance, Commerce/Distribution, Communication/Publicité/Médias, Conseil/Consulting, Construction/Immobilier/BTP, Enseignement/formation/Animation/Recherche, Industrie, Informatique/Télécom/Digital, Santé/Social, Tourisme/Hétellerie/Restauration/Loisirs",
    "disponibilite": "La semaine, en journée",
    "experience": "7 ans et +",
    "formation": "Oui",
    "certification": "Oui",
    "accompagnement": "En présentiel, En visio gréce au bilan digital"
  },
  {
    "nom": "Voinéon",
    "prenom": "Isabelle",
    "prestations": "Bilan de compétences, Coaching pour les particuliers, Coaching pour les entreprises : coaching de manager, Coaching pour les entreprises : coaching de cadres dirigeants ou hauts potentiels",
    "secteur": "Communication/Publicité/Médias, Construction/Immobilier/BTP, Enseignement/formation/Animation/Recherche, Informatique/Télécom/Digital, Santé/Social, Services",
    "disponibilite": "La semaine, en journée",
    "experience": "2-7 ans",
    "formation": "Oui",
    "certification": "Oui",
    "accompagnement": "En présentiel, En visio gréce au bilan digital"
  },
  {
    "nom": "LAVAINE",
    "prenom": "Charlotte",
    "prestations": "Bilan de compétences, Bilan de compétences pour personnes en situation de handicap, Bilan de compétences entrepreneurial, Outplacement, formation",
    "secteur": "Associatif/Arts/culture, Banque/Assurance/Finance, Commerce/Distribution, Communication/Publicité/Médias, Conseil/Consulting, Enseignement/formation/Animation/Recherche, Santé/Social, Services, Service Public/Administration/Collectivité, Tourisme/Hétellerie/Restauration/Loisirs",
    "disponibilite": "La semaine, en journée",
    "experience": "7 ans et +",
    "formation": "Oui",
    "certification": "Oui",
    "accompagnement": "En présentiel, En visio gréce au bilan digital"
  },
  {
    "nom": "THIERRY",
    "prenom": "VALERIE",
    "prestations": "Bilan de compétences, Bilan de compétences pour personnes en situation de handicap, Bilan de compétences pour femmes expatriées, Accompagnement é la VAE, formation",
    "secteur": "Associatif/Arts/culture, Banque/Assurance/Finance, Commerce/Distribution, Communication/Publicité/Médias, Construction/Immobilier/BTP, Enseignement/formation/Animation/Recherche, Industrie, Santé/Social, Services, Service Public/Administration/Collectivité, Tourisme/Hétellerie/Restauration/Loisirs",
    "disponibilite": "La semaine, en journée, En soirée, Le samedi",
    "experience": "7 ans et +",
    "formation": "Oui",
    "certification": "Non",
    "accompagnement": "En présentiel, En visio gréce au bilan digital"
  },
  {
    "nom": "Fournié",
    "prenom": "Marjorie",
    "prestations": "Bilan de compétences, Bilan de compétences pour personnes en situation de handicap, Bilan de compétences entrepreneurial, Coaching pour les particuliers, Coaching pour les entreprises : coaching de manager, Coaching pour les entreprises : coaching de cadres dirigeants ou hauts potentiels, Outplacement",
    "secteur": "Associatif/Arts/culture, Banque/Assurance/Finance, Commerce/Distribution, Communication/Publicité/Médias, Conseil/Consulting, Construction/Immobilier/BTP, Informatique/Télécom/Digital, Ingénierie/Bureau d'étude, Services, Tourisme/Hétellerie/Restauration/Loisirs, Transports/Logistique/Messagerie Expresse",
    "disponibilite": "La semaine, en journée, En soirée",
    "experience": "2-7 ans",
    "formation": "Oui",
    "certification": "Oui",
    "accompagnement": "En présentiel"
  },
  {
    "nom": "KALEMBA",
    "prenom": "NATHALIE",
    "prestations": "Bilan de compétences, Bilan de compétences pour personnes en situation de handicap, Bilan de compétences pour femmes expatriées, Bilan de compétences entrepreneurial",
    "secteur": "Associatif/Arts/culture, Banque/Assurance/Finance, Commerce/Distribution, Communication/Publicité/Médias, Industrie, Informatique/Télécom/Digital, Santé/Social, Services, Tourisme/Hétellerie/Restauration/Loisirs, Transports/Logistique/Messagerie Expresse",
    "disponibilite": "La semaine, en journée, En soirée, Le samedi",
    "experience": "0-2 ans",
    "formation": "Oui",
    "certification": "Non",
    "accompagnement": "En visio gréce au bilan digital"
  },
  {
    "nom": "HERON",
    "prenom": "Nathalie",
    "prestations": "Bilan de compétences, Coaching pour les particuliers, Coaching pour les entreprises : coaching de manager, Outplacement, formation",
    "secteur": "Associatif/Arts/culture, Banque/Assurance/Finance, Commerce/Distribution, Communication/Publicité/Médias, Conseil/Consulting, Construction/Immobilier/BTP, Enseignement/formation/Animation/Recherche, Industrie, Informatique/Télécom/Digital, Ingénierie/Bureau d'étude, Santé/Social, Services, Service Public/Administration/Collectivité, Tourisme/Hétellerie/Restauration/Loisirs, Transports/Logistique/Messagerie Expresse",
    "disponibilite": "La semaine, en journée, En soirée",
    "experience": "7 ans et +",
    "formation": "Oui",
    "certification": "Oui",
    "accompagnement": "En présentiel, En visio gréce au bilan digital"
  },
  {
    "nom": "ROUBERT",
    "prenom": "Héléne",
    "prestations": "Bilan de compétences, Bilan de compétences entrepreneurial, Coaching pour les particuliers, Coaching pour les entreprises : coaching de manager, Coaching pour les entreprises : coaching de cadres dirigeants ou hauts potentiels, Coaching pour les entreprises : coaching d'équipe, Outplacement, formation",
    "secteur": "Associatif/Arts/culture, Banque/Assurance/Finance, Commerce/Distribution, Communication/Publicité/Médias, Conseil/Consulting, Construction/Immobilier/BTP, Enseignement/formation/Animation/Recherche, Informatique/Télécom/Digital, Santé/Social, Services, Tourisme/Hétellerie/Restauration/Loisirs",
    "disponibilite": "La semaine, en journée",
    "experience": "7 ans et +",
    "formation": "Non",
    "certification": "Oui",
    "accompagnement": "En présentiel, En visio gréce au bilan digital"
  },
  {
    "nom": "Chambon",
    "prenom": "Caroline",
    "prestations": "Bilan de compétences, Bilan de compétences pour personnes en situation de handicap, Coaching pour les particuliers, Coaching pour les entreprises : coaching d'équipe, formation",
    "secteur": "Associatif/Arts/culture, Banque/Assurance/Finance, Commerce/Distribution, Communication/Publicité/Médias, Conseil/Consulting, Construction/Immobilier/BTP, Enseignement/formation/Animation/Recherche, Informatique/Télécom/Digital, Ingénierie/Bureau d'étude, Santé/Social, Services, Transports/Logistique/Messagerie Expresse",
    "disponibilite": "La semaine, en journée",
    "experience": "2-7 ans",
    "formation": "Oui",
    "certification": "Oui",
    "accompagnement": "En présentiel"
  },
  {
    "nom": "pierel",
    "prenom": "michelle",
    "prestations": "Bilan de compétences, Bilan de compétences pour personnes en situation de handicap, Coaching pour les particuliers",
    "secteur": "Associatif/Arts/culture, Banque/Assurance/Finance, Commerce/Distribution, Communication/Publicité/Médias, Conseil/Consulting, Construction/Immobilier/BTP, Enseignement/formation/Animation/Recherche, Industrie, Informatique/Télécom/Digital, Ingénierie/Bureau d'étude, Santé/Social, Services, Service Public/Administration/Collectivité, Tourisme/Hétellerie/Restauration/Loisirs, Transports/Logistique/Messagerie Expresse",
    "disponibilite": "La semaine, en journée, Le samedi",
    "experience": "7 ans et +",
    "formation": "Non",
    "certification": "Oui",
    "accompagnement": "En présentiel, En visio gréce au bilan digital"
  },
  {
    "nom": "FRANCOIS",
    "prenom": "Marie-Agnés",
    "prestations": "Bilan de compétences, Bilan de compétences pour femmes expatriées, Bilan de compétences entrepreneurial, Coaching pour les particuliers, Coaching pour les entreprises : coaching de manager, Coaching pour les entreprises : coaching de cadres dirigeants ou hauts potentiels, Coaching pour les entreprises : coaching d'équipe, Outplacement, formation",
    "secteur": "Associatif/Arts/culture, Banque/Assurance/Finance, Commerce/Distribution, Communication/Publicité/Médias, Conseil/Consulting, Construction/Immobilier/BTP, Enseignement/formation/Animation/Recherche, Industrie, Informatique/Télécom/Digital, Ingénierie/Bureau d'étude, Santé/Social, Services, Service Public/Administration/Collectivité, Tourisme/Hétellerie/Restauration/Loisirs, Transports/Logistique/Messagerie Expresse",
    "disponibilite": "La semaine, en journée",
    "experience": "7 ans et +",
    "formation": "Oui",
    "certification": "Oui",
    "accompagnement": "En présentiel, En visio gréce au bilan digital"
  },
  {
    "nom": "MARANDJIAN",
    "prenom": "Alexandra",
    "prestations": "Bilan de compétences, Bilan de compétences pour femmes expatriées, Coaching pour les particuliers, Coaching pour les entreprises : coaching de manager, Coaching pour les entreprises : coaching de cadres dirigeants ou hauts potentiels, Outplacement, formation",
    "secteur": "Associatif/Arts/culture, Banque/Assurance/Finance, Commerce/Distribution, Communication/Publicité/Médias, Conseil/Consulting, Enseignement/formation/Animation/Recherche, Informatique/Télécom/Digital, Santé/Social",
    "disponibilite": "La semaine, en journée, Le samedi",
    "experience": "2-7 ans",
    "formation": "Oui",
    "certification": "Oui",
    "accompagnement": "En visio gréce au bilan digital"
  },
  {
    "nom": "Roost",
    "prenom": "Adélaéde",
    "prestations": "Bilan de compétences, Accompagnement é la VAE",
    "secteur": "Associatif/Arts/culture, Banque/Assurance/Finance, Commerce/Distribution, Communication/Publicité/Médias, Conseil/Consulting, Construction/Immobilier/BTP, Enseignement/formation/Animation/Recherche, Industrie, Informatique/Télécom/Digital, Santé/Social, Service Public/Administration/Collectivité, Transports/Logistique/Messagerie Expresse",
    "disponibilite": "La semaine, en journée, En soirée",
    "experience": "7 ans et +",
    "formation": "Oui",
    "certification": "Non",
    "accompagnement": "En présentiel, En visio gréce au bilan digital"
  },
  {
    "nom": "Stotzenbach-Laék",
    "prenom": "Myriam",
    "prestations": "Bilan de compétences, Bilan de compétences pour personnes en situation de handicap, Bilan de compétences pour femmes expatriées, Outplacement",
    "secteur": "Associatif/Arts/culture, Banque/Assurance/Finance, Commerce/Distribution, Communication/Publicité/Médias, Conseil/Consulting, Construction/Immobilier/BTP, Santé/Social, Services, Service Public/Administration/Collectivité, Tourisme/Hétellerie/Restauration/Loisirs",
    "disponibilite": "La semaine, en journée, En soirée, Le samedi",
    "experience": "7 ans et +",
    "formation": "Oui",
    "certification": "Non",
    "accompagnement": "En présentiel, En visio gréce au bilan digital"
  },
  {
    "nom": "Neveux",
    "prenom": "Isabelle",
    "prestations": "Bilan de compétences, Coaching pour les particuliers, Coaching pour les entreprises : coaching de manager, Coaching pour les entreprises : coaching de cadres dirigeants ou hauts potentiels",
    "secteur": "Banque/Assurance/Finance, Commerce/Distribution, Communication/Publicité/Médias, Conseil/Consulting, Enseignement/formation/Animation/Recherche, Industrie, Informatique/Télécom/Digital, Santé/Social, Services, Tourisme/Hétellerie/Restauration/Loisirs",
    "disponibilite": "La semaine, en journée",
    "experience": "7 ans et +",
    "formation": "Oui",
    "certification": "Oui",
    "accompagnement": "En présentiel, En visio gréce au bilan digital"
  },
  {
    "nom": "Charras",
    "prenom": "Aurore",
    "prestations": "Bilan de compétences",
    "secteur": "Associatif/Arts/culture, Banque/Assurance/Finance, Commerce/Distribution, Communication/Publicité/Médias, Informatique/Télécom/Digital, Santé/Social, Services, Service Public/Administration/Collectivité",
    "disponibilite": "La semaine, en journée",
    "experience": "0-2 ans",
    "formation": "Oui",
    "certification": "Non",
    "accompagnement": "En présentiel, En visio gréce au bilan digital"
  },
  {
    "nom": "Sanquer",
    "prenom": "Emilie",
    "prestations": "Bilan de compétences",
    "secteur": "Banque/Assurance/Finance, Commerce/Distribution, Communication/Publicité/Médias, Conseil/Consulting, Enseignement/formation/Animation/Recherche, Santé/Social, Tourisme/Hétellerie/Restauration/Loisirs",
    "disponibilite": "La semaine, en journée, En soirée, Le samedi",
    "experience": "0-2 ans",
    "formation": "Oui",
    "certification": "Non",
    "accompagnement": "En présentiel, En visio gréce au bilan digital"
  },
  {
    "nom": "TIL",
    "prenom": "severine",
    "prestations": "Bilan de compétences",
    "secteur": "Communication/Publicité/Médias, Conseil/Consulting, Service Public/Administration/Collectivité, Tourisme/Hétellerie/Restauration/Loisirs",
    "disponibilite": "La semaine, en journée, En soirée",
    "experience": "0-2 ans",
    "formation": "Oui",
    "certification": "Non",
    "accompagnement": "En présentiel, En visio gréce au bilan digital"
  },
  {
    "nom": "BERGER",
    "prenom": "Clémentine",
    "prestations": "Bilan de compétences",
    "secteur": "Banque/Assurance/Finance, Commerce/Distribution, Communication/Publicité/Médias, Conseil/Consulting, Construction/Immobilier/BTP, Informatique/Télécom/Digital, Ingénierie/Bureau d'étude, Santé/Social, Services, Service Public/Administration/Collectivité",
    "disponibilite": "La semaine, en journée, En soirée, Le samedi",
    "experience": "0-2 ans",
    "formation": "Oui",
    "certification": "Non",
    "accompagnement": "En présentiel, En visio gréce au bilan digital"
  },
  {
    "nom": "KATZ",
    "prenom": "Cecile",
    "prestations": "Bilan de compétences, Outplacement",
    "secteur": "Associatif/Arts/culture, Banque/Assurance/Finance, Commerce/Distribution, Communication/Publicité/Médias, Conseil/Consulting, Construction/Immobilier/BTP, Industrie, Informatique/Télécom/Digital, Ingénierie/Bureau d'étude, Santé/Social, Service Public/Administration/Collectivité, Tourisme/Hétellerie/Restauration/Loisirs",
    "disponibilite": "La semaine, en journée, En soirée, Le samedi",
    "experience": "0-2 ans",
    "formation": "Oui",
    "certification": "Non",
    "accompagnement": "En présentiel, En visio gréce au bilan digital"
  },
  {
    "nom": "francois",
    "prenom": "nathalie",
    "prestations": "Bilan de compétences, Bilan de compétences entrepreneurial, Coaching pour les particuliers, Coaching pour les entreprises : coaching de manager, Coaching pour les entreprises : coaching de cadres dirigeants ou hauts potentiels, Outplacement",
    "secteur": "Associatif/Arts/culture, Banque/Assurance/Finance, Commerce/Distribution, Communication/Publicité/Médias, Construction/Immobilier/BTP, Informatique/Télécom/Digital, Santé/Social, Services, Transports/Logistique/Messagerie Expresse",
    "disponibilite": "La semaine, en journée, En soirée, Le samedi",
    "experience": "2-7 ans",
    "formation": "Oui",
    "certification": "Oui",
    "accompagnement": "En présentiel, En visio gréce au bilan digital"
  },
  {
    "nom": "Rioual",
    "prenom": "Sandrine",
    "prestations": "Bilan de compétences, Accompagnement é la VAE, Coaching pour les particuliers, Coaching pour les entreprises : coaching de manager, Outplacement, formation",
    "secteur": "Associatif/Arts/culture, Banque/Assurance/Finance, Commerce/Distribution, Communication/Publicité/Médias, Conseil/Consulting, Construction/Immobilier/BTP, Enseignement/formation/Animation/Recherche, Industrie, Informatique/Télécom/Digital, Santé/Social, Services, Tourisme/Hétellerie/Restauration/Loisirs, Transports/Logistique/Messagerie Expresse",
    "disponibilite": "En soirée",
    "experience": "7 ans et +",
    "formation": "Non",
    "certification": "Oui",
    "accompagnement": "En visio gréce au bilan digital"
  }
]


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      data : [],
      coachToDisplay : {},
    }
  this.filterInput = this.filterInput.bind(this)
  }
  componentDidMount() {
    var filterToKeep = {}
    if(this.props.filter.length > 0){
      this.props.filter.map((e)=>{
            filterToKeep[e] = null
        })
    }
    this.setState({
      coachToDisplay : {...filterToKeep}
    })
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
    console.log(data)
  }
  dataToExploit(){
    var toGoData = [...testJson];
    toGoData.map((strinData,index)=>{
        toGoData[index].prestations = strinData.prestations.split(',').map(function(item) {
          return item.trim();
        });
    /*
        toGoData[index].secteur = strinData.secteur.split(",").map(function(item) {
          return item.trim();
        });
        toGoData[index].disponibilite = strinData.disponibilite.split(",").map(function(item) {
          return item.trim();
        });
        toGoData[index].accompagnement = strinData.accompagnement.split(",").map(function(item) {
          return item.trim();
        });*/
    })
  return toGoData
  }
  render(){
      return(
        <div className="App">
          <header className="App-header sectionWrapper">
              <p>Coach 5aconseil</p>
          </header>
          <section className="App-filter sectionWrapper">
            <Filter data={this.dataToExploit()} filterInput={this.filterInput} returninFilter={this.state.coachToDisplay} filtre={['prestations','secteur','disponibilite','experience','formation','certification','accompagnement']}/>
          </section>
          <section className="App-list sectionWrapper">

          </section>
        </div>
      );
  }
}

export default App;
