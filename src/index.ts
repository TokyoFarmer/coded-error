export class CodedError extends Error {
  constructor(public code:number, public message:string) { 
    super(message)
    if (typeof (<any>Error).captureStackTrace === 'function') {
      (<any>Error).captureStackTrace(this, CodedError)
    }
  }
  
  static is(code: number) {
    return (e: CodedError) => e.code == code;
  }
  
  static only(code: number, handler: (e: any) => any) {
    return (err: CodedError) => {
        if (err.code === code) return handler(err)
        throw err;
    }
  }
}

