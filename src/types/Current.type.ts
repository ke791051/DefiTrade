import { CurrencyType } from "../enums/Currency.enum";

 export type CurrencyTradePayload = {
   type: CurrencyType;
   price: number;
 }

 export type CurrencyTradeResponse = {
   type: 'TWD'| 'USD';
   price: number;
 }