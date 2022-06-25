import { Movement } from './movement'
import { DIRECTIONS } from './directions'
import { Submarine } from './submarine'

const makeSut = () => {
  const sut = new Submarine()
  return {
    sut
  }
}

describe('Submarine', () => {
  describe('Given a submarine', () => {
    describe('When it receives an array of movement instructions', () => {
      it('Then it should move accordingly', () => {
        const { sut } = makeSut()
        const movementInstructions: Movement[] = [
          {
            direction: DIRECTIONS.down,
            distance: 10
          },
          {
            direction: DIRECTIONS.forward,
            distance: 20
          },
          {
            direction: DIRECTIONS.up,
            distance: 5
          }
        ]

        const position = sut.move(movementInstructions)

        expect(position).toEqual(100)
      })
    })
  })
})
