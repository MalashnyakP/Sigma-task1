import { Injectable } from '@nestjs/common';
import { FsService } from 'src/services/fs.service';

import { Note } from './notes.model';
import data from '../db/notes.json';


@Injectable()
export class NotesService {
    constructor(private readonly fsService: FsService) {}
    notes: Note[] = data;    
    path;

    insertNote(body: string): Note {
        const newNote = new Note(new Date().toString(), body);

        this.notes.push(newNote);

        this.fsService.writeToFile(this.notes);

        return newNote;
    }

    putNote(id: string, body: string) {
        const updatedNote =  new Note(id, body);

        this.notes = this.notes.map((note) => {      
           return note.id === id ? updatedNote : note;             
        });
        
        this.fsService.writeToFile(this.notes);
    }

    getAllNotes(): Note[] { 
        return this.notes;
    }

    deleteNote(id: string) {
        this.notes = this.notes.filter((note) => {
            return note.id !== id;
        });

        this.fsService.writeToFile(this.notes);
    }
}