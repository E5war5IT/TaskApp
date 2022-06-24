import { alias } from "./alias";
import { usesDB } from "./Database";


function createTask(props: any): any {
   let res =  alias({
      date: new Date().toLocaleString(),
      title: 'my First task',
      comment: 'Task App!'
    })('comment','title');

     console.log(res);
     
    usesDB({
      value: 'DBase',
      version: 1
    });

  //  return (props, );
}

export { createTask };