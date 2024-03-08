export class Book
{
    constructor(public id: number=0,public bkname: string='',public bkprice: number=0.0)    
    {
 
    }
   
   
     
    public toString():string
    {
        return "id:"+this.id+",bkname:"+this.bkname+",bkprice:"+this.bkprice;
    }
}