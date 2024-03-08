import {useEffect,useState} from 'react';
import axios from "axios";
import './Bookcrud.css'

function Bookcrud()
{
    const[bookarr,setbookarr]=useState([]);
    const[book,setbook]=useState({id:3,bkname:'acc',bkprice:3000});

    const baseURL="http://localhost:8081/books";



    useEffect(()=>{
        getallbooks();

    },[]);

    const getallbooks=()=>{
        axios.get(baseURL+"/").then((response) => {
            console.log(response.data);
                setbookarr(response.data);
});
    }
//delbook with then and catch blocks 
    const delbook=(b)=>{
        console.log(b);
        axios
        .delete(baseURL+'/'+b.id)
        .then(() => {
          alert("Post deleted!");
          getallbooks();
        })
        .catch(eror=>{
            alert('delete book failed');
            console.log(eror);
        })
        
    }
//delbook with async await usage Another way of handling promises

    const delbook1=async (b)=>{
        console.log(b);
        try{
            let res=await axios.delete(baseURL+'/'+b.id)
            console.log(res);
          alert("Post deleted!");
          getallbooks();
        }
        catch(error){
            alert('delete operation not sucessful');
            console.log(error);
        }
      
    }

    const editbook=(b)=>{
        console.log(b);  
        setbook(b);  
    }


    const addbook=(event)=>{
        event.preventDefault();
        console.log('inside post method');
        console.log(book);

       let arr=bookarr.filter(b=>b.id==book.id);
        if(arr.length==0){
            console.log('posting with book id'+book.id);
            axios
            .post(baseURL+"/",book)
            .then((response) => {
                console.log('book wih bookid'+book.id+'posted sucessfully');
              console.log(response.data);
              getallbooks();
            });

        }
        else{
            console.log('updating book with bookid'+book.id);
            axios
        .put(baseURL+'/'+book.id,book)
        .then((response) => {
            console.log('book wih bookid'+book.id+'updated sucessfully');
            console.log(response.data);
            getallbooks();
        });
         
        }

       
        
      
    }



    return(
        <>
        <form onSubmit={addbook}>
        <label>bookid:
         <input
             type="number"
             value={book.id}
             onChange={(e) => setbook({...book,id:e.target.value})}
         />
        </label> <br/>
        <label>bookname:
         <input
             type="text"
             value={book.bkname}
             onChange={(e) => setbook({...book,bkname:e.target.value})}
         
         />
        </label> <br/>
        <label>bookprice:
         <input
             type="number"
             value={book.bkprice}
             onChange={(e) => setbook({...book,bkprice:e.target.value})}
         />
        </label><br/>
        <input type='submit' />
    </form>
        <table>
            <thead>

                <tr>
                    <th>BookId</th>
                    <th>BookName</th>
                    <th>BookPrice</th>

                </tr>
            </thead>
        <tbody>
        {bookarr.map(b=><tr key={b.id}>
            <td>{b.id}</td>
            <td>{b.bkname}</td>
            <td>{b.bkprice}</td>
            <td><button onClick={()=>delbook1(b)}>Delete</button></td>
            <td><button onClick={()=>editbook(b)}>Edit</button></td>
            </tr>)}
            </tbody>
            </table>
        </>



    );

}

export default Bookcrud;