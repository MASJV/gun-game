(()=>{var Yd=0,hh=1,Kd=2;var Cs=1,$d=2,Tr=3,Pi=0,Zt=1,Xt=2,Is=0,Er=1,Yi=2,uh=3,dh=4,Zd=5;var Ps=100,Jd=101,jd=102,Qd=103,ef=104,tf=200,nf=201,sf=202,rf=203,fh=204,ph=205,of=206,af=207,lf=208,cf=209,hf=210,uf=211,df=212,ff=213,pf=214,Ia=0,Pa=1,La=2,ar=3,Na=4,Da=5,Oa=6,Ua=7,tl=0,mf=1,gf=2,ln=0,mh=1,gh=2,xh=3,Co=4,_h=5,yh=6,vh=7,th="attached",xf="detached",Mh=300,Ls=301,wr=302,il=303,nl=304,nn=1e3,Ci=1001,lr=1002,Pt=1003,sl=1004;var Ns=1005;var Ft=1006,Ar=1007;var Li=1008;var pi=1009,bh=1010,Sh=1011,Rr=1012,rl=1013,Ki=1014,vi=1015,$i=1016,ol=1017,al=1018,Ds=1020,Th=35902,Eh=35899,wh=1021,Ah=1022,Ni=1023,wn=1026,kn=1027,ll=1028,cl=1029,ss=1030,hl=1031;var ul=1033,Io=33776,Po=33777,Lo=33778,No=33779,dl=35840,fl=35841,pl=35842,ml=35843,gl=36196,xl=37492,_l=37496,yl=37488,vl=37489,Do=37490,Ml=37491,bl=37808,Sl=37809,Tl=37810,El=37811,wl=37812,Al=37813,Rl=37814,Cl=37815,Il=37816,Pl=37817,Ll=37818,Nl=37819,Dl=37820,Ol=37821,Ul=36492,Fl=36494,zl=36495,kl=36283,Bl=36284,Oo=36285,Hl=36286,Uo=2200,Gl=2201,_f=2202,Ms=2300,bs=2301,Ra=2302,ih=2303,_s=2400,ys=2401,to=2402,Vl=2500,yf=2501,Rh=0,Fo=1,Cr=2,vf=3200;var zo=0,Mf=1,Bn="",Ct="srgb",ai="srgb-linear",io="linear",st="srgb";var Ca=7680;var bf=519,Sf=512,Tf=513,Ef=514,Ch=515,wf=516,Af=517,Ih=518,Ph=519,Lh=35044;var Nh="300 es",Ii=2e3,cr=2001;function mm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function gm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function hr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Rf(){let s=hr("canvas");return s.style.display="block",s}var rd={},ur=null;function no(...s){let e="THREE."+s.shift();ur?ur("log",e,...s):console.log(e,...s)}function Cf(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Re(...s){s=Cf(s);let e="THREE."+s.shift();if(ur)ur("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Fe(...s){s=Cf(s);let e="THREE."+s.shift();if(ur)ur("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function vs(...s){let e=s.join(" ");e in rd||(rd[e]=!0,Re(...s))}function If(s,e,t){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Pf={[Ia]:Ia,[La]:Oa,[Na]:Na,[ar]:Da,[Pa]:Pa,[Oa]:La,[Ua]:Ua,[Da]:ar},Vi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,e);e.target=null}}},ei=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],od=1234567,Qr=Math.PI/180,Ss=180/Math.PI;function cn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ei[s&255]+ei[s>>8&255]+ei[s>>16&255]+ei[s>>24&255]+"-"+ei[e&255]+ei[e>>8&255]+"-"+ei[e>>16&15|64]+ei[e>>24&255]+"-"+ei[t&63|128]+ei[t>>8&255]+"-"+ei[t>>16&255]+ei[t>>24&255]+ei[i&255]+ei[i>>8&255]+ei[i>>16&255]+ei[i>>24&255]).toLowerCase()}function Ze(s,e,t){return Math.max(e,Math.min(t,s))}function Dh(s,e){return(s%e+e)%e}function xm(s,e,t,i,n){return i+(s-e)*(n-i)/(t-e)}function _m(s,e,t){return s!==e?(t-s)/(e-s):0}function eo(s,e,t){return(1-t)*s+t*e}function ym(s,e,t,i){return eo(s,e,1-Math.exp(-t*i))}function vm(s,e=1){return e-Math.abs(Dh(s,e*2)-e)}function Mm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function bm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Sm(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Tm(s,e){return s+Math.random()*(e-s)}function Em(s){return s*(.5-Math.random())}function wm(s){s!==void 0&&(od=s);let e=od+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Am(s){return s*Qr}function Rm(s){return s*Ss}function Cm(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Im(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Oh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Pm(s,e,t,i,n){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),d=r((e-i)/2),u=o((e-i)/2),f=r((i-e)/2),p=o((i-e)/2);switch(n){case"XYX":s.set(a*h,l*d,l*u,a*c);break;case"YZY":s.set(l*u,a*h,l*d,a*c);break;case"ZXZ":s.set(l*d,l*u,a*h,a*c);break;case"XZX":s.set(a*h,l*p,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*p,a*c);break;case"ZYZ":s.set(l*p,l*f,a*h,a*c);break;default:Re("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Wl(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Uh(s,e){if(e.constructor===Float32Array)return s;let t=Wl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function Fh(s,e){if(e.constructor===Float32Array)return s;let t=Wl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}var Mi={DEG2RAD:Qr,RAD2DEG:Ss,generateUUID:cn,clamp:Ze,euclideanModulo:Dh,mapLinear:xm,inverseLerp:_m,lerp:eo,damp:ym,pingpong:vm,smoothstep:Mm,smootherstep:bm,randInt:Sm,randFloat:Tm,randFloatSpread:Em,seededRandom:wm,degToRad:Am,radToDeg:Rm,isPowerOfTwo:Cm,ceilPowerOfTwo:Im,floorPowerOfTwo:Oh,setQuaternionFromProperEuler:Pm,normalize:Fh,denormalize:Uh},Ne=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*n+e.x,this.y=r*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Mt=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3],u=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(d!==x||l!==u||c!==f||h!==p){let m=l*u+c*f+h*p+d*x;m<0&&(u=-u,f=-f,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let _=Math.acos(m),M=Math.sin(_);g=Math.sin(g*_)/M,a=Math.sin(a*_)/M,l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+x*a}else{l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+x*a;let _=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=_,c*=_,h*=_,d*=_}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,n,r,o){let a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=r[o],u=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+h*d+l*f-c*u,e[t+1]=l*p+h*u+c*d-a*f,e[t+2]=c*p+h*f+a*u-l*d,e[t+3]=h*p-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),d=a(r/2),u=l(i/2),f=l(n/2),p=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:Re("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-n)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-n)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+n*c-r*l,this._y=n*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,n=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,n=-n,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ad.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ad.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*n-a*i),h=2*(a*t-r*n),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=n+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=n*l-r*a,this.y=r*o-i*l,this.z=i*a-n*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ic.copy(this).projectOnVector(e),this.sub(Ic)}reflect(e){return this.sub(Ic.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ic=new P,ad=new Mt,Be=class{static{this.prototype.isMatrix3=!0}constructor(e,t,i,n,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,o,a,l,c)}set(e,t,i,n,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=n,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],p=i[8],x=n[0],m=n[3],g=n[6],_=n[1],M=n[4],v=n[7],b=n[2],E=n[5],y=n[8];return r[0]=o*x+a*_+l*b,r[3]=o*m+a*M+l*E,r[6]=o*g+a*v+l*y,r[1]=c*x+h*_+d*b,r[4]=c*m+h*M+d*E,r[7]=c*g+h*v+d*y,r[2]=u*x+f*_+p*b,r[5]=u*m+f*M+p*E,r[8]=u*g+f*v+p*y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+n*r*c-n*o*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,p=t*d+i*u+n*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=d*x,e[1]=(n*c-h*i)*x,e[2]=(a*i-n*o)*x,e[3]=u*x,e[4]=(h*t-n*l)*x,e[5]=(n*r-a*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-n*c,n*l,-n*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return vs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Pc.makeScale(e,t)),this}rotate(e){return vs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Pc.makeRotation(-e)),this}translate(e,t){return vs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Pc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Pc=new Be,ld=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cd=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lm(){let s={enabled:!0,workingColorSpace:ai,spaces:{},convert:function(n,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===st&&(n.r=En(n.r),n.g=En(n.g),n.b=En(n.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===st&&(n.r=or(n.r),n.g=or(n.g),n.b=or(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Bn?io:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,o){return n.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[ai]:{primaries:e,whitePoint:i,transfer:io,toXYZ:ld,fromXYZ:cd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:e,whitePoint:i,transfer:st,toXYZ:ld,fromXYZ:cd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}}),s}var Ye=Lm();function En(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function or(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Gs,Fa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Gs===void 0&&(Gs=hr("canvas")),Gs.width=e.width,Gs.height=e.height;let n=Gs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=Gs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=hr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=En(r[o]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(En(t[i]/255)*255):t[i]=En(t[i]);return{data:t,width:e.width,height:e.height}}else return Re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Nm=0,dr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=cn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push(Lc(n[o].image)):r.push(Lc(n[o]))}else r=Lc(n);i.url=r}return t||(e.images[this.uuid]=i),i}};function Lc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Fa.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Re("Texture: Unable to serialize Texture."),{})}var Dm=0,Nc=new P,zt=class s extends Vi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,i=Ci,n=Ci,r=Ft,o=Li,a=Ni,l=pi,c=s.DEFAULT_ANISOTROPY,h=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dm++}),this.uuid=cn(),this.name="",this.source=new dr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Nc).x}get height(){return this.source.getSize(Nc).y}get depth(){return this.source.getSize(Nc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Re(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){Re(`Texture.setValues(): property '${t}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nn:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case lr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nn:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case lr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=Mh;zt.DEFAULT_ANISOTROPY=1;var ot=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*n+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,v=(f+1)/2,b=(g+1)/2,E=(h+u)/4,y=(d+x)/4,S=(p+m)/4;return M>v&&M>b?M<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(M),n=E/i,r=y/i):v>b?v<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(v),i=E/n,r=S/n):b<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(b),i=y/r,n=S/r),this.set(i,n,r,t),this}let _=Math.sqrt((m-p)*(m-p)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(m-p)/_,this.y=(d-x)/_,this.z=(u-h)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},za=class extends Vi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ft,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t),this.textures=[];let n=i.count;for(let r=0;r<n;r++)this.textures[r]=new zt({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ft,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new dr(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},yi=class extends za{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},so=class extends zt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ka=class extends zt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ue=class s{static{this.prototype.isMatrix4=!0}constructor(e,t,i,n,r,o,a,l,c,h,d,u,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,o,a,l,c,h,d,u,f,p,x,m)}set(e,t,i,n,r,o,a,l,c,h,d,u,f,p,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=n,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,n=1/Vs.setFromMatrixColumn(e,0).length(),r=1/Vs.setFromMatrixColumn(e,1).length(),o=1/Vs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,p=a*h,x=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=u-x*c,t[9]=-a*l,t[2]=x-u*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,p=c*h,x=c*d;t[0]=u+x*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=x+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,p=c*h,x=c*d;t[0]=u-x*a,t[4]=-o*d,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=x-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,f=o*d,p=a*h,x=a*d;t[0]=l*h,t[4]=p*c-f,t[8]=u*c+x,t[1]=l*d,t[5]=x*c+u,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=x-u*d,t[8]=p*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+p,t[10]=u-x*d}else if(e.order==="XZY"){let u=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+x,t[5]=o*h,t[9]=f*d-p,t[2]=p*d-f,t[6]=a*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Om,e,Um)}lookAt(e,t,i){let n=this.elements;return xi.subVectors(e,t),xi.lengthSq()===0&&(xi.z=1),xi.normalize(),qn.crossVectors(i,xi),qn.lengthSq()===0&&(Math.abs(i.z)===1?xi.x+=1e-4:xi.z+=1e-4,xi.normalize(),qn.crossVectors(i,xi)),qn.normalize(),ea.crossVectors(xi,qn),n[0]=qn.x,n[4]=ea.x,n[8]=xi.x,n[1]=qn.y,n[5]=ea.y,n[9]=xi.y,n[2]=qn.z,n[6]=ea.z,n[10]=xi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],p=i[2],x=i[6],m=i[10],g=i[14],_=i[3],M=i[7],v=i[11],b=i[15],E=n[0],y=n[4],S=n[8],C=n[12],R=n[1],N=n[5],D=n[9],k=n[13],L=n[2],F=n[6],H=n[10],B=n[14],J=n[3],X=n[7],q=n[11],te=n[15];return r[0]=o*E+a*R+l*L+c*J,r[4]=o*y+a*N+l*F+c*X,r[8]=o*S+a*D+l*H+c*q,r[12]=o*C+a*k+l*B+c*te,r[1]=h*E+d*R+u*L+f*J,r[5]=h*y+d*N+u*F+f*X,r[9]=h*S+d*D+u*H+f*q,r[13]=h*C+d*k+u*B+f*te,r[2]=p*E+x*R+m*L+g*J,r[6]=p*y+x*N+m*F+g*X,r[10]=p*S+x*D+m*H+g*q,r[14]=p*C+x*k+m*B+g*te,r[3]=_*E+M*R+v*L+b*J,r[7]=_*y+M*N+v*F+b*X,r[11]=_*S+M*D+v*H+b*q,r[15]=_*C+M*k+v*B+b*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],p=e[3],x=e[7],m=e[11],g=e[15],_=l*f-c*u,M=a*f-c*d,v=a*u-l*d,b=o*f-c*h,E=o*u-l*h,y=o*d-a*h;return t*(x*_-m*M+g*v)-i*(p*_-m*b+g*E)+n*(p*M-x*b+g*y)-r*(p*v-x*E+m*y)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-i*(r*h-a*l)+n*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],p=e[12],x=e[13],m=e[14],g=e[15],_=t*a-i*o,M=t*l-n*o,v=t*c-r*o,b=i*l-n*a,E=i*c-r*a,y=n*c-r*l,S=h*x-d*p,C=h*m-u*p,R=h*g-f*p,N=d*m-u*x,D=d*g-f*x,k=u*g-f*m,L=_*k-M*D+v*N+b*R-E*C+y*S;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/L;return e[0]=(a*k-l*D+c*N)*F,e[1]=(n*D-i*k-r*N)*F,e[2]=(x*y-m*E+g*b)*F,e[3]=(u*E-d*y-f*b)*F,e[4]=(l*R-o*k-c*C)*F,e[5]=(t*k-n*R+r*C)*F,e[6]=(m*v-p*y-g*M)*F,e[7]=(h*y-u*v+f*M)*F,e[8]=(o*D-a*R+c*S)*F,e[9]=(i*R-t*D-r*S)*F,e[10]=(p*E-x*v+g*_)*F,e[11]=(d*v-h*E-f*_)*F,e[12]=(a*C-o*N-l*S)*F,e[13]=(t*N-i*C+n*S)*F,e[14]=(x*M-p*b-m*_)*F,e[15]=(h*b-d*M+u*_)*F,this}scale(e){let t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,o){return this.set(1,i,r,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,p=r*d,x=o*h,m=o*d,g=a*d,_=l*c,M=l*h,v=l*d,b=i.x,E=i.y,y=i.z;return n[0]=(1-(x+g))*b,n[1]=(f+v)*b,n[2]=(p-M)*b,n[3]=0,n[4]=(f-v)*E,n[5]=(1-(u+g))*E,n[6]=(m+_)*E,n[7]=0,n[8]=(p+M)*y,n[9]=(m-_)*y,n[10]=(1-(u+x))*y,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Vs.set(n[0],n[1],n[2]).length(),a=Vs.set(n[4],n[5],n[6]).length(),l=Vs.set(n[8],n[9],n[10]).length();r<0&&(o=-o),ki.copy(this);let c=1/o,h=1/a,d=1/l;return ki.elements[0]*=c,ki.elements[1]*=c,ki.elements[2]*=c,ki.elements[4]*=h,ki.elements[5]*=h,ki.elements[6]*=h,ki.elements[8]*=d,ki.elements[9]*=d,ki.elements[10]*=d,t.setFromRotationMatrix(ki),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,n,r,o,a=Ii,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(i-n),u=(t+e)/(t-e),f=(i+n)/(i-n),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===Ii)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===cr)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,n,r,o,a=Ii,l=!1){let c=this.elements,h=2/(t-e),d=2/(i-n),u=-(t+e)/(t-e),f=-(i+n)/(i-n),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===Ii)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===cr)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Vs=new P,ki=new Ue,Om=new P(0,0,0),Um=new P(1,1,1),qn=new P,ea=new P,xi=new P,hd=new Ue,ud=new Mt,ui=class s{constructor(e=0,t=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,r=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],d=n[2],u=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Re("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return hd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ud.setFromEuler(this),this.setFromQuaternion(ud,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ui.DEFAULT_ORDER="XYZ";var ro=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Fm=0,dd=new P,Ws=new Mt,_n=new Ue,ta=new P,Hr=new P,zm=new P,km=new Mt,fd=new P(1,0,0),pd=new P(0,1,0),md=new P(0,0,1),gd={type:"added"},Bm={type:"removed"},Xs={type:"childadded",child:null},Dc={type:"childremoved",child:null},dt=class s extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new P,t=new ui,i=new Mt,n=new P(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ue},normalMatrix:{value:new Be}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ro,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.premultiply(Ws),this}rotateX(e){return this.rotateOnAxis(fd,e)}rotateY(e){return this.rotateOnAxis(pd,e)}rotateZ(e){return this.rotateOnAxis(md,e)}translateOnAxis(e,t){return dd.copy(e).applyQuaternion(this.quaternion),this.position.add(dd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fd,e)}translateY(e){return this.translateOnAxis(pd,e)}translateZ(e){return this.translateOnAxis(md,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ta.copy(e):ta.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(Hr,ta,this.up):_n.lookAt(ta,Hr,this.up),this.quaternion.setFromRotationMatrix(_n),n&&(_n.extractRotation(n.matrixWorld),Ws.setFromRotationMatrix(_n),this.quaternion.premultiply(Ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Fe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gd),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null):Fe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bm),Dc.child=e,this.dispatchEvent(Dc),Dc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gd),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,e,zm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,km,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,n=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*n,r[13]+=i-r[1]*t-r[5]*i-r[9]*n,r[14]+=n-r[2]*t-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(a=>({...a})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));n.material=a}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];n.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=n,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};dt.DEFAULT_UP=new P(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var vt=class extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Hm={type:"move"},fr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Hm)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new vt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Lf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},ia={h:0,s:0,l:0};function Oc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var be=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ye.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=Ye.workingColorSpace){if(e=Dh(e,1),t=Ze(t,0,1),i=Ze(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Oc(o,r,e+1/3),this.g=Oc(o,r,e),this.b=Oc(o,r,e-1/3)}return Ye.colorSpaceToWorking(this,n),this}setStyle(e,t=Ct){function i(r){r!==void 0&&parseFloat(r)<1&&Re("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Re("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=n[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){let i=Lf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=En(e.r),this.g=En(e.g),this.b=En(e.b),this}copyLinearToSRGB(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return Ye.workingToColorSpace(ti.copy(this),e),Math.round(Ze(ti.r*255,0,255))*65536+Math.round(Ze(ti.g*255,0,255))*256+Math.round(Ze(ti.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(ti.copy(this),t);let i=ti.r,n=ti.g,r=ti.b,o=Math.max(i,n,r),a=Math.min(i,n,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(n-r)/d+(n<r?6:0);break;case n:l=(r-i)/d+2;break;case r:l=(i-n)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(ti.copy(this),t),e.r=ti.r,e.g=ti.g,e.b=ti.b,e}getStyle(e=Ct){Ye.workingToColorSpace(ti.copy(this),e);let t=ti.r,i=ti.g,n=ti.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(Yn),this.setHSL(Yn.h+e,Yn.s+t,Yn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Yn),e.getHSL(ia);let i=eo(Yn.h,ia.h,t),n=eo(Yn.s,ia.s,t),r=eo(Yn.l,ia.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ti=new be;be.NAMES=Lf;var oo=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new be(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var An=class extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Bi=new P,yn=new P,Uc=new P,vn=new P,qs=new P,Ys=new P,xd=new P,Fc=new P,zc=new P,kc=new P,Bc=new ot,Hc=new ot,Gc=new ot,Tn=class s{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Bi.subVectors(e,t),n.cross(Bi);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){Bi.subVectors(n,t),yn.subVectors(i,t),Uc.subVectors(e,t);let o=Bi.dot(Bi),a=Bi.dot(yn),l=Bi.dot(Uc),c=yn.dot(yn),h=yn.dot(Uc),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,p=(o*h-a*l)*u;return r.set(1-f-p,p,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(e,t,i,n,r,o,a,l){return this.getBarycoord(e,t,i,n,vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vn.x),l.addScaledVector(o,vn.y),l.addScaledVector(a,vn.z),l)}static getInterpolatedAttribute(e,t,i,n,r,o){return Bc.setScalar(0),Hc.setScalar(0),Gc.setScalar(0),Bc.fromBufferAttribute(e,t),Hc.fromBufferAttribute(e,i),Gc.fromBufferAttribute(e,n),o.setScalar(0),o.addScaledVector(Bc,r.x),o.addScaledVector(Hc,r.y),o.addScaledVector(Gc,r.z),o}static isFrontFacing(e,t,i,n){return Bi.subVectors(i,t),yn.subVectors(e,t),Bi.cross(yn).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bi.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),Bi.cross(yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return s.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,r=this.c,o,a;qs.subVectors(n,i),Ys.subVectors(r,i),Fc.subVectors(e,i);let l=qs.dot(Fc),c=Ys.dot(Fc);if(l<=0&&c<=0)return t.copy(i);zc.subVectors(e,n);let h=qs.dot(zc),d=Ys.dot(zc);if(h>=0&&d<=h)return t.copy(n);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(i).addScaledVector(qs,o);kc.subVectors(e,r);let f=qs.dot(kc),p=Ys.dot(kc);if(p>=0&&f<=p)return t.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(Ys,a);let m=h*p-f*d;if(m<=0&&d-h>=0&&f-p>=0)return xd.subVectors(r,n),a=(d-h)/(d-h+(f-p)),t.copy(n).addScaledVector(xd,a);let g=1/(m+x+u);return o=x*g,a=u*g,t.copy(i).addScaledVector(qs,o).addScaledVector(Ys,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},$t=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Hi):Hi.fromBufferAttribute(r,o),Hi.applyMatrix4(e.matrixWorld),this.expandByPoint(Hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),na.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),na.copy(i.boundingBox)),na.applyMatrix4(e.matrixWorld),this.union(na)}let n=e.children;for(let r=0,o=n.length;r<o;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hi),Hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gr),sa.subVectors(this.max,Gr),Ks.subVectors(e.a,Gr),$s.subVectors(e.b,Gr),Zs.subVectors(e.c,Gr),Kn.subVectors($s,Ks),$n.subVectors(Zs,$s),ps.subVectors(Ks,Zs);let t=[0,-Kn.z,Kn.y,0,-$n.z,$n.y,0,-ps.z,ps.y,Kn.z,0,-Kn.x,$n.z,0,-$n.x,ps.z,0,-ps.x,-Kn.y,Kn.x,0,-$n.y,$n.x,0,-ps.y,ps.x,0];return!Vc(t,Ks,$s,Zs,sa)||(t=[1,0,0,0,1,0,0,0,1],!Vc(t,Ks,$s,Zs,sa))?!1:(ra.crossVectors(Kn,$n),t=[ra.x,ra.y,ra.z],Vc(t,Ks,$s,Zs,sa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Mn=[new P,new P,new P,new P,new P,new P,new P,new P],Hi=new P,na=new $t,Ks=new P,$s=new P,Zs=new P,Kn=new P,$n=new P,ps=new P,Gr=new P,sa=new P,ra=new P,ms=new P;function Vc(s,e,t,i,n){for(let r=0,o=s.length-3;r<=o;r+=3){ms.fromArray(s,r);let a=n.x*Math.abs(ms.x)+n.y*Math.abs(ms.y)+n.z*Math.abs(ms.z),l=e.dot(ms),c=t.dot(ms),h=i.dot(ms);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Nt=new P,oa=new Ne,Gm=0,pt=class extends Vi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Lh,this.updateRanges=[],this.gpuType=vi,this.version=0,this._normalizationScale=e!==void 0?Wl(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)oa.fromBufferAttribute(this,t),oa.applyMatrix3(e),this.setXY(t,oa.x,oa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Uh(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Fh(e,this.array)}};var ao=class extends pt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var lo=class extends pt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ke=class extends pt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Vm=new $t,Vr=new P,Wc=new P,di=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Vm.setFromPoints(e).getCenter(i);let n=0;for(let r=0,o=e.length;r<o;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vr.subVectors(e,this.center);let t=Vr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Vr,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vr.copy(e.center).add(Wc)),this.expandByPoint(Vr.copy(e.center).sub(Wc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Wm=0,Ri=new Ue,Xc=new dt,Js=new P,_i=new $t,Wr=new $t,Wt=new P,at=class s extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=cn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mm(e)?lo:ao)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Be().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ri.makeRotationFromQuaternion(e),this.applyMatrix4(Ri),this}rotateX(e){return Ri.makeRotationX(e),this.applyMatrix4(Ri),this}rotateY(e){return Ri.makeRotationY(e),this.applyMatrix4(Ri),this}rotateZ(e){return Ri.makeRotationZ(e),this.applyMatrix4(Ri),this}translate(e,t,i){return Ri.makeTranslation(e,t,i),this.applyMatrix4(Ri),this}scale(e,t,i){return Ri.makeScale(e,t,i),this.applyMatrix4(Ri),this}lookAt(e){return Xc.lookAt(e),Xc.updateMatrix(),this.applyMatrix4(Xc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,r=e.length;n<r;n++){let o=e[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ke(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&Re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $t);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let r=t[i];_i.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Fe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new di);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(_i.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Wr.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(_i.min,Wr.min),_i.expandByPoint(Wt),Wt.addVectors(_i.max,Wr.max),_i.expandByPoint(Wt)):(_i.expandByPoint(Wr.min),_i.expandByPoint(Wr.max))}_i.getCenter(i);let n=0;for(let r=0,o=e.count;r<o;r++)Wt.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(Wt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Wt.fromBufferAttribute(a,c),l&&(Js.fromBufferAttribute(e,c),Wt.add(Js)),n=Math.max(n,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Fe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Fe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,n=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new pt(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let C=0;C<i.count;C++)a[C]=new P,l[C]=new P;let h=new P,d=new P,u=new P,f=new Ne,p=new Ne,x=new Ne,m=new P,g=new P;function _(C,R,N){c[C]=c[R]=c[N]=1,h.fromBufferAttribute(i,C),d.fromBufferAttribute(i,R),u.fromBufferAttribute(i,N),f.fromBufferAttribute(r,C),p.fromBufferAttribute(r,R),x.fromBufferAttribute(r,N),d.sub(h),u.sub(h),p.sub(f),x.sub(f);let D=1/(p.x*x.y-x.x*p.y);isFinite(D)&&(m.copy(d).multiplyScalar(x.y).addScaledVector(u,-p.y).multiplyScalar(D),g.copy(u).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(D),a[C].add(m),a[R].add(m),a[N].add(m),l[C].add(g),l[R].add(g),l[N].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let C=0,R=M.length;C<R;++C){let N=M[C],D=N.start,k=N.count;for(let L=D,F=D+k;L<F;L+=3)_(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let v=new P,b=new P,E=new P,y=new P;function S(C){E.fromBufferAttribute(n,C),y.copy(E);let R=a[C];v.copy(R),v.sub(E.multiplyScalar(E.dot(R))).normalize(),b.crossVectors(y,R);let D=b.dot(l[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,D)}for(let C=0,R=i.count;C<R;++C)c[C]&&S(C);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new pt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let n=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,d=new P;if(e)for(let u=0,f=e.count;u<f;u+=3){let p=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);n.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(n,r),h.cross(d),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)n.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(n,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let g=0;g<h;g++)u[p++]=c[f++]}return new pt(u,h,d)}if(this.index===null)return Re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,i=this.index.array,n=this.attributes;for(let a in n){let l=n[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let n=e.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ts=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Lh,this.updateRanges=[],this.version=0,this.uuid=cn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=_d(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),n=new this.constructor(i,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=_d(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function _d(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=cn()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}var oi=new P,jn=class s{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n,this._normalizationScale=e!==void 0?Wl(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)oi.fromBufferAttribute(this,t),oi.applyMatrix4(e),this.setXYZ(t,oi.x,oi.y,oi.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)oi.fromBufferAttribute(this,t),oi.applyNormalMatrix(e),this.setXYZ(t,oi.x,oi.y,oi.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)oi.fromBufferAttribute(this,t),oi.transformDirection(e),this.setXYZ(t,oi.x,oi.y,oi.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=r,this}clone(e){if(e===void 0){no("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return new pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){no("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Uh(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Fh(e,this.data.array)}},qc=new P,Xm=new P,qm=new Be,Gi=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=qc.subVectors(i,t).cross(Xm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let n=e.delta(qc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||qm.getNormalMatrix(e),n=this.coplanarPoint(qc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ym=0,ii=class extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=cn(),this.name="",this.type="Material",this.blending=Er,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fh,this.blendDst=ph,this.blendEquation=Ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ca,this.stencilZFail=Ca,this.stencilZPass=Ca,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Re(`Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){Re(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=n(e.textures),o=n(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Gi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ne().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ne().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},pr=class extends ii{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},js,Xr=new P,Qs=new P,er=new P,tr=new Ne,qr=new Ne,Nf=new Ue,aa=new P,Yr=new P,la=new P,yd=new Ne,Yc=new Ne,vd=new Ne,co=class extends dt{constructor(e=new pr){if(super(),this.isSprite=!0,this.type="Sprite",js===void 0){js=new at;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ts(t,5);js.setIndex([0,1,2,0,2,3]),js.setAttribute("position",new jn(i,3,0,!1)),js.setAttribute("uv",new jn(i,2,3,!1))}this.geometry=js,this.material=e,this.center=new Ne(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Fe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Qs.setFromMatrixScale(this.matrixWorld),Nf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),er.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qs.multiplyScalar(-er.z);let i=this.material.rotation,n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));let o=this.center;ca(aa.set(-.5,-.5,0),er,o,Qs,n,r),ca(Yr.set(.5,-.5,0),er,o,Qs,n,r),ca(la.set(.5,.5,0),er,o,Qs,n,r),yd.set(0,0),Yc.set(1,0),vd.set(1,1);let a=e.ray.intersectTriangle(aa,Yr,la,!1,Xr);if(a===null&&(ca(Yr.set(-.5,.5,0),er,o,Qs,n,r),Yc.set(0,1),a=e.ray.intersectTriangle(aa,la,Yr,!1,Xr),a===null))return;let l=e.ray.origin.distanceTo(Xr);l<e.near||l>e.far||t.push({distance:l,point:Xr.clone(),uv:Tn.getInterpolation(Xr,aa,Yr,la,yd,Yc,vd,new Ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function ca(s,e,t,i,n,r){tr.subVectors(s,t).addScalar(.5).multiply(i),n!==void 0?(qr.x=r*tr.x-n*tr.y,qr.y=n*tr.x+r*tr.y):qr.copy(tr),s.copy(e),s.x+=qr.x,s.y+=qr.y,s.applyMatrix4(Nf)}var bn=new P,Kc=new P,ha=new P,ua=new P,Es=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bn.copy(this.origin).addScaledVector(this.direction,t),bn.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Kc.copy(e).add(t).multiplyScalar(.5),ha.copy(t).sub(e).normalize(),ua.copy(this.origin).sub(Kc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ha),a=ua.dot(this.direction),l=-ua.dot(ha),c=ua.lengthSq(),h=Math.abs(1-o*o),d,u,f,p;if(h>0)if(d=o*l-a,u=o*a-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(Kc).addScaledVector(ha,u),f}intersectSphere(e,t){if(e.radius<0)return null;bn.subVectors(e.center,this.origin);let i=bn.dot(this.direction),n=bn.dot(bn)-i*i,r=e.radius*e.radius;if(n>r)return null;let o=Math.sqrt(r-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,n=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,n=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>n||((r>i||isNaN(i))&&(i=r),(o<n||isNaN(n))&&(n=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,bn)!==null}intersectTriangle(e,t,i,n,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=e.x-o.x,u=e.y-o.y,f=e.z-o.z,p=t.x-o.x,x=t.y-o.y,m=t.z-o.z,g=i.x-o.x,_=i.y-o.y,M=i.z-o.z,v=Math.abs(l),b=Math.abs(c),E=Math.abs(h),y,S,C,R,N,D,k,L,F,H,B,J;if(v>=b&&v>=E?(C=l,D=d,F=p,J=g,l>=0?(y=c,S=h,R=u,N=f,k=x,L=m,H=_,B=M):(y=h,S=c,R=f,N=u,k=m,L=x,H=M,B=_)):b>=E?(C=c,D=u,F=x,J=_,c>=0?(y=h,S=l,R=f,N=d,k=m,L=p,H=M,B=g):(y=l,S=h,R=d,N=f,k=p,L=m,H=g,B=M)):(C=h,D=f,F=m,J=M,h>=0?(y=l,S=c,R=d,N=u,k=p,L=x,H=g,B=_):(y=c,S=l,R=u,N=d,k=x,L=p,H=_,B=g)),C===0)return null;let X=y/C,q=S/C,te=1/C,me=R-X*D,Ee=N-q*D,K=k-X*F,se=L-q*F,_e=H-X*J,we=B-q*J,ue=_e*se-we*K,ze=me*we-Ee*_e,St=K*Ee-se*me;if(n){if(ue<0||ze<0||St<0)return null}else if((ue<0||ze<0||St<0)&&(ue>0||ze>0||St>0))return null;let Le=ue+ze+St;if(Le===0)return null;let et=te*(ue*D+ze*F+St*J);return(Le>0?et<0:et>0)?null:this.at(et/Le,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},nt=class extends ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Md=new Ue,gs=new Es,da=new di,bd=new P,fa=new P,pa=new P,ma=new P,$c=new P,ga=new P,Sd=new P,xa=new P,ke=class extends dt{constructor(e=new at,t=new nt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let a=this.morphTargetInfluences;if(r&&a){ga.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&($c.fromBufferAttribute(d,e),o?ga.addScaledVector($c,h):ga.addScaledVector($c.sub(t),h))}t.add(ga)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),da.copy(i.boundingSphere),da.applyMatrix4(r),gs.copy(e.ray).recast(e.near),!(da.containsPoint(gs.origin)===!1&&(gs.intersectSphere(da,bd)===null||gs.origin.distanceToSquared(bd)>(e.far-e.near)**2))&&(Md.copy(r).invert(),gs.copy(e.ray).applyMatrix4(Md),!(i.boundingBox!==null&&gs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,gs)))}_computeIntersections(e,t,i){let n,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let m=u[p],g=o[m.materialIndex],_=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=_,b=M;v<b;v+=3){let E=a.getX(v),y=a.getX(v+1),S=a.getX(v+2);n=_a(this,g,e,i,c,h,d,E,y,S),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let _=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);n=_a(this,o,e,i,c,h,d,_,M,v),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let m=u[p],g=o[m.materialIndex],_=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=_,b=M;v<b;v+=3){let E=v,y=v+1,S=v+2;n=_a(this,g,e,i,c,h,d,E,y,S),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let _=m,M=m+1,v=m+2;n=_a(this,o,e,i,c,h,d,_,M,v),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}};function Km(s,e,t,i,n,r,o,a){let l;if(e.side===Zt?l=i.intersectTriangle(o,r,n,!0,a):l=i.intersectTriangle(n,r,o,e.side===Pi,a),l===null)return null;xa.copy(a),xa.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(xa);return c<t.near||c>t.far?null:{distance:c,point:xa.clone(),object:s}}function _a(s,e,t,i,n,r,o,a,l,c){s.getVertexPosition(a,fa),s.getVertexPosition(l,pa),s.getVertexPosition(c,ma);let h=Km(s,e,t,i,fa,pa,ma,Sd);if(h){let d=new P;Tn.getBarycoord(Sd,fa,pa,ma,d),n&&(h.uv=Tn.getInterpolatedAttribute(n,a,l,c,d,new Ne)),r&&(h.uv1=Tn.getInterpolatedAttribute(r,a,l,c,d,new Ne)),o&&(h.normal=Tn.getInterpolatedAttribute(o,a,l,c,d,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new P,materialIndex:0};Tn.getNormal(fa,pa,ma,u.normal),h.face=u,h.barycoord=d}return h}var Kr=new ot,Td=new ot,Ed=new ot,$m=new ot,wd=new Ue,ya=new P,Zc=new di,Ad=new Ue,Jc=new Es,ho=class extends ke{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=th,this.bindMatrix=new Ue,this.bindMatrixInverse=new Ue,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new $t),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ya),this.boundingBox.expandByPoint(ya)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new di),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ya),this.boundingSphere.expandByPoint(ya)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zc.copy(this.boundingSphere),Zc.applyMatrix4(n),e.ray.intersectsSphere(Zc)!==!1&&(Ad.copy(n).invert(),Jc.copy(e.ray).applyMatrix4(Ad),!(this.boundingBox!==null&&Jc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Jc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ot,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===th?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===xf?this.bindMatrixInverse.copy(this.bindMatrix).invert():Re("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,n=this.geometry;Td.fromBufferAttribute(n.attributes.skinIndex,e),Ed.fromBufferAttribute(n.attributes.skinWeight,e),t.isVector4?(Kr.copy(t),t.set(0,0,0,0)):(Kr.set(t.x,t.y,t.z,1),t.set(0,0,0)),Kr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Ed.getComponent(r);if(o!==0){let a=Td.getComponent(r);wd.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector($m.copy(Kr).applyMatrix4(wd),o)}}return t.isVector4&&(t.w=Kr.w),t.applyMatrix4(this.bindMatrixInverse)}},mr=class extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}},gr=class extends zt{constructor(e=null,t=1,i=1,n,r,o,a,l,c=Pt,h=Pt,d,u){super(null,o,a,l,c,h,n,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Rd=new Ue,Zm=new Ue,uo=class s{constructor(e=[],t=[]){this.uuid=cn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Re("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Ue;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Zm;Rd.multiplyMatrices(a,t[r]),Rd.toArray(i,r*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new gr(t,e,e,Ni,vi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){let r=e.bones[i],o=t[r];o===void 0&&(Re("Skeleton: No bone found with UUID:",r),o=new mr),this.bones.push(o),this.boneInverses.push(new Ue().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let n=0,r=t.length;n<r;n++){let o=t[n];e.bones.push(o.uuid);let a=i[n];e.boneInverses.push(a.toArray())}return e}},Rn=class extends pt{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ir=new Ue,Cd=new Ue,va=[],Id=new $t,Jm=new Ue,$r=new ke,Zr=new di,Wi=class extends ke{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Rn(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Jm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $t),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ir),Id.copy(e.boundingBox).applyMatrix4(ir),this.boundingBox.union(Id)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new di),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ir),Zr.copy(e.boundingSphere).applyMatrix4(ir),this.boundingSphere.union(Zr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=n[o+a]}raycast(e,t){let i=this.matrixWorld,n=this.count;if($r.geometry=this.geometry,$r.material=this.material,$r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zr.copy(this.boundingSphere),Zr.applyMatrix4(i),e.ray.intersectsSphere(Zr)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,ir),Cd.multiplyMatrices(i,ir),$r.matrixWorld=Cd,$r.raycast(e,va);for(let o=0,a=va.length;o<a;o++){let l=va[o];l.instanceId=r,l.object=this,t.push(l)}va.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Rn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new gr(new Float32Array(n*this.count),n,this.count,ll,vi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=n*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},xs=new di,jm=new Ne(.5,.5),Ma=new P,Qn=class{constructor(e=new Gi,t=new Gi,i=new Gi,n=new Gi,r=new Gi,o=new Gi){this.planes=[e,t,i,n,r,o]}set(e,t,i,n,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ii,i=!1){let n=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],x=r[9],m=r[10],g=r[11],_=r[12],M=r[13],v=r[14],b=r[15];if(n[0].setComponents(c-o,f-h,g-p,b-_).normalize(),n[1].setComponents(c+o,f+h,g+p,b+_).normalize(),n[2].setComponents(c+a,f+d,g+x,b+M).normalize(),n[3].setComponents(c-a,f-d,g-x,b-M).normalize(),i)n[4].setComponents(l,u,m,v).normalize(),n[5].setComponents(c-l,f-u,g-m,b-v).normalize();else if(n[4].setComponents(c-l,f-u,g-m,b-v).normalize(),t===Ii)n[5].setComponents(c+l,f+u,g+m,b+v).normalize();else if(t===cr)n[5].setComponents(l,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(e){xs.center.set(0,0,0);let t=jm.distanceTo(e.center);return xs.radius=.7071067811865476+t,xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(Ma.x=n.normal.x>0?e.max.x:e.min.x,Ma.y=n.normal.y>0?e.max.y:e.min.y,Ma.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Ma)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Pd=new Ue,Ba=class s{constructor(){this.coordinateSystem=Ii,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let n=0;n<t.length;n++){let r=t[n];Pd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[n]===void 0&&(i[n]=new Qn),i[n].setFromProjectionMatrix(Pd,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let n=0;n<e._count;n++)t[n]===void 0&&(t[n]=new Qn),t[n].copy(i[n]);return this._count=e._count,this}clone(){return new s().copy(this)}};var xr=class extends ii{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ha=new P,Ga=new P,Ld=new Ue,Jr=new Es,ba=new di,jc=new P,Nd=new P,ws=class extends dt{constructor(e=new at,t=new xr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)Ha.fromBufferAttribute(t,n-1),Ga.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=Ha.distanceTo(Ga);e.setAttribute("lineDistance",new Ke(i,1))}else Re("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ba.copy(i.boundingSphere),ba.applyMatrix4(n),ba.radius+=r,e.ray.intersectsSphere(ba)===!1)return;Ld.copy(n).invert(),Jr.copy(e.ray).applyMatrix4(Ld);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){let g=h.getX(x),_=h.getX(x+1),M=Sa(this,e,Jr,l,g,_,x);M&&t.push(M)}if(this.isLineLoop){let x=h.getX(p-1),m=h.getX(f),g=Sa(this,e,Jr,l,x,m,p-1);g&&t.push(g)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){let g=Sa(this,e,Jr,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=Sa(this,e,Jr,l,p-1,f,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Sa(s,e,t,i,n,r,o){let a=s.geometry.attributes.position;if(Ha.fromBufferAttribute(a,n),Ga.fromBufferAttribute(a,r),t.distanceSqToSegment(Ha,Ga,jc,Nd)>i)return;jc.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(jc);if(!(c<e.near||c>e.far))return{distance:c,point:Nd.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var Dd=new P,Od=new P,fo=class extends ws{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let n=0,r=t.count;n<r;n+=2)Dd.fromBufferAttribute(t,n),Od.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Dd.distanceTo(Od);e.setAttribute("lineDistance",new Ke(i,1))}else Re("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},po=class extends ws{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},sn=class extends ii{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ud=new Ue,nh=new Es,Ta=new di,Ea=new P,Cn=class extends dt{constructor(e=new at,t=new sn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ta.copy(i.boundingSphere),Ta.applyMatrix4(n),Ta.radius+=r,e.ray.intersectsSphere(Ta)===!1)return;Ud.copy(n).invert(),nh.copy(e.ray).applyMatrix4(Ud);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=u,x=f;p<x;p++){let m=c.getX(p);Ea.fromBufferAttribute(d,m),Fd(Ea,m,l,n,e,t,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=u,x=f;p<x;p++)Ea.fromBufferAttribute(d,p),Fd(Ea,p,l,n,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Fd(s,e,t,i,n,r,o){let a=nh.distanceSqToPoint(s);if(a<t){let l=new P;nh.closestPointToPoint(s,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var mo=class extends zt{constructor(e=[],t=Ls,i,n,r,o,a,l,c,h){super(e,t,i,n,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},In=class extends zt{constructor(e,t,i,n,r,o,a,l,c){super(e,t,i,n,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Pn=class extends zt{constructor(e,t,i=Ki,n,r,o,a=Pt,l=Pt,c,h=wn,d=1){if(h!==wn&&h!==kn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,n,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new dr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},go=class extends Pn{constructor(e,t=Ki,i=Ls,n,r,o=Pt,a=Pt,l,c=wn){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,i,n,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},xo=class extends zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},At=class s extends at{constructor(e=1,t=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};let a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,n,o,2),p("x","z","y",1,-1,e,i,-t,n,o,3),p("x","y","z",1,-1,e,t,i,n,r,4),p("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(d,2));function p(x,m,g,_,M,v,b,E,y,S,C){let R=v/y,N=b/S,D=v/2,k=b/2,L=E/2,F=y+1,H=S+1,B=0,J=0,X=new P;for(let q=0;q<H;q++){let te=q*N-k;for(let me=0;me<F;me++){let Ee=me*R-D;X[x]=Ee*_,X[m]=te*M,X[g]=L,c.push(X.x,X.y,X.z),X[x]=0,X[m]=0,X[g]=E>0?1:-1,h.push(X.x,X.y,X.z),d.push(me/y),d.push(1-q/S),B+=1}}for(let q=0;q<S;q++)for(let te=0;te<y;te++){let me=u+te+F*q,Ee=u+te+F*(q+1),K=u+(te+1)+F*(q+1),se=u+(te+1)+F*q;l.push(me,Ee,se),l.push(Ee,K,se),J+=6}a.addGroup(f,J,C),f+=J,u+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},_o=class s extends at{constructor(e=1,t=1,i=4,n=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:n,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,d=Math.PI/2*e,u=t,f=2*d+u,p=i*2+r,x=n+1,m=new P,g=new P;for(let _=0;_<=p;_++){let M=0,v=0,b=0,E=0;if(_<=i){let C=_/i,R=C*Math.PI/2;v=-h-e*Math.cos(R),b=e*Math.sin(R),E=-e*Math.cos(R),M=C*d}else if(_<=i+r){let C=(_-i)/r;v=-h+C*t,b=e,E=0,M=d+C*u}else{let C=(_-i-r)/i,R=C*Math.PI/2;v=h+e*Math.sin(R),b=e*Math.cos(R),E=e*Math.sin(R),M=d+u+C*d}let y=Math.max(0,Math.min(1,M/f)),S=0;_===0?S=.5/n:_===p&&(S=-.5/n);for(let C=0;C<=n;C++){let R=C/n,N=R*Math.PI*2,D=Math.sin(N),k=Math.cos(N);g.x=-b*k,g.y=v,g.z=b*D,a.push(g.x,g.y,g.z),m.set(-b*k,E,b*D),m.normalize(),l.push(m.x,m.y,m.z),c.push(R+S,y)}if(_>0){let C=(_-1)*x;for(let R=0;R<n;R++){let N=C+R,D=C+R+1,k=_*x+R,L=_*x+R+1;o.push(N,D,k),o.push(D,L,k)}}}this.setIndex(o),this.setAttribute("position",new Ke(a,3)),this.setAttribute("normal",new Ke(l,3)),this.setAttribute("uv",new Ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},yo=class s extends at{constructor(e=1,t=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new P,h=new Ne;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=i+d/t*n;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Ke(o,3)),this.setAttribute("normal",new Ke(a,3)),this.setAttribute("uv",new Ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},gt=class s extends at{constructor(e=1,t=1,i=1,n=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;n=Math.floor(n),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,x=[],m=i/2,g=0;_(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Ke(d,3)),this.setAttribute("normal",new Ke(u,3)),this.setAttribute("uv",new Ke(f,2));function _(){let v=new P,b=new P,E=0,y=(t-e)/i;for(let S=0;S<=r;S++){let C=[],R=S/r,N=R*(t-e)+e;for(let D=0;D<=n;D++){let k=D/n,L=k*l+a,F=Math.sin(L),H=Math.cos(L);b.x=N*F,b.y=-R*i+m,b.z=N*H,d.push(b.x,b.y,b.z),v.set(F,y,H).normalize(),u.push(v.x,v.y,v.z),f.push(k,1-R),C.push(p++)}x.push(C)}for(let S=0;S<n;S++)for(let C=0;C<r;C++){let R=x[C][S],N=x[C+1][S],D=x[C+1][S+1],k=x[C][S+1];(e>0||C!==0)&&(h.push(R,N,k),E+=3),(t>0||C!==r-1)&&(h.push(N,D,k),E+=3)}c.addGroup(g,E,0),g+=E}function M(v){let b=p,E=new Ne,y=new P,S=0,C=v===!0?e:t,R=v===!0?1:-1;for(let D=1;D<=n;D++)d.push(0,m*R,0),u.push(0,R,0),f.push(.5,.5),p++;let N=p;for(let D=0;D<=n;D++){let L=D/n*l+a,F=Math.cos(L),H=Math.sin(L);y.x=C*H,y.y=m*R,y.z=C*F,d.push(y.x,y.y,y.z),u.push(0,R,0),E.x=F*.5+.5,E.y=H*.5*R+.5,f.push(E.x,E.y),p++}for(let D=0;D<n;D++){let k=b+D,L=N+D;v===!0?h.push(L,L+1,k):h.push(L+1,L,k),S+=3}c.addGroup(g,S,v===!0?1:2),g+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},es=class s extends gt{constructor(e=1,t=1,i=32,n=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,n,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},_r=class s extends at{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let r=[],o=[];a(n),c(i),h(),this.setAttribute("position",new Ke(r,3)),this.setAttribute("normal",new Ke(r.slice(),3)),this.setAttribute("uv",new Ke(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let M=new P,v=new P,b=new P;for(let E=0;E<t.length;E+=3)f(t[E+0],M),f(t[E+1],v),f(t[E+2],b),l(M,v,b,_)}function l(_,M,v,b){let E=b+1,y=[];for(let S=0;S<=E;S++){y[S]=[];let C=_.clone().lerp(v,S/E),R=M.clone().lerp(v,S/E),N=E-S;for(let D=0;D<=N;D++)D===0&&S===E?y[S][D]=C:y[S][D]=C.clone().lerp(R,D/N)}for(let S=0;S<E;S++)for(let C=0;C<2*(E-S)-1;C++){let R=Math.floor(C/2);C%2===0?(u(y[S][R+1]),u(y[S+1][R]),u(y[S][R])):(u(y[S][R+1]),u(y[S+1][R+1]),u(y[S+1][R]))}}function c(_){let M=new P;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(_),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function h(){let _=new P;for(let M=0;M<r.length;M+=3){_.x=r[M+0],_.y=r[M+1],_.z=r[M+2];let v=m(_)/2/Math.PI+.5,b=g(_)/Math.PI+.5;o.push(v,1-b)}p(),d()}function d(){for(let _=0;_<o.length;_+=6){let M=o[_+0],v=o[_+2],b=o[_+4],E=Math.max(M,v,b),y=Math.min(M,v,b);E>.9&&y<.1&&(M<.2&&(o[_+0]+=1),v<.2&&(o[_+2]+=1),b<.2&&(o[_+4]+=1))}}function u(_){r.push(_.x,_.y,_.z)}function f(_,M){let v=_*3;M.x=e[v+0],M.y=e[v+1],M.z=e[v+2]}function p(){let _=new P,M=new P,v=new P,b=new P,E=new Ne,y=new Ne,S=new Ne;for(let C=0,R=0;C<r.length;C+=9,R+=6){_.set(r[C+0],r[C+1],r[C+2]),M.set(r[C+3],r[C+4],r[C+5]),v.set(r[C+6],r[C+7],r[C+8]),E.set(o[R+0],o[R+1]),y.set(o[R+2],o[R+3]),S.set(o[R+4],o[R+5]),b.copy(_).add(M).add(v).divideScalar(3);let N=m(b);x(E,R+0,_,N),x(y,R+2,M,N),x(S,R+4,v,N)}}function x(_,M,v,b){b<0&&_.x===1&&(o[M]=_.x-1),v.x===0&&v.z===0&&(o[M]=b/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function g(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}},vo=class s extends _r{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var Mo=class s extends _r{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var bo=class s extends _r{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Xi=class s extends at{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,d=e/a,u=t/l,f=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let _=g*u-o;for(let M=0;M<c;M++){let v=M*d-r;p.push(v,-_,0),x.push(0,0,1),m.push(M/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<a;_++){let M=_+c*g,v=_+c*(g+1),b=_+1+c*(g+1),E=_+1+c*g;f.push(M,v,E),f.push(v,b,E)}this.setIndex(f),this.setAttribute("position",new Ke(p,3)),this.setAttribute("normal",new Ke(x,3)),this.setAttribute("uv",new Ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ln=class s extends at{constructor(e=1,t=32,i=16,n=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new P,u=new P,f=[],p=[],x=[],m=[];for(let g=0;g<=i;g++){let _=[],M=g/i,v=o+M*a,b=e*Math.cos(v),E=Math.sqrt(e*e-b*b),y=0;g===0&&o===0?y=.5/t:g===i&&l===Math.PI&&(y=-.5/t);for(let S=0;S<=t;S++){let C=S/t,R=n+C*r;d.x=-E*Math.cos(R),d.y=b,d.z=E*Math.sin(R),p.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(C+y,1-M),_.push(c++)}h.push(_)}for(let g=0;g<i;g++)for(let _=0;_<t;_++){let M=h[g][_+1],v=h[g][_],b=h[g+1][_],E=h[g+1][_+1];(g!==0||o>0)&&f.push(M,v,E),(g!==i-1||l<Math.PI)&&f.push(v,b,E)}this.setIndex(f),this.setAttribute("position",new Ke(p,3)),this.setAttribute("normal",new Ke(x,3)),this.setAttribute("uv",new Ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var yr=class s extends at{constructor(e=1,t=.4,i=12,n=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),n=Math.floor(n);let l=[],c=[],h=[],d=[],u=new P,f=new P,p=new P;for(let x=0;x<=i;x++){let m=o+x/i*a;for(let g=0;g<=n;g++){let _=g/n*r;f.x=(e+t*Math.cos(m))*Math.cos(_),f.y=(e+t*Math.cos(m))*Math.sin(_),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(g/n),d.push(x/i)}}for(let x=1;x<=i;x++)for(let m=1;m<=n;m++){let g=(n+1)*x+m-1,_=(n+1)*(x-1)+m-1,M=(n+1)*(x-1)+m,v=(n+1)*x+m;l.push(g,_,v),l.push(_,M,v)}this.setIndex(l),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Os(s){let e={};for(let t in s){e[t]={};for(let i in s[t]){let n=s[t][i];if(zd(n))n.isRenderTargetTexture?(Re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone();else if(Array.isArray(n))if(zd(n[0])){let r=[];for(let o=0,a=n.length;o<a;o++)r[o]=n[o].clone();e[t][i]=r}else e[t][i]=n.slice();else e[t][i]=n}}return e}function si(s){let e={};for(let t=0;t<s.length;t++){let i=Os(s[t]);for(let n in i)e[n]=i[n]}return e}function zd(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Qm(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function zh(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}var Df={clone:Os,merge:si},e0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,t0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,rn=class extends ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=e0,this.fragmentShader=t0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=Qm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let o=this.uniforms[n].value;o&&o.isTexture?t.uniforms[n]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[n]={type:"m4",value:o.toArray()}:t.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let n=e.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=t[n.value]||null;break;case"c":this.uniforms[i].value=new be().setHex(n.value);break;case"v2":this.uniforms[i].value=new Ne().fromArray(n.value);break;case"v3":this.uniforms[i].value=new P().fromArray(n.value);break;case"v4":this.uniforms[i].value=new ot().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Be().fromArray(n.value);break;case"m4":this.uniforms[i].value=new Ue().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Va=class extends rn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Dt=class extends ii{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zo,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},li=class extends Dt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return vs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){vs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ni=class extends ii{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zo,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=tl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Wa=class extends ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Xa=class extends ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Jn(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function jr(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function i0(s){function e(n,r){return s[n]-s[r]}let t=s.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function kd(s,e,t){let i=s.length,n=new s.constructor(i);for(let r=0,o=0;o!==i;++r){let a=t[r]*e;for(let l=0;l!==e;++l)n[o++]=s[a+l]}return n}function n0(s,e,t,i){let n=1,r=s[0];for(;r!==void 0&&r[i]===void 0;)r=s[n++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[n++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[n++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=s[n++];while(r!==void 0)}var on=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],r=t[i-1];e:{t:{let o;i:{n:if(!(e<n)){for(let a=i+2;;){if(n===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=n,n=t[++i],e<n)break t}o=t.length;break i}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=t[--i-1],e>=r)break t}o=i,i=0;break i}break e}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let o=0;o!==n;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},qa=class extends on{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_s,endingEnd:_s}}intervalChanged_(e,t,i){let n=this.parameterPositions,r=e-2,o=e+1,a=n[r],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case ys:r=e,a=2*t-i;break;case to:r=n.length-2,a=t+n[r]-n[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ys:o=e,l=2*i-t;break;case to:o=1,l=i+n[1]-n[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(i-t)/(n-t),x=p*p,m=x*p,g=-u*m+2*u*x-u*p,_=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*p+1,M=(-1-f)*m+(1.5+f)*x+.5*p,v=f*m-f*x;for(let b=0;b!==a;++b)r[b]=g*o[h+b]+_*o[c+b]+M*o[l+b]+v*o[d+b];return r}},So=class extends on{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(n-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Ya=class extends on{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},Ka=class extends on{interpolate_(e,t,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(i-t)/(n-t),x=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*p;return r}let u=a*2,f=e-1;for(let p=0;p!==a;++p){let x=o[c+p],m=o[l+p],g=f*u+p*2,_=d[g],M=d[g+1],v=e*u+p*2,b=h[v],E=h[v+1],y=r0(i,t,_,b,n);r[p]=Of(y,x,M,E,m)}return r}};function Of(s,e,t,i,n){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*i+s*s*s*n}function s0(s,e,t,i,n){let r=1-s;return 3*r*r*(t-e)+6*r*s*(i-t)+3*s*s*(n-i)}function r0(s,e,t,i,n){let r=(s-e)/(n-e);for(let o=0;o<8;o++){let a=Of(r,e,t,i,n)-s;if(Math.abs(a)<1e-10)break;let l=s0(r,e,t,i,n);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var fi=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Jn(t,this.TimeBufferType),this.values=Jn(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Jn(e.times,Array),values:Jn(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n),jr(e.settings)&&(i.settings={inTangents:Jn(e.settings.inTangents,Array),outTangents:Jn(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ya(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new So(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ka(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ms:t=this.InterpolantFactoryMethodDiscrete;break;case bs:t=this.InterpolantFactoryMethodLinear;break;case Ra:t=this.InterpolantFactoryMethodSmooth;break;case ih:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Re("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ms;case this.InterpolantFactoryMethodLinear:return bs;case this.InterpolantFactoryMethodSmooth:return Ra;case this.InterpolantFactoryMethodBezier:return ih}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e;jr(this.settings)&&(Bd(this.settings.inTangents,e),Bd(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e;jr(this.settings)&&(Hd(this.settings.inTangents,e),Hd(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,n=i.length,r=0,o=n-1;for(;r!==n&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==n){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Fe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,r=i.length;r===0&&(Fe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Fe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Fe("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(n!==void 0&&gm(n))for(let a=0,l=n.length;a!==l;++a){let c=n[a];if(isNaN(c)){Fe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Ra,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(n)l=!0;else{let d=a*i,u=d-i,f=d+i;for(let p=0;p!==i;++p){let x=t[d+p];if(x!==t[u+p]||x!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,jr(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function Bd(s,e){for(let t=0,i=s.length;t!==i;t+=2)s[t]+=e}function Hd(s,e){for(let t=0,i=s.length;t!==i;t+=2)s[t]*=e}fi.prototype.ValueTypeName="";fi.prototype.TimeBufferType=Float32Array;fi.prototype.ValueBufferType=Float32Array;fi.prototype.DefaultInterpolation=bs;var Nn=class extends fi{constructor(e,t,i){super(e,t,i)}};Nn.prototype.ValueTypeName="bool";Nn.prototype.ValueBufferType=Array;Nn.prototype.DefaultInterpolation=Ms;Nn.prototype.InterpolantFactoryMethodLinear=void 0;Nn.prototype.InterpolantFactoryMethodSmooth=void 0;var To=class extends fi{constructor(e,t,i,n){super(e,t,i,n)}};To.prototype.ValueTypeName="color";var Dn=class extends fi{constructor(e,t,i,n){super(e,t,i,n)}};Dn.prototype.ValueTypeName="number";var $a=class extends on{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(n-t),c=e*a;for(let h=c+a;c!==h;c+=4)Mt.slerpFlat(r,0,o,c-a,o,c,l);return r}},On=class extends fi{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new $a(this.times,this.values,this.getValueSize(),e)}};On.prototype.ValueTypeName="quaternion";On.prototype.InterpolantFactoryMethodSmooth=void 0;var Un=class extends fi{constructor(e,t,i){super(e,t,i)}};Un.prototype.ValueTypeName="string";Un.prototype.ValueBufferType=Array;Un.prototype.DefaultInterpolation=Ms;Un.prototype.InterpolantFactoryMethodLinear=void 0;Un.prototype.InterpolantFactoryMethodSmooth=void 0;var ts=class extends fi{constructor(e,t,i,n){super(e,t,i,n)}};ts.prototype.ValueTypeName="vector";var Fn=class{constructor(e="",t=-1,i=[],n=Vl){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=cn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,n=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(a0(i[o]).scale(n));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=i.length;r!==o;++r)t.push(fi.toJSON(i[r]));return n}static CreateFromMorphTargetSequence(e,t,i,n){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=i0(l);l=kd(l,1,h),c=kd(c,1,h),!n&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Dn(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let n={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let d=h[1],u=n[d];u||(n[d]=u=[]),u.push(c)}}let o=[];for(let a in n)o.push(this.CreateFromMorphTargetSequence(a,n[a],t,i));return o}resetDuration(){let e=this.tracks,t=0;for(let i=0,n=e.length;i!==n;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function o0(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Dn;case"vector":case"vector2":case"vector3":case"vector4":return ts;case"color":return To;case"quaternion":return On;case"bool":case"boolean":return Nn;case"string":return Un}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function a0(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=o0(s.type);if(s.times===void 0){let i=[],n=[];n0(s.keys,i,n,"value"),s.times=i,s.values=n}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),jr(s.settings)&&(t.settings={inTangents:Jn(s.settings.inTangents,Float32Array),outTangents:Jn(s.settings.outTangents,Float32Array)}),t}var tn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Gd(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Gd(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Gd(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Za=class{constructor(e,t,i){let n=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&n.onStart!==void 0&&n.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Uf=new Za,an=class{constructor(e){this.manager=e!==void 0?e:Uf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};an.DEFAULT_MATERIAL_NAME="__DEFAULT";var Sn={},sh=class extends Error{constructor(e,t){super(e),this.response=t}},vr=class extends an{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=tn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Sn[e]!==void 0){Sn[e].push({onLoad:t,onProgress:i,onError:n});return}Sn[e]=[],Sn[e].push({onLoad:t,onProgress:i,onError:n});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Re("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Sn[e],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,p=f!==0,x=0,m=new ReadableStream({start(g){_();function _(){d.read().then(({done:M,value:v})=>{if(M)g.close();else{x+=v.byteLength;let b=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:f});for(let E=0,y=h.length;E<y;E++){let S=h[E];S.onProgress&&S.onProgress(b)}g.enqueue(v),_()}},M=>{g.error(M)})}}});return new Response(m)}else throw new sh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{tn.add(`file:${e}`,c);let h=Sn[e];delete Sn[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Sn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Sn[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var nr=new WeakMap,Ja=class extends an{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=tn.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let d=nr.get(o);d===void 0&&(d=[],nr.set(o,d)),d.push({onLoad:t,onError:n})}return o}let a=hr("img");function l(){h(),t&&t(this);let d=nr.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}nr.delete(this),r.manager.itemEnd(e)}function c(d){h(),n&&n(d),tn.remove(`image:${e}`);let u=nr.get(this)||[];for(let f=0;f<u.length;f++){let p=u[f];p.onError&&p.onError(d)}nr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),tn.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var Eo=class extends an{constructor(e){super(e)}load(e,t,i,n){let r=new zt,o=new Ja(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,n),r}},is=class extends dt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ns=class extends is{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Qc=new Ue,Vd=new P,Wd=new P,Mr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.mapType=pi,this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qn,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Vd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vd),Wd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,n){Qc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Qc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=n?n.z/r.x:1,a=n?n.w/r.y:1,l=n?n.x/r.x:0,c=n?n.y/r.y:0;e.coordinateSystem===cr||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Qc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},wa=new P,Aa=new Mt,en=new P,wo=class extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wa,Aa,en),en.x===1&&en.y===1&&en.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wa,Aa,en.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(wa,Aa,en),en.x===1&&en.y===1&&en.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wa,Aa,en.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Zn=new P,Xd=new Ne,qd=new Ne,It=class extends wo{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ss*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Qr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ss*2*Math.atan(Math.tan(Qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z)}getViewSize(e,t){return this.getViewBounds(e,Xd,qd),t.subVectors(qd,Xd)}setViewOffset(e,t,i,n,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Qr*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*n/l,t-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},rh=class extends Mr{constructor(){super(new It(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=Ss*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||n!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=n,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},As=class extends is{constructor(e,t,i=0,n=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=i,this.angle=n,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new rh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},oh=class extends Mr{constructor(){super(new It(90,1,.5,500)),this.isPointLightShadow=!0}},ci=class extends is{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new oh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Rs=class extends wo{constructor(e=-1,t=1,i=1,n=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-e,o=i+e,a=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ah=class extends Mr{constructor(){super(new Rs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qi=class extends is{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new ah}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Ao=class extends is{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var zn=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var eh=new WeakMap,Ro=class extends an{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Re("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Re("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=tn.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{eh.has(o)===!0?(n&&n(eh.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return tn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){n&&n(c),eh.set(l,c),tn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});tn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var sr=-90,rr=1,br=class extends dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new It(sr,rr,e,t);n.layers=this.layers,this.add(n);let r=new It(sr,rr,e,t);r.layers=this.layers,this.add(r);let o=new It(sr,rr,e,t);o.layers=this.layers,this.add(o);let a=new It(sr,rr,e,t);a.layers=this.layers,this.add(a);let l=new It(sr,rr,e,t);l.layers=this.layers,this.add(l);let c=new It(sr,rr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Ii)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===cr)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},ja=class extends It{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Qa=class{constructor(e,t,i){this.binding=e,this.valueSize=i;let n,r,o;switch(t){case"quaternion":n=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let i=this.buffer,n=this.valueSize,r=e*n+n,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==n;++a)i[r+a]=i[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(i,r,0,a,n)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,n,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,i=this.buffer,n=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(i,n,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){a.setValue(i,n);break}}saveOriginalState(){let e=this.binding,t=this.buffer,i=this.valueSize,n=i*this._origIndex;e.getValue(t,n);for(let r=i,o=n;r!==o;++r)t[r]=t[n+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,n,r){if(n>=.5)for(let o=0;o!==r;++o)e[t+o]=e[i+o]}_slerp(e,t,i,n){Mt.slerpFlat(e,t,e,t,e,i,n)}_slerpAdditive(e,t,i,n,r){let o=this._workIndex*r;Mt.multiplyQuaternionsFlat(e,o,e,t,e,i),Mt.slerpFlat(e,t,e,t,e,o,n)}_lerp(e,t,i,n,r){let o=1-n;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[i+a]*n}}_lerpAdditive(e,t,i,n,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[i+o]*n}}},kh="\\[\\]\\.:\\/",l0=new RegExp("["+kh+"]","g"),Bh="[^"+kh+"]",c0="[^"+kh.replace("\\.","")+"]",h0=/((?:WC+[\/:])*)/.source.replace("WC",Bh),u0=/(WCOD+)?/.source.replace("WCOD",c0),d0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bh),f0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bh),p0=new RegExp("^"+h0+u0+d0+f0+"$"),m0=["material","materials","bones","map"],lh=class{constructor(e,t,i){let n=i||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},ct=class s{constructor(e,t,i){this.path=t,this.parsedPath=i||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,i):new s(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(l0,"")}static parseTrackName(e){let t=p0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);m0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Re("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Fe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Fe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Fe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Fe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Fe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[n];if(o===void 0){let c=t.nodeName;Fe("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ct.Composite=lh;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var el=class{constructor(e,t,i=null,n=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=n;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:_s,endingEnd:_s};for(let c=0;c!==o;++c){let h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Gl,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i=!1){if(e.fadeOut(t),this.fadeIn(t),i===!0){let n=this._clip.duration,r=e._clip.duration,o=r/n,a=n/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,i=!1){return e.crossFadeFrom(this,t,i)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){let n=this._mixer,r=n.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=n._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+i,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,n){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case yf:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case Vl:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(o),c[h].accumulate(n,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let i=this._weightInterpolant;if(i!==null){let n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let i=this._timeScaleInterpolant;if(i!==null){let n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,i=this.loop,n=this.time+e,r=this._loopCount,o=i===_f;if(e===0)return r===-1?n:o&&(r&1)===1?t-n:n;if(i===Uo){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(n>=t)n=t;else if(n<0)n=0;else{this.time=n;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),n>=t||n<0){let a=Math.floor(n/t);n-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=e>0?t:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=n;if(o&&(r&1)===1)return t-n}return n}_setEndings(e,t,i){let n=this._interpolantSettings;i?(n.endingStart=ys,n.endingEnd=ys):(e?n.endingStart=this.zeroSlopeAtStart?ys:_s:n.endingStart=to,t?n.endingEnd=this.zeroSlopeAtEnd?ys:_s:n.endingEnd=to)}_scheduleFading(e,t,i){let n=this._mixer,r=n.time,o=this._weightInterpolant;o===null&&(o=n._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=i,this}},g0=new Float32Array(1),Sr=class extends Vi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let i=e._localRoot||this._root,n=e._clip.tracks,r=n.length,o=e._propertyBindings,a=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==r;++d){let u=n[d],f=u.name,p=h[f];if(p!==void 0)++p.referenceCount,o[d]=p;else{if(p=o[d],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}let x=t&&t._propertyBindings[d].binding.parsedPath;p=new Qa(ct.create(i,f,x),u.ValueTypeName,u.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),o[d]=p}a[d].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let i=(e._localRoot||this._root).uuid,n=e._clip.uuid,r=this._actionsByClip[n];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,n,i)}let t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){let r=t[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){let r=t[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){let n=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=n.length,n.push(e),o.actionByRoot[i]=e}_removeInactiveAction(e){let t=this._actions,i=t[t.length-1],n=e._cacheIndex;i._cacheIndex=n,t[n]=i,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let d=a.actionByRoot,u=(e._localRoot||this._root).uuid;delete d[u],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){let r=t[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,i=e._cacheIndex,n=this._nActiveActions++,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_takeBackAction(e){let t=this._actions,i=e._cacheIndex,n=--this._nActiveActions,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_addInactiveBinding(e,t,i){let n=this._bindingsByRootAndName,r=this._bindings,o=n[t];o===void 0&&(o={},n[t]=o),o[i]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,i=e.binding,n=i.rootNode.uuid,r=i.path,o=this._bindingsByRootAndName,a=o[n],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[n]}_lendBinding(e){let t=this._bindings,i=e._cacheIndex,n=this._nActiveBindings++,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_takeBackBinding(e){let t=this._bindings,i=e._cacheIndex,n=--this._nActiveBindings,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,i=e[t];return i===void 0&&(i=new So(new Float32Array(2),new Float32Array(2),1,g0),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){let t=this._controlInterpolants,i=e.__cacheIndex,n=--this._nActiveControlInterpolants,r=t[n];e.__cacheIndex=n,t[n]=e,r.__cacheIndex=i,t[i]=r}clipAction(e,t,i){let n=t||this._root,r=n.uuid,o=typeof e=="string"?Fn.findByName(n,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(i===void 0&&(o!==null?i=o.blendMode:i=Vl),l!==void 0){let d=l.actionByRoot[r];if(d!==void 0&&d.blendMode===i)return d;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let h=new el(this,o,t,i);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(e,t){let i=t||this._root,n=i.uuid,r=typeof e=="string"?Fn.findByName(i,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[n]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;let t=this._actions,i=this._nActiveActions,n=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(n,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,i=e.uuid,n=this._actionsByClip,r=n[i];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let h=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete n[i]}}uncacheRoot(e){let t=e.uuid,i=this._actionsByClip;for(let o in i){let a=i[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let n=this._bindingsByRootAndName,r=n[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}};var ch=class{static{this.prototype.isMatrix2=!0}constructor(e,t,i,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=n,this}};function Hh(s,e,t,i){let n=x0(i);switch(t){case wh:return s*e;case ll:return s*e/n.components*n.byteLength;case cl:return s*e/n.components*n.byteLength;case ss:return s*e*2/n.components*n.byteLength;case hl:return s*e*2/n.components*n.byteLength;case Ah:return s*e*3/n.components*n.byteLength;case Ni:return s*e*4/n.components*n.byteLength;case ul:return s*e*4/n.components*n.byteLength;case Io:case Po:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Lo:case No:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case fl:case ml:return Math.max(s,16)*Math.max(e,8)/4;case dl:case pl:return Math.max(s,8)*Math.max(e,8)/2;case gl:case xl:case yl:case vl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case _l:case Do:case Ml:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case bl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Tl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case El:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case wl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Al:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Rl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Cl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Il:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Pl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ll:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Nl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Dl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ol:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ul:case Fl:case zl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case kl:case Bl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Oo:case Hl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function x0(s){switch(s){case pi:case bh:return{byteLength:1,components:1};case Rr:case Sh:case $i:return{byteLength:2,components:1};case ol:case al:return{byteLength:2,components:4};case Ki:case rl:case vi:return{byteLength:4,components:1};case Th:case Eh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function sp(){let s=null,e=!1,t=null,i=null;function n(r,o){i=s.requestAnimationFrame(n),t(r,o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function y0(s){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let x=d[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:r,update:o}}var v0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,M0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,b0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,S0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,E0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,w0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,A0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,R0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,C0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,I0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,P0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,L0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,N0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,D0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,k0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,B0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,H0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,G0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,V0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,W0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,X0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,q0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Y0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,K0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$0="gl_FragColor = linearToOutputTexel( gl_FragColor );",Z0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,J0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,j0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Q0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,eg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ig=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ng=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,og=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ag=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,ug=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,dg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_g=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mg=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,bg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Eg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ag=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Cg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ig=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ng=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Og=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ug=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Gg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Vg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,$g=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ex=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ix=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ox=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ax=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ux=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,px=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_x=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,yx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bx=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ex=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ax=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Rx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ix=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Px=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Dx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ox=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ux=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Bx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Hx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Wx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Kx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$x=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:v0,alphahash_pars_fragment:M0,alphamap_fragment:b0,alphamap_pars_fragment:S0,alphatest_fragment:T0,alphatest_pars_fragment:E0,aomap_fragment:w0,aomap_pars_fragment:A0,batching_pars_vertex:R0,batching_vertex:C0,begin_vertex:I0,beginnormal_vertex:P0,bsdfs:L0,iridescence_fragment:N0,bumpmap_pars_fragment:D0,clipping_planes_fragment:O0,clipping_planes_pars_fragment:U0,clipping_planes_pars_vertex:F0,clipping_planes_vertex:z0,color_fragment:k0,color_pars_fragment:B0,color_pars_vertex:H0,color_vertex:G0,common:V0,defaultnormal_vertex:W0,displacementmap_pars_vertex:X0,displacementmap_vertex:q0,emissivemap_fragment:Y0,emissivemap_pars_fragment:K0,colorspace_fragment:$0,colorspace_pars_fragment:Z0,envmap_fragment:J0,envmap_common_pars_fragment:j0,envmap_pars_fragment:Q0,envmap_pars_vertex:eg,envmap_physical_pars_fragment:ug,envmap_vertex:tg,fog_vertex:ig,fog_pars_vertex:ng,fog_fragment:sg,fog_pars_fragment:rg,gradientmap_pars_fragment:og,lightmap_pars_fragment:ag,lights_lambert_fragment:lg,lights_lambert_pars_fragment:cg,lights_pars_begin:hg,lights_toon_fragment:dg,lights_toon_pars_fragment:fg,lights_phong_fragment:pg,lights_phong_pars_fragment:mg,lights_physical_fragment:gg,lights_physical_pars_fragment:xg,lights_fragment_begin:_g,lights_fragment_maps:yg,lights_fragment_end:vg,lightprobes_pars_fragment:Mg,logdepthbuf_fragment:bg,logdepthbuf_pars_fragment:Sg,logdepthbuf_pars_vertex:Tg,logdepthbuf_vertex:Eg,map_fragment:wg,map_pars_fragment:Ag,map_particle_fragment:Rg,map_particle_pars_fragment:Cg,metalnessmap_fragment:Ig,metalnessmap_pars_fragment:Pg,morphinstance_vertex:Lg,morphcolor_vertex:Ng,morphnormal_vertex:Dg,morphtarget_pars_vertex:Og,morphtarget_vertex:Ug,normal_fragment_begin:Fg,normal_fragment_maps:zg,normal_pars_fragment:kg,normal_pars_vertex:Bg,normal_vertex:Hg,normalmap_pars_fragment:Gg,clearcoat_normal_fragment_begin:Vg,clearcoat_normal_fragment_maps:Wg,clearcoat_pars_fragment:Xg,iridescence_pars_fragment:qg,opaque_fragment:Yg,packing:Kg,premultiplied_alpha_fragment:$g,project_vertex:Zg,dithering_fragment:Jg,dithering_pars_fragment:jg,roughnessmap_fragment:Qg,roughnessmap_pars_fragment:ex,shadowmap_pars_fragment:tx,shadowmap_pars_vertex:ix,shadowmap_vertex:nx,shadowmask_pars_fragment:sx,skinbase_vertex:rx,skinning_pars_vertex:ox,skinning_vertex:ax,skinnormal_vertex:lx,specularmap_fragment:cx,specularmap_pars_fragment:hx,tonemapping_fragment:ux,tonemapping_pars_fragment:dx,transmission_fragment:fx,transmission_pars_fragment:px,uv_pars_fragment:mx,uv_pars_vertex:gx,uv_vertex:xx,worldpos_vertex:_x,background_vert:yx,background_frag:vx,backgroundCube_vert:Mx,backgroundCube_frag:bx,cube_vert:Sx,cube_frag:Tx,depth_vert:Ex,depth_frag:wx,distance_vert:Ax,distance_frag:Rx,equirect_vert:Cx,equirect_frag:Ix,linedashed_vert:Px,linedashed_frag:Lx,meshbasic_vert:Nx,meshbasic_frag:Dx,meshlambert_vert:Ox,meshlambert_frag:Ux,meshmatcap_vert:Fx,meshmatcap_frag:zx,meshnormal_vert:kx,meshnormal_frag:Bx,meshphong_vert:Hx,meshphong_frag:Gx,meshphysical_vert:Vx,meshphysical_frag:Wx,meshtoon_vert:Xx,meshtoon_frag:qx,points_vert:Yx,points_frag:Kx,shadow_vert:$x,shadow_frag:Zx,sprite_vert:Jx,sprite_frag:jx},xe={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},un={basic:{uniforms:si([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:si([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new be(0)},envMapIntensity:{value:1}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:si([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:si([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:si([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new be(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:si([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:si([xe.points,xe.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:si([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:si([xe.common,xe.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:si([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:si([xe.sprite,xe.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distance:{uniforms:si([xe.common,xe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distance_vert,fragmentShader:Xe.distance_frag},shadow:{uniforms:si([xe.lights,xe.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};un.physical={uniforms:si([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Be},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};var Xl={r:0,b:0,g:0},Qx=new Ue,rp=new Be;rp.set(-1,0,0,0,1,0,0,0,1);function e_(s,e,t,i,n,r){let o=new be(0),a=n===!0?0:1,l,c,h=null,d=0,u=null;function f(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){let v=_.backgroundBlurriness>0;M=e.get(M,v)}return M}function p(_){let M=!1,v=f(_);v===null?m(o,a):v&&v.isColor&&(m(v,1),M=!0);let b=s.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(_,M){let v=f(M);v&&v.isCubeTexture?(c===void 0&&(c=new ke(new At(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:Os(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,E,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Qx.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(rp),c.material.toneMapped=Ye.getTransfer(v.colorSpace)!==st,(h!==v||d!==v.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ke(new Xi(2,2),new rn({name:"BackgroundMaterial",uniforms:Os(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(v.colorSpace)!==st,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,M){_.getRGB(Xl,zh(s)),t.buffers.color.setClear(Xl.r,Xl.g,Xl.b,M,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,M=1){o.set(_),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,m(o,a)},render:p,addToRenderList:x,dispose:g}}function t_(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=u(null),r=n,o=!1;function a(N,D,k,L,F){let H=!1,B=d(N,L,k,D);r!==B&&(r=B,c(r.object)),H=f(N,L,k,F),H&&p(N,L,k,F),F!==null&&e.update(F,s.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,v(N,D,k,L),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return s.createVertexArray()}function c(N){return s.bindVertexArray(N)}function h(N){return s.deleteVertexArray(N)}function d(N,D,k,L){let F=L.wireframe===!0,H=i[D.id];H===void 0&&(H={},i[D.id]=H);let B=N.isInstancedMesh===!0?N.id:0,J=H[B];J===void 0&&(J={},H[B]=J);let X=J[k.id];X===void 0&&(X={},J[k.id]=X);let q=X[F];return q===void 0&&(q=u(l()),X[F]=q),q}function u(N){let D=[],k=[],L=[];for(let F=0;F<t;F++)D[F]=0,k[F]=0,L[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:k,attributeDivisors:L,object:N,attributes:{},index:null}}function f(N,D,k,L){let F=r.attributes,H=D.attributes,B=0,J=k.getAttributes();for(let X in J)if(J[X].location>=0){let te=F[X],me=H[X];if(me===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(me=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(me=N.instanceColor)),te===void 0||te.attribute!==me||me&&te.data!==me.data)return!0;B++}return r.attributesNum!==B||r.index!==L}function p(N,D,k,L){let F={},H=D.attributes,B=0,J=k.getAttributes();for(let X in J)if(J[X].location>=0){let te=H[X];te===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(te=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(te=N.instanceColor));let me={};me.attribute=te,te&&te.data&&(me.data=te.data),F[X]=me,B++}r.attributes=F,r.attributesNum=B,r.index=L}function x(){let N=r.newAttributes;for(let D=0,k=N.length;D<k;D++)N[D]=0}function m(N){g(N,0)}function g(N,D){let k=r.newAttributes,L=r.enabledAttributes,F=r.attributeDivisors;k[N]=1,L[N]===0&&(s.enableVertexAttribArray(N),L[N]=1),F[N]!==D&&(s.vertexAttribDivisor(N,D),F[N]=D)}function _(){let N=r.newAttributes,D=r.enabledAttributes;for(let k=0,L=D.length;k<L;k++)D[k]!==N[k]&&(s.disableVertexAttribArray(k),D[k]=0)}function M(N,D,k,L,F,H,B){B===!0?s.vertexAttribIPointer(N,D,k,F,H):s.vertexAttribPointer(N,D,k,L,F,H)}function v(N,D,k,L){x();let F=L.attributes,H=k.getAttributes(),B=D.defaultAttributeValues;for(let J in H){let X=H[J];if(X.location>=0){let q=F[J];if(q===void 0&&(J==="instanceMatrix"&&N.instanceMatrix&&(q=N.instanceMatrix),J==="instanceColor"&&N.instanceColor&&(q=N.instanceColor)),q!==void 0){let te=q.normalized,me=q.itemSize,Ee=e.get(q);if(Ee===void 0)continue;let K=Ee.buffer,se=Ee.type,_e=Ee.bytesPerElement,we=se===s.INT||se===s.UNSIGNED_INT||q.gpuType===rl;if(q.isInterleavedBufferAttribute){let ue=q.data,ze=ue.isInterleavedBuffer===!0?ue.stride:ue.itemSize,St=q.offset;if(ue.isInstancedInterleavedBuffer||ue.isInstancedBufferAttribute){for(let Le=0;Le<X.locationSize;Le++)g(X.location+Le,ue.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Le=0;Le<X.locationSize;Le++)m(X.location+Le);s.bindBuffer(s.ARRAY_BUFFER,K);for(let Le=0;Le<X.locationSize;Le++)M(X.location+Le,me/X.locationSize,se,te,ze*_e,(St+me/X.locationSize*Le)*_e,we)}else{if(q.isInstancedBufferAttribute){for(let ue=0;ue<X.locationSize;ue++)g(X.location+ue,q.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ue=0;ue<X.locationSize;ue++)m(X.location+ue);s.bindBuffer(s.ARRAY_BUFFER,K);for(let ue=0;ue<X.locationSize;ue++)M(X.location+ue,me/X.locationSize,se,te,me*_e,me/X.locationSize*ue*_e,we)}}else if(B!==void 0){let te=B[J];if(te!==void 0)switch(te.length){case 2:s.vertexAttrib2fv(X.location,te);break;case 3:s.vertexAttrib3fv(X.location,te);break;case 4:s.vertexAttrib4fv(X.location,te);break;default:s.vertexAttrib1fv(X.location,te)}}}}_()}function b(){C();for(let N in i){let D=i[N];for(let k in D){let L=D[k];for(let F in L){let H=L[F];for(let B in H)h(H[B].object),delete H[B];delete L[F]}}delete i[N]}}function E(N){if(i[N.id]===void 0)return;let D=i[N.id];for(let k in D){let L=D[k];for(let F in L){let H=L[F];for(let B in H)h(H[B].object),delete H[B];delete L[F]}}delete i[N.id]}function y(N){for(let D in i){let k=i[D];for(let L in k){let F=k[L];if(F[N.id]===void 0)continue;let H=F[N.id];for(let B in H)h(H[B].object),delete H[B];delete F[N.id]}}}function S(N){for(let D in i){let k=i[D],L=N.isInstancedMesh===!0?N.id:0,F=k[L];if(F!==void 0){for(let H in F){let B=F[H];for(let J in B)h(B[J].object),delete B[J];delete F[H]}delete k[L],Object.keys(k).length===0&&delete i[D]}}}function C(){R(),o=!0,r!==n&&(r=n,c(r.object))}function R(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:C,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:y,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function i_(s,e,t){let i;function n(l){i=l}function r(l,c){s.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,i,1)}this.setMode=n,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function n_(s,e,t,i){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let y=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(y){return!(y!==Ni&&i.convert(y)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(y){let S=y===$i&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==pi&&y!==vi&&!S&&i.convert(y)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(y){if(y==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Re("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Re("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Re("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:v,maxSamples:b,samples:E}}function s_(s){let e=this,t=null,i=0,n=!1,r=!1,o=new Gi,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||n;return n=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=s.get(d);if(!n||p===null||p.length===0||r&&!m)r?h(null):c();else{let _=r?0:i,M=_*4,v=g.clippingState||null;l.value=v,v=h(p,u,M,f);for(let b=0;b!==M;++b)v[b]=t[b];g.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,p){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=f+x*4,_=u.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<g)&&(m=new Float32Array(g));for(let M=0,v=f;M!==x;++M,v+=4)o.copy(d[M]).applyMatrix4(_,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var Ho=class extends yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new mo(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new At(5,5,5),r=new rn({name:"CubemapFromEquirect",uniforms:Os(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zt,blending:Is});r.uniforms.tEquirect.value=t;let o=new ke(n,r),a=t.minFilter;return t.minFilter===Li&&(t.minFilter=Ft),new br(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,n);e.setRenderTarget(r)}},Ff=256,r_=3,o_=20,op=256,ap=16,a_=3,l_=new P,c_=new be,Pr=class s{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new br(1,10,null),this._boxMesh=new ke(new At(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,n=100,r={}){let{size:o=256,position:a=l_}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(c_));let m=new br(i,n,h);return m.position.copy(a),m.update(l,e),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=p,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Ff,Oh(e))}_fromTexture(e,t){e.mapping===Ls||e.mapping===wr?this._setSize(e.image.length===0?Ff:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=zf(e,!1,!1),i=Math.log2(e)-r_;for(let n=0;n<=i;n++)t.texture.mipmaps.push({width:e>>n,height:e>>n});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=zf(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let n=this._boxMesh,r=this._cubeCamera;n.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,n),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ls||e.mapping===wr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bf()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=kf()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=h_(),this._integrationMaterial=u_());let t=this._cubeSize,i=e.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/ap);for(let o=0;o<=i;o++){let a=s.lodToRoughness(o,i);if(o>i-a_)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(op*Math.pow(a,4)))+.5:0;n.roughness.value=a,n.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=d_());let i=this._blurMaterial,n=i.uniforms,r=this._sourceTarget;n.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,n.envMap.value=r.texture,this._renderCube(e,0,i),n.envMap.value=e.texture,this._renderCube(r,0,i)}};function zf(s,e,t){return new Ho(s,{minFilter:Li,generateMipmaps:e,type:$i,colorSpace:ai,depthBuffer:t})}function Go(s,e,t){return new rn({name:s,uniforms:e,vertexShader:Xe.cube_vert,fragmentShader:t,side:Zt,blending:Is,depthTest:!1,depthWrite:!1})}function h_(){return Go("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${op}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function u_(){return Go("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:ap}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function d_(){return Go("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${o_}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function kf(){return Go("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Bf(){return Go("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function f_(s){let e=new WeakMap,t=new WeakMap,i=null;function n(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===il||f===nl)if(e.has(u)){let p=e.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let x=new Ho(p.height);return x.fromEquirectangularTexture(s,u),e.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,p=f===il||f===nl,x=f===Ls||f===wr;if(p||x){let m=t.get(u),g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return i===null&&(i=new Pr(s)),m=p?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let _=u.image;return p&&_&&_.height>0||x&&_&&l(_)?(i===null&&(i=new Pr(s)),m=p?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===il?u.mapping=Ls:f===nl&&(u.mapping=wr),u}function l(u){let f=0,p=6;for(let x=0;x<p;x++)u[x]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:d}}function p_(s){let e={};function t(i){if(e[i]!==void 0)return e[i];let n=s.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&vs("WebGLRenderer: "+i+" extension not supported."),n}}}function m_(s,e,t,i){let n={},r=new WeakMap,o=new FinalizationRegistry(p=>delete n[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete n[p.id],o.unregister(p);let x=r.get(p);x&&(e.remove(x),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,x){return n[x.id]!==void 0||(x.addEventListener("dispose",a),n[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function h(p){let x=p.attributes;for(let m in x)e.update(x[m],s.ARRAY_BUFFER)}function d(p){let x=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let _=x!==null?x.array.length:m.array.length/3-1,M=m.count>=65535?lo:ao,v=new M(Math.ceil(_/3)*6,1),b=v.array;if(x!==null){let y=x.array;g=x.version;for(let S=0,C=0;S<_;S+=3){let R=y[S+0],N=y[S+1],D=y[S+2];b[C++]=R,b[C++]=N,b[C++]=N,b[C++]=D,b[C++]=D,b[C++]=R}}else{g=m.version;for(let y=0,S=0;y<_;y+=3){let C=y+0,R=y+1,N=y+2;b[S++]=C,b[S++]=R,b[S++]=R,b[S++]=N,b[S++]=N,b[S++]=C}}v.version=g;let E=r.get(p);E&&e.remove(E),r.set(p,v)}function u(p){let x=r.get(p);if(x){let m=p.index;m!==null&&x.version<m.version&&d(p)}else d(p);return r.get(p)}function f(){for(let p in n){let x=n[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function g_(s,e,t){let i;function n(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){s.drawElements(i,u,r,d*o),t.update(u,i,1)}function c(d,u,f){f!==0&&(s.drawElementsInstanced(i,u,r,d*o,f),t.update(u,i,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let x=0;for(let m=0;m<f;m++)x+=u[m];t.update(x,i,1)}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function x_(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:Fe("WebGLInfo: Unknown draw mode:",o);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function __(s,e,t){let i=new WeakMap,n=new ot;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let C=function(){y.dispose(),i.delete(a),a.removeEventListener("dispose",C)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],M=0;f===!0&&(M=1),p===!0&&(M=2),x===!0&&(M=3);let v=a.attributes.position.count*M,b=1;v>e.maxTextureSize&&(b=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let E=new Float32Array(v*b*4*d),y=new so(E,v,b,d);y.type=vi,y.needsUpdate=!0;let S=M*4;for(let R=0;R<d;R++){let N=m[R],D=g[R],k=_[R],L=v*b*4*R;for(let F=0;F<N.count;F++){let H=F*S;f===!0&&(n.fromBufferAttribute(N,F),E[L+H+0]=n.x,E[L+H+1]=n.y,E[L+H+2]=n.z,E[L+H+3]=0),p===!0&&(n.fromBufferAttribute(D,F),E[L+H+4]=n.x,E[L+H+5]=n.y,E[L+H+6]=n.z,E[L+H+7]=0),x===!0&&(n.fromBufferAttribute(k,F),E[L+H+8]=n.x,E[L+H+9]=n.y,E[L+H+10]=n.z,E[L+H+11]=k.itemSize===4?n.w:1)}}u={count:d,texture:y,size:new Ne(v,b)},i.set(a,u),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function y_(s,e,t,i,n){let r=new WeakMap;function o(c){let h=n.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var v_={[mh]:"LINEAR_TONE_MAPPING",[gh]:"REINHARD_TONE_MAPPING",[xh]:"CINEON_TONE_MAPPING",[Co]:"ACES_FILMIC_TONE_MAPPING",[yh]:"AGX_TONE_MAPPING",[vh]:"NEUTRAL_TONE_MAPPING",[_h]:"CUSTOM_TONE_MAPPING"};function M_(s,e,t,i,n,r){let o=new yi(e,t,{type:s,depthBuffer:n,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new at;h.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ke([0,2,0,0,2,0],2));let d=new Va({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new ke(h,d),f=new Rs(-1,1,1,-1,0,1),p=null,x=null,m=!1,g,_=null,M=[],v=!1;this.setSize=function(b,E){o.setSize(b,E),a!==null&&a.setSize(b,E),l!==null&&l.setSize(b,E);for(let y=0;y<M.length;y++){let S=M[y];S.setSize&&S.setSize(b,E)}},this.setEffects=function(b){M=b,v=M.length>0&&M[0].isRenderPass===!0;let E=o.width,y=o.height;M.length>0&&a===null&&(a=new yi(E,y,{type:$i,depthBuffer:!1,stencilBuffer:!1}),l=new yi(E,y,{type:$i,depthBuffer:!1,stencilBuffer:!1}));let S=n===!0&&M.some(C=>C.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new Pn(E,y),r===!0&&(c.format=kn,c.type=Ds)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let C=0;C<M.length;C++){let R=M[C];R.setSize&&R.setSize(E,y),S&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(b,E){if(m||b.toneMapping===ln&&M.length===0)return!1;if(_=E,E!==null){let y=E.width,S=E.height;(o.width!==y||o.height!==S)&&this.setSize(y,S)}return v===!1&&b.setRenderTarget(o),g=b.toneMapping,b.toneMapping=ln,!0},this.hasRenderPass=function(){return v},this.end=function(b,E){b.toneMapping=g,m=!0;let y=o,S=a;for(let C=0;C<M.length;C++){let R=M[C];R.enabled!==!1&&(R.render(b,S,y,E),R.needsSwap!==!1&&(y=S,S=S===a?l:a))}if(p!==b.outputColorSpace||x!==b.toneMapping){p=b.outputColorSpace,x=b.toneMapping,d.defines={},Ye.getTransfer(p)===st&&(d.defines.SRGB_TRANSFER="");let C=v_[x];C&&(d.defines[C]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=y.texture,b.setRenderTarget(_),b.render(u,f),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var lp=new zt,cp=new Pn(1,1),hp=new go(1),up=new so,dp=new ka,fp=new mo,Hf=[],Gf=[],Vf=new Float32Array(16),Wf=new Float32Array(9),Xf=new Float32Array(4);function Lr(s,e,t){let i=s[0];if(i<=0||i>0)return s;let n=e*t,r=Hf[n];if(r===void 0&&(r=new Float32Array(n),Hf[n]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function kt(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function Bt(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function Kl(s,e){let t=Gf[e];t===void 0&&(t=new Int32Array(e),Gf[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function b_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function S_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;s.uniform2fv(this.addr,e),Bt(t,e)}}function T_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;s.uniform3fv(this.addr,e),Bt(t,e)}}function E_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;s.uniform4fv(this.addr,e),Bt(t,e)}}function w_(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,i))return;Xf.set(i),s.uniformMatrix2fv(this.addr,!1,Xf),Bt(t,i)}}function A_(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,i))return;Wf.set(i),s.uniformMatrix3fv(this.addr,!1,Wf),Bt(t,i)}}function R_(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,i))return;Vf.set(i),s.uniformMatrix4fv(this.addr,!1,Vf),Bt(t,i)}}function C_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function I_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;s.uniform2iv(this.addr,e),Bt(t,e)}}function P_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;s.uniform3iv(this.addr,e),Bt(t,e)}}function L_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;s.uniform4iv(this.addr,e),Bt(t,e)}}function N_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function D_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;s.uniform2uiv(this.addr,e),Bt(t,e)}}function O_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;s.uniform3uiv(this.addr,e),Bt(t,e)}}function U_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;s.uniform4uiv(this.addr,e),Bt(t,e)}}function $l(s){return s.version===0&&(s.compareFunction=Ph,s.needsUpdate=!0),s}function F_(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?r=$l(cp):r=lp,t.setTexture2D(e||r,n)}function z_(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||dp,n)}function k_(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=$l(hp):r=fp,t.setTextureCube(e||r,n)}function B_(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||up,n)}function H_(s){switch(s){case 5126:return b_;case 35664:return S_;case 35665:return T_;case 35666:return E_;case 35674:return w_;case 35675:return A_;case 35676:return R_;case 5124:case 35670:return C_;case 35667:case 35671:return I_;case 35668:case 35672:return P_;case 35669:case 35673:return L_;case 5125:return N_;case 36294:return D_;case 36295:return O_;case 36296:return U_;case 35678:case 36198:case 36298:case 36306:case 35682:return F_;case 35679:case 36299:case 36307:return z_;case 35680:case 36300:case 36308:case 36293:return k_;case 36289:case 36303:case 36311:case 36292:return B_}}function G_(s,e){s.uniform1fv(this.addr,e)}function V_(s,e){let t=Lr(e,this.size,2);s.uniform2fv(this.addr,t)}function W_(s,e){let t=Lr(e,this.size,3);s.uniform3fv(this.addr,t)}function X_(s,e){let t=Lr(e,this.size,4);s.uniform4fv(this.addr,t)}function q_(s,e){let t=Lr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Y_(s,e){let t=Lr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function K_(s,e){let t=Lr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function $_(s,e){s.uniform1iv(this.addr,e)}function Z_(s,e){s.uniform2iv(this.addr,e)}function J_(s,e){s.uniform3iv(this.addr,e)}function j_(s,e){s.uniform4iv(this.addr,e)}function Q_(s,e){s.uniform1uiv(this.addr,e)}function ey(s,e){s.uniform2uiv(this.addr,e)}function ty(s,e){s.uniform3uiv(this.addr,e)}function iy(s,e){s.uniform4uiv(this.addr,e)}function ny(s,e,t){let i=this.cache,n=e.length,r=Kl(t,n);kt(i,r)||(s.uniform1iv(this.addr,r),Bt(i,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=$l(cp):o=lp;for(let a=0;a!==n;++a)t.setTexture2D(e[a]||o,r[a])}function sy(s,e,t){let i=this.cache,n=e.length,r=Kl(t,n);kt(i,r)||(s.uniform1iv(this.addr,r),Bt(i,r));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||dp,r[o])}function ry(s,e,t){let i=this.cache,n=e.length,r=Kl(t,n);kt(i,r)||(s.uniform1iv(this.addr,r),Bt(i,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=$l(hp):o=fp;for(let a=0;a!==n;++a)t.setTextureCube(e[a]||o,r[a])}function oy(s,e,t){let i=this.cache,n=e.length,r=Kl(t,n);kt(i,r)||(s.uniform1iv(this.addr,r),Bt(i,r));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||up,r[o])}function ay(s){switch(s){case 5126:return G_;case 35664:return V_;case 35665:return W_;case 35666:return X_;case 35674:return q_;case 35675:return Y_;case 35676:return K_;case 5124:case 35670:return $_;case 35667:case 35671:return Z_;case 35668:case 35672:return J_;case 35669:case 35673:return j_;case 5125:return Q_;case 36294:return ey;case 36295:return ty;case 36296:return iy;case 35678:case 36198:case 36298:case 36306:case 35682:return ny;case 35679:case 36299:case 36307:return sy;case 35680:case 36300:case 36308:case 36293:return ry;case 36289:case 36303:case 36311:case 36292:return oy}}var Wh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=H_(t.type)}},Xh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ay(t.type)}},qh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let r=0,o=n.length;r!==o;++r){let a=n[r];a.setValue(e,t[a.id],i)}}},Gh=/(\w+)(\])?(\[|\.)?/g;function qf(s,e){s.seq.push(e),s.map[e.id]=e}function ly(s,e,t){let i=s.name,n=i.length;for(Gh.lastIndex=0;;){let r=Gh.exec(i),o=Gh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){qf(t,c===void 0?new Wh(a,s,e):new Xh(a,s,e));break}else{let d=t.map[a];d===void 0&&(d=new qh(a),qf(t,d)),t=d}}}var Ir=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);ly(a,l,this)}let n=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(o):r.push(o);n.length>0&&(this.seq=n.concat(r))}setValue(e,t,i,n){let r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,r=e.length;n!==r;++n){let o=e[n];o.id in t&&i.push(o)}return i}};function Yf(s,e,t){let i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}var cy=37297,hy=0;function uy(s,e){let t=s.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=n;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Kf=new Be;function dy(s){Ye._getMatrix(Kf,Ye.workingColorSpace,s);let e=`mat3( ${Kf.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(s)){case io:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return Re("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function $f(s,e,t){let i=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+uy(s.getShaderSource(e),a)}else return r}function fy(s,e){let t=dy(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var py={[mh]:"Linear",[gh]:"Reinhard",[xh]:"Cineon",[Co]:"ACESFilmic",[yh]:"AgX",[vh]:"Neutral",[_h]:"Custom"};function my(s,e){let t=py[e];return t===void 0?(Re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ql=new P;function gy(){Ye.getLuminanceCoefficients(ql);let s=ql.x.toFixed(4),e=ql.y.toFixed(4),t=ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xy(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function _y(s){let e=[];for(let t in s){let i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function yy(s,e){let t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(e,n),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Bo(s){return s!==""}function Zf(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Jf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var vy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yh(s){return s.replace(vy,My)}function My(s,e){let t=Xe[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Yh(t)}var by=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jf(s){return s.replace(by,Sy)}function Sy(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Qf(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Ty={[Cs]:"SHADOWMAP_TYPE_PCF",[Tr]:"SHADOWMAP_TYPE_VSM"};function Ey(s){return Ty[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var wy={[wr]:"ENVMAP_MODE_REFRACTION"};function Ay(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":wy[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ry={[tl]:"ENVMAP_BLENDING_MULTIPLY",[mf]:"ENVMAP_BLENDING_MIX",[gf]:"ENVMAP_BLENDING_ADD"};function Cy(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Ry[s.combine]||"ENVMAP_BLENDING_NONE"}function Iy(s,e,t,i){let n=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Ey(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Ay(t),d=Cy(t),u=xy(t),f=_y(r),p=n.createProgram(),x,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Bo).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Bo).join(`
`),m.length>0&&(m+=`
`)):(x=[Qf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),m=[Qf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ln?"#define TONE_MAPPING":"",t.toneMapping!==ln?Xe.tonemapping_pars_fragment:"",t.toneMapping!==ln?my("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,fy("linearToOutputTexel",t.outputColorSpace),gy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bo).join(`
`)),o=Yh(o),o=Zf(o,t),o=Jf(o,t),a=Yh(a),a=Zf(a,t),a=Jf(a,t),o=jf(o),a=jf(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===Nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=g+x+o,M=g+m+a,v=Yf(n,n.VERTEX_SHADER,_),b=Yf(n,n.FRAGMENT_SHADER,M);n.attachShader(p,v),n.attachShader(p,b),t.index0AttributeName!==void 0?n.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&n.bindAttribLocation(p,0,"position"),n.linkProgram(p);function E(R){if(s.debug.checkShaderErrors){let N=n.getProgramInfoLog(p)||"",D=n.getShaderInfoLog(v)||"",k=n.getShaderInfoLog(b)||"",L=N.trim(),F=D.trim(),H=k.trim(),B=!0,J=!0;if(n.getProgramParameter(p,n.LINK_STATUS)===!1)if(B=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,p,v,b);else{let X=$f(n,v,"vertex"),q=$f(n,b,"fragment");Fe("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(p,n.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+X+`
`+q)}else L!==""?Re("WebGLProgram: Program Info Log:",L):(F===""||H==="")&&(J=!1);J&&(R.diagnostics={runnable:B,programLog:L,vertexShader:{log:F,prefix:x},fragmentShader:{log:H,prefix:m}})}n.deleteShader(v),n.deleteShader(b),y=new Ir(n,p),S=yy(n,p)}let y;this.getUniforms=function(){return y===void 0&&E(this),y};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=n.getProgramParameter(p,cy)),C},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hy++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=v,this.fragmentShader=b,this}var Py=0,Kh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let n=this._getShaderCacheForMaterial(e);return n.has(t)===!1&&(n.add(t),t.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new $h(e),t.set(e,i)),i}},$h=class{constructor(e){this.id=Py++,this.code=e,this.usedTimes=0}};function Ly(s){return s===ss||s===Do||s===Oo}function Ny(s,e,t,i,n,r){let o=new ro,a=new Kh,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(y){return l.add(y),y===0?"uv":`uv${y}`}function p(y,S,C,R,N,D){let k=R.fog,L=N.geometry,F=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?R.environment:null,H=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,B=e.get(y.envMap||F,H),J=u[y.type],X=i.precision;y.precision!==null&&(X=i.getMaxPrecision(y.precision),X!==y.precision&&Re("WebGLProgram.getParameters:",y.precision,"not supported, using",X,"instead."));let q=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,te=q!==void 0?q.length:0,me=0;L.morphAttributes.position!==void 0&&(me=1),L.morphAttributes.normal!==void 0&&(me=2),L.morphAttributes.color!==void 0&&(me=3);let Ee,K,se,_e;if(J){let ge=un[J];Ee=ge.vertexShader,K=ge.fragmentShader}else{Ee=y.vertexShader,K=y.fragmentShader;let ge=a.getVertexShaderStage(y),rt=a.getFragmentShaderStage(y);a.update(y,ge,rt),se=ge.id,_e=rt.id}let we=s.getRenderTarget(),ue=s.state.buffers.depth.getReversed(),ze=N.isInstancedMesh===!0,St=N.isBatchedMesh===!0,Le=!!y.map,et=!!y.matcap,ht=!!B,Je=ht&&B.isPMREMTexture===!0,Yt=!!y.aoMap,Ot=!!y.lightMap,hi=!!y.bumpMap&&y.wireframe===!1,Tt=!!y.normalMap,Qi=!!y.displacementMap,Ht=!!y.emissiveMap,Ti=!!y.metalnessMap,Ei=!!y.roughnessMap,wi=y.anisotropy>0,z=y.clearcoat>0,Ai=y.diffuseRoughness>0,_t=y.dispersion>0,yt=y.retroreflectivity>0,pe=y.iridescence>0,Ut=y.sheen>0,De=y.transmission>0,He=wi&&!!y.anisotropyMap,I=z&&!!y.clearcoatMap,T=z&&!!y.clearcoatNormalMap,V=z&&!!y.clearcoatRoughnessMap,ie=Ai&&!!y.diffuseRoughnessMap,ee=pe&&!!y.iridescenceMap,oe=pe&&!!y.iridescenceThicknessMap,de=Ut&&!!y.sheenColorMap,Z=Ut&&!!y.sheenRoughnessMap,j=!!y.specularMap,le=!!y.specularColorMap,O=!!y.specularIntensityMap,Q=De&&!!y.transmissionMap,$=De&&!!y.thicknessMap,ce=!!y.gradientMap,re=!!y.alphaMap,ae=y.alphaTest>0,Ie=!!y.alphaHash,We=!!y.extensions,ne=ln;y.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(ne=s.toneMapping);let Pe=Je?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,Ve={shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:Ee,fragmentShader:K,defines:y.defines,customVertexShaderID:se,customFragmentShaderID:_e,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:X,batching:St,batchingColor:St&&N._colorsTexture!==null,instancing:ze,instancingColor:ze&&N.instanceColor!==null,instancingMorph:ze&&N.morphTexture!==null,outputColorSpace:we===null?s.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:Ye.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Le,matcap:et,envMap:ht,envMapMode:ht&&B.mapping,envMapPMREM:Je,envMapMaxLod:Je?Pe.length-1:null,envMapSize:Je?Pe[0].width:null,aoMap:Yt,lightMap:Ot,bumpMap:hi,normalMap:Tt,displacementMap:Qi,emissiveMap:Ht,normalMapObjectSpace:Tt&&y.normalMapType===Mf,normalMapTangentSpace:Tt&&y.normalMapType===zo,packedNormalMap:Tt&&y.normalMapType===zo&&Ly(y.normalMap.format),metalnessMap:Ti,roughnessMap:Ei,anisotropy:wi,anisotropyMap:He,clearcoat:z,clearcoatMap:I,clearcoatNormalMap:T,clearcoatRoughnessMap:V,diffuseRoughness:Ai,diffuseRoughnessMap:ie,dispersion:_t,retroreflection:yt,iridescence:pe,iridescenceMap:ee,iridescenceThicknessMap:oe,sheen:Ut,sheenColorMap:de,sheenRoughnessMap:Z,specularMap:j,specularColorMap:le,specularIntensityMap:O,transmission:De,transmissionMap:Q,thicknessMap:$,gradientMap:ce,opaque:y.transparent===!1&&y.blending===Er&&y.alphaToCoverage===!1,alphaMap:re,alphaTest:ae,alphaHash:Ie,combine:y.combine,mapUv:Le&&f(y.map.channel),aoMapUv:Yt&&f(y.aoMap.channel),lightMapUv:Ot&&f(y.lightMap.channel),bumpMapUv:hi&&f(y.bumpMap.channel),normalMapUv:Tt&&f(y.normalMap.channel),displacementMapUv:Qi&&f(y.displacementMap.channel),emissiveMapUv:Ht&&f(y.emissiveMap.channel),metalnessMapUv:Ti&&f(y.metalnessMap.channel),roughnessMapUv:Ei&&f(y.roughnessMap.channel),anisotropyMapUv:He&&f(y.anisotropyMap.channel),clearcoatMapUv:I&&f(y.clearcoatMap.channel),clearcoatNormalMapUv:T&&f(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&f(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ie&&f(y.diffuseRoughnessMap.channel),iridescenceMapUv:ee&&f(y.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&f(y.iridescenceThicknessMap.channel),sheenColorMapUv:de&&f(y.sheenColorMap.channel),sheenRoughnessMapUv:Z&&f(y.sheenRoughnessMap.channel),specularMapUv:j&&f(y.specularMap.channel),specularColorMapUv:le&&f(y.specularColorMap.channel),specularIntensityMapUv:O&&f(y.specularIntensityMap.channel),transmissionMapUv:Q&&f(y.transmissionMap.channel),thicknessMapUv:$&&f(y.thicknessMap.channel),alphaMapUv:re&&f(y.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Tt||wi),vertexNormals:!!L.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!L.attributes.uv&&(Le||re),fog:!!k,useFog:y.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||L.attributes.normal===void 0&&Tt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ue,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:me,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:D.filter(ge=>ge.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:ne,decodeVideoTexture:Le&&y.map.isVideoTexture===!0&&Ye.getTransfer(y.map.colorSpace)===st,decodeVideoTextureEmissive:Ht&&y.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(y.emissiveMap.colorSpace)===st,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Xt,flipSided:y.side===Zt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:We&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&y.extensions.multiDraw===!0||St)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ve.vertexUv1s=l.has(1),Ve.vertexUv2s=l.has(2),Ve.vertexUv3s=l.has(3),l.clear(),Ve}function x(y){let S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(let C in y.defines)S.push(C),S.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(m(S,y),g(S,y),S.push(s.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function m(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapPMREM),y.push(S.envMapMaxLod),y.push(S.envMapSize),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.diffuseRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.numSunLights),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numSunLightShadows),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.numLightProbeGrids),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function g(y,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function _(y){let S=u[y.type],C;if(S){let R=un[S];C=Df.clone(R.uniforms)}else C=y.uniforms;return C}function M(y,S){let C=h.get(S);return C!==void 0?++C.usedTimes:(C=new Iy(s,S,y,n),c.push(C),h.set(S,C)),C}function v(y){if(--y.usedTimes===0){let S=c.indexOf(y);c[S]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function b(y){a.remove(y)}function E(){a.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:_,acquireProgram:M,releaseProgram:v,releaseShaderCache:b,programs:c,dispose:E}}function Dy(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function i(o){s.delete(o)}function n(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:r}}function Oy(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function ep(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function tp(){let s=[],e=0,t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,x,m,g){let _=s[e];return _===void 0?(_={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:g},s[e]=_):(_.id=u.id,_.object=u,_.geometry=f,_.material=p,_.materialVariant=o(u),_.groupOrder=x,_.renderOrder=u.renderOrder,_.z=m,_.group=g),e++,_}function l(u,f,p,x,m,g,_){_.reversedDepth===!0&&(m=-m);let M=a(u,f,p,x,m,g);p.transmission>0?i.push(M):p.transparent===!0?n.push(M):t.push(M)}function c(u,f,p,x,m,g){let _=a(u,f,p,x,m,g);p.transmission>0?i.unshift(_):p.transparent===!0?n.unshift(_):t.unshift(_)}function h(u,f){t.length>1&&t.sort(u||Oy),i.length>1&&i.sort(f||ep),n.length>1&&n.sort(f||ep)}function d(){for(let u=e,f=s.length;u<f;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:l,unshift:c,finish:d,sort:h}}function Uy(){let s=new WeakMap;function e(i,n){let r=s.get(i),o;return r===void 0?(o=new tp,s.set(i,[o])):n>=r.length?(o=new tp,r.push(o)):o=r[n],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Fy(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new be};break;case"SpotLight":t={position:new P,direction:new P,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new be,groundColor:new be};break;case"RectAreaLight":t={color:new be,position:new P,halfWidth:new P,halfHeight:new P};break}return s[e.id]=t,t}}}function zy(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var ky=0;function By(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Hy(s){let e=new Fy,t=zy(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let n=new P,r=new Ue,o=new Ue;function a(c){let h=0,d=0,u=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,_=0,M=0,v=0,b=0,E=0,y=0,S=0,C=0,R=0;c.sort(By);for(let D=0,k=c.length;D<k;D++){let L=c[D],F=L.color,H=L.intensity,B=L.distance,J=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ss?J=L.shadow.map.texture:J=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=F.r*H,d+=F.g*H,u+=F.b*H;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],H);R++}else if(L.isSunLight){let X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let q=L.shadow,te=t.get(L);te.shadowIntensity=q.intensity,te.shadowBias=q.bias,te.shadowNormalBias=q.normalBias,te.shadowRadius=q.radius,te.shadowMapSize.copy(q.mapSize).multiply(q.getFrameExtents()),i.sunShadow[p]=te,i.sunShadowMap[p]=J;let me=q.getViewportCount();for(let Ee=0;Ee<me;Ee++)i.sunShadowMatrix[x+Ee]=q.getMatrix(Ee),i.sunShadowCascade[x+Ee]=q._cascadeData[Ee];x+=me,p++}i.sun[f]=X,f++}else if(L.isDirectionalLight){let X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let q=L.shadow,te=t.get(L);te.shadowIntensity=q.intensity,te.shadowBias=q.bias,te.shadowNormalBias=q.normalBias,te.shadowRadius=q.radius,te.shadowMapSize=q.mapSize,i.directionalShadow[m]=te,i.directionalShadowMap[m]=J,i.directionalShadowMatrix[m]=L.shadow.matrix,b++}i.directional[m]=X,m++}else if(L.isSpotLight){let X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(F).multiplyScalar(H),X.distance=B,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[_]=X;let q=L.shadow;if(L.map&&(i.spotLightMap[S]=L.map,S++,q.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[_]=q.matrix,L.castShadow){let te=t.get(L);te.shadowIntensity=q.intensity,te.shadowBias=q.bias,te.shadowNormalBias=q.normalBias,te.shadowRadius=q.radius,te.shadowMapSize=q.mapSize,i.spotShadow[_]=te,i.spotShadowMap[_]=J,y++}_++}else if(L.isRectAreaLight){let X=e.get(L);X.color.copy(F).multiplyScalar(H),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[M]=X,M++}else if(L.isPointLight){let X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){let q=L.shadow,te=t.get(L);te.shadowIntensity=q.intensity,te.shadowBias=q.bias,te.shadowNormalBias=q.normalBias,te.shadowRadius=q.radius,te.shadowMapSize=q.mapSize,te.shadowCameraNear=q.camera.near,te.shadowCameraFar=q.camera.far,i.pointShadow[g]=te,i.pointShadowMap[g]=J,i.pointShadowMatrix[g]=L.shadow.matrix,E++}i.point[g]=X,g++}else if(L.isHemisphereLight){let X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(H),X.groundColor.copy(L.groundColor).multiplyScalar(H),i.hemi[v]=X,v++}}M>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let N=i.hash;(N.sunLength!==f||N.directionalLength!==m||N.pointLength!==g||N.spotLength!==_||N.rectAreaLength!==M||N.hemiLength!==v||N.numSunShadows!==p||N.numDirectionalShadows!==b||N.numPointShadows!==E||N.numSpotShadows!==y||N.numSpotMaps!==S||N.numLightProbes!==R)&&(i.sun.length=f,i.directional.length=m,i.spot.length=_,i.rectArea.length=M,i.point.length=g,i.hemi.length=v,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=y,i.spotShadowMap.length=y,i.spotLightMatrix.length=y+S-C,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=R,N.sunLength=f,N.directionalLength=m,N.pointLength=g,N.spotLength=_,N.rectAreaLength=M,N.hemiLength=v,N.numSunShadows=p,N.numDirectionalShadows=b,N.numPointShadows=E,N.numSpotShadows=y,N.numSpotMaps=S,N.numLightProbes=R,i.version=ky++)}function l(c,h){let d=0,u=0,f=0,p=0,x=0,m=0,g=h.matrixWorldInverse;for(let _=0,M=c.length;_<M;_++){let v=c[_];if(v.isSunLight){let b=i.sun[d];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(g),d++}else if(v.isDirectionalLight){let b=i.directional[u];b.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(g),u++}else if(v.isSpotLight){let b=i.spot[p];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(g),p++}else if(v.isRectAreaLight){let b=i.rectArea[x];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let b=i.point[f];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){let b=i.hemi[m];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:i}}function ip(s){let e=new Hy(s),t=[],i=[],n=[];function r(d){h.camera=d,t.length=0,i.length=0,n.length=0}function o(d){d.isLightProbeGrid?n.push(d):t.push(d)}function a(d){i.push(d)}function l(){e.setup(t),n.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Gy(s){let e=new WeakMap;function t(n,r=0){let o=e.get(n),a;return o===void 0?(a=new ip(s),e.set(n,[a])):r>=o.length?(a=new ip(s),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Vy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Xy=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],qy=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],np=new Ue,ko=new P,Vh=new P;function Yy(s,e,t){let i=new Qn,n=new Ne,r=new Ne,o=new ot,a=new Wa,l=new Xa,c={},h=t.maxTextureSize,d={[Pi]:Zt,[Zt]:Pi,[Xt]:Xt},u=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:Vy,fragmentShader:Wy}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new at;p.setAttribute("position",new pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ke(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cs;let g=this.type;this.render=function(E,y,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===$d&&(Re("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Cs);let C=s.getRenderTarget(),R=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),D=s.state;D.setBlending(Is),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let k=g!==this.type;k&&y.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(F=>F.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,F=E.length;L<F;L++){let H=E[L],B=H.shadow;if(B===void 0){Re("WebGLShadowMap:",H,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;n.copy(B.mapSize);let J=B.getFrameExtents();n.multiply(J),r.copy(B.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/J.x),n.x=r.x*J.x,B.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/J.y),n.y=r.y*J.y,B.mapSize.y=r.y));let X=s.state.buffers.depth.getReversed();if(B.camera._reversedDepth=X,B.map===null||k===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Tr){if(H.isPointLight){Re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new yi(n.x,n.y,{format:ss,type:$i,minFilter:Ft,magFilter:Ft,generateMipmaps:!1}),B.map.texture.name=H.name+".shadowMap",B.map.depthTexture=new Pn(n.x,n.y,vi),B.map.depthTexture.name=H.name+".shadowMapDepth",B.map.depthTexture.format=wn,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Pt,B.map.depthTexture.magFilter=Pt}else H.isPointLight?(B.map=new Ho(n.x),B.map.depthTexture=new go(n.x,Ki)):(B.map=new yi(n.x,n.y),B.map.depthTexture=new Pn(n.x,n.y,Ki)),B.map.depthTexture.name=H.name+".shadowMap",B.map.depthTexture.format=wn,this.type===Cs?(B.map.depthTexture.compareFunction=X?Ih:Ch,B.map.depthTexture.minFilter=Ft,B.map.depthTexture.magFilter=Ft):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Pt,B.map.depthTexture.magFilter=Pt);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==n.x||B.map.height!==n.y)&&B.map.setSize(n.x,n.y);let q=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();H.isPointLight!==!0&&B.updateMatrices(H,S);let te=(B.camera.layers.mask&4294967294)!==0?B.camera.layers:S.layers;for(let me=0;me<q;me++){let Ee=B.getCamera(me);if(H.isPointLight){let K=B.camera,se=B.matrix,_e=H.distance||K.far;_e!==K.far&&(K.far=_e,K.updateProjectionMatrix()),ko.setFromMatrixPosition(H.matrixWorld),K.position.copy(ko),Vh.copy(K.position),Vh.add(Xy[me]),K.up.copy(qy[me]),K.lookAt(Vh),K.updateMatrixWorld(),se.makeTranslation(-ko.x,-ko.y,-ko.z),np.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),B._frustum.setFromProjectionMatrix(np,K.coordinateSystem,K.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)s.setRenderTarget(B.map,me),s.clear();else{me===0&&(s.setRenderTarget(B.map),s.clear());let K=B.getViewport(me);o.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),D.viewport(o)}i=B.getFrustum(me),v(y,S,Ee,H,te,this.type)}B.isPointLightShadow!==!0&&this.type===Tr&&_(B,S),B.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(C,R,N)};function _(E,y){let S=e.update(x);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new yi(n.x,n.y,{format:ss,type:$i}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(y,null,S,u,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(y,null,S,f,x,null)}function M(E,y,S,C){let R=null,N=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)R=N;else if(R=S.isPointLight===!0?l:a,s.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let D=R.uuid,k=y.uuid,L=c[D];L===void 0&&(L={},c[D]=L);let F=L[k];F===void 0&&(F=R.clone(),L[k]=F,y.addEventListener("dispose",b)),R=F}if(R.visible=y.visible,R.wireframe=y.wireframe,C===Tr?R.side=y.shadowSide!==null?y.shadowSide:y.side:R.side=y.shadowSide!==null?y.shadowSide:d[y.side],R.alphaMap=y.alphaMap,R.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,R.map=y.map,R.clipShadows=y.clipShadows,R.clippingPlanes=y.clippingPlanes,R.clipIntersection=y.clipIntersection,R.displacementMap=y.displacementMap,R.displacementScale=y.displacementScale,R.displacementBias=y.displacementBias,R.wireframeLinewidth=y.wireframeLinewidth,R.linewidth=y.linewidth,S.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let D=s.properties.get(R);D.light=S}return R}function v(E,y,S,C,R,N){if(E.visible===!1)return;if(E.layers.test(R)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===Tr)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);let L=e.update(E),F=E.material;if(Array.isArray(F)){let H=L.groups;for(let B=0,J=H.length;B<J;B++){let X=H[B],q=F[X.materialIndex];if(q&&q.visible){let te=M(E,q,C,N);E.onBeforeShadow(s,E,y,S,L,te,X),s.renderBufferDirect(S,null,L,te,E,X),E.onAfterShadow(s,E,y,S,L,te,X)}}}else if(F.visible){let H=M(E,F,C,N);E.onBeforeShadow(s,E,y,S,L,H,null),s.renderBufferDirect(S,null,L,H,E,null),E.onAfterShadow(s,E,y,S,L,H,null)}}let k=E.children;for(let L=0,F=k.length;L<F;L++)v(k[L],y,S,C,R,N)}function b(E){E.target.removeEventListener("dispose",b);for(let S in c){let C=c[S],R=E.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}function Ky(s,e){function t(){let O=!1,Q=new ot,$=null,ce=new ot(0,0,0,0);return{setMask:function(re){$!==re&&!O&&(s.colorMask(re,re,re,re),$=re)},setLocked:function(re){O=re},setClear:function(re,ae,Ie,We,ne){ne===!0&&(re*=We,ae*=We,Ie*=We),Q.set(re,ae,Ie,We),ce.equals(Q)===!1&&(s.clearColor(re,ae,Ie,We),ce.copy(Q))},reset:function(){O=!1,$=null,ce.set(-1,0,0,0)}}}function i(){let O=!1,Q=!1,$=null,ce=null,re=null;return{setReversed:function(ae){if(Q!==ae){let Ie=e.get("EXT_clip_control");ae?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),Q=ae;let We=re;re=null,this.setClear(We)}},getReversed:function(){return Q},setTest:function(ae){ae?ue(s.DEPTH_TEST):ze(s.DEPTH_TEST)},setMask:function(ae){$!==ae&&!O&&(s.depthMask(ae),$=ae)},setFunc:function(ae){if(Q&&(ae=Pf[ae]),ce!==ae){switch(ae){case Ia:s.depthFunc(s.NEVER);break;case Pa:s.depthFunc(s.ALWAYS);break;case La:s.depthFunc(s.LESS);break;case ar:s.depthFunc(s.LEQUAL);break;case Na:s.depthFunc(s.EQUAL);break;case Da:s.depthFunc(s.GEQUAL);break;case Oa:s.depthFunc(s.GREATER);break;case Ua:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ce=ae}},setLocked:function(ae){O=ae},setClear:function(ae){re!==ae&&(re=ae,Q&&(ae=1-ae),s.clearDepth(ae))},reset:function(){O=!1,$=null,ce=null,re=null,Q=!1}}}function n(){let O=!1,Q=null,$=null,ce=null,re=null,ae=null,Ie=null,We=null,ne=null;return{setTest:function(Pe){O||(Pe?ue(s.STENCIL_TEST):ze(s.STENCIL_TEST))},setMask:function(Pe){Q!==Pe&&!O&&(s.stencilMask(Pe),Q=Pe)},setFunc:function(Pe,Ve,ge){($!==Pe||ce!==Ve||re!==ge)&&(s.stencilFunc(Pe,Ve,ge),$=Pe,ce=Ve,re=ge)},setOp:function(Pe,Ve,ge){(ae!==Pe||Ie!==Ve||We!==ge)&&(s.stencilOp(Pe,Ve,ge),ae=Pe,Ie=Ve,We=ge)},setLocked:function(Pe){O=Pe},setClear:function(Pe){ne!==Pe&&(s.clearStencil(Pe),ne=Pe)},reset:function(){O=!1,Q=null,$=null,ce=null,re=null,ae=null,Ie=null,We=null,ne=null}}}let r=new t,o=new i,a=new n,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],x=null,m=!1,g=null,_=null,M=null,v=null,b=null,E=null,y=null,S=new be(0,0,0),C=0,R=!1,N=null,D=null,k=null,L=null,F=null,H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,J=0,X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(X)[1]),B=J>=1):X.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),B=J>=2);let q=null,te={},me=s.getParameter(s.SCISSOR_BOX),Ee=s.getParameter(s.VIEWPORT),K=new ot().fromArray(me),se=new ot().fromArray(Ee);function _e(O,Q,$,ce){let re=new Uint8Array(4),ae=s.createTexture();s.bindTexture(O,ae),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ie=0;Ie<$;Ie++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(Q,0,s.RGBA,1,1,ce,0,s.RGBA,s.UNSIGNED_BYTE,re):s.texImage2D(Q+Ie,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,re);return ae}let we={};we[s.TEXTURE_2D]=_e(s.TEXTURE_2D,s.TEXTURE_2D,1),we[s.TEXTURE_CUBE_MAP]=_e(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[s.TEXTURE_2D_ARRAY]=_e(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),we[s.TEXTURE_3D]=_e(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ue(s.DEPTH_TEST),o.setFunc(ar),hi(!1),Tt(hh),ue(s.CULL_FACE),Yt(Is);function ue(O){h[O]!==!0&&(s.enable(O),h[O]=!0)}function ze(O){h[O]!==!1&&(s.disable(O),h[O]=!1)}function St(O,Q){return u[O]!==Q?(s.bindFramebuffer(O,Q),u[O]=Q,O===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Q),O===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Q),!0):!1}function Le(O,Q){let $=p,ce=!1;if(O){$=f.get(Q),$===void 0&&($=[],f.set(Q,$));let re=O.textures;if($.length!==re.length||$[0]!==s.COLOR_ATTACHMENT0){for(let ae=0,Ie=re.length;ae<Ie;ae++)$[ae]=s.COLOR_ATTACHMENT0+ae;$.length=re.length,ce=!0}}else $[0]!==s.BACK&&($[0]=s.BACK,ce=!0);ce&&s.drawBuffers($)}function et(O){return x!==O?(s.useProgram(O),x=O,!0):!1}let ht={[Ps]:s.FUNC_ADD,[Jd]:s.FUNC_SUBTRACT,[jd]:s.FUNC_REVERSE_SUBTRACT};ht[Qd]=s.MIN,ht[ef]=s.MAX;let Je={[tf]:s.ZERO,[nf]:s.ONE,[sf]:s.SRC_COLOR,[fh]:s.SRC_ALPHA,[hf]:s.SRC_ALPHA_SATURATE,[lf]:s.DST_COLOR,[of]:s.DST_ALPHA,[rf]:s.ONE_MINUS_SRC_COLOR,[ph]:s.ONE_MINUS_SRC_ALPHA,[cf]:s.ONE_MINUS_DST_COLOR,[af]:s.ONE_MINUS_DST_ALPHA,[uf]:s.CONSTANT_COLOR,[df]:s.ONE_MINUS_CONSTANT_COLOR,[ff]:s.CONSTANT_ALPHA,[pf]:s.ONE_MINUS_CONSTANT_ALPHA};function Yt(O,Q,$,ce,re,ae,Ie,We,ne,Pe){if(O===Is){m===!0&&(ze(s.BLEND),m=!1);return}if(m===!1&&(ue(s.BLEND),m=!0),O!==Zd){if(O!==g||Pe!==R){if((_!==Ps||b!==Ps)&&(s.blendEquation(s.FUNC_ADD),_=Ps,b=Ps),Pe)switch(O){case Er:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yi:s.blendFunc(s.ONE,s.ONE);break;case uh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case dh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Fe("WebGLState: Invalid blending: ",O);break}else switch(O){case Er:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case uh:Fe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dh:Fe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Fe("WebGLState: Invalid blending: ",O);break}M=null,v=null,E=null,y=null,S.set(0,0,0),C=0,g=O,R=Pe}return}re=re||Q,ae=ae||$,Ie=Ie||ce,(Q!==_||re!==b)&&(s.blendEquationSeparate(ht[Q],ht[re]),_=Q,b=re),($!==M||ce!==v||ae!==E||Ie!==y)&&(s.blendFuncSeparate(Je[$],Je[ce],Je[ae],Je[Ie]),M=$,v=ce,E=ae,y=Ie),(We.equals(S)===!1||ne!==C)&&(s.blendColor(We.r,We.g,We.b,ne),S.copy(We),C=ne),g=O,R=!1}function Ot(O,Q){O.side===Xt?ze(s.CULL_FACE):ue(s.CULL_FACE);let $=O.side===Zt;Q&&($=!$),hi($),O.blending===Er&&O.transparent===!1?Yt(Is):Yt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let ce=O.stencilWrite;a.setTest(ce),ce&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ht(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ue(s.SAMPLE_ALPHA_TO_COVERAGE):ze(s.SAMPLE_ALPHA_TO_COVERAGE)}function hi(O){N!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),N=O)}function Tt(O){O!==Yd?(ue(s.CULL_FACE),O!==D&&(O===hh?s.cullFace(s.BACK):O===Kd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ze(s.CULL_FACE),D=O}function Qi(O){O!==k&&(B&&s.lineWidth(O),k=O)}function Ht(O,Q,$){O?(ue(s.POLYGON_OFFSET_FILL),(L!==Q||F!==$)&&(L=Q,F=$,o.getReversed()&&(Q=-Q,$=-$),s.polygonOffset(Q,$))):ze(s.POLYGON_OFFSET_FILL)}function Ti(O){O?ue(s.SCISSOR_TEST):ze(s.SCISSOR_TEST)}function Ei(O){O===void 0&&(O=s.TEXTURE0+H-1),q!==O&&(s.activeTexture(O),q=O)}function wi(O,Q,$){$===void 0&&(q===null?$=s.TEXTURE0+H-1:$=q);let ce=te[$];ce===void 0&&(ce={type:void 0,texture:void 0},te[$]=ce),(ce.type!==O||ce.texture!==Q)&&(q!==$&&(s.activeTexture($),q=$),s.bindTexture(O,Q||we[O]),ce.type=O,ce.texture=Q)}function z(){let O=te[q];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Ai(){try{s.compressedTexImage2D(...arguments)}catch(O){Fe("WebGLState:",O)}}function _t(){try{s.compressedTexImage3D(...arguments)}catch(O){Fe("WebGLState:",O)}}function yt(){try{s.texSubImage2D(...arguments)}catch(O){Fe("WebGLState:",O)}}function pe(){try{s.texSubImage3D(...arguments)}catch(O){Fe("WebGLState:",O)}}function Ut(){try{s.compressedTexSubImage2D(...arguments)}catch(O){Fe("WebGLState:",O)}}function De(){try{s.compressedTexSubImage3D(...arguments)}catch(O){Fe("WebGLState:",O)}}function He(){try{s.texStorage2D(...arguments)}catch(O){Fe("WebGLState:",O)}}function I(){try{s.texStorage3D(...arguments)}catch(O){Fe("WebGLState:",O)}}function T(){try{s.texImage2D(...arguments)}catch(O){Fe("WebGLState:",O)}}function V(){try{s.texImage3D(...arguments)}catch(O){Fe("WebGLState:",O)}}function ie(O){return d[O]!==void 0?d[O]:s.getParameter(O)}function ee(O,Q){d[O]!==Q&&(s.pixelStorei(O,Q),d[O]=Q)}function oe(O){K.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),K.copy(O))}function de(O){se.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),se.copy(O))}function Z(O,Q){let $=c.get(Q);$===void 0&&($=new WeakMap,c.set(Q,$));let ce=$.get(O);ce===void 0&&(ce=s.getUniformBlockIndex(Q,O.name),s.uniformBlockBinding(Q,ce,ce),$.set(O,ce))}function j(O,Q,$){let re=c.get(Q).get(O);l[re]!==$&&(s.bindBufferBase(s.UNIFORM_BUFFER,re,$),l[re]=$)}function le(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},q=null,te={},u={},l={},f=new WeakMap,p=[],x=null,m=!1,g=null,_=null,M=null,v=null,b=null,E=null,y=null,S=new be(0,0,0),C=0,R=!1,N=null,D=null,k=null,L=null,F=null,K.set(0,0,s.canvas.width,s.canvas.height),se.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ue,disable:ze,bindFramebuffer:St,drawBuffers:Le,useProgram:et,setBlending:Yt,setMaterial:Ot,setFlipSided:hi,setCullFace:Tt,setLineWidth:Qi,setPolygonOffset:Ht,setScissorTest:Ti,activeTexture:Ei,bindTexture:wi,unbindTexture:z,compressedTexImage2D:Ai,compressedTexImage3D:_t,texImage2D:T,texImage3D:V,pixelStorei:ee,getParameter:ie,updateUBOMapping:Z,uniformBlockBinding:j,texStorage2D:He,texStorage3D:I,texSubImage2D:yt,texSubImage3D:pe,compressedTexSubImage2D:Ut,compressedTexSubImage3D:De,scissor:oe,viewport:de,reset:le}}function $y(s,e,t,i,n,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,h=new WeakMap,d=new Set,u,f=new WeakMap,p=new Set,x=new FinalizationRegistry(I=>p.delete(I)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,T){return m?new OffscreenCanvas(I,T):hr("canvas")}function _(I,T,V){let ie=1,ee=He(I);if((ee.width>V||ee.height>V)&&(ie=V/Math.max(ee.width,ee.height)),ie<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let oe=Math.floor(ie*ee.width),de=Math.floor(ie*ee.height);u===void 0&&(u=g(oe,de));let Z=T?g(oe,de):u;return Z.width=oe,Z.height=de,Z.getContext("2d").drawImage(I,0,0,oe,de),Re("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+oe+"x"+de+")."),Z}else return"data"in I&&Re("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),I;return I}function M(I){return I.generateMipmaps}function v(I){s.generateMipmap(I)}function b(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(I,T,V,ie,ee,oe=!1){if(I!==null){if(s[I]!==void 0)return s[I];Re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let de;ie&&(de=e.get("EXT_texture_norm16"),de||Re("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=T;if(T===s.RED&&(V===s.FLOAT&&(Z=s.R32F),V===s.HALF_FLOAT&&(Z=s.R16F),V===s.UNSIGNED_BYTE&&(Z=s.R8),V===s.UNSIGNED_SHORT&&de&&(Z=de.R16_EXT),V===s.SHORT&&de&&(Z=de.R16_SNORM_EXT)),T===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(Z=s.R8UI),V===s.UNSIGNED_SHORT&&(Z=s.R16UI),V===s.UNSIGNED_INT&&(Z=s.R32UI),V===s.BYTE&&(Z=s.R8I),V===s.SHORT&&(Z=s.R16I),V===s.INT&&(Z=s.R32I)),T===s.RG&&(V===s.FLOAT&&(Z=s.RG32F),V===s.HALF_FLOAT&&(Z=s.RG16F),V===s.UNSIGNED_BYTE&&(Z=s.RG8),V===s.UNSIGNED_SHORT&&de&&(Z=de.RG16_EXT),V===s.SHORT&&de&&(Z=de.RG16_SNORM_EXT)),T===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(Z=s.RG8UI),V===s.UNSIGNED_SHORT&&(Z=s.RG16UI),V===s.UNSIGNED_INT&&(Z=s.RG32UI),V===s.BYTE&&(Z=s.RG8I),V===s.SHORT&&(Z=s.RG16I),V===s.INT&&(Z=s.RG32I)),T===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),V===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),V===s.UNSIGNED_INT&&(Z=s.RGB32UI),V===s.BYTE&&(Z=s.RGB8I),V===s.SHORT&&(Z=s.RGB16I),V===s.INT&&(Z=s.RGB32I)),T===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),V===s.UNSIGNED_INT&&(Z=s.RGBA32UI),V===s.BYTE&&(Z=s.RGBA8I),V===s.SHORT&&(Z=s.RGBA16I),V===s.INT&&(Z=s.RGBA32I)),T===s.RGB&&(V===s.UNSIGNED_SHORT&&de&&(Z=de.RGB16_EXT),V===s.SHORT&&de&&(Z=de.RGB16_SNORM_EXT),V===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),V===s.UNSIGNED_INT_10F_11F_11F_REV&&(Z=s.R11F_G11F_B10F)),T===s.RGBA){let j=oe?io:Ye.getTransfer(ee);V===s.FLOAT&&(Z=s.RGBA32F),V===s.HALF_FLOAT&&(Z=s.RGBA16F),V===s.UNSIGNED_BYTE&&(Z=j===st?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT&&de&&(Z=de.RGBA16_EXT),V===s.SHORT&&de&&(Z=de.RGBA16_SNORM_EXT),V===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function y(I,T){let V;return I?T===null||T===Ki||T===Ds?V=s.DEPTH24_STENCIL8:T===vi?V=s.DEPTH32F_STENCIL8:T===Rr&&(V=s.DEPTH24_STENCIL8,Re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ki||T===Ds?V=s.DEPTH_COMPONENT24:T===vi?V=s.DEPTH_COMPONENT32F:T===Rr&&(V=s.DEPTH_COMPONENT16),V}function S(I,T){return M(I)===!0||I.isFramebufferTexture&&I.minFilter!==Pt&&I.minFilter!==Ft?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function C(I){let T=new WeakRef(I);i.get(I).__ref=T,p.add(T),x.register(I,T,T)}function R(I){let T=i.get(I).__ref;T!==void 0&&(p.delete(T),x.unregister(T))}function N(I){k(I.target)}function D(I){L(I.target)}function k(I){I.removeEventListener("dispose",N),R(I),H(I),I.isVideoTexture&&h.delete(I),I.isHTMLTexture&&d.delete(I)}function L(I){I.removeEventListener("dispose",D),R(I),J(I)}function F(){for(let I of p){let T=I.deref();T!==void 0&&(T.isRenderTarget===!0?L(T):k(T))}p.clear(),d.clear()}function H(I){let T=i.get(I);if(T.__webglInit===void 0)return;let V=I.source,ie=f.get(V);if(ie){let ee=ie[T.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&B(I),Object.keys(ie).length===0&&f.delete(V)}i.remove(I)}function B(I){let T=i.get(I);s.deleteTexture(T.__webglTexture);let V=I.source,ie=f.get(V);delete ie[T.__cacheKey],o.memory.textures--}function J(I){let T=i.get(I);T.__depthDisposeCallback&&T.__depthDisposeCallback();let V=I.depthTexture;if(V&&V.renderTarget===I&&k(V),I.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(T.__webglFramebuffer[ee]))for(let oe=0;oe<T.__webglFramebuffer[ee].length;oe++)s.deleteFramebuffer(T.__webglFramebuffer[ee][oe]);else s.deleteFramebuffer(T.__webglFramebuffer[ee]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[ee])}else{if(Array.isArray(T.__webglFramebuffer))for(let ee=0;ee<T.__webglFramebuffer.length;ee++)s.deleteFramebuffer(T.__webglFramebuffer[ee]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ee=0;ee<T.__webglColorRenderbuffer.length;ee++)T.__webglColorRenderbuffer[ee]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[ee]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let ie=I.textures;for(let ee=0,oe=ie.length;ee<oe;ee++){let de=i.get(ie[ee]);de.__webglTexture&&(s.deleteTexture(de.__webglTexture),o.memory.textures--),i.remove(ie[ee])}i.remove(I)}let X=0;function q(){X=0}function te(){return X}function me(I){X=I}function Ee(){let I=X;return I>=n.maxTextures&&Re("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+n.maxTextures),X+=1,I}function K(I){let T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.mipmapsAutoUpdate),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function se(I,T){let V=i.get(I);if(I.isVideoTexture&&Ut(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&V.__version!==I.version){let ie=I.image;if(ie===null)Re("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)Re("WebGLRenderer: Texture marked for update but image is incomplete");else{Ot(V,I,T);return}}else I.isExternalTexture&&(V.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+T)}function _e(I,T){let V=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&V.__version!==I.version){Ot(V,I,T);return}else I.isExternalTexture&&(V.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+T)}function we(I,T){let V=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&V.__version!==I.version){Ot(V,I,T);return}t.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+T)}function ue(I,T){let V=i.get(I);if(I.version>0&&V.__version!==I.version){hi(V,I,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+T)}let ze={[nn]:s.REPEAT,[Ci]:s.CLAMP_TO_EDGE,[lr]:s.MIRRORED_REPEAT},St={[Pt]:s.NEAREST,[sl]:s.NEAREST_MIPMAP_NEAREST,[Ns]:s.NEAREST_MIPMAP_LINEAR,[Ft]:s.LINEAR,[Ar]:s.LINEAR_MIPMAP_NEAREST,[Li]:s.LINEAR_MIPMAP_LINEAR},Le={[Sf]:s.NEVER,[Ph]:s.ALWAYS,[Tf]:s.LESS,[Ch]:s.LEQUAL,[Ef]:s.EQUAL,[Ih]:s.GEQUAL,[wf]:s.GREATER,[Af]:s.NOTEQUAL};function et(I,T){if(T.type===vi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ft||T.magFilter===Ar||T.magFilter===Ns||T.magFilter===Li||T.minFilter===Ft||T.minFilter===Ar||T.minFilter===Ns||T.minFilter===Li)&&Re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,ze[T.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,ze[T.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,ze[T.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,St[T.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,St[T.minFilter]),T.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,Le[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Pt||T.minFilter!==Ns&&T.minFilter!==Li||T.type===vi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,n.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function ht(I,T){let V=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",N),C(T));let ie=T.source,ee=f.get(ie);ee===void 0&&(ee={},f.set(ie,ee));let oe=K(T);if(oe!==I.__cacheKey){ee[oe]===void 0&&(ee[oe]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ee[oe].usedTimes++;let de=ee[I.__cacheKey];de!==void 0&&(ee[I.__cacheKey].usedTimes--,de.usedTimes===0&&B(T)),I.__cacheKey=oe,I.__webglTexture=ee[oe].texture}return V}function Je(I,T,V){return Math.floor(Math.floor(I/V)/T)}function Yt(I,T,V,ie){let oe=I.updateRanges;if(oe.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,V,ie,T.data);else{oe.sort((O,Q)=>O.start-Q.start);let de=0;for(let O=1;O<oe.length;O++){let Q=oe[de],$=oe[O],ce=Q.start+Q.count,re=Je($.start,T.width,4),ae=Je(Q.start,T.width,4);$.start<=ce+1&&re===ae&&Je($.start+$.count-1,T.width,4)===re?Q.count=Math.max(Q.count,$.start+$.count-Q.start):(++de,oe[de]=$)}oe.length=de+1;let Z=t.getParameter(s.UNPACK_ROW_LENGTH),j=t.getParameter(s.UNPACK_SKIP_PIXELS),le=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let O=0,Q=oe.length;O<Q;O++){let $=oe[O],ce=Math.floor($.start/4),re=Math.ceil($.count/4),ae=ce%T.width,Ie=Math.floor(ce/T.width),We=re,ne=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ie),t.texSubImage2D(s.TEXTURE_2D,0,ae,Ie,We,ne,V,ie,T.data)}I.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,Z),t.pixelStorei(s.UNPACK_SKIP_PIXELS,j),t.pixelStorei(s.UNPACK_SKIP_ROWS,le)}}function Ot(I,T,V){let ie=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ie=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ie=s.TEXTURE_3D);let ee=ht(I,T),oe=T.source;t.bindTexture(ie,I.__webglTexture,s.TEXTURE0+V);let de=i.get(oe);if(oe.version!==de.__version||ee===!0){if(t.activeTexture(s.TEXTURE0+V),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let ne=Ye.getPrimaries(Ye.workingColorSpace),Pe=T.colorSpace===Bn?null:Ye.getPrimaries(T.colorSpace),Ve=T.colorSpace===Bn||ne===Pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve)}t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment);let j=_(T.image,!1,n.maxTextureSize);j=De(T,j);let le=r.convert(T.format,T.colorSpace),O=r.convert(T.type),Q=E(T.internalFormat,le,O,T.normalized,T.colorSpace,T.isVideoTexture);et(ie,T);let $,ce=T.mipmaps,re=T.isVideoTexture!==!0,ae=de.__version===void 0||ee===!0,Ie=oe.dataReady,We=S(T,j);if(T.isDepthTexture)Q=y(T.format===kn,T.type),ae&&(re?t.texStorage2D(s.TEXTURE_2D,1,Q,j.width,j.height):t.texImage2D(s.TEXTURE_2D,0,Q,j.width,j.height,0,le,O,null));else if(T.isDataTexture)if(ce.length>0){re&&ae&&t.texStorage2D(s.TEXTURE_2D,We,Q,ce[0].width,ce[0].height);for(let ne=0,Pe=ce.length;ne<Pe;ne++)$=ce[ne],re?Ie&&t.texSubImage2D(s.TEXTURE_2D,ne,0,0,$.width,$.height,le,O,$.data):t.texImage2D(s.TEXTURE_2D,ne,Q,$.width,$.height,0,le,O,$.data);T.generateMipmaps=!1}else re?(ae&&t.texStorage2D(s.TEXTURE_2D,We,Q,j.width,j.height),Ie&&Yt(T,j,le,O)):t.texImage2D(s.TEXTURE_2D,0,Q,j.width,j.height,0,le,O,j.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){re&&ae&&t.texStorage3D(s.TEXTURE_2D_ARRAY,We,Q,ce[0].width,ce[0].height,j.depth);for(let ne=0,Pe=ce.length;ne<Pe;ne++)if($=ce[ne],T.format!==Ni)if(le!==null)if(re){if(Ie)if(T.layerUpdates.size>0){let Ve=Hh($.width,$.height,T.format,T.type);for(let ge of T.layerUpdates){let rt=$.data.subarray(ge*Ve/$.data.BYTES_PER_ELEMENT,(ge+1)*Ve/$.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,ge,$.width,$.height,1,le,rt)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,$.width,$.height,j.depth,le,$.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ne,Q,$.width,$.height,j.depth,0,$.data,0,0);else Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else re?Ie&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,$.width,$.height,j.depth,le,O,$.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ne,Q,$.width,$.height,j.depth,0,le,O,$.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{re&&ae&&t.texStorage2D(s.TEXTURE_2D,We,Q,ce[0].width,ce[0].height);for(let ne=0,Pe=ce.length;ne<Pe;ne++)$=ce[ne],T.format!==Ni?le!==null?re?Ie&&t.compressedTexSubImage2D(s.TEXTURE_2D,ne,0,0,$.width,$.height,le,$.data):t.compressedTexImage2D(s.TEXTURE_2D,ne,Q,$.width,$.height,0,$.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?Ie&&t.texSubImage2D(s.TEXTURE_2D,ne,0,0,$.width,$.height,le,O,$.data):t.texImage2D(s.TEXTURE_2D,ne,Q,$.width,$.height,0,le,O,$.data)}else if(T.isDataArrayTexture)if(re){if(ae&&t.texStorage3D(s.TEXTURE_2D_ARRAY,We,Q,j.width,j.height,j.depth),Ie)if(T.layerUpdates.size>0){let ne=Hh(j.width,j.height,T.format,T.type);for(let Pe of T.layerUpdates){let Ve=j.data.subarray(Pe*ne/j.data.BYTES_PER_ELEMENT,(Pe+1)*ne/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Pe,j.width,j.height,1,le,O,Ve)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,le,O,j.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Q,j.width,j.height,j.depth,0,le,O,j.data);else if(T.isData3DTexture)re?(ae&&t.texStorage3D(s.TEXTURE_3D,We,Q,j.width,j.height,j.depth),Ie&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,le,O,j.data)):t.texImage3D(s.TEXTURE_3D,0,Q,j.width,j.height,j.depth,0,le,O,j.data);else if(T.isFramebufferTexture){if(ae)if(re)t.texStorage2D(s.TEXTURE_2D,We,Q,j.width,j.height);else{let ne=j.width,Pe=j.height;for(let Ve=0;Ve<We;Ve++)t.texImage2D(s.TEXTURE_2D,Ve,Q,ne,Pe,0,le,O,null),ne>>=1,Pe>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in s){let ne=s.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),j.parentNode!==ne){ne.appendChild(j),d.add(T),ne.onpaint=Pe=>{let Ve=Pe.changedElements;for(let ge of d)Ve.includes(ge.image)&&(ge.needsUpdate=!0)},ne.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,j);else{let Ve=s.RGBA,ge=s.RGBA,rt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ve,ge,rt,j)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ce.length>0){if(re&&ae){let ne=He(ce[0]);t.texStorage2D(s.TEXTURE_2D,We,Q,ne.width,ne.height)}for(let ne=0,Pe=ce.length;ne<Pe;ne++)$=ce[ne],re?Ie&&t.texSubImage2D(s.TEXTURE_2D,ne,0,0,le,O,$):t.texImage2D(s.TEXTURE_2D,ne,Q,le,O,$);T.generateMipmaps=!1}else if(re){if(ae){let ne=He(j);t.texStorage2D(s.TEXTURE_2D,We,Q,ne.width,ne.height)}Ie&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,le,O,j)}else t.texImage2D(s.TEXTURE_2D,0,Q,le,O,j);M(T)&&T.mipmapsAutoUpdate===!0&&v(ie),de.__version=oe.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function hi(I,T,V){if(T.image.length!==6)return;let ie=ht(I,T),ee=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+V);let oe=i.get(ee);if(ee.version!==oe.__version||ie===!0){t.activeTexture(s.TEXTURE0+V);let de=Ye.getPrimaries(Ye.workingColorSpace),Z=T.colorSpace===Bn?null:Ye.getPrimaries(T.colorSpace),j=T.colorSpace===Bn||de===Z?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let le=T.isCompressedTexture||T.image[0].isCompressedTexture,O=T.image[0]&&T.image[0].isDataTexture,Q=[];for(let ge=0;ge<6;ge++)!le&&!O?Q[ge]=_(T.image[ge],!0,n.maxCubemapSize):Q[ge]=O?T.image[ge].image:T.image[ge],Q[ge]=De(T,Q[ge]);let $=Q[0],ce=r.convert(T.format,T.colorSpace),re=r.convert(T.type),ae=E(T.internalFormat,ce,re,T.normalized,T.colorSpace),Ie=T.isVideoTexture!==!0,We=oe.__version===void 0||ie===!0,ne=ee.dataReady,Pe=S(T,$);et(s.TEXTURE_CUBE_MAP,T);let Ve;if(T.isDepthTexture){if(ae=y(T.format===kn,T.type),We)if(Ie)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,ae,$.width,$.height);else for(let ge=0;ge<6;ge++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ae,$.width,$.height,0,ce,re,null)}else if(le){Ie&&We&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,ae,$.width,$.height);for(let ge=0;ge<6;ge++){Ve=Q[ge].mipmaps;for(let rt=0;rt<Ve.length;rt++){let Gt=Ve[rt];T.format!==Ni?ce!==null?Ie?ne&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,rt,0,0,Gt.width,Gt.height,ce,Gt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,rt,ae,Gt.width,Gt.height,0,Gt.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,rt,0,0,Gt.width,Gt.height,ce,re,Gt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,rt,ae,Gt.width,Gt.height,0,ce,re,Gt.data)}}}else{if(Ve=T.mipmaps,Ie&&We){Ve.length>0&&Pe++;let ge=He(Q[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,ae,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(O){Ie?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Q[ge].width,Q[ge].height,ce,re,Q[ge].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ae,Q[ge].width,Q[ge].height,0,ce,re,Q[ge].data);for(let rt=0;rt<Ve.length;rt++){let Wn=Ve[rt].image[ge].image;Ie?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,rt+1,0,0,Wn.width,Wn.height,ce,re,Wn.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,rt+1,ae,Wn.width,Wn.height,0,ce,re,Wn.data)}}else{Ie?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ce,re,Q[ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ae,ce,re,Q[ge]);for(let rt=0;rt<Ve.length;rt++){let Gt=Ve[rt];Ie?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,rt+1,0,0,ce,re,Gt.image[ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,rt+1,ae,ce,re,Gt.image[ge])}}}M(T)&&T.mipmapsAutoUpdate===!0&&v(s.TEXTURE_CUBE_MAP),oe.__version=ee.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function Tt(I,T,V,ie,ee,oe){let de=r.convert(V.format,V.colorSpace),Z=r.convert(V.type),j=E(V.internalFormat,de,Z,V.normalized,V.colorSpace),le=i.get(T),O=i.get(V);if(O.__renderTarget=T,!le.__hasExternalTextures){let Q=Math.max(1,T.width>>oe),$=Math.max(1,T.height>>oe);ee===s.TEXTURE_3D||ee===s.TEXTURE_2D_ARRAY?t.texImage3D(ee,oe,j,Q,$,T.depth,0,de,Z,null):t.texImage2D(ee,oe,j,Q,$,0,de,Z,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),pe(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ie,ee,O.__webglTexture,0,yt(T)):(ee===s.TEXTURE_2D||ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ie,ee,O.__webglTexture,oe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Qi(I,T,V){if(s.bindRenderbuffer(s.RENDERBUFFER,I),T.depthBuffer){let ie=T.depthTexture,ee=ie&&ie.isDepthTexture?ie.type:null,oe=y(T.stencilBuffer,ee),de=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;pe(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,yt(T),oe,T.width,T.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,yt(T),oe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,oe,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,I)}else{let ie=T.textures;for(let ee=0;ee<ie.length;ee++){let oe=ie[ee],de=r.convert(oe.format,oe.colorSpace),Z=r.convert(oe.type),j=E(oe.internalFormat,de,Z,oe.normalized,oe.colorSpace);pe(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,yt(T),j,T.width,T.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,yt(T),j,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,j,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ht(I,T,V){let ie=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ee=i.get(T.depthTexture);ee.__renderTarget=T;let oe=ie?T.depthTexture.image[0]:T.depthTexture.image;(!ee.__webglTexture||oe.width!==T.width||oe.height!==T.height)&&(oe.width=T.width,oe.height=T.height,T.depthTexture.needsUpdate=!0),ie?ue(T.depthTexture,0):se(T.depthTexture,0);let de=ee.__webglTexture,Z=yt(T),j=ie?s.TEXTURE_CUBE_MAP_POSITIVE_X+V:s.TEXTURE_2D,le=T.depthTexture.format===kn?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===wn)pe(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,le,j,de,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,le,j,de,0);else if(T.depthTexture.format===kn)pe(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,le,j,de,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,le,j,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ti(I){let T=i.get(I),V=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){let ie=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ie){let ee=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ie.removeEventListener("dispose",ee)};ie.addEventListener("dispose",ee),T.__depthDisposeCallback=ee}T.__boundDepthTexture=ie}if(I.depthTexture&&!T.__autoAllocateDepthBuffer)if(V)for(let ie=0;ie<6;ie++)Ht(T.__webglFramebuffer[ie],I,ie);else I.texture.mipmaps.length>0?Ht(T.__webglFramebuffer[0],I,0):Ht(T.__webglFramebuffer,I,0);else if(V){T.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[ie]),T.__webglDepthbuffer[ie]===void 0)T.__webglDepthbuffer[ie]=s.createRenderbuffer(),Qi(T.__webglDepthbuffer[ie],I,!1);else{let ee=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=T.__webglDepthbuffer[ie];s.bindRenderbuffer(s.RENDERBUFFER,oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ee,s.RENDERBUFFER,oe)}}else if(I.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Qi(T.__webglDepthbuffer,I,!1);else{let ee=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ee,s.RENDERBUFFER,oe)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ei(I,T,V){let ie=i.get(I);T!==void 0&&Tt(ie.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&Ti(I)}function wi(I){let T=I.texture,V=i.get(I),ie=i.get(T);I.addEventListener("dispose",D),C(I);let ee=I.textures,oe=I.isWebGLCubeRenderTarget===!0,de=ee.length>1;if(de||(ie.__webglTexture===void 0&&(ie.__webglTexture=s.createTexture()),ie.__version=T.version,o.memory.textures++),oe){V.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(T.mipmaps.length>0){V.__webglFramebuffer[Z]=[];for(let j=0;j<T.mipmaps.length;j++)V.__webglFramebuffer[Z][j]=s.createFramebuffer()}else V.__webglFramebuffer[Z]=s.createFramebuffer()}else{if(T.mipmaps.length>0){V.__webglFramebuffer=[];for(let Z=0;Z<T.mipmaps.length;Z++)V.__webglFramebuffer[Z]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(de)for(let Z=0,j=ee.length;Z<j;Z++){let le=i.get(ee[Z]);le.__webglTexture===void 0&&(le.__webglTexture=s.createTexture(),o.memory.textures++)}if(I.samples>0&&pe(I)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Z=0;Z<ee.length;Z++){let j=ee[Z];V.__webglColorRenderbuffer[Z]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[Z]);let le=r.convert(j.format,j.colorSpace),O=r.convert(j.type),Q=E(j.internalFormat,le,O,j.normalized,j.colorSpace,I.isXRRenderTarget===!0),$=yt(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,$,Q,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Z,s.RENDERBUFFER,V.__webglColorRenderbuffer[Z])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),Qi(V.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(oe){t.bindTexture(s.TEXTURE_CUBE_MAP,ie.__webglTexture),et(s.TEXTURE_CUBE_MAP,T);for(let Z=0;Z<6;Z++)if(T.mipmaps.length>0)for(let j=0;j<T.mipmaps.length;j++)Tt(V.__webglFramebuffer[Z][j],I,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,j);else Tt(V.__webglFramebuffer[Z],I,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);M(T)?v(s.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(de){for(let Z=0,j=ee.length;Z<j;Z++){let le=ee[Z],O=i.get(le),Q=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Q=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Q,O.__webglTexture),et(Q,le),Tt(V.__webglFramebuffer,I,le,s.COLOR_ATTACHMENT0+Z,Q,0),M(le)&&v(Q)}t.unbindTexture()}else{let Z=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Z=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Z,ie.__webglTexture),et(Z,T),T.mipmaps.length>0)for(let j=0;j<T.mipmaps.length;j++)Tt(V.__webglFramebuffer[j],I,T,s.COLOR_ATTACHMENT0,Z,j);else Tt(V.__webglFramebuffer,I,T,s.COLOR_ATTACHMENT0,Z,0);M(T)?v(Z):T.mipmaps.length>0&&s.texParameteri(Z,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}I.depthBuffer&&Ti(I)}function z(I){let T=I.textures;for(let V=0,ie=T.length;V<ie;V++){let ee=T[V];if(M(ee)&&ee.mipmapsAutoUpdate===!0){let oe=b(I),de=i.get(ee).__webglTexture;t.bindTexture(oe,de),v(oe),t.unbindTexture()}}}let Ai=[];function _t(I){if(I.samples>0){if(pe(I)===!1){let T=I.textures,V=I.width,ie=I.height,ee=s.COLOR_BUFFER_BIT,oe=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=i.get(I),Z=T.length>1;if(Z)for(let le=0;le<T.length;le++)t.bindFramebuffer(s.FRAMEBUFFER,de.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,de.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let le=0;le<T.length;le++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ee|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ee|=s.STENCIL_BUFFER_BIT)),Z){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,de.__webglColorRenderbuffer[le]);let O=i.get(T[le]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,O,0)}s.blitFramebuffer(0,0,V,ie,0,0,V,ie,ee,s.NEAREST),l===!0&&(Ai.length=0,Ai.push(s.COLOR_ATTACHMENT0+le),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&Ai.push(oe),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ai))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Z)for(let le=0;le<T.length;le++){t.bindFramebuffer(s.FRAMEBUFFER,de.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,de.__webglColorRenderbuffer[le]);let O=i.get(T[le]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,de.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.TEXTURE_2D,O,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let T=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function yt(I){return Math.min(n.maxSamples,I.samples)}function pe(I){let T=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ut(I){let T=o.render.frame;h.get(I)!==T&&(h.set(I,T),I.update())}function De(I,T){let V=I.colorSpace,ie=I.format,ee=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||V!==ai&&V!==Bn&&(Ye.getTransfer(V)===st?(ie!==Ni||ee!==pi)&&Re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Fe("WebGLTextures: Unsupported texture color space:",V)),T}function He(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=Ee,this.resetTextureUnits=q,this.getTextureUnits=te,this.setTextureUnits=me,this.setTexture2D=se,this.setTexture2DArray=_e,this.setTexture3D=we,this.setTextureCube=ue,this.rebindTextures=Ei,this.setupRenderTarget=wi,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=Ti,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=pe,this.dispose=F}function Zy(s,e){function t(i,n=Bn){let r,o=Ye.getTransfer(n);if(i===pi)return s.UNSIGNED_BYTE;if(i===ol)return s.UNSIGNED_SHORT_4_4_4_4;if(i===al)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Th)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Eh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===bh)return s.BYTE;if(i===Sh)return s.SHORT;if(i===Rr)return s.UNSIGNED_SHORT;if(i===rl)return s.INT;if(i===Ki)return s.UNSIGNED_INT;if(i===vi)return s.FLOAT;if(i===$i)return s.HALF_FLOAT;if(i===wh)return s.ALPHA;if(i===Ah)return s.RGB;if(i===Ni)return s.RGBA;if(i===wn)return s.DEPTH_COMPONENT;if(i===kn)return s.DEPTH_STENCIL;if(i===ll)return s.RED;if(i===cl)return s.RED_INTEGER;if(i===ss)return s.RG;if(i===hl)return s.RG_INTEGER;if(i===ul)return s.RGBA_INTEGER;if(i===Io||i===Po||i===Lo||i===No)if(o===st)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Io)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===No)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Io)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Po)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Lo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===No)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===dl||i===fl||i===pl||i===ml)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===dl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ml)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gl||i===xl||i===_l||i===yl||i===vl||i===Do||i===Ml)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===gl||i===xl)return o===st?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===_l)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===yl)return r.COMPRESSED_R11_EAC;if(i===vl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Do)return r.COMPRESSED_RG11_EAC;if(i===Ml)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===bl||i===Sl||i===Tl||i===El||i===wl||i===Al||i===Rl||i===Cl||i===Il||i===Pl||i===Ll||i===Nl||i===Dl||i===Ol)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===bl)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Sl)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Tl)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===El)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wl)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Al)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Rl)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Cl)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Il)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Pl)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ll)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Nl)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Dl)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ol)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ul||i===Fl||i===zl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ul)return o===st?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===kl||i===Bl||i===Oo||i===Hl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===kl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Bl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Oo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Hl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ds?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}var Jy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Zh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new xo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new rn({vertexShader:Jy,fragmentShader:jy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ke(new Xi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Jh=class extends Vi{constructor(e,t){super();let i=this,n=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,x=typeof XRWebGLBinding<"u",m=new Zh,g={},_=t.getContextAttributes(),M=null,v=null,b=[],E=[],y=new Ne,S=null,C=null,R=new It;R.viewport=new ot;let N=new It;N.viewport=new ot;let D=[R,N],k=new ja,L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let se=b[K];return se===void 0&&(se=new fr,b[K]=se),se.getTargetRaySpace()},this.getControllerGrip=function(K){let se=b[K];return se===void 0&&(se=new fr,b[K]=se),se.getGripSpace()},this.getHand=function(K){let se=b[K];return se===void 0&&(se=new fr,b[K]=se),se.getHandSpace()};function H(K){let se=E.indexOf(K.inputSource);if(se===-1)return;let _e=b[se];_e!==void 0&&(_e.update(K.inputSource,K.frame,c||o),_e.dispatchEvent({type:K.type,data:K.inputSource}))}function B(){n.removeEventListener("select",H),n.removeEventListener("selectstart",H),n.removeEventListener("selectend",H),n.removeEventListener("squeeze",H),n.removeEventListener("squeezestart",H),n.removeEventListener("squeezeend",H),n.removeEventListener("end",B),n.removeEventListener("inputsourceschange",J);for(let K=0;K<b.length;K++){let se=E[K];se!==null&&(E[K]=null,b[K].disconnect(se))}L=null,F=null,m.reset();for(let K in g)delete g[K];if(e.setRenderTarget(M),f=null,u=null,d=null,n=null,v=null,Ee.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(y.width,y.height,!1),C!==null){let K=C.camera;K.fov=C.fov,K.zoom=C.zoom,K.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&Re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&Re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(n,t)),d},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function(K){if(n=K,n!==null){if(M=e.getRenderTarget(),n.addEventListener("select",H),n.addEventListener("selectstart",H),n.addEventListener("selectend",H),n.addEventListener("squeeze",H),n.addEventListener("squeezestart",H),n.addEventListener("squeezeend",H),n.addEventListener("end",B),n.addEventListener("inputsourceschange",J),_.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(y),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,we=null,ue=null;_.depth&&(ue=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=_.stencil?kn:wn,we=_.stencil?Ds:Ki);let ze={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(ze),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new yi(u.textureWidth,u.textureHeight,{format:Ni,type:pi,depthTexture:new Pn(u.textureWidth,u.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let _e={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,t,_e),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new yi(f.framebufferWidth,f.framebufferHeight,{format:Ni,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),Ee.setContext(n),Ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(K){for(let se=0;se<K.removed.length;se++){let _e=K.removed[se],we=E.indexOf(_e);we>=0&&(E[we]=null,b[we].disconnect(_e))}for(let se=0;se<K.added.length;se++){let _e=K.added[se],we=E.indexOf(_e);if(we===-1){for(let ze=0;ze<b.length;ze++)if(ze>=E.length){E.push(_e),we=ze;break}else if(E[ze]===null){E[ze]=_e,we=ze;break}if(we===-1)break}let ue=b[we];ue&&ue.connect(_e)}}function X(K,se){se===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(se.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(n===null)return;let se=K.near,_e=K.far;m.texture!==null&&(m.depthNear>0&&(se=m.depthNear),m.depthFar>0&&(_e=m.depthFar)),k.near=N.near=R.near=se,k.far=N.far=R.far=_e,(L!==k.near||F!==k.far)&&(n.updateRenderState({depthNear:k.near,depthFar:k.far}),L=k.near,F=k.far),k.layers.mask=K.layers.mask|6,R.layers.mask=k.layers.mask&-5,N.layers.mask=k.layers.mask&-3;let we=K.parent,ue=k.cameras;X(k,we);for(let ze=0;ze<ue.length;ze++)X(ue[ze],we);k.projectionMatrix.copy(R.projectionMatrix),k.projectionMatrixInverse.copy(R.projectionMatrixInverse),C===null&&K.isPerspectiveCamera&&(C={camera:K,fov:K.fov,zoom:K.zoom}),q(K,k,we)};function q(K,se,_e){_e===null?K.matrix.copy(se.matrixWorld):(K.matrix.copy(_e.matrixWorld),K.matrix.invert(),K.matrix.multiply(se.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(se.projectionMatrix),K.projectionMatrixInverse.copy(se.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ss*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(K){return g[K]};let te=null;function me(K,se){if(h=se.getViewerPose(c||o),p=se,h!==null){let _e=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let we=!1;_e.length!==k.cameras.length&&(k.cameras.length=0,we=!0);for(let Le=0;Le<_e.length;Le++){let et=_e[Le],ht=null;if(f!==null)ht=f.getViewport(et);else{let Yt=d.getViewSubImage(u,et);ht=Yt.viewport,Le===0&&(e.setRenderTargetTextures(v,Yt.colorTexture,Yt.depthStencilTexture),e.setRenderTarget(v))}let Je=D[Le];Je===void 0&&(Je=new It,Je.layers.enable(Le),Je.viewport=new ot,D[Le]=Je),Je.matrix.fromArray(et.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(et.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(ht.x,ht.y,ht.width,ht.height),Le===0&&(k.matrix.copy(Je.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),we===!0&&k.cameras.push(Je)}let ue=n.enabledFeatures;if(ue&&ue.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let Le=d.getDepthInformation(_e[0]);Le&&Le.isValid&&Le.texture&&m.init(Le,n.renderState)}if(ue&&ue.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let Le=0;Le<_e.length;Le++){let et=_e[Le].camera;if(et){let ht=g[et];ht||(ht=new xo,g[et]=ht);let Je=d.getCameraImage(et);ht.sourceTexture=Je}}}}for(let _e=0;_e<b.length;_e++){let we=E[_e],ue=b[_e];we!==null&&ue!==void 0&&ue.update(we,se,c||o)}te&&te(K,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),p=null}let Ee=new sp;Ee.setAnimationLoop(me),this.setAnimationLoop=function(K){te=K},this.dispose=function(){}}},Qy=new Ue,pp=new Be;pp.set(-1,0,0,0,1,0,0,0,1);function ev(s,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,zh(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function n(m,g,_,M,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&f(m,g,v)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,_,M):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Zt&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Zt&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let _=e.get(g),M=_.envMap,v=_.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(Qy.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(pp),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,_,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*_,m.scale.value=M*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,_){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Zt&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let _=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function tv(s,e,t,i){let n={},r={};function o(_,M){let v=M.program;i.uniformBlockBinding(_,v,n[_.id])}function a(_,M){let v=n[_.id];v===void 0&&(p(_),v=l(_),n[_.id]=v,_.addEventListener("dispose",m));let b=M.program;i.updateUBOMapping(_,b);let E=e.render.frame;r[_.id]!==E&&(c(_),r[_.id]=E)}function l(_){let M=s.createBuffer(),v=_.__size,b=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,v,b),s.bindBuffer(s.UNIFORM_BUFFER,null),M}function c(_){let M=n[_.id],v=_.uniforms,b=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let E=0,y=v.length;E<y;E++){let S=v[E];if(Array.isArray(S))for(let C=0,R=S.length;C<R;C++)h(S[C],E,C,b);else h(S,E,0,b)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(_,M,v,b){if(u(_,M,v,b)===!0){let E=_.__offset,y=_.value;if(Array.isArray(y)){let S=0;for(let C=0;C<y.length;C++){let R=y[C],N=x(R,!0);d(R,_.__data,S),S+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else d(y,_.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,_.__data)}}function d(_,M,v){typeof _=="number"||typeof _=="boolean"?M[v]=_:_.isMatrix3?(M[v]=_.elements[0],M[v+1]=_.elements[1],M[v+2]=_.elements[2],M[v+3]=0,M[v+4]=_.elements[3],M[v+5]=_.elements[4],M[v+6]=_.elements[5],M[v+7]=0,M[v+8]=_.elements[6],M[v+9]=_.elements[7],M[v+10]=_.elements[8],M[v+11]=0):ArrayBuffer.isView(_)?M.set(_.subarray(0,M.length-v),v):_.toArray(M,v)}function u(_,M,v,b){let E=_.value,y=M+"_"+v;if(Array.isArray(E)){b[y]===void 0&&(b[y]=[]);let S=b[y],C=!1;for(let R=0;R<E.length;R++)f(E[R],S,R)===!0&&(C=!0);return C}return f(E,b,y)}function f(_,M,v){if(M[v]===void 0)return typeof _=="number"||typeof _=="boolean"?M[v]=_:ArrayBuffer.isView(_)?M[v]=_.slice():M[v]=_.clone(),!0;{let b=M[v];if(typeof _=="number"||typeof _=="boolean"){if(b!==_)return M[v]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(b.equals(_)===!1)return b.copy(_),!0}}return!1}function p(_){let M=_.uniforms,v=0,b=16;for(let y=0,S=M.length;y<S;y++){let C=Array.isArray(M[y])?M[y]:[M[y]];for(let R=0,N=C.length;R<N;R++){let D=C[R],k=Array.isArray(D.value)?D.value:[D.value],L=Array.isArray(M[y])||Array.isArray(D.value),F=v;for(let B=0,J=k.length;B<J;B++){let X=k[B],q=x(X,L),te=v%b,me=te%q.boundary,Ee=te+me;v+=me,Ee!==0&&b-Ee<q.storage&&(v+=b-Ee),B===0&&(F=v),v+=q.storage}let H=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new H((v-F)/Float32Array.BYTES_PER_ELEMENT),D.__offset=F}}let E=v%b;return E>0&&(v+=b-E),_.__size=v,_.__cache={},this}function x(_,M){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=16,v.storage=48):_.isMatrix4?(v.boundary=16,v.storage=64):_.isTexture?Re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(v.boundary=16,v.storage=_.byteLength):Re("WebGLRenderer: Unsupported uniform value type.",_),M===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(_){let M=_.target;M.removeEventListener("dispose",m),s.deleteBuffer(n[M.id]),delete n[M.id],delete r[M.id]}function g(){for(let _ in n)s.deleteBuffer(n[_]);n={},r={}}return{bind:o,update:a,dispose:g}}var iv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),hn=null;function nv(){return hn===null&&(hn=new gr(iv,16,16,ss,$i),hn.name="DFG_LUT",hn.minFilter=Ft,hn.magFilter=Ft,hn.wrapS=Ci,hn.wrapT=Ci,hn.generateMipmaps=!1,hn.needsUpdate=!0),hn}var Yl=class{constructor(e={}){let{canvas:t=Rf(),context:i=null,depth:n=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=pi}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let x=f,m=new Set([ul,hl,cl]),g=new Set([pi,Ki,Rr,Ds,ol,al]),_=new Uint32Array(4),M=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},b=null,E=null,y=[],S=[],C=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,N=!1,D=null,k=null,L=null,F=null;this._outputColorSpace=Ct;let H=0,B=0,J=null,X=-1,q=null,te=new ot,me=new ot,Ee=null,K=new be(0),se=0,_e=t.width,we=t.height,ue=1,ze=null,St=null,Le=new ot(0,0,_e,we),et=new ot(0,0,_e,we),ht=!1,Je=new Qn,Yt=new Ba,Ot=!1,hi=!1,Tt=new Ue,Qi=new P,Ht=new ot,Ti={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ei=!1;function wi(){return J===null?ue:1}let z=i;function Ai(w,U){return t.getContext(w,U)}let _t,yt,pe,Ut,De,He,I,T,V,ie,ee,oe,de,Z,j,le,O,Q,$,ce,re,ae,Ie;try{let w={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",Ve,!1),t.addEventListener("webglcontextcreationerror",ge,!1),z===null){let U="webgl2";if(z=Ai(U,w),z===null)throw Ai(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}We()}catch(w){throw t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",Ve,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),Fe("WebGLRenderer: "+w.message),w}function We(){_t=new p_(z),_t.init(),re=new Zy(z,_t),yt=new n_(z,_t,e,re),pe=new Ky(z,_t),yt.reversedDepthBuffer&&u&&pe.buffers.depth.setReversed(!0),k=z.createFramebuffer(),L=z.createFramebuffer(),F=z.createFramebuffer(),Ut=new x_(z),De=new Dy,He=new $y(z,_t,pe,De,yt,re,Ut),I=new f_(R),T=new y0(z),ae=new t_(z,T),V=new m_(z,T,Ut,ae),ie=new y_(z,V,T,ae,Ut),Q=new __(z,yt,He),j=new s_(De),ee=new Ny(R,I,_t,yt,ae,j),oe=new ev(R,De),de=new Uy,Z=new Gy(_t),O=new e_(R,I,pe,ie,p,l),le=new Yy(R,ie,yt),Ie=new tv(z,Ut,yt,pe),$=new i_(z,_t,Ut),ce=new g_(z,_t,Ut),Ut.programs=ee.programs,R.capabilities=yt,R.extensions=_t,R.properties=De,R.renderLists=de,R.shadowMap=le,R.state=pe,R.info=Ut}x!==pi&&(C=new M_(x,t.width,t.height,a,n,r));let ne=new Jh(R,z);this.xr=ne,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let w=_t.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=_t.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(w){w!==void 0&&(ue=w,this.setSize(_e,we,!1))},this.getSize=function(w){return w.set(_e,we)},this.setSize=function(w,U,Y=!0){if(ne.isPresenting){Re("WebGLRenderer: Can't change size while VR device is presenting.");return}_e=w,we=U,t.width=Math.floor(w*ue),t.height=Math.floor(U*ue),Y===!0&&(t.style.width=w+"px",t.style.height=U+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(_e*ue,we*ue).floor()},this.setDrawingBufferSize=function(w,U,Y){_e=w,we=U,ue=Y,t.width=Math.floor(w*Y),t.height=Math.floor(U*Y),this.setViewport(0,0,w,U)},this.setEffects=function(w){if(x===pi){Fe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let U=0;U<w.length;U++)if(w[U].isOutputPass===!0){Re("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(te)},this.getViewport=function(w){return w.copy(Le)},this.setViewport=function(w,U,Y,G){w.isVector4?Le.set(w.x,w.y,w.z,w.w):Le.set(w,U,Y,G),pe.viewport(te.copy(Le).multiplyScalar(wi()).round())},this.getScissor=function(w){return w.copy(et)},this.setScissor=function(w,U,Y,G){w.isVector4?et.set(w.x,w.y,w.z,w.w):et.set(w,U,Y,G),pe.scissor(me.copy(et).multiplyScalar(wi()).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(w){pe.setScissorTest(ht=w)},this.setOpaqueSort=function(w){ze=w},this.setTransparentSort=function(w){St=w},this.getClearColor=function(w){return w.copy(O.getClearColor())},this.setClearColor=function(){O.setClearColor(...arguments)},this.getClearAlpha=function(){return O.getClearAlpha()},this.setClearAlpha=function(){O.setClearAlpha(...arguments)},this.clear=function(w=!0,U=!0,Y=!0){let G=0;if(w){let W=!1;if(J!==null){let fe=J.texture.format;W=m.has(fe)}if(W){let fe=J.texture.type,Me=g.has(fe),he=O.getClearColor(),ye=O.getClearAlpha(),Ae=he.r,Ge=he.g,je=he.b;Me?(_[0]=Ae,_[1]=Ge,_[2]=je,_[3]=ye,z.clearBufferuiv(z.COLOR,0,_)):(M[0]=Ae,M[1]=Ge,M[2]=je,M[3]=ye,z.clearBufferiv(z.COLOR,0,M))}else G|=z.COLOR_BUFFER_BIT}U&&(G|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(G|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&z.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),D=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",Ve,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),O.dispose(),de.dispose(),Z.dispose(),He.dispose(),De.dispose(),I.dispose(),ie.dispose(),V.dispose(),ae.dispose(),Ie.dispose(),ee.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",$u),ne.removeEventListener("sessionend",Zu),us.stop()};function Pe(w){w.preventDefault(),no("WebGLRenderer: Context Lost."),N=!0}function Ve(){no("WebGLRenderer: Context Restored."),N=!1;let w=Ut.autoReset,U=le.enabled,Y=le.autoUpdate,G=le.needsUpdate,W=le.type;We(),Ut.autoReset=w,le.enabled=U,le.autoUpdate=Y,le.needsUpdate=G,le.type=W}function ge(w){Fe("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function rt(w){let U=w.target;U.removeEventListener("dispose",rt),Gt(U)}function Gt(w){Wn(w),De.remove(w)}function Wn(w){let U=De.get(w).programs;U!==void 0&&(U.forEach(function(Y){ee.releaseProgram(Y)}),w.isShaderMaterial&&ee.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,Y,G,W,fe){U===null&&(U=Ti);let Me=W.isMesh&&W.matrixWorld.determinantAffine()<0,he=dm(w,U,Y,G,W);pe.setMaterial(G,Me);let ye=Y.index,Ae=1;if(G.wireframe===!0){if(ye=V.getWireframeAttribute(Y),ye===void 0)return;Ae=2}let Ge=Y.drawRange,je=Y.attributes.position,Se=Ge.start*Ae,Qe=(Ge.start+Ge.count)*Ae;fe!==null&&(Se=Math.max(Se,fe.start*Ae),Qe=Math.min(Qe,(fe.start+fe.count)*Ae)),ye!==null?(Se=Math.max(Se,0),Qe=Math.min(Qe,ye.count)):je!=null&&(Se=Math.max(Se,0),Qe=Math.min(Qe,je.count));let Lt=Qe-Se;if(Lt<0||Lt===1/0)return;ae.setup(W,G,he,Y,ye);let ft,ut=$;if(ye!==null&&(ft=T.get(ye),ut=ce,ut.setIndex(ft)),W.isMesh)G.wireframe===!0?(pe.setLineWidth(G.wireframeLinewidth*wi()),ut.setMode(z.LINES)):ut.setMode(z.TRIANGLES);else if(W.isLine){let jt=G.linewidth;jt===void 0&&(jt=1),pe.setLineWidth(jt*wi()),W.isLineSegments?ut.setMode(z.LINES):W.isLineLoop?ut.setMode(z.LINE_LOOP):ut.setMode(z.LINE_STRIP)}else W.isPoints?ut.setMode(z.POINTS):W.isSprite&&ut.setMode(z.TRIANGLES);if(W.isBatchedMesh)if(_t.get("WEBGL_multi_draw"))ut.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let jt=W._multiDrawStarts,Te=W._multiDrawCounts,ri=W._multiDrawCount,it=ye?T.get(ye).bytesPerElement:1,ds=De.get(G).currentProgram.getUniforms();for(let Qt=0;Qt<ri;Qt++)ds.setValue(z,"_gl_DrawID",Qt),ut.render(jt[Qt]/it,Te[Qt])}else if(W.isInstancedMesh)ut.renderInstances(Se,Lt,W.count);else if(Y.isInstancedBufferGeometry){let jt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Te=Math.min(Y.instanceCount,jt);ut.renderInstances(Se,Lt,Te)}else ut.render(Se,Lt)};function Ku(w,U,Y,G){D!==null&&w.isNodeMaterial&&D.setObject(G,w),Ot===!0&&j.setState(w,Y,!1),w.transparent===!0&&w.side===Xt&&w.forceSinglePass===!1?(w.side=Zt,w.needsUpdate=!0,Br(w,U,G),w.side=Pi,w.needsUpdate=!0,Br(w,U,G),w.side=Xt):Br(w,U,G)}this.compile=function(w,U,Y=null){Y===null&&(Y=w),D!==null&&D.renderStart(w,U,Y),E=Z.get(Y),E.init(U),S.push(E),Y.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),w!==Y&&w.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),E.setupLights(),D!==null&&D.updateLights(E.state.lightsArray),hi=this.localClippingEnabled,Ot=j.init(this.clippingPlanes,hi),Ot===!0&&j.setGlobalState(this.clippingPlanes,U),D!==null&&le.render(E.state.shadowsArray,Y,U);let G=new Set;return w.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let fe=W.material;if(fe)if(Array.isArray(fe))for(let Me=0;Me<fe.length;Me++){let he=fe[Me];Ku(he,Y,U,W),G.add(he)}else Ku(fe,Y,U,W),G.add(fe)}),E=S.pop(),D!==null&&D.renderEnd(),G},this.compileAsync=function(w,U,Y=null){let G=this.compile(w,U,Y);return new Promise(W=>{function fe(){if(G.forEach(function(Me){let ye=De.get(Me).currentProgram;(ye===void 0||ye.isReady())&&G.delete(Me)}),G.size===0){W(w);return}setTimeout(fe,10)}_t.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Rc=null;function hm(w){Rc&&Rc(w)}function $u(){us.stop()}function Zu(){us.start()}let us=new sp;us.setAnimationLoop(hm),typeof self<"u"&&us.setContext(self),this.setAnimationLoop=function(w){Rc=w,ne.setAnimationLoop(w),w===null?us.stop():us.start()},ne.addEventListener("sessionstart",$u),ne.addEventListener("sessionend",Zu),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){Fe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;D!==null&&D.renderStart(w,U);let Y=ne.enabled===!0&&ne.isPresenting===!0,G=C!==null&&(J===null||Y)&&C.begin(R,J);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(U),U=ne.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,U,J),E=Z.get(w,S.length),E.init(U),E.state.textureUnits=He.getTextureUnits(),S.push(E),Tt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?Yt.setFromArrayCamera(U):Je.setFromProjectionMatrix(Tt,Ii,U.reversedDepth),hi=this.localClippingEnabled,Ot=j.init(this.clippingPlanes,hi),b=de.get(w,y.length),b.init(),y.push(b),this.info.render.frame++,ne.enabled===!0&&ne.isPresenting===!0){let Me=R.xr.getDepthSensingMesh();Me!==null&&Cc(Me,U,-1/0,R.sortObjects)}Cc(w,U,0,R.sortObjects),b.finish(),D!==null&&D.updateLights(E.state.lightsArray),R.sortObjects===!0&&b.sort(ze,St),Ei=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,Ei&&O.addToRenderList(b,w),this.info.autoReset===!0&&this.info.reset(),Ot===!0&&j.beginShadows();let W=E.state.shadowsArray;if(le.render(W,w,U),Ot===!0&&j.endShadows(),(G&&C.hasRenderPass())===!1){let Me=b.opaque,he=b.transmissive;if(E.setupLights(),U.isArrayCamera){let ye=U.cameras;if(he.length>0)for(let Ae=0,Ge=ye.length;Ae<Ge;Ae++){let je=ye[Ae];ju(Me,he,w,je)}Ei&&O.render(w);for(let Ae=0,Ge=ye.length;Ae<Ge;Ae++){let je=ye[Ae];Ju(b,w,je,je.viewport)}}else he.length>0&&ju(Me,he,w,U),Ei&&O.render(w),Ju(b,w,U)}J!==null&&B===0&&(He.updateMultisampleRenderTarget(J),He.updateRenderTargetMipmap(J)),G&&C.end(R),w.isScene===!0&&w.onAfterRender(R,w,U),ae.resetDefaultState(),X=-1,q=null,S.pop(),S.length>0?(E=S[S.length-1],He.setTextureUnits(E.state.textureUnits),Ot===!0&&j.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,y.pop(),y.length>0?b=y[y.length-1]:b=null,D!==null&&D.renderEnd()};function Cc(w,U,Y,G){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){let Me=U.isArrayCamera?Yt:Je;if(!w.frustumCulled||w.intersectsFrustum(Me)){G&&Ht.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Tt);let he=ie.update(w),ye=w.material;ye.visible&&b.push(w,he,ye,Y,Ht.z,null,U)}}else if(w.isMesh||w.isLine||w.isPoints){let Me=U.isArrayCamera?Yt:Je;if(!w.frustumCulled||w.intersectsFrustum(Me)){let he=ie.update(w),ye=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ht.copy(w.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Ht.copy(he.boundingSphere.center)),Ht.applyMatrix4(w.matrixWorld).applyMatrix4(Tt)),Array.isArray(ye)){let Ae=he.groups;for(let Ge=0,je=Ae.length;Ge<je;Ge++){let Se=Ae[Ge],Qe=ye[Se.materialIndex];Qe&&Qe.visible&&b.push(w,he,Qe,Y,Ht.z,Se,U)}}else ye.visible&&b.push(w,he,ye,Y,Ht.z,null,U)}}}let fe=w.children;for(let Me=0,he=fe.length;Me<he;Me++)Cc(fe[Me],U,Y,G)}function Ju(w,U,Y,G){let{opaque:W,transmissive:fe,transparent:Me}=w;E.setupLightsView(Y),Ot===!0&&j.setGlobalState(R.clippingPlanes,Y),G&&pe.viewport(te.copy(G)),W.length>0&&jo(W,U,Y),fe.length>0&&jo(fe,U,Y),Me.length>0&&jo(Me,U,Y),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function ju(w,U,Y,G){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[G.id]===void 0){let Se=_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[G.id]=new yi(1,1,{generateMipmaps:!0,type:Se?$i:pi,minFilter:Li,samples:Math.max(4,yt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}let fe=E.state.transmissionRenderTarget[G.id],Me=G.viewport||te;fe.setSize(Me.z*R.transmissionResolutionScale,Me.w*R.transmissionResolutionScale);let he=R.getRenderTarget(),ye=R.getActiveCubeFace(),Ae=R.getActiveMipmapLevel();R.setRenderTarget(fe),R.getClearColor(K),se=R.getClearAlpha(),se<1&&R.setClearColor(16777215,.5),R.clear(),Ei&&O.render(Y);let Ge=R.toneMapping;R.toneMapping=ln;let je=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),E.setupLightsView(G),Ot===!0&&j.setGlobalState(R.clippingPlanes,G),jo(w,Y,G),He.updateMultisampleRenderTarget(fe),He.updateRenderTargetMipmap(fe),_t.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let Qe=0,Lt=U.length;Qe<Lt;Qe++){let ft=U[Qe],{object:ut,geometry:jt,material:Te,group:ri}=ft;if(Te.side===Xt&&ut.layers.test(G.layers)){let it=Te.side;Te.side=Zt,Te.needsUpdate=!0,Qu(ut,Y,G,jt,Te,ri),Te.side=it,Te.needsUpdate=!0,Se=!0}}Se===!0&&(He.updateMultisampleRenderTarget(fe),He.updateRenderTargetMipmap(fe))}R.setRenderTarget(he,ye,Ae),R.setClearColor(K,se),je!==void 0&&(G.viewport=je),R.toneMapping=Ge}function jo(w,U,Y){let G=U.isScene===!0?U.overrideMaterial:null;for(let W=0,fe=w.length;W<fe;W++){let Me=w[W],{object:he,geometry:ye,group:Ae}=Me,Ge=Me.material;Ge.allowOverride===!0&&G!==null&&(Ge=G),he.layers.test(Y.layers)&&Qu(he,U,Y,ye,Ge,Ae)}}function Qu(w,U,Y,G,W,fe){D!==null&&W.isNodeMaterial&&D.setObject(w,W),w.onBeforeRender(R,U,Y,G,W,fe),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),W.onBeforeRender(R,U,Y,G,w,fe),W.transparent===!0&&W.side===Xt&&W.forceSinglePass===!1?(W.side=Zt,W.needsUpdate=!0,R.renderBufferDirect(Y,U,G,W,w,fe),W.side=Pi,W.needsUpdate=!0,R.renderBufferDirect(Y,U,G,W,w,fe),W.side=Xt):R.renderBufferDirect(Y,U,G,W,w,fe),w.onAfterRender(R,U,Y,G,W,fe)}function ed(w){let U=0;for(let Y of w)Y.texture!==null&&U++;return U}function Br(w,U,Y){U.isScene!==!0&&(U=Ti);let G=De.get(w),W=E.state.lights,fe=E.state.shadowsArray,Me=W.state.version,he=ee.getParameters(w,W.state,fe,U,Y,E.state.lightProbeGridArray),ye=ee.getProgramCacheKey(he),Ae=G.programs;G.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;let Ge=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;G.envMap=I.get(w.envMap||G.environment,Ge),G.envMapRotation=G.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Ae===void 0&&(w.addEventListener("dispose",rt),Ae=new Map,G.programs=Ae,G.programVariants=new Map);let je=Ae.get(ye);if(je!==void 0){if(G.currentProgram===je&&G.lightsStateVersion===Me)return id(w,he),je}else he.uniforms=ee.getUniforms(w),D!==null&&w.isNodeMaterial&&D.build(w,Y,he),w.onBeforeCompile(he,R),je=ee.acquireProgram(he,ye),Ae.set(ye,je),G.uniforms=he.uniforms;let Se=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Se.clippingPlanes=j.uniform),id(w,he),G.needsLights=pm(w),G.lightsStateVersion=Me,G.needsLights&&(Se.ambientLightColor.value=W.state.ambient,Se.lightProbe.value=W.state.probe,Se.sunLights.value=W.state.sun,Se.sunLightShadows.value=W.state.sunShadow,Se.directionalLights.value=W.state.directional,Se.directionalLightShadows.value=W.state.directionalShadow,Se.spotLights.value=W.state.spot,Se.spotLightShadows.value=W.state.spotShadow,Se.rectAreaLights.value=W.state.rectArea,Se.ltc_1.value=W.state.rectAreaLTC1,Se.ltc_2.value=W.state.rectAreaLTC2,Se.pointLights.value=W.state.point,Se.pointLightShadows.value=W.state.pointShadow,Se.hemisphereLights.value=W.state.hemi,Se.sunShadowMatrix.value=W.state.sunShadowMatrix,Se.sunShadowCascade.value=W.state.sunShadowCascade,Se.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Se.spotLightMatrix.value=W.state.spotLightMatrix,Se.spotLightMap.value=W.state.spotLightMap,Se.pointShadowMatrix.value=W.state.pointShadowMatrix),G.numLightProbeGrids=ed(E.state.lightProbeGridArray),G.currentProgram=je,G.uniformsList=null,je}function um(w,U,Y,G,W){let fe=De.get(w),Me=fe.currentProgram.id+","+G+","+W,he=fe.programVariants.get(Me);return he===void 0?(he=Br(w,U,Y),fe.programVariants.set(Me,he)):(fe.currentProgram=he,fe.uniformsList=null,fe.outputColorSpace=G,fe.toneMapping=W),he}function td(w){if(w.uniformsList===null){let U=w.currentProgram.getUniforms();w.uniformsList=Ir.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function id(w,U){let Y=De.get(w);Y.outputColorSpace=U.outputColorSpace,Y.batching=U.batching,Y.batchingColor=U.batchingColor,Y.instancing=U.instancing,Y.instancingColor=U.instancingColor,Y.instancingMorph=U.instancingMorph,Y.skinning=U.skinning,Y.morphTargets=U.morphTargets,Y.morphNormals=U.morphNormals,Y.morphColors=U.morphColors,Y.morphTargetsCount=U.morphTargetsCount,Y.numClippingPlanes=U.numClippingPlanes,Y.numIntersection=U.numClipIntersection,Y.vertexAlphas=U.vertexAlphas,Y.vertexTangents=U.vertexTangents,Y.toneMapping=U.toneMapping}function dm(w,U,Y,G,W){U.isScene!==!0&&(U=Ti),He.resetTextureUnits();let fe=U.fog,Me=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,he=J===null?R.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Ye.workingColorSpace,ye=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ae=I.get(G.envMap||Me,ye),Ge=G.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,je=!!Y.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Se=!!Y.morphAttributes.position,Qe=!!Y.morphAttributes.normal,Lt=!!Y.morphAttributes.color,ft=ln;G.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(ft=R.toneMapping);let ut=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,jt=ut!==void 0?ut.length:0,Te=De.get(G),ri=E.state.lights;if(Ot===!0&&(hi===!0||w!==q)){let Et=w===q&&G.id===X;j.setState(G,w,Et)}let it=!1,ds=!1;G.version===Te.__version?Te.needsLights&&Te.lightsStateVersion!==ri.state.version||W.isBatchedMesh&&Te.batching===!1||!W.isBatchedMesh&&Te.batching===!0||W.isBatchedMesh&&Te.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Te.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Te.instancing===!1||!W.isInstancedMesh&&Te.instancing===!0||W.isSkinnedMesh&&Te.skinning===!1||!W.isSkinnedMesh&&Te.skinning===!0||W.isInstancedMesh&&Te.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Te.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Te.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Te.instancingMorph===!1&&W.morphTexture!==null||Te.envMap!==Ae||G.fog===!0&&Te.fog!==fe||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==j.numPlanes||Te.numIntersection!==j.numIntersection)||Te.vertexAlphas!==Ge||Te.vertexTangents!==je||Te.morphTargets!==Se||Te.morphNormals!==Qe||Te.morphColors!==Lt||Te.morphTargetsCount!==jt||Te.numLightProbeGrids!==ed(E.state.lightProbeGridArray)?it=!0:(Te.outputColorSpace!==he||Te.toneMapping!==ft)&&(ds=!0):(it=!0,Te.__version=G.version);let Qt=Te.currentProgram;(it===!0||ds===!0)&&(Qt=ds===!0?um(G,U,W,he,ft):Br(G,U,W),D&&G.isNodeMaterial&&D.onUpdateProgram(G,Qt,Te));let Qo=!1,Xn=!1,fs=!1,tt=Qt.getUniforms(),Kt=Te.uniforms;if(pe.useProgram(Qt.program)&&(Qo=!0,Xn=!0,fs=!0),G.id!==X&&(X=G.id,Xn=!0),Qo||q!==w){pe.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),tt.setValue(z,"projectionMatrix",w.projectionMatrix),tt.setValue(z,"viewMatrix",w.matrixWorldInverse);let Vt=tt.map.cameraPosition;Vt!==void 0&&Vt.setValue(z,Qi.setFromMatrixPosition(w.matrixWorld)),yt.logarithmicDepthBuffer&&tt.setValue(z,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&tt.setValue(z,"isOrthographic",w.isOrthographicCamera===!0),q!==w&&(q=w,Xn=!0,fs=!0)}if(Te.needsLights&&(ri.state.sunShadowMap.length>0&&tt.setValue(z,"sunShadowMap",ri.state.sunShadowMap,He),ri.state.directionalShadowMap.length>0&&tt.setValue(z,"directionalShadowMap",ri.state.directionalShadowMap,He),ri.state.spotShadowMap.length>0&&tt.setValue(z,"spotShadowMap",ri.state.spotShadowMap,He),ri.state.pointShadowMap.length>0&&tt.setValue(z,"pointShadowMap",ri.state.pointShadowMap,He)),W.isSkinnedMesh){tt.setOptional(z,W,"bindMatrix"),tt.setOptional(z,W,"bindMatrixInverse");let Et=W.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),tt.setValue(z,"boneTexture",Et.boneTexture,He))}W.isBatchedMesh&&(tt.setOptional(z,W,"batchingTexture"),tt.setValue(z,"batchingTexture",W._matricesTexture,He),tt.setOptional(z,W,"batchingIdTexture"),tt.setValue(z,"batchingIdTexture",W._indirectTexture,He),tt.setOptional(z,W,"batchingColorTexture"),W._colorsTexture!==null&&tt.setValue(z,"batchingColorTexture",W._colorsTexture,He));let zi=Y.morphAttributes;if((zi.position!==void 0||zi.normal!==void 0||zi.color!==void 0)&&Q.update(W,Y,Qt),(Xn||Te.receiveShadow!==W.receiveShadow)&&(Te.receiveShadow=W.receiveShadow,tt.setValue(z,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(Kt.envMapIntensity.value=U.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=nv()),Xn){if(tt.setValue(z,"toneMappingExposure",R.toneMappingExposure),Te.needsLights&&fm(Kt,fs),fe&&G.fog===!0&&oe.refreshFogUniforms(Kt,fe),oe.refreshMaterialUniforms(Kt,G,ue,we,E.state.transmissionRenderTarget[w.id]),Te.needsLights&&Te.numLightProbeGrids>0){let Et=v,Vt=0;for(let xn of E.state.lightProbeGridArray)xn.texture!==null&&(Et.textures[Vt]=xn.texture,Et.min[Vt]=xn.boundingBox.min,Et.max[Vt]=xn.boundingBox.max,Et.resolution[Vt]=xn.resolution,Vt++);for(let xn in Et)Et[xn].length=Vt;Kt.probesSH.value=Et.textures,Kt.probesMin.value=Et.min,Kt.probesMax.value=Et.max,Kt.probesResolution.value=Et.resolution}Ir.upload(z,td(Te),Kt,He)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ir.upload(z,td(Te),Kt,He),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&tt.setValue(z,"center",W.center),tt.setValue(z,"modelViewMatrix",W.modelViewMatrix),tt.setValue(z,"normalMatrix",W.normalMatrix),tt.setValue(z,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){let Et=G.uniformsGroups;for(let Vt=0,xn=Et.length;Vt<xn;Vt++){let sd=Et[Vt];Ie.update(sd,Qt),Ie.bind(sd,Qt)}}return Qt}function fm(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.sunLights.needsUpdate=U,w.sunLightShadows.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function pm(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(w,U,Y){let G=De.get(w);G.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),De.get(w.texture).__webglTexture=U,De.get(w.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:Y,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,U){let Y=De.get(w);Y.__webglFramebuffer=U,Y.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,Y=0){J=w,H=U,B=Y;let G=null,W=!1,fe=!1;if(w){let he=De.get(w);if(he.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(z.FRAMEBUFFER,he.__webglFramebuffer),te.copy(w.viewport),me.copy(w.scissor),Ee=w.scissorTest,pe.viewport(te),pe.scissor(me),pe.setScissorTest(Ee),X=-1;return}else if(he.__webglFramebuffer===void 0)He.setupRenderTarget(w);else if(he.__hasExternalTextures)He.rebindTextures(w,De.get(w.texture).__webglTexture,De.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Ge=w.depthTexture;if(he.__boundDepthTexture!==Ge){if(Ge!==null&&De.has(Ge)&&(w.width!==Ge.image.width||w.height!==Ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");He.setupDepthRenderbuffer(w)}}let ye=w.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(fe=!0);let Ae=De.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ae[U])?G=Ae[U][Y]:G=Ae[U],W=!0):w.samples>0&&He.useMultisampledRTT(w)===!1?G=De.get(w).__webglMultisampledFramebuffer:Array.isArray(Ae)?G=Ae[Y]:G=Ae,te.copy(w.viewport),me.copy(w.scissor),Ee=w.scissorTest}else te.copy(Le).multiplyScalar(ue).floor(),me.copy(et).multiplyScalar(ue).floor(),Ee=ht;if(Y!==0&&(G=k),pe.bindFramebuffer(z.FRAMEBUFFER,G)&&pe.drawBuffers(w,G),pe.viewport(te),pe.scissor(me),pe.setScissorTest(Ee),W){let he=De.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+U,he.__webglTexture,Y)}else if(fe){let he=U;for(let ye=0;ye<w.textures.length;ye++){let Ae=De.get(w.textures[ye]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+ye,Ae.__webglTexture,Y,he)}}else if(w!==null&&Y!==0){let he=De.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,he.__webglTexture,Y)}X=-1};function nd(w){let U=De.get(w);return(U.__readFormat!==w.format||U.__readType!==w.type)&&(U.__readFormat=w.format,U.__readType=w.type,U.__formatReadable=yt.textureFormatReadable(w.format),U.__typeReadable=yt.textureTypeReadable(w.type)),U}this.readRenderTargetPixels=function(w,U,Y,G,W,fe,Me,he=0){if(!(w&&w.isWebGLRenderTarget)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=De.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Me!==void 0&&(ye=ye[Me],Array.isArray(ye)&&(ye=ye[0])),ye){pe.bindFramebuffer(z.FRAMEBUFFER,ye);try{let Ae=w.textures[he],Ge=Ae.format,je=Ae.type;w.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+he);let Se=nd(Ae);if(Se.__formatReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Se.__typeReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-G&&Y>=0&&Y<=w.height-W&&z.readPixels(U,Y,G,W,re.convert(Ge),re.convert(je),fe)}finally{let Ae=J!==null?De.get(J).__webglFramebuffer:null;pe.bindFramebuffer(z.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(w,U,Y,G,W,fe,Me,he=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=De.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Me!==void 0&&(ye=ye[Me],Array.isArray(ye)&&(ye=ye[0])),ye)if(U>=0&&U<=w.width-G&&Y>=0&&Y<=w.height-W){pe.bindFramebuffer(z.FRAMEBUFFER,ye);let Ae=w.textures[he],Ge=Ae.format,je=Ae.type;w.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+he);let Se=nd(Ae);if(Se.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Se.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Qe=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Qe),z.bufferData(z.PIXEL_PACK_BUFFER,fe.byteLength,z.STREAM_READ),z.readPixels(U,Y,G,W,re.convert(Ge),re.convert(je),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let Lt=J!==null?De.get(J).__webglFramebuffer:null;pe.bindFramebuffer(z.FRAMEBUFFER,Lt);let ft=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await If(z,ft,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Qe),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,fe),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(Qe),z.deleteSync(ft),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,U=null,Y=0){let G=Math.pow(2,-Y),W=Math.floor(w.image.width*G),fe=Math.floor(w.image.height*G),Me=U!==null?U.x:0,he=U!==null?U.y:0;He.setTexture2D(w,0),z.copyTexSubImage2D(z.TEXTURE_2D,Y,0,0,Me,he,W,fe),pe.unbindTexture()},this.copyTextureToTexture=function(w,U,Y=null,G=null,W=0,fe=0){let Me,he,ye,Ae,Ge,je,Se,Qe,Lt,ft=w.isCompressedTexture?w.mipmaps[fe]:w.image;if(Y!==null)Me=Y.max.x-Y.min.x,he=Y.max.y-Y.min.y,ye=Y.isBox3?Y.max.z-Y.min.z:1,Ae=Y.min.x,Ge=Y.min.y,je=Y.isBox3?Y.min.z:0;else{let tt=Math.pow(2,-W);Me=Math.floor(ft.width*tt),he=Math.floor(ft.height*tt),w.isDataArrayTexture?ye=ft.depth:w.isData3DTexture?ye=Math.floor(ft.depth*tt):ye=1,Ae=0,Ge=0,je=0}G!==null?(Se=G.x,Qe=G.y,Lt=G.z):(Se=0,Qe=0,Lt=0);let ut=re.convert(U.format),jt=re.convert(U.type),Te;U.isData3DTexture?(He.setTexture3D(U,0),Te=z.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(He.setTexture2DArray(U,0),Te=z.TEXTURE_2D_ARRAY):(He.setTexture2D(U,0),Te=z.TEXTURE_2D),pe.activeTexture(z.TEXTURE0),pe.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,U.flipY),pe.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),pe.pixelStorei(z.UNPACK_ALIGNMENT,U.unpackAlignment);let ri=pe.getParameter(z.UNPACK_ROW_LENGTH),it=pe.getParameter(z.UNPACK_IMAGE_HEIGHT),ds=pe.getParameter(z.UNPACK_SKIP_PIXELS),Qt=pe.getParameter(z.UNPACK_SKIP_ROWS),Qo=pe.getParameter(z.UNPACK_SKIP_IMAGES);pe.pixelStorei(z.UNPACK_ROW_LENGTH,ft.width),pe.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ft.height),pe.pixelStorei(z.UNPACK_SKIP_PIXELS,Ae),pe.pixelStorei(z.UNPACK_SKIP_ROWS,Ge),pe.pixelStorei(z.UNPACK_SKIP_IMAGES,je);let Xn=w.isDataArrayTexture||w.isData3DTexture,fs=U.isDataArrayTexture||U.isData3DTexture;if(w.isDepthTexture){let tt=De.get(w),Kt=De.get(U),zi=De.get(tt.__renderTarget),Et=De.get(Kt.__renderTarget);pe.bindFramebuffer(z.READ_FRAMEBUFFER,zi.__webglFramebuffer),pe.bindFramebuffer(z.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Vt=0;Vt<ye;Vt++)Xn&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,De.get(w).__webglTexture,W,je+Vt),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,De.get(U).__webglTexture,fe,Lt+Vt)),z.blitFramebuffer(Ae,Ge,Ae+Me,Ge+he,Se,Qe,Se+Me,Qe+he,z.DEPTH_BUFFER_BIT,z.NEAREST);pe.bindFramebuffer(z.READ_FRAMEBUFFER,null),pe.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(W!==0||w.isRenderTargetTexture||De.has(w)){let tt=De.get(w),Kt=De.get(U);pe.bindFramebuffer(z.READ_FRAMEBUFFER,L),pe.bindFramebuffer(z.DRAW_FRAMEBUFFER,F);for(let zi=0;zi<ye;zi++)Xn?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,tt.__webglTexture,W,je+zi):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,tt.__webglTexture,W),fs?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Kt.__webglTexture,fe,Lt+zi):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Kt.__webglTexture,fe),W!==0?z.blitFramebuffer(Ae,Ge,Ae+Me,Ge+he,Se,Qe,Se+Me,Qe+he,z.COLOR_BUFFER_BIT,z.NEAREST):fs?z.copyTexSubImage3D(Te,fe,Se,Qe,Lt+zi,Ae,Ge,Me,he):z.copyTexSubImage2D(Te,fe,Se,Qe,Ae,Ge,Me,he);pe.bindFramebuffer(z.READ_FRAMEBUFFER,null),pe.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else fs?w.isDataTexture||w.isData3DTexture?z.texSubImage3D(Te,fe,Se,Qe,Lt,Me,he,ye,ut,jt,ft.data):U.isCompressedArrayTexture?z.compressedTexSubImage3D(Te,fe,Se,Qe,Lt,Me,he,ye,ut,ft.data):z.texSubImage3D(Te,fe,Se,Qe,Lt,Me,he,ye,ut,jt,ft):w.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,fe,Se,Qe,Me,he,ut,jt,ft.data):w.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,fe,Se,Qe,ft.width,ft.height,ut,ft.data):z.texSubImage2D(z.TEXTURE_2D,fe,Se,Qe,Me,he,ut,jt,ft);pe.pixelStorei(z.UNPACK_ROW_LENGTH,ri),pe.pixelStorei(z.UNPACK_IMAGE_HEIGHT,it),pe.pixelStorei(z.UNPACK_SKIP_PIXELS,ds),pe.pixelStorei(z.UNPACK_SKIP_ROWS,Qt),pe.pixelStorei(z.UNPACK_SKIP_IMAGES,Qo),fe===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&z.generateMipmap(Te),pe.unbindTexture()},this.initRenderTarget=function(w){De.get(w).__webglFramebuffer===void 0&&He.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?He.setTextureCube(w,0):w.isData3DTexture?He.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?He.setTexture2DArray(w,0):He.setTexture2D(w,0),pe.unbindTexture()},this.resetState=function(){H=0,B=0,J=null,pe.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}};var Zl=class extends An{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new At;e.deleteAttribute("uv");let t=new Dt({side:Zt}),i=new Dt,n=new ci(16777215,900,28,2);n.position.set(.418,16.199,.3),this.add(n);let r=new ke(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Wi(e,i,6),a=new dt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new ke(e,Nr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new ke(e,Nr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new ke(e,Nr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new ke(e,Nr(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new ke(e,Nr(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new ke(e,Nr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Nr(s){return new ni({color:0,emissive:16777215,emissiveIntensity:s})}function Jl(s,e=!1){let t=s[0].index!==null,i=new Set(Object.keys(s[0].attributes)),n=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new at;l.morphTargetsRelative=a;let c=0;for(let h=0;h<s.length;++h){let d=s[h],u=0,f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[p].length!==s[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0,d=[];for(let u=0;u<s.length;++u){let f=s[u].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+h);h+=s[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=mp(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][u]);let p=mp(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function mp(s){let e,t,i,n=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new pt(o,t,i),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let d=l/t;for(let u=0,f=h.count;u<f;u++)for(let p=0;p<t;p++){let x=h.getComponent(u,p);a.setComponent(u+d,p,x)}}else o.set(h.array,l);l+=h.count*t}return n!==void 0&&(a.gpuType=n),a}function jh(s,e){if(e===Rh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Cr||e===Fo){let t=s.getIndex();if(t===null){let r=[],o=s.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let i=t.count-2,n=[];if(e===Cr)for(let r=1;r<=i;r++)n.push(t.getX(0)),n.push(t.getX(r)),n.push(t.getX(r+1));else for(let r=0;r<i;r++)r%2===0?(n.push(t.getX(r)),n.push(t.getX(r+1)),n.push(t.getX(r+2))):(n.push(t.getX(r+2)),n.push(t.getX(r+1)),n.push(t.getX(r)));return n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(n),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function Vo(s){let e=new Map,t=new Map,i=s.clone();return gp(s,i,function(n,r){e.set(r,n),t.set(n,r)}),i.traverse(function(n){if(!n.isSkinnedMesh)return;let r=n,o=e.get(n),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),i}function gp(s,e,t){t(s,e);for(let i=0;i<s.children.length;i++)gp(s.children[i],e.children[i],t)}var jl=class extends an{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ru(t)}),this.register(function(t){return new ou(t)}),this.register(function(t){return new au(t)}),this.register(function(t){return new gu(t)}),this.register(function(t){return new xu(t)}),this.register(function(t){return new _u(t)}),this.register(function(t){return new cu(t)}),this.register(function(t){return new hu(t)}),this.register(function(t){return new uu(t)}),this.register(function(t){return new du(t)}),this.register(function(t){return new su(t)}),this.register(function(t){return new fu(t)}),this.register(function(t){return new lu(t)}),this.register(function(t){return new mu(t)}),this.register(function(t){return new pu(t)}),this.register(function(t){return new iu(t)}),this.register(function(t){return new Ql(t,$e.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Ql(t,$e.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new yu(t)})}load(e,t,i,n){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=zn.extractUrlBase(e);o=zn.resolveURL(c,this.path)}else o=zn.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){n?n(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new vr(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Mp){try{o[$e.KHR_BINARY_GLTF]=new vu(e)}catch(d){n&&n(d);return}r=JSON.parse(o[$e.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Au(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let d=this.pluginCallbacks[h](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let d=r.extensionsUsed[h],u=r.extensionsRequired||[];switch(d){case $e.KHR_MATERIALS_UNLIT:o[d]=new nu;break;case $e.KHR_DRACO_MESH_COMPRESSION:o[d]=new Mu(r,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:o[d]=new bu;break;case $e.KHR_MESH_QUANTIZATION:o[d]=new Su;break;default:u.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,n)}parseAsync(e,t){let i=this;return new Promise(function(n,r){i.parse(e,t,n,r)})}};function rv(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function wt(s,e,t){let i=s.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}var $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},iu=class{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,n=t.cache.get(i);if(n)return n;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new be(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],ai);let d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new qi(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ci(h),c.distance=d;break;case"spot":c=new As(h),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),dn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),n=Promise.resolve(c),t.cache.add(i,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}},nu=class{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return nt}extendParams(e,t,i){let n=[];e.color=new be(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],ai),e.opacity=o[3]}r.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",r.baseColorTexture,Ct))}return Promise.all(n)}},su=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=wt(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}},ru=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return wt(this.parser,e,this.name)!==null?li:null}extendMaterialParams(e,t){let i=wt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&n.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&n.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(n.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){let r=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ne(r,r)}return Promise.all(n)}},ou=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return wt(this.parser,e,this.name)!==null?li:null}extendMaterialParams(e,t){let i=wt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return t.diffuseRoughness=i.diffuseRoughnessFactor!==void 0?i.diffuseRoughnessFactor:0,i.diffuseRoughnessTexture!==void 0&&n.push(this.parser.assignTexture(t,"diffuseRoughnessMap",i.diffuseRoughnessTexture)),Promise.all(n)}},au=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DISPERSION}getMaterialType(e){return wt(this.parser,e,this.name)!==null?li:null}extendMaterialParams(e,t){let i=wt(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}},lu=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return wt(this.parser,e,this.name)!==null?li:null}extendMaterialParams(e,t){let i=wt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&n.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&n.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(n)}},cu=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){return wt(this.parser,e,this.name)!==null?li:null}extendMaterialParams(e,t){let i=wt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(t.sheenColor=new be(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){let r=i.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],ai)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&n.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,Ct)),i.sheenRoughnessTexture!==void 0&&n.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(n)}},hu=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return wt(this.parser,e,this.name)!==null?li:null}extendMaterialParams(e,t){let i=wt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&n.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(n)}},uu=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){return wt(this.parser,e,this.name)!==null?li:null}extendMaterialParams(e,t){let i=wt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&n.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;let r=i.attenuationColor||[1,1,1];return t.attenuationColor=new be().setRGB(r[0],r[1],r[2],ai),Promise.all(n)}},du=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){return wt(this.parser,e,this.name)!==null?li:null}extendMaterialParams(e,t){let i=wt(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},fu=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){return wt(this.parser,e,this.name)!==null?li:null}extendMaterialParams(e,t){let i=wt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&n.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));let r=i.specularColorFactor||[1,1,1];return t.specularColor=new be().setRGB(r[0],r[1],r[2],ai),i.specularColorTexture!==void 0&&n.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,Ct)),Promise.all(n)}},pu=class{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){return wt(this.parser,e,this.name)!==null?li:null}extendMaterialParams(e,t){let i=wt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&n.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(n)}},mu=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return wt(this.parser,e,this.name)!==null?li:null}extendMaterialParams(e,t){let i=wt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&n.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(n)}},gu=class{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;let r=n.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},xu=class{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=n.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}},_u=class{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=n.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}},Ql=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let n=i.extensions[this.name],r=this.parser.getDependency("buffer",n.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=n.byteOffset||0,c=n.byteLength||0,h=n.count,d=n.byteStride,u=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,d,u,n.mode,n.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*d);return o.decodeGltfBuffer(new Uint8Array(f),h,d,u,n.mode,n.filter),f})})}else return null}},yu=class{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let n=t.meshes[i.mesh];for(let c of n.primitives)if(c.mode!==Oi.TRIANGLES&&c.mode!==Oi.TRIANGLE_STRIP&&c.mode!==Oi.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=i.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),d=h.isGroup?h.children:[h],u=c[0].count,f=[];for(let p of d){let x=new Ue,m=new P,g=new Mt,_=new P(1,1,1),M=new Wi(p.geometry,p.material,u);for(let b=0;b<u;b++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,b),l.SCALE&&_.fromBufferAttribute(l.SCALE,b),M.setMatrixAt(b,x.compose(m,g,_));let v=null;for(let b in l)if(b==="_COLOR_0"){let E=l[b];M.instanceColor=new Rn(E.array,E.itemSize,E.normalized)}else if(b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"){if(v===null){let y=M.geometry;v=new at,v.name=y.name;for(let S in y.attributes)v.setAttribute(S,y.attributes[S]);for(let S in y.morphAttributes)v.morphAttributes[S]=y.morphAttributes[S];y.index!==null&&v.setIndex(y.index),v.morphTargetsRelative=y.morphTargetsRelative;for(let S of y.groups)v.addGroup(S.start,S.count,S.materialIndex);y.boundingBox!==null&&(v.boundingBox=y.boundingBox.clone()),y.boundingSphere!==null&&(v.boundingSphere=y.boundingSphere.clone()),v.drawRange.start=y.drawRange.start,v.drawRange.count=y.drawRange.count,v.userData=Object.assign({},y.userData),M.geometry=v}let E=l[b];v.setAttribute(b,new Rn(E.array,E.itemSize,E.normalized))}dt.prototype.copy.call(M,p),this.parser.assignFinalMaterial(M),f.push(M)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Mp="glTF",Wo=12,xp={JSON:1313821514,BIN:5130562},vu=class{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Wo),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Mp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let n=this.header.length-Wo,r=new DataView(e,Wo),o=0;for(;o<n;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===xp.JSON){let c=new Uint8Array(e,Wo+o,a);this.content=i.decode(c)}else if(l===xp.BIN){let c=Wo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Mu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,n=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let d=Eu[h]||h.toLowerCase();a[d]=o[h]}for(let h in e.attributes){let d=Eu[h]||h.toLowerCase();if(o[h]!==void 0){let u=i.accessors[e.attributes[h]],f=Dr[u.componentType];c[d]=f.name,l[d]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,u){n.decodeDracoFile(h,function(f){for(let p in f.attributes){let x=f.attributes[p],m=l[p];m!==void 0&&(x.normalized=m)}d(f)},a,c,ai,u)})})}},bu=class{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let i=Math.cos(e.rotation),n=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*n,e.offset.x,-e.repeat.x*n,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Su=class{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}},ec=class extends on{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n*3+n;for(let o=0;o!==n;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=n-t,d=(i-t)/h,u=d*d,f=u*d,p=e*c,x=p-c,m=-2*f+3*u,g=f-u,_=1-m,M=g-u+d;for(let v=0;v!==a;v++){let b=o[x+v+a],E=o[x+v+l]*h,y=o[p+v+a],S=o[p+v]*h;r[v]=_*b+M*E+m*y+g*S}return r}},ov=new Mt,Tu=class extends ec{interpolate_(e,t,i,n){let r=super.interpolate_(e,t,i,n);return ov.fromArray(r).normalize().toArray(r),r}},Oi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Dr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},_p={9728:Pt,9729:Ft,9984:sl,9985:Ar,9986:Ns,9987:Li},yp={33071:Ci,33648:lr,10497:nn},Qh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Eu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},rs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},av={CUBICSPLINE:void 0,LINEAR:bs,STEP:Ms},eu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function lv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Dt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Pi})),s.DefaultMaterial}function Us(s,e,t){for(let i in t.extensions)s[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function dn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function cv(s,e,t){let i=!1,n=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let d=e[c];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(n=!0),d.COLOR_0!==void 0&&(r=!0),i&&n&&r)break}if(!i&&!n&&!r)return Promise.resolve(s);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let d=e[c];if(i){let u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;o.push(u)}if(n){let u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;a.push(u)}if(r){let u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;l.push(u)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],d=c[1],u=c[2];return i&&(s.morphAttributes.position=h),n&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=u),s.morphTargetsRelative=!0,s})}function hv(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++)s.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function uv(s){let e,t=s.extensions&&s.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+tu(t.attributes):e=s.indices+":"+tu(s.attributes)+":"+s.mode,s.targets!==void 0)for(let i=0,n=s.targets.length;i<n;i++)e+=":"+tu(s.targets[i]);return e}function tu(s){let e="",t=Object.keys(s).sort();for(let i=0,n=t.length;i<n;i++)e+=t[i]+":"+s[t[i]]+";";return e}function wu(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function dv(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var fv=new Ue,Au=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new rv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);n=i&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&n<17||r&&o<98?(this.textureLoader=new Eo(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Ro(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new vr(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,n=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){let a={scene:o[0][n.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:n.asset,parser:i,userData:{}};return Us(r,a,n),dn(a,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){let o=t[n].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let n=0,r=e.length;n<r;n++){let o=e[n];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let n=i.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let n=e(t[i]);if(n)return n}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let n=0;n<t.length;n++){let r=e(t[n]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":n=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);let n=this.options;return new Promise(function(r,o){i.load(zn.resolveURL(t.uri,n.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let n=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+n)})}loadAccessor(e){let t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){let o=Qh[n.type],a=Dr[n.componentType],l=n.normalized===!0,c=new a(n.count*o);return Promise.resolve(new pt(c,o,l))}let r=[];return n.bufferView!==void 0?r.push(this.getDependency("bufferView",n.bufferView)):r.push(null),n.sparse!==void 0&&(r.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Qh[n.type],c=Dr[n.componentType],h=c.BYTES_PER_ELEMENT,d=h*l,u=n.byteOffset||0,f=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,p=n.normalized===!0,x,m;if(f&&f!==d){let g=Math.floor(u/f),_="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+g+":"+n.count,M=t.cache.get(_);M||(x=new c(a,g*f,n.count*f/h),M=new Ts(x,f/h),t.cache.add(_,M)),m=new jn(M,l,u%f/h,p)}else a===null?x=new c(n.count*l):x=new c(a,u,n.count*l),m=new pt(x,l,p);if(n.sparse!==void 0){let g=Qh.SCALAR,_=Dr[n.sparse.indices.componentType],M=n.sparse.indices.byteOffset||0,v=n.sparse.values.byteOffset||0,b=new _(o[1],M,n.sparse.count*g),E=new c(o[2],v,n.sparse.count*l);a!==null&&(m=new pt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let y=0,S=b.length;y<S;y++){let C=b[y];if(m.setX(C,E[y*l]),l>=2&&m.setY(C,E[y*l+1]),l>=3&&m.setZ(C,E[y*l+2]),l>=4&&m.setW(C,E[y*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){let n=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let u=(r.samplers||{})[o.sampler]||{};return h.magFilter=_p[u.magFilter]||Ft,h.minFilter=_p[u.minFilter]||Li,h.wrapS=yp[u.wrapS]||nn,h.wrapT=yp[u.wrapT]||nn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Pt&&h.minFilter!==Ft,n.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,n=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=n.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)h=i.getDependency("bufferView",o.bufferView).then(function(u){return new Promise(function(f,p){t.parse(u,f,p)})});else{if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let f=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(l).then(function(u){return new Promise(function(f,p){let x=f;t.isImageBitmapLoader===!0&&(x=function(m){let g=new zt(m);g.needsUpdate=!0,f(g)}),t.load(zn.resolveURL(u,r.path),x,void 0,p)})})}let d=h.then(function(u){return c===!0&&a.revokeObjectURL(l),dn(u,o),u.userData.mimeType=o.mimeType||dv(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=d,d}assignTexture(e,t,i,n){let r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[$e.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return n!==void 0&&(o.colorSpace=n),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,i=e.material,n=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new sn,ii.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){let a="LineBasicMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new xr,ii.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(n||r||o){let a="ClonedMaterial:"+i.uuid+":";n&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Dt}loadMaterial(e){let t=this,i=this.json,n=this.extensions,r=i.materials[e],o,a={},l=r.extensions||{},c=[];if(l[$e.KHR_MATERIALS_UNLIT]){let d=n[$e.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(a,r,t))}else{let d=r.pbrMetallicRoughness||{};if(a.color=new be(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){let u=d.baseColorFactor;a.color.setRGB(u[0],u[1],u[2],ai),a.opacity=u[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",d.baseColorTexture,Ct)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Xt);let h=r.alphaMode||eu.OPAQUE;if(h===eu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===eu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==nt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ne(1,1),r.normalTexture.scale!==void 0)){let d=r.normalTexture.scale;a.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==nt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==nt){let d=r.emissiveFactor;a.emissive=new be().setRGB(d[0],d[1],d[2],ai)}return r.emissiveTexture!==void 0&&o!==nt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ct)),Promise.all(c).then(function(){let d=new o(a);return r.name&&(d.name=r.name),dn(d,r),t.associations.set(d,{materials:e}),r.extensions&&Us(n,d,r),d})}createUniqueName(e){let t=ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,n=this.primitiveCache;function r(a){return i[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return vp(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=uv(c),d=n[h];if(d)o.push(d.promise);else{let u;c.extensions&&c.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?u=r(c):u=vp(new at,c,t),c.mode===Oi.TRIANGLE_STRIP?u=u.then(f=>jh(f,Fo)):c.mode===Oi.TRIANGLE_FAN&&(u=u.then(f=>jh(f,Cr))),n[h]={primitive:c,promise:u},o.push(u)}}return Promise.all(o)}loadMesh(e){let t=this,i=this.json,n=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?lv(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let f=0,p=h.length;f<p;f++){let x=h[f],m=o[f],g,_=c[f];if(m.mode===Oi.TRIANGLES||m.mode===Oi.TRIANGLE_STRIP||m.mode===Oi.TRIANGLE_FAN||m.mode===void 0){let M=r.isSkinnedMesh===!0,v=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");M&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=M&&v?new ho(x,_):new ke(x,_),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===Oi.LINES)g=new fo(x,_);else if(m.mode===Oi.LINE_STRIP)g=new ws(x,_);else if(m.mode===Oi.LINE_LOOP)g=new po(x,_);else if(m.mode===Oi.POINTS)g=new Cn(x,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&hv(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),dn(g,r),m.extensions&&Us(n,g,m),t.assignFinalMaterial(g),d.push(g)}for(let f=0,p=d.length;f<p;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&Us(n,d[0],r),d[0];let u=new vt;r.extensions&&Us(n,u,r),t.associations.set(u,{meshes:e});for(let f=0,p=d.length;f<p;f++)u.add(d[f]);return u})}loadCamera(e){let t,i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new It(Mi.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new Rs(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),dn(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let n=0,r=t.joints.length;n<r;n++)i.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){let r=n.pop(),o=n,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let d=o[c];if(d){a.push(d);let u=new Ue;r!==null&&u.fromArray(r.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new uo(a,l)})}loadAnimation(e){let t=this.json,i=this,n=t.animations[e],r=n.name?n.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let d=0,u=n.channels.length;d<u;d++){let f=n.channels[d],p=n.samplers[f.sampler],x=f.target,m=x.node,g=n.parameters!==void 0?n.parameters[p.input]:p.input,_=n.parameters!==void 0?n.parameters[p.output]:p.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",_)),c.push(p),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(d){let u=d[0],f=d[1],p=d[2],x=d[3],m=d[4],g=[];for(let M=0,v=u.length;M<v;M++){let b=u[M],E=f[M],y=p[M],S=x[M],C=m[M];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();let R=i._createAnimationTracks(b,E,y,S,C);if(R)for(let N=0;N<R.length;N++)g.push(R[N])}let _=new Fn(r,void 0,g);return dn(_,n),_})}createNodeMesh(e){let t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(r){let o=i._getNodeRef(i.meshCache,n.mesh,r);return n.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=n.weights.length;l<c;l++)a.morphTargetInfluences[l]=n.weights[l]}),o})}loadNode(e){let t=this.json,i=this,n=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=n.children||[];for(let c=0,h=a.length;c<h;c++)o.push(i.getDependency("node",a[c]));let l=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],d=c[1],u=c[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,fv)});for(let f=0,p=d.length;f<p;f++)h.add(d[f]);if(h.userData.pivot!==void 0&&d.length>0){let f=h.userData.pivot,p=d[0];h.pivot=new P().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?n.createUniqueName(r.name):"",a=[],l=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(n.getDependency("camera",r.camera).then(function(c){return n._getNodeRef(n.cameraCache,r.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new mr:c.length>1?h=new vt:c.length===1?h=c[0]:h=new dt,h!==c[0])for(let d=0,u=c.length;d<u;d++)h.add(c[d]);if(r.name&&(h.userData.name=r.name,h.name=o),dn(h,r),r.extensions&&Us(i,h,r),r.matrix!==void 0){let d=new Ue;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!n.associations.has(h))n.associations.set(h,{});else if(r.mesh!==void 0&&n.meshCache.refs[r.mesh]>1){let d=n.associations.get(h);n.associations.set(h,{...d})}return n.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],n=this,r=new vt;i.name&&(r.name=n.createUniqueName(i.name)),dn(r,i),i.extensions&&Us(t,r,i);let o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(n.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,d=l.length;h<d;h++){let u=l[h];u.parent!==null?r.add(Vo(u)):r.add(u)}let c=h=>{let d=new Map;for(let[u,f]of n.associations)(u instanceof ii||u instanceof zt)&&d.set(u,f);return h.traverse(u=>{let f=n.associations.get(u);f!=null&&d.set(u,f)}),d};return n.associations=c(r),r})}_createAnimationTracks(e,t,i,n,r){let o=[],a=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}rs[r.path]===rs.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let h;switch(rs[r.path]){case rs.weights:h=Dn;break;case rs.rotation:h=On;break;case rs.translation:case rs.scale:h=ts;break;default:switch(i.itemSize){case 1:h=Dn;break;case 2:case 3:default:h=ts;break}break}let d=n.interpolation!==void 0?av[n.interpolation]:bs,u=this._getArrayFromAccessor(i);for(let f=0,p=l.length;f<p;f++){let x=new h(l[f]+"."+rs[r.path],t.array,u,d);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=wu(t.constructor),n=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)n[r]=t[r]*i;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let n=this instanceof On?Tu:ec;return new n(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function pv(s,e,t){let i=e.attributes,n=new $t;if(i.POSITION!==void 0){let a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(n.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),a.normalized){let h=wu(Dr[a.componentType]);n.min.multiplyScalar(h),n.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new P,l=new P;for(let c=0,h=r.length;c<h;c++){let d=r[c];if(d.POSITION!==void 0){let u=t.json.accessors[d.POSITION],f=u.min,p=u.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),u.normalized){let x=wu(Dr[u.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(a)}s.boundingBox=n;let o=new di;n.getCenter(o.center),o.radius=n.min.distanceTo(n.max)/2,s.boundingSphere=o}function vp(s,e,t){let i=e.attributes,n=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(let o in i){let a=Eu[o]||o.toLowerCase();a in s.attributes||n.push(r(i[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});n.push(o)}return Ye.workingColorSpace!==ai&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ye.workingColorSpace}" not supported.`),dn(s,e),pv(s,e,t),Promise.all(n).then(function(){return e.targets!==void 0?cv(s,e.targets,t):s})}var Rt={models:{},clips:{},parts:{},ready:!1},mv={Black:{c:1513755,m:.35,r:.55},DarkMetal:{c:2764081,m:.85,r:.42},Metal:{c:6317419,m:.9,r:.35},LightMetal:{c:10133670,m:.95,r:.25},LightMetal2:{c:8291466,m:.95,r:.3},DarkWood:{c:5978399,m:0,r:.62},Wood:{c:7227430,m:0,r:.6},Glass:{c:791576,m:.9,r:.08},Main:{c:1842720,m:.3,r:.6},Green:{c:3950128,m:.1,r:.7},DarkGreen:{c:2897188,m:.1,r:.7}};function gv(s){s.traverse(e=>{if(!e.isMesh)return;e.castShadow=!0;let t=i=>{let n=mv[i.name];return n?(i.color.setHex(n.c),i.metalness=n.m,i.roughness=n.r):(i.metalness=Math.min(i.metalness,.3),i.roughness=Math.max(i.roughness,.6)),i};e.material=Array.isArray(e.material)?e.material.map(t):t(e.material)})}function xv(s,e){e.updateMatrixWorld(!0);let t=[],i=new $t;e.traverse(n=>{if(!n.isMesh)return;let r=n.geometry.clone().applyMatrix4(n.matrixWorld),o=n.material,a=/Lea|Grass/.test(o.name);r.computeBoundingBox(),i.union(r.boundingBox);let l=new ni({map:o.map,color:o.map?16777215:o.color,alphaTest:a?.45:0,side:a?Xt:Pi});/Light/.test(o.name)&&(l.emissive=new be(o.name==="BrakeLight"?3145728:0)),t.push({geo:r,mat:l,leaf:a})}),Rt.parts[s]={parts:t,box:i}}function _v(s){let e=atob(s),t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t.buffer}async function bp(s=()=>{}){let e=window.SP_ASSETS||{},t=Object.keys(e),i=new jl,n=0;for(let r of t){let o=await new Promise((a,l)=>i.parse(_v(e[r]),"",a,l));if(r==="soldier")for(let a of o.animations)Rt.clips[a.name]=a;else r.startsWith("prop_")?xv(r.slice(5),o.scene):gv(o.scene);Rt.models[r]=o.scene,s(++n/t.length)}Rt.ready=!0}var yv={ak:{s:.162,grip:[.02,.05],muzzle:[3.85,.58],sight:.9,rail:[.7,.8],hand:[1.95,.42],eject:[.9,.66],mag:[1.15,0]},sniper:{s:.165,grip:[.3,.05],muzzle:[5.3,.36],sight:.65,hand:[2,.16],eject:[.6,.45],scope:[.02,.65],mag:[.85,.08]},m4:{s:.162,grip:[.1,.05],muzzle:[3.6,.65],sight:1.05,rail:[.2,.93],hand:[1.8,.5],eject:[.65,.68],mag:[.92,.1]},dmr:{s:.15,grip:[.25,-.1],muzzle:[5.2,.22],sight:.5,hand:[1.9,.05],eject:[.6,.25],scope:[-.22,.5],mag:[.75,-.02]},shotgun:{s:.175,grip:[.15,0],muzzle:[3.8,.24],sight:.37,rail:[.8,.33],hand:[2.2,-.04],eject:[.9,.2],mag:[1.05,0]},smg:{s:.16,grip:[-.05,0],muzzle:[2.25,.55],sight:.78,rail:[.7,.72],hand:[1.45,.38],eject:[.6,.5],mag:[.87,.02]},pistol:{s:.11,grip:[0,.1],muzzle:[1.45,.42],sight:.56,hand:[.05,.02],eject:[.5,.5],mag:[0,-.12]},carbine:{s:.162,grip:[.15,.1],muzzle:[3.25,.62],sight:.9,hand:[2,.5],eject:[.9,.66]}};function tc(s){let e=yv[s],t=new vt,i=Rt.models["gun_"+s].clone(!0);return i.scale.setScalar(e.s),i.rotation.y=Math.PI/2,i.position.set(0,-e.grip[1]*e.s,e.grip[0]*e.s),t.add(i),t.model=i,t.def=e,t.pt=(n,r=0)=>new P(r*e.s,(n[1]-e.grip[1])*e.s,-(n[0]-e.grip[0])*e.s),t.muzzle=t.pt(e.muzzle),t}var Ce=(s=1,e)=>e===void 0?Math.random()*s:s+Math.random()*(e-s);function Lu(s){let e=s>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Ru={};function Sp(s){if(Ru[s])return Ru[s];let e=128,t=document.createElement("canvas");t.width=t.height=e;let i=t.getContext("2d"),n=Lu(s.length*977+13);if(s==="fence"){i.clearRect(0,0,e,e),i.strokeStyle="#c8ccd0",i.lineWidth=3;for(let o=-e;o<e*2;o+=16)i.beginPath(),i.moveTo(o,0),i.lineTo(o+e,e),i.stroke(),i.beginPath(),i.moveTo(o+e,0),i.lineTo(o,e),i.stroke()}else{let o=i.createImageData(e,e);for(let a=0;a<e;a++)for(let l=0;l<e;l++){let c;s==="grass"?c=140+n()*115:s==="dirt"?c=165+n()*80:s==="concrete"?c=195+n()*45:s==="metal"?c=180+Math.sin(l/e*Math.PI*16)*42+n()*22:s==="wood"?c=170+Math.sin(a/e*Math.PI*12+Math.sin(l*.08)*1.5)*35+n()*35:c=235+n()*20;let h=(a*e+l)*4;o.data[h]=o.data[h+1]=o.data[h+2]=c,o.data[h+3]=255}if(i.putImageData(o,0,0),s==="grass"||s==="dirt"||s==="concrete")for(let a=0;a<26;a++)i.fillStyle=`rgba(0,0,0,${.05+n()*.1})`,i.beginPath(),i.arc(n()*e,n()*e,4+n()*14,0,7),i.fill();if(s==="wood"){i.fillStyle="rgba(0,0,0,.35)";for(let a=0;a<4;a++)i.fillRect(0,a*32,e,2)}s==="concrete"&&(i.strokeStyle="rgba(0,0,0,.22)",i.strokeRect(.5,.5,e-1,e-1))}let r=new In(t);return r.wrapS=r.wrapT=nn,r.colorSpace=Ct,r.anisotropy=4,Ru[s]=r}var vv=[[[1,0,0],[0,0,-1],[0,1,0]],[[-1,0,0],[0,0,1],[0,1,0]],[[0,1,0],[1,0,0],[0,0,-1]],[[0,-1,0],[1,0,0],[0,0,1]],[[0,0,1],[1,0,0],[0,1,0]],[[0,0,-1],[-1,0,0],[0,1,0]]],Mv={grass:6,dirt:5,wood:1.6,concrete:4,metal:1.3,plain:1,fence:1.1,emis:1},Tp=new Mt,Ep=new ui;function qt(s,e,t,i=0,n=0,r=0,o=1,a=o,l=o){return Ep.set(i,n,r),Tp.setFromEuler(Ep),new Ue().compose(new P(s,e,t),Tp,new P(o,a,l))}var Iu=class{constructor(){this.b={},this.col=[],this.rng=Lu(4242),this.inst={},this.canopy=[],this.lod={},this.lodInst={}}prop(e,t,i,n,r=0,o=1,a={}){let l=Rt.parts[e];if(!l)return null;let c=Array.isArray(o)?o[0]:o,h=Array.isArray(o)?o[1]:o,d=Array.isArray(o)?o[2]:o,u=a.cell||48,f=e+"|"+u+"|"+Math.floor((t+200)/u)+"|"+Math.floor((n+200)/u)+(a.shadow===!1?"|n":"");if((this.inst[f]||(this.inst[f]={name:e,shadow:a.shadow!==!1,list:[],cell:a.cell?Rp(t,n):null})).list.push({m:qt(t,i,n,0,r,0,c,h,d),tint:a.tint}),a.col){let p=l.box,x=Math.abs(Math.cos(r)),m=Math.abs(Math.sin(r)),g=a.shrink??1,_=(Math.max(Math.abs(p.min.x),Math.abs(p.max.x))*c*x+Math.max(Math.abs(p.min.z),Math.abs(p.max.z))*d*m)*g,M=(Math.max(Math.abs(p.min.x),Math.abs(p.max.x))*c*m+Math.max(Math.abs(p.min.z),Math.abs(p.max.z))*d*x)*g;this.collider(t-_,i,n-M,t+_,i+p.max.y*h*(a.shrinkY??1),n+M,a)}return l}lodCell(e){return this.lod[e]||(this.lod[e]={x:(+e.split("|")[0]+.5)*Xo-200,z:(+e.split("|")[1]+.5)*Xo-200,full:[],lod:null,near:!0})}buf(e){return this.b[e]||(this.b[e]={p:[],n:[],u:[],c:[]})}color(e,t){let i=new be(e),n=t===0?1:1+(this.rng()-.5)*(t??.14);return[i.r*n,i.g*n,i.b*n]}box(e,t,i,n,r,o,a,l,c={}){let h=this.buf(e),d=this.color(t,c.tint),u=Mv[e],f=o/2,p=a/2,x=l/2,m=Math.cos(c.rot||0),g=Math.sin(c.rot||0),_=n+p,M=this.rng()*7,v=this.rng()*7;for(let[b,E,y]of vv){let S=k=>Math.abs(k[0])*f+Math.abs(k[1])*p+Math.abs(k[2])*x,C=S(b),R=S(E),N=S(y),D=(k,L)=>{let F=b[0]*C+E[0]*R*k+y[0]*N*L,H=b[1]*C+E[1]*R*k+y[1]*N*L,B=b[2]*C+E[2]*R*k+y[2]*N*L;h.p.push(i+F*m+B*g,_+H,r-F*g+B*m),h.n.push(b[0]*m+b[2]*g,b[1],-b[0]*g+b[2]*m),h.u.push(k*R/u+M,L*N/u+v),h.c.push(d[0],d[1],d[2])};D(-1,-1),D(1,-1),D(1,1),D(-1,-1),D(1,1),D(-1,1)}if(c.col!==!1){let b=Math.abs(m)*f+Math.abs(g)*x,E=Math.abs(g)*f+Math.abs(m)*x;this.collider(i-b,n,r-E,i+b,n+a,r+E,c)}return this}collider(e,t,i,n,r,o,a={}){this.col.push({x0:e,x1:n,y0:t,y1:r,z0:i,z1:o,solid:a.solid!==!1,sight:a.sight!==!1,bullet:a.bullet!==!1,walk:!!a.walk,nocover:!!a.nocover})}geo(e,t,i,n,r={}){let o=this.buf(e),a=this.color(t,r.tint);if(i.index){let u=i.toNonIndexed();i.dispose(),i=u}i.applyMatrix4(n);let l=i.attributes.position.array,c=i.attributes.normal.array,h=i.attributes.uv&&i.attributes.uv.array,d=r.uv||1;for(let u=0;u<l.length/3;u++)o.p.push(l[u*3],l[u*3+1],l[u*3+2]),o.n.push(c[u*3],c[u*3+1],c[u*3+2]),o.u.push(h?h[u*2]*d:0,h?h[u*2+1]*d:0),o.c.push(a[0],a[1],a[2]);i.dispose()}finish(e){let t=[];for(let r in this.b){let o=this.b[r],a=new at;a.setAttribute("position",new Ke(o.p,3)),a.setAttribute("normal",new Ke(o.n,3)),a.setAttribute("uv",new Ke(o.u,2)),a.setAttribute("color",new Ke(o.c,3));let l;r==="emis"?l=new nt({vertexColors:!0}):r==="fence"?l=new ni({map:Sp("fence"),vertexColors:!0,alphaTest:.5,side:Xt}):l=new ni({map:r==="plain"?null:Sp(r),vertexColors:!0});let c=new ke(a,l);c.castShadow=r!=="emis"&&r!=="fence",c.receiveShadow=r!=="emis",c.frustumCulled=!1,e.add(c),t.push(c)}let i=new be(1,1,1),n=new be;for(let r in this.inst){let o=this.inst[r];for(let a of Rt.parts[o.name].parts){let l=new Wi(a.geo,a.mat,o.list.length);o.list.forEach((c,h)=>{l.setMatrixAt(h,c.m),l.setColorAt(h,c.tint?n.setHex(c.tint):i)}),l.castShadow=o.shadow&&!a.leaf,l.receiveShadow=!a.leaf,l.userData.detail=/grass|fern/.test(o.name),l.computeBoundingSphere(),l.userData.shared=!0,e.add(l),t.push(l),o.cell&&this.lodCell(o.cell).full.push(l)}}for(let r in this.lodInst){let o=this.lodInst[r],a=new Wi(Av(),wv,o.length);o.forEach((l,c)=>{a.setMatrixAt(c,l.m),a.setColorAt(c,n.setHex(l.tint))}),a.castShadow=!1,a.receiveShadow=!1,a.computeBoundingSphere(),a.userData.shared=!0,e.add(a),t.push(a),r==="border"?a.userData.always=!0:(a.visible=!1,this.lodCell(r).lod=a)}if(this.canopy.length){let r=new Wi(new es(1,1,7),new nt({colorWrite:!1,depthWrite:!1}),this.canopy.length);this.canopy.forEach((o,a)=>r.setMatrixAt(a,o)),r.castShadow=!0,r.frustumCulled=!1,e.add(r),t.push(r)}return t}};function bi(s,e,t,i,n,r,o,a,l){n===0&&(n=1e-9),r===0&&(r=1e-9),o===0&&(o=1e-9);let c=1/n,h=1/r,d=1/o,u=a,f=null,p=0;for(let g=0;g<s.length;g++){let _=s[g];if(!_[l])continue;let M=(_.x0-e)*c,v=(_.x1-e)*c,b=M<v?M:v,E=M<v?v:M,y=0;M=(_.y0-t)*h,v=(_.y1-t)*h;let S=M<v?M:v,C=M<v?v:M;S>b&&(b=S,y=1),C<E&&(E=C),!(E<b)&&(M=(_.z0-i)*d,v=(_.z1-i)*d,S=M<v?M:v,C=M<v?v:M,S>b&&(b=S,y=2),C<E&&(E=C),!(E<b||b<0||b>=u)&&(u=b,f=_,p=y))}if(!f)return null;let x=p===0?n:p===1?r:o,m=x>0?-1:1;return{d:u,c:f,nx:p===0?m:0,ny:p===1?m:0,nz:p===2?m:0}}var bv=[1,-1,0,0,1,1,-1,-1],Sv=[0,0,1,-1,1,-1,1,-1],Pu=class{constructor(e,t){this.x0=t.x0,this.z0=t.z0,this.w=Math.ceil(t.x1-t.x0),this.h=Math.ceil(t.z1-t.z0);let i=this.w*this.h,n=.42,r=this.w;this.blk=new Uint8Array(i),this.ht=new Float32Array(i),this.gs=new Float32Array(i),this.pa=new Int32Array(i),this.st=new Uint32Array(i),this.cl=new Uint32Array(i),this.via=new Array(i),this.stamp=0,this.hk=[],this.hv=[],this.links=new Map;let o=(a,l,c,h)=>[Math.max(0,Math.ceil(a-c-.5)),Math.min(h-1,Math.floor(l-c-.5))];for(let a of e){if(!a.walk)continue;let[l,c]=o(a.x0+.05,a.x1-.05,this.x0,r),[h,d]=o(a.z0+.05,a.z1-.05,this.z0,this.h);for(let u=h;u<=d;u++)for(let f=l;f<=c;f++)a.y1>this.ht[u*r+f]&&(this.ht[u*r+f]=a.y1)}for(let a of e){if(!a.solid)continue;let[l,c]=o(a.x0-n,a.x1+n,this.x0,r),[h,d]=o(a.z0-n,a.z1+n,this.z0,this.h);for(let u=h;u<=d;u++)for(let f=l;f<=c;f++){let p=this.ht[u*r+f];a.y1>p+.55&&a.y0<p+1.5&&(this.blk[u*r+f]=1)}}this.buildLinks(e,n)}addLink(e,t,i,n,r){this.links.has(e)||this.links.set(e,[]),this.links.get(e).push({to:t,type:i,h:n,cost:r})}buildLinks(e,t){let i=this.w,n=(o,a)=>o>=0&&a>=0&&o<i&&a<this.h&&!this.blk[a*i+o],r=(o,a,l)=>{let c=this.center(o),h=this.center(a),d=h.x-c.x,u=h.z-c.z,f=Math.hypot(d,u);return!bi(e,c.x,l,c.z,d/f,0,u/f,f,"solid")};for(let o of e){if(!o.solid)continue;let a=!o.walk&&o.y0<.3&&o.y1>=.45&&o.y1<=1.2,l=o.walk&&o.y1>=.6&&o.y1<=1.3&&Math.min(o.x1-o.x0,o.z1-o.z0)>=2;if(!(!a&&!l))for(let c of[0,1]){let h=c?o.z0:o.x0,d=c?o.z1:o.x1,u=c?this.z0:this.x0,f=c?o.x0:o.z0,p=c?o.x1:o.z1,x=c?this.x0:this.z0,m=Math.floor(h-t-u-.5),g=Math.ceil(d+t-u-.5),_=Math.ceil(f+.15-x-.5),M=Math.floor(p-.15-x-.5),v=(E,y)=>c?E*i+y:y*i+E,b=(E,y)=>c?n(y,E):n(E,y);for(let E=_;E<=M;E++){if(a&&d-h<=1.4&&b(m,E)&&b(g,E)){let y=v(m,E),S=v(g,E);if(Math.abs(this.ht[y]-this.ht[S])<.3&&r(y,S,o.y1+.35)&&r(y,S,o.y1+1.3)){let C=g-m+2.2;this.addLink(y,S,"vault",o.y1,C),this.addLink(S,y,"vault",o.y1,C)}}if(l)for(let[y,S]of[[m,Math.ceil(h+.05-u-.5)],[g,Math.floor(d-.05-u-.5)]]){if(!b(y,E)||!b(S,E))continue;let C=v(y,E),R=v(S,E),N=this.ht[R]-this.ht[C];Math.abs(this.ht[R]-o.y1)>.05||N<.6||N>1.3||!r(C,R,o.y1+.4)||!r(C,R,o.y1+1.4)||(this.addLink(C,R,"climb",o.y1,3.6),this.addLink(R,C,"drop",o.y1,2.6))}}}}}idx(e,t){let i=Math.floor(e-this.x0),n=Math.floor(t-this.z0);return i<0||n<0||i>=this.w||n>=this.h?-1:n*this.w+i}blocked(e,t){let i=this.idx(e,t);return i<0||this.blk[i]===1}height(e,t){let i=this.idx(e,t);return i<0?0:this.ht[i]}center(e){return{x:this.x0+e%this.w+.5,z:this.z0+(e/this.w|0)+.5,y:this.ht[e]}}snap(e,t){let i=this.idx(e,t);return i<0||this.blk[i]?null:this.center(i)}near(e,t){let i=this.idx(e,t);if(i>=0&&!this.blk[i])return i;let n=-1,r=1e9;for(let o=1;o<=8&&n<0;o++)for(let a=-o;a<=o;a++)for(let l=-o;l<=o;l++){if(Math.max(Math.abs(a),Math.abs(l))!==o)continue;let c=this.idx(e+a,t+l);if(c>=0&&!this.blk[c]){let h=a*a+l*l;h<r&&(r=h,n=c)}}return n}nearest(e,t){let i=this.near(e,t);return i<0?null:this.center(i)}line(e,t){let i=t.x-e.x,n=t.z-e.z,r=Math.hypot(i,n);if(r<.01)return!0;let o=Math.ceil(r/.35),a=-n/r*.3,l=i/r*.3,c=this.height(e.x,e.z);for(let h=0;h<=o;h++){let d=e.x+i*h/o,u=e.z+n*h/o;if(this.blocked(d,u)||this.blocked(d+a,u+l)||this.blocked(d-a,u-l))return!1;let f=this.height(d,u);if(Math.abs(f-c)>.56||Math.abs(this.height(d+a,u+l)-f)>.56||Math.abs(this.height(d-a,u-l)-f)>.56)return!1;c=f}return!0}path(e,t,i,n,r=1e9){let o=this.near(e,t),a=this.near(i,n);if(o<0||a<0)return null;let l=this.w,c=this.h,h=this.blk,d=this.gs,u=this.pa,f=this.st,p=this.cl,x=this.ht,m=this.via,g=++this.stamp,_=this.hk,M=this.hv;_.length=M.length=0;let v=a%l,b=a/l|0,E=F=>{let H=Math.abs(F%l-v),B=Math.abs((F/l|0)-b);return H+B-.586*Math.min(H,B)},y=(F,H)=>{let B=_.length;for(_.push(F),M.push(H);B>0;){let J=B-1>>1;if(_[J]<=F)break;_[B]=_[J],M[B]=M[J],B=J}_[B]=F,M[B]=H},S=()=>{let F=M[0],H=_.pop(),B=M.pop(),J=_.length;if(J){let X=0;for(;;){let q=X*2+1;if(q>=J||(q+1<J&&_[q+1]<_[q]&&q++,_[q]>=H))break;_[X]=_[q],M[X]=M[q],X=q}_[X]=H,M[X]=B}return F},C=(F,H,B,J)=>{f[H]===g&&B>=d[H]||(f[H]=g,d[H]=B,u[H]=F,m[H]=J,y(B+E(H),H))};d[o]=0,u[o]=-1,f[o]=g,m[o]=null,y(E(o),o);let R=0,N=o===a;for(;_.length&&!N;){let F=S();if(F===a){N=!0;break}if(p[F]===g)continue;if(p[F]=g,++R>14e3||d[F]>r)return null;let H=F%l,B=F/l|0,J=x[F];for(let q=0;q<8;q++){let te=H+bv[q],me=B+Sv[q];if(te<0||me<0||te>=l||me>=c)continue;let Ee=me*l+te;h[Ee]||Math.abs(x[Ee]-J)>.56||q>3&&(h[B*l+te]||h[me*l+H])||C(F,Ee,d[F]+(q>3?1.414:1),null)}let X=this.links.get(F);if(X)for(let q of X)C(F,q.to,d[F]+q.cost,q)}if(!N)return null;let D=[];for(let F=a;F!==-1;F=u[F]){let H=this.center(F);m[F]&&(H.link=m[F]),D.push(H)}if(D.reverse(),this.idx(i,n)===a&&(D[D.length-1].x=i,D[D.length-1].z=n),D.length<2)return D;let k=[],L=0;for(;L<D.length-1;){if(D[L+1].link){k.push(D[L+1]),L++;continue}let F=Math.min(D.length-1,L+40);for(let H=L+1;H<=F;H++)if(D[H].link){F=H-1;break}for(;F>L+1&&!this.line(D[L],D[F]);)F--;k.push(D[F]),L=F}return k.cost=d[a],k}};function Tv(s,e){let t=[],i=(n,r,o,a=.27)=>{for(let l of s)if(l.solid&&l.y1>o+.5&&l.y0<o+1.6&&n+a>l.x0&&n-a<l.x1&&r+a>l.z0&&r-a<l.z1)return!1;return!0};for(let n of s){if(!n.solid||!n.sight||!n.bullet||n.walk||n.nocover)continue;let r=n.x1-n.x0,o=n.z1-n.z0,a=(n.x0+n.x1)/2,l=(n.z0+n.z1)/2;if(!(Math.max(r,o)<.8||Math.max(r,o)>70))for(let[c,h]of[[1,0],[-1,0],[0,1],[0,-1]]){let d=c?o:r,u=c?0:1,f=c?1:0,p=a+c*r/2,x=l+h*o/2,m=d<=.95?[[0,[1,-1]]]:[[d/2-.3,[1]],[-(d/2-.3),[-1]]];if(d>3.2)for(let g=-(d/2)+1.6;g<d/2-1.5;g+=1.7)m.push([g,[]]);for(let[g,_]of m){let M=p+c*.48+u*g,v=x+h*.48+f*g;if(e.idx(M,v)<0)continue;let b=e.height(M,v),E=n.y1-b;if(E<.85||n.y0>b+.45||!i(M,v,b))continue;let y=E>=1.6,S=e.nearest(M,v);if(!S||Math.hypot(S.x-M,S.z-v)>1.5||Math.abs(S.y-b)>.3||!i((M+S.x)/2,(v+S.z)/2,b,.2))continue;let C=_.filter(R=>i(M+u*R*.62,v+f*R*.62,b,.18)&&i(M+u*R*.62-c*.5,v+f*R*.62-h*.5,b,.12));!C.length&&y||t.push({x:M,z:v,y:b,nx:c,nz:h,tx:u,tz:f,sides:C,over:!y,high:y,cell:S,id:t.length,user:null})}}}return t}function bt(s,e,t,i,n,r,o,a,l=[],c=.3,h={}){let d=n===o,u=d?i:n,f=d?r:o,p=(m,g,_,M)=>{if(g-m<.02||M-_<.02)return;let v=(m+g)/2,b=g-m;d?s.box(e,t,v,_,n,b,M-_,c,h):s.box(e,t,i,_,v,c,M-_,b,h)},x=u-c/2;for(let m of[...l].sort((g,_)=>g.a-_.a))p(x,m.a,0,a),m.sill&&p(m.a,m.b,0,m.sill),p(m.a,m.b,m.top??2.3,a),x=m.b;p(x,f+c/2,0,a)}function nc(s,e,t,i,n,r,o,a,l={},c=.3){bt(s,e,t,i,n,r,n,a,l.n,c),bt(s,e,t,i,o,r,o,a,l.s,c),bt(s,e,t,i,n,i,o,a,l.w,c),bt(s,e,t,r,n,r,o,a,l.e,c)}function mt(s,e,t,i=1,n=0,r=6114356){s.box("wood",r,e,n,t,i,i,i,{rot:0})}function Zi(s,e,t,i=4872776){if(s.prop("barrel",e,0,t,s.rng()*6,.92,{tint:i===4872776?9083520:16777215}))return s.collider(e-.33,0,t-.33,e+.33,1.05,t+.33);s.geo("metal",i,new gt(.33,.33,1,10),qt(e,.5,t)),s.collider(e-.33,0,t-.33,e+.33,1,t+.33)}function Ji(s,e,t,i,n){let r=n?i:.75,o=n?.75:i;s.box("plain",6971462,e,0,t,r,.7,o,{col:!1}),s.box("plain",6248255,e,.7,t,r*.96,.35,o*.7,{col:!1}),s.collider(e-r/2,0,t-o/2,e+r/2,1.05,t+o/2)}function Ev(s,e,t,i,n,r=1){let o=i?6.1:2.5,a=i?2.5:6.1;for(let l=0;l<r;l++){let c=l?.15:0;s.prop((n>>4)%2?"container_red":"container_green",e+c,l*2.6-.04,t,i?0:Math.PI/2,[6.1/5.71,1,2.5/2.56],{tint:[11580600,9344152,10789016][(n>>8)%3]})?s.collider(e+c-o/2,l*2.6,t-a/2,e+c+o/2,l*2.6+2.6,t+a/2):s.box("metal",n,e+c,l*2.6,t,o,2.6,a,{tint:.2})}}function sc(s,e,t,i,n=4015410,r=5198656){let o=Math.cos(i),a=Math.sin(i),l=(p,x)=>[e+p*o+x*a,t-p*a+x*o],c=Math.abs(o)*1.3+Math.abs(a)*3.3,h=Math.abs(a)*1.3+Math.abs(o)*3.3,[d,u]=l(0,-.5);if(s.collider(d-c,0,u-h,d+c,2.9,u+h),s.prop("vehicle_truck",e,0,t,i,1.18,{tint:n===4015410?6186576:7370108}))return;let f=(p,x,m,g,_,M,v,b)=>{let[E,y]=l(m,_);s.box(p,x,E,g,y,M,v,b,{rot:i,col:!1})};f("plain",1842463,0,.55,0,1.2,.35,6.2),f("plain",n,0,.9,-2.3,2.3,1.75,1.7),f("plain",n,0,.9,-3.5,2.1,.9,.9),f("plain",n,0,.95,1,2.4,.25,4.3),f("plain",r,0,1.2,1,2.3,1.6,4.2)}var wp=["pine_1","pine_2"],Xo=16,Rp=(s,e)=>Math.floor((s+200)/Xo)+"|"+Math.floor((e+200)/Xo),wv=new ni({vertexColors:!0}),ic=null;function Av(){if(ic)return ic;let s=(t,i,n,r)=>{let o=t.attributes.position.count,a=new Float32Array(o*3);for(let l=0;l<o;l++)a[l*3]=i,a[l*3+1]=n,a[l*3+2]=r;return t.setAttribute("color",new pt(a,3)),t},e=[s(new gt(.1,.24,4.2,5,1,!0).translate(0,2.1,0),.2,.12,.08)];return[[2.35,2.6,2.2],[1.8,2.5,3.8],[1.15,2.4,5.3]].forEach(([t,i,n],r)=>e.push(s(new es(t,i,7,1,!0).rotateY(r*.5).translate(0,n+i/2-.6,0),.085,.15,.07))),ic=Jl(e.map(t=>{let i=t.toNonIndexed();return i.deleteAttribute("uv"),i})),ic}function Cp(s,e){let t=s.lodDist||34;for(let i in s.lod){let n=s.lod[i],r=Math.hypot(n.x-e.x,n.z-e.z),o=r<(n.near?t+3:t-3);if(!(o===n.near&&n.init)){n.near=o,n.init=!0;for(let a of n.full)a.visible=o;n.lod&&(n.lod.visible=!o)}}}function Ap(s,e,t,i=!0){let n=s.rng,r=7+n()*5,o=.2+n()*.16;if(Rt.parts.pine_1){let a=i?wp[Math.floor(n()*wp.length)]:"pine_2",l=1.25+n()*.55,c=n()*6.283,h=[8162432,7241332,6582888][Math.floor(n()*3)];i&&s.prop(a,e,-.1,t,c,l,{shadow:!0,tint:h,cell:Xo});let d=i?Rp(e,t):"border";(s.lodInst[d]||(s.lodInst[d]=[])).push({m:qt(e,-.1,t,0,c,0,l,l,l),tint:h}),i&&s.canopy.push(qt(e,4.6*l,t,0,0,0,2.3*l,5.2*l,2.3*l)),i&&s.collider(e-.3,0,t-.3,e+.3,6,t+.3);return}s.geo("wood",3483935,new gt(o*.55,o,r,6),qt(e,r/2,t),{uv:2}),i&&s.collider(e-o,0,t-o,e+o,r,t+o);for(let a=0;a<3;a++){let l=r*.34+a*r*.22,c=(2.5-a*.65)*(.8+n()*.4);s.geo("grass",1781020,new es(c,r*.36,7),qt(e,l+r*.18,t,0,n()*6,0),{uv:3})}}function Cu(s,e,t,i,n=!0){let r=s.rng,o=i*(.8+r()*.5),a=i*(.6+r()*.5),l=i*(.8+r()*.5);if(Rt.parts.rock_medium_1){let c="rock_medium_"+(1+Math.floor(r()*3)),h=Rt.parts[c].box,d=2/(h.max.x-h.min.x),u=Math.floor(r()*4)*Math.PI/2;s.prop(c,e,-.12*a,t,u,[o*d,a*.95/h.max.y,l*d],{tint:8028294}),n&&s.collider(e-o*.86,0,t-l*.86,e+o*.86,a*.9,t+l*.86);return}s.geo("concrete",4672332,new vo(1,0),qt(e,a*.3,t,r()*3,r()*3,r()*3,o,a,l),{uv:2}),n&&s.collider(e-o*.72,0,t-l*.72,e+o*.72,a*.95,t+l*.72)}function Rv(s,e,t){let i=s.rng;if(!s.prop("bush_common",e,-.05,t,i()*6.283,[.85+i()*.3,.8+i()*.25,.85+i()*.3],{shadow:!1,tint:6977122}))for(let n=0;n<3;n++)s.geo("grass",2241823,new Mo(.65+i()*.35,0),qt(e+(i()-.5)*.9,.5+i()*.3,t+(i()-.5)*.9,i()*3,i()*3,0),{uv:2});s.collider(e-.8,0,t-.8,e+.8,1.3,t+.8,{solid:!1,bullet:!1})}function fn(s,e,t,i,n,r,o,a,l){let c=new ci(t,i,n,1.6);return c.position.set(r,o,a),e.add(c),c.userData.base=i,s.lights.push(c),l&&s.dyn.push({l:c,base:i,kind:l}),c}function Cv(s,e,t){let i=s.rng;s.box("grass",3095847,0,-1,0,180,1,180,{col:!1,tint:0});let n=[[-6,62],[-8,36],[0,18],[0,2]];for(let d=0;d<n.length-1;d++){let[u,f]=n[d],[p,x]=n[d+1],m=p-u,g=x-f;s.box("dirt",4800048,(u+p)/2,0,(f+x)/2,3.6,.02+d*.004,Math.hypot(m,g)+2,{rot:Math.atan2(m,g),col:!1,tint:0})}s.box("dirt",4602927,0,0,-12,37,.015,31,{col:!1,tint:0});let r={sight:!1},o=(d,u,f,p,x)=>{bt(s,"fence",9080982,d,u,f,p,2.4,x.map(_=>({..._,top:99})),.1,r);let m=u===p,g=Math.round((m?f-d:p-u)/3.7);for(let _=0;_<=g;_++){let M=(m?d:u)+(m?f-d:p-u)*_/g;x.some(v=>M>v.a-.2&&M<v.b+.2)||s.box("plain",3948612,m?M:d,0,m?u:M,.12,2.5,.12,{col:!1})}};o(-18.5,3.5,18.5,3.5,[{a:-3,b:3}]),o(-18.5,-27.5,18.5,-27.5,[{a:-14,b:-10}]),o(-18.5,-27.5,-18.5,3.5,[{a:-8,b:-5}]),o(18.5,-27.5,18.5,3.5,[{a:-14,b:-10}]),nc(s,"wood",4931635,-14.5,-24.5,-5.5,-16.5,3,{s:[{a:-11,b:-9}],w:[{a:-22,b:-20}],e:[{a:-21.5,b:-19.5,sill:1,top:2.1}]}),s.box("metal",3422774,-10,3,-20.5,9.8,.18,8.8),s.box("wood",4011049,-10,0,-20.5,9,.04,8,{col:!1}),s.box("wood",5917238,-7.3,0,-23.3,2,.8,.9),s.box("wood",4470824,-12.6,0,-23.7,2.2,1.9,.5),s.box("emis",16767392,-10,2.78,-20.5,.25,.06,.25,{col:!1,tint:0}),fn(e,t,16763274,14,13,-10,2.5,-20.5),nc(s,"wood",4538938,5.5,-24.5,15.5,-17.5,3,{s:[{a:9,b:11}],e:[{a:-22,b:-20}],w:[{a:-22.5,b:-20.5,sill:1,top:2.1}]}),s.box("metal",3422774,10.5,3,-21,10.8,.18,7.8),s.box("plain",4475448,7,0,-23.4,.95,.6,2),s.box("plain",4475448,14.2,0,-19.2,.95,.6,2),s.box("emis",12593696,7.5,1.3,-17.3,.3,.4,.06,{col:!1,tint:0});for(let[d,u]of[[-1.4,-1.4],[1.4,-1.4],[-1.4,1.4],[1.4,1.4]])s.box("wood",4142376,14+d,0,-1+u,.25,5,.25),s.box("wood",4142376,14+d,5.2,-1+u,.12,2,.12,{col:!1});s.box("wood",4865582,14,5,-1,3.4,.2,3.4),s.box("metal",3422774,14,7.2,-1,3.9,.15,3.9);for(let d of[-1,1])s.box("wood",4865582,14+d*1.65,5.2,-1,.08,.9,3.4,{col:!1}),s.box("wood",4865582,14,5.2,-1+d*1.65,3.4,.9,.08,{col:!1});s.box("emis",16773320,12.5,5.9,.6,.3,.3,.3,{col:!1,tint:0});let a=new As(16771520,500,60,.42,.6,1.5);a.position.set(12.5,6,.6),a.target.position.set(1,0,11),t.add(a,a.target),a.userData.base=500,e.lights.push(a),sc(s,-9,-6,0),sc(s,5,-10.5,Math.PI/2),mt(s,-2,-20.5,1.2),mt(s,-.8,-21.6,1),mt(s,-2,-20.5,.8,1.2),mt(s,10,-12,1.2),mt(s,11.3,-12.3,1),mt(s,-15,-1,1.2),mt(s,-15,-2.4,1),mt(s,15.5,-8,1.1),Ji(s,-5.5,6,3.4,!0),Ji(s,5.5,6,3.4,!0),Ji(s,-3,-13,3,!1),Ji(s,9,.5,3,!0),Zi(s,1,-22.5),Zi(s,1.8,-22.9,5914676),Zi(s,-16.5,-12),Zi(s,16.5,-24.5),s.box("metal",4936008,2.5,0,-16,1.8,1.2,1),s.box("plain",2895665,3.6,0,-16,.1,3.6,.1,{col:!1}),s.box("emis",16769192,3.6,3.6,-16,.3,.12,.3,{col:!1,tint:0}),fn(e,t,16766106,30,20,3.6,3.4,-16),s.box("plain",2895665,-16,0,-25,.12,9,.12,{col:!1}),bt(s,"concrete",5790295,-42.5,4.5,-34.5,4.5,2.6,[{a:-39,b:-37,top:99}]),bt(s,"concrete",5790295,-42.5,4.5,-42.5,11.5,1.4),bt(s,"concrete",5790295,-34.5,4.5,-34.5,9.5,2.6,[{a:6,b:7.5,sill:1,top:2}]),bt(s,"concrete",5790295,-42.5,11.5,-39.5,11.5,2.2),Cu(s,-36,11,.8,!1),Cu(s,-40.5,2.5,.7,!1),mt(s,-41,9.8,1);for(let[d,u,f]of[[32.5,17.5,.9],[38.5,15.5,.4]])s.geo("plain",5001019,new gt(.05,2,1.9,4),qt(d,.95,u,0,f,0)),s.collider(d-1.2,0,u-1.2,d+1.2,1.9,u+1.2);s.geo("wood",2760729,new gt(.12,.12,1,6),qt(35,.12,12,0,.5,Math.PI/2)),s.geo("wood",2760729,new gt(.12,.12,1,6),qt(35,.14,12,0,2.1,Math.PI/2)),s.geo("emis",16747056,new es(.22,.5,5),qt(35,.4,12),{tint:0}),fn(e,t,16747066,26,16,35,.9,12,"fire"),s.geo("wood",3483935,new gt(.3,.3,2.6,7),qt(33,.3,10.5,0,.3,Math.PI/2)),s.collider(31.8,0,10.1,34.2,.6,10.9),mt(s,37.5,11,.9),s.box("dirt",4866099,44,0,-46,9,.02,9,{col:!1,tint:0}),mt(s,48,-50,1.1),mt(s,40,-50.5,.9);let l=[[-6.6,54,5],[-38,8,7.5],[35,14,7.5],[44,-46,7],[54,22,4.5],[-54,-10,4.5],[-46,46,6],[48,44,6],[-38.5,-40.5,7.5]];nc(s,"concrete",5198672,-41.5,-43.5,-35.5,-39.5,2.6,{s:[{a:-39.5,b:-37.5}],e:[{a:-42.5,b:-41,sill:1,top:1.9}]}),s.box("concrete",4606535,-38.5,2.6,-41.5,6.6,.25,4.6),Ji(s,-35,-37.2,3,!0),mt(s,-43.3,-38.5,1.1),s.box("dirt",4602927,-38.5,0,-39,9,.015,9,{col:!1,tint:0}),s.box("dirt",4866099,-46,0,46,8,.02,8,{col:!1,tint:0}),s.box("dirt",4866099,48,0,44,8,.02,8,{col:!1,tint:0});let c=(d,u,f=0)=>{if(d>-21-f&&d<21+f&&u>-30-f&&u<6+f)return!1;for(let[p,x,m]of l)if(Math.hypot(d-p,u-x)<m+f)return!1;for(let p=0;p<n.length-1;p++){let[x,m]=n[p],[g,_]=n[p+1],M=g-x,v=_-m,b=Math.max(0,Math.min(1,((d-x)*M+(u-m)*v)/(M*M+v*v)));if(Math.hypot(d-x-M*b,u-m-v*b)<3+f)return!1}return!0},h=[];for(let d=0;d<900&&h.length<150;d++){let u=(i()-.5)*114,f=(i()-.5)*114;!c(u,f)||h.some(p=>Math.hypot(p[0]-u,p[1]-f)<3.4)||(h.push([u,f]),Ap(s,u,f))}for(let d=0;d<46;d++){let u=d/46*6.283,f=60+i()*9,p=Math.cos(u),x=Math.sin(u),m=f/Math.max(Math.abs(p),Math.abs(x));Ap(s,p*m,x*m,!1)}for(let d=0,u=0;d<200&&u<24;d++){let f=(i()-.5)*108,p=(i()-.5)*108;c(f,p,1)&&(Cu(s,f,p,1+i()*1.3),u++)}for(let d=0,u=0;d<200&&u<10;d++){let f=(i()-.5)*100,p=(i()-.5)*100;if(!c(f,p,2))continue;let x=i()*3.14,m=4+i()*2;s.geo("wood",3155228,new gt(.36,.42,m,7),qt(f,.36,p,0,x,Math.PI/2),{uv:2});let g=Math.abs(Math.cos(x))*m/2+.3,_=Math.abs(Math.sin(x))*m/2+.3;s.collider(f-g,0,p-_,f+g,.75,p+_),u++}for(let d=0,u=0;d<300&&u<55;d++){let f=(i()-.5)*110,p=(i()-.5)*110;c(f,p,.5)&&(Rv(s,f,p),u++)}for(let d=0;d<520;d++){let u=(i()-.5)*112,f=(i()-.5)*112;c(u,f,-1.5)&&s.prop("grass_common_short",u,0,f,i()*6.283,[.7+i()*.6,.35+i()*.3,.7+i()*.6],{shadow:!1,tint:5267530})}for(let d=0;d<110;d++){let u=(i()-.5)*108,f=(i()-.5)*108;c(u,f,0)&&s.prop("fern_1",u,0,f,i()*6.283,.09+i()*.05,{shadow:!1,tint:5925458})}s.prop("watertower",15.5,0,-13.5,0,.85,{tint:9080724})&&(s.collider(14.4,0,-14.6,16.6,5.4,-12.4,{sight:!1,bullet:!1,nocover:!0}),s.collider(14.4,5.4,-14.6,16.6,8,-12.4)),s.prop("wheels_stack",-16.8,0,-16,.4,1.5,{col:!0,shrink:.9}),s.prop("wheels_stack",12.5,0,-15.8,1.2,1.5,{col:!0,shrink:.9}),s.prop("pallet",-2,0,-20.5,0,1.4,{}),s.prop("pallet",10.5,0,-12.1,.2,1.7,{}),s.prop("trafficbarrier_1",-1.9,0,9.5,.15,1,{col:!0,shrink:.85,sight:!1}),s.prop("trafficbarrier_1",2.2,0,12.5,-.1,1,{col:!0,shrink:.85,sight:!1});for(let[d,u,f,p]of[[-59,-59,59,-58],[-59,58,59,59],[-59,-59,-58,59],[58,-59,59,59]])s.collider(d,0,u,f,12,p,{sight:!1});return{name:"FOREST OUTPOST",bounds:{x0:-60,x1:60,z0:-60,z1:60},spawn:{x:-6.6,z:54,yaw:0},env:{fog:[659479,.021],bg:461586,hemi:[8427200,2305052,2.9],moon:[10795494,3.4,[-35,60,30]],viewRange:40,detect:.75,shotMul:1,amb:"forest"},objective:{pos:[-7.3,.8,-23.3],kind:"intel",hold:0,prompt:"Take intelligence package",text:"Locate the intelligence package in the outpost command hut",done:"INTEL SECURED"},extraction:{pos:[44,0,-46],text:"Reach the extraction flare in the north-east clearing"},routes:[{p:[[-3,-3],[-3,-14],[8,-14],[8,-3]],must:1},{p:[[0,7],[3.5,8]]},{p:[[-22,2],[-22,-29],[-10,-31]]},{p:[[22,-26],[22,2],[12,8]]},{p:[[-8,20],[-8,12],[1,10]]},{p:[[-36,9],[-39,2],[-32,2]]},{p:[[34,9],[39,11],[30,13]]},{p:[[10,-36],[30,-40],[36,-30],[20,-31]]},{p:[[-9,-14],[-3,-18]],must:1},{p:[[25,35],[40,30],[30,23]]}],posts:{objective:[[-9.5,-14.5],[-16.5,-21],[-10,-20.5],[-3.5,-19]],entrance:[[-4.5,1.5,"south gate"],[16,-12,"east breach"],[-12,-25.6,"north-west gap"],[-16.5,-6.5,"west gap"],[12,2,"watchtower"]]},panel:{x:7.5,z:-16.4,face:[0,-1],n:"barracks alarm"},guards:10,anchors:[{id:"hut",name:"command hut",at:[-7.3,.8,-23.3],stand:[-7.3,-22],indoor:1,posts:[[-9.5,-14.5],[-16.5,-21],[-10,-20.5],[-3.5,-19]]},{id:"barracks",name:"barracks",at:[12.8,0,-21.6],stand:[12,-20.6],indoor:1,posts:[[10,-15.5],[17,-21],[8,-20.5]]},{id:"tower",name:"watchtower",at:[11.6,0,2.2],stand:[10.8,1.6],indoor:1,posts:[[9.5,-2],[16.5,2.4],[12,6]]},{id:"ruin",name:"western ruin",at:[-40.3,0,8],stand:[-39.5,7],indoor:1,posts:[[-38,2.5],[-36,11],[-33,6]]},{id:"camp",name:"eastern camp",at:[36.3,0,13.6],stand:[35.6,14.3],indoor:1,posts:[[33,9],[39.5,11.5],[30.5,15]]},{id:"motorpool",name:"vehicle park",at:[-6.1,0,-4],stand:[-5.5,-3.2],posts:[[-3,-3],[-12,-1.5],[-6,-10.5]]},{id:"generator",name:"generator yard",at:[3.4,0,-17.5],stand:[3.4,-18.5],indoor:1,posts:[[0,-14],[6.5,-14.5],[-1,-18.5]]},{id:"bunker",name:"remote bunker",at:[-39.8,0,-42.2],stand:[-39,-41.5],indoor:1,posts:[[-38.5,-37.5],[-34,-41.5],[-37,-41.5]]}],entries:[{id:"south",name:"south road",x:-6.6,z:54,yaw:0},{id:"east",name:"eastern woods",x:54,z:22,yaw:Math.PI/2},{id:"west",name:"western woods",x:-54,z:-10,yaw:-Math.PI/2}],exits:[{id:"ne",name:"north-east clearing",pos:[44,0,-46]},{id:"sw",name:"south-west clearing",pos:[-46,0,46]},{id:"se",name:"south-east clearing",pos:[48,0,44]}],reinforce:[{x:-30,z:-55,n:"north treeline"},{x:-54,z:-18,n:"western treeline"},{x:-44,z:46,n:"south-west treeline"}],pickups:[["med",12.6,-23.6],["med",36.6,16.4],["ammo",-40,6.5],["ammo",-1,-19]]}}function Iv(s,e,t){let i=s.rng,n=8,r=5660006,o=6579807;s.box("concrete",3684667,0,-1,0,120,1,80,{col:!1,tint:0}),s.box("concrete",5921886,-7.5,0,0,56,.02,51,{col:!1,tint:0}),nc(s,"concrete",5264213,-47.5,-31.5,47.5,31.5,3.6,{},.4),s.box("metal",3422784,47.2,0,0,.15,3.2,7,{col:!1}),bt(s,"metal",r,-35.5,-25.5,20.5,-25.5,n,[{a:4,b:6,top:2.4}],.4),bt(s,"metal",r,-35.5,25.5,20.5,25.5,n,[{a:-8,b:-6,top:2.4}],.4),bt(s,"metal",r,-35.5,-25.5,-35.5,25.5,n,[{a:-1,b:1,top:2.4}],.4),bt(s,"metal",r,20.5,-25.5,20.5,25.5,n,[{a:-13,b:-7,top:4.6},{a:7,b:13,top:4.6}],.4),s.box("metal",2895926,-7.5,n,0,57,.3,52);for(let c=-31;c<=17;c+=8)s.box("plain",2303530,c,7.3,0,.25,.5,51,{col:!1});bt(s,"concrete",o,-20.5,-25.5,-20.5,-12.5,4,[{a:-20,b:-18}]),bt(s,"concrete",o,-35.5,-12.5,-20.5,-12.5,4,[{a:-29,b:-27},{a:-25,b:-22.5,sill:1,top:2.2}]),s.box("concrete",5592922,-28,4,-19,15.3,.25,13.3),mt(s,-24,-16,1.2,4.25),mt(s,-30,-21,1,4.25,5200456),s.box("metal",4080714,-34.3,0,-22,1,.8,2.4);for(let c=-33;c<=-24;c+=1.5)s.box("plain",1382170,c,0,-24.7,.9,2.1,.8),s.box("emis",i()<.5?3735418:16756784,c-.2,1.5+i()*.3,-24.28,.06,.03,.02,{col:!1,tint:0});s.box("metal",4541008,-26.5,0,-18,2.2,.8,1.1),bt(s,"concrete",o,-35.5,10.5,-20.5,10.5,n,[{a:-29,b:-27,top:2.6}]),bt(s,"concrete",o,-20.5,10.5,-20.5,25.5,n,[{a:17,b:19,top:2.6}]),s.box("metal",4477515,-31.5,0,19,3,2.6,5.5),s.box("metal",3819072,-31.5,2.6,19,1.6,1.2,2,{col:!1}),s.geo("metal",5919558,new gt(1.2,1.2,3.4,12),qt(-24.5,1.7,22.5)),s.collider(-25.6,0,21.4,-23.4,3.4,23.6),s.box("metal",4477515,-25,0,13.2,2.6,1.5,1.4),s.box("emis",16750648,-25,1.1,13.92,.5,.2,.02,{col:!1,tint:0}),s.geo("metal",4869973,new gt(.16,.16,14,8),qt(-28,5.2,24.8,0,0,Math.PI/2));for(let c of[-15,-11,-7])for(let h of[-12,12]){for(let d of[h-7.9,h,h+7.9])for(let u of[-.55,.55])s.box("plain",3033706,c+u,0,d,.1,6.9,.1,{col:!1});for(let d of[.12,2.3,4.4,6.3])if(s.box("plain",9064998,c,d,h,1.25,.1,16,{col:!1}),!(d>6))for(let u=h-7.8;u<h+7.2;){let f=.9+i()*1.1,p=d<4?1.75+i()*.3:.6+i()*1.1;(d<4||i()<.7)&&s.box("wood",i()<.5?7232064:5525567,c,d+.1,u+f/2,1.05,p,f,{col:!1,tint:.3}),u+=f+(d<4?.04:.3)}s.collider(c-.62,0,h-8,c+.62,6.9,h+8)}let a=[4282730,7224372,4481098,8153660,5133144];[[6,-19,1,2],[14.5,-18,0,1],[8,-12,1,1],[3,-4,0,1],[11,0,1,2],[5,9,1,1],[13,15,0,2],[4,19.5,1,1],[30,-24,1,1],[36,-15,0,2],[31,8,1,1],[40,22,1,1],[26,-2,0,1]].forEach(([c,h,d,u],f)=>Ev(s,c,h,!!d,a[f%5],u)),s.box("plain",9073696,-24,0,5,1.3,1.5,2.2),s.box("plain",1842463,-24,0,3.4,1.1,2.3,.15,{col:!1});for(let[c,h,d]of[[-31,-8,1.3],[-29.6,-8.2,1],[-31,-8,.9],[-30,6.5,1.2],[-3,22.5,1.2],[-1.6,22.8,1],[-2.5,-9,1.2],[17,-3,1.1],[9.5,5,1],[-18.5,-6,1.1],[-3,12,1.2]])mt(s,c,h,d,d===.9?1.3:0,i()<.5?6114356:5002304);Zi(s,-22,-9.5,3493994),Zi(s,-22.8,-8.8,6965812),Zi(s,18.5,3,3493994),Zi(s,-4,-23.5,6965812),Zi(s,1,14,3493994),s.box("concrete",6316644,13.9,0,22.65,11.8,1,5.3,{walk:!0}),[[7.8,.83],[7.4,.67],[7,.5],[6.6,.33],[6.2,.17]].forEach(([c,h])=>s.box("concrete",5790300,c,0,22.5,.4,h,3,{walk:!0,tint:0}));for(let c=8.2;c<=19.6;c+=1.9)s.box("plain",9073696,c,1,20.08,.06,1,.06,{col:!1});s.box("plain",9073696,13.9,1.95,20.08,11.6,.06,.06,{col:!1}),s.box("plain",9073696,13.9,1.5,20.08,11.6,.04,.04,{col:!1}),mt(s,17.3,24.2,1.1,1),mt(s,11,24.4,1,1,5002304),mt(s,14.5,21,1,1),s.box("emis",12593696,-20.3,1.3,-15,.06,.4,.3,{col:!1,tint:0}),s.box("metal",3751492,-3,5,-24.3,32,.12,1.7);for(let c=-19;c<=13;c+=4)s.box("plain",2764081,c,0,-23.55,.12,5,.12,{col:!1}),s.box("plain",2764081,c,5.1,-23.5,.06,1,.06,{col:!1});s.box("plain",2764081,-3,6.05,-23.5,32,.06,.06,{col:!1}),s.geo("metal",6048314,new gt(.22,.22,54,8),qt(-7.5,6.6,24.6,0,0,Math.PI/2)),s.geo("metal",4805210,new gt(.15,.15,50,8),qt(-34.9,6.2,0,Math.PI/2,0,0));let l=(c,h,d,u,f,p,x)=>{s.box("plain",1710877,c,h+.1,d,.03,7.25-h,.03,{col:!1}),s.box("plain",2369322,c,h+.06,d,.7,.12,.7,{col:!1}),s.box("emis",u,c,h,d,.5,.06,.5,{col:!1,tint:0}),fn(e,t,u,f,p,c,h-.3,d,x)};l(-3,6.2,0,16769712,95,26),l(9,6.2,-15,16769712,80,24,"flicker"),l(10,6.2,12,16769712,80,24),l(-13,6.2,-22.5,14674175,50,20),l(-27,6.2,-1,16769712,70,22),l(-13,6.2,22.5,14674175,36,18),s.box("emis",13624575,-28,3.94,-19,1.2,.04,.3,{col:!1,tint:0}),fn(e,t,12375807,20,14,-28,3.5,-19),fn(e,t,16751178,22,15,-28,4,17);for(let[c,h]of[[31,-11],[35,14]])s.box("plain",2764081,c,0,h,.18,6,.18),s.box("emis",16773328,c,5.9,h+.3,.3,.1,.5,{col:!1,tint:0}),fn(e,t,16772300,70,26,c,5.6,h+.3);s.box("emis",16773328,-35.9,4.4,4,.1,.2,.5,{col:!1,tint:0}),fn(e,t,16772300,40,20,-36.6,4.2,4),sc(s,27,19,Math.PI/2,3817286,3093304),sc(s,-43.5,-11,0,2895667,2895667),s.box("metal",3494202,-38,0,7.5,1.4,1.3,2.4),s.box("metal",3494202,-12,0,-30.2,2.4,1.3,1.4),s.box("metal",3494202,6,0,30.2,2.4,1.3,1.4),mt(s,-25,30.3,1.2),mt(s,14,-30.3,1.2),mt(s,-40,13,1.1),mt(s,44,-8,1.2),mt(s,23,-27,1.2),Zi(s,22.5,14.5),Zi(s,-45.5,10),Ji(s,24.5,-10,3,!1),Ji(s,24.5,10,3,!1);for(let[c,h,d]of[[33,2,0],[34.8,2.2,.1],[29,-17,1.57],[-39.5,-3,1.57],[-10,29.6,0],[10,-29.4,0],[-4,5.5,0],[-2.2,5.6,.05],[-4.5,-6,0]])s.prop("plasticbarrier",c,0,h,d,1.65,{col:!0,shrink:.9});for(let[c,h,d]of[[-18.6,7,0],[18.6,-20,0],[-33.5,24,1.57],[43,12,0],[-45.6,-3,0]])s.prop("pipes",c,0,h,d,1.5,{col:!0,shrink:.92});for(let[c,h]of[[-3.2,-12],[15,6.5],[-31.5,2],[38,-26],[-22.5,12.2]])s.prop("pallet",c,0,h,i()*.4,1.5,{}),s.prop("cinderblock",c-.2,.2,h,.2,1.6,{}),s.prop("cinderblock",c+.4,.2,h+.3,1.4,1.6,{});return s.prop("wheels_stack",22.3,0,-18.5,0,1.6,{col:!0,shrink:.9}),s.prop("wheels_stack",-46,0,14,.5,1.6,{col:!0,shrink:.9}),s.prop("wheels_stack",17.8,0,17,.9,1.6,{col:!0,shrink:.9}),s.prop("streetlights",31,0,-11,Math.PI/2,.92,{}),s.prop("streetlights",35,0,14,Math.PI/2,.92,{}),s.box("emis",1456672,-43,0,4,3.4,.03,3.4,{col:!1,tint:0}),{name:"INDUSTRIAL WAREHOUSE",bounds:{x0:-48,x1:48,z0:-32,z1:32},spawn:{x:44.5,z:27,yaw:Math.PI/2},env:{fog:[395275,.012],bg:329482,hemi:[5924480,1447964,.75],moon:[9414358,1.5,[30,60,-22]],viewRange:44,detect:1,shotMul:.85,amb:"warehouse"},objective:{pos:[-34.3,.8,-22],kind:"terminal",hold:3,prompt:"Hold to access secured terminal",text:"Access the secured terminal in the warehouse office",done:"DATA EXTRACTED"},extraction:{pos:[-43,0,4],text:"Exfiltrate through the west back lot"},routes:[{p:[[-18,0],[-2,0],[-2,-22],[-18,-22]]},{p:[[-18,2],[-18,22],[-3,20],[-2,3]]},{p:[[11,-22],[17.5,-22],[17.5,-9],[12,-6]]},{p:[[9,4],[17,10],[12,22.5],[18,22.5]]},{p:[[-28,-18],[-23.5,-15]],must:1},{p:[[-28,-8],[-28,5],[-23,-1]],must:1},{p:[[-28,14],[-23,18],[-28,23]]},{p:[[24,-20],[34,-20.5],[42,-9],[30,-6]]},{p:[[-30,-28.5],[15,-28.5]]},{p:[[-30,28.5],[2,28.5]]},{p:[[-41,-4],[-41,13],[-38,1]]}],posts:{objective:[[-28,-19],[-27.5,-11.3],[-19.2,-19],[-24,-21]],entrance:[[18,-10,"north loading door"],[18,10,"south loading door"],[-33,0,"west door"],[5,-23.5,"north door"],[-7,23.5,"south door"]]},panel:{x:-19.5,z:-15,face:[-1,0],n:"office alarm"},guards:10,anchors:[{id:"office",name:"administration office",at:[-34.3,.8,-22],stand:[-33,-22],indoor:1,posts:[[-28,-19],[-27.5,-11.3],[-19.2,-19],[-24,-21]]},{id:"machine",name:"machine room",at:[-27,0,15.2],stand:[-27.8,16],indoor:1,posts:[[-28,13.5],[-27,21],[-22.5,16.5]]},{id:"dock",name:"loading dock",at:[15.6,1,23.9],stand:[15.6,22.9],indoor:1,posts:[[12,22.5],[18.4,21.6],[9.5,17.5]]},{id:"containers",name:"container storage",at:[11.3,0,-16.2],stand:[11.3,-15.3],indoor:1,posts:[[11,-22.2],[16.8,-13.5],[1,-15]]},{id:"westbay",name:"west bay",at:[-33.7,0,-5],stand:[-32.8,-4.4],indoor:1,posts:[[-28,-8],[-25,2],[-31,8.6]]},{id:"yard",name:"loading yard",at:[31.8,0,19],stand:[32.6,18.2],posts:[[33,12.5],[25.5,14],[38,19]]},{id:"alley",name:"north service alley",at:[-22,0,-30.3],stand:[-22,-29.3],posts:[[-28,-28.8],[-14,-28.8],[-22,-27.5]]}],entries:[{id:"yard",name:"south-east yard",x:44.5,z:27,yaw:Math.PI/2},{id:"nw",name:"north-west corner",x:-45,z:-29,yaw:-Math.PI/2},{id:"south",name:"south alley",x:-24,z:29.4,yaw:-Math.PI/2}],exits:[{id:"west",name:"west back lot",pos:[-43,0,4]},{id:"east",name:"east gate",pos:[44.5,0,-2]},{id:"north",name:"north alley",pos:[17.5,0,-29.2]}],reinforce:[{x:45,z:-1,n:"east gate"},{x:45,z:-28,n:"north-east service gate"}],pickups:[["med",-33.8,12.2],["med",-22,-24],["ammo",-17.6,-2.6],["ammo",23,16]]}}var Ip={};function Pp(s,e){Ip[s]=e}function Lp(s,e){let t=new Iu,i={id:s,dyn:[],lights:[]};Object.assign(i,(Ip[s]||(s==="forest"?Cv:Iv))(t,i,e)),i.meshes=t.finish(e),i.colliders=t.col,i.nav=new Pu(t.col,i.bounds),i.cover=Tv(t.col,i.nav),i.lod=t.lod;let n=i.env;e.fog=new oo(n.fog[0],n.fog[1]),e.background=new be(n.bg),i.hemi=new ns(n.hemi[0],n.hemi[1],n.hemi[2]),e.add(i.hemi);let r=i.moon=new qi(n.moon[0],n.moon[1]);i.moonDir=new P(...n.moon[2]).normalize(),r.castShadow=!0,r.shadow.mapSize.set(2048,2048);let o=r.shadow.camera;o.left=o.bottom=-48,o.right=o.top=48,o.near=1,o.far=220,r.shadow.bias=-6e-4,r.shadow.normalBias=.06,e.add(r,r.target);let a=[],l=Lu(7);for(let d=0;d<500;d++){let u=l()*6.283,f=.08+l()*.9,p=Math.sqrt(1-f*f);a.push(Math.cos(u)*p*380,f*380,Math.sin(u)*p*380)}let c=new at;c.setAttribute("position",new Ke(a,3)),e.add(new Cn(c,new sn({color:11452392,size:1.4,sizeAttenuation:!1,fog:!1})));let h=new ke(new yo(13,24),new nt({color:14674175,fog:!1}));return h.position.copy(i.moonDir).multiplyScalar(360),h.lookAt(0,0,0),e.add(h),i}var xt={ak:{slot:"primary",name:"AK-47",desc:"Hard hitting, heavy recoil",auto:!0,dmg:36,rpm:600,mag:30,reserve:120,recoil:1.45,recoilH:.5,hip:2.1,ads:.2,reload:2.6,adsT:.24,move:.93,kick:.07,noise:44,falloff:[35,.75],optics:["iron","reddot","holo","scope"],muzzle:1,grip:1,laser:1},m4:{slot:"primary",name:"M4A1",desc:"Balanced, controllable",auto:!0,dmg:28,rpm:780,mag:30,reserve:150,recoil:.82,recoilH:.26,hip:1.5,ads:.13,reload:2.1,adsT:.19,move:.97,kick:.045,noise:42,falloff:[40,.8],optics:["iron","reddot","holo","scope"],muzzle:1,grip:1,laser:1},sniper:{slot:"primary",name:"L96 SNIPER",desc:"Bolt-action precision rifle, 4\u201310x scope",auto:!1,bolt:1.25,dmg:115,rpm:46,mag:5,reserve:25,recoil:5.2,recoilH:.9,hip:6,ads:0,reload:3.3,adsT:.36,move:.86,kick:.17,noise:62,optics:["vscope","scope"],muzzle:1,head:3,rk:"bolt",ins:.55},dmr:{slot:"primary",name:"SR-9 DMR",desc:"Semi-auto marksman rifle, scoped",auto:!1,dmg:68,rpm:230,mag:10,reserve:50,recoil:2.7,recoilH:.5,hip:3.4,ads:.03,reload:2.8,adsT:.3,move:.9,kick:.11,noise:50,optics:["scope","vscope"],muzzle:1,head:3},pistol:{slot:"secondary",name:"P9 PISTOL",desc:"Fast handling sidearm",auto:!1,dmg:30,rpm:420,mag:15,reserve:60,recoil:1.25,recoilH:.3,hip:1.2,ads:.3,reload:1.4,adsT:.12,move:1.06,kick:.085,noise:36,falloff:[20,.65],optics:["iron"],muzzle:1,laser:1,rk:"pistol",ins:.55},smg:{slot:"secondary",name:"VK-9 SMG",desc:"High rate of fire, short range",auto:!0,dmg:21,rpm:900,mag:30,reserve:120,recoil:.6,recoilH:.36,hip:1.3,ads:.3,reload:1.9,adsT:.14,move:1.03,kick:.035,noise:38,falloff:[16,.6],optics:["iron","reddot","holo"],muzzle:1,grip:1,laser:1},shotgun:{slot:"secondary",name:"M590 SHOTGUN",desc:"8 pellets, devastating up close",auto:!1,pellets:8,dmg:15,rpm:72,mag:6,reserve:30,recoil:4.4,recoilH:.8,hip:3.2,ads:2.5,reload:.62,shells:1,rk:"shell",ins:.6,adsT:.2,move:.95,kick:.15,noise:48,falloff:[9,.35],optics:["iron","reddot"],laser:1},knife:{slot:"melee",name:"COMBAT KNIFE",desc:"Silent. Lethal from behind",melee:!0,dmg:70,range:2.1,rate:.6,move:1.1,mag:0,reserve:0}},Fs={iron:{name:"Iron sights",fov:58,eye:.3},reddot:{name:"Red dot",fov:55,eye:.19,ret:"dot"},holo:{name:"Holographic",fov:52,eye:.19,ret:"holo"},scope:{name:"4x scope",zoom:[4,4],eye:.085,ret:"scope",adsT:.06,desc:"fixed 4x"},vscope:{name:"4\u201310x variable",zoom:[4,10],eye:.085,ret:"scope",adsT:.1,desc:"mouse wheel adjusts zoom"}},Hn={assault:{name:"ASSAULT",desc:"3 frag \xB7 1 flash \xB7 1 medkit \xB7 2 stims",frag:3,flash:1,smoke:0,med:1,stim:2},recon:{name:"RECON",desc:"1 frag \xB7 2 flash \xB7 2 smoke \xB7 2 medkits \xB7 1 stim",frag:1,flash:2,smoke:2,med:2,stim:1},medic:{name:"MEDIC",desc:"1 frag \xB7 1 flash \xB7 1 smoke \xB7 3 medkits \xB7 3 stims",frag:1,flash:1,smoke:1,med:3,stim:3}},Pv=s=>({optic:xt[s].optics?xt[s].optics[0]:"iron",muzzle:!1,grip:!1,laser:s==="m4"});function Lv(){let s={};for(let e in xt)xt[e].melee||(s[e]=Pv(e));return{primary:"m4",secondary:"pistol",kit:"assault",att:s}}function Dp(){let s=Lv();try{let e=JSON.parse(localStorage.getItem("sp2_loadout")||"null");if(e&&xt[e.primary]&&xt[e.secondary]&&Hn[e.kit]){s.primary=e.primary,s.secondary=e.secondary,s.kit=e.kit;for(let t in s.att)e.att&&e.att[t]&&Object.assign(s.att[t],e.att[t])}}catch{}for(let e in s.att){let t=xt[e],i=s.att[e];t.optics.includes(i.optic)||(i.optic=t.optics[0]),t.muzzle||(i.muzzle=!1),t.grip||(i.grip=!1),t.laser||(i.laser=!1)}return s}function Op(s){try{localStorage.setItem("sp2_loadout",JSON.stringify(s))}catch{}}function Yo(s,e={}){let t=xt[s],i={...t,id:s,att:e,sup:!!e.muzzle,optic:Fs[e.optic]||Fs.iron};return t.melee||(i.rk=t.rk||"rifle",i.ins=t.ins||.6,e.muzzle&&(i.noise=Math.round(t.noise*.3),i.recoil*=.92,i.falloff&&(i.falloff=[i.falloff[0]*.85,i.falloff[1]])),e.grip&&(i.recoil*=.8,i.recoilH*=.8,i.hip*=.88,i.adsT*=1.06),i.adsT+=i.optic.adsT||0),i}function ac(s,e){if(xt[s].melee)return"";let t=[];return e.optic&&e.optic!=="iron"&&t.push(Fs[e.optic].name.toUpperCase()),e.muzzle&&t.push("SUPPRESSOR"),e.grip&&t.push("FOREGRIP"),e.laser&&t.push("LASER"),t.join(" \xB7 ")}var Np={},Or=(s,e=.6,t=.2,i)=>{let n=s+"_"+e+"_"+t;return Np[n]||(Np[n]=new Dt({color:s,roughness:e,metalness:t,...i}))},rc=()=>Or(1776670,.85,0),Nv=()=>Or(4673852,.95,0),pn=()=>Or(1382170,.5,.6);function Si(s,e,t,i,n,r,o=0,a=0,l=0){let c=new ke(e,t);return c.position.set(i,n,r),c.rotation.set(o,a,l),s.add(c),c}var mn=(s,e,t)=>new At(s,e,t),Dv=(s,e)=>new _o(s,e,3,8);function qo(s,e,t,i,n){let r=new P().subVectors(t,e),o=new ke(Dv(i,Math.max(.01,r.length()-i)),n);return o.position.copy(e).addScaledVector(r,.5),o.quaternion.setFromUnitVectors(new P(0,1,0),r.normalize()),s.add(o),o}function oc(s,e,t,i,n){let r=new vt;s.add(r);let o=(l,c,h)=>new P(e.x+l,e.y+c,e.z+h),a=o(0,0,0).lerp(t,.2);qo(r,o(0,0,0),a,.034,rc()),qo(r,a,t,.043,Nv()),Si(r,mn(.05,.022,.022),pn(),a.x,a.y,a.z).lookAt(t);for(let l=0;l<4;l++){let c=(l-1.5)*.021;n==="y"?qo(r,o(-i*.012,c*.95,-.012),o(i*.03,c*.95,-.042),.0098,rc()):qo(r,o(-i*.02,-.005,c),o(-i*.036,.04,c),.0098,rc())}return qo(r,o(i*.022,.02,.008),o(i*.03,.036,-.03),.011,rc()),r}function Ov(s){let e=new vt;if(s==="reddot")Si(e,mn(.03,.012,.05),pn(),0,.006,0),Si(e,new gt(.017,.017,.045,14,1,!0),Or(1513755,.5,.6,{side:Xt}),0,.03,0,Math.PI/2),Si(e,new yr(.017,.0028,6,16),pn(),0,.03,-.022),Si(e,new yr(.017,.0028,6,16),pn(),0,.03,.022),Si(e,mn(.012,.012,.012),pn(),.022,.03,0),e.center=.03;else{Si(e,mn(.038,.016,.075),pn(),0,.008,0),Si(e,mn(.038,.02,.03),pn(),0,.022,.028);for(let i of[-1,1])Si(e,mn(.004,.036,.03),pn(),i*.019,.034,-.02);Si(e,mn(.042,.004,.03),pn(),0,.053,-.02),e.center=.034}let t=new nt({color:7319744,transparent:!0,opacity:.1,depthWrite:!1});return Si(e,new Xi(.03,.03),t,0,e.center,s==="reddot"?0:-.02),e}function Ko(s,e={},t){let i=xt[s],n=new vt;if(i.melee){let x=Rt.models.acc_knife.clone(!0);return x.scale.setScalar(.24),x.rotation.y=Math.PI/2,n.add(x),t||oc(n,new P(0,-.005,0),new P(.1,-.2,.4),1,"y"),n.hip=new P(.2,-.17,-.42),n.adsPos=n.hip.clone(),n.muzzle=new P(0,0,-.25),n.eject=n.muzzle,n.fov=75,n.melee=!0,n}let r=tc(s),o=r.def;n.add(r);let a=(o.sight-o.grip[1])*o.s,l=o.rail?r.pt(o.rail).z+.02:.02,c=Fs[e.optic||"iron"].eye,h=e.optic;if(o.scope){let x=r.pt(o.scope);a=x.y,l=x.z}else if(h==="reddot"||h==="holo"){let x=Ov(h),m=r.pt(o.rail);x.position.copy(m),n.add(x),a=m.y+x.center,l=m.z}else if(h==="scope"||h==="vscope"){let x=Rt.models.acc_scope.clone(!0),m=r.pt(o.rail);x.scale.setScalar(.115),x.rotation.y=Math.PI/2,x.position.set(0,m.y+.006,m.z-.02),n.add(x),a=m.y+.006+.19*.115,l=m.z-.02+1.09*.115}if(n.muzzle=r.muzzle.clone(),e.muzzle){let x=Rt.models.acc_suppressor.clone(!0);x.scale.setScalar(.115),x.rotation.y=Math.PI/2,x.position.copy(n.muzzle).z+=.012,n.add(x),n.muzzle.z-=.19}let d=r.pt(o.hand),u=d.clone();if(u.y-=.03,e.grip){let x=Rt.models.acc_grip.clone(!0);x.scale.setScalar(.12),x.position.set(0,d.y-.42*.12,d.z-.03),n.add(x),u=new P(0,d.y-.055,d.z-.03)}if(e.laser){let x=s==="pistol"?-.06:d.z-.05,m=s==="pistol"?(o.muzzle[1]-o.grip[1])*o.s-.022:d.y+.035,g=s==="pistol"?0:.028;Si(n,mn(.02,.022,.06),pn(),g,m,x),Si(n,mn(.008,.008,.003),new nt({color:16722474}),g,m,x-.031),n.laser=new P(g,m,x-.033)}n.lh=new vt,n.add(n.lh),t||(s==="pistol"?oc(n.lh,new P(-.012,-.035,0),new P(-.2,-.25,.38),-1,"y"):oc(n.lh,u,new P(-.26,-.3,u.z+.42),-1,e.grip?"y":"z")),t||(n.rh=oc(n,new P(0,-.02,.012),new P(.13,-.26,.42),1,"y")),n.lhRest=s==="pistol"?new P(-.012,-.035,0):u.clone(),n.magWell=r.pt(o.mag),n.magWell.y-=.03;let f=i.shells,p=n.magProxy=new ke(f?new gt(.011,.011,.06,8):mn(.026,s==="pistol"?.1:s==="sniper"||s==="dmr"?.06:.13,.05),f?Or(9054754,.5,.1):Or(s==="ak"?2761760:2500908,.5,.5));return f&&(p.rotation.x=Math.PI/2),p.position.copy(n.lhRest),p.position.y+=f?.03:.05,p.visible=!1,n.lh.add(p),n.gun=r,n.eject=r.pt(o.eject,.5),n.hip=s==="pistol"?new P(.13,-.14,-.42):new P(.16,-.165,-.37),n.adsPos=new P(0,-a,-c-l),n.sightY=a,n}var mi=(s,e,t)=>s<e?e:s>t?t:s,Uv=.34,Nu=["frag","flash","smoke"],Up={frag:"FRAG",flash:"FLASH",smoke:"SMOKE"},lc=class{constructor(e,t,i){this.g=e,this.pos=new P(t.x,0,t.z),this.vel=new P,this.yaw=t.yaw,this.pitch=0,this.eye=1.62,this.height=1.8,this.hp=100,this.dead=!1,this.grounded=!0,this.crouch=!1,this.crouchToggle=!1,this.speed=0,this.bob=0,this.dip=0,this.sinceHit=99,this.noSprint=0,this.sprintF=0,this.sprinting=!1,this.lean=0,this.leanX=0,this.leanZ=0,this.mantle=null,this.stimT=0,this.blind=0,this.shake=0;let n=[i.primary,i.secondary,"knife"];this.slots=n.map(c=>{let h=i.att[c]||{},d=Yo(c,h),u=Ko(c,h);return u.visible=!1,e.wscene.add(u),{id:c,st:d,view:u,mag:d.mag,reserve:d.reserve,zoom:d.optic&&d.optic.zoom?d.optic.zoom[0]:0}}),this.cur=0,this.slots[0].view.visible=!0,this.shown=0,this.next=-1,this.swT=0,this.relT=0,this.reloading=!1,this.fireT=0,this.adsF=0,this.rp=0,this.ry=0,this.kick=0,this.burst=0,this.laserOn=!0,this.spread=1,this.swayX=0,this.swayY=0,this.scoped=!1;let r=Hn[i.kit];this.inv={frag:r.frag,flash:r.flash,smoke:r.smoke,med:r.med,stim:r.stim},this.throwSel=Nu.find(c=>this.inv[c]>0)||"frag",this.use=null;let o=document.createElement("canvas");o.width=o.height=64;let a=o.getContext("2d"),l=a.createRadialGradient(32,32,2,32,32,32);l.addColorStop(0,"rgba(255,255,230,1)"),l.addColorStop(.3,"rgba(255,200,90,.8)"),l.addColorStop(1,"rgba(255,120,20,0)"),a.fillStyle=l,a.fillRect(0,0,64,64),this.flash=new ke(new Xi(.2,.2),new nt({map:new In(o),transparent:!0,blending:Yi,depthWrite:!1})),this.flash.visible=!1,this.flashT=0,e.wscene.add(this.flash),this.boltT=0,this.relDur=1,this.relIn=!1,this.pumpT=0,this.breath=4,this.steady=!1,this.swT2=0,this.fwd=new P,this._v=new P,this._v2=new P,this.muzzleW=new P,this.laserW=new P,this.eyePos=new P}setSlot(e,t,i){let n=this.g,r=this.slots[e],o=Yo(t,i),a=Ko(t,i);n.wscene.remove(r.view),a.visible=this.shown===e,n.wscene.add(a),this.slots[e]={id:t,st:o,view:a,mag:o.mag,reserve:o.reserve,zoom:o.optic&&o.optic.zoom?o.optic.zoom[0]:0},this.reloading=!1,this.boltT=0,this.pumpT=0,this.fireT=0,this.adsF=0}get slot(){return this.slots[this.cur]}get w(){return this.slots[this.cur].st}busy(){return this.swT>0||this.reloading||!!this.use||!!this.mantle}hits(e,t,i,n=this.height,r=Uv){let o=this.g.world.colliders;for(let a=0;a<o.length;a++){let l=o[a];if(l.solid&&e+r>l.x0&&e-r<l.x1&&i+r>l.z0&&i-r<l.z1&&t<l.y1-.001&&t+n>l.y0)return l}return null}switchTo(e){e===this.cur||this.swT>0||this.dead||this.use||!this.slots[e]||(this.next=e,this.swT=.4,this.reloading=!1,this.g.audio.click(.35))}reload(){let e=this.slot;this.busy()||e.st.melee||e.mag>=e.st.mag||e.reserve<=0||(this.reloading=!0,this.relT=this.relDur=e.st.reload,this.relIn=!1,this.g.audio.reload(e.st.reload,e.st.rk,e.st.ins))}damage(e,t,i){this.dead||(this.hp-=e,this.sinceHit=0,this.lastHit=i,this.g.onHurt(t,e),this.hp<=0&&(this.hp=0,this.dead=!0))}zoomStep(e){let t=this.slot,i=t.st.optic;return t.st.melee||!i||!i.zoom||i.zoom[1]<=i.zoom[0]||this.adsF<.5?!1:(t.zoom=mi(Math.round((t.zoom+e*.25)*4)/4,i.zoom[0],i.zoom[1]),!0)}adsFov(){let e=this.slot,t=e.st.optic;return t.zoom?2*Math.atan(Math.tan(this.g.fov*Math.PI/360)/e.zoom)*180/Math.PI:t.fov}cycleThrow(){let e=Nu.indexOf(this.throwSel);for(let t=1;t<=3;t++){let i=Nu[(e+t)%3];if(this.inv[i]>0){this.throwSel=i;break}}this.g.audio.click(.3)}startUse(e){if(this.busy()||this.dead)return;let t=this.g;if(e==="throw"){if(this.inv[this.throwSel]<=0&&(this.cycleThrow(),this.inv[this.throwSel]<=0))return;this.use={type:e,t:0,dur:.6,at:.3}}else if(e==="med"){if(this.inv.med<=0||this.hp>=100)return;this.use={type:e,t:0,dur:2.4,at:2.3},t.audio.medkit()}else if(e==="stim"){if(this.inv.stim<=0)return;this.use={type:e,t:0,dur:.75,at:.45}}else e==="melee"&&(this.use={type:e,t:0,dur:xt.knife.rate,at:.16},this.show(2),t.audio.swish());this.adsF=Math.min(this.adsF,.5)}show(e){this.shown!==e&&(this.slots[this.shown].view.visible=!1,this.slots[e].view.visible=!0,this.shown=e)}finishUse(e){let t=this.g,i=t.camera;if(e.type==="throw"){let n=this.throwSel,r=this._v.set(1,0,0).applyQuaternion(i.quaternion),o=this._v2.copy(i.position).addScaledVector(this.fwd,.45).addScaledVector(r,.18);o.y-=.08;let a=new P().copy(this.fwd).multiplyScalar(this.crouch?11:15);a.y+=3.6,a.x+=this.vel.x*.5,a.z+=this.vel.z*.5,t.spawnGrenade(n,o.clone(),a,"player"),this.inv[n]--,this.inv[n]<=0&&this.cycleThrow()}else e.type==="med"?(this.inv.med--,this.hp=Math.min(100,this.hp+65),t.audio.pickup()):e.type==="stim"?(this.inv.stim--,this.hp=Math.min(100,this.hp+25),this.stimT=8,t.audio.stim()):e.type==="melee"&&t.melee()}update(e){let t=this.g,i=t.inp,n=i.k,r=this.slot,o=r.st,a=o.melee?1:1+(Math.tan(this.adsFov()*Math.PI/360)/Math.tan(t.fov*Math.PI/360)-1)*this.adsF,l=.0022*t.sens*a;this.yaw-=i.mx*l,this.pitch=mi(this.pitch-i.my*l,-1.5,1.5),this.swayX+=(mi(-i.mx*5e-4,-.03,.03)-this.swayX)*Math.min(1,e*10),this.swayY+=(mi(i.my*5e-4,-.03,.03)-this.swayY)*Math.min(1,e*10);let c=this.pos,h=Math.sin(this.yaw),d=Math.cos(this.yaw);if(!!(n.ControlLeft||n.ControlRight)||this.crouchToggle?(this.crouch=!0,this.height=1.2):this.crouch&&(this.height=1.8,this.hits(c.x,c.y,c.z)?this.height=1.2:this.crouch=!1),this.eye+=((this.crouch?1:1.62)-this.eye)*Math.min(1,e*12),this.stimT=Math.max(0,this.stimT-e),this.mantle){let C=this.mantle;C.t+=e/.42;let R=Math.min(1,C.t),N=R*R*(3-2*R);c.y=C.y0+(C.y1-C.y0)*Math.min(1,N*1.5),c.x=C.x0+(C.x1-C.x0)*Math.max(0,N*1.6-.6),c.z=C.z0+(C.z1-C.z0)*Math.max(0,N*1.6-.6),this.vel.set(0,0,0),this.grounded=!0,R>=1&&(this.mantle=null)}else{let C=(n.KeyW?1:0)-(n.KeyS?1:0),R=(n.KeyD?1:0)-(n.KeyA?1:0),N=Math.hypot(C,R)||1;C/=N,R/=N,this.noSprint-=e;let D=(n.ShiftLeft||n.ShiftRight)&&C>0&&!this.crouch&&this.noSprint<=0&&!i.rmb&&this.grounded&&!this.use;this.sprinting=D;let k=(this.crouch?2.3:D?6.9:4.5)*o.move*(1-.42*this.adsF)*(this.use&&this.use.type==="med"?.55:1)*(this.stimT>0?1.12:1)*(1-Math.abs(this.lean)*.5),L=(-h*C+d*R)*k,F=(-d*C-h*R)*k,H=(this.grounded?C||R?60:48:9)*e,B=L-this.vel.x,J=F-this.vel.z,X=Math.hypot(B,J);X>H?(this.vel.x+=B/X*H,this.vel.z+=J/X*H):(this.vel.x=L,this.vel.z=F),i.jump&&this.grounded&&(this.vel.y=this.crouch?5.2:6.6,this.grounded=!1,t.audio.step(.25)),i.jump=!1,this.vel.y-=21*e;let q=this.grounded,te=K=>{let se=K==="x"?c.x+this.vel.x*e:c.z+this.vel.z*e,_e=K==="x"?se:c.x,we=K==="x"?c.z:se,ue=this.hits(_e,c.y,we);if(!ue){c[K]=se;return}let ze=ue.y1-c.y;if(q&&ze<=.45&&!this.hits(_e,ue.y1,we)){c[K]=se,c.y=ue.y1;return}if(n.Space&&ze>.45&&ze<=1.4&&!this.mantle&&!this.use){let St=Math.sign(this.vel[K])||1,Le=K==="x"?c.x+St*.75:c.x,et=K==="x"?c.z:c.z+St*.75;this.hits(Le,ue.y1+.02,et,1.2)||(this.mantle={t:0,x0:c.x,z0:c.z,y0:c.y,x1:Le,z1:et,y1:ue.y1},this.crouchToggle=this.crouchToggle||!!this.hits(Le,ue.y1+.02,et,1.8),t.audio.step(.3))}this.vel[K]=0};te("x"),te("z");let me=this.vel.y,Ee=c.y+this.vel.y*e;if(this.grounded=!1,Ee<=0)Ee=0,this.grounded=!0,this.vel.y=0;else{let K=this.hits(c.x,Ee,c.z);K&&(this.vel.y<=0?(Ee=K.y1,this.grounded=!0):Ee=c.y,this.vel.y=0)}if(this.mantle||(c.y=Ee),this.grounded&&!q&&me<-4&&(this.dip=Math.min(.16,-me*.014),t.audio.land(),t.sound(c,9,"step"),me<-13&&this.damage((-me-13)*6,c,{name:"a fall",dist:0,x:c.x,z:c.z,fall:!0})),this.speed=Math.hypot(this.vel.x,this.vel.z),this.grounded&&this.speed>.6){let K=this.bob;this.bob+=this.speed*e*1.75,Math.floor(K/Math.PI)!==Math.floor(this.bob/Math.PI)&&(t.audio.step(this.crouch?.06:D?.26:.15),this.crouch||t.sound(c,D?13:6.5,"step"))}}this.dip+=(0-this.dip)*Math.min(1,e*9),this.sprintF+=((this.sprinting?1:0)-this.sprintF)*Math.min(1,e*9);let f=this.sprinting||this.mantle?0:(n.KeyF?1:0)-(n.KeyQ?1:0);this.lean+=(f-this.lean)*Math.min(1,e*9);let p=this.lean*.46;for(let C=0;C<4&&Math.abs(p)>.02&&this.hits(c.x+d*p,c.y+this.eye-.25,c.z-h*p,.4,.14);C++)p*=.6,C===3&&(p=0);if(this.leanX=d*p,this.leanZ=-h*p,this.sinceHit+=e,this.sinceHit>5&&this.hp<20&&(this.hp=Math.min(20,this.hp+4*e)),this.stimT>2&&(this.hp=Math.min(100,this.hp+2.5*e)),this.blind=Math.max(0,this.blind-e*(this.blind>1?1:.55)),this.shake=Math.max(0,this.shake-e*2.5),this.use){let C=this.use;C.t+=e,!C.done&&C.t>=C.at&&(C.done=!0,this.finishUse(C)),C.t>=C.dur&&(this.use=null,this.show(this.cur))}if(this.swT>0&&(this.swT-=e,this.swT<=.2&&this.next>=0&&(this.cur=this.next,this.next=-1,this.show(this.cur))),this.reloading){this.relT-=e;let C=1-this.relT/this.relDur;if(!this.relIn&&C>=o.ins)if(this.relIn=!0,o.shells)r.mag++,r.reserve--;else{let R=Math.min(o.mag-r.mag,r.reserve);r.mag+=R,r.reserve-=R}this.relT<=0&&(o.shells&&r.mag<o.mag&&r.reserve>0&&!i.lmb?(this.relT=this.relDur=o.reload,this.relIn=!1,t.audio.reload(o.reload,"shell",o.ins)):(this.reloading=!1,o.shells&&(this.pumpT=.45,t.audio.pump())))}this.pumpT>0&&(this.pumpT-=e),this.boltT>0&&(this.boltT-=e);let x=i.rmb&&!this.sprinting&&this.swT<=0&&!this.reloading&&!this.use&&!o.melee&&!this.mantle;this.adsF=mi(this.adsF+(x?1:-1)*e/(o.adsT||.15),0,1),this.scoped=!o.melee&&o.optic.ret==="scope"&&this.adsF>.9,this.steady=this.scoped&&!!(n.ShiftLeft||n.ShiftRight)&&this.breath>0,this.breath=mi(this.breath+(this.steady?-e:e*.6),0,4),this.swT2+=e;let m=this.scoped?85e-5*r.zoom*(this.crouch?.55:1)*(1+this.speed*.9)*(this.steady?.18:1):0;this.scopeX=Math.sin(this.swT2*1.07)*m+Math.sin(this.swT2*2.3)*m*.3,this.scopeY=Math.sin(this.swT2*.81+1.3)*m*.8,this.fireT-=e,this.fireT<-.22&&(this.burst=0),(o.auto?i.lmb:i.lmbPressed)&&this.fireT<=0&&this.boltT<=0&&this.pumpT<=0&&this.swT<=0&&!this.use&&!this.mantle&&(o.melee?this.startUse("melee"):this.reloading?o.shells&&r.mag>0&&(this.reloading=!1,this.pumpT=.4,t.audio.pump()):r.mag>0?this.shoot():(i.lmbPressed&&t.audio.click(.5),this.reload())),i.lmbPressed=!1;let _=this.speed/4.5;o.melee||(this.spread=o.hip*(1+_*.9+(this.grounded?0:2))*(this.crouch?.75:1)*(o.att.laser&&this.laserOn?.6:1)*(1-this.adsF)+o.ads*(1+_*.6)*this.adsF+this.burst*.03);let M=Math.min(1,e*7);this.rp-=this.rp*M,this.ry-=this.ry*M,this.kick-=this.kick*Math.min(1,e*14);let v=t.camera,b=Math.sin(this.bob*2)*.028*Math.min(1,_)*(1-this.adsF*.6),E=Math.cos(this.bob)*.02*Math.min(1,_),y=this.shake*.05;v.position.set(c.x+d*E+this.leanX+(Math.random()-.5)*y,c.y+this.eye+b-this.dip-Math.abs(p)*.08+(Math.random()-.5)*y,c.z-h*E+this.leanZ),v.rotation.set(this.pitch+this.rp+(this.scopeY||0),this.yaw+this.ry+(this.scopeX||0),-p*.3);let S=t.fov+((o.melee?t.fov:this.adsFov())-t.fov)*this.adsF*this.adsF*(3-2*this.adsF)+this.sprintF*4;Math.abs(v.fov-S)>.01&&(v.fov=S,v.updateProjectionMatrix()),v.updateMatrixWorld(),v.getWorldDirection(this.fwd),this.eyePos.copy(v.position),this.animate(e,E,b)}shoot(){let e=this.g,t=this.slot,i=t.st,n=e.camera;t.mag--,this.fireT=Math.max(this.fireT,-.02)+60/i.rpm,this.noSprint=.3,this.burst++,i.bolt&&t.mag>0?(this.boltT=i.bolt,e.audio.bolt()):i.pellets&&t.mag>0&&(this.pumpT=.5,e.audio.pump(.12));let r=this.spread*Math.PI/180;for(let h=0;h<(i.pellets||1);h++){let d=Math.random()*6.283,u=Math.sqrt(Math.random())*r,f=this._v.set(Math.cos(d)*Math.tan(u),Math.sin(d)*Math.tan(u),-1).normalize().applyQuaternion(n.quaternion);e.playerShot(n.position,f,i,this.muzzleW,h===0)}let o=1-this.adsF*.25,a=this.burst;this.rp+=i.recoil*(a<3?1.15:.85)*Math.PI/180*o*(this.crouch?.85:1);let l=i.id==="ak"&&a>4?Math.sin(a*.8)*1.5+(Math.random()-.5):(Math.random()-.5)*2;this.ry+=l*i.recoilH*Math.PI/180*o,this.kick=Math.min(.13,this.kick+i.kick),i.sup||(this.flashT=.045,this.flash.rotation.z=Math.random()*6,this.flash.scale.setScalar((i.pellets?1.3:.7)+Math.random()*.6),e.fx.muzzle(n.position)),e.audio.shot(i.id,i.sup),e.sound(this.pos,i.noise*e.world.env.shotMul,"shot"),e.stats.shots++;let c=t.view;e.fx.shell(this._v.copy(c.eject).applyMatrix4(c.matrixWorld).applyQuaternion(n.quaternion).add(n.position),this._v2.set(1,.6,0).applyQuaternion(n.quaternion))}animate(e,t,i){let n=this.g,r=this.slots[this.shown].view,o=this.slots[this.shown].st,a=o.melee?0:this.adsF,l=r.hip,c=r.adsPos,h=l.x+(c.x-l.x)*a,d=l.y+(c.y-l.y)*a,u=l.z+(c.z-l.z)*a,f=0,p=.03*(1-a),x=-this.lean*.12*(1-a*.5),m=1-a*.88,g=Math.sin(performance.now()*.0016)*.0025*m;if(h+=this.swayX*m+t*.5*m,d+=this.swayY*m+i*.45*m-this.dip*.4+g,u+=this.kick*(1-a*.35),f+=this.kick*1*(1-a*.65),this.swT>0){let R=Math.sin((1-this.swT/.4)*Math.PI);d-=R*.3,f-=R*.7}let _=0,M=0,v=0,b=!1;if(this.reloading){let R=mi(1-this.relT/this.relDur,0,1),N=o.rk,D=Math.sin(Math.min(1,R*1.04)*Math.PI),k=r.magWell,L=r.lhRest;N==="shell"?(d+=.01,f+=.1,x+=.3,h-=.03):N==="pistol"?(d+=D*.03,f+=D*.28,x+=D*.3,h-=D*.04):(d+=D*.015,f+=D*.12,x+=D*.42,h-=D*.05);let F=k.x-L.x,H=k.y-L.y,B=k.z-L.z,J=o.ins,X=q=>q*q*(3-2*q);if(N==="shell"){let q=R<J?X(R/J):1-X((R-J)/(1-J));_=F*q,M=H*q-(1-q)*.1*Math.sin(R*Math.PI),v=B*q,b=R<J}else{let q=J*.3,te=J*.55,me=J*.72,Ee=Math.min(.97,J+.2),K=N==="pistol"?.16:.22,se=0,_e=0;if(R<q?se=X(R/q):R<te?(se=1,_e=X((R-q)/(te-q)),b=!0):R<me?(se=1,_e=1,b=R>(te+me)/2):R<J?(se=1,_e=1-X((R-me)/(J-me)),b=!0):R<Ee&&(se=1-X((R-J)/(Ee-J))),_=F*se-_e*.03,M=H*se-_e*K,v=B*se+_e*.06,R>Ee&&N!=="pistol"){let we=Math.sin(mi((R-Ee)/(1-Ee),0,1)*Math.PI);u+=we*.03,x-=we*.25}if(R>J&&N==="pistol"){let we=Math.sin(mi((R-J)/(1-J),0,1)*Math.PI);u-=we*.02,f-=we*.15}}}if(this.boltT>0&&o.bolt){let R=1-this.boltT/o.bolt,N=Math.sin(mi((R-.15)/.7,0,1)*Math.PI);x+=N*.2,f+=N*.07,u+=Math.sin(mi((R-.3)/.4,0,1)*Math.PI)*.04,d-=N*.015}if(this.pumpT>0){let R=Math.sin(mi(1-this.pumpT/.45,0,1)*Math.PI);v+=R*.07,f+=R*.05}r.magProxy&&(r.magProxy.visible=b);let E=this.use;if(E){let R=Math.sin(mi(E.t/E.dur,0,1)*Math.PI);if(E.type==="melee"){let N=mi(E.t/.22,0,1),D=Math.sin(N*Math.PI);u-=D*.32,h-=D*.16,p+=.5-N*1.1,f+=.25-D*.5,x+=.6}else d-=R*.34,f-=R*.8}this.mantle&&(d-=.3,f-=.6);let y=this.sprintF*(o.melee?.4:1);d-=y*.05,p+=y*.5,f-=y*.18,h-=y*.04,r.position.set(h,d,u),r.rotation.set(f,p,x),r.lh&&r.lh.position.set(_,M,v),r.visible=!this.scoped,r.updateMatrixWorld();let S=n.camera.quaternion,C=n.camera.position;this.muzzleW.copy(r.muzzle).applyMatrix4(r.matrixWorld).applyQuaternion(S).add(C),r.laser&&this.laserW.copy(r.laser).applyMatrix4(r.matrixWorld).applyQuaternion(S).add(C),this.flashT>0&&!this.scoped?(this.flashT-=e,this.flash.visible=!0,this.flash.position.copy(r.muzzle).applyMatrix4(r.matrixWorld),this.flash.position.z-=.03):(this.flash.visible=!1,this.flashT=0)}};var Fv=/^(root|pelvis|thigh|calf|foot|ball)/,ks={idle:"Idle_Loop",walk:"Walk_Loop",jog:"Jog_Fwd_Loop",sprint:"Sprint_Loop",cidle:"Crouch_Idle_Loop",cwalk:"Crouch_Fwd_Loop"},hc={aimN:"Pistol_Aim_Neutral",aimU:"Pistol_Aim_Up",aimD:"Pistol_Aim_Down"},zv=["Pistol_Reload","OverhandThrow","Interact","Idle_TalkingPhone_Loop","Hit_Chest","Hit_Head"],kv=["Death01","Hit_Knockback","ClimbUp_1m","Roll","Jump_Start"],Fp={guard:{jacket:4147253,pants:3554607,gear:2501408,helmet:3093799},aggressor:{jacket:5260599,pants:4274222,gear:2762015,helmet:3419686},cautious:{jacket:3686986,pants:3094333,gear:2106923,helmet:2633525},elite:{jacket:2303530,pants:1974564,gear:1184790,helmet:1513756},hostage:{jacket:11034668,pants:11034668,civ:"hostage",skin:9399125},hvt:{jacket:10130312,pants:2895411,civ:"hvt",skin:9399125}},qe=null,zp=new P,kp=new P,Bp=new P,Du=new P,Bv=new P,Ui=new Mt,Ou=new Mt,Hv=new P(0,1,0);function cc(s,e){let t=Rt.clips[s];return new Fn(s+(e?"_L":"_U"),t.duration,t.tracks.filter(i=>Fv.test(i.name)===e))}function Gv(){let s=Rt.models.soldier;s.updateMatrixWorld(!0);let e=[];s.traverse(g=>g.isSkinnedMesh&&e.push(g));let t=e.find(g=>g.material.name==="M_Main")||e[0],i=t.skeleton.bones,n=t.geometry,r=n.attributes.position.count,o=new Uint8Array(r),a=n.attributes.skinIndex,l=n.attributes.skinWeight;for(let g=0;g<r;g++){let _=0,M=-1;for(let b=0;b<4;b++)l.getComponent(g,b)>M&&(M=l.getComponent(g,b),_=a.getComponent(g,b));let v=i[_].name;o[g]=/^(Head|neck)/.test(v)?2:/^(hand|index|middle|ring|pinky|thumb)/.test(v)?3:/^(foot|ball)/.test(v)?4:/^(thigh|calf|pelvis)/.test(v)?1:0}let c={},h={};for(let g of i)c[g.name]=g.getWorldPosition(new P),h[g.name]=g.matrixWorld.clone();let d=Math.sign(c.ball_l.z-c.foot_l.z)||1;qe={body:t,meshes:e,region:o,rest:c,boneRest:h,F:d,geos:{},clips:{},mats:{},gear:{}};for(let g in ks)qe.clips[g]=cc(ks[g],!0),qe.clips[g+"U"]=cc(ks[g],!1);for(let g in hc)qe.clips[g]=cc(hc[g],!1);for(let g of zv)qe.clips[g]=cc(g,!1);for(let g of kv)qe.clips[g]=Rt.clips[g];let u=Vo(s),f=new Sr(u);f.clipAction(Rt.clips.Pistol_Aim_Neutral).play(),f.setTime(.01),u.updateMatrixWorld(!0);let p=u.getObjectByName("hand_r"),x=p.getWorldQuaternion(new Mt).invert(),m=new Mt().setFromAxisAngle(Hv,d>0?Math.PI:0);qe.gunQuat=x.clone().multiply(m),qe.gunPos=new P(0,-.035,.075*d).applyQuaternion(x),qe.mats.joint=new Dt({color:1316119,roughness:.95,metalness:0}),qe.mats.body=new Dt({vertexColors:!0,roughness:.92,metalness:0}),qe.mats.gear=new Dt({vertexColors:!0,roughness:.85,metalness:.05}),qe.mats.flash=new nt({color:16767120,transparent:!0,blending:Yi,depthWrite:!1}),qe.geo={helmet:new Ln(.128,14,10,0,6.283,0,1.75),box:new At(1,1,1),flash:new bo(.09,0)}}function Vv(s){if(qe.geos[s])return qe.geos[s];let e=Fp[s],t=qe.body.geometry,i=new at,n=t.attributes.position.count,r=new Float32Array(n*3);for(let a in t.attributes)i.setAttribute(a,t.attributes[a]);i.setIndex(t.index),i.boundingSphere=t.boundingSphere,i.boundingBox=t.boundingBox;let o=[e.jacket,e.pants,e.skin||1513755,e.skin||921360,789517].map(a=>new be(a));for(let a=0;a<n;a++){let l=o[qe.region[a]];r[a*3]=l.r,r[a*3+1]=l.g,r[a*3+2]=l.b}return i.setAttribute("color",new pt(r,3)),qe.geos[s]=i}function zs(s,e){s.parent.getWorldQuaternion(Ou),s.quaternion.premultiply(Ou).premultiply(e).premultiply(Ou.invert())}function Wv(s,e,t,i,n){s.updateWorldMatrix(!0,!1),e.updateWorldMatrix(!1,!1),t.updateWorldMatrix(!1,!1);let r=zp.setFromMatrixPosition(s.matrixWorld),o=kp.setFromMatrixPosition(e.matrixWorld),a=Bp.setFromMatrixPosition(t.matrixWorld),l=o.distanceTo(r),c=a.distanceTo(o),h=Du.copy(i).sub(r),d=Mi.clamp(h.length(),Math.abs(l-c)+.01,l+c-.004);h.normalize();let u=(l*l-c*c+d*d)/(2*d),f=Math.sqrt(Math.max(0,l*l-u*u)),x=Bv.copy(n).addScaledVector(h,-n.dot(h)).normalize().multiplyScalar(f).addScaledVector(h,u).add(r);zs(s,Ui.setFromUnitVectors(o.sub(r).normalize(),Du.copy(x).sub(r).normalize())),s.updateWorldMatrix(!1,!1),e.updateWorldMatrix(!1,!1),t.updateWorldMatrix(!1,!1),o.setFromMatrixPosition(e.matrixWorld),a.setFromMatrixPosition(t.matrixWorld),zs(e,Ui.setFromUnitVectors(a.sub(o).normalize(),Du.copy(i).sub(o).normalize()))}var os=class{constructor(e="guard",t="carbine"){qe||Gv();let i=this.root=new vt,n=this.inner=Vo(Rt.models.soldier);if(i.rotation.order="YXZ",n.rotation.y=qe.F>0?Math.PI:0,i.add(n),this.bones={},n.traverse(o=>{if(o.isBone&&(this.bones[o.name]=o),o.isSkinnedMesh){let a=o.geometry===qe.body.geometry;o.geometry=a?Vv(e):o.geometry,o.material=a?qe.mats.body:qe.mats.joint,o.castShadow=!0,o.frustumCulled=!1}}),n.updateMatrixWorld(!0),this.dress(e),t){let o=this.gun=tc(t);o.traverse(a=>{a.castShadow=!1}),o.quaternion.copy(qe.gunQuat),o.position.copy(qe.gunPos),this.bones.hand_r.add(o),this.flash=new ke(qe.geo.flash,qe.mats.flash),this.flash.position.copy(o.muzzle).z-=.08,this.flash.scale.set(1,1,2.2),this.flash.visible=!1,o.add(this.flash),this.gripL=o.pt(o.def.hand),this.gripL.y-=.035,this.gripL.z+=.03}else this.gun=null,this.flash={visible:!1};let r=this.mixer=new Sr(n);this.act={};for(let o in qe.clips){let a=this.act[o]=r.clipAction(qe.clips[o]);a.setEffectiveWeight(0),(ks[o]||ks[o.slice(0,-1)]||hc[o])&&a.play()}for(let o in ks)this.act[o+"U"].syncWith(this.act[o]);this.w={};for(let o in this.act)this.w[o]=0;this.act.idle.setEffectiveWeight(1),this.w.idle=1,this.uOne=null,this.fOne=null,this.dead=!1,this.lean=0,this.kick=0,this.flashT=0,this.aimW=0,this.crouchW=0,this.ikW=0,this.zones=null,this.zoneFrame=-1,r.update(.01)}dress(e){if(!qe.gear[e]){let t=Fp[e],i=qe.rest,n=qe.F,r={},o=new Ue,a=new Ue,l=new ui,c=new Mt,h=(_,M,v,b,E,y,S,C,R)=>{let N=M.clone().applyMatrix4(o.compose(new P(b,E,y*n),c.setFromEuler(l.set(0,0,0)),new P(S,C,R)));N.applyMatrix4(a.copy(qe.boneRest[_]).invert());let D=new be(v),k=N.attributes.position.count,L=new Float32Array(k*3);for(let F=0;F<k;F++)L[F*3]=D.r,L[F*3+1]=D.g,L[F*3+2]=D.b;N.setAttribute("color",new pt(L,3)),(r[_]||(r[_]=[])).push(N)},d=qe.geo.box,u=t.gear,f=t.helmet,p=855567,x=i.Head,m=i.spine_03,g=i.pelvis;if(t.civ==="hostage")h("Head",d,14211280,x.x,x.y+.07,x.z+.02,.2,.045,.2),h("spine_03",d,13684936,m.x,m.y+.02,m.z+.1,.2,.12,.02);else if(t.civ==="hvt"){h("Head",qe.geo.helmet,7215128,x.x+.02,x.y+.13,x.z,.95,.42,1);for(let _ of[-1,1])h("spine_03",d,12098106,m.x+_*.17,m.y+.16,m.z,.09,.025,.12);h("spine_03",d,7215128,m.x,m.y-.03,m.z+.1,.05,.3,.02)}else{h("Head",qe.geo.helmet,f,x.x,x.y+.105,x.z+.005,1,1.02,1.12),h("Head",d,f,x.x,x.y+.085,x.z+.118,.2,.025,.07),h("Head",d,658704,x.x,x.y+.062,x.z+.108,.17,.05,.03),h("Head",d,p,x.x,x.y+.165,x.z+.11,.05,.05,.05);for(let _ of[-1,1])h("Head",d,p,x.x+_*.118,x.y+.06,x.z,.035,.08,.07);h("spine_03",d,u,m.x,m.y-.02,m.z+.085,.33,.36,.09),h("spine_03",d,u,m.x,m.y-.02,m.z-.105,.32,.36,.08);for(let _ of[-1,1])h("spine_03",d,u,m.x+_*.13,m.y+.17,m.z-.01,.06,.03,.2);for(let _ of[-1,0,1])h("spine_03",d,p,m.x+_*.095,m.y-.11,m.z+.145,.075,.15,.05);h("spine_03",d,p,m.x-.09,m.y+.05,m.z-.165,.11,.17,.06),h("spine_03",d,p,m.x-.09,m.y+.2,m.z-.165,.012,.16,.012),h("pelvis",d,p,g.x,g.y+.06,g.z,.37,.06,.25),h("thigh_r",d,p,i.thigh_r.x+.085*Math.sign(i.thigh_r.x),i.thigh_r.y-.14,i.thigh_r.z,.05,.17,.1);for(let _ of["l","r"])h("calf_"+_,d,p,i["calf_"+_].x,i["calf_"+_].y-.02,i["calf_"+_].z+.055,.105,.13,.05)}qe.gear[e]=Object.fromEntries(Object.entries(r).map(([_,M])=>[_,Jl(M)]))}for(let t in qe.gear[e]){let i=new ke(qe.gear[e][t],qe.mats.gear);i.frustumCulled=!1,this.bones[t].add(i)}}setShadow(e){this.shadowOn!==e&&(this.shadowOn=e,this.inner.traverse(t=>{t.isSkinnedMesh&&(t.castShadow=e)}))}playUpper(e,{loop:t=!1,speed:i=1,fade:n=.15}={}){if(this.dead)return 0;let r=this.act[e];return r.reset(),r.setLoop(t?Gl:Uo,t?1/0:1),r.clampWhenFinished=!0,r.timeScale=i,r.play(),this.uOne&&this.uOne.a!==r&&(this.uOne.old=!0),this.uOne={a:r,name:e,t:0,dur:t?1/0:r.getClip().duration/i,fade:n,w:0},this.uOne.dur}stopUpper(){this.uOne&&(this.uOne.dur=Math.min(this.uOne.dur,this.uOne.t))}playFull(e,{speed:t=1,fade:i=.12,hold:n=!1}={}){let r=this.act[e];return r.reset(),r.setLoop(Uo,1),r.clampWhenFinished=!0,r.timeScale=t,r.play(),this.fOne={a:r,name:e,t:0,dur:n?1/0:r.getClip().duration/t,fade:i,w:0},r.getClip().duration/t}die(e){this.dead||(this.dead=!0,this.uOne=null,this.flash.visible=!1,this.playFull(e?"Hit_Knockback":"Death01",{hold:!0,speed:1.15}),e&&(this.root.userData.knock=1))}fire(){this.kick=1,this.flashT=.05,this.flash.visible=!0,this.flash.rotation.z=Math.random()*6}update(e,t){let i=this.w,n=Math.min(1,e*9),r={};for(let u in i)r[u]=0;let o=0,a=0;if(this.fOne){let u=this.fOne;u.t+=e,u.w=u.t>u.dur-u.fade?Math.max(0,(u.dur-u.t)/u.fade):Math.min(1,u.t/u.fade),this.dead&&(u.w=Math.min(1,u.t/.08)),o=u.w,u.a.setEffectiveWeight(o),u.t>=u.dur&&(u.a.stop(),this.fOne=null)}if(this.uOne){let u=this.uOne;u.t+=e,u.w=u.t>u.dur-u.fade?Math.max(0,(u.dur-u.t)/u.fade):Math.min(1,u.t/u.fade),a=u.w*(1-o),u.a.setEffectiveWeight(a),u.t>=u.dur&&(u.a.stop(),this.uOne=null)}if(!this.dead){this.crouchW+=((t.crouch?1:0)-this.crouchW)*n;let u=t.speed,f=this.crouchW,p;if(u<.15)p={idle:1};else if(u<1.9)p={idle:Math.max(0,1-u/.9),walk:Math.min(1,u/.9)};else if(u<3.6){let _=(u-1.9)/1.7;p={walk:1-_,jog:_}}else{let _=Math.min(1,(u-3.6)/1.4);p={jog:1-_,sprint:_}}let x=Math.min(1,u/.8);for(let _ in p)r[_]=p[_]*(1-f);r.cidle=f*(1-x),r.cwalk=f*x,this.act.walk.timeScale=this.act.walkU.timeScale=u<1.9?Mi.clamp(u/1.45,.6,1.5):1.2,this.act.cwalk.timeScale=this.act.cwalkU.timeScale=Mi.clamp(u/1.3,.6,1.6),this.aimW+=((t.aim?1:0)-this.aimW)*Math.min(1,e*7);let m=this.aimW,g=Mi.clamp((t.pitch||0)/.7,-1,1);r.aimN=m*(1-Math.abs(g)),r.aimU=m*Math.max(0,g),r.aimD=m*Math.max(0,-g)+(1-m)*.55,r.aimN+=(1-m)*.45;for(let _ of["aimN","aimU","aimD"])r[_]*=1-a}let l=1-o;for(let u in ks)i[u]+=(r[u]-i[u])*n,this.act[u].setEffectiveWeight(i[u]*l),this.act[u+"U"].setEffectiveWeight(this.gun?0:i[u]*l*(1-a));for(let u in hc)i[u]+=(r[u]-i[u])*n,this.act[u].setEffectiveWeight(this.gun?i[u]*l:0);if(this.mixer.update(e),this.dead)return;this.lean+=((t.lean||0)-this.lean)*Math.min(1,e*6),this.kick=Math.max(0,this.kick-e*9),this.flashT>0&&(this.flashT-=e)<=0&&(this.flash.visible=!1);let c=this.bones,h=this.lean;if(this.inner.position.x=h*.24,Math.abs(h)>.01||this.kick>.01){this.root.getWorldQuaternion(Ui);let u=zp.set(0,0,-1).applyQuaternion(Ui),f=kp.set(1,0,0).applyQuaternion(Ui);Math.abs(h)>.01&&(zs(c.spine_01,Ui.setFromAxisAngle(u,h*.27)),zs(c.spine_02,Ui.setFromAxisAngle(u,h*.2)),zs(c.spine_03,Ui.setFromAxisAngle(u,h*.15)),zs(c.Head,Ui.setFromAxisAngle(u,-h*.3))),this.kick>.01&&zs(c.spine_03,Ui.setFromAxisAngle(f,this.kick*.035))}let d=this.uOne||this.fOne?0:1;if(this.ikW+=(d-this.ikW)*Math.min(1,e*8),this.ikW>.5&&this.gun){this.gun.updateWorldMatrix(!0,!1);let u=Bp.copy(this.gripL).applyMatrix4(this.gun.matrixWorld),f=u.x,p=u.y,x=u.z;this.root.getWorldQuaternion(Ui);let m=new P(-.55,-.8,.2).applyQuaternion(Ui);Wv(c.upperarm_l,c.lowerarm_l,c.hand_l,new P(f,p,x),m)}}refresh(){this.root.updateWorldMatrix(!0,!0)}muzzle(e){return e.copy(this.gun.muzzle).applyMatrix4(this.gun.matrixWorld)}eye(e){return e.setFromMatrixPosition(this.bones.Head.matrixWorld).setY(e.y+.07)}bone(e,t){return t.setFromMatrixPosition(this.bones[e].matrixWorld)}rayHit(e,t,i,n){if(this.zoneFrame!==n){this.refresh(),this.zoneFrame=n;let o=l=>new P().setFromMatrixPosition(this.bones[l].matrixWorld),a=o("Head");a.y+=.075,this.zones=[[a,a,.125,"head",2.5],[o("neck_01"),o("spine_03"),.075,"torso",1],[o("spine_03"),o("spine_02"),.185,"torso",1],[o("spine_02"),o("pelvis"),.175,"torso",1],[o("upperarm_l"),o("lowerarm_l"),.058,"arm",.6],[o("lowerarm_l"),o("hand_l"),.05,"arm",.6],[o("upperarm_r"),o("lowerarm_r"),.058,"arm",.6],[o("lowerarm_r"),o("hand_r"),.05,"arm",.6],[o("thigh_l"),o("calf_l"),.088,"leg",.7],[o("calf_l"),o("foot_l"),.068,"leg",.7],[o("thigh_r"),o("calf_r"),.088,"leg",.7],[o("calf_r"),o("foot_r"),.068,"leg",.7]]}let r=null;for(let o of this.zones){let a=o[0],l=o[1],c=o[2],h=l.x-a.x,d=l.y-a.y,u=l.z-a.z,f=e.x-a.x,p=e.y-a.y,x=e.z-a.z,m=h*h+d*d+u*u,g=h*t.x+d*t.y+u*t.z,_=h*f+d*p+u*x,M=t.x*f+t.y*p+t.z*x,v=m-g*g,b=v>1e-9?Mi.clamp((_-g*M)/v,0,1):0;m<1e-9&&(b=0);let E=g*b-M;if(E<0)continue;let y=a.x+h*b-(e.x+t.x*E),S=a.y+d*b-(e.y+t.y*E),C=a.z+u*b-(e.z+t.z*E),R=y*y+S*S+C*C;R>c*c||(E-=Math.sqrt(c*c-R),E<i&&(!r||E<r.d)&&(r={d:Math.max(0,E),part:o[3],mult:o[4]}))}return r}};var Ur={recruit:{label:"RECRUIT",react:[.8,1.4],detect:.75,spread:4,settle:1.5,burst:[3,6],pause:[.6,1.3],hold:[1.5,4],memory:8,searchPts:[1,2],searchTime:10,share:12,radio:[3,5.5],radioFail:.3,mistake:.3,decide:[.9,1.6],hear:.8,hide:[1.5,3.6],expose:[1.4,3.2],glance:.15,switchSide:.1,peeks:[3,6],flank:.05,suppress:0,bound:!1,nades:0,investigate:.6,alarmDelay:[9,16],alarmChance:.5,coverDelay:[1.5,3.5]},tactical:{label:"TACTICAL",react:[.42,.8],detect:1,spread:3,settle:1.1,burst:[2,4],pause:[.35,.8],hold:[1.5,3.5],memory:15,searchPts:[3,4],searchTime:18,share:20,radio:[1.4,2.6],radioFail:.05,mistake:.1,decide:[.55,1],hear:1,hide:[.8,2.6],expose:[.8,1.8],glance:.35,switchSide:.3,peeks:[2,4],flank:.35,suppress:.25,bound:!1,nades:0,investigate:.95,alarmDelay:[4,8],alarmChance:.9,coverDelay:[.2,.8]},elite:{label:"ELITE SQUAD",react:[.3,.65],detect:1.1,spread:2.7,settle:.85,burst:[2,4],pause:[.3,.7],hold:[1,3],memory:22,searchPts:[4,5],searchTime:26,share:26,radio:[.8,1.5],radioFail:0,mistake:.06,decide:[.4,.8],hear:1.15,hide:[.5,2.2],expose:[.6,1.4],glance:.45,switchSide:.45,peeks:[1,3],flank:.6,suppress:.6,bound:!0,nades:1,investigate:1,alarmDelay:[2,4],alarmChance:1,coverDelay:[.1,.5]}},Xv={guard:{name:"Rifleman",aggr:.5,caut:.5},aggressor:{name:"Pointman",aggr:.85,caut:.25},cautious:{name:"Marksman",aggr:.25,caut:.85}},Hp=15,Jt=s=>Ce(s[0],s[1]),uc=s=>Math.floor(Ce(s[0],s[1]+1)),$o=(s,e)=>{let t=s-e;for(;t>Math.PI;)t-=6.2832;for(;t<-Math.PI;)t+=6.2832;return t},Gp=()=>(Math.random()+Math.random()+Math.random()-1.5)*1.4,as=(s,e)=>Math.atan2(-s,-e),dc=new P,Vp=new P,fc=class{constructor(e,t,i,n,r,o,a={}){this.g=e,this.pr=o,this.type=Xv[r],this.typeId=r;let l=o.bound?.2:.1;this.aggr=Mi.clamp(this.type.aggr+Ce(-l,l),.05,1),this.caut=Mi.clamp(this.type.caut+Ce(-l,l),.05,1),this.pos=new P(t,e.world.nav.height(t,i),i),this.yaw=Ce(6.28),this.hp=100,this.dead=!1,this.deadT=0,this.baseYaw=this.yaw,this.route=n,this.wi=0,this.dir=Math.random()<.5?1:-1,this.waitT=Ce(0,3),this.waitR=a.wait||[1,4.5],this.duty=a.duty||"patrol",this.home=a.home||n[0],this.order=null,this.holdPost=!1,this.tac=null,this.state="PATROL",this.stateT=0,this.phase="",this.t=Ce(10),this.path=null,this.pi=0,this.trav=null,this.approach=null,this.lkp=new P,this.lkpVel=new P,this.hasLkp=!1,this.lkpAge=99,this.detect=0,this.los=!1,this.seeBody=!1,this.seeing=!1,this.seenT=0,this.unseen=99,this.pd=99,this.percT=Ce(.15),this.bodyT=Ce(1),this.react=0,this.burst=0,this.shotT=0,this.ammo=30,this.reloading=!1,this.reloadT=0,this.blockT=0,this.blindT=0,this.decT=0,this.holdT=0,this.waited=0,this.supp=0,this.stun=0,this.shoutT=0,this.radioT=0,this.radioCool=0,this.openT=0,this.alerted=!1,this.crouch=!1,this.moved=0,this.leanW=0,this.suppLeft=0,this.nades=o.nades&&(r!=="cautious"||Math.random()<.5)?1:0,this.throwT=0,this.sus=new P,this.susT=0,this.after="check",this.search=[],this.searchEnd=0,this.spot=null,this.modes=[],this.mode=null,this.peeks=0,this.maxPeeks=3,this.hideT=0,this.phaseT=0,this.bad=new Set,this.wasHit=!1,this.ch=new os(o.bound?"elite":r,"carbine"),e.scene.add(this.ch.root),this.sync(),this.ch.refresh()}sync(){let e=this.ch.root;e.position.copy(this.pos),e.rotation.y=this.yaw}engaged(){return!this.dead&&this.hasLkp&&this.lkpAge<10&&(this.state==="COMBAT"||this.state==="COVER"||this.state==="MOVE")}combat(){return this.state==="COMBAT"||this.state==="COVER"||this.state==="MOVE"}set(e,t=""){this.state=e,this.stateT=0,this.phase=t,e!=="COVER"&&(this.crouch=!1)}release(){this.spot&&(this.spot.user===this&&(this.spot.user=null),this.spot=null),this.approach=null}goTo(e,t){return this.path=this.g.world.nav.path(this.pos.x,this.pos.z,e,t),this.pi=0,this.approach=null,!!this.path}follow(e,t){let i=this.pos;if(this.trav){let n=this.trav;n.t+=e/n.dur;let r=Math.min(1,n.t),o=r*r*(3-2*r);return i.x=n.x0+(n.x1-n.x0)*o,i.z=n.z0+(n.z1-n.z0)*o,i.y=n.type==="vault"?n.y0+(n.y1-n.y0)*o+(n.h-Math.min(n.y0,n.y1)+.1)*Math.sin(Math.PI*r):n.type==="climb"?n.y0+(n.y1-n.y0)*Math.min(1,r*1.7):n.y0+(n.y1-n.y0)*r*r,this.moved=2,this.moveYaw=as(n.x1-n.x0,n.z1-n.z0),r>=1&&(this.trav=null,this.pi++),!1}if(this.path&&this.pi<this.path.length){let n=this.path[this.pi];if(n.link){let h=n.link.type==="vault"?.9:n.link.type==="climb"?1.05:.55;return this.trav={x0:i.x,z0:i.z,y0:i.y,x1:n.x,z1:n.z,y1:n.y,h:n.link.h,type:n.link.type,t:0,dur:h},n.link.type!=="drop"&&this.ch.playFull("ClimbUp_1m",{speed:1.9/h,fade:.12}),!1}let r=n.x-i.x,o=n.z-i.z,a=Math.hypot(r,o);if(a<.2)return this.pi++,this.pi>=this.path.length&&!this.approach;let l=Math.min(a,t*e);i.x+=r/a*l,i.z+=o/a*l,this.moved=t,this.moveYaw=as(r,o);let c=this.g.world.nav.height(i.x,i.z);return i.y+=(c-i.y)*Math.min(1,e*10),!1}if(this.approach){let n=this.approach,r=n.x-i.x,o=n.z-i.z,a=Math.hypot(r,o);if(a<.08)return this.approach=null,!0;let l=Math.min(a,Math.min(t,2.2)*e);return i.x+=r/a*l,i.z+=o/a*l,this.moved=1.6,this.moveYaw=as(r,o),!1}return!0}canSee(){let e=this.g,t=e.player;if(t.dead||this.stun>0)return!1;let i=this.ch.eye(dc),n=t.pos.x-i.x,r=t.pos.z-i.z,o=Math.hypot(n,r);if(o>e.world.env.viewRange)return!1;let a=this.alerted||this.combat()?1.85:1.05;return o>2&&Math.abs($o(as(n,r),this.yaw))>a?!1:(this.seeBody=e.los(i.x,i.y,i.z,t.pos.x+t.leanX*.4,t.pos.y+t.height*.5,t.pos.z+t.leanZ*.4),this.seeBody||e.los(i.x,i.y,i.z,t.eyePos.x,t.eyePos.y,t.eyePos.z))}hear(e,t,i){if(this.dead||this.seeing||this.stun>0)return;let n=t==="step"?1.5:1+i*.12,r=e.x+Ce(-n,n),o=e.z+Ce(-n,n),a=this.state==="PATROL"||this.state==="SEARCH";if(t==="ally"){a&&!this.holdPost&&(this.alerted=!0,this.suspect(r,o,"investigate",Ce(.5,1.5)));return}if(t==="shot"||t==="explosion"){if(this.alerted=!0,this.g.sec.suspicious(),(this.lkpAge>1.5||!this.hasLkp)&&(this.lkp.set(r,0,o),this.lkpVel.set(0,0,0),this.lkpAge=.5,this.hasLkp=!0),this.holdPost&&this.state==="COVER")return;a?this.suspect(r,o,this.duty==="objective"?"defend":"investigate",Ce(.4,1.2)/this.pr.detect):this.state==="SUSPICIOUS"?(this.sus.set(r,0,o),this.after==="check"&&(this.after="investigate")):this.state==="INVESTIGATE"&&Math.hypot(r-this.inv.x,o-this.inv.z)>8&&this.goInvestigate(r,o)}else a?this.suspect(r,o,"check",Ce(1,2)):this.combat()&&this.lkpAge>2&&(this.lkp.set(r,0,o),this.lkpAge=1)}suspect(e,t,i,n){this.release(),this.sus.set(e,0,t),this.after=i,this.susT=n,this.set("SUSPICIOUS"),this.path=null}onAlert(e,t){this.dead||this.seeing||this.stun>0||(this.alerted=!0,(this.lkpAge>2||!this.hasLkp)&&(this.lkp.set(e,0,t),this.lkpVel.set(0,0,0),this.lkpAge=1,this.hasLkp=!0),(this.state==="PATROL"||this.state==="SEARCH")&&this.suspect(e,t,this.duty==="objective"?"defend":Math.random()<this.pr.flank?"flank":"investigate",Ce(.3,1.2)))}evade(e,t){if(this.dead||this.stun>0||this.trav||this.state==="ALARM"||Math.random()>(this.pr.label==="RECRUIT"?.6:.95))return!1;let i=this.g.world.nav,n=Math.atan2(this.pos.z-t,this.pos.x-e);for(let r of[0,.6,-.6,1.2,-1.2,1.9,-1.9]){let o=i.snap(e+Math.cos(n+r)*10,t+Math.sin(n+r)*10);if(!o)continue;let a=i.path(this.pos.x,this.pos.z,o.x,o.z,40);if(a)return this.release(),this.path=a,this.pi=0,this.alerted=!0,this.set("MOVE","retreat"),this.evading=2.5,this.hasLkp||(this.lkp.set(e,0,t),this.hasLkp=!0,this.lkpAge=1),!0}return!1}flashbang(e){this.dead||(this.stun=Math.max(this.stun,e),this.detect=0,this.seeing=!1,this.los=!1,this.ch.playUpper("Hit_Head",{speed:.5}),this.trav||(this.path=null))}damage(e,t,i){if(!this.dead){if(this.hp-=e,this.supp=Math.min(1.5,this.supp+.6),this.wasHit=!0,this.hp<=0){this.dead=!0,this.release(),this.ch.die(i==="blast"),this.g.onKill(this);return}if(this.stun<=0&&this.ch.playUpper(i==="head"?"Hit_Head":"Hit_Chest",{speed:1.7,fade:.08}),this.state==="COVER"&&this.phase!=="hide"&&this.toHide(),!this.seeing){let n=Math.hypot(t.x-this.pos.x,t.z-this.pos.z),r=3+n*.1;this.alerted=!0,this.detect=Math.max(this.detect,.6),this.lkp.set(t.x+Ce(-r,r),0,t.z+Ce(-r,r)),this.lkpAge=.5,this.hasLkp=!0,this.react=Jt(this.pr.react)*.6,!this.combat()&&this.state!=="ALARM"&&this.engage()}}}rayHit(e,t,i){let n=this.pos,r=(n.x-e.x)*t.x+(n.y+.9-e.y)*t.y+(n.z-e.z)*t.z;if(r<-1.5||r>i+1.5)return null;let o=e.x+t.x*r-n.x,a=e.y+t.y*r-n.y-.9,l=e.z+t.z*r-n.z;return o*o+a*a+l*l>2.2?null:this.ch.rayHit(e,t,i,this.g.frame)}modesFor(e,t){let i=this.g,n=t.y+1.45;if(i.los(e.x,e.y+(e.high?1.35:.7),e.z,t.x,n,t.z))return null;let r=[];for(let o of e.sides)i.los(e.x+e.tx*o*.5,e.y+(e.high?1.5:1),e.z+e.tz*o*.5,t.x,n,t.z)&&i.losB(e.x+e.tx*o*.5,e.y+(e.high?1.4:.95),e.z+e.tz*o*.5,t.x,n-.3,t.z)&&r.push({type:"side",side:o});return e.over&&i.los(e.x,e.y+1.55,e.z,t.x,n,t.z)&&i.losB(e.x,e.y+1.42,e.z,t.x,n-.3,t.z)&&r.push({type:"over"}),r}pickCover(e,t,i,n){let r=this.g,o=r.world,a=i?i.x:this.pos.x,l=i?i.z:this.pos.z,c=n||(e==="retreat"?26:18),h=r.enemies.filter(f=>f!==this&&!f.dead&&f.engaged()).map(f=>Math.atan2(f.pos.z-t.z,f.pos.x-t.x)),d=o.objective.pos,u=[];for(let f of o.cover){if(f.user&&f.user!==this&&!f.user.dead||this.bad.has(f.id)||this.spot===f&&e!=="defend")continue;let p=Math.hypot(f.x-a,f.z-l);if(p>c)continue;let x=Math.hypot(f.x-t.x,f.z-t.z);if(x<5||x>46||((t.x-f.x)*-f.nx+(t.z-f.z)*-f.nz)/x<.3)continue;let m=-Math.hypot(f.x-this.pos.x,f.z-this.pos.z)*.55+(f.high?1.5:0)+f.sides.length*.6+Ce(0,2.5);if(e==="hold")m-=Math.abs(x-17)*.15;else if(e==="push")m-=x*.55;else if(e==="retreat"){if(x<this.pd+4)continue;m+=x*.4}else if(e==="flank"){let g=3.14,_=Math.atan2(f.z-t.z,f.x-t.x);for(let M of h)g=Math.min(g,Math.abs($o(_,M)));m+=Math.min(g,1.9)*4.5-Math.abs(x-14)*.2}else e==="defend"&&(m-=p*1.2+Math.hypot(f.x-d[0],f.z-d[2])*.15);u.push([m,f])}u.sort((f,p)=>p[0]-f[0]);for(let f=0;f<Math.min(u.length,12);f++){let p=u[f][1],x=this.modesFor(p,t);if(x&&(x.length||e==="retreat"||e==="defend"))return{s:p,modes:x}}return null}takeCover(e,t=this.lkp,i,n){let r=this.pickCover(e,t,i,n);return!r||!this.goTo(r.s.cell.x,r.s.cell.z)?!1:(this.release(),this.spot=r.s,r.s.user=this,this.modes=r.modes,this.approach={x:r.s.x,z:r.s.z},this.set("MOVE",e),this.peeks=0,this.maxPeeks=uc(this.pr.peeks),this.wasHit=!1,!0)}toHide(e=0){if(this.phase="hide",this.hideT=Jt(this.pr.hide)+e,this.suppLeft=0,this.extended=!1,this.hidden=0,(this.peeks>=this.maxPeeks||this.wasHit)&&!this.holdPost&&this.g.sec.mayMove(this)){let t=this.tac;this.takeCover(t==="flank"?"flank":t==="push"?"push":this.hp<40?"retreat":"hold")}}afterHide(){let e=this.g,t=this.pr,i=this.spot;if(!this.hasLkp){if(this.modes=i.sides.map(o=>({type:"side",side:o})),i.over&&this.modes.push({type:"over"}),!this.modes.length){this.hideT=3;return}this.mode=this.modes[Math.floor(Math.random()*this.modes.length)],this.phase="glance",this.phaseT=Ce(.7,1.6);return}if(this.lkpAge>t.memory){this.holdPost?(this.hasLkp=!1,this.hideT=Ce(1,3)):this.startSearch(this.lkp.x,this.lkp.z);return}let n=this.modesFor(i,this.lkp);if(!n){this.bad.add(i.id),this.takeCover(this.hp<40?"retreat":"hold")||this.engage(!0);return}if(this.modes=n,this.tryGrenade()){this.hideT=1.6;return}if(this.unseen>this.holdT&&!this.holdPost&&this.nextMove())return;if(!n.length){this.hideT=Ce(.8,1.6),this.waited++,this.waited>2&&!this.holdPost&&!this.takeCover("hold")&&this.goInvestigate(this.lkp.x,this.lkp.z);return}if(t.mistake>.2&&Math.random()<t.mistake*.4&&this.unseen<3){this.engage(!0),this.openT=Ce(2,4);return}let r=n[Math.floor(Math.random()*n.length)];this.mode&&n.length>1&&Math.random()<t.switchSide?r=n.find(o=>o.type!==this.mode.type||o.side!==this.mode.side)||r:this.mode&&Math.random()>t.switchSide&&(r=n.find(o=>o.type===this.mode.type&&o.side===this.mode.side)||r),this.mode=r,this.blockT=0,this.blindT=0,Math.random()<t.glance&&this.unseen>1.2?(this.phase="glance",this.phaseT=Ce(.35,.9)):(this.phase="fire",this.phaseT=Jt(t.expose),this.peeks++,this.shotT=Math.min(this.shotT,.12),this.burst=0,this.suppLeft=Math.random()<t.suppress||this.tac==="suppress"?uc([1,2]):0)}nextMove(){let e=this.g,t=this.pr,i=this.tac,n=Math.random(),r=Math.hypot(this.lkp.x-this.pos.x,this.lkp.z-this.pos.z);if(!e.sec.mayMove(this))return this.hideT=Ce(.6,1.4),!0;let o;if(i==="flank")o=n<.75?"flank":"push";else if(i==="push")o=n<.7?"push":"flank";else if(i)o=this.waited<3?"wait":"push";else{let a=.3+this.aggr,l=t.flank*(.5+this.aggr),c=(.3+this.caut)*(this.waited<2?1:.2),h=n*(a+l+c);o=h<a?"push":h<a+l?"flank":"wait"}return o==="wait"?(this.holdT=this.unseen+Jt(t.hold),this.waited++,this.hideT=Jt(t.hide),!0):(this.waited=0,o==="push"&&r<10?(this.goInvestigate(this.lkp.x,this.lkp.z),!0):(this.takeCover(o)||this.goInvestigate(this.lkp.x,this.lkp.z),!0))}tryGrenade(){let e=this.g,t=this.lkp;if(this.nades<=0||e.sec.nadeCool>0||this.seeing||this.lkpAge<2.5||this.lkpAge>9)return!1;let i=this.ch.eye(dc),n=Math.hypot(t.x-i.x,t.z-i.z);if(n<9||n>26||e.enemies.some(c=>!c.dead&&Math.hypot(c.pos.x-t.x,c.pos.z-t.z)<7.5))return!1;let r=(i.x+t.x)/2,o=(i.z+t.z)/2,a=i.y+1.2+n*.16;if(!e.los(i.x,i.y+.3,i.z,r,a,o)||!e.los(r,a,o,t.x,t.y+.4,t.z))return!1;let l=this.tac==="push"||e.enemies.some(c=>!c.dead&&c.tac==="push"&&c.engaged())?Math.random()<.7:Math.random()<.3;return this.nades--,e.sec.nadeCool=14,this.throwT=.5,this.throwKind=l?"flash":"frag",this.throwAt={x:t.x+Ce(-1.5,1.5),y:t.y,z:t.z+Ce(-1.5,1.5),d:n},this.ch.playUpper("OverhandThrow",{speed:1.5}),e.say(this,l?"Flash out!":"Frag out!"),!0}engage(e){this.holdPost=this.holdPost&&this.duty==="objective",this.holdT=Jt(this.pr.hold),this.waited=0,this.decT=Jt(this.pr.decide),this.wantCrouch=Math.random()<.3*this.caut+.1,!(this.state==="COVER"&&!e)&&(this.release(),this.path=null,this.set("COMBAT"),this.openT=Jt(this.pr.coverDelay))}goInvestigate(e,t){this.release();let i=this.g.world.nav.nearest(e,t);if(!i||!this.goTo(i.x,i.z))return this.startSearch(this.pos.x,this.pos.z);this.inv=i,this.set("INVESTIGATE")}startSearch(e,t){let i=this.g,n=i.world.nav,r=this.pr,o=uc(r.searchPts),a=Math.random()<r.mistake;this.release(),this.search=[];let l=this.lkpVel,c=Math.hypot(l.x,l.z);for(let h=0;h<o;h++){let d=null;for(let u=0;u<(r.bound?5:2);u++){let f=Ce(6.283),p=a?Ce(9,17):Ce(3,11),x=e+Math.cos(f)*p,m=t+Math.sin(f)*p;h===0&&c>1.5&&r.label!=="RECRUIT"&&(x=e+l.x/c*Ce(5,10)+Ce(-2,2),m=t+l.z/c*Ce(5,10)+Ce(-2,2));let g=n.snap(x,m);if(g&&(d||(d=g),!i.los(g.x,g.y+1.2,g.z,e,g.y+1.4,t))){d=g;break}}d&&this.search.push(d)}this.searchEnd=this.t+r.searchTime,this.waitT=Ce(.5,1.5),this.path=null,this.set("SEARCH")}resume(){if(this.release(),this.hasLkp=!1,this.order&&this.doOrder())return;this.holdPost=!1,this.set("PATROL");let e=this.route[this.wi];this.goTo(e[0],e[1]),this.waitT=0,this.g.sec.level<2&&(this.alerted=!1)}setOrder(e){this.order=e,(this.state==="PATROL"||this.state==="SEARCH"||this.state==="COVER"&&this.holdPost&&!this.hasLkp)&&this.doOrder()}doOrder(){let e=this.order;return e?(this.alerted=!0,e.type==="investigate"?(this.order=null,this.holdPost=!1,this.goInvestigate(e.x,e.z),!0):(this.holdPost=!0,this.hasLkp=!1,this.lkp.set(e.tx,0,e.tz),this.spot&&this.state==="COVER"&&Math.hypot(this.spot.x-e.x,this.spot.z-e.z)<7&&this.modesFor(this.spot,this.lkp)||this.takeCover("defend",this.lkp,e,7)||(this.release(),this.route=[[e.x,e.z]],this.wi=0,this.waitR=[4,9],this.goTo(e.x,e.z),this.set("PATROL")),!0)):!1}goAlarm(){let e=this.g.world.panel;return this.release(),this.goTo(e.x,e.z)?(this.holdPost=!1,this.set("ALARM","run"),!0):!1}fire(e){let t=this.g,i=t.player,n=this.pr,r=this.ch;r.refresh();let o=r.muzzle(dc),a=o.x,l=o.y,c=o.z,h,d,u;e?(h=this.lkp.x,d=this.lkp.y+1.1,u=this.lkp.z):this.seeBody?(h=i.pos.x+i.leanX*.5,d=i.pos.y+i.height*.58,u=i.pos.z+i.leanZ*.5):(h=i.eyePos.x,d=i.eyePos.y-.06,u=i.eyePos.z);let f=h-a,p=d-l,x=u-c,m=Math.hypot(f,p,x);if(bi(t.world.colliders,a,l,c,f/m,p/m,x/m,Math.min(m,e?1.7:m-.35),"bullet"))return this.blockT+=.3,!1;this.ammo--;let g=n.spread*(1+this.pd/40)*(1+Math.min(i.speed,7)/7*.8)*(1+Math.max(0,1-(this.seenT+(this.state==="COVER"?n.settle*.4:0))/n.settle)*.9)*(this.supp>.5?1.35:1)*(e?1.7:1)*(i.crouch?1.15:1)*Math.PI/180,_=Math.atan2(f,x)+Gp()*g,M=Math.atan2(p,Math.hypot(f,x))+Gp()*g*.7,v=Math.cos(M),b=t.v3.set(Math.sin(_)*v,Math.sin(M),Math.cos(_)*v),E=t.v1.set(a,l,c),y=t.trace(E,b,120,this),S=t.v2.set(a+b.x*y.d,l+b.y*y.d,c+b.z*y.d);return t.fx.tracer(E,S,16756848),y.kind==="player"?i.damage(Hp,this.pos,{name:this.type.name,dist:this.pd,x:this.pos.x,z:this.pos.z}):(y.kind==="world"?t.fx.impact(S,Vp.set(y.wh.nx,y.wh.ny,y.wh.nz)):y.kind==="civ"&&y.e.damage(Hp),t.nearMiss(a,l,c,b.x,b.y,b.z)),r.fire(),t.enemyShotSound(this),t.sound(this.pos,30,"ally",this),!0}update(e){let t=this.g,i=t.player,n=this.pr,r=this.ch;if(this.dead){this.deadT<4&&(this.deadT+=e,r.update(e,{speed:0}),this.pos.y>t.world.nav.height(this.pos.x,this.pos.z)+.02&&(this.pos.y=Math.max(t.world.nav.height(this.pos.x,this.pos.z),this.pos.y-e*4),this.sync()));return}if(this.t+=e,this.stateT+=e,this.moved=0,this.supp=Math.max(0,this.supp-e*.25),this.radioCool-=e,this.stun>0){this.stun-=e,this.crouch=!0,this.seeing=!1,this.los=!1,this.lkpAge+=e*2,this.unseen+=e,this.trav&&this.follow(e,0),r.update(e,{speed:0,crouch:!0,aim:!1,lean:0}),this.sync(),this.stun<=0&&(r.stopUpper(),this.react=Jt(n.react)+.4,this.state!=="COVER"?this.hasLkp&&!this.takeCover("hold")&&this.startSearch(this.pos.x,this.pos.z):this.toHide());return}(this.percT-=e)<=0&&(this.percT=.1+Math.random()*.05,this.los=this.canSee(),r.setShadow(this.pd<34));let o=i.pos.x-this.pos.x,a=i.pos.z-this.pos.z;if(this.pd=Math.hypot(o,a),this.los){let _=n.detect*t.world.env.detect*(2.2*(1-this.pd/t.world.env.viewRange)+.25);this.pd<6&&(_*=3),i.crouch&&(_*=.55),i.speed>5.5?_*=1.4:i.speed<.5&&(_*=.8),this.seeBody||(_*=.6),this.alerted&&(_*=3),this.detect=Math.min(1,this.detect+_*e)}else this.detect=Math.max(0,this.detect-.3*e);let l=this.seeing;if(this.seeing=this.los&&this.detect>=1,this.seeing?(this.lkp.copy(i.pos),this.lkpVel.copy(i.vel),this.lkpAge=0,this.hasLkp=!0,this.unseen=0,this.seenT+=e,l||(this.react=Math.max(this.react,Jt(n.react)*(this.combat()?this.unseen<5?.25:.5:1)+(Math.random()<n.mistake*.5?Ce(.4,1):0)),this.alerted=!0,(this.state==="ALARM"?this.pd<12:!this.combat())&&this.engage(),this.shoutT<=0&&(this.shoutT=.7),this.radioCool<=0&&this.radioT<=0&&(this.radioT=Jt(n.radio)))):(this.lkpAge+=e,this.unseen+=e,this.seenT=0,l&&(this.holdT=Jt(n.hold),this.waited=0)),this.shoutT>0&&(this.shoutT-=e)<=0&&this.lkpAge<3&&t.shout(this),this.radioT>0&&(this.radioT-=e*(this.seeing&&this.state!=="COVER"?.5:1),this.radioT<=0&&(this.radioCool=7,Math.random()>=n.radioFail&&this.lkpAge<6&&(t.sec.radio(this,"contact",this.lkp.x,this.lkp.z),this.seeing||r.playUpper("Idle_TalkingPhone_Loop",{speed:1,fade:.2,loop:!1})))),!this.combat()&&this.state!=="ALARM"&&(this.bodyT-=e)<=0){this.bodyT=.8;for(let _ of t.enemies)if(!(!_.dead||_.found||Math.hypot(_.pos.x-this.pos.x,_.pos.z-this.pos.z)>16)&&!(Math.abs($o(as(_.pos.x-this.pos.x,_.pos.z-this.pos.z),this.yaw))>1.1||!t.los(this.pos.x,this.pos.y+1.6,this.pos.z,_.pos.x,_.pos.y+.4,_.pos.z))){_.found=!0,this.alerted=!0,this.suspect(_.pos.x,_.pos.z,"investigate",Ce(1,2)),this.bodyCall={x:_.pos.x,z:_.pos.z,t:Jt(n.radio)+1};break}}if(this.bodyCall&&(this.bodyCall.t-=e)<=0&&(Math.random()>=n.radioFail&&t.sec.radio(this,"body",this.bodyCall.x,this.bodyCall.z),this.bodyCall=null),this.reloading&&(this.reloadT-=e)<=0&&(this.reloading=!1,this.ammo=30),this.ammo<=0&&!this.reloading&&(this.reloading=!0,this.reloadT=2.3,r.playUpper("Pistol_Reload",{speed:.9})),this.throwT>0&&(this.throwT-=e)<=0){r.refresh();let _=r.bone("hand_r",Vp),M=this.throwAt,v=1+M.d/20,b=14;t.spawnGrenade(this.throwKind,_.clone(),new P((M.x-_.x)/v,(M.y+.2-_.y+.5*b*v*v)/v,(M.z-_.z)/v),this)}let c=null,h=0,d=this.alerted||this.state!=="PATROL",u=!1,f=_=>as(_.x-this.pos.x,_.z-this.pos.z);switch(this.state){case"PATROL":if(this.waitT>0)this.waitT-=e,c=(this.baseYaw??this.yaw)+Math.sin(this.t*.6)*.9;else if(this.follow(e,this.alerted?2.2:1.45)){this.wi=(this.wi+this.dir+this.route.length)%this.route.length;let _=this.route[this.wi];this.goTo(_[0],_[1]),this.waitT=this.route.length<3||Math.random()<.6?Jt(this.waitR):0,this.baseYaw=this.yaw}this.los&&this.detect>.35&&(t.sec.suspicious(),this.suspect(i.pos.x+Ce(-2,2),i.pos.z+Ce(-2,2),"check",Ce(1.2,2.5))),d=!1;break;case"SUSPICIOUS":c=f(this.sus),(this.susT-=e)<=0&&(this.after==="defend"?(this.order=this.order||{type:"defend",x:this.home[0],z:this.home[1],tx:this.sus.x,tz:this.sus.z},this.doOrder()):this.after==="flank"&&this.hasLkp&&this.takeCover("flank")||(this.after!=="check"||Math.random()<n.investigate?this.goInvestigate(this.sus.x,this.sus.z):this.resume()));break;case"INVESTIGATE":{let _=this.follow(e,this.alerted?3.1:2.3),M=Math.hypot(this.inv.x-this.pos.x,this.inv.z-this.pos.z);M<6&&(c=f(this.inv)),(_||this.stateT>35||M<5&&this.stateT>1&&t.los(this.pos.x,this.pos.y+1.5,this.pos.z,this.inv.x,this.inv.y+1,this.inv.z))&&this.startSearch(this.inv.x,this.inv.z);break}case"SEARCH":if(this.waitT>0)this.waitT-=e,c=(this.baseYaw??this.yaw)+Math.sin(this.t*1.3)*1.3;else if(this.follow(e,2.2))if(this.baseYaw=this.yaw,this.t>this.searchEnd||!this.search.length)this.resume();else{let _=this.search.shift();this.goTo(_.x,_.z),this.waitT=Ce(1,2.5)}break;case"ALARM":if(this.phase==="run")this.follow(e,4.4)&&(this.phase="press",this.phaseT=1.1,r.playUpper("Interact",{speed:1.3}));else{let _=t.world.panel.face;c=as(_[0],_[1]),(this.phaseT-=e)<=0&&(t.sec.lockdown("ALARM TRIGGERED"),this.resume())}break;case"COMBAT":if(c=f(this.lkp),this.crouch=!!this.wantCrouch&&!this.moved,this.reloading&&this.openT>0&&(this.openT=0),this.blockT>1){this.blockT=0,this.openT=0,this.decT=0,this.wantCrouch=!1,!this.takeCover("flank")&&!this.takeCover("push")&&this.goInvestigate(this.lkp.x,this.lkp.z);break}if(this.path&&this.pi<this.path.length&&this.follow(e,1.7),(this.openT-=e)<=0&&(this.decT-=e)<=0){this.decT=Jt(n.decide);let _=this.hp<40&&Math.random()<.5+this.caut*.5;if(this.takeCover(_?"retreat":this.tac==="flank"?"flank":"hold"))break;if(this.tryGrenade()){this.openT=1.2;break}if(!this.seeing&&this.unseen>this.holdT){this.lkpAge>n.memory?this.startSearch(this.lkp.x,this.lkp.z):this.goInvestigate(this.lkp.x,this.lkp.z);break}if(this.wantCrouch=Math.random()<.3+this.caut*.3,Math.random()<.5){let M=this.yaw+(Math.random()<.5?1.57:-1.57),v=t.world.nav.snap(this.pos.x-Math.sin(M)*2.2,this.pos.z-Math.cos(M)*2.2);v&&this.goTo(v.x,v.z)}}break;case"MOVE":{let _=this.phase!=="defend"&&!(this.evading>0)&&this.seeing&&this.pd<7&&this.stateT>.6;if(this.evading>0&&(this.evading-=e),_){this.engage(!0),this.openT=Ce(.8,1.6);break}if(this.follow(e,this.phase==="retreat"?4.6:this.phase==="defend"?3.4:4.3)){if(!this.spot){this.engage(!0);break}this.set("COVER","hide"),this.hideT=Ce(.3,1),this.mode=null,this.ammo<15&&!this.reloading&&(this.reloading=!0,this.reloadT=2.3,r.playUpper("Pistol_Reload",{speed:.9}))}break}case"COVER":{let _=this.spot,M=this.mode;if(c=f(this.hasLkp||this.holdPost?this.lkp:dc.set(_.x-_.nx*5,0,_.z-_.nz*5)),this.phase==="hide")this.crouch=!_.high,this.hideT-=e*(this.supp>.6?.3:1),this.hidden=(this.hidden||0)+e,this.hideT<=0&&!this.reloading&&this.throwT<=0?this.afterHide():this.hidden>9&&this.hasLkp&&!this.holdPost&&!this.reloading&&(this.hidden=0,this.supp=0,this.holdT=0,this.nextMove()||this.afterHide());else{let v=this.phase==="glance"?.75:1+Math.min(.3,this.blockT);M.type==="side"?(this.crouch=!_.high,h=(_.tx*M.side*Math.cos(this.yaw)-_.tz*M.side*Math.sin(this.yaw))*v):this.crouch=!1,this.phaseT-=e,this.phase==="glance"?this.phaseT<=0&&(this.seeing&&this.hasLkp?(this.phase="fire",this.phaseT=Jt(n.expose),this.peeks++,this.shotT=Math.min(this.shotT,.12),this.burst=0):this.toHide(this.hasLkp?0:Ce(1,3))):(this.seeing?this.blindT=0:(this.blindT+=e,u=this.suppLeft>0&&this.lkpAge<4&&this.blindT>.3),this.blockT>.9?(this.modes=this.modes.filter(b=>b!==M),this.modes.length||this.bad.add(_.id),this.peeks=99,this.toHide()):this.phaseT<=0&&this.seeing&&!this.extended&&this.supp<.4&&this.ammo>4&&Math.random()<.4?(this.extended=!0,this.phaseT=Ce(.5,1.1)):(this.phaseT<=0||this.ammo<=0||this.blindT>.7&&!u)&&this.toHide())}break}}if(this.seeing||u){let _=this.seeing?as(o,a):f(this.lkp);this.moved<3&&(c=_),this.react>0&&(this.react-=e);let M=this.state!=="COVER"||this.phase==="fire"&&Math.abs(r.lean-h)<.3&&r.crouchW<(this.crouch?1.1:.35);!this.reloading&&!this.trav&&this.throwT<=0&&this.moved<2.5&&M&&(this.state==="COMBAT"||this.state==="COVER")&&this.react<=0&&Math.abs($o(_,this.yaw))<.3&&r.aimW>.8&&(this.shotT-=e)<=0&&(this.burst<=0&&(this.burst=uc(n.burst),u&&this.suppLeft--),this.fire(u)?(this.burst--,this.shotT=this.burst>0?.115:Jt(n.pause)):this.shotT=.15)}this.moved>1.2&&this.pd<16&&(this.stepT=(this.stepT||0)+this.moved*e)>1.5&&(this.stepT=0,t.enemyStep(this));let p=c??(this.moved?this.moveYaw:this.yaw),x=(this.combat()?7:3.5)*e,m=$o(p,this.yaw);this.yaw+=Math.max(-x,Math.min(x,m));let g=this.seeing?Math.atan2(i.pos.y+i.height*.6-(this.pos.y+1.4),Math.max(1,this.pd)):0;r.update(e,{speed:this.trav?0:this.moved,crouch:this.crouch&&!this.moved,aim:d&&this.moved<3.5&&!this.trav,pitch:g,lean:h}),this.sync()}};var Uu=["NORMAL","SUSPICIOUS","ALERT","LOCKDOWN"],Wp=s=>Ce(s[0],s[1]),pc=class{constructor(e,t){this.g=e,this.pr=t,this.level=0,this.t=0,this.calm=0,this.report=null,this.tick=0,this.commsDown=!1,this.panelDown=!1,this.sector=new Float32Array(8),this.runner=null,this.alarmAt=-1,this.nadeCool=6,this.reinforced=!1,this.reinAt=-1,this.assigned=-1}raise(e,t){if(this.calm=0,e<=this.level)return!1;if(this.level=e,this.g.onSecurity(e,t),e>=2)for(let i of this.g.enemies)i.dead||(i.alerted=!0);return!0}sectorOf(e,t){let i=this.g.world.objective.pos;return(Math.round(Math.atan2(e-i[0],t-i[2])/(Math.PI/4))%8+8)%8}hotSector(){let e=-1,t=1.5;for(let i=0;i<8;i++)this.sector[i]>t&&(t=this.sector[i],e=i);return e}setReport(e,t,i,n){let r=n==="body"?0:3.5;this.report={x:e+Ce(-r,r),z:t+Ce(-r,r),t:this.t,by:i,kind:n},this.sector[this.sectorOf(e,t)]+=1,this.assign()}radio(e,t,i,n){if(this.commsDown){this.g.say(e,"Radio is dead \u2014 no signal!"),this.g.shout(e);return}let r=this.raise(2,t==="body"?"MAN DOWN REPORTED":"INTRUDER REPORTED");this.setReport(i,n,e,t),this.g.say(e,t==="body"?"Man down! Sweep the area!":r?"Contact! Intruder on site!":"Contact, updating position!"),r&&this.g.world.panel&&(this.alarmAt=Math.random()<this.pr.alarmChance?this.t+Wp(this.pr.alarmDelay):1/0)}suspicious(){this.raise(1,"")}relocateDetail(e){let t=e.posts,i=0;for(let n of this.g.enemies)if(!n.dead&&n.duty==="objective"){let r=t[i++%t.length];n.home=r,n.setOrder({type:"defend",x:r[0],z:r[1],tx:n.pos.x,tz:n.pos.z}),n.order&&n.state!=="COVER"&&!n.engaged()&&n.doOrder()}}sealExits(){let e=this.g,t=new Set,i=e.world.objective.pos;for(let n of e.world.exits){let r=e.enemies.filter(o=>!o.dead&&!t.has(o)&&!o.engaged()&&o.stun<=0&&o.state!=="ALARM").sort((o,a)=>Math.hypot(o.pos.x-n.pos[0],o.pos.z-n.pos[2])-Math.hypot(a.pos.x-n.pos[0],a.pos.z-n.pos[2]))[0];if(!r)break;t.add(r),r.duty="post",r.alerted=!0,r.setOrder({type:"defend",x:n.pos[0],z:n.pos[2],tx:i[0],tz:i[2],name:n.name}),r.order&&!r.engaged()&&r.doOrder()}return t.size}discover(e){let t=this.g,i=t.enemies.filter(n=>!n.dead&&!n.engaged()&&n.stun<=0&&n.state!=="ALARM").sort((n,r)=>Math.hypot(n.pos.x-e.at[0],n.pos.z-e.at[2])-Math.hypot(r.pos.x-e.at[0],r.pos.z-e.at[2]))[0];i&&(this.raise(1,""),i.alerted=!0,i.setOrder({type:"investigate",x:e.stand[0],z:e.stand[1]}),t.say(i,`Checking the ${e.name}.`))}lockdown(e){this.raise(3,e)&&(!this.reinforced&&!this.commsDown&&(this.reinforced=!0,this.reinAt=this.t+Ce(12,18)),this.assign(!0))}mayMove(e){if(!this.pr.bound)return!0;let t=this.g.enemies.filter(r=>!r.dead&&r!==e&&r.engaged());if(!t.length)return!0;let i=t.filter(r=>r.state==="MOVE").length;return t.filter(r=>r.state==="COVER"||r.seeing).length>=1&&i<Math.ceil((t.length+1)/2)}assign(e){let t=this.g,i=this.report,n=t.world;if(!i||this.level<2)return;this.assigned=i.t;let r=t.enemies.filter(f=>!f.dead&&!f.engaged()&&f!==this.runner&&f.stun<=0&&f.state!=="ALARM"),o=(f,p,x)=>Math.hypot(f.pos.x-p,f.pos.z-x),a=t.enemies.filter(f=>!f.dead&&f.duty==="objective");for(let f of r)f.duty==="objective"&&f.setOrder({type:"defend",x:f.home[0],z:f.home[1],tx:i.x,tz:i.z});let l=r.filter(f=>f.duty!=="objective").sort((f,p)=>o(f,i.x,i.z)-o(p,i.x,i.z)),c=this.level===3?1:2,h=n.objective.pos;if(l.splice(0,c).forEach((f,p)=>f.setOrder({type:"investigate",x:i.x+(p?Ce(-5,5):0),z:i.z+(p?Ce(-5,5):0),flank:p>0&&this.pr.flank>.3})),this.pr===void 0||this.pr.label==="RECRUIT")return;if(a.length<2&&l.length){let f=l.shift(),p=n.posts.objective[0];f.duty="objective",f.home=p,f.setOrder({type:"defend",x:p[0],z:p[1],tx:i.x,tz:i.z})}let d=this.hotSector(),u=new Set;for(let f of l){let p=null,x=1e9;if(n.posts.entrance.forEach((g,_)=>{if(u.has(_))return;let M=Math.hypot(g[0]-i.x,g[1]-i.z)+Math.hypot(g[0]-h[0],g[1]-h[2])*.6+o(f,g[0],g[1])*.3;d>=0&&this.sectorOf(g[0],g[1])===d&&(M-=8),M<x&&(x=M,p=_)}),p===null)break;u.add(p);let m=n.posts.entrance[p];f.setOrder({type:"defend",x:m[0],z:m[1],tx:i.x,tz:i.z,name:m[2]})}}update(e){let t=this.g;this.t+=e,this.calm+=e,this.nadeCool-=e;let i=t.enemies.filter(r=>!r.dead),n=i.filter(r=>r.engaged());if(n.length&&(this.calm=0),this.level===1&&this.calm>30&&(this.level=0,t.onSecurity(0,"")),this.level===2&&this.calm>80){this.level=1,this.calm=0,t.onSecurity(1,"SEARCH CALLED OFF");for(let r of i)r.order=null}if(this.reinAt>0&&this.t>=this.reinAt&&(this.reinAt=-1,t.reinforce()),!((this.tick-=e)>0)){if(this.tick=.6,this.pr.label!=="RECRUIT"){let r=0;for(let o of n){if(o.duty==="objective"){o.tac="hold";continue}this.pr.bound?o.tac=o.aggr>.65?"push":o.caut>.65?"overwatch":r%2?"flank":"suppress":o.tac=["hold","flank","hold","push"][r%4],r++}this.pr.bound&&n.length>1&&!n.some(o=>o.tac==="suppress"||o.tac==="overwatch")&&(n[0].tac="suppress")}if(this.runner&&(this.runner.dead||this.runner.state!=="ALARM")&&(this.level<3&&this.runner.dead&&(this.alarmAt=this.t+Wp(this.pr.alarmDelay)),this.runner=null),this.level===2&&t.world.panel&&!this.panelDown&&!this.runner&&this.alarmAt>=0&&this.t>=this.alarmAt){let r=t.world.panel,o=i.filter(a=>!a.engaged()&&a.stun<=0).sort((a,l)=>Math.hypot(a.pos.x-r.x,a.pos.z-r.z)-Math.hypot(l.pos.x-r.x,l.pos.z-r.z))[0];o&&o.goAlarm()?(this.runner=o,t.say(o,"Going for the alarm!")):this.alarmAt=this.t+3}this.level>=2&&this.report&&this.assigned!==this.report.t&&this.assign()}}};var qv={frag:2.8,flash:1.9,smoke:1.6},Yv=14,Kv={frag:new Ln(.045,10,8),flash:new gt(.03,.03,.11,10),smoke:new gt(.033,.033,.13,10)},$v={frag:new Dt({color:3095078,roughness:.6,metalness:.3}),flash:new Dt({color:9080724,roughness:.4,metalness:.7}),smoke:new Dt({color:5989488,roughness:.5,metalness:.5})},mc=class{constructor(e){this.g=e,this.list=[],this.smokes=[],this._v=new P}spawn(e,t,i,n){let r=new ke(Kv[e],$v[e]);r.position.copy(t),r.castShadow=!0,this.g.scene.add(r),this.list.push({type:e,pos:t,vel:i,owner:n,fuse:qv[e],mesh:r,rest:!1}),this.g.audio.swish()}update(e){let t=this.g,i=t.world.colliders;for(let n=this.list.length-1;n>=0;n--){let r=this.list[n],o=r.pos,a=r.vel;if(r.fuse-=e,!r.rest){a.y-=Yv*e;let l=a.length(),c=l*e,h=c>1e-4?bi(i,o.x,o.y,o.z,a.x/l,a.y/l,a.z/l,c+.05,"solid"):null;if(h){let d=a.x*h.nx+a.y*h.ny+a.z*h.nz;o.addScaledVector(a,Math.max(0,(h.d-.05)/l)),a.x-=1.35*d*h.nx,a.y-=1.35*d*h.ny,a.z-=1.35*d*h.nz,a.multiplyScalar(.72),l>2.5&&(t.audio.bounce(Math.min(.3,l*.03)),r.owner==="player"&&t.sound(o,7,"step")),this.warn(r)}else o.addScaledVector(a,e);o.y<.05&&(o.y=.05,this.warn(r),Math.abs(a.y)>1.5&&t.audio.bounce(.15),a.y*=-.3,a.x*=.6,a.z*=.6),a.lengthSq()<.09&&o.y<.08&&(r.rest=!0),r.mesh.position.copy(o),r.mesh.rotation.x+=e*l*2,r.mesh.rotation.z+=e*l}r.fuse<=0&&(this.detonate(r),t.scene.remove(r.mesh),this.list.splice(n,1))}for(let n=this.smokes.length-1;n>=0;n--){let r=this.smokes[n];if(r.t-=e,(r.puff-=e)<=0&&r.t>2.5&&(r.puff=.22,t.fx.puff(this._v.set(r.x+(Math.random()-.5)*4,r.y+.4+Math.random()*2,r.z+(Math.random()-.5)*4),3.2+Math.random()*1.6,3.6,10133668,.12,.6)),r.t<=0){let o=i.indexOf(r.col);o>=0&&i.splice(o,1),this.smokes.splice(n,1)}}}warn(e){if(e.type!=="frag"||e.warned||e.fuse<.35)return;e.warned=!0;let t=this.g,i=e.pos,n=!1;for(let r of t.enemies)r.dead||r===e.owner||Math.hypot(r.pos.x-i.x,r.pos.z-i.z)>7.5||r.evade(i.x,i.z)&&!n&&(n=!0,t.say(r,"Grenade!"))}detonate(e){let t=this.g,i=t.player,n=e.pos,r=n.y+.35,o=Math.hypot(i.pos.x-n.x,i.pos.z-n.z);if(e.type==="frag"){t.fx.explosion(n),t.audio.explosion(o),t.sound(n,70,"explosion"),t.range&&t.range.onBlast(n);let a=(c,h,d,u)=>{let f=Math.hypot(c-n.x,h+u*.5-r,d-n.z);if(f>8)return 0;let p=t.losB(n.x,r,n.z,c,h+u*.55,d)?1:t.losB(n.x,r,n.z,c,h+u*.9,d)?.45:0;return 150*Math.pow(1-f/8,1.3)*p};for(let c of t.civs||[]){if(c.dead)continue;let h=a(c.pos.x,c.pos.y,c.pos.z,1.7);h>1&&c.damage(h)}for(let c of t.enemies){if(c.dead)continue;let h=a(c.pos.x,c.pos.y,c.pos.z,c.crouch?1.1:1.75);h>1&&(c.damage(h,n,"blast"),c.dead||(c.supp=1.5))}let l=a(i.pos.x,i.pos.y,i.pos.z,i.height);l>1&&i.damage(l,n,{name:e.owner==="player"?"your own grenade":e.owner==="charge"?"your own demolition charge":"a fragmentation grenade",dist:o,x:n.x,z:n.z,blast:!0}),o<25&&(i.shake=Math.max(i.shake,1.2*(1-o/25)))}else if(e.type==="flash"){t.fx.boom.position.set(n.x,r,n.z),t.fx.boom.intensity=2500,t.sound(n,40,"explosion");for(let l of t.enemies){if(l.dead)continue;let c=Math.hypot(l.pos.x-n.x,l.pos.z-n.z);if(c>17)continue;let h=l.ch.eye(this._v);if(!t.los(n.x,r,n.z,h.x,h.y,h.z))continue;let d=Math.atan2(-(n.x-l.pos.x),-(n.z-l.pos.z))-l.yaw;for(;d>Math.PI;)d-=6.2832;for(;d<-Math.PI;)d+=6.2832;let u=5*(1-c/19)*(Math.abs(d)<1.7?1:.4);u>.6&&l.flashbang(u)}let a=0;if(o<22&&t.los(n.x,r,n.z,i.eyePos.x,i.eyePos.y,i.eyePos.z)){let l=(i.fwd.x*(n.x-i.eyePos.x)+i.fwd.y*(r-i.eyePos.y)+i.fwd.z*(n.z-i.eyePos.z))/(Math.hypot(n.x-i.eyePos.x,r-i.eyePos.y,n.z-i.eyePos.z)||1);a=2.8*(1-o/24)*(l>.2?1:l>-.3?.55:.25),i.blind=Math.max(i.blind,a)}t.audio.flashbang(a)}else{let a={x0:n.x-2.8,x1:n.x+2.8,y0:0,y1:n.y+3.4,z0:n.z-2.8,z1:n.z+2.8,solid:!1,bullet:!1,sight:!0,smoke:!0};t.world.colliders.push(a),this.smokes.push({x:n.x,y:n.y,z:n.z,t:15,puff:0,col:a}),t.audio.noise(1.2,{f:3e3,f2:800,type:"bandpass",q:1,vol:.2});for(let l=0;l<10;l++)t.fx.puff(this._v.set(n.x+(Math.random()-.5)*3.5,n.y+.4+Math.random()*2,n.z+(Math.random()-.5)*3.5),3.5,4,10133668,.12,.6)}}};var Fr=320,gc=class{constructor(e){this.tr=[];let t=new At(.02,.02,1);t.translate(0,0,.5);for(let d=0;d<28;d++){let u=new ke(t,new nt({color:16769696,transparent:!0,opacity:0,blending:Yi,depthWrite:!1,fog:!1}));u.visible=!1,u.life=0,e.add(u),this.tr.push(u)}this.ti=0,this.pp=new Float32Array(Fr*3).fill(-999),this.pc=new Float32Array(Fr*3),this.pv=new Float32Array(Fr*3),this.pl=new Float32Array(Fr);let i=this.pg=new at;i.setAttribute("position",new pt(this.pp,3)),i.setAttribute("color",new pt(this.pc,3));let n=new Cn(i,new sn({size:.07,vertexColors:!0,transparent:!0,depthWrite:!1}));n.frustumCulled=!1,e.add(n),this.pi=0,this.dec=[];let r=new Xi(.13,.13),o=new nt({color:526602,transparent:!0,opacity:.85,polygonOffset:!0,polygonOffsetFactor:-4});for(let d=0;d<48;d++){let u=new ke(r,o);u.visible=!1,e.add(u),this.dec.push(u)}this.di=0,this.flash=new ci(16760944,0,16,1.5),e.add(this.flash),this.boom=new ci(16756832,0,40,1.4),e.add(this.boom);let a=document.createElement("canvas");a.width=a.height=64;let l=a.getContext("2d"),c=l.createRadialGradient(32,32,2,32,32,32);c.addColorStop(0,"rgba(255,255,255,0.9)"),c.addColorStop(.5,"rgba(255,255,255,0.45)"),c.addColorStop(1,"rgba(255,255,255,0)"),l.fillStyle=c,l.fillRect(0,0,64,64);let h=new In(a);this.puffs=[];for(let d=0;d<48;d++){let u=new co(new pr({map:h,transparent:!0,opacity:0,depthWrite:!1,color:8947848}));u.visible=!1,u.life=0,e.add(u),this.puffs.push(u)}this.pfi=0,this._v=new P}tracer(e,t,i=16769696){let n=this.tr[this.ti++%this.tr.length];n.position.copy(e),n.lookAt(t),n.scale.z=Math.max(.1,e.distanceTo(t)),n.material.color.setHex(i),n.material.opacity=.55,n.visible=!0,n.life=.07}spray(e,t,i,n,r,o,a,l){for(let c=0;c<i;c++){let h=this.pi++%Fr,d=h*3;this.pp[d]=e.x,this.pp[d+1]=e.y,this.pp[d+2]=e.z,this.pv[d]=(t.x+(Math.random()-.5)*1.4)*n*Math.random(),this.pv[d+1]=(t.y+(Math.random()-.3)*1.4)*n*Math.random(),this.pv[d+2]=(t.z+(Math.random()-.5)*1.4)*n*Math.random();let u=.6+Math.random()*.4;this.pc[d]=r*u,this.pc[d+1]=o*u,this.pc[d+2]=a*u,this.pl[h]=l*(.5+Math.random()*.5)}}impact(e,t){this.spray(e,t,7,3.2,.75,.68,.55,.45),this.spray(e,t,3,6,1,.8,.4,.15);let i=this.dec[this.di++%this.dec.length];i.position.set(e.x+t.x*.012,e.y+t.y*.012,e.z+t.z*.012),i.lookAt(this._v.set(e.x+t.x,e.y+t.y,e.z+t.z)),i.rotation.z=Math.random()*6,i.scale.setScalar(1),i.visible=!0}blood(e,t){this.spray(e,t,10,2.6,.5,.04,.03,.5)}muzzle(e){this.flash.position.copy(e),this.flash.intensity=45}shell(e,t){this.spray(e,t,1,2.6,.9,.68,.25,.7)}puff(e,t,i,n=9079434,r=.4,o=.5){let a=this.puffs[this.pfi++%this.puffs.length];a.position.copy(e),a.scale.setScalar(t*.5),a.size=t,a.life=a.max=i,a.rise=r,a.op=o,a.material.color.setHex(n),a.material.rotation=Math.random()*6,a.visible=!0}explosion(e){this.boom.position.set(e.x,e.y+.6,e.z),this.boom.intensity=900;let t=this._v.set(0,1,0);this.spray(e,t,40,14,1,.7,.25,.5),this.spray(e,t,30,9,.35,.33,.3,1.1);for(let n=0;n<6;n++)this.puff(new P(e.x+(Math.random()-.5)*2,e.y+.5+Math.random(),e.z+(Math.random()-.5)*2),3+Math.random()*2,2.2+Math.random(),5591114,.9,.55);let i=this.dec[this.di++%this.dec.length];i.position.set(e.x,Math.max(.02,e.y-.04),e.z),i.rotation.set(-Math.PI/2,0,Math.random()*6),i.scale.setScalar(14),i.visible=!0}update(e){for(let r of this.tr)r.visible&&(r.life-=e,r.material.opacity=Math.max(0,r.life/.07)*.55,r.life<=0&&(r.visible=!1));let{pp:t,pv:i,pl:n}=this;for(let r=0;r<Fr;r++){if(n[r]<=0)continue;let o=r*3;n[r]-=e,i[o+1]-=9*e,t[o]+=i[o]*e,t[o+1]+=i[o+1]*e,t[o+2]+=i[o+2]*e,n[r]<=0&&(t[o+1]=-999)}this.pg.attributes.position.needsUpdate=!0,this.pg.attributes.color.needsUpdate=!0,this.flash.intensity>0&&(this.flash.intensity=Math.max(0,this.flash.intensity-e*700)),this.boom.intensity>0&&(this.boom.intensity=Math.max(0,this.boom.intensity-e*4500));for(let r of this.puffs)if(r.visible){r.life-=e;let o=1-r.life/r.max;r.scale.setScalar(r.size*(.5+o*.7)),r.position.y+=r.rise*e,r.material.opacity=r.op*Math.min(1,o*6)*Math.min(1,r.life/r.max*2.2),r.life<=0&&(r.visible=!1)}}};function Xp(s){function e(r,o,a,l){let c=bi(s.world.colliders,r.x,r.y,r.z,o.x,o.y,o.z,a,"bullet"),h={d:c?c.d:a,kind:c?"world":null,wh:c,e:null,part:null,mult:1};for(let d of s.enemies){if(d.dead||d===l)continue;let u=d.rayHit(r,o,h.d);u&&(h.d=u.d,h.kind="enemy",h.e=d,h.part=u.part,h.mult=u.mult)}for(let d of s.civs||[]){if(d.dead)continue;let u=d.ch.rayHit(r,o,h.d,s.frame);u&&(h.d=u.d,h.kind="civ",h.e=d,h.part=u.part,h.mult=u.mult)}if(l!=="player"&&!s.player.dead){let d=bi(s.playerBox(),r.x,r.y,r.z,o.x,o.y,o.z,h.d,"bullet");d&&(h.d=d.d,h.kind="player",h.e=null)}return h}let t={x:0,y:0,z:0},i={x:0,y:0,z:0};function n(r,o,a){let l=e(r,o,250,"player");t.x=r.x+o.x*l.d,t.y=r.y+o.y*l.d,t.z=r.z+o.z*l.d;let c=a.x-r.x,h=a.y-r.y,d=a.z-r.z,u=Math.hypot(c,h,d);if(u>.05){let x=bi(s.world.colliders,r.x,r.y,r.z,c/u,h/u,d/u,u,"bullet");if(x)return{d:x.d,kind:"world",wh:x,from:r,dir:{x:c/u,y:h/u,z:d/u},blocked:!0}}i.x=t.x-a.x,i.y=t.y-a.y,i.z=t.z-a.z;let f=Math.hypot(i.x,i.y,i.z)||1;i.x/=f,i.y/=f,i.z/=f;let p=e(a,i,l.kind?f+.6:250,"player");return p.from=a,p.dir=i,p}return{trace:e,playerRound:n}}var Zv=[[-8,-10],[-2.5,-10],[5,-10],[-6,-25],[1.2,-25],[-4.4,-50],[2.6,-50],[-7.2,-75],[-.6,-75],[5.6,-75],[-3.3,-100],[.4,-100],[3.6,-100]],Jv=[{x:8,z:-25,amp:4,sp:1.4},{x:8,z:-50,amp:4,sp:2.4}],jv=[{x:-11,z:-18,note:"steel plate"},{x:-11,z:-32,note:"chain-link fence"}],Qv=[[10,-11.5],[11.6,-13],[9.2,-14.2]];Pp("range",(s,e,t)=>{s.box("grass",3359019,0,-1,-50,90,1,160,{col:!1,tint:0}),s.box("dirt",4866099,0,0,-50,28,.015,122,{col:!1,tint:0}),s.box("concrete",5921886,0,0,8,28,.03,7,{col:!1,tint:0}),bt(s,"concrete",5264213,-14.5,-110.5,14.5,-110.5,6),bt(s,"concrete",5264213,-14.5,11.5,14.5,11.5,3.2),bt(s,"concrete",5264213,-14.5,-110.5,-14.5,11.5,3.2),bt(s,"concrete",5264213,14.5,-110.5,14.5,11.5,3.2);for(let i of[-9,-3,3,9])s.box("wood",5917238,i,0,4.6,2.4,.9,.5),s.box("plain",2764081,i-2.9,0,5,.12,3,.12,{col:!1});s.box("metal",3422774,0,3,7.5,28,.15,7.6);for(let i of[10,25,50,75,100])s.box("plain",14211280,-13.6,0,-i,.12,1.6,.12,{col:!1,tint:0}),s.box("emis",15249482,-13.6,1.6,-i,.5,.22,.06,{col:!1,tint:0});s.box("metal",4870232,-11,0,-17,2,2.2,.12),bt(s,"fence",9080982,-12.6,-31,-9.4,-31,2.4,[],.1,{sight:!1}),mt(s,-6,-6,1.1),Ji(s,5,-6,3,!0),Ji(s,10.3,-9.4,4.6,!0),Ji(s,7.6,-12.6,5,!1),bt(s,"concrete",5790295,12.2,-15.5,14.3,-15.5,1.6);for(let i of[-8,-30,-55,-80,-104])fn(e,t,16773336,i>-20?55:85,44,0,7,i);return{name:"TRAINING RANGE",range:!0,bounds:{x0:-16,x1:16,z0:-112,z1:13},spawn:{x:0,z:7,yaw:0},env:{fog:[725015,.005],bg:527378,hemi:[9676488,2764836,3.2],moon:[11847402,3.4,[-30,60,25]],viewRange:40,detect:1,shotMul:1,amb:"forest"},objective:{pos:[0,0,-50]},extraction:{pos:[0,0,9999]},anchors:[],entries:[{id:"line",name:"firing line",x:0,z:7,yaw:0}],exits:[],routes:[],posts:{objective:[],entrance:[]},panel:null,guards:0,reinforce:[],pickups:[["ammo",-12.5,8.5],["med",12.5,8.5]]}});var eM=new At(.5,.95,.04),tM=new At(.26,.3,.04),iM=new At(.06,.5,.06),nM=new At(.16,.16,.045),xc=class{constructor(e){this.g=e,this.targets=[],this.t=0,this.s={shots:0,hits:0,heads:0},this.last=null,this.msg="",this.att=JSON.parse(JSON.stringify(e.loadout.att)),this.dummies=[];let t=(i,n,r={})=>{let o=new vt,a=new ni({color:11048040}),l=(d,u,f)=>{let p=new ke(d,u);return p.position.y=f,p.castShadow=!0,o.add(p),p};l(iM,new ni({color:2764081}),.25),l(eM,a,.975),l(tM,a,1.6),l(nM,new nt({color:14209216}),1.05),o.position.set(i,0,n),e.scene.add(o);let c=(d,u,f,p)=>{let x={x0:i-f,x1:i+f,y0:d,y1:u,z0:n-.03,z1:n+.03,solid:!1,sight:!1,bullet:!0,zone:p};return e.world.colliders.push(x),x},h={g:o,body:a,x:i,z:n,cols:[c(.5,1.45,.25,"body"),c(1.45,1.75,.13,"head")],down:0,flash:0,dmg:0,...r};return h.cols.forEach(d=>d.target=h),this.targets.push(h),h};Zv.forEach(([i,n])=>t(i,n)),Jv.forEach(i=>t(i.x,i.z,{move:i})),jv.forEach(i=>t(i.x,i.z,{note:i.note})),Qv.forEach(([i,n])=>t(i,n,{pit:!0})),t(13.2,-17,{pit:!0,note:"behind the wall"}),this.spawnDummies()}spawnDummies(){let e=this.g;for(let[t,i]of[[-10.5,-8.5],[11,-40]]){if(this.dummies.some(r=>!r.dead&&r.pos.x===t))continue;let n=e.spawnEnemy(t,i,[[t,i]],{duty:"post",wait:[1e9,1e9]});n.pos.set(t,0,i),n.yaw=n.baseYaw=Math.PI,n.waitT=1e9,n.passive=!0,n.hear=()=>{},n.onAlert=()=>{},n.engage=()=>{},n.evade=()=>!1,n.sync(),this.dummies.push(n)}}falloff(e,t){return e.falloff&&t>e.falloff[0]?1-(1-e.falloff[1])*Math.min(1,(t-e.falloff[0])/(e.falloff[0]*1.5)):1}onShot(e,t,i,n){n&&(this.s.shots++,this.cur=null);let r=e.kind==="world"&&e.wh.c.target,o=r?e.wh.c.zone:e.kind==="enemy"?e.part:null;if(!o)return;let a=Math.hypot(t.x-this.g.player.pos.x,t.z-this.g.player.pos.z),l=i.dmg*(o==="head"?i.head||2.5:r?1:e.mult)*this.falloff(i,e.d);this.cur||(this.s.hits++,o==="head"&&this.s.heads++,this.cur=this.last={dist:a,zone:o,dmg:0,n:0}),this.cur.dmg+=l,this.cur.n++,o==="head"&&(this.cur.zone="head"),r&&(r.flash=.18,r.dmg+=l,r.body.color.setHex(o==="head"?16734794:16765024),r.dmg>=100&&this.drop(r),this.g.audio.tone(o==="head"?1900:1300,.07,{vol:.12,type:"triangle"}))}drop(e){e.down=1.8,e.dmg=0,e.cols.forEach(t=>t.bullet=!1)}onBlast(e){let t=0;for(let i of this.targets)i.down>0||Math.hypot(i.x-e.x,i.z-e.z)>7||!this.g.losB(e.x,e.y+.35,e.z,i.x,1.1,i.z+.06)||(this.drop(i),t++);this.msg=`GRENADE: ${t} target${t===1?"":"s"} knocked down`,this.msgT=5}key(e){let t=this.g.player,i=(r,o)=>r[(r.indexOf(o)+1)%r.length];if(t.busy()||t.adsF>.1)return;let n=r=>Object.keys(xt).filter(o=>xt[o].slot===r);if(e==="Digit5"||e==="Digit6"){let r=e==="Digit5"?0:1,o=i(n(r?"secondary":"primary"),t.slots[r].id);t.setSlot(r,o,this.att[o]),t.switchTo(r)}else if(t.cur<2){let r=t.slot.id,o=this.att[r],a=xt[r];if(e==="Digit7")o.optic=i(a.optics,o.optic);else if(e==="Digit8"&&a.muzzle)o.muzzle=!o.muzzle;else return;t.setSlot(t.cur,r,o)}this.g.audio.click(.4)}update(e){let t=this.g,i=t.player;this.t+=e;for(let n of this.targets){if(n.move){let r=n.move.x+Math.sin(this.t*n.move.sp/n.move.amp)*n.move.amp;n.x=r,n.g.position.x=r,n.cols[0].x0=r-.25,n.cols[0].x1=r+.25,n.cols[1].x0=r-.13,n.cols[1].x1=r+.13}n.flash>0&&(n.flash-=e)<=0&&n.body.color.setHex(11048040),n.down>0&&(n.down-=e,n.g.rotation.x+=((n.down>.3?-1.45:0)-n.g.rotation.x)*Math.min(1,e*12),n.down<=0&&(n.g.rotation.x=0,n.cols.forEach(r=>r.bullet=!0)))}for(let n of this.dummies)n.percT=1e9,n.los=!1,n.detect=0,n.waitT=1e9,n.dead&&!n.gone&&n.deadT>2.5&&(n.gone=!0,t.scene.remove(n.ch.root),t.enemies.splice(t.enemies.indexOf(n),1));this.dummies.some(n=>n.gone)&&(this.dummies=this.dummies.filter(n=>!n.gone),this.spawnDummies());for(let n of i.slots)!n.st.melee&&n.reserve<n.st.mag&&(n.reserve=n.st.reserve);for(let n of["frag","flash","smoke"])i.inv[n]<=0&&!t.gren.list.length&&(i.inv[n]=3);i.dead&&(i.dead=!1,i.hp=100,i.pos.set(0,0,7),i.vel.set(0,0,0)),this.msgT>0&&(this.msgT-=e)<=0&&(this.msg="")}hud(){let e=this.s,t=this.last,i=e.shots?Math.round(e.hits/e.shots*100):0;return`<div class="o-now">SHOTS ${e.shots} \xB7 HITS ${e.hits} \xB7 HEAD ${e.heads} \xB7 ${i}%</div><div class="o-now">${t?`LAST HIT ${t.dist.toFixed(0)} M \xB7 ${t.zone.toUpperCase()} \xB7 ${Math.round(t.dmg)} DMG${t.n>1?" ("+t.n+" pellets)":""}`:"LAST HIT \u2014"}</div>`+(this.msg?`<div class="o-now">${this.msg}</div>`:"")+'<div class="o-todo">[5] primary \xB7 [6] secondary \xB7 [7] optic \xB7 [8] suppressor</div><div class="o-todo">Targets at 10 / 25 / 50 / 75 / 100 m \xB7 two moving \xB7 two behind cover \xB7 grenade pit right</div>'}};var _c=(s,e)=>Math.atan2(-s,-e),yc=class{constructor(e,t,i,n,r){this.g=e,this.kind=t,this.fallback=r,this.hp=100,this.dead=!1,this.deadT=0,this.pos=new P(i,e.world.nav.height(i,n),n),this.yaw=Math.random()*6.28,this.state=t==="hostage"?"held":"idle",this.path=null,this.pi=0,this.trav=null,this.rep=0,this.moved=!1,this.reachedHint=!1,this.seenByPlayer=!1,this.speed=0,this.t=Math.random()*9,this.ch=new os(t,null),e.scene.add(this.ch.root),this.sync(),this.ch.refresh()}sync(){this.ch.root.position.copy(this.pos),this.ch.root.rotation.y=this.yaw}canSecure(){return!this.dead&&(this.state==="held"||this.state==="surrender")}secure(){this.state="follow",this.rep=0,this.g.audio.pickup()}alarm(){if(this.kind!=="hvt"||this.state!=="idle"||!this.fallback)return;let e=this.fallback.stand;this.path=this.g.world.nav.path(this.pos.x,this.pos.z,e[0],e[1]),this.pi=0,this.path&&(this.state="flee",this.moved=!0,this.g.sec.relocateDetail(this.fallback))}damage(e){this.dead||(this.hp-=e,this.hp<=0?(this.dead=!0,this.ch.die()):this.kind==="hvt"&&this.state==="idle"&&this.alarm())}follow(e,t){let i=this.pos,n=this.g.world.nav;if(this.trav){let h=this.trav;h.t+=e/.8;let d=Math.min(1,h.t);return i.x=h.x0+(h.x1-h.x0)*d,i.z=h.z0+(h.z1-h.z0)*d,i.y=h.y0+(h.y1-h.y0)*d+Math.sin(Math.PI*d)*(h.h-Math.min(h.y0,h.y1)+.1)*(h.vault?1:.3),d>=1&&(this.trav=null,this.pi++),this.speed=2,!1}if(!this.path||this.pi>=this.path.length)return!0;let r=this.path[this.pi];if(r.link)return this.trav={x0:i.x,z0:i.z,y0:i.y,x1:r.x,z1:r.z,y1:r.y,h:r.link.h,vault:r.link.type==="vault",t:0},r.link.type!=="drop"&&this.ch.playFull("ClimbUp_1m",{speed:2.3}),!1;let o=r.x-i.x,a=r.z-i.z,l=Math.hypot(o,a);if(l<.25)return this.pi++,this.pi>=this.path.length;let c=Math.min(l,t*e);return i.x+=o/l*c,i.z+=a/l*c,i.y+=(n.height(i.x,i.z)-i.y)*Math.min(1,e*10),this.yaw=_c(o,a),this.speed=t,!1}update(e){let t=this.g,i=t.player;if(this.dead){this.deadT<4&&(this.deadT+=e,this.ch.update(e,{speed:0}));return}this.t+=e,this.speed=0;let n=i.pos.x-this.pos.x,r=i.pos.z-this.pos.z,o=Math.hypot(n,r),a=o<40&&t.los(this.pos.x,this.pos.y+1.5,this.pos.z,i.eyePos.x,i.eyePos.y,i.eyePos.z);this.vis=a&&o<35,this.vis&&(this.seenByPlayer=!0,this.lastSeen=[this.pos.x,this.pos.y,this.pos.z]);let l=!1;if(this.state==="held")l=!0,o<6&&(this.yaw=_c(n,r));else if(this.state==="idle")this.yaw+=Math.sin(this.t*.4)*e*.3,(t.sec.level>=2||a&&o<13)&&this.alarm(),a&&o<4.5&&(this.state="surrender");else if(this.state==="flee")this.follow(e,4.6)&&(this.state="cower"),a&&o<3.2&&(this.state="surrender",this.path=null);else if(this.state==="cower")l=!0,a&&o<5&&(this.state="surrender");else if(this.state==="surrender")l=!0,this.yaw=_c(n,r);else if(this.state==="follow"){if((this.rep-=e)<=0)if(this.rep=.45,o>2.6&&!this.trav){let c=t.world.nav.path(this.pos.x,this.pos.z,i.pos.x,i.pos.z,400);c&&(this.path=c,this.pi=0)}else o<=2.6&&(this.path=null);o>2.2?this.follow(e,o>7?5.6:3.8):this.trav||(this.yaw=_c(n,r)),l=i.crouch&&this.speed===0}this.moved&&this.fallback&&!this.reachedHint&&Math.hypot(i.pos.x-this.g.mission.stage?.anchors[0].at[0],i.pos.z-this.g.mission.stage?.anchors[0].at[2])<7&&(this.reachedHint=!0),this.ch.update(e,{speed:this.trav?0:this.speed,crouch:l,aim:!1,lean:0}),this.sync()}};var gi={intel:{name:"INTELLIGENCE RECOVERY",short:"Intel recovery",desc:"Obtain classified material and extract",lengths:["quick","standard","extended"]},capture:{name:"HIGH-VALUE TARGET CAPTURE",short:"HVT capture",desc:"Take the target alive and bring him out",lengths:["quick","standard","extended"]},sabotage:{name:"SABOTAGE OPERATION",short:"Sabotage",desc:"Disable facility infrastructure",lengths:["quick","standard","extended"]},rescue:{name:"HOSTAGE RESCUE",short:"Hostage rescue",desc:"Free the hostage and escort them out",lengths:["quick","standard","extended"]},multi:{name:"TACTICAL OPERATION",short:"Tactical operation",desc:"Linked objectives across the site",lengths:["standard","extended"]}},ls={quick:{name:"QUICK",desc:"1 objective \xB7 about 4\u20138 min",extra:0},standard:{name:"STANDARD",desc:"2 linked objectives \xB7 about 7\u201312 min",extra:1},extended:{name:"EXTENDED",desc:"3 linked objectives \xB7 stronger security",extra:2}},sM={intel:{quick:[["retrieve"],["hack"]],standard:[["keycard","hack"],["search","hack"]],extended:[["sab:security","keycard","hack"],["sab:power","search","hack"]]},capture:{quick:[["capture"]],standard:[["sab:comms","capture"],["hack","capture"]],extended:[["sab:comms","hack","capture"],["sab:power","keycard","capture"]]},sabotage:{quick:[["sab:comms"],["sab:security"],["sab:power"],["sab:charge"]],standard:[["sab:comms","sab:charge"],["sab:security","sab:power"],["sab:power","sab:charge"],["sab:comms","sab:security"]],extended:[["sab:comms","sab:security","sab:charge"],["sab:power","sab:comms","sab:charge"]]},rescue:{quick:[["rescue"]],standard:[["keycard","rescue"],["sab:security","rescue"]],extended:[["sab:comms","keycard","rescue"],["sab:power","hack","rescue"]]},multi:{standard:[["sab:security","retrieve"],["sab:comms","hack"],["keycard","sab:charge"]],extended:[["sab:comms","retrieve","rescue"],["sab:security","hack","capture"],["keycard","hack","sab:charge"]]}},Zo={retrieve:{title:"Recover the intelligence package",obj:"intel",hold:0,prompt:"Take intelligence package",done:"INTEL SECURED"},hack:{title:"Access the secure terminal",obj:"terminal",hold:3,prompt:"Hold to access secure terminal",done:"DATA EXTRACTED",indoor:1},keycard:{title:"Obtain the access credential",obj:"keycard",hold:0,prompt:"Take access credential",done:"CREDENTIAL ACQUIRED"},search:{title:"Find the classified file (3 possible locations)",obj:"case",hold:1.2,prompt:"Hold to search document case",done:"CLASSIFIED FILE FOUND",anchors:3},"sab:comms":{title:"Disable the communications relay",obj:"radio",hold:2.5,prompt:"Hold to disable communications",done:"COMMUNICATIONS DOWN \u2014 NO RADIO REPORTS, NO REINFORCEMENTS",indoor:1},"sab:security":{title:"Disable the security control system",obj:"secpanel",hold:2.5,prompt:"Hold to disable security control",done:"SECURITY CONTROL OFFLINE \u2014 THE ALARM CANNOT BE RAISED",indoor:1},"sab:power":{title:"Shut down the generator",obj:"generator",hold:2.5,prompt:"Hold to shut down generator",done:"POWER DOWN \u2014 THE SITE IS DARK",fixed:{forest:"generator",warehouse:"machine"}},"sab:charge":{title:"Plant a demolition charge",obj:"charge",hold:3,prompt:"Hold to plant charge",done:"CHARGE PLANTED \u2014 12 SECONDS, GET CLEAR"},capture:{title:"Capture the target alive",civ:"hvt",hold:1.5,prompt:"Hold to restrain target",done:"TARGET IN CUSTODY \u2014 ESCORT HIM TO EXTRACTION"},rescue:{title:"Free the hostage",civ:"hostage",hold:1.5,prompt:"Hold to free hostage",done:"HOSTAGE FREED \u2014 ESCORT THEM TO EXTRACTION"}};function rM(s){let e=s>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Gn=(s,e)=>Math.hypot(s[0]-e[0],s[s.length-1]-e[e.length-1]),qp="sp21_history";function Yp(){try{return JSON.parse(localStorage.getItem(qp)||"{}")}catch{return{}}}function oM(s){try{localStorage.setItem(qp,JSON.stringify(s))}catch{}}function Kp(s,e){let t=s[e.map]||(s[e.map]={zones:[],entry:null,exit:null,plan:null});t.zones=[e.primary.id,...t.zones.filter(i=>i!==e.primary.id)].slice(0,5),t.entry=e.entry.id,t.exit=e.exit.id,t.plan=e.plan.join(">"),oM(s)}function aM(s,e,t,i,n){let r=rM(t),o=y=>y[Math.floor(r()*y.length)],a=i[s.id]||{zones:[]},l=sM[e.type][e.length],c=l.filter(y=>y.join(">")!==a.plan);c.length&&(l=c);let h=o(l),d=s.entries.filter(y=>y.id!==a.entry||s.entries.length===1||n),u=o(d.length?d:s.entries),f=[u.x,u.z],p=new Set,x=[],m=s.anchors.find(y=>y.id===a.zones[0]),g=(y,S)=>{let C=Zo[y];if(C.fixed){let D=s.anchors.find(k=>k.id===C.fixed[s.id]);if(D&&!p.has(D.id))return D}let R=null,N=-1e9;for(let D of s.anchors){if(p.has(D.id)||Gn(D.at,f)<(n?14:24)||(C.indoor||C.civ)&&!D.indoor&&!n)continue;let k=a.zones.indexOf(D.id),L=r()*2;k>=0&&(L-=S?6-k:1.5),S&&m&&D!==m&&Gn(D.at,m.at)<16&&(L-=2);for(let F of x)for(let H of F.anchors)Gn(D.at,H.at)<12&&(L-=1.5);L>N&&(N=L,R=D)}return R};for(let y=0;y<h.length;y++){let S=h[y],C=Zo[S],R=C.anchors||1,N=[];for(let D=0;D<R;D++){let k=g(S,y===h.length-1&&D===0);if(!k)return null;p.add(k.id),N.push(k)}x.push({kind:S,...C,anchors:N,correct:Math.floor(r()*R),done:!1})}let _=x[x.length-1].anchors[0],M=null;if(x.some(y=>y.civ==="hvt")){let y=s.anchors.filter(S=>!p.has(S.id)&&Gn(S.at,_.at)>14&&Gn(S.at,_.at)<60);M=y.length?o(y):null}let v=s.exits.filter(y=>Gn(y.pos,_.at)>18&&Gn(y.pos,f)>12);v.length||(v=s.exits);let b=v.filter(y=>y.id!==a.exit),E=o(b.length?b:v);return{map:s.id,type:e.type,length:e.length,seed:t,plan:h,entry:u,stages:x,primary:_,fallback:M,exit:E}}function Fu(s,e){let t=s.nav,i=[[e.entry.x,e.entry.z]];for(let n of e.stages)for(let r of n.anchors){let o=t.nearest(r.stand[0],r.stand[1]);if(!o||Math.hypot(o.x-r.stand[0],o.z-r.stand[1])>1.3||Math.hypot(o.x-r.at[0],o.z-r.at[2])>2.3||Math.abs(o.y-(r.at[1]>.5&&!r.indoor?0:o.y))>2)return`anchor ${r.id} not standable`;i.push([o.x,o.z])}if(e.fallback&&i.splice(i.length,0,e.fallback.stand),i.push([e.exit.pos[0],e.exit.pos[2]]),t.blocked(e.entry.x,e.entry.z))return"entry blocked";for(let n=0;n<i.length-1;n++)if(!t.path(i[n][0],i[n][1],i[n+1][0],i[n+1][1]))return`no route between waypoint ${n} and ${n+1}`;return null}function $p(s,e,t={}){let i=e.seed!=null?e.seed>>>0:Math.random()*4294967296>>>0;for(let o=0;o<28;o++){let a=aM(s,e,i+o*7919>>>0,t,o>14);if(a&&!Fu(s,a))return a}let n=e.type==="capture"?"capture":e.type==="rescue"?"rescue":e.type==="sabotage"?"sab:comms":"retrieve",r=s.anchors[0];return{map:s.id,type:e.type,length:"quick",seed:i,plan:[n],entry:s.entries[0],stages:[{kind:n,...Zo[n],anchors:[r],correct:0,done:!1}],primary:r,fallback:null,exit:s.exits[0],fallbackUsed:!0}}function Zp(s){let e=s.stages.map((t,i)=>`${i+1}. ${t.title}${t.civ||t.kind==="search"?"":" \u2014 "+t.anchors[0].name}`);return e.push(`${s.stages.length+1}. Extract via the ${s.exit.name}`),e}function Jp(s,e,t){let i=[e.entry.x,e.entry.z],n=[],r=(l,c=26)=>Gn(l,i)>c,o=l=>[...l].sort(()=>Math.random()-.5);o(e.primary.posts).filter(l=>r(l)).slice(0,3).forEach(l=>n.push({p:l,duty:"objective",wait:[5,12]}));for(let l of e.stages)for(let c of l.anchors)c!==e.primary&&o(c.posts).filter(h=>r(h)).slice(0,l.kind==="search"?1:2).forEach((h,d)=>d<(e.stages.length>2?1:2)&&n.push({p:h,duty:"post",wait:[6,14]}));let a=l=>n.some(c=>Gn(c.p,l)<3);for(let l of o(s.posts.entrance.map(c=>[c[0],c[1]]))){if(n.length>=t-3)break;r(l,30)&&!a(l)&&n.push({p:l,duty:"post",wait:[6,14]})}for(let l of o(s.routes)){if(n.length>=t)break;let c=l.p.filter(h=>r(h,30));c.length&&n.push({p:c[Math.floor(Math.random()*c.length)],duty:"patrol",route:l.p})}return n}var vc=class{constructor(e,t){this.g=e,this.def=t,this.i=0,this.hold=0,this.items=[],this.civ=null,this.failed=null,this.timers=[],this.t=0,this.hasKey=!1}get stage(){return this.def.stages[this.i]||null}get complete(){return this.i>=this.def.stages.length}begin(){let e=this.g;this.def.stages.forEach((t,i)=>{if(t.civ){let n=t.anchors[0];this.civ=new yc(e,t.civ,n.stand[0],n.stand[1],this.def.fallback),t.civRef=this.civ,e.civs.push(this.civ);return}t.anchors.forEach((n,r)=>this.items.push({stage:i,k:r,kind:t.obj,pos:n.at,mesh:e.makeInteractable(t.obj,n.at[0],n.at[1],n.at[2]),taken:!1}))}),this.refocus()}focus(){let e=this.stage;if(!e)return this.def.exit.pos;if(e.civ){let t=e.civRef;return t.state==="follow"||t.vis?[t.pos.x,t.pos.y,t.pos.z]:t.lastSeen?t.lastSeen:t.moved&&t.reachedHint?this.def.fallback.at:e.anchors[0].at}if(e.kind==="search"){let t=this.items.find(i=>i.stage===this.i&&!i.taken);return t?t.pos:e.anchors[0].at}return e.anchors[0].at}refocus(){let e=this.g.world,t=this.stage,i=t?t.anchors[0]:this.def.primary;e.objective.pos=i.at,e.posts.objective=i.posts}lines(){let e=this.def.stages.map((t,i)=>({t:t.title+(t.civ&&t.civRef.moved&&i===this.i&&t.civRef.state!=="follow"?" \u2014 he has moved":""),state:i<this.i?"done":i===this.i?"now":"todo"}));return e.push({t:`Extract \u2014 ${this.def.exit.name}`+(this.civ&&this.complete&&!this.civNear()?" (bring "+(this.civ.kind==="hvt"?"the target":"the hostage")+")":""),state:this.complete?"now":"locked"}),e}civNear(){let e=this.civ,t=this.def.exit.pos;return!e||!e.dead&&Math.hypot(e.pos.x-t[0],e.pos.z-t[2])<8}fail(e){this.failed||(this.failed=e)}finish(e){let t=this.g,i=t.sec,n=e.anchors[0],r=this.i===this.def.stages.length-1;e.done=!0,this.i++,this.hold=0,t.audio.objective(),t.toast(e.done2||Zo[e.kind].done,4),e.civ&&!i.commsDown&&this.timers.push({t:4,fn:()=>{i.sealExits()&&t.say(t.enemies.find(o=>!o.dead)||{pos:t.player.pos},"Seal the exits! Nobody leaves!")}}),e.kind==="keycard"?this.hasKey=!0:e.kind==="sab:comms"?i.commsDown=!0:e.kind==="sab:security"?i.panelDown=!0:e.kind==="sab:power"?t.setPower(!1):e.kind==="sab:charge"&&this.timers.push({t:12,fn:()=>{t.gren.detonate({type:"frag",pos:new P(n.at[0],n.at[1]+.3,n.at[2]),owner:"charge"}),i.raise(2,"EXPLOSION ON SITE"),i.setReport(n.at[0],n.at[2],null,"body")}}),r&&e.kind!=="sab:charge"?i.panelDown?t.toast(Zo[e.kind].done+" \u2014 NO ALARM: SECURITY CONTROL IS OFFLINE",4):(i.report={x:n.at[0],z:n.at[2],t:i.t,kind:"alarm"},i.lockdown(e.civ?"SITE LOCKDOWN \u2014 THEY KNOW":"SILENT ALARM \u2014 LOCKDOWN")):r||this.timers.push({t:Ce(25,45),fn:()=>i.discover(n)}),this.refocus()}update(e,t){let i=this.g,n=i.player,r=this.stage;this.t+=e;for(let h=this.timers.length-1;h>=0;h--)if((this.timers[h].t-=e)<=0){let d=this.timers[h].fn;this.timers.splice(h,1),d()}if(this.civ&&this.civ.dead&&this.fail(this.civ.kind==="hvt"?"THE TARGET WAS KILLED":"THE HOSTAGE WAS KILLED"),!r)return"";let o=(h,d=2.5)=>Math.hypot(h[0]-n.pos.x,h[2]-n.pos.z)<d&&Math.abs(h[1]-n.pos.y)<2.2,a=null,l="";if(r.civ){let h=r.civRef;h.canSecure()&&o([h.pos.x,h.pos.y,h.pos.z],2.4)?a=h:!h.dead&&h.kind==="hvt"&&h.state!=="surrender"&&o([h.pos.x,h.pos.y,h.pos.z],9)&&h.seenByPlayer&&(l="Get close \u2014 he will give up")}else a=this.items.find(h=>h.stage===this.i&&!h.taken&&o(h.pos));if(!a)return this.hold=Math.max(0,this.hold-e*2),l;l=`<b>E</b>${r.prompt}`;let c=r.hold;if(c?t.k.KeyE:t.e){if(this.hold+=e,!c||this.hold>=c)if(this.hold=0,r.civ)a.secure(),this.finish(r);else if(r.kind==="search"&&a.k!==r.correct&&this.items.filter(h=>h.stage===this.i&&!h.taken).length>1)a.taken=!0,i.scene.remove(a.mesh),i.toast("NOTHING HERE \u2014 CHECK THE NEXT LOCATION",2.5),i.audio.click(.5);else{a.taken=!0,a.mesh.screen?a.mesh.screen.material.color.setHex(16758344):r.kind!=="sab:charge"&&i.scene.remove(a.mesh);for(let h of this.items)h.stage===this.i&&!h.taken&&r.kind==="search"&&(h.taken=!0,i.scene.remove(h.mesh));this.finish(r)}}else this.hold=Math.max(0,this.hold-e*2);return l}};var Mc=class{init(){if(this.ctx){this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e,i=t.createDynamicsCompressor();this.master=t.createGain(),this.master.gain.value=.75,this.master.connect(i),i.connect(t.destination);let n=t.sampleRate*2,r=this.nb=t.createBuffer(1,n,t.sampleRate),o=r.getChannelData(0);for(let a=0;a<n;a++)o[a]=Math.random()*2-1;this.amb=[]}out(e){if(!e||!this.ctx.createStereoPanner)return this.master;let t=this.ctx.createStereoPanner();return t.pan.value=Math.max(-1,Math.min(1,e)),t.connect(this.master),t}noise(e,{f:t=2e3,f2:i,q:n=.7,type:r="lowpass",vol:o=1,pan:a=0,at:l=0}={}){let c=this.ctx;if(!c)return;let h=c.currentTime+l,d=c.createBufferSource(),u=c.createBiquadFilter(),f=c.createGain();d.buffer=this.nb,d.loop=!0,u.type=r,u.Q.value=n,u.frequency.setValueAtTime(t,h),i&&u.frequency.exponentialRampToValueAtTime(i,h+e),f.gain.setValueAtTime(o,h),f.gain.exponentialRampToValueAtTime(.001,h+e),d.connect(u),u.connect(f),f.connect(this.out(a)),d.start(h,Math.random()),d.stop(h+e+.02)}tone(e,t,{f2:i,type:n="sine",vol:r=.3,pan:o=0,at:a=0}={}){let l=this.ctx;if(!l)return;let c=l.currentTime+a,h=l.createOscillator(),d=l.createGain();h.type=n,h.frequency.setValueAtTime(e,c),i&&h.frequency.exponentialRampToValueAtTime(i,c+t),d.gain.setValueAtTime(r,c),d.gain.exponentialRampToValueAtTime(.001,c+t),h.connect(d),d.connect(this.out(o)),h.start(c),h.stop(c+t+.02)}shot(e,t){if(t){this.noise(.09,{f:1700,f2:500,q:1.2,type:"bandpass",vol:e==="dmr"?.5:.36}),this.tone(170,.05,{f2:70,vol:.2,type:"triangle"}),this.click(.22);return}e==="ak"?(this.noise(.26,{f:2600,f2:300,vol:1}),this.tone(130,.2,{f2:38,vol:.9,type:"triangle"}),this.noise(.05,{f:5e3,type:"highpass",vol:.35})):e==="m4"?(this.noise(.17,{f:4200,f2:600,vol:.8}),this.tone(190,.12,{f2:60,vol:.55,type:"triangle"}),this.noise(.04,{f:6500,type:"highpass",vol:.4})):e==="sniper"?(this.noise(.55,{f:1800,f2:120,vol:1.3}),this.tone(80,.45,{f2:24,vol:1.2,type:"triangle"}),this.noise(.07,{f:4e3,type:"highpass",vol:.45}),this.noise(1.1,{f:420,f2:90,vol:.28,at:.1})):e==="dmr"?(this.noise(.4,{f:2200,f2:180,vol:1.1}),this.tone(95,.32,{f2:30,vol:1,type:"triangle"}),this.noise(.06,{f:4500,type:"highpass",vol:.4}),this.noise(.7,{f:500,f2:120,vol:.2,at:.08})):e==="shotgun"?(this.noise(.36,{f:1500,f2:160,vol:1.2}),this.tone(85,.3,{f2:28,vol:1.1,type:"triangle"})):e==="smg"?(this.noise(.1,{f:3800,f2:900,vol:.6}),this.tone(240,.07,{f2:100,vol:.4,type:"triangle"})):(this.noise(.11,{f:3400,f2:700,vol:.7}),this.tone(260,.09,{f2:90,vol:.5,type:"square"}))}enemyShot(e,t){let i=Math.max(.05,.75/(1+e*.07));this.noise(.22,{f:Math.max(500,2600-e*35),f2:250,vol:i,pan:t}),this.tone(120,.16,{f2:45,vol:i*.7,pan:t,type:"triangle"})}reload(e,t="rifle",i=.6){if(t==="shell"){this.noise(.05,{f:1500,type:"bandpass",q:3,vol:.4,at:e*i}),this.tone(520,.03,{vol:.08,type:"square",at:e*i});return}this.noise(.05,{f:t==="pistol"?2600:1700,type:"bandpass",q:4,vol:.4,at:e*i*.32}),this.tone(300,.04,{f2:150,vol:.12,at:e*i*.34}),this.noise(.06,{f:t==="pistol"?2200:1300,type:"bandpass",q:3,vol:.55,at:e*i}),this.tone(190,.05,{f2:90,vol:.2,type:"triangle",at:e*i});let n=e*Math.min(.97,i+(t==="pistol"?.28:.3));this.click(.6,n),this.noise(.07,{f:3e3,f2:1200,type:"bandpass",q:2,vol:.4,at:n+.07})}bolt(){this.click(.5,.28),this.noise(.08,{f:2400,f2:900,type:"bandpass",q:2,vol:.35,at:.36}),this.noise(.08,{f:900,f2:2600,type:"bandpass",q:2,vol:.35,at:.78}),this.click(.6,.92)}pump(e=0){this.noise(.07,{f:1100,f2:500,type:"bandpass",q:2,vol:.5,at:e}),this.noise(.07,{f:600,f2:1300,type:"bandpass",q:2,vol:.5,at:e+.16})}thud(e=.5){this.noise(.05,{f:900,f2:300,type:"bandpass",q:1.5,vol:.16*e})}swish(){this.noise(.16,{f:900,f2:3200,type:"bandpass",q:2,vol:.3})}stab(e){this.noise(.12,{f:500,f2:150,vol:.6}),this.tone(e?110:180,.12,{f2:60,vol:.4})}medkit(){for(let e=0;e<5;e++)this.noise(.12,{f:1200+e*200,type:"bandpass",q:2,vol:.14,at:e*.42})}stim(){this.noise(.25,{f:5e3,f2:1500,type:"highpass",vol:.2}),this.tone(440,.3,{f2:880,vol:.12,type:"sine",at:.1})}bounce(e=.3){this.tone(900,.04,{f2:500,vol:e,type:"square"}),this.noise(.03,{f:2500,type:"bandpass",q:4,vol:e})}explosion(e){let t=Math.max(.15,1.4/(1+e*.05));this.noise(.9,{f:900,f2:60,vol:t}),this.tone(70,.7,{f2:22,vol:t,type:"triangle"}),this.noise(1.6,{f:300,f2:60,vol:t*.35,at:.15})}flashbang(e){this.noise(.25,{f:6e3,type:"highpass",vol:.9}),this.tone(140,.25,{f2:50,vol:.7}),e>.3&&this.tone(3400,1.2+e*1.6,{vol:.09*Math.min(1.5,e),type:"sine",at:.05})}radio(){this.noise(.07,{f:2400,type:"bandpass",q:3,vol:.22}),this.tone(1250,.06,{vol:.07,type:"square",at:.07}),this.noise(.05,{f:2400,type:"bandpass",q:3,vol:.18,at:.5})}alert(e){(e>=3?[660,880,660,880]:e===2?[440,587]:[392]).forEach((i,n)=>this.tone(i,.22,{vol:.16,type:"sawtooth",at:n*.2}))}siren(e){let t=this.ctx;if(!t)return;if(this.sir){try{this.sir[0].stop(),this.sir[1].stop()}catch{}this.sir=null}if(!e)return;let i=t.createOscillator(),n=t.createOscillator(),r=t.createGain(),o=t.createGain();i.type="sawtooth",i.frequency.value=620,n.frequency.value=.45,r.gain.value=140,o.gain.value=.035,n.connect(r),r.connect(i.frequency),i.connect(o),o.connect(this.master),i.start(),n.start(),o.gain.setValueAtTime(.035,t.currentTime+14),o.gain.linearRampToValueAtTime(.012,t.currentTime+20),this.sir=[i,n]}click(e=.5,t=0){this.noise(.035,{f:3200,type:"bandpass",q:5,vol:e,at:t}),this.tone(900,.02,{vol:e*.2,type:"square",at:t})}step(e=.2){this.noise(.09,{f:500+Math.random()*250,f2:150,vol:e})}land(){this.noise(.16,{f:420,f2:90,vol:.45})}hit(e){this.tone(e?520:1500,e?.16:.05,{f2:e?240:1100,vol:.22,type:"square"})}hurt(){this.noise(.18,{f:700,f2:120,vol:.7}),this.tone(90,.2,{f2:50,vol:.5})}whiz(e){this.noise(.09,{f:2500,f2:6e3,type:"bandpass",q:6,vol:.18,pan:e})}pickup(){this.tone(660,.08,{vol:.2,type:"triangle"}),this.tone(990,.12,{vol:.2,type:"triangle",at:.08})}beep(e){this.tone(e?700:1100,.07,{f2:e?1300:600,vol:.14,type:"square"})}objective(){[523,659,784].forEach((e,t)=>this.tone(e,.18,{vol:.2,type:"triangle",at:t*.11}))}win(){[392,523,659,784,1047].forEach((e,t)=>this.tone(e,.5,{vol:.22,type:"triangle",at:t*.16}))}lose(){[330,262,196,131].forEach((e,t)=>this.tone(e,.6,{vol:.25,type:"sawtooth",at:t*.22}))}ambient(e){let t=this.ctx;if(!t)return;this.stopAmbient();let i=t.createGain();i.gain.value=0,i.gain.linearRampToValueAtTime(1,t.currentTime+2),i.connect(this.master);let n=t.createBufferSource(),r=t.createBiquadFilter(),o=t.createGain(),a=t.createOscillator(),l=t.createGain();if(n.buffer=this.nb,n.loop=!0,r.type="lowpass",r.frequency.value=e==="forest"?520:180,o.gain.value=e==="forest"?.16:.22,a.frequency.value=.11,l.gain.value=e==="forest"?.09:.03,a.connect(l),l.connect(o.gain),n.connect(r),r.connect(o),o.connect(i),n.start(),a.start(),this.amb=[n,a],e==="warehouse")for(let[c,h]of[[50,.05],[100,.02]]){let d=t.createOscillator(),u=t.createGain();d.frequency.value=c,u.gain.value=h,d.connect(u),u.connect(i),d.start(),this.amb.push(d)}this.ambGain=i,this.ambTimer=setInterval(()=>{if(t.state!=="running")return;let c=Math.random()*1.6-.8;if(e==="forest")if(Math.random()<.7)for(let h=0;h<3;h++)this.tone(4100+Math.random()*300,.04,{vol:.018,pan:c,at:h*.07});else this.tone(380,.5,{f2:300,vol:.02,pan:c});else Math.random()<.5&&this.tone(1400+Math.random()*900,.5,{vol:.02,pan:c,type:"triangle"})},1700)}stopAmbient(){clearInterval(this.ambTimer);for(let e of this.amb||[])try{e.stop()}catch{}this.ambGain&&this.ambGain.disconnect(),this.amb=[],this.ambGain=null,this.siren(!1)}};var ve=s=>document.getElementById(s),hs=location.search.includes("test"),kr=ve("c"),lt=new Yl({canvas:kr,antialias:!0,powerPreference:"high-performance"});lt.shadowMap.type=Cs;lt.autoClear=!1;lt.toneMapping=Co;lt.toneMappingExposure=1.5;var zu=new Pr(lt).fromScene(new Zl,.04).texture,A={state:"load",sel:{map:"forest",ai:"tactical",quality:"med",mission:"intel",length:"quick",seed:null},hist:Yp(),civs:[],sens:1,fov:75,loadout:Dp(),inp:{k:{},mx:0,my:0,lmb:!1,rmb:!1,lmbPressed:!1,jump:!1,e:!1},camera:new It(75,1,.08,600),wcam:new It(50,1,.01,5),audio:new Mc,enemies:[],stats:{},nv:!1,frame:0,v1:new P,v2:new P,v3:new P,pbox:[{bullet:!0}]};A.camera.rotation.order="YXZ";window.__SP=A;A.debugRender=()=>{let s=performance.now(),e=lt.getContext();return lt.info.autoReset=!1,lt.info.reset(),lt.setViewport(0,0,innerWidth,innerHeight),lt.clear(),lt.render(A.scene,A.camera),lt.clearDepth(),lt.render(A.wscene,A.wcam),e.readPixels(0,0,1,1,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array(4)),lt.info.autoReset=!0,{ms:Math.round(performance.now()-s),calls:lt.info.render.calls,tris:lt.info.render.triangles}};try{let s=JSON.parse(localStorage.getItem("sp2_settings")||"{}");s.sens&&(A.sens=s.sens),s.fov&&(A.fov=s.fov),s.quality&&(A.sel.quality=s.quality),s.vol!=null&&(A.vol=s.vol)}catch{}var jp=()=>{try{localStorage.setItem("sp2_settings",JSON.stringify({sens:A.sens,fov:A.fov,quality:A.sel.quality,vol:A.vol}))}catch{}},Qp=s=>(e,t,i,n,r,o)=>{let a=n-e,l=r-t,c=o-i,h=Math.hypot(a,l,c);return h<.01||!bi(A.world.colliders,e,t,i,a/h,l/h,c/h,h,s)};A.los=Qp("sight");A.losB=Qp("bullet");A.sound=(s,e,t,i)=>{for(let n of A.enemies){if(n===i||n.dead)continue;let r=Math.hypot(n.pos.x-s.x,n.pos.z-s.z);r<e*n.pr.hear&&n.hear(s,t,r)}if(t==="shot"||t==="explosion")for(let n of A.civs)Math.hypot(n.pos.x-s.x,n.pos.z-s.z)<e*.7&&n.alarm()};A.shout=s=>{for(let e of A.enemies)e===s||e.dead||Math.hypot(e.pos.x-s.pos.x,e.pos.z-s.pos.z)<s.pr.share&&e.onAlert(s.lkp.x+Ce(-2.5,2.5),s.lkp.z+Ce(-2.5,2.5))};A.say=(s,e)=>{Math.hypot(s.pos.x-A.player.pos.x,s.pos.z-A.player.pos.z)>45||(A.audio.radio(),ve("subt").innerHTML=`<b>RADIO</b>${e}`,ve("subt").style.opacity=1,Ec=2.8)};A.playerBox=()=>{let s=A.player,e=s.pos,t=A.pbox[0],i=s.leanX*.6,n=s.leanZ*.6;return t.x0=e.x+i-.3,t.x1=e.x+i+.3,t.z0=e.z+n-.3,t.z1=e.z+n+.3,t.y0=e.y,t.y1=e.y+s.height,A.pbox};var Gu=(s,e)=>{let t=A.player,i=s-t.pos.x,n=e-t.pos.z,r=Math.hypot(i,n)||1;return(i*Math.cos(t.yaw)-n*Math.sin(t.yaw))/r};A.enemyShotSound=s=>A.audio.enemyShot(s.pd,Gu(s.pos.x,s.pos.z));A.enemyStep=s=>A.audio.noise(.08,{f:420,f2:140,vol:(s.moved>3?.22:.1)*(1-s.pd/16),pan:Gu(s.pos.x,s.pos.z)});A.nearMiss=(s,e,t,i,n,r)=>{let o=A.camera.position,a=(o.x-s)*i+(o.y-e)*n+(o.z-t)*r;a>0&&Math.hypot(s+i*a-o.x,e+n*a-o.y,t+r*a-o.z)<1.4&&A.audio.whiz(Gu(s,t))};var em=Xp(A);A.trace=em.trace;A.playerShot=(s,e,t,i,n)=>{let r=em.playerRound(s,e,i),o=A.v1.set(r.from.x+r.dir.x*r.d,r.from.y+r.dir.y*r.d,r.from.z+r.dir.z*r.d);if((n||Math.random()<.4)&&A.fx.tracer(i,o),A.range&&A.range.onShot(r,o,t,n),r.kind==="enemy"){let a=r.e,l=t.dmg*(r.part==="head"?t.head||2.5:r.mult);t.falloff&&r.d>t.falloff[0]&&(l*=1-(1-t.falloff[1])*Math.min(1,(r.d-t.falloff[0])/(t.falloff[0]*1.5))),a.damage(l,A.player.pos,r.part),A.fx.blood(o,A.v2.copy(e).negate());for(let c of A.enemies)!c.dead&&c!==a&&!c.seeing&&(c.supp=Math.min(1.5,c.supp+(Math.hypot(c.pos.x-o.x,c.pos.z-o.z)<3?.35:0)));n&&A.stats.hits++,r.part==="head"&&A.stats.heads++,Hu(a.dead,r.part==="head"),A.audio.hit(a.dead)}else if(r.kind==="civ")r.e.damage(t.dmg*r.mult),A.fx.blood(o,A.v2.copy(e).negate()),Hu(!1);else if(r.kind==="world"){A.fx.impact(o,A.v2.set(r.wh.nx,r.wh.ny,r.wh.nz)),n&&A.audio.thud(Math.min(1,8/(4+r.d)));for(let a of A.enemies){if(a.dead)continue;Math.hypot(a.pos.x-o.x,a.pos.z-o.z)<2.5&&(a.supp=Math.min(1.5,a.supp+.35),n&&!a.combat()&&a.hear(A.player.pos,"shot",Math.hypot(a.pos.x-s.x,a.pos.z-s.z)))}}};A.melee=()=>{let s=A.player,e=A.camera.position,t=s.fwd,i=xt.knife,n=null,r=i.range;for(let l of A.enemies){if(l.dead)continue;let c=l.pos.x-e.x,h=l.pos.y+1.1-e.y,d=l.pos.z-e.z,u=Math.hypot(c,h,d);u>r||(c*t.x+h*t.y+d*t.z)/u<.72||!A.losB(e.x,e.y,e.z,l.pos.x,l.pos.y+1.1,l.pos.z)||(n=l,r=u)}if(!n){let l=bi(A.world.colliders,e.x,e.y,e.z,t.x,t.y,t.z,1.5,"bullet");l&&(A.fx.impact(A.v1.copy(t).multiplyScalar(l.d).add(e),A.v2.set(l.nx,l.ny,l.nz)),A.audio.click(.4));return}let a=Math.cos(n.yaw)*(s.pos.z-n.pos.z)+Math.sin(n.yaw)*(s.pos.x-n.pos.x)>.2*r||!n.seeing&&!n.combat()||n.stun>0;n.damage(a?999:i.dmg,s.pos,"torso"),A.fx.blood(A.v1.set(n.pos.x,n.pos.y+1.2,n.pos.z),A.v2.copy(t).negate()),A.audio.stab(n.dead),Hu(n.dead),n.dead&&A.stats.knife++};A.spawnGrenade=(s,e,t,i)=>A.gren.spawn(s,e,t,i);A.onKill=()=>{A.stats.kills++};A.spawnEnemy=(...s)=>Tc(...s);A.onHurt=(s,e)=>{A.audio.hurt(),zr=Math.min(1,zr+.3+e*.012),uM(s.x,s.z,"#ff4a3a",1.2)};A.onSecurity=(s,e)=>{let t=ve("sec");t.className="hp l"+s,t.textContent="SECURITY \xB7 "+Uu[s],s>0&&A.audio.alert(s),s>=2&&e&&Hs(e,3.5),s===3&&(A.audio.siren(!0),A.panelLight&&(A.panelLight.intensity=30))};A.reinforce=()=>{let s=A.world,e=A.player,t=A.sel.ai==="recruit"?2:3,i=[...s.reinforce].sort((r,o)=>Math.hypot(o.x-e.pos.x,o.z-e.pos.z)-Math.hypot(r.x-e.pos.x,r.z-e.pos.z))[0];if(Math.hypot(i.x-e.pos.x,i.z-e.pos.z)<30){A.sec.reinAt=A.sec.t+8;return}let n=A.sec.report||{x:s.objective.pos[0],z:s.objective.pos[2]};for(let r=0;r<t;r++){let o=Tc(i.x+r*1.6,i.z+r%2*1.5,[[n.x,n.z]],{duty:"response"});o.alerted=!0,o.setOrder(r===0?{type:"investigate",x:n.x,z:n.z}:{type:"defend",x:s.posts.objective[r%s.posts.objective.length][0],z:s.posts.objective[r%s.posts.objective.length][1],tx:n.x,tz:n.z})}Hs(`RESPONSE TEAM ENTERING FROM THE ${i.n.toUpperCase()}`,4.5)};function tm(){if(A.world){for(let s of A.world.meshes||[])s.userData.shared?s.dispose():(s.geometry.dispose(),s.material.dispose());A.audio.stopAmbient(),A.world=null,A.scene=null}}function im(s,e,t,i){let n=new vt,r=(a,l,c,h,d,u,f,p)=>{let x=new ke(new At(l,c,h),p?new nt({color:a}):new ni({color:a}));return x.position.set(d,u,f),n.add(x),x},o=t>.5?.42:1;if(s==="intel")r(1842978,.5,.14,.36,0,.07,0),r(16758344,.42,.02,.05,0,.15,0,!0),r(16758344,.06,.06,.02,0,.07,.19,!0);else if(s==="terminal"){o===1&&r(2764081,.7,.8,.5,0,.4,0);let a=o===1?.8:0;r(1382170,.08,.5,.8,0,a+.3,0),n.screen=r(3211128,.02,.4,.68,.05,a+.31,0,!0),r(1842978,.3,.03,.6,.3,a+.02,0)}else if(s==="keycard"){o===1&&r(2764081,.4,.9,.4,0,.45,0);let a=o===1?.9:0;r(15263968,.09,.012,.14,0,a+.01,0),r(4249855,.07,.014,.03,0,a+.012,.03,!0)}else if(s==="case"){o===1&&r(3813414,.7,.5,.5,0,.25,0);let a=o===1?.5:0;r(2892057,.46,.12,.32,0,a+.06,0),r(16758344,.05,.03,.02,0,a+.07,.17,!0)}else s==="radio"?(r(3159610,.7*(o<1?.8:1),1.15*o,.4,0,.575*o,0),r(1711134,.02,1.1,.02,.25,1.15*o+.55,0),n.screen=r(3735418,.3,.1,.02,0,.9*o,.21,!0),r(16756784,.05,.05,.02,-.22,.6*o,.21,!0)):s==="secpanel"?(r(4870232,.75,1.35*o,.3,0,.675*o,0),n.screen=r(4235519,.5,.32*o+.05,.02,0,.95*o,.16,!0),r(12593696,.08,.08,.03,.26,.45*o,.16,!0)):s==="generator"?(r(6969890,1.1,.85*o,.6,0,.425*o,0),r(1842463,.9,.2*o,.5,0,.95*o,0),n.screen=r(3735418,.1,.1,.02,.38,.6*o,.31,!0)):s==="charge"?(r(8022558,.9,1*o,.9,0,.5*o,0),r(1118740,.92,.12*o,.92,0,.5*o,0),n.screen=r(4202528,.22,.12,.03,0,.75*o,.46,!0)):s==="med"?(r(14212312,.5,.3,.34,0,.15,0),r(13908528,.2,.06,.02,0,.17,.18,!0),r(13908528,.06,.2,.02,0,.17,.18,!0)):(r(4016688,.6,.32,.36,0,.16,0),r(15249482,.6,.05,.37,0,.2,0,!0));return n.position.set(e,t,i),A.scene.add(n),n}A.makeInteractable=im;A.missionCheck=()=>Fu(A.world,A.mission.def);A.toast=(s,e)=>Hs(s,e);A.setPower=s=>{let e=A.world,t=s?1:.12;e.powerOff=!s;for(let i of e.lights)i.userData.base==null&&(i.userData.base=i.intensity),i.intensity=i.userData.base*t;for(let i of e.dyn)i.base=i.l.userData.base*t;e.env.detect=e.env.detect0*(s?1:.6),e.env.viewRange=e.env.viewRange0*(s?1:.78)};var bc=[];function Tc(s,e,t,i){bc.length||(bc=["guard","guard","aggressor","cautious","guard","aggressor","cautious","guard"].sort(()=>Math.random()-.5));let n=A.world.nav.nearest(s,e)||{x:s,z:e},r=new fc(A,n.x,n.z,t,bc.pop(),Ur[A.sel.ai],i);return A.enemies.push(r),r}function Vu(){let s=A.sel.quality;lt.setPixelRatio(s==="low"?1:Math.min(window.devicePixelRatio||1,s==="high"?2:1.25)),lt.shadowMap.enabled=s!=="low",am()}function lM(){tm(),Vu(),lm();let s=A.scene=new An,e=A.wscene=new An;s.environment=zu,s.environmentIntensity=.12,e.environment=zu,e.environmentIntensity=.2,A.wlight=new ns(11188432,2106408,.4),e.add(A.wlight);let t=new qi(16773856,.75);t.position.set(-1,2,1.5),e.add(t);let i=A.sel.mode==="range",n=A.world=Lp(i?"range":A.sel.map,s);if(A.sel.quality!=="med"&&n.moon.shadow.mapSize.setScalar(A.sel.quality==="high"?4096:1024),A.sel.quality==="low")for(let u of n.meshes)u.userData.detail&&(u.visible=!1);n.lodDist={low:22,med:34,high:52}[A.sel.quality],A.nvLight=new Ao(16777215,0),s.add(A.nvLight),A.fx=new gc(s),A.gren=new mc(A),n.env.detect0=n.env.detect,n.env.viewRange0=n.env.viewRange;let r=A.sel.layout==="classic",o=A.sel.length,a=i?{map:"range",type:"range",length:"quick",seed:0,plan:[],entry:n.entries[0],exit:{id:"-",name:"-",pos:[0,0,9999]},primary:{id:"range",name:"range",at:[0,0,-50],stand:[0,-50],posts:[]},fallback:null,stages:[]}:r?{map:n.id,type:"intel",length:"quick",seed:0,plan:[n.id==="forest"?"retrieve":"hack"],entry:n.entries[0],exit:n.exits[0],primary:n.anchors[0],fallback:null,stages:[n.id==="forest"?{kind:"retrieve",title:"Recover the intelligence package",obj:"intel",hold:0,prompt:"Take intelligence package",anchors:[n.anchors[0]],correct:0}:{kind:"hack",title:"Access the secure terminal",obj:"terminal",hold:3,prompt:"Hold to access secure terminal",anchors:[n.anchors[0]],correct:0}]}:$p(n,{type:A.sel.mission,length:gi[A.sel.mission].lengths.includes(o)?o:gi[A.sel.mission].lengths[0],seed:A.sel.seed},A.hist);!r&&!i&&Kp(A.hist,a),A.civs=[],A.player=new lc(A,a.entry,A.loadout),A.enemies=[],bc=[],A.sec=new pc(A,Ur[A.sel.ai]);let l=n.nav;for(let u of i?[]:Jp(n,a,n.guards+ls[a.length].extra)){if(u.route){let m=Tc(u.p[0],u.p[1],u.route,{duty:"patrol"});m.wi=Math.floor(Math.random()*u.route.length);continue}let f=Ce(6.28),p=l.snap(u.p[0]+Math.cos(f)*2.5,u.p[1]+Math.sin(f)*2.5),x=l.nearest(u.p[0],u.p[1]);Tc(u.p[0],u.p[1],p&&x&&l.line(x,p)?[[u.p[0],u.p[1]],[p.x,p.z]]:[[u.p[0],u.p[1]]],{duty:u.duty,home:u.p,wait:u.wait})}A.mission=new vc(A,a),A.mission.begin(),A.range=i?new xc(A):null,A.pickups=n.pickups.map(([u,f,p])=>({kind:u,x:f,z:p,mesh:im(u,f,l.height(f,p),p)}));let c=a.exit.pos;A.exMesh=new ke(new gt(.06,.06,.5,6),new nt({color:4259696})),A.exMesh.position.set(c[0],.25,c[2]),s.add(A.exMesh),A.exLight=new ci(4259696,6,16,1.5),A.exLight.position.set(c[0],1.2,c[2]),s.add(A.exLight),n.panel&&(A.panelLight=new ci(16722458,0,22,1.4),A.panelLight.position.set(n.panel.x,2.2,n.panel.z),s.add(A.panelLight)),A.laserDot=new ke(new Ln(1,8,6),new nt({color:16719904,fog:!1,toneMapped:!1})),s.add(A.laserDot);let h=new At(.004,.004,1);if(h.translate(0,0,.5),A.laserBeam=new ke(h,new nt({color:16719904,transparent:!0,opacity:.35,blending:Yi,depthWrite:!1,fog:!1})),s.add(A.laserBeam),A.laserDot.visible=A.laserBeam.visible=!1,A.time=0,A.stats={shots:0,hits:0,kills:0,heads:0,knife:0,maxSec:0},zr=0,Vn.forEach(u=>u.t=0),Ec=0,ve("subt").style.opacity=0,Xu(!1),A.onSecurity(0,""),A.audio.ambient(n.env.amb),ve("hud").classList.add("on"),ji={},i){gn(null),A.state="playing",Hs("TRAINING RANGE \u2014 WEAPONS FREE",3),hs||Jo();return}let d=gi[a.type];ve("brt").textContent=d.name,ve("brs").textContent=`${n.name} \xB7 ${ls[a.length].name} \xB7 ENEMY ${Ur[A.sel.ai].label}`,ve("brl").innerHTML=`<div><i>INSERTION</i>${a.entry.name}</div>`+Zp(a).map(u=>`<div>${u}</div>`).join("")+(a.fallbackUsed?"<div><i>NOTE</i>fallback layout used</div>":""),hs||r?(gn(null),A.state="playing",Hs(d.name+" \u2014 "+a.stages[0].title.toUpperCase(),4),hs||Jo()):(A.state="brief",gn("briefov"),A.player.update(.016))}function cM(){A.state==="brief"&&(gn(null),A.state="playing",wc=performance.now(),Hs(gi[A.mission.def.type].name+" \u2014 "+A.mission.def.stages[0].title.toUpperCase(),4),Jo())}function Jo(){try{let s=kr.requestPointerLock();s&&s.catch&&s.catch(()=>{ve("phint").textContent="CLICK RESUME AGAIN TO RE-CAPTURE THE MOUSE"})}catch{}}function gn(s){for(let e of["menu","pause","end","load","briefov"])ve(e).classList.toggle("on",e===s)}function nm(){A.state==="playing"&&(A.state="paused",ve("phint").textContent="MISSION ON HOLD",gn("pause"),A.inp.k={},A.inp.lmb=A.inp.rmb=!1)}function sm(){A.state==="paused"&&(hs?(A.state="playing",gn(null)):Jo())}function Wu(){A.state="menu",tm(),ve("hud").classList.remove("on"),Xu(!1),ve("scope").style.display="none",ve("flashov").style.opacity=0,gn("menu"),document.pointerLockElement&&document.exitPointerLock(),qu()}function ku(s,e){A.state=s?"won":"dead",document.pointerLockElement&&document.exitPointerLock(),A.audio.siren(!1),ve("scope").style.display="none",ve("flashov").style.opacity=0;let t=A.player,i=A.stats,n=Math.floor(A.time);ve("endt").textContent=s?"MISSION COMPLETE":"OPERATOR DOWN",ve("endt").style.color=s?"var(--g)":"#ff6a5a",ve("endt").textContent=s?"MISSION COMPLETE":e?"MISSION FAILED":"OPERATOR DOWN";let r=s?"EXTRACTION SUCCESSFUL":e||"MISSION FAILED";if(!s&&!e&&t.lastHit){let l=t.lastHit;r=l.fall?"KILLED BY A FALL":l.blast?`KILLED BY ${l.name.toUpperCase()}`:`KILLED BY ${l.name.toUpperCase()} \u2014 RIFLE FIRE FROM THE ${hM(l.x-t.pos.x,l.z-t.pos.z)}, ${Math.round(l.dist)} M`}ve("ends").textContent=r;let o=A.mission.def,a=[["Mission",gi[o.type].short+" \xB7 "+ls[o.length].name],["Map",A.world.name],["Enemy intelligence",Ur[A.sel.ai].label],["Time",`${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`],["Hostiles neutralised",`${i.kills} / ${A.enemies.length}`],["Headshots / knife kills",`${i.heads} / ${i.knife}`],["Accuracy",i.shots?Math.round(i.hits/i.shots*100)+"%":"\u2014"],["Highest security level",Uu[i.maxSec]],["Health remaining",Math.ceil(t.hp)],["Objectives completed",`${Math.min(A.mission.i,o.stages.length)} / ${o.stages.length}`]];ve("endstats").innerHTML=a.map(([l,c])=>`<span>${l}</span><b>${c}</b>`).join(""),gn("end"),s?A.audio.win():A.audio.lose()}var hM=(s,e)=>["NORTH","NORTH-EAST","EAST","SOUTH-EAST","SOUTH","SOUTH-WEST","WEST","NORTH-WEST"][(Math.round(Math.atan2(s,-e)/(Math.PI/4))%8+8)%8];function Xu(s){A.nv=s,ve("nv").classList.toggle("on",s),kr.style.filter=s?"grayscale(1) contrast(1.15) brightness(1.3)":"",A.world&&(A.nvLight.intensity=s?2.6:0,A.scene.fog.density=A.world.env.fog[1]*(s?.5:1),A.wlight.intensity=s?1.6:.4,A.scene.environmentIntensity=s?.7:.12)}var zr=0,Bu=0,Sc=0,Ec=0,ji={},Vn=[];for(let s=0;s<8;s++){let e=document.createElement("div");e.className="ind",ve("inds").appendChild(e),Vn.push({el:e,t:0,x:0,z:0,life:1})}function uM(s,e,t,i){let n=Vn.find(r=>r.t<=0)||Vn[0];n.x=s,n.z=e,n.t=n.life=i,n.src=null,n.el.style.color=t}function Hs(s,e){ve("toast").textContent=s,ve("toast").style.opacity=1,Bu=e}function Hu(s,e){Sc=s?.3:e?.2:.14,ve("hitm").className=s?"k":e?"h":""}function Fi(s,e){ji[s]!==e&&(ji[s]=e,ve(s).innerHTML=e)}function Bs(s,e,t){let i=s+e;ji[i]!==t&&(ji[i]=t,ve(s).style[e]=t)}function dM(s){let e=A.player,t=e.slot,i=t.st,n=A.world;Fi("hpn",Math.ceil(e.hp));let r=Math.round(e.hp)+"%";ji.hw!==r&&(ji.hw=r,ve("hpf").style.width=r,ve("hpf").style.background=e.hp<35?"#ff5a4a":e.hp<60?"#e8b04a":"var(--g)");let o=e.use;Fi("medi",o&&o.type==="med"?"APPLYING MEDKIT\u2026":`MEDKIT <b>${e.inv.med}</b> [H] \xB7 STIM <b>${e.inv.stim}</b> [X]`),Fi("wn",i.name+(e.reloading?" \u2014 RELOADING":"")),Fi("am",i.melee?"\u2014":`${t.mag}<span> / ${t.reserve}</span>`),Fi("watt",ac(t.id,i.att||{})),Fi("slots",e.slots.map((v,b)=>b===e.cur?`<b>${b+1} ${v.st.name}</b>`:`${b+1} ${v.st.name}`).join(" \xB7 ")),Fi("equip",["frag","flash","smoke"].map(v=>`<span class="${e.throwSel===v?"s":""}">${Up[v]} <b>${e.inv[v]}</b></span>`).join("<br>")+"<br>[G] THROW \xB7 [4] CYCLE"),Fi("stat",`ENEMY AI <b>${Ur[A.sel.ai].label}</b><br>NIGHT VISION <b class="${A.nv?"":"off"}">${A.nv?"ON":"OFF"}</b>`+(i.att&&i.att.laser?`<br>LASER <b class="${e.laserOn?"":"off"}">${e.laserOn?"ON":"OFF"}</b>`:"")+`<br>HOSTILES <b>${A.enemies.filter(v=>!v.dead).length}</b>`);let a=!i.melee&&e.adsF>.85?i.optic.ret:null,l=5+e.spread*5.5,c=e.adsF>.6||e.sprintF>.6||i.melee?0:1,h=8,d=[[-1,-l-h,2,h],[-1,l,2,h],[-l-h,-1,h,2],[l,-1,h,2]];for(let v=0;v<4;v++){let b=ve("c"+v).style;b.left=d[v][0]+"px",b.top=d[v][1]+"px",b.width=d[v][2]+"px",b.height=d[v][3]+"px",b.opacity=c}Bs("ret","display",a==="dot"||a==="holo"?"block":"none"),a&&a!=="scope"&&ji.retc!==a&&(ji.retc=a,ve("ret").className=a),Bs("scope","display",e.scoped?"block":"none"),e.scoped&&Fi("zoomv",`${t.zoom.toFixed(2)}&times;`+(i.optic.zoom[1]>i.optic.zoom[0]?" <i>WHEEL</i>":"")+(e.steady?" <i>STEADY</i>":e.breath>1?" <i>SHIFT: HOLD BREATH</i>":"")),Bs("flashov","opacity",Math.min(1,e.blind).toFixed(2)),Bs("stimv","opacity",e.stimT>0?"1":"0"),Sc>0?(Sc-=s,ve("hitm").style.opacity=Math.min(1,Sc*8)):Bs("hitm","opacity","0"),zr=Math.max(0,zr-s*1.3),ve("vig").style.opacity=Math.max(zr,e.hp<30?.35:0),Bu>0&&(Bu-=s)<=0&&(ve("toast").style.opacity=0),Ec>0&&(Ec-=s)<=0&&(ve("subt").style.opacity=0);for(let v of A.enemies){if(v.dead||v.seeing||v.detect<.15||!v.los)continue;let b=Vn.find(E=>E.src===v&&E.t>0);if(!b){if(b=Vn.find(E=>E.t<=0),!b)continue;b.src=v,b.el.style.color="#e8b04a"}b.x=v.pos.x,b.z=v.pos.z,b.t=.25,b.life=.25/Math.max(.2,v.detect)}let u=!1;for(let v of A.gren.list){if(v.type==="smoke"||v.owner==="player"||Math.hypot(v.pos.x-e.pos.x,v.pos.z-e.pos.z)>13)continue;u=!0;let b=Vn.find(E=>E.src===v&&E.t>0);if(!b){if(b=Vn.find(E=>E.t<=0),!b)continue;b.src=v,b.el.style.color="#ff9a30"}b.x=v.pos.x,b.z=v.pos.z,b.t=b.life=.2}Bs("warn","display",u?"block":"none");for(let v of Vn){if(v.t<=0){v.on&&(v.el.style.opacity=0,v.on=!1,v.src=null);continue}v.t-=s,v.on=!0;let b=Math.atan2(v.x-e.pos.x,-(v.z-e.pos.z))+e.yaw;v.el.style.transform=`rotate(${b}rad)`,v.el.style.opacity=Math.min(1,v.t/v.life)}let f=A.mission.focus(),p=A.v3.set(f[0],f[1]+1,f[2]),x=Math.hypot(f[0]-e.pos.x,f[2]-e.pos.z);p.project(A.camera);let m=p.x,g=p.y;p.z>1&&(m=-m,g=-1);let _=Math.max(Math.abs(m),Math.abs(g));if(_>.9||p.z>1){let v=.9/(_||1);m*=v,g*=v}let M=ve("mark").style;M.left=(m+1)/2*innerWidth+"px",M.top=(1-g)/2*innerHeight+"px",M.opacity=e.scoped?0:1,A.range?(Fi("objt",A.range.hud()),M.opacity=0):Fi("objt",A.mission.lines().map(v=>`<div class="o-${v.state}">${v.state==="done"?"&#10003;":v.state==="now"?"&#9656;":"&middot;"} ${v.t}</div>`).join("")),Fi("mark",A.range?"":(A.mission.complete?"EXTRACT ":"OBJECTIVE ")+Math.round(x)+" M")}function fM(s){let e=A.player,t=A.world,i=A.inp;A.time+=s,A.stats.maxSec=Math.max(A.stats.maxSec,A.sec.level);let n=(p,x,m)=>Math.hypot(p-e.pos.x,x-e.pos.z)<m,r=A.mission,o=r.def.exit.pos,a=r.update(s,i);if(r.failed)return ku(!1,r.failed);if(r.complete&&n(o[0],o[2],3.2)){if(r.civNear())return ku(!0);a=`Wait for the ${r.civ.kind==="hvt"?"target":"hostage"} to reach you`}for(let p of A.pickups){if(p.taken||!n(p.x,p.z,1.9))continue;let x=p.kind==="med";if(a=a||`<b>E</b>${x?"Take medical supplies":"Take ammunition and grenades"}`,i.e&&!a.includes(r.stage?r.stage.prompt:"\0")){if(p.taken=!0,A.scene.remove(p.mesh),A.audio.pickup(),x)e.inv.med=Math.min(4,e.inv.med+1),e.inv.stim=Math.min(4,e.inv.stim+1);else{for(let m of e.slots)m.st.melee||(m.reserve=Math.min(m.st.reserve*2,m.reserve+m.st.mag*2));e.inv.frag=Math.min(4,e.inv.frag+1),e.inv.flash=Math.min(4,e.inv.flash+1)}Hs(x?"+1 MEDKIT  +1 STIM":"AMMUNITION RESUPPLIED  +1 FRAG  +1 FLASH",1.8)}}i.e=!1;let l=ve("prompt");ji.pr!==a&&(ji.pr=a,l.innerHTML=a,l.style.display=a?"block":"none");let c=e.use&&e.use.type==="med",h=r.hold>0||c;Bs("hack","display",h?"block":"none"),h&&(ve("hackf").style.width=(c?e.use.t/e.use.dur:r.hold/(r.stage&&r.stage.hold||1))*100+"%");for(let p of t.dyn)p.l.intensity=p.base*(p.kind==="fire"?.75+Math.sin(A.time*11)*.12+Math.random()*.2:Math.sin(A.time*31)>.86||Math.random()<.02?.25:1);A.exLight.intensity=r.complete?14+Math.sin(A.time*4)*5:3,A.panelLight&&A.sec.level===3&&(A.panelLight.intensity=18+Math.sin(A.time*7)*16);let d=e.w,u=!d.melee&&d.att.laser&&e.laserOn&&e.swT<=0&&!e.reloading&&!e.use&&e.sprintF<.5&&!e.scoped;if(A.laserDot.visible=A.laserBeam.visible=u,u){let p=A.camera.position,x=e.fwd,m=bi(t.colliders,p.x,p.y,p.z,x.x,x.y,x.z,150,"bullet"),g=m?m.d:150;for(let _ of A.enemies){if(_.dead)continue;let M=_.rayHit(p,x,g);M&&(g=M.d)}A.laserDot.position.copy(x).multiplyScalar(g-.02).add(p),A.laserDot.scale.setScalar(.006+g*.0022),A.laserBeam.position.copy(e.laserW),A.laserBeam.lookAt(A.laserDot.position),A.laserBeam.scale.z=e.laserW.distanceTo(A.laserDot.position)}let f=t.moon;f.target.position.set(e.pos.x,0,e.pos.z),f.position.copy(t.moonDir).multiplyScalar(110).add(f.target.position)}function rm(s){A.frame++,A.player.update(s),A.inp.mx=A.inp.my=0;for(let e of A.enemies)e.update(s);for(let e of A.civs)e.update(s);if(A.range&&A.range.update(s),A.frame%6===0&&Cp(A.world,A.camera.position),A.sec.update(s),A.gren.update(s),A.fx.update(s),fM(s),A.state==="playing"){if(A.player.dead)return ku(!1);dM(s)}}A.step=rm;var wc=performance.now();function om(s){requestAnimationFrame(om);let e=Math.min(.05,(s-wc)/1e3);wc=s,A.state==="playing"&&rm(e),A.state==="menu"?xM(e):A.scene&&(lt.setViewport(0,0,innerWidth,innerHeight),lt.clear(),lt.render(A.scene,A.camera),lt.clearDepth(),lt.render(A.wscene,A.wcam))}function am(){lt.setSize(innerWidth,innerHeight,!1),A.camera.aspect=A.wcam.aspect=innerWidth/innerHeight,A.camera.updateProjectionMatrix(),A.wcam.updateProjectionMatrix()}addEventListener("resize",am);addEventListener("keydown",s=>{if(A.state==="paused"&&s.code==="Escape")return sm();if(A.state!=="playing"||((["Space","Tab","KeyS","KeyD","KeyA","KeyR","KeyN","KeyL","KeyE","KeyC","KeyQ","KeyF","KeyG","KeyH","KeyX","KeyV"].includes(s.code)||s.ctrlKey)&&s.preventDefault(),s.repeat))return;let e=A.player;A.inp.k[s.code]=!0,s.code==="Space"?A.inp.jump=!0:s.code==="KeyR"?e.reload():s.code==="KeyE"?A.inp.e=!0:s.code==="KeyC"?e.crouchToggle=!e.crouchToggle:s.code==="KeyN"?(Xu(!A.nv),A.audio.beep(A.nv)):s.code==="KeyL"?(e.laserOn=!e.laserOn,A.audio.beep(e.laserOn)):s.code==="KeyG"?e.startUse("throw"):s.code==="KeyH"?e.startUse("med"):s.code==="KeyX"?e.startUse("stim"):s.code==="KeyV"?e.startUse("melee"):s.code==="Digit4"?e.cycleThrow():A.range&&/^Digit[5678]$/.test(s.code)?A.range.key(s.code):/^Digit[123]$/.test(s.code)?e.switchTo(+s.code[5]-1):s.code==="Escape"&&hs&&nm()});addEventListener("keyup",s=>{A.inp.k[s.code]=!1});addEventListener("blur",()=>{A.inp.k={},A.inp.lmb=A.inp.rmb=!1});addEventListener("mousemove",s=>{A.state==="playing"&&(document.pointerLockElement===kr||hs)&&(A.inp.mx+=s.movementX,A.inp.my+=s.movementY)});addEventListener("mousedown",s=>{if(A.state==="playing"){if(!hs&&document.pointerLockElement!==kr)return Jo();s.button===0?(A.inp.lmb=!0,A.inp.lmbPressed=!0):s.button===2&&(A.inp.rmb=!0)}});addEventListener("mouseup",s=>{s.button===0?A.inp.lmb=!1:s.button===2&&(A.inp.rmb=!1)});addEventListener("wheel",s=>{A.state==="playing"&&(s.preventDefault(),A.player.zoomStep(s.deltaY<0?1:-1)||A.player.cycleThrow())},{passive:!1});addEventListener("contextmenu",s=>s.preventDefault());document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===kr?A.state==="paused"&&(A.state="playing",gn(null),wc=performance.now()):A.state==="playing"&&!hs&&nm()});var pM={forest:"FOREST OUTPOST \u2014 a fenced compound, a remote bunker, a ruin and a camp spread through dark woodland. Night vision recommended.",warehouse:"INDUSTRIAL WAREHOUSE \u2014 main hall, office, machine room, raised dock, yards and service alleys. Close quarters, many routes."},mM={recruit:"RECRUIT \u2014 inexperienced guards: slow decisions, long clumsy exposures, unreliable radio calls.",tactical:"TACTICAL \u2014 trained guards: use cover properly, lean to fire, flank, radio contacts and defend the objective.",elite:"ELITE SQUAD \u2014 a coordinated team: bounding movement, suppressive fire, multiple angles, grenades and flashbangs."},Oe={tab:"play",edit:"primary",scene:null,obj:null,spin:0};function lm(){Oe.obj&&Oe.scene&&Oe.scene.remove(Oe.obj),Oe.obj=null,Oe.ch&&(Oe.scene.remove(Oe.ch.root),Oe.ch=null)}function gM(){if(Oe.scene)return Oe.scene;let s=Oe.scene=new An;s.environment=zu,s.environmentIntensity=.55;let e=new qi(16773340,2.6);e.position.set(2,3,3),s.add(e);let t=new qi(8368383,1.6);return t.position.set(-3,2,-3),s.add(t),s.add(new ns(8425632,1053720,.5)),Oe.cam=new It(30,1,.05,50),s}function qu(){if(A.state!=="menu")return;let s=gM();if(lm(),Oe.tab==="loadout"){let e=A.loadout[Oe.edit];Oe.obj=Ko(e,A.loadout.att[e],!0),s.add(Oe.obj)}else Oe.ch=new os(A.sel.ai==="elite"?"elite":A.sel.ai==="recruit"?"guard":"cautious","carbine"),s.add(Oe.ch.root),Oe.ch.root.rotation.y=Math.PI+.5}function xM(s){if(!Oe.scene)return;let e=ve("side").offsetWidth+ve("content").offsetWidth,t=innerWidth-e;if(lt.setViewport(0,0,innerWidth,innerHeight),lt.setClearColor(395532),lt.clear(),!(t<260)){if(lt.setViewport(e,0,t,innerHeight),Oe.cam.aspect=t/innerHeight,Oe.spin+=s,Oe.obj){let i=new $t().setFromObject(Oe.obj),n=i.getCenter(A.v1),r=i.getSize(A.v2).length();Oe.obj.rotation.y=Math.PI/2+Math.sin(Oe.spin*.5)*.55,Oe.cam.position.set(n.x,n.y+r*.12,n.z+r*2.3*Math.max(1,1.25/Oe.cam.aspect)),Oe.cam.lookAt(n.x,n.y,n.z)}else Oe.ch&&(Oe.ch.update(s,{speed:0,aim:Math.sin(Oe.spin*.35)>0,crouch:Math.sin(Oe.spin*.22)<-.6}),Oe.cam.position.set(0,1.25,5.2*Math.max(1,.75/Oe.cam.aspect)),Oe.cam.lookAt(0,.95,0));Oe.cam.updateProjectionMatrix(),lt.render(Oe.scene,Oe.cam)}}function cs(s,e,t,i,n=""){return`<button class="opt ${n} ${i?"sel":""}" data-v="${s}">${e}${t?`<small>${t}</small>`:""}</button>`}function cm(){let s=A.loadout,e=a=>document.querySelector(`.opts[data-k="${a}"]`);gi[A.sel.mission].lengths.includes(A.sel.length)||(A.sel.length=gi[A.sel.mission].lengths[0]),e("mission").innerHTML=Object.keys(gi).map(a=>cs(a,gi[a].short,gi[a].desc,A.sel.mission===a)).join(""),e("length").innerHTML=gi[A.sel.mission].lengths.map(a=>cs(a,ls[a].name[0]+ls[a].name.slice(1).toLowerCase(),ls[a].desc,A.sel.length===a)).join("");for(let a of["primary","secondary"])e(a).innerHTML=Object.keys(xt).filter(l=>xt[l].slot===a).map(l=>cs(l,xt[l].name,xt[l].desc,s[a]===l)).join("");e("kit").innerHTML=Object.keys(Hn).map(a=>cs(a,Hn[a].name,Hn[a].desc,s.kit===a)).join("");let t=s[Oe.edit],i=xt[t],n=s.att[t];ve("attl").textContent="ATTACHMENTS \u2014 "+i.name,ve("edit").innerHTML=cs("primary","Edit primary","",Oe.edit==="primary","sm")+cs("secondary","Edit secondary","",Oe.edit==="secondary","sm"),ve("optic").innerHTML=i.optics.map(a=>cs(a,Fs[a].name,Fs[a].desc||(a==="iron"?"no zoom":a==="reddot"?"1x, clean dot":"1x, ring reticle"),n.optic===a,"sm")).join(""),ve("atts").innerHTML=[["muzzle","Suppressor","quiet: guards hear it only at close range"],["grip","Foregrip","-20% recoil, steadier hip fire"],["laser","Laser sight","tighter hip fire (L toggles)"]].map(([a,l,c])=>cs(a,l,c,n[a],i[a]?"":"off")).join("");let r=Yo(t,n),o=(a,l)=>`<span>${a}</span><i><b style="width:${Math.round(Math.max(4,Math.min(100,l)))}%"></b></i>`;ve("bars").innerHTML=o("DAMAGE",r.dmg*(r.pellets||1)/1.2)+o("FIRE RATE",r.rpm/9)+o("CONTROL",100-r.recoil*20)+o("HANDLING",100-r.adsT*230)+o("STEALTH",100-r.noise*1.9),ve("losum").innerHTML=`${xt[s.primary].name} <span style="color:var(--a)">${ac(s.primary,s.att[s.primary])}</span><br>${xt[s.secondary].name} <span style="color:var(--a)">${ac(s.secondary,s.att[s.secondary])}</span><br>Combat knife \xB7 ${Hn[s.kit].name} kit \u2014 ${Hn[s.kit].desc}`,ve("brief").innerHTML=`<b style="color:#fff">${gi[A.sel.mission].name}</b> \u2014 ${gi[A.sel.mission].desc}. ${ls[A.sel.length].desc}.<br>${pM[A.sel.map]}<br>${mM[A.sel.ai]}<br><span style="color:#74838a">Insertion point, objective locations and extraction change from run to run; the exact sequence is shown before you begin.</span>`,Op(s),qu()}document.querySelectorAll(".nav").forEach(s=>s.addEventListener("click",()=>{Oe.tab=s.dataset.tab,document.querySelectorAll(".nav").forEach(e=>e.classList.toggle("sel",e===s)),document.querySelectorAll(".tab").forEach(e=>e.classList.toggle("on",e.id==="t-"+Oe.tab)),qu()}));ve("content").addEventListener("click",s=>{let e=s.target.closest(".opt");if(!e||!e.dataset.v)return;let t=e.parentElement,i=t.dataset.k,n=e.dataset.v,r=A.loadout;i==="mission"||i==="length"?A.sel[i]=n:i==="map"||i==="ai"||i==="quality"?(A.sel[i]=n,t.querySelectorAll(".opt").forEach(o=>o.classList.toggle("sel",o===e)),i==="quality"&&(jp(),Vu())):i==="primary"||i==="secondary"?(r[i]=n,Oe.edit=i):i==="kit"?r.kit=n:t.id==="edit"?Oe.edit=n:t.id==="optic"?r.att[r[Oe.edit]].optic=n:t.id==="atts"&&(r.att[r[Oe.edit]][n]=!r.att[r[Oe.edit]][n]),cm()});var Yu=(s,e,t,i)=>{let n=ve(s);n.value=A[e],ve(s+"v").textContent=t(A[e]),n.addEventListener("input",()=>{A[e]=+n.value,ve(s+"v").textContent=t(A[e]),jp(),i&&i()})};A.vol==null&&(A.vol=.75);Yu("sens","sens",s=>s.toFixed(2));Yu("fov","fov",s=>s);Yu("vol","vol",s=>Math.round(s*100),()=>{A.audio.master&&(A.audio.master.gain.value=A.vol)});document.querySelectorAll('.opts[data-k="quality"] .opt').forEach(s=>s.classList.toggle("sel",s.dataset.v===A.sel.quality));var Ac=()=>{A.audio.init(),A.audio.master&&(A.audio.master.gain.value=A.vol),lM()};ve("start").onclick=()=>{A.sel.mode="mission",Ac()};ve("train").onclick=()=>{A.sel.mode="range",Ac()};ve("again").onclick=Ac;ve("prestart").onclick=Ac;ve("brgo").onclick=cM;ve("brback").onclick=Wu;ve("resume").onclick=sm;ve("pmenu").onclick=Wu;ve("emenu").onclick=Wu;{let s=document.createElement("canvas");s.width=s.height=128;let e=s.getContext("2d"),t=e.createImageData(128,128);for(let i=0;i<t.data.length;i+=4)t.data[i]=t.data[i+1]=t.data[i+2]=Math.random()*255,t.data[i+3]=255;e.putImageData(t,0,0),ve("nvn").style.background=`url(${s.toDataURL()})`}Vu();bp(s=>{ve("loadf").style.width=s*100+"%"}).then(()=>{A.state="menu",gn("menu"),cm()}).catch(s=>{ve("load").firstElementChild.textContent="FAILED TO LOAD ASSETS: "+s.message});requestAnimationFrame(om);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
