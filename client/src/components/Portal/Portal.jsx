import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const portalRoot = document.getElementById('portal')
// export default function Portal({ children }) {

//   const el = document.getElementById("portal");
//   return ReactDOM.createPortal(children, el);
// }

export default class Portal extends Component {


constructor(){
  super()
  this.el = document.createElement('div')
}
 
 componentDidMount = () =>{
  portalRoot.appendChild(this.el)
 }
 
 componentWillUmount = ()=> {
portalRoot.removeChild(this.el)
 }

 render(){

const { children} =this.props;
return ReactDOM.createPortal(children,this.el)


 }

 



}
