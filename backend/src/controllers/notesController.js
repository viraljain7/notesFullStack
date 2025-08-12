import Note from "../models/noteModel.js";




export async function getAllNotes (req, res) {

    try {
        const notes=await Note.find().sort({createdAt:-1});
        res.status(200).json(notes);
    } catch (error) {
        console.error("GetAllNotes Controller ERROR");
        res.status(500).json({message:"Internal Server Error"})
    }
    

    
    // res.status(200).json({message:"All Notes"});


}


export const addNotes = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ error: "Title and content are required" });
    }

    const newNote = await Note.create({ title, content });

    console.log("✅ New note saved:", newNote);

    return res.status(201).json({
      message: "Note created successfully",
      note: newNote
    });
  } catch (err) {
    console.error("addNotes Controller ERROR", err);
    return res.status(500).json({ error: err.message });
  }

    // res.status(200).json({message:" New note saved"});
};



export async function updateSingleNotes(req, res) {
    try {
        const { id } = req.params;
        const { title, content } = req.body;
        
        const note = await Note.findByIdAndUpdate(
            id,
            { title, content },
            { new: true, runValidators: true } // return updated doc & validate schema
          );
        
        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        }
        note.title = title || note.title;
        note.content = content || note.content;
        return res.status(201).json({
            message: "Note updated successfully",
            "updated  note":note
          });
    
    } catch (error) {
        console.error("updateSingleNotes Controller ERROR", error);
        return res.status(500).json({ error: err.message });
      }
    // res.status(200).json({message:"ID Notes Updates"});

}



export async function getSingleNotes(req, res) {
    const { id } = req.params;
    const note = await  Note.findById(id);
    if (!note) {
        return res.status(404).json({ message: 'Note not found' });
    }
    res.json(note);


    // res.status(200).json({message:"ID Notes Get"});

}





export async function deleteSingleNotes(req, res) {
    try {
        const { id } = req.params;
        const deletedNote = await Note.findByIdAndDelete(id);
        if (!deletedNote) {
            return res.status(404).json({ message: 'Note not found' });
        }
        return res.status(200).json({
            message: "Note deleted successfully",
          });
    } catch (error) {
        console.error("deleteSingleNotes  Controller ERROR", error);
        return res.status(500).json({ error: err.message });
      }



    // res.status(200).json({message:"ID Notes Deleted"});

};


