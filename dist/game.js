(()=>{var Ld=0,Kc=1,Nd=2;var ys=1,Dd=2,gr=3,ti=0,Xt=1,en=2,vs=0,xr=1,Hn=2,Zc=3,Jc=4,Ud=5;var Ms=100,Od=101,Fd=102,zd=103,Bd=104,kd=200,Hd=201,Gd=202,Vd=203,$c=204,jc=205,Wd=206,Xd=207,qd=208,Yd=209,Kd=210,Zd=211,Jd=212,$d=213,jd=214,Ma=0,Sa=1,ba=2,$s=3,Ta=4,Ea=5,wa=6,Aa=7,qa=0,Qd=1,ef=2,ni=0,Qc=1,eh=2,th=3,bo=4,nh=5,ih=6,sh=7,Bc="attached",tf="detached",rh=300,Ss=301,_r=302,Ya=303,Ka=304,Zn=1e3,En=1001,js=1002,wt=1003,Za=1004;var bs=1005;var Nt=1006,yr=1007;var Rn=1008;var fn=1009,oh=1010,ah=1011,vr=1012,Ja=1013,Gn=1014,xn=1015,Vn=1016,$a=1017,ja=1018,Ts=1020,lh=35902,ch=35899,hh=1021,uh=1022,Cn=1023,xi=1026,Ii=1027,Qa=1028,el=1029,Ji=1030,tl=1031;var nl=1033,To=33776,Eo=33777,wo=33778,Ao=33779,il=35840,sl=35841,rl=35842,ol=35843,al=36196,ll=37492,cl=37496,hl=37488,ul=37489,Ro=37490,dl=37491,fl=37808,pl=37809,ml=37810,gl=37811,xl=37812,_l=37813,yl=37814,vl=37815,Ml=37816,Sl=37817,bl=37818,Tl=37819,El=37820,wl=37821,Al=36492,Rl=36494,Cl=36495,Il=36283,Pl=36284,Co=36285,Ll=36286,Io=2200,Nl=2201,nf=2202,hs=2300,us=2301,ya=2302,kc=2303,as=2400,ls=2401,Jr=2402,Dl=2500,sf=2501,dh=0,Po=1,Mr=2,rf=3200;var Lo=0,of=1,Pi="",Tt="srgb",rn="srgb-linear",$r="linear",nt="srgb";var va=7680;var af=519,lf=512,cf=513,hf=514,fh=515,uf=516,df=517,ph=518,mh=519,gh=35044;var xh="300 es",wn=2e3,Qs=2001;function Vp(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Wp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function er(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ff(){let s=er("canvas");return s.style.display="block",s}var Wu={},tr=null;function jr(...s){let e="THREE."+s.shift();tr?tr("log",e,...s):console.log(e,...s)}function pf(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ae(...s){s=pf(s);let e="THREE."+s.shift();if(tr)tr("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Oe(...s){s=pf(s);let e="THREE."+s.shift();if(tr)tr("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function cs(...s){let e=s.join(" ");e in Wu||(Wu[e]=!0,Ae(...s))}function mf(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var gf={[Ma]:Ma,[ba]:wa,[Ta]:Ta,[$s]:Ea,[Sa]:Sa,[wa]:ba,[Aa]:Aa,[Ea]:$s},zn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},$t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xu=1234567,Kr=Math.PI/180,ds=180/Math.PI;function ii(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[s&255]+$t[s>>8&255]+$t[s>>16&255]+$t[s>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function Ze(s,e,t){return Math.max(e,Math.min(t,s))}function _h(s,e){return(s%e+e)%e}function Xp(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function qp(s,e,t){return s!==e?(t-s)/(e-s):0}function Zr(s,e,t){return(1-t)*s+t*e}function Yp(s,e,t,n){return Zr(s,e,1-Math.exp(-t*n))}function Kp(s,e=1){return e-Math.abs(_h(s,e*2)-e)}function Zp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Jp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function $p(s,e){return s+Math.floor(Math.random()*(e-s+1))}function jp(s,e){return s+Math.random()*(e-s)}function Qp(s){return s*(.5-Math.random())}function em(s){s!==void 0&&(Xu=s);let e=Xu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function tm(s){return s*Kr}function nm(s){return s*ds}function im(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function sm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function yh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function rm(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),u=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*d,c*u,a*l);break;case"YZY":s.set(c*u,a*h,c*d,a*l);break;case"ZXZ":s.set(c*d,c*u,a*h,a*l);break;case"XZX":s.set(a*h,c*p,c*f,a*l);break;case"YXY":s.set(c*f,a*h,c*p,a*l);break;case"ZYZ":s.set(c*p,c*f,a*h,a*l);break;default:Ae("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ul(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function vh(s,e){if(e.constructor===Float32Array)return s;let t=Ul(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function Mh(s,e){if(e.constructor===Float32Array)return s;let t=Ul(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}var _n={DEG2RAD:Kr,RAD2DEG:ds,generateUUID:ii,clamp:Ze,euclideanModulo:_h,mapLinear:Xp,inverseLerp:qp,lerp:Zr,damp:Yp,pingpong:Kp,smoothstep:Zp,smootherstep:Jp,randInt:$p,randFloat:jp,randFloatSpread:Qp,seededRandom:em,degToRad:tm,radToDeg:nm,isPowerOfTwo:im,ceilPowerOfTwo:sm,floorPowerOfTwo:yh,setQuaternionFromProperEuler:rm,normalize:Mh,denormalize:vh},Ne=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},yt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3],u=r[o+0],f=r[o+1],p=r[o+2],v=r[o+3];if(d!==v||c!==u||l!==f||h!==p){let m=c*u+l*f+h*p+d*v;m<0&&(u=-u,f=-f,p=-p,v=-v,m=-m);let g=1-a;if(m<.9995){let x=Math.acos(m),S=Math.sin(x);g=Math.sin(g*x)/S,a=Math.sin(a*x)/S,c=c*g+u*a,l=l*g+f*a,h=h*g+p*a,d=d*g+v*a}else{c=c*g+u*a,l=l*g+f*a,h=h*g+p*a,d=d*g+v*a;let x=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=x,l*=x,h*=x,d*=x}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=r[o],u=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+h*d+c*f-l*u,e[t+1]=c*p+h*u+l*d-a*f,e[t+2]=l*p+h*f+a*u-c*d,e[t+3]=h*p-a*d-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),d=a(r/2),u=c(n/2),f=c(i/2),p=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*f*p,this._y=l*f*d-u*h*p,this._z=l*h*p+u*f*d,this._w=l*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+l*f*p,this._y=l*f*d-u*h*p,this._z=l*h*p-u*f*d,this._w=l*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-l*f*p,this._y=l*f*d+u*h*p,this._z=l*h*p+u*f*d,this._w=l*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-l*f*p,this._y=l*f*d+u*h*p,this._z=l*h*p-u*f*d,this._w=l*h*d+u*f*p;break;case"YZX":this._x=u*h*d+l*f*p,this._y=l*f*d+u*h*p,this._z=l*h*p-u*f*d,this._w=l*h*d-u*f*p;break;case"XZY":this._x=u*h*d-l*f*p,this._y=l*f*d-u*h*p,this._z=l*h*p+u*f*d,this._w=l*h*d+u*f*p;break;default:Ae("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),d=2*(r*n-o*t);return this.x=t+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=i+c*d+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return pc.copy(this).projectOnVector(e),this.sub(pc)}reflect(e){return this.sub(pc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},pc=new P,qu=new yt,Be=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,i,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],v=i[0],m=i[3],g=i[6],x=i[1],S=i[4],y=i[7],b=i[2],E=i[5],_=i[8];return r[0]=o*v+a*x+c*b,r[3]=o*m+a*S+c*E,r[6]=o*g+a*y+c*_,r[1]=l*v+h*x+d*b,r[4]=l*m+h*S+d*E,r[7]=l*g+h*y+d*_,r[2]=u*v+f*x+p*b,r[5]=u*m+f*S+p*E,r[8]=u*g+f*y+p*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=h*o-a*l,u=a*c-h*r,f=l*r-o*c,p=t*d+n*u+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return e[0]=d*v,e[1]=(i*l-h*n)*v,e[2]=(a*n-i*o)*v,e[3]=u*v,e[4]=(h*t-i*c)*v,e[5]=(i*r-a*t)*v,e[6]=f*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return cs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(mc.makeScale(e,t)),this}rotate(e){return cs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(mc.makeRotation(-e)),this}translate(e,t){return cs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(mc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},mc=new Be,Yu=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ku=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function om(){let s={enabled:!0,workingColorSpace:rn,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===nt&&(i.r=gi(i.r),i.g=gi(i.g),i.b=gi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===nt&&(i.r=Js(i.r),i.g=Js(i.g),i.b=Js(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Pi?$r:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[rn]:{primaries:e,whitePoint:n,transfer:$r,toXYZ:Yu,fromXYZ:Ku,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:Yu,fromXYZ:Ku,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),s}var qe=om();function gi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Js(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ls,Ra=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ls===void 0&&(Ls=er("canvas")),Ls.width=e.width,Ls.height=e.height;let i=Ls.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ls}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=er("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=gi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(gi(t[n]/255)*255):t[n]=gi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},am=0,nr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=ii(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(gc(i[o].image)):r.push(gc(i[o]))}else r=gc(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function gc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ra.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ae("Texture: Unable to serialize Texture."),{})}var lm=0,xc=new P,Dt=class s extends zn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=En,i=En,r=Nt,o=Rn,a=Cn,c=fn,l=s.DEFAULT_ANISOTROPY,h=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=ii(),this.name="",this.source=new nr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(xc).x}get height(){return this.source.getSize(xc).y}get depth(){return this.source.getSize(xc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ae(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ae(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zn:e.x=e.x-Math.floor(e.x);break;case En:e.x=e.x<0?0:1;break;case js:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zn:e.y=e.y-Math.floor(e.y);break;case En:e.y=e.y<0?0:1;break;case js:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=rh;Dt.DEFAULT_ANISOTROPY=1;var rt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],p=c[9],v=c[2],m=c[6],g=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(p+m)<.1&&Math.abs(l+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(l+1)/2,y=(f+1)/2,b=(g+1)/2,E=(h+u)/4,_=(d+v)/4,M=(p+m)/4;return S>y&&S>b?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=E/n,r=_/n):y>b?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=E/i,r=M/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=_/r,i=M/r),this.set(n,i,r,t),this}let x=Math.sqrt((m-p)*(m-p)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(m-p)/x,this.y=(d-v)/x,this.z=(u-h)/x,this.w=Math.acos((l+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ca=class extends zn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new Dt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Nt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new nr(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},gn=class extends Ca{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Qr=class extends Dt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wt,this.minFilter=wt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ia=class extends Dt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wt,this.minFilter=wt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ze=class s{static{this.prototype.isMatrix4=!0}constructor(e,t,n,i,r,o,a,c,l,h,d,u,f,p,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,d,u,f,p,v,m)}set(e,t,n,i,r,o,a,c,l,h,d,u,f,p,v,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=p,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Ns.setFromMatrixColumn(e,0).length(),r=1/Ns.setFromMatrixColumn(e,1).length(),o=1/Ns.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,p=a*h,v=a*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+p*l,t[5]=u-v*l,t[9]=-a*c,t[2]=v-u*l,t[6]=p+f*l,t[10]=o*c}else if(e.order==="YXZ"){let u=c*h,f=c*d,p=l*h,v=l*d;t[0]=u+v*a,t[4]=p*a-f,t[8]=o*l,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=v+u*a,t[10]=o*c}else if(e.order==="ZXY"){let u=c*h,f=c*d,p=l*h,v=l*d;t[0]=u-v*a,t[4]=-o*d,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=v-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let u=o*h,f=o*d,p=a*h,v=a*d;t[0]=c*h,t[4]=p*l-f,t[8]=u*l+v,t[1]=c*d,t[5]=v*l+u,t[9]=f*l-p,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let u=o*c,f=o*l,p=a*c,v=a*l;t[0]=c*h,t[4]=v-u*d,t[8]=p*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*d+p,t[10]=u-v*d}else if(e.order==="XZY"){let u=o*c,f=o*l,p=a*c,v=a*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+v,t[5]=o*h,t[9]=f*d-p,t[2]=p*d-f,t[6]=a*h,t[10]=v*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cm,e,hm)}lookAt(e,t,n){let i=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Bi.crossVectors(n,pn),Bi.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Bi.crossVectors(n,pn)),Bi.normalize(),Xo.crossVectors(pn,Bi),i[0]=Bi.x,i[4]=Xo.x,i[8]=pn.x,i[1]=Bi.y,i[5]=Xo.y,i[9]=pn.y,i[2]=Bi.z,i[6]=Xo.z,i[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],v=n[6],m=n[10],g=n[14],x=n[3],S=n[7],y=n[11],b=n[15],E=i[0],_=i[4],M=i[8],I=i[12],R=i[1],D=i[5],O=i[9],W=i[13],L=i[2],z=i[6],H=i[10],B=i[14],ee=i[3],X=i[7],Y=i[11],te=i[15];return r[0]=o*E+a*R+c*L+l*ee,r[4]=o*_+a*D+c*z+l*X,r[8]=o*M+a*O+c*H+l*Y,r[12]=o*I+a*W+c*B+l*te,r[1]=h*E+d*R+u*L+f*ee,r[5]=h*_+d*D+u*z+f*X,r[9]=h*M+d*O+u*H+f*Y,r[13]=h*I+d*W+u*B+f*te,r[2]=p*E+v*R+m*L+g*ee,r[6]=p*_+v*D+m*z+g*X,r[10]=p*M+v*O+m*H+g*Y,r[14]=p*I+v*W+m*B+g*te,r[3]=x*E+S*R+y*L+b*ee,r[7]=x*_+S*D+y*z+b*X,r[11]=x*M+S*O+y*H+b*Y,r[15]=x*I+S*W+y*B+b*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],p=e[3],v=e[7],m=e[11],g=e[15],x=c*f-l*u,S=a*f-l*d,y=a*u-c*d,b=o*f-l*h,E=o*u-c*h,_=o*d-a*h;return t*(v*x-m*S+g*y)-n*(p*x-m*b+g*E)+i*(p*S-v*b+g*_)-r*(p*y-v*E+m*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],h=e[10];return t*(o*h-a*l)-n*(r*h-a*c)+i*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],p=e[12],v=e[13],m=e[14],g=e[15],x=t*a-n*o,S=t*c-i*o,y=t*l-r*o,b=n*c-i*a,E=n*l-r*a,_=i*l-r*c,M=h*v-d*p,I=h*m-u*p,R=h*g-f*p,D=d*m-u*v,O=d*g-f*v,W=u*g-f*m,L=x*W-S*O+y*D+b*R-E*I+_*M;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/L;return e[0]=(a*W-c*O+l*D)*z,e[1]=(i*O-n*W-r*D)*z,e[2]=(v*_-m*E+g*b)*z,e[3]=(u*E-d*_-f*b)*z,e[4]=(c*R-o*W-l*I)*z,e[5]=(t*W-i*R+r*I)*z,e[6]=(m*y-p*_-g*S)*z,e[7]=(h*_-u*y+f*S)*z,e[8]=(o*O-a*R+l*M)*z,e[9]=(n*R-t*O-r*M)*z,e[10]=(p*E-v*y+g*x)*z,e[11]=(d*y-h*E-f*x)*z,e[12]=(a*I-o*D-c*M)*z,e[13]=(t*D-n*I+i*M)*z,e[14]=(v*S-p*b-m*x)*z,e[15]=(h*b-d*S+u*x)*z,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,d=a+a,u=r*l,f=r*h,p=r*d,v=o*h,m=o*d,g=a*d,x=c*l,S=c*h,y=c*d,b=n.x,E=n.y,_=n.z;return i[0]=(1-(v+g))*b,i[1]=(f+y)*b,i[2]=(p-S)*b,i[3]=0,i[4]=(f-y)*E,i[5]=(1-(u+g))*E,i[6]=(m+x)*E,i[7]=0,i[8]=(p+S)*_,i[9]=(m-x)*_,i[10]=(1-(u+v))*_,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Ns.set(i[0],i[1],i[2]).length(),a=Ns.set(i[4],i[5],i[6]).length(),c=Ns.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Dn.copy(this);let l=1/o,h=1/a,d=1/c;return Dn.elements[0]*=l,Dn.elements[1]*=l,Dn.elements[2]*=l,Dn.elements[4]*=h,Dn.elements[5]*=h,Dn.elements[6]*=h,Dn.elements[8]*=d,Dn.elements[9]*=d,Dn.elements[10]*=d,t.setFromRotationMatrix(Dn),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,i,r,o,a=wn,c=!1){let l=this.elements,h=2*r/(t-e),d=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),p,v;if(c)p=r/(o-r),v=o*r/(o-r);else if(a===wn)p=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Qs)p=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=wn,c=!1){let l=this.elements,h=2/(t-e),d=2/(n-i),u=-(t+e)/(t-e),f=-(n+i)/(n-i),p,v;if(c)p=1/(o-r),v=o/(o-r);else if(a===wn)p=-2/(o-r),v=-(o+r)/(o-r);else if(a===Qs)p=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ns=new P,Dn=new ze,cm=new P(0,0,0),hm=new P(1,1,1),Bi=new P,Xo=new P,pn=new P,Zu=new ze,Ju=new yt,An=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Zu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ju.setFromEuler(this),this.setFromQuaternion(Ju,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};An.DEFAULT_ORDER="XYZ";var eo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},um=0,$u=new P,Ds=new yt,ci=new ze,qo=new P,Or=new P,dm=new P,fm=new yt,ju=new P(1,0,0),Qu=new P(0,1,0),ed=new P(0,0,1),td={type:"added"},pm={type:"removed"},Us={type:"childadded",child:null},_c={type:"childremoved",child:null},ut=class s extends zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new P,t=new An,n=new yt,i=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ze},normalMatrix:{value:new Be}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(ju,e)}rotateY(e){return this.rotateOnAxis(Qu,e)}rotateZ(e){return this.rotateOnAxis(ed,e)}translateOnAxis(e,t){return $u.copy(e).applyQuaternion(this.quaternion),this.position.add($u.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ju,e)}translateY(e){return this.translateOnAxis(Qu,e)}translateZ(e){return this.translateOnAxis(ed,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qo.copy(e):qo.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(Or,qo,this.up):ci.lookAt(qo,Or,this.up),this.quaternion.setFromRotationMatrix(ci),i&&(ci.extractRotation(i.matrixWorld),Ds.setFromRotationMatrix(ci),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Oe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(td),Us.child=e,this.dispatchEvent(Us),Us.child=null):Oe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pm),_c.child=e,this.dispatchEvent(_c),_c.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(td),Us.child=e,this.dispatchEvent(Us),Us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,e,dm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,fm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ut.DEFAULT_UP=new P(0,1,0);ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var St=class extends ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},mm={type:"move"},ir=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new St,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new St,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new St,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),g=this._getHandJoint(l,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;l.inputState.pinching&&u>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mm)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new St;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},xf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},Yo={h:0,s:0,l:0};function yc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var we=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=qe.workingColorSpace){if(e=_h(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=yc(o,r,e+1/3),this.g=yc(o,r,e),this.b=yc(o,r,e-1/3)}return qe.colorSpaceToWorking(this,i),this}setStyle(e,t=Tt){function n(r){r!==void 0&&parseFloat(r)<1&&Ae("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ae("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ae("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let n=xf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ae("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}copyLinearToSRGB(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return qe.workingToColorSpace(jt.copy(this),e),Math.round(Ze(jt.r*255,0,255))*65536+Math.round(Ze(jt.g*255,0,255))*256+Math.round(Ze(jt.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.workingToColorSpace(jt.copy(this),t);let n=jt.r,i=jt.g,r=jt.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.workingToColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Tt){qe.workingToColorSpace(jt.copy(this),e);let t=jt.r,n=jt.g,i=jt.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ki),this.setHSL(ki.h+e,ki.s+t,ki.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ki),e.getHSL(Yo);let n=Zr(ki.h,Yo.h,t),i=Zr(ki.s,Yo.s,t),r=Zr(ki.l,Yo.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},jt=new we;we.NAMES=xf;var to=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new we(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var _i=class extends ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Un=new P,hi=new P,vc=new P,ui=new P,Os=new P,Fs=new P,nd=new P,Mc=new P,Sc=new P,bc=new P,Tc=new rt,Ec=new rt,wc=new rt,mi=class s{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Un.subVectors(e,t),i.cross(Un);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Un.subVectors(i,t),hi.subVectors(n,t),vc.subVectors(e,t);let o=Un.dot(Un),a=Un.dot(hi),c=Un.dot(vc),l=hi.dot(hi),h=hi.dot(vc),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-a*h)*u,p=(o*h-a*c)*u;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,ui)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ui.x),c.addScaledVector(o,ui.y),c.addScaledVector(a,ui.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return Tc.setScalar(0),Ec.setScalar(0),wc.setScalar(0),Tc.fromBufferAttribute(e,t),Ec.fromBufferAttribute(e,n),wc.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Tc,r.x),o.addScaledVector(Ec,r.y),o.addScaledVector(wc,r.z),o}static isFrontFacing(e,t,n,i){return Un.subVectors(n,t),hi.subVectors(e,t),Un.cross(hi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Un.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;Os.subVectors(i,n),Fs.subVectors(r,n),Mc.subVectors(e,n);let c=Os.dot(Mc),l=Fs.dot(Mc);if(c<=0&&l<=0)return t.copy(n);Sc.subVectors(e,i);let h=Os.dot(Sc),d=Fs.dot(Sc);if(h>=0&&d<=h)return t.copy(i);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0&&c-h>0)return o=c/(c-h),t.copy(n).addScaledVector(Os,o);bc.subVectors(e,r);let f=Os.dot(bc),p=Fs.dot(bc);if(p>=0&&f<=p)return t.copy(r);let v=f*l-c*p;if(v<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(n).addScaledVector(Fs,a);let m=h*p-f*d;if(m<=0&&d-h>=0&&f-p>=0)return nd.subVectors(r,i),a=(d-h)/(d-h+(f-p)),t.copy(i).addScaledVector(nd,a);let g=1/(m+v+u);return o=v*g,a=u*g,t.copy(n).addScaledVector(Os,o).addScaledVector(Fs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},on=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,On):On.fromBufferAttribute(r,o),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ko.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ko.copy(n.boundingBox)),Ko.applyMatrix4(e.matrixWorld),this.union(Ko)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fr),Zo.subVectors(this.max,Fr),zs.subVectors(e.a,Fr),Bs.subVectors(e.b,Fr),ks.subVectors(e.c,Fr),Hi.subVectors(Bs,zs),Gi.subVectors(ks,Bs),is.subVectors(zs,ks);let t=[0,-Hi.z,Hi.y,0,-Gi.z,Gi.y,0,-is.z,is.y,Hi.z,0,-Hi.x,Gi.z,0,-Gi.x,is.z,0,-is.x,-Hi.y,Hi.x,0,-Gi.y,Gi.x,0,-is.y,is.x,0];return!Ac(t,zs,Bs,ks,Zo)||(t=[1,0,0,0,1,0,0,0,1],!Ac(t,zs,Bs,ks,Zo))?!1:(Jo.crossVectors(Hi,Gi),t=[Jo.x,Jo.y,Jo.z],Ac(t,zs,Bs,ks,Zo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},di=[new P,new P,new P,new P,new P,new P,new P,new P],On=new P,Ko=new on,zs=new P,Bs=new P,ks=new P,Hi=new P,Gi=new P,is=new P,Fr=new P,Zo=new P,Jo=new P,ss=new P;function Ac(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ss.fromArray(s,r);let a=i.x*Math.abs(ss.x)+i.y*Math.abs(ss.y)+i.z*Math.abs(ss.z),c=e.dot(ss),l=t.dot(ss),h=n.dot(ss);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var It=new P,$o=new Ne,gm=0,bt=class extends zn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=gh,this.updateRanges=[],this.gpuType=xn,this.version=0,this._normalizationScale=e!==void 0?Ul(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$o.fromBufferAttribute(this,t),$o.applyMatrix3(e),this.setXY(t,$o.x,$o.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):vh(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Mh(e,this.array)}};var no=class extends bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var io=class extends bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ye=class extends bt{constructor(e,t,n){super(new Float32Array(e),t,n)}},xm=new on,zr=new P,Rc=new P,un=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):xm.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zr.subVectors(e,this.center);let t=zr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(zr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zr.copy(e.center).add(Rc)),this.expandByPoint(zr.copy(e.center).sub(Rc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},_m=0,Tn=new ze,Cc=new ut,Hs=new P,mn=new on,Br=new on,kt=new P,at=class s extends zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vp(e)?io:no)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Be().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,n){return Tn.makeTranslation(e,t,n),this.applyMatrix4(Tn),this}scale(e,t,n){return Tn.makeScale(e,t,n),this.applyMatrix4(Tn),this}lookAt(e){return Cc.lookAt(e),Cc.updateMatrix(),this.applyMatrix4(Cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ye(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new on);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Br.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(mn.min,Br.min),mn.expandByPoint(kt),kt.addVectors(mn.max,Br.max),mn.expandByPoint(kt)):(mn.expandByPoint(Br.min),mn.expandByPoint(Br.max))}mn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)kt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(kt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)kt.fromBufferAttribute(a,l),c&&(Hs.fromBufferAttribute(e,l),kt.add(Hs)),i=Math.max(i,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new bt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[],l=new Uint8Array(n.count);for(let I=0;I<n.count;I++)a[I]=new P,c[I]=new P;let h=new P,d=new P,u=new P,f=new Ne,p=new Ne,v=new Ne,m=new P,g=new P;function x(I,R,D){l[I]=l[R]=l[D]=1,h.fromBufferAttribute(n,I),d.fromBufferAttribute(n,R),u.fromBufferAttribute(n,D),f.fromBufferAttribute(r,I),p.fromBufferAttribute(r,R),v.fromBufferAttribute(r,D),d.sub(h),u.sub(h),p.sub(f),v.sub(f);let O=1/(p.x*v.y-v.x*p.y);isFinite(O)&&(m.copy(d).multiplyScalar(v.y).addScaledVector(u,-p.y).multiplyScalar(O),g.copy(u).multiplyScalar(p.x).addScaledVector(d,-v.x).multiplyScalar(O),a[I].add(m),a[R].add(m),a[D].add(m),c[I].add(g),c[R].add(g),c[D].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let I=0,R=S.length;I<R;++I){let D=S[I],O=D.start,W=D.count;for(let L=O,z=O+W;L<z;L+=3)x(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let y=new P,b=new P,E=new P,_=new P;function M(I){E.fromBufferAttribute(i,I),_.copy(E);let R=a[I];y.copy(R),y.sub(E.multiplyScalar(E.dot(R))).normalize(),b.crossVectors(_,R);let O=b.dot(c[I])<0?-1:1;o.setXYZW(I,y.x,y.y,y.z,O)}for(let I=0,R=n.count;I<R;++I)l[I]&&M(I);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new P,r=new P,o=new P,a=new P,c=new P,l=new P,h=new P,d=new P;if(e)for(let u=0,f=e.count;u<f;u+=3){let p=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h),f=0,p=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*h;for(let g=0;g<h;g++)u[p++]=l[f++]}return new bt(u,h,d)}if(this.index===null)return Ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=e(u,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},fs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=gh,this.updateRanges=[],this.version=0,this.uuid=ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=id(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=id(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function id(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=ii()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}var sn=new P,Xi=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?Ul(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){jr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){jr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):vh(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Mh(e,this.data.array)}},Ic=new P,ym=new P,vm=new Be,Fn=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Ic.subVectors(n,t).cross(ym.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Ic),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||vm.getNormalMatrix(e),i=this.coplanarPoint(Ic).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Mm=0,Qt=class extends zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=ii(),this.name="",this.type="Material",this.blending=xr,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$c,this.blendDst=jc,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=af,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=va,this.stencilZFail=va,this.stencilZPass=va,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ae(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ae(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new we().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Fn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ne().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ne().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},sr=class extends Qt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Gs,kr=new P,Vs=new P,Ws=new P,Xs=new Ne,Hr=new Ne,_f=new ze,jo=new P,Gr=new P,Qo=new P,sd=new Ne,Pc=new Ne,rd=new Ne,so=class extends ut{constructor(e=new sr){if(super(),this.isSprite=!0,this.type="Sprite",Gs===void 0){Gs=new at;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new fs(t,5);Gs.setIndex([0,1,2,0,2,3]),Gs.setAttribute("position",new Xi(n,3,0,!1)),Gs.setAttribute("uv",new Xi(n,2,3,!1))}this.geometry=Gs,this.material=e,this.center=new Ne(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Oe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vs.setFromMatrixScale(this.matrixWorld),_f.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ws.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vs.multiplyScalar(-Ws.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;ea(jo.set(-.5,-.5,0),Ws,o,Vs,i,r),ea(Gr.set(.5,-.5,0),Ws,o,Vs,i,r),ea(Qo.set(.5,.5,0),Ws,o,Vs,i,r),sd.set(0,0),Pc.set(1,0),rd.set(1,1);let a=e.ray.intersectTriangle(jo,Gr,Qo,!1,kr);if(a===null&&(ea(Gr.set(-.5,.5,0),Ws,o,Vs,i,r),Pc.set(0,1),a=e.ray.intersectTriangle(jo,Qo,Gr,!1,kr),a===null))return;let c=e.ray.origin.distanceTo(kr);c<e.near||c>e.far||t.push({distance:c,point:kr.clone(),uv:mi.getInterpolation(kr,jo,Gr,Qo,sd,Pc,rd,new Ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function ea(s,e,t,n,i,r){Xs.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Hr.x=r*Xs.x-i*Xs.y,Hr.y=i*Xs.x+r*Xs.y):Hr.copy(Xs),s.copy(e),s.x+=Hr.x,s.y+=Hr.y,s.applyMatrix4(_f)}var fi=new P,Lc=new P,ta=new P,na=new P,ps=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,t),fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Lc.copy(e).add(t).multiplyScalar(.5),ta.copy(t).sub(e).normalize(),na.copy(this.origin).sub(Lc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ta),a=na.dot(this.direction),c=-na.dot(ta),l=na.lengthSq(),h=Math.abs(1-o*o),d,u,f,p;if(h>0)if(d=o*c-a,u=o*a-c,p=r*h,d>=0)if(u>=-p)if(u<=p){let v=1/h;d*=v,u*=v,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-p?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=p?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Lc).addScaledVector(ta,u),f}intersectSphere(e,t){if(e.radius<0)return null;fi.subVectors(e.center,this.origin);let n=fi.dot(this.direction),i=fi.dot(fi)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,n,i,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,d=e.x-o.x,u=e.y-o.y,f=e.z-o.z,p=t.x-o.x,v=t.y-o.y,m=t.z-o.z,g=n.x-o.x,x=n.y-o.y,S=n.z-o.z,y=Math.abs(c),b=Math.abs(l),E=Math.abs(h),_,M,I,R,D,O,W,L,z,H,B,ee;if(y>=b&&y>=E?(I=c,O=d,z=p,ee=g,c>=0?(_=l,M=h,R=u,D=f,W=v,L=m,H=x,B=S):(_=h,M=l,R=f,D=u,W=m,L=v,H=S,B=x)):b>=E?(I=l,O=u,z=v,ee=x,l>=0?(_=h,M=c,R=f,D=d,W=m,L=p,H=S,B=g):(_=c,M=h,R=d,D=f,W=p,L=m,H=g,B=S)):(I=h,O=f,z=m,ee=S,h>=0?(_=c,M=l,R=d,D=u,W=p,L=v,H=g,B=x):(_=l,M=c,R=u,D=d,W=v,L=p,H=x,B=g)),I===0)return null;let X=_/I,Y=M/I,te=1/I,_e=R-X*O,Me=D-Y*O,Z=W-X*z,fe=L-Y*z,ye=H-X*ee,Ee=B-Y*ee,pe=ye*fe-Ee*Z,Fe=_e*Ee-Me*ye,ft=Z*Me-fe*_e;if(i){if(pe<0||Fe<0||ft<0)return null}else if((pe<0||Fe<0||ft<0)&&(pe>0||Fe>0||ft>0))return null;let Le=pe+Fe+ft;if(Le===0)return null;let it=te*(pe*O+Fe*z+ft*ee);return(Le>0?it<0:it>0)?null:this.at(it/Le,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},lt=class extends Qt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=qa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},od=new ze,rs=new ps,ia=new un,ad=new P,sa=new P,ra=new P,oa=new P,Nc=new P,aa=new P,ld=new P,la=new P,Ge=class extends ut{constructor(e=new at,t=new lt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){aa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],d=r[c];h!==0&&(Nc.fromBufferAttribute(d,e),o?aa.addScaledVector(Nc,h):aa.addScaledVector(Nc.sub(t),h))}t.add(aa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ia.copy(n.boundingSphere),ia.applyMatrix4(r),rs.copy(e.ray).recast(e.near),!(ia.containsPoint(rs.origin)===!1&&(rs.intersectSphere(ia,ad)===null||rs.origin.distanceToSquared(ad)>(e.far-e.near)**2))&&(od.copy(r).invert(),rs.copy(e.ray).applyMatrix4(od),!(n.boundingBox!==null&&rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,rs)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=u.length;p<v;p++){let m=u[p],g=o[m.materialIndex],x=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,b=S;y<b;y+=3){let E=a.getX(y),_=a.getX(y+1),M=a.getX(y+2);i=ca(this,g,e,n,l,h,d,E,_,M),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){let x=a.getX(m),S=a.getX(m+1),y=a.getX(m+2);i=ca(this,o,e,n,l,h,d,x,S,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,v=u.length;p<v;p++){let m=u[p],g=o[m.materialIndex],x=Math.max(m.start,f.start),S=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,b=S;y<b;y+=3){let E=y,_=y+1,M=y+2;i=ca(this,g,e,n,l,h,d,E,_,M),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){let x=m,S=m+1,y=m+2;i=ca(this,o,e,n,l,h,d,x,S,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function Sm(s,e,t,n,i,r,o,a){let c;if(e.side===Xt?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===ti,a),c===null)return null;la.copy(a),la.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(la);return l<t.near||l>t.far?null:{distance:l,point:la.clone(),object:s}}function ca(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,sa),s.getVertexPosition(c,ra),s.getVertexPosition(l,oa);let h=Sm(s,e,t,n,sa,ra,oa,ld);if(h){let d=new P;mi.getBarycoord(ld,sa,ra,oa,d),i&&(h.uv=mi.getInterpolatedAttribute(i,a,c,l,d,new Ne)),r&&(h.uv1=mi.getInterpolatedAttribute(r,a,c,l,d,new Ne)),o&&(h.normal=mi.getInterpolatedAttribute(o,a,c,l,d,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new P,materialIndex:0};mi.getNormal(sa,ra,oa,u.normal),h.face=u,h.barycoord=d}return h}var Vr=new rt,cd=new rt,hd=new rt,bm=new rt,ud=new ze,ha=new P,Dc=new un,dd=new ze,Uc=new ps,ro=class extends Ge{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Bc,this.bindMatrix=new ze,this.bindMatrixInverse=new ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new on),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ha),this.boundingBox.expandByPoint(ha)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new un),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ha),this.boundingSphere.expandByPoint(ha)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Dc.copy(this.boundingSphere),Dc.applyMatrix4(i),e.ray.intersectsSphere(Dc)!==!1&&(dd.copy(i).invert(),Uc.copy(e.ray).applyMatrix4(dd),!(this.boundingBox!==null&&Uc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Uc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new rt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Bc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===tf?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ae("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;cd.fromBufferAttribute(i.attributes.skinIndex,e),hd.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(Vr.copy(t),t.set(0,0,0,0)):(Vr.set(t.x,t.y,t.z,1),t.set(0,0,0)),Vr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=hd.getComponent(r);if(o!==0){let a=cd.getComponent(r);ud.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(bm.copy(Vr).applyMatrix4(ud),o)}}return t.isVector4&&(t.w=Vr.w),t.applyMatrix4(this.bindMatrixInverse)}},rr=class extends ut{constructor(){super(),this.isBone=!0,this.type="Bone"}},or=class extends Dt{constructor(e=null,t=1,n=1,i,r,o,a,c,l=wt,h=wt,d,u){super(null,o,a,c,l,h,i,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},fd=new ze,Tm=new ze,oo=class s{constructor(e=[],t=[]){this.uuid=ii(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ae("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Tm;fd.multiplyMatrices(a,t[r]),fd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new or(t,e,e,Cn,xn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(Ae("Skeleton: No bone found with UUID:",r),o=new rr),this.bones.push(o),this.boneInverses.push(new ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},yi=class extends bt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},qs=new ze,pd=new ze,ua=[],md=new on,Em=new ze,Wr=new Ge,Xr=new un,ms=class extends Ge{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new yi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Em)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new on),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qs),md.copy(e.boundingBox).applyMatrix4(qs),this.boundingBox.union(md)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qs),Xr.copy(e.boundingSphere).applyMatrix4(qs),this.boundingSphere.union(Xr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Wr.geometry=this.geometry,Wr.material=this.material,Wr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xr.copy(this.boundingSphere),Xr.applyMatrix4(n),e.ray.intersectsSphere(Xr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,qs),pd.multiplyMatrices(n,qs),Wr.matrixWorld=pd,Wr.raycast(e,ua);for(let o=0,a=ua.length;o<a;o++){let c=ua[o];c.instanceId=r,c.object=this,t.push(c)}ua.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new yi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new or(new Float32Array(i*this.count),i,this.count,Qa,xn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},os=new un,wm=new Ne(.5,.5),da=new P,qi=class{constructor(e=new Fn,t=new Fn,n=new Fn,i=new Fn,r=new Fn,o=new Fn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=wn,n=!1){let i=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],v=r[9],m=r[10],g=r[11],x=r[12],S=r[13],y=r[14],b=r[15];if(i[0].setComponents(l-o,f-h,g-p,b-x).normalize(),i[1].setComponents(l+o,f+h,g+p,b+x).normalize(),i[2].setComponents(l+a,f+d,g+v,b+S).normalize(),i[3].setComponents(l-a,f-d,g-v,b-S).normalize(),n)i[4].setComponents(c,u,m,y).normalize(),i[5].setComponents(l-c,f-u,g-m,b-y).normalize();else if(i[4].setComponents(l-c,f-u,g-m,b-y).normalize(),t===wn)i[5].setComponents(l+c,f+u,g+m,b+y).normalize();else if(t===Qs)i[5].setComponents(c,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(e){os.center.set(0,0,0);let t=wm.distanceTo(e.center);return os.radius=.7071067811865476+t,os.applyMatrix4(e.matrixWorld),this.intersectsSphere(os)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(da.x=i.normal.x>0?e.max.x:e.min.x,da.y=i.normal.y>0?e.max.y:e.min.y,da.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(da)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},gd=new ze,Pa=class s{constructor(){this.coordinateSystem=wn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let r=t[i];gd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new qi),n[i].setFromProjectionMatrix(gd,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new qi),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new s().copy(this)}};var ar=class extends Qt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},La=new P,Na=new P,xd=new ze,qr=new ps,fa=new un,Oc=new P,_d=new P,gs=class extends ut{constructor(e=new at,t=new ar){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)La.fromBufferAttribute(t,i-1),Na.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=La.distanceTo(Na);e.setAttribute("lineDistance",new Ye(n,1))}else Ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(i),fa.radius+=r,e.ray.intersectsSphere(fa)===!1)return;xd.copy(i).invert(),qr.copy(e.ray).applyMatrix4(xd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let v=f,m=p-1;v<m;v+=l){let g=h.getX(v),x=h.getX(v+1),S=pa(this,e,qr,c,g,x,v);S&&t.push(S)}if(this.isLineLoop){let v=h.getX(p-1),m=h.getX(f),g=pa(this,e,qr,c,v,m,p-1);g&&t.push(g)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let v=f,m=p-1;v<m;v+=l){let g=pa(this,e,qr,c,v,v+1,v);g&&t.push(g)}if(this.isLineLoop){let v=pa(this,e,qr,c,p-1,f,p-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function pa(s,e,t,n,i,r,o){let a=s.geometry.attributes.position;if(La.fromBufferAttribute(a,i),Na.fromBufferAttribute(a,r),t.distanceSqToSegment(La,Na,Oc,_d)>n)return;Oc.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(Oc);if(!(l<e.near||l>e.far))return{distance:l,point:_d.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var yd=new P,vd=new P,ao=class extends gs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)yd.fromBufferAttribute(t,i),vd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+yd.distanceTo(vd);e.setAttribute("lineDistance",new Ye(n,1))}else Ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},lo=class extends gs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Jn=class extends Qt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Md=new ze,Hc=new ps,ma=new un,ga=new P,vi=class extends ut{constructor(e=new at,t=new Jn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(i),ma.radius+=r,e.ray.intersectsSphere(ma)===!1)return;Md.copy(i).invert(),Hc.copy(e.ray).applyMatrix4(Md);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let p=u,v=f;p<v;p++){let m=l.getX(p);ga.fromBufferAttribute(d,m),Sd(ga,m,c,i,e,t,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=u,v=f;p<v;p++)ga.fromBufferAttribute(d,p),Sd(ga,p,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Sd(s,e,t,n,i,r,o){let a=Hc.distanceSqToPoint(s);if(a<t){let c=new P;Hc.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var co=class extends Dt{constructor(e=[],t=Ss,n,i,r,o,a,c,l,h){super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Mi=class extends Dt{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Si=class extends Dt{constructor(e,t,n=Gn,i,r,o,a=wt,c=wt,l,h=xi,d=1){if(h!==xi&&h!==Ii)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ho=class extends Si{constructor(e,t=Gn,n=Ss,i,r,o=wt,a=wt,c,l=xi){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,i,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},uo=class extends Dt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Wt=class s extends at{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Ye(l,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(d,2));function p(v,m,g,x,S,y,b,E,_,M,I){let R=y/_,D=b/M,O=y/2,W=b/2,L=E/2,z=_+1,H=M+1,B=0,ee=0,X=new P;for(let Y=0;Y<H;Y++){let te=Y*D-W;for(let _e=0;_e<z;_e++){let Me=_e*R-O;X[v]=Me*x,X[m]=te*S,X[g]=L,l.push(X.x,X.y,X.z),X[v]=0,X[m]=0,X[g]=E>0?1:-1,h.push(X.x,X.y,X.z),d.push(_e/_),d.push(1-Y/M),B+=1}}for(let Y=0;Y<M;Y++)for(let te=0;te<_;te++){let _e=u+te+z*Y,Me=u+te+z*(Y+1),Z=u+(te+1)+z*(Y+1),fe=u+(te+1)+z*Y;c.push(_e,Me,fe),c.push(Me,Z,fe),ee+=6}a.addGroup(f,ee,I),f+=ee,u+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},fo=class s extends at{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let o=[],a=[],c=[],l=[],h=t/2,d=Math.PI/2*e,u=t,f=2*d+u,p=n*2+r,v=i+1,m=new P,g=new P;for(let x=0;x<=p;x++){let S=0,y=0,b=0,E=0;if(x<=n){let I=x/n,R=I*Math.PI/2;y=-h-e*Math.cos(R),b=e*Math.sin(R),E=-e*Math.cos(R),S=I*d}else if(x<=n+r){let I=(x-n)/r;y=-h+I*t,b=e,E=0,S=d+I*u}else{let I=(x-n-r)/n,R=I*Math.PI/2;y=h+e*Math.sin(R),b=e*Math.cos(R),E=e*Math.sin(R),S=d+u+I*d}let _=Math.max(0,Math.min(1,S/f)),M=0;x===0?M=.5/i:x===p&&(M=-.5/i);for(let I=0;I<=i;I++){let R=I/i,D=R*Math.PI*2,O=Math.sin(D),W=Math.cos(D);g.x=-b*W,g.y=y,g.z=b*O,a.push(g.x,g.y,g.z),m.set(-b*W,E,b*O),m.normalize(),c.push(m.x,m.y,m.z),l.push(R+M,_)}if(x>0){let I=(x-1)*v;for(let R=0;R<i;R++){let D=I+R,O=I+R+1,W=x*v+R,L=x*v+R+1;o.push(D,O,W),o.push(O,L,W)}}}this.setIndex(o),this.setAttribute("position",new Ye(a,3)),this.setAttribute("normal",new Ye(c,3)),this.setAttribute("uv",new Ye(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},po=class s extends at{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new P,h=new Ne;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=n+d/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Ye(o,3)),this.setAttribute("normal",new Ye(a,3)),this.setAttribute("uv",new Ye(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},gt=class s extends at{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,v=[],m=n/2,g=0;x(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Ye(d,3)),this.setAttribute("normal",new Ye(u,3)),this.setAttribute("uv",new Ye(f,2));function x(){let y=new P,b=new P,E=0,_=(t-e)/n;for(let M=0;M<=r;M++){let I=[],R=M/r,D=R*(t-e)+e;for(let O=0;O<=i;O++){let W=O/i,L=W*c+a,z=Math.sin(L),H=Math.cos(L);b.x=D*z,b.y=-R*n+m,b.z=D*H,d.push(b.x,b.y,b.z),y.set(z,_,H).normalize(),u.push(y.x,y.y,y.z),f.push(W,1-R),I.push(p++)}v.push(I)}for(let M=0;M<i;M++)for(let I=0;I<r;I++){let R=v[I][M],D=v[I+1][M],O=v[I+1][M+1],W=v[I][M+1];(e>0||I!==0)&&(h.push(R,D,W),E+=3),(t>0||I!==r-1)&&(h.push(D,O,W),E+=3)}l.addGroup(g,E,0),g+=E}function S(y){let b=p,E=new Ne,_=new P,M=0,I=y===!0?e:t,R=y===!0?1:-1;for(let O=1;O<=i;O++)d.push(0,m*R,0),u.push(0,R,0),f.push(.5,.5),p++;let D=p;for(let O=0;O<=i;O++){let L=O/i*c+a,z=Math.cos(L),H=Math.sin(L);_.x=I*H,_.y=m*R,_.z=I*z,d.push(_.x,_.y,_.z),u.push(0,R,0),E.x=z*.5+.5,E.y=H*.5*R+.5,f.push(E.x,E.y),p++}for(let O=0;O<i;O++){let W=b+O,L=D+O;y===!0?h.push(L,L+1,W):h.push(L+1,L,W),M+=3}l.addGroup(g,M,y===!0?1:2),g+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},lr=class s extends gt{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},cr=class s extends at{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new Ye(r,3)),this.setAttribute("normal",new Ye(r.slice(),3)),this.setAttribute("uv",new Ye(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){let S=new P,y=new P,b=new P;for(let E=0;E<t.length;E+=3)f(t[E+0],S),f(t[E+1],y),f(t[E+2],b),c(S,y,b,x)}function c(x,S,y,b){let E=b+1,_=[];for(let M=0;M<=E;M++){_[M]=[];let I=x.clone().lerp(y,M/E),R=S.clone().lerp(y,M/E),D=E-M;for(let O=0;O<=D;O++)O===0&&M===E?_[M][O]=I:_[M][O]=I.clone().lerp(R,O/D)}for(let M=0;M<E;M++)for(let I=0;I<2*(E-M)-1;I++){let R=Math.floor(I/2);I%2===0?(u(_[M][R+1]),u(_[M+1][R]),u(_[M][R])):(u(_[M][R+1]),u(_[M+1][R+1]),u(_[M+1][R]))}}function l(x){let S=new P;for(let y=0;y<r.length;y+=3)S.x=r[y+0],S.y=r[y+1],S.z=r[y+2],S.normalize().multiplyScalar(x),r[y+0]=S.x,r[y+1]=S.y,r[y+2]=S.z}function h(){let x=new P;for(let S=0;S<r.length;S+=3){x.x=r[S+0],x.y=r[S+1],x.z=r[S+2];let y=m(x)/2/Math.PI+.5,b=g(x)/Math.PI+.5;o.push(y,1-b)}p(),d()}function d(){for(let x=0;x<o.length;x+=6){let S=o[x+0],y=o[x+2],b=o[x+4],E=Math.max(S,y,b),_=Math.min(S,y,b);E>.9&&_<.1&&(S<.2&&(o[x+0]+=1),y<.2&&(o[x+2]+=1),b<.2&&(o[x+4]+=1))}}function u(x){r.push(x.x,x.y,x.z)}function f(x,S){let y=x*3;S.x=e[y+0],S.y=e[y+1],S.z=e[y+2]}function p(){let x=new P,S=new P,y=new P,b=new P,E=new Ne,_=new Ne,M=new Ne;for(let I=0,R=0;I<r.length;I+=9,R+=6){x.set(r[I+0],r[I+1],r[I+2]),S.set(r[I+3],r[I+4],r[I+5]),y.set(r[I+6],r[I+7],r[I+8]),E.set(o[R+0],o[R+1]),_.set(o[R+2],o[R+3]),M.set(o[R+4],o[R+5]),b.copy(x).add(S).add(y).divideScalar(3);let D=m(b);v(E,R+0,x,D),v(_,R+2,S,D),v(M,R+4,y,D)}}function v(x,S,y,b){b<0&&x.x===1&&(o[S]=x.x-1),y.x===0&&y.z===0&&(o[S]=b/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function g(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}},mo=class s extends cr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var hr=class s extends cr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var go=class s extends cr{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Bn=class s extends at{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,d=e/a,u=t/c,f=[],p=[],v=[],m=[];for(let g=0;g<h;g++){let x=g*u-o;for(let S=0;S<l;S++){let y=S*d-r;p.push(y,-x,0),v.push(0,0,1),m.push(S/a),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let x=0;x<a;x++){let S=x+l*g,y=x+l*(g+1),b=x+1+l*(g+1),E=x+1+l*g;f.push(S,y,E),f.push(y,b,E)}this.setIndex(f),this.setAttribute("position",new Ye(p,3)),this.setAttribute("normal",new Ye(v,3)),this.setAttribute("uv",new Ye(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var bi=class s extends at{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],d=new P,u=new P,f=[],p=[],v=[],m=[];for(let g=0;g<=n;g++){let x=[],S=g/n,y=o+S*a,b=e*Math.cos(y),E=Math.sqrt(e*e-b*b),_=0;g===0&&o===0?_=.5/t:g===n&&c===Math.PI&&(_=-.5/t);for(let M=0;M<=t;M++){let I=M/t,R=i+I*r;d.x=-E*Math.cos(R),d.y=b,d.z=E*Math.sin(R),p.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(I+_,1-S),x.push(l++)}h.push(x)}for(let g=0;g<n;g++)for(let x=0;x<t;x++){let S=h[g][x+1],y=h[g][x],b=h[g+1][x],E=h[g+1][x+1];(g!==0||o>0)&&f.push(S,y,E),(g!==n-1||c<Math.PI)&&f.push(y,b,E)}this.setIndex(f),this.setAttribute("position",new Ye(p,3)),this.setAttribute("normal",new Ye(v,3)),this.setAttribute("uv",new Ye(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ur=class s extends at{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let c=[],l=[],h=[],d=[],u=new P,f=new P,p=new P;for(let v=0;v<=n;v++){let m=o+v/n*a;for(let g=0;g<=i;g++){let x=g/i*r;f.x=(e+t*Math.cos(m))*Math.cos(x),f.y=(e+t*Math.cos(m))*Math.sin(x),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(g/i),d.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=i;m++){let g=(i+1)*v+m-1,x=(i+1)*(v-1)+m-1,S=(i+1)*(v-1)+m,y=(i+1)*v+m;c.push(g,x,y),c.push(x,S,y)}this.setIndex(c),this.setAttribute("position",new Ye(l,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Es(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(bd(i))i.isRenderTargetTexture?(Ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(bd(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function tn(s){let e={};for(let t=0;t<s.length;t++){let n=Es(s[t]);for(let i in n)e[i]=n[i]}return e}function bd(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Am(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Sh(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}var yf={clone:Es,merge:tn},Rm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$n=class extends Qt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rm,this.fragmentShader=Cm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Es(e.uniforms),this.uniformsGroups=Am(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new we().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ne().fromArray(i.value);break;case"v3":this.uniforms[n].value=new P().fromArray(i.value);break;case"v4":this.uniforms[n].value=new rt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Be().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ze().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Da=class extends $n{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},At=class extends Qt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lo,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},an=class extends At{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return cs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){cs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var jn=class extends Qt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lo,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=qa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ua=class extends Qt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Oa=class extends Qt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Wi(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Yr(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function Im(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Td(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function Pm(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var Qn=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Fa=class extends Qn{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:as,endingEnd:as}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ls:r=e,a=2*t-n;break;case Jr:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ls:o=e,c=2*n-t;break;case Jr:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),v=p*p,m=v*p,g=-u*m+2*u*v-u*p,x=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*p+1,S=(-1-f)*m+(1.5+f)*v+.5*p,y=f*m-f*v;for(let b=0;b!==a;++b)r[b]=g*o[h+b]+x*o[l+b]+S*o[c+b]+y*o[d+b];return r}},xo=class extends Qn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*d+o[c+u]*h;return r}},za=class extends Qn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Ba=class extends Qn{interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-t)/(i-t),v=1-p;for(let m=0;m!==a;++m)r[m]=o[l+m]*v+o[c+m]*p;return r}let u=a*2,f=e-1;for(let p=0;p!==a;++p){let v=o[l+p],m=o[c+p],g=f*u+p*2,x=d[g],S=d[g+1],y=e*u+p*2,b=h[y],E=h[y+1],_=Nm(n,t,x,b,i);r[p]=vf(_,v,S,E,m)}return r}};function vf(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function Lm(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function Nm(s,e,t,n,i){let r=(s-e)/(i-e);for(let o=0;o<8;o++){let a=vf(r,e,t,n,i)-s;if(Math.abs(a)<1e-10)break;let c=Lm(r,e,t,n,i);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var dn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Wi(t,this.TimeBufferType),this.values=Wi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Wi(e.times,Array),values:Wi(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Yr(e.settings)&&(n.settings={inTangents:Wi(e.settings.inTangents,Array),outTangents:Wi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new za(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new xo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ba(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case hs:t=this.InterpolantFactoryMethodDiscrete;break;case us:t=this.InterpolantFactoryMethodLinear;break;case ya:t=this.InterpolantFactoryMethodSmooth;break;case kc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ae("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return hs;case this.InterpolantFactoryMethodLinear:return us;case this.InterpolantFactoryMethodSmooth:return ya;case this.InterpolantFactoryMethodBezier:return kc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;Yr(this.settings)&&(Ed(this.settings.inTangents,e),Ed(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Yr(this.settings)&&(wd(this.settings.inTangents,e),wd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Oe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Oe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Oe("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){Oe("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&Wp(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){Oe("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ya,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{let d=a*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let v=t[d+p];if(v!==t[u+p]||v!==t[f+p]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Yr(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Ed(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]+=e}function wd(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}dn.prototype.ValueTypeName="";dn.prototype.TimeBufferType=Float32Array;dn.prototype.ValueBufferType=Float32Array;dn.prototype.DefaultInterpolation=us;var Ti=class extends dn{constructor(e,t,n){super(e,t,n)}};Ti.prototype.ValueTypeName="bool";Ti.prototype.ValueBufferType=Array;Ti.prototype.DefaultInterpolation=hs;Ti.prototype.InterpolantFactoryMethodLinear=void 0;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var _o=class extends dn{constructor(e,t,n,i){super(e,t,n,i)}};_o.prototype.ValueTypeName="color";var Ei=class extends dn{constructor(e,t,n,i){super(e,t,n,i)}};Ei.prototype.ValueTypeName="number";var ka=class extends Qn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t),l=e*a;for(let h=l+a;l!==h;l+=4)yt.slerpFlat(r,0,o,l-a,o,l,c);return r}},wi=class extends dn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new ka(this.times,this.values,this.getValueSize(),e)}};wi.prototype.ValueTypeName="quaternion";wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ai=class extends dn{constructor(e,t,n){super(e,t,n)}};Ai.prototype.ValueTypeName="string";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=hs;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Yi=class extends dn{constructor(e,t,n,i){super(e,t,n,i)}};Yi.prototype.ValueTypeName="vector";var Ri=class{constructor(e="",t=-1,n=[],i=Dl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ii(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Um(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(dn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=Im(c);c=Td(c,1,h),l=Td(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Ei(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let d=h[1],u=i[d];u||(i[d]=u=[]),u.push(l)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Dm(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ei;case"vector":case"vector2":case"vector3":case"vector4":return Yi;case"color":return _o;case"quaternion":return wi;case"bool":case"boolean":return Ti;case"string":return Ai}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Um(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Dm(s.type);if(s.times===void 0){let n=[],i=[];Pm(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),Yr(s.settings)&&(t.settings={inTangents:Wi(s.settings.inTangents,Float32Array),outTangents:Wi(s.settings.outTangents,Float32Array)}),t}var Kn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Ad(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Ad(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Ad(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Ha=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],p=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Mf=new Ha,ei=class{constructor(e){this.manager=e!==void 0?e:Mf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};ei.DEFAULT_MATERIAL_NAME="__DEFAULT";var pi={},Gc=class extends Error{constructor(e,t){super(e),this.response=t}},dr=class extends ei{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Kn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(pi[e]!==void 0){pi[e].push({onLoad:t,onProgress:n,onError:i});return}pi[e]=[],pi[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ae("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=pi[e],d=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=u?parseInt(u):0,p=f!==0,v=0,m=new ReadableStream({start(g){x();function x(){d.read().then(({done:S,value:y})=>{if(S)g.close();else{v+=y.byteLength;let b=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:f});for(let E=0,_=h.length;E<_;E++){let M=h[E];M.onProgress&&M.onProgress(b)}g.enqueue(y),x()}},S=>{g.error(S)})}}});return new Response(m)}else throw new Gc(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return l.arrayBuffer().then(p=>f.decode(p))}}}).then(l=>{Kn.add(`file:${e}`,l);let h=pi[e];delete pi[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=pi[e];if(h===void 0)throw this.manager.itemError(e),l;delete pi[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ys=new WeakMap,Ga=class extends ei{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Kn.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let d=Ys.get(o);d===void 0&&(d=[],Ys.set(o,d)),d.push({onLoad:t,onError:i})}return o}let a=er("img");function c(){h(),t&&t(this);let d=Ys.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}Ys.delete(this),r.manager.itemEnd(e)}function l(d){h(),i&&i(d),Kn.remove(`image:${e}`);let u=Ys.get(this)||[];for(let f=0;f<u.length;f++){let p=u[f];p.onError&&p.onError(d)}Ys.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Kn.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var yo=class extends ei{constructor(e){super(e)}load(e,t,n,i){let r=new Dt,o=new Ga(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Ki=class extends ut{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Zi=class extends Ki{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Fc=new ze,Rd=new P,Cd=new P,fr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.mapType=fn,this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qi,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Rd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rd),Cd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Fc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Fc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,c=i?i.x/r.x:0,l=i?i.y/r.y:0;e.coordinateSystem===Qs||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(Fc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},xa=new P,_a=new yt,Yn=new P,vo=class extends ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(xa,_a,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xa,_a,Yn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(xa,_a,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xa,_a,Yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Vi=new P,Id=new Ne,Pd=new Ne,Et=class extends vo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Kr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ds*2*Math.atan(Math.tan(Kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z)}getViewSize(e,t){return this.getViewBounds(e,Id,Pd),t.subVectors(Pd,Id)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Kr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Vc=class extends fr{constructor(){super(new Et(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ds*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},xs=class extends Ki{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Vc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Wc=class extends fr{constructor(){super(new Et(90,1,.5,500)),this.isPointLightShadow=!0}},ln=class extends Ki{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Wc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},_s=class extends vo{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Xc=class extends fr{constructor(){super(new _s(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},kn=class extends Ki{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.shadow=new Xc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Mo=class extends Ki{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ci=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var zc=new WeakMap,So=class extends ei{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ae("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ae("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Kn.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{zc.has(o)===!0?(i&&i(zc.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Kn.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),zc.set(c,l),Kn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Kn.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ks=-90,Zs=1,pr=class extends ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Et(Ks,Zs,e,t);i.layers=this.layers,this.add(i);let r=new Et(Ks,Zs,e,t);r.layers=this.layers,this.add(r);let o=new Et(Ks,Zs,e,t);o.layers=this.layers,this.add(o);let a=new Et(Ks,Zs,e,t);a.layers=this.layers,this.add(a);let c=new Et(Ks,Zs,e,t);c.layers=this.layers,this.add(c);let l=new Et(Ks,Zs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===wn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=v,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Va=class extends Et{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Wa=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){yt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let o=this._workIndex*r;yt.multiplyQuaternionsFlat(e,o,e,t,e,n),yt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}},bh="\\[\\]\\.:\\/",Om=new RegExp("["+bh+"]","g"),Th="[^"+bh+"]",Fm="[^"+bh.replace("\\.","")+"]",zm=/((?:WC+[\/:])*)/.source.replace("WC",Th),Bm=/(WCOD+)?/.source.replace("WCOD",Fm),km=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Th),Hm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Th),Gm=new RegExp("^"+zm+Bm+km+Hm+"$"),Vm=["material","materials","bones","map"],qc=class{constructor(e,t,n){let i=n||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ot=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Om,"")}static parseTrackName(e){let t=Gm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Vm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ae("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Oe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Oe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Oe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Oe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Oe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[i];if(o===void 0){let l=t.nodeName;Oe("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ot.Composite=qc;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Xa=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,o=r.length,a=new Array(o),c={endingStart:as,endingEnd:as};for(let l=0;l!==o;++l){let h=r[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Nl,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case sf:for(let h=0,d=c.length;h!==d;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case Dl:default:for(let h=0,d=c.length;h!==d;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,o=n===nf;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===Io){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=ls,i.endingEnd=ls):(e?i.endingStart=this.zeroSlopeAtStart?ls:as:i.endingStart=Jr,t?i.endingEnd=this.zeroSlopeAtEnd?ls:as:i.endingEnd=Jr)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}},Wm=new Float32Array(1),mr=class extends zn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let d=0;d!==r;++d){let u=i[d],f=u.name,p=h[f];if(p!==void 0)++p.referenceCount,o[d]=p;else{if(p=o[d],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,f));continue}let v=t&&t._propertyBindings[d].binding.parsedPath;p=new Wa(ot.create(n,f,v),u.ValueTypeName,u.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,f),o[d]=p}a[d].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let d=a.actionByRoot,u=(e._localRoot||this._root).uuid;delete d[u],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new xo(new Float32Array(2),new Float32Array(2),1,Wm),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,o=typeof e=="string"?Ri.findByName(i,e):e,a=o!==null?o.uuid:e,c=this._actionsByClip[a],l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Dl),c!==void 0){let d=c.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;let h=new Xa(this,o,t,n);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?Ri.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,o);let a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){let l=o[a];this._deactivateAction(l);let h=l._cacheIndex,d=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Yc=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};function Eh(s,e,t,n){let i=Xm(n);switch(t){case hh:return s*e;case Qa:return s*e/i.components*i.byteLength;case el:return s*e/i.components*i.byteLength;case Ji:return s*e*2/i.components*i.byteLength;case tl:return s*e*2/i.components*i.byteLength;case uh:return s*e*3/i.components*i.byteLength;case Cn:return s*e*4/i.components*i.byteLength;case nl:return s*e*4/i.components*i.byteLength;case To:case Eo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case wo:case Ao:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sl:case ol:return Math.max(s,16)*Math.max(e,8)/4;case il:case rl:return Math.max(s,8)*Math.max(e,8)/2;case al:case ll:case hl:case ul:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case cl:case Ro:case dl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case fl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case pl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ml:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case gl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case xl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case _l:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case yl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case vl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ml:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Sl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case bl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Tl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case El:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case wl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Al:case Rl:case Cl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Il:case Pl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Co:case Ll:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Xm(s){switch(s){case fn:case oh:return{byteLength:1,components:1};case vr:case ah:case Vn:return{byteLength:2,components:1};case $a:case ja:return{byteLength:2,components:4};case Gn:case Ja:case xn:return{byteLength:4,components:1};case lh:case ch:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Vf(){let s=null,e=!1,t=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),t(r,o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Ym(s){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,d=l.byteLength,u=s.createBuffer();s.bindBuffer(c,u),s.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=s.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){let h=c.array,d=c.updateRanges;if(s.bindBuffer(l,a),d.length===0)s.bufferSubData(l,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],v=d[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let v=d[f];s.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var Km=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zm=`#ifdef USE_ALPHAHASH
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
#endif`,Jm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$m=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,e0=`#ifdef USE_AOMAP
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
#endif`,t0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,n0=`#ifdef USE_BATCHING
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
#endif`,i0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,s0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,r0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,o0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,a0=`#ifdef USE_IRIDESCENCE
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
#endif`,l0=`#ifdef USE_BUMPMAP
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
#endif`,c0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,f0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,p0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,m0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,g0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,x0=`#define PI 3.141592653589793
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
} // validated`,_0=`vec3 transformedNormal = objectNormal;
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
#endif`,y0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,v0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,M0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,S0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,b0="gl_FragColor = linearToOutputTexel( gl_FragColor );",T0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,E0=`#ifdef USE_ENVMAP
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
#endif`,w0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,A0=`#ifdef USE_ENVMAP
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
#endif`,R0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,C0=`#ifdef USE_ENVMAP
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
#endif`,I0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,P0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,L0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,N0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,D0=`#ifdef USE_GRADIENTMAP
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
}`,U0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,O0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,F0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,z0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,B0=`#ifdef USE_ENVMAP
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
#endif`,k0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,H0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,G0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,V0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,W0=`PhysicalMaterial material;
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
#endif`,X0=`uniform sampler2D dfgLUT;
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
}`,q0=`
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
#endif`,Y0=`#if defined( RE_IndirectDiffuse )
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
#endif`,K0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Z0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,J0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ng=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ig=`#if defined( USE_POINTS_UV )
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
#endif`,sg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,og=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ag=`#if defined( USE_MORPHCOLORS )
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
#endif`,lg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cg=`#ifdef USE_MORPHTARGETS
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
#endif`,hg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ug=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,gg=`#ifdef USE_NORMALMAP
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
#endif`,xg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_g=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Eg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ag=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ig=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Lg=`float getShadowMask() {
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
}`,Ng=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dg=`#ifdef USE_SKINNING
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
#endif`,Ug=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Og=`#ifdef USE_SKINNING
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
#endif`,Fg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hg=`#ifdef USE_TRANSMISSION
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
#endif`,Gg=`#ifdef USE_TRANSMISSION
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
#endif`,Vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Yg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kg=`uniform sampler2D t2D;
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
}`,Zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jg=`uniform float backgroundBlurriness;
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
}`,$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qg=`#include <common>
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
}`,ex=`#if DEPTH_PACKING == 3200
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
}`,tx=`#define DISTANCE
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
}`,nx=`#define DISTANCE
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
}`,ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rx=`uniform float scale;
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
}`,ox=`uniform vec3 diffuse;
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
}`,ax=`#include <common>
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
}`,lx=`uniform vec3 diffuse;
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
}`,cx=`#define LAMBERT
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
}`,hx=`#define LAMBERT
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
}`,ux=`#define MATCAP
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
}`,dx=`#define MATCAP
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
}`,fx=`#define NORMAL
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
}`,px=`#define NORMAL
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
}`,mx=`#define PHONG
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
}`,gx=`#define PHONG
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
}`,xx=`#define STANDARD
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
}`,_x=`#define STANDARD
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
}`,yx=`#define TOON
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
}`,vx=`#define TOON
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
}`,Mx=`uniform float size;
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
}`,Sx=`uniform vec3 diffuse;
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
}`,bx=`#include <common>
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
}`,Tx=`uniform vec3 color;
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
}`,Ex=`uniform float rotation;
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
}`,wx=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Km,alphahash_pars_fragment:Zm,alphamap_fragment:Jm,alphamap_pars_fragment:$m,alphatest_fragment:jm,alphatest_pars_fragment:Qm,aomap_fragment:e0,aomap_pars_fragment:t0,batching_pars_vertex:n0,batching_vertex:i0,begin_vertex:s0,beginnormal_vertex:r0,bsdfs:o0,iridescence_fragment:a0,bumpmap_pars_fragment:l0,clipping_planes_fragment:c0,clipping_planes_pars_fragment:h0,clipping_planes_pars_vertex:u0,clipping_planes_vertex:d0,color_fragment:f0,color_pars_fragment:p0,color_pars_vertex:m0,color_vertex:g0,common:x0,defaultnormal_vertex:_0,displacementmap_pars_vertex:y0,displacementmap_vertex:v0,emissivemap_fragment:M0,emissivemap_pars_fragment:S0,colorspace_fragment:b0,colorspace_pars_fragment:T0,envmap_fragment:E0,envmap_common_pars_fragment:w0,envmap_pars_fragment:A0,envmap_pars_vertex:R0,envmap_physical_pars_fragment:B0,envmap_vertex:C0,fog_vertex:I0,fog_pars_vertex:P0,fog_fragment:L0,fog_pars_fragment:N0,gradientmap_pars_fragment:D0,lightmap_pars_fragment:U0,lights_lambert_fragment:O0,lights_lambert_pars_fragment:F0,lights_pars_begin:z0,lights_toon_fragment:k0,lights_toon_pars_fragment:H0,lights_phong_fragment:G0,lights_phong_pars_fragment:V0,lights_physical_fragment:W0,lights_physical_pars_fragment:X0,lights_fragment_begin:q0,lights_fragment_maps:Y0,lights_fragment_end:K0,lightprobes_pars_fragment:Z0,logdepthbuf_fragment:J0,logdepthbuf_pars_fragment:$0,logdepthbuf_pars_vertex:j0,logdepthbuf_vertex:Q0,map_fragment:eg,map_pars_fragment:tg,map_particle_fragment:ng,map_particle_pars_fragment:ig,metalnessmap_fragment:sg,metalnessmap_pars_fragment:rg,morphinstance_vertex:og,morphcolor_vertex:ag,morphnormal_vertex:lg,morphtarget_pars_vertex:cg,morphtarget_vertex:hg,normal_fragment_begin:ug,normal_fragment_maps:dg,normal_pars_fragment:fg,normal_pars_vertex:pg,normal_vertex:mg,normalmap_pars_fragment:gg,clearcoat_normal_fragment_begin:xg,clearcoat_normal_fragment_maps:_g,clearcoat_pars_fragment:yg,iridescence_pars_fragment:vg,opaque_fragment:Mg,packing:Sg,premultiplied_alpha_fragment:bg,project_vertex:Tg,dithering_fragment:Eg,dithering_pars_fragment:wg,roughnessmap_fragment:Ag,roughnessmap_pars_fragment:Rg,shadowmap_pars_fragment:Cg,shadowmap_pars_vertex:Ig,shadowmap_vertex:Pg,shadowmask_pars_fragment:Lg,skinbase_vertex:Ng,skinning_pars_vertex:Dg,skinning_vertex:Ug,skinnormal_vertex:Og,specularmap_fragment:Fg,specularmap_pars_fragment:zg,tonemapping_fragment:Bg,tonemapping_pars_fragment:kg,transmission_fragment:Hg,transmission_pars_fragment:Gg,uv_pars_fragment:Vg,uv_pars_vertex:Wg,uv_vertex:Xg,worldpos_vertex:qg,background_vert:Yg,background_frag:Kg,backgroundCube_vert:Zg,backgroundCube_frag:Jg,cube_vert:$g,cube_frag:jg,depth_vert:Qg,depth_frag:ex,distance_vert:tx,distance_frag:nx,equirect_vert:ix,equirect_frag:sx,linedashed_vert:rx,linedashed_frag:ox,meshbasic_vert:ax,meshbasic_frag:lx,meshlambert_vert:cx,meshlambert_frag:hx,meshmatcap_vert:ux,meshmatcap_frag:dx,meshnormal_vert:fx,meshnormal_frag:px,meshphong_vert:mx,meshphong_frag:gx,meshphysical_vert:xx,meshphysical_frag:_x,meshtoon_vert:yx,meshtoon_frag:vx,points_vert:Mx,points_frag:Sx,shadow_vert:bx,shadow_frag:Tx,sprite_vert:Ex,sprite_frag:wx},ge={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},ri={basic:{uniforms:tn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:tn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new we(0)},envMapIntensity:{value:1}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:tn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:tn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:tn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new we(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:tn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:tn([ge.points,ge.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:tn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:tn([ge.common,ge.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:tn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:tn([ge.sprite,ge.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distance:{uniforms:tn([ge.common,ge.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distance_vert,fragmentShader:Xe.distance_frag},shadow:{uniforms:tn([ge.lights,ge.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};ri.physical={uniforms:tn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Be},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};var Ol={r:0,b:0,g:0},Ax=new ze,Wf=new Be;Wf.set(-1,0,0,0,1,0,0,0,1);function Rx(s,e,t,n,i,r){let o=new we(0),a=i===!0?0:1,c,l,h=null,d=0,u=null;function f(x){let S=x.isScene===!0?x.background:null;if(S&&S.isTexture){let y=x.backgroundBlurriness>0;S=e.get(S,y)}return S}function p(x){let S=!1,y=f(x);y===null?m(o,a):y&&y.isColor&&(m(y,1),S=!0);let b=s.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(x,S){let y=f(S);y&&y.isCubeTexture?(l===void 0&&(l=new Ge(new Wt(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:Es(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,E,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ax.makeRotationFromEuler(S.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Wf),l.material.toneMapped=qe.getTransfer(y.colorSpace)!==nt,(h!==y||d!==y.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=s.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Ge(new Bn(2,2),new $n({name:"BackgroundMaterial",uniforms:Es(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=qe.getTransfer(y.colorSpace)!==nt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function m(x,S){x.getRGB(Ol,Sh(s)),t.buffers.color.setClear(Ol.r,Ol.g,Ol.b,S,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,S=1){o.set(x),a=S,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,m(o,a)},render:p,addToRenderList:v,dispose:g}}function Cx(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,o=!1;function a(D,O,W,L,z){let H=!1,B=d(D,L,W,O);r!==B&&(r=B,l(r.object)),H=f(D,L,W,z),H&&p(D,L,W,z),z!==null&&e.update(z,s.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,y(D,O,W,L),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return s.createVertexArray()}function l(D){return s.bindVertexArray(D)}function h(D){return s.deleteVertexArray(D)}function d(D,O,W,L){let z=L.wireframe===!0,H=n[O.id];H===void 0&&(H={},n[O.id]=H);let B=D.isInstancedMesh===!0?D.id:0,ee=H[B];ee===void 0&&(ee={},H[B]=ee);let X=ee[W.id];X===void 0&&(X={},ee[W.id]=X);let Y=X[z];return Y===void 0&&(Y=u(c()),X[z]=Y),Y}function u(D){let O=[],W=[],L=[];for(let z=0;z<t;z++)O[z]=0,W[z]=0,L[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:W,attributeDivisors:L,object:D,attributes:{},index:null}}function f(D,O,W,L){let z=r.attributes,H=O.attributes,B=0,ee=W.getAttributes();for(let X in ee)if(ee[X].location>=0){let te=z[X],_e=H[X];if(_e===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(_e=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(_e=D.instanceColor)),te===void 0||te.attribute!==_e||_e&&te.data!==_e.data)return!0;B++}return r.attributesNum!==B||r.index!==L}function p(D,O,W,L){let z={},H=O.attributes,B=0,ee=W.getAttributes();for(let X in ee)if(ee[X].location>=0){let te=H[X];te===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(te=D.instanceColor));let _e={};_e.attribute=te,te&&te.data&&(_e.data=te.data),z[X]=_e,B++}r.attributes=z,r.attributesNum=B,r.index=L}function v(){let D=r.newAttributes;for(let O=0,W=D.length;O<W;O++)D[O]=0}function m(D){g(D,0)}function g(D,O){let W=r.newAttributes,L=r.enabledAttributes,z=r.attributeDivisors;W[D]=1,L[D]===0&&(s.enableVertexAttribArray(D),L[D]=1),z[D]!==O&&(s.vertexAttribDivisor(D,O),z[D]=O)}function x(){let D=r.newAttributes,O=r.enabledAttributes;for(let W=0,L=O.length;W<L;W++)O[W]!==D[W]&&(s.disableVertexAttribArray(W),O[W]=0)}function S(D,O,W,L,z,H,B){B===!0?s.vertexAttribIPointer(D,O,W,z,H):s.vertexAttribPointer(D,O,W,L,z,H)}function y(D,O,W,L){v();let z=L.attributes,H=W.getAttributes(),B=O.defaultAttributeValues;for(let ee in H){let X=H[ee];if(X.location>=0){let Y=z[ee];if(Y===void 0&&(ee==="instanceMatrix"&&D.instanceMatrix&&(Y=D.instanceMatrix),ee==="instanceColor"&&D.instanceColor&&(Y=D.instanceColor)),Y!==void 0){let te=Y.normalized,_e=Y.itemSize,Me=e.get(Y);if(Me===void 0)continue;let Z=Me.buffer,fe=Me.type,ye=Me.bytesPerElement,Ee=fe===s.INT||fe===s.UNSIGNED_INT||Y.gpuType===Ja;if(Y.isInterleavedBufferAttribute){let pe=Y.data,Fe=pe.isInterleavedBuffer===!0?pe.stride:pe.itemSize,ft=Y.offset;if(pe.isInstancedInterleavedBuffer||pe.isInstancedBufferAttribute){for(let Le=0;Le<X.locationSize;Le++)g(X.location+Le,pe.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Le=0;Le<X.locationSize;Le++)m(X.location+Le);s.bindBuffer(s.ARRAY_BUFFER,Z);for(let Le=0;Le<X.locationSize;Le++)S(X.location+Le,_e/X.locationSize,fe,te,Fe*ye,(ft+_e/X.locationSize*Le)*ye,Ee)}else{if(Y.isInstancedBufferAttribute){for(let pe=0;pe<X.locationSize;pe++)g(X.location+pe,Y.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let pe=0;pe<X.locationSize;pe++)m(X.location+pe);s.bindBuffer(s.ARRAY_BUFFER,Z);for(let pe=0;pe<X.locationSize;pe++)S(X.location+pe,_e/X.locationSize,fe,te,_e*ye,_e/X.locationSize*pe*ye,Ee)}}else if(B!==void 0){let te=B[ee];if(te!==void 0)switch(te.length){case 2:s.vertexAttrib2fv(X.location,te);break;case 3:s.vertexAttrib3fv(X.location,te);break;case 4:s.vertexAttrib4fv(X.location,te);break;default:s.vertexAttrib1fv(X.location,te)}}}}x()}function b(){I();for(let D in n){let O=n[D];for(let W in O){let L=O[W];for(let z in L){let H=L[z];for(let B in H)h(H[B].object),delete H[B];delete L[z]}}delete n[D]}}function E(D){if(n[D.id]===void 0)return;let O=n[D.id];for(let W in O){let L=O[W];for(let z in L){let H=L[z];for(let B in H)h(H[B].object),delete H[B];delete L[z]}}delete n[D.id]}function _(D){for(let O in n){let W=n[O];for(let L in W){let z=W[L];if(z[D.id]===void 0)continue;let H=z[D.id];for(let B in H)h(H[B].object),delete H[B];delete z[D.id]}}}function M(D){for(let O in n){let W=n[O],L=D.isInstancedMesh===!0?D.id:0,z=W[L];if(z!==void 0){for(let H in z){let B=z[H];for(let ee in B)h(B[ee].object),delete B[ee];delete z[H]}delete W[L],Object.keys(W).length===0&&delete n[O]}}}function I(){R(),o=!0,r!==i&&(r=i,l(r.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:M,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function Ix(s,e,t){let n;function i(c){n=c}function r(c,l){s.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,h){h!==0&&(s.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];t.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Px(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(_){return!(_!==Cn&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let M=_===Vn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==fn&&_!==xn&&!M&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(_){if(_==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Ae("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Ae("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Ae("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:x,maxVaryings:S,maxFragmentUniforms:y,maxSamples:b,samples:E}}function Lx(s){let e=this,t=null,n=0,i=!1,r=!1,o=new Fn,a=new Be,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,g=s.get(d);if(!i||p===null||p.length===0||r&&!m)r?h(null):l();else{let x=r?0:n,S=x*4,y=g.clippingState||null;c.value=y,y=h(p,u,S,f);for(let b=0;b!==S;++b)y[b]=t[b];g.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,p){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=c.value,p!==!0||m===null){let g=f+v*4,x=u.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<g)&&(m=new Float32Array(g));for(let S=0,y=f;S!==v;++S,y+=4)o.copy(d[S]).applyMatrix4(x,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var Uo=class extends gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new co(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Wt(5,5,5),r=new $n({name:"CubemapFromEquirect",uniforms:Es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:vs});r.uniforms.tEquirect.value=t;let o=new Ge(i,r),a=t.minFilter;return t.minFilter===Rn&&(t.minFilter=Nt),new pr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},Sf=256,Nx=3,Dx=20,Xf=256,qf=16,Ux=3,Ox=new P,Fx=new we,br=class s{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new pr(1,10,null),this._boxMesh=new Ge(new Wt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:o=256,position:a=Ox}=r,c=this._renderer;this._setSize(o);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=c.autoClear,u=c.autoClearColor,f=c.autoClearDepth,p=c.autoClearStencil,v=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,v===null&&(e.background=c.getClearColor(Fx));let m=new pr(n,i,h);return m.position.copy(a),m.update(c,e),c.autoClear=d,c.autoClearColor=u,c.autoClearDepth=f,c.autoClearStencil=p,e.background=v,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ef(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Sf,yh(e))}_fromTexture(e,t){e.mapping===Ss||e.mapping===_r?this._setSize(e.image.length===0?Sf:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=bf(e,!1,!1),n=Math.log2(e)-Nx;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=bf(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ss||e.mapping===_r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ef()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Tf()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=zx(),this._integrationMaterial=Bx());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/qf);for(let o=0;o<=n;o++){let a=s.lodToRoughness(o,n);if(o>n-Ux)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let c=a>0?Math.log2(t)+.5*Math.log2(6/(Xf*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=c,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=kx());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(r,0,n)}};function bf(s,e,t){return new Uo(s,{minFilter:Rn,generateMipmaps:e,type:Vn,colorSpace:rn,depthBuffer:t})}function Oo(s,e,t){return new $n({name:s,uniforms:e,vertexShader:Xe.cube_vert,fragmentShader:t,side:Xt,blending:vs,depthTest:!1,depthWrite:!1})}function zx(){return Oo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Xf}u

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
	`)}function Bx(){return Oo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:qf}},`

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
	`)}function kx(){return Oo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Dx}
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
	`)}function Tf(){return Oo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Ef(){return Oo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Hx(s){let e=new WeakMap,t=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Ya||f===Ka)if(e.has(u)){let p=e.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let v=new Uo(p.height);return v.fromEquirectangularTexture(s,u),e.set(u,v),u.addEventListener("dispose",l),a(v.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,p=f===Ya||f===Ka,v=f===Ss||f===_r;if(p||v){let m=t.get(u),g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new br(s)),m=p?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let x=u.image;return p&&x&&x.height>0||v&&x&&c(x)?(n===null&&(n=new br(s)),m=p?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===Ya?u.mapping=Ss:f===Ka&&(u.mapping=_r),u}function c(u){let f=0,p=6;for(let v=0;v<p;v++)u[v]!==void 0&&f++;return f===p}function l(u){let f=u.target;f.removeEventListener("dispose",l);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function Gx(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&cs("WebGLRenderer: "+n+" extension not supported."),i}}}function Vx(s,e,t,n){let i={},r=new WeakMap,o=new FinalizationRegistry(p=>delete i[p]);function a(p){c(p.target)}function c(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete i[p.id],o.unregister(p);let v=r.get(p);v&&(e.remove(v),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function l(p,v){return i[v.id]!==void 0||(v.addEventListener("dispose",a),i[v.id]=new WeakRef(v),o.register(v,v.id,v),t.memory.geometries++),v}function h(p){let v=p.attributes;for(let m in v)e.update(v[m],s.ARRAY_BUFFER)}function d(p){let v=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let x=v!==null?v.array.length:m.array.length/3-1,S=m.count>=65535?io:no,y=new S(Math.ceil(x/3)*6,1),b=y.array;if(v!==null){let _=v.array;g=v.version;for(let M=0,I=0;M<x;M+=3){let R=_[M+0],D=_[M+1],O=_[M+2];b[I++]=R,b[I++]=D,b[I++]=D,b[I++]=O,b[I++]=O,b[I++]=R}}else{g=m.version;for(let _=0,M=0;_<x;_+=3){let I=_+0,R=_+1,D=_+2;b[M++]=I,b[M++]=R,b[M++]=R,b[M++]=D,b[M++]=D,b[M++]=I}}y.version=g;let E=r.get(p);E&&e.remove(E),r.set(p,y)}function u(p){let v=r.get(p);if(v){let m=p.index;m!==null&&v.version<m.version&&d(p)}else d(p);return r.get(p)}function f(){for(let p in i){let v=i[p].deref();v!==void 0&&c(v)}}return{get:l,update:h,getWireframeAttribute:u,dispose:f}}function Wx(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,u){s.drawElements(n,u,r,d*o),t.update(u,n,1)}function l(d,u,f){f!==0&&(s.drawElementsInstanced(n,u,r,d*o,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let v=0;for(let m=0;m<f;m++)v+=u[m];t.update(v,n,1)}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Xx(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:Oe("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function qx(s,e,t){let n=new WeakMap,i=new rt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let I=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",I)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],S=0;f===!0&&(S=1),p===!0&&(S=2),v===!0&&(S=3);let y=a.attributes.position.count*S,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*b*4*d),_=new Qr(E,y,b,d);_.type=xn,_.needsUpdate=!0;let M=S*4;for(let R=0;R<d;R++){let D=m[R],O=g[R],W=x[R],L=y*b*4*R;for(let z=0;z<D.count;z++){let H=z*M;f===!0&&(i.fromBufferAttribute(D,z),E[L+H+0]=i.x,E[L+H+1]=i.y,E[L+H+2]=i.z,E[L+H+3]=0),p===!0&&(i.fromBufferAttribute(O,z),E[L+H+4]=i.x,E[L+H+5]=i.y,E[L+H+6]=i.z,E[L+H+7]=0),v===!0&&(i.fromBufferAttribute(W,z),E[L+H+8]=i.x,E[L+H+9]=i.y,E[L+H+10]=i.z,E[L+H+11]=W.itemSize===4?i.w:1)}}u={count:d,texture:_,size:new Ne(y,b)},n.set(a,u),a.addEventListener("dispose",I)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];let p=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",p),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Yx(s,e,t,n,i){let r=new WeakMap;function o(l){let h=i.render.frame,d=l.geometry,u=e.get(l,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var Kx={[Qc]:"LINEAR_TONE_MAPPING",[eh]:"REINHARD_TONE_MAPPING",[th]:"CINEON_TONE_MAPPING",[bo]:"ACES_FILMIC_TONE_MAPPING",[ih]:"AGX_TONE_MAPPING",[sh]:"NEUTRAL_TONE_MAPPING",[nh]:"CUSTOM_TONE_MAPPING"};function Zx(s,e,t,n,i,r){let o=new gn(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=null,h=new at;h.setAttribute("position",new Ye([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ye([0,2,0,0,2,0],2));let d=new Da({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Ge(h,d),f=new _s(-1,1,1,-1,0,1),p=null,v=null,m=!1,g,x=null,S=[],y=!1;this.setSize=function(b,E){o.setSize(b,E),a!==null&&a.setSize(b,E),c!==null&&c.setSize(b,E);for(let _=0;_<S.length;_++){let M=S[_];M.setSize&&M.setSize(b,E)}},this.setEffects=function(b){S=b,y=S.length>0&&S[0].isRenderPass===!0;let E=o.width,_=o.height;S.length>0&&a===null&&(a=new gn(E,_,{type:Vn,depthBuffer:!1,stencilBuffer:!1}),c=new gn(E,_,{type:Vn,depthBuffer:!1,stencilBuffer:!1}));let M=i===!0&&S.some(I=>I.needsDepthTexture===!0);M!==(o.depthTexture!==null)&&(M===!0&&l===null&&(l=new Si(E,_),r===!0&&(l.format=Ii,l.type=Ts)),o.dispose(),o.depthTexture=M?l:null,o.resolveDepthBuffer=M,o.storeMultisampledDepthBuffer=M);for(let I=0;I<S.length;I++){let R=S[I];R.setSize&&R.setSize(E,_),M&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(l)}},this.begin=function(b,E){if(m||b.toneMapping===ni&&S.length===0)return!1;if(x=E,E!==null){let _=E.width,M=E.height;(o.width!==_||o.height!==M)&&this.setSize(_,M)}return y===!1&&b.setRenderTarget(o),g=b.toneMapping,b.toneMapping=ni,!0},this.hasRenderPass=function(){return y},this.end=function(b,E){b.toneMapping=g,m=!0;let _=o,M=a;for(let I=0;I<S.length;I++){let R=S[I];R.enabled!==!1&&(R.render(b,M,_,E),R.needsSwap!==!1&&(_=M,M=M===a?c:a))}if(p!==b.outputColorSpace||v!==b.toneMapping){p=b.outputColorSpace,v=b.toneMapping,d.defines={},qe.getTransfer(p)===nt&&(d.defines.SRGB_TRANSFER="");let I=Kx[v];I&&(d.defines[I]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,b.setRenderTarget(x),b.render(u,f),x=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),h.dispose(),d.dispose()}}var Yf=new Dt,Kf=new Si(1,1),Zf=new ho(1),Jf=new Qr,$f=new Ia,jf=new co,wf=[],Af=[],Rf=new Float32Array(16),Cf=new Float32Array(9),If=new Float32Array(4);function Tr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=wf[i];if(r===void 0&&(r=new Float32Array(i),wf[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Ut(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ot(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Bl(s,e){let t=Af[e];t===void 0&&(t=new Int32Array(e),Af[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Jx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function $x(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;s.uniform2fv(this.addr,e),Ot(t,e)}}function jx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;s.uniform3fv(this.addr,e),Ot(t,e)}}function Qx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;s.uniform4fv(this.addr,e),Ot(t,e)}}function e_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ut(t,n))return;If.set(n),s.uniformMatrix2fv(this.addr,!1,If),Ot(t,n)}}function t_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ut(t,n))return;Cf.set(n),s.uniformMatrix3fv(this.addr,!1,Cf),Ot(t,n)}}function n_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ut(t,n))return;Rf.set(n),s.uniformMatrix4fv(this.addr,!1,Rf),Ot(t,n)}}function i_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function s_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;s.uniform2iv(this.addr,e),Ot(t,e)}}function r_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;s.uniform3iv(this.addr,e),Ot(t,e)}}function o_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;s.uniform4iv(this.addr,e),Ot(t,e)}}function a_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function l_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;s.uniform2uiv(this.addr,e),Ot(t,e)}}function c_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;s.uniform3uiv(this.addr,e),Ot(t,e)}}function h_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;s.uniform4uiv(this.addr,e),Ot(t,e)}}function kl(s){return s.version===0&&(s.compareFunction=mh,s.needsUpdate=!0),s}function u_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=kl(Kf):r=Yf,t.setTexture2D(e||r,i)}function d_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||$f,i)}function f_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=kl(Zf):r=jf,t.setTextureCube(e||r,i)}function p_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Jf,i)}function m_(s){switch(s){case 5126:return Jx;case 35664:return $x;case 35665:return jx;case 35666:return Qx;case 35674:return e_;case 35675:return t_;case 35676:return n_;case 5124:case 35670:return i_;case 35667:case 35671:return s_;case 35668:case 35672:return r_;case 35669:case 35673:return o_;case 5125:return a_;case 36294:return l_;case 36295:return c_;case 36296:return h_;case 35678:case 36198:case 36298:case 36306:case 35682:return u_;case 35679:case 36299:case 36307:return d_;case 35680:case 36300:case 36308:case 36293:return f_;case 36289:case 36303:case 36311:case 36292:return p_}}function g_(s,e){s.uniform1fv(this.addr,e)}function x_(s,e){let t=Tr(e,this.size,2);s.uniform2fv(this.addr,t)}function __(s,e){let t=Tr(e,this.size,3);s.uniform3fv(this.addr,t)}function y_(s,e){let t=Tr(e,this.size,4);s.uniform4fv(this.addr,t)}function v_(s,e){let t=Tr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function M_(s,e){let t=Tr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function S_(s,e){let t=Tr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function b_(s,e){s.uniform1iv(this.addr,e)}function T_(s,e){s.uniform2iv(this.addr,e)}function E_(s,e){s.uniform3iv(this.addr,e)}function w_(s,e){s.uniform4iv(this.addr,e)}function A_(s,e){s.uniform1uiv(this.addr,e)}function R_(s,e){s.uniform2uiv(this.addr,e)}function C_(s,e){s.uniform3uiv(this.addr,e)}function I_(s,e){s.uniform4uiv(this.addr,e)}function P_(s,e,t){let n=this.cache,i=e.length,r=Bl(t,i);Ut(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=kl(Kf):o=Yf;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,r[a])}function L_(s,e,t){let n=this.cache,i=e.length,r=Bl(t,i);Ut(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||$f,r[o])}function N_(s,e,t){let n=this.cache,i=e.length,r=Bl(t,i);Ut(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=kl(Zf):o=jf;for(let a=0;a!==i;++a)t.setTextureCube(e[a]||o,r[a])}function D_(s,e,t){let n=this.cache,i=e.length,r=Bl(t,i);Ut(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Jf,r[o])}function U_(s){switch(s){case 5126:return g_;case 35664:return x_;case 35665:return __;case 35666:return y_;case 35674:return v_;case 35675:return M_;case 35676:return S_;case 5124:case 35670:return b_;case 35667:case 35671:return T_;case 35668:case 35672:return E_;case 35669:case 35673:return w_;case 5125:return A_;case 36294:return R_;case 36295:return C_;case 36296:return I_;case 35678:case 36198:case 36298:case 36306:case 35682:return P_;case 35679:case 36299:case 36307:return L_;case 35680:case 36300:case 36308:case 36293:return N_;case 36289:case 36303:case 36311:case 36292:return D_}}var Rh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=m_(t.type)}},Ch=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=U_(t.type)}},Ih=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},wh=/(\w+)(\])?(\[|\.)?/g;function Pf(s,e){s.seq.push(e),s.map[e.id]=e}function O_(s,e,t){let n=s.name,i=n.length;for(wh.lastIndex=0;;){let r=wh.exec(n),o=wh.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Pf(t,l===void 0?new Rh(a,s,e):new Ch(a,s,e));break}else{let d=t.map[a];d===void 0&&(d=new Ih(a),Pf(t,d)),t=d}}}var Sr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);O_(a,c,this)}let i=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Lf(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var F_=37297,z_=0;function B_(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Nf=new Be;function k_(s){qe._getMatrix(Nf,qe.workingColorSpace,s);let e=`mat3( ${Nf.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(s)){case $r:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return Ae("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Df(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+B_(s.getShaderSource(e),a)}else return r}function H_(s,e){let t=k_(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var G_={[Qc]:"Linear",[eh]:"Reinhard",[th]:"Cineon",[bo]:"ACESFilmic",[ih]:"AgX",[sh]:"Neutral",[nh]:"Custom"};function V_(s,e){let t=G_[e];return t===void 0?(Ae("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Fl=new P;function W_(){qe.getLuminanceCoefficients(Fl);let s=Fl.x.toFixed(4),e=Fl.y.toFixed(4),t=Fl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Do).join(`
`)}function q_(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Y_(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Do(s){return s!==""}function Uf(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Of(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var K_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ph(s){return s.replace(K_,Z_)}function Z_(s,e){let t=Xe[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Ph(t)}var J_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ff(s){return s.replace(J_,$_)}function $_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function zf(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}var j_={[ys]:"SHADOWMAP_TYPE_PCF",[gr]:"SHADOWMAP_TYPE_VSM"};function Q_(s){return j_[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ey={[_r]:"ENVMAP_MODE_REFRACTION"};function ty(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":ey[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ny={[qa]:"ENVMAP_BLENDING_MULTIPLY",[Qd]:"ENVMAP_BLENDING_MIX",[ef]:"ENVMAP_BLENDING_ADD"};function iy(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":ny[s.combine]||"ENVMAP_BLENDING_NONE"}function sy(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Q_(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=ty(t),d=iy(t),u=X_(t),f=q_(r),p=i.createProgram(),v,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Do).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Do).join(`
`),m.length>0&&(m+=`
`)):(v=[zf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Do).join(`
`),m=[zf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?Xe.tonemapping_pars_fragment:"",t.toneMapping!==ni?V_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,H_("linearToOutputTexel",t.outputColorSpace),W_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Do).join(`
`)),o=Ph(o),o=Uf(o,t),o=Of(o,t),a=Ph(a),a=Uf(a,t),a=Of(a,t),o=Ff(o),a=Ff(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,v=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",t.glslVersion===xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let x=g+v+o,S=g+m+a,y=Lf(i,i.VERTEX_SHADER,x),b=Lf(i,i.FRAGMENT_SHADER,S);i.attachShader(p,y),i.attachShader(p,b),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function E(R){if(s.debug.checkShaderErrors){let D=i.getProgramInfoLog(p)||"",O=i.getShaderInfoLog(y)||"",W=i.getShaderInfoLog(b)||"",L=D.trim(),z=O.trim(),H=W.trim(),B=!0,ee=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(B=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,y,b);else{let X=Df(i,y,"vertex"),Y=Df(i,b,"fragment");Oe("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+X+`
`+Y)}else L!==""?Ae("WebGLProgram: Program Info Log:",L):(z===""||H==="")&&(ee=!1);ee&&(R.diagnostics={runnable:B,programLog:L,vertexShader:{log:z,prefix:v},fragmentShader:{log:H,prefix:m}})}i.deleteShader(y),i.deleteShader(b),_=new Sr(i,p),M=Y_(i,p)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=i.getProgramParameter(p,F_)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=z_++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=b,this}var ry=0,Lh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Nh(e),t.set(e,n)),n}},Nh=class{constructor(e){this.id=ry++,this.code=e,this.usedTimes=0}};function oy(s){return s===Ji||s===Ro||s===Co}function ay(s,e,t,n,i,r){let o=new eo,a=new Lh,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return c.add(_),_===0?"uv":`uv${_}`}function p(_,M,I,R,D,O){let W=R.fog,L=D.geometry,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,B=e.get(_.envMap||z,H),ee=u[_.type],X=n.precision;_.precision!==null&&(X=n.getMaxPrecision(_.precision),X!==_.precision&&Ae("WebGLProgram.getParameters:",_.precision,"not supported, using",X,"instead."));let Y=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,te=Y!==void 0?Y.length:0,_e=0;L.morphAttributes.position!==void 0&&(_e=1),L.morphAttributes.normal!==void 0&&(_e=2),L.morphAttributes.color!==void 0&&(_e=3);let Me,Z,fe,ye;if(ee){let me=ri[ee];Me=me.vertexShader,Z=me.fragmentShader}else{Me=_.vertexShader,Z=_.fragmentShader;let me=a.getVertexShaderStage(_),st=a.getFragmentShaderStage(_);a.update(_,me,st),fe=me.id,ye=st.id}let Ee=s.getRenderTarget(),pe=s.state.buffers.depth.getReversed(),Fe=D.isInstancedMesh===!0,ft=D.isBatchedMesh===!0,Le=!!_.map,it=!!_.matcap,ct=!!B,Je=ct&&B.isPMREMTexture===!0,Gt=!!_.aoMap,Pt=!!_.lightMap,hn=!!_.bumpMap&&_.wireframe===!1,xt=!!_.normalMap,qn=!!_.displacementMap,Ft=!!_.emissiveMap,vn=!!_.metalnessMap,Mn=!!_.roughnessMap,Sn=_.anisotropy>0,F=_.clearcoat>0,bn=_.diffuseRoughness>0,pt=_.dispersion>0,mt=_.retroreflectivity>0,de=_.iridescence>0,Lt=_.sheen>0,De=_.transmission>0,ke=Sn&&!!_.anisotropyMap,C=F&&!!_.clearcoatMap,T=F&&!!_.clearcoatNormalMap,G=F&&!!_.clearcoatRoughnessMap,ne=bn&&!!_.diffuseRoughnessMap,Q=de&&!!_.iridescenceMap,re=de&&!!_.iridescenceThicknessMap,he=Lt&&!!_.sheenColorMap,J=Lt&&!!_.sheenRoughnessMap,$=!!_.specularMap,ae=!!_.specularColorMap,N=!!_.specularIntensityMap,j=De&&!!_.transmissionMap,K=De&&!!_.thicknessMap,le=!!_.gradientMap,se=!!_.alphaMap,oe=_.alphaTest>0,Ce=!!_.alphaHash,We=!!_.extensions,ie=ni;_.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(ie=s.toneMapping);let Pe=Je?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,Ve={shaderID:ee,shaderType:_.type,shaderName:_.name,vertexShader:Me,fragmentShader:Z,defines:_.defines,customVertexShaderID:fe,customFragmentShaderID:ye,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:X,batching:ft,batchingColor:ft&&D._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&D.instanceColor!==null,instancingMorph:Fe&&D.morphTexture!==null,outputColorSpace:Ee===null?s.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:qe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Le,matcap:it,envMap:ct,envMapMode:ct&&B.mapping,envMapPMREM:Je,envMapMaxLod:Je?Pe.length-1:null,envMapSize:Je?Pe[0].width:null,aoMap:Gt,lightMap:Pt,bumpMap:hn,normalMap:xt,displacementMap:qn,emissiveMap:Ft,normalMapObjectSpace:xt&&_.normalMapType===of,normalMapTangentSpace:xt&&_.normalMapType===Lo,packedNormalMap:xt&&_.normalMapType===Lo&&oy(_.normalMap.format),metalnessMap:vn,roughnessMap:Mn,anisotropy:Sn,anisotropyMap:ke,clearcoat:F,clearcoatMap:C,clearcoatNormalMap:T,clearcoatRoughnessMap:G,diffuseRoughness:bn,diffuseRoughnessMap:ne,dispersion:pt,retroreflection:mt,iridescence:de,iridescenceMap:Q,iridescenceThicknessMap:re,sheen:Lt,sheenColorMap:he,sheenRoughnessMap:J,specularMap:$,specularColorMap:ae,specularIntensityMap:N,transmission:De,transmissionMap:j,thicknessMap:K,gradientMap:le,opaque:_.transparent===!1&&_.blending===xr&&_.alphaToCoverage===!1,alphaMap:se,alphaTest:oe,alphaHash:Ce,combine:_.combine,mapUv:Le&&f(_.map.channel),aoMapUv:Gt&&f(_.aoMap.channel),lightMapUv:Pt&&f(_.lightMap.channel),bumpMapUv:hn&&f(_.bumpMap.channel),normalMapUv:xt&&f(_.normalMap.channel),displacementMapUv:qn&&f(_.displacementMap.channel),emissiveMapUv:Ft&&f(_.emissiveMap.channel),metalnessMapUv:vn&&f(_.metalnessMap.channel),roughnessMapUv:Mn&&f(_.roughnessMap.channel),anisotropyMapUv:ke&&f(_.anisotropyMap.channel),clearcoatMapUv:C&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:T&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ne&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:re&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:he&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:J&&f(_.sheenRoughnessMap.channel),specularMapUv:$&&f(_.specularMap.channel),specularColorMapUv:ae&&f(_.specularColorMap.channel),specularIntensityMapUv:N&&f(_.specularIntensityMap.channel),transmissionMapUv:j&&f(_.transmissionMap.channel),thicknessMapUv:K&&f(_.thicknessMap.channel),alphaMapUv:se&&f(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(xt||Sn),vertexNormals:!!L.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!L.attributes.uv&&(Le||se),fog:!!W,useFog:_.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||L.attributes.normal===void 0&&xt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pe,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:_e,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:O.filter(me=>me.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:ie,decodeVideoTexture:Le&&_.map.isVideoTexture===!0&&qe.getTransfer(_.map.colorSpace)===nt,decodeVideoTextureEmissive:Ft&&_.emissiveMap.isVideoTexture===!0&&qe.getTransfer(_.emissiveMap.colorSpace)===nt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===en,flipSided:_.side===Xt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:We&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&_.extensions.multiDraw===!0||ft)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ve.vertexUv1s=c.has(1),Ve.vertexUv2s=c.has(2),Ve.vertexUv3s=c.has(3),c.clear(),Ve}function v(_){let M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(let I in _.defines)M.push(I),M.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(m(M,_),g(M,_),M.push(s.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function m(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapPMREM),_.push(M.envMapMaxLod),_.push(M.envMapSize),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.diffuseRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.numSunLights),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numSunLightShadows),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.numLightProbeGrids),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function g(_,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.diffuseRoughness&&o.enable(25),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function x(_){let M=u[_.type],I;if(M){let R=ri[M];I=yf.clone(R.uniforms)}else I=_.uniforms;return I}function S(_,M){let I=h.get(M);return I!==void 0?++I.usedTimes:(I=new sy(s,M,_,i),l.push(I),h.set(M,I)),I}function y(_){if(--_.usedTimes===0){let M=l.indexOf(_);l[M]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function b(_){a.remove(_)}function E(){a.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:x,acquireProgram:S,releaseProgram:y,releaseShaderCache:b,programs:l,dispose:E}}function ly(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function cy(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Bf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function kf(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,v,m,g){let x=s[e];return x===void 0?(x={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:g},s[e]=x):(x.id=u.id,x.object=u,x.geometry=f,x.material=p,x.materialVariant=o(u),x.groupOrder=v,x.renderOrder=u.renderOrder,x.z=m,x.group=g),e++,x}function c(u,f,p,v,m,g,x){x.reversedDepth===!0&&(m=-m);let S=a(u,f,p,v,m,g);p.transmission>0?n.push(S):p.transparent===!0?i.push(S):t.push(S)}function l(u,f,p,v,m,g){let x=a(u,f,p,v,m,g);p.transmission>0?n.unshift(x):p.transparent===!0?i.unshift(x):t.unshift(x)}function h(u,f){t.length>1&&t.sort(u||cy),n.length>1&&n.sort(f||Bf),i.length>1&&i.sort(f||Bf)}function d(){for(let u=e,f=s.length;u<f;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:c,unshift:l,finish:d,sort:h}}function hy(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new kf,s.set(n,[o])):i>=r.length?(o=new kf,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function uy(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new we};break;case"SpotLight":t={position:new P,direction:new P,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new P,halfWidth:new P,halfHeight:new P};break}return s[e.id]=t,t}}}function dy(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var fy=0;function py(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function my(s){let e=new uy,t=dy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);let i=new P,r=new ze,o=new ze;function a(l){let h=0,d=0,u=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let f=0,p=0,v=0,m=0,g=0,x=0,S=0,y=0,b=0,E=0,_=0,M=0,I=0,R=0;l.sort(py);for(let O=0,W=l.length;O<W;O++){let L=l[O],z=L.color,H=L.intensity,B=L.distance,ee=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Ji?ee=L.shadow.map.texture:ee=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=z.r*H,d+=z.g*H,u+=z.b*H;else if(L.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(L.sh.coefficients[X],H);R++}else if(L.isSunLight){let X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Y=L.shadow,te=t.get(L);te.shadowIntensity=Y.intensity,te.shadowBias=Y.bias,te.shadowNormalBias=Y.normalBias,te.shadowRadius=Y.radius,te.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),n.sunShadow[p]=te,n.sunShadowMap[p]=ee;let _e=Y.getViewportCount();for(let Me=0;Me<_e;Me++)n.sunShadowMatrix[v+Me]=Y.getMatrix(Me),n.sunShadowCascade[v+Me]=Y._cascadeData[Me];v+=_e,p++}n.sun[f]=X,f++}else if(L.isDirectionalLight){let X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Y=L.shadow,te=t.get(L);te.shadowIntensity=Y.intensity,te.shadowBias=Y.bias,te.shadowNormalBias=Y.normalBias,te.shadowRadius=Y.radius,te.shadowMapSize=Y.mapSize,n.directionalShadow[m]=te,n.directionalShadowMap[m]=ee,n.directionalShadowMatrix[m]=L.shadow.matrix,b++}n.directional[m]=X,m++}else if(L.isSpotLight){let X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(z).multiplyScalar(H),X.distance=B,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,n.spot[x]=X;let Y=L.shadow;if(L.map&&(n.spotLightMap[M]=L.map,M++,Y.updateMatrices(L),L.castShadow&&I++),n.spotLightMatrix[x]=Y.matrix,L.castShadow){let te=t.get(L);te.shadowIntensity=Y.intensity,te.shadowBias=Y.bias,te.shadowNormalBias=Y.normalBias,te.shadowRadius=Y.radius,te.shadowMapSize=Y.mapSize,n.spotShadow[x]=te,n.spotShadowMap[x]=ee,_++}x++}else if(L.isRectAreaLight){let X=e.get(L);X.color.copy(z).multiplyScalar(H),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),n.rectArea[S]=X,S++}else if(L.isPointLight){let X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){let Y=L.shadow,te=t.get(L);te.shadowIntensity=Y.intensity,te.shadowBias=Y.bias,te.shadowNormalBias=Y.normalBias,te.shadowRadius=Y.radius,te.shadowMapSize=Y.mapSize,te.shadowCameraNear=Y.camera.near,te.shadowCameraFar=Y.camera.far,n.pointShadow[g]=te,n.pointShadowMap[g]=ee,n.pointShadowMatrix[g]=L.shadow.matrix,E++}n.point[g]=X,g++}else if(L.isHemisphereLight){let X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(H),X.groundColor.copy(L.groundColor).multiplyScalar(H),n.hemi[y]=X,y++}}S>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let D=n.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==g||D.spotLength!==x||D.rectAreaLength!==S||D.hemiLength!==y||D.numSunShadows!==p||D.numDirectionalShadows!==b||D.numPointShadows!==E||D.numSpotShadows!==_||D.numSpotMaps!==M||D.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=m,n.spot.length=x,n.rectArea.length=S,n.point.length=g,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+M-I,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=R,D.sunLength=f,D.directionalLength=m,D.pointLength=g,D.spotLength=x,D.rectAreaLength=S,D.hemiLength=y,D.numSunShadows=p,D.numDirectionalShadows=b,D.numPointShadows=E,D.numSpotShadows=_,D.numSpotMaps=M,D.numLightProbes=R,n.version=fy++)}function c(l,h){let d=0,u=0,f=0,p=0,v=0,m=0,g=h.matrixWorldInverse;for(let x=0,S=l.length;x<S;x++){let y=l[x];if(y.isSunLight){let b=n.sun[d];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(g),d++}else if(y.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),u++}else if(y.isSpotLight){let b=n.spot[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),p++}else if(y.isRectAreaLight){let b=n.rectArea[v];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(g),m++}}}return{setup:a,setupView:c,state:n}}function Hf(s){let e=new my(s),t=[],n=[],i=[];function r(d){h.camera=d,t.length=0,n.length=0,i.length=0}function o(d){d.isLightProbeGrid?i.push(d):t.push(d)}function a(d){n.push(d)}function c(){e.setup(t),i.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function l(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function gy(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new Hf(s),e.set(i,[a])):r>=o.length?(a=new Hf(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var xy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_y=`uniform sampler2D shadow_pass;
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
}`,yy=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],vy=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Gf=new ze,No=new P,Ah=new P;function My(s,e,t){let n=new qi,i=new Ne,r=new Ne,o=new rt,a=new Ua,c=new Oa,l={},h=t.maxTextureSize,d={[ti]:Xt,[Xt]:ti,[en]:en},u=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:xy,fragmentShader:_y}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new at;p.setAttribute("position",new bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ge(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ys;let g=this.type;this.render=function(E,_,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Dd&&(Ae("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ys);let I=s.getRenderTarget(),R=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),O=s.state;O.setBlending(vs),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let W=g!==this.type;W&&_.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(z=>z.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,z=E.length;L<z;L++){let H=E[L],B=H.shadow;if(B===void 0){Ae("WebGLShadowMap:",H,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);let ee=B.getFrameExtents();i.multiply(ee),r.copy(B.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ee.x),i.x=r.x*ee.x,B.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ee.y),i.y=r.y*ee.y,B.mapSize.y=r.y));let X=s.state.buffers.depth.getReversed();if(B.camera._reversedDepth=X,B.map===null||W===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===gr){if(H.isPointLight){Ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new gn(i.x,i.y,{format:Ji,type:Vn,minFilter:Nt,magFilter:Nt,generateMipmaps:!1}),B.map.texture.name=H.name+".shadowMap",B.map.depthTexture=new Si(i.x,i.y,xn),B.map.depthTexture.name=H.name+".shadowMapDepth",B.map.depthTexture.format=xi,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=wt,B.map.depthTexture.magFilter=wt}else H.isPointLight?(B.map=new Uo(i.x),B.map.depthTexture=new ho(i.x,Gn)):(B.map=new gn(i.x,i.y),B.map.depthTexture=new Si(i.x,i.y,Gn)),B.map.depthTexture.name=H.name+".shadowMap",B.map.depthTexture.format=xi,this.type===ys?(B.map.depthTexture.compareFunction=X?ph:fh,B.map.depthTexture.minFilter=Nt,B.map.depthTexture.magFilter=Nt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=wt,B.map.depthTexture.magFilter=wt);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==i.x||B.map.height!==i.y)&&B.map.setSize(i.x,i.y);let Y=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();H.isPointLight!==!0&&B.updateMatrices(H,M);let te=(B.camera.layers.mask&4294967294)!==0?B.camera.layers:M.layers;for(let _e=0;_e<Y;_e++){let Me=B.getCamera(_e);if(H.isPointLight){let Z=B.camera,fe=B.matrix,ye=H.distance||Z.far;ye!==Z.far&&(Z.far=ye,Z.updateProjectionMatrix()),No.setFromMatrixPosition(H.matrixWorld),Z.position.copy(No),Ah.copy(Z.position),Ah.add(yy[_e]),Z.up.copy(vy[_e]),Z.lookAt(Ah),Z.updateMatrixWorld(),fe.makeTranslation(-No.x,-No.y,-No.z),Gf.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Gf,Z.coordinateSystem,Z.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)s.setRenderTarget(B.map,_e),s.clear();else{_e===0&&(s.setRenderTarget(B.map),s.clear());let Z=B.getViewport(_e);o.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),O.viewport(o)}n=B.getFrustum(_e),y(_,M,Me,H,te,this.type)}B.isPointLightShadow!==!0&&this.type===gr&&x(B,M),B.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(I,R,D)};function x(E,_){let M=e.update(v);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new gn(i.x,i.y,{format:Ji,type:Vn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(_,null,M,u,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(_,null,M,f,v,null)}function S(E,_,M,I){let R=null,D=M.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)R=D;else if(R=M.isPointLight===!0?c:a,s.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let O=R.uuid,W=_.uuid,L=l[O];L===void 0&&(L={},l[O]=L);let z=L[W];z===void 0&&(z=R.clone(),L[W]=z,_.addEventListener("dispose",b)),R=z}if(R.visible=_.visible,R.wireframe=_.wireframe,I===gr?R.side=_.shadowSide!==null?_.shadowSide:_.side:R.side=_.shadowSide!==null?_.shadowSide:d[_.side],R.alphaMap=_.alphaMap,R.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,R.map=_.map,R.clipShadows=_.clipShadows,R.clippingPlanes=_.clippingPlanes,R.clipIntersection=_.clipIntersection,R.displacementMap=_.displacementMap,R.displacementScale=_.displacementScale,R.displacementBias=_.displacementBias,R.wireframeLinewidth=_.wireframeLinewidth,R.linewidth=_.linewidth,M.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let O=s.properties.get(R);O.light=M}return R}function y(E,_,M,I,R,D){if(E.visible===!1)return;if(E.layers.test(R)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&D===gr)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,E.matrixWorld);let L=e.update(E),z=E.material;if(Array.isArray(z)){let H=L.groups;for(let B=0,ee=H.length;B<ee;B++){let X=H[B],Y=z[X.materialIndex];if(Y&&Y.visible){let te=S(E,Y,I,D);E.onBeforeShadow(s,E,_,M,L,te,X),s.renderBufferDirect(M,null,L,te,E,X),E.onAfterShadow(s,E,_,M,L,te,X)}}}else if(z.visible){let H=S(E,z,I,D);E.onBeforeShadow(s,E,_,M,L,H,null),s.renderBufferDirect(M,null,L,H,E,null),E.onAfterShadow(s,E,_,M,L,H,null)}}let W=E.children;for(let L=0,z=W.length;L<z;L++)y(W[L],_,M,I,R,D)}function b(E){E.target.removeEventListener("dispose",b);for(let M in l){let I=l[M],R=E.target.uuid;R in I&&(I[R].dispose(),delete I[R])}}}function Sy(s,e){function t(){let N=!1,j=new rt,K=null,le=new rt(0,0,0,0);return{setMask:function(se){K!==se&&!N&&(s.colorMask(se,se,se,se),K=se)},setLocked:function(se){N=se},setClear:function(se,oe,Ce,We,ie){ie===!0&&(se*=We,oe*=We,Ce*=We),j.set(se,oe,Ce,We),le.equals(j)===!1&&(s.clearColor(se,oe,Ce,We),le.copy(j))},reset:function(){N=!1,K=null,le.set(-1,0,0,0)}}}function n(){let N=!1,j=!1,K=null,le=null,se=null;return{setReversed:function(oe){if(j!==oe){let Ce=e.get("EXT_clip_control");oe?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),j=oe;let We=se;se=null,this.setClear(We)}},getReversed:function(){return j},setTest:function(oe){oe?pe(s.DEPTH_TEST):Fe(s.DEPTH_TEST)},setMask:function(oe){K!==oe&&!N&&(s.depthMask(oe),K=oe)},setFunc:function(oe){if(j&&(oe=gf[oe]),le!==oe){switch(oe){case Ma:s.depthFunc(s.NEVER);break;case Sa:s.depthFunc(s.ALWAYS);break;case ba:s.depthFunc(s.LESS);break;case $s:s.depthFunc(s.LEQUAL);break;case Ta:s.depthFunc(s.EQUAL);break;case Ea:s.depthFunc(s.GEQUAL);break;case wa:s.depthFunc(s.GREATER);break;case Aa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}le=oe}},setLocked:function(oe){N=oe},setClear:function(oe){se!==oe&&(se=oe,j&&(oe=1-oe),s.clearDepth(oe))},reset:function(){N=!1,K=null,le=null,se=null,j=!1}}}function i(){let N=!1,j=null,K=null,le=null,se=null,oe=null,Ce=null,We=null,ie=null;return{setTest:function(Pe){N||(Pe?pe(s.STENCIL_TEST):Fe(s.STENCIL_TEST))},setMask:function(Pe){j!==Pe&&!N&&(s.stencilMask(Pe),j=Pe)},setFunc:function(Pe,Ve,me){(K!==Pe||le!==Ve||se!==me)&&(s.stencilFunc(Pe,Ve,me),K=Pe,le=Ve,se=me)},setOp:function(Pe,Ve,me){(oe!==Pe||Ce!==Ve||We!==me)&&(s.stencilOp(Pe,Ve,me),oe=Pe,Ce=Ve,We=me)},setLocked:function(Pe){N=Pe},setClear:function(Pe){ie!==Pe&&(s.clearStencil(Pe),ie=Pe)},reset:function(){N=!1,j=null,K=null,le=null,se=null,oe=null,Ce=null,We=null,ie=null}}}let r=new t,o=new n,a=new i,c={},l=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],v=null,m=!1,g=null,x=null,S=null,y=null,b=null,E=null,_=null,M=new we(0,0,0),I=0,R=!1,D=null,O=null,W=null,L=null,z=null,H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,ee=0,X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(X)[1]),B=ee>=1):X.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),B=ee>=2);let Y=null,te={},_e=s.getParameter(s.SCISSOR_BOX),Me=s.getParameter(s.VIEWPORT),Z=new rt().fromArray(_e),fe=new rt().fromArray(Me);function ye(N,j,K,le){let se=new Uint8Array(4),oe=s.createTexture();s.bindTexture(N,oe),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ce=0;Ce<K;Ce++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(j,0,s.RGBA,1,1,le,0,s.RGBA,s.UNSIGNED_BYTE,se):s.texImage2D(j+Ce,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,se);return oe}let Ee={};Ee[s.TEXTURE_2D]=ye(s.TEXTURE_2D,s.TEXTURE_2D,1),Ee[s.TEXTURE_CUBE_MAP]=ye(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[s.TEXTURE_2D_ARRAY]=ye(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ee[s.TEXTURE_3D]=ye(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pe(s.DEPTH_TEST),o.setFunc($s),hn(!1),xt(Kc),pe(s.CULL_FACE),Gt(vs);function pe(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function Fe(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function ft(N,j){return u[N]!==j?(s.bindFramebuffer(N,j),u[N]=j,N===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=j),N===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=j),!0):!1}function Le(N,j){let K=p,le=!1;if(N){K=f.get(j),K===void 0&&(K=[],f.set(j,K));let se=N.textures;if(K.length!==se.length||K[0]!==s.COLOR_ATTACHMENT0){for(let oe=0,Ce=se.length;oe<Ce;oe++)K[oe]=s.COLOR_ATTACHMENT0+oe;K.length=se.length,le=!0}}else K[0]!==s.BACK&&(K[0]=s.BACK,le=!0);le&&s.drawBuffers(K)}function it(N){return v!==N?(s.useProgram(N),v=N,!0):!1}let ct={[Ms]:s.FUNC_ADD,[Od]:s.FUNC_SUBTRACT,[Fd]:s.FUNC_REVERSE_SUBTRACT};ct[zd]=s.MIN,ct[Bd]=s.MAX;let Je={[kd]:s.ZERO,[Hd]:s.ONE,[Gd]:s.SRC_COLOR,[$c]:s.SRC_ALPHA,[Kd]:s.SRC_ALPHA_SATURATE,[qd]:s.DST_COLOR,[Wd]:s.DST_ALPHA,[Vd]:s.ONE_MINUS_SRC_COLOR,[jc]:s.ONE_MINUS_SRC_ALPHA,[Yd]:s.ONE_MINUS_DST_COLOR,[Xd]:s.ONE_MINUS_DST_ALPHA,[Zd]:s.CONSTANT_COLOR,[Jd]:s.ONE_MINUS_CONSTANT_COLOR,[$d]:s.CONSTANT_ALPHA,[jd]:s.ONE_MINUS_CONSTANT_ALPHA};function Gt(N,j,K,le,se,oe,Ce,We,ie,Pe){if(N===vs){m===!0&&(Fe(s.BLEND),m=!1);return}if(m===!1&&(pe(s.BLEND),m=!0),N!==Ud){if(N!==g||Pe!==R){if((x!==Ms||b!==Ms)&&(s.blendEquation(s.FUNC_ADD),x=Ms,b=Ms),Pe)switch(N){case xr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Hn:s.blendFunc(s.ONE,s.ONE);break;case Zc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Jc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Oe("WebGLState: Invalid blending: ",N);break}else switch(N){case xr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Hn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Zc:Oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jc:Oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Oe("WebGLState: Invalid blending: ",N);break}S=null,y=null,E=null,_=null,M.set(0,0,0),I=0,g=N,R=Pe}return}se=se||j,oe=oe||K,Ce=Ce||le,(j!==x||se!==b)&&(s.blendEquationSeparate(ct[j],ct[se]),x=j,b=se),(K!==S||le!==y||oe!==E||Ce!==_)&&(s.blendFuncSeparate(Je[K],Je[le],Je[oe],Je[Ce]),S=K,y=le,E=oe,_=Ce),(We.equals(M)===!1||ie!==I)&&(s.blendColor(We.r,We.g,We.b,ie),M.copy(We),I=ie),g=N,R=!1}function Pt(N,j){N.side===en?Fe(s.CULL_FACE):pe(s.CULL_FACE);let K=N.side===Xt;j&&(K=!K),hn(K),N.blending===xr&&N.transparent===!1?Gt(vs):Gt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let le=N.stencilWrite;a.setTest(le),le&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ft(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?pe(s.SAMPLE_ALPHA_TO_COVERAGE):Fe(s.SAMPLE_ALPHA_TO_COVERAGE)}function hn(N){D!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),D=N)}function xt(N){N!==Ld?(pe(s.CULL_FACE),N!==O&&(N===Kc?s.cullFace(s.BACK):N===Nd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Fe(s.CULL_FACE),O=N}function qn(N){N!==W&&(B&&s.lineWidth(N),W=N)}function Ft(N,j,K){N?(pe(s.POLYGON_OFFSET_FILL),(L!==j||z!==K)&&(L=j,z=K,o.getReversed()&&(j=-j,K=-K),s.polygonOffset(j,K))):Fe(s.POLYGON_OFFSET_FILL)}function vn(N){N?pe(s.SCISSOR_TEST):Fe(s.SCISSOR_TEST)}function Mn(N){N===void 0&&(N=s.TEXTURE0+H-1),Y!==N&&(s.activeTexture(N),Y=N)}function Sn(N,j,K){K===void 0&&(Y===null?K=s.TEXTURE0+H-1:K=Y);let le=te[K];le===void 0&&(le={type:void 0,texture:void 0},te[K]=le),(le.type!==N||le.texture!==j)&&(Y!==K&&(s.activeTexture(K),Y=K),s.bindTexture(N,j||Ee[N]),le.type=N,le.texture=j)}function F(){let N=te[Y];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function bn(){try{s.compressedTexImage2D(...arguments)}catch(N){Oe("WebGLState:",N)}}function pt(){try{s.compressedTexImage3D(...arguments)}catch(N){Oe("WebGLState:",N)}}function mt(){try{s.texSubImage2D(...arguments)}catch(N){Oe("WebGLState:",N)}}function de(){try{s.texSubImage3D(...arguments)}catch(N){Oe("WebGLState:",N)}}function Lt(){try{s.compressedTexSubImage2D(...arguments)}catch(N){Oe("WebGLState:",N)}}function De(){try{s.compressedTexSubImage3D(...arguments)}catch(N){Oe("WebGLState:",N)}}function ke(){try{s.texStorage2D(...arguments)}catch(N){Oe("WebGLState:",N)}}function C(){try{s.texStorage3D(...arguments)}catch(N){Oe("WebGLState:",N)}}function T(){try{s.texImage2D(...arguments)}catch(N){Oe("WebGLState:",N)}}function G(){try{s.texImage3D(...arguments)}catch(N){Oe("WebGLState:",N)}}function ne(N){return d[N]!==void 0?d[N]:s.getParameter(N)}function Q(N,j){d[N]!==j&&(s.pixelStorei(N,j),d[N]=j)}function re(N){Z.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),Z.copy(N))}function he(N){fe.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),fe.copy(N))}function J(N,j){let K=l.get(j);K===void 0&&(K=new WeakMap,l.set(j,K));let le=K.get(N);le===void 0&&(le=s.getUniformBlockIndex(j,N.name),s.uniformBlockBinding(j,le,le),K.set(N,le))}function $(N,j,K){let se=l.get(j).get(N);c[se]!==K&&(s.bindBufferBase(s.UNIFORM_BUFFER,se,K),c[se]=K)}function ae(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},Y=null,te={},u={},c={},f=new WeakMap,p=[],v=null,m=!1,g=null,x=null,S=null,y=null,b=null,E=null,_=null,M=new we(0,0,0),I=0,R=!1,D=null,O=null,W=null,L=null,z=null,Z.set(0,0,s.canvas.width,s.canvas.height),fe.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:pe,disable:Fe,bindFramebuffer:ft,drawBuffers:Le,useProgram:it,setBlending:Gt,setMaterial:Pt,setFlipSided:hn,setCullFace:xt,setLineWidth:qn,setPolygonOffset:Ft,setScissorTest:vn,activeTexture:Mn,bindTexture:Sn,unbindTexture:F,compressedTexImage2D:bn,compressedTexImage3D:pt,texImage2D:T,texImage3D:G,pixelStorei:Q,getParameter:ne,updateUBOMapping:J,uniformBlockBinding:$,texStorage2D:ke,texStorage3D:C,texSubImage2D:mt,texSubImage3D:de,compressedTexSubImage2D:Lt,compressedTexSubImage3D:De,scissor:re,viewport:he,reset:ae}}function by(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ne,h=new WeakMap,d=new Set,u,f=new WeakMap,p=new Set,v=new FinalizationRegistry(C=>p.delete(C)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,T){return m?new OffscreenCanvas(C,T):er("canvas")}function x(C,T,G){let ne=1,Q=ke(C);if((Q.width>G||Q.height>G)&&(ne=G/Math.max(Q.width,Q.height)),ne<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let re=Math.floor(ne*Q.width),he=Math.floor(ne*Q.height);u===void 0&&(u=g(re,he));let J=T?g(re,he):u;return J.width=re,J.height=he,J.getContext("2d").drawImage(C,0,0,re,he),Ae("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+re+"x"+he+")."),J}else return"data"in C&&Ae("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function S(C){return C.generateMipmaps}function y(C){s.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(C,T,G,ne,Q,re=!1){if(C!==null){if(s[C]!==void 0)return s[C];Ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let he;ne&&(he=e.get("EXT_texture_norm16"),he||Ae("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=T;if(T===s.RED&&(G===s.FLOAT&&(J=s.R32F),G===s.HALF_FLOAT&&(J=s.R16F),G===s.UNSIGNED_BYTE&&(J=s.R8),G===s.UNSIGNED_SHORT&&he&&(J=he.R16_EXT),G===s.SHORT&&he&&(J=he.R16_SNORM_EXT)),T===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(J=s.R8UI),G===s.UNSIGNED_SHORT&&(J=s.R16UI),G===s.UNSIGNED_INT&&(J=s.R32UI),G===s.BYTE&&(J=s.R8I),G===s.SHORT&&(J=s.R16I),G===s.INT&&(J=s.R32I)),T===s.RG&&(G===s.FLOAT&&(J=s.RG32F),G===s.HALF_FLOAT&&(J=s.RG16F),G===s.UNSIGNED_BYTE&&(J=s.RG8),G===s.UNSIGNED_SHORT&&he&&(J=he.RG16_EXT),G===s.SHORT&&he&&(J=he.RG16_SNORM_EXT)),T===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(J=s.RG8UI),G===s.UNSIGNED_SHORT&&(J=s.RG16UI),G===s.UNSIGNED_INT&&(J=s.RG32UI),G===s.BYTE&&(J=s.RG8I),G===s.SHORT&&(J=s.RG16I),G===s.INT&&(J=s.RG32I)),T===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(J=s.RGB8UI),G===s.UNSIGNED_SHORT&&(J=s.RGB16UI),G===s.UNSIGNED_INT&&(J=s.RGB32UI),G===s.BYTE&&(J=s.RGB8I),G===s.SHORT&&(J=s.RGB16I),G===s.INT&&(J=s.RGB32I)),T===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),G===s.UNSIGNED_INT&&(J=s.RGBA32UI),G===s.BYTE&&(J=s.RGBA8I),G===s.SHORT&&(J=s.RGBA16I),G===s.INT&&(J=s.RGBA32I)),T===s.RGB&&(G===s.UNSIGNED_SHORT&&he&&(J=he.RGB16_EXT),G===s.SHORT&&he&&(J=he.RGB16_SNORM_EXT),G===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),G===s.UNSIGNED_INT_10F_11F_11F_REV&&(J=s.R11F_G11F_B10F)),T===s.RGBA){let $=re?$r:qe.getTransfer(Q);G===s.FLOAT&&(J=s.RGBA32F),G===s.HALF_FLOAT&&(J=s.RGBA16F),G===s.UNSIGNED_BYTE&&(J=$===nt?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT&&he&&(J=he.RGBA16_EXT),G===s.SHORT&&he&&(J=he.RGBA16_SNORM_EXT),G===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function _(C,T){let G;return C?T===null||T===Gn||T===Ts?G=s.DEPTH24_STENCIL8:T===xn?G=s.DEPTH32F_STENCIL8:T===vr&&(G=s.DEPTH24_STENCIL8,Ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Gn||T===Ts?G=s.DEPTH_COMPONENT24:T===xn?G=s.DEPTH_COMPONENT32F:T===vr&&(G=s.DEPTH_COMPONENT16),G}function M(C,T){return S(C)===!0||C.isFramebufferTexture&&C.minFilter!==wt&&C.minFilter!==Nt?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function I(C){let T=new WeakRef(C);n.get(C).__ref=T,p.add(T),v.register(C,T,T)}function R(C){let T=n.get(C).__ref;T!==void 0&&(p.delete(T),v.unregister(T))}function D(C){W(C.target)}function O(C){L(C.target)}function W(C){C.removeEventListener("dispose",D),R(C),H(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&d.delete(C)}function L(C){C.removeEventListener("dispose",O),R(C),ee(C)}function z(){for(let C of p){let T=C.deref();T!==void 0&&(T.isRenderTarget===!0?L(T):W(T))}p.clear(),d.clear()}function H(C){let T=n.get(C);if(T.__webglInit===void 0)return;let G=C.source,ne=f.get(G);if(ne){let Q=ne[T.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&B(C),Object.keys(ne).length===0&&f.delete(G)}n.remove(C)}function B(C){let T=n.get(C);s.deleteTexture(T.__webglTexture);let G=C.source,ne=f.get(G);delete ne[T.__cacheKey],o.memory.textures--}function ee(C){let T=n.get(C);T.__depthDisposeCallback&&T.__depthDisposeCallback();let G=C.depthTexture;if(G&&G.renderTarget===C&&W(G),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(T.__webglFramebuffer[Q]))for(let re=0;re<T.__webglFramebuffer[Q].length;re++)s.deleteFramebuffer(T.__webglFramebuffer[Q][re]);else s.deleteFramebuffer(T.__webglFramebuffer[Q]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[Q])}else{if(Array.isArray(T.__webglFramebuffer))for(let Q=0;Q<T.__webglFramebuffer.length;Q++)s.deleteFramebuffer(T.__webglFramebuffer[Q]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Q=0;Q<T.__webglColorRenderbuffer.length;Q++)T.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[Q]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let ne=C.textures;for(let Q=0,re=ne.length;Q<re;Q++){let he=n.get(ne[Q]);he.__webglTexture&&(s.deleteTexture(he.__webglTexture),o.memory.textures--),n.remove(ne[Q])}n.remove(C)}let X=0;function Y(){X=0}function te(){return X}function _e(C){X=C}function Me(){let C=X;return C>=i.maxTextures&&Ae("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+i.maxTextures),X+=1,C}function Z(C){let T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.mipmapsAutoUpdate),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function fe(C,T){let G=n.get(C);if(C.isVideoTexture&&Lt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&G.__version!==C.version){let ne=C.image;if(ne===null)Ae("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)Ae("WebGLRenderer: Texture marked for update but image is incomplete");else{Pt(G,C,T);return}}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+T)}function ye(C,T){let G=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){Pt(G,C,T);return}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+T)}function Ee(C,T){let G=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){Pt(G,C,T);return}t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+T)}function pe(C,T){let G=n.get(C);if(C.version>0&&G.__version!==C.version){hn(G,C,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+T)}let Fe={[Zn]:s.REPEAT,[En]:s.CLAMP_TO_EDGE,[js]:s.MIRRORED_REPEAT},ft={[wt]:s.NEAREST,[Za]:s.NEAREST_MIPMAP_NEAREST,[bs]:s.NEAREST_MIPMAP_LINEAR,[Nt]:s.LINEAR,[yr]:s.LINEAR_MIPMAP_NEAREST,[Rn]:s.LINEAR_MIPMAP_LINEAR},Le={[lf]:s.NEVER,[mh]:s.ALWAYS,[cf]:s.LESS,[fh]:s.LEQUAL,[hf]:s.EQUAL,[ph]:s.GEQUAL,[uf]:s.GREATER,[df]:s.NOTEQUAL};function it(C,T){if(T.type===xn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Nt||T.magFilter===yr||T.magFilter===bs||T.magFilter===Rn||T.minFilter===Nt||T.minFilter===yr||T.minFilter===bs||T.minFilter===Rn)&&Ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,Fe[T.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,Fe[T.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,Fe[T.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,ft[T.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,ft[T.minFilter]),T.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,Le[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===wt||T.minFilter!==bs&&T.minFilter!==Rn||T.type===xn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function ct(C,T){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",D),I(T));let ne=T.source,Q=f.get(ne);Q===void 0&&(Q={},f.set(ne,Q));let re=Z(T);if(re!==C.__cacheKey){Q[re]===void 0&&(Q[re]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,G=!0),Q[re].usedTimes++;let he=Q[C.__cacheKey];he!==void 0&&(Q[C.__cacheKey].usedTimes--,he.usedTimes===0&&B(T)),C.__cacheKey=re,C.__webglTexture=Q[re].texture}return G}function Je(C,T,G){return Math.floor(Math.floor(C/G)/T)}function Gt(C,T,G,ne){let re=C.updateRanges;if(re.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,G,ne,T.data);else{re.sort((N,j)=>N.start-j.start);let he=0;for(let N=1;N<re.length;N++){let j=re[he],K=re[N],le=j.start+j.count,se=Je(K.start,T.width,4),oe=Je(j.start,T.width,4);K.start<=le+1&&se===oe&&Je(K.start+K.count-1,T.width,4)===se?j.count=Math.max(j.count,K.start+K.count-j.start):(++he,re[he]=K)}re.length=he+1;let J=t.getParameter(s.UNPACK_ROW_LENGTH),$=t.getParameter(s.UNPACK_SKIP_PIXELS),ae=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let N=0,j=re.length;N<j;N++){let K=re[N],le=Math.floor(K.start/4),se=Math.ceil(K.count/4),oe=le%T.width,Ce=Math.floor(le/T.width),We=se,ie=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ce),t.texSubImage2D(s.TEXTURE_2D,0,oe,Ce,We,ie,G,ne,T.data)}C.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,J),t.pixelStorei(s.UNPACK_SKIP_PIXELS,$),t.pixelStorei(s.UNPACK_SKIP_ROWS,ae)}}function Pt(C,T,G){let ne=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ne=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ne=s.TEXTURE_3D);let Q=ct(C,T),re=T.source;t.bindTexture(ne,C.__webglTexture,s.TEXTURE0+G);let he=n.get(re);if(re.version!==he.__version||Q===!0){if(t.activeTexture(s.TEXTURE0+G),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let ie=qe.getPrimaries(qe.workingColorSpace),Pe=T.colorSpace===Pi?null:qe.getPrimaries(T.colorSpace),Ve=T.colorSpace===Pi||ie===Pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve)}t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment);let $=x(T.image,!1,i.maxTextureSize);$=De(T,$);let ae=r.convert(T.format,T.colorSpace),N=r.convert(T.type),j=E(T.internalFormat,ae,N,T.normalized,T.colorSpace,T.isVideoTexture);it(ne,T);let K,le=T.mipmaps,se=T.isVideoTexture!==!0,oe=he.__version===void 0||Q===!0,Ce=re.dataReady,We=M(T,$);if(T.isDepthTexture)j=_(T.format===Ii,T.type),oe&&(se?t.texStorage2D(s.TEXTURE_2D,1,j,$.width,$.height):t.texImage2D(s.TEXTURE_2D,0,j,$.width,$.height,0,ae,N,null));else if(T.isDataTexture)if(le.length>0){se&&oe&&t.texStorage2D(s.TEXTURE_2D,We,j,le[0].width,le[0].height);for(let ie=0,Pe=le.length;ie<Pe;ie++)K=le[ie],se?Ce&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,K.width,K.height,ae,N,K.data):t.texImage2D(s.TEXTURE_2D,ie,j,K.width,K.height,0,ae,N,K.data);T.generateMipmaps=!1}else se?(oe&&t.texStorage2D(s.TEXTURE_2D,We,j,$.width,$.height),Ce&&Gt(T,$,ae,N)):t.texImage2D(s.TEXTURE_2D,0,j,$.width,$.height,0,ae,N,$.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){se&&oe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,We,j,le[0].width,le[0].height,$.depth);for(let ie=0,Pe=le.length;ie<Pe;ie++)if(K=le[ie],T.format!==Cn)if(ae!==null)if(se){if(Ce)if(T.layerUpdates.size>0){let Ve=Eh(K.width,K.height,T.format,T.type);for(let me of T.layerUpdates){let st=K.data.subarray(me*Ve/K.data.BYTES_PER_ELEMENT,(me+1)*Ve/K.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,me,K.width,K.height,1,ae,st)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,K.width,K.height,$.depth,ae,K.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ie,j,K.width,K.height,$.depth,0,K.data,0,0);else Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?Ce&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,K.width,K.height,$.depth,ae,N,K.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ie,j,K.width,K.height,$.depth,0,ae,N,K.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{se&&oe&&t.texStorage2D(s.TEXTURE_2D,We,j,le[0].width,le[0].height);for(let ie=0,Pe=le.length;ie<Pe;ie++)K=le[ie],T.format!==Cn?ae!==null?se?Ce&&t.compressedTexSubImage2D(s.TEXTURE_2D,ie,0,0,K.width,K.height,ae,K.data):t.compressedTexImage2D(s.TEXTURE_2D,ie,j,K.width,K.height,0,K.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?Ce&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,K.width,K.height,ae,N,K.data):t.texImage2D(s.TEXTURE_2D,ie,j,K.width,K.height,0,ae,N,K.data)}else if(T.isDataArrayTexture)if(se){if(oe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,We,j,$.width,$.height,$.depth),Ce)if(T.layerUpdates.size>0){let ie=Eh($.width,$.height,T.format,T.type);for(let Pe of T.layerUpdates){let Ve=$.data.subarray(Pe*ie/$.data.BYTES_PER_ELEMENT,(Pe+1)*ie/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Pe,$.width,$.height,1,ae,N,Ve)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ae,N,$.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,j,$.width,$.height,$.depth,0,ae,N,$.data);else if(T.isData3DTexture)se?(oe&&t.texStorage3D(s.TEXTURE_3D,We,j,$.width,$.height,$.depth),Ce&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ae,N,$.data)):t.texImage3D(s.TEXTURE_3D,0,j,$.width,$.height,$.depth,0,ae,N,$.data);else if(T.isFramebufferTexture){if(oe)if(se)t.texStorage2D(s.TEXTURE_2D,We,j,$.width,$.height);else{let ie=$.width,Pe=$.height;for(let Ve=0;Ve<We;Ve++)t.texImage2D(s.TEXTURE_2D,Ve,j,ie,Pe,0,ae,N,null),ie>>=1,Pe>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in s){let ie=s.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),$.parentNode!==ie){ie.appendChild($),d.add(T),ie.onpaint=Pe=>{let Ve=Pe.changedElements;for(let me of d)Ve.includes(me.image)&&(me.needsUpdate=!0)},ie.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,$);else{let Ve=s.RGBA,me=s.RGBA,st=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ve,me,st,$)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(le.length>0){if(se&&oe){let ie=ke(le[0]);t.texStorage2D(s.TEXTURE_2D,We,j,ie.width,ie.height)}for(let ie=0,Pe=le.length;ie<Pe;ie++)K=le[ie],se?Ce&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,ae,N,K):t.texImage2D(s.TEXTURE_2D,ie,j,ae,N,K);T.generateMipmaps=!1}else if(se){if(oe){let ie=ke($);t.texStorage2D(s.TEXTURE_2D,We,j,ie.width,ie.height)}Ce&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ae,N,$)}else t.texImage2D(s.TEXTURE_2D,0,j,ae,N,$);S(T)&&T.mipmapsAutoUpdate===!0&&y(ne),he.__version=re.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function hn(C,T,G){if(T.image.length!==6)return;let ne=ct(C,T),Q=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+G);let re=n.get(Q);if(Q.version!==re.__version||ne===!0){t.activeTexture(s.TEXTURE0+G);let he=qe.getPrimaries(qe.workingColorSpace),J=T.colorSpace===Pi?null:qe.getPrimaries(T.colorSpace),$=T.colorSpace===Pi||he===J?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let ae=T.isCompressedTexture||T.image[0].isCompressedTexture,N=T.image[0]&&T.image[0].isDataTexture,j=[];for(let me=0;me<6;me++)!ae&&!N?j[me]=x(T.image[me],!0,i.maxCubemapSize):j[me]=N?T.image[me].image:T.image[me],j[me]=De(T,j[me]);let K=j[0],le=r.convert(T.format,T.colorSpace),se=r.convert(T.type),oe=E(T.internalFormat,le,se,T.normalized,T.colorSpace),Ce=T.isVideoTexture!==!0,We=re.__version===void 0||ne===!0,ie=Q.dataReady,Pe=M(T,K);it(s.TEXTURE_CUBE_MAP,T);let Ve;if(T.isDepthTexture){if(oe=_(T.format===Ii,T.type),We)if(Ce)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,oe,K.width,K.height);else for(let me=0;me<6;me++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,oe,K.width,K.height,0,le,se,null)}else if(ae){Ce&&We&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,oe,K.width,K.height);for(let me=0;me<6;me++){Ve=j[me].mipmaps;for(let st=0;st<Ve.length;st++){let zt=Ve[st];T.format!==Cn?le!==null?Ce?ie&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,st,0,0,zt.width,zt.height,le,zt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,st,oe,zt.width,zt.height,0,zt.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,st,0,0,zt.width,zt.height,le,se,zt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,st,oe,zt.width,zt.height,0,le,se,zt.data)}}}else{if(Ve=T.mipmaps,Ce&&We){Ve.length>0&&Pe++;let me=ke(j[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,oe,me.width,me.height)}for(let me=0;me<6;me++)if(N){Ce?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,j[me].width,j[me].height,le,se,j[me].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,oe,j[me].width,j[me].height,0,le,se,j[me].data);for(let st=0;st<Ve.length;st++){let Fi=Ve[st].image[me].image;Ce?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,st+1,0,0,Fi.width,Fi.height,le,se,Fi.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,st+1,oe,Fi.width,Fi.height,0,le,se,Fi.data)}}else{Ce?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,le,se,j[me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,oe,le,se,j[me]);for(let st=0;st<Ve.length;st++){let zt=Ve[st];Ce?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,st+1,0,0,le,se,zt.image[me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,st+1,oe,le,se,zt.image[me])}}}S(T)&&T.mipmapsAutoUpdate===!0&&y(s.TEXTURE_CUBE_MAP),re.__version=Q.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function xt(C,T,G,ne,Q,re){let he=r.convert(G.format,G.colorSpace),J=r.convert(G.type),$=E(G.internalFormat,he,J,G.normalized,G.colorSpace),ae=n.get(T),N=n.get(G);if(N.__renderTarget=T,!ae.__hasExternalTextures){let j=Math.max(1,T.width>>re),K=Math.max(1,T.height>>re);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,re,$,j,K,T.depth,0,he,J,null):t.texImage2D(Q,re,$,j,K,0,he,J,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),de(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ne,Q,N.__webglTexture,0,mt(T)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ne,Q,N.__webglTexture,re),t.bindFramebuffer(s.FRAMEBUFFER,null)}function qn(C,T,G){if(s.bindRenderbuffer(s.RENDERBUFFER,C),T.depthBuffer){let ne=T.depthTexture,Q=ne&&ne.isDepthTexture?ne.type:null,re=_(T.stencilBuffer,Q),he=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;de(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,mt(T),re,T.width,T.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,mt(T),re,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,re,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,C)}else{let ne=T.textures;for(let Q=0;Q<ne.length;Q++){let re=ne[Q],he=r.convert(re.format,re.colorSpace),J=r.convert(re.type),$=E(re.internalFormat,he,J,re.normalized,re.colorSpace);de(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,mt(T),$,T.width,T.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,mt(T),$,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,$,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ft(C,T,G){let ne=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(T.depthTexture);Q.__renderTarget=T;let re=ne?T.depthTexture.image[0]:T.depthTexture.image;(!Q.__webglTexture||re.width!==T.width||re.height!==T.height)&&(re.width=T.width,re.height=T.height,T.depthTexture.needsUpdate=!0),ne?pe(T.depthTexture,0):fe(T.depthTexture,0);let he=Q.__webglTexture,J=mt(T),$=ne?s.TEXTURE_CUBE_MAP_POSITIVE_X+G:s.TEXTURE_2D,ae=T.depthTexture.format===Ii?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===xi)de(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ae,$,he,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,ae,$,he,0);else if(T.depthTexture.format===Ii)de(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ae,$,he,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,ae,$,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function vn(C){let T=n.get(C),G=C.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==C.depthTexture){let ne=C.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ne){let Q=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ne.removeEventListener("dispose",Q)};ne.addEventListener("dispose",Q),T.__depthDisposeCallback=Q}T.__boundDepthTexture=ne}if(C.depthTexture&&!T.__autoAllocateDepthBuffer)if(G)for(let ne=0;ne<6;ne++)Ft(T.__webglFramebuffer[ne],C,ne);else C.texture.mipmaps.length>0?Ft(T.__webglFramebuffer[0],C,0):Ft(T.__webglFramebuffer,C,0);else if(G){T.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[ne]),T.__webglDepthbuffer[ne]===void 0)T.__webglDepthbuffer[ne]=s.createRenderbuffer(),qn(T.__webglDepthbuffer[ne],C,!1);else{let Q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=T.__webglDepthbuffer[ne];s.bindRenderbuffer(s.RENDERBUFFER,re),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,re)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),qn(T.__webglDepthbuffer,C,!1);else{let Q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,re),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,re)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Mn(C,T,G){let ne=n.get(C);T!==void 0&&xt(ne.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&vn(C)}function Sn(C){let T=C.texture,G=n.get(C),ne=n.get(T);C.addEventListener("dispose",O),I(C);let Q=C.textures,re=C.isWebGLCubeRenderTarget===!0,he=Q.length>1;if(he||(ne.__webglTexture===void 0&&(ne.__webglTexture=s.createTexture()),ne.__version=T.version,o.memory.textures++),re){G.__webglFramebuffer=[];for(let J=0;J<6;J++)if(T.mipmaps.length>0){G.__webglFramebuffer[J]=[];for(let $=0;$<T.mipmaps.length;$++)G.__webglFramebuffer[J][$]=s.createFramebuffer()}else G.__webglFramebuffer[J]=s.createFramebuffer()}else{if(T.mipmaps.length>0){G.__webglFramebuffer=[];for(let J=0;J<T.mipmaps.length;J++)G.__webglFramebuffer[J]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(he)for(let J=0,$=Q.length;J<$;J++){let ae=n.get(Q[J]);ae.__webglTexture===void 0&&(ae.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&de(C)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let J=0;J<Q.length;J++){let $=Q[J];G.__webglColorRenderbuffer[J]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[J]);let ae=r.convert($.format,$.colorSpace),N=r.convert($.type),j=E($.internalFormat,ae,N,$.normalized,$.colorSpace,C.isXRRenderTarget===!0),K=mt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,K,j,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+J,s.RENDERBUFFER,G.__webglColorRenderbuffer[J])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),qn(G.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(re){t.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture),it(s.TEXTURE_CUBE_MAP,T);for(let J=0;J<6;J++)if(T.mipmaps.length>0)for(let $=0;$<T.mipmaps.length;$++)xt(G.__webglFramebuffer[J][$],C,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,$);else xt(G.__webglFramebuffer[J],C,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);S(T)?y(s.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(he){for(let J=0,$=Q.length;J<$;J++){let ae=Q[J],N=n.get(ae),j=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(j=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(j,N.__webglTexture),it(j,ae),xt(G.__webglFramebuffer,C,ae,s.COLOR_ATTACHMENT0+J,j,0),S(ae)&&y(j)}t.unbindTexture()}else{let J=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(J,ne.__webglTexture),it(J,T),T.mipmaps.length>0)for(let $=0;$<T.mipmaps.length;$++)xt(G.__webglFramebuffer[$],C,T,s.COLOR_ATTACHMENT0,J,$);else xt(G.__webglFramebuffer,C,T,s.COLOR_ATTACHMENT0,J,0);S(T)?y(J):T.mipmaps.length>0&&s.texParameteri(J,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&vn(C)}function F(C){let T=C.textures;for(let G=0,ne=T.length;G<ne;G++){let Q=T[G];if(S(Q)&&Q.mipmapsAutoUpdate===!0){let re=b(C),he=n.get(Q).__webglTexture;t.bindTexture(re,he),y(re),t.unbindTexture()}}}let bn=[];function pt(C){if(C.samples>0){if(de(C)===!1){let T=C.textures,G=C.width,ne=C.height,Q=s.COLOR_BUFFER_BIT,re=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=n.get(C),J=T.length>1;if(J)for(let ae=0;ae<T.length;ae++)t.bindFramebuffer(s.FRAMEBUFFER,he.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,he.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let ae=0;ae<T.length;ae++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),J){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,he.__webglColorRenderbuffer[ae]);let N=n.get(T[ae]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,N,0)}s.blitFramebuffer(0,0,G,ne,0,0,G,ne,Q,s.NEAREST),c===!0&&(bn.length=0,bn.push(s.COLOR_ATTACHMENT0+ae),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&bn.push(re),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,bn))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),J)for(let ae=0;ae<T.length;ae++){t.bindFramebuffer(s.FRAMEBUFFER,he.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.RENDERBUFFER,he.__webglColorRenderbuffer[ae]);let N=n.get(T[ae]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,he.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.TEXTURE_2D,N,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){let T=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function mt(C){return Math.min(i.maxSamples,C.samples)}function de(C){let T=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Lt(C){let T=o.render.frame;h.get(C)!==T&&(h.set(C,T),C.update())}function De(C,T){let G=C.colorSpace,ne=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==rn&&G!==Pi&&(qe.getTransfer(G)===nt?(ne!==Cn||Q!==fn)&&Ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Oe("WebGLTextures: Unsupported texture color space:",G)),T}function ke(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=Me,this.resetTextureUnits=Y,this.getTextureUnits=te,this.setTextureUnits=_e,this.setTexture2D=fe,this.setTexture2DArray=ye,this.setTexture3D=Ee,this.setTextureCube=pe,this.rebindTextures=Mn,this.setupRenderTarget=Sn,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=vn,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=de,this.dispose=z}function Ty(s,e){function t(n,i=Pi){let r,o=qe.getTransfer(i);if(n===fn)return s.UNSIGNED_BYTE;if(n===$a)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ja)return s.UNSIGNED_SHORT_5_5_5_1;if(n===lh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ch)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===oh)return s.BYTE;if(n===ah)return s.SHORT;if(n===vr)return s.UNSIGNED_SHORT;if(n===Ja)return s.INT;if(n===Gn)return s.UNSIGNED_INT;if(n===xn)return s.FLOAT;if(n===Vn)return s.HALF_FLOAT;if(n===hh)return s.ALPHA;if(n===uh)return s.RGB;if(n===Cn)return s.RGBA;if(n===xi)return s.DEPTH_COMPONENT;if(n===Ii)return s.DEPTH_STENCIL;if(n===Qa)return s.RED;if(n===el)return s.RED_INTEGER;if(n===Ji)return s.RG;if(n===tl)return s.RG_INTEGER;if(n===nl)return s.RGBA_INTEGER;if(n===To||n===Eo||n===wo||n===Ao)if(o===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===To)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===To)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ao)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===il||n===sl||n===rl||n===ol)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===il)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===rl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ol)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===al||n===ll||n===cl||n===hl||n===ul||n===Ro||n===dl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===al||n===ll)return o===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===cl)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===hl)return r.COMPRESSED_R11_EAC;if(n===ul)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ro)return r.COMPRESSED_RG11_EAC;if(n===dl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===fl||n===pl||n===ml||n===gl||n===xl||n===_l||n===yl||n===vl||n===Ml||n===Sl||n===bl||n===Tl||n===El||n===wl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===fl)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pl)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ml)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gl)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xl)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_l)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yl)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vl)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ml)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sl)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bl)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Tl)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===El)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wl)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Al||n===Rl||n===Cl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Al)return o===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Rl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Cl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Il||n===Pl||n===Co||n===Ll)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Il)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Pl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Co)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ll)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ts?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var Ey=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wy=`
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

}`,Dh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new uo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new $n({vertexShader:Ey,fragmentShader:wy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ge(new Bn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Uh=class extends zn{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,p=null,v=typeof XRWebGLBinding<"u",m=new Dh,g={},x=t.getContextAttributes(),S=null,y=null,b=[],E=[],_=new Ne,M=null,I=null,R=new Et;R.viewport=new rt;let D=new Et;D.viewport=new rt;let O=[R,D],W=new Va,L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let fe=b[Z];return fe===void 0&&(fe=new ir,b[Z]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(Z){let fe=b[Z];return fe===void 0&&(fe=new ir,b[Z]=fe),fe.getGripSpace()},this.getHand=function(Z){let fe=b[Z];return fe===void 0&&(fe=new ir,b[Z]=fe),fe.getHandSpace()};function H(Z){let fe=E.indexOf(Z.inputSource);if(fe===-1)return;let ye=b[fe];ye!==void 0&&(ye.update(Z.inputSource,Z.frame,l||o),ye.dispatchEvent({type:Z.type,data:Z.inputSource}))}function B(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",ee);for(let Z=0;Z<b.length;Z++){let fe=E[Z];fe!==null&&(E[Z]=null,b[Z].disconnect(fe))}L=null,z=null,m.reset();for(let Z in g)delete g[Z];if(e.setRenderTarget(S),f=null,u=null,d=null,i=null,y=null,Me.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(_.width,_.height,!1),I!==null){let Z=I.camera;Z.fov=I.fov,Z.zoom=I.zoom,Z.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&Ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(S=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",B),i.addEventListener("inputsourceschange",ee),x.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(_),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Ee=null,pe=null;x.depth&&(pe=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=x.stencil?Ii:xi,Ee=x.stencil?Ts:Gn);let Fe={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Fe),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new gn(u.textureWidth,u.textureHeight,{format:Cn,type:fn,depthTexture:new Si(u.textureWidth,u.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ye={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ye),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new gn(f.framebufferWidth,f.framebufferHeight,{format:Cn,type:fn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Me.setContext(i),Me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ee(Z){for(let fe=0;fe<Z.removed.length;fe++){let ye=Z.removed[fe],Ee=E.indexOf(ye);Ee>=0&&(E[Ee]=null,b[Ee].disconnect(ye))}for(let fe=0;fe<Z.added.length;fe++){let ye=Z.added[fe],Ee=E.indexOf(ye);if(Ee===-1){for(let Fe=0;Fe<b.length;Fe++)if(Fe>=E.length){E.push(ye),Ee=Fe;break}else if(E[Fe]===null){E[Fe]=ye,Ee=Fe;break}if(Ee===-1)break}let pe=b[Ee];pe&&pe.connect(ye)}}function X(Z,fe){fe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(fe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let fe=Z.near,ye=Z.far;m.texture!==null&&(m.depthNear>0&&(fe=m.depthNear),m.depthFar>0&&(ye=m.depthFar)),W.near=D.near=R.near=fe,W.far=D.far=R.far=ye,(L!==W.near||z!==W.far)&&(i.updateRenderState({depthNear:W.near,depthFar:W.far}),L=W.near,z=W.far),W.layers.mask=Z.layers.mask|6,R.layers.mask=W.layers.mask&-5,D.layers.mask=W.layers.mask&-3;let Ee=Z.parent,pe=W.cameras;X(W,Ee);for(let Fe=0;Fe<pe.length;Fe++)X(pe[Fe],Ee);W.projectionMatrix.copy(R.projectionMatrix),W.projectionMatrixInverse.copy(R.projectionMatrixInverse),I===null&&Z.isPerspectiveCamera&&(I={camera:Z,fov:Z.fov,zoom:Z.zoom}),Y(Z,W,Ee)};function Y(Z,fe,ye){ye===null?Z.matrix.copy(fe.matrixWorld):(Z.matrix.copy(ye.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(fe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(fe.projectionMatrix),Z.projectionMatrixInverse.copy(fe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ds*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(Z){c=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(W)},this.getCameraTexture=function(Z){return g[Z]};let te=null;function _e(Z,fe){if(h=fe.getViewerPose(l||o),p=fe,h!==null){let ye=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Ee=!1;ye.length!==W.cameras.length&&(W.cameras.length=0,Ee=!0);for(let Le=0;Le<ye.length;Le++){let it=ye[Le],ct=null;if(f!==null)ct=f.getViewport(it);else{let Gt=d.getViewSubImage(u,it);ct=Gt.viewport,Le===0&&(e.setRenderTargetTextures(y,Gt.colorTexture,Gt.depthStencilTexture),e.setRenderTarget(y))}let Je=O[Le];Je===void 0&&(Je=new Et,Je.layers.enable(Le),Je.viewport=new rt,O[Le]=Je),Je.matrix.fromArray(it.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(it.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(ct.x,ct.y,ct.width,ct.height),Le===0&&(W.matrix.copy(Je.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Ee===!0&&W.cameras.push(Je)}let pe=i.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){d=n.getBinding();let Le=d.getDepthInformation(ye[0]);Le&&Le.isValid&&Le.texture&&m.init(Le,i.renderState)}if(pe&&pe.includes("camera-access")&&v){e.state.unbindTexture(),d=n.getBinding();for(let Le=0;Le<ye.length;Le++){let it=ye[Le].camera;if(it){let ct=g[it];ct||(ct=new uo,g[it]=ct);let Je=d.getCameraImage(it);ct.sourceTexture=Je}}}}for(let ye=0;ye<b.length;ye++){let Ee=E[ye],pe=b[ye];Ee!==null&&pe!==void 0&&pe.update(Ee,fe,l||o)}te&&te(Z,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),p=null}let Me=new Vf;Me.setAnimationLoop(_e),this.setAnimationLoop=function(Z){te=Z},this.dispose=function(){}}},Ay=new ze,Qf=new Be;Qf.set(-1,0,0,0,1,0,0,0,1);function Ry(s,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Sh(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,x,S,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&f(m,g,y)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),v(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?c(m,g,x,S):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Xt&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Xt&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let x=e.get(g),S=x.envMap,y=x.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(Ay.makeRotationFromEuler(y)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Qf),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,x,S){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*x,m.scale.value=S*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,x){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Xt&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){let x=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Cy(s,e,t,n){let i={},r={};function o(x,S){let y=S.program;n.uniformBlockBinding(x,y,i[x.id])}function a(x,S){let y=i[x.id];y===void 0&&(p(x),y=c(x),i[x.id]=y,x.addEventListener("dispose",m));let b=S.program;n.updateUBOMapping(x,b);let E=e.render.frame;r[x.id]!==E&&(l(x),r[x.id]=E)}function c(x){let S=s.createBuffer(),y=x.__size,b=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,y,b),s.bindBuffer(s.UNIFORM_BUFFER,null),S}function l(x){let S=i[x.id],y=x.uniforms,b=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let E=0,_=y.length;E<_;E++){let M=y[E];if(Array.isArray(M))for(let I=0,R=M.length;I<R;I++)h(M[I],E,I,b);else h(M,E,0,b)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(x,S,y,b){if(u(x,S,y,b)===!0){let E=x.__offset,_=x.value;if(Array.isArray(_)){let M=0;for(let I=0;I<_.length;I++){let R=_[I],D=v(R,!0);d(R,x.__data,M),M+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,x.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,x.__data)}}function d(x,S,y){typeof x=="number"||typeof x=="boolean"?S[y]=x:x.isMatrix3?(S[y]=x.elements[0],S[y+1]=x.elements[1],S[y+2]=x.elements[2],S[y+3]=0,S[y+4]=x.elements[3],S[y+5]=x.elements[4],S[y+6]=x.elements[5],S[y+7]=0,S[y+8]=x.elements[6],S[y+9]=x.elements[7],S[y+10]=x.elements[8],S[y+11]=0):ArrayBuffer.isView(x)?S.set(x.subarray(0,S.length-y),y):x.toArray(S,y)}function u(x,S,y,b){let E=x.value,_=S+"_"+y;if(Array.isArray(E)){b[_]===void 0&&(b[_]=[]);let M=b[_],I=!1;for(let R=0;R<E.length;R++)f(E[R],M,R)===!0&&(I=!0);return I}return f(E,b,_)}function f(x,S,y){if(S[y]===void 0)return typeof x=="number"||typeof x=="boolean"?S[y]=x:ArrayBuffer.isView(x)?S[y]=x.slice():S[y]=x.clone(),!0;{let b=S[y];if(typeof x=="number"||typeof x=="boolean"){if(b!==x)return S[y]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(b.equals(x)===!1)return b.copy(x),!0}}return!1}function p(x){let S=x.uniforms,y=0,b=16;for(let _=0,M=S.length;_<M;_++){let I=Array.isArray(S[_])?S[_]:[S[_]];for(let R=0,D=I.length;R<D;R++){let O=I[R],W=Array.isArray(O.value)?O.value:[O.value],L=Array.isArray(S[_])||Array.isArray(O.value),z=y;for(let B=0,ee=W.length;B<ee;B++){let X=W[B],Y=v(X,L),te=y%b,_e=te%Y.boundary,Me=te+_e;y+=_e,Me!==0&&b-Me<Y.storage&&(y+=b-Me),B===0&&(z=y),y+=Y.storage}let H=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new H((y-z)/Float32Array.BYTES_PER_ELEMENT),O.__offset=z}}let E=y%b;return E>0&&(y+=b-E),x.__size=y,x.__cache={},this}function v(x,S){let y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=16,y.storage=48):x.isMatrix4?(y.boundary=16,y.storage=64):x.isTexture?Ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(y.boundary=16,y.storage=x.byteLength):Ae("WebGLRenderer: Unsupported uniform value type.",x),S===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(x){let S=x.target;S.removeEventListener("dispose",m),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function g(){for(let x in i)s.deleteBuffer(i[x]);i={},r={}}return{bind:o,update:a,dispose:g}}var Iy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),si=null;function Py(){return si===null&&(si=new or(Iy,16,16,Ji,Vn),si.name="DFG_LUT",si.minFilter=Nt,si.magFilter=Nt,si.wrapS=En,si.wrapT=En,si.generateMipmaps=!1,si.needsUpdate=!0),si}var zl=class{constructor(e={}){let{canvas:t=ff(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=fn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let v=f,m=new Set([nl,tl,el]),g=new Set([fn,Gn,vr,Ts,$a,ja]),x=new Uint32Array(4),S=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},b=null,E=null,_=[],M=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,D=!1,O=null,W=null,L=null,z=null;this._outputColorSpace=Tt;let H=0,B=0,ee=null,X=-1,Y=null,te=new rt,_e=new rt,Me=null,Z=new we(0),fe=0,ye=t.width,Ee=t.height,pe=1,Fe=null,ft=null,Le=new rt(0,0,ye,Ee),it=new rt(0,0,ye,Ee),ct=!1,Je=new qi,Gt=new Pa,Pt=!1,hn=!1,xt=new ze,qn=new P,Ft=new rt,vn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Mn=!1;function Sn(){return ee===null?pe:1}let F=n;function bn(w,U){return t.getContext(w,U)}let pt,mt,de,Lt,De,ke,C,T,G,ne,Q,re,he,J,$,ae,N,j,K,le,se,oe,Ce;try{let w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",Ve,!1),t.addEventListener("webglcontextcreationerror",me,!1),F===null){let U="webgl2";if(F=bn(U,w),F===null)throw bn(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}We()}catch(w){throw t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",Ve,!1),t.removeEventListener("webglcontextcreationerror",me,!1),Oe("WebGLRenderer: "+w.message),w}function We(){pt=new Gx(F),pt.init(),se=new Ty(F,pt),mt=new Px(F,pt,e,se),de=new Sy(F,pt),mt.reversedDepthBuffer&&u&&de.buffers.depth.setReversed(!0),W=F.createFramebuffer(),L=F.createFramebuffer(),z=F.createFramebuffer(),Lt=new Xx(F),De=new ly,ke=new by(F,pt,de,De,mt,se,Lt),C=new Hx(R),T=new Ym(F),oe=new Cx(F,T),G=new Vx(F,T,Lt,oe),ne=new Yx(F,G,T,oe,Lt),j=new qx(F,mt,ke),$=new Lx(De),Q=new ay(R,C,pt,mt,oe,$),re=new Ry(R,De),he=new hy,J=new gy(pt),N=new Rx(R,C,de,ne,p,c),ae=new My(R,ne,mt),Ce=new Cy(F,Lt,mt,de),K=new Ix(F,pt,Lt),le=new Wx(F,pt,Lt),Lt.programs=Q.programs,R.capabilities=mt,R.extensions=pt,R.properties=De,R.renderLists=he,R.shadowMap=ae,R.state=de,R.info=Lt}v!==fn&&(I=new Zx(v,t.width,t.height,a,i,r));let ie=new Uh(R,F);this.xr=ie,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let w=pt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=pt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(w){w!==void 0&&(pe=w,this.setSize(ye,Ee,!1))},this.getSize=function(w){return w.set(ye,Ee)},this.setSize=function(w,U,q=!0){if(ie.isPresenting){Ae("WebGLRenderer: Can't change size while VR device is presenting.");return}ye=w,Ee=U,t.width=Math.floor(w*pe),t.height=Math.floor(U*pe),q===!0&&(t.style.width=w+"px",t.style.height=U+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(ye*pe,Ee*pe).floor()},this.setDrawingBufferSize=function(w,U,q){ye=w,Ee=U,pe=q,t.width=Math.floor(w*q),t.height=Math.floor(U*q),this.setViewport(0,0,w,U)},this.setEffects=function(w){if(v===fn){Oe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let U=0;U<w.length;U++)if(w[U].isOutputPass===!0){Ae("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(te)},this.getViewport=function(w){return w.copy(Le)},this.setViewport=function(w,U,q,k){w.isVector4?Le.set(w.x,w.y,w.z,w.w):Le.set(w,U,q,k),de.viewport(te.copy(Le).multiplyScalar(Sn()).round())},this.getScissor=function(w){return w.copy(it)},this.setScissor=function(w,U,q,k){w.isVector4?it.set(w.x,w.y,w.z,w.w):it.set(w,U,q,k),de.scissor(_e.copy(it).multiplyScalar(Sn()).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(w){de.setScissorTest(ct=w)},this.setOpaqueSort=function(w){Fe=w},this.setTransparentSort=function(w){ft=w},this.getClearColor=function(w){return w.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(w=!0,U=!0,q=!0){let k=0;if(w){let V=!1;if(ee!==null){let ue=ee.texture.format;V=m.has(ue)}if(V){let ue=ee.texture.type,ve=g.has(ue),ce=N.getClearColor(),xe=N.getClearAlpha(),Te=ce.r,He=ce.g,$e=ce.b;ve?(x[0]=Te,x[1]=He,x[2]=$e,x[3]=xe,F.clearBufferuiv(F.COLOR,0,x)):(S[0]=Te,S[1]=He,S[2]=$e,S[3]=xe,F.clearBufferiv(F.COLOR,0,S))}else k|=F.COLOR_BUFFER_BIT}U&&(k|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(k|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&F.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),O=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",Ve,!1),t.removeEventListener("webglcontextcreationerror",me,!1),N.dispose(),he.dispose(),J.dispose(),ke.dispose(),De.dispose(),C.dispose(),ne.dispose(),G.dispose(),oe.dispose(),Ce.dispose(),Q.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Du),ie.removeEventListener("sessionend",Uu),es.stop()};function Pe(w){w.preventDefault(),jr("WebGLRenderer: Context Lost."),D=!0}function Ve(){jr("WebGLRenderer: Context Restored."),D=!1;let w=Lt.autoReset,U=ae.enabled,q=ae.autoUpdate,k=ae.needsUpdate,V=ae.type;We(),Lt.autoReset=w,ae.enabled=U,ae.autoUpdate=q,ae.needsUpdate=k,ae.type=V}function me(w){Oe("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function st(w){let U=w.target;U.removeEventListener("dispose",st),zt(U)}function zt(w){Fi(w),De.remove(w)}function Fi(w){let U=De.get(w).programs;U!==void 0&&(U.forEach(function(q){Q.releaseProgram(q)}),w.isShaderMaterial&&Q.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,q,k,V,ue){U===null&&(U=vn);let ve=V.isMesh&&V.matrixWorld.determinantAffine()<0,ce=kp(w,U,q,k,V);de.setMaterial(k,ve);let xe=q.index,Te=1;if(k.wireframe===!0){if(xe=G.getWireframeAttribute(q),xe===void 0)return;Te=2}let He=q.drawRange,$e=q.attributes.position,Se=He.start*Te,je=(He.start+He.count)*Te;ue!==null&&(Se=Math.max(Se,ue.start*Te),je=Math.min(je,(ue.start+ue.count)*Te)),xe!==null?(Se=Math.max(Se,0),je=Math.min(je,xe.count)):$e!=null&&(Se=Math.max(Se,0),je=Math.min(je,$e.count));let Ct=je-Se;if(Ct<0||Ct===1/0)return;oe.setup(V,k,ce,q,xe);let dt,ht=K;if(xe!==null&&(dt=T.get(xe),ht=le,ht.setIndex(dt)),V.isMesh)k.wireframe===!0?(de.setLineWidth(k.wireframeLinewidth*Sn()),ht.setMode(F.LINES)):ht.setMode(F.TRIANGLES);else if(V.isLine){let Zt=k.linewidth;Zt===void 0&&(Zt=1),de.setLineWidth(Zt*Sn()),V.isLineSegments?ht.setMode(F.LINES):V.isLineLoop?ht.setMode(F.LINE_LOOP):ht.setMode(F.LINE_STRIP)}else V.isPoints?ht.setMode(F.POINTS):V.isSprite&&ht.setMode(F.TRIANGLES);if(V.isBatchedMesh)if(pt.get("WEBGL_multi_draw"))ht.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Zt=V._multiDrawStarts,be=V._multiDrawCounts,nn=V._multiDrawCount,tt=xe?T.get(xe).bytesPerElement:1,ts=De.get(k).currentProgram.getUniforms();for(let Jt=0;Jt<nn;Jt++)ts.setValue(F,"_gl_DrawID",Jt),ht.render(Zt[Jt]/tt,be[Jt])}else if(V.isInstancedMesh)ht.renderInstances(Se,Ct,V.count);else if(q.isInstancedBufferGeometry){let Zt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,be=Math.min(q.instanceCount,Zt);ht.renderInstances(Se,Ct,be)}else ht.render(Se,Ct)};function Nu(w,U,q,k){O!==null&&w.isNodeMaterial&&O.setObject(k,w),Pt===!0&&$.setState(w,q,!1),w.transparent===!0&&w.side===en&&w.forceSinglePass===!1?(w.side=Xt,w.needsUpdate=!0,Ur(w,U,k),w.side=ti,w.needsUpdate=!0,Ur(w,U,k),w.side=en):Ur(w,U,k)}this.compile=function(w,U,q=null){q===null&&(q=w),O!==null&&O.renderStart(w,U,q),E=J.get(q),E.init(U),M.push(E),q.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),w!==q&&w.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),E.setupLights(),O!==null&&O.updateLights(E.state.lightsArray),hn=this.localClippingEnabled,Pt=$.init(this.clippingPlanes,hn),Pt===!0&&$.setGlobalState(this.clippingPlanes,U),O!==null&&ae.render(E.state.shadowsArray,q,U);let k=new Set;return w.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let ue=V.material;if(ue)if(Array.isArray(ue))for(let ve=0;ve<ue.length;ve++){let ce=ue[ve];Nu(ce,q,U,V),k.add(ce)}else Nu(ue,q,U,V),k.add(ue)}),E=M.pop(),O!==null&&O.renderEnd(),k},this.compileAsync=function(w,U,q=null){let k=this.compile(w,U,q);return new Promise(V=>{function ue(){if(k.forEach(function(ve){let xe=De.get(ve).currentProgram;(xe===void 0||xe.isReady())&&k.delete(ve)}),k.size===0){V(w);return}setTimeout(ue,10)}pt.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let dc=null;function zp(w){dc&&dc(w)}function Du(){es.stop()}function Uu(){es.start()}let es=new Vf;es.setAnimationLoop(zp),typeof self<"u"&&es.setContext(self),this.setAnimationLoop=function(w){dc=w,ie.setAnimationLoop(w),w===null?es.stop():es.start()},ie.addEventListener("sessionstart",Du),ie.addEventListener("sessionend",Uu),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){Oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;O!==null&&O.renderStart(w,U);let q=ie.enabled===!0&&ie.isPresenting===!0,k=I!==null&&(ee===null||q)&&I.begin(R,ee);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(U),U=ie.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,U,ee),E=J.get(w,M.length),E.init(U),E.state.textureUnits=ke.getTextureUnits(),M.push(E),xt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?Gt.setFromArrayCamera(U):Je.setFromProjectionMatrix(xt,wn,U.reversedDepth),hn=this.localClippingEnabled,Pt=$.init(this.clippingPlanes,hn),b=he.get(w,_.length),b.init(),_.push(b),this.info.render.frame++,ie.enabled===!0&&ie.isPresenting===!0){let ve=R.xr.getDepthSensingMesh();ve!==null&&fc(ve,U,-1/0,R.sortObjects)}fc(w,U,0,R.sortObjects),b.finish(),O!==null&&O.updateLights(E.state.lightsArray),R.sortObjects===!0&&b.sort(Fe,ft),Mn=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Mn&&N.addToRenderList(b,w),this.info.autoReset===!0&&this.info.reset(),Pt===!0&&$.beginShadows();let V=E.state.shadowsArray;if(ae.render(V,w,U),Pt===!0&&$.endShadows(),(k&&I.hasRenderPass())===!1){let ve=b.opaque,ce=b.transmissive;if(E.setupLights(),U.isArrayCamera){let xe=U.cameras;if(ce.length>0)for(let Te=0,He=xe.length;Te<He;Te++){let $e=xe[Te];Fu(ve,ce,w,$e)}Mn&&N.render(w);for(let Te=0,He=xe.length;Te<He;Te++){let $e=xe[Te];Ou(b,w,$e,$e.viewport)}}else ce.length>0&&Fu(ve,ce,w,U),Mn&&N.render(w),Ou(b,w,U)}ee!==null&&B===0&&(ke.updateMultisampleRenderTarget(ee),ke.updateRenderTargetMipmap(ee)),k&&I.end(R),w.isScene===!0&&w.onAfterRender(R,w,U),oe.resetDefaultState(),X=-1,Y=null,M.pop(),M.length>0?(E=M[M.length-1],ke.setTextureUnits(E.state.textureUnits),Pt===!0&&$.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,_.pop(),_.length>0?b=_[_.length-1]:b=null,O!==null&&O.renderEnd()};function fc(w,U,q,k){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){let ve=U.isArrayCamera?Gt:Je;if(!w.frustumCulled||w.intersectsFrustum(ve)){k&&Ft.setFromMatrixPosition(w.matrixWorld).applyMatrix4(xt);let ce=ne.update(w),xe=w.material;xe.visible&&b.push(w,ce,xe,q,Ft.z,null,U)}}else if(w.isMesh||w.isLine||w.isPoints){let ve=U.isArrayCamera?Gt:Je;if(!w.frustumCulled||w.intersectsFrustum(ve)){let ce=ne.update(w),xe=w.material;if(k&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ft.copy(w.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Ft.copy(ce.boundingSphere.center)),Ft.applyMatrix4(w.matrixWorld).applyMatrix4(xt)),Array.isArray(xe)){let Te=ce.groups;for(let He=0,$e=Te.length;He<$e;He++){let Se=Te[He],je=xe[Se.materialIndex];je&&je.visible&&b.push(w,ce,je,q,Ft.z,Se,U)}}else xe.visible&&b.push(w,ce,xe,q,Ft.z,null,U)}}}let ue=w.children;for(let ve=0,ce=ue.length;ve<ce;ve++)fc(ue[ve],U,q,k)}function Ou(w,U,q,k){let{opaque:V,transmissive:ue,transparent:ve}=w;E.setupLightsView(q),Pt===!0&&$.setGlobalState(R.clippingPlanes,q),k&&de.viewport(te.copy(k)),V.length>0&&Vo(V,U,q),ue.length>0&&Vo(ue,U,q),ve.length>0&&Vo(ve,U,q),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Fu(w,U,q,k){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[k.id]===void 0){let Se=pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[k.id]=new gn(1,1,{generateMipmaps:!0,type:Se?Vn:fn,minFilter:Rn,samples:Math.max(4,mt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:qe.workingColorSpace})}let ue=E.state.transmissionRenderTarget[k.id],ve=k.viewport||te;ue.setSize(ve.z*R.transmissionResolutionScale,ve.w*R.transmissionResolutionScale);let ce=R.getRenderTarget(),xe=R.getActiveCubeFace(),Te=R.getActiveMipmapLevel();R.setRenderTarget(ue),R.getClearColor(Z),fe=R.getClearAlpha(),fe<1&&R.setClearColor(16777215,.5),R.clear(),Mn&&N.render(q);let He=R.toneMapping;R.toneMapping=ni;let $e=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),E.setupLightsView(k),Pt===!0&&$.setGlobalState(R.clippingPlanes,k),Vo(w,q,k),ke.updateMultisampleRenderTarget(ue),ke.updateRenderTargetMipmap(ue),pt.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let je=0,Ct=U.length;je<Ct;je++){let dt=U[je],{object:ht,geometry:Zt,material:be,group:nn}=dt;if(be.side===en&&ht.layers.test(k.layers)){let tt=be.side;be.side=Xt,be.needsUpdate=!0,zu(ht,q,k,Zt,be,nn),be.side=tt,be.needsUpdate=!0,Se=!0}}Se===!0&&(ke.updateMultisampleRenderTarget(ue),ke.updateRenderTargetMipmap(ue))}R.setRenderTarget(ce,xe,Te),R.setClearColor(Z,fe),$e!==void 0&&(k.viewport=$e),R.toneMapping=He}function Vo(w,U,q){let k=U.isScene===!0?U.overrideMaterial:null;for(let V=0,ue=w.length;V<ue;V++){let ve=w[V],{object:ce,geometry:xe,group:Te}=ve,He=ve.material;He.allowOverride===!0&&k!==null&&(He=k),ce.layers.test(q.layers)&&zu(ce,U,q,xe,He,Te)}}function zu(w,U,q,k,V,ue){O!==null&&V.isNodeMaterial&&O.setObject(w,V),w.onBeforeRender(R,U,q,k,V,ue),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),V.onBeforeRender(R,U,q,k,w,ue),V.transparent===!0&&V.side===en&&V.forceSinglePass===!1?(V.side=Xt,V.needsUpdate=!0,R.renderBufferDirect(q,U,k,V,w,ue),V.side=ti,V.needsUpdate=!0,R.renderBufferDirect(q,U,k,V,w,ue),V.side=en):R.renderBufferDirect(q,U,k,V,w,ue),w.onAfterRender(R,U,q,k,V,ue)}function Bu(w){let U=0;for(let q of w)q.texture!==null&&U++;return U}function Ur(w,U,q){U.isScene!==!0&&(U=vn);let k=De.get(w),V=E.state.lights,ue=E.state.shadowsArray,ve=V.state.version,ce=Q.getParameters(w,V.state,ue,U,q,E.state.lightProbeGridArray),xe=Q.getProgramCacheKey(ce),Te=k.programs;k.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?U.environment:null,k.fog=U.fog;let He=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;k.envMap=C.get(w.envMap||k.environment,He),k.envMapRotation=k.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Te===void 0&&(w.addEventListener("dispose",st),Te=new Map,k.programs=Te,k.programVariants=new Map);let $e=Te.get(xe);if($e!==void 0){if(k.currentProgram===$e&&k.lightsStateVersion===ve)return Hu(w,ce),$e}else ce.uniforms=Q.getUniforms(w),O!==null&&w.isNodeMaterial&&O.build(w,q,ce),w.onBeforeCompile(ce,R),$e=Q.acquireProgram(ce,xe),Te.set(xe,$e),k.uniforms=ce.uniforms;let Se=k.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Se.clippingPlanes=$.uniform),Hu(w,ce),k.needsLights=Gp(w),k.lightsStateVersion=ve,k.needsLights&&(Se.ambientLightColor.value=V.state.ambient,Se.lightProbe.value=V.state.probe,Se.sunLights.value=V.state.sun,Se.sunLightShadows.value=V.state.sunShadow,Se.directionalLights.value=V.state.directional,Se.directionalLightShadows.value=V.state.directionalShadow,Se.spotLights.value=V.state.spot,Se.spotLightShadows.value=V.state.spotShadow,Se.rectAreaLights.value=V.state.rectArea,Se.ltc_1.value=V.state.rectAreaLTC1,Se.ltc_2.value=V.state.rectAreaLTC2,Se.pointLights.value=V.state.point,Se.pointLightShadows.value=V.state.pointShadow,Se.hemisphereLights.value=V.state.hemi,Se.sunShadowMatrix.value=V.state.sunShadowMatrix,Se.sunShadowCascade.value=V.state.sunShadowCascade,Se.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Se.spotLightMatrix.value=V.state.spotLightMatrix,Se.spotLightMap.value=V.state.spotLightMap,Se.pointShadowMatrix.value=V.state.pointShadowMatrix),k.numLightProbeGrids=Bu(E.state.lightProbeGridArray),k.currentProgram=$e,k.uniformsList=null,$e}function Bp(w,U,q,k,V){let ue=De.get(w),ve=ue.currentProgram.id+","+k+","+V,ce=ue.programVariants.get(ve);return ce===void 0?(ce=Ur(w,U,q),ue.programVariants.set(ve,ce)):(ue.currentProgram=ce,ue.uniformsList=null,ue.outputColorSpace=k,ue.toneMapping=V),ce}function ku(w){if(w.uniformsList===null){let U=w.currentProgram.getUniforms();w.uniformsList=Sr.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Hu(w,U){let q=De.get(w);q.outputColorSpace=U.outputColorSpace,q.batching=U.batching,q.batchingColor=U.batchingColor,q.instancing=U.instancing,q.instancingColor=U.instancingColor,q.instancingMorph=U.instancingMorph,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function kp(w,U,q,k,V){U.isScene!==!0&&(U=vn),ke.resetTextureUnits();let ue=U.fog,ve=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?U.environment:null,ce=ee===null?R.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:qe.workingColorSpace,xe=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Te=C.get(k.envMap||ve,xe),He=k.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,$e=!!q.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Se=!!q.morphAttributes.position,je=!!q.morphAttributes.normal,Ct=!!q.morphAttributes.color,dt=ni;k.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(dt=R.toneMapping);let ht=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Zt=ht!==void 0?ht.length:0,be=De.get(k),nn=E.state.lights;if(Pt===!0&&(hn===!0||w!==Y)){let _t=w===Y&&k.id===X;$.setState(k,w,_t)}let tt=!1,ts=!1;k.version===be.__version?be.needsLights&&be.lightsStateVersion!==nn.state.version||V.isBatchedMesh&&be.batching===!1||!V.isBatchedMesh&&be.batching===!0||V.isBatchedMesh&&be.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&be.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&be.instancing===!1||!V.isInstancedMesh&&be.instancing===!0||V.isSkinnedMesh&&be.skinning===!1||!V.isSkinnedMesh&&be.skinning===!0||V.isInstancedMesh&&be.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&be.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&be.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&be.instancingMorph===!1&&V.morphTexture!==null||be.envMap!==Te||k.fog===!0&&be.fog!==ue||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==$.numPlanes||be.numIntersection!==$.numIntersection)||be.vertexAlphas!==He||be.vertexTangents!==$e||be.morphTargets!==Se||be.morphNormals!==je||be.morphColors!==Ct||be.morphTargetsCount!==Zt||be.numLightProbeGrids!==Bu(E.state.lightProbeGridArray)?tt=!0:(be.outputColorSpace!==ce||be.toneMapping!==dt)&&(ts=!0):(tt=!0,be.__version=k.version);let Jt=be.currentProgram;(tt===!0||ts===!0)&&(Jt=ts===!0?Bp(k,U,V,ce,dt):Ur(k,U,V),O&&k.isNodeMaterial&&O.onUpdateProgram(k,Jt,be));let Wo=!1,zi=!1,ns=!1,et=Jt.getUniforms(),Vt=be.uniforms;if(de.useProgram(Jt.program)&&(Wo=!0,zi=!0,ns=!0),k.id!==X&&(X=k.id,zi=!0),Wo||Y!==w){de.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),et.setValue(F,"projectionMatrix",w.projectionMatrix),et.setValue(F,"viewMatrix",w.matrixWorldInverse);let Bt=et.map.cameraPosition;Bt!==void 0&&Bt.setValue(F,qn.setFromMatrixPosition(w.matrixWorld)),mt.logarithmicDepthBuffer&&et.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&et.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),Y!==w&&(Y=w,zi=!0,ns=!0)}if(be.needsLights&&(nn.state.sunShadowMap.length>0&&et.setValue(F,"sunShadowMap",nn.state.sunShadowMap,ke),nn.state.directionalShadowMap.length>0&&et.setValue(F,"directionalShadowMap",nn.state.directionalShadowMap,ke),nn.state.spotShadowMap.length>0&&et.setValue(F,"spotShadowMap",nn.state.spotShadowMap,ke),nn.state.pointShadowMap.length>0&&et.setValue(F,"pointShadowMap",nn.state.pointShadowMap,ke)),V.isSkinnedMesh){et.setOptional(F,V,"bindMatrix"),et.setOptional(F,V,"bindMatrixInverse");let _t=V.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),et.setValue(F,"boneTexture",_t.boneTexture,ke))}V.isBatchedMesh&&(et.setOptional(F,V,"batchingTexture"),et.setValue(F,"batchingTexture",V._matricesTexture,ke),et.setOptional(F,V,"batchingIdTexture"),et.setValue(F,"batchingIdTexture",V._indirectTexture,ke),et.setOptional(F,V,"batchingColorTexture"),V._colorsTexture!==null&&et.setValue(F,"batchingColorTexture",V._colorsTexture,ke));let Nn=q.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&j.update(V,q,Jt),(zi||be.receiveShadow!==V.receiveShadow)&&(be.receiveShadow=V.receiveShadow,et.setValue(F,"receiveShadow",V.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&U.environment!==null&&(Vt.envMapIntensity.value=U.environmentIntensity),Vt.dfgLUT!==void 0&&(Vt.dfgLUT.value=Py()),zi){if(et.setValue(F,"toneMappingExposure",R.toneMappingExposure),be.needsLights&&Hp(Vt,ns),ue&&k.fog===!0&&re.refreshFogUniforms(Vt,ue),re.refreshMaterialUniforms(Vt,k,pe,Ee,E.state.transmissionRenderTarget[w.id]),be.needsLights&&be.numLightProbeGrids>0){let _t=y,Bt=0;for(let li of E.state.lightProbeGridArray)li.texture!==null&&(_t.textures[Bt]=li.texture,_t.min[Bt]=li.boundingBox.min,_t.max[Bt]=li.boundingBox.max,_t.resolution[Bt]=li.resolution,Bt++);for(let li in _t)_t[li].length=Bt;Vt.probesSH.value=_t.textures,Vt.probesMin.value=_t.min,Vt.probesMax.value=_t.max,Vt.probesResolution.value=_t.resolution}Sr.upload(F,ku(be),Vt,ke)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Sr.upload(F,ku(be),Vt,ke),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&et.setValue(F,"center",V.center),et.setValue(F,"modelViewMatrix",V.modelViewMatrix),et.setValue(F,"normalMatrix",V.normalMatrix),et.setValue(F,"modelMatrix",V.matrixWorld),k.uniformsGroups!==void 0){let _t=k.uniformsGroups;for(let Bt=0,li=_t.length;Bt<li;Bt++){let Vu=_t[Bt];Ce.update(Vu,Jt),Ce.bind(Vu,Jt)}}return Jt}function Hp(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.sunLights.needsUpdate=U,w.sunLightShadows.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function Gp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(w,U,q){let k=De.get(w);k.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),De.get(w.texture).__webglTexture=U,De.get(w.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:q,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,U){let q=De.get(w);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,q=0){ee=w,H=U,B=q;let k=null,V=!1,ue=!1;if(w){let ce=De.get(w);if(ce.__useDefaultFramebuffer!==void 0){de.bindFramebuffer(F.FRAMEBUFFER,ce.__webglFramebuffer),te.copy(w.viewport),_e.copy(w.scissor),Me=w.scissorTest,de.viewport(te),de.scissor(_e),de.setScissorTest(Me),X=-1;return}else if(ce.__webglFramebuffer===void 0)ke.setupRenderTarget(w);else if(ce.__hasExternalTextures)ke.rebindTextures(w,De.get(w.texture).__webglTexture,De.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let He=w.depthTexture;if(ce.__boundDepthTexture!==He){if(He!==null&&De.has(He)&&(w.width!==He.image.width||w.height!==He.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(w)}}let xe=w.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(ue=!0);let Te=De.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Te[U])?k=Te[U][q]:k=Te[U],V=!0):w.samples>0&&ke.useMultisampledRTT(w)===!1?k=De.get(w).__webglMultisampledFramebuffer:Array.isArray(Te)?k=Te[q]:k=Te,te.copy(w.viewport),_e.copy(w.scissor),Me=w.scissorTest}else te.copy(Le).multiplyScalar(pe).floor(),_e.copy(it).multiplyScalar(pe).floor(),Me=ct;if(q!==0&&(k=W),de.bindFramebuffer(F.FRAMEBUFFER,k)&&de.drawBuffers(w,k),de.viewport(te),de.scissor(_e),de.setScissorTest(Me),V){let ce=De.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,ce.__webglTexture,q)}else if(ue){let ce=U;for(let xe=0;xe<w.textures.length;xe++){let Te=De.get(w.textures[xe]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+xe,Te.__webglTexture,q,ce)}}else if(w!==null&&q!==0){let ce=De.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ce.__webglTexture,q)}X=-1};function Gu(w){let U=De.get(w);return(U.__readFormat!==w.format||U.__readType!==w.type)&&(U.__readFormat=w.format,U.__readType=w.type,U.__formatReadable=mt.textureFormatReadable(w.format),U.__typeReadable=mt.textureTypeReadable(w.type)),U}this.readRenderTargetPixels=function(w,U,q,k,V,ue,ve,ce=0){if(!(w&&w.isWebGLRenderTarget)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=De.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ve!==void 0&&(xe=xe[ve],Array.isArray(xe)&&(xe=xe[0])),xe){de.bindFramebuffer(F.FRAMEBUFFER,xe);try{let Te=w.textures[ce],He=Te.format,$e=Te.type;w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ce);let Se=Gu(Te);if(Se.__formatReadable===!1){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Se.__typeReadable===!1){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-k&&q>=0&&q<=w.height-V&&F.readPixels(U,q,k,V,se.convert(He),se.convert($e),ue)}finally{let Te=ee!==null?De.get(ee).__webglFramebuffer:null;de.bindFramebuffer(F.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(w,U,q,k,V,ue,ve,ce=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=De.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ve!==void 0&&(xe=xe[ve],Array.isArray(xe)&&(xe=xe[0])),xe)if(U>=0&&U<=w.width-k&&q>=0&&q<=w.height-V){de.bindFramebuffer(F.FRAMEBUFFER,xe);let Te=w.textures[ce],He=Te.format,$e=Te.type;w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ce);let Se=Gu(Te);if(Se.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Se.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let je=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,je),F.bufferData(F.PIXEL_PACK_BUFFER,ue.byteLength,F.STREAM_READ),F.readPixels(U,q,k,V,se.convert(He),se.convert($e),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Ct=ee!==null?De.get(ee).__webglFramebuffer:null;de.bindFramebuffer(F.FRAMEBUFFER,Ct);let dt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await mf(F,dt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,je),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ue),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(je),F.deleteSync(dt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,U=null,q=0){let k=Math.pow(2,-q),V=Math.floor(w.image.width*k),ue=Math.floor(w.image.height*k),ve=U!==null?U.x:0,ce=U!==null?U.y:0;ke.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,q,0,0,ve,ce,V,ue),de.unbindTexture()},this.copyTextureToTexture=function(w,U,q=null,k=null,V=0,ue=0){let ve,ce,xe,Te,He,$e,Se,je,Ct,dt=w.isCompressedTexture?w.mipmaps[ue]:w.image;if(q!==null)ve=q.max.x-q.min.x,ce=q.max.y-q.min.y,xe=q.isBox3?q.max.z-q.min.z:1,Te=q.min.x,He=q.min.y,$e=q.isBox3?q.min.z:0;else{let et=Math.pow(2,-V);ve=Math.floor(dt.width*et),ce=Math.floor(dt.height*et),w.isDataArrayTexture?xe=dt.depth:w.isData3DTexture?xe=Math.floor(dt.depth*et):xe=1,Te=0,He=0,$e=0}k!==null?(Se=k.x,je=k.y,Ct=k.z):(Se=0,je=0,Ct=0);let ht=se.convert(U.format),Zt=se.convert(U.type),be;U.isData3DTexture?(ke.setTexture3D(U,0),be=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(ke.setTexture2DArray(U,0),be=F.TEXTURE_2D_ARRAY):(ke.setTexture2D(U,0),be=F.TEXTURE_2D),de.activeTexture(F.TEXTURE0),de.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),de.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),de.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let nn=de.getParameter(F.UNPACK_ROW_LENGTH),tt=de.getParameter(F.UNPACK_IMAGE_HEIGHT),ts=de.getParameter(F.UNPACK_SKIP_PIXELS),Jt=de.getParameter(F.UNPACK_SKIP_ROWS),Wo=de.getParameter(F.UNPACK_SKIP_IMAGES);de.pixelStorei(F.UNPACK_ROW_LENGTH,dt.width),de.pixelStorei(F.UNPACK_IMAGE_HEIGHT,dt.height),de.pixelStorei(F.UNPACK_SKIP_PIXELS,Te),de.pixelStorei(F.UNPACK_SKIP_ROWS,He),de.pixelStorei(F.UNPACK_SKIP_IMAGES,$e);let zi=w.isDataArrayTexture||w.isData3DTexture,ns=U.isDataArrayTexture||U.isData3DTexture;if(w.isDepthTexture){let et=De.get(w),Vt=De.get(U),Nn=De.get(et.__renderTarget),_t=De.get(Vt.__renderTarget);de.bindFramebuffer(F.READ_FRAMEBUFFER,Nn.__webglFramebuffer),de.bindFramebuffer(F.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let Bt=0;Bt<xe;Bt++)zi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,De.get(w).__webglTexture,V,$e+Bt),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,De.get(U).__webglTexture,ue,Ct+Bt)),F.blitFramebuffer(Te,He,Te+ve,He+ce,Se,je,Se+ve,je+ce,F.DEPTH_BUFFER_BIT,F.NEAREST);de.bindFramebuffer(F.READ_FRAMEBUFFER,null),de.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(V!==0||w.isRenderTargetTexture||De.has(w)){let et=De.get(w),Vt=De.get(U);de.bindFramebuffer(F.READ_FRAMEBUFFER,L),de.bindFramebuffer(F.DRAW_FRAMEBUFFER,z);for(let Nn=0;Nn<xe;Nn++)zi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,et.__webglTexture,V,$e+Nn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,et.__webglTexture,V),ns?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Vt.__webglTexture,ue,Ct+Nn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Vt.__webglTexture,ue),V!==0?F.blitFramebuffer(Te,He,Te+ve,He+ce,Se,je,Se+ve,je+ce,F.COLOR_BUFFER_BIT,F.NEAREST):ns?F.copyTexSubImage3D(be,ue,Se,je,Ct+Nn,Te,He,ve,ce):F.copyTexSubImage2D(be,ue,Se,je,Te,He,ve,ce);de.bindFramebuffer(F.READ_FRAMEBUFFER,null),de.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ns?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(be,ue,Se,je,Ct,ve,ce,xe,ht,Zt,dt.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(be,ue,Se,je,Ct,ve,ce,xe,ht,dt.data):F.texSubImage3D(be,ue,Se,je,Ct,ve,ce,xe,ht,Zt,dt):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ue,Se,je,ve,ce,ht,Zt,dt.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ue,Se,je,dt.width,dt.height,ht,dt.data):F.texSubImage2D(F.TEXTURE_2D,ue,Se,je,ve,ce,ht,Zt,dt);de.pixelStorei(F.UNPACK_ROW_LENGTH,nn),de.pixelStorei(F.UNPACK_IMAGE_HEIGHT,tt),de.pixelStorei(F.UNPACK_SKIP_PIXELS,ts),de.pixelStorei(F.UNPACK_SKIP_ROWS,Jt),de.pixelStorei(F.UNPACK_SKIP_IMAGES,Wo),ue===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&F.generateMipmap(be),de.unbindTexture()},this.initRenderTarget=function(w){De.get(w).__webglFramebuffer===void 0&&ke.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ke.setTextureCube(w,0):w.isData3DTexture?ke.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ke.setTexture2DArray(w,0):ke.setTexture2D(w,0),de.unbindTexture()},this.resetState=function(){H=0,B=0,ee=null,de.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}};var Hl=class extends _i{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Wt;e.deleteAttribute("uv");let t=new At({side:Xt}),n=new At,i=new ln(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new Ge(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new ms(e,n,6),a=new ut;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let c=new Ge(e,Er(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new Ge(e,Er(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new Ge(e,Er(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new Ge(e,Er(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new Ge(e,Er(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new Ge(e,Er(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Er(s){return new jn({color:0,emissive:16777215,emissiveIntensity:s})}var Ie=(s=1,e)=>e===void 0?Math.random()*s:s+Math.random()*(e-s);function Hh(s){let e=s>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Oh={};function ep(s){if(Oh[s])return Oh[s];let e=128,t=document.createElement("canvas");t.width=t.height=e;let n=t.getContext("2d"),i=Hh(s.length*977+13);if(s==="fence"){n.clearRect(0,0,e,e),n.strokeStyle="#c8ccd0",n.lineWidth=3;for(let o=-e;o<e*2;o+=16)n.beginPath(),n.moveTo(o,0),n.lineTo(o+e,e),n.stroke(),n.beginPath(),n.moveTo(o+e,0),n.lineTo(o,e),n.stroke()}else{let o=n.createImageData(e,e);for(let a=0;a<e;a++)for(let c=0;c<e;c++){let l;s==="grass"?l=140+i()*115:s==="dirt"?l=165+i()*80:s==="concrete"?l=195+i()*45:s==="metal"?l=180+Math.sin(c/e*Math.PI*16)*42+i()*22:s==="wood"?l=170+Math.sin(a/e*Math.PI*12+Math.sin(c*.08)*1.5)*35+i()*35:l=235+i()*20;let h=(a*e+c)*4;o.data[h]=o.data[h+1]=o.data[h+2]=l,o.data[h+3]=255}if(n.putImageData(o,0,0),s==="grass"||s==="dirt"||s==="concrete")for(let a=0;a<26;a++)n.fillStyle=`rgba(0,0,0,${.05+i()*.1})`,n.beginPath(),n.arc(i()*e,i()*e,4+i()*14,0,7),n.fill();if(s==="wood"){n.fillStyle="rgba(0,0,0,.35)";for(let a=0;a<4;a++)n.fillRect(0,a*32,e,2)}s==="concrete"&&(n.strokeStyle="rgba(0,0,0,.22)",n.strokeRect(.5,.5,e-1,e-1))}let r=new Mi(t);return r.wrapS=r.wrapT=Zn,r.colorSpace=Tt,r.anisotropy=4,Oh[s]=r}var Ly=[[[1,0,0],[0,0,-1],[0,1,0]],[[-1,0,0],[0,0,1],[0,1,0]],[[0,1,0],[1,0,0],[0,0,-1]],[[0,-1,0],[1,0,0],[0,0,1]],[[0,0,1],[1,0,0],[0,1,0]],[[0,0,-1],[-1,0,0],[0,1,0]]],Ny={grass:6,dirt:5,wood:1.6,concrete:4,metal:1.3,plain:1,fence:1.1,emis:1},tp=new yt,np=new An;function Yt(s,e,t,n=0,i=0,r=0,o=1,a=o,c=o){return np.set(n,i,r),tp.setFromEuler(np),new ze().compose(new P(s,e,t),tp,new P(o,a,c))}var zh=class{constructor(){this.b={},this.col=[],this.rng=Hh(4242)}buf(e){return this.b[e]||(this.b[e]={p:[],n:[],u:[],c:[]})}color(e,t){let n=new we(e),i=t===0?1:1+(this.rng()-.5)*(t??.14);return[n.r*i,n.g*i,n.b*i]}box(e,t,n,i,r,o,a,c,l={}){let h=this.buf(e),d=this.color(t,l.tint),u=Ny[e],f=o/2,p=a/2,v=c/2,m=Math.cos(l.rot||0),g=Math.sin(l.rot||0),x=i+p,S=this.rng()*7,y=this.rng()*7;for(let[b,E,_]of Ly){let M=W=>Math.abs(W[0])*f+Math.abs(W[1])*p+Math.abs(W[2])*v,I=M(b),R=M(E),D=M(_),O=(W,L)=>{let z=b[0]*I+E[0]*R*W+_[0]*D*L,H=b[1]*I+E[1]*R*W+_[1]*D*L,B=b[2]*I+E[2]*R*W+_[2]*D*L;h.p.push(n+z*m+B*g,x+H,r-z*g+B*m),h.n.push(b[0]*m+b[2]*g,b[1],-b[0]*g+b[2]*m),h.u.push(W*R/u+S,L*D/u+y),h.c.push(d[0],d[1],d[2])};O(-1,-1),O(1,-1),O(1,1),O(-1,-1),O(1,1),O(-1,1)}if(l.col!==!1){let b=Math.abs(m)*f+Math.abs(g)*v,E=Math.abs(g)*f+Math.abs(m)*v;this.collider(n-b,i,r-E,n+b,i+a,r+E,l)}return this}collider(e,t,n,i,r,o,a={}){this.col.push({x0:e,x1:i,y0:t,y1:r,z0:n,z1:o,solid:a.solid!==!1,sight:a.sight!==!1,bullet:a.bullet!==!1,walk:!!a.walk,nocover:!!a.nocover})}geo(e,t,n,i,r={}){let o=this.buf(e),a=this.color(t,r.tint);if(n.index){let u=n.toNonIndexed();n.dispose(),n=u}n.applyMatrix4(i);let c=n.attributes.position.array,l=n.attributes.normal.array,h=n.attributes.uv&&n.attributes.uv.array,d=r.uv||1;for(let u=0;u<c.length/3;u++)o.p.push(c[u*3],c[u*3+1],c[u*3+2]),o.n.push(l[u*3],l[u*3+1],l[u*3+2]),o.u.push(h?h[u*2]*d:0,h?h[u*2+1]*d:0),o.c.push(a[0],a[1],a[2]);n.dispose()}finish(e){let t=[];for(let n in this.b){let i=this.b[n],r=new at;r.setAttribute("position",new Ye(i.p,3)),r.setAttribute("normal",new Ye(i.n,3)),r.setAttribute("uv",new Ye(i.u,2)),r.setAttribute("color",new Ye(i.c,3));let o;n==="emis"?o=new lt({vertexColors:!0}):n==="fence"?o=new jn({map:ep("fence"),vertexColors:!0,alphaTest:.5,side:en}):o=new jn({map:n==="plain"?null:ep(n),vertexColors:!0});let a=new Ge(r,o);a.castShadow=n!=="emis"&&n!=="fence",a.receiveShadow=n!=="emis",a.frustumCulled=!1,e.add(a),t.push(a)}return t}};function In(s,e,t,n,i,r,o,a,c){i===0&&(i=1e-9),r===0&&(r=1e-9),o===0&&(o=1e-9);let l=1/i,h=1/r,d=1/o,u=a,f=null,p=0;for(let g=0;g<s.length;g++){let x=s[g];if(!x[c])continue;let S=(x.x0-e)*l,y=(x.x1-e)*l,b=S<y?S:y,E=S<y?y:S,_=0;S=(x.y0-t)*h,y=(x.y1-t)*h;let M=S<y?S:y,I=S<y?y:S;M>b&&(b=M,_=1),I<E&&(E=I),!(E<b)&&(S=(x.z0-n)*d,y=(x.z1-n)*d,M=S<y?S:y,I=S<y?y:S,M>b&&(b=M,_=2),I<E&&(E=I),!(E<b||b<0||b>=u)&&(u=b,f=x,p=_))}if(!f)return null;let v=p===0?i:p===1?r:o,m=v>0?-1:1;return{d:u,c:f,nx:p===0?m:0,ny:p===1?m:0,nz:p===2?m:0}}var Dy=[1,-1,0,0,1,1,-1,-1],Uy=[0,0,1,-1,1,-1,1,-1],Bh=class{constructor(e,t){this.x0=t.x0,this.z0=t.z0,this.w=Math.ceil(t.x1-t.x0),this.h=Math.ceil(t.z1-t.z0);let n=this.w*this.h,i=.42,r=this.w;this.blk=new Uint8Array(n),this.ht=new Float32Array(n),this.gs=new Float32Array(n),this.pa=new Int32Array(n),this.st=new Uint32Array(n),this.cl=new Uint32Array(n),this.via=new Array(n),this.stamp=0,this.hk=[],this.hv=[],this.links=new Map;let o=(a,c,l,h)=>[Math.max(0,Math.ceil(a-l-.5)),Math.min(h-1,Math.floor(c-l-.5))];for(let a of e){if(!a.walk)continue;let[c,l]=o(a.x0+.05,a.x1-.05,this.x0,r),[h,d]=o(a.z0+.05,a.z1-.05,this.z0,this.h);for(let u=h;u<=d;u++)for(let f=c;f<=l;f++)a.y1>this.ht[u*r+f]&&(this.ht[u*r+f]=a.y1)}for(let a of e){if(!a.solid)continue;let[c,l]=o(a.x0-i,a.x1+i,this.x0,r),[h,d]=o(a.z0-i,a.z1+i,this.z0,this.h);for(let u=h;u<=d;u++)for(let f=c;f<=l;f++){let p=this.ht[u*r+f];a.y1>p+.55&&a.y0<p+1.5&&(this.blk[u*r+f]=1)}}this.buildLinks(e,i)}addLink(e,t,n,i,r){this.links.has(e)||this.links.set(e,[]),this.links.get(e).push({to:t,type:n,h:i,cost:r})}buildLinks(e,t){let n=this.w,i=(o,a)=>o>=0&&a>=0&&o<n&&a<this.h&&!this.blk[a*n+o],r=(o,a,c)=>{let l=this.center(o),h=this.center(a),d=h.x-l.x,u=h.z-l.z,f=Math.hypot(d,u);return!In(e,l.x,c,l.z,d/f,0,u/f,f,"solid")};for(let o of e){if(!o.solid)continue;let a=!o.walk&&o.y0<.3&&o.y1>=.45&&o.y1<=1.2,c=o.walk&&o.y1>=.6&&o.y1<=1.3&&Math.min(o.x1-o.x0,o.z1-o.z0)>=2;if(!(!a&&!c))for(let l of[0,1]){let h=l?o.z0:o.x0,d=l?o.z1:o.x1,u=l?this.z0:this.x0,f=l?o.x0:o.z0,p=l?o.x1:o.z1,v=l?this.x0:this.z0,m=Math.floor(h-t-u-.5),g=Math.ceil(d+t-u-.5),x=Math.ceil(f+.15-v-.5),S=Math.floor(p-.15-v-.5),y=(E,_)=>l?E*n+_:_*n+E,b=(E,_)=>l?i(_,E):i(E,_);for(let E=x;E<=S;E++){if(a&&d-h<=1.4&&b(m,E)&&b(g,E)){let _=y(m,E),M=y(g,E);if(Math.abs(this.ht[_]-this.ht[M])<.3&&r(_,M,o.y1+.35)&&r(_,M,o.y1+1.3)){let I=g-m+2.2;this.addLink(_,M,"vault",o.y1,I),this.addLink(M,_,"vault",o.y1,I)}}if(c)for(let[_,M]of[[m,Math.ceil(h+.05-u-.5)],[g,Math.floor(d-.05-u-.5)]]){if(!b(_,E)||!b(M,E))continue;let I=y(_,E),R=y(M,E),D=this.ht[R]-this.ht[I];Math.abs(this.ht[R]-o.y1)>.05||D<.6||D>1.3||!r(I,R,o.y1+.4)||!r(I,R,o.y1+1.4)||(this.addLink(I,R,"climb",o.y1,3.6),this.addLink(R,I,"drop",o.y1,2.6))}}}}}idx(e,t){let n=Math.floor(e-this.x0),i=Math.floor(t-this.z0);return n<0||i<0||n>=this.w||i>=this.h?-1:i*this.w+n}blocked(e,t){let n=this.idx(e,t);return n<0||this.blk[n]===1}height(e,t){let n=this.idx(e,t);return n<0?0:this.ht[n]}center(e){return{x:this.x0+e%this.w+.5,z:this.z0+(e/this.w|0)+.5,y:this.ht[e]}}snap(e,t){let n=this.idx(e,t);return n<0||this.blk[n]?null:this.center(n)}near(e,t){let n=this.idx(e,t);if(n>=0&&!this.blk[n])return n;let i=-1,r=1e9;for(let o=1;o<=8&&i<0;o++)for(let a=-o;a<=o;a++)for(let c=-o;c<=o;c++){if(Math.max(Math.abs(a),Math.abs(c))!==o)continue;let l=this.idx(e+a,t+c);if(l>=0&&!this.blk[l]){let h=a*a+c*c;h<r&&(r=h,i=l)}}return i}nearest(e,t){let n=this.near(e,t);return n<0?null:this.center(n)}line(e,t){let n=t.x-e.x,i=t.z-e.z,r=Math.hypot(n,i);if(r<.01)return!0;let o=Math.ceil(r/.35),a=-i/r*.3,c=n/r*.3,l=this.height(e.x,e.z);for(let h=0;h<=o;h++){let d=e.x+n*h/o,u=e.z+i*h/o;if(this.blocked(d,u)||this.blocked(d+a,u+c)||this.blocked(d-a,u-c))return!1;let f=this.height(d,u);if(Math.abs(f-l)>.56||Math.abs(this.height(d+a,u+c)-f)>.56||Math.abs(this.height(d-a,u-c)-f)>.56)return!1;l=f}return!0}path(e,t,n,i,r=1e9){let o=this.near(e,t),a=this.near(n,i);if(o<0||a<0)return null;let c=this.w,l=this.h,h=this.blk,d=this.gs,u=this.pa,f=this.st,p=this.cl,v=this.ht,m=this.via,g=++this.stamp,x=this.hk,S=this.hv;x.length=S.length=0;let y=a%c,b=a/c|0,E=z=>{let H=Math.abs(z%c-y),B=Math.abs((z/c|0)-b);return H+B-.586*Math.min(H,B)},_=(z,H)=>{let B=x.length;for(x.push(z),S.push(H);B>0;){let ee=B-1>>1;if(x[ee]<=z)break;x[B]=x[ee],S[B]=S[ee],B=ee}x[B]=z,S[B]=H},M=()=>{let z=S[0],H=x.pop(),B=S.pop(),ee=x.length;if(ee){let X=0;for(;;){let Y=X*2+1;if(Y>=ee||(Y+1<ee&&x[Y+1]<x[Y]&&Y++,x[Y]>=H))break;x[X]=x[Y],S[X]=S[Y],X=Y}x[X]=H,S[X]=B}return z},I=(z,H,B,ee)=>{f[H]===g&&B>=d[H]||(f[H]=g,d[H]=B,u[H]=z,m[H]=ee,_(B+E(H),H))};d[o]=0,u[o]=-1,f[o]=g,m[o]=null,_(E(o),o);let R=0,D=o===a;for(;x.length&&!D;){let z=M();if(z===a){D=!0;break}if(p[z]===g)continue;if(p[z]=g,++R>14e3||d[z]>r)return null;let H=z%c,B=z/c|0,ee=v[z];for(let Y=0;Y<8;Y++){let te=H+Dy[Y],_e=B+Uy[Y];if(te<0||_e<0||te>=c||_e>=l)continue;let Me=_e*c+te;h[Me]||Math.abs(v[Me]-ee)>.56||Y>3&&(h[B*c+te]||h[_e*c+H])||I(z,Me,d[z]+(Y>3?1.414:1),null)}let X=this.links.get(z);if(X)for(let Y of X)I(z,Y.to,d[z]+Y.cost,Y)}if(!D)return null;let O=[];for(let z=a;z!==-1;z=u[z]){let H=this.center(z);m[z]&&(H.link=m[z]),O.push(H)}if(O.reverse(),this.idx(n,i)===a&&(O[O.length-1].x=n,O[O.length-1].z=i),O.length<2)return O;let W=[],L=0;for(;L<O.length-1;){if(O[L+1].link){W.push(O[L+1]),L++;continue}let z=Math.min(O.length-1,L+40);for(let H=L+1;H<=z;H++)if(O[H].link){z=H-1;break}for(;z>L+1&&!this.line(O[L],O[z]);)z--;W.push(O[z]),L=z}return W.cost=d[a],W}};function Oy(s,e){let t=[],n=(i,r,o,a=.27)=>{for(let c of s)if(c.solid&&c.y1>o+.5&&c.y0<o+1.6&&i+a>c.x0&&i-a<c.x1&&r+a>c.z0&&r-a<c.z1)return!1;return!0};for(let i of s){if(!i.solid||!i.sight||!i.bullet||i.walk||i.nocover)continue;let r=i.x1-i.x0,o=i.z1-i.z0,a=(i.x0+i.x1)/2,c=(i.z0+i.z1)/2;if(!(Math.max(r,o)<.8||Math.max(r,o)>70))for(let[l,h]of[[1,0],[-1,0],[0,1],[0,-1]]){let d=l?o:r,u=l?0:1,f=l?1:0,p=a+l*r/2,v=c+h*o/2,m=d<=.95?[[0,[1,-1]]]:[[d/2-.3,[1]],[-(d/2-.3),[-1]]];if(d>3.2)for(let g=-(d/2)+1.6;g<d/2-1.5;g+=1.7)m.push([g,[]]);for(let[g,x]of m){let S=p+l*.48+u*g,y=v+h*.48+f*g;if(e.idx(S,y)<0)continue;let b=e.height(S,y),E=i.y1-b;if(E<.85||i.y0>b+.45||!n(S,y,b))continue;let _=E>=1.6,M=e.nearest(S,y);if(!M||Math.hypot(M.x-S,M.z-y)>1.5||Math.abs(M.y-b)>.3||!n((S+M.x)/2,(y+M.z)/2,b,.2))continue;let I=x.filter(R=>n(S+u*R*.62,y+f*R*.62,b,.18)&&n(S+u*R*.62-l*.5,y+f*R*.62-h*.5,b,.12));!I.length&&_||t.push({x:S,z:y,y:b,nx:l,nz:h,tx:u,tz:f,sides:I,over:!_,high:_,cell:M,id:t.length,user:null})}}}return t}function qt(s,e,t,n,i,r,o,a,c=[],l=.3,h={}){let d=i===o,u=d?n:i,f=d?r:o,p=(m,g,x,S)=>{if(g-m<.02||S-x<.02)return;let y=(m+g)/2,b=g-m;d?s.box(e,t,y,x,i,b,S-x,l,h):s.box(e,t,n,x,y,l,S-x,b,h)},v=u-l/2;for(let m of[...c].sort((g,x)=>g.a-x.a))p(v,m.a,0,a),m.sill&&p(m.a,m.b,0,m.sill),p(m.a,m.b,m.top??2.3,a),v=m.b;p(v,f+l/2,0,a)}function kh(s,e,t,n,i,r,o,a,c={},l=.3){qt(s,e,t,n,i,r,i,a,c.n,l),qt(s,e,t,n,o,r,o,a,c.s,l),qt(s,e,t,n,i,n,o,a,c.w,l),qt(s,e,t,r,i,r,o,a,c.e,l)}function vt(s,e,t,n=1,i=0,r=6114356){s.box("wood",r,e,i,t,n,n,n,{rot:0})}function Wn(s,e,t,n=4872776){s.geo("metal",n,new gt(.33,.33,1,10),Yt(e,.5,t)),s.collider(e-.33,0,t-.33,e+.33,1,t+.33)}function wr(s,e,t,n,i){let r=i?n:.75,o=i?.75:n;s.box("plain",6971462,e,0,t,r,.7,o,{col:!1}),s.box("plain",6248255,e,.7,t,r*.96,.35,o*.7,{col:!1}),s.collider(e-r/2,0,t-o/2,e+r/2,1.05,t+o/2)}function Fy(s,e,t,n,i,r=1){let o=n?6.1:2.5,a=n?2.5:6.1;for(let c=0;c<r;c++)s.box("metal",i,e+(c?.15:0),c*2.6,t,o,2.6,a,{tint:.2})}function Gl(s,e,t,n,i=4015410,r=5198656){let o=Math.cos(n),a=Math.sin(n),c=(p,v)=>[e+p*o+v*a,t-p*a+v*o],l=(p,v,m,g,x,S,y,b)=>{let[E,_]=c(m,x);s.box(p,v,E,g,_,S,y,b,{rot:n,col:!1})};l("plain",1842463,0,.55,0,1.2,.35,6.2),l("plain",i,0,.9,-2.3,2.3,1.75,1.7),l("plain",i,0,.9,-3.5,2.1,.9,.9),l("plain",1119770,0,1.75,-3.16,1.9,.7,.04),l("plain",i,0,.95,1,2.4,.25,4.3),l("plain",r,0,1.2,1,2.3,1.6,4.2);for(let p of[-2.6,.3,2.2])for(let v of[-1.05,1.05]){let[m,g]=c(v,p);s.geo("plain",1052946,new gt(.5,.5,.35,10),Yt(m,.5,g,0,n,Math.PI/2))}let h=Math.abs(o)*1.2+Math.abs(a)*3.3,d=Math.abs(a)*1.2+Math.abs(o)*3.3,[u,f]=c(0,-.4);s.collider(u-h,0,f-d,u+h,2.8,f+d)}function ip(s,e,t,n=!0){let i=s.rng,r=7+i()*5,o=.2+i()*.16;if(s.geo("wood",3483935,new gt(o*.55,o,r,6),Yt(e,r/2,t),{uv:2}),n&&s.collider(e-o,0,t-o,e+o,r,t+o),i()<.72)for(let a=0;a<3;a++){let c=r*.34+a*r*.22,l=(2.5-a*.65)*(.8+i()*.4);s.geo("grass",1781020,new lr(l,r*.36,7),Yt(e,c+r*.18,t,0,i()*6,0),{uv:3})}else for(let a=0;a<3;a++)s.geo("grass",2505248,new hr(1.5+i()*.9,0),Yt(e+(i()-.5)*1.8,r*.78+(i()-.5)*1.6,t+(i()-.5)*1.8),{uv:2})}function Fh(s,e,t,n,i=!0){let r=s.rng,o=n*(.8+r()*.5),a=n*(.6+r()*.5),c=n*(.8+r()*.5);s.geo("concrete",4672332,new mo(1,0),Yt(e,a*.3,t,r()*3,r()*3,r()*3,o,a,c),{uv:2}),i&&s.collider(e-o*.72,0,t-c*.72,e+o*.72,a*.95,t+c*.72)}function zy(s,e,t){let n=s.rng;for(let i=0;i<3;i++)s.geo("grass",2241823,new hr(.65+n()*.35,0),Yt(e+(n()-.5)*.9,.5+n()*.3,t+(n()-.5)*.9,n()*3,n()*3,0),{uv:2});s.collider(e-.8,0,t-.8,e+.8,1.3,t+.8,{solid:!1,bullet:!1})}function $i(s,e,t,n,i,r,o,a,c){let l=new ln(t,n,i,1.6);return l.position.set(r,o,a),e.add(l),c&&s.dyn.push({l,base:n,kind:c}),l}function By(s,e,t){let n=s.rng;s.box("grass",3095847,0,-1,0,180,1,180,{col:!1,tint:0});let i=[[-6,62],[-8,36],[0,18],[0,2]];for(let d=0;d<i.length-1;d++){let[u,f]=i[d],[p,v]=i[d+1],m=p-u,g=v-f;s.box("dirt",4800048,(u+p)/2,0,(f+v)/2,3.6,.02+d*.004,Math.hypot(m,g)+2,{rot:Math.atan2(m,g),col:!1,tint:0})}s.box("dirt",4602927,0,0,-12,37,.015,31,{col:!1,tint:0});let r={sight:!1,bullet:!1},o=(d,u,f,p,v)=>{qt(s,"fence",9080982,d,u,f,p,2.4,v.map(x=>({...x,top:99})),.1,r);let m=u===p,g=Math.round((m?f-d:p-u)/3.7);for(let x=0;x<=g;x++){let S=(m?d:u)+(m?f-d:p-u)*x/g;v.some(y=>S>y.a-.2&&S<y.b+.2)||s.box("plain",3948612,m?S:d,0,m?u:S,.12,2.5,.12,{col:!1})}};o(-18.5,3.5,18.5,3.5,[{a:-3,b:3}]),o(-18.5,-27.5,18.5,-27.5,[{a:-14,b:-10}]),o(-18.5,-27.5,-18.5,3.5,[{a:-8,b:-5}]),o(18.5,-27.5,18.5,3.5,[{a:-14,b:-10}]),kh(s,"wood",4931635,-14.5,-24.5,-5.5,-16.5,3,{s:[{a:-11,b:-9}],w:[{a:-22,b:-20}],e:[{a:-21.5,b:-19.5,sill:1,top:2.1}]}),s.box("metal",3422774,-10,3,-20.5,9.8,.18,8.8),s.box("wood",4011049,-10,0,-20.5,9,.04,8,{col:!1}),s.box("wood",5917238,-7.3,0,-23.3,2,.8,.9),s.box("wood",4470824,-12.6,0,-23.7,2.2,1.9,.5),s.box("emis",16767392,-10,2.78,-20.5,.25,.06,.25,{col:!1,tint:0}),$i(e,t,16763274,14,13,-10,2.5,-20.5),kh(s,"wood",4538938,5.5,-24.5,15.5,-17.5,3,{s:[{a:9,b:11}],e:[{a:-22,b:-20}],w:[{a:-22.5,b:-20.5,sill:1,top:2.1}]}),s.box("metal",3422774,10.5,3,-21,10.8,.18,7.8),s.box("plain",4475448,7,0,-23.4,.95,.6,2),s.box("plain",4475448,14.2,0,-19.2,.95,.6,2),s.box("emis",12593696,7.5,1.3,-17.3,.3,.4,.06,{col:!1,tint:0});for(let[d,u]of[[-1.4,-1.4],[1.4,-1.4],[-1.4,1.4],[1.4,1.4]])s.box("wood",4142376,14+d,0,-1+u,.25,5,.25),s.box("wood",4142376,14+d,5.2,-1+u,.12,2,.12,{col:!1});s.box("wood",4865582,14,5,-1,3.4,.2,3.4),s.box("metal",3422774,14,7.2,-1,3.9,.15,3.9);for(let d of[-1,1])s.box("wood",4865582,14+d*1.65,5.2,-1,.08,.9,3.4,{col:!1}),s.box("wood",4865582,14,5.2,-1+d*1.65,3.4,.9,.08,{col:!1});s.box("emis",16773320,12.5,5.9,.6,.3,.3,.3,{col:!1,tint:0});let a=new xs(16771520,500,60,.42,.6,1.5);a.position.set(12.5,6,.6),a.target.position.set(1,0,11),t.add(a,a.target),Gl(s,-9,-6,0),Gl(s,5,-10.5,Math.PI/2),vt(s,-2,-20.5,1.2),vt(s,-.8,-21.6,1),vt(s,-2,-20.5,.8,1.2),vt(s,10,-12,1.2),vt(s,11.3,-12.3,1),vt(s,-15,-1,1.2),vt(s,-15,-2.4,1),vt(s,15.5,-8,1.1),wr(s,-5.5,6,3.4,!0),wr(s,5.5,6,3.4,!0),wr(s,-3,-13,3,!1),wr(s,9,.5,3,!0),Wn(s,1,-22.5),Wn(s,1.8,-22.9,5914676),Wn(s,-16.5,-12),Wn(s,16.5,-24.5),s.box("metal",4936008,2.5,0,-16,1.8,1.2,1),s.box("plain",2895665,3.6,0,-16,.1,3.6,.1,{col:!1}),s.box("emis",16769192,3.6,3.6,-16,.3,.12,.3,{col:!1,tint:0}),$i(e,t,16766106,30,20,3.6,3.4,-16),s.box("plain",2895665,-16,0,-25,.12,9,.12,{col:!1}),qt(s,"concrete",5790295,-42.5,4.5,-34.5,4.5,2.6,[{a:-39,b:-37,top:99}]),qt(s,"concrete",5790295,-42.5,4.5,-42.5,11.5,1.4),qt(s,"concrete",5790295,-34.5,4.5,-34.5,9.5,2.6,[{a:6,b:7.5,sill:1,top:2}]),qt(s,"concrete",5790295,-42.5,11.5,-39.5,11.5,2.2),Fh(s,-36,11,.8,!1),Fh(s,-40.5,2.5,.7,!1),vt(s,-41,9.8,1);for(let[d,u,f]of[[32.5,17.5,.9],[38.5,15.5,.4]])s.geo("plain",5001019,new gt(.05,2,1.9,4),Yt(d,.95,u,0,f,0)),s.collider(d-1.2,0,u-1.2,d+1.2,1.9,u+1.2);s.geo("wood",2760729,new gt(.12,.12,1,6),Yt(35,.12,12,0,.5,Math.PI/2)),s.geo("wood",2760729,new gt(.12,.12,1,6),Yt(35,.14,12,0,2.1,Math.PI/2)),s.geo("emis",16747056,new lr(.22,.5,5),Yt(35,.4,12),{tint:0}),$i(e,t,16747066,26,16,35,.9,12,"fire"),s.geo("wood",3483935,new gt(.3,.3,2.6,7),Yt(33,.3,10.5,0,.3,Math.PI/2)),s.collider(31.8,0,10.1,34.2,.6,10.9),vt(s,37.5,11,.9),s.box("dirt",4866099,44,0,-46,9,.02,9,{col:!1,tint:0}),vt(s,48,-50,1.1),vt(s,40,-50.5,.9);let c=[[-6.6,54,5],[-38,8,7.5],[35,14,7.5],[44,-46,7]],l=(d,u,f=0)=>{if(d>-21-f&&d<21+f&&u>-30-f&&u<6+f)return!1;for(let[p,v,m]of c)if(Math.hypot(d-p,u-v)<m+f)return!1;for(let p=0;p<i.length-1;p++){let[v,m]=i[p],[g,x]=i[p+1],S=g-v,y=x-m,b=Math.max(0,Math.min(1,((d-v)*S+(u-m)*y)/(S*S+y*y)));if(Math.hypot(d-v-S*b,u-m-y*b)<3+f)return!1}return!0},h=[];for(let d=0;d<900&&h.length<250;d++){let u=(n()-.5)*114,f=(n()-.5)*114;!l(u,f)||h.some(p=>Math.hypot(p[0]-u,p[1]-f)<2.6)||(h.push([u,f]),ip(s,u,f))}for(let d=0;d<150;d++){let u=d/150*6.283,f=60+n()*9,p=Math.cos(u),v=Math.sin(u),m=f/Math.max(Math.abs(p),Math.abs(v));ip(s,p*m,v*m,!1)}for(let d=0,u=0;d<200&&u<24;d++){let f=(n()-.5)*108,p=(n()-.5)*108;l(f,p,1)&&(Fh(s,f,p,1+n()*1.3),u++)}for(let d=0,u=0;d<200&&u<10;d++){let f=(n()-.5)*100,p=(n()-.5)*100;if(!l(f,p,2))continue;let v=n()*3.14,m=4+n()*2;s.geo("wood",3155228,new gt(.36,.42,m,7),Yt(f,.36,p,0,v,Math.PI/2),{uv:2});let g=Math.abs(Math.cos(v))*m/2+.3,x=Math.abs(Math.sin(v))*m/2+.3;s.collider(f-g,0,p-x,f+g,.75,p+x),u++}for(let d=0,u=0;d<300&&u<55;d++){let f=(n()-.5)*110,p=(n()-.5)*110;l(f,p,.5)&&(zy(s,f,p),u++)}for(let[d,u,f,p]of[[-59,-59,59,-58],[-59,58,59,59],[-59,-59,-58,59],[58,-59,59,59]])s.collider(d,0,u,f,12,p,{sight:!1});return{name:"FOREST OUTPOST",bounds:{x0:-60,x1:60,z0:-60,z1:60},spawn:{x:-6.6,z:54,yaw:0},env:{fog:[659479,.021],bg:461586,hemi:[8427200,1844246,1.9],moon:[10795494,2.6,[-35,60,30]],viewRange:40,detect:.75,shotMul:1,amb:"forest"},objective:{pos:[-7.3,.8,-23.3],kind:"intel",hold:0,prompt:"Take intelligence package",text:"Locate the intelligence package in the outpost command hut",done:"INTEL SECURED"},extraction:{pos:[44,0,-46],text:"Reach the extraction flare in the north-east clearing"},routes:[{p:[[-3,-3],[-3,-14],[8,-14],[8,-3]],must:1},{p:[[0,7],[3.5,8]]},{p:[[-22,2],[-22,-29],[-10,-31]]},{p:[[22,-26],[22,2],[12,8]]},{p:[[-8,20],[-8,12],[1,10]]},{p:[[-36,9],[-39,2],[-32,2]]},{p:[[34,9],[39,11],[30,13]]},{p:[[10,-36],[30,-40],[36,-30],[20,-31]]},{p:[[-9,-14],[-3,-18]],must:1},{p:[[25,35],[40,30],[30,23]]}],posts:{objective:[[-9.5,-14.5],[-16.5,-21],[-10,-20.5],[-3.5,-19]],entrance:[[-4.5,1.5,"south gate"],[16,-12,"east breach"],[-12,-25.6,"north-west gap"],[-16.5,-6.5,"west gap"],[12,2,"watchtower"]]},panel:{x:7.5,z:-16.4,face:[0,-1],n:"barracks alarm"},guards:10,reinforce:[{x:-30,z:-55,n:"north treeline"},{x:-54,z:-18,n:"western treeline"},{x:-44,z:46,n:"south-west treeline"}],pickups:[["med",12.6,-23.6],["med",36.6,16.4],["ammo",-40,6.5],["ammo",-1,-19]]}}function ky(s,e,t){let n=s.rng,i=8,r=5660006,o=6579807;s.box("concrete",3684667,0,-1,0,120,1,80,{col:!1,tint:0}),s.box("concrete",5921886,-7.5,0,0,56,.02,51,{col:!1,tint:0}),kh(s,"concrete",5264213,-47.5,-31.5,47.5,31.5,3.6,{},.4),s.box("metal",3422784,47.2,0,0,.15,3.2,7,{col:!1}),qt(s,"metal",r,-35.5,-25.5,20.5,-25.5,i,[{a:4,b:6,top:2.4}],.4),qt(s,"metal",r,-35.5,25.5,20.5,25.5,i,[{a:-8,b:-6,top:2.4}],.4),qt(s,"metal",r,-35.5,-25.5,-35.5,25.5,i,[{a:-1,b:1,top:2.4}],.4),qt(s,"metal",r,20.5,-25.5,20.5,25.5,i,[{a:-13,b:-7,top:4.6},{a:7,b:13,top:4.6}],.4),s.box("metal",2895926,-7.5,i,0,57,.3,52);for(let l=-31;l<=17;l+=8)s.box("plain",2303530,l,7.3,0,.25,.5,51,{col:!1});qt(s,"concrete",o,-20.5,-25.5,-20.5,-12.5,4,[{a:-20,b:-18}]),qt(s,"concrete",o,-35.5,-12.5,-20.5,-12.5,4,[{a:-29,b:-27},{a:-25,b:-22.5,sill:1,top:2.2}]),s.box("concrete",5592922,-28,4,-19,15.3,.25,13.3),vt(s,-24,-16,1.2,4.25),vt(s,-30,-21,1,4.25,5200456),s.box("metal",4080714,-34.3,0,-22,1,.8,2.4);for(let l=-33;l<=-24;l+=1.5)s.box("plain",1382170,l,0,-24.7,.9,2.1,.8),s.box("emis",n()<.5?3735418:16756784,l-.2,1.5+n()*.3,-24.28,.06,.03,.02,{col:!1,tint:0});s.box("metal",4541008,-26.5,0,-18,2.2,.8,1.1),qt(s,"concrete",o,-35.5,10.5,-20.5,10.5,i,[{a:-29,b:-27,top:2.6}]),qt(s,"concrete",o,-20.5,10.5,-20.5,25.5,i,[{a:17,b:19,top:2.6}]),s.box("metal",4477515,-31.5,0,19,3,2.6,5.5),s.box("metal",3819072,-31.5,2.6,19,1.6,1.2,2,{col:!1}),s.geo("metal",5919558,new gt(1.2,1.2,3.4,12),Yt(-24.5,1.7,22.5)),s.collider(-25.6,0,21.4,-23.4,3.4,23.6),s.box("metal",4477515,-25,0,13.2,2.6,1.5,1.4),s.box("emis",16750648,-25,1.1,13.92,.5,.2,.02,{col:!1,tint:0}),s.geo("metal",4869973,new gt(.16,.16,14,8),Yt(-28,5.2,24.8,0,0,Math.PI/2));for(let l of[-15,-11,-7])for(let h of[-12,12]){for(let d of[h-7.9,h,h+7.9])for(let u of[-.55,.55])s.box("plain",3033706,l+u,0,d,.1,6.9,.1,{col:!1});for(let d of[.12,2.3,4.4,6.3])if(s.box("plain",9064998,l,d,h,1.25,.1,16,{col:!1}),!(d>6))for(let u=h-7.8;u<h+7.2;){let f=.9+n()*1.1,p=d<4?1.75+n()*.3:.6+n()*1.1;(d<4||n()<.7)&&s.box("wood",n()<.5?7232064:5525567,l,d+.1,u+f/2,1.05,p,f,{col:!1,tint:.3}),u+=f+(d<4?.04:.3)}s.collider(l-.62,0,h-8,l+.62,6.9,h+8)}let a=[4282730,7224372,4481098,8153660,5133144];[[6,-19,1,2],[14.5,-18,0,1],[8,-12,1,1],[3,-4,0,1],[11,0,1,2],[5,9,1,1],[13,15,0,2],[4,19.5,1,1],[30,-24,1,1],[36,-15,0,2],[31,8,1,1],[40,22,1,1],[26,-2,0,1]].forEach(([l,h,d,u],f)=>Fy(s,l,h,!!d,a[f%5],u)),s.box("plain",9073696,-24,0,5,1.3,1.5,2.2),s.box("plain",1842463,-24,0,3.4,1.1,2.3,.15,{col:!1});for(let[l,h,d]of[[-31,-8,1.3],[-29.6,-8.2,1],[-31,-8,.9],[-30,6.5,1.2],[-3,22.5,1.2],[-1.6,22.8,1],[-2.5,-9,1.2],[17,-3,1.1],[9.5,5,1],[-18.5,-6,1.1],[-3,12,1.2]])vt(s,l,h,d,d===.9?1.3:0,n()<.5?6114356:5002304);Wn(s,-22,-9.5,3493994),Wn(s,-22.8,-8.8,6965812),Wn(s,18.5,3,3493994),Wn(s,-4,-23.5,6965812),Wn(s,1,14,3493994),s.box("concrete",6316644,13.9,0,22.65,11.8,1,5.3,{walk:!0}),[[7.8,.83],[7.4,.67],[7,.5],[6.6,.33],[6.2,.17]].forEach(([l,h])=>s.box("concrete",5790300,l,0,22.5,.4,h,3,{walk:!0,tint:0}));for(let l=8.2;l<=19.6;l+=1.9)s.box("plain",9073696,l,1,20.08,.06,1,.06,{col:!1});s.box("plain",9073696,13.9,1.95,20.08,11.6,.06,.06,{col:!1}),s.box("plain",9073696,13.9,1.5,20.08,11.6,.04,.04,{col:!1}),vt(s,17.3,24.2,1.1,1),vt(s,11,24.4,1,1,5002304),vt(s,14.5,21,1,1),s.box("emis",12593696,-20.3,1.3,-15,.06,.4,.3,{col:!1,tint:0}),s.box("metal",3751492,-3,5,-24.3,32,.12,1.7);for(let l=-19;l<=13;l+=4)s.box("plain",2764081,l,0,-23.55,.12,5,.12,{col:!1}),s.box("plain",2764081,l,5.1,-23.5,.06,1,.06,{col:!1});s.box("plain",2764081,-3,6.05,-23.5,32,.06,.06,{col:!1}),s.geo("metal",6048314,new gt(.22,.22,54,8),Yt(-7.5,6.6,24.6,0,0,Math.PI/2)),s.geo("metal",4805210,new gt(.15,.15,50,8),Yt(-34.9,6.2,0,Math.PI/2,0,0));let c=(l,h,d,u,f,p,v)=>{s.box("plain",1710877,l,h+.1,d,.03,7.25-h,.03,{col:!1}),s.box("plain",2369322,l,h+.06,d,.7,.12,.7,{col:!1}),s.box("emis",u,l,h,d,.5,.06,.5,{col:!1,tint:0}),$i(e,t,u,f,p,l,h-.3,d,v)};c(-3,6.2,0,16769712,95,26),c(9,6.2,-15,16769712,80,24,"flicker"),c(10,6.2,12,16769712,80,24),c(-13,6.2,-22.5,14674175,50,20),c(-27,6.2,-1,16769712,70,22),c(-13,6.2,22.5,14674175,36,18),s.box("emis",13624575,-28,3.94,-19,1.2,.04,.3,{col:!1,tint:0}),$i(e,t,12375807,20,14,-28,3.5,-19),$i(e,t,16751178,22,15,-28,4,17);for(let[l,h]of[[31,-11],[35,14]])s.box("plain",2764081,l,0,h,.18,6,.18),s.box("emis",16773328,l,5.9,h+.3,.3,.1,.5,{col:!1,tint:0}),$i(e,t,16772300,70,26,l,5.6,h+.3);return s.box("emis",16773328,-35.9,4.4,4,.1,.2,.5,{col:!1,tint:0}),$i(e,t,16772300,40,20,-36.6,4.2,4),Gl(s,27,19,Math.PI/2,3817286,3093304),Gl(s,-43.5,-11,0,2895667,2895667),s.box("metal",3494202,-38,0,7.5,1.4,1.3,2.4),s.box("metal",3494202,-12,0,-30.2,2.4,1.3,1.4),s.box("metal",3494202,6,0,30.2,2.4,1.3,1.4),vt(s,-25,30.3,1.2),vt(s,14,-30.3,1.2),vt(s,-40,13,1.1),vt(s,44,-8,1.2),vt(s,23,-27,1.2),Wn(s,22.5,14.5),Wn(s,-45.5,10),wr(s,24.5,-10,3,!1),wr(s,24.5,10,3,!1),s.box("emis",1456672,-43,0,4,3.4,.03,3.4,{col:!1,tint:0}),{name:"INDUSTRIAL WAREHOUSE",bounds:{x0:-48,x1:48,z0:-32,z1:32},spawn:{x:44.5,z:27,yaw:Math.PI/2},env:{fog:[395275,.012],bg:329482,hemi:[5924480,1447964,.75],moon:[9414358,1.5,[30,60,-22]],viewRange:44,detect:1,shotMul:.85,amb:"warehouse"},objective:{pos:[-34.3,.8,-22],kind:"terminal",hold:3,prompt:"Hold to access secured terminal",text:"Access the secured terminal in the warehouse office",done:"DATA EXTRACTED"},extraction:{pos:[-43,0,4],text:"Exfiltrate through the west back lot"},routes:[{p:[[-18,0],[-2,0],[-2,-22],[-18,-22]]},{p:[[-18,2],[-18,22],[-3,20],[-2,3]]},{p:[[11,-22],[17.5,-22],[17.5,-9],[12,-6]]},{p:[[9,4],[17,10],[12,22.5],[18,22.5]]},{p:[[-28,-18],[-23.5,-15]],must:1},{p:[[-28,-8],[-28,5],[-23,-1]],must:1},{p:[[-28,14],[-23,18],[-28,23]]},{p:[[24,-20],[34,-20.5],[42,-9],[30,-6]]},{p:[[-30,-28.5],[15,-28.5]]},{p:[[-30,28.5],[2,28.5]]},{p:[[-41,-4],[-41,13],[-38,1]]}],posts:{objective:[[-28,-19],[-27.5,-11.3],[-19.2,-19],[-24,-21]],entrance:[[18,-10,"north loading door"],[18,10,"south loading door"],[-33,0,"west door"],[5,-23.5,"north door"],[-7,23.5,"south door"]]},panel:{x:-19.5,z:-15,face:[-1,0],n:"office alarm"},guards:10,reinforce:[{x:45,z:-1,n:"east gate"},{x:45,z:-28,n:"north-east service gate"}],pickups:[["med",-33.8,12.2],["med",-22,-24],["ammo",-17.6,-2.6],["ammo",23,16]]}}function sp(s,e){let t=new zh,n={id:s,dyn:[]};Object.assign(n,s==="forest"?By(t,n,e):ky(t,n,e)),n.meshes=t.finish(e),n.colliders=t.col,n.nav=new Bh(t.col,n.bounds),n.cover=Oy(t.col,n.nav);let i=n.env;e.fog=new to(i.fog[0],i.fog[1]),e.background=new we(i.bg),n.hemi=new Zi(i.hemi[0],i.hemi[1],i.hemi[2]),e.add(n.hemi);let r=n.moon=new kn(i.moon[0],i.moon[1]);n.moonDir=new P(...i.moon[2]).normalize(),r.castShadow=!0,r.shadow.mapSize.set(2048,2048);let o=r.shadow.camera;o.left=o.bottom=-48,o.right=o.top=48,o.near=1,o.far=220,r.shadow.bias=-6e-4,r.shadow.normalBias=.06,e.add(r,r.target);let a=[],c=Hh(7);for(let d=0;d<500;d++){let u=c()*6.283,f=.08+c()*.9,p=Math.sqrt(1-f*f);a.push(Math.cos(u)*p*380,f*380,Math.sin(u)*p*380)}let l=new at;l.setAttribute("position",new Ye(a,3)),e.add(new vi(l,new Jn({color:11452392,size:1.4,sizeAttenuation:!1,fog:!1})));let h=new Ge(new po(13,24),new lt({color:14674175,fog:!1}));return h.position.copy(n.moonDir).multiplyScalar(360),h.lookAt(0,0,0),e.add(h),n}function Gh(s,e){if(e===dh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Mr||e===Po){let t=s.getIndex();if(t===null){let r=[],o=s.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Mr)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function Fo(s){let e=new Map,t=new Map,n=s.clone();return rp(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function rp(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)rp(s.children[n],e.children[n],t)}var Vl=class extends ei{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Zh(t)}),this.register(function(t){return new Jh(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new ou(t)}),this.register(function(t){return new au(t)}),this.register(function(t){return new lu(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new eu(t)}),this.register(function(t){return new tu(t)}),this.register(function(t){return new nu(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new iu(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new ru(t)}),this.register(function(t){return new su(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new Wl(t,Ke.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Wl(t,Ke.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new cu(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Ci.extractUrlBase(e);o=Ci.resolveURL(l,this.path)}else o=Ci.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new dr(this.manager);c.setPriority(this.priority),c.setCache(this.cache),c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===hp){try{o[Ke.KHR_BINARY_GLTF]=new hu(e)}catch(d){i&&i(d);return}r=JSON.parse(o[Ke.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new xu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let d=this.pluginCallbacks[h](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let d=r.extensionsUsed[h],u=r.extensionsRequired||[];switch(d){case Ke.KHR_MATERIALS_UNLIT:o[d]=new Yh;break;case Ke.KHR_DRACO_MESH_COMPRESSION:o[d]=new uu(r,this.dracoLoader);break;case Ke.KHR_TEXTURE_TRANSFORM:o[d]=new du;break;case Ke.KHR_MESH_QUANTIZATION:o[d]=new fu;break;default:u.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function Gy(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function Mt(s,e,t){let n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var Ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},qh=class{constructor(e){this.parser=e,this.name=Ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new we(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],rn);let d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new kn(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ln(h),l.distance=d;break;case"spot":l=new xs(h),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),oi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},Yh=class{constructor(){this.name=Ke.KHR_MATERIALS_UNLIT}getMaterialType(){return lt}extendParams(e,t,n){let i=[];e.color=new we(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],rn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Tt))}return Promise.all(i)}},Kh=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Mt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Zh=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Mt(this.parser,e,this.name)!==null?an:null}extendMaterialParams(e,t){let n=Mt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ne(r,r)}return Promise.all(i)}},Jh=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Mt(this.parser,e,this.name)!==null?an:null}extendMaterialParams(e,t){let n=Mt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}},$h=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Mt(this.parser,e,this.name)!==null?an:null}extendMaterialParams(e,t){let n=Mt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},jh=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Mt(this.parser,e,this.name)!==null?an:null}extendMaterialParams(e,t){let n=Mt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},Qh=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SHEEN}getMaterialType(e){return Mt(this.parser,e,this.name)!==null?an:null}extendMaterialParams(e,t){let n=Mt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new we(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],rn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Tt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},eu=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Mt(this.parser,e,this.name)!==null?an:null}extendMaterialParams(e,t){let n=Mt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},tu=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_VOLUME}getMaterialType(e){return Mt(this.parser,e,this.name)!==null?an:null}extendMaterialParams(e,t){let n=Mt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new we().setRGB(r[0],r[1],r[2],rn),Promise.all(i)}},nu=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IOR}getMaterialType(e){return Mt(this.parser,e,this.name)!==null?an:null}extendMaterialParams(e,t){let n=Mt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},iu=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Mt(this.parser,e,this.name)!==null?an:null}extendMaterialParams(e,t){let n=Mt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new we().setRGB(r[0],r[1],r[2],rn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Tt)),Promise.all(i)}},su=class{constructor(e){this.parser=e,this.name=Ke.EXT_MATERIALS_BUMP}getMaterialType(e){return Mt(this.parser,e,this.name)!==null?an:null}extendMaterialParams(e,t){let n=Mt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},ru=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Mt(this.parser,e,this.name)!==null?an:null}extendMaterialParams(e,t){let n=Mt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},ou=class{constructor(e){this.parser=e,this.name=Ke.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},au=class{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},lu=class{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},Wl=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,d=i.byteStride,u=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,d,u,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*d);return o.decodeGltfBuffer(new Uint8Array(f),h,d,u,i.mode,i.filter),f})})}else return null}},cu=class{constructor(e){this.name=Ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==Pn.TRIANGLES&&l.mode!==Pn.TRIANGLE_STRIP&&l.mode!==Pn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),d=h.isGroup?h.children:[h],u=l[0].count,f=[];for(let p of d){let v=new ze,m=new P,g=new yt,x=new P(1,1,1),S=new ms(p.geometry,p.material,u);for(let b=0;b<u;b++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,b),c.ROTATION&&g.fromBufferAttribute(c.ROTATION,b),c.SCALE&&x.fromBufferAttribute(c.SCALE,b),S.setMatrixAt(b,v.compose(m,g,x));let y=null;for(let b in c)if(b==="_COLOR_0"){let E=c[b];S.instanceColor=new yi(E.array,E.itemSize,E.normalized)}else if(b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"){if(y===null){let _=S.geometry;y=new at,y.name=_.name;for(let M in _.attributes)y.setAttribute(M,_.attributes[M]);for(let M in _.morphAttributes)y.morphAttributes[M]=_.morphAttributes[M];_.index!==null&&y.setIndex(_.index),y.morphTargetsRelative=_.morphTargetsRelative;for(let M of _.groups)y.addGroup(M.start,M.count,M.materialIndex);_.boundingBox!==null&&(y.boundingBox=_.boundingBox.clone()),_.boundingSphere!==null&&(y.boundingSphere=_.boundingSphere.clone()),y.drawRange.start=_.drawRange.start,y.drawRange.count=_.drawRange.count,y.userData=Object.assign({},_.userData),S.geometry=y}let E=c[b];y.setAttribute(b,new yi(E.array,E.itemSize,E.normalized))}ut.prototype.copy.call(S,p),this.parser.assignFinalMaterial(S),f.push(S)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},hp="glTF",zo=12,op={JSON:1313821514,BIN:5130562},hu=class{constructor(e){this.name=Ke.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,zo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==hp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-zo,r=new DataView(e,zo),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===op.JSON){let l=new Uint8Array(e,zo+o,a);this.content=n.decode(l)}else if(c===op.BIN){let l=zo+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},uu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let d=mu[h]||h.toLowerCase();a[d]=o[h]}for(let h in e.attributes){let d=mu[h]||h.toLowerCase();if(o[h]!==void 0){let u=n.accessors[e.attributes[h]],f=Ar[u.componentType];l[d]=f.name,c[d]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,u){i.decodeDracoFile(h,function(f){for(let p in f.attributes){let v=f.attributes[p],m=c[p];m!==void 0&&(v.normalized=m)}d(f)},a,l,rn,u)})})}},du=class{constructor(){this.name=Ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},fu=class{constructor(){this.name=Ke.KHR_MESH_QUANTIZATION}},Xl=class extends Qn{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,d=(n-t)/h,u=d*d,f=u*d,p=e*l,v=p-l,m=-2*f+3*u,g=f-u,x=1-m,S=g-u+d;for(let y=0;y!==a;y++){let b=o[v+y+a],E=o[v+y+c]*h,_=o[p+y+a],M=o[p+y]*h;r[y]=x*b+S*E+m*_+g*M}return r}},Vy=new yt,pu=class extends Xl{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return Vy.fromArray(r).normalize().toArray(r),r}},Pn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ar={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ap={9728:wt,9729:Nt,9984:Za,9985:yr,9986:bs,9987:Rn},lp={33071:En,33648:js,10497:Zn},Vh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},mu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ji={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Wy={CUBICSPLINE:void 0,LINEAR:us,STEP:hs},Wh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Xy(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new At({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ti})),s.DefaultMaterial}function ws(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function oi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function qy(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let d=e[l];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let d=e[l];if(n){let u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;o.push(u)}if(i){let u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;a.push(u)}if(r){let u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;c.push(u)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],d=l[1],u=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=u),s.morphTargetsRelative=!0,s})}function Yy(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ky(s){let e,t=s.extensions&&s.extensions[Ke.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Xh(t.attributes):e=s.indices+":"+Xh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Xh(s.targets[n]);return e}function Xh(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function gu(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Zy(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Jy=new ze,xu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Gy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?(this.textureLoader=new yo(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new So(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new dr(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return ws(r,a,i),oi(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ke.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(Ci.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=Vh[i.type],a=Ar[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new bt(l,o,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Vh[i.type],l=Ar[i.componentType],h=l.BYTES_PER_ELEMENT,d=h*c,u=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0,v,m;if(f&&f!==d){let g=Math.floor(u/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count,S=t.cache.get(x);S||(v=new l(a,g*f,i.count*f/h),S=new fs(v,f/h),t.cache.add(x,S)),m=new Xi(S,c,u%f/h,p)}else a===null?v=new l(i.count*c):v=new l(a,u,i.count*c),m=new bt(v,c,p);if(i.sparse!==void 0){let g=Vh.SCALAR,x=Ar[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,b=new x(o[1],S,i.sparse.count*g),E=new l(o[2],y,i.sparse.count*c);a!==null&&(m=new bt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let _=0,M=b.length;_<M;_++){let I=b[_];if(m.setX(I,E[_*c]),c>=2&&m.setY(I,E[_*c+1]),c>=3&&m.setZ(I,E[_*c+2]),c>=4&&m.setW(I,E[_*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let u=(r.samplers||{})[o.sampler]||{};return h.magFilter=ap[u.magFilter]||Nt,h.minFilter=ap[u.minFilter]||Rn,h.wrapS=lp[u.wrapS]||Zn,h.wrapT=lp[u.wrapT]||Zn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==wt&&h.minFilter!==Nt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=i.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1,h;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)h=n.getDependency("bufferView",o.bufferView).then(function(u){return new Promise(function(f,p){t.parse(u,f,p)})});else{if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(c).then(function(u){return new Promise(function(f,p){let v=f;t.isImageBitmapLoader===!0&&(v=function(m){let g=new Dt(m);g.needsUpdate=!0,f(g)}),t.load(Ci.resolveURL(u,r.path),v,void 0,p)})})}let d=h.then(function(u){return l===!0&&a.revokeObjectURL(c),oi(u,o),u.userData.mimeType=o.mimeType||Zy(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=d,d}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Ke.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Ke.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[Ke.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Jn,Qt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new ar,Qt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return At}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[Ke.KHR_MATERIALS_UNLIT]){let d=i[Ke.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),l.push(d.extendParams(a,r,t))}else{let d=r.pbrMetallicRoughness||{};if(a.color=new we(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){let u=d.baseColorFactor;a.color.setRGB(u[0],u[1],u[2],rn),a.opacity=u[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",d.baseColorTexture,Tt)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=en);let h=r.alphaMode||Wh.OPAQUE;if(h===Wh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Wh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==lt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ne(1,1),r.normalTexture.scale!==void 0)){let d=r.normalTexture.scale;a.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==lt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==lt){let d=r.emissiveFactor;a.emissive=new we().setRGB(d[0],d[1],d[2],rn)}return r.emissiveTexture!==void 0&&o!==lt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Tt)),Promise.all(l).then(function(){let d=new o(a);return r.name&&(d.name=r.name),oi(d,r),t.associations.set(d,{materials:e}),r.extensions&&ws(i,d,r),d})}createUniqueName(e){let t=ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return cp(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=Ky(l),d=i[h];if(d)o.push(d.promise);else{let u;l.extensions&&l.extensions[Ke.KHR_DRACO_MESH_COMPRESSION]?u=r(l):u=cp(new at,l,t),l.mode===Pn.TRIANGLE_STRIP?u=u.then(f=>Gh(f,Po)):l.mode===Pn.TRIANGLE_FAN&&(u=u.then(f=>Gh(f,Mr))),i[h]={primitive:l,promise:u},o.push(u)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?Xy(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],d=[];for(let f=0,p=h.length;f<p;f++){let v=h[f],m=o[f],g,x=l[f];if(m.mode===Pn.TRIANGLES||m.mode===Pn.TRIANGLE_STRIP||m.mode===Pn.TRIANGLE_FAN||m.mode===void 0){let S=r.isSkinnedMesh===!0,y=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");S&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=S&&y?new ro(v,x):new Ge(v,x),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===Pn.LINES)g=new ao(v,x);else if(m.mode===Pn.LINE_STRIP)g=new gs(v,x);else if(m.mode===Pn.LINE_LOOP)g=new lo(v,x);else if(m.mode===Pn.POINTS)g=new vi(v,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&Yy(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),oi(g,r),m.extensions&&ws(i,g,m),t.assignFinalMaterial(g),d.push(g)}for(let f=0,p=d.length;f<p;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&ws(i,d[0],r),d[0];let u=new St;r.extensions&&ws(i,u,r),t.associations.set(u,{meshes:e});for(let f=0,p=d.length;f<p;f++)u.add(d[f]);return u})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Et(_n.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new _s(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),oi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let d=o[l];if(d){a.push(d);let u=new ze;r!==null&&u.fromArray(r.array,l*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new oo(a,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let d=0,u=i.channels.length;d<u;d++){let f=i.channels[d],p=i.samplers[f.sampler],v=f.target,m=v.node,g=i.parameters!==void 0?i.parameters[p.input]:p.input,x=i.parameters!==void 0?i.parameters[p.output]:p.output;v.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),c.push(this.getDependency("accessor",x)),l.push(p),h.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(d){let u=d[0],f=d[1],p=d[2],v=d[3],m=d[4],g=[];for(let S=0,y=u.length;S<y;S++){let b=u[S],E=f[S],_=p[S],M=v[S],I=m[S];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();let R=n._createAnimationTracks(b,E,_,M,I);if(R)for(let D=0;D<R.length;D++)g.push(R[D])}let x=new Ri(r,void 0,g);return oi(x,i),x})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],d=l[1],u=l[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,Jy)});for(let f=0,p=d.length;f<p;f++)h.add(d[f]);if(h.userData.pivot!==void 0&&d.length>0){let f=h.userData.pivot,p=d[0];h.pivot=new P().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new rr:l.length>1?h=new St:l.length===1?h=l[0]:h=new ut,h!==l[0])for(let d=0,u=l.length;d<u;d++)h.add(l[d]);if(r.name&&(h.userData.name=r.name,h.name=o),oi(h,r),r.extensions&&ws(n,h,r),r.matrix!==void 0){let d=new ze;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let d=i.associations.get(h);i.associations.set(h,{...d})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new St;n.name&&(r.name=i.createUniqueName(n.name)),oi(r,n),n.extensions&&ws(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,d=c.length;h<d;h++){let u=c[h];u.parent!==null?r.add(Fo(u)):r.add(u)}let l=h=>{let d=new Map;for(let[u,f]of i.associations)(u instanceof Qt||u instanceof Dt)&&d.set(u,f);return h.traverse(u=>{let f=i.associations.get(u);f!=null&&d.set(u,f)}),d};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}ji[r.path]===ji.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(a);let h;switch(ji[r.path]){case ji.weights:h=Ei;break;case ji.rotation:h=wi;break;case ji.translation:case ji.scale:h=Yi;break;default:switch(n.itemSize){case 1:h=Ei;break;case 2:case 3:default:h=Yi;break}break}let d=i.interpolation!==void 0?Wy[i.interpolation]:us,u=this._getArrayFromAccessor(n);for(let f=0,p=c.length;f<p;f++){let v=new h(c[f]+"."+ji[r.path],t.array,u,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),o.push(v)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=gu(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof wi?pu:Xl;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function $y(s,e,t){let n=e.attributes,i=new on;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new P(c[0],c[1],c[2]),new P(l[0],l[1],l[2])),a.normalized){let h=gu(Ar[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new P,c=new P;for(let l=0,h=r.length;l<h;l++){let d=r[l];if(d.POSITION!==void 0){let u=t.json.accessors[d.POSITION],f=u.min,p=u.max;if(f!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),u.normalized){let v=gu(Ar[u.componentType]);c.multiplyScalar(v)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new un;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function cp(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(let o in n){let a=mu[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return qe.workingColorSpace!==rn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${qe.workingColorSpace}" not supported.`),oi(s,e),$y(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?qy(s,e.targets,t):s})}var cn={models:{},clips:{},ready:!1},jy={Black:{c:1513755,m:.35,r:.55},DarkMetal:{c:2764081,m:.85,r:.42},Metal:{c:6317419,m:.9,r:.35},LightMetal:{c:10133670,m:.95,r:.25},LightMetal2:{c:8291466,m:.95,r:.3},DarkWood:{c:5978399,m:0,r:.62},Wood:{c:7227430,m:0,r:.6},Glass:{c:791576,m:.9,r:.08},Main:{c:1842720,m:.3,r:.6},Green:{c:3950128,m:.1,r:.7},DarkGreen:{c:2897188,m:.1,r:.7}};function Qy(s){s.traverse(e=>{if(!e.isMesh)return;e.castShadow=!0;let t=n=>{let i=jy[n.name];return i?(n.color.setHex(i.c),n.metalness=i.m,n.roughness=i.r):(n.metalness=Math.min(n.metalness,.3),n.roughness=Math.max(n.roughness,.6)),n};e.material=Array.isArray(e.material)?e.material.map(t):t(e.material)})}function ev(s){let e=atob(s),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t.buffer}async function up(s=()=>{}){let e=window.SP_ASSETS||{},t=Object.keys(e),n=new Vl,i=0;for(let r of t){let o=await new Promise((a,c)=>n.parse(ev(e[r]),"",a,c));if(r==="soldier")for(let a of o.animations)cn.clips[a.name]=a;else Qy(o.scene);cn.models[r]=o.scene,s(++i/t.length)}cn.ready=!0}var tv={ak:{s:.162,grip:[.02,.05],muzzle:[3.85,.58],sight:.9,rail:[.7,.8],hand:[1.95,.42],eject:[.9,.66]},m4:{s:.162,grip:[.1,.05],muzzle:[3.6,.65],sight:1.05,rail:[.2,.93],hand:[1.8,.5],eject:[.65,.68]},dmr:{s:.15,grip:[.25,-.1],muzzle:[5.2,.22],sight:.5,hand:[1.9,.05],eject:[.6,.25],scope:[-.22,.5]},shotgun:{s:.175,grip:[.15,0],muzzle:[3.8,.24],sight:.37,rail:[.8,.33],hand:[2.2,-.04],eject:[.9,.2]},smg:{s:.16,grip:[-.05,0],muzzle:[2.25,.55],sight:.78,rail:[.7,.72],hand:[1.45,.38],eject:[.6,.5]},pistol:{s:.11,grip:[0,.1],muzzle:[1.45,.42],sight:.56,hand:[.05,.02],eject:[.5,.5]},carbine:{s:.162,grip:[.15,.1],muzzle:[3.25,.62],sight:.9,hand:[2,.5],eject:[.9,.66]}};function ql(s){let e=tv[s],t=new St,n=cn.models["gun_"+s].clone(!0);return n.scale.setScalar(e.s),n.rotation.y=Math.PI/2,n.position.set(0,-e.grip[1]*e.s,e.grip[0]*e.s),t.add(n),t.model=n,t.def=e,t.pt=(i,r=0)=>new P(r*e.s,(i[1]-e.grip[1])*e.s,-(i[0]-e.grip[0])*e.s),t.muzzle=t.pt(e.muzzle),t}var Rt={ak:{slot:"primary",name:"AK-47",desc:"Hard hitting, heavy recoil",auto:!0,dmg:36,rpm:600,mag:30,reserve:120,recoil:1.45,recoilH:.5,hip:2.1,ads:.2,reload:2.6,adsT:.24,move:.93,kick:.07,noise:44,falloff:[35,.75],optics:["iron","reddot","holo","scope"],muzzle:1,grip:1,laser:1},m4:{slot:"primary",name:"M4A1",desc:"Balanced, controllable",auto:!0,dmg:28,rpm:780,mag:30,reserve:150,recoil:.82,recoilH:.26,hip:1.5,ads:.13,reload:2.1,adsT:.19,move:.97,kick:.045,noise:42,falloff:[40,.8],optics:["iron","reddot","holo","scope"],muzzle:1,grip:1,laser:1},dmr:{slot:"primary",name:"SR-9 DMR",desc:"Semi-auto marksman rifle, 4x scope",auto:!1,dmg:68,rpm:230,mag:10,reserve:50,recoil:2.7,recoilH:.5,hip:3.4,ads:.03,reload:2.8,adsT:.3,move:.9,kick:.11,noise:50,optics:["scope"],muzzle:1,head:3},pistol:{slot:"secondary",name:"P9 PISTOL",desc:"Fast handling sidearm",auto:!1,dmg:30,rpm:420,mag:15,reserve:60,recoil:1.25,recoilH:.3,hip:1.2,ads:.3,reload:1.4,adsT:.12,move:1.06,kick:.085,noise:36,falloff:[20,.65],optics:["iron"],muzzle:1,laser:1},smg:{slot:"secondary",name:"VK-9 SMG",desc:"High rate of fire, short range",auto:!0,dmg:21,rpm:900,mag:30,reserve:120,recoil:.6,recoilH:.36,hip:1.3,ads:.3,reload:1.9,adsT:.14,move:1.03,kick:.035,noise:38,falloff:[16,.6],optics:["iron","reddot","holo"],muzzle:1,grip:1,laser:1},shotgun:{slot:"secondary",name:"M590 SHOTGUN",desc:"8 pellets, devastating up close",auto:!1,pellets:8,dmg:15,rpm:72,mag:6,reserve:30,recoil:4.4,recoilH:.8,hip:3.2,ads:2.5,reload:.5,shells:1,adsT:.2,move:.95,kick:.15,noise:48,falloff:[9,.35],optics:["iron","reddot"],laser:1},knife:{slot:"melee",name:"COMBAT KNIFE",desc:"Silent. Lethal from behind",melee:!0,dmg:70,range:2.1,rate:.6,move:1.1,mag:0,reserve:0}},Rr={iron:{name:"Iron sights",fov:58,eye:.3},reddot:{name:"Red dot",fov:55,eye:.19,ret:"dot"},holo:{name:"Holographic",fov:52,eye:.19,ret:"holo"},scope:{name:"4x scope",fov:19,eye:.085,ret:"scope",adsT:.06}},Di={assault:{name:"ASSAULT",desc:"3 frag \xB7 1 flash \xB7 1 medkit \xB7 2 stims",frag:3,flash:1,smoke:0,med:1,stim:2},recon:{name:"RECON",desc:"1 frag \xB7 2 flash \xB7 2 smoke \xB7 2 medkits \xB7 1 stim",frag:1,flash:2,smoke:2,med:2,stim:1},medic:{name:"MEDIC",desc:"1 frag \xB7 1 flash \xB7 1 smoke \xB7 3 medkits \xB7 3 stims",frag:1,flash:1,smoke:1,med:3,stim:3}},nv=s=>({optic:Rt[s].optics?Rt[s].optics[0]:"iron",muzzle:!1,grip:!1,laser:s==="m4"});function iv(){let s={};for(let e in Rt)Rt[e].melee||(s[e]=nv(e));return{primary:"m4",secondary:"pistol",kit:"assault",att:s}}function fp(){let s=iv();try{let e=JSON.parse(localStorage.getItem("sp2_loadout")||"null");if(e&&Rt[e.primary]&&Rt[e.secondary]&&Di[e.kit]){s.primary=e.primary,s.secondary=e.secondary,s.kit=e.kit;for(let t in s.att)e.att&&e.att[t]&&Object.assign(s.att[t],e.att[t])}}catch{}for(let e in s.att){let t=Rt[e],n=s.att[e];t.optics.includes(n.optic)||(n.optic=t.optics[0]),t.muzzle||(n.muzzle=!1),t.grip||(n.grip=!1),t.laser||(n.laser=!1)}return s}function pp(s){try{localStorage.setItem("sp2_loadout",JSON.stringify(s))}catch{}}function Zl(s,e={}){let t=Rt[s],n={...t,id:s,att:e,sup:!!e.muzzle,optic:Rr[e.optic]||Rr.iron};return t.melee||(e.muzzle&&(n.noise=Math.round(t.noise*.3),n.recoil*=.92,n.falloff&&(n.falloff=[n.falloff[0]*.85,n.falloff[1]])),e.grip&&(n.recoil*=.8,n.recoilH*=.8,n.hip*=.88,n.adsT*=1.06),n.adsT+=n.optic.adsT||0),n}function Jl(s,e){if(Rt[s].melee)return"";let t=[];return e.optic&&e.optic!=="iron"&&t.push(Rr[e.optic].name.toUpperCase()),e.muzzle&&t.push("SUPPRESSOR"),e.grip&&t.push("FOREGRIP"),e.laser&&t.push("LASER"),t.join(" \xB7 ")}var dp={},$l=(s,e=.6,t=.2,n)=>{let i=s+"_"+e+"_"+t;return dp[i]||(dp[i]=new At({color:s,roughness:e,metalness:t,...n}))},Yl=()=>$l(1776670,.85,0),sv=()=>$l(4673852,.95,0),ai=()=>$l(1382170,.5,.6);function yn(s,e,t,n,i,r,o=0,a=0,c=0){let l=new Ge(e,t);return l.position.set(n,i,r),l.rotation.set(o,a,c),s.add(l),l}var Ni=(s,e,t)=>new Wt(s,e,t),rv=(s,e)=>new fo(s,e,3,8);function Bo(s,e,t,n,i){let r=new P().subVectors(t,e),o=new Ge(rv(n,Math.max(.01,r.length()-n)),i);return o.position.copy(e).addScaledVector(r,.5),o.quaternion.setFromUnitVectors(new P(0,1,0),r.normalize()),s.add(o),o}function Kl(s,e,t,n,i){let r=new St;s.add(r);let o=(c,l,h)=>new P(e.x+c,e.y+l,e.z+h),a=o(0,0,0).lerp(t,.2);Bo(r,o(0,0,0),a,.034,Yl()),Bo(r,a,t,.043,sv()),yn(r,Ni(.05,.022,.022),ai(),a.x,a.y,a.z).lookAt(t);for(let c=0;c<4;c++){let l=(c-1.5)*.021;i==="y"?Bo(r,o(-n*.012,l*.95,-.012),o(n*.03,l*.95,-.042),.0098,Yl()):Bo(r,o(-n*.02,-.005,l),o(-n*.036,.04,l),.0098,Yl())}return Bo(r,o(n*.022,.02,.008),o(n*.03,.036,-.03),.011,Yl()),r}function ov(s){let e=new St;if(s==="reddot")yn(e,Ni(.03,.012,.05),ai(),0,.006,0),yn(e,new gt(.017,.017,.045,14,1,!0),$l(1513755,.5,.6,{side:en}),0,.03,0,Math.PI/2),yn(e,new ur(.017,.0028,6,16),ai(),0,.03,-.022),yn(e,new ur(.017,.0028,6,16),ai(),0,.03,.022),yn(e,Ni(.012,.012,.012),ai(),.022,.03,0),e.center=.03;else{yn(e,Ni(.038,.016,.075),ai(),0,.008,0),yn(e,Ni(.038,.02,.03),ai(),0,.022,.028);for(let n of[-1,1])yn(e,Ni(.004,.036,.03),ai(),n*.019,.034,-.02);yn(e,Ni(.042,.004,.03),ai(),0,.053,-.02),e.center=.034}let t=new lt({color:7319744,transparent:!0,opacity:.1,depthWrite:!1});return yn(e,new Bn(.03,.03),t,0,e.center,s==="reddot"?0:-.02),e}function jl(s,e={},t){let n=Rt[s],i=new St;if(n.melee){let f=cn.models.acc_knife.clone(!0);return f.scale.setScalar(.24),f.rotation.y=Math.PI/2,i.add(f),t||Kl(i,new P(0,-.005,0),new P(.1,-.2,.4),1,"y"),i.hip=new P(.2,-.17,-.42),i.adsPos=i.hip.clone(),i.muzzle=new P(0,0,-.25),i.eject=i.muzzle,i.fov=75,i.melee=!0,i}let r=ql(s),o=r.def;i.add(r);let a=(o.sight-o.grip[1])*o.s,c=o.rail?r.pt(o.rail).z+.02:.02,l=Rr[e.optic||"iron"].eye,h=e.optic;if(s==="dmr"){let f=r.pt(o.scope);a=f.y,c=f.z}else if(h==="reddot"||h==="holo"){let f=ov(h),p=r.pt(o.rail);f.position.copy(p),i.add(f),a=p.y+f.center,c=p.z}else if(h==="scope"){let f=cn.models.acc_scope.clone(!0),p=r.pt(o.rail);f.scale.setScalar(.115),f.rotation.y=Math.PI/2,f.position.set(0,p.y+.006,p.z-.02),i.add(f),a=p.y+.006+.19*.115,c=p.z-.02+1.09*.115}if(i.muzzle=r.muzzle.clone(),e.muzzle){let f=cn.models.acc_suppressor.clone(!0);f.scale.setScalar(.115),f.rotation.y=Math.PI/2,f.position.copy(i.muzzle).z+=.012,i.add(f),i.muzzle.z-=.19}let d=r.pt(o.hand),u=d.clone();if(u.y-=.03,e.grip){let f=cn.models.acc_grip.clone(!0);f.scale.setScalar(.12),f.position.set(0,d.y-.42*.12,d.z-.03),i.add(f),u=new P(0,d.y-.055,d.z-.03)}if(e.laser){let f=s==="pistol"?-.06:d.z-.05,p=s==="pistol"?(o.muzzle[1]-o.grip[1])*o.s-.022:d.y+.035,v=s==="pistol"?0:.028;yn(i,Ni(.02,.022,.06),ai(),v,p,f),yn(i,Ni(.008,.008,.003),new lt({color:16722474}),v,p,f-.031),i.laser=new P(v,p,f-.033)}return i.lh=new St,i.add(i.lh),t||(s==="pistol"?Kl(i.lh,new P(-.012,-.035,0),new P(-.2,-.25,.38),-1,"y"):Kl(i.lh,u,new P(-.26,-.3,u.z+.42),-1,e.grip?"y":"z")),t||(i.rh=Kl(i,new P(0,-.02,.012),new P(.13,-.26,.42),1,"y")),i.gun=r,i.eject=r.pt(o.eject,.5),i.hip=s==="pistol"?new P(.13,-.14,-.42):new P(.16,-.165,-.37),i.adsPos=new P(0,-a,-l-c),i.sightY=a,i}var As=(s,e,t)=>s<e?e:s>t?t:s,av=.34,_u=["frag","flash","smoke"],mp={frag:"FRAG",flash:"FLASH",smoke:"SMOKE"},Ql=class{constructor(e,t,n){this.g=e,this.pos=new P(t.x,0,t.z),this.vel=new P,this.yaw=t.yaw,this.pitch=0,this.eye=1.62,this.height=1.8,this.hp=100,this.dead=!1,this.grounded=!0,this.crouch=!1,this.crouchToggle=!1,this.speed=0,this.bob=0,this.dip=0,this.sinceHit=99,this.noSprint=0,this.sprintF=0,this.sprinting=!1,this.lean=0,this.leanX=0,this.leanZ=0,this.mantle=null,this.stimT=0,this.blind=0,this.shake=0;let i=[n.primary,n.secondary,"knife"];this.slots=i.map(l=>{let h=n.att[l]||{},d=Zl(l,h),u=jl(l,h);return u.visible=!1,e.wscene.add(u),{id:l,st:d,view:u,mag:d.mag,reserve:d.reserve}}),this.cur=0,this.slots[0].view.visible=!0,this.shown=0,this.next=-1,this.swT=0,this.relT=0,this.reloading=!1,this.fireT=0,this.adsF=0,this.rp=0,this.ry=0,this.kick=0,this.burst=0,this.laserOn=!0,this.spread=1,this.swayX=0,this.swayY=0,this.scoped=!1;let r=Di[n.kit];this.inv={frag:r.frag,flash:r.flash,smoke:r.smoke,med:r.med,stim:r.stim},this.throwSel=_u.find(l=>this.inv[l]>0)||"frag",this.use=null;let o=document.createElement("canvas");o.width=o.height=64;let a=o.getContext("2d"),c=a.createRadialGradient(32,32,2,32,32,32);c.addColorStop(0,"rgba(255,255,230,1)"),c.addColorStop(.3,"rgba(255,200,90,.8)"),c.addColorStop(1,"rgba(255,120,20,0)"),a.fillStyle=c,a.fillRect(0,0,64,64),this.flash=new Ge(new Bn(.2,.2),new lt({map:new Mi(o),transparent:!0,blending:Hn,depthWrite:!1})),this.flash.visible=!1,this.flashT=0,e.wscene.add(this.flash),this.fwd=new P,this._v=new P,this._v2=new P,this.muzzleW=new P,this.laserW=new P,this.eyePos=new P}get slot(){return this.slots[this.cur]}get w(){return this.slots[this.cur].st}busy(){return this.swT>0||this.reloading||!!this.use||!!this.mantle}hits(e,t,n,i=this.height,r=av){let o=this.g.world.colliders;for(let a=0;a<o.length;a++){let c=o[a];if(c.solid&&e+r>c.x0&&e-r<c.x1&&n+r>c.z0&&n-r<c.z1&&t<c.y1-.001&&t+i>c.y0)return c}return null}switchTo(e){e===this.cur||this.swT>0||this.dead||this.use||!this.slots[e]||(this.next=e,this.swT=.4,this.reloading=!1,this.g.audio.click(.35))}reload(){let e=this.slot;this.busy()||e.st.melee||e.mag>=e.st.mag||e.reserve<=0||(this.reloading=!0,this.relT=e.st.reload,this.g.audio.reload(e.st.reload,e.st.shells))}damage(e,t,n){this.dead||(this.hp-=e,this.sinceHit=0,this.lastHit=n,this.g.onHurt(t,e),this.hp<=0&&(this.hp=0,this.dead=!0))}cycleThrow(){let e=_u.indexOf(this.throwSel);for(let t=1;t<=3;t++){let n=_u[(e+t)%3];if(this.inv[n]>0){this.throwSel=n;break}}this.g.audio.click(.3)}startUse(e){if(this.busy()||this.dead)return;let t=this.g;if(e==="throw"){if(this.inv[this.throwSel]<=0&&(this.cycleThrow(),this.inv[this.throwSel]<=0))return;this.use={type:e,t:0,dur:.6,at:.3}}else if(e==="med"){if(this.inv.med<=0||this.hp>=100)return;this.use={type:e,t:0,dur:2.4,at:2.3},t.audio.medkit()}else if(e==="stim"){if(this.inv.stim<=0)return;this.use={type:e,t:0,dur:.75,at:.45}}else e==="melee"&&(this.use={type:e,t:0,dur:Rt.knife.rate,at:.16},this.show(2),t.audio.swish());this.adsF=Math.min(this.adsF,.5)}show(e){this.shown!==e&&(this.slots[this.shown].view.visible=!1,this.slots[e].view.visible=!0,this.shown=e)}finishUse(e){let t=this.g,n=t.camera;if(e.type==="throw"){let i=this.throwSel,r=this._v.set(1,0,0).applyQuaternion(n.quaternion),o=this._v2.copy(n.position).addScaledVector(this.fwd,.45).addScaledVector(r,.18);o.y-=.08;let a=new P().copy(this.fwd).multiplyScalar(this.crouch?11:15);a.y+=3.6,a.x+=this.vel.x*.5,a.z+=this.vel.z*.5,t.spawnGrenade(i,o.clone(),a,"player"),this.inv[i]--,this.inv[i]<=0&&this.cycleThrow()}else e.type==="med"?(this.inv.med--,this.hp=Math.min(100,this.hp+65),t.audio.pickup()):e.type==="stim"?(this.inv.stim--,this.hp=Math.min(100,this.hp+25),this.stimT=8,t.audio.stim()):e.type==="melee"&&t.melee()}update(e){let t=this.g,n=t.inp,i=n.k,r=this.slot,o=r.st,a=1+(o.optic?o.optic.fov/75-1:0)*this.adsF,c=.0022*t.sens*(o.melee?1:a);this.yaw-=n.mx*c,this.pitch=As(this.pitch-n.my*c,-1.5,1.5),this.swayX+=(As(-n.mx*5e-4,-.03,.03)-this.swayX)*Math.min(1,e*10),this.swayY+=(As(n.my*5e-4,-.03,.03)-this.swayY)*Math.min(1,e*10);let l=this.pos,h=Math.sin(this.yaw),d=Math.cos(this.yaw);if(!!(i.ControlLeft||i.ControlRight)||this.crouchToggle?(this.crouch=!0,this.height=1.2):this.crouch&&(this.height=1.8,this.hits(l.x,l.y,l.z)?this.height=1.2:this.crouch=!1),this.eye+=((this.crouch?1:1.62)-this.eye)*Math.min(1,e*12),this.stimT=Math.max(0,this.stimT-e),this.mantle){let M=this.mantle;M.t+=e/.42;let I=Math.min(1,M.t),R=I*I*(3-2*I);l.y=M.y0+(M.y1-M.y0)*Math.min(1,R*1.5),l.x=M.x0+(M.x1-M.x0)*Math.max(0,R*1.6-.6),l.z=M.z0+(M.z1-M.z0)*Math.max(0,R*1.6-.6),this.vel.set(0,0,0),this.grounded=!0,I>=1&&(this.mantle=null)}else{let M=(i.KeyW?1:0)-(i.KeyS?1:0),I=(i.KeyD?1:0)-(i.KeyA?1:0),R=Math.hypot(M,I)||1;M/=R,I/=R,this.noSprint-=e;let D=(i.ShiftLeft||i.ShiftRight)&&M>0&&!this.crouch&&this.noSprint<=0&&!n.rmb&&this.grounded&&!this.use;this.sprinting=D;let O=(this.crouch?2.3:D?6.9:4.5)*o.move*(1-.42*this.adsF)*(this.use&&this.use.type==="med"?.55:1)*(this.stimT>0?1.12:1)*(1-Math.abs(this.lean)*.5),W=(-h*M+d*I)*O,L=(-d*M-h*I)*O,z=(this.grounded?M||I?60:48:9)*e,H=W-this.vel.x,B=L-this.vel.z,ee=Math.hypot(H,B);ee>z?(this.vel.x+=H/ee*z,this.vel.z+=B/ee*z):(this.vel.x=W,this.vel.z=L),n.jump&&this.grounded&&(this.vel.y=this.crouch?5.2:6.6,this.grounded=!1,t.audio.step(.25)),n.jump=!1,this.vel.y-=21*e;let X=this.grounded,Y=Me=>{let Z=Me==="x"?l.x+this.vel.x*e:l.z+this.vel.z*e,fe=Me==="x"?Z:l.x,ye=Me==="x"?l.z:Z,Ee=this.hits(fe,l.y,ye);if(!Ee){l[Me]=Z;return}let pe=Ee.y1-l.y;if(X&&pe<=.45&&!this.hits(fe,Ee.y1,ye)){l[Me]=Z,l.y=Ee.y1;return}if(i.Space&&pe>.45&&pe<=1.4&&!this.mantle&&!this.use){let Fe=Math.sign(this.vel[Me])||1,ft=Me==="x"?l.x+Fe*.75:l.x,Le=Me==="x"?l.z:l.z+Fe*.75;this.hits(ft,Ee.y1+.02,Le,1.2)||(this.mantle={t:0,x0:l.x,z0:l.z,y0:l.y,x1:ft,z1:Le,y1:Ee.y1},this.crouchToggle=this.crouchToggle||!!this.hits(ft,Ee.y1+.02,Le,1.8),t.audio.step(.3))}this.vel[Me]=0};Y("x"),Y("z");let te=this.vel.y,_e=l.y+this.vel.y*e;if(this.grounded=!1,_e<=0)_e=0,this.grounded=!0,this.vel.y=0;else{let Me=this.hits(l.x,_e,l.z);Me&&(this.vel.y<=0?(_e=Me.y1,this.grounded=!0):_e=l.y,this.vel.y=0)}if(this.mantle||(l.y=_e),this.grounded&&!X&&te<-4&&(this.dip=Math.min(.16,-te*.014),t.audio.land(),t.sound(l,9,"step"),te<-13&&this.damage((-te-13)*6,l,{name:"a fall",dist:0,x:l.x,z:l.z,fall:!0})),this.speed=Math.hypot(this.vel.x,this.vel.z),this.grounded&&this.speed>.6){let Me=this.bob;this.bob+=this.speed*e*1.75,Math.floor(Me/Math.PI)!==Math.floor(this.bob/Math.PI)&&(t.audio.step(this.crouch?.06:D?.26:.15),this.crouch||t.sound(l,D?13:6.5,"step"))}}this.dip+=(0-this.dip)*Math.min(1,e*9),this.sprintF+=((this.sprinting?1:0)-this.sprintF)*Math.min(1,e*9);let f=this.sprinting||this.mantle?0:(i.KeyF?1:0)-(i.KeyQ?1:0);this.lean+=(f-this.lean)*Math.min(1,e*9);let p=this.lean*.46;for(let M=0;M<4&&Math.abs(p)>.02&&this.hits(l.x+d*p,l.y+this.eye-.25,l.z-h*p,.4,.14);M++)p*=.6,M===3&&(p=0);if(this.leanX=d*p,this.leanZ=-h*p,this.sinceHit+=e,this.sinceHit>5&&this.hp<20&&(this.hp=Math.min(20,this.hp+4*e)),this.stimT>2&&(this.hp=Math.min(100,this.hp+2.5*e)),this.blind=Math.max(0,this.blind-e*(this.blind>1?1:.55)),this.shake=Math.max(0,this.shake-e*2.5),this.use){let M=this.use;M.t+=e,!M.done&&M.t>=M.at&&(M.done=!0,this.finishUse(M)),M.t>=M.dur&&(this.use=null,this.show(this.cur))}if(this.swT>0&&(this.swT-=e,this.swT<=.2&&this.next>=0&&(this.cur=this.next,this.next=-1,this.show(this.cur))),this.reloading&&(this.relT-=e,this.relT<=0))if(o.shells)r.mag++,r.reserve--,r.mag<o.mag&&r.reserve>0&&!n.lmb?(this.relT=o.reload,t.audio.click(.45)):this.reloading=!1;else{let M=Math.min(o.mag-r.mag,r.reserve);r.mag+=M,r.reserve-=M,this.reloading=!1}let v=n.rmb&&!this.sprinting&&this.swT<=0&&!this.reloading&&!this.use&&!o.melee&&!this.mantle;this.adsF=As(this.adsF+(v?1:-1)*e/(o.adsT||.15),0,1),this.scoped=!o.melee&&o.optic.ret==="scope"&&this.adsF>.9,this.fireT-=e,this.fireT<-.22&&(this.burst=0),(o.auto?n.lmb:n.lmbPressed)&&this.fireT<=0&&this.swT<=0&&!this.use&&!this.mantle&&(o.melee?this.startUse("melee"):this.reloading?o.shells&&r.mag>0&&(this.reloading=!1):r.mag>0?this.shoot():(n.lmbPressed&&t.audio.click(.5),this.reload())),n.lmbPressed=!1;let g=this.speed/4.5;o.melee||(this.spread=o.hip*(1+g*.9+(this.grounded?0:2))*(this.crouch?.75:1)*(o.att.laser&&this.laserOn?.6:1)*(1-this.adsF)+o.ads*(1+g*.6)*this.adsF+this.burst*.03);let x=Math.min(1,e*7);this.rp-=this.rp*x,this.ry-=this.ry*x,this.kick-=this.kick*Math.min(1,e*14);let S=t.camera,y=Math.sin(this.bob*2)*.028*Math.min(1,g)*(1-this.adsF*.6),b=Math.cos(this.bob)*.02*Math.min(1,g),E=this.shake*.05;S.position.set(l.x+d*b+this.leanX+(Math.random()-.5)*E,l.y+this.eye+y-this.dip-Math.abs(p)*.08+(Math.random()-.5)*E,l.z-h*b+this.leanZ),S.rotation.set(this.pitch+this.rp,this.yaw+this.ry,-p*.3);let _=t.fov+((o.melee?t.fov:o.optic.fov)-t.fov)*this.adsF+this.sprintF*4;Math.abs(S.fov-_)>.01&&(S.fov=_,S.updateProjectionMatrix()),S.updateMatrixWorld(),S.getWorldDirection(this.fwd),this.eyePos.copy(S.position),this.animate(e,b,y)}shoot(){let e=this.g,t=this.slot,n=t.st,i=e.camera;t.mag--,this.fireT=Math.max(this.fireT,-.02)+60/n.rpm,this.noSprint=.3,this.burst++;let r=this.spread*Math.PI/180;for(let h=0;h<(n.pellets||1);h++){let d=Math.random()*6.283,u=Math.sqrt(Math.random())*r,f=this._v.set(Math.cos(d)*Math.tan(u),Math.sin(d)*Math.tan(u),-1).normalize().applyQuaternion(i.quaternion);e.playerShot(i.position,f,n,this.muzzleW,h===0)}let o=1-this.adsF*.25,a=this.burst;this.rp+=n.recoil*(a<3?1.15:.85)*Math.PI/180*o*(this.crouch?.85:1);let c=n.id==="ak"&&a>4?Math.sin(a*.8)*1.5+(Math.random()-.5):(Math.random()-.5)*2;this.ry+=c*n.recoilH*Math.PI/180*o,this.kick=Math.min(.13,this.kick+n.kick),n.sup||(this.flashT=.045,this.flash.rotation.z=Math.random()*6,this.flash.scale.setScalar((n.pellets?1.3:.7)+Math.random()*.6),e.fx.muzzle(i.position)),e.audio.shot(n.id,n.sup),e.sound(this.pos,n.noise*e.world.env.shotMul,"shot"),e.stats.shots++;let l=t.view;e.fx.shell(this._v.copy(l.eject).applyMatrix4(l.matrixWorld).applyQuaternion(i.quaternion).add(i.position),this._v2.set(1,.6,0).applyQuaternion(i.quaternion))}animate(e,t,n){let i=this.g,r=this.slots[this.shown].view,o=this.slots[this.shown].st,a=o.melee?0:this.adsF,c=r.hip,l=r.adsPos,h=c.x+(l.x-c.x)*a,d=c.y+(l.y-c.y)*a,u=c.z+(l.z-c.z)*a,f=0,p=.03*(1-a),v=-this.lean*.12*(1-a*.5),m=1-a*.88,g=Math.sin(performance.now()*.0016)*.0025*m;if(h+=this.swayX*m+t*.5*m,d+=this.swayY*m+n*.45*m-this.dip*.4+g,u+=this.kick*(1-a*.35),f+=this.kick*1*(1-a*.65),this.swT>0){let M=Math.sin((1-this.swT/.4)*Math.PI);d-=M*.3,f-=M*.7}let x=0,S=0;if(this.reloading){let M=o.shells?.6+.4*Math.sin((1-this.relT/o.reload)*Math.PI):Math.sin(Math.min(1,(1-this.relT/o.reload)*1.08)*Math.PI);d-=M*.07,f+=M*.42,v+=M*.45,h-=M*.03;let I=o.shells?Math.sin((1-this.relT/o.reload)*Math.PI):Math.sin(As((1-this.relT/o.reload-.12)/.6,0,1)*Math.PI);x=-I*.2,S=I*.12}let y=this.use;if(y){let M=Math.sin(As(y.t/y.dur,0,1)*Math.PI);if(y.type==="melee"){let I=As(y.t/.22,0,1),R=Math.sin(I*Math.PI);u-=R*.32,h-=R*.16,p+=.5-I*1.1,f+=.25-R*.5,v+=.6}else d-=M*.34,f-=M*.8}this.mantle&&(d-=.3,f-=.6);let b=this.sprintF*(o.melee?.4:1);d-=b*.05,p+=b*.5,f-=b*.18,h-=b*.04,r.position.set(h,d,u),r.rotation.set(f,p,v),r.lh&&r.lh.position.set(0,x,S),r.visible=!this.scoped,r.updateMatrixWorld();let E=i.camera.quaternion,_=i.camera.position;this.muzzleW.copy(r.muzzle).applyMatrix4(r.matrixWorld).applyQuaternion(E).add(_),r.laser&&this.laserW.copy(r.laser).applyMatrix4(r.matrixWorld).applyQuaternion(E).add(_),this.flashT>0&&!this.scoped?(this.flashT-=e,this.flash.visible=!0,this.flash.position.copy(r.muzzle).applyMatrix4(r.matrixWorld),this.flash.position.z-=.03):(this.flash.visible=!1,this.flashT=0)}};var lv=/^(root|pelvis|thigh|calf|foot|ball)/,Cs={idle:"Idle_Loop",walk:"Walk_Loop",jog:"Jog_Fwd_Loop",sprint:"Sprint_Loop",cidle:"Crouch_Idle_Loop",cwalk:"Crouch_Fwd_Loop"},tc={aimN:"Pistol_Aim_Neutral",aimU:"Pistol_Aim_Up",aimD:"Pistol_Aim_Down"},cv=["Pistol_Reload","OverhandThrow","Interact","Idle_TalkingPhone_Loop","Hit_Chest","Hit_Head"],hv=["Death01","Hit_Knockback","ClimbUp_1m","Roll","Jump_Start"],gp={guard:{jacket:4147253,pants:3554607,gear:2501408,helmet:3093799},aggressor:{jacket:5260599,pants:4274222,gear:2762015,helmet:3419686},cautious:{jacket:3686986,pants:3094333,gear:2106923,helmet:2633525},elite:{jacket:2303530,pants:1974564,gear:1184790,helmet:1513756}},Qe=null,xp=new P,_p=new P,yp=new P,yu=new P,uv=new P,Ln=new yt,vu=new yt,dv=new P(0,1,0);function ec(s,e){let t=cn.clips[s];return new Ri(s+(e?"_L":"_U"),t.duration,t.tracks.filter(n=>lv.test(n.name)===e))}function fv(){let s=cn.models.soldier;s.updateMatrixWorld(!0);let e=[];s.traverse(m=>m.isSkinnedMesh&&e.push(m));let t=e.find(m=>m.material.name==="M_Main")||e[0],n=t.skeleton.bones,i=t.geometry,r=i.attributes.position.count,o=new Uint8Array(r),a=i.attributes.skinIndex,c=i.attributes.skinWeight;for(let m=0;m<r;m++){let g=0,x=-1;for(let y=0;y<4;y++)c.getComponent(m,y)>x&&(x=c.getComponent(m,y),g=a.getComponent(m,y));let S=n[g].name;o[m]=/^(Head|neck)/.test(S)?2:/^(hand|index|middle|ring|pinky|thumb)/.test(S)?3:/^(foot|ball)/.test(S)?4:/^(thigh|calf|pelvis)/.test(S)?1:0}let l={};for(let m of n)l[m.name]=m.getWorldPosition(new P);let h=Math.sign(l.ball_l.z-l.foot_l.z)||1;Qe={body:t,meshes:e,region:o,rest:l,F:h,geos:{},clips:{},mats:{}};for(let m in Cs)Qe.clips[m]=ec(Cs[m],!0),Qe.clips[m+"U"]=ec(Cs[m],!1);for(let m in tc)Qe.clips[m]=ec(tc[m],!1);for(let m of cv)Qe.clips[m]=ec(m,!1);for(let m of hv)Qe.clips[m]=cn.clips[m];let d=Fo(s),u=new mr(d);u.clipAction(cn.clips.Pistol_Aim_Neutral).play(),u.setTime(.01),d.updateMatrixWorld(!0);let f=d.getObjectByName("hand_r"),p=f.getWorldQuaternion(new yt).invert(),v=new yt().setFromAxisAngle(dv,h>0?Math.PI:0);Qe.gunQuat=p.clone().multiply(v),Qe.gunPos=new P(0,-.035,.075*h).applyQuaternion(p),Qe.mats.joint=new At({color:1316119,roughness:.95,metalness:0}),Qe.mats.body=new At({vertexColors:!0,roughness:.92,metalness:0}),Qe.mats.glass=new At({color:724754,roughness:.15,metalness:.8}),Qe.mats.flash=new lt({color:16767120,transparent:!0,blending:Hn,depthWrite:!1}),Qe.geo={helmet:new bi(.128,14,10,0,6.283,0,1.75),box:new Wt(1,1,1),flash:new go(.09,0)}}function pv(s){if(Qe.geos[s])return Qe.geos[s];let e=gp[s],t=Qe.body.geometry,n=new at,i=t.attributes.position.count,r=new Float32Array(i*3);for(let a in t.attributes)n.setAttribute(a,t.attributes[a]);n.setIndex(t.index),n.boundingSphere=t.boundingSphere,n.boundingBox=t.boundingBox;let o=[e.jacket,e.pants,1513755,921360,789517].map(a=>new we(a));for(let a=0;a<i;a++){let c=o[Qe.region[a]];r[a*3]=c.r,r[a*3+1]=c.g,r[a*3+2]=c.b}return n.setAttribute("color",new bt(r,3)),Qe.geos[s]=n}var Mu=s=>Qe.mats["g"+s]||(Qe.mats["g"+s]=new At({color:s,roughness:.85,metalness:.05}));function Rs(s,e){s.parent.getWorldQuaternion(vu),s.quaternion.premultiply(vu).premultiply(e).premultiply(vu.invert())}function mv(s,e,t,n,i){s.updateWorldMatrix(!0,!1),e.updateWorldMatrix(!1,!1),t.updateWorldMatrix(!1,!1);let r=xp.setFromMatrixPosition(s.matrixWorld),o=_p.setFromMatrixPosition(e.matrixWorld),a=yp.setFromMatrixPosition(t.matrixWorld),c=o.distanceTo(r),l=a.distanceTo(o),h=yu.copy(n).sub(r),d=_n.clamp(h.length(),Math.abs(c-l)+.01,c+l-.004);h.normalize();let u=(c*c-l*l+d*d)/(2*d),f=Math.sqrt(Math.max(0,c*c-u*u)),v=uv.copy(i).addScaledVector(h,-i.dot(h)).normalize().multiplyScalar(f).addScaledVector(h,u).add(r);Rs(s,Ln.setFromUnitVectors(o.sub(r).normalize(),yu.copy(v).sub(r).normalize())),s.updateWorldMatrix(!1,!1),e.updateWorldMatrix(!1,!1),t.updateWorldMatrix(!1,!1),o.setFromMatrixPosition(e.matrixWorld),a.setFromMatrixPosition(t.matrixWorld),Rs(e,Ln.setFromUnitVectors(a.sub(o).normalize(),yu.copy(n).sub(o).normalize()))}var Cr=class{constructor(e="guard",t="carbine"){Qe||fv();let n=this.root=new St,i=this.inner=Fo(cn.models.soldier);n.rotation.order="YXZ",i.rotation.y=Qe.F>0?Math.PI:0,n.add(i),this.bones={},i.traverse(a=>{if(a.isBone&&(this.bones[a.name]=a),a.isSkinnedMesh){let c=a.geometry===Qe.body.geometry;a.geometry=c?pv(e):a.geometry,a.material=c?Qe.mats.body:Qe.mats.joint,a.castShadow=!0,a.frustumCulled=!1}}),i.updateMatrixWorld(!0),this.dress(gp[e]);let r=this.gun=ql(t);r.quaternion.copy(Qe.gunQuat),r.position.copy(Qe.gunPos),this.bones.hand_r.add(r),this.flash=new Ge(Qe.geo.flash,Qe.mats.flash),this.flash.position.copy(r.muzzle).z-=.08,this.flash.scale.set(1,1,2.2),this.flash.visible=!1,r.add(this.flash),this.gripL=r.pt(r.def.hand),this.gripL.y-=.035,this.gripL.z+=.03;let o=this.mixer=new mr(i);this.act={};for(let a in Qe.clips){let c=this.act[a]=o.clipAction(Qe.clips[a]);c.setEffectiveWeight(0),(Cs[a]||Cs[a.slice(0,-1)]||tc[a])&&c.play()}for(let a in Cs)this.act[a+"U"].syncWith(this.act[a]);this.w={};for(let a in this.act)this.w[a]=0;this.act.idle.setEffectiveWeight(1),this.w.idle=1,this.uOne=null,this.fOne=null,this.dead=!1,this.lean=0,this.kick=0,this.flashT=0,this.aimW=0,this.crouchW=0,this.ikW=0,this.zones=null,this.zoneFrame=-1,o.update(.01)}dress(e){let t=Qe.rest,n=Qe.F,i=(u,f,p,v,m,g,x,S,y,b=0)=>{let E=new Ge(f,p);return E.position.set(v,m,g*n),E.scale.set(x,S,y),E.rotation.x=b*n,E.castShadow=!0,this.inner.add(E),E.updateMatrixWorld(!0),this.bones[u].attach(E),E},r=Qe.geo.box,o=Mu(e.gear),a=Mu(e.helmet),c=Mu(855567),l=t.Head,h=t.spine_03,d=t.pelvis;i("Head",Qe.geo.helmet,a,l.x,l.y+.105,l.z+.005,1,1.02,1.12),i("Head",r,a,l.x,l.y+.085,l.z+.118,.2,.025,.07),i("Head",r,Qe.mats.glass,l.x,l.y+.062,l.z+.108,.17,.05,.03),i("Head",r,c,l.x,l.y+.165,l.z+.11,.05,.05,.05);for(let u of[-1,1])i("Head",r,c,l.x+u*.118,l.y+.06,l.z+0,.035,.08,.07);i("spine_03",r,o,h.x,h.y-.02,h.z+.085,.33,.36,.09),i("spine_03",r,o,h.x,h.y-.02,h.z-.105,.32,.36,.08);for(let u of[-1,1])i("spine_03",r,o,h.x+u*.13,h.y+.17,h.z-.01,.06,.03,.2);for(let u of[-1,0,1])i("spine_03",r,c,h.x+u*.095,h.y-.11,h.z+.145,.075,.15,.05);i("spine_03",r,c,h.x-.09,h.y+.05,h.z-.165,.11,.17,.06),i("spine_03",r,c,h.x-.09,h.y+.2,h.z-.165,.012,.16,.012),i("pelvis",r,c,d.x,d.y+.06,d.z,.37,.06,.25),i("thigh_r",r,c,t.thigh_r.x+.085*Math.sign(t.thigh_r.x),t.thigh_r.y-.14,t.thigh_r.z,.05,.17,.1);for(let u of["l","r"])i("calf_"+u,r,c,t["calf_"+u].x,t["calf_"+u].y-.02,t["calf_"+u].z+.055,.105,.13,.05)}playUpper(e,{loop:t=!1,speed:n=1,fade:i=.15}={}){if(this.dead)return 0;let r=this.act[e];return r.reset(),r.setLoop(t?Nl:Io,t?1/0:1),r.clampWhenFinished=!0,r.timeScale=n,r.play(),this.uOne&&this.uOne.a!==r&&(this.uOne.old=!0),this.uOne={a:r,name:e,t:0,dur:t?1/0:r.getClip().duration/n,fade:i,w:0},this.uOne.dur}stopUpper(){this.uOne&&(this.uOne.dur=Math.min(this.uOne.dur,this.uOne.t))}playFull(e,{speed:t=1,fade:n=.12,hold:i=!1}={}){let r=this.act[e];return r.reset(),r.setLoop(Io,1),r.clampWhenFinished=!0,r.timeScale=t,r.play(),this.fOne={a:r,name:e,t:0,dur:i?1/0:r.getClip().duration/t,fade:n,w:0},r.getClip().duration/t}die(e){this.dead||(this.dead=!0,this.uOne=null,this.flash.visible=!1,this.playFull(e?"Hit_Knockback":"Death01",{hold:!0,speed:1.15}),e&&(this.root.userData.knock=1))}fire(){this.kick=1,this.flashT=.05,this.flash.visible=!0,this.flash.rotation.z=Math.random()*6}update(e,t){let n=this.w,i=Math.min(1,e*9),r={};for(let u in n)r[u]=0;let o=0,a=0;if(this.fOne){let u=this.fOne;u.t+=e,u.w=u.t>u.dur-u.fade?Math.max(0,(u.dur-u.t)/u.fade):Math.min(1,u.t/u.fade),this.dead&&(u.w=Math.min(1,u.t/.08)),o=u.w,u.a.setEffectiveWeight(o),u.t>=u.dur&&(u.a.stop(),this.fOne=null)}if(this.uOne){let u=this.uOne;u.t+=e,u.w=u.t>u.dur-u.fade?Math.max(0,(u.dur-u.t)/u.fade):Math.min(1,u.t/u.fade),a=u.w*(1-o),u.a.setEffectiveWeight(a),u.t>=u.dur&&(u.a.stop(),this.uOne=null)}if(!this.dead){this.crouchW+=((t.crouch?1:0)-this.crouchW)*i;let u=t.speed,f=this.crouchW,p;if(u<.15)p={idle:1};else if(u<1.9)p={idle:Math.max(0,1-u/.9),walk:Math.min(1,u/.9)};else if(u<3.6){let x=(u-1.9)/1.7;p={walk:1-x,jog:x}}else{let x=Math.min(1,(u-3.6)/1.4);p={jog:1-x,sprint:x}}let v=Math.min(1,u/.8);for(let x in p)r[x]=p[x]*(1-f);r.cidle=f*(1-v),r.cwalk=f*v,this.act.walk.timeScale=this.act.walkU.timeScale=u<1.9?_n.clamp(u/1.45,.6,1.5):1.2,this.act.cwalk.timeScale=this.act.cwalkU.timeScale=_n.clamp(u/1.3,.6,1.6),this.aimW+=((t.aim?1:0)-this.aimW)*Math.min(1,e*7);let m=this.aimW,g=_n.clamp((t.pitch||0)/.7,-1,1);r.aimN=m*(1-Math.abs(g)),r.aimU=m*Math.max(0,g),r.aimD=m*Math.max(0,-g)+(1-m)*.55,r.aimN+=(1-m)*.45;for(let x of["aimN","aimU","aimD"])r[x]*=1-a}let c=1-o;for(let u in Cs)n[u]+=(r[u]-n[u])*i,this.act[u].setEffectiveWeight(n[u]*c),this.act[u+"U"].setEffectiveWeight(0);for(let u in tc)n[u]+=(r[u]-n[u])*i,this.act[u].setEffectiveWeight(n[u]*c);if(this.mixer.update(e),this.dead)return;this.lean+=((t.lean||0)-this.lean)*Math.min(1,e*6),this.kick=Math.max(0,this.kick-e*9),this.flashT>0&&(this.flashT-=e)<=0&&(this.flash.visible=!1);let l=this.bones,h=this.lean;if(this.inner.position.x=h*.24,Math.abs(h)>.01||this.kick>.01){this.root.getWorldQuaternion(Ln);let u=xp.set(0,0,-1).applyQuaternion(Ln),f=_p.set(1,0,0).applyQuaternion(Ln);Math.abs(h)>.01&&(Rs(l.spine_01,Ln.setFromAxisAngle(u,h*.27)),Rs(l.spine_02,Ln.setFromAxisAngle(u,h*.2)),Rs(l.spine_03,Ln.setFromAxisAngle(u,h*.15)),Rs(l.Head,Ln.setFromAxisAngle(u,-h*.3))),this.kick>.01&&Rs(l.spine_03,Ln.setFromAxisAngle(f,this.kick*.035))}let d=this.uOne||this.fOne?0:1;if(this.ikW+=(d-this.ikW)*Math.min(1,e*8),this.ikW>.5){this.gun.updateWorldMatrix(!0,!1);let u=yp.copy(this.gripL).applyMatrix4(this.gun.matrixWorld),f=u.x,p=u.y,v=u.z;this.root.getWorldQuaternion(Ln);let m=new P(-.55,-.8,.2).applyQuaternion(Ln);mv(l.upperarm_l,l.lowerarm_l,l.hand_l,new P(f,p,v),m)}}refresh(){this.root.updateWorldMatrix(!0,!0)}muzzle(e){return e.copy(this.gun.muzzle).applyMatrix4(this.gun.matrixWorld)}eye(e){return e.setFromMatrixPosition(this.bones.Head.matrixWorld).setY(e.y+.07)}bone(e,t){return t.setFromMatrixPosition(this.bones[e].matrixWorld)}rayHit(e,t,n,i){if(this.zoneFrame!==i){this.refresh(),this.zoneFrame=i;let o=c=>new P().setFromMatrixPosition(this.bones[c].matrixWorld),a=o("Head");a.y+=.075,this.zones=[[a,a,.125,"head",2.5],[o("neck_01"),o("spine_03"),.075,"torso",1],[o("spine_03"),o("spine_02"),.185,"torso",1],[o("spine_02"),o("pelvis"),.175,"torso",1],[o("upperarm_l"),o("lowerarm_l"),.058,"arm",.6],[o("lowerarm_l"),o("hand_l"),.05,"arm",.6],[o("upperarm_r"),o("lowerarm_r"),.058,"arm",.6],[o("lowerarm_r"),o("hand_r"),.05,"arm",.6],[o("thigh_l"),o("calf_l"),.088,"leg",.7],[o("calf_l"),o("foot_l"),.068,"leg",.7],[o("thigh_r"),o("calf_r"),.088,"leg",.7],[o("calf_r"),o("foot_r"),.068,"leg",.7]]}let r=null;for(let o of this.zones){let a=o[0],c=o[1],l=o[2],h=c.x-a.x,d=c.y-a.y,u=c.z-a.z,f=e.x-a.x,p=e.y-a.y,v=e.z-a.z,m=h*h+d*d+u*u,g=h*t.x+d*t.y+u*t.z,x=h*f+d*p+u*v,S=t.x*f+t.y*p+t.z*v,y=m-g*g,b=y>1e-9?_n.clamp((x-g*S)/y,0,1):0;m<1e-9&&(b=0);let E=g*b-S;if(E<0)continue;let _=a.x+h*b-(e.x+t.x*E),M=a.y+d*b-(e.y+t.y*E),I=a.z+u*b-(e.z+t.z*E),R=_*_+M*M+I*I;R>l*l||(E-=Math.sqrt(l*l-R),E<n&&(!r||E<r.d)&&(r={d:Math.max(0,E),part:o[3],mult:o[4]}))}return r}};var Ho={recruit:{label:"RECRUIT",react:[.8,1.4],detect:.75,spread:4,settle:1.5,burst:[3,6],pause:[.6,1.3],hold:[1.5,4],memory:8,searchPts:[1,2],searchTime:10,share:12,radio:[3,5.5],radioFail:.3,mistake:.3,decide:[.9,1.6],hear:.8,hide:[1.5,3.6],expose:[1.4,3.2],glance:.15,switchSide:.1,peeks:[3,6],flank:.05,suppress:0,bound:!1,nades:0,investigate:.6,alarmDelay:[9,16],alarmChance:.5,coverDelay:[1.5,3.5]},tactical:{label:"TACTICAL",react:[.42,.8],detect:1,spread:3,settle:1.1,burst:[2,4],pause:[.35,.8],hold:[1.5,3.5],memory:15,searchPts:[3,4],searchTime:18,share:20,radio:[1.4,2.6],radioFail:.05,mistake:.1,decide:[.55,1],hear:1,hide:[.8,2.6],expose:[.8,1.8],glance:.35,switchSide:.3,peeks:[2,4],flank:.35,suppress:.25,bound:!1,nades:0,investigate:.95,alarmDelay:[4,8],alarmChance:.9,coverDelay:[.2,.8]},elite:{label:"ELITE SQUAD",react:[.3,.65],detect:1.1,spread:2.7,settle:.85,burst:[2,4],pause:[.3,.7],hold:[1,3],memory:22,searchPts:[4,5],searchTime:26,share:26,radio:[.8,1.5],radioFail:0,mistake:.06,decide:[.4,.8],hear:1.15,hide:[.5,2.2],expose:[.6,1.4],glance:.45,switchSide:.45,peeks:[1,3],flank:.6,suppress:.6,bound:!0,nades:1,investigate:1,alarmDelay:[2,4],alarmChance:1,coverDelay:[.1,.5]}},gv={guard:{name:"Rifleman",aggr:.5,caut:.5},aggressor:{name:"Pointman",aggr:.85,caut:.25},cautious:{name:"Marksman",aggr:.25,caut:.85}},xv=17,Kt=s=>Ie(s[0],s[1]),nc=s=>Math.floor(Ie(s[0],s[1]+1)),ko=(s,e)=>{let t=s-e;for(;t>Math.PI;)t-=6.2832;for(;t<-Math.PI;)t+=6.2832;return t},vp=()=>(Math.random()+Math.random()+Math.random()-1.5)*1.4,Qi=(s,e)=>Math.atan2(-s,-e),ic=new P,_v=new P,sc=class{constructor(e,t,n,i,r,o,a={}){this.g=e,this.pr=o,this.type=gv[r],this.typeId=r;let c=o.bound?.2:.1;this.aggr=_n.clamp(this.type.aggr+Ie(-c,c),.05,1),this.caut=_n.clamp(this.type.caut+Ie(-c,c),.05,1),this.pos=new P(t,e.world.nav.height(t,n),n),this.yaw=Ie(6.28),this.hp=100,this.dead=!1,this.deadT=0,this.baseYaw=this.yaw,this.route=i,this.wi=0,this.dir=Math.random()<.5?1:-1,this.waitT=Ie(0,3),this.waitR=a.wait||[1,4.5],this.duty=a.duty||"patrol",this.home=a.home||i[0],this.order=null,this.holdPost=!1,this.tac=null,this.state="PATROL",this.stateT=0,this.phase="",this.t=Ie(10),this.path=null,this.pi=0,this.trav=null,this.approach=null,this.lkp=new P,this.lkpVel=new P,this.hasLkp=!1,this.lkpAge=99,this.detect=0,this.los=!1,this.seeBody=!1,this.seeing=!1,this.seenT=0,this.unseen=99,this.pd=99,this.percT=Ie(.15),this.bodyT=Ie(1),this.react=0,this.burst=0,this.shotT=0,this.ammo=30,this.reloading=!1,this.reloadT=0,this.blockT=0,this.blindT=0,this.decT=0,this.holdT=0,this.waited=0,this.supp=0,this.stun=0,this.shoutT=0,this.radioT=0,this.radioCool=0,this.openT=0,this.alerted=!1,this.crouch=!1,this.moved=0,this.leanW=0,this.suppLeft=0,this.nades=o.nades&&(r!=="cautious"||Math.random()<.5)?1:0,this.throwT=0,this.sus=new P,this.susT=0,this.after="check",this.search=[],this.searchEnd=0,this.spot=null,this.modes=[],this.mode=null,this.peeks=0,this.maxPeeks=3,this.hideT=0,this.phaseT=0,this.bad=new Set,this.wasHit=!1,this.ch=new Cr(o.bound?"elite":r,"carbine"),e.scene.add(this.ch.root),this.sync(),this.ch.refresh()}sync(){let e=this.ch.root;e.position.copy(this.pos),e.rotation.y=this.yaw}engaged(){return!this.dead&&this.hasLkp&&this.lkpAge<10&&(this.state==="COMBAT"||this.state==="COVER"||this.state==="MOVE")}combat(){return this.state==="COMBAT"||this.state==="COVER"||this.state==="MOVE"}set(e,t=""){this.state=e,this.stateT=0,this.phase=t,e!=="COVER"&&(this.crouch=!1)}release(){this.spot&&(this.spot.user===this&&(this.spot.user=null),this.spot=null),this.approach=null}goTo(e,t){return this.path=this.g.world.nav.path(this.pos.x,this.pos.z,e,t),this.pi=0,this.approach=null,!!this.path}follow(e,t){let n=this.pos;if(this.trav){let i=this.trav;i.t+=e/i.dur;let r=Math.min(1,i.t),o=r*r*(3-2*r);return n.x=i.x0+(i.x1-i.x0)*o,n.z=i.z0+(i.z1-i.z0)*o,n.y=i.type==="vault"?i.y0+(i.y1-i.y0)*o+(i.h-Math.min(i.y0,i.y1)+.1)*Math.sin(Math.PI*r):i.type==="climb"?i.y0+(i.y1-i.y0)*Math.min(1,r*1.7):i.y0+(i.y1-i.y0)*r*r,this.moved=2,this.moveYaw=Qi(i.x1-i.x0,i.z1-i.z0),r>=1&&(this.trav=null,this.pi++),!1}if(this.path&&this.pi<this.path.length){let i=this.path[this.pi];if(i.link){let h=i.link.type==="vault"?.9:i.link.type==="climb"?1.05:.55;return this.trav={x0:n.x,z0:n.z,y0:n.y,x1:i.x,z1:i.z,y1:i.y,h:i.link.h,type:i.link.type,t:0,dur:h},i.link.type!=="drop"&&this.ch.playFull("ClimbUp_1m",{speed:1.9/h,fade:.12}),!1}let r=i.x-n.x,o=i.z-n.z,a=Math.hypot(r,o);if(a<.2)return this.pi++,this.pi>=this.path.length&&!this.approach;let c=Math.min(a,t*e);n.x+=r/a*c,n.z+=o/a*c,this.moved=t,this.moveYaw=Qi(r,o);let l=this.g.world.nav.height(n.x,n.z);return n.y+=(l-n.y)*Math.min(1,e*10),!1}if(this.approach){let i=this.approach,r=i.x-n.x,o=i.z-n.z,a=Math.hypot(r,o);if(a<.08)return this.approach=null,!0;let c=Math.min(a,Math.min(t,2.2)*e);return n.x+=r/a*c,n.z+=o/a*c,this.moved=1.6,this.moveYaw=Qi(r,o),!1}return!0}canSee(){let e=this.g,t=e.player;if(t.dead||this.stun>0)return!1;let n=this.ch.eye(ic),i=t.pos.x-n.x,r=t.pos.z-n.z,o=Math.hypot(i,r);if(o>e.world.env.viewRange)return!1;let a=this.alerted||this.combat()?1.85:1.05;return o>2&&Math.abs(ko(Qi(i,r),this.yaw))>a?!1:(this.seeBody=e.los(n.x,n.y,n.z,t.pos.x+t.leanX*.4,t.pos.y+t.height*.5,t.pos.z+t.leanZ*.4),this.seeBody||e.los(n.x,n.y,n.z,t.eyePos.x,t.eyePos.y,t.eyePos.z))}hear(e,t,n){if(this.dead||this.seeing||this.stun>0)return;let i=t==="step"?1.5:1+n*.12,r=e.x+Ie(-i,i),o=e.z+Ie(-i,i),a=this.state==="PATROL"||this.state==="SEARCH";if(t==="ally"){a&&!this.holdPost&&(this.alerted=!0,this.suspect(r,o,"investigate",Ie(.5,1.5)));return}if(t==="shot"||t==="explosion"){if(this.alerted=!0,this.g.sec.suspicious(),(this.lkpAge>1.5||!this.hasLkp)&&(this.lkp.set(r,0,o),this.lkpVel.set(0,0,0),this.lkpAge=.5,this.hasLkp=!0),this.holdPost&&this.state==="COVER")return;a?this.suspect(r,o,this.duty==="objective"?"defend":"investigate",Ie(.4,1.2)/this.pr.detect):this.state==="SUSPICIOUS"?(this.sus.set(r,0,o),this.after==="check"&&(this.after="investigate")):this.state==="INVESTIGATE"&&Math.hypot(r-this.inv.x,o-this.inv.z)>8&&this.goInvestigate(r,o)}else a?this.suspect(r,o,"check",Ie(1,2)):this.combat()&&this.lkpAge>2&&(this.lkp.set(r,0,o),this.lkpAge=1)}suspect(e,t,n,i){this.release(),this.sus.set(e,0,t),this.after=n,this.susT=i,this.set("SUSPICIOUS"),this.path=null}onAlert(e,t){this.dead||this.seeing||this.stun>0||(this.alerted=!0,(this.lkpAge>2||!this.hasLkp)&&(this.lkp.set(e,0,t),this.lkpVel.set(0,0,0),this.lkpAge=1,this.hasLkp=!0),(this.state==="PATROL"||this.state==="SEARCH")&&this.suspect(e,t,this.duty==="objective"?"defend":Math.random()<this.pr.flank?"flank":"investigate",Ie(.3,1.2)))}flashbang(e){this.dead||(this.stun=Math.max(this.stun,e),this.detect=0,this.seeing=!1,this.los=!1,this.ch.playUpper("Hit_Head",{speed:.5}),this.trav||(this.path=null))}damage(e,t,n){if(!this.dead){if(this.hp-=e,this.supp=Math.min(1.5,this.supp+.6),this.wasHit=!0,this.hp<=0){this.dead=!0,this.release(),this.ch.die(n==="blast"),this.g.onKill(this);return}if(this.stun<=0&&this.ch.playUpper(n==="head"?"Hit_Head":"Hit_Chest",{speed:1.7,fade:.08}),this.state==="COVER"&&this.phase!=="hide"&&this.toHide(),!this.seeing){let i=Math.hypot(t.x-this.pos.x,t.z-this.pos.z),r=3+i*.1;this.alerted=!0,this.detect=Math.max(this.detect,.6),this.lkp.set(t.x+Ie(-r,r),0,t.z+Ie(-r,r)),this.lkpAge=.5,this.hasLkp=!0,this.react=Kt(this.pr.react)*.6,!this.combat()&&this.state!=="ALARM"&&this.engage()}}}rayHit(e,t,n){let i=this.pos,r=(i.x-e.x)*t.x+(i.y+.9-e.y)*t.y+(i.z-e.z)*t.z;if(r<-1.5||r>n+1.5)return null;let o=e.x+t.x*r-i.x,a=e.y+t.y*r-i.y-.9,c=e.z+t.z*r-i.z;return o*o+a*a+c*c>2.2?null:this.ch.rayHit(e,t,n,this.g.frame)}modesFor(e,t){let n=this.g,i=t.y+1.45;if(n.los(e.x,e.y+(e.high?1.35:.7),e.z,t.x,i,t.z))return null;let r=[];for(let o of e.sides)n.los(e.x+e.tx*o*.5,e.y+(e.high?1.5:1),e.z+e.tz*o*.5,t.x,i,t.z)&&r.push({type:"side",side:o});return e.over&&n.los(e.x,e.y+1.55,e.z,t.x,i,t.z)&&r.push({type:"over"}),r}pickCover(e,t,n,i){let r=this.g,o=r.world,a=n?n.x:this.pos.x,c=n?n.z:this.pos.z,l=i||(e==="retreat"?26:18),h=r.enemies.filter(f=>f!==this&&!f.dead&&f.engaged()).map(f=>Math.atan2(f.pos.z-t.z,f.pos.x-t.x)),d=o.objective.pos,u=[];for(let f of o.cover){if(f.user&&f.user!==this&&!f.user.dead||this.bad.has(f.id)||this.spot===f&&e!=="defend")continue;let p=Math.hypot(f.x-a,f.z-c);if(p>l)continue;let v=Math.hypot(f.x-t.x,f.z-t.z);if(v<5||v>46||((t.x-f.x)*-f.nx+(t.z-f.z)*-f.nz)/v<.3)continue;let m=-Math.hypot(f.x-this.pos.x,f.z-this.pos.z)*.55+(f.high?1.5:0)+f.sides.length*.6+Ie(0,2.5);if(e==="hold")m-=Math.abs(v-17)*.15;else if(e==="push")m-=v*.55;else if(e==="retreat"){if(v<this.pd+4)continue;m+=v*.4}else if(e==="flank"){let g=3.14,x=Math.atan2(f.z-t.z,f.x-t.x);for(let S of h)g=Math.min(g,Math.abs(ko(x,S)));m+=Math.min(g,1.9)*4.5-Math.abs(v-14)*.2}else e==="defend"&&(m-=p*1.2+Math.hypot(f.x-d[0],f.z-d[2])*.15);u.push([m,f])}u.sort((f,p)=>p[0]-f[0]);for(let f=0;f<Math.min(u.length,12);f++){let p=u[f][1],v=this.modesFor(p,t);if(v&&(v.length||e==="retreat"||e==="defend"))return{s:p,modes:v}}return null}takeCover(e,t=this.lkp,n,i){let r=this.pickCover(e,t,n,i);return!r||!this.goTo(r.s.cell.x,r.s.cell.z)?!1:(this.release(),this.spot=r.s,r.s.user=this,this.modes=r.modes,this.approach={x:r.s.x,z:r.s.z},this.set("MOVE",e),this.peeks=0,this.maxPeeks=nc(this.pr.peeks),this.wasHit=!1,!0)}toHide(e=0){if(this.phase="hide",this.hideT=Kt(this.pr.hide)+e,this.suppLeft=0,this.extended=!1,(this.peeks>=this.maxPeeks||this.wasHit)&&!this.holdPost&&this.g.sec.mayMove(this)){let t=this.tac;this.takeCover(t==="flank"?"flank":t==="push"?"push":this.hp<40?"retreat":"hold")}}afterHide(){let e=this.g,t=this.pr,n=this.spot;if(!this.hasLkp){if(this.modes=n.sides.map(o=>({type:"side",side:o})),n.over&&this.modes.push({type:"over"}),!this.modes.length){this.hideT=3;return}this.mode=this.modes[Math.floor(Math.random()*this.modes.length)],this.phase="glance",this.phaseT=Ie(.7,1.6);return}if(this.lkpAge>t.memory){this.holdPost?(this.hasLkp=!1,this.hideT=Ie(1,3)):this.startSearch(this.lkp.x,this.lkp.z);return}let i=this.modesFor(n,this.lkp);if(!i){this.bad.add(n.id),this.takeCover(this.hp<40?"retreat":"hold")||this.engage(!0);return}if(this.modes=i,this.tryGrenade()){this.hideT=1.6;return}if(this.unseen>this.holdT&&!this.holdPost&&this.nextMove())return;if(!i.length){this.hideT=Ie(.8,1.6),this.waited++,this.waited>2&&!this.holdPost&&!this.takeCover("hold")&&this.goInvestigate(this.lkp.x,this.lkp.z);return}if(t.mistake>.2&&Math.random()<t.mistake*.4&&this.unseen<3){this.engage(!0),this.openT=Ie(2,4);return}let r=i[Math.floor(Math.random()*i.length)];this.mode&&i.length>1&&Math.random()<t.switchSide?r=i.find(o=>o.type!==this.mode.type||o.side!==this.mode.side)||r:this.mode&&Math.random()>t.switchSide&&(r=i.find(o=>o.type===this.mode.type&&o.side===this.mode.side)||r),this.mode=r,this.blockT=0,this.blindT=0,Math.random()<t.glance&&this.unseen>1.2?(this.phase="glance",this.phaseT=Ie(.35,.9)):(this.phase="fire",this.phaseT=Kt(t.expose),this.peeks++,this.shotT=Math.min(this.shotT,.12),this.burst=0,this.suppLeft=Math.random()<t.suppress||this.tac==="suppress"?nc([1,2]):0)}nextMove(){let e=this.g,t=this.pr,n=this.tac,i=Math.random(),r=Math.hypot(this.lkp.x-this.pos.x,this.lkp.z-this.pos.z);if(!e.sec.mayMove(this))return this.hideT=Ie(.6,1.4),!0;let o;if(n==="flank")o=i<.75?"flank":"push";else if(n==="push")o=i<.7?"push":"flank";else if(n)o=this.waited<3?"wait":"push";else{let a=.3+this.aggr,c=t.flank*(.5+this.aggr),l=(.3+this.caut)*(this.waited<2?1:.2),h=i*(a+c+l);o=h<a?"push":h<a+c?"flank":"wait"}return o==="wait"?(this.holdT=this.unseen+Kt(t.hold),this.waited++,this.hideT=Kt(t.hide),!0):(this.waited=0,o==="push"&&r<10?(this.goInvestigate(this.lkp.x,this.lkp.z),!0):(this.takeCover(o)||this.goInvestigate(this.lkp.x,this.lkp.z),!0))}tryGrenade(){let e=this.g,t=this.lkp;if(this.nades<=0||e.sec.nadeCool>0||this.seeing||this.lkpAge<2.5||this.lkpAge>9)return!1;let n=this.ch.eye(ic),i=Math.hypot(t.x-n.x,t.z-n.z);if(i<9||i>26||e.enemies.some(l=>!l.dead&&Math.hypot(l.pos.x-t.x,l.pos.z-t.z)<7.5))return!1;let r=(n.x+t.x)/2,o=(n.z+t.z)/2,a=n.y+1.2+i*.16;if(!e.los(n.x,n.y+.3,n.z,r,a,o)||!e.los(r,a,o,t.x,t.y+.4,t.z))return!1;let c=this.tac==="push"||e.enemies.some(l=>!l.dead&&l.tac==="push"&&l.engaged())?Math.random()<.7:Math.random()<.3;return this.nades--,e.sec.nadeCool=14,this.throwT=.5,this.throwKind=c?"flash":"frag",this.throwAt={x:t.x+Ie(-1.5,1.5),y:t.y,z:t.z+Ie(-1.5,1.5),d:i},this.ch.playUpper("OverhandThrow",{speed:1.5}),e.say(this,c?"Flash out!":"Frag out!"),!0}engage(e){this.holdPost=this.holdPost&&this.duty==="objective",this.holdT=Kt(this.pr.hold),this.waited=0,this.decT=Kt(this.pr.decide),this.wantCrouch=Math.random()<.3*this.caut+.1,!(this.state==="COVER"&&!e)&&(this.release(),this.path=null,this.set("COMBAT"),this.openT=Kt(this.pr.coverDelay))}goInvestigate(e,t){this.release();let n=this.g.world.nav.nearest(e,t);if(!n||!this.goTo(n.x,n.z))return this.startSearch(this.pos.x,this.pos.z);this.inv=n,this.set("INVESTIGATE")}startSearch(e,t){let n=this.g,i=n.world.nav,r=this.pr,o=nc(r.searchPts),a=Math.random()<r.mistake;this.release(),this.search=[];let c=this.lkpVel,l=Math.hypot(c.x,c.z);for(let h=0;h<o;h++){let d=null;for(let u=0;u<(r.bound?5:2);u++){let f=Ie(6.283),p=a?Ie(9,17):Ie(3,11),v=e+Math.cos(f)*p,m=t+Math.sin(f)*p;h===0&&l>1.5&&r.label!=="RECRUIT"&&(v=e+c.x/l*Ie(5,10)+Ie(-2,2),m=t+c.z/l*Ie(5,10)+Ie(-2,2));let g=i.snap(v,m);if(g&&(d||(d=g),!n.los(g.x,g.y+1.2,g.z,e,g.y+1.4,t))){d=g;break}}d&&this.search.push(d)}this.searchEnd=this.t+r.searchTime,this.waitT=Ie(.5,1.5),this.path=null,this.set("SEARCH")}resume(){if(this.release(),this.hasLkp=!1,this.order&&this.doOrder())return;this.holdPost=!1,this.set("PATROL");let e=this.route[this.wi];this.goTo(e[0],e[1]),this.waitT=0,this.g.sec.level<2&&(this.alerted=!1)}setOrder(e){this.order=e,(this.state==="PATROL"||this.state==="SEARCH"||this.state==="COVER"&&this.holdPost&&!this.hasLkp)&&this.doOrder()}doOrder(){let e=this.order;return e?(this.alerted=!0,e.type==="investigate"?(this.order=null,this.holdPost=!1,this.goInvestigate(e.x,e.z),!0):(this.holdPost=!0,this.hasLkp=!1,this.lkp.set(e.tx,0,e.tz),this.spot&&this.state==="COVER"&&Math.hypot(this.spot.x-e.x,this.spot.z-e.z)<7&&this.modesFor(this.spot,this.lkp)||this.takeCover("defend",this.lkp,e,7)||(this.release(),this.route=[[e.x,e.z]],this.wi=0,this.waitR=[4,9],this.goTo(e.x,e.z),this.set("PATROL")),!0)):!1}goAlarm(){let e=this.g.world.panel;return this.release(),this.goTo(e.x,e.z)?(this.holdPost=!1,this.set("ALARM","run"),!0):!1}fire(e){let t=this.g,n=t.player,i=this.pr,r=this.ch;r.refresh();let o=r.muzzle(ic),a=o.x,c=o.y,l=o.z,h,d,u;e?(h=this.lkp.x,d=this.lkp.y+1.1,u=this.lkp.z):this.seeBody?(h=n.pos.x+n.leanX*.5,d=n.pos.y+n.height*.58,u=n.pos.z+n.leanZ*.5):(h=n.eyePos.x,d=n.eyePos.y-.06,u=n.eyePos.z);let f=h-a,p=d-c,v=u-l,m=Math.hypot(f,p,v);if(In(t.world.colliders,a,c,l,f/m,p/m,v/m,Math.min(m,1.7),"bullet"))return this.blockT+=.3,!1;this.ammo--;let g=i.spread*(1+this.pd/40)*(1+Math.min(n.speed,7)/7*.8)*(1+Math.max(0,1-(this.seenT+(this.state==="COVER"?i.settle*.4:0))/i.settle)*.9)*(this.supp>.5?1.35:1)*(e?1.7:1)*(n.crouch?1.15:1)*Math.PI/180,x=Math.atan2(f,v)+vp()*g,S=Math.atan2(p,Math.hypot(f,v))+vp()*g*.7,y=Math.cos(S);f=Math.sin(x)*y,p=Math.sin(S),v=Math.cos(x)*y;let b=In(t.world.colliders,a,c,l,f,p,v,120,"bullet"),E=b?b.d:120,_=In(t.playerBox(),a,c,l,f,p,v,E,"bullet"),M=_?_.d:E,I=t.v1.set(a,c,l),R=t.v2.set(a+f*M,c+p*M,l+v*M);return t.fx.tracer(I,R,16756848),_?n.damage(xv,this.pos,{name:this.type.name,dist:this.pd,x:this.pos.x,z:this.pos.z}):(b&&t.fx.impact(R,t.v3.set(b.nx,b.ny,b.nz)),t.nearMiss(a,c,l,f,p,v)),r.fire(),t.enemyShotSound(this),t.sound(this.pos,30,"ally",this),!0}update(e){let t=this.g,n=t.player,i=this.pr,r=this.ch;if(this.dead){this.deadT<4&&(this.deadT+=e,r.update(e,{speed:0}),this.pos.y>t.world.nav.height(this.pos.x,this.pos.z)+.02&&(this.pos.y=Math.max(t.world.nav.height(this.pos.x,this.pos.z),this.pos.y-e*4),this.sync()));return}if(this.t+=e,this.stateT+=e,this.moved=0,this.supp=Math.max(0,this.supp-e*.25),this.radioCool-=e,this.stun>0){this.stun-=e,this.crouch=!0,this.seeing=!1,this.los=!1,this.lkpAge+=e*2,this.unseen+=e,this.trav&&this.follow(e,0),r.update(e,{speed:0,crouch:!0,aim:!1,lean:0}),this.sync(),this.stun<=0&&(r.stopUpper(),this.react=Kt(i.react)+.4,this.state!=="COVER"?this.hasLkp&&!this.takeCover("hold")&&this.startSearch(this.pos.x,this.pos.z):this.toHide());return}(this.percT-=e)<=0&&(this.percT=.1+Math.random()*.05,this.los=this.canSee());let o=n.pos.x-this.pos.x,a=n.pos.z-this.pos.z;if(this.pd=Math.hypot(o,a),this.los){let x=i.detect*t.world.env.detect*(2.2*(1-this.pd/t.world.env.viewRange)+.25);this.pd<6&&(x*=3),n.crouch&&(x*=.55),n.speed>5.5?x*=1.4:n.speed<.5&&(x*=.8),this.seeBody||(x*=.6),this.alerted&&(x*=3),this.detect=Math.min(1,this.detect+x*e)}else this.detect=Math.max(0,this.detect-.3*e);let c=this.seeing;if(this.seeing=this.los&&this.detect>=1,this.seeing?(this.lkp.copy(n.pos),this.lkpVel.copy(n.vel),this.lkpAge=0,this.hasLkp=!0,this.unseen=0,this.seenT+=e,c||(this.react=Math.max(this.react,Kt(i.react)*(this.combat()?this.unseen<5?.25:.5:1)+(Math.random()<i.mistake*.5?Ie(.4,1):0)),this.alerted=!0,(this.state==="ALARM"?this.pd<12:!this.combat())&&this.engage(),this.shoutT<=0&&(this.shoutT=.7),this.radioCool<=0&&this.radioT<=0&&(this.radioT=Kt(i.radio)))):(this.lkpAge+=e,this.unseen+=e,this.seenT=0,c&&(this.holdT=Kt(i.hold),this.waited=0)),this.shoutT>0&&(this.shoutT-=e)<=0&&this.lkpAge<3&&t.shout(this),this.radioT>0&&(this.radioT-=e*(this.seeing&&this.state!=="COVER"?.5:1),this.radioT<=0&&(this.radioCool=7,Math.random()>=i.radioFail&&this.lkpAge<6&&(t.sec.radio(this,"contact",this.lkp.x,this.lkp.z),this.seeing||r.playUpper("Idle_TalkingPhone_Loop",{speed:1,fade:.2,loop:!1})))),!this.combat()&&this.state!=="ALARM"&&(this.bodyT-=e)<=0){this.bodyT=.8;for(let x of t.enemies)if(!(!x.dead||x.found||Math.hypot(x.pos.x-this.pos.x,x.pos.z-this.pos.z)>16)&&!(Math.abs(ko(Qi(x.pos.x-this.pos.x,x.pos.z-this.pos.z),this.yaw))>1.1||!t.los(this.pos.x,this.pos.y+1.6,this.pos.z,x.pos.x,x.pos.y+.4,x.pos.z))){x.found=!0,this.alerted=!0,this.suspect(x.pos.x,x.pos.z,"investigate",Ie(1,2)),this.bodyCall={x:x.pos.x,z:x.pos.z,t:Kt(i.radio)+1};break}}if(this.bodyCall&&(this.bodyCall.t-=e)<=0&&(Math.random()>=i.radioFail&&t.sec.radio(this,"body",this.bodyCall.x,this.bodyCall.z),this.bodyCall=null),this.reloading&&(this.reloadT-=e)<=0&&(this.reloading=!1,this.ammo=30),this.ammo<=0&&!this.reloading&&(this.reloading=!0,this.reloadT=2.3,r.playUpper("Pistol_Reload",{speed:.9})),this.throwT>0&&(this.throwT-=e)<=0){r.refresh();let x=r.bone("hand_r",_v),S=this.throwAt,y=1+S.d/20,b=14;t.spawnGrenade(this.throwKind,x.clone(),new P((S.x-x.x)/y,(S.y+.2-x.y+.5*b*y*y)/y,(S.z-x.z)/y),this)}let l=null,h=0,d=this.alerted||this.state!=="PATROL",u=!1,f=x=>Qi(x.x-this.pos.x,x.z-this.pos.z);switch(this.state){case"PATROL":if(this.waitT>0)this.waitT-=e,l=(this.baseYaw??this.yaw)+Math.sin(this.t*.6)*.9;else if(this.follow(e,this.alerted?2.2:1.45)){this.wi=(this.wi+this.dir+this.route.length)%this.route.length;let x=this.route[this.wi];this.goTo(x[0],x[1]),this.waitT=this.route.length<3||Math.random()<.6?Kt(this.waitR):0,this.baseYaw=this.yaw}this.los&&this.detect>.35&&(t.sec.suspicious(),this.suspect(n.pos.x+Ie(-2,2),n.pos.z+Ie(-2,2),"check",Ie(1.2,2.5))),d=!1;break;case"SUSPICIOUS":l=f(this.sus),(this.susT-=e)<=0&&(this.after==="defend"?(this.order=this.order||{type:"defend",x:this.home[0],z:this.home[1],tx:this.sus.x,tz:this.sus.z},this.doOrder()):this.after==="flank"&&this.hasLkp&&this.takeCover("flank")||(this.after!=="check"||Math.random()<i.investigate?this.goInvestigate(this.sus.x,this.sus.z):this.resume()));break;case"INVESTIGATE":{let x=this.follow(e,this.alerted?3.1:2.3),S=Math.hypot(this.inv.x-this.pos.x,this.inv.z-this.pos.z);S<6&&(l=f(this.inv)),(x||this.stateT>35||S<5&&this.stateT>1&&t.los(this.pos.x,this.pos.y+1.5,this.pos.z,this.inv.x,this.inv.y+1,this.inv.z))&&this.startSearch(this.inv.x,this.inv.z);break}case"SEARCH":if(this.waitT>0)this.waitT-=e,l=(this.baseYaw??this.yaw)+Math.sin(this.t*1.3)*1.3;else if(this.follow(e,2.2))if(this.baseYaw=this.yaw,this.t>this.searchEnd||!this.search.length)this.resume();else{let x=this.search.shift();this.goTo(x.x,x.z),this.waitT=Ie(1,2.5)}break;case"ALARM":if(this.phase==="run")this.follow(e,4.4)&&(this.phase="press",this.phaseT=1.1,r.playUpper("Interact",{speed:1.3}));else{let x=t.world.panel.face;l=Qi(x[0],x[1]),(this.phaseT-=e)<=0&&(t.sec.lockdown("ALARM TRIGGERED"),this.resume())}break;case"COMBAT":if(l=f(this.lkp),this.crouch=!!this.wantCrouch&&!this.moved,this.path&&this.pi<this.path.length&&this.follow(e,1.7),(this.openT-=e)<=0&&(this.decT-=e)<=0){this.decT=Kt(i.decide);let x=this.hp<40&&Math.random()<.5+this.caut*.5;if(this.takeCover(x?"retreat":this.tac==="flank"?"flank":"hold"))break;if(this.tryGrenade()){this.openT=1.2;break}if(!this.seeing&&this.unseen>this.holdT){this.lkpAge>i.memory?this.startSearch(this.lkp.x,this.lkp.z):this.goInvestigate(this.lkp.x,this.lkp.z);break}if(this.wantCrouch=Math.random()<.3+this.caut*.3,Math.random()<.5){let S=this.yaw+(Math.random()<.5?1.57:-1.57),y=t.world.nav.snap(this.pos.x-Math.sin(S)*2.2,this.pos.z-Math.cos(S)*2.2);y&&this.goTo(y.x,y.z)}}break;case"MOVE":{if(this.phase!=="defend"&&this.seeing&&this.pd<7&&this.stateT>.6){this.engage(!0),this.openT=Ie(.8,1.6);break}if(this.follow(e,this.phase==="retreat"?4.6:this.phase==="defend"?3.4:4.3)){if(!this.spot){this.engage(!0);break}this.set("COVER","hide"),this.hideT=Ie(.3,1),this.mode=null,this.ammo<15&&!this.reloading&&(this.reloading=!0,this.reloadT=2.3,r.playUpper("Pistol_Reload",{speed:.9}))}break}case"COVER":{let x=this.spot,S=this.mode;if(l=f(this.hasLkp||this.holdPost?this.lkp:ic.set(x.x-x.nx*5,0,x.z-x.nz*5)),this.phase==="hide")this.crouch=!x.high,this.hideT-=e*(this.supp>.6?.3:1),this.hideT<=0&&!this.reloading&&this.throwT<=0&&this.afterHide();else{let y=this.phase==="glance"?.75:1+Math.min(.3,this.blockT);S.type==="side"?(this.crouch=!x.high,h=(x.tx*S.side*Math.cos(this.yaw)-x.tz*S.side*Math.sin(this.yaw))*y):this.crouch=!1,this.phaseT-=e,this.phase==="glance"?this.phaseT<=0&&(this.seeing&&this.hasLkp?(this.phase="fire",this.phaseT=Kt(i.expose),this.peeks++,this.shotT=Math.min(this.shotT,.12),this.burst=0):this.toHide(this.hasLkp?0:Ie(1,3))):(this.seeing?this.blindT=0:(this.blindT+=e,u=this.suppLeft>0&&this.lkpAge<4&&this.blindT>.3),this.blockT>.9?(this.modes=this.modes.filter(b=>b!==S),this.modes.length||this.bad.add(x.id),this.peeks=99,this.toHide()):this.phaseT<=0&&this.seeing&&!this.extended&&this.supp<.4&&this.ammo>4&&Math.random()<.55?(this.extended=!0,this.phaseT=Ie(.5,1.1)):(this.phaseT<=0||this.ammo<=0||this.blindT>.7&&!u)&&this.toHide())}break}}if(this.seeing||u){let x=this.seeing?Qi(o,a):f(this.lkp);this.moved<3&&(l=x),this.react>0&&(this.react-=e);let S=this.state!=="COVER"||this.phase==="fire"&&Math.abs(r.lean-h)<.3&&r.crouchW<(this.crouch?1.1:.35);!this.reloading&&!this.trav&&this.throwT<=0&&this.moved<2.5&&S&&(this.state==="COMBAT"||this.state==="COVER")&&this.react<=0&&Math.abs(ko(x,this.yaw))<.3&&r.aimW>.8&&(this.shotT-=e)<=0&&(this.burst<=0&&(this.burst=nc(i.burst),u&&this.suppLeft--),this.fire(u)?(this.burst--,this.shotT=this.burst>0?.115:Kt(i.pause)):this.shotT=.15)}let p=l??(this.moved?this.moveYaw:this.yaw),v=(this.combat()?7:3.5)*e,m=ko(p,this.yaw);this.yaw+=Math.max(-v,Math.min(v,m));let g=this.seeing?Math.atan2(n.pos.y+n.height*.6-(this.pos.y+1.4),Math.max(1,this.pd)):0;r.update(e,{speed:this.trav?0:this.moved,crouch:this.crouch&&!this.moved,aim:d&&this.moved<3.5&&!this.trav,pitch:g,lean:h}),this.sync()}};var Su=["NORMAL","SUSPICIOUS","ALERT","LOCKDOWN"],Mp=s=>Ie(s[0],s[1]),rc=class{constructor(e,t){this.g=e,this.pr=t,this.level=0,this.t=0,this.calm=0,this.report=null,this.tick=0,this.sector=new Float32Array(8),this.runner=null,this.alarmAt=-1,this.nadeCool=6,this.reinforced=!1,this.reinAt=-1,this.assigned=-1}raise(e,t){if(this.calm=0,e<=this.level)return!1;if(this.level=e,this.g.onSecurity(e,t),e>=2)for(let n of this.g.enemies)n.dead||(n.alerted=!0);return!0}sectorOf(e,t){let n=this.g.world.objective.pos;return(Math.round(Math.atan2(e-n[0],t-n[2])/(Math.PI/4))%8+8)%8}hotSector(){let e=-1,t=1.5;for(let n=0;n<8;n++)this.sector[n]>t&&(t=this.sector[n],e=n);return e}setReport(e,t,n,i){let r=i==="body"?0:3.5;this.report={x:e+Ie(-r,r),z:t+Ie(-r,r),t:this.t,by:n,kind:i},this.sector[this.sectorOf(e,t)]+=1,this.assign()}radio(e,t,n,i){let r=this.raise(2,t==="body"?"MAN DOWN REPORTED":"INTRUDER REPORTED");this.setReport(n,i,e,t),this.g.say(e,t==="body"?"Man down! Sweep the area!":r?"Contact! Intruder on site!":"Contact, updating position!"),r&&this.g.world.panel&&(this.alarmAt=Math.random()<this.pr.alarmChance?this.t+Mp(this.pr.alarmDelay):1/0)}suspicious(){this.raise(1,"")}lockdown(e){this.raise(3,e)&&(this.reinforced||(this.reinforced=!0,this.reinAt=this.t+Ie(12,18)),this.assign(!0))}mayMove(e){if(!this.pr.bound)return!0;let t=this.g.enemies.filter(r=>!r.dead&&r!==e&&r.engaged());if(!t.length)return!0;let n=t.filter(r=>r.state==="MOVE").length;return t.filter(r=>r.state==="COVER"||r.seeing).length>=1&&n<Math.ceil((t.length+1)/2)}assign(e){let t=this.g,n=this.report,i=t.world;if(!n||this.level<2)return;this.assigned=n.t;let r=t.enemies.filter(f=>!f.dead&&!f.engaged()&&f!==this.runner&&f.stun<=0&&f.state!=="ALARM"),o=(f,p,v)=>Math.hypot(f.pos.x-p,f.pos.z-v),a=t.enemies.filter(f=>!f.dead&&f.duty==="objective");for(let f of r)f.duty==="objective"&&f.setOrder({type:"defend",x:f.home[0],z:f.home[1],tx:n.x,tz:n.z});let c=r.filter(f=>f.duty!=="objective").sort((f,p)=>o(f,n.x,n.z)-o(p,n.x,n.z)),l=this.level===3?1:2,h=i.objective.pos;if(c.splice(0,l).forEach((f,p)=>f.setOrder({type:"investigate",x:n.x+(p?Ie(-5,5):0),z:n.z+(p?Ie(-5,5):0),flank:p>0&&this.pr.flank>.3})),this.pr===void 0||this.pr.label==="RECRUIT")return;if(a.length<2&&c.length){let f=c.shift(),p=i.posts.objective[0];f.duty="objective",f.home=p,f.setOrder({type:"defend",x:p[0],z:p[1],tx:n.x,tz:n.z})}let d=this.hotSector(),u=new Set;for(let f of c){let p=null,v=1e9;if(i.posts.entrance.forEach((g,x)=>{if(u.has(x))return;let S=Math.hypot(g[0]-n.x,g[1]-n.z)+Math.hypot(g[0]-h[0],g[1]-h[2])*.6+o(f,g[0],g[1])*.3;d>=0&&this.sectorOf(g[0],g[1])===d&&(S-=8),S<v&&(v=S,p=x)}),p===null)break;u.add(p);let m=i.posts.entrance[p];f.setOrder({type:"defend",x:m[0],z:m[1],tx:n.x,tz:n.z,name:m[2]})}}update(e){let t=this.g;this.t+=e,this.calm+=e,this.nadeCool-=e;let n=t.enemies.filter(r=>!r.dead),i=n.filter(r=>r.engaged());if(i.length&&(this.calm=0),this.level===1&&this.calm>30&&(this.level=0,t.onSecurity(0,"")),this.level===2&&this.calm>80){this.level=1,this.calm=0,t.onSecurity(1,"SEARCH CALLED OFF");for(let r of n)r.order=null}if(this.reinAt>0&&this.t>=this.reinAt&&(this.reinAt=-1,t.reinforce()),!((this.tick-=e)>0)){if(this.tick=.6,this.pr.label!=="RECRUIT"){let r=0;for(let o of i){if(o.duty==="objective"){o.tac="hold";continue}this.pr.bound?o.tac=o.aggr>.65?"push":o.caut>.65?"overwatch":r%2?"flank":"suppress":o.tac=["hold","flank","hold","push"][r%4],r++}this.pr.bound&&i.length>1&&!i.some(o=>o.tac==="suppress"||o.tac==="overwatch")&&(i[0].tac="suppress")}if(this.runner&&(this.runner.dead||this.runner.state!=="ALARM")&&(this.level<3&&this.runner.dead&&(this.alarmAt=this.t+Mp(this.pr.alarmDelay)),this.runner=null),this.level===2&&t.world.panel&&!this.runner&&this.alarmAt>=0&&this.t>=this.alarmAt){let r=t.world.panel,o=n.filter(a=>!a.engaged()&&a.stun<=0).sort((a,c)=>Math.hypot(a.pos.x-r.x,a.pos.z-r.z)-Math.hypot(c.pos.x-r.x,c.pos.z-r.z))[0];o&&o.goAlarm()?(this.runner=o,t.say(o,"Going for the alarm!")):this.alarmAt=this.t+3}this.level>=2&&this.report&&this.assigned!==this.report.t&&this.assign()}}};var yv={frag:2.8,flash:1.9,smoke:1.6},vv=14,Mv={frag:new bi(.045,10,8),flash:new gt(.03,.03,.11,10),smoke:new gt(.033,.033,.13,10)},Sv={frag:new At({color:3095078,roughness:.6,metalness:.3}),flash:new At({color:9080724,roughness:.4,metalness:.7}),smoke:new At({color:5989488,roughness:.5,metalness:.5})},oc=class{constructor(e){this.g=e,this.list=[],this.smokes=[],this._v=new P}spawn(e,t,n,i){let r=new Ge(Mv[e],Sv[e]);r.position.copy(t),r.castShadow=!0,this.g.scene.add(r),this.list.push({type:e,pos:t,vel:n,owner:i,fuse:yv[e],mesh:r,rest:!1}),this.g.audio.swish()}update(e){let t=this.g,n=t.world.colliders;for(let i=this.list.length-1;i>=0;i--){let r=this.list[i],o=r.pos,a=r.vel;if(r.fuse-=e,!r.rest){a.y-=vv*e;let c=a.length(),l=c*e,h=l>1e-4?In(n,o.x,o.y,o.z,a.x/c,a.y/c,a.z/c,l+.05,"solid"):null;if(h){let d=a.x*h.nx+a.y*h.ny+a.z*h.nz;o.addScaledVector(a,Math.max(0,(h.d-.05)/c)),a.x-=1.35*d*h.nx,a.y-=1.35*d*h.ny,a.z-=1.35*d*h.nz,a.multiplyScalar(.72),c>2.5&&(t.audio.bounce(Math.min(.3,c*.03)),r.owner==="player"&&t.sound(o,7,"step"))}else o.addScaledVector(a,e);o.y<.05&&(o.y=.05,Math.abs(a.y)>1.5&&t.audio.bounce(.15),a.y*=-.3,a.x*=.6,a.z*=.6),a.lengthSq()<.09&&o.y<.08&&(r.rest=!0),r.mesh.position.copy(o),r.mesh.rotation.x+=e*c*2,r.mesh.rotation.z+=e*c}r.fuse<=0&&(this.detonate(r),t.scene.remove(r.mesh),this.list.splice(i,1))}for(let i=this.smokes.length-1;i>=0;i--){let r=this.smokes[i];if(r.t-=e,(r.puff-=e)<=0&&r.t>2.5&&(r.puff=.22,t.fx.puff(this._v.set(r.x+(Math.random()-.5)*4,r.y+.4+Math.random()*2,r.z+(Math.random()-.5)*4),3.2+Math.random()*1.6,3.6,10133668,.12,.6)),r.t<=0){let o=n.indexOf(r.col);o>=0&&n.splice(o,1),this.smokes.splice(i,1)}}}detonate(e){let t=this.g,n=t.player,i=e.pos,r=i.y+.35,o=Math.hypot(n.pos.x-i.x,n.pos.z-i.z);if(e.type==="frag"){t.fx.explosion(i),t.audio.explosion(o),t.sound(i,70,"explosion");let a=(l,h,d,u)=>{let f=Math.hypot(l-i.x,h+u*.5-r,d-i.z);if(f>8)return 0;let p=t.losB(i.x,r,i.z,l,h+u*.55,d)?1:t.losB(i.x,r,i.z,l,h+u*.9,d)?.45:0;return 150*Math.pow(1-f/8,1.3)*p};for(let l of t.enemies){if(l.dead)continue;let h=a(l.pos.x,l.pos.y,l.pos.z,l.crouch?1.1:1.75);h>1&&(l.damage(h,i,"blast"),l.dead||(l.supp=1.5))}let c=a(n.pos.x,n.pos.y,n.pos.z,n.height);c>1&&n.damage(c,i,{name:e.owner==="player"?"your own grenade":"a fragmentation grenade",dist:o,x:i.x,z:i.z,blast:!0}),o<25&&(n.shake=Math.max(n.shake,1.2*(1-o/25)))}else if(e.type==="flash"){t.fx.boom.position.set(i.x,r,i.z),t.fx.boom.intensity=2500,t.sound(i,40,"explosion");for(let c of t.enemies){if(c.dead)continue;let l=Math.hypot(c.pos.x-i.x,c.pos.z-i.z);if(l>17)continue;let h=c.ch.eye(this._v);if(!t.los(i.x,r,i.z,h.x,h.y,h.z))continue;let d=Math.atan2(-(i.x-c.pos.x),-(i.z-c.pos.z))-c.yaw;for(;d>Math.PI;)d-=6.2832;for(;d<-Math.PI;)d+=6.2832;let u=5*(1-l/19)*(Math.abs(d)<1.7?1:.4);u>.6&&c.flashbang(u)}let a=0;if(o<22&&t.los(i.x,r,i.z,n.eyePos.x,n.eyePos.y,n.eyePos.z)){let c=(n.fwd.x*(i.x-n.eyePos.x)+n.fwd.y*(r-n.eyePos.y)+n.fwd.z*(i.z-n.eyePos.z))/(Math.hypot(i.x-n.eyePos.x,r-n.eyePos.y,i.z-n.eyePos.z)||1);a=2.8*(1-o/24)*(c>.2?1:c>-.3?.55:.25),n.blind=Math.max(n.blind,a)}t.audio.flashbang(a)}else{let a={x0:i.x-2.8,x1:i.x+2.8,y0:0,y1:i.y+3.4,z0:i.z-2.8,z1:i.z+2.8,solid:!1,bullet:!1,sight:!0,smoke:!0};t.world.colliders.push(a),this.smokes.push({x:i.x,y:i.y,z:i.z,t:15,puff:0,col:a}),t.audio.noise(1.2,{f:3e3,f2:800,type:"bandpass",q:1,vol:.2});for(let c=0;c<10;c++)t.fx.puff(this._v.set(i.x+(Math.random()-.5)*3.5,i.y+.4+Math.random()*2,i.z+(Math.random()-.5)*3.5),3.5,4,10133668,.12,.6)}}};var Ir=320,ac=class{constructor(e){this.tr=[];let t=new Wt(.02,.02,1);t.translate(0,0,.5);for(let d=0;d<28;d++){let u=new Ge(t,new lt({color:16769696,transparent:!0,opacity:0,blending:Hn,depthWrite:!1,fog:!1}));u.visible=!1,u.life=0,e.add(u),this.tr.push(u)}this.ti=0,this.pp=new Float32Array(Ir*3).fill(-999),this.pc=new Float32Array(Ir*3),this.pv=new Float32Array(Ir*3),this.pl=new Float32Array(Ir);let n=this.pg=new at;n.setAttribute("position",new bt(this.pp,3)),n.setAttribute("color",new bt(this.pc,3));let i=new vi(n,new Jn({size:.07,vertexColors:!0,transparent:!0,depthWrite:!1}));i.frustumCulled=!1,e.add(i),this.pi=0,this.dec=[];let r=new Bn(.13,.13),o=new lt({color:526602,transparent:!0,opacity:.85,polygonOffset:!0,polygonOffsetFactor:-4});for(let d=0;d<48;d++){let u=new Ge(r,o);u.visible=!1,e.add(u),this.dec.push(u)}this.di=0,this.flash=new ln(16760944,0,16,1.5),e.add(this.flash),this.boom=new ln(16756832,0,40,1.4),e.add(this.boom);let a=document.createElement("canvas");a.width=a.height=64;let c=a.getContext("2d"),l=c.createRadialGradient(32,32,2,32,32,32);l.addColorStop(0,"rgba(255,255,255,0.9)"),l.addColorStop(.5,"rgba(255,255,255,0.45)"),l.addColorStop(1,"rgba(255,255,255,0)"),c.fillStyle=l,c.fillRect(0,0,64,64);let h=new Mi(a);this.puffs=[];for(let d=0;d<48;d++){let u=new so(new sr({map:h,transparent:!0,opacity:0,depthWrite:!1,color:8947848}));u.visible=!1,u.life=0,e.add(u),this.puffs.push(u)}this.pfi=0,this._v=new P}tracer(e,t,n=16769696){let i=this.tr[this.ti++%this.tr.length];i.position.copy(e),i.lookAt(t),i.scale.z=Math.max(.1,e.distanceTo(t)),i.material.color.setHex(n),i.material.opacity=.55,i.visible=!0,i.life=.07}spray(e,t,n,i,r,o,a,c){for(let l=0;l<n;l++){let h=this.pi++%Ir,d=h*3;this.pp[d]=e.x,this.pp[d+1]=e.y,this.pp[d+2]=e.z,this.pv[d]=(t.x+(Math.random()-.5)*1.4)*i*Math.random(),this.pv[d+1]=(t.y+(Math.random()-.3)*1.4)*i*Math.random(),this.pv[d+2]=(t.z+(Math.random()-.5)*1.4)*i*Math.random();let u=.6+Math.random()*.4;this.pc[d]=r*u,this.pc[d+1]=o*u,this.pc[d+2]=a*u,this.pl[h]=c*(.5+Math.random()*.5)}}impact(e,t){this.spray(e,t,7,3.2,.75,.68,.55,.45),this.spray(e,t,3,6,1,.8,.4,.15);let n=this.dec[this.di++%this.dec.length];n.position.set(e.x+t.x*.012,e.y+t.y*.012,e.z+t.z*.012),n.lookAt(this._v.set(e.x+t.x,e.y+t.y,e.z+t.z)),n.rotation.z=Math.random()*6,n.scale.setScalar(1),n.visible=!0}blood(e,t){this.spray(e,t,10,2.6,.5,.04,.03,.5)}muzzle(e){this.flash.position.copy(e),this.flash.intensity=45}shell(e,t){this.spray(e,t,1,2.6,.9,.68,.25,.7)}puff(e,t,n,i=9079434,r=.4,o=.5){let a=this.puffs[this.pfi++%this.puffs.length];a.position.copy(e),a.scale.setScalar(t*.5),a.size=t,a.life=a.max=n,a.rise=r,a.op=o,a.material.color.setHex(i),a.material.rotation=Math.random()*6,a.visible=!0}explosion(e){this.boom.position.set(e.x,e.y+.6,e.z),this.boom.intensity=900;let t=this._v.set(0,1,0);this.spray(e,t,40,14,1,.7,.25,.5),this.spray(e,t,30,9,.35,.33,.3,1.1);for(let i=0;i<6;i++)this.puff(new P(e.x+(Math.random()-.5)*2,e.y+.5+Math.random(),e.z+(Math.random()-.5)*2),3+Math.random()*2,2.2+Math.random(),5591114,.9,.55);let n=this.dec[this.di++%this.dec.length];n.position.set(e.x,Math.max(.02,e.y-.04),e.z),n.rotation.set(-Math.PI/2,0,Math.random()*6),n.scale.setScalar(14),n.visible=!0}update(e){for(let r of this.tr)r.visible&&(r.life-=e,r.material.opacity=Math.max(0,r.life/.07)*.55,r.life<=0&&(r.visible=!1));let{pp:t,pv:n,pl:i}=this;for(let r=0;r<Ir;r++){if(i[r]<=0)continue;let o=r*3;i[r]-=e,n[o+1]-=9*e,t[o]+=n[o]*e,t[o+1]+=n[o+1]*e,t[o+2]+=n[o+2]*e,i[r]<=0&&(t[o+1]=-999)}this.pg.attributes.position.needsUpdate=!0,this.pg.attributes.color.needsUpdate=!0,this.flash.intensity>0&&(this.flash.intensity=Math.max(0,this.flash.intensity-e*700)),this.boom.intensity>0&&(this.boom.intensity=Math.max(0,this.boom.intensity-e*4500));for(let r of this.puffs)if(r.visible){r.life-=e;let o=1-r.life/r.max;r.scale.setScalar(r.size*(.5+o*.7)),r.position.y+=r.rise*e,r.material.opacity=r.op*Math.min(1,o*6)*Math.min(1,r.life/r.max*2.2),r.life<=0&&(r.visible=!1)}}};var lc=class{init(){if(this.ctx){this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e,n=t.createDynamicsCompressor();this.master=t.createGain(),this.master.gain.value=.75,this.master.connect(n),n.connect(t.destination);let i=t.sampleRate*2,r=this.nb=t.createBuffer(1,i,t.sampleRate),o=r.getChannelData(0);for(let a=0;a<i;a++)o[a]=Math.random()*2-1;this.amb=[]}out(e){if(!e||!this.ctx.createStereoPanner)return this.master;let t=this.ctx.createStereoPanner();return t.pan.value=Math.max(-1,Math.min(1,e)),t.connect(this.master),t}noise(e,{f:t=2e3,f2:n,q:i=.7,type:r="lowpass",vol:o=1,pan:a=0,at:c=0}={}){let l=this.ctx;if(!l)return;let h=l.currentTime+c,d=l.createBufferSource(),u=l.createBiquadFilter(),f=l.createGain();d.buffer=this.nb,d.loop=!0,u.type=r,u.Q.value=i,u.frequency.setValueAtTime(t,h),n&&u.frequency.exponentialRampToValueAtTime(n,h+e),f.gain.setValueAtTime(o,h),f.gain.exponentialRampToValueAtTime(.001,h+e),d.connect(u),u.connect(f),f.connect(this.out(a)),d.start(h,Math.random()),d.stop(h+e+.02)}tone(e,t,{f2:n,type:i="sine",vol:r=.3,pan:o=0,at:a=0}={}){let c=this.ctx;if(!c)return;let l=c.currentTime+a,h=c.createOscillator(),d=c.createGain();h.type=i,h.frequency.setValueAtTime(e,l),n&&h.frequency.exponentialRampToValueAtTime(n,l+t),d.gain.setValueAtTime(r,l),d.gain.exponentialRampToValueAtTime(.001,l+t),h.connect(d),d.connect(this.out(o)),h.start(l),h.stop(l+t+.02)}shot(e,t){if(t){this.noise(.09,{f:1700,f2:500,q:1.2,type:"bandpass",vol:e==="dmr"?.5:.36}),this.tone(170,.05,{f2:70,vol:.2,type:"triangle"}),this.click(.22);return}e==="ak"?(this.noise(.26,{f:2600,f2:300,vol:1}),this.tone(130,.2,{f2:38,vol:.9,type:"triangle"}),this.noise(.05,{f:5e3,type:"highpass",vol:.35})):e==="m4"?(this.noise(.17,{f:4200,f2:600,vol:.8}),this.tone(190,.12,{f2:60,vol:.55,type:"triangle"}),this.noise(.04,{f:6500,type:"highpass",vol:.4})):e==="dmr"?(this.noise(.4,{f:2200,f2:180,vol:1.1}),this.tone(95,.32,{f2:30,vol:1,type:"triangle"}),this.noise(.06,{f:4500,type:"highpass",vol:.4}),this.noise(.7,{f:500,f2:120,vol:.2,at:.08})):e==="shotgun"?(this.noise(.36,{f:1500,f2:160,vol:1.2}),this.tone(85,.3,{f2:28,vol:1.1,type:"triangle"}),this.click(.5,.33),this.click(.55,.47)):e==="smg"?(this.noise(.1,{f:3800,f2:900,vol:.6}),this.tone(240,.07,{f2:100,vol:.4,type:"triangle"})):(this.noise(.11,{f:3400,f2:700,vol:.7}),this.tone(260,.09,{f2:90,vol:.5,type:"square"}))}enemyShot(e,t){let n=Math.max(.05,.75/(1+e*.07));this.noise(.22,{f:Math.max(500,2600-e*35),f2:250,vol:n,pan:t}),this.tone(120,.16,{f2:45,vol:n*.7,pan:t,type:"triangle"})}reload(e,t){if(t){this.click(.5,e*.7);return}this.click(.5),this.noise(.05,{f:1800,type:"bandpass",q:3,vol:.4,at:e*.45}),this.click(.6,e*.8),this.click(.7,e*.92)}swish(){this.noise(.16,{f:900,f2:3200,type:"bandpass",q:2,vol:.3})}stab(e){this.noise(.12,{f:500,f2:150,vol:.6}),this.tone(e?110:180,.12,{f2:60,vol:.4})}medkit(){for(let e=0;e<5;e++)this.noise(.12,{f:1200+e*200,type:"bandpass",q:2,vol:.14,at:e*.42})}stim(){this.noise(.25,{f:5e3,f2:1500,type:"highpass",vol:.2}),this.tone(440,.3,{f2:880,vol:.12,type:"sine",at:.1})}bounce(e=.3){this.tone(900,.04,{f2:500,vol:e,type:"square"}),this.noise(.03,{f:2500,type:"bandpass",q:4,vol:e})}explosion(e){let t=Math.max(.15,1.4/(1+e*.05));this.noise(.9,{f:900,f2:60,vol:t}),this.tone(70,.7,{f2:22,vol:t,type:"triangle"}),this.noise(1.6,{f:300,f2:60,vol:t*.35,at:.15})}flashbang(e){this.noise(.25,{f:6e3,type:"highpass",vol:.9}),this.tone(140,.25,{f2:50,vol:.7}),e>.3&&this.tone(3400,1.2+e*1.6,{vol:.09*Math.min(1.5,e),type:"sine",at:.05})}radio(){this.noise(.07,{f:2400,type:"bandpass",q:3,vol:.22}),this.tone(1250,.06,{vol:.07,type:"square",at:.07}),this.noise(.05,{f:2400,type:"bandpass",q:3,vol:.18,at:.5})}alert(e){(e>=3?[660,880,660,880]:e===2?[440,587]:[392]).forEach((n,i)=>this.tone(n,.22,{vol:.16,type:"sawtooth",at:i*.2}))}siren(e){let t=this.ctx;if(!t)return;if(this.sir){try{this.sir[0].stop(),this.sir[1].stop()}catch{}this.sir=null}if(!e)return;let n=t.createOscillator(),i=t.createOscillator(),r=t.createGain(),o=t.createGain();n.type="sawtooth",n.frequency.value=620,i.frequency.value=.45,r.gain.value=140,o.gain.value=.035,i.connect(r),r.connect(n.frequency),n.connect(o),o.connect(this.master),n.start(),i.start(),o.gain.setValueAtTime(.035,t.currentTime+14),o.gain.linearRampToValueAtTime(.012,t.currentTime+20),this.sir=[n,i]}click(e=.5,t=0){this.noise(.035,{f:3200,type:"bandpass",q:5,vol:e,at:t}),this.tone(900,.02,{vol:e*.2,type:"square",at:t})}step(e=.2){this.noise(.09,{f:500+Math.random()*250,f2:150,vol:e})}land(){this.noise(.16,{f:420,f2:90,vol:.45})}hit(e){this.tone(e?520:1500,e?.16:.05,{f2:e?240:1100,vol:.22,type:"square"})}hurt(){this.noise(.18,{f:700,f2:120,vol:.7}),this.tone(90,.2,{f2:50,vol:.5})}whiz(e){this.noise(.09,{f:2500,f2:6e3,type:"bandpass",q:6,vol:.18,pan:e})}pickup(){this.tone(660,.08,{vol:.2,type:"triangle"}),this.tone(990,.12,{vol:.2,type:"triangle",at:.08})}beep(e){this.tone(e?700:1100,.07,{f2:e?1300:600,vol:.14,type:"square"})}objective(){[523,659,784].forEach((e,t)=>this.tone(e,.18,{vol:.2,type:"triangle",at:t*.11}))}win(){[392,523,659,784,1047].forEach((e,t)=>this.tone(e,.5,{vol:.22,type:"triangle",at:t*.16}))}lose(){[330,262,196,131].forEach((e,t)=>this.tone(e,.6,{vol:.25,type:"sawtooth",at:t*.22}))}ambient(e){let t=this.ctx;if(!t)return;this.stopAmbient();let n=t.createGain();n.gain.value=0,n.gain.linearRampToValueAtTime(1,t.currentTime+2),n.connect(this.master);let i=t.createBufferSource(),r=t.createBiquadFilter(),o=t.createGain(),a=t.createOscillator(),c=t.createGain();if(i.buffer=this.nb,i.loop=!0,r.type="lowpass",r.frequency.value=e==="forest"?520:180,o.gain.value=e==="forest"?.16:.22,a.frequency.value=.11,c.gain.value=e==="forest"?.09:.03,a.connect(c),c.connect(o.gain),i.connect(r),r.connect(o),o.connect(n),i.start(),a.start(),this.amb=[i,a],e==="warehouse")for(let[l,h]of[[50,.05],[100,.02]]){let d=t.createOscillator(),u=t.createGain();d.frequency.value=l,u.gain.value=h,d.connect(u),u.connect(n),d.start(),this.amb.push(d)}this.ambGain=n,this.ambTimer=setInterval(()=>{if(t.state!=="running")return;let l=Math.random()*1.6-.8;if(e==="forest")if(Math.random()<.7)for(let h=0;h<3;h++)this.tone(4100+Math.random()*300,.04,{vol:.018,pan:l,at:h*.07});else this.tone(380,.5,{f2:300,vol:.02,pan:l});else Math.random()<.5&&this.tone(1400+Math.random()*900,.5,{vol:.02,pan:l,type:"triangle"})},1700)}stopAmbient(){clearInterval(this.ambTimer);for(let e of this.amb||[])try{e.stop()}catch{}this.ambGain&&this.ambGain.disconnect(),this.amb=[],this.ambGain=null,this.siren(!1)}};var Re=s=>document.getElementById(s),Nr=location.search.includes("test"),Dr=Re("c"),Ht=new zl({canvas:Dr,antialias:!0,powerPreference:"high-performance"});Ht.shadowMap.type=ys;Ht.autoClear=!1;Ht.toneMapping=bo;Ht.toneMappingExposure=1.5;var bu=new br(Ht).fromScene(new Hl,.04).texture,A={state:"load",sel:{map:"forest",ai:"tactical",quality:"med"},sens:1,fov:75,loadout:fp(),inp:{k:{},mx:0,my:0,lmb:!1,rmb:!1,lmbPressed:!1,jump:!1,e:!1},camera:new Et(75,1,.08,600),wcam:new Et(50,1,.01,5),audio:new lc,enemies:[],stats:{},nv:!1,frame:0,v1:new P,v2:new P,v3:new P,pbox:[{bullet:!0}]};A.camera.rotation.order="YXZ";window.__SP=A;try{let s=JSON.parse(localStorage.getItem("sp2_settings")||"{}");s.sens&&(A.sens=s.sens),s.fov&&(A.fov=s.fov),s.quality&&(A.sel.quality=s.quality),s.vol!=null&&(A.vol=s.vol)}catch{}var Tp=()=>{try{localStorage.setItem("sp2_settings",JSON.stringify({sens:A.sens,fov:A.fov,quality:A.sel.quality,vol:A.vol}))}catch{}},Ep=s=>(e,t,n,i,r,o)=>{let a=i-e,c=r-t,l=o-n,h=Math.hypot(a,c,l);return h<.01||!In(A.world.colliders,e,t,n,a/h,c/h,l/h,h,s)};A.los=Ep("sight");A.losB=Ep("bullet");A.sound=(s,e,t,n)=>{for(let i of A.enemies){if(i===n||i.dead)continue;let r=Math.hypot(i.pos.x-s.x,i.pos.z-s.z);r<e*i.pr.hear&&i.hear(s,t,r)}};A.shout=s=>{for(let e of A.enemies)e===s||e.dead||Math.hypot(e.pos.x-s.pos.x,e.pos.z-s.pos.z)<s.pr.share&&e.onAlert(s.lkp.x+Ie(-2.5,2.5),s.lkp.z+Ie(-2.5,2.5))};A.say=(s,e)=>{Math.hypot(s.pos.x-A.player.pos.x,s.pos.z-A.player.pos.z)>45||(A.audio.radio(),Re("subt").innerHTML=`<b>RADIO</b>${e}`,Re("subt").style.opacity=1,uc=2.8)};A.playerBox=()=>{let s=A.player,e=s.pos,t=A.pbox[0],n=s.leanX*.6,i=s.leanZ*.6;return t.x0=e.x+n-.3,t.x1=e.x+n+.3,t.z0=e.z+i-.3,t.z1=e.z+i+.3,t.y0=e.y,t.y1=e.y+s.height,A.pbox};var wp=(s,e)=>{let t=A.player,n=s-t.pos.x,i=e-t.pos.z,r=Math.hypot(n,i)||1;return(n*Math.cos(t.yaw)-i*Math.sin(t.yaw))/r};A.enemyShotSound=s=>A.audio.enemyShot(s.pd,wp(s.pos.x,s.pos.z));A.nearMiss=(s,e,t,n,i,r)=>{let o=A.camera.position,a=(o.x-s)*n+(o.y-e)*i+(o.z-t)*r;a>0&&Math.hypot(s+n*a-o.x,e+i*a-o.y,t+r*a-o.z)<1.4&&A.audio.whiz(wp(s,t))};A.playerShot=(s,e,t,n,i)=>{let r=In(A.world.colliders,s.x,s.y,s.z,e.x,e.y,e.z,250,"bullet"),o=r?r.d:250,a=null,c=null;for(let h of A.enemies){if(h.dead)continue;let d=h.rayHit(s,e,o);d&&(o=d.d,a=h,c=d)}let l=A.v1.copy(e).multiplyScalar(o).add(s);if((i||Math.random()<.4)&&A.fx.tracer(n,l),a){let h=t.dmg*(c.part==="head"?t.head||2.5:c.mult);t.falloff&&o>t.falloff[0]&&(h*=1-(1-t.falloff[1])*Math.min(1,(o-t.falloff[0])/(t.falloff[0]*1.5))),a.damage(h,A.player.pos,c.part),A.fx.blood(l,A.v2.copy(e).negate());for(let d of A.enemies)!d.dead&&d!==a&&!d.seeing&&(d.supp=Math.min(1.5,d.supp+(Math.hypot(d.pos.x-l.x,d.pos.z-l.z)<3?.35:0)));i&&A.stats.hits++,c.part==="head"&&A.stats.heads++,Lp(a.dead),A.audio.hit(a.dead)}else if(r){A.fx.impact(l,A.v2.set(r.nx,r.ny,r.nz));for(let h of A.enemies){if(h.dead)continue;Math.hypot(h.pos.x-l.x,h.pos.z-l.z)<2.5&&(h.supp=Math.min(1.5,h.supp+.35),i&&!h.combat()&&h.hear(A.player.pos,"shot",Math.hypot(h.pos.x-s.x,h.pos.z-s.z)))}}};A.melee=()=>{let s=A.player,e=A.camera.position,t=s.fwd,n=Rt.knife,i=null,r=n.range;for(let c of A.enemies){if(c.dead)continue;let l=c.pos.x-e.x,h=c.pos.y+1.1-e.y,d=c.pos.z-e.z,u=Math.hypot(l,h,d);u>r||(l*t.x+h*t.y+d*t.z)/u<.72||!A.losB(e.x,e.y,e.z,c.pos.x,c.pos.y+1.1,c.pos.z)||(i=c,r=u)}if(!i){let c=In(A.world.colliders,e.x,e.y,e.z,t.x,t.y,t.z,1.5,"bullet");c&&(A.fx.impact(A.v1.copy(t).multiplyScalar(c.d).add(e),A.v2.set(c.nx,c.ny,c.nz)),A.audio.click(.4));return}let a=Math.cos(i.yaw)*(s.pos.z-i.pos.z)+Math.sin(i.yaw)*(s.pos.x-i.pos.x)>.2*r||!i.seeing&&!i.combat()||i.stun>0;i.damage(a?999:n.dmg,s.pos,"torso"),A.fx.blood(A.v1.set(i.pos.x,i.pos.y+1.2,i.pos.z),A.v2.copy(t).negate()),A.audio.stab(i.dead),Lp(i.dead),i.dead&&A.stats.knife++};A.spawnGrenade=(s,e,t,n)=>A.gren.spawn(s,e,t,n);A.onKill=()=>{A.stats.kills++};A.onHurt=(s,e)=>{A.audio.hurt(),Lr=Math.min(1,Lr+.3+e*.012),Ev(s.x,s.z,"#ff4a3a",1.2)};A.onSecurity=(s,e)=>{let t=Re("sec");t.className="hp l"+s,t.textContent="SECURITY \xB7 "+Su[s],s>0&&A.audio.alert(s),s>=2&&e&&Go(e,3.5),s===3&&(A.audio.siren(!0),A.panelLight&&(A.panelLight.intensity=30))};A.reinforce=()=>{let s=A.world,e=A.player,t=A.sel.ai==="recruit"?2:3,n=[...s.reinforce].sort((r,o)=>Math.hypot(o.x-e.pos.x,o.z-e.pos.z)-Math.hypot(r.x-e.pos.x,r.z-e.pos.z))[0];if(Math.hypot(n.x-e.pos.x,n.z-e.pos.z)<30){A.sec.reinAt=A.sec.t+8;return}let i=A.sec.report||{x:s.objective.pos[0],z:s.objective.pos[2]};for(let r=0;r<t;r++){let o=Tu(n.x+r*1.6,n.z+r%2*1.5,[[i.x,i.z]],{duty:"response"});o.alerted=!0,o.setOrder(r===0?{type:"investigate",x:i.x,z:i.z}:{type:"defend",x:s.posts.objective[r%s.posts.objective.length][0],z:s.posts.objective[r%s.posts.objective.length][1],tx:i.x,tz:i.z})}Go(`RESPONSE TEAM ENTERING FROM THE ${n.n.toUpperCase()}`,4.5)};function Ap(){if(A.world){for(let s of A.world.meshes||[])s.geometry.dispose(),s.material.dispose();A.audio.stopAmbient(),A.world=null,A.scene=null}}function Sp(s,e,t,n){let i=new St,r=(o,a,c,l,h,d,u,f)=>{let p=new Ge(new Wt(a,c,l),f?new lt({color:o}):new jn({color:o}));return p.position.set(h,d,u),i.add(p),p};return s==="intel"?(r(1842978,.5,.14,.36,0,.07,0),r(16758344,.42,.02,.05,0,.15,0,!0),r(16758344,.06,.06,.02,0,.07,.19,!0)):s==="terminal"?(r(1382170,.08,.5,.8,0,.3,0),i.screen=r(3211128,.02,.4,.68,.05,.31,0,!0),r(1842978,.3,.03,.6,.3,.02,0)):s==="med"?(r(14212312,.5,.3,.34,0,.15,0),r(13908528,.2,.06,.02,0,.17,.18,!0),r(13908528,.06,.2,.02,0,.17,.18,!0)):(r(4016688,.6,.32,.36,0,.16,0),r(15249482,.6,.05,.37,0,.2,0,!0)),i.position.set(e,t,n),A.scene.add(i),i}var cc=[];function Tu(s,e,t,n){cc.length||(cc=["guard","guard","aggressor","cautious","guard","aggressor","cautious","guard"].sort(()=>Math.random()-.5));let i=A.world.nav.nearest(s,e)||{x:s,z:e},r=new sc(A,i.x,i.z,t,cc.pop(),Ho[A.sel.ai],n);return A.enemies.push(r),r}function Au(){let s=A.sel.quality;Ht.setPixelRatio(s==="low"?1:Math.min(window.devicePixelRatio||1,s==="high"?2:1.25)),Ht.shadowMap.enabled=s!=="low",Up()}function bv(){Ap(),Au(),Op();let s=A.scene=new _i,e=A.wscene=new _i;s.environment=bu,s.environmentIntensity=.12,e.environment=bu,e.environmentIntensity=.2,A.wlight=new Zi(11188432,2106408,.4),e.add(A.wlight);let t=new kn(16773856,.75);t.position.set(-1,2,1.5),e.add(t);let n=A.world=sp(A.sel.map,s);A.sel.quality!=="med"&&n.moon.shadow.mapSize.setScalar(A.sel.quality==="high"?4096:1024),A.nvLight=new Mo(16777215,0),s.add(A.nvLight),A.fx=new ac(s),A.gren=new oc(A),A.player=new Ql(A,n.spawn,A.loadout),A.enemies=[],cc=[],A.sec=new rc(A,Ho[A.sel.ai]);let i=n.nav,r=d=>Math.hypot(d[0]-n.spawn.x,d[1]-n.spawn.z)>30,o=(d,u,f)=>{let p=Ie(6.28),v=i.snap(d[0]+Math.cos(p)*2.5,d[1]+Math.sin(p)*2.5);return Tu(d[0],d[1],v&&i.line(i.nearest(d[0],d[1]),v)?[[d[0],d[1]],[v.x,v.z]]:[[d[0],d[1]]],{duty:u,home:d,wait:f})},a=d=>[...d].sort(()=>Math.random()-.5);a(n.posts.objective).slice(0,3).forEach(d=>o(d,"objective",[5,12])),a(n.posts.entrance.filter(r)).slice(0,3).forEach(d=>o(d,"post",[6,14]));for(let d of a(n.routes).slice(0,n.guards-A.enemies.length)){let u=d.p.filter(r),f=(u.length?u:d.p)[Math.floor(Math.random()*(u.length||d.p.length))],p=Tu(f[0],f[1],d.p,{duty:"patrol"});p.wi=Math.floor(Math.random()*d.p.length)}let c=n.objective;A.objMesh=Sp(c.kind,...c.pos),A.pickups=n.pickups.map(([d,u,f])=>({kind:d,x:u,z:f,mesh:Sp(d,u,i.height(u,f),f)}));let l=n.extraction.pos;A.exMesh=new Ge(new gt(.06,.06,.5,6),new lt({color:4259696})),A.exMesh.position.set(l[0],.25,l[2]),s.add(A.exMesh),A.exLight=new ln(4259696,6,16,1.5),A.exLight.position.set(l[0],1.2,l[2]),s.add(A.exLight),n.panel&&(A.panelLight=new ln(16722458,0,22,1.4),A.panelLight.position.set(n.panel.x,2.2,n.panel.z),s.add(A.panelLight)),A.laserDot=new Ge(new bi(1,8,6),new lt({color:16719904,fog:!1,toneMapped:!1})),s.add(A.laserDot);let h=new Wt(.004,.004,1);h.translate(0,0,.5),A.laserBeam=new Ge(h,new lt({color:16719904,transparent:!0,opacity:.35,blending:Hn,depthWrite:!1,fog:!1})),s.add(A.laserBeam),A.laserDot.visible=A.laserBeam.visible=!1,A.stage=0,A.hack=0,A.time=0,A.stats={shots:0,hits:0,kills:0,heads:0,knife:0,maxSec:0},Lr=0,Oi.forEach(d=>d.t=0),uc=0,Re("subt").style.opacity=0,Cu(!1),A.onSecurity(0,""),Re("objt").textContent=c.text,Go(n.name+" \u2014 "+c.text.toUpperCase(),4),A.audio.ambient(n.env.amb),Ps(null),Re("hud").classList.add("on"),A.state="playing",Xn={},Nr||Ru()}function Ru(){try{let s=Dr.requestPointerLock();s&&s.catch&&s.catch(()=>{Re("phint").textContent="CLICK RESUME AGAIN TO RE-CAPTURE THE MOUSE"})}catch{}}function Ps(s){for(let e of["menu","pause","end","load"])Re(e).classList.toggle("on",e===s)}function Rp(){A.state==="playing"&&(A.state="paused",Re("phint").textContent="MISSION ON HOLD",Ps("pause"),A.inp.k={},A.inp.lmb=A.inp.rmb=!1)}function Cp(){A.state==="paused"&&(Nr?(A.state="playing",Ps(null)):Ru())}function Ip(){A.state="menu",Ap(),Re("hud").classList.remove("on"),Cu(!1),Re("scope").style.display="none",Re("flashov").style.opacity=0,Ps("menu"),document.pointerLockElement&&document.exitPointerLock(),Iu()}function Pp(s){A.state=s?"won":"dead",document.pointerLockElement&&document.exitPointerLock(),A.audio.siren(!1),Re("scope").style.display="none",Re("flashov").style.opacity=0;let e=A.player,t=A.stats,n=Math.floor(A.time);Re("endt").textContent=s?"MISSION COMPLETE":"OPERATOR DOWN",Re("endt").style.color=s?"var(--g)":"#ff6a5a";let i=s?"EXTRACTION SUCCESSFUL":"MISSION FAILED";if(!s&&e.lastHit){let o=e.lastHit;i=o.fall?"KILLED BY A FALL":o.blast?`KILLED BY ${o.name.toUpperCase()}`:`KILLED BY ${o.name.toUpperCase()} \u2014 RIFLE FIRE FROM THE ${Tv(o.x-e.pos.x,o.z-e.pos.z)}, ${Math.round(o.dist)} M`}Re("ends").textContent=i;let r=[["Map",A.world.name],["Enemy intelligence",Ho[A.sel.ai].label],["Time",`${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`],["Hostiles neutralised",`${t.kills} / ${A.enemies.length}`],["Headshots / knife kills",`${t.heads} / ${t.knife}`],["Accuracy",t.shots?Math.round(t.hits/t.shots*100)+"%":"\u2014"],["Highest security level",Su[t.maxSec]],["Health remaining",Math.ceil(e.hp)],["Objective",A.stage?"Secured":"Not secured"]];Re("endstats").innerHTML=r.map(([o,a])=>`<span>${o}</span><b>${a}</b>`).join(""),Ps("end"),s?A.audio.win():A.audio.lose()}var Tv=(s,e)=>["NORTH","NORTH-EAST","EAST","SOUTH-EAST","SOUTH","SOUTH-WEST","WEST","NORTH-WEST"][(Math.round(Math.atan2(s,-e)/(Math.PI/4))%8+8)%8];function Cu(s){A.nv=s,Re("nv").classList.toggle("on",s),Dr.style.filter=s?"grayscale(1) contrast(1.15) brightness(1.3)":"",A.world&&(A.nvLight.intensity=s?2.6:0,A.scene.fog.density=A.world.env.fog[1]*(s?.5:1),A.wlight.intensity=s?1.6:.4,A.scene.environmentIntensity=s?.7:.12)}function bp(){let s=A.world;A.stage=1,A.hack=0,A.audio.objective(),A.objMesh.screen?A.objMesh.screen.material.color.setHex(16758344):A.scene.remove(A.objMesh),Re("objt").textContent=s.extraction.text,Go(s.objective.done+" \u2014 "+s.extraction.text.toUpperCase(),4),A.sec.report={x:s.objective.pos[0],z:s.objective.pos[2],t:A.sec.t,kind:"alarm"},A.sec.lockdown("SILENT ALARM \u2014 LOCKDOWN")}var Lr=0,Eu=0,hc=0,uc=0,Xn={},Oi=[];for(let s=0;s<8;s++){let e=document.createElement("div");e.className="ind",Re("inds").appendChild(e),Oi.push({el:e,t:0,x:0,z:0,life:1})}function Ev(s,e,t,n){let i=Oi.find(r=>r.t<=0)||Oi[0];i.x=s,i.z=e,i.t=i.life=n,i.src=null,i.el.style.color=t}function Go(s,e){Re("toast").textContent=s,Re("toast").style.opacity=1,Eu=e}function Lp(s){hc=s?.3:.14,Re("hitm").className=s?"k":""}function Ui(s,e){Xn[s]!==e&&(Xn[s]=e,Re(s).innerHTML=e)}function Is(s,e,t){let n=s+e;Xn[n]!==t&&(Xn[n]=t,Re(s).style[e]=t)}function wv(s){let e=A.player,t=e.slot,n=t.st,i=A.world;Ui("hpn",Math.ceil(e.hp));let r=Math.round(e.hp)+"%";Xn.hw!==r&&(Xn.hw=r,Re("hpf").style.width=r,Re("hpf").style.background=e.hp<35?"#ff5a4a":e.hp<60?"#e8b04a":"var(--g)");let o=e.use;Ui("medi",o&&o.type==="med"?"APPLYING MEDKIT\u2026":`MEDKIT <b>${e.inv.med}</b> [H] \xB7 STIM <b>${e.inv.stim}</b> [X]`),Ui("wn",n.name+(e.reloading?" \u2014 RELOADING":"")),Ui("am",n.melee?"\u2014":`${t.mag}<span> / ${t.reserve}</span>`),Ui("watt",Jl(t.id,n.att||{})),Ui("slots",e.slots.map((y,b)=>b===e.cur?`<b>${b+1} ${y.st.name}</b>`:`${b+1} ${y.st.name}`).join(" \xB7 ")),Ui("equip",["frag","flash","smoke"].map(y=>`<span class="${e.throwSel===y?"s":""}">${mp[y]} <b>${e.inv[y]}</b></span>`).join("<br>")+"<br>[G] THROW \xB7 [4] CYCLE"),Ui("stat",`ENEMY AI <b>${Ho[A.sel.ai].label}</b><br>NIGHT VISION <b class="${A.nv?"":"off"}">${A.nv?"ON":"OFF"}</b>`+(n.att&&n.att.laser?`<br>LASER <b class="${e.laserOn?"":"off"}">${e.laserOn?"ON":"OFF"}</b>`:"")+`<br>HOSTILES <b>${A.enemies.filter(y=>!y.dead).length}</b>`);let a=!n.melee&&e.adsF>.85?n.optic.ret:null,c=5+e.spread*5.5,l=e.adsF>.6||e.sprintF>.6||n.melee?0:1,h=8,d=[[-1,-c-h,2,h],[-1,c,2,h],[-c-h,-1,h,2],[c,-1,h,2]];for(let y=0;y<4;y++){let b=Re("c"+y).style;b.left=d[y][0]+"px",b.top=d[y][1]+"px",b.width=d[y][2]+"px",b.height=d[y][3]+"px",b.opacity=l}Is("ret","display",a==="dot"||a==="holo"?"block":"none"),a&&a!=="scope"&&Xn.retc!==a&&(Xn.retc=a,Re("ret").className=a),Is("scope","display",e.scoped?"block":"none"),Is("flashov","opacity",Math.min(1,e.blind).toFixed(2)),Is("stimv","opacity",e.stimT>0?"1":"0"),hc>0?(hc-=s,Re("hitm").style.opacity=Math.min(1,hc*8)):Is("hitm","opacity","0"),Lr=Math.max(0,Lr-s*1.3),Re("vig").style.opacity=Math.max(Lr,e.hp<30?.35:0),Eu>0&&(Eu-=s)<=0&&(Re("toast").style.opacity=0),uc>0&&(uc-=s)<=0&&(Re("subt").style.opacity=0);for(let y of A.enemies){if(y.dead||y.seeing||y.detect<.15||!y.los)continue;let b=Oi.find(E=>E.src===y&&E.t>0);if(!b){if(b=Oi.find(E=>E.t<=0),!b)continue;b.src=y,b.el.style.color="#e8b04a"}b.x=y.pos.x,b.z=y.pos.z,b.t=.25,b.life=.25/Math.max(.2,y.detect)}let u=!1;for(let y of A.gren.list){if(y.type==="smoke"||y.owner==="player"||Math.hypot(y.pos.x-e.pos.x,y.pos.z-e.pos.z)>13)continue;u=!0;let b=Oi.find(E=>E.src===y&&E.t>0);if(!b){if(b=Oi.find(E=>E.t<=0),!b)continue;b.src=y,b.el.style.color="#ff9a30"}b.x=y.pos.x,b.z=y.pos.z,b.t=b.life=.2}Is("warn","display",u?"block":"none");for(let y of Oi){if(y.t<=0){y.on&&(y.el.style.opacity=0,y.on=!1,y.src=null);continue}y.t-=s,y.on=!0;let b=Math.atan2(y.x-e.pos.x,-(y.z-e.pos.z))+e.yaw;y.el.style.transform=`rotate(${b}rad)`,y.el.style.opacity=Math.min(1,y.t/y.life)}let f=A.stage===0?i.objective.pos:i.extraction.pos,p=A.v3.set(f[0],f[1]+1,f[2]),v=Math.hypot(f[0]-e.pos.x,f[2]-e.pos.z);p.project(A.camera);let m=p.x,g=p.y;p.z>1&&(m=-m,g=-1);let x=Math.max(Math.abs(m),Math.abs(g));if(x>.9||p.z>1){let y=.9/(x||1);m*=y,g*=y}let S=Re("mark").style;S.left=(m+1)/2*innerWidth+"px",S.top=(1-g)/2*innerHeight+"px",S.opacity=e.scoped?0:1,Ui("mark",(A.stage===0?"OBJECTIVE ":"EXTRACT ")+Math.round(v)+" M")}function Av(s){let e=A.player,t=A.world,n=A.inp;A.time+=s,A.stats.maxSec=Math.max(A.stats.maxSec,A.sec.level);let i="",r=(u,f,p)=>Math.hypot(u-e.pos.x,f-e.pos.z)<p;if(A.stage===0){let u=t.objective;r(u.pos[0],u.pos[2],2.5)?(i=`<b>E</b>${u.prompt}`,u.hold?n.k.KeyE?(A.hack+=s,A.hack>=u.hold&&bp()):A.hack=Math.max(0,A.hack-s*2):n.e&&bp()):A.hack=0}else if(r(t.extraction.pos[0],t.extraction.pos[2],3.2))return Pp(!0);for(let u of A.pickups){if(u.taken||!r(u.x,u.z,1.9))continue;let f=u.kind==="med";if(i=i||`<b>E</b>${f?"Take medical supplies":"Take ammunition and grenades"}`,n.e&&!(A.stage===0&&r(t.objective.pos[0],t.objective.pos[2],2.5))){if(u.taken=!0,A.scene.remove(u.mesh),A.audio.pickup(),f)e.inv.med=Math.min(4,e.inv.med+1),e.inv.stim=Math.min(4,e.inv.stim+1);else{for(let p of e.slots)p.st.melee||(p.reserve=Math.min(p.st.reserve*2,p.reserve+p.st.mag*2));e.inv.frag=Math.min(4,e.inv.frag+1),e.inv.flash=Math.min(4,e.inv.flash+1)}Go(f?"+1 MEDKIT  +1 STIM":"AMMUNITION RESUPPLIED  +1 FRAG  +1 FLASH",1.8)}}n.e=!1;let o=Re("prompt");Xn.pr!==i&&(Xn.pr=i,o.innerHTML=i,o.style.display=i?"block":"none");let a=e.use&&e.use.type==="med",c=A.stage===0&&A.hack>0||a;Is("hack","display",c?"block":"none"),c&&(Re("hackf").style.width=(a?e.use.t/e.use.dur:A.hack/t.objective.hold)*100+"%");for(let u of t.dyn)u.l.intensity=u.base*(u.kind==="fire"?.75+Math.sin(A.time*11)*.12+Math.random()*.2:Math.sin(A.time*31)>.86||Math.random()<.02?.25:1);A.exLight.intensity=A.stage?14+Math.sin(A.time*4)*5:4,A.panelLight&&A.sec.level===3&&(A.panelLight.intensity=18+Math.sin(A.time*7)*16);let l=e.w,h=!l.melee&&l.att.laser&&e.laserOn&&e.swT<=0&&!e.reloading&&!e.use&&e.sprintF<.5&&!e.scoped;if(A.laserDot.visible=A.laserBeam.visible=h,h){let u=A.camera.position,f=e.fwd,p=In(t.colliders,u.x,u.y,u.z,f.x,f.y,f.z,150,"bullet"),v=p?p.d:150;for(let m of A.enemies){if(m.dead)continue;let g=m.rayHit(u,f,v);g&&(v=g.d)}A.laserDot.position.copy(f).multiplyScalar(v-.02).add(u),A.laserDot.scale.setScalar(.006+v*.0022),A.laserBeam.position.copy(e.laserW),A.laserBeam.lookAt(A.laserDot.position),A.laserBeam.scale.z=e.laserW.distanceTo(A.laserDot.position)}let d=t.moon;d.target.position.set(e.pos.x,0,e.pos.z),d.position.copy(t.moonDir).multiplyScalar(110).add(d.target.position)}function Np(s){A.frame++,A.player.update(s),A.inp.mx=A.inp.my=0;for(let e of A.enemies)e.update(s);if(A.sec.update(s),A.gren.update(s),A.fx.update(s),Av(s),A.state==="playing"){if(A.player.dead)return Pp(!1);wv(s)}}A.step=Np;var wu=performance.now();function Dp(s){requestAnimationFrame(Dp);let e=Math.min(.05,(s-wu)/1e3);wu=s,A.state==="playing"&&Np(e),A.state==="menu"?Pv(e):A.scene&&(Ht.setViewport(0,0,innerWidth,innerHeight),Ht.clear(),Ht.render(A.scene,A.camera),Ht.clearDepth(),Ht.render(A.wscene,A.wcam))}function Up(){Ht.setSize(innerWidth,innerHeight,!1),A.camera.aspect=A.wcam.aspect=innerWidth/innerHeight,A.camera.updateProjectionMatrix(),A.wcam.updateProjectionMatrix()}addEventListener("resize",Up);addEventListener("keydown",s=>{if(A.state==="paused"&&s.code==="Escape")return Cp();if(A.state!=="playing"||((["Space","Tab","KeyS","KeyD","KeyA","KeyR","KeyN","KeyL","KeyE","KeyC","KeyQ","KeyF","KeyG","KeyH","KeyX","KeyV"].includes(s.code)||s.ctrlKey)&&s.preventDefault(),s.repeat))return;let e=A.player;A.inp.k[s.code]=!0,s.code==="Space"?A.inp.jump=!0:s.code==="KeyR"?e.reload():s.code==="KeyE"?A.inp.e=!0:s.code==="KeyC"?e.crouchToggle=!e.crouchToggle:s.code==="KeyN"?(Cu(!A.nv),A.audio.beep(A.nv)):s.code==="KeyL"?(e.laserOn=!e.laserOn,A.audio.beep(e.laserOn)):s.code==="KeyG"?e.startUse("throw"):s.code==="KeyH"?e.startUse("med"):s.code==="KeyX"?e.startUse("stim"):s.code==="KeyV"?e.startUse("melee"):s.code==="Digit4"?e.cycleThrow():/^Digit[123]$/.test(s.code)?e.switchTo(+s.code[5]-1):s.code==="Escape"&&Nr&&Rp()});addEventListener("keyup",s=>{A.inp.k[s.code]=!1});addEventListener("blur",()=>{A.inp.k={},A.inp.lmb=A.inp.rmb=!1});addEventListener("mousemove",s=>{A.state==="playing"&&(document.pointerLockElement===Dr||Nr)&&(A.inp.mx+=s.movementX,A.inp.my+=s.movementY)});addEventListener("mousedown",s=>{if(A.state==="playing"){if(!Nr&&document.pointerLockElement!==Dr)return Ru();s.button===0?(A.inp.lmb=!0,A.inp.lmbPressed=!0):s.button===2&&(A.inp.rmb=!0)}});addEventListener("mouseup",s=>{s.button===0?A.inp.lmb=!1:s.button===2&&(A.inp.rmb=!1)});addEventListener("wheel",()=>{A.state==="playing"&&A.player.cycleThrow()});addEventListener("contextmenu",s=>s.preventDefault());document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===Dr?A.state==="paused"&&(A.state="playing",Ps(null),wu=performance.now()):A.state==="playing"&&!Nr&&Rp()});var Rv={forest:"A hostile detachment holds an abandoned outpost in the forest. Guards watch the gates, patrol the treeline and protect the command hut. Take the intelligence package and reach the extraction flare in the north-east clearing. It is dark out there \u2014 use night vision.",warehouse:"A secured terminal sits in the guarded office of an industrial warehouse. Enter from the loading yard, access the terminal and exfiltrate through the west back lot. Side doors, the outer alleys and the raised dock give you alternatives to the main hall."},Cv={recruit:"RECRUIT \u2014 inexperienced guards: slow decisions, long clumsy exposures, unreliable radio calls.",tactical:"TACTICAL \u2014 trained guards: use cover properly, lean to fire, flank, radio contacts and defend the objective.",elite:"ELITE SQUAD \u2014 a coordinated team: bounding movement, suppressive fire, multiple angles, grenades and flashbangs."},Ue={tab:"play",edit:"primary",scene:null,obj:null,spin:0};function Op(){Ue.obj&&Ue.scene&&Ue.scene.remove(Ue.obj),Ue.obj=null,Ue.ch&&(Ue.scene.remove(Ue.ch.root),Ue.ch=null)}function Iv(){if(Ue.scene)return Ue.scene;let s=Ue.scene=new _i;s.environment=bu,s.environmentIntensity=.55;let e=new kn(16773340,2.6);e.position.set(2,3,3),s.add(e);let t=new kn(8368383,1.6);return t.position.set(-3,2,-3),s.add(t),s.add(new Zi(8425632,1053720,.5)),Ue.cam=new Et(30,1,.05,50),s}function Iu(){if(A.state!=="menu")return;let s=Iv();if(Op(),Ue.tab==="loadout"){let e=A.loadout[Ue.edit];Ue.obj=jl(e,A.loadout.att[e],!0),s.add(Ue.obj)}else Ue.ch=new Cr(A.sel.ai==="elite"?"elite":A.sel.ai==="recruit"?"guard":"cautious","carbine"),s.add(Ue.ch.root),Ue.ch.root.rotation.y=Math.PI+.5}function Pv(s){if(!Ue.scene)return;let e=Math.min(innerWidth*.5,830),t=innerWidth-e;if(Ht.setViewport(0,0,innerWidth,innerHeight),Ht.setClearColor(395532),Ht.clear(),Ht.setViewport(e,0,t,innerHeight),Ue.cam.aspect=t/innerHeight,Ue.spin+=s,Ue.obj){let n=new on().setFromObject(Ue.obj),i=n.getCenter(A.v1),r=n.getSize(A.v2).length();Ue.obj.rotation.y=Math.PI/2+Math.sin(Ue.spin*.5)*.55,Ue.cam.position.set(i.x,i.y+r*.12,i.z+r*2.3*Math.max(1,1.25/Ue.cam.aspect)),Ue.cam.lookAt(i.x,i.y,i.z)}else Ue.ch&&(Ue.ch.update(s,{speed:0,aim:Math.sin(Ue.spin*.35)>0,crouch:Math.sin(Ue.spin*.22)<-.6}),Ue.cam.position.set(0,1.25,5.2*Math.max(1,.75/Ue.cam.aspect)),Ue.cam.lookAt(0,.95,0));Ue.cam.updateProjectionMatrix(),Ht.render(Ue.scene,Ue.cam)}function Pr(s,e,t,n,i=""){return`<button class="opt ${i} ${n?"sel":""}" data-v="${s}">${e}${t?`<small>${t}</small>`:""}</button>`}function Fp(){let s=A.loadout,e=a=>document.querySelector(`.opts[data-k="${a}"]`);for(let a of["primary","secondary"])e(a).innerHTML=Object.keys(Rt).filter(c=>Rt[c].slot===a).map(c=>Pr(c,Rt[c].name,Rt[c].desc,s[a]===c)).join("");e("kit").innerHTML=Object.keys(Di).map(a=>Pr(a,Di[a].name,Di[a].desc,s.kit===a)).join("");let t=s[Ue.edit],n=Rt[t],i=s.att[t];Re("attl").textContent="ATTACHMENTS \u2014 "+n.name,Re("edit").innerHTML=Pr("primary","Edit primary","",Ue.edit==="primary","sm")+Pr("secondary","Edit secondary","",Ue.edit==="secondary","sm"),Re("optic").innerHTML=n.optics.map(a=>Pr(a,Rr[a].name,a==="scope"?"4x zoom, slower to aim":a==="iron"?"no zoom":a==="reddot"?"clean dot":"ring reticle",i.optic===a,"sm")).join(""),Re("atts").innerHTML=[["muzzle","Suppressor","quiet: guards hear it only at close range"],["grip","Foregrip","-20% recoil, steadier hip fire"],["laser","Laser sight","tighter hip fire (L toggles)"]].map(([a,c,l])=>Pr(a,c,l,i[a],n[a]?"":"off")).join("");let r=Zl(t,i),o=(a,c)=>`<span>${a}</span><i><b style="width:${Math.round(Math.max(4,Math.min(100,c)))}%"></b></i>`;Re("bars").innerHTML=o("DAMAGE",r.dmg*(r.pellets||1)/1.2)+o("FIRE RATE",r.rpm/9)+o("CONTROL",100-r.recoil*20)+o("HANDLING",100-r.adsT*230)+o("STEALTH",100-r.noise*1.9),Re("losum").innerHTML=`${Rt[s.primary].name} <span style="color:var(--a)">${Jl(s.primary,s.att[s.primary])}</span><br>${Rt[s.secondary].name} <span style="color:var(--a)">${Jl(s.secondary,s.att[s.secondary])}</span><br>Combat knife \xB7 ${Di[s.kit].name} kit \u2014 ${Di[s.kit].desc}`,Re("brief").textContent=Rv[A.sel.map]+" "+Cv[A.sel.ai],pp(s),Iu()}document.querySelectorAll(".nav").forEach(s=>s.addEventListener("click",()=>{Ue.tab=s.dataset.tab,document.querySelectorAll(".nav").forEach(e=>e.classList.toggle("sel",e===s)),document.querySelectorAll(".tab").forEach(e=>e.classList.toggle("on",e.id==="t-"+Ue.tab)),Iu()}));Re("content").addEventListener("click",s=>{let e=s.target.closest(".opt");if(!e||!e.dataset.v)return;let t=e.parentElement,n=t.dataset.k,i=e.dataset.v,r=A.loadout;n==="map"||n==="ai"||n==="quality"?(A.sel[n]=i,t.querySelectorAll(".opt").forEach(o=>o.classList.toggle("sel",o===e)),n==="quality"&&(Tp(),Au())):n==="primary"||n==="secondary"?(r[n]=i,Ue.edit=n):n==="kit"?r.kit=i:t.id==="edit"?Ue.edit=i:t.id==="optic"?r.att[r[Ue.edit]].optic=i:t.id==="atts"&&(r.att[r[Ue.edit]][i]=!r.att[r[Ue.edit]][i]),Fp()});var Pu=(s,e,t,n)=>{let i=Re(s);i.value=A[e],Re(s+"v").textContent=t(A[e]),i.addEventListener("input",()=>{A[e]=+i.value,Re(s+"v").textContent=t(A[e]),Tp(),n&&n()})};A.vol==null&&(A.vol=.75);Pu("sens","sens",s=>s.toFixed(2));Pu("fov","fov",s=>s);Pu("vol","vol",s=>Math.round(s*100),()=>{A.audio.master&&(A.audio.master.gain.value=A.vol)});document.querySelectorAll('.opts[data-k="quality"] .opt').forEach(s=>s.classList.toggle("sel",s.dataset.v===A.sel.quality));var Lu=()=>{A.audio.init(),A.audio.master&&(A.audio.master.gain.value=A.vol),bv()};Re("start").onclick=Lu;Re("again").onclick=Lu;Re("prestart").onclick=Lu;Re("resume").onclick=Cp;Re("pmenu").onclick=Ip;Re("emenu").onclick=Ip;{let s=document.createElement("canvas");s.width=s.height=128;let e=s.getContext("2d"),t=e.createImageData(128,128);for(let n=0;n<t.data.length;n+=4)t.data[n]=t.data[n+1]=t.data[n+2]=Math.random()*255,t.data[n+3]=255;e.putImageData(t,0,0),Re("nvn").style.background=`url(${s.toDataURL()})`}Au();up(s=>{Re("loadf").style.width=s*100+"%"}).then(()=>{A.state="menu",Ps("menu"),Fp()}).catch(s=>{Re("load").firstElementChild.textContent="FAILED TO LOAD ASSETS: "+s.message});requestAnimationFrame(Dp);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
