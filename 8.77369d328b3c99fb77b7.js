(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"9YlM":function(t,i,e){"use strict";e.r(i),e.d(i,"CosmicsModule",(function(){return P}));var n=e("ofXK"),s=e("3T0w"),c=e("fXoL"),a=e("mrSG"),o=e("AytR"),r=e("0e6G"),p=e("oyfS"),l=e("F5nt");let b=(()=>{class t{constructor(t,i){this.api=t,this.appService=i,this.today=new Date,this.count=0,this.list=[],this.isLoading=!1,this.getComics=(t,i)=>Object(a.a)(this,void 0,void 0,(function*(){var e;let n=`ts=${this.appService.getTimeStamp(this.today)}&apikey=${o.a.publickey}&hash=${this.appService.getMd5ConvertedToken(this.today)}`;n+=`&limit=${t}&offset=0&hasDigitalIssue=${i}`;const s=yield this.api.fetchComics(n).toPromise();(null===(e=null==s?void 0:s.data)||void 0===e?void 0:e.results)&&s.data.results.length>0&&(this.list=[...this.list,...this.appService.manipulateResData(s.data.results,r.a.COSMICS)],this.count=s.data.total),this.isLoading=!1}))}}return t.\u0275fac=function(i){return new(i||t)(c.Ub(p.a),c.Ub(l.a))},t.\u0275prov=c.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var d=e("RIfK"),g=e("e5sC");function f(t,i){if(1&t&&(c.Ob(0),c.Qb(1,"div",10),c.Mb(2,"app-poster",11),c.Pb(),c.Nb()),2&t){const t=i.$implicit;c.zb(2),c.gc("imagePath",t.imagePath)("data",t)}}function h(t,i){if(1&t&&(c.Ob(0),c.xc(1,f,3,2,"ng-container",9),c.Nb()),2&t){const t=c.bc();c.zb(1),c.gc("ngForOf",t.service.list)}}function u(t,i){if(1&t&&(c.Ob(0),c.Mb(1,"app-poster",11),c.Nb()),2&t){const t=c.bc(2);c.zb(1),c.gc("imagePath","https://react-marvel-poc.fidisys.com/static/media/img-placeholder.8c8590c4.svg")("data",t.item)}}function m(t,i){if(1&t&&c.xc(0,u,2,2,"ng-container",9),2&t){const t=c.bc();c.gc("ngForOf",t.appService.arrayIterate(40))}}function v(t,i){1&t&&(c.Ob(0),c.Mb(1,"app-spinner"),c.Nb())}function y(t,i){if(1&t){const t=c.Rb();c.Qb(0,"button",12),c.Xb("click",(function(){return c.oc(t),c.bc().next()})),c.zc(1,"Load more Comics"),c.Pb()}}let x=(()=>{class t{constructor(t,i){this.service=t,this.appService=i,this.title=s.a[1].label,this.pageSize=40,this.pageIndex=0,this.isLoading=!1,this.next=()=>{this.service.isLoading=!0,this.pageSize=60,this.pageIndex+=1,this.service.getComics(this.pageSize,this.pageIndex)}}ngOnInit(){this.service.getComics(this.pageSize,this.pageIndex)}}return t.\u0275fac=function(i){return new(i||t)(c.Lb(b),c.Lb(l.a))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-cosmics"]],decls:13,vars:6,consts:[[1,"wrapper"],[1,"relative","h47","cardTitleContainer","mb20"],[1,"blueLine"],[1,"cardTitle"],[1,"flex","flow-wrap","justify-even","mt30"],[4,"ngIf","ngIfElse"],["imgloader",""],[1,"middle","mt30"],["loadMore",""],[4,"ngFor","ngForOf"],[1,"mb30"],[3,"imagePath","data"],["mat-raised-button","","color","primary",1,"nextComics",3,"click"]],template:function(t,i){if(1&t&&(c.Qb(0,"div",0),c.Qb(1,"div",1),c.Mb(2,"div",2),c.Qb(3,"div",3),c.zc(4),c.Pb(),c.Pb(),c.Qb(5,"div",4),c.xc(6,h,2,1,"ng-container",5),c.xc(7,m,1,1,"ng-template",null,6,c.yc),c.Pb(),c.Qb(9,"div",7),c.xc(10,v,2,0,"ng-container",5),c.xc(11,y,2,0,"ng-template",null,8,c.yc),c.Pb(),c.Pb()),2&t){const t=c.mc(8),e=c.mc(12);c.zb(4),c.Cc("",i.title," (",i.service.count,")"),c.zb(2),c.gc("ngIf",i.service.list.length>0)("ngIfElse",t),c.zb(4),c.gc("ngIf",i.service.isLoading)("ngIfElse",e)}},directives:[n.k,n.j,d.a,g.a],styles:[".nextComics[_ngcontent-%COMP%]{font-size:14px;padding:10px 60px;background:#0d253f;color:#fff;border-radius:8px;outline:none}"]}),t})();var I=e("tyNb");const C=[{path:"",component:x}];let w=(()=>{class t{}return t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({factory:function(i){return new(i||t)},imports:[[I.e.forChild(C),n.b],I.e]}),t})();var S=e("PCNd");let P=(()=>{class t{}return t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({factory:function(i){return new(i||t)},imports:[[n.b,w,S.a]]}),t})()}}]);