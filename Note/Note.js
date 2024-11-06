// JavaScript to manage the notes
document.addEventListener('DOMContentLoaded', function () {
    const addNoteBtn = document.getElementById('add-note-btn');
    const noteTextArea = document.getElementById('note-text');
    const notesContainer = document.getElementById('notes-container');

  
    function createNote(content) {
        const note = document.createElement('div');
        note.classList.add('note');
        
        const noteContent = document.createElement('p');
        noteContent.textContent = content;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            notesContainer.removeChild(note);
        });
        
        note.appendChild(noteContent);
        note.appendChild(deleteBtn);
        
        notesContainer.appendChild(note);
    }

    // Event listener for Add Note button
    addNoteBtn.addEventListener('click', function () {
        const noteContent = noteTextArea.value.trim();

        // Check if there's any text in the textarea
        if (noteContent) {
            createNote(noteContent);
            noteTextArea.value = ''; 
        } else {
            alert('Please write something in the note!');
        }
    });


    noteTextArea.addEventListener('keypress', function (e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            addNoteBtn.click();
            e.preventDefault();
        }
    });
});
