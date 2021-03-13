import React from 'react'
import { Character } from '../model/character'

interface CharacterCardComponentProps {
  character: Character
}


export default function CharacterCardComponent(props: CharacterCardComponentProps) {

  const {character} = props
  
  return (
    <div className="bg-white shadow-lg p-3 flex justify-center">
      <div className="w-4/6">
        <div className="flex justify-between">
          <span className="font-bold">Name: </span>
          <span>{character.name}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-bold">InitiativeRoll: </span>
          <span>{character.initiativeValue}</span>
        </div>
      </div>
    </div>
  )
}