
export class WebSocketMessage {

    /**
     * A correlation id may originate from the client when used
     * in websocket request-response mode or may originate deep
     * within a downstream service when used in event broadcast
     * mode.
     */
    public correlationId: string;
    public username: string;
}

export class AuthToken extends WebSocketMessage {
    public token: string;
}

export class StockPriceRequest extends WebSocketMessage {
    public ticker: string;
    public exchange: string;
}

export class StockPriceResponse extends WebSocketMessage {
    public ticker: string;
    public bestBid: Quote;
    public bestOffer: Quote;
    public marketDepth: Quote[];
}

export class Quote {
    public qty: number;
    public lotSize: number;
    public price: number;
    public exchange: string;
}

export class MasterDataUploadResults extends WebSocketMessage {
    public added: number;
    public modified: number;
    public ignored: number;
    public errors: string[];
}

export class User {
    public username: string;
    public groups: Group[];
    public permissions: Permission[];

    constructor(username: string, groups: Group[], permissions: Permission[]) {
        this.username = username;
        this.groups = groups;
        this.permissions = permissions;
    }
}

export class Group {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}

export class Permission {
    public module: string;
    public action: string;
    public authority: Authority;

    constructor(module: string, action: string, authority: Authority) {
        this.module = module;
        this.action = action;
        this.authority = authority;
    }
}

export enum Authority {
    READ, WRITE, READ_WRITE
}

export class Metrics extends WebSocketMessage {
    public metrics: string;
    public periodStart: Date;
    public periodEnd: Date;
    public value: number;
}
