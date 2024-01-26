export interface Currency {
    code: string;
    codein: string;
    name: string;
    high: number;
    low: number;
    varBid: number;
    pctChange: number;
    bid: number;
    ask: number;
    timestamp: string;
    create_date: Date;
}