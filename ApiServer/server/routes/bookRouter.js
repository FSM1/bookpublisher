import express from 'express';
import Book from '../models/bookModel';

const bookRouter = express.Router();

bookRouter.use('/:bookId', (req, res, next) => {
    Book.findById( req.params.bookId, (err,book)=>{
        if(err)
            res.status(500).send(err)
        else {
            req.book = book;
            next()
        }
    });
})

bookRouter.route('/')
    .get((req, res) => {
        Book.find({}, (err, books) => {
            res.json(books)
        })        
    })
    .post((req, res) => {
        let book = new Book({ 
            isbn: req.body.isbn,
            title: req.body.title,
            subtitle: req.body.subtitle,
            author: req.body.author,
            published: req.body.published,
            publisher: req.body.publisher,
            pages: req.body.pages,
            description: req.body.description,
            website: req.body.website 
        });

        book.save();
        res.status(201).send(book) 
    });

    // bookRouter.route('/:bookId')
    // .get((req, res) => {
    //     res.json(req.book)
    // })
    // .put((req,res) => {
    //     req.book.title = req.body.title;
    //     req.book.author = req.body.author;
    //     req.book.save()
    //     res.json(req.book)
    // })
    // .patch((req,res)=>{
    //     if(req.body._id){
    //         delete req.body._id;
    //     }
    //     for( let p in req.body ){
    //         req.book[p] = req.body[p]
    //     }
    //     req.book.save()
    //     res.json(req.book)
    // })
    // .delete((req,res)=>{
    //     req.book.remove(err => {
    //         if(err){
    //             res.status(500).send(err)
    //         }
    //         else{
    //             res.status(204).send('removed')
    //         }
    //     })
    // })

export default bookRouter