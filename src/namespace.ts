import { DataBase } from "./Database";

export declare namespace Option {
    interface AlertOptions {
      title?: string;
      color?: string;
    }

    interface Options {}
}

export declare namespace Option.Options {
    interface Log {
        message?: boolean;
    }

    interface Alert {
        modal: boolean;
    }
}

export type DBase = {
    [key in keyof DataBase]: {
        value: string;
        version: number;
    }
}

export {};