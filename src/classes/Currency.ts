import { ICurrency } from "../interfaces/ICurrency";
import { CurrencyTradePayload, CurrencyTradeResponse } from "../types/Current.type";

export class Currency implements  ICurrency {
  private _ru:number;
  private _rt: number;
  public get ru(): number {
    return this._ru;
  }
  public get rt(): number {
    return this._rt;
  }
  constructor(ru: number, rt: number) {
    this._ru = ru;
    this._rt = rt;
  }
  public trade(payload: CurrencyTradePayload):CurrencyTradeResponse {

  }
}