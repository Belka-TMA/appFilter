import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
}));

function TempForCoach(props){
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
        <Card className={'tullet'}>
           <CardHeader className='main-section-tullet tullet-header' avatar={<Avatar alt="Remy Sharp" src="/images.jpeg" className={'section avatara'} />} />
            <CardContent className='main-section-tullet tullet-content'>
              <div className={'wrapper-header-subtullet'}>
                <div className={'section coach'}><h5>{props.don.nom} {props.don.prenom} </h5></div>
                <div className={'section accompagnement'}>{props.don.accompagnement.map((el,i)=>{return <p key={i}>{el}</p>})}</div>
                <div className={'section formation'}>{props.don.certification === "Oui" ? (<p className="green">Certifiée coaching</p>):(<p className="red">Non Certifiée</p>)}</div>
                <div className={'section experience'}>{props.don.experience}</div>
                <div className={'section'}>
                <Fab variant="extended" aria-label="like" className={'buttonAppointment'}>
                        Prendre rendez vous
                  </Fab>
                </div>
            </div>
            <Collapse className={'collapse'} in={expanded} timeout="auto" unmountOnExit>
                <div className={'wrapper-collapse'}>
                    <ul className={"section prestations"}>
                        <div className="subsection">
                            <h3>Prestations</h3>
                        </div>
                    {props.don.prestations.map((el,i)=>{return <li key={i}>{el}</li>})}
                    </ul>
                    <ul className={'section secteurs'}>
                      <div className="subsection">
                          <h3>Secteurs</h3>
                      </div>
                      {props.don.secteur.map((el,i)=>{return <li key={i}>{el}</li>})}
                    </ul>
                </div>
            </Collapse>
            </CardContent>
            <CardActions className='main-section-tullet tullet-actions'>
                   <IconButton
                     className={clsx(classes.expand, {
                       [classes.expandOpen]: expanded,
                     })}
                     onClick={handleExpandClick}
                     aria-expanded={expanded}
                     aria-label="show more"
                   >
                     <ExpandMoreIcon />
                   </IconButton>
             </CardActions>

        </Card>)

}



function TulletSection(props){
    if(typeof props.content === 'string'){
        return <div className={"tulletSection section-"+props.title}>{props.content}</div>
    }else{
        return (<ul className={"tulletSection section-"+props.title}>
            {props.content.map((el,i)=>{
                return <li key={i}>{el}</li>
              })}
        </ul>)
    }
}
/*
function TulletContent(props) {
  if (props.children) {
      return props.children
  }
  let dataTo = Object.keys(props.data).map((element,i)=>{
      return <TulletSection key={i} title={element} content={props.data[element]} />
    })
  return <div className="tullet">
    {dataTo}
  </div>
}
*/

class TulletContent extends React.Component {
  constructor(props){
    super(props)

  }
  render() {
    let dataTo = Object.keys(this.props.data).map((element,i)=>{
        return( <TempForCoach key={i} title={element} content={this.props.data[element]} />)
      })
    return (
      <div className="tullet">
        {dataTo}
      </div>
      )
    }
}

class Tullets extends React.Component {
  constructor(props){
    super(props)

  }
  render() {
      if(typeof this.props.filteredData === "string"){
        return (
          <div className={'tulletWrapper'}>
              <p> Aucun Coach ne correspond à aux critères sélectionnés</p>
          </div>)
      }else if(
        this.props.filteredData.length === 0 ){
        return (
        <div className={'tulletWrapper'}>
          {this.props.content.map((dataToExploit,i)=>{
              if (dataToExploit.disponibilite.indexOf(this.props.type) !== -1){
                  return <TempForCoach type={this.props.type} key={i} don={dataToExploit} />
              }
          })}
        </div>)

      }else{
        return (
        <div className={'tulletWrapper'}>
          {this.props.filteredData.map((dataToExploit,i)=>{
              if (dataToExploit.disponibilite.indexOf(this.props.type) !== -1 ){
                return <TempForCoach type={this.props.type} key={i} don={dataToExploit} />
             }
          })}
        </div>)
      }
    }
}
export { Tullets, TulletContent, TulletSection};
