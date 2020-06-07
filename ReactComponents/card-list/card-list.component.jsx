import React from 'react'
import './card-list.style.css'
import {Card } from '../card/card.component'


export const   CardList = (propos) => (
 <div className = 'card-list'>
        {
          propos.monsters.map(monster => <Card key={monster.id} monster = {monster}/> )
        }
    </div>
);