(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"/4ki":function(e,t,n){"use strict";n.r(t),n.d(t,"ViewDetailsModule",(function(){return y}));var i=n("ofXK"),a=n("tyNb"),c=n("fXoL"),o=n("mrSG"),r=n("AytR"),s=n("tk/3"),l=n("z6cu"),d=n("JIr8");const b=new s.d({Accept:"application/json","Content-Type":"application/json"});let v=(()=>{class e{constructor(e){this.http=e,this.fetchDataById=(e,t,n)=>this.http.get(`${r.a.api}/${t}/${e}?${n}`,{headers:b}).pipe(Object(d.a)(this.handleError)),this.handleError=e=>Object(l.a)(e)}}return e.\u0275fac=function(t){return new(t||e)(c.Ub(s.b))},e.\u0275prov=c.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var u=n("F5nt");let g=(()=>{class e{constructor(e,t){this.api=e,this.appService=t,this.today=new Date,this.data=null,this.getDataById=(e,t)=>Object(o.a)(this,void 0,void 0,(function*(){var n,i,a,c,o;const s=`ts=${this.appService.getTimeStamp(this.today)}&apikey=${r.a.publickey}&hash=${this.appService.getMd5ConvertedToken(this.today)}`,l=yield this.api.fetchDataById(e,t,s).toPromise();(null===(n=null==l?void 0:l.data)||void 0===n?void 0:n.results)&&l.data.results.length>0&&(l.data.results[0].imagePath=`${null===(a=null===(i=l.data.results[0])||void 0===i?void 0:i.thumbnail)||void 0===a?void 0:a.path}.${null===(o=null===(c=l.data.results[0])||void 0===c?void 0:c.thumbnail)||void 0===o?void 0:o.extension}`,this.data=l.data.results[0],console.log(this.data))}))}}return e.\u0275fac=function(t){return new(t||e)(c.Ub(v),c.Ub(u.a))},e.\u0275prov=c.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function p(e,t){if(1&e&&(c.Qb(0,"div",10),c.Qb(1,"div",11),c.zc(2),c.Pb(),c.Qb(3,"p",12),c.zc(4," Comics "),c.Mb(5,"br"),c.zc(6," Available "),c.Pb(),c.Pb()),2&e){const e=c.bc(2);c.zb(2),c.Ac(null==e.service.data||null==e.service.data.comics?null:e.service.data.comics.available)}}function f(e,t){if(1&e&&(c.Qb(0,"div",10),c.Qb(1,"div",11),c.zc(2),c.Pb(),c.Qb(3,"p",12),c.zc(4,"Series "),c.Mb(5,"br"),c.zc(6,"Available"),c.Pb(),c.Pb()),2&e){const e=c.bc(2);c.zb(2),c.Ac(null==e.service.data||null==e.service.data.series?null:e.service.data.series.available)}}function h(e,t){if(1&e&&(c.Qb(0,"div",10),c.Qb(1,"div",11),c.zc(2),c.Pb(),c.Qb(3,"p",12),c.zc(4,"Stories "),c.Mb(5,"br"),c.zc(6,"Available"),c.Pb(),c.Pb()),2&e){const e=c.bc(2);c.zb(2),c.Ac(null==e.service.data||null==e.service.data.stories?null:e.service.data.stories.available)}}function m(e,t){if(1&e&&(c.Qb(0,"div",10),c.Qb(1,"div",11),c.zc(2),c.Pb(),c.Qb(3,"p",12),c.zc(4,"Events "),c.Mb(5,"br"),c.zc(6,"Available"),c.Pb(),c.Pb()),2&e){const e=c.bc(2);c.zb(2),c.Ac(null==e.service.data||null==e.service.data.events?null:e.service.data.events.available)}}const P=function(e){return{"background-image":e}};function w(e,t){if(1&e&&(c.Ob(0),c.Qb(1,"div",1),c.Mb(2,"img",2),c.Pb(),c.Qb(3,"div",3),c.Qb(4,"div",4),c.Qb(5,"div",5),c.Qb(6,"p",6),c.zc(7),c.Pb(),c.Qb(8,"p",7),c.zc(9),c.Pb(),c.Pb(),c.Qb(10,"div",8),c.xc(11,p,7,1,"div",9),c.xc(12,f,7,1,"div",9),c.xc(13,h,7,1,"div",9),c.xc(14,m,7,1,"div",9),c.Pb(),c.Pb(),c.Pb(),c.Nb()),2&e){const e=c.bc();c.zb(2),c.gc("src",e.service.data.imagePath,c.qc),c.zb(1),c.gc("ngStyle",c.ic(8,P,"url("+e.service.data.imagePath+")")),c.zb(4),c.Ac(e.service.data.name?e.service.data.name:e.service.data.title),c.zb(2),c.Bc(" ",null!=e.service.data&&e.service.data.description?null==e.service.data?null:e.service.data.description:"Description not available."," "),c.zb(2),c.gc("ngIf",null==e.service.data||null==e.service.data.comics?null:e.service.data.comics.available),c.zb(1),c.gc("ngIf",null==e.service.data||null==e.service.data.series?null:e.service.data.series.available),c.zb(1),c.gc("ngIf",null==e.service.data||null==e.service.data.stories?null:e.service.data.stories.available),c.zb(1),c.gc("ngIf",null==e.service.data||null==e.service.data.events?null:e.service.data.events.available)}}const C=[{path:"",component:(()=>{class e{constructor(e,t){this.route=e,this.service=t}ngOnInit(){this.route.params.subscribe(e=>{this.service.getDataById(e.id,e.category)})}}return e.\u0275fac=function(t){return new(t||e)(c.Lb(a.a),c.Lb(g))},e.\u0275cmp=c.Fb({type:e,selectors:[["app-view-details"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"viewHeaderContainer"],["alt","",3,"src"],[1,"content-viewdetails",3,"ngStyle"],[1,"linearContainer"],[1,"txt-center"],[1,"title-viewdetail","mb30","txt-center"],[1,"des-viewdetail","mb30","txt-center"],[1,"flex","justify-center"],["class","countCard",4,"ngIf"],[1,"countCard"],[1,"count"],[1,"countTitle"]],template:function(e,t){1&e&&c.xc(0,w,15,10,"ng-container",0),2&e&&c.gc("ngIf",t.service.data)},directives:[i.k,i.l],styles:[".viewHeaderContainer[_ngcontent-%COMP%]{margin-top:-1px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-image:linear-gradient(90deg,#22374f,rgba(34,55,79,.5)),url(https://react-marvel-poc.fidisys.com/static/media/carousel-img.6bbf546f.png);background-size:cover;height:263px;text-align:center}.viewHeaderContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:400px;background-repeat:no-repeat;height:263px;object-fit:cover;object-position:top}.countCard[_ngcontent-%COMP%]{min-width:150px;height:123px;display:flex;flex-direction:column;align-items:center;justify-content:center;margin:10px;background:#22374f;box-shadow:0 1px 20px 0 rgba(0,0,0,.1);border-radius:4px;padding:20px;color:#fff}.countCard[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]{font-size:28px;font-weight:500;margin-bottom:5px}.countCard[_ngcontent-%COMP%]   .countTitle[_ngcontent-%COMP%]{text-align:center;color:hsla(0,0%,100%,.6);line-height:1.25;font-size:18px}.content-viewdetails[_ngcontent-%COMP%]{background-repeat:no-repeat;background-size:cover;width:100%;height:100%}.content-viewdetails[_ngcontent-%COMP%]   .linearContainer[_ngcontent-%COMP%]{background-image:linear-gradient(90deg,#22374f,rgba(13,37,63,.5));padding-top:40px}.content-viewdetails[_ngcontent-%COMP%]   .linearContainer[_ngcontent-%COMP%]   .title-viewdetail[_ngcontent-%COMP%]{font-size:40px;font-weight:700;color:#fff}.content-viewdetails[_ngcontent-%COMP%]   .linearContainer[_ngcontent-%COMP%]   .des-viewdetail[_ngcontent-%COMP%]{font-size:16px;color:hsla(0,0%,100%,.7)}@media only screen and (max-width:404px){.viewHeaderContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}}"]}),e})()}];let x=(()=>{class e{}return e.\u0275mod=c.Jb({type:e}),e.\u0275inj=c.Ib({factory:function(t){return new(t||e)},imports:[[a.e.forChild(C),i.b],a.e]}),e})();var z=n("PCNd");let y=(()=>{class e{}return e.\u0275mod=c.Jb({type:e}),e.\u0275inj=c.Ib({factory:function(t){return new(t||e)},imports:[[i.b,x,z.a]]}),e})()}}]);