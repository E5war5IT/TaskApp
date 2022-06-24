/**
 * @type task
 */
export type Task = {
    title: any,
    date: any,
    comment?: string | any,
    id? : number
}

// function alias<T>(params: T | Task): CallableFunction {
function alias(params: Task): any {
    let res : Function;
    let configurable : object;

    if (typeof params == 'object') {
        return  function <T extends keyof typeof configurable>(config: T): any {
          configurable = Object.create(params); 
           console.log(configurable);
            for (let i = 0; i < arguments.length; i++) {
             let args: IArguments = arguments[i];
              console.log(configurable[args]);
            }
        }
    } else {
       console.warn(Array.prototype.slice.call(arguments, 0));
    }

    // return function alias(module: PropertyKey): any {
   /* return function alias <T extends keyof typeof configurable>(module: T): any {
        if(configurable && module){
            console.error(configurable[module]);
             return configurable[module];
        }
    }*/
}

export { alias };