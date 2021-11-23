import * as path from 'path';
import * as util from 'util';
import * as fs from 'fs';

import { Note } from 'src/notes/notes.model';

export class FsService {
  constructor(private dbPath: string = path.join('src', 'db', 'notes.json')) {}

  writeToFile(note: Note[]) {
    const writeFilePromisify = util.promisify(fs.writeFile);
    const noteJson = JSON.stringify(note);
    writeFilePromisify(this.dbPath, noteJson);
  }
}
