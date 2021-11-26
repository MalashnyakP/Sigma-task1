let set = [{
    "id": "1",
    "title": "First",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam iaculis semper lacinia. Aliquam porta tortor sit amet tortor lobortis, sit amet efficitur tortor elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus nisi est, quis placerat neque pretium at. Ut eros turpis, vestibulum id enim at, sagittis rhoncus massa. Aenean ultricies mollis elementum. Proin massa velit, semper vel faucibus a, tincidunt eget ipsum. Nullam ultrices tellus a nibh interdum consequat. Sed tristique odio enim, quis interdum odio mollis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras dolor sapien, elementum sed fringilla et, feugiat at lectus.",
    "author": "Pavlo",
    "date": "11/11/2021 12:11:25"
},
{
    "id": "2",
    "title": "Do chores",
    "description": ". Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    "author": "Pavlo",
    "date": "11/11/2021 14:54:15"
},
{
    "id": "3",
    "title": "Some more chores",
    "description": "Lorem ipsum",
    "author": "Pavlo",
    "date": "11/11/2021 15:30:02"
},
{
    "id": "4",
    "title": "Sample",
    "description": "s massa. Aenean ultricies mollis elementum. Proin massa velit, semper vel faucibus a, tincidunt eget ipsum. Nullam ultrices tellus a nibh interdum conseq",
    "author": "Andriy",
    "date": "12/11/2021 09:55:44"
},
{
    "id": "5",
    "title": "Meeting",
    "description": "Attend meeting",
    "author": "Yuriy",
    "date": "12/11/2021 16:34:15"
},
{
    "id": "6",
    "title": "Lorem Ipsum",
    "description": "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Etiam iaculis semper lacinia. Aliquam porta tortor sit amet tortor lobortis, sit amet efficitur tortor elementum",
    "author": "Pavlo",
    "date": "13/11/2021 17:15:39"
},
{
    "id": "7",
    "title": "To do task",
    "description": "Complete task",
    "author": "Oleg",
    "date": "15/11/2021 12:22:55"
},
{
    "id": "8",
    "title": "Mockup",
    "description": "Create site mockup",
    "author": "Ira",
    "date": "16/11/2021 16:34:26"
},
{
    "id": "9",
    "title": "Even more chores",
    "description": "Donec sit amet sapien vitae tortor cursus vehicula at tristique dui. Nulla facilisi. Aliquam ac bibendum diam, eu sodales erat. Sed aliquet pretium tortor, vehicula mollis velit pellentesque vel. Morbi tincidunt ipsum sed nisl tristique hendrerit. Aenean suscipit id mi quis venenatis. Nam nec sagittis mi. Vestibulum placerat quis sem a ullamcorper. Nullam eu facilisis massa. Nullam ut condimentum nunc, eget rhoncus ex. Curabitur bibendum libero a erat rhoncus, ac varius tortor imperdiet. Ut sodales faucibus arcu. Ut vestibulum aliquet sagittis. Sed aliquam, ante eu pellentesque suscipit, neque metus sollicitudin lacus, ut aliquam est metus sit amet augue. Cras volutpat feugiat laoreet. Morbi eu sapien ornare, volutpat augue sed, ultrices leo.",
    "author": "Pavlo",
    "date": "18/11/2021 09:00:54"
},
{
    "id": "10",
    "title": "Create dummy data",
    "description": "Nullam ultrices tellus a nibh interdum consequat. Sed tristique odio enim, quis interdum odio mollis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras dolor sapien, elementum sed fringilla et, feugiat at lectus.",
    "author": "Pavlo",
    "date": "19/11/2021 12:03:25"
}];

const notesGrid: HTMLElement|null = document.querySelector('tbody');

if (notesGrid) {
    getNotes().forEach((note) => {    
        const noteElement = createNoteElement(note.id, note.title, note.description, note.author, note.date);
        notesGrid.appendChild(noteElement);
    });
}


function getNotes() {    
    return set;
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
