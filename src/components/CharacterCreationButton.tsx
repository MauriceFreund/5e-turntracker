import React from "react"
import { Character } from "../model/character"

interface CharacterCreationButtonProps {
  onClick(): void
}

export default function CharacterCreationButton(props: CharacterCreationButtonProps) {

  const {onClick} = props

  return (
    <button 
        onClick={onClick}
        className="
          bg-red-600 
          hover:bg-red-400 
          active:bg-red-800 
          w-full
          rounded-sm 
          p-2
          text-center
          text-white 
          shadow">New Character</button>
  )
}