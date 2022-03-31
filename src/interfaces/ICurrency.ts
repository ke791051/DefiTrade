import { CurrencyTradePayload, CurrencyTradeResponse } from "../types/Current.type";

export interface ICurrency {
  ru: number;
  rt: number;
  trade(payload: CurrencyTradePayload):CurrencyTradeResponse
}

