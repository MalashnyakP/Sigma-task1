import type { Note } from './note.model';

class Main {
    public static main(): void {
        class NotesGridCreator {
            constructor(
                private readonly headerSelector: string, 
                private readonly gridSelector: string,
                private readonly serverUrl: string ) {}

            private fetchNotes(): Promise<Note[]> {
                return fetch(this.serverUrl).then(res => res.json());
            }

            private createHeaderElement (note: Note): HTMLTableRowElement {
                const headerRow = document.createElement('tr');

                Object.keys(note).forEach(key => {
                    const tdHeader = document.createElement('td');
                    tdHeader.setAttribute('class', 'grid-header'); 
                    tdHeader.textContent = key.charAt(0).toUpperCase() + key.slice(1);
                    headerRow.appendChild(tdHeader);
                });
                
                return headerRow;
            }
            private createNoteElement (note: Note): HTMLTableRowElement {
                const headerRow = document.createElement('tr');
                const row = document.createElement('tr');
                row.setAttribute('class', 'grid-row');

                for (const [key, value] of Object.entries(note)) {
                    const td = document.createElement('td');
                    td.setAttribute('class', 'grid-data');
                    
                    if (key === 'description' || key === 'date') {
                        const tooltip = document.createElement('my-tooltip');
                        
                        const valueToAppend = key === 'date' ? value.split(' ')[0] : value;

                        tooltip.setAttribute('tooltip-text', value);
                        tooltip.setAttribute('visible-text', valueToAppend);
            
                        td.appendChild(tooltip);
                        row.appendChild(td);
                        continue;
                    }

                    td.textContent = value;
                    row.appendChild(td);
                  }
                 
                return row;
            }

            async renderTable() {
                const noteHeader: HTMLElement|null = document.querySelector(this.headerSelector);

                const notesGrid: HTMLElement|null = document.querySelector(this.gridSelector);

                if (!notesGrid || !noteHeader) {
                    throw new Error('INT: There is no such element on a page.')
                }

                const gridData = await this.fetchNotes();

                noteHeader.appendChild(this.createHeaderElement(gridData[0]));
                
                gridData.forEach(note => {
                    notesGrid.appendChild(this.createNoteElement(note));
                });
            }
        }

        new NotesGridCreator('thead', 'tbody', 'http://localhost:5000/').renderTable();
    }
}

Main.main();
