import {
  Controller,
  Body,
  Post,
  Put,
  Get,
  Param,
  Delete,
} from '@nestjs/common';
import { Note } from './notes.model';

import { NotesService } from './notes.service';

@Controller()
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  addNote(@Body('body') body: string): Note {
    return this.notesService.insertNote(body);
  }

  @Put('/:id')
  updateNode(@Param('id') id: string, @Body('body') body: string) {
    this.notesService.putNote(id, body);
  }

  @Delete('/:id')
  deleteNote(@Param('id') id: string) {
    this.notesService.deleteNote(id);
  }

  @Get()
  getAllNotes() {
    return this.notesService.getAllNotes();
  }
}
