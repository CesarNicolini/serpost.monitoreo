import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {

    //url =  this.sanitizer.bypassSecurityTrustResourceUrl(url);

    
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);

    
    // url =  this.sanitizer.sanitize(SecurityContext.URL, url);
    // return url;
    //return this.sanitizer.sanitize(SecurityContext.HTML, url)
    //return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
