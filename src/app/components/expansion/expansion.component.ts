import { AfterContentInit, AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { AppService } from 'src/app/app.service';
import { map, filter, take, switchMap } from 'rxjs/operators';

declare var $: any;

@Component({
  selector: 'app-expansion',
  templateUrl: './expansion.component.html',
  styleUrls: ['./expansion.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExpansionComponent implements OnInit, AfterViewInit, AfterContentInit{
  @ViewChild(MatAccordion) accordion: MatAccordion;
  @Input() togglePosition = 'before';
  @Input() path;
  @Input() title;
  @Input() linkLabel;
  @Input() children: any = [];
  @Output() navigateTo = new EventEmitter();
  @Input() isCollapse = true;
  slideConfig = {slidesToShow: 4, slidesToScroll: 1, arrows: true};
  constructor(public appService: AppService) { }

  ngOnInit(): void {
    console.log(this.title, this.children);
  }

  redirectTo = (e, path) => {
    e.stopPropagation();
    if (this.navigateTo) {
      this.navigateTo.emit(path);
    }
  }

  setCollapse = () => {
    this.isCollapse = !this.isCollapse;
  }

  ngAfterViewInit(): void {
    this.appService.loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js')
      .pipe(
        map(_ => 'jQuery is loaded'),
        filter(jquery => !!jquery),
        switchMap(_ => this.appService.loadScript('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js')),
      // tslint:disable-next-line: deprecation
      ).subscribe(_ => {
        $('.slick-container').not('.slick-initialized').slick({
          dots: false,
          infinite: false,
          speed: 300,
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: true,
          autoplay: false,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ]
        });
      });
   }


  ngAfterContentInit(): void {
  }

}
