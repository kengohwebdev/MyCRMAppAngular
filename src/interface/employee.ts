import { Region } from "./region";

export interface Employee{
    firstName:string,
    lastName:string,
    title:string,
    titleOfCourtesy:string,
    birthDate:Date,
    hireDate:Date,
    address:string,
    city:string,
    postalCode:string,
    phone:string,
    regionId:number,
    reportsTo:number,
    photoPath:string,
    region:Region
}