import { Injectable } from '@nestjs/common';

import { Note } from './notes.model';
import data from '../db/notes.json';

@Injectable()
export class NotesService {
  notes: Note[] = data;

  getAllNotes(): Note[] {
    return this.notes;
  }
}
