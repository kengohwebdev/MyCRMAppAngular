import { Region } from 'src/interface/region';
import { Shipper } from 'src/interface/shipper';
import { Vendor } from 'src/interface/vendor';
import { Customer } from 'src/interface/customer';
import { Employee } from 'src/interface/employee';
import { Category } from './../interface/category';
import { Product } from 'src/interface/product';
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiKey:'https://localhost:7024/api/',
  apiControllers:
  {
    region:"Region",
    employee:"Employee",
    category:"Category",
    shipper:"Shipper",
    vendor:"Vendor",
    customer:"Customer",
    product:"Product"
  }
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
