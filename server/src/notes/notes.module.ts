import { Module } from '@nestjs/common';
import { FsService } from 'src/services/fs.service';

import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';

@Module({
  controllers: [NotesController],
  providers: [NotesService, FsService],
})
export class NotesModule {}
