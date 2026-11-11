(()=>{var Pd=0,Kc=1,Ld=2;var vs=1,Nd=2,mr=3,Cn=0,Kt=1,Vt=2,Ms=0,gr=1,Vn=2,Zc=3,Jc=4,Dd=5;var Ss=100,Ud=101,Od=102,Fd=103,zd=104,Bd=200,kd=201,Hd=202,Gd=203,$c=204,jc=205,Vd=206,Wd=207,Xd=208,qd=209,Yd=210,Kd=211,Zd=212,Jd=213,$d=214,Mo=0,So=1,bo=2,js=3,To=4,Eo=5,wo=6,Ao=7,qo=0,jd=1,Qd=2,ii=0,Qc=1,eh=2,th=3,Sa=4,nh=5,ih=6,sh=7,Bc="attached",ef="detached",rh=300,bs=301,xr=302,Yo=303,Ko=304,$n=1e3,wn=1001,Qs=1002,Rt=1003,Zo=1004;var Ts=1005;var Ut=1006,_r=1007;var In=1008;var pn=1009,ah=1010,oh=1011,yr=1012,Jo=1013,Wn=1014,_n=1015,Xn=1016,$o=1017,jo=1018,Es=1020,lh=35902,ch=35899,hh=1021,uh=1022,Pn=1023,_i=1026,Pi=1027,Qo=1028,el=1029,$i=1030,tl=1031;var nl=1033,ba=33776,Ta=33777,Ea=33778,wa=33779,il=35840,sl=35841,rl=35842,al=35843,ol=36196,ll=37492,cl=37496,hl=37488,ul=37489,Aa=37490,dl=37491,fl=37808,pl=37809,ml=37810,gl=37811,xl=37812,_l=37813,yl=37814,vl=37815,Ml=37816,Sl=37817,bl=37818,Tl=37819,El=37820,wl=37821,Al=36492,Rl=36494,Cl=36495,Il=36283,Pl=36284,Ra=36285,Ll=36286,Ca=2200,Nl=2201,tf=2202,us=2300,ds=2301,yo=2302,kc=2303,ls=2400,cs=2401,Zr=2402,Dl=2500,nf=2501,dh=0,Ia=1,vr=2,sf=3200;var Pa=0,rf=1,Li="",wt="srgb",on="srgb-linear",Jr="linear",nt="srgb";var vo=7680;var af=519,of=512,lf=513,cf=514,fh=515,hf=516,uf=517,ph=518,mh=519,gh=35044;var xh="300 es",An=2e3,er=2001;function Xp(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function qp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function tr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function df(){let s=tr("canvas");return s.style.display="block",s}var Vu={},nr=null;function $r(...s){let e="THREE."+s.shift();nr?nr("log",e,...s):console.log(e,...s)}function ff(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ae(...s){s=ff(s);let e="THREE."+s.shift();if(nr)nr("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Fe(...s){s=ff(s);let e="THREE."+s.shift();if(nr)nr("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function hs(...s){let e=s.join(" ");e in Vu||(Vu[e]=!0,Ae(...s))}function pf(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var mf={[Mo]:Mo,[bo]:wo,[To]:To,[js]:Eo,[So]:So,[wo]:bo,[Ao]:Ao,[Eo]:js},kn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wu=1234567,Yr=Math.PI/180,fs=180/Math.PI;function si(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[s&255]+en[s>>8&255]+en[s>>16&255]+en[s>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function Je(s,e,t){return Math.max(e,Math.min(t,s))}function _h(s,e){return(s%e+e)%e}function Yp(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Kp(s,e,t){return s!==e?(t-s)/(e-s):0}function Kr(s,e,t){return(1-t)*s+t*e}function Zp(s,e,t,n){return Kr(s,e,1-Math.exp(-t*n))}function Jp(s,e=1){return e-Math.abs(_h(s,e*2)-e)}function $p(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function jp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Qp(s,e){return s+Math.floor(Math.random()*(e-s+1))}function em(s,e){return s+Math.random()*(e-s)}function tm(s){return s*(.5-Math.random())}function nm(s){s!==void 0&&(Wu=s);let e=Wu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function im(s){return s*Yr}function sm(s){return s*fs}function rm(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function am(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function yh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function om(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),p=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*p,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*p,o*c);break;case"ZYZ":s.set(l*p,l*f,o*h,o*c);break;default:Ae("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ul(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function vh(s,e){if(e.constructor===Float32Array)return s;let t=Ul(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function Mh(s,e){if(e.constructor===Float32Array)return s;let t=Ul(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}var yn={DEG2RAD:Yr,RAD2DEG:fs,generateUUID:si,clamp:Je,euclideanModulo:_h,mapLinear:Yp,inverseLerp:Kp,lerp:Kr,damp:Zp,pingpong:Jp,smoothstep:$p,smootherstep:jp,randInt:Qp,randFloat:em,randFloatSpread:tm,seededRandom:nm,degToRad:im,radToDeg:sm,isPowerOfTwo:rm,ceilPowerOfTwo:am,floorPowerOfTwo:yh,setQuaternionFromProperEuler:om,normalize:Mh,denormalize:vh},Ne=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},xt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],f=r[a+1],p=r[a+2],y=r[a+3];if(u!==y||l!==d||c!==f||h!==p){let g=l*d+c*f+h*p+u*y;g<0&&(d=-d,f=-f,p=-p,y=-y,g=-g);let m=1-o;if(g<.9995){let x=Math.acos(g),S=Math.sin(x);m=Math.sin(m*x)/S,o=Math.sin(o*x)/S,l=l*m+d*o,c=c*m+f*o,h=h*m+p*o,u=u*m+y*o}else{l=l*m+d*o,c=c*m+f*o,h=h*m+p*o,u=u*m+y*o;let x=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=x,c*=x,h*=x,u*=x}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+h*u+l*f-c*d,e[t+1]=l*p+h*d+c*u-o*f,e[t+2]=c*p+h*f+o*d-l*u,e[t+3]=h*p-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),f=l(i/2),p=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:Ae("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return pc.copy(this).projectOnVector(e),this.sub(pc)}reflect(e){return this.sub(pc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},pc=new P,Xu=new xt,Be=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],y=i[0],g=i[3],m=i[6],x=i[1],S=i[4],v=i[7],b=i[2],E=i[5],_=i[8];return r[0]=a*y+o*x+l*b,r[3]=a*g+o*S+l*E,r[6]=a*m+o*v+l*_,r[1]=c*y+h*x+u*b,r[4]=c*g+h*S+u*E,r[7]=c*m+h*v+u*_,r[2]=d*y+f*x+p*b,r[5]=d*g+f*S+p*E,r[8]=d*m+f*v+p*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,p=t*u+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/p;return e[0]=u*y,e[1]=(i*c-h*n)*y,e[2]=(o*n-i*a)*y,e[3]=d*y,e[4]=(h*t-i*l)*y,e[5]=(i*r-o*t)*y,e[6]=f*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return hs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(mc.makeScale(e,t)),this}rotate(e){return hs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(mc.makeRotation(-e)),this}translate(e,t){return hs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(mc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},mc=new Be,qu=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yu=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lm(){let s={enabled:!0,workingColorSpace:on,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===nt&&(i.r=xi(i.r),i.g=xi(i.g),i.b=xi(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(i.r=$s(i.r),i.g=$s(i.g),i.b=$s(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Li?Jr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[on]:{primaries:e,whitePoint:n,transfer:Jr,toXYZ:qu,fromXYZ:Yu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:wt},outputColorSpaceConfig:{drawingBufferColorSpace:wt}},[wt]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:qu,fromXYZ:Yu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:wt}}}),s}var qe=lm();function xi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function $s(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ns,Ro=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ns===void 0&&(Ns=tr("canvas")),Ns.width=e.width,Ns.height=e.height;let i=Ns.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ns}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=tr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=xi(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xi(t[n]/255)*255):t[n]=xi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},cm=0,ir=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=si(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(gc(i[a].image)):r.push(gc(i[a]))}else r=gc(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function gc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ro.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ae("Texture: Unable to serialize Texture."),{})}var hm=0,xc=new P,Ot=class s extends kn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=wn,i=wn,r=Ut,a=In,o=Pn,l=pn,c=s.DEFAULT_ANISOTROPY,h=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=si(),this.name="",this.source=new ir(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(xc).x}get height(){return this.source.getSize(xc).y}get depth(){return this.source.getSize(xc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ae(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ae(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $n:e.x=e.x-Math.floor(e.x);break;case wn:e.x=e.x<0?0:1;break;case Qs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $n:e.y=e.y-Math.floor(e.y);break;case wn:e.y=e.y<0?0:1;break;case Qs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=rh;Ot.DEFAULT_ANISOTROPY=1;var rt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],y=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,v=(f+1)/2,b=(m+1)/2,E=(h+d)/4,_=(u+y)/4,M=(p+g)/4;return S>v&&S>b?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=E/n,r=_/n):v>b?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=E/i,r=M/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=_/r,i=M/r),this.set(n,i,r,t),this}let x=Math.sqrt((g-p)*(g-p)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(g-p)/x,this.y=(u-y)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Co=class extends kn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new Ot({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ut,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new ir(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},xn=class extends Co{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},jr=class extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Io=class extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Oe=class s{static{this.prototype.isMatrix4=!0}constructor(e,t,n,i,r,a,o,l,c,h,u,d,f,p,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,d,f,p,y,g)}set(e,t,n,i,r,a,o,l,c,h,u,d,f,p,y,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=y,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Ds.setFromMatrixColumn(e,0).length(),r=1/Ds.setFromMatrixColumn(e,1).length(),a=1/Ds.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,p=o*h,y=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+p*c,t[5]=d-y*c,t[9]=-o*l,t[2]=y-d*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,p=c*h,y=c*u;t[0]=d+y*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-p,t[6]=y+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,p=c*h,y=c*u;t[0]=d-y*o,t[4]=-a*u,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*h,t[9]=y-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,p=o*h,y=o*u;t[0]=l*h,t[4]=p*c-f,t[8]=d*c+y,t[1]=l*u,t[5]=y*c+d,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,p=o*l,y=o*c;t[0]=l*h,t[4]=y-d*u,t[8]=p*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+p,t[10]=d-y*u}else if(e.order==="XZY"){let d=a*l,f=a*c,p=o*l,y=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+y,t[5]=a*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=o*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(um,e,dm)}lookAt(e,t,n){let i=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),ki.crossVectors(n,mn),ki.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),ki.crossVectors(n,mn)),ki.normalize(),Wa.crossVectors(mn,ki),i[0]=ki.x,i[4]=Wa.x,i[8]=mn.x,i[1]=ki.y,i[5]=Wa.y,i[9]=mn.y,i[2]=ki.z,i[6]=Wa.z,i[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],y=n[6],g=n[10],m=n[14],x=n[3],S=n[7],v=n[11],b=n[15],E=i[0],_=i[4],M=i[8],I=i[12],R=i[1],D=i[5],O=i[9],H=i[13],L=i[2],F=i[6],G=i[10],B=i[14],ee=i[3],X=i[7],Y=i[11],te=i[15];return r[0]=a*E+o*R+l*L+c*ee,r[4]=a*_+o*D+l*F+c*X,r[8]=a*M+o*O+l*G+c*Y,r[12]=a*I+o*H+l*B+c*te,r[1]=h*E+u*R+d*L+f*ee,r[5]=h*_+u*D+d*F+f*X,r[9]=h*M+u*O+d*G+f*Y,r[13]=h*I+u*H+d*B+f*te,r[2]=p*E+y*R+g*L+m*ee,r[6]=p*_+y*D+g*F+m*X,r[10]=p*M+y*O+g*G+m*Y,r[14]=p*I+y*H+g*B+m*te,r[3]=x*E+S*R+v*L+b*ee,r[7]=x*_+S*D+v*F+b*X,r[11]=x*M+S*O+v*G+b*Y,r[15]=x*I+S*H+v*B+b*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],y=e[7],g=e[11],m=e[15],x=l*f-c*d,S=o*f-c*u,v=o*d-l*u,b=a*f-c*h,E=a*d-l*h,_=a*u-o*h;return t*(y*x-g*S+m*v)-n*(p*x-g*b+m*E)+i*(p*S-y*b+m*_)-r*(p*v-y*E+g*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],y=e[13],g=e[14],m=e[15],x=t*o-n*a,S=t*l-i*a,v=t*c-r*a,b=n*l-i*o,E=n*c-r*o,_=i*c-r*l,M=h*y-u*p,I=h*g-d*p,R=h*m-f*p,D=u*g-d*y,O=u*m-f*y,H=d*m-f*g,L=x*H-S*O+v*D+b*R-E*I+_*M;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/L;return e[0]=(o*H-l*O+c*D)*F,e[1]=(i*O-n*H-r*D)*F,e[2]=(y*_-g*E+m*b)*F,e[3]=(d*E-u*_-f*b)*F,e[4]=(l*R-a*H-c*I)*F,e[5]=(t*H-i*R+r*I)*F,e[6]=(g*v-p*_-m*S)*F,e[7]=(h*_-d*v+f*S)*F,e[8]=(a*O-o*R+c*M)*F,e[9]=(n*R-t*O-r*M)*F,e[10]=(p*E-y*v+m*x)*F,e[11]=(u*v-h*E-f*x)*F,e[12]=(o*I-a*D-l*M)*F,e[13]=(t*D-n*I+i*M)*F,e[14]=(y*S-p*b-g*x)*F,e[15]=(h*b-u*S+d*x)*F,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,p=r*u,y=a*h,g=a*u,m=o*u,x=l*c,S=l*h,v=l*u,b=n.x,E=n.y,_=n.z;return i[0]=(1-(y+m))*b,i[1]=(f+v)*b,i[2]=(p-S)*b,i[3]=0,i[4]=(f-v)*E,i[5]=(1-(d+m))*E,i[6]=(g+x)*E,i[7]=0,i[8]=(p+S)*_,i[9]=(g-x)*_,i[10]=(1-(d+y))*_,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ds.set(i[0],i[1],i[2]).length(),o=Ds.set(i[4],i[5],i[6]).length(),l=Ds.set(i[8],i[9],i[10]).length();r<0&&(a=-a),On.copy(this);let c=1/a,h=1/o,u=1/l;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=h,On.elements[5]*=h,On.elements[6]*=h,On.elements[8]*=u,On.elements[9]*=u,On.elements[10]*=u,t.setFromRotationMatrix(On),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,r,a,o=An,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),p,y;if(l)p=r/(a-r),y=a*r/(a-r);else if(o===An)p=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===er)p=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=An,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i),p,y;if(l)p=1/(a-r),y=a/(a-r);else if(o===An)p=-2/(a-r),y=-(a+r)/(a-r);else if(o===er)p=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ds=new P,On=new Oe,um=new P(0,0,0),dm=new P(1,1,1),ki=new P,Wa=new P,mn=new P,Ku=new Oe,Zu=new xt,un=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ku.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ku,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zu.setFromEuler(this),this.setFromQuaternion(Zu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};un.DEFAULT_ORDER="XYZ";var Qr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},fm=0,Ju=new P,Us=new xt,hi=new Oe,Xa=new P,Ur=new P,pm=new P,mm=new xt,$u=new P(1,0,0),ju=new P(0,1,0),Qu=new P(0,0,1),ed={type:"added"},gm={type:"removed"},Os={type:"childadded",child:null},_c={type:"childremoved",child:null},dt=class s extends kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new P,t=new un,n=new xt,i=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Oe},normalMatrix:{value:new Be}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis($u,e)}rotateY(e){return this.rotateOnAxis(ju,e)}rotateZ(e){return this.rotateOnAxis(Qu,e)}translateOnAxis(e,t){return Ju.copy(e).applyQuaternion(this.quaternion),this.position.add(Ju.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($u,e)}translateY(e){return this.translateOnAxis(ju,e)}translateZ(e){return this.translateOnAxis(Qu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xa.copy(e):Xa.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(Ur,Xa,this.up):hi.lookAt(Xa,Ur,this.up),this.quaternion.setFromRotationMatrix(hi),i&&(hi.extractRotation(i.matrixWorld),Us.setFromRotationMatrix(hi),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Fe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ed),Os.child=e,this.dispatchEvent(Os),Os.child=null):Fe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gm),_c.child=e,this.dispatchEvent(_c),_c.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ed),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,e,pm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,mm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};dt.DEFAULT_UP=new P(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Tt=class extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},xm={type:"move"},sr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let g=t.getJointPose(y,n),m=this._getHandJoint(c,y);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xm)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Tt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},gf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},qa={h:0,s:0,l:0};function yc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Me=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=qe.workingColorSpace){if(e=_h(e,1),t=Je(t,0,1),n=Je(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=yc(a,r,e+1/3),this.g=yc(a,r,e),this.b=yc(a,r,e-1/3)}return qe.colorSpaceToWorking(this,i),this}setStyle(e,t=wt){function n(r){r!==void 0&&parseFloat(r)<1&&Ae("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ae("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ae("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wt){let n=gf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ae("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wt){return qe.workingToColorSpace(tn.copy(this),e),Math.round(Je(tn.r*255,0,255))*65536+Math.round(Je(tn.g*255,0,255))*256+Math.round(Je(tn.b*255,0,255))}getHexString(e=wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.workingToColorSpace(tn.copy(this),t);let n=tn.r,i=tn.g,r=tn.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.workingToColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=wt){qe.workingToColorSpace(tn.copy(this),e);let t=tn.r,n=tn.g,i=tn.b;return e!==wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+t,Hi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hi),e.getHSL(qa);let n=Kr(Hi.h,qa.h,t),i=Kr(Hi.s,qa.s,t),r=Kr(Hi.l,qa.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},tn=new Me;Me.NAMES=gf;var ea=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Me(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var yi=class extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Fn=new P,ui=new P,vc=new P,di=new P,Fs=new P,zs=new P,td=new P,Mc=new P,Sc=new P,bc=new P,Tc=new rt,Ec=new rt,wc=new rt,gi=class s{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Fn.subVectors(e,t),i.cross(Fn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Fn.subVectors(i,t),ui.subVectors(n,t),vc.subVectors(e,t);let a=Fn.dot(Fn),o=Fn.dot(ui),l=Fn.dot(vc),c=ui.dot(ui),h=ui.dot(vc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,p=(a*h-o*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,di.x),l.addScaledVector(a,di.y),l.addScaledVector(o,di.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return Tc.setScalar(0),Ec.setScalar(0),wc.setScalar(0),Tc.fromBufferAttribute(e,t),Ec.fromBufferAttribute(e,n),wc.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Tc,r.x),a.addScaledVector(Ec,r.y),a.addScaledVector(wc,r.z),a}static isFrontFacing(e,t,n,i){return Fn.subVectors(n,t),ui.subVectors(e,t),Fn.cross(ui).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Fn.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;Fs.subVectors(i,n),zs.subVectors(r,n),Mc.subVectors(e,n);let l=Fs.dot(Mc),c=zs.dot(Mc);if(l<=0&&c<=0)return t.copy(n);Sc.subVectors(e,i);let h=Fs.dot(Sc),u=zs.dot(Sc);if(h>=0&&u<=h)return t.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(Fs,a);bc.subVectors(e,r);let f=Fs.dot(bc),p=zs.dot(bc);if(p>=0&&f<=p)return t.copy(r);let y=f*c-l*p;if(y<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(zs,o);let g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return td.subVectors(r,i),o=(u-h)/(u-h+(f-p)),t.copy(i).addScaledVector(td,o);let m=1/(g+y+d);return a=y*m,o=d*m,t.copy(n).addScaledVector(Fs,a).addScaledVector(zs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},qt=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,zn):zn.fromBufferAttribute(r,a),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ya.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ya.copy(n.boundingBox)),Ya.applyMatrix4(e.matrixWorld),this.union(Ya)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Or),Ka.subVectors(this.max,Or),Bs.subVectors(e.a,Or),ks.subVectors(e.b,Or),Hs.subVectors(e.c,Or),Gi.subVectors(ks,Bs),Vi.subVectors(Hs,ks),ss.subVectors(Bs,Hs);let t=[0,-Gi.z,Gi.y,0,-Vi.z,Vi.y,0,-ss.z,ss.y,Gi.z,0,-Gi.x,Vi.z,0,-Vi.x,ss.z,0,-ss.x,-Gi.y,Gi.x,0,-Vi.y,Vi.x,0,-ss.y,ss.x,0];return!Ac(t,Bs,ks,Hs,Ka)||(t=[1,0,0,0,1,0,0,0,1],!Ac(t,Bs,ks,Hs,Ka))?!1:(Za.crossVectors(Gi,Vi),t=[Za.x,Za.y,Za.z],Ac(t,Bs,ks,Hs,Ka))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},fi=[new P,new P,new P,new P,new P,new P,new P,new P],zn=new P,Ya=new qt,Bs=new P,ks=new P,Hs=new P,Gi=new P,Vi=new P,ss=new P,Or=new P,Ka=new P,Za=new P,rs=new P;function Ac(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){rs.fromArray(s,r);let o=i.x*Math.abs(rs.x)+i.y*Math.abs(rs.y)+i.z*Math.abs(rs.z),l=e.dot(rs),c=t.dot(rs),h=n.dot(rs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Pt=new P,Ja=new Ne,_m=0,_t=class extends kn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_m++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=gh,this.updateRanges=[],this.gpuType=_n,this.version=0,this._normalizationScale=e!==void 0?Ul(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ja.fromBufferAttribute(this,t),Ja.applyMatrix3(e),this.setXY(t,Ja.x,Ja.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):vh(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Mh(e,this.array)}};var ta=class extends _t{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var na=class extends _t{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ye=class extends _t{constructor(e,t,n){super(new Float32Array(e),t,n)}},ym=new qt,Fr=new P,Rc=new P,dn=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):ym.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fr.subVectors(e,this.center);let t=Fr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Fr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fr.copy(e.center).add(Rc)),this.expandByPoint(Fr.copy(e.center).sub(Rc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},vm=0,En=new Oe,Cc=new dt,Gs=new P,gn=new qt,zr=new qt,Gt=new P,at=class s extends kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xp(e)?na:ta)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Be().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,n){return En.makeTranslation(e,t,n),this.applyMatrix4(En),this}scale(e,t,n){return En.makeScale(e,t,n),this.applyMatrix4(En),this}lookAt(e){return Cc.lookAt(e),Cc.updateMatrix(),this.applyMatrix4(Cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ye(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Fe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];zr.setFromBufferAttribute(o),this.morphTargetsRelative?(Gt.addVectors(gn.min,zr.min),gn.expandByPoint(Gt),Gt.addVectors(gn.max,zr.max),gn.expandByPoint(Gt)):(gn.expandByPoint(zr.min),gn.expandByPoint(zr.max))}gn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Gt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Gt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Gt.fromBufferAttribute(o,c),l&&(Gs.fromBufferAttribute(e,c),Gt.add(Gs)),i=Math.max(i,n.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Fe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Fe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new _t(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let I=0;I<n.count;I++)o[I]=new P,l[I]=new P;let h=new P,u=new P,d=new P,f=new Ne,p=new Ne,y=new Ne,g=new P,m=new P;function x(I,R,D){c[I]=c[R]=c[D]=1,h.fromBufferAttribute(n,I),u.fromBufferAttribute(n,R),d.fromBufferAttribute(n,D),f.fromBufferAttribute(r,I),p.fromBufferAttribute(r,R),y.fromBufferAttribute(r,D),u.sub(h),d.sub(h),p.sub(f),y.sub(f);let O=1/(p.x*y.y-y.x*p.y);isFinite(O)&&(g.copy(u).multiplyScalar(y.y).addScaledVector(d,-p.y).multiplyScalar(O),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-y.x).multiplyScalar(O),o[I].add(g),o[R].add(g),o[D].add(g),l[I].add(m),l[R].add(m),l[D].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let I=0,R=S.length;I<R;++I){let D=S[I],O=D.start,H=D.count;for(let L=O,F=O+H;L<F;L+=3)x(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let v=new P,b=new P,E=new P,_=new P;function M(I){E.fromBufferAttribute(i,I),_.copy(E);let R=o[I];v.copy(R),v.sub(E.multiplyScalar(E.dot(R))).normalize(),b.crossVectors(_,R);let O=b.dot(l[I])<0?-1:1;a.setXYZW(I,v.x,v.y,v.z,O)}for(let I=0,R=n.count;I<R;++I)c[I]&&M(I);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new _t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),y=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let m=0;m<h;m++)d[p++]=c[f++]}return new _t(d,h,u)}if(this.index===null)return Ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ps=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=gh,this.updateRanges=[],this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=nd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=nd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function nd(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=si()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}var an=new P,qi=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?Ul(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){$r("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new _t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){$r("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):vh(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Mh(e,this.data.array)}},Ic=new P,Mm=new P,Sm=new Be,Bn=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Ic.subVectors(n,t).cross(Mm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Ic),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Sm.getNormalMatrix(e),i=this.coplanarPoint(Ic).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},bm=0,nn=class extends kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=si(),this.name="",this.type="Material",this.blending=gr,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$c,this.blendDst=jc,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=af,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vo,this.stencilZFail=vo,this.stencilZPass=vo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ae(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ae(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Me().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Bn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ne().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ne().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},rr=class extends nn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Vs,Br=new P,Ws=new P,Xs=new P,qs=new Ne,kr=new Ne,xf=new Oe,$a=new P,Hr=new P,ja=new P,id=new Ne,Pc=new Ne,sd=new Ne,ia=class extends dt{constructor(e=new rr){if(super(),this.isSprite=!0,this.type="Sprite",Vs===void 0){Vs=new at;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ps(t,5);Vs.setIndex([0,1,2,0,2,3]),Vs.setAttribute("position",new qi(n,3,0,!1)),Vs.setAttribute("uv",new qi(n,2,3,!1))}this.geometry=Vs,this.material=e,this.center=new Ne(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Fe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ws.setFromMatrixScale(this.matrixWorld),xf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Xs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ws.multiplyScalar(-Xs.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;Qa($a.set(-.5,-.5,0),Xs,a,Ws,i,r),Qa(Hr.set(.5,-.5,0),Xs,a,Ws,i,r),Qa(ja.set(.5,.5,0),Xs,a,Ws,i,r),id.set(0,0),Pc.set(1,0),sd.set(1,1);let o=e.ray.intersectTriangle($a,Hr,ja,!1,Br);if(o===null&&(Qa(Hr.set(-.5,.5,0),Xs,a,Ws,i,r),Pc.set(0,1),o=e.ray.intersectTriangle($a,ja,Hr,!1,Br),o===null))return;let l=e.ray.origin.distanceTo(Br);l<e.near||l>e.far||t.push({distance:l,point:Br.clone(),uv:gi.getInterpolation(Br,$a,Hr,ja,id,Pc,sd,new Ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Qa(s,e,t,n,i,r){qs.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(kr.x=r*qs.x-i*qs.y,kr.y=i*qs.x+r*qs.y):kr.copy(qs),s.copy(e),s.x+=kr.x,s.y+=kr.y,s.applyMatrix4(xf)}var pi=new P,Lc=new P,eo=new P,to=new P,ms=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,t),pi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Lc.copy(e).add(t).multiplyScalar(.5),eo.copy(t).sub(e).normalize(),to.copy(this.origin).sub(Lc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(eo),o=to.dot(this.direction),l=-to.dot(eo),c=to.lengthSq(),h=Math.abs(1-a*a),u,d,f,p;if(h>0)if(u=a*l-o,d=a*o-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let y=1/h;u*=y,d*=y,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Lc).addScaledVector(eo,d),f}intersectSphere(e,t){if(e.radius<0)return null;pi.subVectors(e.center,this.origin);let n=pi.dot(this.direction),i=pi.dot(pi)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,t,n,i,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,y=t.y-a.y,g=t.z-a.z,m=n.x-a.x,x=n.y-a.y,S=n.z-a.z,v=Math.abs(l),b=Math.abs(c),E=Math.abs(h),_,M,I,R,D,O,H,L,F,G,B,ee;if(v>=b&&v>=E?(I=l,O=u,F=p,ee=m,l>=0?(_=c,M=h,R=d,D=f,H=y,L=g,G=x,B=S):(_=h,M=c,R=f,D=d,H=g,L=y,G=S,B=x)):b>=E?(I=c,O=d,F=y,ee=x,c>=0?(_=h,M=l,R=f,D=u,H=g,L=p,G=S,B=m):(_=l,M=h,R=u,D=f,H=p,L=g,G=m,B=S)):(I=h,O=f,F=g,ee=S,h>=0?(_=l,M=c,R=u,D=d,H=p,L=y,G=m,B=x):(_=c,M=l,R=d,D=u,H=y,L=p,G=x,B=m)),I===0)return null;let X=_/I,Y=M/I,te=1/I,_e=R-X*O,Se=D-Y*O,Z=H-X*F,fe=L-Y*F,ye=G-X*ee,we=B-Y*ee,pe=ye*fe-we*Z,ze=_e*we-Se*ye,pt=Z*Se-fe*_e;if(i){if(pe<0||ze<0||pt<0)return null}else if((pe<0||ze<0||pt<0)&&(pe>0||ze>0||pt>0))return null;let Le=pe+ze+pt;if(Le===0)return null;let it=te*(pe*O+ze*F+pt*ee);return(Le>0?it<0:it>0)?null:this.at(it/Le,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ot=class extends nn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},rd=new Oe,as=new ms,no=new dn,ad=new P,io=new P,so=new P,ro=new P,Nc=new P,ao=new P,od=new P,oo=new P,Ge=class extends dt{constructor(e=new at,t=new ot){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){ao.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Nc.fromBufferAttribute(u,e),a?ao.addScaledVector(Nc,h):ao.addScaledVector(Nc.sub(t),h))}t.add(ao)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(r),as.copy(e.ray).recast(e.near),!(no.containsPoint(as.origin)===!1&&(as.intersectSphere(no,ad)===null||as.origin.distanceToSquared(ad)>(e.far-e.near)**2))&&(rd.copy(r).invert(),as.copy(e.ray).applyMatrix4(rd),!(n.boundingBox!==null&&as.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,as)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,y=d.length;p<y;p++){let g=d[p],m=a[g.materialIndex],x=Math.max(g.start,f.start),S=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let v=x,b=S;v<b;v+=3){let E=o.getX(v),_=o.getX(v+1),M=o.getX(v+2);i=lo(this,m,e,n,c,h,u,E,_,M),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let p=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let g=p,m=y;g<m;g+=3){let x=o.getX(g),S=o.getX(g+1),v=o.getX(g+2);i=lo(this,a,e,n,c,h,u,x,S,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,y=d.length;p<y;p++){let g=d[p],m=a[g.materialIndex],x=Math.max(g.start,f.start),S=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=x,b=S;v<b;v+=3){let E=v,_=v+1,M=v+2;i=lo(this,m,e,n,c,h,u,E,_,M),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let p=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let g=p,m=y;g<m;g+=3){let x=g,S=g+1,v=g+2;i=lo(this,a,e,n,c,h,u,x,S,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function Tm(s,e,t,n,i,r,a,o){let l;if(e.side===Kt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Cn,o),l===null)return null;oo.copy(o),oo.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(oo);return c<t.near||c>t.far?null:{distance:c,point:oo.clone(),object:s}}function lo(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,io),s.getVertexPosition(l,so),s.getVertexPosition(c,ro);let h=Tm(s,e,t,n,io,so,ro,od);if(h){let u=new P;gi.getBarycoord(od,io,so,ro,u),i&&(h.uv=gi.getInterpolatedAttribute(i,o,l,c,u,new Ne)),r&&(h.uv1=gi.getInterpolatedAttribute(r,o,l,c,u,new Ne)),a&&(h.normal=gi.getInterpolatedAttribute(a,o,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new P,materialIndex:0};gi.getNormal(io,so,ro,d.normal),h.face=d,h.barycoord=u}return h}var Gr=new rt,ld=new rt,cd=new rt,Em=new rt,hd=new Oe,co=new P,Dc=new dn,ud=new Oe,Uc=new ms,sa=class extends Ge{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Bc,this.bindMatrix=new Oe,this.bindMatrixInverse=new Oe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new qt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,co),this.boundingBox.expandByPoint(co)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new dn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,co),this.boundingSphere.expandByPoint(co)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Dc.copy(this.boundingSphere),Dc.applyMatrix4(i),e.ray.intersectsSphere(Dc)!==!1&&(ud.copy(i).invert(),Uc.copy(e.ray).applyMatrix4(ud),!(this.boundingBox!==null&&Uc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Uc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new rt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Bc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ef?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ae("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;ld.fromBufferAttribute(i.attributes.skinIndex,e),cd.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(Gr.copy(t),t.set(0,0,0,0)):(Gr.set(t.x,t.y,t.z,1),t.set(0,0,0)),Gr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=cd.getComponent(r);if(a!==0){let o=ld.getComponent(r);hd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Em.copy(Gr).applyMatrix4(hd),a)}}return t.isVector4&&(t.w=Gr.w),t.applyMatrix4(this.bindMatrixInverse)}},ar=class extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}},or=class extends Ot{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Rt,h=Rt,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},dd=new Oe,wm=new Oe,ra=class s{constructor(e=[],t=[]){this.uuid=si(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ae("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Oe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Oe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:wm;dd.multiplyMatrices(o,t[r]),dd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new or(t,e,e,Pn,_n);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(Ae("Skeleton: No bone found with UUID:",r),a=new ar),this.bones.push(a),this.boneInverses.push(new Oe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},vi=class extends _t{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ys=new Oe,fd=new Oe,ho=[],pd=new qt,Am=new Oe,Vr=new Ge,Wr=new dn,jn=class extends Ge{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new vi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Am)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ys),pd.copy(e.boundingBox).applyMatrix4(Ys),this.boundingBox.union(pd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new dn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ys),Wr.copy(e.boundingSphere).applyMatrix4(Ys),this.boundingSphere.union(Wr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Vr.geometry=this.geometry,Vr.material=this.material,Vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wr.copy(this.boundingSphere),Wr.applyMatrix4(n),e.ray.intersectsSphere(Wr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ys),fd.multiplyMatrices(n,Ys),Vr.matrixWorld=fd,Vr.raycast(e,ho);for(let a=0,o=ho.length;a<o;a++){let l=ho[a];l.instanceId=r,l.object=this,t.push(l)}ho.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new vi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new or(new Float32Array(i*this.count),i,this.count,Qo,_n));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},os=new dn,Rm=new Ne(.5,.5),uo=new P,Yi=class{constructor(e=new Bn,t=new Bn,n=new Bn,i=new Bn,r=new Bn,a=new Bn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=An,n=!1){let i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],y=r[9],g=r[10],m=r[11],x=r[12],S=r[13],v=r[14],b=r[15];if(i[0].setComponents(c-a,f-h,m-p,b-x).normalize(),i[1].setComponents(c+a,f+h,m+p,b+x).normalize(),i[2].setComponents(c+o,f+u,m+y,b+S).normalize(),i[3].setComponents(c-o,f-u,m-y,b-S).normalize(),n)i[4].setComponents(l,d,g,v).normalize(),i[5].setComponents(c-l,f-d,m-g,b-v).normalize();else if(i[4].setComponents(c-l,f-d,m-g,b-v).normalize(),t===An)i[5].setComponents(c+l,f+d,m+g,b+v).normalize();else if(t===er)i[5].setComponents(l,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(e){os.center.set(0,0,0);let t=Rm.distanceTo(e.center);return os.radius=.7071067811865476+t,os.applyMatrix4(e.matrixWorld),this.intersectsSphere(os)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(uo.x=i.normal.x>0?e.max.x:e.min.x,uo.y=i.normal.y>0?e.max.y:e.min.y,uo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(uo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},md=new Oe,Po=class s{constructor(){this.coordinateSystem=An,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let r=t[i];md.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Yi),n[i].setFromProjectionMatrix(md,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Yi),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new s().copy(this)}};var lr=class extends nn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Lo=new P,No=new P,gd=new Oe,Xr=new ms,fo=new dn,Oc=new P,xd=new P,gs=class extends dt{constructor(e=new at,t=new lr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Lo.fromBufferAttribute(t,i-1),No.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Lo.distanceTo(No);e.setAttribute("lineDistance",new Ye(n,1))}else Ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fo.copy(n.boundingSphere),fo.applyMatrix4(i),fo.radius+=r,e.ray.intersectsSphere(fo)===!1)return;gd.copy(i).invert(),Xr.copy(e.ray).applyMatrix4(gd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let y=f,g=p-1;y<g;y+=c){let m=h.getX(y),x=h.getX(y+1),S=po(this,e,Xr,l,m,x,y);S&&t.push(S)}if(this.isLineLoop){let y=h.getX(p-1),g=h.getX(f),m=po(this,e,Xr,l,y,g,p-1);m&&t.push(m)}}else{let f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let y=f,g=p-1;y<g;y+=c){let m=po(this,e,Xr,l,y,y+1,y);m&&t.push(m)}if(this.isLineLoop){let y=po(this,e,Xr,l,p-1,f,p-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function po(s,e,t,n,i,r,a){let o=s.geometry.attributes.position;if(Lo.fromBufferAttribute(o,i),No.fromBufferAttribute(o,r),t.distanceSqToSegment(Lo,No,Oc,xd)>n)return;Oc.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Oc);if(!(c<e.near||c>e.far))return{distance:c,point:xd.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var _d=new P,yd=new P,aa=class extends gs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)_d.fromBufferAttribute(t,i),yd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+_d.distanceTo(yd);e.setAttribute("lineDistance",new Ye(n,1))}else Ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},oa=class extends gs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Qn=class extends nn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},vd=new Oe,Hc=new ms,mo=new dn,go=new P,Mi=class extends dt{constructor(e=new at,t=new Qn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(i),mo.radius+=r,e.ray.intersectsSphere(mo)===!1)return;vd.copy(i).invert(),Hc.copy(e.ray).applyMatrix4(vd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=d,y=f;p<y;p++){let g=c.getX(p);go.fromBufferAttribute(u,g),Md(go,g,l,i,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let p=d,y=f;p<y;p++)go.fromBufferAttribute(u,p),Md(go,p,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Md(s,e,t,n,i,r,a){let o=Hc.distanceSqToPoint(s);if(o<t){let l=new P;Hc.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var la=class extends Ot{constructor(e=[],t=bs,n,i,r,a,o,l,c,h){super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Si=class extends Ot{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var bi=class extends Ot{constructor(e,t,n=Wn,i,r,a,o=Rt,l=Rt,c,h=_i,u=1){if(h!==_i&&h!==Pi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ir(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ca=class extends bi{constructor(e,t=Wn,n=bs,i,r,a=Rt,o=Rt,l,c=_i){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ha=class extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Yt=class s extends at{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(u,2));function p(y,g,m,x,S,v,b,E,_,M,I){let R=v/_,D=b/M,O=v/2,H=b/2,L=E/2,F=_+1,G=M+1,B=0,ee=0,X=new P;for(let Y=0;Y<G;Y++){let te=Y*D-H;for(let _e=0;_e<F;_e++){let Se=_e*R-O;X[y]=Se*x,X[g]=te*S,X[m]=L,c.push(X.x,X.y,X.z),X[y]=0,X[g]=0,X[m]=E>0?1:-1,h.push(X.x,X.y,X.z),u.push(_e/_),u.push(1-Y/M),B+=1}}for(let Y=0;Y<M;Y++)for(let te=0;te<_;te++){let _e=d+te+F*Y,Se=d+te+F*(Y+1),Z=d+(te+1)+F*(Y+1),fe=d+(te+1)+F*Y;l.push(_e,Se,fe),l.push(Se,Z,fe),ee+=6}o.addGroup(f,ee,I),f+=ee,d+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},ua=class s extends at{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+r,y=i+1,g=new P,m=new P;for(let x=0;x<=p;x++){let S=0,v=0,b=0,E=0;if(x<=n){let I=x/n,R=I*Math.PI/2;v=-h-e*Math.cos(R),b=e*Math.sin(R),E=-e*Math.cos(R),S=I*u}else if(x<=n+r){let I=(x-n)/r;v=-h+I*t,b=e,E=0,S=u+I*d}else{let I=(x-n-r)/n,R=I*Math.PI/2;v=h+e*Math.sin(R),b=e*Math.cos(R),E=e*Math.sin(R),S=u+d+I*u}let _=Math.max(0,Math.min(1,S/f)),M=0;x===0?M=.5/i:x===p&&(M=-.5/i);for(let I=0;I<=i;I++){let R=I/i,D=R*Math.PI*2,O=Math.sin(D),H=Math.cos(D);m.x=-b*H,m.y=v,m.z=b*O,o.push(m.x,m.y,m.z),g.set(-b*H,E,b*O),g.normalize(),l.push(g.x,g.y,g.z),c.push(R+M,_)}if(x>0){let I=(x-1)*y;for(let R=0;R<i;R++){let D=I+R,O=I+R+1,H=x*y+R,L=x*y+R+1;a.push(D,O,H),a.push(O,L,H)}}}this.setIndex(a),this.setAttribute("position",new Ye(o,3)),this.setAttribute("normal",new Ye(l,3)),this.setAttribute("uv",new Ye(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},da=class s extends at{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new P,h=new Ne;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ye(a,3)),this.setAttribute("normal",new Ye(o,3)),this.setAttribute("uv",new Ye(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Mt=class s extends at{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,y=[],g=n/2,m=0;x(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Ye(u,3)),this.setAttribute("normal",new Ye(d,3)),this.setAttribute("uv",new Ye(f,2));function x(){let v=new P,b=new P,E=0,_=(t-e)/n;for(let M=0;M<=r;M++){let I=[],R=M/r,D=R*(t-e)+e;for(let O=0;O<=i;O++){let H=O/i,L=H*l+o,F=Math.sin(L),G=Math.cos(L);b.x=D*F,b.y=-R*n+g,b.z=D*G,u.push(b.x,b.y,b.z),v.set(F,_,G).normalize(),d.push(v.x,v.y,v.z),f.push(H,1-R),I.push(p++)}y.push(I)}for(let M=0;M<i;M++)for(let I=0;I<r;I++){let R=y[I][M],D=y[I+1][M],O=y[I+1][M+1],H=y[I][M+1];(e>0||I!==0)&&(h.push(R,D,H),E+=3),(t>0||I!==r-1)&&(h.push(D,O,H),E+=3)}c.addGroup(m,E,0),m+=E}function S(v){let b=p,E=new Ne,_=new P,M=0,I=v===!0?e:t,R=v===!0?1:-1;for(let O=1;O<=i;O++)u.push(0,g*R,0),d.push(0,R,0),f.push(.5,.5),p++;let D=p;for(let O=0;O<=i;O++){let L=O/i*l+o,F=Math.cos(L),G=Math.sin(L);_.x=I*G,_.y=g*R,_.z=I*F,u.push(_.x,_.y,_.z),d.push(0,R,0),E.x=F*.5+.5,E.y=G*.5*R+.5,f.push(E.x,E.y),p++}for(let O=0;O<i;O++){let H=b+O,L=D+O;v===!0?h.push(L,L+1,H):h.push(L+1,L,H),M+=3}c.addGroup(m,M,v===!0?1:2),m+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},xs=class s extends Mt{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},cr=class s extends at{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Ye(r,3)),this.setAttribute("normal",new Ye(r.slice(),3)),this.setAttribute("uv",new Ye(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let S=new P,v=new P,b=new P;for(let E=0;E<t.length;E+=3)f(t[E+0],S),f(t[E+1],v),f(t[E+2],b),l(S,v,b,x)}function l(x,S,v,b){let E=b+1,_=[];for(let M=0;M<=E;M++){_[M]=[];let I=x.clone().lerp(v,M/E),R=S.clone().lerp(v,M/E),D=E-M;for(let O=0;O<=D;O++)O===0&&M===E?_[M][O]=I:_[M][O]=I.clone().lerp(R,O/D)}for(let M=0;M<E;M++)for(let I=0;I<2*(E-M)-1;I++){let R=Math.floor(I/2);I%2===0?(d(_[M][R+1]),d(_[M+1][R]),d(_[M][R])):(d(_[M][R+1]),d(_[M+1][R+1]),d(_[M+1][R]))}}function c(x){let S=new P;for(let v=0;v<r.length;v+=3)S.x=r[v+0],S.y=r[v+1],S.z=r[v+2],S.normalize().multiplyScalar(x),r[v+0]=S.x,r[v+1]=S.y,r[v+2]=S.z}function h(){let x=new P;for(let S=0;S<r.length;S+=3){x.x=r[S+0],x.y=r[S+1],x.z=r[S+2];let v=g(x)/2/Math.PI+.5,b=m(x)/Math.PI+.5;a.push(v,1-b)}p(),u()}function u(){for(let x=0;x<a.length;x+=6){let S=a[x+0],v=a[x+2],b=a[x+4],E=Math.max(S,v,b),_=Math.min(S,v,b);E>.9&&_<.1&&(S<.2&&(a[x+0]+=1),v<.2&&(a[x+2]+=1),b<.2&&(a[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,S){let v=x*3;S.x=e[v+0],S.y=e[v+1],S.z=e[v+2]}function p(){let x=new P,S=new P,v=new P,b=new P,E=new Ne,_=new Ne,M=new Ne;for(let I=0,R=0;I<r.length;I+=9,R+=6){x.set(r[I+0],r[I+1],r[I+2]),S.set(r[I+3],r[I+4],r[I+5]),v.set(r[I+6],r[I+7],r[I+8]),E.set(a[R+0],a[R+1]),_.set(a[R+2],a[R+3]),M.set(a[R+4],a[R+5]),b.copy(x).add(S).add(v).divideScalar(3);let D=g(b);y(E,R+0,x,D),y(_,R+2,S,D),y(M,R+4,v,D)}}function y(x,S,v,b){b<0&&x.x===1&&(a[S]=x.x-1),v.x===0&&v.z===0&&(a[S]=b/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}},fa=class s extends cr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var pa=class s extends cr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var ma=class s extends cr{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Hn=class s extends at{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,f=[],p=[],y=[],g=[];for(let m=0;m<h;m++){let x=m*d-a;for(let S=0;S<c;S++){let v=S*u-r;p.push(v,-x,0),y.push(0,0,1),g.push(S/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<o;x++){let S=x+c*m,v=x+c*(m+1),b=x+1+c*(m+1),E=x+1+c*m;f.push(S,v,E),f.push(v,b,E)}this.setIndex(f),this.setAttribute("position",new Ye(p,3)),this.setAttribute("normal",new Ye(y,3)),this.setAttribute("uv",new Ye(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ti=class s extends at{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new P,d=new P,f=[],p=[],y=[],g=[];for(let m=0;m<=n;m++){let x=[],S=m/n,v=a+S*o,b=e*Math.cos(v),E=Math.sqrt(e*e-b*b),_=0;m===0&&a===0?_=.5/t:m===n&&l===Math.PI&&(_=-.5/t);for(let M=0;M<=t;M++){let I=M/t,R=i+I*r;u.x=-E*Math.cos(R),u.y=b,u.z=E*Math.sin(R),p.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),g.push(I+_,1-S),x.push(c++)}h.push(x)}for(let m=0;m<n;m++)for(let x=0;x<t;x++){let S=h[m][x+1],v=h[m][x],b=h[m+1][x],E=h[m+1][x+1];(m!==0||a>0)&&f.push(S,v,E),(m!==n-1||l<Math.PI)&&f.push(v,b,E)}this.setIndex(f),this.setAttribute("position",new Ye(p,3)),this.setAttribute("normal",new Ye(y,3)),this.setAttribute("uv",new Ye(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var hr=class s extends at{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],u=[],d=new P,f=new P,p=new P;for(let y=0;y<=n;y++){let g=a+y/n*o;for(let m=0;m<=i;m++){let x=m/i*r;f.x=(e+t*Math.cos(g))*Math.cos(x),f.y=(e+t*Math.cos(g))*Math.sin(x),f.z=t*Math.sin(g),c.push(f.x,f.y,f.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),p.subVectors(f,d).normalize(),h.push(p.x,p.y,p.z),u.push(m/i),u.push(y/n)}}for(let y=1;y<=n;y++)for(let g=1;g<=i;g++){let m=(i+1)*y+g-1,x=(i+1)*(y-1)+g-1,S=(i+1)*(y-1)+g,v=(i+1)*y+g;l.push(m,x,v),l.push(x,S,v)}this.setIndex(l),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function ws(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(Sd(i))i.isRenderTargetTexture?(Ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Sd(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function sn(s){let e={};for(let t=0;t<s.length;t++){let n=ws(s[t]);for(let i in n)e[i]=n[i]}return e}function Sd(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Cm(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Sh(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}var _f={clone:ws,merge:sn},Im=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ei=class extends nn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Im,this.fragmentShader=Pm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ws(e.uniforms),this.uniformsGroups=Cm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Me().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ne().fromArray(i.value);break;case"v3":this.uniforms[n].value=new P().fromArray(i.value);break;case"v4":this.uniforms[n].value=new rt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Be().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Oe().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Do=class extends ei{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Lt=class extends nn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pa,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ln=class extends Lt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return hs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){hs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Rn=class extends nn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pa,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=qo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Uo=class extends nn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Oo=class extends nn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Xi(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function qr(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function Lm(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function bd(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function Nm(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var ti=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Fo=class extends ti{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ls,endingEnd:ls}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case cs:r=e,o=2*t-n;break;case Zr:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case cs:a=e,l=2*n-t;break;case Zr:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),y=p*p,g=y*p,m=-d*g+2*d*y-d*p,x=(1+d)*g+(-1.5-2*d)*y+(-.5+d)*p+1,S=(-1-f)*g+(1.5+f)*y+.5*p,v=f*g-f*y;for(let b=0;b!==o;++b)r[b]=m*a[h+b]+x*a[c+b]+S*a[l+b]+v*a[u+b];return r}},ga=class extends ti{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},zo=class extends ti{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Bo=class extends ti{interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-t)/(i-t),y=1-p;for(let g=0;g!==o;++g)r[g]=a[c+g]*y+a[l+g]*p;return r}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let y=a[c+p],g=a[l+p],m=f*d+p*2,x=u[m],S=u[m+1],v=e*d+p*2,b=h[v],E=h[v+1],_=Um(n,t,x,b,i);r[p]=yf(_,y,S,E,g)}return r}};function yf(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function Dm(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function Um(s,e,t,n,i){let r=(s-e)/(i-e);for(let a=0;a<8;a++){let o=yf(r,e,t,n,i)-s;if(Math.abs(o)<1e-10)break;let l=Dm(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var fn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xi(t,this.TimeBufferType),this.values=Xi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Xi(e.times,Array),values:Xi(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),qr(e.settings)&&(n.settings={inTangents:Xi(e.settings.inTangents,Array),outTangents:Xi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new zo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ga(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Bo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case us:t=this.InterpolantFactoryMethodDiscrete;break;case ds:t=this.InterpolantFactoryMethodLinear;break;case yo:t=this.InterpolantFactoryMethodSmooth;break;case kc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ae("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return us;case this.InterpolantFactoryMethodLinear:return ds;case this.InterpolantFactoryMethodSmooth:return yo;case this.InterpolantFactoryMethodBezier:return kc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;qr(this.settings)&&(Td(this.settings.inTangents,e),Td(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;qr(this.settings)&&(Ed(this.settings.inTangents,e),Ed(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Fe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Fe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Fe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Fe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&qp(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){Fe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===yo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let y=t[u+p];if(y!==t[d+p]||y!==t[f+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,qr(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Td(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]+=e}function Ed(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}fn.prototype.ValueTypeName="";fn.prototype.TimeBufferType=Float32Array;fn.prototype.ValueBufferType=Float32Array;fn.prototype.DefaultInterpolation=ds;var Ei=class extends fn{constructor(e,t,n){super(e,t,n)}};Ei.prototype.ValueTypeName="bool";Ei.prototype.ValueBufferType=Array;Ei.prototype.DefaultInterpolation=us;Ei.prototype.InterpolantFactoryMethodLinear=void 0;Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var xa=class extends fn{constructor(e,t,n,i){super(e,t,n,i)}};xa.prototype.ValueTypeName="color";var wi=class extends fn{constructor(e,t,n,i){super(e,t,n,i)}};wi.prototype.ValueTypeName="number";var ko=class extends ti{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)xt.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ai=class extends fn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new ko(this.times,this.values,this.getValueSize(),e)}};Ai.prototype.ValueTypeName="quaternion";Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Ri=class extends fn{constructor(e,t,n){super(e,t,n)}};Ri.prototype.ValueTypeName="string";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=us;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Ki=class extends fn{constructor(e,t,n,i){super(e,t,n,i)}};Ki.prototype.ValueTypeName="vector";var Ci=class{constructor(e="",t=-1,n=[],i=Dl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=si(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Fm(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(fn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=Lm(l);l=bd(l,1,h),c=bd(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new wi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Om(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return wi;case"vector":case"vector2":case"vector3":case"vector4":return Ki;case"color":return xa;case"quaternion":return Ai;case"bool":case"boolean":return Ei;case"string":return Ri}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Fm(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Om(s.type);if(s.times===void 0){let n=[],i=[];Nm(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),qr(s.settings)&&(t.settings={inTangents:Xi(s.settings.inTangents,Float32Array),outTangents:Xi(s.settings.outTangents,Float32Array)}),t}var Jn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(wd(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!wd(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function wd(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Ho=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},vf=new Ho,ni=class{constructor(e){this.manager=e!==void 0?e:vf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};ni.DEFAULT_MATERIAL_NAME="__DEFAULT";var mi={},Gc=class extends Error{constructor(e,t){super(e),this.response=t}},ur=class extends ni{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Jn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(mi[e]!==void 0){mi[e].push({onLoad:t,onProgress:n,onError:i});return}mi[e]=[],mi[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ae("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=mi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,y=0,g=new ReadableStream({start(m){x();function x(){u.read().then(({done:S,value:v})=>{if(S)m.close();else{y+=v.byteLength;let b=new ProgressEvent("progress",{lengthComputable:p,loaded:y,total:f});for(let E=0,_=h.length;E<_;E++){let M=h[E];M.onProgress&&M.onProgress(b)}m.enqueue(v),x()}},S=>{m.error(S)})}}});return new Response(g)}else throw new Gc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{Jn.add(`file:${e}`,c);let h=mi[e];delete mi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=mi[e];if(h===void 0)throw this.manager.itemError(e),c;delete mi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ks=new WeakMap,Go=class extends ni{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Jn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Ks.get(a);u===void 0&&(u=[],Ks.set(a,u)),u.push({onLoad:t,onError:i})}return a}let o=tr("img");function l(){h(),t&&t(this);let u=Ks.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Ks.delete(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),Jn.remove(`image:${e}`);let d=Ks.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(u)}Ks.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Jn.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var _a=class extends ni{constructor(e){super(e)}load(e,t,n,i){let r=new Ot,a=new Go(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Zi=class extends dt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ji=class extends Zi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Fc=new Oe,Ad=new P,Rd=new P,dr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.mapType=pn,this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yi,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ad.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ad),Rd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Fc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Fc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===er||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Fc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},xo=new P,_o=new xt,Zn=new P,ya=class extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(xo,_o,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xo,_o,Zn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(xo,_o,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xo,_o,Zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Wi=new P,Cd=new Ne,Id=new Ne,At=class extends ya{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=fs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fs*2*Math.atan(Math.tan(Yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,t){return this.getViewBounds(e,Cd,Id),t.subVectors(Id,Cd)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Yr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Vc=class extends dr{constructor(){super(new At(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=fs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},_s=class extends Zi{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Vc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Wc=class extends dr{constructor(){super(new At(90,1,.5,500)),this.isPointLightShadow=!0}},cn=class extends Zi{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Wc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ys=class extends ya{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Xc=class extends dr{constructor(){super(new ys(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Gn=class extends Zi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new Xc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},va=class extends Zi{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ii=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var zc=new WeakMap,Ma=class extends ni{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ae("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ae("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Jn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{zc.has(a)===!0?(i&&i(zc.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Jn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),zc.set(l,c),Jn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Jn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Zs=-90,Js=1,fr=class extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new At(Zs,Js,e,t);i.layers=this.layers,this.add(i);let r=new At(Zs,Js,e,t);r.layers=this.layers,this.add(r);let a=new At(Zs,Js,e,t);a.layers=this.layers,this.add(a);let o=new At(Zs,Js,e,t);o.layers=this.layers,this.add(o);let l=new At(Zs,Js,e,t);l.layers=this.layers,this.add(l);let c=new At(Zs,Js,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===An)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===er)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=y,e.setRenderTarget(n,5,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Vo=class extends At{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Wo=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){xt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let a=this._workIndex*r;xt.multiplyQuaternionsFlat(e,a,e,t,e,n),xt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){let a=1-i;for(let o=0;o!==r;++o){let l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*i}}},bh="\\[\\]\\.:\\/",zm=new RegExp("["+bh+"]","g"),Th="[^"+bh+"]",Bm="[^"+bh.replace("\\.","")+"]",km=/((?:WC+[\/:])*)/.source.replace("WC",Th),Hm=/(WCOD+)?/.source.replace("WCOD",Bm),Gm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Th),Vm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Th),Wm=new RegExp("^"+km+Hm+Gm+Vm+"$"),Xm=["material","materials","bones","map"],qc=class{constructor(e,t,n){let i=n||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ct=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(zm,"")}static parseTrackName(e){let t=Wm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Xm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ae("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Fe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Fe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Fe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Fe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Fe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;Fe("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ct.Composite=qc;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Xo=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,a=r.length,o=new Array(a),l={endingStart:ls,endingEnd:ls};for(let c=0;c!==a;++c){let h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Nl,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case nf:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case Dl:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,a=n===tf;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===Ca){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=cs,i.endingEnd=cs):(e?i.endingStart=this.zeroSlopeAtStart?cs:ls:i.endingStart=Zr,t?i.endingEnd=this.zeroSlopeAtEnd?cs:ls:i.endingEnd=Zr)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}},qm=new Float32Array(1),pr=class extends kn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){let d=i[u],f=d.name,p=h[f];if(p!==void 0)++p.referenceCount,a[u]=p;else{if(p=a[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}let y=t&&t._propertyBindings[u].binding.parsedPath;p=new Wo(ct.create(n,f,y),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),a[u]=p}o[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new ga(new Float32Array(2),new Float32Array(2),1,qm),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,a=typeof e=="string"?Ci.findByName(i,e):e,o=a!==null?a.uuid:e,l=this._actionsByClip[o],c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Dl),l!==void 0){let u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let h=new Xo(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?Ci.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Yc=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};function Eh(s,e,t,n){let i=Ym(n);switch(t){case hh:return s*e;case Qo:return s*e/i.components*i.byteLength;case el:return s*e/i.components*i.byteLength;case $i:return s*e*2/i.components*i.byteLength;case tl:return s*e*2/i.components*i.byteLength;case uh:return s*e*3/i.components*i.byteLength;case Pn:return s*e*4/i.components*i.byteLength;case nl:return s*e*4/i.components*i.byteLength;case ba:case Ta:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ea:case wa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sl:case al:return Math.max(s,16)*Math.max(e,8)/4;case il:case rl:return Math.max(s,8)*Math.max(e,8)/2;case ol:case ll:case hl:case ul:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case cl:case Aa:case dl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case fl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case pl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ml:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case gl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case xl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case _l:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case yl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case vl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ml:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Sl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case bl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Tl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case El:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case wl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Al:case Rl:case Cl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Il:case Pl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ra:case Ll:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ym(s){switch(s){case pn:case ah:return{byteLength:1,components:1};case yr:case oh:case Xn:return{byteLength:2,components:1};case $o:case jo:return{byteLength:2,components:4};case Wn:case Jo:case _n:return{byteLength:4,components:1};case lh:case ch:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Gf(){let s=null,e=!1,t=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Zm(s){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],y=u[f];y.start<=p.start+p.count+1?p.count=Math.max(p.count,y.start+y.count-p.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let y=u[f];s.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Jm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$m=`#ifdef USE_ALPHAHASH
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
#endif`,jm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,e0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,t0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,n0=`#ifdef USE_AOMAP
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
#endif`,i0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,s0=`#ifdef USE_BATCHING
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
#endif`,r0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,a0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,o0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,l0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,c0=`#ifdef USE_IRIDESCENCE
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
#endif`,h0=`#ifdef USE_BUMPMAP
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
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,f0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,m0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,g0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,x0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,y0=`#define PI 3.141592653589793
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
} // validated`,v0=`vec3 transformedNormal = objectNormal;
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
#endif`,M0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,S0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,b0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,T0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,E0="gl_FragColor = linearToOutputTexel( gl_FragColor );",w0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,A0=`#ifdef USE_ENVMAP
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
#endif`,R0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,C0=`#ifdef USE_ENVMAP
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
#endif`,I0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,P0=`#ifdef USE_ENVMAP
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
#endif`,L0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,N0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,D0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,U0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,O0=`#ifdef USE_GRADIENTMAP
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
}`,F0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,z0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,B0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,k0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,H0=`#ifdef USE_ENVMAP
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
#endif`,G0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,V0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,W0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,X0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,q0=`PhysicalMaterial material;
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
#endif`,Y0=`uniform sampler2D dfgLUT;
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
}`,K0=`
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
#endif`,Z0=`#if defined( RE_IndirectDiffuse )
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
#endif`,J0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,j0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Q0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ng=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ig=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rg=`#if defined( USE_POINTS_UV )
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
#endif`,ag=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,og=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cg=`#if defined( USE_MORPHCOLORS )
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
#endif`,hg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ug=`#ifdef USE_MORPHTARGETS
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
#endif`,dg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,_g=`#ifdef USE_NORMALMAP
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
#endif`,yg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Eg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ag=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ig=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ng=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dg=`float getShadowMask() {
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
}`,Ug=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Og=`#ifdef USE_SKINNING
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
#endif`,Fg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zg=`#ifdef USE_SKINNING
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
#endif`,Bg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vg=`#ifdef USE_TRANSMISSION
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
#endif`,Wg=`#ifdef USE_TRANSMISSION
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
#endif`,Xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Zg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jg=`uniform sampler2D t2D;
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
}`,$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jg=`uniform float backgroundBlurriness;
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
}`,Qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ex=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tx=`#include <common>
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
}`,nx=`#if DEPTH_PACKING == 3200
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
}`,ix=`#define DISTANCE
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
}`,sx=`#define DISTANCE
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
}`,rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ax=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ox=`uniform float scale;
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
}`,lx=`uniform vec3 diffuse;
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
}`,cx=`#include <common>
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
}`,hx=`uniform vec3 diffuse;
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
}`,ux=`#define LAMBERT
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
}`,dx=`#define LAMBERT
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
}`,fx=`#define MATCAP
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
}`,px=`#define MATCAP
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
}`,mx=`#define NORMAL
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
}`,gx=`#define NORMAL
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
}`,xx=`#define PHONG
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
}`,_x=`#define PHONG
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
}`,yx=`#define STANDARD
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
}`,vx=`#define STANDARD
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
}`,Mx=`#define TOON
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
}`,Sx=`#define TOON
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
}`,bx=`uniform float size;
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
}`,Tx=`uniform vec3 diffuse;
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
}`,Ex=`#include <common>
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
}`,wx=`uniform vec3 color;
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
}`,Ax=`uniform float rotation;
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
}`,Rx=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Jm,alphahash_pars_fragment:$m,alphamap_fragment:jm,alphamap_pars_fragment:Qm,alphatest_fragment:e0,alphatest_pars_fragment:t0,aomap_fragment:n0,aomap_pars_fragment:i0,batching_pars_vertex:s0,batching_vertex:r0,begin_vertex:a0,beginnormal_vertex:o0,bsdfs:l0,iridescence_fragment:c0,bumpmap_pars_fragment:h0,clipping_planes_fragment:u0,clipping_planes_pars_fragment:d0,clipping_planes_pars_vertex:f0,clipping_planes_vertex:p0,color_fragment:m0,color_pars_fragment:g0,color_pars_vertex:x0,color_vertex:_0,common:y0,defaultnormal_vertex:v0,displacementmap_pars_vertex:M0,displacementmap_vertex:S0,emissivemap_fragment:b0,emissivemap_pars_fragment:T0,colorspace_fragment:E0,colorspace_pars_fragment:w0,envmap_fragment:A0,envmap_common_pars_fragment:R0,envmap_pars_fragment:C0,envmap_pars_vertex:I0,envmap_physical_pars_fragment:H0,envmap_vertex:P0,fog_vertex:L0,fog_pars_vertex:N0,fog_fragment:D0,fog_pars_fragment:U0,gradientmap_pars_fragment:O0,lightmap_pars_fragment:F0,lights_lambert_fragment:z0,lights_lambert_pars_fragment:B0,lights_pars_begin:k0,lights_toon_fragment:G0,lights_toon_pars_fragment:V0,lights_phong_fragment:W0,lights_phong_pars_fragment:X0,lights_physical_fragment:q0,lights_physical_pars_fragment:Y0,lights_fragment_begin:K0,lights_fragment_maps:Z0,lights_fragment_end:J0,lightprobes_pars_fragment:$0,logdepthbuf_fragment:j0,logdepthbuf_pars_fragment:Q0,logdepthbuf_pars_vertex:eg,logdepthbuf_vertex:tg,map_fragment:ng,map_pars_fragment:ig,map_particle_fragment:sg,map_particle_pars_fragment:rg,metalnessmap_fragment:ag,metalnessmap_pars_fragment:og,morphinstance_vertex:lg,morphcolor_vertex:cg,morphnormal_vertex:hg,morphtarget_pars_vertex:ug,morphtarget_vertex:dg,normal_fragment_begin:fg,normal_fragment_maps:pg,normal_pars_fragment:mg,normal_pars_vertex:gg,normal_vertex:xg,normalmap_pars_fragment:_g,clearcoat_normal_fragment_begin:yg,clearcoat_normal_fragment_maps:vg,clearcoat_pars_fragment:Mg,iridescence_pars_fragment:Sg,opaque_fragment:bg,packing:Tg,premultiplied_alpha_fragment:Eg,project_vertex:wg,dithering_fragment:Ag,dithering_pars_fragment:Rg,roughnessmap_fragment:Cg,roughnessmap_pars_fragment:Ig,shadowmap_pars_fragment:Pg,shadowmap_pars_vertex:Lg,shadowmap_vertex:Ng,shadowmask_pars_fragment:Dg,skinbase_vertex:Ug,skinning_pars_vertex:Og,skinning_vertex:Fg,skinnormal_vertex:zg,specularmap_fragment:Bg,specularmap_pars_fragment:kg,tonemapping_fragment:Hg,tonemapping_pars_fragment:Gg,transmission_fragment:Vg,transmission_pars_fragment:Wg,uv_pars_fragment:Xg,uv_pars_vertex:qg,uv_vertex:Yg,worldpos_vertex:Kg,background_vert:Zg,background_frag:Jg,backgroundCube_vert:$g,backgroundCube_frag:jg,cube_vert:Qg,cube_frag:ex,depth_vert:tx,depth_frag:nx,distance_vert:ix,distance_frag:sx,equirect_vert:rx,equirect_frag:ax,linedashed_vert:ox,linedashed_frag:lx,meshbasic_vert:cx,meshbasic_frag:hx,meshlambert_vert:ux,meshlambert_frag:dx,meshmatcap_vert:fx,meshmatcap_frag:px,meshnormal_vert:mx,meshnormal_frag:gx,meshphong_vert:xx,meshphong_frag:_x,meshphysical_vert:yx,meshphysical_frag:vx,meshtoon_vert:Mx,meshtoon_frag:Sx,points_vert:bx,points_frag:Tx,shadow_vert:Ex,shadow_frag:wx,sprite_vert:Ax,sprite_frag:Rx},ge={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},ai={basic:{uniforms:sn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:sn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Me(0)},envMapIntensity:{value:1}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:sn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:sn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:sn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Me(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:sn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:sn([ge.points,ge.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:sn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:sn([ge.common,ge.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:sn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:sn([ge.sprite,ge.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distance:{uniforms:sn([ge.common,ge.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distance_vert,fragmentShader:Xe.distance_frag},shadow:{uniforms:sn([ge.lights,ge.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};ai.physical={uniforms:sn([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Be},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};var Ol={r:0,b:0,g:0},Cx=new Oe,Vf=new Be;Vf.set(-1,0,0,0,1,0,0,0,1);function Ix(s,e,t,n,i,r){let a=new Me(0),o=i===!0?0:1,l,c,h=null,u=0,d=null;function f(x){let S=x.isScene===!0?x.background:null;if(S&&S.isTexture){let v=x.backgroundBlurriness>0;S=e.get(S,v)}return S}function p(x){let S=!1,v=f(x);v===null?g(a,o):v&&v.isColor&&(g(v,1),S=!0);let b=s.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(x,S){let v=f(S);v&&v.isCubeTexture?(c===void 0&&(c=new Ge(new Yt(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:ws(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,E,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Cx.makeRotationFromEuler(S.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Vf),c.material.toneMapped=qe.getTransfer(v.colorSpace)!==nt,(h!==v||u!==v.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ge(new Hn(2,2),new ei({name:"BackgroundMaterial",uniforms:ws(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=qe.getTransfer(v.colorSpace)!==nt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=s.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function g(x,S){x.getRGB(Ol,Sh(s)),t.buffers.color.setClear(Ol.r,Ol.g,Ol.b,S,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,S=1){a.set(x),o=S,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,g(a,o)},render:p,addToRenderList:y,dispose:m}}function Px(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(D,O,H,L,F){let G=!1,B=u(D,L,H,O);r!==B&&(r=B,c(r.object)),G=f(D,L,H,F),G&&p(D,L,H,F),F!==null&&e.update(F,s.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,v(D,O,H,L),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return s.createVertexArray()}function c(D){return s.bindVertexArray(D)}function h(D){return s.deleteVertexArray(D)}function u(D,O,H,L){let F=L.wireframe===!0,G=n[O.id];G===void 0&&(G={},n[O.id]=G);let B=D.isInstancedMesh===!0?D.id:0,ee=G[B];ee===void 0&&(ee={},G[B]=ee);let X=ee[H.id];X===void 0&&(X={},ee[H.id]=X);let Y=X[F];return Y===void 0&&(Y=d(l()),X[F]=Y),Y}function d(D){let O=[],H=[],L=[];for(let F=0;F<t;F++)O[F]=0,H[F]=0,L[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:H,attributeDivisors:L,object:D,attributes:{},index:null}}function f(D,O,H,L){let F=r.attributes,G=O.attributes,B=0,ee=H.getAttributes();for(let X in ee)if(ee[X].location>=0){let te=F[X],_e=G[X];if(_e===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(_e=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(_e=D.instanceColor)),te===void 0||te.attribute!==_e||_e&&te.data!==_e.data)return!0;B++}return r.attributesNum!==B||r.index!==L}function p(D,O,H,L){let F={},G=O.attributes,B=0,ee=H.getAttributes();for(let X in ee)if(ee[X].location>=0){let te=G[X];te===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(te=D.instanceColor));let _e={};_e.attribute=te,te&&te.data&&(_e.data=te.data),F[X]=_e,B++}r.attributes=F,r.attributesNum=B,r.index=L}function y(){let D=r.newAttributes;for(let O=0,H=D.length;O<H;O++)D[O]=0}function g(D){m(D,0)}function m(D,O){let H=r.newAttributes,L=r.enabledAttributes,F=r.attributeDivisors;H[D]=1,L[D]===0&&(s.enableVertexAttribArray(D),L[D]=1),F[D]!==O&&(s.vertexAttribDivisor(D,O),F[D]=O)}function x(){let D=r.newAttributes,O=r.enabledAttributes;for(let H=0,L=O.length;H<L;H++)O[H]!==D[H]&&(s.disableVertexAttribArray(H),O[H]=0)}function S(D,O,H,L,F,G,B){B===!0?s.vertexAttribIPointer(D,O,H,F,G):s.vertexAttribPointer(D,O,H,L,F,G)}function v(D,O,H,L){y();let F=L.attributes,G=H.getAttributes(),B=O.defaultAttributeValues;for(let ee in G){let X=G[ee];if(X.location>=0){let Y=F[ee];if(Y===void 0&&(ee==="instanceMatrix"&&D.instanceMatrix&&(Y=D.instanceMatrix),ee==="instanceColor"&&D.instanceColor&&(Y=D.instanceColor)),Y!==void 0){let te=Y.normalized,_e=Y.itemSize,Se=e.get(Y);if(Se===void 0)continue;let Z=Se.buffer,fe=Se.type,ye=Se.bytesPerElement,we=fe===s.INT||fe===s.UNSIGNED_INT||Y.gpuType===Jo;if(Y.isInterleavedBufferAttribute){let pe=Y.data,ze=pe.isInterleavedBuffer===!0?pe.stride:pe.itemSize,pt=Y.offset;if(pe.isInstancedInterleavedBuffer||pe.isInstancedBufferAttribute){for(let Le=0;Le<X.locationSize;Le++)m(X.location+Le,pe.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Le=0;Le<X.locationSize;Le++)g(X.location+Le);s.bindBuffer(s.ARRAY_BUFFER,Z);for(let Le=0;Le<X.locationSize;Le++)S(X.location+Le,_e/X.locationSize,fe,te,ze*ye,(pt+_e/X.locationSize*Le)*ye,we)}else{if(Y.isInstancedBufferAttribute){for(let pe=0;pe<X.locationSize;pe++)m(X.location+pe,Y.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let pe=0;pe<X.locationSize;pe++)g(X.location+pe);s.bindBuffer(s.ARRAY_BUFFER,Z);for(let pe=0;pe<X.locationSize;pe++)S(X.location+pe,_e/X.locationSize,fe,te,_e*ye,_e/X.locationSize*pe*ye,we)}}else if(B!==void 0){let te=B[ee];if(te!==void 0)switch(te.length){case 2:s.vertexAttrib2fv(X.location,te);break;case 3:s.vertexAttrib3fv(X.location,te);break;case 4:s.vertexAttrib4fv(X.location,te);break;default:s.vertexAttrib1fv(X.location,te)}}}}x()}function b(){I();for(let D in n){let O=n[D];for(let H in O){let L=O[H];for(let F in L){let G=L[F];for(let B in G)h(G[B].object),delete G[B];delete L[F]}}delete n[D]}}function E(D){if(n[D.id]===void 0)return;let O=n[D.id];for(let H in O){let L=O[H];for(let F in L){let G=L[F];for(let B in G)h(G[B].object),delete G[B];delete L[F]}}delete n[D.id]}function _(D){for(let O in n){let H=n[O];for(let L in H){let F=H[L];if(F[D.id]===void 0)continue;let G=F[D.id];for(let B in G)h(G[B].object),delete G[B];delete F[D.id]}}}function M(D){for(let O in n){let H=n[O],L=D.isInstancedMesh===!0?D.id:0,F=H[L];if(F!==void 0){for(let G in F){let B=F[G];for(let ee in B)h(B[ee].object),delete B[ee];delete F[G]}delete H[L],Object.keys(H).length===0&&delete n[O]}}}function I(){R(),a=!0,r!==i&&(r=i,c(r.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:I,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:M,releaseStatesOfProgram:_,initAttributes:y,enableAttribute:g,disableUnusedAttributes:x}}function Lx(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Nx(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(_){return!(_!==Pn&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let M=_===Xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==pn&&_!==_n&&!M&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ae("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Ae("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Ae("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:x,maxVaryings:S,maxFragmentUniforms:v,maxSamples:b,samples:E}}function Dx(s){let e=this,t=null,n=0,i=!1,r=!1,a=new Bn,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,y=u.clipIntersection,g=u.clipShadows,m=s.get(u);if(!i||p===null||p.length===0||r&&!g)r?h(null):c();else{let x=r?0:n,S=x*4,v=m.clippingState||null;l.value=v,v=h(p,d,S,f);for(let b=0;b!==S;++b)v[b]=t[b];m.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,p){let y=u!==null?u.length:0,g=null;if(y!==0){if(g=l.value,p!==!0||g===null){let m=f+y*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<m)&&(g=new Float32Array(m));for(let S=0,v=f;S!==y;++S,v+=4)a.copy(u[S]).applyMatrix4(x,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}var Da=class extends xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new la(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Yt(5,5,5),r=new ei({name:"CubemapFromEquirect",uniforms:ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:Ms});r.uniforms.tEquirect.value=t;let a=new Ge(i,r),o=t.minFilter;return t.minFilter===In&&(t.minFilter=Ut),new fr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},Mf=256,Ux=3,Ox=20,Wf=256,Xf=16,Fx=3,zx=new P,Bx=new Me,Sr=class s{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new fr(1,10,null),this._boxMesh=new Ge(new Yt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:a=256,position:o=zx}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,y=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(e.background=l.getClearColor(Bx));let g=new fr(n,i,h);return g.position.copy(o),g.update(l,e),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=p,e.background=y,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Mf,yh(e))}_fromTexture(e,t){e.mapping===bs||e.mapping===xr?this._setSize(e.image.length===0?Mf:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Sf(e,!1,!1),n=Math.log2(e)-Ux;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Sf(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===bs||e.mapping===xr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tf()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=bf()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=kx(),this._integrationMaterial=Hx());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Xf);for(let a=0;a<=n;a++){let o=s.lodToRoughness(a,n);if(a>n-Fx)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(Wf*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Gx());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(r,0,n)}};function Sf(s,e,t){return new Da(s,{minFilter:In,generateMipmaps:e,type:Xn,colorSpace:on,depthBuffer:t})}function Ua(s,e,t){return new ei({name:s,uniforms:e,vertexShader:Xe.cube_vert,fragmentShader:t,side:Kt,blending:Ms,depthTest:!1,depthWrite:!1})}function kx(){return Ua("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Wf}u

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
	`)}function Hx(){return Ua("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Xf}},`

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
	`)}function Gx(){return Ua("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Ox}
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
	`)}function bf(){return Ua("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Tf(){return Ua("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Vx(s){let e=new WeakMap,t=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Yo||f===Ko)if(e.has(d)){let p=e.get(d).texture;return o(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let y=new Da(p.height);return y.fromEquirectangularTexture(s,d),e.set(d,y),d.addEventListener("dispose",c),o(y.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,p=f===Yo||f===Ko,y=f===bs||f===xr;if(p||y){let g=t.get(d),m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new Sr(s)),g=p?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let x=d.image;return p&&x&&x.height>0||y&&x&&l(x)?(n===null&&(n=new Sr(s)),g=p?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,f){return f===Yo?d.mapping=bs:f===Ko&&(d.mapping=xr),d}function l(d){let f=0,p=6;for(let y=0;y<p;y++)d[y]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function Wx(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&hs("WebGLRenderer: "+n+" extension not supported."),i}}}function Xx(s,e,t,n){let i={},r=new WeakMap,a=new FinalizationRegistry(p=>delete i[p]);function o(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete i[p.id],a.unregister(p);let y=r.get(p);y&&(e.remove(y),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,y){return i[y.id]!==void 0||(y.addEventListener("dispose",o),i[y.id]=new WeakRef(y),a.register(y,y.id,y),t.memory.geometries++),y}function h(p){let y=p.attributes;for(let g in y)e.update(y[g],s.ARRAY_BUFFER)}function u(p){let y=p.index,g=p.attributes.position,m=0;if(g===void 0)return;let x=y!==null?y.array.length:g.array.length/3-1,S=g.count>=65535?na:ta,v=new S(Math.ceil(x/3)*6,1),b=v.array;if(y!==null){let _=y.array;m=y.version;for(let M=0,I=0;M<x;M+=3){let R=_[M+0],D=_[M+1],O=_[M+2];b[I++]=R,b[I++]=D,b[I++]=D,b[I++]=O,b[I++]=O,b[I++]=R}}else{m=g.version;for(let _=0,M=0;_<x;_+=3){let I=_+0,R=_+1,D=_+2;b[M++]=I,b[M++]=R,b[M++]=R,b[M++]=D,b[M++]=D,b[M++]=I}}v.version=m;let E=r.get(p);E&&e.remove(E),r.set(p,v)}function d(p){let y=r.get(p);if(y){let g=p.index;g!==null&&y.version<g.version&&u(p)}else u(p);return r.get(p)}function f(){for(let p in i){let y=i[p].deref();y!==void 0&&l(y)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function qx(s,e,t){let n;function i(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){s.drawElements(n,d,r,u*a),t.update(d,n,1)}function c(u,d,f){f!==0&&(s.drawElementsInstanced(n,d,r,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let y=0;for(let g=0;g<f;g++)y+=d[g];t.update(y,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Yx(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:Fe("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Kx(s,e,t){let n=new WeakMap,i=new rt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let I=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",I)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],S=0;f===!0&&(S=1),p===!0&&(S=2),y===!0&&(S=3);let v=o.attributes.position.count*S,b=1;v>e.maxTextureSize&&(b=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let E=new Float32Array(v*b*4*u),_=new jr(E,v,b,u);_.type=_n,_.needsUpdate=!0;let M=S*4;for(let R=0;R<u;R++){let D=g[R],O=m[R],H=x[R],L=v*b*4*R;for(let F=0;F<D.count;F++){let G=F*M;f===!0&&(i.fromBufferAttribute(D,F),E[L+G+0]=i.x,E[L+G+1]=i.y,E[L+G+2]=i.z,E[L+G+3]=0),p===!0&&(i.fromBufferAttribute(O,F),E[L+G+4]=i.x,E[L+G+5]=i.y,E[L+G+6]=i.z,E[L+G+7]=0),y===!0&&(i.fromBufferAttribute(H,F),E[L+G+8]=i.x,E[L+G+9]=i.y,E[L+G+10]=i.z,E[L+G+11]=H.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new Ne(v,b)},n.set(o,d),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Zx(s,e,t,n,i){let r=new WeakMap;function a(c){let h=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Jx={[Qc]:"LINEAR_TONE_MAPPING",[eh]:"REINHARD_TONE_MAPPING",[th]:"CINEON_TONE_MAPPING",[Sa]:"ACES_FILMIC_TONE_MAPPING",[ih]:"AGX_TONE_MAPPING",[sh]:"NEUTRAL_TONE_MAPPING",[nh]:"CUSTOM_TONE_MAPPING"};function $x(s,e,t,n,i,r){let a=new xn(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new at;h.setAttribute("position",new Ye([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ye([0,2,0,0,2,0],2));let u=new Do({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ge(h,u),f=new ys(-1,1,1,-1,0,1),p=null,y=null,g=!1,m,x=null,S=[],v=!1;this.setSize=function(b,E){a.setSize(b,E),o!==null&&o.setSize(b,E),l!==null&&l.setSize(b,E);for(let _=0;_<S.length;_++){let M=S[_];M.setSize&&M.setSize(b,E)}},this.setEffects=function(b){S=b,v=S.length>0&&S[0].isRenderPass===!0;let E=a.width,_=a.height;S.length>0&&o===null&&(o=new xn(E,_,{type:Xn,depthBuffer:!1,stencilBuffer:!1}),l=new xn(E,_,{type:Xn,depthBuffer:!1,stencilBuffer:!1}));let M=i===!0&&S.some(I=>I.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&c===null&&(c=new bi(E,_),r===!0&&(c.format=Pi,c.type=Es)),a.dispose(),a.depthTexture=M?c:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let I=0;I<S.length;I++){let R=S[I];R.setSize&&R.setSize(E,_),M&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(b,E){if(g||b.toneMapping===ii&&S.length===0)return!1;if(x=E,E!==null){let _=E.width,M=E.height;(a.width!==_||a.height!==M)&&this.setSize(_,M)}return v===!1&&b.setRenderTarget(a),m=b.toneMapping,b.toneMapping=ii,!0},this.hasRenderPass=function(){return v},this.end=function(b,E){b.toneMapping=m,g=!0;let _=a,M=o;for(let I=0;I<S.length;I++){let R=S[I];R.enabled!==!1&&(R.render(b,M,_,E),R.needsSwap!==!1&&(_=M,M=M===o?l:o))}if(p!==b.outputColorSpace||y!==b.toneMapping){p=b.outputColorSpace,y=b.toneMapping,u.defines={},qe.getTransfer(p)===nt&&(u.defines.SRGB_TRANSFER="");let I=Jx[y];I&&(u.defines[I]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,b.setRenderTarget(x),b.render(d,f),x=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var qf=new Ot,Yf=new bi(1,1),Kf=new ca(1),Zf=new jr,Jf=new Io,$f=new la,Ef=[],wf=[],Af=new Float32Array(16),Rf=new Float32Array(9),Cf=new Float32Array(4);function br(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Ef[i];if(r===void 0&&(r=new Float32Array(i),Ef[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Ft(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function zt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Bl(s,e){let t=wf[e];t===void 0&&(t=new Int32Array(e),wf[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function jx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Qx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2fv(this.addr,e),zt(t,e)}}function e_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;s.uniform3fv(this.addr,e),zt(t,e)}}function t_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4fv(this.addr,e),zt(t,e)}}function n_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Ft(t,n))return;Cf.set(n),s.uniformMatrix2fv(this.addr,!1,Cf),zt(t,n)}}function i_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Ft(t,n))return;Rf.set(n),s.uniformMatrix3fv(this.addr,!1,Rf),zt(t,n)}}function s_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Ft(t,n))return;Af.set(n),s.uniformMatrix4fv(this.addr,!1,Af),zt(t,n)}}function r_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function a_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2iv(this.addr,e),zt(t,e)}}function o_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;s.uniform3iv(this.addr,e),zt(t,e)}}function l_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4iv(this.addr,e),zt(t,e)}}function c_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function h_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2uiv(this.addr,e),zt(t,e)}}function u_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;s.uniform3uiv(this.addr,e),zt(t,e)}}function d_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4uiv(this.addr,e),zt(t,e)}}function kl(s){return s.version===0&&(s.compareFunction=mh,s.needsUpdate=!0),s}function f_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=kl(Yf):r=qf,t.setTexture2D(e||r,i)}function p_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Jf,i)}function m_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=kl(Kf):r=$f,t.setTextureCube(e||r,i)}function g_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Zf,i)}function x_(s){switch(s){case 5126:return jx;case 35664:return Qx;case 35665:return e_;case 35666:return t_;case 35674:return n_;case 35675:return i_;case 35676:return s_;case 5124:case 35670:return r_;case 35667:case 35671:return a_;case 35668:case 35672:return o_;case 35669:case 35673:return l_;case 5125:return c_;case 36294:return h_;case 36295:return u_;case 36296:return d_;case 35678:case 36198:case 36298:case 36306:case 35682:return f_;case 35679:case 36299:case 36307:return p_;case 35680:case 36300:case 36308:case 36293:return m_;case 36289:case 36303:case 36311:case 36292:return g_}}function __(s,e){s.uniform1fv(this.addr,e)}function y_(s,e){let t=br(e,this.size,2);s.uniform2fv(this.addr,t)}function v_(s,e){let t=br(e,this.size,3);s.uniform3fv(this.addr,t)}function M_(s,e){let t=br(e,this.size,4);s.uniform4fv(this.addr,t)}function S_(s,e){let t=br(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function b_(s,e){let t=br(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function T_(s,e){let t=br(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function E_(s,e){s.uniform1iv(this.addr,e)}function w_(s,e){s.uniform2iv(this.addr,e)}function A_(s,e){s.uniform3iv(this.addr,e)}function R_(s,e){s.uniform4iv(this.addr,e)}function C_(s,e){s.uniform1uiv(this.addr,e)}function I_(s,e){s.uniform2uiv(this.addr,e)}function P_(s,e){s.uniform3uiv(this.addr,e)}function L_(s,e){s.uniform4uiv(this.addr,e)}function N_(s,e,t){let n=this.cache,i=e.length,r=Bl(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),zt(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=kl(Yf):a=qf;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function D_(s,e,t){let n=this.cache,i=e.length,r=Bl(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Jf,r[a])}function U_(s,e,t){let n=this.cache,i=e.length,r=Bl(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),zt(n,r));let a;this.type===s.SAMPLER_CUBE_SHADOW?a=kl(Kf):a=$f;for(let o=0;o!==i;++o)t.setTextureCube(e[o]||a,r[o])}function O_(s,e,t){let n=this.cache,i=e.length,r=Bl(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Zf,r[a])}function F_(s){switch(s){case 5126:return __;case 35664:return y_;case 35665:return v_;case 35666:return M_;case 35674:return S_;case 35675:return b_;case 35676:return T_;case 5124:case 35670:return E_;case 35667:case 35671:return w_;case 35668:case 35672:return A_;case 35669:case 35673:return R_;case 5125:return C_;case 36294:return I_;case 36295:return P_;case 36296:return L_;case 35678:case 36198:case 36298:case 36306:case 35682:return N_;case 35679:case 36299:case 36307:return D_;case 35680:case 36300:case 36308:case 36293:return U_;case 36289:case 36303:case 36311:case 36292:return O_}}var Rh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=x_(t.type)}},Ch=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=F_(t.type)}},Ih=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},wh=/(\w+)(\])?(\[|\.)?/g;function If(s,e){s.seq.push(e),s.map[e.id]=e}function z_(s,e,t){let n=s.name,i=n.length;for(wh.lastIndex=0;;){let r=wh.exec(n),a=wh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){If(t,c===void 0?new Rh(o,s,e):new Ch(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new Ih(o),If(t,u)),t=u}}}var Mr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);z_(o,l,this)}let i=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Pf(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var B_=37297,k_=0;function H_(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Lf=new Be;function G_(s){qe._getMatrix(Lf,qe.workingColorSpace,s);let e=`mat3( ${Lf.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(s)){case Jr:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return Ae("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Nf(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+H_(s.getShaderSource(e),o)}else return r}function V_(s,e){let t=G_(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var W_={[Qc]:"Linear",[eh]:"Reinhard",[th]:"Cineon",[Sa]:"ACESFilmic",[ih]:"AgX",[sh]:"Neutral",[nh]:"Custom"};function X_(s,e){let t=W_[e];return t===void 0?(Ae("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Fl=new P;function q_(){qe.getLuminanceCoefficients(Fl);let s=Fl.x.toFixed(4),e=Fl.y.toFixed(4),t=Fl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Y_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Na).join(`
`)}function K_(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Z_(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Na(s){return s!==""}function Df(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Uf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var J_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ph(s){return s.replace(J_,$_)}function $_(s,e){let t=Xe[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Ph(t)}var j_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Of(s){return s.replace(j_,Q_)}function Q_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ff(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}var ey={[vs]:"SHADOWMAP_TYPE_PCF",[mr]:"SHADOWMAP_TYPE_VSM"};function ty(s){return ey[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ny={[xr]:"ENVMAP_MODE_REFRACTION"};function iy(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":ny[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var sy={[qo]:"ENVMAP_BLENDING_MULTIPLY",[jd]:"ENVMAP_BLENDING_MIX",[Qd]:"ENVMAP_BLENDING_ADD"};function ry(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":sy[s.combine]||"ENVMAP_BLENDING_NONE"}function ay(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=ty(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=iy(t),u=ry(t),d=Y_(t),f=K_(r),p=i.createProgram(),y,g,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Na).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Na).join(`
`),g.length>0&&(g+=`
`)):(y=[Ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Na).join(`
`),g=[Ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?Xe.tonemapping_pars_fragment:"",t.toneMapping!==ii?X_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,V_("linearToOutputTexel",t.outputColorSpace),q_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Na).join(`
`)),a=Ph(a),a=Df(a,t),a=Uf(a,t),o=Ph(o),o=Df(o,t),o=Uf(o,t),a=Of(a),o=Of(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,y=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",t.glslVersion===xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let x=m+y+a,S=m+g+o,v=Pf(i,i.VERTEX_SHADER,x),b=Pf(i,i.FRAGMENT_SHADER,S);i.attachShader(p,v),i.attachShader(p,b),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function E(R){if(s.debug.checkShaderErrors){let D=i.getProgramInfoLog(p)||"",O=i.getShaderInfoLog(v)||"",H=i.getShaderInfoLog(b)||"",L=D.trim(),F=O.trim(),G=H.trim(),B=!0,ee=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(B=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,v,b);else{let X=Nf(i,v,"vertex"),Y=Nf(i,b,"fragment");Fe("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+X+`
`+Y)}else L!==""?Ae("WebGLProgram: Program Info Log:",L):(F===""||G==="")&&(ee=!1);ee&&(R.diagnostics={runnable:B,programLog:L,vertexShader:{log:F,prefix:y},fragmentShader:{log:G,prefix:g}})}i.deleteShader(v),i.deleteShader(b),_=new Mr(i,p),M=Z_(i,p)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=i.getProgramParameter(p,B_)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=k_++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=v,this.fragmentShader=b,this}var oy=0,Lh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Nh(e),t.set(e,n)),n}},Nh=class{constructor(e){this.id=oy++,this.code=e,this.usedTimes=0}};function ly(s){return s===$i||s===Aa||s===Ra}function cy(s,e,t,n,i,r){let a=new Qr,o=new Lh,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,M,I,R,D,O){let H=R.fog,L=D.geometry,F=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,B=e.get(_.envMap||F,G),ee=d[_.type],X=n.precision;_.precision!==null&&(X=n.getMaxPrecision(_.precision),X!==_.precision&&Ae("WebGLProgram.getParameters:",_.precision,"not supported, using",X,"instead."));let Y=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,te=Y!==void 0?Y.length:0,_e=0;L.morphAttributes.position!==void 0&&(_e=1),L.morphAttributes.normal!==void 0&&(_e=2),L.morphAttributes.color!==void 0&&(_e=3);let Se,Z,fe,ye;if(ee){let me=ai[ee];Se=me.vertexShader,Z=me.fragmentShader}else{Se=_.vertexShader,Z=_.fragmentShader;let me=o.getVertexShaderStage(_),st=o.getFragmentShaderStage(_);o.update(_,me,st),fe=me.id,ye=st.id}let we=s.getRenderTarget(),pe=s.state.buffers.depth.getReversed(),ze=D.isInstancedMesh===!0,pt=D.isBatchedMesh===!0,Le=!!_.map,it=!!_.matcap,ht=!!B,$e=ht&&B.isPMREMTexture===!0,Wt=!!_.aoMap,Nt=!!_.lightMap,hn=!!_.bumpMap&&_.wireframe===!1,yt=!!_.normalMap,Kn=!!_.displacementMap,Bt=!!_.emissiveMap,Mn=!!_.metalnessMap,Sn=!!_.roughnessMap,bn=_.anisotropy>0,z=_.clearcoat>0,Tn=_.diffuseRoughness>0,mt=_.dispersion>0,gt=_.retroreflectivity>0,de=_.iridescence>0,Dt=_.sheen>0,De=_.transmission>0,ke=bn&&!!_.anisotropyMap,C=z&&!!_.clearcoatMap,T=z&&!!_.clearcoatNormalMap,V=z&&!!_.clearcoatRoughnessMap,ne=Tn&&!!_.diffuseRoughnessMap,Q=de&&!!_.iridescenceMap,re=de&&!!_.iridescenceThicknessMap,he=Dt&&!!_.sheenColorMap,J=Dt&&!!_.sheenRoughnessMap,$=!!_.specularMap,oe=!!_.specularColorMap,N=!!_.specularIntensityMap,j=De&&!!_.transmissionMap,K=De&&!!_.thicknessMap,le=!!_.gradientMap,se=!!_.alphaMap,ae=_.alphaTest>0,Ce=!!_.alphaHash,We=!!_.extensions,ie=ii;_.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(ie=s.toneMapping);let Pe=$e?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,Ve={shaderID:ee,shaderType:_.type,shaderName:_.name,vertexShader:Se,fragmentShader:Z,defines:_.defines,customVertexShaderID:fe,customFragmentShaderID:ye,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:X,batching:pt,batchingColor:pt&&D._colorsTexture!==null,instancing:ze,instancingColor:ze&&D.instanceColor!==null,instancingMorph:ze&&D.morphTexture!==null,outputColorSpace:we===null?s.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:qe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Le,matcap:it,envMap:ht,envMapMode:ht&&B.mapping,envMapPMREM:$e,envMapMaxLod:$e?Pe.length-1:null,envMapSize:$e?Pe[0].width:null,aoMap:Wt,lightMap:Nt,bumpMap:hn,normalMap:yt,displacementMap:Kn,emissiveMap:Bt,normalMapObjectSpace:yt&&_.normalMapType===rf,normalMapTangentSpace:yt&&_.normalMapType===Pa,packedNormalMap:yt&&_.normalMapType===Pa&&ly(_.normalMap.format),metalnessMap:Mn,roughnessMap:Sn,anisotropy:bn,anisotropyMap:ke,clearcoat:z,clearcoatMap:C,clearcoatNormalMap:T,clearcoatRoughnessMap:V,diffuseRoughness:Tn,diffuseRoughnessMap:ne,dispersion:mt,retroreflection:gt,iridescence:de,iridescenceMap:Q,iridescenceThicknessMap:re,sheen:Dt,sheenColorMap:he,sheenRoughnessMap:J,specularMap:$,specularColorMap:oe,specularIntensityMap:N,transmission:De,transmissionMap:j,thicknessMap:K,gradientMap:le,opaque:_.transparent===!1&&_.blending===gr&&_.alphaToCoverage===!1,alphaMap:se,alphaTest:ae,alphaHash:Ce,combine:_.combine,mapUv:Le&&f(_.map.channel),aoMapUv:Wt&&f(_.aoMap.channel),lightMapUv:Nt&&f(_.lightMap.channel),bumpMapUv:hn&&f(_.bumpMap.channel),normalMapUv:yt&&f(_.normalMap.channel),displacementMapUv:Kn&&f(_.displacementMap.channel),emissiveMapUv:Bt&&f(_.emissiveMap.channel),metalnessMapUv:Mn&&f(_.metalnessMap.channel),roughnessMapUv:Sn&&f(_.roughnessMap.channel),anisotropyMapUv:ke&&f(_.anisotropyMap.channel),clearcoatMapUv:C&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:T&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ne&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:re&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:he&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:J&&f(_.sheenRoughnessMap.channel),specularMapUv:$&&f(_.specularMap.channel),specularColorMapUv:oe&&f(_.specularColorMap.channel),specularIntensityMapUv:N&&f(_.specularIntensityMap.channel),transmissionMapUv:j&&f(_.transmissionMap.channel),thicknessMapUv:K&&f(_.thicknessMap.channel),alphaMapUv:se&&f(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(yt||bn),vertexNormals:!!L.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!L.attributes.uv&&(Le||se),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||L.attributes.normal===void 0&&yt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:pe,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:_e,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:O.filter(me=>me.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:ie,decodeVideoTexture:Le&&_.map.isVideoTexture===!0&&qe.getTransfer(_.map.colorSpace)===nt,decodeVideoTextureEmissive:Bt&&_.emissiveMap.isVideoTexture===!0&&qe.getTransfer(_.emissiveMap.colorSpace)===nt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Vt,flipSided:_.side===Kt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:We&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&_.extensions.multiDraw===!0||pt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ve.vertexUv1s=l.has(1),Ve.vertexUv2s=l.has(2),Ve.vertexUv3s=l.has(3),l.clear(),Ve}function y(_){let M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(let I in _.defines)M.push(I),M.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(g(M,_),m(M,_),M.push(s.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function g(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapPMREM),_.push(M.envMapMaxLod),_.push(M.envMapSize),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.diffuseRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.numSunLights),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numSunLightShadows),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.numLightProbeGrids),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function m(_,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function x(_){let M=d[_.type],I;if(M){let R=ai[M];I=_f.clone(R.uniforms)}else I=_.uniforms;return I}function S(_,M){let I=h.get(M);return I!==void 0?++I.usedTimes:(I=new ay(s,M,_,i),c.push(I),h.set(M,I)),I}function v(_){if(--_.usedTimes===0){let M=c.indexOf(_);c[M]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function b(_){o.remove(_)}function E(){o.dispose()}return{getParameters:p,getProgramCacheKey:y,getUniforms:x,acquireProgram:S,releaseProgram:v,releaseShaderCache:b,programs:c,dispose:E}}function hy(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function uy(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function zf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Bf(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,p,y,g,m){let x=s[e];return x===void 0?(x={id:d.id,object:d,geometry:f,material:p,materialVariant:a(d),groupOrder:y,renderOrder:d.renderOrder,z:g,group:m},s[e]=x):(x.id=d.id,x.object=d,x.geometry=f,x.material=p,x.materialVariant=a(d),x.groupOrder=y,x.renderOrder=d.renderOrder,x.z=g,x.group=m),e++,x}function l(d,f,p,y,g,m,x){x.reversedDepth===!0&&(g=-g);let S=o(d,f,p,y,g,m);p.transmission>0?n.push(S):p.transparent===!0?i.push(S):t.push(S)}function c(d,f,p,y,g,m){let x=o(d,f,p,y,g,m);p.transmission>0?n.unshift(x):p.transparent===!0?i.unshift(x):t.unshift(x)}function h(d,f){t.length>1&&t.sort(d||uy),n.length>1&&n.sort(f||zf),i.length>1&&i.sort(f||zf)}function u(){for(let d=e,f=s.length;d<f;d++){let p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function dy(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new Bf,s.set(n,[a])):i>=r.length?(a=new Bf,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function fy(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new Me};break;case"SpotLight":t={position:new P,direction:new P,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":t={color:new Me,position:new P,halfWidth:new P,halfHeight:new P};break}return s[e.id]=t,t}}}function py(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var my=0;function gy(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function xy(s){let e=new fy,t=py(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let i=new P,r=new Oe,a=new Oe;function o(c){let h=0,u=0,d=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let f=0,p=0,y=0,g=0,m=0,x=0,S=0,v=0,b=0,E=0,_=0,M=0,I=0,R=0;c.sort(gy);for(let O=0,H=c.length;O<H;O++){let L=c[O],F=L.color,G=L.intensity,B=L.distance,ee=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===$i?ee=L.shadow.map.texture:ee=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=F.r*G,u+=F.g*G,d+=F.b*G;else if(L.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(L.sh.coefficients[X],G);R++}else if(L.isSunLight){let X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Y=L.shadow,te=t.get(L);te.shadowIntensity=Y.intensity,te.shadowBias=Y.bias,te.shadowNormalBias=Y.normalBias,te.shadowRadius=Y.radius,te.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),n.sunShadow[p]=te,n.sunShadowMap[p]=ee;let _e=Y.getViewportCount();for(let Se=0;Se<_e;Se++)n.sunShadowMatrix[y+Se]=Y.getMatrix(Se),n.sunShadowCascade[y+Se]=Y._cascadeData[Se];y+=_e,p++}n.sun[f]=X,f++}else if(L.isDirectionalLight){let X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Y=L.shadow,te=t.get(L);te.shadowIntensity=Y.intensity,te.shadowBias=Y.bias,te.shadowNormalBias=Y.normalBias,te.shadowRadius=Y.radius,te.shadowMapSize=Y.mapSize,n.directionalShadow[g]=te,n.directionalShadowMap[g]=ee,n.directionalShadowMatrix[g]=L.shadow.matrix,b++}n.directional[g]=X,g++}else if(L.isSpotLight){let X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(F).multiplyScalar(G),X.distance=B,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,n.spot[x]=X;let Y=L.shadow;if(L.map&&(n.spotLightMap[M]=L.map,M++,Y.updateMatrices(L),L.castShadow&&I++),n.spotLightMatrix[x]=Y.matrix,L.castShadow){let te=t.get(L);te.shadowIntensity=Y.intensity,te.shadowBias=Y.bias,te.shadowNormalBias=Y.normalBias,te.shadowRadius=Y.radius,te.shadowMapSize=Y.mapSize,n.spotShadow[x]=te,n.spotShadowMap[x]=ee,_++}x++}else if(L.isRectAreaLight){let X=e.get(L);X.color.copy(F).multiplyScalar(G),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),n.rectArea[S]=X,S++}else if(L.isPointLight){let X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){let Y=L.shadow,te=t.get(L);te.shadowIntensity=Y.intensity,te.shadowBias=Y.bias,te.shadowNormalBias=Y.normalBias,te.shadowRadius=Y.radius,te.shadowMapSize=Y.mapSize,te.shadowCameraNear=Y.camera.near,te.shadowCameraFar=Y.camera.far,n.pointShadow[m]=te,n.pointShadowMap[m]=ee,n.pointShadowMatrix[m]=L.shadow.matrix,E++}n.point[m]=X,m++}else if(L.isHemisphereLight){let X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(G),X.groundColor.copy(L.groundColor).multiplyScalar(G),n.hemi[v]=X,v++}}S>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let D=n.hash;(D.sunLength!==f||D.directionalLength!==g||D.pointLength!==m||D.spotLength!==x||D.rectAreaLength!==S||D.hemiLength!==v||D.numSunShadows!==p||D.numDirectionalShadows!==b||D.numPointShadows!==E||D.numSpotShadows!==_||D.numSpotMaps!==M||D.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=g,n.spot.length=x,n.rectArea.length=S,n.point.length=m,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+M-I,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=R,D.sunLength=f,D.directionalLength=g,D.pointLength=m,D.spotLength=x,D.rectAreaLength=S,D.hemiLength=v,D.numSunShadows=p,D.numDirectionalShadows=b,D.numPointShadows=E,D.numSpotShadows=_,D.numSpotMaps=M,D.numLightProbes=R,n.version=my++)}function l(c,h){let u=0,d=0,f=0,p=0,y=0,g=0,m=h.matrixWorldInverse;for(let x=0,S=c.length;x<S;x++){let v=c[x];if(v.isSunLight){let b=n.sun[u];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(m),u++}else if(v.isDirectionalLight){let b=n.directional[d];b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),d++}else if(v.isSpotLight){let b=n.spot[p];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let b=n.rectArea[y];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),y++}else if(v.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let b=n.hemi[g];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function kf(s){let e=new xy(s),t=[],n=[],i=[];function r(u){h.camera=u,t.length=0,n.length=0,i.length=0}function a(u){u.isLightProbeGrid?i.push(u):t.push(u)}function o(u){n.push(u)}function l(){e.setup(t),i.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function _y(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new kf(s),e.set(i,[o])):r>=a.length?(o=new kf(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var yy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vy=`uniform sampler2D shadow_pass;
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
}`,My=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],Sy=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Hf=new Oe,La=new P,Ah=new P;function by(s,e,t){let n=new Yi,i=new Ne,r=new Ne,a=new rt,o=new Uo,l=new Oo,c={},h=t.maxTextureSize,u={[Cn]:Kt,[Kt]:Cn,[Vt]:Vt},d=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:yy,fragmentShader:vy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new at;p.setAttribute("position",new _t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ge(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vs;let m=this.type;this.render=function(E,_,M){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===Nd&&(Ae("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=vs);let I=s.getRenderTarget(),R=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),O=s.state;O.setBlending(Ms),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let H=m!==this.type;H&&_.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(F=>F.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,F=E.length;L<F;L++){let G=E[L],B=G.shadow;if(B===void 0){Ae("WebGLShadowMap:",G,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);let ee=B.getFrameExtents();i.multiply(ee),r.copy(B.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ee.x),i.x=r.x*ee.x,B.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ee.y),i.y=r.y*ee.y,B.mapSize.y=r.y));let X=s.state.buffers.depth.getReversed();if(B.camera._reversedDepth=X,B.map===null||H===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===mr){if(G.isPointLight){Ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new xn(i.x,i.y,{format:$i,type:Xn,minFilter:Ut,magFilter:Ut,generateMipmaps:!1}),B.map.texture.name=G.name+".shadowMap",B.map.depthTexture=new bi(i.x,i.y,_n),B.map.depthTexture.name=G.name+".shadowMapDepth",B.map.depthTexture.format=_i,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Rt,B.map.depthTexture.magFilter=Rt}else G.isPointLight?(B.map=new Da(i.x),B.map.depthTexture=new ca(i.x,Wn)):(B.map=new xn(i.x,i.y),B.map.depthTexture=new bi(i.x,i.y,Wn)),B.map.depthTexture.name=G.name+".shadowMap",B.map.depthTexture.format=_i,this.type===vs?(B.map.depthTexture.compareFunction=X?ph:fh,B.map.depthTexture.minFilter=Ut,B.map.depthTexture.magFilter=Ut):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Rt,B.map.depthTexture.magFilter=Rt);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==i.x||B.map.height!==i.y)&&B.map.setSize(i.x,i.y);let Y=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();G.isPointLight!==!0&&B.updateMatrices(G,M);let te=(B.camera.layers.mask&4294967294)!==0?B.camera.layers:M.layers;for(let _e=0;_e<Y;_e++){let Se=B.getCamera(_e);if(G.isPointLight){let Z=B.camera,fe=B.matrix,ye=G.distance||Z.far;ye!==Z.far&&(Z.far=ye,Z.updateProjectionMatrix()),La.setFromMatrixPosition(G.matrixWorld),Z.position.copy(La),Ah.copy(Z.position),Ah.add(My[_e]),Z.up.copy(Sy[_e]),Z.lookAt(Ah),Z.updateMatrixWorld(),fe.makeTranslation(-La.x,-La.y,-La.z),Hf.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Hf,Z.coordinateSystem,Z.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)s.setRenderTarget(B.map,_e),s.clear();else{_e===0&&(s.setRenderTarget(B.map),s.clear());let Z=B.getViewport(_e);a.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),O.viewport(a)}n=B.getFrustum(_e),v(_,M,Se,G,te,this.type)}B.isPointLightShadow!==!0&&this.type===mr&&x(B,M),B.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(I,R,D)};function x(E,_){let M=e.update(y);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new xn(i.x,i.y,{format:$i,type:Xn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(_,null,M,d,y,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(_,null,M,f,y,null)}function S(E,_,M,I){let R=null,D=M.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)R=D;else if(R=M.isPointLight===!0?l:o,s.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let O=R.uuid,H=_.uuid,L=c[O];L===void 0&&(L={},c[O]=L);let F=L[H];F===void 0&&(F=R.clone(),L[H]=F,_.addEventListener("dispose",b)),R=F}if(R.visible=_.visible,R.wireframe=_.wireframe,I===mr?R.side=_.shadowSide!==null?_.shadowSide:_.side:R.side=_.shadowSide!==null?_.shadowSide:u[_.side],R.alphaMap=_.alphaMap,R.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,R.map=_.map,R.clipShadows=_.clipShadows,R.clippingPlanes=_.clippingPlanes,R.clipIntersection=_.clipIntersection,R.displacementMap=_.displacementMap,R.displacementScale=_.displacementScale,R.displacementBias=_.displacementBias,R.wireframeLinewidth=_.wireframeLinewidth,R.linewidth=_.linewidth,M.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let O=s.properties.get(R);O.light=M}return R}function v(E,_,M,I,R,D){if(E.visible===!1)return;if(E.layers.test(R)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&D===mr)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,E.matrixWorld);let L=e.update(E),F=E.material;if(Array.isArray(F)){let G=L.groups;for(let B=0,ee=G.length;B<ee;B++){let X=G[B],Y=F[X.materialIndex];if(Y&&Y.visible){let te=S(E,Y,I,D);E.onBeforeShadow(s,E,_,M,L,te,X),s.renderBufferDirect(M,null,L,te,E,X),E.onAfterShadow(s,E,_,M,L,te,X)}}}else if(F.visible){let G=S(E,F,I,D);E.onBeforeShadow(s,E,_,M,L,G,null),s.renderBufferDirect(M,null,L,G,E,null),E.onAfterShadow(s,E,_,M,L,G,null)}}let H=E.children;for(let L=0,F=H.length;L<F;L++)v(H[L],_,M,I,R,D)}function b(E){E.target.removeEventListener("dispose",b);for(let M in c){let I=c[M],R=E.target.uuid;R in I&&(I[R].dispose(),delete I[R])}}}function Ty(s,e){function t(){let N=!1,j=new rt,K=null,le=new rt(0,0,0,0);return{setMask:function(se){K!==se&&!N&&(s.colorMask(se,se,se,se),K=se)},setLocked:function(se){N=se},setClear:function(se,ae,Ce,We,ie){ie===!0&&(se*=We,ae*=We,Ce*=We),j.set(se,ae,Ce,We),le.equals(j)===!1&&(s.clearColor(se,ae,Ce,We),le.copy(j))},reset:function(){N=!1,K=null,le.set(-1,0,0,0)}}}function n(){let N=!1,j=!1,K=null,le=null,se=null;return{setReversed:function(ae){if(j!==ae){let Ce=e.get("EXT_clip_control");ae?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),j=ae;let We=se;se=null,this.setClear(We)}},getReversed:function(){return j},setTest:function(ae){ae?pe(s.DEPTH_TEST):ze(s.DEPTH_TEST)},setMask:function(ae){K!==ae&&!N&&(s.depthMask(ae),K=ae)},setFunc:function(ae){if(j&&(ae=mf[ae]),le!==ae){switch(ae){case Mo:s.depthFunc(s.NEVER);break;case So:s.depthFunc(s.ALWAYS);break;case bo:s.depthFunc(s.LESS);break;case js:s.depthFunc(s.LEQUAL);break;case To:s.depthFunc(s.EQUAL);break;case Eo:s.depthFunc(s.GEQUAL);break;case wo:s.depthFunc(s.GREATER);break;case Ao:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}le=ae}},setLocked:function(ae){N=ae},setClear:function(ae){se!==ae&&(se=ae,j&&(ae=1-ae),s.clearDepth(ae))},reset:function(){N=!1,K=null,le=null,se=null,j=!1}}}function i(){let N=!1,j=null,K=null,le=null,se=null,ae=null,Ce=null,We=null,ie=null;return{setTest:function(Pe){N||(Pe?pe(s.STENCIL_TEST):ze(s.STENCIL_TEST))},setMask:function(Pe){j!==Pe&&!N&&(s.stencilMask(Pe),j=Pe)},setFunc:function(Pe,Ve,me){(K!==Pe||le!==Ve||se!==me)&&(s.stencilFunc(Pe,Ve,me),K=Pe,le=Ve,se=me)},setOp:function(Pe,Ve,me){(ae!==Pe||Ce!==Ve||We!==me)&&(s.stencilOp(Pe,Ve,me),ae=Pe,Ce=Ve,We=me)},setLocked:function(Pe){N=Pe},setClear:function(Pe){ie!==Pe&&(s.clearStencil(Pe),ie=Pe)},reset:function(){N=!1,j=null,K=null,le=null,se=null,ae=null,Ce=null,We=null,ie=null}}}let r=new t,a=new n,o=new i,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],y=null,g=!1,m=null,x=null,S=null,v=null,b=null,E=null,_=null,M=new Me(0,0,0),I=0,R=!1,D=null,O=null,H=null,L=null,F=null,G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,ee=0,X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(X)[1]),B=ee>=1):X.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),B=ee>=2);let Y=null,te={},_e=s.getParameter(s.SCISSOR_BOX),Se=s.getParameter(s.VIEWPORT),Z=new rt().fromArray(_e),fe=new rt().fromArray(Se);function ye(N,j,K,le){let se=new Uint8Array(4),ae=s.createTexture();s.bindTexture(N,ae),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ce=0;Ce<K;Ce++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(j,0,s.RGBA,1,1,le,0,s.RGBA,s.UNSIGNED_BYTE,se):s.texImage2D(j+Ce,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,se);return ae}let we={};we[s.TEXTURE_2D]=ye(s.TEXTURE_2D,s.TEXTURE_2D,1),we[s.TEXTURE_CUBE_MAP]=ye(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[s.TEXTURE_2D_ARRAY]=ye(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),we[s.TEXTURE_3D]=ye(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),pe(s.DEPTH_TEST),a.setFunc(js),hn(!1),yt(Kc),pe(s.CULL_FACE),Wt(Ms);function pe(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function ze(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function pt(N,j){return d[N]!==j?(s.bindFramebuffer(N,j),d[N]=j,N===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=j),N===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=j),!0):!1}function Le(N,j){let K=p,le=!1;if(N){K=f.get(j),K===void 0&&(K=[],f.set(j,K));let se=N.textures;if(K.length!==se.length||K[0]!==s.COLOR_ATTACHMENT0){for(let ae=0,Ce=se.length;ae<Ce;ae++)K[ae]=s.COLOR_ATTACHMENT0+ae;K.length=se.length,le=!0}}else K[0]!==s.BACK&&(K[0]=s.BACK,le=!0);le&&s.drawBuffers(K)}function it(N){return y!==N?(s.useProgram(N),y=N,!0):!1}let ht={[Ss]:s.FUNC_ADD,[Ud]:s.FUNC_SUBTRACT,[Od]:s.FUNC_REVERSE_SUBTRACT};ht[Fd]=s.MIN,ht[zd]=s.MAX;let $e={[Bd]:s.ZERO,[kd]:s.ONE,[Hd]:s.SRC_COLOR,[$c]:s.SRC_ALPHA,[Yd]:s.SRC_ALPHA_SATURATE,[Xd]:s.DST_COLOR,[Vd]:s.DST_ALPHA,[Gd]:s.ONE_MINUS_SRC_COLOR,[jc]:s.ONE_MINUS_SRC_ALPHA,[qd]:s.ONE_MINUS_DST_COLOR,[Wd]:s.ONE_MINUS_DST_ALPHA,[Kd]:s.CONSTANT_COLOR,[Zd]:s.ONE_MINUS_CONSTANT_COLOR,[Jd]:s.CONSTANT_ALPHA,[$d]:s.ONE_MINUS_CONSTANT_ALPHA};function Wt(N,j,K,le,se,ae,Ce,We,ie,Pe){if(N===Ms){g===!0&&(ze(s.BLEND),g=!1);return}if(g===!1&&(pe(s.BLEND),g=!0),N!==Dd){if(N!==m||Pe!==R){if((x!==Ss||b!==Ss)&&(s.blendEquation(s.FUNC_ADD),x=Ss,b=Ss),Pe)switch(N){case gr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Vn:s.blendFunc(s.ONE,s.ONE);break;case Zc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Jc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Fe("WebGLState: Invalid blending: ",N);break}else switch(N){case gr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Vn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Zc:Fe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jc:Fe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Fe("WebGLState: Invalid blending: ",N);break}S=null,v=null,E=null,_=null,M.set(0,0,0),I=0,m=N,R=Pe}return}se=se||j,ae=ae||K,Ce=Ce||le,(j!==x||se!==b)&&(s.blendEquationSeparate(ht[j],ht[se]),x=j,b=se),(K!==S||le!==v||ae!==E||Ce!==_)&&(s.blendFuncSeparate($e[K],$e[le],$e[ae],$e[Ce]),S=K,v=le,E=ae,_=Ce),(We.equals(M)===!1||ie!==I)&&(s.blendColor(We.r,We.g,We.b,ie),M.copy(We),I=ie),m=N,R=!1}function Nt(N,j){N.side===Vt?ze(s.CULL_FACE):pe(s.CULL_FACE);let K=N.side===Kt;j&&(K=!K),hn(K),N.blending===gr&&N.transparent===!1?Wt(Ms):Wt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let le=N.stencilWrite;o.setTest(le),le&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Bt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?pe(s.SAMPLE_ALPHA_TO_COVERAGE):ze(s.SAMPLE_ALPHA_TO_COVERAGE)}function hn(N){D!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),D=N)}function yt(N){N!==Pd?(pe(s.CULL_FACE),N!==O&&(N===Kc?s.cullFace(s.BACK):N===Ld?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ze(s.CULL_FACE),O=N}function Kn(N){N!==H&&(B&&s.lineWidth(N),H=N)}function Bt(N,j,K){N?(pe(s.POLYGON_OFFSET_FILL),(L!==j||F!==K)&&(L=j,F=K,a.getReversed()&&(j=-j,K=-K),s.polygonOffset(j,K))):ze(s.POLYGON_OFFSET_FILL)}function Mn(N){N?pe(s.SCISSOR_TEST):ze(s.SCISSOR_TEST)}function Sn(N){N===void 0&&(N=s.TEXTURE0+G-1),Y!==N&&(s.activeTexture(N),Y=N)}function bn(N,j,K){K===void 0&&(Y===null?K=s.TEXTURE0+G-1:K=Y);let le=te[K];le===void 0&&(le={type:void 0,texture:void 0},te[K]=le),(le.type!==N||le.texture!==j)&&(Y!==K&&(s.activeTexture(K),Y=K),s.bindTexture(N,j||we[N]),le.type=N,le.texture=j)}function z(){let N=te[Y];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Tn(){try{s.compressedTexImage2D(...arguments)}catch(N){Fe("WebGLState:",N)}}function mt(){try{s.compressedTexImage3D(...arguments)}catch(N){Fe("WebGLState:",N)}}function gt(){try{s.texSubImage2D(...arguments)}catch(N){Fe("WebGLState:",N)}}function de(){try{s.texSubImage3D(...arguments)}catch(N){Fe("WebGLState:",N)}}function Dt(){try{s.compressedTexSubImage2D(...arguments)}catch(N){Fe("WebGLState:",N)}}function De(){try{s.compressedTexSubImage3D(...arguments)}catch(N){Fe("WebGLState:",N)}}function ke(){try{s.texStorage2D(...arguments)}catch(N){Fe("WebGLState:",N)}}function C(){try{s.texStorage3D(...arguments)}catch(N){Fe("WebGLState:",N)}}function T(){try{s.texImage2D(...arguments)}catch(N){Fe("WebGLState:",N)}}function V(){try{s.texImage3D(...arguments)}catch(N){Fe("WebGLState:",N)}}function ne(N){return u[N]!==void 0?u[N]:s.getParameter(N)}function Q(N,j){u[N]!==j&&(s.pixelStorei(N,j),u[N]=j)}function re(N){Z.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),Z.copy(N))}function he(N){fe.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),fe.copy(N))}function J(N,j){let K=c.get(j);K===void 0&&(K=new WeakMap,c.set(j,K));let le=K.get(N);le===void 0&&(le=s.getUniformBlockIndex(j,N.name),s.uniformBlockBinding(j,le,le),K.set(N,le))}function $(N,j,K){let se=c.get(j).get(N);l[se]!==K&&(s.bindBufferBase(s.UNIFORM_BUFFER,se,K),l[se]=K)}function oe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},Y=null,te={},d={},l={},f=new WeakMap,p=[],y=null,g=!1,m=null,x=null,S=null,v=null,b=null,E=null,_=null,M=new Me(0,0,0),I=0,R=!1,D=null,O=null,H=null,L=null,F=null,Z.set(0,0,s.canvas.width,s.canvas.height),fe.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:pe,disable:ze,bindFramebuffer:pt,drawBuffers:Le,useProgram:it,setBlending:Wt,setMaterial:Nt,setFlipSided:hn,setCullFace:yt,setLineWidth:Kn,setPolygonOffset:Bt,setScissorTest:Mn,activeTexture:Sn,bindTexture:bn,unbindTexture:z,compressedTexImage2D:Tn,compressedTexImage3D:mt,texImage2D:T,texImage3D:V,pixelStorei:Q,getParameter:ne,updateUBOMapping:J,uniformBlockBinding:$,texStorage2D:ke,texStorage3D:C,texSubImage2D:gt,texSubImage3D:de,compressedTexSubImage2D:Dt,compressedTexSubImage3D:De,scissor:re,viewport:he,reset:oe}}function Ey(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,h=new WeakMap,u=new Set,d,f=new WeakMap,p=new Set,y=new FinalizationRegistry(C=>p.delete(C)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,T){return g?new OffscreenCanvas(C,T):tr("canvas")}function x(C,T,V){let ne=1,Q=ke(C);if((Q.width>V||Q.height>V)&&(ne=V/Math.max(Q.width,Q.height)),ne<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let re=Math.floor(ne*Q.width),he=Math.floor(ne*Q.height);d===void 0&&(d=m(re,he));let J=T?m(re,he):d;return J.width=re,J.height=he,J.getContext("2d").drawImage(C,0,0,re,he),Ae("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+re+"x"+he+")."),J}else return"data"in C&&Ae("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function S(C){return C.generateMipmaps}function v(C){s.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(C,T,V,ne,Q,re=!1){if(C!==null){if(s[C]!==void 0)return s[C];Ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let he;ne&&(he=e.get("EXT_texture_norm16"),he||Ae("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=T;if(T===s.RED&&(V===s.FLOAT&&(J=s.R32F),V===s.HALF_FLOAT&&(J=s.R16F),V===s.UNSIGNED_BYTE&&(J=s.R8),V===s.UNSIGNED_SHORT&&he&&(J=he.R16_EXT),V===s.SHORT&&he&&(J=he.R16_SNORM_EXT)),T===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(J=s.R8UI),V===s.UNSIGNED_SHORT&&(J=s.R16UI),V===s.UNSIGNED_INT&&(J=s.R32UI),V===s.BYTE&&(J=s.R8I),V===s.SHORT&&(J=s.R16I),V===s.INT&&(J=s.R32I)),T===s.RG&&(V===s.FLOAT&&(J=s.RG32F),V===s.HALF_FLOAT&&(J=s.RG16F),V===s.UNSIGNED_BYTE&&(J=s.RG8),V===s.UNSIGNED_SHORT&&he&&(J=he.RG16_EXT),V===s.SHORT&&he&&(J=he.RG16_SNORM_EXT)),T===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(J=s.RG8UI),V===s.UNSIGNED_SHORT&&(J=s.RG16UI),V===s.UNSIGNED_INT&&(J=s.RG32UI),V===s.BYTE&&(J=s.RG8I),V===s.SHORT&&(J=s.RG16I),V===s.INT&&(J=s.RG32I)),T===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(J=s.RGB8UI),V===s.UNSIGNED_SHORT&&(J=s.RGB16UI),V===s.UNSIGNED_INT&&(J=s.RGB32UI),V===s.BYTE&&(J=s.RGB8I),V===s.SHORT&&(J=s.RGB16I),V===s.INT&&(J=s.RGB32I)),T===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),V===s.UNSIGNED_INT&&(J=s.RGBA32UI),V===s.BYTE&&(J=s.RGBA8I),V===s.SHORT&&(J=s.RGBA16I),V===s.INT&&(J=s.RGBA32I)),T===s.RGB&&(V===s.UNSIGNED_SHORT&&he&&(J=he.RGB16_EXT),V===s.SHORT&&he&&(J=he.RGB16_SNORM_EXT),V===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),V===s.UNSIGNED_INT_10F_11F_11F_REV&&(J=s.R11F_G11F_B10F)),T===s.RGBA){let $=re?Jr:qe.getTransfer(Q);V===s.FLOAT&&(J=s.RGBA32F),V===s.HALF_FLOAT&&(J=s.RGBA16F),V===s.UNSIGNED_BYTE&&(J=$===nt?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT&&he&&(J=he.RGBA16_EXT),V===s.SHORT&&he&&(J=he.RGBA16_SNORM_EXT),V===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function _(C,T){let V;return C?T===null||T===Wn||T===Es?V=s.DEPTH24_STENCIL8:T===_n?V=s.DEPTH32F_STENCIL8:T===yr&&(V=s.DEPTH24_STENCIL8,Ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Wn||T===Es?V=s.DEPTH_COMPONENT24:T===_n?V=s.DEPTH_COMPONENT32F:T===yr&&(V=s.DEPTH_COMPONENT16),V}function M(C,T){return S(C)===!0||C.isFramebufferTexture&&C.minFilter!==Rt&&C.minFilter!==Ut?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function I(C){let T=new WeakRef(C);n.get(C).__ref=T,p.add(T),y.register(C,T,T)}function R(C){let T=n.get(C).__ref;T!==void 0&&(p.delete(T),y.unregister(T))}function D(C){H(C.target)}function O(C){L(C.target)}function H(C){C.removeEventListener("dispose",D),R(C),G(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&u.delete(C)}function L(C){C.removeEventListener("dispose",O),R(C),ee(C)}function F(){for(let C of p){let T=C.deref();T!==void 0&&(T.isRenderTarget===!0?L(T):H(T))}p.clear(),u.clear()}function G(C){let T=n.get(C);if(T.__webglInit===void 0)return;let V=C.source,ne=f.get(V);if(ne){let Q=ne[T.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&B(C),Object.keys(ne).length===0&&f.delete(V)}n.remove(C)}function B(C){let T=n.get(C);s.deleteTexture(T.__webglTexture);let V=C.source,ne=f.get(V);delete ne[T.__cacheKey],a.memory.textures--}function ee(C){let T=n.get(C);T.__depthDisposeCallback&&T.__depthDisposeCallback();let V=C.depthTexture;if(V&&V.renderTarget===C&&H(V),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(T.__webglFramebuffer[Q]))for(let re=0;re<T.__webglFramebuffer[Q].length;re++)s.deleteFramebuffer(T.__webglFramebuffer[Q][re]);else s.deleteFramebuffer(T.__webglFramebuffer[Q]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[Q])}else{if(Array.isArray(T.__webglFramebuffer))for(let Q=0;Q<T.__webglFramebuffer.length;Q++)s.deleteFramebuffer(T.__webglFramebuffer[Q]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Q=0;Q<T.__webglColorRenderbuffer.length;Q++)T.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[Q]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let ne=C.textures;for(let Q=0,re=ne.length;Q<re;Q++){let he=n.get(ne[Q]);he.__webglTexture&&(s.deleteTexture(he.__webglTexture),a.memory.textures--),n.remove(ne[Q])}n.remove(C)}let X=0;function Y(){X=0}function te(){return X}function _e(C){X=C}function Se(){let C=X;return C>=i.maxTextures&&Ae("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+i.maxTextures),X+=1,C}function Z(C){let T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.mipmapsAutoUpdate),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function fe(C,T){let V=n.get(C);if(C.isVideoTexture&&Dt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&V.__version!==C.version){let ne=C.image;if(ne===null)Ae("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)Ae("WebGLRenderer: Texture marked for update but image is incomplete");else{Nt(V,C,T);return}}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+T)}function ye(C,T){let V=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){Nt(V,C,T);return}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+T)}function we(C,T){let V=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){Nt(V,C,T);return}t.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+T)}function pe(C,T){let V=n.get(C);if(C.version>0&&V.__version!==C.version){hn(V,C,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+T)}let ze={[$n]:s.REPEAT,[wn]:s.CLAMP_TO_EDGE,[Qs]:s.MIRRORED_REPEAT},pt={[Rt]:s.NEAREST,[Zo]:s.NEAREST_MIPMAP_NEAREST,[Ts]:s.NEAREST_MIPMAP_LINEAR,[Ut]:s.LINEAR,[_r]:s.LINEAR_MIPMAP_NEAREST,[In]:s.LINEAR_MIPMAP_LINEAR},Le={[of]:s.NEVER,[mh]:s.ALWAYS,[lf]:s.LESS,[fh]:s.LEQUAL,[cf]:s.EQUAL,[ph]:s.GEQUAL,[hf]:s.GREATER,[uf]:s.NOTEQUAL};function it(C,T){if(T.type===_n&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ut||T.magFilter===_r||T.magFilter===Ts||T.magFilter===In||T.minFilter===Ut||T.minFilter===_r||T.minFilter===Ts||T.minFilter===In)&&Ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,ze[T.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,ze[T.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,ze[T.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,pt[T.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,pt[T.minFilter]),T.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,Le[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Rt||T.minFilter!==Ts&&T.minFilter!==In||T.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function ht(C,T){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",D),I(T));let ne=T.source,Q=f.get(ne);Q===void 0&&(Q={},f.set(ne,Q));let re=Z(T);if(re!==C.__cacheKey){Q[re]===void 0&&(Q[re]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,V=!0),Q[re].usedTimes++;let he=Q[C.__cacheKey];he!==void 0&&(Q[C.__cacheKey].usedTimes--,he.usedTimes===0&&B(T)),C.__cacheKey=re,C.__webglTexture=Q[re].texture}return V}function $e(C,T,V){return Math.floor(Math.floor(C/V)/T)}function Wt(C,T,V,ne){let re=C.updateRanges;if(re.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,V,ne,T.data);else{re.sort((N,j)=>N.start-j.start);let he=0;for(let N=1;N<re.length;N++){let j=re[he],K=re[N],le=j.start+j.count,se=$e(K.start,T.width,4),ae=$e(j.start,T.width,4);K.start<=le+1&&se===ae&&$e(K.start+K.count-1,T.width,4)===se?j.count=Math.max(j.count,K.start+K.count-j.start):(++he,re[he]=K)}re.length=he+1;let J=t.getParameter(s.UNPACK_ROW_LENGTH),$=t.getParameter(s.UNPACK_SKIP_PIXELS),oe=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let N=0,j=re.length;N<j;N++){let K=re[N],le=Math.floor(K.start/4),se=Math.ceil(K.count/4),ae=le%T.width,Ce=Math.floor(le/T.width),We=se,ie=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ce),t.texSubImage2D(s.TEXTURE_2D,0,ae,Ce,We,ie,V,ne,T.data)}C.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,J),t.pixelStorei(s.UNPACK_SKIP_PIXELS,$),t.pixelStorei(s.UNPACK_SKIP_ROWS,oe)}}function Nt(C,T,V){let ne=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ne=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ne=s.TEXTURE_3D);let Q=ht(C,T),re=T.source;t.bindTexture(ne,C.__webglTexture,s.TEXTURE0+V);let he=n.get(re);if(re.version!==he.__version||Q===!0){if(t.activeTexture(s.TEXTURE0+V),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let ie=qe.getPrimaries(qe.workingColorSpace),Pe=T.colorSpace===Li?null:qe.getPrimaries(T.colorSpace),Ve=T.colorSpace===Li||ie===Pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve)}t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment);let $=x(T.image,!1,i.maxTextureSize);$=De(T,$);let oe=r.convert(T.format,T.colorSpace),N=r.convert(T.type),j=E(T.internalFormat,oe,N,T.normalized,T.colorSpace,T.isVideoTexture);it(ne,T);let K,le=T.mipmaps,se=T.isVideoTexture!==!0,ae=he.__version===void 0||Q===!0,Ce=re.dataReady,We=M(T,$);if(T.isDepthTexture)j=_(T.format===Pi,T.type),ae&&(se?t.texStorage2D(s.TEXTURE_2D,1,j,$.width,$.height):t.texImage2D(s.TEXTURE_2D,0,j,$.width,$.height,0,oe,N,null));else if(T.isDataTexture)if(le.length>0){se&&ae&&t.texStorage2D(s.TEXTURE_2D,We,j,le[0].width,le[0].height);for(let ie=0,Pe=le.length;ie<Pe;ie++)K=le[ie],se?Ce&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,K.width,K.height,oe,N,K.data):t.texImage2D(s.TEXTURE_2D,ie,j,K.width,K.height,0,oe,N,K.data);T.generateMipmaps=!1}else se?(ae&&t.texStorage2D(s.TEXTURE_2D,We,j,$.width,$.height),Ce&&Wt(T,$,oe,N)):t.texImage2D(s.TEXTURE_2D,0,j,$.width,$.height,0,oe,N,$.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){se&&ae&&t.texStorage3D(s.TEXTURE_2D_ARRAY,We,j,le[0].width,le[0].height,$.depth);for(let ie=0,Pe=le.length;ie<Pe;ie++)if(K=le[ie],T.format!==Pn)if(oe!==null)if(se){if(Ce)if(T.layerUpdates.size>0){let Ve=Eh(K.width,K.height,T.format,T.type);for(let me of T.layerUpdates){let st=K.data.subarray(me*Ve/K.data.BYTES_PER_ELEMENT,(me+1)*Ve/K.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,me,K.width,K.height,1,oe,st)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,K.width,K.height,$.depth,oe,K.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ie,j,K.width,K.height,$.depth,0,K.data,0,0);else Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?Ce&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,K.width,K.height,$.depth,oe,N,K.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ie,j,K.width,K.height,$.depth,0,oe,N,K.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{se&&ae&&t.texStorage2D(s.TEXTURE_2D,We,j,le[0].width,le[0].height);for(let ie=0,Pe=le.length;ie<Pe;ie++)K=le[ie],T.format!==Pn?oe!==null?se?Ce&&t.compressedTexSubImage2D(s.TEXTURE_2D,ie,0,0,K.width,K.height,oe,K.data):t.compressedTexImage2D(s.TEXTURE_2D,ie,j,K.width,K.height,0,K.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?Ce&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,K.width,K.height,oe,N,K.data):t.texImage2D(s.TEXTURE_2D,ie,j,K.width,K.height,0,oe,N,K.data)}else if(T.isDataArrayTexture)if(se){if(ae&&t.texStorage3D(s.TEXTURE_2D_ARRAY,We,j,$.width,$.height,$.depth),Ce)if(T.layerUpdates.size>0){let ie=Eh($.width,$.height,T.format,T.type);for(let Pe of T.layerUpdates){let Ve=$.data.subarray(Pe*ie/$.data.BYTES_PER_ELEMENT,(Pe+1)*ie/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Pe,$.width,$.height,1,oe,N,Ve)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,oe,N,$.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,j,$.width,$.height,$.depth,0,oe,N,$.data);else if(T.isData3DTexture)se?(ae&&t.texStorage3D(s.TEXTURE_3D,We,j,$.width,$.height,$.depth),Ce&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,oe,N,$.data)):t.texImage3D(s.TEXTURE_3D,0,j,$.width,$.height,$.depth,0,oe,N,$.data);else if(T.isFramebufferTexture){if(ae)if(se)t.texStorage2D(s.TEXTURE_2D,We,j,$.width,$.height);else{let ie=$.width,Pe=$.height;for(let Ve=0;Ve<We;Ve++)t.texImage2D(s.TEXTURE_2D,Ve,j,ie,Pe,0,oe,N,null),ie>>=1,Pe>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in s){let ie=s.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),$.parentNode!==ie){ie.appendChild($),u.add(T),ie.onpaint=Pe=>{let Ve=Pe.changedElements;for(let me of u)Ve.includes(me.image)&&(me.needsUpdate=!0)},ie.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,$);else{let Ve=s.RGBA,me=s.RGBA,st=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ve,me,st,$)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(le.length>0){if(se&&ae){let ie=ke(le[0]);t.texStorage2D(s.TEXTURE_2D,We,j,ie.width,ie.height)}for(let ie=0,Pe=le.length;ie<Pe;ie++)K=le[ie],se?Ce&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,oe,N,K):t.texImage2D(s.TEXTURE_2D,ie,j,oe,N,K);T.generateMipmaps=!1}else if(se){if(ae){let ie=ke($);t.texStorage2D(s.TEXTURE_2D,We,j,ie.width,ie.height)}Ce&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,oe,N,$)}else t.texImage2D(s.TEXTURE_2D,0,j,oe,N,$);S(T)&&T.mipmapsAutoUpdate===!0&&v(ne),he.__version=re.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function hn(C,T,V){if(T.image.length!==6)return;let ne=ht(C,T),Q=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+V);let re=n.get(Q);if(Q.version!==re.__version||ne===!0){t.activeTexture(s.TEXTURE0+V);let he=qe.getPrimaries(qe.workingColorSpace),J=T.colorSpace===Li?null:qe.getPrimaries(T.colorSpace),$=T.colorSpace===Li||he===J?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let oe=T.isCompressedTexture||T.image[0].isCompressedTexture,N=T.image[0]&&T.image[0].isDataTexture,j=[];for(let me=0;me<6;me++)!oe&&!N?j[me]=x(T.image[me],!0,i.maxCubemapSize):j[me]=N?T.image[me].image:T.image[me],j[me]=De(T,j[me]);let K=j[0],le=r.convert(T.format,T.colorSpace),se=r.convert(T.type),ae=E(T.internalFormat,le,se,T.normalized,T.colorSpace),Ce=T.isVideoTexture!==!0,We=re.__version===void 0||ne===!0,ie=Q.dataReady,Pe=M(T,K);it(s.TEXTURE_CUBE_MAP,T);let Ve;if(T.isDepthTexture){if(ae=_(T.format===Pi,T.type),We)if(Ce)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,ae,K.width,K.height);else for(let me=0;me<6;me++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ae,K.width,K.height,0,le,se,null)}else if(oe){Ce&&We&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,ae,K.width,K.height);for(let me=0;me<6;me++){Ve=j[me].mipmaps;for(let st=0;st<Ve.length;st++){let kt=Ve[st];T.format!==Pn?le!==null?Ce?ie&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,st,0,0,kt.width,kt.height,le,kt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,st,ae,kt.width,kt.height,0,kt.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,st,0,0,kt.width,kt.height,le,se,kt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,st,ae,kt.width,kt.height,0,le,se,kt.data)}}}else{if(Ve=T.mipmaps,Ce&&We){Ve.length>0&&Pe++;let me=ke(j[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,ae,me.width,me.height)}for(let me=0;me<6;me++)if(N){Ce?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,j[me].width,j[me].height,le,se,j[me].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ae,j[me].width,j[me].height,0,le,se,j[me].data);for(let st=0;st<Ve.length;st++){let zi=Ve[st].image[me].image;Ce?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,st+1,0,0,zi.width,zi.height,le,se,zi.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,st+1,ae,zi.width,zi.height,0,le,se,zi.data)}}else{Ce?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,le,se,j[me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ae,le,se,j[me]);for(let st=0;st<Ve.length;st++){let kt=Ve[st];Ce?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,st+1,0,0,le,se,kt.image[me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,st+1,ae,le,se,kt.image[me])}}}S(T)&&T.mipmapsAutoUpdate===!0&&v(s.TEXTURE_CUBE_MAP),re.__version=Q.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function yt(C,T,V,ne,Q,re){let he=r.convert(V.format,V.colorSpace),J=r.convert(V.type),$=E(V.internalFormat,he,J,V.normalized,V.colorSpace),oe=n.get(T),N=n.get(V);if(N.__renderTarget=T,!oe.__hasExternalTextures){let j=Math.max(1,T.width>>re),K=Math.max(1,T.height>>re);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,re,$,j,K,T.depth,0,he,J,null):t.texImage2D(Q,re,$,j,K,0,he,J,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),de(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ne,Q,N.__webglTexture,0,gt(T)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ne,Q,N.__webglTexture,re),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Kn(C,T,V){if(s.bindRenderbuffer(s.RENDERBUFFER,C),T.depthBuffer){let ne=T.depthTexture,Q=ne&&ne.isDepthTexture?ne.type:null,re=_(T.stencilBuffer,Q),he=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;de(T)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,gt(T),re,T.width,T.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,gt(T),re,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,re,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,C)}else{let ne=T.textures;for(let Q=0;Q<ne.length;Q++){let re=ne[Q],he=r.convert(re.format,re.colorSpace),J=r.convert(re.type),$=E(re.internalFormat,he,J,re.normalized,re.colorSpace);de(T)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,gt(T),$,T.width,T.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,gt(T),$,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,$,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Bt(C,T,V){let ne=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(T.depthTexture);Q.__renderTarget=T;let re=ne?T.depthTexture.image[0]:T.depthTexture.image;(!Q.__webglTexture||re.width!==T.width||re.height!==T.height)&&(re.width=T.width,re.height=T.height,T.depthTexture.needsUpdate=!0),ne?pe(T.depthTexture,0):fe(T.depthTexture,0);let he=Q.__webglTexture,J=gt(T),$=ne?s.TEXTURE_CUBE_MAP_POSITIVE_X+V:s.TEXTURE_2D,oe=T.depthTexture.format===Pi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===_i)de(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,oe,$,he,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,oe,$,he,0);else if(T.depthTexture.format===Pi)de(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,oe,$,he,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,oe,$,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Mn(C){let T=n.get(C),V=C.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==C.depthTexture){let ne=C.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ne){let Q=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ne.removeEventListener("dispose",Q)};ne.addEventListener("dispose",Q),T.__depthDisposeCallback=Q}T.__boundDepthTexture=ne}if(C.depthTexture&&!T.__autoAllocateDepthBuffer)if(V)for(let ne=0;ne<6;ne++)Bt(T.__webglFramebuffer[ne],C,ne);else C.texture.mipmaps.length>0?Bt(T.__webglFramebuffer[0],C,0):Bt(T.__webglFramebuffer,C,0);else if(V){T.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[ne]),T.__webglDepthbuffer[ne]===void 0)T.__webglDepthbuffer[ne]=s.createRenderbuffer(),Kn(T.__webglDepthbuffer[ne],C,!1);else{let Q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=T.__webglDepthbuffer[ne];s.bindRenderbuffer(s.RENDERBUFFER,re),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,re)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Kn(T.__webglDepthbuffer,C,!1);else{let Q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,re),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,re)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Sn(C,T,V){let ne=n.get(C);T!==void 0&&yt(ne.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&Mn(C)}function bn(C){let T=C.texture,V=n.get(C),ne=n.get(T);C.addEventListener("dispose",O),I(C);let Q=C.textures,re=C.isWebGLCubeRenderTarget===!0,he=Q.length>1;if(he||(ne.__webglTexture===void 0&&(ne.__webglTexture=s.createTexture()),ne.__version=T.version,a.memory.textures++),re){V.__webglFramebuffer=[];for(let J=0;J<6;J++)if(T.mipmaps.length>0){V.__webglFramebuffer[J]=[];for(let $=0;$<T.mipmaps.length;$++)V.__webglFramebuffer[J][$]=s.createFramebuffer()}else V.__webglFramebuffer[J]=s.createFramebuffer()}else{if(T.mipmaps.length>0){V.__webglFramebuffer=[];for(let J=0;J<T.mipmaps.length;J++)V.__webglFramebuffer[J]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(he)for(let J=0,$=Q.length;J<$;J++){let oe=n.get(Q[J]);oe.__webglTexture===void 0&&(oe.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&de(C)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let J=0;J<Q.length;J++){let $=Q[J];V.__webglColorRenderbuffer[J]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[J]);let oe=r.convert($.format,$.colorSpace),N=r.convert($.type),j=E($.internalFormat,oe,N,$.normalized,$.colorSpace,C.isXRRenderTarget===!0),K=gt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,K,j,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+J,s.RENDERBUFFER,V.__webglColorRenderbuffer[J])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),Kn(V.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(re){t.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture),it(s.TEXTURE_CUBE_MAP,T);for(let J=0;J<6;J++)if(T.mipmaps.length>0)for(let $=0;$<T.mipmaps.length;$++)yt(V.__webglFramebuffer[J][$],C,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,$);else yt(V.__webglFramebuffer[J],C,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);S(T)?v(s.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(he){for(let J=0,$=Q.length;J<$;J++){let oe=Q[J],N=n.get(oe),j=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(j=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(j,N.__webglTexture),it(j,oe),yt(V.__webglFramebuffer,C,oe,s.COLOR_ATTACHMENT0+J,j,0),S(oe)&&v(j)}t.unbindTexture()}else{let J=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(J,ne.__webglTexture),it(J,T),T.mipmaps.length>0)for(let $=0;$<T.mipmaps.length;$++)yt(V.__webglFramebuffer[$],C,T,s.COLOR_ATTACHMENT0,J,$);else yt(V.__webglFramebuffer,C,T,s.COLOR_ATTACHMENT0,J,0);S(T)?v(J):T.mipmaps.length>0&&s.texParameteri(J,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&Mn(C)}function z(C){let T=C.textures;for(let V=0,ne=T.length;V<ne;V++){let Q=T[V];if(S(Q)&&Q.mipmapsAutoUpdate===!0){let re=b(C),he=n.get(Q).__webglTexture;t.bindTexture(re,he),v(re),t.unbindTexture()}}}let Tn=[];function mt(C){if(C.samples>0){if(de(C)===!1){let T=C.textures,V=C.width,ne=C.height,Q=s.COLOR_BUFFER_BIT,re=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=n.get(C),J=T.length>1;if(J)for(let oe=0;oe<T.length;oe++)t.bindFramebuffer(s.FRAMEBUFFER,he.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,he.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let oe=0;oe<T.length;oe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),J){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,he.__webglColorRenderbuffer[oe]);let N=n.get(T[oe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,N,0)}s.blitFramebuffer(0,0,V,ne,0,0,V,ne,Q,s.NEAREST),l===!0&&(Tn.length=0,Tn.push(s.COLOR_ATTACHMENT0+oe),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&Tn.push(re),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Tn))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),J)for(let oe=0;oe<T.length;oe++){t.bindFramebuffer(s.FRAMEBUFFER,he.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,he.__webglColorRenderbuffer[oe]);let N=n.get(T[oe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,he.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.TEXTURE_2D,N,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let T=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function gt(C){return Math.min(i.maxSamples,C.samples)}function de(C){let T=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Dt(C){let T=a.render.frame;h.get(C)!==T&&(h.set(C,T),C.update())}function De(C,T){let V=C.colorSpace,ne=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==on&&V!==Li&&(qe.getTransfer(V)===nt?(ne!==Pn||Q!==pn)&&Ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Fe("WebGLTextures: Unsupported texture color space:",V)),T}function ke(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Se,this.resetTextureUnits=Y,this.getTextureUnits=te,this.setTextureUnits=_e,this.setTexture2D=fe,this.setTexture2DArray=ye,this.setTexture3D=we,this.setTextureCube=pe,this.rebindTextures=Sn,this.setupRenderTarget=bn,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=Mn,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=de,this.dispose=F}function wy(s,e){function t(n,i=Li){let r,a=qe.getTransfer(i);if(n===pn)return s.UNSIGNED_BYTE;if(n===$o)return s.UNSIGNED_SHORT_4_4_4_4;if(n===jo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===lh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ch)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===ah)return s.BYTE;if(n===oh)return s.SHORT;if(n===yr)return s.UNSIGNED_SHORT;if(n===Jo)return s.INT;if(n===Wn)return s.UNSIGNED_INT;if(n===_n)return s.FLOAT;if(n===Xn)return s.HALF_FLOAT;if(n===hh)return s.ALPHA;if(n===uh)return s.RGB;if(n===Pn)return s.RGBA;if(n===_i)return s.DEPTH_COMPONENT;if(n===Pi)return s.DEPTH_STENCIL;if(n===Qo)return s.RED;if(n===el)return s.RED_INTEGER;if(n===$i)return s.RG;if(n===tl)return s.RG_INTEGER;if(n===nl)return s.RGBA_INTEGER;if(n===ba||n===Ta||n===Ea||n===wa)if(a===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ba)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ba)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ea)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===il||n===sl||n===rl||n===al)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===il)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===rl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===al)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ol||n===ll||n===cl||n===hl||n===ul||n===Aa||n===dl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ol||n===ll)return a===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===cl)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===hl)return r.COMPRESSED_R11_EAC;if(n===ul)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Aa)return r.COMPRESSED_RG11_EAC;if(n===dl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===fl||n===pl||n===ml||n===gl||n===xl||n===_l||n===yl||n===vl||n===Ml||n===Sl||n===bl||n===Tl||n===El||n===wl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===fl)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pl)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ml)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gl)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xl)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_l)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yl)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vl)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ml)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sl)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bl)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Tl)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===El)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wl)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Al||n===Rl||n===Cl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Al)return a===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Rl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Cl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Il||n===Pl||n===Ra||n===Ll)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Il)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Pl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ra)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ll)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Es?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var Ay=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ry=`
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

}`,Dh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ha(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ei({vertexShader:Ay,fragmentShader:Ry,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ge(new Hn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Uh=class extends kn{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,y=typeof XRWebGLBinding<"u",g=new Dh,m={},x=t.getContextAttributes(),S=null,v=null,b=[],E=[],_=new Ne,M=null,I=null,R=new At;R.viewport=new rt;let D=new At;D.viewport=new rt;let O=[R,D],H=new Vo,L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let fe=b[Z];return fe===void 0&&(fe=new sr,b[Z]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(Z){let fe=b[Z];return fe===void 0&&(fe=new sr,b[Z]=fe),fe.getGripSpace()},this.getHand=function(Z){let fe=b[Z];return fe===void 0&&(fe=new sr,b[Z]=fe),fe.getHandSpace()};function G(Z){let fe=E.indexOf(Z.inputSource);if(fe===-1)return;let ye=b[fe];ye!==void 0&&(ye.update(Z.inputSource,Z.frame,c||a),ye.dispatchEvent({type:Z.type,data:Z.inputSource}))}function B(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",ee);for(let Z=0;Z<b.length;Z++){let fe=E[Z];fe!==null&&(E[Z]=null,b[Z].disconnect(fe))}L=null,F=null,g.reset();for(let Z in m)delete m[Z];if(e.setRenderTarget(S),f=null,d=null,u=null,i=null,v=null,Se.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(_.width,_.height,!1),I!==null){let Z=I.camera;Z.fov=I.fov,Z.zoom=I.zoom,Z.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(S=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",B),i.addEventListener("inputsourceschange",ee),x.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(_),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,we=null,pe=null;x.depth&&(pe=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=x.stencil?Pi:_i,we=x.stencil?Es:Wn);let ze={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(ze),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new xn(d.textureWidth,d.textureHeight,{format:Pn,type:pn,depthTexture:new bi(d.textureWidth,d.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ye={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ye),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new xn(f.framebufferWidth,f.framebufferHeight,{format:Pn,type:pn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Se.setContext(i),Se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ee(Z){for(let fe=0;fe<Z.removed.length;fe++){let ye=Z.removed[fe],we=E.indexOf(ye);we>=0&&(E[we]=null,b[we].disconnect(ye))}for(let fe=0;fe<Z.added.length;fe++){let ye=Z.added[fe],we=E.indexOf(ye);if(we===-1){for(let ze=0;ze<b.length;ze++)if(ze>=E.length){E.push(ye),we=ze;break}else if(E[ze]===null){E[ze]=ye,we=ze;break}if(we===-1)break}let pe=b[we];pe&&pe.connect(ye)}}function X(Z,fe){fe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(fe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let fe=Z.near,ye=Z.far;g.texture!==null&&(g.depthNear>0&&(fe=g.depthNear),g.depthFar>0&&(ye=g.depthFar)),H.near=D.near=R.near=fe,H.far=D.far=R.far=ye,(L!==H.near||F!==H.far)&&(i.updateRenderState({depthNear:H.near,depthFar:H.far}),L=H.near,F=H.far),H.layers.mask=Z.layers.mask|6,R.layers.mask=H.layers.mask&-5,D.layers.mask=H.layers.mask&-3;let we=Z.parent,pe=H.cameras;X(H,we);for(let ze=0;ze<pe.length;ze++)X(pe[ze],we);H.projectionMatrix.copy(R.projectionMatrix),H.projectionMatrixInverse.copy(R.projectionMatrixInverse),I===null&&Z.isPerspectiveCamera&&(I={camera:Z,fov:Z.fov,zoom:Z.zoom}),Y(Z,H,we)};function Y(Z,fe,ye){ye===null?Z.matrix.copy(fe.matrixWorld):(Z.matrix.copy(ye.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(fe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(fe.projectionMatrix),Z.projectionMatrixInverse.copy(fe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=fs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(H)},this.getCameraTexture=function(Z){return m[Z]};let te=null;function _e(Z,fe){if(h=fe.getViewerPose(c||a),p=fe,h!==null){let ye=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let we=!1;ye.length!==H.cameras.length&&(H.cameras.length=0,we=!0);for(let Le=0;Le<ye.length;Le++){let it=ye[Le],ht=null;if(f!==null)ht=f.getViewport(it);else{let Wt=u.getViewSubImage(d,it);ht=Wt.viewport,Le===0&&(e.setRenderTargetTextures(v,Wt.colorTexture,Wt.depthStencilTexture),e.setRenderTarget(v))}let $e=O[Le];$e===void 0&&($e=new At,$e.layers.enable(Le),$e.viewport=new rt,O[Le]=$e),$e.matrix.fromArray(it.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(it.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(ht.x,ht.y,ht.width,ht.height),Le===0&&(H.matrix.copy($e.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),we===!0&&H.cameras.push($e)}let pe=i.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&y){u=n.getBinding();let Le=u.getDepthInformation(ye[0]);Le&&Le.isValid&&Le.texture&&g.init(Le,i.renderState)}if(pe&&pe.includes("camera-access")&&y){e.state.unbindTexture(),u=n.getBinding();for(let Le=0;Le<ye.length;Le++){let it=ye[Le].camera;if(it){let ht=m[it];ht||(ht=new ha,m[it]=ht);let $e=u.getCameraImage(it);ht.sourceTexture=$e}}}}for(let ye=0;ye<b.length;ye++){let we=E[ye],pe=b[ye];we!==null&&pe!==void 0&&pe.update(we,fe,c||a)}te&&te(Z,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),p=null}let Se=new Gf;Se.setAnimationLoop(_e),this.setAnimationLoop=function(Z){te=Z},this.dispose=function(){}}},Cy=new Oe,jf=new Be;jf.set(-1,0,0,0,1,0,0,0,1);function Iy(s,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Sh(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,x,S,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),y(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,x,S):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Kt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Kt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let x=e.get(m),S=x.envMap,v=x.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(Cy.makeRotationFromEuler(v)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(jf),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,x,S){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*x,g.scale.value=S*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,x){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Kt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function y(g,m){let x=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Py(s,e,t,n){let i={},r={};function a(x,S){let v=S.program;n.uniformBlockBinding(x,v,i[x.id])}function o(x,S){let v=i[x.id];v===void 0&&(p(x),v=l(x),i[x.id]=v,x.addEventListener("dispose",g));let b=S.program;n.updateUBOMapping(x,b);let E=e.render.frame;r[x.id]!==E&&(c(x),r[x.id]=E)}function l(x){let S=s.createBuffer(),v=x.__size,b=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,v,b),s.bindBuffer(s.UNIFORM_BUFFER,null),S}function c(x){let S=i[x.id],v=x.uniforms,b=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let E=0,_=v.length;E<_;E++){let M=v[E];if(Array.isArray(M))for(let I=0,R=M.length;I<R;I++)h(M[I],E,I,b);else h(M,E,0,b)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(x,S,v,b){if(d(x,S,v,b)===!0){let E=x.__offset,_=x.value;if(Array.isArray(_)){let M=0;for(let I=0;I<_.length;I++){let R=_[I],D=y(R,!0);u(R,x.__data,M),M+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,x.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,x.__data)}}function u(x,S,v){typeof x=="number"||typeof x=="boolean"?S[v]=x:x.isMatrix3?(S[v]=x.elements[0],S[v+1]=x.elements[1],S[v+2]=x.elements[2],S[v+3]=0,S[v+4]=x.elements[3],S[v+5]=x.elements[4],S[v+6]=x.elements[5],S[v+7]=0,S[v+8]=x.elements[6],S[v+9]=x.elements[7],S[v+10]=x.elements[8],S[v+11]=0):ArrayBuffer.isView(x)?S.set(x.subarray(0,S.length-v),v):x.toArray(S,v)}function d(x,S,v,b){let E=x.value,_=S+"_"+v;if(Array.isArray(E)){b[_]===void 0&&(b[_]=[]);let M=b[_],I=!1;for(let R=0;R<E.length;R++)f(E[R],M,R)===!0&&(I=!0);return I}return f(E,b,_)}function f(x,S,v){if(S[v]===void 0)return typeof x=="number"||typeof x=="boolean"?S[v]=x:ArrayBuffer.isView(x)?S[v]=x.slice():S[v]=x.clone(),!0;{let b=S[v];if(typeof x=="number"||typeof x=="boolean"){if(b!==x)return S[v]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(b.equals(x)===!1)return b.copy(x),!0}}return!1}function p(x){let S=x.uniforms,v=0,b=16;for(let _=0,M=S.length;_<M;_++){let I=Array.isArray(S[_])?S[_]:[S[_]];for(let R=0,D=I.length;R<D;R++){let O=I[R],H=Array.isArray(O.value)?O.value:[O.value],L=Array.isArray(S[_])||Array.isArray(O.value),F=v;for(let B=0,ee=H.length;B<ee;B++){let X=H[B],Y=y(X,L),te=v%b,_e=te%Y.boundary,Se=te+_e;v+=_e,Se!==0&&b-Se<Y.storage&&(v+=b-Se),B===0&&(F=v),v+=Y.storage}let G=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new G((v-F)/Float32Array.BYTES_PER_ELEMENT),O.__offset=F}}let E=v%b;return E>0&&(v+=b-E),x.__size=v,x.__cache={},this}function y(x,S){let v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=16,v.storage=48):x.isMatrix4?(v.boundary=16,v.storage=64):x.isTexture?Ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(v.boundary=16,v.storage=x.byteLength):Ae("WebGLRenderer: Unsupported uniform value type.",x),S===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function g(x){let S=x.target;S.removeEventListener("dispose",g),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function m(){for(let x in i)s.deleteBuffer(i[x]);i={},r={}}return{bind:a,update:o,dispose:m}}var Ly=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ri=null;function Ny(){return ri===null&&(ri=new or(Ly,16,16,$i,Xn),ri.name="DFG_LUT",ri.minFilter=Ut,ri.magFilter=Ut,ri.wrapS=wn,ri.wrapT=wn,ri.generateMipmaps=!1,ri.needsUpdate=!0),ri}var zl=class{constructor(e={}){let{canvas:t=df(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=pn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let y=f,g=new Set([nl,tl,el]),m=new Set([pn,Wn,yr,Es,$o,jo]),x=new Uint32Array(4),S=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},b=null,E=null,_=[],M=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,D=!1,O=null,H=null,L=null,F=null;this._outputColorSpace=wt;let G=0,B=0,ee=null,X=-1,Y=null,te=new rt,_e=new rt,Se=null,Z=new Me(0),fe=0,ye=t.width,we=t.height,pe=1,ze=null,pt=null,Le=new rt(0,0,ye,we),it=new rt(0,0,ye,we),ht=!1,$e=new Yi,Wt=new Po,Nt=!1,hn=!1,yt=new Oe,Kn=new P,Bt=new rt,Mn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Sn=!1;function bn(){return ee===null?pe:1}let z=n;function Tn(w,U){return t.getContext(w,U)}let mt,gt,de,Dt,De,ke,C,T,V,ne,Q,re,he,J,$,oe,N,j,K,le,se,ae,Ce;try{let w={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",Ve,!1),t.addEventListener("webglcontextcreationerror",me,!1),z===null){let U="webgl2";if(z=Tn(U,w),z===null)throw Tn(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}We()}catch(w){throw t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",Ve,!1),t.removeEventListener("webglcontextcreationerror",me,!1),Fe("WebGLRenderer: "+w.message),w}function We(){mt=new Wx(z),mt.init(),se=new wy(z,mt),gt=new Nx(z,mt,e,se),de=new Ty(z,mt),gt.reversedDepthBuffer&&d&&de.buffers.depth.setReversed(!0),H=z.createFramebuffer(),L=z.createFramebuffer(),F=z.createFramebuffer(),Dt=new Yx(z),De=new hy,ke=new Ey(z,mt,de,De,gt,se,Dt),C=new Vx(R),T=new Zm(z),ae=new Px(z,T),V=new Xx(z,T,Dt,ae),ne=new Zx(z,V,T,ae,Dt),j=new Kx(z,gt,ke),$=new Dx(De),Q=new cy(R,C,mt,gt,ae,$),re=new Iy(R,De),he=new dy,J=new _y(mt),N=new Ix(R,C,de,ne,p,l),oe=new by(R,ne,gt),Ce=new Py(z,Dt,gt,de),K=new Lx(z,mt,Dt),le=new qx(z,mt,Dt),Dt.programs=Q.programs,R.capabilities=gt,R.extensions=mt,R.properties=De,R.renderLists=he,R.shadowMap=oe,R.state=de,R.info=Dt}y!==pn&&(I=new $x(y,t.width,t.height,o,i,r));let ie=new Uh(R,z);this.xr=ie,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let w=mt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=mt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(w){w!==void 0&&(pe=w,this.setSize(ye,we,!1))},this.getSize=function(w){return w.set(ye,we)},this.setSize=function(w,U,q=!0){if(ie.isPresenting){Ae("WebGLRenderer: Can't change size while VR device is presenting.");return}ye=w,we=U,t.width=Math.floor(w*pe),t.height=Math.floor(U*pe),q===!0&&(t.style.width=w+"px",t.style.height=U+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(ye*pe,we*pe).floor()},this.setDrawingBufferSize=function(w,U,q){ye=w,we=U,pe=q,t.width=Math.floor(w*q),t.height=Math.floor(U*q),this.setViewport(0,0,w,U)},this.setEffects=function(w){if(y===pn){Fe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let U=0;U<w.length;U++)if(w[U].isOutputPass===!0){Ae("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(te)},this.getViewport=function(w){return w.copy(Le)},this.setViewport=function(w,U,q,k){w.isVector4?Le.set(w.x,w.y,w.z,w.w):Le.set(w,U,q,k),de.viewport(te.copy(Le).multiplyScalar(bn()).round())},this.getScissor=function(w){return w.copy(it)},this.setScissor=function(w,U,q,k){w.isVector4?it.set(w.x,w.y,w.z,w.w):it.set(w,U,q,k),de.scissor(_e.copy(it).multiplyScalar(bn()).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(w){de.setScissorTest(ht=w)},this.setOpaqueSort=function(w){ze=w},this.setTransparentSort=function(w){pt=w},this.getClearColor=function(w){return w.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(w=!0,U=!0,q=!0){let k=0;if(w){let W=!1;if(ee!==null){let ue=ee.texture.format;W=g.has(ue)}if(W){let ue=ee.texture.type,ve=m.has(ue),ce=N.getClearColor(),xe=N.getClearAlpha(),Ee=ce.r,He=ce.g,je=ce.b;ve?(x[0]=Ee,x[1]=He,x[2]=je,x[3]=xe,z.clearBufferuiv(z.COLOR,0,x)):(S[0]=Ee,S[1]=He,S[2]=je,S[3]=xe,z.clearBufferiv(z.COLOR,0,S))}else k|=z.COLOR_BUFFER_BIT}U&&(k|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(k|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&z.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),O=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",Ve,!1),t.removeEventListener("webglcontextcreationerror",me,!1),N.dispose(),he.dispose(),J.dispose(),ke.dispose(),De.dispose(),C.dispose(),ne.dispose(),V.dispose(),ae.dispose(),Ce.dispose(),Q.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Nu),ie.removeEventListener("sessionend",Du),ts.stop()};function Pe(w){w.preventDefault(),$r("WebGLRenderer: Context Lost."),D=!0}function Ve(){$r("WebGLRenderer: Context Restored."),D=!1;let w=Dt.autoReset,U=oe.enabled,q=oe.autoUpdate,k=oe.needsUpdate,W=oe.type;We(),Dt.autoReset=w,oe.enabled=U,oe.autoUpdate=q,oe.needsUpdate=k,oe.type=W}function me(w){Fe("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function st(w){let U=w.target;U.removeEventListener("dispose",st),kt(U)}function kt(w){zi(w),De.remove(w)}function zi(w){let U=De.get(w).programs;U!==void 0&&(U.forEach(function(q){Q.releaseProgram(q)}),w.isShaderMaterial&&Q.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,q,k,W,ue){U===null&&(U=Mn);let ve=W.isMesh&&W.matrixWorld.determinantAffine()<0,ce=Gp(w,U,q,k,W);de.setMaterial(k,ve);let xe=q.index,Ee=1;if(k.wireframe===!0){if(xe=V.getWireframeAttribute(q),xe===void 0)return;Ee=2}let He=q.drawRange,je=q.attributes.position,be=He.start*Ee,Qe=(He.start+He.count)*Ee;ue!==null&&(be=Math.max(be,ue.start*Ee),Qe=Math.min(Qe,(ue.start+ue.count)*Ee)),xe!==null?(be=Math.max(be,0),Qe=Math.min(Qe,xe.count)):je!=null&&(be=Math.max(be,0),Qe=Math.min(Qe,je.count));let It=Qe-be;if(It<0||It===1/0)return;ae.setup(W,k,ce,q,xe);let ft,ut=K;if(xe!==null&&(ft=T.get(xe),ut=le,ut.setIndex(ft)),W.isMesh)k.wireframe===!0?(de.setLineWidth(k.wireframeLinewidth*bn()),ut.setMode(z.LINES)):ut.setMode(z.TRIANGLES);else if(W.isLine){let jt=k.linewidth;jt===void 0&&(jt=1),de.setLineWidth(jt*bn()),W.isLineSegments?ut.setMode(z.LINES):W.isLineLoop?ut.setMode(z.LINE_LOOP):ut.setMode(z.LINE_STRIP)}else W.isPoints?ut.setMode(z.POINTS):W.isSprite&&ut.setMode(z.TRIANGLES);if(W.isBatchedMesh)if(mt.get("WEBGL_multi_draw"))ut.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let jt=W._multiDrawStarts,Te=W._multiDrawCounts,rn=W._multiDrawCount,tt=xe?T.get(xe).bytesPerElement:1,ns=De.get(k).currentProgram.getUniforms();for(let Qt=0;Qt<rn;Qt++)ns.setValue(z,"_gl_DrawID",Qt),ut.render(jt[Qt]/tt,Te[Qt])}else if(W.isInstancedMesh)ut.renderInstances(be,It,W.count);else if(q.isInstancedBufferGeometry){let jt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Te=Math.min(q.instanceCount,jt);ut.renderInstances(be,It,Te)}else ut.render(be,It)};function Lu(w,U,q,k){O!==null&&w.isNodeMaterial&&O.setObject(k,w),Nt===!0&&$.setState(w,q,!1),w.transparent===!0&&w.side===Vt&&w.forceSinglePass===!1?(w.side=Kt,w.needsUpdate=!0,Dr(w,U,k),w.side=Cn,w.needsUpdate=!0,Dr(w,U,k),w.side=Vt):Dr(w,U,k)}this.compile=function(w,U,q=null){q===null&&(q=w),O!==null&&O.renderStart(w,U,q),E=J.get(q),E.init(U),M.push(E),q.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),w!==q&&w.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),E.setupLights(),O!==null&&O.updateLights(E.state.lightsArray),hn=this.localClippingEnabled,Nt=$.init(this.clippingPlanes,hn),Nt===!0&&$.setGlobalState(this.clippingPlanes,U),O!==null&&oe.render(E.state.shadowsArray,q,U);let k=new Set;return w.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let ue=W.material;if(ue)if(Array.isArray(ue))for(let ve=0;ve<ue.length;ve++){let ce=ue[ve];Lu(ce,q,U,W),k.add(ce)}else Lu(ue,q,U,W),k.add(ue)}),E=M.pop(),O!==null&&O.renderEnd(),k},this.compileAsync=function(w,U,q=null){let k=this.compile(w,U,q);return new Promise(W=>{function ue(){if(k.forEach(function(ve){let xe=De.get(ve).currentProgram;(xe===void 0||xe.isReady())&&k.delete(ve)}),k.size===0){W(w);return}setTimeout(ue,10)}mt.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let dc=null;function kp(w){dc&&dc(w)}function Nu(){ts.stop()}function Du(){ts.start()}let ts=new Gf;ts.setAnimationLoop(kp),typeof self<"u"&&ts.setContext(self),this.setAnimationLoop=function(w){dc=w,ie.setAnimationLoop(w),w===null?ts.stop():ts.start()},ie.addEventListener("sessionstart",Nu),ie.addEventListener("sessionend",Du),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){Fe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;O!==null&&O.renderStart(w,U);let q=ie.enabled===!0&&ie.isPresenting===!0,k=I!==null&&(ee===null||q)&&I.begin(R,ee);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(U),U=ie.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,U,ee),E=J.get(w,M.length),E.init(U),E.state.textureUnits=ke.getTextureUnits(),M.push(E),yt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?Wt.setFromArrayCamera(U):$e.setFromProjectionMatrix(yt,An,U.reversedDepth),hn=this.localClippingEnabled,Nt=$.init(this.clippingPlanes,hn),b=he.get(w,_.length),b.init(),_.push(b),this.info.render.frame++,ie.enabled===!0&&ie.isPresenting===!0){let ve=R.xr.getDepthSensingMesh();ve!==null&&fc(ve,U,-1/0,R.sortObjects)}fc(w,U,0,R.sortObjects),b.finish(),O!==null&&O.updateLights(E.state.lightsArray),R.sortObjects===!0&&b.sort(ze,pt),Sn=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Sn&&N.addToRenderList(b,w),this.info.autoReset===!0&&this.info.reset(),Nt===!0&&$.beginShadows();let W=E.state.shadowsArray;if(oe.render(W,w,U),Nt===!0&&$.endShadows(),(k&&I.hasRenderPass())===!1){let ve=b.opaque,ce=b.transmissive;if(E.setupLights(),U.isArrayCamera){let xe=U.cameras;if(ce.length>0)for(let Ee=0,He=xe.length;Ee<He;Ee++){let je=xe[Ee];Ou(ve,ce,w,je)}Sn&&N.render(w);for(let Ee=0,He=xe.length;Ee<He;Ee++){let je=xe[Ee];Uu(b,w,je,je.viewport)}}else ce.length>0&&Ou(ve,ce,w,U),Sn&&N.render(w),Uu(b,w,U)}ee!==null&&B===0&&(ke.updateMultisampleRenderTarget(ee),ke.updateRenderTargetMipmap(ee)),k&&I.end(R),w.isScene===!0&&w.onAfterRender(R,w,U),ae.resetDefaultState(),X=-1,Y=null,M.pop(),M.length>0?(E=M[M.length-1],ke.setTextureUnits(E.state.textureUnits),Nt===!0&&$.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,_.pop(),_.length>0?b=_[_.length-1]:b=null,O!==null&&O.renderEnd()};function fc(w,U,q,k){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){let ve=U.isArrayCamera?Wt:$e;if(!w.frustumCulled||w.intersectsFrustum(ve)){k&&Bt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(yt);let ce=ne.update(w),xe=w.material;xe.visible&&b.push(w,ce,xe,q,Bt.z,null,U)}}else if(w.isMesh||w.isLine||w.isPoints){let ve=U.isArrayCamera?Wt:$e;if(!w.frustumCulled||w.intersectsFrustum(ve)){let ce=ne.update(w),xe=w.material;if(k&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Bt.copy(w.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Bt.copy(ce.boundingSphere.center)),Bt.applyMatrix4(w.matrixWorld).applyMatrix4(yt)),Array.isArray(xe)){let Ee=ce.groups;for(let He=0,je=Ee.length;He<je;He++){let be=Ee[He],Qe=xe[be.materialIndex];Qe&&Qe.visible&&b.push(w,ce,Qe,q,Bt.z,be,U)}}else xe.visible&&b.push(w,ce,xe,q,Bt.z,null,U)}}}let ue=w.children;for(let ve=0,ce=ue.length;ve<ce;ve++)fc(ue[ve],U,q,k)}function Uu(w,U,q,k){let{opaque:W,transmissive:ue,transparent:ve}=w;E.setupLightsView(q),Nt===!0&&$.setGlobalState(R.clippingPlanes,q),k&&de.viewport(te.copy(k)),W.length>0&&Ga(W,U,q),ue.length>0&&Ga(ue,U,q),ve.length>0&&Ga(ve,U,q),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Ou(w,U,q,k){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[k.id]===void 0){let be=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[k.id]=new xn(1,1,{generateMipmaps:!0,type:be?Xn:pn,minFilter:In,samples:Math.max(4,gt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:qe.workingColorSpace})}let ue=E.state.transmissionRenderTarget[k.id],ve=k.viewport||te;ue.setSize(ve.z*R.transmissionResolutionScale,ve.w*R.transmissionResolutionScale);let ce=R.getRenderTarget(),xe=R.getActiveCubeFace(),Ee=R.getActiveMipmapLevel();R.setRenderTarget(ue),R.getClearColor(Z),fe=R.getClearAlpha(),fe<1&&R.setClearColor(16777215,.5),R.clear(),Sn&&N.render(q);let He=R.toneMapping;R.toneMapping=ii;let je=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),E.setupLightsView(k),Nt===!0&&$.setGlobalState(R.clippingPlanes,k),Ga(w,q,k),ke.updateMultisampleRenderTarget(ue),ke.updateRenderTargetMipmap(ue),mt.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let Qe=0,It=U.length;Qe<It;Qe++){let ft=U[Qe],{object:ut,geometry:jt,material:Te,group:rn}=ft;if(Te.side===Vt&&ut.layers.test(k.layers)){let tt=Te.side;Te.side=Kt,Te.needsUpdate=!0,Fu(ut,q,k,jt,Te,rn),Te.side=tt,Te.needsUpdate=!0,be=!0}}be===!0&&(ke.updateMultisampleRenderTarget(ue),ke.updateRenderTargetMipmap(ue))}R.setRenderTarget(ce,xe,Ee),R.setClearColor(Z,fe),je!==void 0&&(k.viewport=je),R.toneMapping=He}function Ga(w,U,q){let k=U.isScene===!0?U.overrideMaterial:null;for(let W=0,ue=w.length;W<ue;W++){let ve=w[W],{object:ce,geometry:xe,group:Ee}=ve,He=ve.material;He.allowOverride===!0&&k!==null&&(He=k),ce.layers.test(q.layers)&&Fu(ce,U,q,xe,He,Ee)}}function Fu(w,U,q,k,W,ue){O!==null&&W.isNodeMaterial&&O.setObject(w,W),w.onBeforeRender(R,U,q,k,W,ue),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),W.onBeforeRender(R,U,q,k,w,ue),W.transparent===!0&&W.side===Vt&&W.forceSinglePass===!1?(W.side=Kt,W.needsUpdate=!0,R.renderBufferDirect(q,U,k,W,w,ue),W.side=Cn,W.needsUpdate=!0,R.renderBufferDirect(q,U,k,W,w,ue),W.side=Vt):R.renderBufferDirect(q,U,k,W,w,ue),w.onAfterRender(R,U,q,k,W,ue)}function zu(w){let U=0;for(let q of w)q.texture!==null&&U++;return U}function Dr(w,U,q){U.isScene!==!0&&(U=Mn);let k=De.get(w),W=E.state.lights,ue=E.state.shadowsArray,ve=W.state.version,ce=Q.getParameters(w,W.state,ue,U,q,E.state.lightProbeGridArray),xe=Q.getProgramCacheKey(ce),Ee=k.programs;k.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?U.environment:null,k.fog=U.fog;let He=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;k.envMap=C.get(w.envMap||k.environment,He),k.envMapRotation=k.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Ee===void 0&&(w.addEventListener("dispose",st),Ee=new Map,k.programs=Ee,k.programVariants=new Map);let je=Ee.get(xe);if(je!==void 0){if(k.currentProgram===je&&k.lightsStateVersion===ve)return ku(w,ce),je}else ce.uniforms=Q.getUniforms(w),O!==null&&w.isNodeMaterial&&O.build(w,q,ce),w.onBeforeCompile(ce,R),je=Q.acquireProgram(ce,xe),Ee.set(xe,je),k.uniforms=ce.uniforms;let be=k.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(be.clippingPlanes=$.uniform),ku(w,ce),k.needsLights=Wp(w),k.lightsStateVersion=ve,k.needsLights&&(be.ambientLightColor.value=W.state.ambient,be.lightProbe.value=W.state.probe,be.sunLights.value=W.state.sun,be.sunLightShadows.value=W.state.sunShadow,be.directionalLights.value=W.state.directional,be.directionalLightShadows.value=W.state.directionalShadow,be.spotLights.value=W.state.spot,be.spotLightShadows.value=W.state.spotShadow,be.rectAreaLights.value=W.state.rectArea,be.ltc_1.value=W.state.rectAreaLTC1,be.ltc_2.value=W.state.rectAreaLTC2,be.pointLights.value=W.state.point,be.pointLightShadows.value=W.state.pointShadow,be.hemisphereLights.value=W.state.hemi,be.sunShadowMatrix.value=W.state.sunShadowMatrix,be.sunShadowCascade.value=W.state.sunShadowCascade,be.directionalShadowMatrix.value=W.state.directionalShadowMatrix,be.spotLightMatrix.value=W.state.spotLightMatrix,be.spotLightMap.value=W.state.spotLightMap,be.pointShadowMatrix.value=W.state.pointShadowMatrix),k.numLightProbeGrids=zu(E.state.lightProbeGridArray),k.currentProgram=je,k.uniformsList=null,je}function Hp(w,U,q,k,W){let ue=De.get(w),ve=ue.currentProgram.id+","+k+","+W,ce=ue.programVariants.get(ve);return ce===void 0?(ce=Dr(w,U,q),ue.programVariants.set(ve,ce)):(ue.currentProgram=ce,ue.uniformsList=null,ue.outputColorSpace=k,ue.toneMapping=W),ce}function Bu(w){if(w.uniformsList===null){let U=w.currentProgram.getUniforms();w.uniformsList=Mr.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function ku(w,U){let q=De.get(w);q.outputColorSpace=U.outputColorSpace,q.batching=U.batching,q.batchingColor=U.batchingColor,q.instancing=U.instancing,q.instancingColor=U.instancingColor,q.instancingMorph=U.instancingMorph,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function Gp(w,U,q,k,W){U.isScene!==!0&&(U=Mn),ke.resetTextureUnits();let ue=U.fog,ve=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?U.environment:null,ce=ee===null?R.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:qe.workingColorSpace,xe=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Ee=C.get(k.envMap||ve,xe),He=k.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,je=!!q.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),be=!!q.morphAttributes.position,Qe=!!q.morphAttributes.normal,It=!!q.morphAttributes.color,ft=ii;k.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(ft=R.toneMapping);let ut=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,jt=ut!==void 0?ut.length:0,Te=De.get(k),rn=E.state.lights;if(Nt===!0&&(hn===!0||w!==Y)){let vt=w===Y&&k.id===X;$.setState(k,w,vt)}let tt=!1,ns=!1;k.version===Te.__version?Te.needsLights&&Te.lightsStateVersion!==rn.state.version||W.isBatchedMesh&&Te.batching===!1||!W.isBatchedMesh&&Te.batching===!0||W.isBatchedMesh&&Te.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Te.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Te.instancing===!1||!W.isInstancedMesh&&Te.instancing===!0||W.isSkinnedMesh&&Te.skinning===!1||!W.isSkinnedMesh&&Te.skinning===!0||W.isInstancedMesh&&Te.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Te.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Te.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Te.instancingMorph===!1&&W.morphTexture!==null||Te.envMap!==Ee||k.fog===!0&&Te.fog!==ue||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==$.numPlanes||Te.numIntersection!==$.numIntersection)||Te.vertexAlphas!==He||Te.vertexTangents!==je||Te.morphTargets!==be||Te.morphNormals!==Qe||Te.morphColors!==It||Te.morphTargetsCount!==jt||Te.numLightProbeGrids!==zu(E.state.lightProbeGridArray)?tt=!0:(Te.outputColorSpace!==ce||Te.toneMapping!==ft)&&(ns=!0):(tt=!0,Te.__version=k.version);let Qt=Te.currentProgram;(tt===!0||ns===!0)&&(Qt=ns===!0?Hp(k,U,W,ce,ft):Dr(k,U,W),O&&k.isNodeMaterial&&O.onUpdateProgram(k,Qt,Te));let Va=!1,Bi=!1,is=!1,et=Qt.getUniforms(),Xt=Te.uniforms;if(de.useProgram(Qt.program)&&(Va=!0,Bi=!0,is=!0),k.id!==X&&(X=k.id,Bi=!0),Va||Y!==w){de.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),et.setValue(z,"projectionMatrix",w.projectionMatrix),et.setValue(z,"viewMatrix",w.matrixWorldInverse);let Ht=et.map.cameraPosition;Ht!==void 0&&Ht.setValue(z,Kn.setFromMatrixPosition(w.matrixWorld)),gt.logarithmicDepthBuffer&&et.setValue(z,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&et.setValue(z,"isOrthographic",w.isOrthographicCamera===!0),Y!==w&&(Y=w,Bi=!0,is=!0)}if(Te.needsLights&&(rn.state.sunShadowMap.length>0&&et.setValue(z,"sunShadowMap",rn.state.sunShadowMap,ke),rn.state.directionalShadowMap.length>0&&et.setValue(z,"directionalShadowMap",rn.state.directionalShadowMap,ke),rn.state.spotShadowMap.length>0&&et.setValue(z,"spotShadowMap",rn.state.spotShadowMap,ke),rn.state.pointShadowMap.length>0&&et.setValue(z,"pointShadowMap",rn.state.pointShadowMap,ke)),W.isSkinnedMesh){et.setOptional(z,W,"bindMatrix"),et.setOptional(z,W,"bindMatrixInverse");let vt=W.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),et.setValue(z,"boneTexture",vt.boneTexture,ke))}W.isBatchedMesh&&(et.setOptional(z,W,"batchingTexture"),et.setValue(z,"batchingTexture",W._matricesTexture,ke),et.setOptional(z,W,"batchingIdTexture"),et.setValue(z,"batchingIdTexture",W._indirectTexture,ke),et.setOptional(z,W,"batchingColorTexture"),W._colorsTexture!==null&&et.setValue(z,"batchingColorTexture",W._colorsTexture,ke));let Un=q.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&j.update(W,q,Qt),(Bi||Te.receiveShadow!==W.receiveShadow)&&(Te.receiveShadow=W.receiveShadow,et.setValue(z,"receiveShadow",W.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&U.environment!==null&&(Xt.envMapIntensity.value=U.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=Ny()),Bi){if(et.setValue(z,"toneMappingExposure",R.toneMappingExposure),Te.needsLights&&Vp(Xt,is),ue&&k.fog===!0&&re.refreshFogUniforms(Xt,ue),re.refreshMaterialUniforms(Xt,k,pe,we,E.state.transmissionRenderTarget[w.id]),Te.needsLights&&Te.numLightProbeGrids>0){let vt=v,Ht=0;for(let ci of E.state.lightProbeGridArray)ci.texture!==null&&(vt.textures[Ht]=ci.texture,vt.min[Ht]=ci.boundingBox.min,vt.max[Ht]=ci.boundingBox.max,vt.resolution[Ht]=ci.resolution,Ht++);for(let ci in vt)vt[ci].length=Ht;Xt.probesSH.value=vt.textures,Xt.probesMin.value=vt.min,Xt.probesMax.value=vt.max,Xt.probesResolution.value=vt.resolution}Mr.upload(z,Bu(Te),Xt,ke)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Mr.upload(z,Bu(Te),Xt,ke),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&et.setValue(z,"center",W.center),et.setValue(z,"modelViewMatrix",W.modelViewMatrix),et.setValue(z,"normalMatrix",W.normalMatrix),et.setValue(z,"modelMatrix",W.matrixWorld),k.uniformsGroups!==void 0){let vt=k.uniformsGroups;for(let Ht=0,ci=vt.length;Ht<ci;Ht++){let Gu=vt[Ht];Ce.update(Gu,Qt),Ce.bind(Gu,Qt)}}return Qt}function Vp(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.sunLights.needsUpdate=U,w.sunLightShadows.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function Wp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(w,U,q){let k=De.get(w);k.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),De.get(w.texture).__webglTexture=U,De.get(w.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:q,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,U){let q=De.get(w);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,q=0){ee=w,G=U,B=q;let k=null,W=!1,ue=!1;if(w){let ce=De.get(w);if(ce.__useDefaultFramebuffer!==void 0){de.bindFramebuffer(z.FRAMEBUFFER,ce.__webglFramebuffer),te.copy(w.viewport),_e.copy(w.scissor),Se=w.scissorTest,de.viewport(te),de.scissor(_e),de.setScissorTest(Se),X=-1;return}else if(ce.__webglFramebuffer===void 0)ke.setupRenderTarget(w);else if(ce.__hasExternalTextures)ke.rebindTextures(w,De.get(w.texture).__webglTexture,De.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let He=w.depthTexture;if(ce.__boundDepthTexture!==He){if(He!==null&&De.has(He)&&(w.width!==He.image.width||w.height!==He.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(w)}}let xe=w.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(ue=!0);let Ee=De.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ee[U])?k=Ee[U][q]:k=Ee[U],W=!0):w.samples>0&&ke.useMultisampledRTT(w)===!1?k=De.get(w).__webglMultisampledFramebuffer:Array.isArray(Ee)?k=Ee[q]:k=Ee,te.copy(w.viewport),_e.copy(w.scissor),Se=w.scissorTest}else te.copy(Le).multiplyScalar(pe).floor(),_e.copy(it).multiplyScalar(pe).floor(),Se=ht;if(q!==0&&(k=H),de.bindFramebuffer(z.FRAMEBUFFER,k)&&de.drawBuffers(w,k),de.viewport(te),de.scissor(_e),de.setScissorTest(Se),W){let ce=De.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+U,ce.__webglTexture,q)}else if(ue){let ce=U;for(let xe=0;xe<w.textures.length;xe++){let Ee=De.get(w.textures[xe]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+xe,Ee.__webglTexture,q,ce)}}else if(w!==null&&q!==0){let ce=De.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ce.__webglTexture,q)}X=-1};function Hu(w){let U=De.get(w);return(U.__readFormat!==w.format||U.__readType!==w.type)&&(U.__readFormat=w.format,U.__readType=w.type,U.__formatReadable=gt.textureFormatReadable(w.format),U.__typeReadable=gt.textureTypeReadable(w.type)),U}this.readRenderTargetPixels=function(w,U,q,k,W,ue,ve,ce=0){if(!(w&&w.isWebGLRenderTarget)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=De.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ve!==void 0&&(xe=xe[ve],Array.isArray(xe)&&(xe=xe[0])),xe){de.bindFramebuffer(z.FRAMEBUFFER,xe);try{let Ee=w.textures[ce],He=Ee.format,je=Ee.type;w.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+ce);let be=Hu(Ee);if(be.__formatReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(be.__typeReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-k&&q>=0&&q<=w.height-W&&z.readPixels(U,q,k,W,se.convert(He),se.convert(je),ue)}finally{let Ee=ee!==null?De.get(ee).__webglFramebuffer:null;de.bindFramebuffer(z.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(w,U,q,k,W,ue,ve,ce=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=De.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ve!==void 0&&(xe=xe[ve],Array.isArray(xe)&&(xe=xe[0])),xe)if(U>=0&&U<=w.width-k&&q>=0&&q<=w.height-W){de.bindFramebuffer(z.FRAMEBUFFER,xe);let Ee=w.textures[ce],He=Ee.format,je=Ee.type;w.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+ce);let be=Hu(Ee);if(be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Qe=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Qe),z.bufferData(z.PIXEL_PACK_BUFFER,ue.byteLength,z.STREAM_READ),z.readPixels(U,q,k,W,se.convert(He),se.convert(je),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let It=ee!==null?De.get(ee).__webglFramebuffer:null;de.bindFramebuffer(z.FRAMEBUFFER,It);let ft=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await pf(z,ft,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Qe),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,ue),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(Qe),z.deleteSync(ft),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,U=null,q=0){let k=Math.pow(2,-q),W=Math.floor(w.image.width*k),ue=Math.floor(w.image.height*k),ve=U!==null?U.x:0,ce=U!==null?U.y:0;ke.setTexture2D(w,0),z.copyTexSubImage2D(z.TEXTURE_2D,q,0,0,ve,ce,W,ue),de.unbindTexture()},this.copyTextureToTexture=function(w,U,q=null,k=null,W=0,ue=0){let ve,ce,xe,Ee,He,je,be,Qe,It,ft=w.isCompressedTexture?w.mipmaps[ue]:w.image;if(q!==null)ve=q.max.x-q.min.x,ce=q.max.y-q.min.y,xe=q.isBox3?q.max.z-q.min.z:1,Ee=q.min.x,He=q.min.y,je=q.isBox3?q.min.z:0;else{let et=Math.pow(2,-W);ve=Math.floor(ft.width*et),ce=Math.floor(ft.height*et),w.isDataArrayTexture?xe=ft.depth:w.isData3DTexture?xe=Math.floor(ft.depth*et):xe=1,Ee=0,He=0,je=0}k!==null?(be=k.x,Qe=k.y,It=k.z):(be=0,Qe=0,It=0);let ut=se.convert(U.format),jt=se.convert(U.type),Te;U.isData3DTexture?(ke.setTexture3D(U,0),Te=z.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(ke.setTexture2DArray(U,0),Te=z.TEXTURE_2D_ARRAY):(ke.setTexture2D(U,0),Te=z.TEXTURE_2D),de.activeTexture(z.TEXTURE0),de.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,U.flipY),de.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),de.pixelStorei(z.UNPACK_ALIGNMENT,U.unpackAlignment);let rn=de.getParameter(z.UNPACK_ROW_LENGTH),tt=de.getParameter(z.UNPACK_IMAGE_HEIGHT),ns=de.getParameter(z.UNPACK_SKIP_PIXELS),Qt=de.getParameter(z.UNPACK_SKIP_ROWS),Va=de.getParameter(z.UNPACK_SKIP_IMAGES);de.pixelStorei(z.UNPACK_ROW_LENGTH,ft.width),de.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ft.height),de.pixelStorei(z.UNPACK_SKIP_PIXELS,Ee),de.pixelStorei(z.UNPACK_SKIP_ROWS,He),de.pixelStorei(z.UNPACK_SKIP_IMAGES,je);let Bi=w.isDataArrayTexture||w.isData3DTexture,is=U.isDataArrayTexture||U.isData3DTexture;if(w.isDepthTexture){let et=De.get(w),Xt=De.get(U),Un=De.get(et.__renderTarget),vt=De.get(Xt.__renderTarget);de.bindFramebuffer(z.READ_FRAMEBUFFER,Un.__webglFramebuffer),de.bindFramebuffer(z.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let Ht=0;Ht<xe;Ht++)Bi&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,De.get(w).__webglTexture,W,je+Ht),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,De.get(U).__webglTexture,ue,It+Ht)),z.blitFramebuffer(Ee,He,Ee+ve,He+ce,be,Qe,be+ve,Qe+ce,z.DEPTH_BUFFER_BIT,z.NEAREST);de.bindFramebuffer(z.READ_FRAMEBUFFER,null),de.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(W!==0||w.isRenderTargetTexture||De.has(w)){let et=De.get(w),Xt=De.get(U);de.bindFramebuffer(z.READ_FRAMEBUFFER,L),de.bindFramebuffer(z.DRAW_FRAMEBUFFER,F);for(let Un=0;Un<xe;Un++)Bi?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,et.__webglTexture,W,je+Un):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,et.__webglTexture,W),is?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Xt.__webglTexture,ue,It+Un):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Xt.__webglTexture,ue),W!==0?z.blitFramebuffer(Ee,He,Ee+ve,He+ce,be,Qe,be+ve,Qe+ce,z.COLOR_BUFFER_BIT,z.NEAREST):is?z.copyTexSubImage3D(Te,ue,be,Qe,It+Un,Ee,He,ve,ce):z.copyTexSubImage2D(Te,ue,be,Qe,Ee,He,ve,ce);de.bindFramebuffer(z.READ_FRAMEBUFFER,null),de.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else is?w.isDataTexture||w.isData3DTexture?z.texSubImage3D(Te,ue,be,Qe,It,ve,ce,xe,ut,jt,ft.data):U.isCompressedArrayTexture?z.compressedTexSubImage3D(Te,ue,be,Qe,It,ve,ce,xe,ut,ft.data):z.texSubImage3D(Te,ue,be,Qe,It,ve,ce,xe,ut,jt,ft):w.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,ue,be,Qe,ve,ce,ut,jt,ft.data):w.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,ue,be,Qe,ft.width,ft.height,ut,ft.data):z.texSubImage2D(z.TEXTURE_2D,ue,be,Qe,ve,ce,ut,jt,ft);de.pixelStorei(z.UNPACK_ROW_LENGTH,rn),de.pixelStorei(z.UNPACK_IMAGE_HEIGHT,tt),de.pixelStorei(z.UNPACK_SKIP_PIXELS,ns),de.pixelStorei(z.UNPACK_SKIP_ROWS,Qt),de.pixelStorei(z.UNPACK_SKIP_IMAGES,Va),ue===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&z.generateMipmap(Te),de.unbindTexture()},this.initRenderTarget=function(w){De.get(w).__webglFramebuffer===void 0&&ke.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ke.setTextureCube(w,0):w.isData3DTexture?ke.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ke.setTexture2DArray(w,0):ke.setTexture2D(w,0),de.unbindTexture()},this.resetState=function(){G=0,B=0,ee=null,de.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}};var Hl=class extends yi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Yt;e.deleteAttribute("uv");let t=new Lt({side:Kt}),n=new Lt,i=new cn(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new Ge(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new jn(e,n,6),o=new dt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Ge(e,Tr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Ge(e,Tr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Ge(e,Tr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new Ge(e,Tr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new Ge(e,Tr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new Ge(e,Tr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Tr(s){return new Rn({color:0,emissive:16777215,emissiveIntensity:s})}function ep(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new at;l.morphTargetsRelative=o;let c=0;for(let h=0;h<s.length;++h){let u=s[h],d=0,f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[p].length!==s[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0,u=[];for(let d=0;d<s.length;++d){let f=s[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Qf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let y=0;y<a[h].length;++y)f.push(a[h][y][d]);let p=Qf(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function Qf(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new _t(a,t,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<t;p++){let y=h.getComponent(d,p);o.setComponent(d+u,p,y)}}else a.set(h.array,l);l+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function Oh(s,e){if(e===dh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===vr||e===Ia){let t=s.getIndex();if(t===null){let r=[],a=s.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===vr)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function Oa(s){let e=new Map,t=new Map,n=s.clone();return tp(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function tp(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)tp(s.children[n],e.children[n],t)}var Gl=class extends ni{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Vh(t)}),this.register(function(t){return new Wh(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new eu(t)}),this.register(function(t){return new tu(t)}),this.register(function(t){return new nu(t)}),this.register(function(t){return new Yh(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new Zh(t)}),this.register(function(t){return new Jh(t)}),this.register(function(t){return new Gh(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new kh(t)}),this.register(function(t){return new Vl(t,Ke.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Vl(t,Ke.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new iu(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Ii.extractUrlBase(e);a=Ii.resolveURL(c,this.path)}else a=Ii.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new ur(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===ap){try{a[Ke.KHR_BINARY_GLTF]=new su(e)}catch(u){i&&i(u);return}r=JSON.parse(a[Ke.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new uu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Ke.KHR_MATERIALS_UNLIT:a[u]=new Hh;break;case Ke.KHR_DRACO_MESH_COMPRESSION:a[u]=new ru(r,this.dracoLoader);break;case Ke.KHR_TEXTURE_TRANSFORM:a[u]=new au;break;case Ke.KHR_MESH_QUANTIZATION:a[u]=new ou;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function Uy(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function St(s,e,t){let n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var Ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},kh=class{constructor(e){this.parser=e,this.name=Ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Me(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],on);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Gn(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new cn(h),c.distance=u;break;case"spot":c=new _s(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),oi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Hh=class{constructor(){this.name=Ke.KHR_MATERIALS_UNLIT}getMaterialType(){return ot}extendParams(e,t,n){let i=[];e.color=new Me(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],on),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,wt))}return Promise.all(i)}},Gh=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=St(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Vh=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return St(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let n=St(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ne(r,r)}return Promise.all(i)}},Wh=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return St(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let n=St(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}},Xh=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_DISPERSION}getMaterialType(e){return St(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let n=St(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},qh=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return St(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let n=St(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},Yh=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SHEEN}getMaterialType(e){return St(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let n=St(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new Me(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],on)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,wt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},Kh=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return St(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let n=St(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},Zh=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_VOLUME}getMaterialType(e){return St(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let n=St(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Me().setRGB(r[0],r[1],r[2],on),Promise.all(i)}},Jh=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IOR}getMaterialType(e){return St(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let n=St(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},$h=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){return St(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let n=St(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Me().setRGB(r[0],r[1],r[2],on),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,wt)),Promise.all(i)}},jh=class{constructor(e){this.parser=e,this.name=Ke.EXT_MATERIALS_BUMP}getMaterialType(e){return St(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let n=St(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},Qh=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return St(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let n=St(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},eu=class{constructor(e){this.parser=e,this.name=Ke.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},tu=class{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},nu=class{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Vl=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}},iu=class{constructor(e){this.name=Ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==Ln.TRIANGLES&&c.mode!==Ln.TRIANGLE_STRIP&&c.mode!==Ln.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let p of u){let y=new Oe,g=new P,m=new xt,x=new P(1,1,1),S=new jn(p.geometry,p.material,d);for(let b=0;b<d;b++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,b),l.SCALE&&x.fromBufferAttribute(l.SCALE,b),S.setMatrixAt(b,y.compose(g,m,x));let v=null;for(let b in l)if(b==="_COLOR_0"){let E=l[b];S.instanceColor=new vi(E.array,E.itemSize,E.normalized)}else if(b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"){if(v===null){let _=S.geometry;v=new at,v.name=_.name;for(let M in _.attributes)v.setAttribute(M,_.attributes[M]);for(let M in _.morphAttributes)v.morphAttributes[M]=_.morphAttributes[M];_.index!==null&&v.setIndex(_.index),v.morphTargetsRelative=_.morphTargetsRelative;for(let M of _.groups)v.addGroup(M.start,M.count,M.materialIndex);_.boundingBox!==null&&(v.boundingBox=_.boundingBox.clone()),_.boundingSphere!==null&&(v.boundingSphere=_.boundingSphere.clone()),v.drawRange.start=_.drawRange.start,v.drawRange.count=_.drawRange.count,v.userData=Object.assign({},_.userData),S.geometry=v}let E=l[b];v.setAttribute(b,new vi(E.array,E.itemSize,E.normalized))}dt.prototype.copy.call(S,p),this.parser.assignFinalMaterial(S),f.push(S)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},ap="glTF",Fa=12,np={JSON:1313821514,BIN:5130562},su=class{constructor(e){this.name=Ke.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Fa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ap)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Fa,r=new DataView(e,Fa),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===np.JSON){let c=new Uint8Array(e,Fa+a,o);this.content=n.decode(c)}else if(l===np.BIN){let c=Fa+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},ru=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=cu[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=cu[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Er[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(let p in f.attributes){let y=f.attributes[p],g=l[p];g!==void 0&&(y.normalized=g)}u(f)},o,c,on,d)})})}},au=class{constructor(){this.name=Ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},ou=class{constructor(){this.name=Ke.KHR_MESH_QUANTIZATION}},Wl=class extends ti{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,p=e*c,y=p-c,g=-2*f+3*d,m=f-d,x=1-g,S=m-d+u;for(let v=0;v!==o;v++){let b=a[y+v+o],E=a[y+v+l]*h,_=a[p+v+o],M=a[p+v]*h;r[v]=x*b+S*E+g*_+m*M}return r}},Oy=new xt,lu=class extends Wl{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return Oy.fromArray(r).normalize().toArray(r),r}},Ln={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Er={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ip={9728:Rt,9729:Ut,9984:Zo,9985:_r,9986:Ts,9987:In},sp={33071:wn,33648:Qs,10497:$n},Fh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},cu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ji={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Fy={CUBICSPLINE:void 0,LINEAR:ds,STEP:us},zh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function zy(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Lt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Cn})),s.DefaultMaterial}function As(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function oi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function By(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function ky(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Hy(s){let e,t=s.extensions&&s.extensions[Ke.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Bh(t.attributes):e=s.indices+":"+Bh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Bh(s.targets[n]);return e}function Bh(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function hu(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Gy(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Vy=new Oe,uu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Uy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?(this.textureLoader=new _a(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Ma(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ur(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return As(r,o,i),oi(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ke.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(Ii.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Fh[i.type],o=Er[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new _t(c,a,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=Fh[i.type],c=Er[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0,y,g;if(f&&f!==u){let m=Math.floor(d/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count,S=t.cache.get(x);S||(y=new c(o,m*f,i.count*f/h),S=new ps(y,f/h),t.cache.add(x,S)),g=new qi(S,l,d%f/h,p)}else o===null?y=new c(i.count*l):y=new c(o,d,i.count*l),g=new _t(y,l,p);if(i.sparse!==void 0){let m=Fh.SCALAR,x=Er[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,b=new x(a[1],S,i.sparse.count*m),E=new c(a[2],v,i.sparse.count*l);o!==null&&(g=new _t(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let _=0,M=b.length;_<M;_++){let I=b[_];if(g.setX(I,E[_*l]),l>=2&&g.setY(I,E[_*l+1]),l>=3&&g.setZ(I,E[_*l+2]),l>=4&&g.setW(I,E[_*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=ip[d.magFilter]||Ut,h.minFilter=ip[d.minFilter]||In,h.wrapS=sp[d.wrapS]||$n,h.wrapT=sp[d.wrapT]||$n,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Rt&&h.minFilter!==Ut,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=i.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)h=n.getDependency("bufferView",a.bufferView).then(function(d){return new Promise(function(f,p){t.parse(d,f,p)})});else{if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(d){c=!0;let f=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(l).then(function(d){return new Promise(function(f,p){let y=f;t.isImageBitmapLoader===!0&&(y=function(g){let m=new Ot(g);m.needsUpdate=!0,f(m)}),t.load(Ii.resolveURL(d,r.path),y,void 0,p)})})}let u=h.then(function(d){return c===!0&&o.revokeObjectURL(l),oi(d,a),d.userData.mimeType=a.mimeType||Gy(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ke.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Ke.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[Ke.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Qn,nn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new lr,nn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Lt}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[Ke.KHR_MATERIALS_UNLIT]){let u=i[Ke.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Me(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],on),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,wt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Vt);let h=r.alphaMode||zh.OPAQUE;if(h===zh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===zh.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==ot&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ne(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==ot&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==ot){let u=r.emissiveFactor;o.emissive=new Me().setRGB(u[0],u[1],u[2],on)}return r.emissiveTexture!==void 0&&a!==ot&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,wt)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),oi(u,r),t.associations.set(u,{materials:e}),r.extensions&&As(i,u,r),u})}createUniqueName(e){let t=ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return rp(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=Hy(c),u=i[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[Ke.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=rp(new at,c,t),c.mode===Ln.TRIANGLE_STRIP?d=d.then(f=>Oh(f,Ia)):c.mode===Ln.TRIANGLE_FAN&&(d=d.then(f=>Oh(f,vr))),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?zy(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,p=h.length;f<p;f++){let y=h[f],g=a[f],m,x=c[f];if(g.mode===Ln.TRIANGLES||g.mode===Ln.TRIANGLE_STRIP||g.mode===Ln.TRIANGLE_FAN||g.mode===void 0){let S=r.isSkinnedMesh===!0,v=y.hasAttribute("skinIndex")&&y.hasAttribute("skinWeight");S&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=S&&v?new sa(y,x):new Ge(y,x),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(g.mode===Ln.LINES)m=new aa(y,x);else if(g.mode===Ln.LINE_STRIP)m=new gs(y,x);else if(g.mode===Ln.LINE_LOOP)m=new oa(y,x);else if(g.mode===Ln.POINTS)m=new Mi(y,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&ky(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),oi(m,r),g.extensions&&As(i,m,g),t.assignFinalMaterial(m),u.push(m)}for(let f=0,p=u.length;f<p;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&As(i,u[0],r),u[0];let d=new Tt;r.extensions&&As(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=u.length;f<p;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new At(yn.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ys(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),oi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new Oe;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ra(o,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let f=i.channels[u],p=i.samplers[f.sampler],y=f.target,g=y.node,m=i.parameters!==void 0?i.parameters[p.input]:p.input,x=i.parameters!==void 0?i.parameters[p.output]:p.output;y.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",x)),c.push(p),h.push(y))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],p=u[2],y=u[3],g=u[4],m=[];for(let S=0,v=d.length;S<v;S++){let b=d[S],E=f[S],_=p[S],M=y[S],I=g[S];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();let R=n._createAnimationTracks(b,E,_,M,I);if(R)for(let D=0;D<R.length;D++)m.push(R[D])}let x=new Ci(r,void 0,m);return oi(x,i),x})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Vy)});for(let f=0,p=u.length;f<p;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,p=u[0];h.pivot=new P().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new ar:c.length>1?h=new Tt:c.length===1?h=c[0]:h=new dt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),oi(h,r),r.extensions&&As(n,h,r),r.matrix!==void 0){let u=new Oe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Tt;n.name&&(r.name=i.createUniqueName(n.name)),oi(r,n),n.extensions&&As(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){let d=l[h];d.parent!==null?r.add(Oa(d)):r.add(d)}let c=h=>{let u=new Map;for(let[d,f]of i.associations)(d instanceof nn||d instanceof Ot)&&u.set(d,f);return h.traverse(d=>{let f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}ji[r.path]===ji.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(ji[r.path]){case ji.weights:h=wi;break;case ji.rotation:h=Ai;break;case ji.translation:case ji.scale:h=Ki;break;default:switch(n.itemSize){case 1:h=wi;break;case 2:case 3:default:h=Ki;break}break}let u=i.interpolation!==void 0?Fy[i.interpolation]:ds,d=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){let y=new h(l[f]+"."+ji[r.path],t.array,d,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),a.push(y)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=hu(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Ai?lu:Wl;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Wy(s,e,t){let n=e.attributes,i=new qt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),o.normalized){let h=hu(Er[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new P,l=new P;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){let y=hu(Er[d.componentType]);l.multiplyScalar(y)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new dn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function rp(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(let a in n){let o=cu[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return qe.workingColorSpace!==on&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${qe.workingColorSpace}" not supported.`),oi(s,e),Wy(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?By(s,e.targets,t):s})}var Et={models:{},clips:{},parts:{},ready:!1},Xy={Black:{c:1513755,m:.35,r:.55},DarkMetal:{c:2764081,m:.85,r:.42},Metal:{c:6317419,m:.9,r:.35},LightMetal:{c:10133670,m:.95,r:.25},LightMetal2:{c:8291466,m:.95,r:.3},DarkWood:{c:5978399,m:0,r:.62},Wood:{c:7227430,m:0,r:.6},Glass:{c:791576,m:.9,r:.08},Main:{c:1842720,m:.3,r:.6},Green:{c:3950128,m:.1,r:.7},DarkGreen:{c:2897188,m:.1,r:.7}};function qy(s){s.traverse(e=>{if(!e.isMesh)return;e.castShadow=!0;let t=n=>{let i=Xy[n.name];return i?(n.color.setHex(i.c),n.metalness=i.m,n.roughness=i.r):(n.metalness=Math.min(n.metalness,.3),n.roughness=Math.max(n.roughness,.6)),n};e.material=Array.isArray(e.material)?e.material.map(t):t(e.material)})}function Yy(s,e){e.updateMatrixWorld(!0);let t=[],n=new qt;e.traverse(i=>{if(!i.isMesh)return;let r=i.geometry.clone().applyMatrix4(i.matrixWorld),a=i.material,o=/Lea|Grass/.test(a.name);r.computeBoundingBox(),n.union(r.boundingBox);let l=new Rn({map:a.map,color:a.map?16777215:a.color,alphaTest:o?.45:0,side:o?Vt:Cn});/Light/.test(a.name)&&(l.emissive=new Me(a.name==="BrakeLight"?3145728:0)),t.push({geo:r,mat:l,leaf:o})}),Et.parts[s]={parts:t,box:n}}function Ky(s){let e=atob(s),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t.buffer}async function op(s=()=>{}){let e=window.SP_ASSETS||{},t=Object.keys(e),n=new Gl,i=0;for(let r of t){let a=await new Promise((o,l)=>n.parse(Ky(e[r]),"",o,l));if(r==="soldier")for(let o of a.animations)Et.clips[o.name]=o;else r.startsWith("prop_")?Yy(r.slice(5),a.scene):qy(a.scene);Et.models[r]=a.scene,s(++i/t.length)}Et.ready=!0}var Zy={ak:{s:.162,grip:[.02,.05],muzzle:[3.85,.58],sight:.9,rail:[.7,.8],hand:[1.95,.42],eject:[.9,.66]},m4:{s:.162,grip:[.1,.05],muzzle:[3.6,.65],sight:1.05,rail:[.2,.93],hand:[1.8,.5],eject:[.65,.68]},dmr:{s:.15,grip:[.25,-.1],muzzle:[5.2,.22],sight:.5,hand:[1.9,.05],eject:[.6,.25],scope:[-.22,.5]},shotgun:{s:.175,grip:[.15,0],muzzle:[3.8,.24],sight:.37,rail:[.8,.33],hand:[2.2,-.04],eject:[.9,.2]},smg:{s:.16,grip:[-.05,0],muzzle:[2.25,.55],sight:.78,rail:[.7,.72],hand:[1.45,.38],eject:[.6,.5]},pistol:{s:.11,grip:[0,.1],muzzle:[1.45,.42],sight:.56,hand:[.05,.02],eject:[.5,.5]},carbine:{s:.162,grip:[.15,.1],muzzle:[3.25,.62],sight:.9,hand:[2,.5],eject:[.9,.66]}};function Xl(s){let e=Zy[s],t=new Tt,n=Et.models["gun_"+s].clone(!0);return n.scale.setScalar(e.s),n.rotation.y=Math.PI/2,n.position.set(0,-e.grip[1]*e.s,e.grip[0]*e.s),t.add(n),t.model=n,t.def=e,t.pt=(i,r=0)=>new P(r*e.s,(i[1]-e.grip[1])*e.s,-(i[0]-e.grip[0])*e.s),t.muzzle=t.pt(e.muzzle),t}var Ie=(s=1,e)=>e===void 0?Math.random()*s:s+Math.random()*(e-s);function xu(s){let e=s>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var du={};function lp(s){if(du[s])return du[s];let e=128,t=document.createElement("canvas");t.width=t.height=e;let n=t.getContext("2d"),i=xu(s.length*977+13);if(s==="fence"){n.clearRect(0,0,e,e),n.strokeStyle="#c8ccd0",n.lineWidth=3;for(let a=-e;a<e*2;a+=16)n.beginPath(),n.moveTo(a,0),n.lineTo(a+e,e),n.stroke(),n.beginPath(),n.moveTo(a+e,0),n.lineTo(a,e),n.stroke()}else{let a=n.createImageData(e,e);for(let o=0;o<e;o++)for(let l=0;l<e;l++){let c;s==="grass"?c=140+i()*115:s==="dirt"?c=165+i()*80:s==="concrete"?c=195+i()*45:s==="metal"?c=180+Math.sin(l/e*Math.PI*16)*42+i()*22:s==="wood"?c=170+Math.sin(o/e*Math.PI*12+Math.sin(l*.08)*1.5)*35+i()*35:c=235+i()*20;let h=(o*e+l)*4;a.data[h]=a.data[h+1]=a.data[h+2]=c,a.data[h+3]=255}if(n.putImageData(a,0,0),s==="grass"||s==="dirt"||s==="concrete")for(let o=0;o<26;o++)n.fillStyle=`rgba(0,0,0,${.05+i()*.1})`,n.beginPath(),n.arc(i()*e,i()*e,4+i()*14,0,7),n.fill();if(s==="wood"){n.fillStyle="rgba(0,0,0,.35)";for(let o=0;o<4;o++)n.fillRect(0,o*32,e,2)}s==="concrete"&&(n.strokeStyle="rgba(0,0,0,.22)",n.strokeRect(.5,.5,e-1,e-1))}let r=new Si(t);return r.wrapS=r.wrapT=$n,r.colorSpace=wt,r.anisotropy=4,du[s]=r}var Jy=[[[1,0,0],[0,0,-1],[0,1,0]],[[-1,0,0],[0,0,1],[0,1,0]],[[0,1,0],[1,0,0],[0,0,-1]],[[0,-1,0],[1,0,0],[0,0,1]],[[0,0,1],[1,0,0],[0,1,0]],[[0,0,-1],[-1,0,0],[0,1,0]]],$y={grass:6,dirt:5,wood:1.6,concrete:4,metal:1.3,plain:1,fence:1.1,emis:1},cp=new xt,hp=new un;function Jt(s,e,t,n=0,i=0,r=0,a=1,o=a,l=a){return hp.set(n,i,r),cp.setFromEuler(hp),new Oe().compose(new P(s,e,t),cp,new P(a,o,l))}var pu=class{constructor(){this.b={},this.col=[],this.rng=xu(4242),this.inst={},this.canopy=[]}prop(e,t,n,i,r=0,a=1,o={}){let l=Et.parts[e];if(!l)return null;let c=Array.isArray(a)?a[0]:a,h=Array.isArray(a)?a[1]:a,u=Array.isArray(a)?a[2]:a,d=e+"|"+Math.floor((t+200)/48)+"|"+Math.floor((i+200)/48)+(o.shadow===!1?"|n":"");if((this.inst[d]||(this.inst[d]={name:e,shadow:o.shadow!==!1,list:[]})).list.push({m:Jt(t,n,i,0,r,0,c,h,u),tint:o.tint}),o.col){let f=l.box,p=Math.abs(Math.cos(r)),y=Math.abs(Math.sin(r)),g=o.shrink??1,m=(Math.max(Math.abs(f.min.x),Math.abs(f.max.x))*c*p+Math.max(Math.abs(f.min.z),Math.abs(f.max.z))*u*y)*g,x=(Math.max(Math.abs(f.min.x),Math.abs(f.max.x))*c*y+Math.max(Math.abs(f.min.z),Math.abs(f.max.z))*u*p)*g;this.collider(t-m,n,i-x,t+m,n+f.max.y*h*(o.shrinkY??1),i+x,o)}return l}buf(e){return this.b[e]||(this.b[e]={p:[],n:[],u:[],c:[]})}color(e,t){let n=new Me(e),i=t===0?1:1+(this.rng()-.5)*(t??.14);return[n.r*i,n.g*i,n.b*i]}box(e,t,n,i,r,a,o,l,c={}){let h=this.buf(e),u=this.color(t,c.tint),d=$y[e],f=a/2,p=o/2,y=l/2,g=Math.cos(c.rot||0),m=Math.sin(c.rot||0),x=i+p,S=this.rng()*7,v=this.rng()*7;for(let[b,E,_]of Jy){let M=H=>Math.abs(H[0])*f+Math.abs(H[1])*p+Math.abs(H[2])*y,I=M(b),R=M(E),D=M(_),O=(H,L)=>{let F=b[0]*I+E[0]*R*H+_[0]*D*L,G=b[1]*I+E[1]*R*H+_[1]*D*L,B=b[2]*I+E[2]*R*H+_[2]*D*L;h.p.push(n+F*g+B*m,x+G,r-F*m+B*g),h.n.push(b[0]*g+b[2]*m,b[1],-b[0]*m+b[2]*g),h.u.push(H*R/d+S,L*D/d+v),h.c.push(u[0],u[1],u[2])};O(-1,-1),O(1,-1),O(1,1),O(-1,-1),O(1,1),O(-1,1)}if(c.col!==!1){let b=Math.abs(g)*f+Math.abs(m)*y,E=Math.abs(m)*f+Math.abs(g)*y;this.collider(n-b,i,r-E,n+b,i+o,r+E,c)}return this}collider(e,t,n,i,r,a,o={}){this.col.push({x0:e,x1:i,y0:t,y1:r,z0:n,z1:a,solid:o.solid!==!1,sight:o.sight!==!1,bullet:o.bullet!==!1,walk:!!o.walk,nocover:!!o.nocover})}geo(e,t,n,i,r={}){let a=this.buf(e),o=this.color(t,r.tint);if(n.index){let d=n.toNonIndexed();n.dispose(),n=d}n.applyMatrix4(i);let l=n.attributes.position.array,c=n.attributes.normal.array,h=n.attributes.uv&&n.attributes.uv.array,u=r.uv||1;for(let d=0;d<l.length/3;d++)a.p.push(l[d*3],l[d*3+1],l[d*3+2]),a.n.push(c[d*3],c[d*3+1],c[d*3+2]),a.u.push(h?h[d*2]*u:0,h?h[d*2+1]*u:0),a.c.push(o[0],o[1],o[2]);n.dispose()}finish(e){let t=[];for(let r in this.b){let a=this.b[r],o=new at;o.setAttribute("position",new Ye(a.p,3)),o.setAttribute("normal",new Ye(a.n,3)),o.setAttribute("uv",new Ye(a.u,2)),o.setAttribute("color",new Ye(a.c,3));let l;r==="emis"?l=new ot({vertexColors:!0}):r==="fence"?l=new Rn({map:lp("fence"),vertexColors:!0,alphaTest:.5,side:Vt}):l=new Rn({map:r==="plain"?null:lp(r),vertexColors:!0});let c=new Ge(o,l);c.castShadow=r!=="emis"&&r!=="fence",c.receiveShadow=r!=="emis",c.frustumCulled=!1,e.add(c),t.push(c)}let n=new Me(1,1,1),i=new Me;for(let r in this.inst){let a=this.inst[r];for(let o of Et.parts[a.name].parts){let l=new jn(o.geo,o.mat,a.list.length);a.list.forEach((c,h)=>{l.setMatrixAt(h,c.m),l.setColorAt(h,c.tint?i.setHex(c.tint):n)}),l.castShadow=a.shadow&&!o.leaf,l.receiveShadow=!o.leaf,l.userData.detail=/grass|fern/.test(a.name),l.computeBoundingSphere(),l.userData.shared=!0,e.add(l),t.push(l)}}if(this.canopy.length){let r=new jn(new xs(1,1,7),new ot({colorWrite:!1,depthWrite:!1}),this.canopy.length);this.canopy.forEach((a,o)=>r.setMatrixAt(o,a)),r.castShadow=!0,r.frustumCulled=!1,e.add(r),t.push(r)}return t}};function Nn(s,e,t,n,i,r,a,o,l){i===0&&(i=1e-9),r===0&&(r=1e-9),a===0&&(a=1e-9);let c=1/i,h=1/r,u=1/a,d=o,f=null,p=0;for(let m=0;m<s.length;m++){let x=s[m];if(!x[l])continue;let S=(x.x0-e)*c,v=(x.x1-e)*c,b=S<v?S:v,E=S<v?v:S,_=0;S=(x.y0-t)*h,v=(x.y1-t)*h;let M=S<v?S:v,I=S<v?v:S;M>b&&(b=M,_=1),I<E&&(E=I),!(E<b)&&(S=(x.z0-n)*u,v=(x.z1-n)*u,M=S<v?S:v,I=S<v?v:S,M>b&&(b=M,_=2),I<E&&(E=I),!(E<b||b<0||b>=d)&&(d=b,f=x,p=_))}if(!f)return null;let y=p===0?i:p===1?r:a,g=y>0?-1:1;return{d,c:f,nx:p===0?g:0,ny:p===1?g:0,nz:p===2?g:0}}var jy=[1,-1,0,0,1,1,-1,-1],Qy=[0,0,1,-1,1,-1,1,-1],mu=class{constructor(e,t){this.x0=t.x0,this.z0=t.z0,this.w=Math.ceil(t.x1-t.x0),this.h=Math.ceil(t.z1-t.z0);let n=this.w*this.h,i=.42,r=this.w;this.blk=new Uint8Array(n),this.ht=new Float32Array(n),this.gs=new Float32Array(n),this.pa=new Int32Array(n),this.st=new Uint32Array(n),this.cl=new Uint32Array(n),this.via=new Array(n),this.stamp=0,this.hk=[],this.hv=[],this.links=new Map;let a=(o,l,c,h)=>[Math.max(0,Math.ceil(o-c-.5)),Math.min(h-1,Math.floor(l-c-.5))];for(let o of e){if(!o.walk)continue;let[l,c]=a(o.x0+.05,o.x1-.05,this.x0,r),[h,u]=a(o.z0+.05,o.z1-.05,this.z0,this.h);for(let d=h;d<=u;d++)for(let f=l;f<=c;f++)o.y1>this.ht[d*r+f]&&(this.ht[d*r+f]=o.y1)}for(let o of e){if(!o.solid)continue;let[l,c]=a(o.x0-i,o.x1+i,this.x0,r),[h,u]=a(o.z0-i,o.z1+i,this.z0,this.h);for(let d=h;d<=u;d++)for(let f=l;f<=c;f++){let p=this.ht[d*r+f];o.y1>p+.55&&o.y0<p+1.5&&(this.blk[d*r+f]=1)}}this.buildLinks(e,i)}addLink(e,t,n,i,r){this.links.has(e)||this.links.set(e,[]),this.links.get(e).push({to:t,type:n,h:i,cost:r})}buildLinks(e,t){let n=this.w,i=(a,o)=>a>=0&&o>=0&&a<n&&o<this.h&&!this.blk[o*n+a],r=(a,o,l)=>{let c=this.center(a),h=this.center(o),u=h.x-c.x,d=h.z-c.z,f=Math.hypot(u,d);return!Nn(e,c.x,l,c.z,u/f,0,d/f,f,"solid")};for(let a of e){if(!a.solid)continue;let o=!a.walk&&a.y0<.3&&a.y1>=.45&&a.y1<=1.2,l=a.walk&&a.y1>=.6&&a.y1<=1.3&&Math.min(a.x1-a.x0,a.z1-a.z0)>=2;if(!(!o&&!l))for(let c of[0,1]){let h=c?a.z0:a.x0,u=c?a.z1:a.x1,d=c?this.z0:this.x0,f=c?a.x0:a.z0,p=c?a.x1:a.z1,y=c?this.x0:this.z0,g=Math.floor(h-t-d-.5),m=Math.ceil(u+t-d-.5),x=Math.ceil(f+.15-y-.5),S=Math.floor(p-.15-y-.5),v=(E,_)=>c?E*n+_:_*n+E,b=(E,_)=>c?i(_,E):i(E,_);for(let E=x;E<=S;E++){if(o&&u-h<=1.4&&b(g,E)&&b(m,E)){let _=v(g,E),M=v(m,E);if(Math.abs(this.ht[_]-this.ht[M])<.3&&r(_,M,a.y1+.35)&&r(_,M,a.y1+1.3)){let I=m-g+2.2;this.addLink(_,M,"vault",a.y1,I),this.addLink(M,_,"vault",a.y1,I)}}if(l)for(let[_,M]of[[g,Math.ceil(h+.05-d-.5)],[m,Math.floor(u-.05-d-.5)]]){if(!b(_,E)||!b(M,E))continue;let I=v(_,E),R=v(M,E),D=this.ht[R]-this.ht[I];Math.abs(this.ht[R]-a.y1)>.05||D<.6||D>1.3||!r(I,R,a.y1+.4)||!r(I,R,a.y1+1.4)||(this.addLink(I,R,"climb",a.y1,3.6),this.addLink(R,I,"drop",a.y1,2.6))}}}}}idx(e,t){let n=Math.floor(e-this.x0),i=Math.floor(t-this.z0);return n<0||i<0||n>=this.w||i>=this.h?-1:i*this.w+n}blocked(e,t){let n=this.idx(e,t);return n<0||this.blk[n]===1}height(e,t){let n=this.idx(e,t);return n<0?0:this.ht[n]}center(e){return{x:this.x0+e%this.w+.5,z:this.z0+(e/this.w|0)+.5,y:this.ht[e]}}snap(e,t){let n=this.idx(e,t);return n<0||this.blk[n]?null:this.center(n)}near(e,t){let n=this.idx(e,t);if(n>=0&&!this.blk[n])return n;let i=-1,r=1e9;for(let a=1;a<=8&&i<0;a++)for(let o=-a;o<=a;o++)for(let l=-a;l<=a;l++){if(Math.max(Math.abs(o),Math.abs(l))!==a)continue;let c=this.idx(e+o,t+l);if(c>=0&&!this.blk[c]){let h=o*o+l*l;h<r&&(r=h,i=c)}}return i}nearest(e,t){let n=this.near(e,t);return n<0?null:this.center(n)}line(e,t){let n=t.x-e.x,i=t.z-e.z,r=Math.hypot(n,i);if(r<.01)return!0;let a=Math.ceil(r/.35),o=-i/r*.3,l=n/r*.3,c=this.height(e.x,e.z);for(let h=0;h<=a;h++){let u=e.x+n*h/a,d=e.z+i*h/a;if(this.blocked(u,d)||this.blocked(u+o,d+l)||this.blocked(u-o,d-l))return!1;let f=this.height(u,d);if(Math.abs(f-c)>.56||Math.abs(this.height(u+o,d+l)-f)>.56||Math.abs(this.height(u-o,d-l)-f)>.56)return!1;c=f}return!0}path(e,t,n,i,r=1e9){let a=this.near(e,t),o=this.near(n,i);if(a<0||o<0)return null;let l=this.w,c=this.h,h=this.blk,u=this.gs,d=this.pa,f=this.st,p=this.cl,y=this.ht,g=this.via,m=++this.stamp,x=this.hk,S=this.hv;x.length=S.length=0;let v=o%l,b=o/l|0,E=F=>{let G=Math.abs(F%l-v),B=Math.abs((F/l|0)-b);return G+B-.586*Math.min(G,B)},_=(F,G)=>{let B=x.length;for(x.push(F),S.push(G);B>0;){let ee=B-1>>1;if(x[ee]<=F)break;x[B]=x[ee],S[B]=S[ee],B=ee}x[B]=F,S[B]=G},M=()=>{let F=S[0],G=x.pop(),B=S.pop(),ee=x.length;if(ee){let X=0;for(;;){let Y=X*2+1;if(Y>=ee||(Y+1<ee&&x[Y+1]<x[Y]&&Y++,x[Y]>=G))break;x[X]=x[Y],S[X]=S[Y],X=Y}x[X]=G,S[X]=B}return F},I=(F,G,B,ee)=>{f[G]===m&&B>=u[G]||(f[G]=m,u[G]=B,d[G]=F,g[G]=ee,_(B+E(G),G))};u[a]=0,d[a]=-1,f[a]=m,g[a]=null,_(E(a),a);let R=0,D=a===o;for(;x.length&&!D;){let F=M();if(F===o){D=!0;break}if(p[F]===m)continue;if(p[F]=m,++R>14e3||u[F]>r)return null;let G=F%l,B=F/l|0,ee=y[F];for(let Y=0;Y<8;Y++){let te=G+jy[Y],_e=B+Qy[Y];if(te<0||_e<0||te>=l||_e>=c)continue;let Se=_e*l+te;h[Se]||Math.abs(y[Se]-ee)>.56||Y>3&&(h[B*l+te]||h[_e*l+G])||I(F,Se,u[F]+(Y>3?1.414:1),null)}let X=this.links.get(F);if(X)for(let Y of X)I(F,Y.to,u[F]+Y.cost,Y)}if(!D)return null;let O=[];for(let F=o;F!==-1;F=d[F]){let G=this.center(F);g[F]&&(G.link=g[F]),O.push(G)}if(O.reverse(),this.idx(n,i)===o&&(O[O.length-1].x=n,O[O.length-1].z=i),O.length<2)return O;let H=[],L=0;for(;L<O.length-1;){if(O[L+1].link){H.push(O[L+1]),L++;continue}let F=Math.min(O.length-1,L+40);for(let G=L+1;G<=F;G++)if(O[G].link){F=G-1;break}for(;F>L+1&&!this.line(O[L],O[F]);)F--;H.push(O[F]),L=F}return H.cost=u[o],H}};function ev(s,e){let t=[],n=(i,r,a,o=.27)=>{for(let l of s)if(l.solid&&l.y1>a+.5&&l.y0<a+1.6&&i+o>l.x0&&i-o<l.x1&&r+o>l.z0&&r-o<l.z1)return!1;return!0};for(let i of s){if(!i.solid||!i.sight||!i.bullet||i.walk||i.nocover)continue;let r=i.x1-i.x0,a=i.z1-i.z0,o=(i.x0+i.x1)/2,l=(i.z0+i.z1)/2;if(!(Math.max(r,a)<.8||Math.max(r,a)>70))for(let[c,h]of[[1,0],[-1,0],[0,1],[0,-1]]){let u=c?a:r,d=c?0:1,f=c?1:0,p=o+c*r/2,y=l+h*a/2,g=u<=.95?[[0,[1,-1]]]:[[u/2-.3,[1]],[-(u/2-.3),[-1]]];if(u>3.2)for(let m=-(u/2)+1.6;m<u/2-1.5;m+=1.7)g.push([m,[]]);for(let[m,x]of g){let S=p+c*.48+d*m,v=y+h*.48+f*m;if(e.idx(S,v)<0)continue;let b=e.height(S,v),E=i.y1-b;if(E<.85||i.y0>b+.45||!n(S,v,b))continue;let _=E>=1.6,M=e.nearest(S,v);if(!M||Math.hypot(M.x-S,M.z-v)>1.5||Math.abs(M.y-b)>.3||!n((S+M.x)/2,(v+M.z)/2,b,.2))continue;let I=x.filter(R=>n(S+d*R*.62,v+f*R*.62,b,.18)&&n(S+d*R*.62-c*.5,v+f*R*.62-h*.5,b,.12));!I.length&&_||t.push({x:S,z:v,y:b,nx:c,nz:h,tx:d,tz:f,sides:I,over:!_,high:_,cell:M,id:t.length,user:null})}}}return t}function Zt(s,e,t,n,i,r,a,o,l=[],c=.3,h={}){let u=i===a,d=u?n:i,f=u?r:a,p=(g,m,x,S)=>{if(m-g<.02||S-x<.02)return;let v=(g+m)/2,b=m-g;u?s.box(e,t,v,x,i,b,S-x,c,h):s.box(e,t,n,x,v,c,S-x,b,h)},y=d-c/2;for(let g of[...l].sort((m,x)=>m.a-x.a))p(y,g.a,0,o),g.sill&&p(g.a,g.b,0,g.sill),p(g.a,g.b,g.top??2.3,o),y=g.b;p(y,f+c/2,0,o)}function gu(s,e,t,n,i,r,a,o,l={},c=.3){Zt(s,e,t,n,i,r,i,o,l.n,c),Zt(s,e,t,n,a,r,a,o,l.s,c),Zt(s,e,t,n,i,n,a,o,l.w,c),Zt(s,e,t,r,i,r,a,o,l.e,c)}function bt(s,e,t,n=1,i=0,r=6114356){s.box("wood",r,e,i,t,n,n,n,{rot:0})}function qn(s,e,t,n=4872776){if(s.prop("barrel",e,0,t,s.rng()*6,.92,{tint:n===4872776?9083520:16777215}))return s.collider(e-.33,0,t-.33,e+.33,1.05,t+.33);s.geo("metal",n,new Mt(.33,.33,1,10),Jt(e,.5,t)),s.collider(e-.33,0,t-.33,e+.33,1,t+.33)}function wr(s,e,t,n,i){let r=i?n:.75,a=i?.75:n;s.box("plain",6971462,e,0,t,r,.7,a,{col:!1}),s.box("plain",6248255,e,.7,t,r*.96,.35,a*.7,{col:!1}),s.collider(e-r/2,0,t-a/2,e+r/2,1.05,t+a/2)}function tv(s,e,t,n,i,r=1){let a=n?6.1:2.5,o=n?2.5:6.1;for(let l=0;l<r;l++){let c=l?.15:0;s.prop((i>>4)%2?"container_red":"container_green",e+c,l*2.6-.04,t,n?0:Math.PI/2,[6.1/5.71,1,2.5/2.56],{tint:[11580600,9344152,10789016][(i>>8)%3]})?s.collider(e+c-a/2,l*2.6,t-o/2,e+c+a/2,l*2.6+2.6,t+o/2):s.box("metal",i,e+c,l*2.6,t,a,2.6,o,{tint:.2})}}function ql(s,e,t,n,i=4015410,r=5198656){let a=Math.cos(n),o=Math.sin(n),l=(p,y)=>[e+p*a+y*o,t-p*o+y*a],c=Math.abs(a)*1.3+Math.abs(o)*3.3,h=Math.abs(o)*1.3+Math.abs(a)*3.3,[u,d]=l(0,-.5);if(s.collider(u-c,0,d-h,u+c,2.9,d+h),s.prop("vehicle_truck",e,0,t,n,1.18,{tint:i===4015410?6186576:7370108}))return;let f=(p,y,g,m,x,S,v,b)=>{let[E,_]=l(g,x);s.box(p,y,E,m,_,S,v,b,{rot:n,col:!1})};f("plain",1842463,0,.55,0,1.2,.35,6.2),f("plain",i,0,.9,-2.3,2.3,1.75,1.7),f("plain",i,0,.9,-3.5,2.1,.9,.9),f("plain",i,0,.95,1,2.4,.25,4.3),f("plain",r,0,1.2,1,2.3,1.6,4.2)}var up=["pine_1","pine_2"];function dp(s,e,t,n=!0){let i=s.rng,r=7+i()*5,a=.2+i()*.16;if(Et.parts.pine_1){let o=n?up[Math.floor(i()*up.length)]:"pine_2",l=1.25+i()*.55;s.prop(o,e,-.1,t,i()*6.283,l,{shadow:n,tint:[6057058,5399130,4872272][Math.floor(i()*3)]}),n&&s.canopy.push(Jt(e,4.6*l,t,0,0,0,2.3*l,5.2*l,2.3*l)),n&&s.collider(e-.3,0,t-.3,e+.3,6,t+.3);return}s.geo("wood",3483935,new Mt(a*.55,a,r,6),Jt(e,r/2,t),{uv:2}),n&&s.collider(e-a,0,t-a,e+a,r,t+a);for(let o=0;o<3;o++){let l=r*.34+o*r*.22,c=(2.5-o*.65)*(.8+i()*.4);s.geo("grass",1781020,new xs(c,r*.36,7),Jt(e,l+r*.18,t,0,i()*6,0),{uv:3})}}function fu(s,e,t,n,i=!0){let r=s.rng,a=n*(.8+r()*.5),o=n*(.6+r()*.5),l=n*(.8+r()*.5);if(Et.parts.rock_medium_1){let c="rock_medium_"+(1+Math.floor(r()*3)),h=Et.parts[c].box,u=2/(h.max.x-h.min.x),d=Math.floor(r()*4)*Math.PI/2;s.prop(c,e,-.12*o,t,d,[a*u,o*.95/h.max.y,l*u],{tint:8028294}),i&&s.collider(e-a*.78,0,t-l*.78,e+a*.78,o*.9,t+l*.78);return}s.geo("concrete",4672332,new fa(1,0),Jt(e,o*.3,t,r()*3,r()*3,r()*3,a,o,l),{uv:2}),i&&s.collider(e-a*.72,0,t-l*.72,e+a*.72,o*.95,t+l*.72)}function nv(s,e,t){let n=s.rng;if(!s.prop("bush_common",e,-.05,t,n()*6.283,[.85+n()*.3,.8+n()*.25,.85+n()*.3],{shadow:!1,tint:6977122}))for(let i=0;i<3;i++)s.geo("grass",2241823,new pa(.65+n()*.35,0),Jt(e+(n()-.5)*.9,.5+n()*.3,t+(n()-.5)*.9,n()*3,n()*3,0),{uv:2});s.collider(e-.8,0,t-.8,e+.8,1.3,t+.8,{solid:!1,bullet:!1})}function Qi(s,e,t,n,i,r,a,o,l){let c=new cn(t,n,i,1.6);return c.position.set(r,a,o),e.add(c),l&&s.dyn.push({l:c,base:n,kind:l}),c}function iv(s,e,t){let n=s.rng;s.box("grass",3095847,0,-1,0,180,1,180,{col:!1,tint:0});let i=[[-6,62],[-8,36],[0,18],[0,2]];for(let u=0;u<i.length-1;u++){let[d,f]=i[u],[p,y]=i[u+1],g=p-d,m=y-f;s.box("dirt",4800048,(d+p)/2,0,(f+y)/2,3.6,.02+u*.004,Math.hypot(g,m)+2,{rot:Math.atan2(g,m),col:!1,tint:0})}s.box("dirt",4602927,0,0,-12,37,.015,31,{col:!1,tint:0});let r={sight:!1,bullet:!1},a=(u,d,f,p,y)=>{Zt(s,"fence",9080982,u,d,f,p,2.4,y.map(x=>({...x,top:99})),.1,r);let g=d===p,m=Math.round((g?f-u:p-d)/3.7);for(let x=0;x<=m;x++){let S=(g?u:d)+(g?f-u:p-d)*x/m;y.some(v=>S>v.a-.2&&S<v.b+.2)||s.box("plain",3948612,g?S:u,0,g?d:S,.12,2.5,.12,{col:!1})}};a(-18.5,3.5,18.5,3.5,[{a:-3,b:3}]),a(-18.5,-27.5,18.5,-27.5,[{a:-14,b:-10}]),a(-18.5,-27.5,-18.5,3.5,[{a:-8,b:-5}]),a(18.5,-27.5,18.5,3.5,[{a:-14,b:-10}]),gu(s,"wood",4931635,-14.5,-24.5,-5.5,-16.5,3,{s:[{a:-11,b:-9}],w:[{a:-22,b:-20}],e:[{a:-21.5,b:-19.5,sill:1,top:2.1}]}),s.box("metal",3422774,-10,3,-20.5,9.8,.18,8.8),s.box("wood",4011049,-10,0,-20.5,9,.04,8,{col:!1}),s.box("wood",5917238,-7.3,0,-23.3,2,.8,.9),s.box("wood",4470824,-12.6,0,-23.7,2.2,1.9,.5),s.box("emis",16767392,-10,2.78,-20.5,.25,.06,.25,{col:!1,tint:0}),Qi(e,t,16763274,14,13,-10,2.5,-20.5),gu(s,"wood",4538938,5.5,-24.5,15.5,-17.5,3,{s:[{a:9,b:11}],e:[{a:-22,b:-20}],w:[{a:-22.5,b:-20.5,sill:1,top:2.1}]}),s.box("metal",3422774,10.5,3,-21,10.8,.18,7.8),s.box("plain",4475448,7,0,-23.4,.95,.6,2),s.box("plain",4475448,14.2,0,-19.2,.95,.6,2),s.box("emis",12593696,7.5,1.3,-17.3,.3,.4,.06,{col:!1,tint:0});for(let[u,d]of[[-1.4,-1.4],[1.4,-1.4],[-1.4,1.4],[1.4,1.4]])s.box("wood",4142376,14+u,0,-1+d,.25,5,.25),s.box("wood",4142376,14+u,5.2,-1+d,.12,2,.12,{col:!1});s.box("wood",4865582,14,5,-1,3.4,.2,3.4),s.box("metal",3422774,14,7.2,-1,3.9,.15,3.9);for(let u of[-1,1])s.box("wood",4865582,14+u*1.65,5.2,-1,.08,.9,3.4,{col:!1}),s.box("wood",4865582,14,5.2,-1+u*1.65,3.4,.9,.08,{col:!1});s.box("emis",16773320,12.5,5.9,.6,.3,.3,.3,{col:!1,tint:0});let o=new _s(16771520,500,60,.42,.6,1.5);o.position.set(12.5,6,.6),o.target.position.set(1,0,11),t.add(o,o.target),ql(s,-9,-6,0),ql(s,5,-10.5,Math.PI/2),bt(s,-2,-20.5,1.2),bt(s,-.8,-21.6,1),bt(s,-2,-20.5,.8,1.2),bt(s,10,-12,1.2),bt(s,11.3,-12.3,1),bt(s,-15,-1,1.2),bt(s,-15,-2.4,1),bt(s,15.5,-8,1.1),wr(s,-5.5,6,3.4,!0),wr(s,5.5,6,3.4,!0),wr(s,-3,-13,3,!1),wr(s,9,.5,3,!0),qn(s,1,-22.5),qn(s,1.8,-22.9,5914676),qn(s,-16.5,-12),qn(s,16.5,-24.5),s.box("metal",4936008,2.5,0,-16,1.8,1.2,1),s.box("plain",2895665,3.6,0,-16,.1,3.6,.1,{col:!1}),s.box("emis",16769192,3.6,3.6,-16,.3,.12,.3,{col:!1,tint:0}),Qi(e,t,16766106,30,20,3.6,3.4,-16),s.box("plain",2895665,-16,0,-25,.12,9,.12,{col:!1}),Zt(s,"concrete",5790295,-42.5,4.5,-34.5,4.5,2.6,[{a:-39,b:-37,top:99}]),Zt(s,"concrete",5790295,-42.5,4.5,-42.5,11.5,1.4),Zt(s,"concrete",5790295,-34.5,4.5,-34.5,9.5,2.6,[{a:6,b:7.5,sill:1,top:2}]),Zt(s,"concrete",5790295,-42.5,11.5,-39.5,11.5,2.2),fu(s,-36,11,.8,!1),fu(s,-40.5,2.5,.7,!1),bt(s,-41,9.8,1);for(let[u,d,f]of[[32.5,17.5,.9],[38.5,15.5,.4]])s.geo("plain",5001019,new Mt(.05,2,1.9,4),Jt(u,.95,d,0,f,0)),s.collider(u-1.2,0,d-1.2,u+1.2,1.9,d+1.2);s.geo("wood",2760729,new Mt(.12,.12,1,6),Jt(35,.12,12,0,.5,Math.PI/2)),s.geo("wood",2760729,new Mt(.12,.12,1,6),Jt(35,.14,12,0,2.1,Math.PI/2)),s.geo("emis",16747056,new xs(.22,.5,5),Jt(35,.4,12),{tint:0}),Qi(e,t,16747066,26,16,35,.9,12,"fire"),s.geo("wood",3483935,new Mt(.3,.3,2.6,7),Jt(33,.3,10.5,0,.3,Math.PI/2)),s.collider(31.8,0,10.1,34.2,.6,10.9),bt(s,37.5,11,.9),s.box("dirt",4866099,44,0,-46,9,.02,9,{col:!1,tint:0}),bt(s,48,-50,1.1),bt(s,40,-50.5,.9);let l=[[-6.6,54,5],[-38,8,7.5],[35,14,7.5],[44,-46,7]],c=(u,d,f=0)=>{if(u>-21-f&&u<21+f&&d>-30-f&&d<6+f)return!1;for(let[p,y,g]of l)if(Math.hypot(u-p,d-y)<g+f)return!1;for(let p=0;p<i.length-1;p++){let[y,g]=i[p],[m,x]=i[p+1],S=m-y,v=x-g,b=Math.max(0,Math.min(1,((u-y)*S+(d-g)*v)/(S*S+v*v)));if(Math.hypot(u-y-S*b,d-g-v*b)<3+f)return!1}return!0},h=[];for(let u=0;u<900&&h.length<150;u++){let d=(n()-.5)*114,f=(n()-.5)*114;!c(d,f)||h.some(p=>Math.hypot(p[0]-d,p[1]-f)<3.4)||(h.push([d,f]),dp(s,d,f))}for(let u=0;u<46;u++){let d=u/46*6.283,f=60+n()*9,p=Math.cos(d),y=Math.sin(d),g=f/Math.max(Math.abs(p),Math.abs(y));dp(s,p*g,y*g,!1)}for(let u=0,d=0;u<200&&d<24;u++){let f=(n()-.5)*108,p=(n()-.5)*108;c(f,p,1)&&(fu(s,f,p,1+n()*1.3),d++)}for(let u=0,d=0;u<200&&d<10;u++){let f=(n()-.5)*100,p=(n()-.5)*100;if(!c(f,p,2))continue;let y=n()*3.14,g=4+n()*2;s.geo("wood",3155228,new Mt(.36,.42,g,7),Jt(f,.36,p,0,y,Math.PI/2),{uv:2});let m=Math.abs(Math.cos(y))*g/2+.3,x=Math.abs(Math.sin(y))*g/2+.3;s.collider(f-m,0,p-x,f+m,.75,p+x),d++}for(let u=0,d=0;u<300&&d<55;u++){let f=(n()-.5)*110,p=(n()-.5)*110;c(f,p,.5)&&(nv(s,f,p),d++)}for(let u=0;u<520;u++){let d=(n()-.5)*112,f=(n()-.5)*112;c(d,f,-1.5)&&s.prop("grass_common_short",d,0,f,n()*6.283,[.7+n()*.6,.35+n()*.3,.7+n()*.6],{shadow:!1,tint:5267530})}for(let u=0;u<110;u++){let d=(n()-.5)*108,f=(n()-.5)*108;c(d,f,0)&&s.prop("fern_1",d,0,f,n()*6.283,.09+n()*.05,{shadow:!1,tint:5925458})}s.prop("watertower",15.5,0,-13.5,0,.85,{tint:9080724})&&s.collider(14.4,0,-14.6,16.6,8,-12.4),s.prop("wheels_stack",-16.8,0,-16,.4,1.5,{col:!0,shrink:.9}),s.prop("wheels_stack",12.5,0,-15.8,1.2,1.5,{col:!0,shrink:.9}),s.prop("pallet",-2,0,-20.5,0,1.4,{}),s.prop("pallet",10.5,0,-12.1,.2,1.7,{}),s.prop("trafficbarrier_1",-1.9,0,9.5,.15,1,{col:!0,shrink:.85,sight:!1,bullet:!1}),s.prop("trafficbarrier_1",2.2,0,12.5,-.1,1,{col:!0,shrink:.85,sight:!1,bullet:!1});for(let[u,d,f,p]of[[-59,-59,59,-58],[-59,58,59,59],[-59,-59,-58,59],[58,-59,59,59]])s.collider(u,0,d,f,12,p,{sight:!1});return{name:"FOREST OUTPOST",bounds:{x0:-60,x1:60,z0:-60,z1:60},spawn:{x:-6.6,z:54,yaw:0},env:{fog:[659479,.021],bg:461586,hemi:[8427200,1844246,1.9],moon:[10795494,2.6,[-35,60,30]],viewRange:40,detect:.75,shotMul:1,amb:"forest"},objective:{pos:[-7.3,.8,-23.3],kind:"intel",hold:0,prompt:"Take intelligence package",text:"Locate the intelligence package in the outpost command hut",done:"INTEL SECURED"},extraction:{pos:[44,0,-46],text:"Reach the extraction flare in the north-east clearing"},routes:[{p:[[-3,-3],[-3,-14],[8,-14],[8,-3]],must:1},{p:[[0,7],[3.5,8]]},{p:[[-22,2],[-22,-29],[-10,-31]]},{p:[[22,-26],[22,2],[12,8]]},{p:[[-8,20],[-8,12],[1,10]]},{p:[[-36,9],[-39,2],[-32,2]]},{p:[[34,9],[39,11],[30,13]]},{p:[[10,-36],[30,-40],[36,-30],[20,-31]]},{p:[[-9,-14],[-3,-18]],must:1},{p:[[25,35],[40,30],[30,23]]}],posts:{objective:[[-9.5,-14.5],[-16.5,-21],[-10,-20.5],[-3.5,-19]],entrance:[[-4.5,1.5,"south gate"],[16,-12,"east breach"],[-12,-25.6,"north-west gap"],[-16.5,-6.5,"west gap"],[12,2,"watchtower"]]},panel:{x:7.5,z:-16.4,face:[0,-1],n:"barracks alarm"},guards:10,reinforce:[{x:-30,z:-55,n:"north treeline"},{x:-54,z:-18,n:"western treeline"},{x:-44,z:46,n:"south-west treeline"}],pickups:[["med",12.6,-23.6],["med",36.6,16.4],["ammo",-40,6.5],["ammo",-1,-19]]}}function sv(s,e,t){let n=s.rng,i=8,r=5660006,a=6579807;s.box("concrete",3684667,0,-1,0,120,1,80,{col:!1,tint:0}),s.box("concrete",5921886,-7.5,0,0,56,.02,51,{col:!1,tint:0}),gu(s,"concrete",5264213,-47.5,-31.5,47.5,31.5,3.6,{},.4),s.box("metal",3422784,47.2,0,0,.15,3.2,7,{col:!1}),Zt(s,"metal",r,-35.5,-25.5,20.5,-25.5,i,[{a:4,b:6,top:2.4}],.4),Zt(s,"metal",r,-35.5,25.5,20.5,25.5,i,[{a:-8,b:-6,top:2.4}],.4),Zt(s,"metal",r,-35.5,-25.5,-35.5,25.5,i,[{a:-1,b:1,top:2.4}],.4),Zt(s,"metal",r,20.5,-25.5,20.5,25.5,i,[{a:-13,b:-7,top:4.6},{a:7,b:13,top:4.6}],.4),s.box("metal",2895926,-7.5,i,0,57,.3,52);for(let c=-31;c<=17;c+=8)s.box("plain",2303530,c,7.3,0,.25,.5,51,{col:!1});Zt(s,"concrete",a,-20.5,-25.5,-20.5,-12.5,4,[{a:-20,b:-18}]),Zt(s,"concrete",a,-35.5,-12.5,-20.5,-12.5,4,[{a:-29,b:-27},{a:-25,b:-22.5,sill:1,top:2.2}]),s.box("concrete",5592922,-28,4,-19,15.3,.25,13.3),bt(s,-24,-16,1.2,4.25),bt(s,-30,-21,1,4.25,5200456),s.box("metal",4080714,-34.3,0,-22,1,.8,2.4);for(let c=-33;c<=-24;c+=1.5)s.box("plain",1382170,c,0,-24.7,.9,2.1,.8),s.box("emis",n()<.5?3735418:16756784,c-.2,1.5+n()*.3,-24.28,.06,.03,.02,{col:!1,tint:0});s.box("metal",4541008,-26.5,0,-18,2.2,.8,1.1),Zt(s,"concrete",a,-35.5,10.5,-20.5,10.5,i,[{a:-29,b:-27,top:2.6}]),Zt(s,"concrete",a,-20.5,10.5,-20.5,25.5,i,[{a:17,b:19,top:2.6}]),s.box("metal",4477515,-31.5,0,19,3,2.6,5.5),s.box("metal",3819072,-31.5,2.6,19,1.6,1.2,2,{col:!1}),s.geo("metal",5919558,new Mt(1.2,1.2,3.4,12),Jt(-24.5,1.7,22.5)),s.collider(-25.6,0,21.4,-23.4,3.4,23.6),s.box("metal",4477515,-25,0,13.2,2.6,1.5,1.4),s.box("emis",16750648,-25,1.1,13.92,.5,.2,.02,{col:!1,tint:0}),s.geo("metal",4869973,new Mt(.16,.16,14,8),Jt(-28,5.2,24.8,0,0,Math.PI/2));for(let c of[-15,-11,-7])for(let h of[-12,12]){for(let u of[h-7.9,h,h+7.9])for(let d of[-.55,.55])s.box("plain",3033706,c+d,0,u,.1,6.9,.1,{col:!1});for(let u of[.12,2.3,4.4,6.3])if(s.box("plain",9064998,c,u,h,1.25,.1,16,{col:!1}),!(u>6))for(let d=h-7.8;d<h+7.2;){let f=.9+n()*1.1,p=u<4?1.75+n()*.3:.6+n()*1.1;(u<4||n()<.7)&&s.box("wood",n()<.5?7232064:5525567,c,u+.1,d+f/2,1.05,p,f,{col:!1,tint:.3}),d+=f+(u<4?.04:.3)}s.collider(c-.62,0,h-8,c+.62,6.9,h+8)}let o=[4282730,7224372,4481098,8153660,5133144];[[6,-19,1,2],[14.5,-18,0,1],[8,-12,1,1],[3,-4,0,1],[11,0,1,2],[5,9,1,1],[13,15,0,2],[4,19.5,1,1],[30,-24,1,1],[36,-15,0,2],[31,8,1,1],[40,22,1,1],[26,-2,0,1]].forEach(([c,h,u,d],f)=>tv(s,c,h,!!u,o[f%5],d)),s.box("plain",9073696,-24,0,5,1.3,1.5,2.2),s.box("plain",1842463,-24,0,3.4,1.1,2.3,.15,{col:!1});for(let[c,h,u]of[[-31,-8,1.3],[-29.6,-8.2,1],[-31,-8,.9],[-30,6.5,1.2],[-3,22.5,1.2],[-1.6,22.8,1],[-2.5,-9,1.2],[17,-3,1.1],[9.5,5,1],[-18.5,-6,1.1],[-3,12,1.2]])bt(s,c,h,u,u===.9?1.3:0,n()<.5?6114356:5002304);qn(s,-22,-9.5,3493994),qn(s,-22.8,-8.8,6965812),qn(s,18.5,3,3493994),qn(s,-4,-23.5,6965812),qn(s,1,14,3493994),s.box("concrete",6316644,13.9,0,22.65,11.8,1,5.3,{walk:!0}),[[7.8,.83],[7.4,.67],[7,.5],[6.6,.33],[6.2,.17]].forEach(([c,h])=>s.box("concrete",5790300,c,0,22.5,.4,h,3,{walk:!0,tint:0}));for(let c=8.2;c<=19.6;c+=1.9)s.box("plain",9073696,c,1,20.08,.06,1,.06,{col:!1});s.box("plain",9073696,13.9,1.95,20.08,11.6,.06,.06,{col:!1}),s.box("plain",9073696,13.9,1.5,20.08,11.6,.04,.04,{col:!1}),bt(s,17.3,24.2,1.1,1),bt(s,11,24.4,1,1,5002304),bt(s,14.5,21,1,1),s.box("emis",12593696,-20.3,1.3,-15,.06,.4,.3,{col:!1,tint:0}),s.box("metal",3751492,-3,5,-24.3,32,.12,1.7);for(let c=-19;c<=13;c+=4)s.box("plain",2764081,c,0,-23.55,.12,5,.12,{col:!1}),s.box("plain",2764081,c,5.1,-23.5,.06,1,.06,{col:!1});s.box("plain",2764081,-3,6.05,-23.5,32,.06,.06,{col:!1}),s.geo("metal",6048314,new Mt(.22,.22,54,8),Jt(-7.5,6.6,24.6,0,0,Math.PI/2)),s.geo("metal",4805210,new Mt(.15,.15,50,8),Jt(-34.9,6.2,0,Math.PI/2,0,0));let l=(c,h,u,d,f,p,y)=>{s.box("plain",1710877,c,h+.1,u,.03,7.25-h,.03,{col:!1}),s.box("plain",2369322,c,h+.06,u,.7,.12,.7,{col:!1}),s.box("emis",d,c,h,u,.5,.06,.5,{col:!1,tint:0}),Qi(e,t,d,f,p,c,h-.3,u,y)};l(-3,6.2,0,16769712,95,26),l(9,6.2,-15,16769712,80,24,"flicker"),l(10,6.2,12,16769712,80,24),l(-13,6.2,-22.5,14674175,50,20),l(-27,6.2,-1,16769712,70,22),l(-13,6.2,22.5,14674175,36,18),s.box("emis",13624575,-28,3.94,-19,1.2,.04,.3,{col:!1,tint:0}),Qi(e,t,12375807,20,14,-28,3.5,-19),Qi(e,t,16751178,22,15,-28,4,17);for(let[c,h]of[[31,-11],[35,14]])s.box("plain",2764081,c,0,h,.18,6,.18),s.box("emis",16773328,c,5.9,h+.3,.3,.1,.5,{col:!1,tint:0}),Qi(e,t,16772300,70,26,c,5.6,h+.3);s.box("emis",16773328,-35.9,4.4,4,.1,.2,.5,{col:!1,tint:0}),Qi(e,t,16772300,40,20,-36.6,4.2,4),ql(s,27,19,Math.PI/2,3817286,3093304),ql(s,-43.5,-11,0,2895667,2895667),s.box("metal",3494202,-38,0,7.5,1.4,1.3,2.4),s.box("metal",3494202,-12,0,-30.2,2.4,1.3,1.4),s.box("metal",3494202,6,0,30.2,2.4,1.3,1.4),bt(s,-25,30.3,1.2),bt(s,14,-30.3,1.2),bt(s,-40,13,1.1),bt(s,44,-8,1.2),bt(s,23,-27,1.2),qn(s,22.5,14.5),qn(s,-45.5,10),wr(s,24.5,-10,3,!1),wr(s,24.5,10,3,!1);for(let[c,h,u]of[[33,2,0],[34.8,2.2,.1],[29,-17,1.57],[-39.5,-3,1.57],[-10,29.6,0],[10,-29.4,0],[-4,5.5,0],[-2.2,5.6,.05],[-4.5,-6,0]])s.prop("plasticbarrier",c,0,h,u,1.65,{col:!0,shrink:.9});for(let[c,h,u]of[[-18.6,7,0],[18.6,-20,0],[-33.5,24,1.57],[43,12,0],[-45.6,-3,0]])s.prop("pipes",c,0,h,u,1.5,{col:!0,shrink:.92});for(let[c,h]of[[-3.2,-12],[15,6.5],[-31.5,2],[38,-26],[-22.5,12.2]])s.prop("pallet",c,0,h,n()*.4,1.5,{}),s.prop("cinderblock",c-.2,.2,h,.2,1.6,{}),s.prop("cinderblock",c+.4,.2,h+.3,1.4,1.6,{});return s.prop("wheels_stack",22.3,0,-18.5,0,1.6,{col:!0,shrink:.9}),s.prop("wheels_stack",-46,0,14,.5,1.6,{col:!0,shrink:.9}),s.prop("wheels_stack",17.8,0,17,.9,1.6,{col:!0,shrink:.9}),s.prop("streetlights",31,0,-11,Math.PI/2,.92,{}),s.prop("streetlights",35,0,14,Math.PI/2,.92,{}),s.box("emis",1456672,-43,0,4,3.4,.03,3.4,{col:!1,tint:0}),{name:"INDUSTRIAL WAREHOUSE",bounds:{x0:-48,x1:48,z0:-32,z1:32},spawn:{x:44.5,z:27,yaw:Math.PI/2},env:{fog:[395275,.012],bg:329482,hemi:[5924480,1447964,.75],moon:[9414358,1.5,[30,60,-22]],viewRange:44,detect:1,shotMul:.85,amb:"warehouse"},objective:{pos:[-34.3,.8,-22],kind:"terminal",hold:3,prompt:"Hold to access secured terminal",text:"Access the secured terminal in the warehouse office",done:"DATA EXTRACTED"},extraction:{pos:[-43,0,4],text:"Exfiltrate through the west back lot"},routes:[{p:[[-18,0],[-2,0],[-2,-22],[-18,-22]]},{p:[[-18,2],[-18,22],[-3,20],[-2,3]]},{p:[[11,-22],[17.5,-22],[17.5,-9],[12,-6]]},{p:[[9,4],[17,10],[12,22.5],[18,22.5]]},{p:[[-28,-18],[-23.5,-15]],must:1},{p:[[-28,-8],[-28,5],[-23,-1]],must:1},{p:[[-28,14],[-23,18],[-28,23]]},{p:[[24,-20],[34,-20.5],[42,-9],[30,-6]]},{p:[[-30,-28.5],[15,-28.5]]},{p:[[-30,28.5],[2,28.5]]},{p:[[-41,-4],[-41,13],[-38,1]]}],posts:{objective:[[-28,-19],[-27.5,-11.3],[-19.2,-19],[-24,-21]],entrance:[[18,-10,"north loading door"],[18,10,"south loading door"],[-33,0,"west door"],[5,-23.5,"north door"],[-7,23.5,"south door"]]},panel:{x:-19.5,z:-15,face:[-1,0],n:"office alarm"},guards:10,reinforce:[{x:45,z:-1,n:"east gate"},{x:45,z:-28,n:"north-east service gate"}],pickups:[["med",-33.8,12.2],["med",-22,-24],["ammo",-17.6,-2.6],["ammo",23,16]]}}function fp(s,e){let t=new pu,n={id:s,dyn:[]};Object.assign(n,s==="forest"?iv(t,n,e):sv(t,n,e)),n.meshes=t.finish(e),n.colliders=t.col,n.nav=new mu(t.col,n.bounds),n.cover=ev(t.col,n.nav);let i=n.env;e.fog=new ea(i.fog[0],i.fog[1]),e.background=new Me(i.bg),n.hemi=new Ji(i.hemi[0],i.hemi[1],i.hemi[2]),e.add(n.hemi);let r=n.moon=new Gn(i.moon[0],i.moon[1]);n.moonDir=new P(...i.moon[2]).normalize(),r.castShadow=!0,r.shadow.mapSize.set(2048,2048);let a=r.shadow.camera;a.left=a.bottom=-48,a.right=a.top=48,a.near=1,a.far=220,r.shadow.bias=-6e-4,r.shadow.normalBias=.06,e.add(r,r.target);let o=[],l=xu(7);for(let u=0;u<500;u++){let d=l()*6.283,f=.08+l()*.9,p=Math.sqrt(1-f*f);o.push(Math.cos(d)*p*380,f*380,Math.sin(d)*p*380)}let c=new at;c.setAttribute("position",new Ye(o,3)),e.add(new Mi(c,new Qn({color:11452392,size:1.4,sizeAttenuation:!1,fog:!1})));let h=new Ge(new da(13,24),new ot({color:14674175,fog:!1}));return h.position.copy(n.moonDir).multiplyScalar(360),h.lookAt(0,0,0),e.add(h),n}var Ct={ak:{slot:"primary",name:"AK-47",desc:"Hard hitting, heavy recoil",auto:!0,dmg:36,rpm:600,mag:30,reserve:120,recoil:1.45,recoilH:.5,hip:2.1,ads:.2,reload:2.6,adsT:.24,move:.93,kick:.07,noise:44,falloff:[35,.75],optics:["iron","reddot","holo","scope"],muzzle:1,grip:1,laser:1},m4:{slot:"primary",name:"M4A1",desc:"Balanced, controllable",auto:!0,dmg:28,rpm:780,mag:30,reserve:150,recoil:.82,recoilH:.26,hip:1.5,ads:.13,reload:2.1,adsT:.19,move:.97,kick:.045,noise:42,falloff:[40,.8],optics:["iron","reddot","holo","scope"],muzzle:1,grip:1,laser:1},dmr:{slot:"primary",name:"SR-9 DMR",desc:"Semi-auto marksman rifle, 4x scope",auto:!1,dmg:68,rpm:230,mag:10,reserve:50,recoil:2.7,recoilH:.5,hip:3.4,ads:.03,reload:2.8,adsT:.3,move:.9,kick:.11,noise:50,optics:["scope"],muzzle:1,head:3},pistol:{slot:"secondary",name:"P9 PISTOL",desc:"Fast handling sidearm",auto:!1,dmg:30,rpm:420,mag:15,reserve:60,recoil:1.25,recoilH:.3,hip:1.2,ads:.3,reload:1.4,adsT:.12,move:1.06,kick:.085,noise:36,falloff:[20,.65],optics:["iron"],muzzle:1,laser:1},smg:{slot:"secondary",name:"VK-9 SMG",desc:"High rate of fire, short range",auto:!0,dmg:21,rpm:900,mag:30,reserve:120,recoil:.6,recoilH:.36,hip:1.3,ads:.3,reload:1.9,adsT:.14,move:1.03,kick:.035,noise:38,falloff:[16,.6],optics:["iron","reddot","holo"],muzzle:1,grip:1,laser:1},shotgun:{slot:"secondary",name:"M590 SHOTGUN",desc:"8 pellets, devastating up close",auto:!1,pellets:8,dmg:15,rpm:72,mag:6,reserve:30,recoil:4.4,recoilH:.8,hip:3.2,ads:2.5,reload:.5,shells:1,adsT:.2,move:.95,kick:.15,noise:48,falloff:[9,.35],optics:["iron","reddot"],laser:1},knife:{slot:"melee",name:"COMBAT KNIFE",desc:"Silent. Lethal from behind",melee:!0,dmg:70,range:2.1,rate:.6,move:1.1,mag:0,reserve:0}},Ar={iron:{name:"Iron sights",fov:58,eye:.3},reddot:{name:"Red dot",fov:55,eye:.19,ret:"dot"},holo:{name:"Holographic",fov:52,eye:.19,ret:"holo"},scope:{name:"4x scope",fov:19,eye:.085,ret:"scope",adsT:.06}},Ui={assault:{name:"ASSAULT",desc:"3 frag \xB7 1 flash \xB7 1 medkit \xB7 2 stims",frag:3,flash:1,smoke:0,med:1,stim:2},recon:{name:"RECON",desc:"1 frag \xB7 2 flash \xB7 2 smoke \xB7 2 medkits \xB7 1 stim",frag:1,flash:2,smoke:2,med:2,stim:1},medic:{name:"MEDIC",desc:"1 frag \xB7 1 flash \xB7 1 smoke \xB7 3 medkits \xB7 3 stims",frag:1,flash:1,smoke:1,med:3,stim:3}},rv=s=>({optic:Ct[s].optics?Ct[s].optics[0]:"iron",muzzle:!1,grip:!1,laser:s==="m4"});function av(){let s={};for(let e in Ct)Ct[e].melee||(s[e]=rv(e));return{primary:"m4",secondary:"pistol",kit:"assault",att:s}}function mp(){let s=av();try{let e=JSON.parse(localStorage.getItem("sp2_loadout")||"null");if(e&&Ct[e.primary]&&Ct[e.secondary]&&Ui[e.kit]){s.primary=e.primary,s.secondary=e.secondary,s.kit=e.kit;for(let t in s.att)e.att&&e.att[t]&&Object.assign(s.att[t],e.att[t])}}catch{}for(let e in s.att){let t=Ct[e],n=s.att[e];t.optics.includes(n.optic)||(n.optic=t.optics[0]),t.muzzle||(n.muzzle=!1),t.grip||(n.grip=!1),t.laser||(n.laser=!1)}return s}function gp(s){try{localStorage.setItem("sp2_loadout",JSON.stringify(s))}catch{}}function Zl(s,e={}){let t=Ct[s],n={...t,id:s,att:e,sup:!!e.muzzle,optic:Ar[e.optic]||Ar.iron};return t.melee||(e.muzzle&&(n.noise=Math.round(t.noise*.3),n.recoil*=.92,n.falloff&&(n.falloff=[n.falloff[0]*.85,n.falloff[1]])),e.grip&&(n.recoil*=.8,n.recoilH*=.8,n.hip*=.88,n.adsT*=1.06),n.adsT+=n.optic.adsT||0),n}function Jl(s,e){if(Ct[s].melee)return"";let t=[];return e.optic&&e.optic!=="iron"&&t.push(Ar[e.optic].name.toUpperCase()),e.muzzle&&t.push("SUPPRESSOR"),e.grip&&t.push("FOREGRIP"),e.laser&&t.push("LASER"),t.join(" \xB7 ")}var pp={},$l=(s,e=.6,t=.2,n)=>{let i=s+"_"+e+"_"+t;return pp[i]||(pp[i]=new Lt({color:s,roughness:e,metalness:t,...n}))},Yl=()=>$l(1776670,.85,0),ov=()=>$l(4673852,.95,0),li=()=>$l(1382170,.5,.6);function vn(s,e,t,n,i,r,a=0,o=0,l=0){let c=new Ge(e,t);return c.position.set(n,i,r),c.rotation.set(a,o,l),s.add(c),c}var Di=(s,e,t)=>new Yt(s,e,t),lv=(s,e)=>new ua(s,e,3,8);function za(s,e,t,n,i){let r=new P().subVectors(t,e),a=new Ge(lv(n,Math.max(.01,r.length()-n)),i);return a.position.copy(e).addScaledVector(r,.5),a.quaternion.setFromUnitVectors(new P(0,1,0),r.normalize()),s.add(a),a}function Kl(s,e,t,n,i){let r=new Tt;s.add(r);let a=(l,c,h)=>new P(e.x+l,e.y+c,e.z+h),o=a(0,0,0).lerp(t,.2);za(r,a(0,0,0),o,.034,Yl()),za(r,o,t,.043,ov()),vn(r,Di(.05,.022,.022),li(),o.x,o.y,o.z).lookAt(t);for(let l=0;l<4;l++){let c=(l-1.5)*.021;i==="y"?za(r,a(-n*.012,c*.95,-.012),a(n*.03,c*.95,-.042),.0098,Yl()):za(r,a(-n*.02,-.005,c),a(-n*.036,.04,c),.0098,Yl())}return za(r,a(n*.022,.02,.008),a(n*.03,.036,-.03),.011,Yl()),r}function cv(s){let e=new Tt;if(s==="reddot")vn(e,Di(.03,.012,.05),li(),0,.006,0),vn(e,new Mt(.017,.017,.045,14,1,!0),$l(1513755,.5,.6,{side:Vt}),0,.03,0,Math.PI/2),vn(e,new hr(.017,.0028,6,16),li(),0,.03,-.022),vn(e,new hr(.017,.0028,6,16),li(),0,.03,.022),vn(e,Di(.012,.012,.012),li(),.022,.03,0),e.center=.03;else{vn(e,Di(.038,.016,.075),li(),0,.008,0),vn(e,Di(.038,.02,.03),li(),0,.022,.028);for(let n of[-1,1])vn(e,Di(.004,.036,.03),li(),n*.019,.034,-.02);vn(e,Di(.042,.004,.03),li(),0,.053,-.02),e.center=.034}let t=new ot({color:7319744,transparent:!0,opacity:.1,depthWrite:!1});return vn(e,new Hn(.03,.03),t,0,e.center,s==="reddot"?0:-.02),e}function jl(s,e={},t){let n=Ct[s],i=new Tt;if(n.melee){let f=Et.models.acc_knife.clone(!0);return f.scale.setScalar(.24),f.rotation.y=Math.PI/2,i.add(f),t||Kl(i,new P(0,-.005,0),new P(.1,-.2,.4),1,"y"),i.hip=new P(.2,-.17,-.42),i.adsPos=i.hip.clone(),i.muzzle=new P(0,0,-.25),i.eject=i.muzzle,i.fov=75,i.melee=!0,i}let r=Xl(s),a=r.def;i.add(r);let o=(a.sight-a.grip[1])*a.s,l=a.rail?r.pt(a.rail).z+.02:.02,c=Ar[e.optic||"iron"].eye,h=e.optic;if(s==="dmr"){let f=r.pt(a.scope);o=f.y,l=f.z}else if(h==="reddot"||h==="holo"){let f=cv(h),p=r.pt(a.rail);f.position.copy(p),i.add(f),o=p.y+f.center,l=p.z}else if(h==="scope"){let f=Et.models.acc_scope.clone(!0),p=r.pt(a.rail);f.scale.setScalar(.115),f.rotation.y=Math.PI/2,f.position.set(0,p.y+.006,p.z-.02),i.add(f),o=p.y+.006+.19*.115,l=p.z-.02+1.09*.115}if(i.muzzle=r.muzzle.clone(),e.muzzle){let f=Et.models.acc_suppressor.clone(!0);f.scale.setScalar(.115),f.rotation.y=Math.PI/2,f.position.copy(i.muzzle).z+=.012,i.add(f),i.muzzle.z-=.19}let u=r.pt(a.hand),d=u.clone();if(d.y-=.03,e.grip){let f=Et.models.acc_grip.clone(!0);f.scale.setScalar(.12),f.position.set(0,u.y-.42*.12,u.z-.03),i.add(f),d=new P(0,u.y-.055,u.z-.03)}if(e.laser){let f=s==="pistol"?-.06:u.z-.05,p=s==="pistol"?(a.muzzle[1]-a.grip[1])*a.s-.022:u.y+.035,y=s==="pistol"?0:.028;vn(i,Di(.02,.022,.06),li(),y,p,f),vn(i,Di(.008,.008,.003),new ot({color:16722474}),y,p,f-.031),i.laser=new P(y,p,f-.033)}return i.lh=new Tt,i.add(i.lh),t||(s==="pistol"?Kl(i.lh,new P(-.012,-.035,0),new P(-.2,-.25,.38),-1,"y"):Kl(i.lh,d,new P(-.26,-.3,d.z+.42),-1,e.grip?"y":"z")),t||(i.rh=Kl(i,new P(0,-.02,.012),new P(.13,-.26,.42),1,"y")),i.gun=r,i.eject=r.pt(a.eject,.5),i.hip=s==="pistol"?new P(.13,-.14,-.42):new P(.16,-.165,-.37),i.adsPos=new P(0,-o,-c-l),i.sightY=o,i}var Rs=(s,e,t)=>s<e?e:s>t?t:s,hv=.34,_u=["frag","flash","smoke"],xp={frag:"FRAG",flash:"FLASH",smoke:"SMOKE"},Ql=class{constructor(e,t,n){this.g=e,this.pos=new P(t.x,0,t.z),this.vel=new P,this.yaw=t.yaw,this.pitch=0,this.eye=1.62,this.height=1.8,this.hp=100,this.dead=!1,this.grounded=!0,this.crouch=!1,this.crouchToggle=!1,this.speed=0,this.bob=0,this.dip=0,this.sinceHit=99,this.noSprint=0,this.sprintF=0,this.sprinting=!1,this.lean=0,this.leanX=0,this.leanZ=0,this.mantle=null,this.stimT=0,this.blind=0,this.shake=0;let i=[n.primary,n.secondary,"knife"];this.slots=i.map(c=>{let h=n.att[c]||{},u=Zl(c,h),d=jl(c,h);return d.visible=!1,e.wscene.add(d),{id:c,st:u,view:d,mag:u.mag,reserve:u.reserve}}),this.cur=0,this.slots[0].view.visible=!0,this.shown=0,this.next=-1,this.swT=0,this.relT=0,this.reloading=!1,this.fireT=0,this.adsF=0,this.rp=0,this.ry=0,this.kick=0,this.burst=0,this.laserOn=!0,this.spread=1,this.swayX=0,this.swayY=0,this.scoped=!1;let r=Ui[n.kit];this.inv={frag:r.frag,flash:r.flash,smoke:r.smoke,med:r.med,stim:r.stim},this.throwSel=_u.find(c=>this.inv[c]>0)||"frag",this.use=null;let a=document.createElement("canvas");a.width=a.height=64;let o=a.getContext("2d"),l=o.createRadialGradient(32,32,2,32,32,32);l.addColorStop(0,"rgba(255,255,230,1)"),l.addColorStop(.3,"rgba(255,200,90,.8)"),l.addColorStop(1,"rgba(255,120,20,0)"),o.fillStyle=l,o.fillRect(0,0,64,64),this.flash=new Ge(new Hn(.2,.2),new ot({map:new Si(a),transparent:!0,blending:Vn,depthWrite:!1})),this.flash.visible=!1,this.flashT=0,e.wscene.add(this.flash),this.fwd=new P,this._v=new P,this._v2=new P,this.muzzleW=new P,this.laserW=new P,this.eyePos=new P}get slot(){return this.slots[this.cur]}get w(){return this.slots[this.cur].st}busy(){return this.swT>0||this.reloading||!!this.use||!!this.mantle}hits(e,t,n,i=this.height,r=hv){let a=this.g.world.colliders;for(let o=0;o<a.length;o++){let l=a[o];if(l.solid&&e+r>l.x0&&e-r<l.x1&&n+r>l.z0&&n-r<l.z1&&t<l.y1-.001&&t+i>l.y0)return l}return null}switchTo(e){e===this.cur||this.swT>0||this.dead||this.use||!this.slots[e]||(this.next=e,this.swT=.4,this.reloading=!1,this.g.audio.click(.35))}reload(){let e=this.slot;this.busy()||e.st.melee||e.mag>=e.st.mag||e.reserve<=0||(this.reloading=!0,this.relT=e.st.reload,this.g.audio.reload(e.st.reload,e.st.shells))}damage(e,t,n){this.dead||(this.hp-=e,this.sinceHit=0,this.lastHit=n,this.g.onHurt(t,e),this.hp<=0&&(this.hp=0,this.dead=!0))}cycleThrow(){let e=_u.indexOf(this.throwSel);for(let t=1;t<=3;t++){let n=_u[(e+t)%3];if(this.inv[n]>0){this.throwSel=n;break}}this.g.audio.click(.3)}startUse(e){if(this.busy()||this.dead)return;let t=this.g;if(e==="throw"){if(this.inv[this.throwSel]<=0&&(this.cycleThrow(),this.inv[this.throwSel]<=0))return;this.use={type:e,t:0,dur:.6,at:.3}}else if(e==="med"){if(this.inv.med<=0||this.hp>=100)return;this.use={type:e,t:0,dur:2.4,at:2.3},t.audio.medkit()}else if(e==="stim"){if(this.inv.stim<=0)return;this.use={type:e,t:0,dur:.75,at:.45}}else e==="melee"&&(this.use={type:e,t:0,dur:Ct.knife.rate,at:.16},this.show(2),t.audio.swish());this.adsF=Math.min(this.adsF,.5)}show(e){this.shown!==e&&(this.slots[this.shown].view.visible=!1,this.slots[e].view.visible=!0,this.shown=e)}finishUse(e){let t=this.g,n=t.camera;if(e.type==="throw"){let i=this.throwSel,r=this._v.set(1,0,0).applyQuaternion(n.quaternion),a=this._v2.copy(n.position).addScaledVector(this.fwd,.45).addScaledVector(r,.18);a.y-=.08;let o=new P().copy(this.fwd).multiplyScalar(this.crouch?11:15);o.y+=3.6,o.x+=this.vel.x*.5,o.z+=this.vel.z*.5,t.spawnGrenade(i,a.clone(),o,"player"),this.inv[i]--,this.inv[i]<=0&&this.cycleThrow()}else e.type==="med"?(this.inv.med--,this.hp=Math.min(100,this.hp+65),t.audio.pickup()):e.type==="stim"?(this.inv.stim--,this.hp=Math.min(100,this.hp+25),this.stimT=8,t.audio.stim()):e.type==="melee"&&t.melee()}update(e){let t=this.g,n=t.inp,i=n.k,r=this.slot,a=r.st,o=1+(a.optic?a.optic.fov/75-1:0)*this.adsF,l=.0022*t.sens*(a.melee?1:o);this.yaw-=n.mx*l,this.pitch=Rs(this.pitch-n.my*l,-1.5,1.5),this.swayX+=(Rs(-n.mx*5e-4,-.03,.03)-this.swayX)*Math.min(1,e*10),this.swayY+=(Rs(n.my*5e-4,-.03,.03)-this.swayY)*Math.min(1,e*10);let c=this.pos,h=Math.sin(this.yaw),u=Math.cos(this.yaw);if(!!(i.ControlLeft||i.ControlRight)||this.crouchToggle?(this.crouch=!0,this.height=1.2):this.crouch&&(this.height=1.8,this.hits(c.x,c.y,c.z)?this.height=1.2:this.crouch=!1),this.eye+=((this.crouch?1:1.62)-this.eye)*Math.min(1,e*12),this.stimT=Math.max(0,this.stimT-e),this.mantle){let M=this.mantle;M.t+=e/.42;let I=Math.min(1,M.t),R=I*I*(3-2*I);c.y=M.y0+(M.y1-M.y0)*Math.min(1,R*1.5),c.x=M.x0+(M.x1-M.x0)*Math.max(0,R*1.6-.6),c.z=M.z0+(M.z1-M.z0)*Math.max(0,R*1.6-.6),this.vel.set(0,0,0),this.grounded=!0,I>=1&&(this.mantle=null)}else{let M=(i.KeyW?1:0)-(i.KeyS?1:0),I=(i.KeyD?1:0)-(i.KeyA?1:0),R=Math.hypot(M,I)||1;M/=R,I/=R,this.noSprint-=e;let D=(i.ShiftLeft||i.ShiftRight)&&M>0&&!this.crouch&&this.noSprint<=0&&!n.rmb&&this.grounded&&!this.use;this.sprinting=D;let O=(this.crouch?2.3:D?6.9:4.5)*a.move*(1-.42*this.adsF)*(this.use&&this.use.type==="med"?.55:1)*(this.stimT>0?1.12:1)*(1-Math.abs(this.lean)*.5),H=(-h*M+u*I)*O,L=(-u*M-h*I)*O,F=(this.grounded?M||I?60:48:9)*e,G=H-this.vel.x,B=L-this.vel.z,ee=Math.hypot(G,B);ee>F?(this.vel.x+=G/ee*F,this.vel.z+=B/ee*F):(this.vel.x=H,this.vel.z=L),n.jump&&this.grounded&&(this.vel.y=this.crouch?5.2:6.6,this.grounded=!1,t.audio.step(.25)),n.jump=!1,this.vel.y-=21*e;let X=this.grounded,Y=Se=>{let Z=Se==="x"?c.x+this.vel.x*e:c.z+this.vel.z*e,fe=Se==="x"?Z:c.x,ye=Se==="x"?c.z:Z,we=this.hits(fe,c.y,ye);if(!we){c[Se]=Z;return}let pe=we.y1-c.y;if(X&&pe<=.45&&!this.hits(fe,we.y1,ye)){c[Se]=Z,c.y=we.y1;return}if(i.Space&&pe>.45&&pe<=1.4&&!this.mantle&&!this.use){let ze=Math.sign(this.vel[Se])||1,pt=Se==="x"?c.x+ze*.75:c.x,Le=Se==="x"?c.z:c.z+ze*.75;this.hits(pt,we.y1+.02,Le,1.2)||(this.mantle={t:0,x0:c.x,z0:c.z,y0:c.y,x1:pt,z1:Le,y1:we.y1},this.crouchToggle=this.crouchToggle||!!this.hits(pt,we.y1+.02,Le,1.8),t.audio.step(.3))}this.vel[Se]=0};Y("x"),Y("z");let te=this.vel.y,_e=c.y+this.vel.y*e;if(this.grounded=!1,_e<=0)_e=0,this.grounded=!0,this.vel.y=0;else{let Se=this.hits(c.x,_e,c.z);Se&&(this.vel.y<=0?(_e=Se.y1,this.grounded=!0):_e=c.y,this.vel.y=0)}if(this.mantle||(c.y=_e),this.grounded&&!X&&te<-4&&(this.dip=Math.min(.16,-te*.014),t.audio.land(),t.sound(c,9,"step"),te<-13&&this.damage((-te-13)*6,c,{name:"a fall",dist:0,x:c.x,z:c.z,fall:!0})),this.speed=Math.hypot(this.vel.x,this.vel.z),this.grounded&&this.speed>.6){let Se=this.bob;this.bob+=this.speed*e*1.75,Math.floor(Se/Math.PI)!==Math.floor(this.bob/Math.PI)&&(t.audio.step(this.crouch?.06:D?.26:.15),this.crouch||t.sound(c,D?13:6.5,"step"))}}this.dip+=(0-this.dip)*Math.min(1,e*9),this.sprintF+=((this.sprinting?1:0)-this.sprintF)*Math.min(1,e*9);let f=this.sprinting||this.mantle?0:(i.KeyF?1:0)-(i.KeyQ?1:0);this.lean+=(f-this.lean)*Math.min(1,e*9);let p=this.lean*.46;for(let M=0;M<4&&Math.abs(p)>.02&&this.hits(c.x+u*p,c.y+this.eye-.25,c.z-h*p,.4,.14);M++)p*=.6,M===3&&(p=0);if(this.leanX=u*p,this.leanZ=-h*p,this.sinceHit+=e,this.sinceHit>5&&this.hp<20&&(this.hp=Math.min(20,this.hp+4*e)),this.stimT>2&&(this.hp=Math.min(100,this.hp+2.5*e)),this.blind=Math.max(0,this.blind-e*(this.blind>1?1:.55)),this.shake=Math.max(0,this.shake-e*2.5),this.use){let M=this.use;M.t+=e,!M.done&&M.t>=M.at&&(M.done=!0,this.finishUse(M)),M.t>=M.dur&&(this.use=null,this.show(this.cur))}if(this.swT>0&&(this.swT-=e,this.swT<=.2&&this.next>=0&&(this.cur=this.next,this.next=-1,this.show(this.cur))),this.reloading&&(this.relT-=e,this.relT<=0))if(a.shells)r.mag++,r.reserve--,r.mag<a.mag&&r.reserve>0&&!n.lmb?(this.relT=a.reload,t.audio.click(.45)):this.reloading=!1;else{let M=Math.min(a.mag-r.mag,r.reserve);r.mag+=M,r.reserve-=M,this.reloading=!1}let y=n.rmb&&!this.sprinting&&this.swT<=0&&!this.reloading&&!this.use&&!a.melee&&!this.mantle;this.adsF=Rs(this.adsF+(y?1:-1)*e/(a.adsT||.15),0,1),this.scoped=!a.melee&&a.optic.ret==="scope"&&this.adsF>.9,this.fireT-=e,this.fireT<-.22&&(this.burst=0),(a.auto?n.lmb:n.lmbPressed)&&this.fireT<=0&&this.swT<=0&&!this.use&&!this.mantle&&(a.melee?this.startUse("melee"):this.reloading?a.shells&&r.mag>0&&(this.reloading=!1):r.mag>0?this.shoot():(n.lmbPressed&&t.audio.click(.5),this.reload())),n.lmbPressed=!1;let m=this.speed/4.5;a.melee||(this.spread=a.hip*(1+m*.9+(this.grounded?0:2))*(this.crouch?.75:1)*(a.att.laser&&this.laserOn?.6:1)*(1-this.adsF)+a.ads*(1+m*.6)*this.adsF+this.burst*.03);let x=Math.min(1,e*7);this.rp-=this.rp*x,this.ry-=this.ry*x,this.kick-=this.kick*Math.min(1,e*14);let S=t.camera,v=Math.sin(this.bob*2)*.028*Math.min(1,m)*(1-this.adsF*.6),b=Math.cos(this.bob)*.02*Math.min(1,m),E=this.shake*.05;S.position.set(c.x+u*b+this.leanX+(Math.random()-.5)*E,c.y+this.eye+v-this.dip-Math.abs(p)*.08+(Math.random()-.5)*E,c.z-h*b+this.leanZ),S.rotation.set(this.pitch+this.rp,this.yaw+this.ry,-p*.3);let _=t.fov+((a.melee?t.fov:a.optic.fov)-t.fov)*this.adsF+this.sprintF*4;Math.abs(S.fov-_)>.01&&(S.fov=_,S.updateProjectionMatrix()),S.updateMatrixWorld(),S.getWorldDirection(this.fwd),this.eyePos.copy(S.position),this.animate(e,b,v)}shoot(){let e=this.g,t=this.slot,n=t.st,i=e.camera;t.mag--,this.fireT=Math.max(this.fireT,-.02)+60/n.rpm,this.noSprint=.3,this.burst++;let r=this.spread*Math.PI/180;for(let h=0;h<(n.pellets||1);h++){let u=Math.random()*6.283,d=Math.sqrt(Math.random())*r,f=this._v.set(Math.cos(u)*Math.tan(d),Math.sin(u)*Math.tan(d),-1).normalize().applyQuaternion(i.quaternion);e.playerShot(i.position,f,n,this.muzzleW,h===0)}let a=1-this.adsF*.25,o=this.burst;this.rp+=n.recoil*(o<3?1.15:.85)*Math.PI/180*a*(this.crouch?.85:1);let l=n.id==="ak"&&o>4?Math.sin(o*.8)*1.5+(Math.random()-.5):(Math.random()-.5)*2;this.ry+=l*n.recoilH*Math.PI/180*a,this.kick=Math.min(.13,this.kick+n.kick),n.sup||(this.flashT=.045,this.flash.rotation.z=Math.random()*6,this.flash.scale.setScalar((n.pellets?1.3:.7)+Math.random()*.6),e.fx.muzzle(i.position)),e.audio.shot(n.id,n.sup),e.sound(this.pos,n.noise*e.world.env.shotMul,"shot"),e.stats.shots++;let c=t.view;e.fx.shell(this._v.copy(c.eject).applyMatrix4(c.matrixWorld).applyQuaternion(i.quaternion).add(i.position),this._v2.set(1,.6,0).applyQuaternion(i.quaternion))}animate(e,t,n){let i=this.g,r=this.slots[this.shown].view,a=this.slots[this.shown].st,o=a.melee?0:this.adsF,l=r.hip,c=r.adsPos,h=l.x+(c.x-l.x)*o,u=l.y+(c.y-l.y)*o,d=l.z+(c.z-l.z)*o,f=0,p=.03*(1-o),y=-this.lean*.12*(1-o*.5),g=1-o*.88,m=Math.sin(performance.now()*.0016)*.0025*g;if(h+=this.swayX*g+t*.5*g,u+=this.swayY*g+n*.45*g-this.dip*.4+m,d+=this.kick*(1-o*.35),f+=this.kick*1*(1-o*.65),this.swT>0){let M=Math.sin((1-this.swT/.4)*Math.PI);u-=M*.3,f-=M*.7}let x=0,S=0;if(this.reloading){let M=a.shells?.6+.4*Math.sin((1-this.relT/a.reload)*Math.PI):Math.sin(Math.min(1,(1-this.relT/a.reload)*1.08)*Math.PI);u-=M*.07,f+=M*.42,y+=M*.45,h-=M*.03;let I=a.shells?Math.sin((1-this.relT/a.reload)*Math.PI):Math.sin(Rs((1-this.relT/a.reload-.12)/.6,0,1)*Math.PI);x=-I*.2,S=I*.12}let v=this.use;if(v){let M=Math.sin(Rs(v.t/v.dur,0,1)*Math.PI);if(v.type==="melee"){let I=Rs(v.t/.22,0,1),R=Math.sin(I*Math.PI);d-=R*.32,h-=R*.16,p+=.5-I*1.1,f+=.25-R*.5,y+=.6}else u-=M*.34,f-=M*.8}this.mantle&&(u-=.3,f-=.6);let b=this.sprintF*(a.melee?.4:1);u-=b*.05,p+=b*.5,f-=b*.18,h-=b*.04,r.position.set(h,u,d),r.rotation.set(f,p,y),r.lh&&r.lh.position.set(0,x,S),r.visible=!this.scoped,r.updateMatrixWorld();let E=i.camera.quaternion,_=i.camera.position;this.muzzleW.copy(r.muzzle).applyMatrix4(r.matrixWorld).applyQuaternion(E).add(_),r.laser&&this.laserW.copy(r.laser).applyMatrix4(r.matrixWorld).applyQuaternion(E).add(_),this.flashT>0&&!this.scoped?(this.flashT-=e,this.flash.visible=!0,this.flash.position.copy(r.muzzle).applyMatrix4(r.matrixWorld),this.flash.position.z-=.03):(this.flash.visible=!1,this.flashT=0)}};var uv=/^(root|pelvis|thigh|calf|foot|ball)/,Is={idle:"Idle_Loop",walk:"Walk_Loop",jog:"Jog_Fwd_Loop",sprint:"Sprint_Loop",cidle:"Crouch_Idle_Loop",cwalk:"Crouch_Fwd_Loop"},tc={aimN:"Pistol_Aim_Neutral",aimU:"Pistol_Aim_Up",aimD:"Pistol_Aim_Down"},dv=["Pistol_Reload","OverhandThrow","Interact","Idle_TalkingPhone_Loop","Hit_Chest","Hit_Head"],fv=["Death01","Hit_Knockback","ClimbUp_1m","Roll","Jump_Start"],_p={guard:{jacket:4147253,pants:3554607,gear:2501408,helmet:3093799},aggressor:{jacket:5260599,pants:4274222,gear:2762015,helmet:3419686},cautious:{jacket:3686986,pants:3094333,gear:2106923,helmet:2633525},elite:{jacket:2303530,pants:1974564,gear:1184790,helmet:1513756}},Ze=null,yp=new P,vp=new P,Mp=new P,yu=new P,pv=new P,Dn=new xt,vu=new xt,mv=new P(0,1,0);function ec(s,e){let t=Et.clips[s];return new Ci(s+(e?"_L":"_U"),t.duration,t.tracks.filter(n=>uv.test(n.name)===e))}function gv(){let s=Et.models.soldier;s.updateMatrixWorld(!0);let e=[];s.traverse(m=>m.isSkinnedMesh&&e.push(m));let t=e.find(m=>m.material.name==="M_Main")||e[0],n=t.skeleton.bones,i=t.geometry,r=i.attributes.position.count,a=new Uint8Array(r),o=i.attributes.skinIndex,l=i.attributes.skinWeight;for(let m=0;m<r;m++){let x=0,S=-1;for(let b=0;b<4;b++)l.getComponent(m,b)>S&&(S=l.getComponent(m,b),x=o.getComponent(m,b));let v=n[x].name;a[m]=/^(Head|neck)/.test(v)?2:/^(hand|index|middle|ring|pinky|thumb)/.test(v)?3:/^(foot|ball)/.test(v)?4:/^(thigh|calf|pelvis)/.test(v)?1:0}let c={},h={};for(let m of n)c[m.name]=m.getWorldPosition(new P),h[m.name]=m.matrixWorld.clone();let u=Math.sign(c.ball_l.z-c.foot_l.z)||1;Ze={body:t,meshes:e,region:a,rest:c,boneRest:h,F:u,geos:{},clips:{},mats:{},gear:{}};for(let m in Is)Ze.clips[m]=ec(Is[m],!0),Ze.clips[m+"U"]=ec(Is[m],!1);for(let m in tc)Ze.clips[m]=ec(tc[m],!1);for(let m of dv)Ze.clips[m]=ec(m,!1);for(let m of fv)Ze.clips[m]=Et.clips[m];let d=Oa(s),f=new pr(d);f.clipAction(Et.clips.Pistol_Aim_Neutral).play(),f.setTime(.01),d.updateMatrixWorld(!0);let p=d.getObjectByName("hand_r"),y=p.getWorldQuaternion(new xt).invert(),g=new xt().setFromAxisAngle(mv,u>0?Math.PI:0);Ze.gunQuat=y.clone().multiply(g),Ze.gunPos=new P(0,-.035,.075*u).applyQuaternion(y),Ze.mats.joint=new Lt({color:1316119,roughness:.95,metalness:0}),Ze.mats.body=new Lt({vertexColors:!0,roughness:.92,metalness:0}),Ze.mats.gear=new Lt({vertexColors:!0,roughness:.85,metalness:.05}),Ze.mats.flash=new ot({color:16767120,transparent:!0,blending:Vn,depthWrite:!1}),Ze.geo={helmet:new Ti(.128,14,10,0,6.283,0,1.75),box:new Yt(1,1,1),flash:new ma(.09,0)}}function xv(s){if(Ze.geos[s])return Ze.geos[s];let e=_p[s],t=Ze.body.geometry,n=new at,i=t.attributes.position.count,r=new Float32Array(i*3);for(let o in t.attributes)n.setAttribute(o,t.attributes[o]);n.setIndex(t.index),n.boundingSphere=t.boundingSphere,n.boundingBox=t.boundingBox;let a=[e.jacket,e.pants,1513755,921360,789517].map(o=>new Me(o));for(let o=0;o<i;o++){let l=a[Ze.region[o]];r[o*3]=l.r,r[o*3+1]=l.g,r[o*3+2]=l.b}return n.setAttribute("color",new _t(r,3)),Ze.geos[s]=n}function Cs(s,e){s.parent.getWorldQuaternion(vu),s.quaternion.premultiply(vu).premultiply(e).premultiply(vu.invert())}function _v(s,e,t,n,i){s.updateWorldMatrix(!0,!1),e.updateWorldMatrix(!1,!1),t.updateWorldMatrix(!1,!1);let r=yp.setFromMatrixPosition(s.matrixWorld),a=vp.setFromMatrixPosition(e.matrixWorld),o=Mp.setFromMatrixPosition(t.matrixWorld),l=a.distanceTo(r),c=o.distanceTo(a),h=yu.copy(n).sub(r),u=yn.clamp(h.length(),Math.abs(l-c)+.01,l+c-.004);h.normalize();let d=(l*l-c*c+u*u)/(2*u),f=Math.sqrt(Math.max(0,l*l-d*d)),y=pv.copy(i).addScaledVector(h,-i.dot(h)).normalize().multiplyScalar(f).addScaledVector(h,d).add(r);Cs(s,Dn.setFromUnitVectors(a.sub(r).normalize(),yu.copy(y).sub(r).normalize())),s.updateWorldMatrix(!1,!1),e.updateWorldMatrix(!1,!1),t.updateWorldMatrix(!1,!1),a.setFromMatrixPosition(e.matrixWorld),o.setFromMatrixPosition(t.matrixWorld),Cs(e,Dn.setFromUnitVectors(o.sub(a).normalize(),yu.copy(n).sub(a).normalize()))}var Rr=class{constructor(e="guard",t="carbine"){Ze||gv();let n=this.root=new Tt,i=this.inner=Oa(Et.models.soldier);n.rotation.order="YXZ",i.rotation.y=Ze.F>0?Math.PI:0,n.add(i),this.bones={},i.traverse(o=>{if(o.isBone&&(this.bones[o.name]=o),o.isSkinnedMesh){let l=o.geometry===Ze.body.geometry;o.geometry=l?xv(e):o.geometry,o.material=l?Ze.mats.body:Ze.mats.joint,o.castShadow=!0,o.frustumCulled=!1}}),i.updateMatrixWorld(!0),this.dress(e);let r=this.gun=Xl(t);r.traverse(o=>{o.castShadow=!1}),r.quaternion.copy(Ze.gunQuat),r.position.copy(Ze.gunPos),this.bones.hand_r.add(r),this.flash=new Ge(Ze.geo.flash,Ze.mats.flash),this.flash.position.copy(r.muzzle).z-=.08,this.flash.scale.set(1,1,2.2),this.flash.visible=!1,r.add(this.flash),this.gripL=r.pt(r.def.hand),this.gripL.y-=.035,this.gripL.z+=.03;let a=this.mixer=new pr(i);this.act={};for(let o in Ze.clips){let l=this.act[o]=a.clipAction(Ze.clips[o]);l.setEffectiveWeight(0),(Is[o]||Is[o.slice(0,-1)]||tc[o])&&l.play()}for(let o in Is)this.act[o+"U"].syncWith(this.act[o]);this.w={};for(let o in this.act)this.w[o]=0;this.act.idle.setEffectiveWeight(1),this.w.idle=1,this.uOne=null,this.fOne=null,this.dead=!1,this.lean=0,this.kick=0,this.flashT=0,this.aimW=0,this.crouchW=0,this.ikW=0,this.zones=null,this.zoneFrame=-1,a.update(.01)}dress(e){if(!Ze.gear[e]){let t=_p[e],n=Ze.rest,i=Ze.F,r={},a=new Oe,o=new Oe,l=new un,c=new xt,h=(x,S,v,b,E,_,M,I,R)=>{let D=S.clone().applyMatrix4(a.compose(new P(b,E,_*i),c.setFromEuler(l.set(0,0,0)),new P(M,I,R)));D.applyMatrix4(o.copy(Ze.boneRest[x]).invert());let O=new Me(v),H=D.attributes.position.count,L=new Float32Array(H*3);for(let F=0;F<H;F++)L[F*3]=O.r,L[F*3+1]=O.g,L[F*3+2]=O.b;D.setAttribute("color",new _t(L,3)),(r[x]||(r[x]=[])).push(D)},u=Ze.geo.box,d=t.gear,f=t.helmet,p=855567,y=n.Head,g=n.spine_03,m=n.pelvis;h("Head",Ze.geo.helmet,f,y.x,y.y+.105,y.z+.005,1,1.02,1.12),h("Head",u,f,y.x,y.y+.085,y.z+.118,.2,.025,.07),h("Head",u,658704,y.x,y.y+.062,y.z+.108,.17,.05,.03),h("Head",u,p,y.x,y.y+.165,y.z+.11,.05,.05,.05);for(let x of[-1,1])h("Head",u,p,y.x+x*.118,y.y+.06,y.z,.035,.08,.07);h("spine_03",u,d,g.x,g.y-.02,g.z+.085,.33,.36,.09),h("spine_03",u,d,g.x,g.y-.02,g.z-.105,.32,.36,.08);for(let x of[-1,1])h("spine_03",u,d,g.x+x*.13,g.y+.17,g.z-.01,.06,.03,.2);for(let x of[-1,0,1])h("spine_03",u,p,g.x+x*.095,g.y-.11,g.z+.145,.075,.15,.05);h("spine_03",u,p,g.x-.09,g.y+.05,g.z-.165,.11,.17,.06),h("spine_03",u,p,g.x-.09,g.y+.2,g.z-.165,.012,.16,.012),h("pelvis",u,p,m.x,m.y+.06,m.z,.37,.06,.25),h("thigh_r",u,p,n.thigh_r.x+.085*Math.sign(n.thigh_r.x),n.thigh_r.y-.14,n.thigh_r.z,.05,.17,.1);for(let x of["l","r"])h("calf_"+x,u,p,n["calf_"+x].x,n["calf_"+x].y-.02,n["calf_"+x].z+.055,.105,.13,.05);Ze.gear[e]=Object.fromEntries(Object.entries(r).map(([x,S])=>[x,ep(S)]))}for(let t in Ze.gear[e]){let n=new Ge(Ze.gear[e][t],Ze.mats.gear);n.frustumCulled=!1,this.bones[t].add(n)}}playUpper(e,{loop:t=!1,speed:n=1,fade:i=.15}={}){if(this.dead)return 0;let r=this.act[e];return r.reset(),r.setLoop(t?Nl:Ca,t?1/0:1),r.clampWhenFinished=!0,r.timeScale=n,r.play(),this.uOne&&this.uOne.a!==r&&(this.uOne.old=!0),this.uOne={a:r,name:e,t:0,dur:t?1/0:r.getClip().duration/n,fade:i,w:0},this.uOne.dur}stopUpper(){this.uOne&&(this.uOne.dur=Math.min(this.uOne.dur,this.uOne.t))}playFull(e,{speed:t=1,fade:n=.12,hold:i=!1}={}){let r=this.act[e];return r.reset(),r.setLoop(Ca,1),r.clampWhenFinished=!0,r.timeScale=t,r.play(),this.fOne={a:r,name:e,t:0,dur:i?1/0:r.getClip().duration/t,fade:n,w:0},r.getClip().duration/t}die(e){this.dead||(this.dead=!0,this.uOne=null,this.flash.visible=!1,this.playFull(e?"Hit_Knockback":"Death01",{hold:!0,speed:1.15}),e&&(this.root.userData.knock=1))}fire(){this.kick=1,this.flashT=.05,this.flash.visible=!0,this.flash.rotation.z=Math.random()*6}update(e,t){let n=this.w,i=Math.min(1,e*9),r={};for(let d in n)r[d]=0;let a=0,o=0;if(this.fOne){let d=this.fOne;d.t+=e,d.w=d.t>d.dur-d.fade?Math.max(0,(d.dur-d.t)/d.fade):Math.min(1,d.t/d.fade),this.dead&&(d.w=Math.min(1,d.t/.08)),a=d.w,d.a.setEffectiveWeight(a),d.t>=d.dur&&(d.a.stop(),this.fOne=null)}if(this.uOne){let d=this.uOne;d.t+=e,d.w=d.t>d.dur-d.fade?Math.max(0,(d.dur-d.t)/d.fade):Math.min(1,d.t/d.fade),o=d.w*(1-a),d.a.setEffectiveWeight(o),d.t>=d.dur&&(d.a.stop(),this.uOne=null)}if(!this.dead){this.crouchW+=((t.crouch?1:0)-this.crouchW)*i;let d=t.speed,f=this.crouchW,p;if(d<.15)p={idle:1};else if(d<1.9)p={idle:Math.max(0,1-d/.9),walk:Math.min(1,d/.9)};else if(d<3.6){let x=(d-1.9)/1.7;p={walk:1-x,jog:x}}else{let x=Math.min(1,(d-3.6)/1.4);p={jog:1-x,sprint:x}}let y=Math.min(1,d/.8);for(let x in p)r[x]=p[x]*(1-f);r.cidle=f*(1-y),r.cwalk=f*y,this.act.walk.timeScale=this.act.walkU.timeScale=d<1.9?yn.clamp(d/1.45,.6,1.5):1.2,this.act.cwalk.timeScale=this.act.cwalkU.timeScale=yn.clamp(d/1.3,.6,1.6),this.aimW+=((t.aim?1:0)-this.aimW)*Math.min(1,e*7);let g=this.aimW,m=yn.clamp((t.pitch||0)/.7,-1,1);r.aimN=g*(1-Math.abs(m)),r.aimU=g*Math.max(0,m),r.aimD=g*Math.max(0,-m)+(1-g)*.55,r.aimN+=(1-g)*.45;for(let x of["aimN","aimU","aimD"])r[x]*=1-o}let l=1-a;for(let d in Is)n[d]+=(r[d]-n[d])*i,this.act[d].setEffectiveWeight(n[d]*l),this.act[d+"U"].setEffectiveWeight(0);for(let d in tc)n[d]+=(r[d]-n[d])*i,this.act[d].setEffectiveWeight(n[d]*l);if(this.mixer.update(e),this.dead)return;this.lean+=((t.lean||0)-this.lean)*Math.min(1,e*6),this.kick=Math.max(0,this.kick-e*9),this.flashT>0&&(this.flashT-=e)<=0&&(this.flash.visible=!1);let c=this.bones,h=this.lean;if(this.inner.position.x=h*.24,Math.abs(h)>.01||this.kick>.01){this.root.getWorldQuaternion(Dn);let d=yp.set(0,0,-1).applyQuaternion(Dn),f=vp.set(1,0,0).applyQuaternion(Dn);Math.abs(h)>.01&&(Cs(c.spine_01,Dn.setFromAxisAngle(d,h*.27)),Cs(c.spine_02,Dn.setFromAxisAngle(d,h*.2)),Cs(c.spine_03,Dn.setFromAxisAngle(d,h*.15)),Cs(c.Head,Dn.setFromAxisAngle(d,-h*.3))),this.kick>.01&&Cs(c.spine_03,Dn.setFromAxisAngle(f,this.kick*.035))}let u=this.uOne||this.fOne?0:1;if(this.ikW+=(u-this.ikW)*Math.min(1,e*8),this.ikW>.5){this.gun.updateWorldMatrix(!0,!1);let d=Mp.copy(this.gripL).applyMatrix4(this.gun.matrixWorld),f=d.x,p=d.y,y=d.z;this.root.getWorldQuaternion(Dn);let g=new P(-.55,-.8,.2).applyQuaternion(Dn);_v(c.upperarm_l,c.lowerarm_l,c.hand_l,new P(f,p,y),g)}}refresh(){this.root.updateWorldMatrix(!0,!0)}muzzle(e){return e.copy(this.gun.muzzle).applyMatrix4(this.gun.matrixWorld)}eye(e){return e.setFromMatrixPosition(this.bones.Head.matrixWorld).setY(e.y+.07)}bone(e,t){return t.setFromMatrixPosition(this.bones[e].matrixWorld)}rayHit(e,t,n,i){if(this.zoneFrame!==i){this.refresh(),this.zoneFrame=i;let a=l=>new P().setFromMatrixPosition(this.bones[l].matrixWorld),o=a("Head");o.y+=.075,this.zones=[[o,o,.125,"head",2.5],[a("neck_01"),a("spine_03"),.075,"torso",1],[a("spine_03"),a("spine_02"),.185,"torso",1],[a("spine_02"),a("pelvis"),.175,"torso",1],[a("upperarm_l"),a("lowerarm_l"),.058,"arm",.6],[a("lowerarm_l"),a("hand_l"),.05,"arm",.6],[a("upperarm_r"),a("lowerarm_r"),.058,"arm",.6],[a("lowerarm_r"),a("hand_r"),.05,"arm",.6],[a("thigh_l"),a("calf_l"),.088,"leg",.7],[a("calf_l"),a("foot_l"),.068,"leg",.7],[a("thigh_r"),a("calf_r"),.088,"leg",.7],[a("calf_r"),a("foot_r"),.068,"leg",.7]]}let r=null;for(let a of this.zones){let o=a[0],l=a[1],c=a[2],h=l.x-o.x,u=l.y-o.y,d=l.z-o.z,f=e.x-o.x,p=e.y-o.y,y=e.z-o.z,g=h*h+u*u+d*d,m=h*t.x+u*t.y+d*t.z,x=h*f+u*p+d*y,S=t.x*f+t.y*p+t.z*y,v=g-m*m,b=v>1e-9?yn.clamp((x-m*S)/v,0,1):0;g<1e-9&&(b=0);let E=m*b-S;if(E<0)continue;let _=o.x+h*b-(e.x+t.x*E),M=o.y+u*b-(e.y+t.y*E),I=o.z+d*b-(e.z+t.z*E),R=_*_+M*M+I*I;R>c*c||(E-=Math.sqrt(c*c-R),E<n&&(!r||E<r.d)&&(r={d:Math.max(0,E),part:a[3],mult:a[4]}))}return r}};var ka={recruit:{label:"RECRUIT",react:[.8,1.4],detect:.75,spread:4,settle:1.5,burst:[3,6],pause:[.6,1.3],hold:[1.5,4],memory:8,searchPts:[1,2],searchTime:10,share:12,radio:[3,5.5],radioFail:.3,mistake:.3,decide:[.9,1.6],hear:.8,hide:[1.5,3.6],expose:[1.4,3.2],glance:.15,switchSide:.1,peeks:[3,6],flank:.05,suppress:0,bound:!1,nades:0,investigate:.6,alarmDelay:[9,16],alarmChance:.5,coverDelay:[1.5,3.5]},tactical:{label:"TACTICAL",react:[.42,.8],detect:1,spread:3,settle:1.1,burst:[2,4],pause:[.35,.8],hold:[1.5,3.5],memory:15,searchPts:[3,4],searchTime:18,share:20,radio:[1.4,2.6],radioFail:.05,mistake:.1,decide:[.55,1],hear:1,hide:[.8,2.6],expose:[.8,1.8],glance:.35,switchSide:.3,peeks:[2,4],flank:.35,suppress:.25,bound:!1,nades:0,investigate:.95,alarmDelay:[4,8],alarmChance:.9,coverDelay:[.2,.8]},elite:{label:"ELITE SQUAD",react:[.3,.65],detect:1.1,spread:2.7,settle:.85,burst:[2,4],pause:[.3,.7],hold:[1,3],memory:22,searchPts:[4,5],searchTime:26,share:26,radio:[.8,1.5],radioFail:0,mistake:.06,decide:[.4,.8],hear:1.15,hide:[.5,2.2],expose:[.6,1.4],glance:.45,switchSide:.45,peeks:[1,3],flank:.6,suppress:.6,bound:!0,nades:1,investigate:1,alarmDelay:[2,4],alarmChance:1,coverDelay:[.1,.5]}},yv={guard:{name:"Rifleman",aggr:.5,caut:.5},aggressor:{name:"Pointman",aggr:.85,caut:.25},cautious:{name:"Marksman",aggr:.25,caut:.85}},vv=17,$t=s=>Ie(s[0],s[1]),nc=s=>Math.floor(Ie(s[0],s[1]+1)),Ba=(s,e)=>{let t=s-e;for(;t>Math.PI;)t-=6.2832;for(;t<-Math.PI;)t+=6.2832;return t},Sp=()=>(Math.random()+Math.random()+Math.random()-1.5)*1.4,es=(s,e)=>Math.atan2(-s,-e),ic=new P,Mv=new P,sc=class{constructor(e,t,n,i,r,a,o={}){this.g=e,this.pr=a,this.type=yv[r],this.typeId=r;let l=a.bound?.2:.1;this.aggr=yn.clamp(this.type.aggr+Ie(-l,l),.05,1),this.caut=yn.clamp(this.type.caut+Ie(-l,l),.05,1),this.pos=new P(t,e.world.nav.height(t,n),n),this.yaw=Ie(6.28),this.hp=100,this.dead=!1,this.deadT=0,this.baseYaw=this.yaw,this.route=i,this.wi=0,this.dir=Math.random()<.5?1:-1,this.waitT=Ie(0,3),this.waitR=o.wait||[1,4.5],this.duty=o.duty||"patrol",this.home=o.home||i[0],this.order=null,this.holdPost=!1,this.tac=null,this.state="PATROL",this.stateT=0,this.phase="",this.t=Ie(10),this.path=null,this.pi=0,this.trav=null,this.approach=null,this.lkp=new P,this.lkpVel=new P,this.hasLkp=!1,this.lkpAge=99,this.detect=0,this.los=!1,this.seeBody=!1,this.seeing=!1,this.seenT=0,this.unseen=99,this.pd=99,this.percT=Ie(.15),this.bodyT=Ie(1),this.react=0,this.burst=0,this.shotT=0,this.ammo=30,this.reloading=!1,this.reloadT=0,this.blockT=0,this.blindT=0,this.decT=0,this.holdT=0,this.waited=0,this.supp=0,this.stun=0,this.shoutT=0,this.radioT=0,this.radioCool=0,this.openT=0,this.alerted=!1,this.crouch=!1,this.moved=0,this.leanW=0,this.suppLeft=0,this.nades=a.nades&&(r!=="cautious"||Math.random()<.5)?1:0,this.throwT=0,this.sus=new P,this.susT=0,this.after="check",this.search=[],this.searchEnd=0,this.spot=null,this.modes=[],this.mode=null,this.peeks=0,this.maxPeeks=3,this.hideT=0,this.phaseT=0,this.bad=new Set,this.wasHit=!1,this.ch=new Rr(a.bound?"elite":r,"carbine"),e.scene.add(this.ch.root),this.sync(),this.ch.refresh()}sync(){let e=this.ch.root;e.position.copy(this.pos),e.rotation.y=this.yaw}engaged(){return!this.dead&&this.hasLkp&&this.lkpAge<10&&(this.state==="COMBAT"||this.state==="COVER"||this.state==="MOVE")}combat(){return this.state==="COMBAT"||this.state==="COVER"||this.state==="MOVE"}set(e,t=""){this.state=e,this.stateT=0,this.phase=t,e!=="COVER"&&(this.crouch=!1)}release(){this.spot&&(this.spot.user===this&&(this.spot.user=null),this.spot=null),this.approach=null}goTo(e,t){return this.path=this.g.world.nav.path(this.pos.x,this.pos.z,e,t),this.pi=0,this.approach=null,!!this.path}follow(e,t){let n=this.pos;if(this.trav){let i=this.trav;i.t+=e/i.dur;let r=Math.min(1,i.t),a=r*r*(3-2*r);return n.x=i.x0+(i.x1-i.x0)*a,n.z=i.z0+(i.z1-i.z0)*a,n.y=i.type==="vault"?i.y0+(i.y1-i.y0)*a+(i.h-Math.min(i.y0,i.y1)+.1)*Math.sin(Math.PI*r):i.type==="climb"?i.y0+(i.y1-i.y0)*Math.min(1,r*1.7):i.y0+(i.y1-i.y0)*r*r,this.moved=2,this.moveYaw=es(i.x1-i.x0,i.z1-i.z0),r>=1&&(this.trav=null,this.pi++),!1}if(this.path&&this.pi<this.path.length){let i=this.path[this.pi];if(i.link){let h=i.link.type==="vault"?.9:i.link.type==="climb"?1.05:.55;return this.trav={x0:n.x,z0:n.z,y0:n.y,x1:i.x,z1:i.z,y1:i.y,h:i.link.h,type:i.link.type,t:0,dur:h},i.link.type!=="drop"&&this.ch.playFull("ClimbUp_1m",{speed:1.9/h,fade:.12}),!1}let r=i.x-n.x,a=i.z-n.z,o=Math.hypot(r,a);if(o<.2)return this.pi++,this.pi>=this.path.length&&!this.approach;let l=Math.min(o,t*e);n.x+=r/o*l,n.z+=a/o*l,this.moved=t,this.moveYaw=es(r,a);let c=this.g.world.nav.height(n.x,n.z);return n.y+=(c-n.y)*Math.min(1,e*10),!1}if(this.approach){let i=this.approach,r=i.x-n.x,a=i.z-n.z,o=Math.hypot(r,a);if(o<.08)return this.approach=null,!0;let l=Math.min(o,Math.min(t,2.2)*e);return n.x+=r/o*l,n.z+=a/o*l,this.moved=1.6,this.moveYaw=es(r,a),!1}return!0}canSee(){let e=this.g,t=e.player;if(t.dead||this.stun>0)return!1;let n=this.ch.eye(ic),i=t.pos.x-n.x,r=t.pos.z-n.z,a=Math.hypot(i,r);if(a>e.world.env.viewRange)return!1;let o=this.alerted||this.combat()?1.85:1.05;return a>2&&Math.abs(Ba(es(i,r),this.yaw))>o?!1:(this.seeBody=e.los(n.x,n.y,n.z,t.pos.x+t.leanX*.4,t.pos.y+t.height*.5,t.pos.z+t.leanZ*.4),this.seeBody||e.los(n.x,n.y,n.z,t.eyePos.x,t.eyePos.y,t.eyePos.z))}hear(e,t,n){if(this.dead||this.seeing||this.stun>0)return;let i=t==="step"?1.5:1+n*.12,r=e.x+Ie(-i,i),a=e.z+Ie(-i,i),o=this.state==="PATROL"||this.state==="SEARCH";if(t==="ally"){o&&!this.holdPost&&(this.alerted=!0,this.suspect(r,a,"investigate",Ie(.5,1.5)));return}if(t==="shot"||t==="explosion"){if(this.alerted=!0,this.g.sec.suspicious(),(this.lkpAge>1.5||!this.hasLkp)&&(this.lkp.set(r,0,a),this.lkpVel.set(0,0,0),this.lkpAge=.5,this.hasLkp=!0),this.holdPost&&this.state==="COVER")return;o?this.suspect(r,a,this.duty==="objective"?"defend":"investigate",Ie(.4,1.2)/this.pr.detect):this.state==="SUSPICIOUS"?(this.sus.set(r,0,a),this.after==="check"&&(this.after="investigate")):this.state==="INVESTIGATE"&&Math.hypot(r-this.inv.x,a-this.inv.z)>8&&this.goInvestigate(r,a)}else o?this.suspect(r,a,"check",Ie(1,2)):this.combat()&&this.lkpAge>2&&(this.lkp.set(r,0,a),this.lkpAge=1)}suspect(e,t,n,i){this.release(),this.sus.set(e,0,t),this.after=n,this.susT=i,this.set("SUSPICIOUS"),this.path=null}onAlert(e,t){this.dead||this.seeing||this.stun>0||(this.alerted=!0,(this.lkpAge>2||!this.hasLkp)&&(this.lkp.set(e,0,t),this.lkpVel.set(0,0,0),this.lkpAge=1,this.hasLkp=!0),(this.state==="PATROL"||this.state==="SEARCH")&&this.suspect(e,t,this.duty==="objective"?"defend":Math.random()<this.pr.flank?"flank":"investigate",Ie(.3,1.2)))}flashbang(e){this.dead||(this.stun=Math.max(this.stun,e),this.detect=0,this.seeing=!1,this.los=!1,this.ch.playUpper("Hit_Head",{speed:.5}),this.trav||(this.path=null))}damage(e,t,n){if(!this.dead){if(this.hp-=e,this.supp=Math.min(1.5,this.supp+.6),this.wasHit=!0,this.hp<=0){this.dead=!0,this.release(),this.ch.die(n==="blast"),this.g.onKill(this);return}if(this.stun<=0&&this.ch.playUpper(n==="head"?"Hit_Head":"Hit_Chest",{speed:1.7,fade:.08}),this.state==="COVER"&&this.phase!=="hide"&&this.toHide(),!this.seeing){let i=Math.hypot(t.x-this.pos.x,t.z-this.pos.z),r=3+i*.1;this.alerted=!0,this.detect=Math.max(this.detect,.6),this.lkp.set(t.x+Ie(-r,r),0,t.z+Ie(-r,r)),this.lkpAge=.5,this.hasLkp=!0,this.react=$t(this.pr.react)*.6,!this.combat()&&this.state!=="ALARM"&&this.engage()}}}rayHit(e,t,n){let i=this.pos,r=(i.x-e.x)*t.x+(i.y+.9-e.y)*t.y+(i.z-e.z)*t.z;if(r<-1.5||r>n+1.5)return null;let a=e.x+t.x*r-i.x,o=e.y+t.y*r-i.y-.9,l=e.z+t.z*r-i.z;return a*a+o*o+l*l>2.2?null:this.ch.rayHit(e,t,n,this.g.frame)}modesFor(e,t){let n=this.g,i=t.y+1.45;if(n.los(e.x,e.y+(e.high?1.35:.7),e.z,t.x,i,t.z))return null;let r=[];for(let a of e.sides)n.los(e.x+e.tx*a*.5,e.y+(e.high?1.5:1),e.z+e.tz*a*.5,t.x,i,t.z)&&r.push({type:"side",side:a});return e.over&&n.los(e.x,e.y+1.55,e.z,t.x,i,t.z)&&r.push({type:"over"}),r}pickCover(e,t,n,i){let r=this.g,a=r.world,o=n?n.x:this.pos.x,l=n?n.z:this.pos.z,c=i||(e==="retreat"?26:18),h=r.enemies.filter(f=>f!==this&&!f.dead&&f.engaged()).map(f=>Math.atan2(f.pos.z-t.z,f.pos.x-t.x)),u=a.objective.pos,d=[];for(let f of a.cover){if(f.user&&f.user!==this&&!f.user.dead||this.bad.has(f.id)||this.spot===f&&e!=="defend")continue;let p=Math.hypot(f.x-o,f.z-l);if(p>c)continue;let y=Math.hypot(f.x-t.x,f.z-t.z);if(y<5||y>46||((t.x-f.x)*-f.nx+(t.z-f.z)*-f.nz)/y<.3)continue;let g=-Math.hypot(f.x-this.pos.x,f.z-this.pos.z)*.55+(f.high?1.5:0)+f.sides.length*.6+Ie(0,2.5);if(e==="hold")g-=Math.abs(y-17)*.15;else if(e==="push")g-=y*.55;else if(e==="retreat"){if(y<this.pd+4)continue;g+=y*.4}else if(e==="flank"){let m=3.14,x=Math.atan2(f.z-t.z,f.x-t.x);for(let S of h)m=Math.min(m,Math.abs(Ba(x,S)));g+=Math.min(m,1.9)*4.5-Math.abs(y-14)*.2}else e==="defend"&&(g-=p*1.2+Math.hypot(f.x-u[0],f.z-u[2])*.15);d.push([g,f])}d.sort((f,p)=>p[0]-f[0]);for(let f=0;f<Math.min(d.length,12);f++){let p=d[f][1],y=this.modesFor(p,t);if(y&&(y.length||e==="retreat"||e==="defend"))return{s:p,modes:y}}return null}takeCover(e,t=this.lkp,n,i){let r=this.pickCover(e,t,n,i);return!r||!this.goTo(r.s.cell.x,r.s.cell.z)?!1:(this.release(),this.spot=r.s,r.s.user=this,this.modes=r.modes,this.approach={x:r.s.x,z:r.s.z},this.set("MOVE",e),this.peeks=0,this.maxPeeks=nc(this.pr.peeks),this.wasHit=!1,!0)}toHide(e=0){if(this.phase="hide",this.hideT=$t(this.pr.hide)+e,this.suppLeft=0,this.extended=!1,(this.peeks>=this.maxPeeks||this.wasHit)&&!this.holdPost&&this.g.sec.mayMove(this)){let t=this.tac;this.takeCover(t==="flank"?"flank":t==="push"?"push":this.hp<40?"retreat":"hold")}}afterHide(){let e=this.g,t=this.pr,n=this.spot;if(!this.hasLkp){if(this.modes=n.sides.map(a=>({type:"side",side:a})),n.over&&this.modes.push({type:"over"}),!this.modes.length){this.hideT=3;return}this.mode=this.modes[Math.floor(Math.random()*this.modes.length)],this.phase="glance",this.phaseT=Ie(.7,1.6);return}if(this.lkpAge>t.memory){this.holdPost?(this.hasLkp=!1,this.hideT=Ie(1,3)):this.startSearch(this.lkp.x,this.lkp.z);return}let i=this.modesFor(n,this.lkp);if(!i){this.bad.add(n.id),this.takeCover(this.hp<40?"retreat":"hold")||this.engage(!0);return}if(this.modes=i,this.tryGrenade()){this.hideT=1.6;return}if(this.unseen>this.holdT&&!this.holdPost&&this.nextMove())return;if(!i.length){this.hideT=Ie(.8,1.6),this.waited++,this.waited>2&&!this.holdPost&&!this.takeCover("hold")&&this.goInvestigate(this.lkp.x,this.lkp.z);return}if(t.mistake>.2&&Math.random()<t.mistake*.4&&this.unseen<3){this.engage(!0),this.openT=Ie(2,4);return}let r=i[Math.floor(Math.random()*i.length)];this.mode&&i.length>1&&Math.random()<t.switchSide?r=i.find(a=>a.type!==this.mode.type||a.side!==this.mode.side)||r:this.mode&&Math.random()>t.switchSide&&(r=i.find(a=>a.type===this.mode.type&&a.side===this.mode.side)||r),this.mode=r,this.blockT=0,this.blindT=0,Math.random()<t.glance&&this.unseen>1.2?(this.phase="glance",this.phaseT=Ie(.35,.9)):(this.phase="fire",this.phaseT=$t(t.expose),this.peeks++,this.shotT=Math.min(this.shotT,.12),this.burst=0,this.suppLeft=Math.random()<t.suppress||this.tac==="suppress"?nc([1,2]):0)}nextMove(){let e=this.g,t=this.pr,n=this.tac,i=Math.random(),r=Math.hypot(this.lkp.x-this.pos.x,this.lkp.z-this.pos.z);if(!e.sec.mayMove(this))return this.hideT=Ie(.6,1.4),!0;let a;if(n==="flank")a=i<.75?"flank":"push";else if(n==="push")a=i<.7?"push":"flank";else if(n)a=this.waited<3?"wait":"push";else{let o=.3+this.aggr,l=t.flank*(.5+this.aggr),c=(.3+this.caut)*(this.waited<2?1:.2),h=i*(o+l+c);a=h<o?"push":h<o+l?"flank":"wait"}return a==="wait"?(this.holdT=this.unseen+$t(t.hold),this.waited++,this.hideT=$t(t.hide),!0):(this.waited=0,a==="push"&&r<10?(this.goInvestigate(this.lkp.x,this.lkp.z),!0):(this.takeCover(a)||this.goInvestigate(this.lkp.x,this.lkp.z),!0))}tryGrenade(){let e=this.g,t=this.lkp;if(this.nades<=0||e.sec.nadeCool>0||this.seeing||this.lkpAge<2.5||this.lkpAge>9)return!1;let n=this.ch.eye(ic),i=Math.hypot(t.x-n.x,t.z-n.z);if(i<9||i>26||e.enemies.some(c=>!c.dead&&Math.hypot(c.pos.x-t.x,c.pos.z-t.z)<7.5))return!1;let r=(n.x+t.x)/2,a=(n.z+t.z)/2,o=n.y+1.2+i*.16;if(!e.los(n.x,n.y+.3,n.z,r,o,a)||!e.los(r,o,a,t.x,t.y+.4,t.z))return!1;let l=this.tac==="push"||e.enemies.some(c=>!c.dead&&c.tac==="push"&&c.engaged())?Math.random()<.7:Math.random()<.3;return this.nades--,e.sec.nadeCool=14,this.throwT=.5,this.throwKind=l?"flash":"frag",this.throwAt={x:t.x+Ie(-1.5,1.5),y:t.y,z:t.z+Ie(-1.5,1.5),d:i},this.ch.playUpper("OverhandThrow",{speed:1.5}),e.say(this,l?"Flash out!":"Frag out!"),!0}engage(e){this.holdPost=this.holdPost&&this.duty==="objective",this.holdT=$t(this.pr.hold),this.waited=0,this.decT=$t(this.pr.decide),this.wantCrouch=Math.random()<.3*this.caut+.1,!(this.state==="COVER"&&!e)&&(this.release(),this.path=null,this.set("COMBAT"),this.openT=$t(this.pr.coverDelay))}goInvestigate(e,t){this.release();let n=this.g.world.nav.nearest(e,t);if(!n||!this.goTo(n.x,n.z))return this.startSearch(this.pos.x,this.pos.z);this.inv=n,this.set("INVESTIGATE")}startSearch(e,t){let n=this.g,i=n.world.nav,r=this.pr,a=nc(r.searchPts),o=Math.random()<r.mistake;this.release(),this.search=[];let l=this.lkpVel,c=Math.hypot(l.x,l.z);for(let h=0;h<a;h++){let u=null;for(let d=0;d<(r.bound?5:2);d++){let f=Ie(6.283),p=o?Ie(9,17):Ie(3,11),y=e+Math.cos(f)*p,g=t+Math.sin(f)*p;h===0&&c>1.5&&r.label!=="RECRUIT"&&(y=e+l.x/c*Ie(5,10)+Ie(-2,2),g=t+l.z/c*Ie(5,10)+Ie(-2,2));let m=i.snap(y,g);if(m&&(u||(u=m),!n.los(m.x,m.y+1.2,m.z,e,m.y+1.4,t))){u=m;break}}u&&this.search.push(u)}this.searchEnd=this.t+r.searchTime,this.waitT=Ie(.5,1.5),this.path=null,this.set("SEARCH")}resume(){if(this.release(),this.hasLkp=!1,this.order&&this.doOrder())return;this.holdPost=!1,this.set("PATROL");let e=this.route[this.wi];this.goTo(e[0],e[1]),this.waitT=0,this.g.sec.level<2&&(this.alerted=!1)}setOrder(e){this.order=e,(this.state==="PATROL"||this.state==="SEARCH"||this.state==="COVER"&&this.holdPost&&!this.hasLkp)&&this.doOrder()}doOrder(){let e=this.order;return e?(this.alerted=!0,e.type==="investigate"?(this.order=null,this.holdPost=!1,this.goInvestigate(e.x,e.z),!0):(this.holdPost=!0,this.hasLkp=!1,this.lkp.set(e.tx,0,e.tz),this.spot&&this.state==="COVER"&&Math.hypot(this.spot.x-e.x,this.spot.z-e.z)<7&&this.modesFor(this.spot,this.lkp)||this.takeCover("defend",this.lkp,e,7)||(this.release(),this.route=[[e.x,e.z]],this.wi=0,this.waitR=[4,9],this.goTo(e.x,e.z),this.set("PATROL")),!0)):!1}goAlarm(){let e=this.g.world.panel;return this.release(),this.goTo(e.x,e.z)?(this.holdPost=!1,this.set("ALARM","run"),!0):!1}fire(e){let t=this.g,n=t.player,i=this.pr,r=this.ch;r.refresh();let a=r.muzzle(ic),o=a.x,l=a.y,c=a.z,h,u,d;e?(h=this.lkp.x,u=this.lkp.y+1.1,d=this.lkp.z):this.seeBody?(h=n.pos.x+n.leanX*.5,u=n.pos.y+n.height*.58,d=n.pos.z+n.leanZ*.5):(h=n.eyePos.x,u=n.eyePos.y-.06,d=n.eyePos.z);let f=h-o,p=u-l,y=d-c,g=Math.hypot(f,p,y);if(Nn(t.world.colliders,o,l,c,f/g,p/g,y/g,Math.min(g,1.7),"bullet"))return this.blockT+=.3,!1;this.ammo--;let m=i.spread*(1+this.pd/40)*(1+Math.min(n.speed,7)/7*.8)*(1+Math.max(0,1-(this.seenT+(this.state==="COVER"?i.settle*.4:0))/i.settle)*.9)*(this.supp>.5?1.35:1)*(e?1.7:1)*(n.crouch?1.15:1)*Math.PI/180,x=Math.atan2(f,y)+Sp()*m,S=Math.atan2(p,Math.hypot(f,y))+Sp()*m*.7,v=Math.cos(S);f=Math.sin(x)*v,p=Math.sin(S),y=Math.cos(x)*v;let b=Nn(t.world.colliders,o,l,c,f,p,y,120,"bullet"),E=b?b.d:120,_=Nn(t.playerBox(),o,l,c,f,p,y,E,"bullet"),M=_?_.d:E,I=t.v1.set(o,l,c),R=t.v2.set(o+f*M,l+p*M,c+y*M);return t.fx.tracer(I,R,16756848),_?n.damage(vv,this.pos,{name:this.type.name,dist:this.pd,x:this.pos.x,z:this.pos.z}):(b&&t.fx.impact(R,t.v3.set(b.nx,b.ny,b.nz)),t.nearMiss(o,l,c,f,p,y)),r.fire(),t.enemyShotSound(this),t.sound(this.pos,30,"ally",this),!0}update(e){let t=this.g,n=t.player,i=this.pr,r=this.ch;if(this.dead){this.deadT<4&&(this.deadT+=e,r.update(e,{speed:0}),this.pos.y>t.world.nav.height(this.pos.x,this.pos.z)+.02&&(this.pos.y=Math.max(t.world.nav.height(this.pos.x,this.pos.z),this.pos.y-e*4),this.sync()));return}if(this.t+=e,this.stateT+=e,this.moved=0,this.supp=Math.max(0,this.supp-e*.25),this.radioCool-=e,this.stun>0){this.stun-=e,this.crouch=!0,this.seeing=!1,this.los=!1,this.lkpAge+=e*2,this.unseen+=e,this.trav&&this.follow(e,0),r.update(e,{speed:0,crouch:!0,aim:!1,lean:0}),this.sync(),this.stun<=0&&(r.stopUpper(),this.react=$t(i.react)+.4,this.state!=="COVER"?this.hasLkp&&!this.takeCover("hold")&&this.startSearch(this.pos.x,this.pos.z):this.toHide());return}(this.percT-=e)<=0&&(this.percT=.1+Math.random()*.05,this.los=this.canSee());let a=n.pos.x-this.pos.x,o=n.pos.z-this.pos.z;if(this.pd=Math.hypot(a,o),this.los){let x=i.detect*t.world.env.detect*(2.2*(1-this.pd/t.world.env.viewRange)+.25);this.pd<6&&(x*=3),n.crouch&&(x*=.55),n.speed>5.5?x*=1.4:n.speed<.5&&(x*=.8),this.seeBody||(x*=.6),this.alerted&&(x*=3),this.detect=Math.min(1,this.detect+x*e)}else this.detect=Math.max(0,this.detect-.3*e);let l=this.seeing;if(this.seeing=this.los&&this.detect>=1,this.seeing?(this.lkp.copy(n.pos),this.lkpVel.copy(n.vel),this.lkpAge=0,this.hasLkp=!0,this.unseen=0,this.seenT+=e,l||(this.react=Math.max(this.react,$t(i.react)*(this.combat()?this.unseen<5?.25:.5:1)+(Math.random()<i.mistake*.5?Ie(.4,1):0)),this.alerted=!0,(this.state==="ALARM"?this.pd<12:!this.combat())&&this.engage(),this.shoutT<=0&&(this.shoutT=.7),this.radioCool<=0&&this.radioT<=0&&(this.radioT=$t(i.radio)))):(this.lkpAge+=e,this.unseen+=e,this.seenT=0,l&&(this.holdT=$t(i.hold),this.waited=0)),this.shoutT>0&&(this.shoutT-=e)<=0&&this.lkpAge<3&&t.shout(this),this.radioT>0&&(this.radioT-=e*(this.seeing&&this.state!=="COVER"?.5:1),this.radioT<=0&&(this.radioCool=7,Math.random()>=i.radioFail&&this.lkpAge<6&&(t.sec.radio(this,"contact",this.lkp.x,this.lkp.z),this.seeing||r.playUpper("Idle_TalkingPhone_Loop",{speed:1,fade:.2,loop:!1})))),!this.combat()&&this.state!=="ALARM"&&(this.bodyT-=e)<=0){this.bodyT=.8;for(let x of t.enemies)if(!(!x.dead||x.found||Math.hypot(x.pos.x-this.pos.x,x.pos.z-this.pos.z)>16)&&!(Math.abs(Ba(es(x.pos.x-this.pos.x,x.pos.z-this.pos.z),this.yaw))>1.1||!t.los(this.pos.x,this.pos.y+1.6,this.pos.z,x.pos.x,x.pos.y+.4,x.pos.z))){x.found=!0,this.alerted=!0,this.suspect(x.pos.x,x.pos.z,"investigate",Ie(1,2)),this.bodyCall={x:x.pos.x,z:x.pos.z,t:$t(i.radio)+1};break}}if(this.bodyCall&&(this.bodyCall.t-=e)<=0&&(Math.random()>=i.radioFail&&t.sec.radio(this,"body",this.bodyCall.x,this.bodyCall.z),this.bodyCall=null),this.reloading&&(this.reloadT-=e)<=0&&(this.reloading=!1,this.ammo=30),this.ammo<=0&&!this.reloading&&(this.reloading=!0,this.reloadT=2.3,r.playUpper("Pistol_Reload",{speed:.9})),this.throwT>0&&(this.throwT-=e)<=0){r.refresh();let x=r.bone("hand_r",Mv),S=this.throwAt,v=1+S.d/20,b=14;t.spawnGrenade(this.throwKind,x.clone(),new P((S.x-x.x)/v,(S.y+.2-x.y+.5*b*v*v)/v,(S.z-x.z)/v),this)}let c=null,h=0,u=this.alerted||this.state!=="PATROL",d=!1,f=x=>es(x.x-this.pos.x,x.z-this.pos.z);switch(this.state){case"PATROL":if(this.waitT>0)this.waitT-=e,c=(this.baseYaw??this.yaw)+Math.sin(this.t*.6)*.9;else if(this.follow(e,this.alerted?2.2:1.45)){this.wi=(this.wi+this.dir+this.route.length)%this.route.length;let x=this.route[this.wi];this.goTo(x[0],x[1]),this.waitT=this.route.length<3||Math.random()<.6?$t(this.waitR):0,this.baseYaw=this.yaw}this.los&&this.detect>.35&&(t.sec.suspicious(),this.suspect(n.pos.x+Ie(-2,2),n.pos.z+Ie(-2,2),"check",Ie(1.2,2.5))),u=!1;break;case"SUSPICIOUS":c=f(this.sus),(this.susT-=e)<=0&&(this.after==="defend"?(this.order=this.order||{type:"defend",x:this.home[0],z:this.home[1],tx:this.sus.x,tz:this.sus.z},this.doOrder()):this.after==="flank"&&this.hasLkp&&this.takeCover("flank")||(this.after!=="check"||Math.random()<i.investigate?this.goInvestigate(this.sus.x,this.sus.z):this.resume()));break;case"INVESTIGATE":{let x=this.follow(e,this.alerted?3.1:2.3),S=Math.hypot(this.inv.x-this.pos.x,this.inv.z-this.pos.z);S<6&&(c=f(this.inv)),(x||this.stateT>35||S<5&&this.stateT>1&&t.los(this.pos.x,this.pos.y+1.5,this.pos.z,this.inv.x,this.inv.y+1,this.inv.z))&&this.startSearch(this.inv.x,this.inv.z);break}case"SEARCH":if(this.waitT>0)this.waitT-=e,c=(this.baseYaw??this.yaw)+Math.sin(this.t*1.3)*1.3;else if(this.follow(e,2.2))if(this.baseYaw=this.yaw,this.t>this.searchEnd||!this.search.length)this.resume();else{let x=this.search.shift();this.goTo(x.x,x.z),this.waitT=Ie(1,2.5)}break;case"ALARM":if(this.phase==="run")this.follow(e,4.4)&&(this.phase="press",this.phaseT=1.1,r.playUpper("Interact",{speed:1.3}));else{let x=t.world.panel.face;c=es(x[0],x[1]),(this.phaseT-=e)<=0&&(t.sec.lockdown("ALARM TRIGGERED"),this.resume())}break;case"COMBAT":if(c=f(this.lkp),this.crouch=!!this.wantCrouch&&!this.moved,this.path&&this.pi<this.path.length&&this.follow(e,1.7),(this.openT-=e)<=0&&(this.decT-=e)<=0){this.decT=$t(i.decide);let x=this.hp<40&&Math.random()<.5+this.caut*.5;if(this.takeCover(x?"retreat":this.tac==="flank"?"flank":"hold"))break;if(this.tryGrenade()){this.openT=1.2;break}if(!this.seeing&&this.unseen>this.holdT){this.lkpAge>i.memory?this.startSearch(this.lkp.x,this.lkp.z):this.goInvestigate(this.lkp.x,this.lkp.z);break}if(this.wantCrouch=Math.random()<.3+this.caut*.3,Math.random()<.5){let S=this.yaw+(Math.random()<.5?1.57:-1.57),v=t.world.nav.snap(this.pos.x-Math.sin(S)*2.2,this.pos.z-Math.cos(S)*2.2);v&&this.goTo(v.x,v.z)}}break;case"MOVE":{if(this.phase!=="defend"&&this.seeing&&this.pd<7&&this.stateT>.6){this.engage(!0),this.openT=Ie(.8,1.6);break}if(this.follow(e,this.phase==="retreat"?4.6:this.phase==="defend"?3.4:4.3)){if(!this.spot){this.engage(!0);break}this.set("COVER","hide"),this.hideT=Ie(.3,1),this.mode=null,this.ammo<15&&!this.reloading&&(this.reloading=!0,this.reloadT=2.3,r.playUpper("Pistol_Reload",{speed:.9}))}break}case"COVER":{let x=this.spot,S=this.mode;if(c=f(this.hasLkp||this.holdPost?this.lkp:ic.set(x.x-x.nx*5,0,x.z-x.nz*5)),this.phase==="hide")this.crouch=!x.high,this.hideT-=e*(this.supp>.6?.3:1),this.hideT<=0&&!this.reloading&&this.throwT<=0&&this.afterHide();else{let v=this.phase==="glance"?.75:1+Math.min(.3,this.blockT);S.type==="side"?(this.crouch=!x.high,h=(x.tx*S.side*Math.cos(this.yaw)-x.tz*S.side*Math.sin(this.yaw))*v):this.crouch=!1,this.phaseT-=e,this.phase==="glance"?this.phaseT<=0&&(this.seeing&&this.hasLkp?(this.phase="fire",this.phaseT=$t(i.expose),this.peeks++,this.shotT=Math.min(this.shotT,.12),this.burst=0):this.toHide(this.hasLkp?0:Ie(1,3))):(this.seeing?this.blindT=0:(this.blindT+=e,d=this.suppLeft>0&&this.lkpAge<4&&this.blindT>.3),this.blockT>.9?(this.modes=this.modes.filter(b=>b!==S),this.modes.length||this.bad.add(x.id),this.peeks=99,this.toHide()):this.phaseT<=0&&this.seeing&&!this.extended&&this.supp<.4&&this.ammo>4&&Math.random()<.55?(this.extended=!0,this.phaseT=Ie(.5,1.1)):(this.phaseT<=0||this.ammo<=0||this.blindT>.7&&!d)&&this.toHide())}break}}if(this.seeing||d){let x=this.seeing?es(a,o):f(this.lkp);this.moved<3&&(c=x),this.react>0&&(this.react-=e);let S=this.state!=="COVER"||this.phase==="fire"&&Math.abs(r.lean-h)<.3&&r.crouchW<(this.crouch?1.1:.35);!this.reloading&&!this.trav&&this.throwT<=0&&this.moved<2.5&&S&&(this.state==="COMBAT"||this.state==="COVER")&&this.react<=0&&Math.abs(Ba(x,this.yaw))<.3&&r.aimW>.8&&(this.shotT-=e)<=0&&(this.burst<=0&&(this.burst=nc(i.burst),d&&this.suppLeft--),this.fire(d)?(this.burst--,this.shotT=this.burst>0?.115:$t(i.pause)):this.shotT=.15)}let p=c??(this.moved?this.moveYaw:this.yaw),y=(this.combat()?7:3.5)*e,g=Ba(p,this.yaw);this.yaw+=Math.max(-y,Math.min(y,g));let m=this.seeing?Math.atan2(n.pos.y+n.height*.6-(this.pos.y+1.4),Math.max(1,this.pd)):0;r.update(e,{speed:this.trav?0:this.moved,crouch:this.crouch&&!this.moved,aim:u&&this.moved<3.5&&!this.trav,pitch:m,lean:h}),this.sync()}};var Mu=["NORMAL","SUSPICIOUS","ALERT","LOCKDOWN"],bp=s=>Ie(s[0],s[1]),rc=class{constructor(e,t){this.g=e,this.pr=t,this.level=0,this.t=0,this.calm=0,this.report=null,this.tick=0,this.sector=new Float32Array(8),this.runner=null,this.alarmAt=-1,this.nadeCool=6,this.reinforced=!1,this.reinAt=-1,this.assigned=-1}raise(e,t){if(this.calm=0,e<=this.level)return!1;if(this.level=e,this.g.onSecurity(e,t),e>=2)for(let n of this.g.enemies)n.dead||(n.alerted=!0);return!0}sectorOf(e,t){let n=this.g.world.objective.pos;return(Math.round(Math.atan2(e-n[0],t-n[2])/(Math.PI/4))%8+8)%8}hotSector(){let e=-1,t=1.5;for(let n=0;n<8;n++)this.sector[n]>t&&(t=this.sector[n],e=n);return e}setReport(e,t,n,i){let r=i==="body"?0:3.5;this.report={x:e+Ie(-r,r),z:t+Ie(-r,r),t:this.t,by:n,kind:i},this.sector[this.sectorOf(e,t)]+=1,this.assign()}radio(e,t,n,i){let r=this.raise(2,t==="body"?"MAN DOWN REPORTED":"INTRUDER REPORTED");this.setReport(n,i,e,t),this.g.say(e,t==="body"?"Man down! Sweep the area!":r?"Contact! Intruder on site!":"Contact, updating position!"),r&&this.g.world.panel&&(this.alarmAt=Math.random()<this.pr.alarmChance?this.t+bp(this.pr.alarmDelay):1/0)}suspicious(){this.raise(1,"")}lockdown(e){this.raise(3,e)&&(this.reinforced||(this.reinforced=!0,this.reinAt=this.t+Ie(12,18)),this.assign(!0))}mayMove(e){if(!this.pr.bound)return!0;let t=this.g.enemies.filter(r=>!r.dead&&r!==e&&r.engaged());if(!t.length)return!0;let n=t.filter(r=>r.state==="MOVE").length;return t.filter(r=>r.state==="COVER"||r.seeing).length>=1&&n<Math.ceil((t.length+1)/2)}assign(e){let t=this.g,n=this.report,i=t.world;if(!n||this.level<2)return;this.assigned=n.t;let r=t.enemies.filter(f=>!f.dead&&!f.engaged()&&f!==this.runner&&f.stun<=0&&f.state!=="ALARM"),a=(f,p,y)=>Math.hypot(f.pos.x-p,f.pos.z-y),o=t.enemies.filter(f=>!f.dead&&f.duty==="objective");for(let f of r)f.duty==="objective"&&f.setOrder({type:"defend",x:f.home[0],z:f.home[1],tx:n.x,tz:n.z});let l=r.filter(f=>f.duty!=="objective").sort((f,p)=>a(f,n.x,n.z)-a(p,n.x,n.z)),c=this.level===3?1:2,h=i.objective.pos;if(l.splice(0,c).forEach((f,p)=>f.setOrder({type:"investigate",x:n.x+(p?Ie(-5,5):0),z:n.z+(p?Ie(-5,5):0),flank:p>0&&this.pr.flank>.3})),this.pr===void 0||this.pr.label==="RECRUIT")return;if(o.length<2&&l.length){let f=l.shift(),p=i.posts.objective[0];f.duty="objective",f.home=p,f.setOrder({type:"defend",x:p[0],z:p[1],tx:n.x,tz:n.z})}let u=this.hotSector(),d=new Set;for(let f of l){let p=null,y=1e9;if(i.posts.entrance.forEach((m,x)=>{if(d.has(x))return;let S=Math.hypot(m[0]-n.x,m[1]-n.z)+Math.hypot(m[0]-h[0],m[1]-h[2])*.6+a(f,m[0],m[1])*.3;u>=0&&this.sectorOf(m[0],m[1])===u&&(S-=8),S<y&&(y=S,p=x)}),p===null)break;d.add(p);let g=i.posts.entrance[p];f.setOrder({type:"defend",x:g[0],z:g[1],tx:n.x,tz:n.z,name:g[2]})}}update(e){let t=this.g;this.t+=e,this.calm+=e,this.nadeCool-=e;let n=t.enemies.filter(r=>!r.dead),i=n.filter(r=>r.engaged());if(i.length&&(this.calm=0),this.level===1&&this.calm>30&&(this.level=0,t.onSecurity(0,"")),this.level===2&&this.calm>80){this.level=1,this.calm=0,t.onSecurity(1,"SEARCH CALLED OFF");for(let r of n)r.order=null}if(this.reinAt>0&&this.t>=this.reinAt&&(this.reinAt=-1,t.reinforce()),!((this.tick-=e)>0)){if(this.tick=.6,this.pr.label!=="RECRUIT"){let r=0;for(let a of i){if(a.duty==="objective"){a.tac="hold";continue}this.pr.bound?a.tac=a.aggr>.65?"push":a.caut>.65?"overwatch":r%2?"flank":"suppress":a.tac=["hold","flank","hold","push"][r%4],r++}this.pr.bound&&i.length>1&&!i.some(a=>a.tac==="suppress"||a.tac==="overwatch")&&(i[0].tac="suppress")}if(this.runner&&(this.runner.dead||this.runner.state!=="ALARM")&&(this.level<3&&this.runner.dead&&(this.alarmAt=this.t+bp(this.pr.alarmDelay)),this.runner=null),this.level===2&&t.world.panel&&!this.runner&&this.alarmAt>=0&&this.t>=this.alarmAt){let r=t.world.panel,a=n.filter(o=>!o.engaged()&&o.stun<=0).sort((o,l)=>Math.hypot(o.pos.x-r.x,o.pos.z-r.z)-Math.hypot(l.pos.x-r.x,l.pos.z-r.z))[0];a&&a.goAlarm()?(this.runner=a,t.say(a,"Going for the alarm!")):this.alarmAt=this.t+3}this.level>=2&&this.report&&this.assigned!==this.report.t&&this.assign()}}};var Sv={frag:2.8,flash:1.9,smoke:1.6},bv=14,Tv={frag:new Ti(.045,10,8),flash:new Mt(.03,.03,.11,10),smoke:new Mt(.033,.033,.13,10)},Ev={frag:new Lt({color:3095078,roughness:.6,metalness:.3}),flash:new Lt({color:9080724,roughness:.4,metalness:.7}),smoke:new Lt({color:5989488,roughness:.5,metalness:.5})},ac=class{constructor(e){this.g=e,this.list=[],this.smokes=[],this._v=new P}spawn(e,t,n,i){let r=new Ge(Tv[e],Ev[e]);r.position.copy(t),r.castShadow=!0,this.g.scene.add(r),this.list.push({type:e,pos:t,vel:n,owner:i,fuse:Sv[e],mesh:r,rest:!1}),this.g.audio.swish()}update(e){let t=this.g,n=t.world.colliders;for(let i=this.list.length-1;i>=0;i--){let r=this.list[i],a=r.pos,o=r.vel;if(r.fuse-=e,!r.rest){o.y-=bv*e;let l=o.length(),c=l*e,h=c>1e-4?Nn(n,a.x,a.y,a.z,o.x/l,o.y/l,o.z/l,c+.05,"solid"):null;if(h){let u=o.x*h.nx+o.y*h.ny+o.z*h.nz;a.addScaledVector(o,Math.max(0,(h.d-.05)/l)),o.x-=1.35*u*h.nx,o.y-=1.35*u*h.ny,o.z-=1.35*u*h.nz,o.multiplyScalar(.72),l>2.5&&(t.audio.bounce(Math.min(.3,l*.03)),r.owner==="player"&&t.sound(a,7,"step"))}else a.addScaledVector(o,e);a.y<.05&&(a.y=.05,Math.abs(o.y)>1.5&&t.audio.bounce(.15),o.y*=-.3,o.x*=.6,o.z*=.6),o.lengthSq()<.09&&a.y<.08&&(r.rest=!0),r.mesh.position.copy(a),r.mesh.rotation.x+=e*l*2,r.mesh.rotation.z+=e*l}r.fuse<=0&&(this.detonate(r),t.scene.remove(r.mesh),this.list.splice(i,1))}for(let i=this.smokes.length-1;i>=0;i--){let r=this.smokes[i];if(r.t-=e,(r.puff-=e)<=0&&r.t>2.5&&(r.puff=.22,t.fx.puff(this._v.set(r.x+(Math.random()-.5)*4,r.y+.4+Math.random()*2,r.z+(Math.random()-.5)*4),3.2+Math.random()*1.6,3.6,10133668,.12,.6)),r.t<=0){let a=n.indexOf(r.col);a>=0&&n.splice(a,1),this.smokes.splice(i,1)}}}detonate(e){let t=this.g,n=t.player,i=e.pos,r=i.y+.35,a=Math.hypot(n.pos.x-i.x,n.pos.z-i.z);if(e.type==="frag"){t.fx.explosion(i),t.audio.explosion(a),t.sound(i,70,"explosion");let o=(c,h,u,d)=>{let f=Math.hypot(c-i.x,h+d*.5-r,u-i.z);if(f>8)return 0;let p=t.losB(i.x,r,i.z,c,h+d*.55,u)?1:t.losB(i.x,r,i.z,c,h+d*.9,u)?.45:0;return 150*Math.pow(1-f/8,1.3)*p};for(let c of t.enemies){if(c.dead)continue;let h=o(c.pos.x,c.pos.y,c.pos.z,c.crouch?1.1:1.75);h>1&&(c.damage(h,i,"blast"),c.dead||(c.supp=1.5))}let l=o(n.pos.x,n.pos.y,n.pos.z,n.height);l>1&&n.damage(l,i,{name:e.owner==="player"?"your own grenade":"a fragmentation grenade",dist:a,x:i.x,z:i.z,blast:!0}),a<25&&(n.shake=Math.max(n.shake,1.2*(1-a/25)))}else if(e.type==="flash"){t.fx.boom.position.set(i.x,r,i.z),t.fx.boom.intensity=2500,t.sound(i,40,"explosion");for(let l of t.enemies){if(l.dead)continue;let c=Math.hypot(l.pos.x-i.x,l.pos.z-i.z);if(c>17)continue;let h=l.ch.eye(this._v);if(!t.los(i.x,r,i.z,h.x,h.y,h.z))continue;let u=Math.atan2(-(i.x-l.pos.x),-(i.z-l.pos.z))-l.yaw;for(;u>Math.PI;)u-=6.2832;for(;u<-Math.PI;)u+=6.2832;let d=5*(1-c/19)*(Math.abs(u)<1.7?1:.4);d>.6&&l.flashbang(d)}let o=0;if(a<22&&t.los(i.x,r,i.z,n.eyePos.x,n.eyePos.y,n.eyePos.z)){let l=(n.fwd.x*(i.x-n.eyePos.x)+n.fwd.y*(r-n.eyePos.y)+n.fwd.z*(i.z-n.eyePos.z))/(Math.hypot(i.x-n.eyePos.x,r-n.eyePos.y,i.z-n.eyePos.z)||1);o=2.8*(1-a/24)*(l>.2?1:l>-.3?.55:.25),n.blind=Math.max(n.blind,o)}t.audio.flashbang(o)}else{let o={x0:i.x-2.8,x1:i.x+2.8,y0:0,y1:i.y+3.4,z0:i.z-2.8,z1:i.z+2.8,solid:!1,bullet:!1,sight:!0,smoke:!0};t.world.colliders.push(o),this.smokes.push({x:i.x,y:i.y,z:i.z,t:15,puff:0,col:o}),t.audio.noise(1.2,{f:3e3,f2:800,type:"bandpass",q:1,vol:.2});for(let l=0;l<10;l++)t.fx.puff(this._v.set(i.x+(Math.random()-.5)*3.5,i.y+.4+Math.random()*2,i.z+(Math.random()-.5)*3.5),3.5,4,10133668,.12,.6)}}};var Cr=320,oc=class{constructor(e){this.tr=[];let t=new Yt(.02,.02,1);t.translate(0,0,.5);for(let u=0;u<28;u++){let d=new Ge(t,new ot({color:16769696,transparent:!0,opacity:0,blending:Vn,depthWrite:!1,fog:!1}));d.visible=!1,d.life=0,e.add(d),this.tr.push(d)}this.ti=0,this.pp=new Float32Array(Cr*3).fill(-999),this.pc=new Float32Array(Cr*3),this.pv=new Float32Array(Cr*3),this.pl=new Float32Array(Cr);let n=this.pg=new at;n.setAttribute("position",new _t(this.pp,3)),n.setAttribute("color",new _t(this.pc,3));let i=new Mi(n,new Qn({size:.07,vertexColors:!0,transparent:!0,depthWrite:!1}));i.frustumCulled=!1,e.add(i),this.pi=0,this.dec=[];let r=new Hn(.13,.13),a=new ot({color:526602,transparent:!0,opacity:.85,polygonOffset:!0,polygonOffsetFactor:-4});for(let u=0;u<48;u++){let d=new Ge(r,a);d.visible=!1,e.add(d),this.dec.push(d)}this.di=0,this.flash=new cn(16760944,0,16,1.5),e.add(this.flash),this.boom=new cn(16756832,0,40,1.4),e.add(this.boom);let o=document.createElement("canvas");o.width=o.height=64;let l=o.getContext("2d"),c=l.createRadialGradient(32,32,2,32,32,32);c.addColorStop(0,"rgba(255,255,255,0.9)"),c.addColorStop(.5,"rgba(255,255,255,0.45)"),c.addColorStop(1,"rgba(255,255,255,0)"),l.fillStyle=c,l.fillRect(0,0,64,64);let h=new Si(o);this.puffs=[];for(let u=0;u<48;u++){let d=new ia(new rr({map:h,transparent:!0,opacity:0,depthWrite:!1,color:8947848}));d.visible=!1,d.life=0,e.add(d),this.puffs.push(d)}this.pfi=0,this._v=new P}tracer(e,t,n=16769696){let i=this.tr[this.ti++%this.tr.length];i.position.copy(e),i.lookAt(t),i.scale.z=Math.max(.1,e.distanceTo(t)),i.material.color.setHex(n),i.material.opacity=.55,i.visible=!0,i.life=.07}spray(e,t,n,i,r,a,o,l){for(let c=0;c<n;c++){let h=this.pi++%Cr,u=h*3;this.pp[u]=e.x,this.pp[u+1]=e.y,this.pp[u+2]=e.z,this.pv[u]=(t.x+(Math.random()-.5)*1.4)*i*Math.random(),this.pv[u+1]=(t.y+(Math.random()-.3)*1.4)*i*Math.random(),this.pv[u+2]=(t.z+(Math.random()-.5)*1.4)*i*Math.random();let d=.6+Math.random()*.4;this.pc[u]=r*d,this.pc[u+1]=a*d,this.pc[u+2]=o*d,this.pl[h]=l*(.5+Math.random()*.5)}}impact(e,t){this.spray(e,t,7,3.2,.75,.68,.55,.45),this.spray(e,t,3,6,1,.8,.4,.15);let n=this.dec[this.di++%this.dec.length];n.position.set(e.x+t.x*.012,e.y+t.y*.012,e.z+t.z*.012),n.lookAt(this._v.set(e.x+t.x,e.y+t.y,e.z+t.z)),n.rotation.z=Math.random()*6,n.scale.setScalar(1),n.visible=!0}blood(e,t){this.spray(e,t,10,2.6,.5,.04,.03,.5)}muzzle(e){this.flash.position.copy(e),this.flash.intensity=45}shell(e,t){this.spray(e,t,1,2.6,.9,.68,.25,.7)}puff(e,t,n,i=9079434,r=.4,a=.5){let o=this.puffs[this.pfi++%this.puffs.length];o.position.copy(e),o.scale.setScalar(t*.5),o.size=t,o.life=o.max=n,o.rise=r,o.op=a,o.material.color.setHex(i),o.material.rotation=Math.random()*6,o.visible=!0}explosion(e){this.boom.position.set(e.x,e.y+.6,e.z),this.boom.intensity=900;let t=this._v.set(0,1,0);this.spray(e,t,40,14,1,.7,.25,.5),this.spray(e,t,30,9,.35,.33,.3,1.1);for(let i=0;i<6;i++)this.puff(new P(e.x+(Math.random()-.5)*2,e.y+.5+Math.random(),e.z+(Math.random()-.5)*2),3+Math.random()*2,2.2+Math.random(),5591114,.9,.55);let n=this.dec[this.di++%this.dec.length];n.position.set(e.x,Math.max(.02,e.y-.04),e.z),n.rotation.set(-Math.PI/2,0,Math.random()*6),n.scale.setScalar(14),n.visible=!0}update(e){for(let r of this.tr)r.visible&&(r.life-=e,r.material.opacity=Math.max(0,r.life/.07)*.55,r.life<=0&&(r.visible=!1));let{pp:t,pv:n,pl:i}=this;for(let r=0;r<Cr;r++){if(i[r]<=0)continue;let a=r*3;i[r]-=e,n[a+1]-=9*e,t[a]+=n[a]*e,t[a+1]+=n[a+1]*e,t[a+2]+=n[a+2]*e,i[r]<=0&&(t[a+1]=-999)}this.pg.attributes.position.needsUpdate=!0,this.pg.attributes.color.needsUpdate=!0,this.flash.intensity>0&&(this.flash.intensity=Math.max(0,this.flash.intensity-e*700)),this.boom.intensity>0&&(this.boom.intensity=Math.max(0,this.boom.intensity-e*4500));for(let r of this.puffs)if(r.visible){r.life-=e;let a=1-r.life/r.max;r.scale.setScalar(r.size*(.5+a*.7)),r.position.y+=r.rise*e,r.material.opacity=r.op*Math.min(1,a*6)*Math.min(1,r.life/r.max*2.2),r.life<=0&&(r.visible=!1)}}};var lc=class{init(){if(this.ctx){this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e,n=t.createDynamicsCompressor();this.master=t.createGain(),this.master.gain.value=.75,this.master.connect(n),n.connect(t.destination);let i=t.sampleRate*2,r=this.nb=t.createBuffer(1,i,t.sampleRate),a=r.getChannelData(0);for(let o=0;o<i;o++)a[o]=Math.random()*2-1;this.amb=[]}out(e){if(!e||!this.ctx.createStereoPanner)return this.master;let t=this.ctx.createStereoPanner();return t.pan.value=Math.max(-1,Math.min(1,e)),t.connect(this.master),t}noise(e,{f:t=2e3,f2:n,q:i=.7,type:r="lowpass",vol:a=1,pan:o=0,at:l=0}={}){let c=this.ctx;if(!c)return;let h=c.currentTime+l,u=c.createBufferSource(),d=c.createBiquadFilter(),f=c.createGain();u.buffer=this.nb,u.loop=!0,d.type=r,d.Q.value=i,d.frequency.setValueAtTime(t,h),n&&d.frequency.exponentialRampToValueAtTime(n,h+e),f.gain.setValueAtTime(a,h),f.gain.exponentialRampToValueAtTime(.001,h+e),u.connect(d),d.connect(f),f.connect(this.out(o)),u.start(h,Math.random()),u.stop(h+e+.02)}tone(e,t,{f2:n,type:i="sine",vol:r=.3,pan:a=0,at:o=0}={}){let l=this.ctx;if(!l)return;let c=l.currentTime+o,h=l.createOscillator(),u=l.createGain();h.type=i,h.frequency.setValueAtTime(e,c),n&&h.frequency.exponentialRampToValueAtTime(n,c+t),u.gain.setValueAtTime(r,c),u.gain.exponentialRampToValueAtTime(.001,c+t),h.connect(u),u.connect(this.out(a)),h.start(c),h.stop(c+t+.02)}shot(e,t){if(t){this.noise(.09,{f:1700,f2:500,q:1.2,type:"bandpass",vol:e==="dmr"?.5:.36}),this.tone(170,.05,{f2:70,vol:.2,type:"triangle"}),this.click(.22);return}e==="ak"?(this.noise(.26,{f:2600,f2:300,vol:1}),this.tone(130,.2,{f2:38,vol:.9,type:"triangle"}),this.noise(.05,{f:5e3,type:"highpass",vol:.35})):e==="m4"?(this.noise(.17,{f:4200,f2:600,vol:.8}),this.tone(190,.12,{f2:60,vol:.55,type:"triangle"}),this.noise(.04,{f:6500,type:"highpass",vol:.4})):e==="dmr"?(this.noise(.4,{f:2200,f2:180,vol:1.1}),this.tone(95,.32,{f2:30,vol:1,type:"triangle"}),this.noise(.06,{f:4500,type:"highpass",vol:.4}),this.noise(.7,{f:500,f2:120,vol:.2,at:.08})):e==="shotgun"?(this.noise(.36,{f:1500,f2:160,vol:1.2}),this.tone(85,.3,{f2:28,vol:1.1,type:"triangle"}),this.click(.5,.33),this.click(.55,.47)):e==="smg"?(this.noise(.1,{f:3800,f2:900,vol:.6}),this.tone(240,.07,{f2:100,vol:.4,type:"triangle"})):(this.noise(.11,{f:3400,f2:700,vol:.7}),this.tone(260,.09,{f2:90,vol:.5,type:"square"}))}enemyShot(e,t){let n=Math.max(.05,.75/(1+e*.07));this.noise(.22,{f:Math.max(500,2600-e*35),f2:250,vol:n,pan:t}),this.tone(120,.16,{f2:45,vol:n*.7,pan:t,type:"triangle"})}reload(e,t){if(t){this.click(.5,e*.7);return}this.click(.5),this.noise(.05,{f:1800,type:"bandpass",q:3,vol:.4,at:e*.45}),this.click(.6,e*.8),this.click(.7,e*.92)}swish(){this.noise(.16,{f:900,f2:3200,type:"bandpass",q:2,vol:.3})}stab(e){this.noise(.12,{f:500,f2:150,vol:.6}),this.tone(e?110:180,.12,{f2:60,vol:.4})}medkit(){for(let e=0;e<5;e++)this.noise(.12,{f:1200+e*200,type:"bandpass",q:2,vol:.14,at:e*.42})}stim(){this.noise(.25,{f:5e3,f2:1500,type:"highpass",vol:.2}),this.tone(440,.3,{f2:880,vol:.12,type:"sine",at:.1})}bounce(e=.3){this.tone(900,.04,{f2:500,vol:e,type:"square"}),this.noise(.03,{f:2500,type:"bandpass",q:4,vol:e})}explosion(e){let t=Math.max(.15,1.4/(1+e*.05));this.noise(.9,{f:900,f2:60,vol:t}),this.tone(70,.7,{f2:22,vol:t,type:"triangle"}),this.noise(1.6,{f:300,f2:60,vol:t*.35,at:.15})}flashbang(e){this.noise(.25,{f:6e3,type:"highpass",vol:.9}),this.tone(140,.25,{f2:50,vol:.7}),e>.3&&this.tone(3400,1.2+e*1.6,{vol:.09*Math.min(1.5,e),type:"sine",at:.05})}radio(){this.noise(.07,{f:2400,type:"bandpass",q:3,vol:.22}),this.tone(1250,.06,{vol:.07,type:"square",at:.07}),this.noise(.05,{f:2400,type:"bandpass",q:3,vol:.18,at:.5})}alert(e){(e>=3?[660,880,660,880]:e===2?[440,587]:[392]).forEach((n,i)=>this.tone(n,.22,{vol:.16,type:"sawtooth",at:i*.2}))}siren(e){let t=this.ctx;if(!t)return;if(this.sir){try{this.sir[0].stop(),this.sir[1].stop()}catch{}this.sir=null}if(!e)return;let n=t.createOscillator(),i=t.createOscillator(),r=t.createGain(),a=t.createGain();n.type="sawtooth",n.frequency.value=620,i.frequency.value=.45,r.gain.value=140,a.gain.value=.035,i.connect(r),r.connect(n.frequency),n.connect(a),a.connect(this.master),n.start(),i.start(),a.gain.setValueAtTime(.035,t.currentTime+14),a.gain.linearRampToValueAtTime(.012,t.currentTime+20),this.sir=[n,i]}click(e=.5,t=0){this.noise(.035,{f:3200,type:"bandpass",q:5,vol:e,at:t}),this.tone(900,.02,{vol:e*.2,type:"square",at:t})}step(e=.2){this.noise(.09,{f:500+Math.random()*250,f2:150,vol:e})}land(){this.noise(.16,{f:420,f2:90,vol:.45})}hit(e){this.tone(e?520:1500,e?.16:.05,{f2:e?240:1100,vol:.22,type:"square"})}hurt(){this.noise(.18,{f:700,f2:120,vol:.7}),this.tone(90,.2,{f2:50,vol:.5})}whiz(e){this.noise(.09,{f:2500,f2:6e3,type:"bandpass",q:6,vol:.18,pan:e})}pickup(){this.tone(660,.08,{vol:.2,type:"triangle"}),this.tone(990,.12,{vol:.2,type:"triangle",at:.08})}beep(e){this.tone(e?700:1100,.07,{f2:e?1300:600,vol:.14,type:"square"})}objective(){[523,659,784].forEach((e,t)=>this.tone(e,.18,{vol:.2,type:"triangle",at:t*.11}))}win(){[392,523,659,784,1047].forEach((e,t)=>this.tone(e,.5,{vol:.22,type:"triangle",at:t*.16}))}lose(){[330,262,196,131].forEach((e,t)=>this.tone(e,.6,{vol:.25,type:"sawtooth",at:t*.22}))}ambient(e){let t=this.ctx;if(!t)return;this.stopAmbient();let n=t.createGain();n.gain.value=0,n.gain.linearRampToValueAtTime(1,t.currentTime+2),n.connect(this.master);let i=t.createBufferSource(),r=t.createBiquadFilter(),a=t.createGain(),o=t.createOscillator(),l=t.createGain();if(i.buffer=this.nb,i.loop=!0,r.type="lowpass",r.frequency.value=e==="forest"?520:180,a.gain.value=e==="forest"?.16:.22,o.frequency.value=.11,l.gain.value=e==="forest"?.09:.03,o.connect(l),l.connect(a.gain),i.connect(r),r.connect(a),a.connect(n),i.start(),o.start(),this.amb=[i,o],e==="warehouse")for(let[c,h]of[[50,.05],[100,.02]]){let u=t.createOscillator(),d=t.createGain();u.frequency.value=c,d.gain.value=h,u.connect(d),d.connect(n),u.start(),this.amb.push(u)}this.ambGain=n,this.ambTimer=setInterval(()=>{if(t.state!=="running")return;let c=Math.random()*1.6-.8;if(e==="forest")if(Math.random()<.7)for(let h=0;h<3;h++)this.tone(4100+Math.random()*300,.04,{vol:.018,pan:c,at:h*.07});else this.tone(380,.5,{f2:300,vol:.02,pan:c});else Math.random()<.5&&this.tone(1400+Math.random()*900,.5,{vol:.02,pan:c,type:"triangle"})},1700)}stopAmbient(){clearInterval(this.ambTimer);for(let e of this.amb||[])try{e.stop()}catch{}this.ambGain&&this.ambGain.disconnect(),this.amb=[],this.ambGain=null,this.siren(!1)}};var Re=s=>document.getElementById(s),Lr=location.search.includes("test"),Nr=Re("c"),lt=new zl({canvas:Nr,antialias:!0,powerPreference:"high-performance"});lt.shadowMap.type=vs;lt.autoClear=!1;lt.toneMapping=Sa;lt.toneMappingExposure=1.5;var Su=new Sr(lt).fromScene(new Hl,.04).texture,A={state:"load",sel:{map:"forest",ai:"tactical",quality:"med"},sens:1,fov:75,loadout:mp(),inp:{k:{},mx:0,my:0,lmb:!1,rmb:!1,lmbPressed:!1,jump:!1,e:!1},camera:new At(75,1,.08,600),wcam:new At(50,1,.01,5),audio:new lc,enemies:[],stats:{},nv:!1,frame:0,v1:new P,v2:new P,v3:new P,pbox:[{bullet:!0}]};A.camera.rotation.order="YXZ";window.__SP=A;A.debugRender=()=>{let s=performance.now(),e=lt.getContext();return lt.info.autoReset=!1,lt.info.reset(),lt.setViewport(0,0,innerWidth,innerHeight),lt.clear(),lt.render(A.scene,A.camera),lt.clearDepth(),lt.render(A.wscene,A.wcam),e.readPixels(0,0,1,1,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array(4)),lt.info.autoReset=!0,{ms:Math.round(performance.now()-s),calls:lt.info.render.calls,tris:lt.info.render.triangles}};try{let s=JSON.parse(localStorage.getItem("sp2_settings")||"{}");s.sens&&(A.sens=s.sens),s.fov&&(A.fov=s.fov),s.quality&&(A.sel.quality=s.quality),s.vol!=null&&(A.vol=s.vol)}catch{}var wp=()=>{try{localStorage.setItem("sp2_settings",JSON.stringify({sens:A.sens,fov:A.fov,quality:A.sel.quality,vol:A.vol}))}catch{}},Ap=s=>(e,t,n,i,r,a)=>{let o=i-e,l=r-t,c=a-n,h=Math.hypot(o,l,c);return h<.01||!Nn(A.world.colliders,e,t,n,o/h,l/h,c/h,h,s)};A.los=Ap("sight");A.losB=Ap("bullet");A.sound=(s,e,t,n)=>{for(let i of A.enemies){if(i===n||i.dead)continue;let r=Math.hypot(i.pos.x-s.x,i.pos.z-s.z);r<e*i.pr.hear&&i.hear(s,t,r)}};A.shout=s=>{for(let e of A.enemies)e===s||e.dead||Math.hypot(e.pos.x-s.pos.x,e.pos.z-s.pos.z)<s.pr.share&&e.onAlert(s.lkp.x+Ie(-2.5,2.5),s.lkp.z+Ie(-2.5,2.5))};A.say=(s,e)=>{Math.hypot(s.pos.x-A.player.pos.x,s.pos.z-A.player.pos.z)>45||(A.audio.radio(),Re("subt").innerHTML=`<b>RADIO</b>${e}`,Re("subt").style.opacity=1,uc=2.8)};A.playerBox=()=>{let s=A.player,e=s.pos,t=A.pbox[0],n=s.leanX*.6,i=s.leanZ*.6;return t.x0=e.x+n-.3,t.x1=e.x+n+.3,t.z0=e.z+i-.3,t.z1=e.z+i+.3,t.y0=e.y,t.y1=e.y+s.height,A.pbox};var Rp=(s,e)=>{let t=A.player,n=s-t.pos.x,i=e-t.pos.z,r=Math.hypot(n,i)||1;return(n*Math.cos(t.yaw)-i*Math.sin(t.yaw))/r};A.enemyShotSound=s=>A.audio.enemyShot(s.pd,Rp(s.pos.x,s.pos.z));A.nearMiss=(s,e,t,n,i,r)=>{let a=A.camera.position,o=(a.x-s)*n+(a.y-e)*i+(a.z-t)*r;o>0&&Math.hypot(s+n*o-a.x,e+i*o-a.y,t+r*o-a.z)<1.4&&A.audio.whiz(Rp(s,t))};A.playerShot=(s,e,t,n,i)=>{let r=Nn(A.world.colliders,s.x,s.y,s.z,e.x,e.y,e.z,250,"bullet"),a=r?r.d:250,o=null,l=null;for(let h of A.enemies){if(h.dead)continue;let u=h.rayHit(s,e,a);u&&(a=u.d,o=h,l=u)}let c=A.v1.copy(e).multiplyScalar(a).add(s);if((i||Math.random()<.4)&&A.fx.tracer(n,c),o){let h=t.dmg*(l.part==="head"?t.head||2.5:l.mult);t.falloff&&a>t.falloff[0]&&(h*=1-(1-t.falloff[1])*Math.min(1,(a-t.falloff[0])/(t.falloff[0]*1.5))),o.damage(h,A.player.pos,l.part),A.fx.blood(c,A.v2.copy(e).negate());for(let u of A.enemies)!u.dead&&u!==o&&!u.seeing&&(u.supp=Math.min(1.5,u.supp+(Math.hypot(u.pos.x-c.x,u.pos.z-c.z)<3?.35:0)));i&&A.stats.hits++,l.part==="head"&&A.stats.heads++,Dp(o.dead),A.audio.hit(o.dead)}else if(r){A.fx.impact(c,A.v2.set(r.nx,r.ny,r.nz));for(let h of A.enemies){if(h.dead)continue;Math.hypot(h.pos.x-c.x,h.pos.z-c.z)<2.5&&(h.supp=Math.min(1.5,h.supp+.35),i&&!h.combat()&&h.hear(A.player.pos,"shot",Math.hypot(h.pos.x-s.x,h.pos.z-s.z)))}}};A.melee=()=>{let s=A.player,e=A.camera.position,t=s.fwd,n=Ct.knife,i=null,r=n.range;for(let l of A.enemies){if(l.dead)continue;let c=l.pos.x-e.x,h=l.pos.y+1.1-e.y,u=l.pos.z-e.z,d=Math.hypot(c,h,u);d>r||(c*t.x+h*t.y+u*t.z)/d<.72||!A.losB(e.x,e.y,e.z,l.pos.x,l.pos.y+1.1,l.pos.z)||(i=l,r=d)}if(!i){let l=Nn(A.world.colliders,e.x,e.y,e.z,t.x,t.y,t.z,1.5,"bullet");l&&(A.fx.impact(A.v1.copy(t).multiplyScalar(l.d).add(e),A.v2.set(l.nx,l.ny,l.nz)),A.audio.click(.4));return}let o=Math.cos(i.yaw)*(s.pos.z-i.pos.z)+Math.sin(i.yaw)*(s.pos.x-i.pos.x)>.2*r||!i.seeing&&!i.combat()||i.stun>0;i.damage(o?999:n.dmg,s.pos,"torso"),A.fx.blood(A.v1.set(i.pos.x,i.pos.y+1.2,i.pos.z),A.v2.copy(t).negate()),A.audio.stab(i.dead),Dp(i.dead),i.dead&&A.stats.knife++};A.spawnGrenade=(s,e,t,n)=>A.gren.spawn(s,e,t,n);A.onKill=()=>{A.stats.kills++};A.onHurt=(s,e)=>{A.audio.hurt(),Pr=Math.min(1,Pr+.3+e*.012),Rv(s.x,s.z,"#ff4a3a",1.2)};A.onSecurity=(s,e)=>{let t=Re("sec");t.className="hp l"+s,t.textContent="SECURITY \xB7 "+Mu[s],s>0&&A.audio.alert(s),s>=2&&e&&Ha(e,3.5),s===3&&(A.audio.siren(!0),A.panelLight&&(A.panelLight.intensity=30))};A.reinforce=()=>{let s=A.world,e=A.player,t=A.sel.ai==="recruit"?2:3,n=[...s.reinforce].sort((r,a)=>Math.hypot(a.x-e.pos.x,a.z-e.pos.z)-Math.hypot(r.x-e.pos.x,r.z-e.pos.z))[0];if(Math.hypot(n.x-e.pos.x,n.z-e.pos.z)<30){A.sec.reinAt=A.sec.t+8;return}let i=A.sec.report||{x:s.objective.pos[0],z:s.objective.pos[2]};for(let r=0;r<t;r++){let a=bu(n.x+r*1.6,n.z+r%2*1.5,[[i.x,i.z]],{duty:"response"});a.alerted=!0,a.setOrder(r===0?{type:"investigate",x:i.x,z:i.z}:{type:"defend",x:s.posts.objective[r%s.posts.objective.length][0],z:s.posts.objective[r%s.posts.objective.length][1],tx:i.x,tz:i.z})}Ha(`RESPONSE TEAM ENTERING FROM THE ${n.n.toUpperCase()}`,4.5)};function Cp(){if(A.world){for(let s of A.world.meshes||[])s.userData.shared?s.dispose():(s.geometry.dispose(),s.material.dispose());A.audio.stopAmbient(),A.world=null,A.scene=null}}function Tp(s,e,t,n){let i=new Tt,r=(a,o,l,c,h,u,d,f)=>{let p=new Ge(new Yt(o,l,c),f?new ot({color:a}):new Rn({color:a}));return p.position.set(h,u,d),i.add(p),p};return s==="intel"?(r(1842978,.5,.14,.36,0,.07,0),r(16758344,.42,.02,.05,0,.15,0,!0),r(16758344,.06,.06,.02,0,.07,.19,!0)):s==="terminal"?(r(1382170,.08,.5,.8,0,.3,0),i.screen=r(3211128,.02,.4,.68,.05,.31,0,!0),r(1842978,.3,.03,.6,.3,.02,0)):s==="med"?(r(14212312,.5,.3,.34,0,.15,0),r(13908528,.2,.06,.02,0,.17,.18,!0),r(13908528,.06,.2,.02,0,.17,.18,!0)):(r(4016688,.6,.32,.36,0,.16,0),r(15249482,.6,.05,.37,0,.2,0,!0)),i.position.set(e,t,n),A.scene.add(i),i}var cc=[];function bu(s,e,t,n){cc.length||(cc=["guard","guard","aggressor","cautious","guard","aggressor","cautious","guard"].sort(()=>Math.random()-.5));let i=A.world.nav.nearest(s,e)||{x:s,z:e},r=new sc(A,i.x,i.z,t,cc.pop(),ka[A.sel.ai],n);return A.enemies.push(r),r}function wu(){let s=A.sel.quality;lt.setPixelRatio(s==="low"?1:Math.min(window.devicePixelRatio||1,s==="high"?2:1.25)),lt.shadowMap.enabled=s!=="low",Fp()}function wv(){Cp(),wu(),zp();let s=A.scene=new yi,e=A.wscene=new yi;s.environment=Su,s.environmentIntensity=.12,e.environment=Su,e.environmentIntensity=.2,A.wlight=new Ji(11188432,2106408,.4),e.add(A.wlight);let t=new Gn(16773856,.75);t.position.set(-1,2,1.5),e.add(t);let n=A.world=fp(A.sel.map,s);if(A.sel.quality!=="med"&&n.moon.shadow.mapSize.setScalar(A.sel.quality==="high"?4096:1024),A.sel.quality==="low")for(let u of n.meshes)u.userData.detail&&(u.visible=!1);A.nvLight=new va(16777215,0),s.add(A.nvLight),A.fx=new oc(s),A.gren=new ac(A),A.player=new Ql(A,n.spawn,A.loadout),A.enemies=[],cc=[],A.sec=new rc(A,ka[A.sel.ai]);let i=n.nav,r=u=>Math.hypot(u[0]-n.spawn.x,u[1]-n.spawn.z)>30,a=(u,d,f)=>{let p=Ie(6.28),y=i.snap(u[0]+Math.cos(p)*2.5,u[1]+Math.sin(p)*2.5);return bu(u[0],u[1],y&&i.line(i.nearest(u[0],u[1]),y)?[[u[0],u[1]],[y.x,y.z]]:[[u[0],u[1]]],{duty:d,home:u,wait:f})},o=u=>[...u].sort(()=>Math.random()-.5);o(n.posts.objective).slice(0,3).forEach(u=>a(u,"objective",[5,12])),o(n.posts.entrance.filter(r)).slice(0,3).forEach(u=>a(u,"post",[6,14]));for(let u of o(n.routes).slice(0,n.guards-A.enemies.length)){let d=u.p.filter(r),f=(d.length?d:u.p)[Math.floor(Math.random()*(d.length||u.p.length))],p=bu(f[0],f[1],u.p,{duty:"patrol"});p.wi=Math.floor(Math.random()*u.p.length)}let l=n.objective;A.objMesh=Tp(l.kind,...l.pos),A.pickups=n.pickups.map(([u,d,f])=>({kind:u,x:d,z:f,mesh:Tp(u,d,i.height(d,f),f)}));let c=n.extraction.pos;A.exMesh=new Ge(new Mt(.06,.06,.5,6),new ot({color:4259696})),A.exMesh.position.set(c[0],.25,c[2]),s.add(A.exMesh),A.exLight=new cn(4259696,6,16,1.5),A.exLight.position.set(c[0],1.2,c[2]),s.add(A.exLight),n.panel&&(A.panelLight=new cn(16722458,0,22,1.4),A.panelLight.position.set(n.panel.x,2.2,n.panel.z),s.add(A.panelLight)),A.laserDot=new Ge(new Ti(1,8,6),new ot({color:16719904,fog:!1,toneMapped:!1})),s.add(A.laserDot);let h=new Yt(.004,.004,1);h.translate(0,0,.5),A.laserBeam=new Ge(h,new ot({color:16719904,transparent:!0,opacity:.35,blending:Vn,depthWrite:!1,fog:!1})),s.add(A.laserBeam),A.laserDot.visible=A.laserBeam.visible=!1,A.stage=0,A.hack=0,A.time=0,A.stats={shots:0,hits:0,kills:0,heads:0,knife:0,maxSec:0},Pr=0,Fi.forEach(u=>u.t=0),uc=0,Re("subt").style.opacity=0,Ru(!1),A.onSecurity(0,""),Re("objt").textContent=l.text,Ha(n.name+" \u2014 "+l.text.toUpperCase(),4),A.audio.ambient(n.env.amb),Ls(null),Re("hud").classList.add("on"),A.state="playing",Yn={},Lr||Au()}function Au(){try{let s=Nr.requestPointerLock();s&&s.catch&&s.catch(()=>{Re("phint").textContent="CLICK RESUME AGAIN TO RE-CAPTURE THE MOUSE"})}catch{}}function Ls(s){for(let e of["menu","pause","end","load"])Re(e).classList.toggle("on",e===s)}function Ip(){A.state==="playing"&&(A.state="paused",Re("phint").textContent="MISSION ON HOLD",Ls("pause"),A.inp.k={},A.inp.lmb=A.inp.rmb=!1)}function Pp(){A.state==="paused"&&(Lr?(A.state="playing",Ls(null)):Au())}function Lp(){A.state="menu",Cp(),Re("hud").classList.remove("on"),Ru(!1),Re("scope").style.display="none",Re("flashov").style.opacity=0,Ls("menu"),document.pointerLockElement&&document.exitPointerLock(),Cu()}function Np(s){A.state=s?"won":"dead",document.pointerLockElement&&document.exitPointerLock(),A.audio.siren(!1),Re("scope").style.display="none",Re("flashov").style.opacity=0;let e=A.player,t=A.stats,n=Math.floor(A.time);Re("endt").textContent=s?"MISSION COMPLETE":"OPERATOR DOWN",Re("endt").style.color=s?"var(--g)":"#ff6a5a";let i=s?"EXTRACTION SUCCESSFUL":"MISSION FAILED";if(!s&&e.lastHit){let a=e.lastHit;i=a.fall?"KILLED BY A FALL":a.blast?`KILLED BY ${a.name.toUpperCase()}`:`KILLED BY ${a.name.toUpperCase()} \u2014 RIFLE FIRE FROM THE ${Av(a.x-e.pos.x,a.z-e.pos.z)}, ${Math.round(a.dist)} M`}Re("ends").textContent=i;let r=[["Map",A.world.name],["Enemy intelligence",ka[A.sel.ai].label],["Time",`${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`],["Hostiles neutralised",`${t.kills} / ${A.enemies.length}`],["Headshots / knife kills",`${t.heads} / ${t.knife}`],["Accuracy",t.shots?Math.round(t.hits/t.shots*100)+"%":"\u2014"],["Highest security level",Mu[t.maxSec]],["Health remaining",Math.ceil(e.hp)],["Objective",A.stage?"Secured":"Not secured"]];Re("endstats").innerHTML=r.map(([a,o])=>`<span>${a}</span><b>${o}</b>`).join(""),Ls("end"),s?A.audio.win():A.audio.lose()}var Av=(s,e)=>["NORTH","NORTH-EAST","EAST","SOUTH-EAST","SOUTH","SOUTH-WEST","WEST","NORTH-WEST"][(Math.round(Math.atan2(s,-e)/(Math.PI/4))%8+8)%8];function Ru(s){A.nv=s,Re("nv").classList.toggle("on",s),Nr.style.filter=s?"grayscale(1) contrast(1.15) brightness(1.3)":"",A.world&&(A.nvLight.intensity=s?2.6:0,A.scene.fog.density=A.world.env.fog[1]*(s?.5:1),A.wlight.intensity=s?1.6:.4,A.scene.environmentIntensity=s?.7:.12)}function Ep(){let s=A.world;A.stage=1,A.hack=0,A.audio.objective(),A.objMesh.screen?A.objMesh.screen.material.color.setHex(16758344):A.scene.remove(A.objMesh),Re("objt").textContent=s.extraction.text,Ha(s.objective.done+" \u2014 "+s.extraction.text.toUpperCase(),4),A.sec.report={x:s.objective.pos[0],z:s.objective.pos[2],t:A.sec.t,kind:"alarm"},A.sec.lockdown("SILENT ALARM \u2014 LOCKDOWN")}var Pr=0,Tu=0,hc=0,uc=0,Yn={},Fi=[];for(let s=0;s<8;s++){let e=document.createElement("div");e.className="ind",Re("inds").appendChild(e),Fi.push({el:e,t:0,x:0,z:0,life:1})}function Rv(s,e,t,n){let i=Fi.find(r=>r.t<=0)||Fi[0];i.x=s,i.z=e,i.t=i.life=n,i.src=null,i.el.style.color=t}function Ha(s,e){Re("toast").textContent=s,Re("toast").style.opacity=1,Tu=e}function Dp(s){hc=s?.3:.14,Re("hitm").className=s?"k":""}function Oi(s,e){Yn[s]!==e&&(Yn[s]=e,Re(s).innerHTML=e)}function Ps(s,e,t){let n=s+e;Yn[n]!==t&&(Yn[n]=t,Re(s).style[e]=t)}function Cv(s){let e=A.player,t=e.slot,n=t.st,i=A.world;Oi("hpn",Math.ceil(e.hp));let r=Math.round(e.hp)+"%";Yn.hw!==r&&(Yn.hw=r,Re("hpf").style.width=r,Re("hpf").style.background=e.hp<35?"#ff5a4a":e.hp<60?"#e8b04a":"var(--g)");let a=e.use;Oi("medi",a&&a.type==="med"?"APPLYING MEDKIT\u2026":`MEDKIT <b>${e.inv.med}</b> [H] \xB7 STIM <b>${e.inv.stim}</b> [X]`),Oi("wn",n.name+(e.reloading?" \u2014 RELOADING":"")),Oi("am",n.melee?"\u2014":`${t.mag}<span> / ${t.reserve}</span>`),Oi("watt",Jl(t.id,n.att||{})),Oi("slots",e.slots.map((v,b)=>b===e.cur?`<b>${b+1} ${v.st.name}</b>`:`${b+1} ${v.st.name}`).join(" \xB7 ")),Oi("equip",["frag","flash","smoke"].map(v=>`<span class="${e.throwSel===v?"s":""}">${xp[v]} <b>${e.inv[v]}</b></span>`).join("<br>")+"<br>[G] THROW \xB7 [4] CYCLE"),Oi("stat",`ENEMY AI <b>${ka[A.sel.ai].label}</b><br>NIGHT VISION <b class="${A.nv?"":"off"}">${A.nv?"ON":"OFF"}</b>`+(n.att&&n.att.laser?`<br>LASER <b class="${e.laserOn?"":"off"}">${e.laserOn?"ON":"OFF"}</b>`:"")+`<br>HOSTILES <b>${A.enemies.filter(v=>!v.dead).length}</b>`);let o=!n.melee&&e.adsF>.85?n.optic.ret:null,l=5+e.spread*5.5,c=e.adsF>.6||e.sprintF>.6||n.melee?0:1,h=8,u=[[-1,-l-h,2,h],[-1,l,2,h],[-l-h,-1,h,2],[l,-1,h,2]];for(let v=0;v<4;v++){let b=Re("c"+v).style;b.left=u[v][0]+"px",b.top=u[v][1]+"px",b.width=u[v][2]+"px",b.height=u[v][3]+"px",b.opacity=c}Ps("ret","display",o==="dot"||o==="holo"?"block":"none"),o&&o!=="scope"&&Yn.retc!==o&&(Yn.retc=o,Re("ret").className=o),Ps("scope","display",e.scoped?"block":"none"),Ps("flashov","opacity",Math.min(1,e.blind).toFixed(2)),Ps("stimv","opacity",e.stimT>0?"1":"0"),hc>0?(hc-=s,Re("hitm").style.opacity=Math.min(1,hc*8)):Ps("hitm","opacity","0"),Pr=Math.max(0,Pr-s*1.3),Re("vig").style.opacity=Math.max(Pr,e.hp<30?.35:0),Tu>0&&(Tu-=s)<=0&&(Re("toast").style.opacity=0),uc>0&&(uc-=s)<=0&&(Re("subt").style.opacity=0);for(let v of A.enemies){if(v.dead||v.seeing||v.detect<.15||!v.los)continue;let b=Fi.find(E=>E.src===v&&E.t>0);if(!b){if(b=Fi.find(E=>E.t<=0),!b)continue;b.src=v,b.el.style.color="#e8b04a"}b.x=v.pos.x,b.z=v.pos.z,b.t=.25,b.life=.25/Math.max(.2,v.detect)}let d=!1;for(let v of A.gren.list){if(v.type==="smoke"||v.owner==="player"||Math.hypot(v.pos.x-e.pos.x,v.pos.z-e.pos.z)>13)continue;d=!0;let b=Fi.find(E=>E.src===v&&E.t>0);if(!b){if(b=Fi.find(E=>E.t<=0),!b)continue;b.src=v,b.el.style.color="#ff9a30"}b.x=v.pos.x,b.z=v.pos.z,b.t=b.life=.2}Ps("warn","display",d?"block":"none");for(let v of Fi){if(v.t<=0){v.on&&(v.el.style.opacity=0,v.on=!1,v.src=null);continue}v.t-=s,v.on=!0;let b=Math.atan2(v.x-e.pos.x,-(v.z-e.pos.z))+e.yaw;v.el.style.transform=`rotate(${b}rad)`,v.el.style.opacity=Math.min(1,v.t/v.life)}let f=A.stage===0?i.objective.pos:i.extraction.pos,p=A.v3.set(f[0],f[1]+1,f[2]),y=Math.hypot(f[0]-e.pos.x,f[2]-e.pos.z);p.project(A.camera);let g=p.x,m=p.y;p.z>1&&(g=-g,m=-1);let x=Math.max(Math.abs(g),Math.abs(m));if(x>.9||p.z>1){let v=.9/(x||1);g*=v,m*=v}let S=Re("mark").style;S.left=(g+1)/2*innerWidth+"px",S.top=(1-m)/2*innerHeight+"px",S.opacity=e.scoped?0:1,Oi("mark",(A.stage===0?"OBJECTIVE ":"EXTRACT ")+Math.round(y)+" M")}function Iv(s){let e=A.player,t=A.world,n=A.inp;A.time+=s,A.stats.maxSec=Math.max(A.stats.maxSec,A.sec.level);let i="",r=(d,f,p)=>Math.hypot(d-e.pos.x,f-e.pos.z)<p;if(A.stage===0){let d=t.objective;r(d.pos[0],d.pos[2],2.5)?(i=`<b>E</b>${d.prompt}`,d.hold?n.k.KeyE?(A.hack+=s,A.hack>=d.hold&&Ep()):A.hack=Math.max(0,A.hack-s*2):n.e&&Ep()):A.hack=0}else if(r(t.extraction.pos[0],t.extraction.pos[2],3.2))return Np(!0);for(let d of A.pickups){if(d.taken||!r(d.x,d.z,1.9))continue;let f=d.kind==="med";if(i=i||`<b>E</b>${f?"Take medical supplies":"Take ammunition and grenades"}`,n.e&&!(A.stage===0&&r(t.objective.pos[0],t.objective.pos[2],2.5))){if(d.taken=!0,A.scene.remove(d.mesh),A.audio.pickup(),f)e.inv.med=Math.min(4,e.inv.med+1),e.inv.stim=Math.min(4,e.inv.stim+1);else{for(let p of e.slots)p.st.melee||(p.reserve=Math.min(p.st.reserve*2,p.reserve+p.st.mag*2));e.inv.frag=Math.min(4,e.inv.frag+1),e.inv.flash=Math.min(4,e.inv.flash+1)}Ha(f?"+1 MEDKIT  +1 STIM":"AMMUNITION RESUPPLIED  +1 FRAG  +1 FLASH",1.8)}}n.e=!1;let a=Re("prompt");Yn.pr!==i&&(Yn.pr=i,a.innerHTML=i,a.style.display=i?"block":"none");let o=e.use&&e.use.type==="med",l=A.stage===0&&A.hack>0||o;Ps("hack","display",l?"block":"none"),l&&(Re("hackf").style.width=(o?e.use.t/e.use.dur:A.hack/t.objective.hold)*100+"%");for(let d of t.dyn)d.l.intensity=d.base*(d.kind==="fire"?.75+Math.sin(A.time*11)*.12+Math.random()*.2:Math.sin(A.time*31)>.86||Math.random()<.02?.25:1);A.exLight.intensity=A.stage?14+Math.sin(A.time*4)*5:4,A.panelLight&&A.sec.level===3&&(A.panelLight.intensity=18+Math.sin(A.time*7)*16);let c=e.w,h=!c.melee&&c.att.laser&&e.laserOn&&e.swT<=0&&!e.reloading&&!e.use&&e.sprintF<.5&&!e.scoped;if(A.laserDot.visible=A.laserBeam.visible=h,h){let d=A.camera.position,f=e.fwd,p=Nn(t.colliders,d.x,d.y,d.z,f.x,f.y,f.z,150,"bullet"),y=p?p.d:150;for(let g of A.enemies){if(g.dead)continue;let m=g.rayHit(d,f,y);m&&(y=m.d)}A.laserDot.position.copy(f).multiplyScalar(y-.02).add(d),A.laserDot.scale.setScalar(.006+y*.0022),A.laserBeam.position.copy(e.laserW),A.laserBeam.lookAt(A.laserDot.position),A.laserBeam.scale.z=e.laserW.distanceTo(A.laserDot.position)}let u=t.moon;u.target.position.set(e.pos.x,0,e.pos.z),u.position.copy(t.moonDir).multiplyScalar(110).add(u.target.position)}function Up(s){A.frame++,A.player.update(s),A.inp.mx=A.inp.my=0;for(let e of A.enemies)e.update(s);if(A.sec.update(s),A.gren.update(s),A.fx.update(s),Iv(s),A.state==="playing"){if(A.player.dead)return Np(!1);Cv(s)}}A.step=Up;var Eu=performance.now();function Op(s){requestAnimationFrame(Op);let e=Math.min(.05,(s-Eu)/1e3);Eu=s,A.state==="playing"&&Up(e),A.state==="menu"?Dv(e):A.scene&&(lt.setViewport(0,0,innerWidth,innerHeight),lt.clear(),lt.render(A.scene,A.camera),lt.clearDepth(),lt.render(A.wscene,A.wcam))}function Fp(){lt.setSize(innerWidth,innerHeight,!1),A.camera.aspect=A.wcam.aspect=innerWidth/innerHeight,A.camera.updateProjectionMatrix(),A.wcam.updateProjectionMatrix()}addEventListener("resize",Fp);addEventListener("keydown",s=>{if(A.state==="paused"&&s.code==="Escape")return Pp();if(A.state!=="playing"||((["Space","Tab","KeyS","KeyD","KeyA","KeyR","KeyN","KeyL","KeyE","KeyC","KeyQ","KeyF","KeyG","KeyH","KeyX","KeyV"].includes(s.code)||s.ctrlKey)&&s.preventDefault(),s.repeat))return;let e=A.player;A.inp.k[s.code]=!0,s.code==="Space"?A.inp.jump=!0:s.code==="KeyR"?e.reload():s.code==="KeyE"?A.inp.e=!0:s.code==="KeyC"?e.crouchToggle=!e.crouchToggle:s.code==="KeyN"?(Ru(!A.nv),A.audio.beep(A.nv)):s.code==="KeyL"?(e.laserOn=!e.laserOn,A.audio.beep(e.laserOn)):s.code==="KeyG"?e.startUse("throw"):s.code==="KeyH"?e.startUse("med"):s.code==="KeyX"?e.startUse("stim"):s.code==="KeyV"?e.startUse("melee"):s.code==="Digit4"?e.cycleThrow():/^Digit[123]$/.test(s.code)?e.switchTo(+s.code[5]-1):s.code==="Escape"&&Lr&&Ip()});addEventListener("keyup",s=>{A.inp.k[s.code]=!1});addEventListener("blur",()=>{A.inp.k={},A.inp.lmb=A.inp.rmb=!1});addEventListener("mousemove",s=>{A.state==="playing"&&(document.pointerLockElement===Nr||Lr)&&(A.inp.mx+=s.movementX,A.inp.my+=s.movementY)});addEventListener("mousedown",s=>{if(A.state==="playing"){if(!Lr&&document.pointerLockElement!==Nr)return Au();s.button===0?(A.inp.lmb=!0,A.inp.lmbPressed=!0):s.button===2&&(A.inp.rmb=!0)}});addEventListener("mouseup",s=>{s.button===0?A.inp.lmb=!1:s.button===2&&(A.inp.rmb=!1)});addEventListener("wheel",()=>{A.state==="playing"&&A.player.cycleThrow()});addEventListener("contextmenu",s=>s.preventDefault());document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===Nr?A.state==="paused"&&(A.state="playing",Ls(null),Eu=performance.now()):A.state==="playing"&&!Lr&&Ip()});var Pv={forest:"A hostile detachment holds an abandoned outpost in the forest. Guards watch the gates, patrol the treeline and protect the command hut. Take the intelligence package and reach the extraction flare in the north-east clearing. It is dark out there \u2014 use night vision.",warehouse:"A secured terminal sits in the guarded office of an industrial warehouse. Enter from the loading yard, access the terminal and exfiltrate through the west back lot. Side doors, the outer alleys and the raised dock give you alternatives to the main hall."},Lv={recruit:"RECRUIT \u2014 inexperienced guards: slow decisions, long clumsy exposures, unreliable radio calls.",tactical:"TACTICAL \u2014 trained guards: use cover properly, lean to fire, flank, radio contacts and defend the objective.",elite:"ELITE SQUAD \u2014 a coordinated team: bounding movement, suppressive fire, multiple angles, grenades and flashbangs."},Ue={tab:"play",edit:"primary",scene:null,obj:null,spin:0};function zp(){Ue.obj&&Ue.scene&&Ue.scene.remove(Ue.obj),Ue.obj=null,Ue.ch&&(Ue.scene.remove(Ue.ch.root),Ue.ch=null)}function Nv(){if(Ue.scene)return Ue.scene;let s=Ue.scene=new yi;s.environment=Su,s.environmentIntensity=.55;let e=new Gn(16773340,2.6);e.position.set(2,3,3),s.add(e);let t=new Gn(8368383,1.6);return t.position.set(-3,2,-3),s.add(t),s.add(new Ji(8425632,1053720,.5)),Ue.cam=new At(30,1,.05,50),s}function Cu(){if(A.state!=="menu")return;let s=Nv();if(zp(),Ue.tab==="loadout"){let e=A.loadout[Ue.edit];Ue.obj=jl(e,A.loadout.att[e],!0),s.add(Ue.obj)}else Ue.ch=new Rr(A.sel.ai==="elite"?"elite":A.sel.ai==="recruit"?"guard":"cautious","carbine"),s.add(Ue.ch.root),Ue.ch.root.rotation.y=Math.PI+.5}function Dv(s){if(!Ue.scene)return;let e=Math.min(innerWidth*.5,830),t=innerWidth-e;if(lt.setViewport(0,0,innerWidth,innerHeight),lt.setClearColor(395532),lt.clear(),lt.setViewport(e,0,t,innerHeight),Ue.cam.aspect=t/innerHeight,Ue.spin+=s,Ue.obj){let n=new qt().setFromObject(Ue.obj),i=n.getCenter(A.v1),r=n.getSize(A.v2).length();Ue.obj.rotation.y=Math.PI/2+Math.sin(Ue.spin*.5)*.55,Ue.cam.position.set(i.x,i.y+r*.12,i.z+r*2.3*Math.max(1,1.25/Ue.cam.aspect)),Ue.cam.lookAt(i.x,i.y,i.z)}else Ue.ch&&(Ue.ch.update(s,{speed:0,aim:Math.sin(Ue.spin*.35)>0,crouch:Math.sin(Ue.spin*.22)<-.6}),Ue.cam.position.set(0,1.25,5.2*Math.max(1,.75/Ue.cam.aspect)),Ue.cam.lookAt(0,.95,0));Ue.cam.updateProjectionMatrix(),lt.render(Ue.scene,Ue.cam)}function Ir(s,e,t,n,i=""){return`<button class="opt ${i} ${n?"sel":""}" data-v="${s}">${e}${t?`<small>${t}</small>`:""}</button>`}function Bp(){let s=A.loadout,e=o=>document.querySelector(`.opts[data-k="${o}"]`);for(let o of["primary","secondary"])e(o).innerHTML=Object.keys(Ct).filter(l=>Ct[l].slot===o).map(l=>Ir(l,Ct[l].name,Ct[l].desc,s[o]===l)).join("");e("kit").innerHTML=Object.keys(Ui).map(o=>Ir(o,Ui[o].name,Ui[o].desc,s.kit===o)).join("");let t=s[Ue.edit],n=Ct[t],i=s.att[t];Re("attl").textContent="ATTACHMENTS \u2014 "+n.name,Re("edit").innerHTML=Ir("primary","Edit primary","",Ue.edit==="primary","sm")+Ir("secondary","Edit secondary","",Ue.edit==="secondary","sm"),Re("optic").innerHTML=n.optics.map(o=>Ir(o,Ar[o].name,o==="scope"?"4x zoom, slower to aim":o==="iron"?"no zoom":o==="reddot"?"clean dot":"ring reticle",i.optic===o,"sm")).join(""),Re("atts").innerHTML=[["muzzle","Suppressor","quiet: guards hear it only at close range"],["grip","Foregrip","-20% recoil, steadier hip fire"],["laser","Laser sight","tighter hip fire (L toggles)"]].map(([o,l,c])=>Ir(o,l,c,i[o],n[o]?"":"off")).join("");let r=Zl(t,i),a=(o,l)=>`<span>${o}</span><i><b style="width:${Math.round(Math.max(4,Math.min(100,l)))}%"></b></i>`;Re("bars").innerHTML=a("DAMAGE",r.dmg*(r.pellets||1)/1.2)+a("FIRE RATE",r.rpm/9)+a("CONTROL",100-r.recoil*20)+a("HANDLING",100-r.adsT*230)+a("STEALTH",100-r.noise*1.9),Re("losum").innerHTML=`${Ct[s.primary].name} <span style="color:var(--a)">${Jl(s.primary,s.att[s.primary])}</span><br>${Ct[s.secondary].name} <span style="color:var(--a)">${Jl(s.secondary,s.att[s.secondary])}</span><br>Combat knife \xB7 ${Ui[s.kit].name} kit \u2014 ${Ui[s.kit].desc}`,Re("brief").textContent=Pv[A.sel.map]+" "+Lv[A.sel.ai],gp(s),Cu()}document.querySelectorAll(".nav").forEach(s=>s.addEventListener("click",()=>{Ue.tab=s.dataset.tab,document.querySelectorAll(".nav").forEach(e=>e.classList.toggle("sel",e===s)),document.querySelectorAll(".tab").forEach(e=>e.classList.toggle("on",e.id==="t-"+Ue.tab)),Cu()}));Re("content").addEventListener("click",s=>{let e=s.target.closest(".opt");if(!e||!e.dataset.v)return;let t=e.parentElement,n=t.dataset.k,i=e.dataset.v,r=A.loadout;n==="map"||n==="ai"||n==="quality"?(A.sel[n]=i,t.querySelectorAll(".opt").forEach(a=>a.classList.toggle("sel",a===e)),n==="quality"&&(wp(),wu())):n==="primary"||n==="secondary"?(r[n]=i,Ue.edit=n):n==="kit"?r.kit=i:t.id==="edit"?Ue.edit=i:t.id==="optic"?r.att[r[Ue.edit]].optic=i:t.id==="atts"&&(r.att[r[Ue.edit]][i]=!r.att[r[Ue.edit]][i]),Bp()});var Iu=(s,e,t,n)=>{let i=Re(s);i.value=A[e],Re(s+"v").textContent=t(A[e]),i.addEventListener("input",()=>{A[e]=+i.value,Re(s+"v").textContent=t(A[e]),wp(),n&&n()})};A.vol==null&&(A.vol=.75);Iu("sens","sens",s=>s.toFixed(2));Iu("fov","fov",s=>s);Iu("vol","vol",s=>Math.round(s*100),()=>{A.audio.master&&(A.audio.master.gain.value=A.vol)});document.querySelectorAll('.opts[data-k="quality"] .opt').forEach(s=>s.classList.toggle("sel",s.dataset.v===A.sel.quality));var Pu=()=>{A.audio.init(),A.audio.master&&(A.audio.master.gain.value=A.vol),wv()};Re("start").onclick=Pu;Re("again").onclick=Pu;Re("prestart").onclick=Pu;Re("resume").onclick=Pp;Re("pmenu").onclick=Lp;Re("emenu").onclick=Lp;{let s=document.createElement("canvas");s.width=s.height=128;let e=s.getContext("2d"),t=e.createImageData(128,128);for(let n=0;n<t.data.length;n+=4)t.data[n]=t.data[n+1]=t.data[n+2]=Math.random()*255,t.data[n+3]=255;e.putImageData(t,0,0),Re("nvn").style.background=`url(${s.toDataURL()})`}wu();op(s=>{Re("loadf").style.width=s*100+"%"}).then(()=>{A.state="menu",Ls("menu"),Bp()}).catch(s=>{Re("load").firstElementChild.textContent="FAILED TO LOAD ASSETS: "+s.message});requestAnimationFrame(Op);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
