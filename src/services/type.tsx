export interface IValute {
    CharCode: 'string';
    ID: 'string';
    Name: 'string';
    Nominal: number;
    NumCode: 'string';
    Previous: number;
    Value: number;
}

export interface Valute {
    [key: string]: IValute;
}
