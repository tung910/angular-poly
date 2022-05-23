import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
    name: 'safeHtmlPipe'
})
export class SafeHtmlPipePipe implements PipeTransform {

    constructor(private sanitized: DomSanitizer) { }
    transform(value: string, ...args: unknown[]): any {
        return this.sanitized.bypassSecurityTrustHtml(value);
    }

}
