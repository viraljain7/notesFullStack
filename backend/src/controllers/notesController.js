export const addNotes=(req, res) => {
        // const { title, content } = req.body;
        // const id = notes.length + 1;
        // const newNote = { id, title, content };
        // notes.push(newNote);
        // res.status(201).json(newNote);
    
    
    
        res.status(201).json({message:"new Notes Created"});
    
    
}



export const getAllNotes= (req, res) => {
    // res.json(notes);

    
    res.status(200).json({message:"All Notes"});


}


export const getSingleNotes=(req, res) => {
    // const { id } = req.params;
    // const note = notes.find(note => note.id === parseInt(id));
    // if (!note) {
    //     return res.status(404).json({ message: 'Note not found' });
    // }
    // res.json(note);


    res.status(200).json({message:"ID Notes Get"});

}


export const updateSingleNotes=(req, res) => {
    // const { id } = req.params;
    // const { title, content } = req.body;
    // const note = notes.find(note => note.id === parseInt(id));
    // if (!note) {
    //     return res.status(404).json({ message: 'Note not found' });
    // }
    // note.title = title || note.title;
    // note.content = content || note.content;
    // res.json(note);


    res.status(200).json({message:"ID Notes Updates"});

}



export const deleteSingleNotes=(req, res) => {
    // const { id } = req.params;
    // const noteIndex = notes.findIndex(note => note.id === parseInt(id));
    // if (noteIndex === -1) {
    //     return res.status(404).json({ message: 'Note not found' });
    // }
    // notes.splice(noteIndex, 1);
    // res.status(204).send();




    res.status(200).json({message:"ID Notes Deleted"});

};


