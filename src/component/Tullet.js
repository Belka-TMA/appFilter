import React from 'react';

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
        return( <TulletSection key={i} title={element} content={this.props.data[element]} />)
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
    this.state={
      filterOn : []
    }
  this.testFonction = this.testFonction.bind(this)
  }
  testFonction(){
    let filterToAdd = [];
     Object.keys(this.props.filters).map((key,i)=>{
        if(this.props.filters[key] != null){
          filterToAdd.push(key)
        }
    })
    return filterToAdd
  }

  render() {
    let filterToAdd = this.testFonction()
    let content = this.props.content


    let dataoToReturn = content.filter((el,index)=>{
      for(let i = 0; i < filterToAdd.length; i++){
          return el[filterToAdd[i]].indexOf(this.props.filters[filterToAdd[i]]) != -1
        }

    })

  console.log(dataoToReturn)





















    return (
        <div className="tulletWrapper">
          {
            this.props.content.map((data,i)=>{
              return React.Children.map(this.props.children, (child, i) => {
                return React.cloneElement(child, {
                    data:data
                  })
              })

          })

          }
        </div>
        )
    }
}



export { Tullets, TulletContent, TulletSection};
