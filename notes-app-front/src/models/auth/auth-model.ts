export interface genericResponseAuth<T> {
    body: T;
    error: {
      message: string;
      causeMessage: string;
    };
    message: {};
  }

export interface User {
    name?:string;
    email:string;
    password:string;
    role?:string;
}

export interface jwt{
    token:string;
}