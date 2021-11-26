const notesGrid: HTMLElement|null = document.querySelector('tbody');

getNotes();

async function getNotes() { 
    await fetch('http://localhost:5000/')
    .then(res => res.json())
    .then(data => {        
        data.forEach((note: { id: string; title: string; description: string; author: string; date: string; }) => {
            const noteElement = createNoteElement(note.id, note.title, note.description, note.author, note.date);
            notesGrid?.appendChild(noteElement);
        });
    });
};

function createNoteElement(id: string, title: string, description: string, author: string, date: string): HTMLDivElement {
    const row = document.createElement('tr');

    const idTd = document.createElement('td');
    const titleTd = document.createElement('td');
    const descriptionTd = document.createElement('td');
    const authorTd = document.createElement('td');
    const dateTd = document.createElement('td');

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
