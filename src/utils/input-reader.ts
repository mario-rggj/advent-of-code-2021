import fs from 'fs'

export class InputReader {
  readLines (filepath: string): string[] {
    return fs.readFileSync(filepath).toString().split('\n')
  }
}
