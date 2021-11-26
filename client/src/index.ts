import type { Note } from './note.model';

class Main {
    public static main(): void {
        class NotesGridCreator {
            constructor(private readonly gridSelector: string, private readonly serverUrl: string) {}

            private fetchNotes(): Promise<Note[]> {
                return fetch(this.serverUrl).then(res => res.json());
            }

            private createNoteElement (note: Note) : HTMLTableRowElement {
                const { id, title, author, description, date } = note;

                const row = document.createElement('tr');
                row.setAttribute('class', 'grid-row');

                const idTd = document.createElement('td');
                const titleTd = document.createElement('td');
                const descriptionTd = document.createElement('td');
                const authorTd = document.createElement('td');
                const dateTd = document.createElement('td');

                idTd.setAttribute('class', 'grid-data');
                titleTd.setAttribute('class', 'grid-data');
                descriptionTd.setAttribute('class', 'grid-data');
                authorTd.setAttribute('class', 'grid-data');
                dateTd.setAttribute('class', 'grid-data');
            
                idTd.textContent = id;
                titleTd.textContent = title;
                authorTd.textContent = author;
            
                const descriptionTooltip = document.createElement('my-tooltip');
                descriptionTooltip.setAttribute('tooltip-text', description);
                descriptionTooltip.setAttribute('visible-text', description);
            
                descriptionTd.appendChild(descriptionTooltip);
            
                const dateTooltip = document.createElement('my-tooltip');
                dateTooltip.setAttribute('tooltip-text', date);
                dateTooltip.setAttribute('visible-text', date.split(' ')[0]);
            
                dateTd.appendChild(dateTooltip);
            
                row.appendChild(idTd);
                row.appendChild(titleTd);
                row.appendChild(descriptionTd);
                row.appendChild(authorTd);
                row.appendChild(dateTd);
            
                return row;
            }

            async renderTable() {
                const notesGrid: HTMLElement|null = document.querySelector(this.gridSelector);

                if (!notesGrid) {
                    throw new Error('INT: There is no such element on a page.')
                }

                const gridData = await this.fetchNotes();

                gridData.forEach(note => {
                    notesGrid.appendChild(this.createNoteElement(note));
                });
            }
        }

        new NotesGridCreator('tbody', 'http://localhost:5000/').renderTable();
    }
}

Main.main();
