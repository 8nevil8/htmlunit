(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,un='com.google.gwt.core.client.',vn='com.google.gwt.lang.',wn='com.google.gwt.sample.hello.client.',xn='com.google.gwt.user.client.',yn='com.google.gwt.user.client.impl.',zn='com.google.gwt.user.client.ui.',An='com.google.gwt.user.client.ui.impl.',Bn='java.lang.',Cn='java.util.';function tn(){}
function mi(a){return this===a;}
function ni(){return Ai(this);}
function ki(){}
_=ki.prototype={};_.eQ=mi;_.hC=ni;_.tI=1;var o=null;function r(a){return a==null?0:a.$H?a.$H:(a.$H=t());}
function s(a){return a==null?0:a.$H?a.$H:(a.$H=t());}
function t(){return ++u;}
var u=0;function x(b,a){if(!lb(a,2)){return false;}return B(b,kb(a,2));}
function y(a){return r(a);}
function z(){return [];}
function A(){return {};}
function C(a){return x(this,a);}
function B(a,b){return a===b;}
function D(){return y(this);}
function v(){}
_=v.prototype=new ki();_.eQ=C;_.hC=D;_.tI=7;function F(c,a,d,b,e){c.a=a;c.b=b;e;c.tI=d;return c;}
function bb(a,b,c){return a[b]=c;}
function cb(b,a){return b[a];}
function db(a){return a.length;}
function fb(e,d,c,b,a){return eb(e,d,c,b,0,db(b),a);}
function eb(j,i,g,c,e,a,b){var d,f,h;if((f=cb(c,e))<0){throw new ii();}h=F(new E(),f,cb(i,e),cb(g,e),j);++e;if(e<a){j=ti(j,1);for(d=0;d<f;++d){bb(h,d,eb(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){bb(h,d,b);}}return h;}
function gb(a,b,c){if(c!==null&&a.b!=0&& !lb(c,a.b)){throw new yh();}return bb(a,b,c);}
function E(){}
_=E.prototype=new ki();_.tI=0;function jb(b,a){return !(!(b&&ob[b][a]));}
function kb(b,a){if(b!=null)jb(b.tI,a)||nb();return b;}
function lb(b,a){return b!=null&&jb(b.tI,a);}
function nb(){throw new Bh();}
function mb(a){if(a!==null){throw new Bh();}return a;}
function pb(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var ob;function xb(b){var a;a=re(new ke(),'Click me',new tb());ge(Df(),a);}
function sb(){}
_=sb.prototype=new ki();_.tI=0;function vb(a){fd('Hello, AJAX');}
function tb(){}
_=tb.prototype=new ki();_.u=vb;_.tI=8;function zb(){zb=tn;kc=fl(new dl());{gc=new qd();xd(gc);}}
function Ab(b,a){zb();zd(gc,b,a);}
function Bb(a,b){zb();return ud(gc,a,b);}
function Cb(){zb();return Bd(gc,'button');}
function Db(){zb();return Bd(gc,'div');}
function ac(b,a,d){zb();var c;c=o;{Fb(b,a,d);}}
function Fb(b,a,c){zb();var d;if(a===jc){if(cc(b)==8192){jc=null;}}d=Eb;Eb=b;try{c.t(b);}finally{Eb=d;}}
function bc(b,a){zb();Cd(gc,b,a);}
function cc(a){zb();return Dd(gc,a);}
function dc(a){zb();vd(gc,a);}
function ec(a){zb();return Ed(gc,a);}
function fc(a){zb();return wd(gc,a);}
function hc(a){zb();var b,c;c=true;if(kc.b>0){b=mb(jl(kc,kc.b-1));if(!(c=null.D())){bc(a,true);dc(a);}}return c;}
function ic(b,a){zb();Fd(gc,b,a);}
function lc(a,b,c){zb();ae(gc,a,b,c);}
function mc(a,b){zb();be(gc,a,b);}
function nc(a,b){zb();ce(gc,a,b);}
function oc(b,a,c){zb();de(gc,b,a,c);}
function pc(a,b){zb();yd(gc,a,b);}
var Eb=null,gc=null,jc=null,kc;function sc(a){if(lb(a,4)){return Bb(this,kb(a,4));}return x(pb(this,qc),a);}
function tc(){return y(pb(this,qc));}
function qc(){}
_=qc.prototype=new v();_.eQ=sc;_.hC=tc;_.tI=9;function xc(a){return x(pb(this,uc),a);}
function yc(){return y(pb(this,uc));}
function uc(){}
_=uc.prototype=new v();_.eQ=xc;_.hC=yc;_.tI=10;function Ec(){Ec=tn;ad=fl(new dl());{Fc();}}
function Fc(){Ec();ed(new Ac());}
var ad;function Cc(){while((Ec(),ad).b>0){mb(jl((Ec(),ad),0)).D();}}
function Dc(){return null;}
function Ac(){}
_=Ac.prototype=new ki();_.x=Cc;_.y=Dc;_.tI=11;function dd(){dd=tn;gd=fl(new dl());od=fl(new dl());{kd();}}
function ed(a){dd();gl(gd,a);}
function fd(a){dd();$wnd.alert(a);}
function hd(){dd();var a,b;for(a=rj(gd);kj(a);){b=kb(lj(a),5);b.x();}}
function id(){dd();var a,b,c,d;d=null;for(a=rj(gd);kj(a);){b=kb(lj(a),5);c=b.y();{d=c;}}return d;}
function jd(){dd();var a,b;for(a=rj(od);kj(a);){b=mb(lj(a));null.D();}}
function kd(){dd();__gwt_initHandlers(function(){nd();},function(){return md();},function(){ld();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function ld(){dd();var a;a=o;{hd();}}
function md(){dd();var a;a=o;{return id();}}
function nd(){dd();var a;a=o;{jd();}}
var gd,od;function zd(c,b,a){b.appendChild(a);}
function Bd(b,a){return $doc.createElement(a);}
function Cd(c,b,a){b.cancelBubble=a;}
function Dd(b,a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function Ed(b,a){return a.__eventBits||0;}
function Fd(c,b,a){b.removeChild(a);}
function ae(c,a,b,d){a[b]=d;}
function be(c,a,b){a.__listener=b;}
function ce(c,a,b){if(!b){b='';}a.innerHTML=b;}
function de(c,b,a,d){b.style[a]=d;}
function pd(){}
_=pd.prototype=new ki();_.tI=0;function ud(c,a,b){return a==b;}
function vd(b,a){a.preventDefault();}
function wd(c,a){var b=a.parentNode;if(b==null){return null;}if(b.nodeType!=1)b=null;return b||null;}
function xd(d){$wnd.__dispatchCapturedMouseEvent=function(b){if($wnd.__dispatchCapturedEvent(b)){var a=$wnd.__captureElem;if(a&&a.__listener){ac(b,a,a.__listener);b.stopPropagation();}}};$wnd.__dispatchCapturedEvent=function(a){if(!hc(a)){a.stopPropagation();a.preventDefault();return false;}return true;};$wnd.addEventListener('click',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('dblclick',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousedown',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mouseup',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousemove',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousewheel',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('keydown',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keyup',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keypress',$wnd.__dispatchCapturedEvent,true);$wnd.__dispatchEvent=function(b){var c,a=this;while(a&& !(c=a.__listener))a=a.parentNode;if(a&&a.nodeType!=1)a=null;if(c)ac(b,a,c);};$wnd.__captureElem=null;}
function yd(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&2?$wnd.__dispatchEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function sd(){}
_=sd.prototype=new pd();_.tI=0;function qd(){}
_=qd.prototype=new sd();_.tI=0;function gg(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function hg(b,a){if(b.d!==null){gg(b,b.d,a);}b.d=a;}
function ig(b,a){kg(b.d,a);}
function jg(b,a){pc(b.d,a|ec(b.d));}
function kg(a,b){lc(a,'className',b);}
function eg(){}
_=eg.prototype=new ki();_.tI=0;_.d=null;function Dg(a){if(a.b){throw di(new ci(),"Should only call onAttach when the widget is detached from the browser's document");}a.b=true;mc(a.d,a);a.i();a.v();}
function Eg(a){if(!a.b){throw di(new ci(),"Should only call onDetach when the widget is attached to the browser's document");}try{a.w();}finally{a.j();mc(a.d,null);a.b=false;}}
function Fg(a){if(a.c!==null){ie(a.c,a);}else if(a.c!==null){throw di(new ci(),"This widget's parent does not implement HasWidgets");}}
function ah(b,a){if(b.b){mc(b.d,null);}hg(b,a);if(b.b){mc(a,b);}}
function bh(c,b){var a;a=c.c;if(b===null){if(a!==null&&a.b){Eg(c);}c.c=null;}else{if(a!==null){throw di(new ci(),'Cannot set a new parent without first clearing the old parent');}c.c=b;if(b.b){Dg(c);}}}
function ch(){}
function dh(){}
function eh(a){}
function fh(){}
function gh(){}
function hh(a){ah(this,a);}
function lg(){}
_=lg.prototype=new eg();_.i=ch;_.j=dh;_.t=eh;_.v=fh;_.w=gh;_.A=hh;_.tI=12;_.b=false;_.c=null;function of(b,a){bh(a,b);}
function qf(b,a){bh(a,null);}
function rf(){var a,b;for(b=this.q();qg(b);){a=rg(b);Dg(a);}}
function sf(){var a,b;for(b=this.q();qg(b);){a=rg(b);Eg(a);}}
function tf(){}
function uf(){}
function nf(){}
_=nf.prototype=new lg();_.i=rf;_.j=sf;_.v=tf;_.w=uf;_.tI=13;function Ae(a){a.a=ug(new mg(),a);}
function Be(a){Ae(a);return a;}
function Ce(c,a,b){Fg(a);vg(c.a,a);Ab(b,a.d);of(c,a);}
function Ee(b,c){var a;if(c.c!==b){return false;}qf(b,c);a=c.d;ic(fc(a),a);Bg(b.a,c);return true;}
function Fe(){return zg(this.a);}
function ze(){}
_=ze.prototype=new nf();_.q=Fe;_.tI=14;function fe(a){Be(a);a.A(Db());oc(a.d,'position','relative');oc(a.d,'overflow','hidden');return a;}
function ge(a,b){Ce(a,b,a.d);}
function ie(b,c){var a;a=Ee(b,c);if(a){je(c.d);}return a;}
function je(a){oc(a,'left','');oc(a,'top','');oc(a,'position','');}
function ee(){}
_=ee.prototype=new ze();_.tI=15;function df(){df=tn;uh(),wh;}
function bf(b,a){uh(),wh;ef(b,a);return b;}
function cf(b,a){if(b.a===null){b.a=ve(new ue());}gl(b.a,a);}
function ef(b,a){ah(b,a);jg(b,7041);}
function ff(a){switch(cc(a)){case 1:if(this.a!==null){xe(this.a,this);}break;case 4096:case 2048:break;case 128:case 512:case 256:break;}}
function gf(a){ef(this,a);}
function af(){}
_=af.prototype=new lg();_.t=ff;_.A=gf;_.tI=16;_.a=null;function ne(){ne=tn;uh(),wh;}
function me(b,a){uh(),wh;bf(b,a);return b;}
function oe(b,a){nc(b.d,a);}
function le(){}
_=le.prototype=new af();_.tI=17;function se(){se=tn;uh(),wh;}
function pe(a){uh(),wh;me(a,Cb());te(a.d);ig(a,'gwt-Button');return a;}
function qe(b,a){uh(),wh;pe(b);oe(b,a);return b;}
function re(c,a,b){uh(),wh;qe(c,a);cf(c,b);return c;}
function te(b){se();if(b.type=='submit'){try{b.setAttribute('type','button');}catch(a){}}}
function ke(){}
_=ke.prototype=new le();_.tI=18;function cj(d,a,b){var c;while(a.p()){c=a.s();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function ej(a){throw Fi(new Ei(),'add');}
function fj(b){var a;a=cj(this,this.q(),b);return a!==null;}
function bj(){}
_=bj.prototype=new ki();_.f=ej;_.h=fj;_.tI=0;function qj(b,a){throw gi(new fi(),'Index: '+a+', Size: '+b.b);}
function rj(a){return ij(new hj(),a);}
function sj(b,a){throw Fi(new Ei(),'add');}
function tj(a){this.e(this.B(),a);return true;}
function uj(e){var a,b,c,d,f;if(e===this){return true;}if(!lb(e,12)){return false;}f=kb(e,12);if(this.B()!=f.B()){return false;}c=rj(this);d=f.q();while(kj(c)){a=lj(c);b=lj(d);if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function vj(){var a,b,c,d;c=1;a=31;b=rj(this);while(kj(b)){d=lj(b);c=31*c+(d===null?0:d.hC());}return c;}
function wj(){return rj(this);}
function xj(a){throw Fi(new Ei(),'remove');}
function gj(){}
_=gj.prototype=new bj();_.e=sj;_.f=tj;_.eQ=uj;_.hC=vj;_.q=wj;_.z=xj;_.tI=19;function el(a){{hl(a);}}
function fl(a){el(a);return a;}
function gl(b,a){wl(b.a,b.b++,a);return true;}
function hl(a){a.a=z();a.b=0;}
function jl(b,a){if(a<0||a>=b.b){qj(b,a);}return sl(b.a,a);}
function kl(b,a){return ll(b,a,0);}
function ll(c,b,a){if(a<0){qj(c,a);}for(;a<c.b;++a){if(rl(b,sl(c.a,a))){return a;}}return (-1);}
function ml(c,a){var b;b=jl(c,a);ul(c.a,a,1);--c.b;return b;}
function ol(a,b){if(a<0||a>this.b){qj(this,a);}nl(this.a,a,b);++this.b;}
function pl(a){return gl(this,a);}
function nl(a,b,c){a.splice(b,0,c);}
function ql(a){return kl(this,a)!=(-1);}
function rl(a,b){return a===b||a!==null&&a.eQ(b);}
function tl(a){return jl(this,a);}
function sl(a,b){return a[b];}
function vl(a){return ml(this,a);}
function ul(a,c,b){a.splice(c,b);}
function wl(a,b,c){a[b]=c;}
function xl(){return this.b;}
function dl(){}
_=dl.prototype=new gj();_.e=ol;_.f=pl;_.h=ql;_.n=tl;_.z=vl;_.B=xl;_.tI=20;_.a=null;_.b=0;function ve(a){fl(a);return a;}
function xe(d,c){var a,b;for(a=rj(d);kj(a);){b=kb(lj(a),6);b.u(c);}}
function ue(){}
_=ue.prototype=new dl();_.tI=21;function Bf(){Bf=tn;ag=tm(new Al());}
function Af(b,a){Bf();fe(b);if(a===null){a=Cf();}b.A(a);Dg(b);return b;}
function Df(){Bf();return Ef(null);}
function Ef(c){Bf();var a,b;b=kb(zm(ag,c),7);if(b!==null){return b;}a=null;if(ag.c==0){Ff();}Am(ag,c,b=Af(new vf(),a));return b;}
function Cf(){Bf();return $doc.body;}
function Ff(){Bf();ed(new wf());}
function vf(){}
_=vf.prototype=new ee();_.tI=22;var ag;function yf(){var a,b;for(b=kk(yk((Bf(),ag)));rk(b);){a=kb(sk(b),7);if(a.b){Eg(a);}}}
function zf(){return null;}
function wf(){}
_=wf.prototype=new ki();_.x=yf;_.y=zf;_.tI=23;function ug(b,a){b.a=fb('[Lcom.google.gwt.user.client.ui.Widget;',[0],[9],[4],null);return b;}
function vg(a,b){yg(a,b,a.b);}
function xg(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]===c){return a;}}return (-1);}
function yg(d,e,a){var b,c;if(a<0||a>d.b){throw new fi();}if(d.b==d.a.a){c=fb('[Lcom.google.gwt.user.client.ui.Widget;',[0],[9],[d.a.a*2],null);for(b=0;b<d.a.a;++b){gb(c,b,d.a[b]);}d.a=c;}++d.b;for(b=d.b-1;b>a;--b){gb(d.a,b,d.a[b-1]);}gb(d.a,a,e);}
function zg(a){return og(new ng(),a);}
function Ag(c,b){var a;if(b<0||b>=c.b){throw new fi();}--c.b;for(a=b;a<c.b;++a){gb(c.a,a,c.a[a+1]);}gb(c.a,c.b,null);}
function Bg(b,c){var a;a=xg(b,c);if(a==(-1)){throw new pn();}Ag(b,a);}
function mg(){}
_=mg.prototype=new ki();_.tI=0;_.a=null;_.b=0;function og(b,a){b.b=a;return b;}
function qg(a){return a.a<a.b.b-1;}
function rg(a){if(a.a>=a.b.b){throw new pn();}return a.b.a[++a.a];}
function sg(){return qg(this);}
function tg(){return rg(this);}
function ng(){}
_=ng.prototype=new ki();_.p=sg;_.s=tg;_.tI=0;_.a=(-1);function uh(){uh=tn;vh=qh(new ph());wh=vh!==null?th(new ih()):vh;}
function th(a){uh();return a;}
function ih(){}
_=ih.prototype=new ki();_.tI=0;var vh,wh;function mh(){mh=tn;uh();}
function kh(a){nh(a);oh(a);sh(a);}
function lh(a){mh();th(a);kh(a);return a;}
function nh(b){return function(a){if(this.parentNode.onblur){this.parentNode.onblur(a);}};}
function oh(b){return function(a){if(this.parentNode.onfocus){this.parentNode.onfocus(a);}};}
function jh(){}
_=jh.prototype=new ih();_.tI=0;function rh(){rh=tn;mh();}
function qh(a){rh();lh(a);return a;}
function sh(b){return function(){var a=this.firstChild;$wnd.setTimeout(function(){a.focus();},0);};}
function ph(){}
_=ph.prototype=new jh();_.tI=0;function Ci(b,a){a;return b;}
function Bi(){}
_=Bi.prototype=new ki();_.tI=3;function ai(b,a){Ci(b,a);return b;}
function Fh(){}
_=Fh.prototype=new Bi();_.tI=4;function pi(b,a){ai(b,a);return b;}
function oi(){}
_=oi.prototype=new Fh();_.tI=5;function yh(){}
_=yh.prototype=new oi();_.tI=24;function Bh(){}
_=Bh.prototype=new oi();_.tI=25;function di(b,a){pi(b,a);return b;}
function ci(){}
_=ci.prototype=new oi();_.tI=26;function gi(b,a){pi(b,a);return b;}
function fi(){}
_=fi.prototype=new oi();_.tI=27;function ii(){}
_=ii.prototype=new oi();_.tI=28;function ti(b,a){return b.substr(a,b.length-a);}
function ui(a,b){return String(a)==b;}
function vi(a){if(!lb(a,1))return false;return ui(this,a);}
function xi(){var a=wi;if(!a){a=wi={};}var e=':'+this;var b=a[e];if(b==null){b=0;var f=this.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=this.charCodeAt(c);}b|=0;a[e]=b;}return b;}
_=String.prototype;_.eQ=vi;_.hC=xi;_.tI=2;var wi=null;function Ai(a){return s(a);}
function Fi(b,a){pi(b,a);return b;}
function Ei(){}
_=Ei.prototype=new oi();_.tI=29;function ij(b,a){b.c=a;return b;}
function kj(a){return a.a<a.c.B();}
function lj(a){if(!kj(a)){throw new pn();}return a.c.n(a.b=a.a++);}
function mj(a){if(a.b<0){throw new ci();}a.c.z(a.b);a.a=a.b;a.b=(-1);}
function nj(){return kj(this);}
function oj(){return lj(this);}
function hj(){}
_=hj.prototype=new ki();_.p=nj;_.s=oj;_.tI=0;_.a=0;_.b=(-1);function wk(f,d,e){var a,b,c;for(b=om(f.k());hm(b);){a=im(b);c=a.l();if(d===null?c===null:d.eQ(c)){if(e){jm(b);}return a;}}return null;}
function xk(b){var a;a=b.k();return Aj(new zj(),b,a);}
function yk(b){var a;a=ym(b);return ik(new hk(),b,a);}
function zk(a){return wk(this,a,false)!==null;}
function Ak(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!lb(d,13)){return false;}f=kb(d,13);c=xk(this);e=f.r();if(!al(c,e)){return false;}for(a=Cj(c);dk(a);){b=ek(a);h=this.o(b);g=f.o(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function Bk(b){var a;a=wk(this,b,false);return a===null?null:a.m();}
function Ck(){var a,b,c;b=0;for(c=om(this.k());hm(c);){a=im(c);b+=a.hC();}return b;}
function Dk(){return xk(this);}
function yj(){}
_=yj.prototype=new ki();_.g=zk;_.eQ=Ak;_.o=Bk;_.hC=Ck;_.r=Dk;_.tI=30;function al(e,b){var a,c,d;if(b===e){return true;}if(!lb(b,14)){return false;}c=kb(b,14);if(c.B()!=e.B()){return false;}for(a=c.q();a.p();){d=a.s();if(!e.h(d)){return false;}}return true;}
function bl(a){return al(this,a);}
function cl(){var a,b,c;a=0;for(b=this.q();b.p();){c=b.s();if(c!==null){a+=c.hC();}}return a;}
function Ek(){}
_=Ek.prototype=new bj();_.eQ=bl;_.hC=cl;_.tI=31;function Aj(b,a,c){b.a=a;b.b=c;return b;}
function Cj(b){var a;a=om(b.b);return bk(new ak(),b,a);}
function Dj(a){return this.a.g(a);}
function Ej(){return Cj(this);}
function Fj(){return this.b.a.c;}
function zj(){}
_=zj.prototype=new Ek();_.h=Dj;_.q=Ej;_.B=Fj;_.tI=32;function bk(b,a,c){b.a=c;return b;}
function dk(a){return a.a.p();}
function ek(b){var a;a=b.a.s();return a.l();}
function fk(){return dk(this);}
function gk(){return ek(this);}
function ak(){}
_=ak.prototype=new ki();_.p=fk;_.s=gk;_.tI=0;function ik(b,a,c){b.a=a;b.b=c;return b;}
function kk(b){var a;a=om(b.b);return pk(new ok(),b,a);}
function lk(a){return xm(this.a,a);}
function mk(){return kk(this);}
function nk(){return this.b.a.c;}
function hk(){}
_=hk.prototype=new bj();_.h=lk;_.q=mk;_.B=nk;_.tI=0;function pk(b,a,c){b.a=c;return b;}
function rk(a){return a.a.p();}
function sk(a){var b;b=a.a.s().m();return b;}
function tk(){return rk(this);}
function uk(){return sk(this);}
function ok(){}
_=ok.prototype=new ki();_.p=tk;_.s=uk;_.tI=0;function vm(){vm=tn;Cm=cn();}
function sm(a){{um(a);}}
function tm(a){vm();sm(a);return a;}
function um(a){a.a=z();a.d=A();a.b=pb(Cm,v);a.c=0;}
function wm(b,a){if(lb(a,1)){return gn(b.d,kb(a,1))!==Cm;}else if(a===null){return b.b!==Cm;}else{return fn(b.a,a,a.hC())!==Cm;}}
function xm(a,b){if(a.b!==Cm&&en(a.b,b)){return true;}else if(bn(a.d,b)){return true;}else if(Fm(a.a,b)){return true;}return false;}
function ym(a){return mm(new dm(),a);}
function zm(c,a){var b;if(lb(a,1)){b=gn(c.d,kb(a,1));}else if(a===null){b=c.b;}else{b=fn(c.a,a,a.hC());}return b===Cm?null:b;}
function Am(c,a,d){var b;{b=c.b;c.b=d;}if(b===Cm){++c.c;return null;}else{return b;}}
function Bm(c,a){var b;if(lb(a,1)){b=kn(c.d,kb(a,1));}else if(a===null){b=c.b;c.b=pb(Cm,v);}else{b=jn(c.a,a,a.hC());}if(b===Cm){return null;}else{--c.c;return b;}}
function Dm(e,c){vm();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.f(a[f]);}}}}
function Em(d,a){vm();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=El(c.substring(1),e);a.f(b);}}}
function Fm(f,h){vm();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.m();if(en(h,d)){return true;}}}}return false;}
function an(a){return wm(this,a);}
function bn(c,d){vm();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(en(d,a)){return true;}}}return false;}
function cn(){vm();}
function dn(){return ym(this);}
function en(a,b){vm();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function hn(a){return zm(this,a);}
function fn(f,h,e){vm();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.l();if(en(h,d)){return c.m();}}}}
function gn(b,a){vm();return b[':'+a];}
function jn(f,h,e){vm();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.l();if(en(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.m();}}}}
function kn(c,a){vm();a=':'+a;var b=c[a];delete c[a];return b;}
function Al(){}
_=Al.prototype=new yj();_.g=an;_.k=dn;_.o=hn;_.tI=33;_.a=null;_.b=null;_.c=0;_.d=null;var Cm;function Cl(b,a,c){b.a=a;b.b=c;return b;}
function El(a,b){return Cl(new Bl(),a,b);}
function Fl(b){var a;if(lb(b,15)){a=kb(b,15);if(en(this.a,a.l())&&en(this.b,a.m())){return true;}}return false;}
function am(){return this.a;}
function bm(){return this.b;}
function cm(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function Bl(){}
_=Bl.prototype=new ki();_.eQ=Fl;_.l=am;_.m=bm;_.hC=cm;_.tI=34;_.a=null;_.b=null;function mm(b,a){b.a=a;return b;}
function om(a){return fm(new em(),a.a);}
function pm(c){var a,b,d;if(lb(c,15)){a=kb(c,15);b=a.l();if(wm(this.a,b)){d=zm(this.a,b);return en(a.m(),d);}}return false;}
function qm(){return om(this);}
function rm(){return this.a.c;}
function dm(){}
_=dm.prototype=new Ek();_.h=pm;_.q=qm;_.B=rm;_.tI=35;function fm(c,b){var a;c.c=b;a=fl(new dl());if(c.c.b!==(vm(),Cm)){gl(a,Cl(new Bl(),null,c.c.b));}Em(c.c.d,a);Dm(c.c.a,a);c.a=rj(a);return c;}
function hm(a){return kj(a.a);}
function im(a){return a.b=kb(lj(a.a),15);}
function jm(a){if(a.b===null){throw di(new ci(),'Must call next() before remove().');}else{mj(a.a);Bm(a.c,a.b.l());a.b=null;}}
function km(){return hm(this);}
function lm(){return im(this);}
function em(){}
_=em.prototype=new ki();_.p=km;_.s=lm;_.tI=0;_.a=null;_.b=null;function pn(){}
_=pn.prototype=new oi();_.tI=36;function xh(){xb(new sb());}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{xh();}catch(a){b(d);}else{xh();}}
var ob=[{},{},{1:1},{3:1},{3:1},{3:1},{3:1},{2:1},{6:1},{2:1,4:1},{2:1},{5:1},{8:1,9:1,10:1,11:1},{8:1,9:1,10:1,11:1},{8:1,9:1,10:1,11:1},{8:1,9:1,10:1,11:1},{8:1,9:1,10:1,11:1},{8:1,9:1,10:1,11:1},{8:1,9:1,10:1,11:1},{12:1},{12:1},{12:1},{7:1,8:1,9:1,10:1,11:1},{5:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{13:1},{14:1},{14:1},{13:1},{15:1},{14:1},{3:1}];if (com_google_gwt_sample_hello_Hello) {  var __gwt_initHandlers = com_google_gwt_sample_hello_Hello.__gwt_initHandlers;  com_google_gwt_sample_hello_Hello.onScriptLoad(gwtOnLoad);}})();