import {
    Pipe,
    PipeTransform
} from '@angular/core';
@Pipe({
    name: 'bold'
})
export class BoldPipe implements PipeTransform {
    transform(value: string): any {
        console.log(value);
        return `<b>${value}</b>`;
    }
}