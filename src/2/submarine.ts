import { Position } from './position'
import { Movement } from './movement'
import { DIRECTIONS } from './directions'

export class Submarine {
  private readonly position: Position = {
    horizontal: 0,
    depth: 0,
    aim: 0
  }

  move (movementInstructions: Movement[]): number {
    movementInstructions.forEach(movementInstruction => {
      if (movementInstruction.direction === DIRECTIONS.down) {
        this.position.depth += movementInstruction.distance
      } else if (movementInstruction.direction === DIRECTIONS.up) {
        this.position.depth -= movementInstruction.distance
      } else {
        this.position.horizontal += movementInstruction.distance
      }
    })

    return this.position.depth * this.position.horizontal
  }

  moveWithAim (movementInstructions: Movement[]): number {
    movementInstructions.forEach(movementInstruction => {
      if (movementInstruction.direction === DIRECTIONS.down) {
        this.position.aim! += movementInstruction.distance
      } else if (movementInstruction.direction === DIRECTIONS.up) {
        this.position.aim! -= movementInstruction.distance
      } else {
        this.position.horizontal += movementInstruction.distance
        this.position.depth += this.position.aim! * movementInstruction.distance
      }
    })

    return this.position.depth * this.position.horizontal
  }
}
