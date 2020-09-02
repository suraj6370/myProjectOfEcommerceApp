export class SubCategory
{
    public _id? : string
    public name : string;



    constructor(p_id:string,p_name:string)
    {
        this._id =  p_id;
        this.name = p_name;
    }
}
