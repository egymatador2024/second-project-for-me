import React, { Component } from 'react';
import './style.css'
import axios from'axios'

  class Work extends Component{
      state = {
        works :[]
      }
      componentDidMount(){
        axios.get('js/data.json').then(res =>{this.setState({works: res.data.works})})
      }
      render(){
        const {works}=this.state;
        const worksList = works.map((workItem)=>{
         return(
          <div className="part first"key={workItem.id}>
          <i className={workItem.icon_name}></i>
          <h4 className={workItem.title}>Mobile Ux</h4>
          <hr className="line" />
          <p className="part-desc">
            {workItem.body}
          </p>
      </div>
         )
        })
      return(
        <div className="work">
        <div className="container">
            <h2 className="work-title"><span>My</span> Work</h2>
            {worksList}
         </div>

    </div>
      )
    }
  } 
  


export default Work;