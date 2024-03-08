const express=require('express');
const { createConnection } = require('mysql2');
var path=require('node:path');
var cors=require('cors');

const dbcon=require('./database').dbconn;

const app=express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(cors({ origin: "*" }));

app.get('/books',(req,res)=>{
    const sql='SELECT * FROM book';
    dbcon.query(sql,(err,result)=>{

        if(err){
            console.log(err);
            res.sendStatus(404).send('<h3> books not found! </h3>');
        }
        else{
            console.log(result);
            res.setHeader('Content-Type','application/json');
            res.send(result);
        }
    });
})

app.get('/book/:id',(req,res)=>{
    console.log(req.params.id);
    let id=req.params.id;
    const sql='select * from book where id='+id;
    dbcon.query(sql,(err,result)=>{

        if(err){
            console.log(err);
            res.sendStatus(400).send('<h3> bad request </h3>');
        }
        else{
            
            console.log(result);
            if(result.length==0){
                res.status(404).send('<h3> book with id:'+id+'not found </h3>');
            }
            else{
                res.setHeader('Content-Type','application/json');
                res.send(result);
            }
           
        }
    });
})

app.get('/bookform',(req,res)=>{
    res.sendFile(path.join(__dirname,'view','bookform.html'));
})

app.post('/books',(req,res)=>{
    let u=req.body;
    const sql='insert into book values(?,?,?)';

    let id=u.id;
    let bkname=u.bkname;
    let bkprice=u.bkprice;
    console.log(`${id},${bkname},${bkprice}`);

    dbcon.query(sql,[id,bkname,bkprice],(err,result)=>{
        if(err)
        {
            console.log(err.message);
            // res.status(400).send('<h3>http post book failed <br/> sql error,'+err.message+'</h3>');
            res.status(400).json({message:'eror'});
        }
        else{
            // res.status(200).send('<h3>http post sucessful</h3>');
            res.status(200).json({message:'delete sucessful'});

        }

    })
})

app.delete('/books/:id',(req,res)=>{
    const id=req.params.id;
    console.log('book id of book to be deletd'+id);
    
    const sql='delete from book where id=?';
    dbcon.query(sql,[id],(err,result)=>{
        if(err)
        {
            console.log(err.message);
            // res.status(400).send('<h3>http delete book failed <br/> sql error,'+err.message+'</h3>');
            res.status(400).json({message:'eror'});
        }
        else{
            // res.status(200).send('<h3>delete book  successful</h3>');
            res.status(200).json({message:'delete sucessful'});
        }

    })
})

app.put('/books/:id',(req,res)=>{
    const id=req.params.id;
    console.log('update book with id'+id);

    const u=req.body;
    console.log(u);

    const bkname=u.bkname;
    const bkprice=u.bkprice;

    const sql='update book set bkname=?,bkprice=? where id=?';
    dbcon.query(sql, [bkname,bkprice,id], function (err, result) {
        if (err) {
           console.log(err.message);
        // res.sendStatus(400).send('<p>Error updating book sql eror '+err.message+'</h3>');
        res.status(200).json({message:'error'});
        
           
        } else {
        //    res.status(200).send('<h3> update book suscessful</h3>')
        res.status(200).json({message:'update sucessful'});
           }
       });

})

app.listen(8081,(req,res)=>{
    console.log('resservice mysql started on port 8081');
})