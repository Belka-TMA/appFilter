import React from 'react';







function TulletSection(props){
    return <div className="tulletSection">{props.info}</div>
}

function TulletContent(props) {
  console.log(props.data)

  if (props.children) {
      return props.children
  }
  let dataTo = Object.keys(props.data).map((element,i)=>{
      return <TulletSection key={i}  info={props.data[element]} />
    })
  return <div className="tullet">
    {dataTo}
  </div>
}

class Tullets extends React.Component {
  constructor(props){
    super(props)

  }
  render() {

    return (<div className="tulletWrapper">{this.props.content.map((data,i)=>{
              return React.Children.map(this.props.children, (child, i) => {
                return React.cloneElement(child, {
                    data:data
                  })
              })

          })}</div>)
    }
  }



export { Tullets, TulletContent};
