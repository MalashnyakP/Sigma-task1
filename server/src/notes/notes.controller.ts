import { Controller, Get } from '@nestjs/common';
import { Note } from './notes.model';

import { NotesService } from './notes.service';

@Controller()
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get()
  getAllNotes(): Note[] {
    return this.notesService.getAllNotes();
  }
}
