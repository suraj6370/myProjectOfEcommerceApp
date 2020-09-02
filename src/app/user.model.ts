export class User
{
    public _id? : string
    public name : string;
    public lastname : string;
    public email : string;
    public address : string;
    public mobileNumber : number;
    public password : number;



       constructor(_id:string,name:string,lastname:string,email:string,address:string,password:number,mobileNumber:number)
       {
           this._id = _id;
           this.name = name;
           this.lastname = lastname;
           this.email = email;
           this.address = address;
           this.password = password;
           this.mobileNumber = mobileNumber;
       }
}
