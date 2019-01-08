import { Pipe, PipeTransform } from '@angular/core';
import { ITodo } from '../interfaces';

@Pipe({
  name: 'todoFilter'
})
export class TodoFilterPipe implements PipeTransform {

  transform(valueArray: ITodo[], args?: any): any {
    return valueArray.filter((value) => {
      if (args) {
        if (args.done === false && value.done) {
          return false;
        } 
        if (args.done === true && !value.done) {
          return false;
        }
        if (args.assignedTo && args.assignedTo !== value.assignedTo) {
          return false;
        }
      }
      return true;
    })
  }

}
