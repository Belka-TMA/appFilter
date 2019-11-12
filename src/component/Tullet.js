import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
function TempForCoach(props){
  return(<div className={'tullet'}>
             <Avatar alt="Remy Sharp" src="/images.jpeg" className={'section avatara'} />
              <div className={'section coach'}><h5>{props.don.nom} {props.don.prenom} </h5>{props.don.prestations.map((el,i)=>{return <p key={i}><i>{el}</i></p>})}</div>
              <div className={'section accompagnement'}>{props.don.accompagnement.map((el,i)=>{return <p key={i}>{el}</p>})}</div>
              <div className={'section secteurs'}>{props.don.secteur.map((el,i)=>{return <p key={i}>{el}</p>})}</div>
              <div className={'section'}><p>{props.don.formation}</p><p>{props.don.certification}</p></div>
              <div className={'section'}>
              <Fab variant="extended" aria-label="like" className={'buttonAppointment'}>
                      Prendre rendez vous
                </Fab>
              </div>
        </div>)
}



function TulletSection(props){
    if(typeof props.content === 'string'){
        return <div className={"tulletSection section-"+props.title}>{props.content}</div>
    }else{
        return <ul className={"tulletSection section-"+props.title}>
            {props.content.map((el,i)=>{
                return <li key={i}>{el}</li>
              })}
        </ul>
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

    return(<div className={'tulletWrapper'}>


{            this.props.filteredData.length === 0 ?
            (
              this.props.content.map((dataToExploit,i)=>{
                return  <TempForCoach key={i} don={dataToExploit} />
              })
            )
            :
            (
            this.props.filteredData.map((dataToExploit,i)=>{
                return <TempForCoach key={i} don={dataToExploit} />
              })
            )

}
</div>
)


    }
}
export { Tullets, TulletContent, TulletSection};
