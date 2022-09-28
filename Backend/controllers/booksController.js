const Book = require("../model/Book");

const getAllBooks=async(req,res,next)=>{
    let books;
try{
    books=await Book.find();
}catch(err){
    console.log(err);
}
if(!books){
    return res.status(404).json({message:"No products found"});
}
return res.status(200).json({books});

};


const addBook = async (req, res, next) => {
    const { name, author, description, price, available, image} = req.body;
    let book;
    try {
      book = new Book({
        name,
        author,
        description,
        price,
        available,
        image

      });
      await book.save();
    } catch (err) {
      console.log(err);
    }
  
    if (!book) {
      return res.status(500).json({ message: "Unable To Add" });
    }
    return res.status(201).json({ book });
  };


  const getById=async(req,res,next)=>{
      const id=req.params.id;
      let book;
      try{
        book=await Book.findById(id)
      }catch(err){
        console.log(err);
      }
      if(!book){
        return res.status(404).json({ message: "No Book found" });
      }
      return res.status(201).json({ book });
  }


  const updateBook = async (req, res, next) => {
    const id=req.params.id;
    const { name, author, description, price, available, image} = req.body;
    let book;
    try {
      book = await Book.findByIdAndUpdate(id,{
        name,
        author,
        description,
        price,
        available,
        image
      });
      book=await book.save();
    } catch (err) {
      console.log(err);
    }
  
    if (!book) {
      return res.status(404).json({ message: "Unable To Add" });
    }
    return res.status(200).json({ message:"Product updated succesfully" });
  };


  const deleteBook=async(req,res,next)=>{
    const id=req.params.id;
    let book;
    try{
      book=await Book.findByIdAndRemove(id)
    }catch(err){
      console.log(err);
    }
    if(!book){
      return res.status(404).json({ message: "unable to delete book by this id it is not right" });
    }
    return res.status(201).json({ message:"Product succesfully deleted" });
}


exports.getById=getById;
exports.getAllBooks=getAllBooks;
exports.addBook=addBook;
exports.updateBook=updateBook;
exports.deleteBook=deleteBook;