import {Category} from './category.model';
import {SubCategory} from './subcategory.model'

export class Product
{
    public _id? : string;
    public sold : number;
    public fProductImagePath : string[];
    public name : string;
    public description : string;
    public price : number;
    public mrp:number;
    public category :Category;
    public subCategory :SubCategory;
    public stock : number;
    public companyName:string;
}
