webpackJsonp([6],{TYKr:function(n,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var e=t("LMZF"),o=t("ADVA"),u=t("hWM0"),c=t("GROE"),r=function(){function n(n){this.store=n}return n.prototype.ngOnInit=function(){var n=this;this.portfolio$=this.store.select(u.m),this.stocks$=this.store.select(u.k).pipe(Object(c.g)(function(l){var t=l.map(function(n){return n.ticker});n.store.dispatch(new u.f(t))})),this.stockPrices$=this.store.select(u.l)},n}(),s=(t("Z0iS"),t("wD1B"),t("lEa1"),t("ddvW"),t("sEKg"),t("Rx0z")),i=(t("DjGi"),function(){}),d=t("aIh6"),a=t("X86j"),p=t("Un6q"),f=e["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{width:100%}"]],data:{}});function m(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,10,"div",[["class","container-fluid container-fluid--padding"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["\n\t"])),(n()(),e["\u0275eld"](2,0,null,null,1,"h2",[["class","font-weight-normal mb-4"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Dashboard"])),(n()(),e["\u0275ted"](-1,null,["\n\n\t"])),(n()(),e["\u0275eld"](5,0,null,null,4,"vs-portfolio-stocks-list",[],null,null,null,d.b,d.a)),e["\u0275did"](6,49152,null,0,a.a,[],{stocks:[0,"stocks"],stockPrices:[1,"stockPrices"]},null),e["\u0275pid"](131072,p.b,[e.ChangeDetectorRef]),e["\u0275pid"](131072,p.b,[e.ChangeDetectorRef]),(n()(),e["\u0275ted"](-1,null,["\n\t"])),(n()(),e["\u0275ted"](-1,null,["\n"])),(n()(),e["\u0275ted"](-1,null,["\n"]))],function(n,l){var t=l.component;n(l,6,0,e["\u0275unv"](l,6,0,e["\u0275nov"](l,7).transform(t.stocks$)),e["\u0275unv"](l,6,1,e["\u0275nov"](l,8).transform(t.stockPrices$)))},null)}var h=e["\u0275ccf"]("ng-component",r,function(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"ng-component",[],null,null,null,m,f)),e["\u0275did"](1,114688,null,0,r,[o.n],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),v=t("UHIZ"),g=t("0g3N");t.d(l,"HomeModuleNgFactory",function(){return k});var k=e["\u0275cmf"](i,[],function(n){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[h]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,p.q,p.p,[e.LOCALE_ID,[2,p.x]]),e["\u0275mpd"](512,p.c,p.c,[]),e["\u0275mpd"](512,v.r,v.r,[[2,v.x],[2,v.o]]),e["\u0275mpd"](512,s.a,s.a,[]),e["\u0275mpd"](512,i,i,[]),e["\u0275mpd"](1024,v.m,function(){return[[{path:"",pathMatch:"full",canActivate:[g.a],component:r}]]},[])])})}});