import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find().sort({createdAt:-1})  //
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
export async function getNoteById(req,res) {
  try {
    const note =  await Note.findById(req.params.id)
    if(!note) return res.status(404).json({message:"Note not found!"})
      res.json(note)
  } catch (error) {
      console.error("Error in getNoteById controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
  
}
export  async function createNotes(req, res) {
  try {
    const{title,content} = req.body
    const newNote = new Note({title,content})
    await newNote.save()
    res.status(201).json({message:"Note created successfully"})
  } catch (error) {
    console.log("erro in notecreated",error)
    res.status(500).json({message:"Internal server Error"})
  }
};



export  async function  updateNote(req, res){
   try{  const {title,content} =  req.body
     await Note.findByIdAndUpdate(req.params.id,{title,content},{new:true})
     if(!updateNote) return res.status(404).json({message:"Note not found"})
     res.status(200).json({message:"Note updated successfully"})
    }catch(error){
      console.log("Error in Noteupdate",error)
      res.status(500).json("Internal server Error")
    }
  
};








export async function deleteNote(req, res){
  try{
    const deletedNote = await  Note.findByIdAndDelete(req.params.id)
      if(!deletedNote) return res.status(404).json({messag:"Note not found"}) 
        res.json({message:"Note delted successfully"})
      }catch(error){
        console.log("Error in deleteNote",error)
          res.status(500).json("Internal server Error")
      }
};
