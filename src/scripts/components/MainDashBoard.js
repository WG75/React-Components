import React, { Component } from 'react'
import Header from './Header'
import ListItem from './ListItem'
import List from './List'
import Icon from './Icon'
import CDashboard from './CDashboard'
import {getInlineSvg} from '../utili/getinlinesvg'

const svgFiles = ['devices', 'electro', 'fire', 'gas', 'motor', 'search', 'service', 'water']



class MainDashBoard extends React.Component{

  render(){

    const {
          devices,
          electro,
          fire,
          gas,
          motor,
          search,
          service,
          water
        } = getInlineSvg(svgFiles)


    return (
      <CDashboard>
        <Header text="portfolio" icon={search}/>
        <List>
          <ListItem textLabel="Wassermesstechnik" icon={water}/>
          <ListItem textLabel="messtechnik fur thermische energie" icon={fire}/>
          <ListItem textLabel="gasmesstechnik" icon={gas}/>
          <ListItem textLabel="strommesstechnik" icon={electro}/>
          <ListItem textLabel="system & software" icon={devices}/>
          <ListItem textLabel="services" icon={service}/>
          <ListItem textLabel="motor controls" icon={motor}/>
        </List>
      </CDashboard>
    )
  }
}

export default MainDashBoard
