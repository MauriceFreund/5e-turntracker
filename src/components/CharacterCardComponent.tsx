import React, { useMemo } from 'react'
import { Character } from '../model/character'

interface CharacterCardComponentProps {
  character: Character
}


export default function CharacterCardComponent(props: CharacterCardComponentProps) {

  const {character} = props

  const bgColor = useMemo(() => {
    return character.isCharacterActive ? "bg-green-500" : "bg-white"
  }, [character.isCharacterActive])
  
  return (
    <div className={bgColor + " shadow-lg p-3 flex justify-center"}>
      <div className="w-4/6">
        <div className="flex justify-between">
          <span className="font-bold">Name: </span>
          <span>{character.name}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-bold">Initiative roll: </span>
          <span>{character.initiativeRoll}</span>
        </div>
      </div>
    </div>
  )
}