import {Directive, ElementRef, OnInit} from '@angular/core';

declare var $: any;
@Directive({
  selector: '[smartSlider]'
})
export class SmartSliderDirective implements OnInit {

  constructor(private el : ElementRef) { }

  ngOnInit(){
    require('script-loader!bootstrap-slider/dist/bootstrap-slider.min.js').then(()=>{
      this.render()
    })
  }


  render(){
    $(this.el.nativeElement).bootstrapSlider();
  }


}
