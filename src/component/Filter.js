import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';





class Filter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        context : {},
        loading : true
    }
  }
  formattingData(data){
      var contextToSend = {};
      data.map((user,index)=>{ //Boucler dans tout les objet
        Object.keys(user).map((key,index)=>{ //Boucler dans chaque cle de chaque objet
          if(typeof contextToSend[key] !== 'undefined'){ //Vérifie que si la clé est déjà presente ou non
          if(Array.isArray(user[key])){
            user[key].forEach((el)=>{
              if(contextToSend[key].find((value)=>{return el === value})){
                }else{
                contextToSend[key].push(el)
              }
            })
          }else{
            if(contextToSend[key].find((value)=>{return user[key] === value})){
            }else{
              contextToSend[key].push(user[key])
            }
          }
          }else{
            contextToSend[key] = [];
            if(Array.isArray(user[key])){
              user[key].forEach((el)=>{
                if(contextToSend[key].find((value)=>{return el === value})){
                  }else{
                  contextToSend[key].push(el)
                }
              })
            }else{
              contextToSend[key].push(user[key])
            }
          }
        },this)
      },this)
      return contextToSend
  }
  returnFilter(filt,value){
    let filterModified = {...this.props.returninFilter,[filt] : value}
    this.props.filterInput(filterModified)
  }
  componentDidMount() {
    if(this.state.loading && this.props.data.length != 0){
      this.setState({
        context : this.formattingData(this.props.data),
        loading : false,
      });
    }else{
        console.log('loading')
    }

  }
  render(){

    return(
      <div id="filter-wrapper"><p className="filter-title">Filtrer par :</p>
      <div id='filterMainKing'>
        {
            this.state.loading ?
              (<p>loading</p>)
            :
            this.props.filtre.map((filter,index)=>{
            return (

            <Autocomplete
              className='autocomplete'
              key={index}
              onChange={(filter,value)=>{ this.returnFilter(this.props.filtre[index],value) }}
              options={filter === "disponibilite" ? ['La semaine', 'Le samedi'] : this.state.context[filter]}
              style={{ width: 300, color : 'white' }}
              renderInput={params => (
                <TextField
                  {...params}
                  className="cacahuete"
                  label={filter}
                  variant="outlined"
                  fullWidth
                />
              )}
            />)},this)
        }
        </div>
      </div>
    )

  }
}

export default Filter;
