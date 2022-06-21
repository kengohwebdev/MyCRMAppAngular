import { Region } from './region';
export interface Customer{
    name:string,
    title:string,
    address:string,
    city:string,
    regionId:number,
    postalCode:number,
    country:string,
    phone:string,
    region:Region
}