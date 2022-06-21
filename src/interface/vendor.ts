import { Region } from './region';
export interface Vendor{
    regionId:number,
    name:string,
    city:string,
    country:string,
    mobile:string,
    emailId:string,
    isActive:boolean,
    region:Region
    
}