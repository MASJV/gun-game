(()=>{var vf=0,Ch=1,Mf=2;var Fs=1,bf=2,Lr=3,Oi=0,jt=1,qt=2,zs=0,Nr=1,Ji=2,Ih=3,Ph=4,Sf=5;var ks=100,Tf=101,Ef=102,wf=103,Af=104,Rf=200,Cf=201,If=202,Pf=203,Lh=204,Nh=205,Lf=206,Nf=207,Df=208,Of=209,Uf=210,Ff=211,zf=212,kf=213,Bf=214,Wo=0,Xo=1,qo=2,mr=3,Yo=4,Ko=5,$o=6,Zo=7,ml=0,Hf=1,Gf=2,dn=0,Dh=1,Oh=2,Uh=3,ka=4,Fh=5,zh=6,kh=7,vh="attached",Vf="detached",Bh=300,Bs=301,Dr=302,gl=303,xl=304,an=1e3,Ni=1001,gr=1002,It=1003,yl=1004;var Hs=1005;var Ft=1006,Or=1007;var Ui=1008;var gi=1009,Hh=1010,Gh=1011,Ur=1012,_l=1013,ji=1014,Si=1015,Qi=1016,vl=1017,Ml=1018,Gs=1020,Vh=35902,Wh=35899,Xh=1021,qh=1022,Fi=1023,In=1026,Vn=1027,bl=1028,Sl=1029,cs=1030,Tl=1031;var El=1033,Ba=33776,Ha=33777,Ga=33778,Va=33779,wl=35840,Al=35841,Rl=35842,Cl=35843,Il=36196,Pl=37492,Ll=37496,Nl=37488,Dl=37489,Wa=37490,Ol=37491,Ul=37808,Fl=37809,zl=37810,kl=37811,Bl=37812,Hl=37813,Gl=37814,Vl=37815,Wl=37816,Xl=37817,ql=37818,Yl=37819,Kl=37820,$l=37821,Zl=36492,Jl=36494,jl=36495,Ql=36283,ec=36284,Xa=36285,tc=36286,qa=2200,ic=2201,Wf=2202,Cs=2300,Is=2301,Go=2302,Mh=2303,ws=2400,As=2401,da=2402,nc=2500,Xf=2501,Yh=0,Ya=1,Fr=2,qf=3200;var Ka=0,Yf=1,Wn="",Rt="srgb",hi="srgb-linear",fa="linear",rt="srgb";var Vo=7680;var Kf=519,$f=512,Zf=513,Jf=514,Kh=515,jf=516,Qf=517,$h=518,Zh=519,Jh=35044;var jh="300 es",Di=2e3,xr=2001;function qm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ym(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function yr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ep(){let s=yr("canvas");return s.style.display="block",s}var Pd={},_r=null;function pa(...s){let e="THREE."+s.shift();_r?_r("log",e,...s):console.log(e,...s)}function tp(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ae(...s){s=tp(s);let e="THREE."+s.shift();if(_r)_r("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function ze(...s){s=tp(s);let e="THREE."+s.shift();if(_r)_r("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Rs(...s){let e=s.join(" ");e in Pd||(Pd[e]=!0,Ae(...s))}function ip(s,e,t){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var np={[Wo]:Wo,[qo]:$o,[Yo]:Yo,[mr]:Ko,[Xo]:Xo,[$o]:qo,[Zo]:Zo,[Ko]:mr},Yi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,e);e.target=null}}},ii=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ld=1234567,ha=Math.PI/180,Ps=180/Math.PI;function fn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ii[s&255]+ii[s>>8&255]+ii[s>>16&255]+ii[s>>24&255]+"-"+ii[e&255]+ii[e>>8&255]+"-"+ii[e>>16&15|64]+ii[e>>24&255]+"-"+ii[t&63|128]+ii[t>>8&255]+"-"+ii[t>>16&255]+ii[t>>24&255]+ii[i&255]+ii[i>>8&255]+ii[i>>16&255]+ii[i>>24&255]).toLowerCase()}function Je(s,e,t){return Math.max(e,Math.min(t,s))}function Qh(s,e){return(s%e+e)%e}function Km(s,e,t,i,n){return i+(s-e)*(n-i)/(t-e)}function $m(s,e,t){return s!==e?(t-s)/(e-s):0}function ua(s,e,t){return(1-t)*s+t*e}function Zm(s,e,t,i){return ua(s,e,1-Math.exp(-t*i))}function Jm(s,e=1){return e-Math.abs(Qh(s,e*2)-e)}function jm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Qm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function e0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function t0(s,e){return s+Math.random()*(e-s)}function i0(s){return s*(.5-Math.random())}function n0(s){s!==void 0&&(Ld=s);let e=Ld+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function s0(s){return s*ha}function r0(s){return s*Ps}function a0(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function o0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function eu(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function l0(s,e,t,i,n){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),d=a((e-i)/2),f=r((i-e)/2),m=a((i-e)/2);switch(n){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*m,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*m,o*c);break;case"ZYZ":s.set(l*m,l*f,o*h,o*c);break;default:Ae("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function sc(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function tu(s,e){if(e.constructor===Float32Array)return s;let t=sc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function iu(s,e){if(e.constructor===Float32Array)return s;let t=sc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}var Ti={DEG2RAD:ha,RAD2DEG:Ps,generateUUID:fn,clamp:Je,euclideanModulo:Qh,mapLinear:Km,inverseLerp:$m,lerp:ua,damp:Zm,pingpong:Jm,smoothstep:jm,smootherstep:Qm,randInt:e0,randFloat:t0,randFloatSpread:i0,seededRandom:n0,degToRad:s0,radToDeg:r0,isPowerOfTwo:a0,ceilPowerOfTwo:o0,floorPowerOfTwo:eu,setQuaternionFromProperEuler:l0,normalize:iu,denormalize:tu},De=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*n+e.x,this.y=r*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},gt=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=r[a+0],f=r[a+1],m=r[a+2],x=r[a+3];if(u!==x||l!==d||c!==f||h!==m){let p=l*d+c*f+h*m+u*x;p<0&&(d=-d,f=-f,m=-m,x=-x,p=-p);let g=1-o;if(p<.9995){let _=Math.acos(p),M=Math.sin(_);g=Math.sin(g*_)/M,o=Math.sin(o*_)/M,l=l*g+d*o,c=c*g+f*o,h=h*g+m*o,u=u*g+x*o}else{l=l*g+d*o,c=c*g+f*o,h=h*g+m*o,u=u*g+x*o;let _=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=_,c*=_,h*=_,u*=_}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,r,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-o*f,e[t+2]=c*m+h*f+o*d-l*u,e[t+3]=h*m-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(r/2),d=l(i/2),f=l(n/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:Ae("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-n)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(r-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-n)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+n*c-r*l,this._y=n*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,n=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,n=-n,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*i),h=2*(o*t-r*n),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=n+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $c.copy(this).projectOnVector(e),this.sub($c)}reflect(e){return this.sub($c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},$c=new I,Nd=new gt,Be=class{static{this.prototype.isMatrix3=!0}constructor(e,t,i,n,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c)}set(e,t,i,n,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],m=i[8],x=n[0],p=n[3],g=n[6],_=n[1],M=n[4],v=n[7],b=n[2],S=n[5],y=n[8];return r[0]=a*x+o*_+l*b,r[3]=a*p+o*M+l*S,r[6]=a*g+o*v+l*y,r[1]=c*x+h*_+u*b,r[4]=c*p+h*M+u*S,r[7]=c*g+h*v+u*y,r[2]=d*x+f*_+m*b,r[5]=d*p+f*M+m*S,r[8]=d*g+f*v+m*y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+n*r*c-n*a*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,m=t*u+i*d+n*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=u*x,e[1]=(n*c-h*i)*x,e[2]=(o*i-n*a)*x,e[3]=d*x,e[4]=(h*t-n*l)*x,e[5]=(n*r-o*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Rs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Zc.makeScale(e,t)),this}rotate(e){return Rs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Zc.makeRotation(-e)),this}translate(e,t){return Rs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Zc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Zc=new Be,Dd=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Od=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function c0(){let s={enabled:!0,workingColorSpace:hi,spaces:{},convert:function(n,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===rt&&(n.r=Cn(n.r),n.g=Cn(n.g),n.b=Cn(n.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===rt&&(n.r=pr(n.r),n.g=pr(n.g),n.b=pr(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Wn?fa:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,a){return n.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[hi]:{primaries:e,whitePoint:i,transfer:fa,toXYZ:Dd,fromXYZ:Od,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:Dd,fromXYZ:Od,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}}),s}var Ye=c0();function Cn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function pr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Zs,Jo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Zs===void 0&&(Zs=yr("canvas")),Zs.width=e.width,Zs.height=e.height;let n=Zs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=Zs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=yr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=Cn(r[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Cn(t[i]/255)*255):t[i]=Cn(t[i]);return{data:t,width:e.width,height:e.height}}else return Ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},h0=0,vr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=fn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(Jc(n[a].image)):r.push(Jc(n[a]))}else r=Jc(n);i.url=r}return t||(e.images[this.uuid]=i),i}};function Jc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Jo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ae("Texture: Unable to serialize Texture."),{})}var u0=0,jc=new I,zt=class s extends Yi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,i=Ni,n=Ni,r=Ft,a=Ui,o=Fi,l=gi,c=s.DEFAULT_ANISOTROPY,h=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=fn(),this.name="",this.source=new vr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(jc).x}get height(){return this.source.getSize(jc).y}get depth(){return this.source.getSize(jc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ae(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){Ae(`Texture.setValues(): property '${t}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case an:e.x=e.x-Math.floor(e.x);break;case Ni:e.x=e.x<0?0:1;break;case gr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case an:e.y=e.y-Math.floor(e.y);break;case Ni:e.y=e.y<0?0:1;break;case gr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=Bh;zt.DEFAULT_ANISOTROPY=1;var ct=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],x=l[2],p=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,v=(f+1)/2,b=(g+1)/2,S=(h+d)/4,y=(u+x)/4,E=(m+p)/4;return M>v&&M>b?M<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(M),n=S/i,r=y/i):v>b?v<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(v),i=S/n,r=E/n):b<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(b),i=y/r,n=E/r),this.set(i,n,r,t),this}let _=Math.sqrt((p-m)*(p-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(p-m)/_,this.y=(u-x)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},jo=class extends Yi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ft,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t),this.textures=[];let n=i.count;for(let r=0;r<n;r++)this.textures[r]=new zt({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ft,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new vr(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},bi=class extends jo{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ma=class extends zt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=It,this.minFilter=It,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Qo=class extends zt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=It,this.minFilter=It,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Pe=class s{static{this.prototype.isMatrix4=!0}constructor(e,t,i,n,r,a,o,l,c,h,u,d,f,m,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c,h,u,d,f,m,x,p)}set(e,t,i,n,r,a,o,l,c,h,u,d,f,m,x,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=n,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=m,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,n=1/Js.setFromMatrixColumn(e,0).length(),r=1/Js.setFromMatrixColumn(e,1).length(),a=1/Js.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,m=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,m=c*h,x=c*u;t[0]=d+x*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,m=c*h,x=c*u;t[0]=d-x*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,m=o*h,x=o*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,m=o*l,x=o*c;t[0]=l*h,t[4]=x-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*l,f=a*c,m=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(d0,e,f0)}lookAt(e,t,i){let n=this.elements;return vi.subVectors(e,t),vi.lengthSq()===0&&(vi.z=1),vi.normalize(),jn.crossVectors(i,vi),jn.lengthSq()===0&&(Math.abs(i.z)===1?vi.x+=1e-4:vi.z+=1e-4,vi.normalize(),jn.crossVectors(i,vi)),jn.normalize(),po.crossVectors(vi,jn),n[0]=jn.x,n[4]=po.x,n[8]=vi.x,n[1]=jn.y,n[5]=po.y,n[9]=vi.y,n[2]=jn.z,n[6]=po.z,n[10]=vi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],m=i[2],x=i[6],p=i[10],g=i[14],_=i[3],M=i[7],v=i[11],b=i[15],S=n[0],y=n[4],E=n[8],L=n[12],R=n[1],D=n[5],N=n[9],B=n[13],P=n[2],z=n[6],H=n[10],F=n[14],Y=n[3],G=n[7],q=n[11],te=n[15];return r[0]=a*S+o*R+l*P+c*Y,r[4]=a*y+o*D+l*z+c*G,r[8]=a*E+o*N+l*H+c*q,r[12]=a*L+o*B+l*F+c*te,r[1]=h*S+u*R+d*P+f*Y,r[5]=h*y+u*D+d*z+f*G,r[9]=h*E+u*N+d*H+f*q,r[13]=h*L+u*B+d*F+f*te,r[2]=m*S+x*R+p*P+g*Y,r[6]=m*y+x*D+p*z+g*G,r[10]=m*E+x*N+p*H+g*q,r[14]=m*L+x*B+p*F+g*te,r[3]=_*S+M*R+v*P+b*Y,r[7]=_*y+M*D+v*z+b*G,r[11]=_*E+M*N+v*H+b*q,r[15]=_*L+M*B+v*F+b*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],x=e[7],p=e[11],g=e[15],_=l*f-c*d,M=o*f-c*u,v=o*d-l*u,b=a*f-c*h,S=a*d-l*h,y=a*u-o*h;return t*(x*_-p*M+g*v)-i*(m*_-p*b+g*S)+n*(m*M-x*b+g*y)-r*(m*v-x*S+p*y)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(r*h-o*l)+n*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],x=e[13],p=e[14],g=e[15],_=t*o-i*a,M=t*l-n*a,v=t*c-r*a,b=i*l-n*o,S=i*c-r*o,y=n*c-r*l,E=h*x-u*m,L=h*p-d*m,R=h*g-f*m,D=u*p-d*x,N=u*g-f*x,B=d*g-f*p,P=_*B-M*N+v*D+b*R-S*L+y*E;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/P;return e[0]=(o*B-l*N+c*D)*z,e[1]=(n*N-i*B-r*D)*z,e[2]=(x*y-p*S+g*b)*z,e[3]=(d*S-u*y-f*b)*z,e[4]=(l*R-a*B-c*L)*z,e[5]=(t*B-n*R+r*L)*z,e[6]=(p*v-m*y-g*M)*z,e[7]=(h*y-d*v+f*M)*z,e[8]=(a*N-o*R+c*E)*z,e[9]=(i*R-t*N-r*E)*z,e[10]=(m*S-x*v+g*_)*z,e[11]=(u*v-h*S-f*_)*z,e[12]=(o*L-a*D-l*E)*z,e[13]=(t*D-i*L+n*E)*z,e[14]=(x*M-m*b-p*_)*z,e[15]=(h*b-u*M+d*_)*z,this}scale(e){let t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,a){return this.set(1,i,r,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,m=r*u,x=a*h,p=a*u,g=o*u,_=l*c,M=l*h,v=l*u,b=i.x,S=i.y,y=i.z;return n[0]=(1-(x+g))*b,n[1]=(f+v)*b,n[2]=(m-M)*b,n[3]=0,n[4]=(f-v)*S,n[5]=(1-(d+g))*S,n[6]=(p+_)*S,n[7]=0,n[8]=(m+M)*y,n[9]=(p-_)*y,n[10]=(1-(d+x))*y,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Js.set(n[0],n[1],n[2]).length(),o=Js.set(n[4],n[5],n[6]).length(),l=Js.set(n[8],n[9],n[10]).length();r<0&&(a=-a),Vi.copy(this);let c=1/a,h=1/o,u=1/l;return Vi.elements[0]*=c,Vi.elements[1]*=c,Vi.elements[2]*=c,Vi.elements[4]*=h,Vi.elements[5]*=h,Vi.elements[6]*=h,Vi.elements[8]*=u,Vi.elements[9]*=u,Vi.elements[10]*=u,t.setFromRotationMatrix(Vi),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,n,r,a,o=Di,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(i-n),d=(t+e)/(t-e),f=(i+n)/(i-n),m,x;if(l)m=r/(a-r),x=a*r/(a-r);else if(o===Di)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===xr)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,n,r,a,o=Di,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-n),d=-(t+e)/(t-e),f=-(i+n)/(i-n),m,x;if(l)m=1/(a-r),x=a/(a-r);else if(o===Di)m=-2/(a-r),x=-(a+r)/(a-r);else if(o===xr)m=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Js=new I,Vi=new Pe,d0=new I(0,0,0),f0=new I(1,1,1),jn=new I,po=new I,vi=new I,Ud=new Pe,Fd=new gt,pi=class s{constructor(e=0,t=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ud.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ud,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fd.setFromEuler(this),this.setFromQuaternion(Fd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pi.DEFAULT_ORDER="XYZ";var ga=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},p0=0,zd=new I,js=new gt,bn=new Pe,mo=new I,jr=new I,m0=new I,g0=new gt,kd=new I(1,0,0),Bd=new I(0,1,0),Hd=new I(0,0,1),Gd={type:"added"},x0={type:"removed"},Qs={type:"childadded",child:null},Qc={type:"childremoved",child:null},ft=class s extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new I,t=new pi,i=new gt,n=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Pe},normalMatrix:{value:new Be}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ga,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.multiply(js),this}rotateOnWorldAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.premultiply(js),this}rotateX(e){return this.rotateOnAxis(kd,e)}rotateY(e){return this.rotateOnAxis(Bd,e)}rotateZ(e){return this.rotateOnAxis(Hd,e)}translateOnAxis(e,t){return zd.copy(e).applyQuaternion(this.quaternion),this.position.add(zd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kd,e)}translateY(e){return this.translateOnAxis(Bd,e)}translateZ(e){return this.translateOnAxis(Hd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?mo.copy(e):mo.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(jr,mo,this.up):bn.lookAt(mo,jr,this.up),this.quaternion.setFromRotationMatrix(bn),n&&(bn.extractRotation(n.matrixWorld),js.setFromRotationMatrix(bn),this.quaternion.premultiply(js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gd),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null):ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(x0),Qc.child=e,this.dispatchEvent(Qc),Qc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gd),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,e,m0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,g0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,n=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*n,r[13]+=i-r[1]*t-r[5]*i-r[9]*n,r[14]+=n-r[2]*t-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));n.material=o}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=n,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ft.DEFAULT_UP=new I(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Mt=class extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},y0={type:"move"},Mr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,i),g=this._getHandJoint(c,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(y0)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Mt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},sp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},go={h:0,s:0,l:0};function eh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var be=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ye.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=Ye.workingColorSpace){if(e=Qh(e,1),t=Je(t,0,1),i=Je(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=eh(a,r,e+1/3),this.g=eh(a,r,e),this.b=eh(a,r,e-1/3)}return Ye.colorSpaceToWorking(this,n),this}setStyle(e,t=Rt){function i(r){r!==void 0&&parseFloat(r)<1&&Ae("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ae("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ae("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){let i=sp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ae("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cn(e.r),this.g=Cn(e.g),this.b=Cn(e.b),this}copyLinearToSRGB(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return Ye.workingToColorSpace(ni.copy(this),e),Math.round(Je(ni.r*255,0,255))*65536+Math.round(Je(ni.g*255,0,255))*256+Math.round(Je(ni.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(ni.copy(this),t);let i=ni.r,n=ni.g,r=ni.b,a=Math.max(i,n,r),o=Math.min(i,n,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(ni.copy(this),t),e.r=ni.r,e.g=ni.g,e.b=ni.b,e}getStyle(e=Rt){Ye.workingToColorSpace(ni.copy(this),e);let t=ni.r,i=ni.g,n=ni.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(Qn),this.setHSL(Qn.h+e,Qn.s+t,Qn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Qn),e.getHSL(go);let i=ua(Qn.h,go.h,t),n=ua(Qn.s,go.s,t),r=ua(Qn.l,go.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ni=new be;be.NAMES=sp;var xa=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new be(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Pn=class extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pi,this.environmentIntensity=1,this.environmentRotation=new pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Wi=new I,Sn=new I,th=new I,Tn=new I,er=new I,tr=new I,Vd=new I,ih=new I,nh=new I,sh=new I,rh=new ct,ah=new ct,oh=new ct,Rn=class s{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Wi.subVectors(e,t),n.cross(Wi);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){Wi.subVectors(n,t),Sn.subVectors(i,t),th.subVectors(e,t);let a=Wi.dot(Wi),o=Wi.dot(Sn),l=Wi.dot(th),c=Sn.dot(Sn),h=Sn.dot(th),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(e,t,i,n,r,a,o,l){return this.getBarycoord(e,t,i,n,Tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Tn.x),l.addScaledVector(a,Tn.y),l.addScaledVector(o,Tn.z),l)}static getInterpolatedAttribute(e,t,i,n,r,a){return rh.setScalar(0),ah.setScalar(0),oh.setScalar(0),rh.fromBufferAttribute(e,t),ah.fromBufferAttribute(e,i),oh.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(rh,r.x),a.addScaledVector(ah,r.y),a.addScaledVector(oh,r.z),a}static isFrontFacing(e,t,i,n){return Wi.subVectors(i,t),Sn.subVectors(e,t),Wi.cross(Sn).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wi.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),Wi.cross(Sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return s.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,r=this.c,a,o;er.subVectors(n,i),tr.subVectors(r,i),ih.subVectors(e,i);let l=er.dot(ih),c=tr.dot(ih);if(l<=0&&c<=0)return t.copy(i);nh.subVectors(e,n);let h=er.dot(nh),u=tr.dot(nh);if(h>=0&&u<=h)return t.copy(n);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(i).addScaledVector(er,a);sh.subVectors(e,r);let f=er.dot(sh),m=tr.dot(sh);if(m>=0&&f<=m)return t.copy(r);let x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(i).addScaledVector(tr,o);let p=h*m-f*u;if(p<=0&&u-h>=0&&f-m>=0)return Vd.subVectors(r,n),o=(u-h)/(u-h+(f-m)),t.copy(n).addScaledVector(Vd,o);let g=1/(p+x+d);return a=x*g,o=d*g,t.copy(i).addScaledVector(er,a).addScaledVector(tr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Jt=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Xi):Xi.fromBufferAttribute(r,a),Xi.applyMatrix4(e.matrixWorld),this.expandByPoint(Xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xo.copy(i.boundingBox)),xo.applyMatrix4(e.matrixWorld),this.union(xo)}let n=e.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xi),Xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qr),yo.subVectors(this.max,Qr),ir.subVectors(e.a,Qr),nr.subVectors(e.b,Qr),sr.subVectors(e.c,Qr),es.subVectors(nr,ir),ts.subVectors(sr,nr),bs.subVectors(ir,sr);let t=[0,-es.z,es.y,0,-ts.z,ts.y,0,-bs.z,bs.y,es.z,0,-es.x,ts.z,0,-ts.x,bs.z,0,-bs.x,-es.y,es.x,0,-ts.y,ts.x,0,-bs.y,bs.x,0];return!lh(t,ir,nr,sr,yo)||(t=[1,0,0,0,1,0,0,0,1],!lh(t,ir,nr,sr,yo))?!1:(_o.crossVectors(es,ts),t=[_o.x,_o.y,_o.z],lh(t,ir,nr,sr,yo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(En),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},En=[new I,new I,new I,new I,new I,new I,new I,new I],Xi=new I,xo=new Jt,ir=new I,nr=new I,sr=new I,es=new I,ts=new I,bs=new I,Qr=new I,yo=new I,_o=new I,Ss=new I;function lh(s,e,t,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){Ss.fromArray(s,r);let o=n.x*Math.abs(Ss.x)+n.y*Math.abs(Ss.y)+n.z*Math.abs(Ss.z),l=e.dot(Ss),c=t.dot(Ss),h=i.dot(Ss);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Dt=new I,vo=new De,_0=0,nt=class extends Yi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Jh,this.updateRanges=[],this.gpuType=Si,this.version=0,this._normalizationScale=e!==void 0?sc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)vo.fromBufferAttribute(this,t),vo.applyMatrix3(e),this.setXY(t,vo.x,vo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):tu(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):iu(e,this.array)}};var ya=class extends nt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var _a=class extends nt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ke=class extends nt{constructor(e,t,i){super(new Float32Array(e),t,i)}},v0=new Jt,ea=new I,ch=new I,Xt=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):v0.setFromPoints(e).getCenter(i);let n=0;for(let r=0,a=e.length;r<a;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ea.subVectors(e,this.center);let t=ea.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(ea,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ch.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ea.copy(e.center).add(ch)),this.expandByPoint(ea.copy(e.center).sub(ch))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},M0=0,Li=new Pe,hh=new ft,rr=new I,Mi=new Jt,ta=new Jt,Wt=new I,at=class s extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=fn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qm(e)?_a:ya)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Be().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Li.makeRotationFromQuaternion(e),this.applyMatrix4(Li),this}rotateX(e){return Li.makeRotationX(e),this.applyMatrix4(Li),this}rotateY(e){return Li.makeRotationY(e),this.applyMatrix4(Li),this}rotateZ(e){return Li.makeRotationZ(e),this.applyMatrix4(Li),this}translate(e,t,i){return Li.makeTranslation(e,t,i),this.applyMatrix4(Li),this}scale(e,t,i){return Li.makeScale(e,t,i),this.applyMatrix4(Li),this}lookAt(e){return hh.lookAt(e),hh.updateMatrix(),this.applyMatrix4(hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rr).negate(),this.translate(rr.x,rr.y,rr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,r=e.length;n<r;n++){let a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ke(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&Ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let r=t[i];Mi.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,Mi.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,Mi.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(Mi.min),this.boundingBox.expandByPoint(Mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let i=this.boundingSphere.center;if(Mi.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ta.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(Mi.min,ta.min),Mi.expandByPoint(Wt),Wt.addVectors(Mi.max,ta.max),Mi.expandByPoint(Wt)):(Mi.expandByPoint(ta.min),Mi.expandByPoint(ta.max))}Mi.getCenter(i);let n=0;for(let r=0,a=e.count;r<a;r++)Wt.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(Wt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Wt.fromBufferAttribute(o,c),l&&(rr.fromBufferAttribute(e,c),Wt.add(rr)),n=Math.max(n,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,n=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new nt(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let L=0;L<i.count;L++)o[L]=new I,l[L]=new I;let h=new I,u=new I,d=new I,f=new De,m=new De,x=new De,p=new I,g=new I;function _(L,R,D){c[L]=c[R]=c[D]=1,h.fromBufferAttribute(i,L),u.fromBufferAttribute(i,R),d.fromBufferAttribute(i,D),f.fromBufferAttribute(r,L),m.fromBufferAttribute(r,R),x.fromBufferAttribute(r,D),u.sub(h),d.sub(h),m.sub(f),x.sub(f);let N=1/(m.x*x.y-x.x*m.y);isFinite(N)&&(p.copy(u).multiplyScalar(x.y).addScaledVector(d,-m.y).multiplyScalar(N),g.copy(d).multiplyScalar(m.x).addScaledVector(u,-x.x).multiplyScalar(N),o[L].add(p),o[R].add(p),o[D].add(p),l[L].add(g),l[R].add(g),l[D].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let L=0,R=M.length;L<R;++L){let D=M[L],N=D.start,B=D.count;for(let P=N,z=N+B;P<z;P+=3)_(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let v=new I,b=new I,S=new I,y=new I;function E(L){S.fromBufferAttribute(n,L),y.copy(S);let R=o[L];v.copy(R),v.sub(S.multiplyScalar(S.dot(R))).normalize(),b.crossVectors(y,R);let N=b.dot(l[L])<0?-1:1;a.setXYZW(L,v.x,v.y,v.z,N)}for(let L=0,R=i.count;L<R;++L)c[L]&&E(L);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new nt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);n.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)n.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,m=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let g=0;g<h;g++)d[m++]=c[f++]}return new nt(d,h,u)}if(this.index===null)return Ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let n=e.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ls=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Jh,this.updateRanges=[],this.version=0,this.uuid=fn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Wd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),n=new this.constructor(i,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Wd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function Wd(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=fn()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}var ci=new I,ss=class s{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n,this._normalizationScale=e!==void 0?sc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)ci.fromBufferAttribute(this,t),ci.applyMatrix4(e),this.setXYZ(t,ci.x,ci.y,ci.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ci.fromBufferAttribute(this,t),ci.applyNormalMatrix(e),this.setXYZ(t,ci.x,ci.y,ci.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ci.fromBufferAttribute(this,t),ci.transformDirection(e),this.setXYZ(t,ci.x,ci.y,ci.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=r,this}clone(e){if(e===void 0){pa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return new nt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){pa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):tu(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):iu(e,this.data.array)}},uh=new I,b0=new I,S0=new Be,qi=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=uh.subVectors(i,t).cross(b0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let n=e.delta(uh),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||S0.getNormalMatrix(e),n=this.coplanarPoint(uh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},T0=0,si=class extends Yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=fn(),this.name="",this.type="Material",this.blending=Nr,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lh,this.blendDst=Nh,this.blendEquation=ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vo,this.stencilZFail=Vo,this.stencilZPass=Vo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ae(`Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){Ae(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=n(e.textures),a=n(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new qi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new De().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new De().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},br=class extends si{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ar,ia=new I,or=new I,lr=new I,cr=new De,na=new De,rp=new Pe,Mo=new I,sa=new I,bo=new I,Xd=new De,dh=new De,qd=new De,va=class extends ft{constructor(e=new br){if(super(),this.isSprite=!0,this.type="Sprite",ar===void 0){ar=new at;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ls(t,5);ar.setIndex([0,1,2,0,2,3]),ar.setAttribute("position",new ss(i,3,0,!1)),ar.setAttribute("uv",new ss(i,2,3,!1))}this.geometry=ar,this.material=e,this.center=new De(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&ze('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),or.setFromMatrixScale(this.matrixWorld),rp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),lr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&or.multiplyScalar(-lr.z);let i=this.material.rotation,n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));let a=this.center;So(Mo.set(-.5,-.5,0),lr,a,or,n,r),So(sa.set(.5,-.5,0),lr,a,or,n,r),So(bo.set(.5,.5,0),lr,a,or,n,r),Xd.set(0,0),dh.set(1,0),qd.set(1,1);let o=e.ray.intersectTriangle(Mo,sa,bo,!1,ia);if(o===null&&(So(sa.set(-.5,.5,0),lr,a,or,n,r),dh.set(0,1),o=e.ray.intersectTriangle(Mo,bo,sa,!1,ia),o===null))return;let l=e.ray.origin.distanceTo(ia);l<e.near||l>e.far||t.push({distance:l,point:ia.clone(),uv:Rn.getInterpolation(ia,Mo,sa,bo,Xd,dh,qd,new De),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function So(s,e,t,i,n,r){cr.subVectors(s,t).addScalar(.5).multiply(i),n!==void 0?(na.x=r*cr.x-n*cr.y,na.y=n*cr.x+r*cr.y):na.copy(cr),s.copy(e),s.x+=na.x,s.y+=na.y,s.applyMatrix4(rp)}var wn=new I,fh=new I,To=new I,Eo=new I,Ns=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wn.copy(this.origin).addScaledVector(this.direction,t),wn.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){fh.copy(e).add(t).multiplyScalar(.5),To.copy(t).sub(e).normalize(),Eo.copy(this.origin).sub(fh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(To),o=Eo.dot(this.direction),l=-Eo.dot(To),c=Eo.lengthSq(),h=Math.abs(1-a*a),u,d,f,m;if(h>0)if(u=a*l-o,d=a*o-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(fh).addScaledVector(To,d),f}intersectSphere(e,t){if(e.radius<0)return null;wn.subVectors(e.center,this.origin);let i=wn.dot(this.direction),n=wn.dot(wn)-i*i,r=e.radius*e.radius;if(n>r)return null;let a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,wn)!==null}intersectTriangle(e,t,i,n,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,m=t.x-a.x,x=t.y-a.y,p=t.z-a.z,g=i.x-a.x,_=i.y-a.y,M=i.z-a.z,v=Math.abs(l),b=Math.abs(c),S=Math.abs(h),y,E,L,R,D,N,B,P,z,H,F,Y;if(v>=b&&v>=S?(L=l,N=u,z=m,Y=g,l>=0?(y=c,E=h,R=d,D=f,B=x,P=p,H=_,F=M):(y=h,E=c,R=f,D=d,B=p,P=x,H=M,F=_)):b>=S?(L=c,N=d,z=x,Y=_,c>=0?(y=h,E=l,R=f,D=u,B=p,P=m,H=M,F=g):(y=l,E=h,R=u,D=f,B=m,P=p,H=g,F=M)):(L=h,N=f,z=p,Y=M,h>=0?(y=l,E=c,R=u,D=d,B=m,P=x,H=g,F=_):(y=c,E=l,R=d,D=u,B=x,P=m,H=_,F=g)),L===0)return null;let G=y/L,q=E/L,te=1/L,fe=R-G*N,we=D-q*N,Z=B-G*z,oe=P-q*z,ve=H-G*Y,Ce=F-q*Y,xe=ve*oe-Ce*Z,Ve=fe*Ce-we*ve,Lt=Z*we-oe*fe;if(n){if(xe<0||Ve<0||Lt<0)return null}else if((xe<0||Ve<0||Lt<0)&&(xe>0||Ve>0||Lt>0))return null;let Fe=xe+Ve+Lt;if(Fe===0)return null;let ot=te*(xe*N+Ve*z+Lt*Y);return(Fe>0?ot<0:ot>0)?null:this.at(ot/Fe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},st=class extends si{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Yd=new Pe,Ts=new Ns,wo=new Xt,Kd=new I,Ao=new I,Ro=new I,Co=new I,ph=new I,Io=new I,$d=new I,Po=new I,ke=class extends ft{constructor(e=new at,t=new st){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(r&&o){Io.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(ph.fromBufferAttribute(u,e),a?Io.addScaledVector(ph,h):Io.addScaledVector(ph.sub(t),h))}t.add(Io)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wo.copy(i.boundingSphere),wo.applyMatrix4(r),Ts.copy(e.ray).recast(e.near),!(wo.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(wo,Kd)===null||Ts.origin.distanceToSquared(Kd)>(e.far-e.near)**2))&&(Yd.copy(r).invert(),Ts.copy(e.ray).applyMatrix4(Yd),!(i.boundingBox!==null&&Ts.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ts)))}_computeIntersections(e,t,i){let n,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let p=d[m],g=a[p.materialIndex],_=Math.max(p.start,f.start),M=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let v=_,b=M;v<b;v+=3){let S=o.getX(v),y=o.getX(v+1),E=o.getX(v+2);n=Lo(this,g,e,i,c,h,u,S,y,E),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{let m=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let p=m,g=x;p<g;p+=3){let _=o.getX(p),M=o.getX(p+1),v=o.getX(p+2);n=Lo(this,a,e,i,c,h,u,_,M,v),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let p=d[m],g=a[p.materialIndex],_=Math.max(p.start,f.start),M=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let v=_,b=M;v<b;v+=3){let S=v,y=v+1,E=v+2;n=Lo(this,g,e,i,c,h,u,S,y,E),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{let m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=m,g=x;p<g;p+=3){let _=p,M=p+1,v=p+2;n=Lo(this,a,e,i,c,h,u,_,M,v),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}}};function E0(s,e,t,i,n,r,a,o){let l;if(e.side===jt?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,e.side===Oi,o),l===null)return null;Po.copy(o),Po.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Po);return c<t.near||c>t.far?null:{distance:c,point:Po.clone(),object:s}}function Lo(s,e,t,i,n,r,a,o,l,c){s.getVertexPosition(o,Ao),s.getVertexPosition(l,Ro),s.getVertexPosition(c,Co);let h=E0(s,e,t,i,Ao,Ro,Co,$d);if(h){let u=new I;Rn.getBarycoord($d,Ao,Ro,Co,u),n&&(h.uv=Rn.getInterpolatedAttribute(n,o,l,c,u,new De)),r&&(h.uv1=Rn.getInterpolatedAttribute(r,o,l,c,u,new De)),a&&(h.normal=Rn.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new I,materialIndex:0};Rn.getNormal(Ao,Ro,Co,d.normal),h.face=d,h.barycoord=u}return h}var ra=new ct,Zd=new ct,Jd=new ct,w0=new ct,jd=new Pe,No=new I,mh=new Xt,Qd=new Pe,gh=new Ns,Ma=class extends ke{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=vh,this.bindMatrix=new Pe,this.bindMatrixInverse=new Pe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Jt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,No),this.boundingBox.expandByPoint(No)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Xt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,No),this.boundingSphere.expandByPoint(No)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mh.copy(this.boundingSphere),mh.applyMatrix4(n),e.ray.intersectsSphere(mh)!==!1&&(Qd.copy(n).invert(),gh.copy(e.ray).applyMatrix4(Qd),!(this.boundingBox!==null&&gh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,gh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ct,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===vh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Vf?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ae("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,n=this.geometry;Zd.fromBufferAttribute(n.attributes.skinIndex,e),Jd.fromBufferAttribute(n.attributes.skinWeight,e),t.isVector4?(ra.copy(t),t.set(0,0,0,0)):(ra.set(t.x,t.y,t.z,1),t.set(0,0,0)),ra.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Jd.getComponent(r);if(a!==0){let o=Zd.getComponent(r);jd.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(w0.copy(ra).applyMatrix4(jd),a)}}return t.isVector4&&(t.w=ra.w),t.applyMatrix4(this.bindMatrixInverse)}},Sr=class extends ft{constructor(){super(),this.isBone=!0,this.type="Bone"}},Tr=class extends zt{constructor(e=null,t=1,i=1,n,r,a,o,l,c=It,h=It,u,d){super(null,a,o,l,c,h,n,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ef=new Pe,A0=new Pe,ba=class s{constructor(e=[],t=[]){this.uuid=fn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ae("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Pe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Pe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:A0;ef.multiplyMatrices(o,t[r]),ef.toArray(i,r*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Tr(t,e,e,Fi,Si);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){let r=e.bones[i],a=t[r];a===void 0&&(Ae("Skeleton: No bone found with UUID:",r),a=new Sr),this.bones.push(a),this.boneInverses.push(new Pe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let n=0,r=t.length;n<r;n++){let a=t[n];e.bones.push(a.uuid);let o=i[n];e.boneInverses.push(o.toArray())}return e}},Ln=class extends nt{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},hr=new Pe,tf=new Pe,Do=[],nf=new Jt,R0=new Pe,aa=new ke,oa=new Xt,Ki=class extends ke{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ln(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,R0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Jt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,hr),nf.copy(e.boundingBox).applyMatrix4(hr),this.boundingBox.union(nf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,hr),oa.copy(e.boundingSphere).applyMatrix4(hr),this.boundingSphere.union(oa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(e,t){let i=this.matrixWorld,n=this.count;if(aa.geometry=this.geometry,aa.material=this.material,aa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oa.copy(this.boundingSphere),oa.applyMatrix4(i),e.ray.intersectsSphere(oa)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,hr),tf.multiplyMatrices(i,hr),aa.matrixWorld=tf,aa.raycast(e,Do);for(let a=0,o=Do.length;a<o;a++){let l=Do[a];l.instanceId=r,l.object=this,t.push(l)}Do.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ln(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Tr(new Float32Array(n*this.count),n,this.count,bl,Si));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=n*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Es=new Xt,C0=new De(.5,.5),Oo=new I,on=class{constructor(e=new qi,t=new qi,i=new qi,n=new qi,r=new qi,a=new qi){this.planes=[e,t,i,n,r,a]}set(e,t,i,n,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Di,i=!1){let n=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],x=r[9],p=r[10],g=r[11],_=r[12],M=r[13],v=r[14],b=r[15];if(n[0].setComponents(c-a,f-h,g-m,b-_).normalize(),n[1].setComponents(c+a,f+h,g+m,b+_).normalize(),n[2].setComponents(c+o,f+u,g+x,b+M).normalize(),n[3].setComponents(c-o,f-u,g-x,b-M).normalize(),i)n[4].setComponents(l,d,p,v).normalize(),n[5].setComponents(c-l,f-d,g-p,b-v).normalize();else if(n[4].setComponents(c-l,f-d,g-p,b-v).normalize(),t===Di)n[5].setComponents(c+l,f+d,g+p,b+v).normalize();else if(t===xr)n[5].setComponents(l,d,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(e){Es.center.set(0,0,0);let t=C0.distanceTo(e.center);return Es.radius=.7071067811865476+t,Es.applyMatrix4(e.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(Oo.x=n.normal.x>0?e.max.x:e.min.x,Oo.y=n.normal.y>0?e.max.y:e.min.y,Oo.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Oo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},sf=new Pe,el=class s{constructor(){this.coordinateSystem=Di,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let n=0;n<t.length;n++){let r=t[n];sf.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[n]===void 0&&(i[n]=new on),i[n].setFromProjectionMatrix(sf,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let n=0;n<e._count;n++)t[n]===void 0&&(t[n]=new on),t[n].copy(i[n]);return this._count=e._count,this}clone(){return new s().copy(this)}};var Er=class extends si{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},tl=new I,il=new I,rf=new Pe,la=new Ns,Uo=new Xt,xh=new I,af=new I,Ds=class extends ft{constructor(e=new at,t=new Er){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)tl.fromBufferAttribute(t,n-1),il.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=tl.distanceTo(il);e.setAttribute("lineDistance",new Ke(i,1))}else Ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Uo.copy(i.boundingSphere),Uo.applyMatrix4(n),Uo.radius+=r,e.ray.intersectsSphere(Uo)===!1)return;rf.copy(n).invert(),la.copy(e.ray).applyMatrix4(rf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let x=f,p=m-1;x<p;x+=c){let g=h.getX(x),_=h.getX(x+1),M=Fo(this,e,la,l,g,_,x);M&&t.push(M)}if(this.isLineLoop){let x=h.getX(m-1),p=h.getX(f),g=Fo(this,e,la,l,x,p,m-1);g&&t.push(g)}}else{let f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let x=f,p=m-1;x<p;x+=c){let g=Fo(this,e,la,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=Fo(this,e,la,l,m-1,f,m-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Fo(s,e,t,i,n,r,a){let o=s.geometry.attributes.position;if(tl.fromBufferAttribute(o,n),il.fromBufferAttribute(o,r),t.distanceSqToSegment(tl,il,xh,af)>i)return;xh.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(xh);if(!(c<e.near||c>e.far))return{distance:c,point:af.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var of=new I,lf=new I,Sa=class extends Ds{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let n=0,r=t.count;n<r;n+=2)of.fromBufferAttribute(t,n),lf.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+of.distanceTo(lf);e.setAttribute("lineDistance",new Ke(i,1))}else Ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ta=class extends Ds{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ln=class extends si{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},cf=new Pe,bh=new Ns,zo=new Xt,ko=new I,Nn=class extends ft{constructor(e=new at,t=new ln){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zo.copy(i.boundingSphere),zo.applyMatrix4(n),zo.radius+=r,e.ray.intersectsSphere(zo)===!1)return;cf.copy(n).invert(),bh.copy(e.ray).applyMatrix4(cf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=d,x=f;m<x;m++){let p=c.getX(m);ko.fromBufferAttribute(u,p),hf(ko,p,l,n,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,x=f;m<x;m++)ko.fromBufferAttribute(u,m),hf(ko,m,l,n,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function hf(s,e,t,i,n,r,a){let o=bh.distanceSqToPoint(s);if(o<t){let l=new I;bh.closestPointToPoint(s,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ea=class extends zt{constructor(e=[],t=Bs,i,n,r,a,o,l,c,h){super(e,t,i,n,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Dn=class extends zt{constructor(e,t,i,n,r,a,o,l,c){super(e,t,i,n,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var On=class extends zt{constructor(e,t,i=ji,n,r,a,o=It,l=It,c,h=In,u=1){if(h!==In&&h!==Vn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,n,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},wa=class extends On{constructor(e,t=ji,i=Bs,n,r,a=It,o=It,l,c=In){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,n,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Aa=class extends zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},wt=class s extends at{constructor(e=1,t=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};let o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,i,t,e,a,r,0),m("z","y","x",1,-1,i,t,-e,a,r,1),m("x","z","y",1,1,e,i,t,n,a,2),m("x","z","y",1,-1,e,i,-t,n,a,3),m("x","y","z",1,-1,e,t,i,n,r,4),m("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(u,2));function m(x,p,g,_,M,v,b,S,y,E,L){let R=v/y,D=b/E,N=v/2,B=b/2,P=S/2,z=y+1,H=E+1,F=0,Y=0,G=new I;for(let q=0;q<H;q++){let te=q*D-B;for(let fe=0;fe<z;fe++){let we=fe*R-N;G[x]=we*_,G[p]=te*M,G[g]=P,c.push(G.x,G.y,G.z),G[x]=0,G[p]=0,G[g]=S>0?1:-1,h.push(G.x,G.y,G.z),u.push(fe/y),u.push(1-q/E),F+=1}}for(let q=0;q<E;q++)for(let te=0;te<y;te++){let fe=d+te+z*q,we=d+te+z*(q+1),Z=d+(te+1)+z*(q+1),oe=d+(te+1)+z*q;l.push(fe,we,oe),l.push(we,Z,oe),Y+=6}o.addGroup(f,Y,L),f+=Y,d+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Ra=class s extends at{constructor(e=1,t=1,i=4,n=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:n,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,m=i*2+r,x=n+1,p=new I,g=new I;for(let _=0;_<=m;_++){let M=0,v=0,b=0,S=0;if(_<=i){let L=_/i,R=L*Math.PI/2;v=-h-e*Math.cos(R),b=e*Math.sin(R),S=-e*Math.cos(R),M=L*u}else if(_<=i+r){let L=(_-i)/r;v=-h+L*t,b=e,S=0,M=u+L*d}else{let L=(_-i-r)/i,R=L*Math.PI/2;v=h+e*Math.sin(R),b=e*Math.cos(R),S=e*Math.sin(R),M=u+d+L*u}let y=Math.max(0,Math.min(1,M/f)),E=0;_===0?E=.5/n:_===m&&(E=-.5/n);for(let L=0;L<=n;L++){let R=L/n,D=R*Math.PI*2,N=Math.sin(D),B=Math.cos(D);g.x=-b*B,g.y=v,g.z=b*N,o.push(g.x,g.y,g.z),p.set(-b*B,S,b*N),p.normalize(),l.push(p.x,p.y,p.z),c.push(R+E,y)}if(_>0){let L=(_-1)*x;for(let R=0;R<n;R++){let D=L+R,N=L+R+1,B=_*x+R,P=_*x+R+1;a.push(D,N,B),a.push(N,P,B)}}}this.setIndex(a),this.setAttribute("position",new Ke(o,3)),this.setAttribute("normal",new Ke(l,3)),this.setAttribute("uv",new Ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Ca=class s extends at{constructor(e=1,t=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new I,h=new De;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=i+u/t*n;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ke(a,3)),this.setAttribute("normal",new Ke(o,3)),this.setAttribute("uv",new Ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},xt=class s extends at{constructor(e=1,t=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,x=[],p=i/2,g=0;_(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Ke(u,3)),this.setAttribute("normal",new Ke(d,3)),this.setAttribute("uv",new Ke(f,2));function _(){let v=new I,b=new I,S=0,y=(t-e)/i;for(let E=0;E<=r;E++){let L=[],R=E/r,D=R*(t-e)+e;for(let N=0;N<=n;N++){let B=N/n,P=B*l+o,z=Math.sin(P),H=Math.cos(P);b.x=D*z,b.y=-R*i+p,b.z=D*H,u.push(b.x,b.y,b.z),v.set(z,y,H).normalize(),d.push(v.x,v.y,v.z),f.push(B,1-R),L.push(m++)}x.push(L)}for(let E=0;E<n;E++)for(let L=0;L<r;L++){let R=x[L][E],D=x[L+1][E],N=x[L+1][E+1],B=x[L][E+1];(e>0||L!==0)&&(h.push(R,D,B),S+=3),(t>0||L!==r-1)&&(h.push(D,N,B),S+=3)}c.addGroup(g,S,0),g+=S}function M(v){let b=m,S=new De,y=new I,E=0,L=v===!0?e:t,R=v===!0?1:-1;for(let N=1;N<=n;N++)u.push(0,p*R,0),d.push(0,R,0),f.push(.5,.5),m++;let D=m;for(let N=0;N<=n;N++){let P=N/n*l+o,z=Math.cos(P),H=Math.sin(P);y.x=L*H,y.y=p*R,y.z=L*z,u.push(y.x,y.y,y.z),d.push(0,R,0),S.x=z*.5+.5,S.y=H*.5*R+.5,f.push(S.x,S.y),m++}for(let N=0;N<n;N++){let B=b+N,P=D+N;v===!0?h.push(P,P+1,B):h.push(P+1,P,B),E+=3}c.addGroup(g,E,v===!0?1:2),g+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},rs=class s extends xt{constructor(e=1,t=1,i=32,n=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},wr=class s extends at{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let r=[],a=[];o(n),c(i),h(),this.setAttribute("position",new Ke(r,3)),this.setAttribute("normal",new Ke(r.slice(),3)),this.setAttribute("uv",new Ke(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let M=new I,v=new I,b=new I;for(let S=0;S<t.length;S+=3)f(t[S+0],M),f(t[S+1],v),f(t[S+2],b),l(M,v,b,_)}function l(_,M,v,b){let S=b+1,y=[];for(let E=0;E<=S;E++){y[E]=[];let L=_.clone().lerp(v,E/S),R=M.clone().lerp(v,E/S),D=S-E;for(let N=0;N<=D;N++)N===0&&E===S?y[E][N]=L:y[E][N]=L.clone().lerp(R,N/D)}for(let E=0;E<S;E++)for(let L=0;L<2*(S-E)-1;L++){let R=Math.floor(L/2);L%2===0?(d(y[E][R+1]),d(y[E+1][R]),d(y[E][R])):(d(y[E][R+1]),d(y[E+1][R+1]),d(y[E+1][R]))}}function c(_){let M=new I;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(_),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function h(){let _=new I;for(let M=0;M<r.length;M+=3){_.x=r[M+0],_.y=r[M+1],_.z=r[M+2];let v=p(_)/2/Math.PI+.5,b=g(_)/Math.PI+.5;a.push(v,1-b)}m(),u()}function u(){for(let _=0;_<a.length;_+=6){let M=a[_+0],v=a[_+2],b=a[_+4],S=Math.max(M,v,b),y=Math.min(M,v,b);S>.9&&y<.1&&(M<.2&&(a[_+0]+=1),v<.2&&(a[_+2]+=1),b<.2&&(a[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,M){let v=_*3;M.x=e[v+0],M.y=e[v+1],M.z=e[v+2]}function m(){let _=new I,M=new I,v=new I,b=new I,S=new De,y=new De,E=new De;for(let L=0,R=0;L<r.length;L+=9,R+=6){_.set(r[L+0],r[L+1],r[L+2]),M.set(r[L+3],r[L+4],r[L+5]),v.set(r[L+6],r[L+7],r[L+8]),S.set(a[R+0],a[R+1]),y.set(a[R+2],a[R+3]),E.set(a[R+4],a[R+5]),b.copy(_).add(M).add(v).divideScalar(3);let D=p(b);x(S,R+0,_,D),x(y,R+2,M,D),x(E,R+4,v,D)}}function x(_,M,v,b){b<0&&_.x===1&&(a[M]=_.x-1),v.x===0&&v.z===0&&(a[M]=b/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function g(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}},Ia=class s extends wr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var Pa=class s extends wr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var La=class s extends wr{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},$i=class s extends at{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=e/o,d=t/l,f=[],m=[],x=[],p=[];for(let g=0;g<h;g++){let _=g*d-a;for(let M=0;M<c;M++){let v=M*u-r;m.push(v,-_,0),x.push(0,0,1),p.push(M/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<o;_++){let M=_+c*g,v=_+c*(g+1),b=_+1+c*(g+1),S=_+1+c*g;f.push(M,v,S),f.push(v,b,S)}this.setIndex(f),this.setAttribute("position",new Ke(m,3)),this.setAttribute("normal",new Ke(x,3)),this.setAttribute("uv",new Ke(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var Un=class s extends at{constructor(e=1,t=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new I,d=new I,f=[],m=[],x=[],p=[];for(let g=0;g<=i;g++){let _=[],M=g/i,v=a+M*o,b=e*Math.cos(v),S=Math.sqrt(e*e-b*b),y=0;g===0&&a===0?y=.5/t:g===i&&l===Math.PI&&(y=-.5/t);for(let E=0;E<=t;E++){let L=E/t,R=n+L*r;u.x=-S*Math.cos(R),u.y=b,u.z=S*Math.sin(R),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),p.push(L+y,1-M),_.push(c++)}h.push(_)}for(let g=0;g<i;g++)for(let _=0;_<t;_++){let M=h[g][_+1],v=h[g][_],b=h[g+1][_],S=h[g+1][_+1];(g!==0||a>0)&&f.push(M,v,S),(g!==i-1||l<Math.PI)&&f.push(v,b,S)}this.setIndex(f),this.setAttribute("position",new Ke(m,3)),this.setAttribute("normal",new Ke(x,3)),this.setAttribute("uv",new Ke(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ar=class s extends at{constructor(e=1,t=.4,i=12,n=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),n=Math.floor(n);let l=[],c=[],h=[],u=[],d=new I,f=new I,m=new I;for(let x=0;x<=i;x++){let p=a+x/i*o;for(let g=0;g<=n;g++){let _=g/n*r;f.x=(e+t*Math.cos(p))*Math.cos(_),f.y=(e+t*Math.cos(p))*Math.sin(_),f.z=t*Math.sin(p),c.push(f.x,f.y,f.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),m.subVectors(f,d).normalize(),h.push(m.x,m.y,m.z),u.push(g/n),u.push(x/i)}}for(let x=1;x<=i;x++)for(let p=1;p<=n;p++){let g=(n+1)*x+p-1,_=(n+1)*(x-1)+p-1,M=(n+1)*(x-1)+p,v=(n+1)*x+p;l.push(g,_,v),l.push(_,M,v)}this.setIndex(l),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Vs(s){let e={};for(let t in s){e[t]={};for(let i in s[t]){let n=s[t][i];if(uf(n))n.isRenderTargetTexture?(Ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone();else if(Array.isArray(n))if(uf(n[0])){let r=[];for(let a=0,o=n.length;a<o;a++)r[a]=n[a].clone();e[t][i]=r}else e[t][i]=n.slice();else e[t][i]=n}}return e}function ai(s){let e={};for(let t=0;t<s.length;t++){let i=Vs(s[t]);for(let n in i)e[n]=i[n]}return e}function uf(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function I0(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function nu(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}var ap={clone:Vs,merge:ai},P0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,L0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,cn=class extends si{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=P0,this.fragmentShader=L0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=I0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let n=e.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=t[n.value]||null;break;case"c":this.uniforms[i].value=new be().setHex(n.value);break;case"v2":this.uniforms[i].value=new De().fromArray(n.value);break;case"v3":this.uniforms[i].value=new I().fromArray(n.value);break;case"v4":this.uniforms[i].value=new ct().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Be().fromArray(n.value);break;case"m4":this.uniforms[i].value=new Pe().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},nl=class extends cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Pt=class extends si{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ka,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ui=class extends Pt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new De(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Rs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Rs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ri=class extends si{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ka,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=ml,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},sl=class extends si{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},rl=class extends si{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ns(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function ca(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function N0(s){function e(n,r){return s[n]-s[r]}let t=s.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function df(s,e,t){let i=s.length,n=new s.constructor(i);for(let r=0,a=0;a!==i;++r){let o=t[r]*e;for(let l=0;l!==e;++l)n[a++]=s[o+l]}return n}function D0(s,e,t,i){let n=1,r=s[0];for(;r!==void 0&&r[i]===void 0;)r=s[n++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[n++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[n++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=s[n++];while(r!==void 0)}var hn=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],r=t[i-1];e:{t:{let a;i:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=t[++i],e<n)break t}a=t.length;break i}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=t[--i-1],e>=r)break t}a=i,i=0;break i}break e}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let a=0;a!==n;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},al=class extends hn{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ws,endingEnd:ws}}intervalChanged_(e,t,i){let n=this.parameterPositions,r=e-2,a=e+1,o=n[r],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case As:r=e,o=2*t-i;break;case da:r=n.length-2,o=t+n[r]-n[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case As:a=e,l=2*i-t;break;case da:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(i-t)/(n-t),x=m*m,p=x*m,g=-d*p+2*d*x-d*m,_=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*m+1,M=(-1-f)*p+(1.5+f)*x+.5*m,v=f*p-f*x;for(let b=0;b!==o;++b)r[b]=g*a[h+b]+_*a[c+b]+M*a[l+b]+v*a[u+b];return r}},Na=class extends hn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},ol=class extends hn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},ll=class extends hn{interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(i-t)/(n-t),x=1-m;for(let p=0;p!==o;++p)r[p]=a[c+p]*x+a[l+p]*m;return r}let d=o*2,f=e-1;for(let m=0;m!==o;++m){let x=a[c+m],p=a[l+m],g=f*d+m*2,_=u[g],M=u[g+1],v=e*d+m*2,b=h[v],S=h[v+1],y=U0(i,t,_,b,n);r[m]=op(y,x,M,S,p)}return r}};function op(s,e,t,i,n){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*i+s*s*s*n}function O0(s,e,t,i,n){let r=1-s;return 3*r*r*(t-e)+6*r*s*(i-t)+3*s*s*(n-i)}function U0(s,e,t,i,n){let r=(s-e)/(n-e);for(let a=0;a<8;a++){let o=op(r,e,t,i,n)-s;if(Math.abs(o)<1e-10)break;let l=O0(r,e,t,i,n);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var mi=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ns(t,this.TimeBufferType),this.values=ns(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ns(e.times,Array),values:ns(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n),ca(e.settings)&&(i.settings={inTangents:ns(e.settings.inTangents,Array),outTangents:ns(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ol(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Na(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new al(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ll(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Cs:t=this.InterpolantFactoryMethodDiscrete;break;case Is:t=this.InterpolantFactoryMethodLinear;break;case Go:t=this.InterpolantFactoryMethodSmooth;break;case Mh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ae("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cs;case this.InterpolantFactoryMethodLinear:return Is;case this.InterpolantFactoryMethodSmooth:return Go;case this.InterpolantFactoryMethodBezier:return Mh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e;ca(this.settings)&&(ff(this.settings.inTangents,e),ff(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e;ca(this.settings)&&(pf(this.settings.inTangents,e),pf(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,n=i.length,r=0,a=n-1;for(;r!==n&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,r=i.length;r===0&&(ze("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){ze("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){ze("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&Ym(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){ze("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Go,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(n)l=!0;else{let u=o*i,d=u-i,f=u+i;for(let m=0;m!==i;++m){let x=t[u+m];if(x!==t[d+m]||x!==t[f+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,ca(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function ff(s,e){for(let t=0,i=s.length;t!==i;t+=2)s[t]+=e}function pf(s,e){for(let t=0,i=s.length;t!==i;t+=2)s[t]*=e}mi.prototype.ValueTypeName="";mi.prototype.TimeBufferType=Float32Array;mi.prototype.ValueBufferType=Float32Array;mi.prototype.DefaultInterpolation=Is;var Fn=class extends mi{constructor(e,t,i){super(e,t,i)}};Fn.prototype.ValueTypeName="bool";Fn.prototype.ValueBufferType=Array;Fn.prototype.DefaultInterpolation=Cs;Fn.prototype.InterpolantFactoryMethodLinear=void 0;Fn.prototype.InterpolantFactoryMethodSmooth=void 0;var Da=class extends mi{constructor(e,t,i,n){super(e,t,i,n)}};Da.prototype.ValueTypeName="color";var zn=class extends mi{constructor(e,t,i,n){super(e,t,i,n)}};zn.prototype.ValueTypeName="number";var cl=class extends hn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t),c=e*o;for(let h=c+o;c!==h;c+=4)gt.slerpFlat(r,0,a,c-o,a,c,l);return r}},kn=class extends mi{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new cl(this.times,this.values,this.getValueSize(),e)}};kn.prototype.ValueTypeName="quaternion";kn.prototype.InterpolantFactoryMethodSmooth=void 0;var Bn=class extends mi{constructor(e,t,i){super(e,t,i)}};Bn.prototype.ValueTypeName="string";Bn.prototype.ValueBufferType=Array;Bn.prototype.DefaultInterpolation=Cs;Bn.prototype.InterpolantFactoryMethodLinear=void 0;Bn.prototype.InterpolantFactoryMethodSmooth=void 0;var as=class extends mi{constructor(e,t,i,n){super(e,t,i,n)}};as.prototype.ValueTypeName="vector";var Hn=class{constructor(e="",t=-1,i=[],n=nc){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=fn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,n=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(z0(i[a]).scale(n));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=i.length;r!==a;++r)t.push(mi.toJSON(i[r]));return n}static CreateFromMorphTargetSequence(e,t,i,n){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=N0(l);l=df(l,1,h),c=df(c,1,h),!n&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new zn(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let n={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=n[u];d||(n[u]=d=[]),d.push(c)}}let a=[];for(let o in n)a.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return a}resetDuration(){let e=this.tracks,t=0;for(let i=0,n=e.length;i!==n;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function F0(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return zn;case"vector":case"vector2":case"vector3":case"vector4":return as;case"color":return Da;case"quaternion":return kn;case"bool":case"boolean":return Fn;case"string":return Bn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function z0(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=F0(s.type);if(s.times===void 0){let i=[],n=[];D0(s.keys,i,n,"value"),s.times=i,s.values=n}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),ca(s.settings)&&(t.settings={inTangents:ns(s.settings.inTangents,Float32Array),outTangents:ns(s.settings.outTangents,Float32Array)}),t}var rn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(mf(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!mf(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function mf(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var hl=class{constructor(e,t,i){let n=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&n.onStart!==void 0&&n.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},lp=new hl,un=class{constructor(e){this.manager=e!==void 0?e:lp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};un.DEFAULT_MATERIAL_NAME="__DEFAULT";var An={},Sh=class extends Error{constructor(e,t){super(e),this.response=t}},Rr=class extends un{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=rn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(An[e]!==void 0){An[e].push({onLoad:t,onProgress:i,onError:n});return}An[e]=[],An[e].push({onLoad:t,onProgress:i,onError:n});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ae("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=An[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,x=0,p=new ReadableStream({start(g){_();function _(){u.read().then(({done:M,value:v})=>{if(M)g.close();else{x+=v.byteLength;let b=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:f});for(let S=0,y=h.length;S<y;S++){let E=h[S];E.onProgress&&E.onProgress(b)}g.enqueue(v),_()}},M=>{g.error(M)})}}});return new Response(p)}else throw new Sh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{rn.add(`file:${e}`,c);let h=An[e];delete An[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=An[e];if(h===void 0)throw this.manager.itemError(e),c;delete An[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ur=new WeakMap,ul=class extends un{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=rn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=ur.get(a);u===void 0&&(u=[],ur.set(a,u)),u.push({onLoad:t,onError:n})}return a}let o=yr("img");function l(){h(),t&&t(this);let u=ur.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}ur.delete(this),r.manager.itemEnd(e)}function c(u){h(),n&&n(u),rn.remove(`image:${e}`);let d=ur.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(u)}ur.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),rn.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var Oa=class extends un{constructor(e){super(e)}load(e,t,i,n){let r=new zt,a=new ul(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,n),r}},os=class extends ft{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ls=class extends os{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},yh=new Pe,gf=new I,xf=new I,Cr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.mapType=gi,this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new on,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;gf.setFromMatrixPosition(e.matrixWorld),t.position.copy(gf),xf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,n){yh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(yh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=n?n.z/r.x:1,o=n?n.w/r.y:1,l=n?n.x/r.x:0,c=n?n.y/r.y:0;e.coordinateSystem===xr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(yh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Bo=new I,Ho=new gt,sn=new I,Ua=class extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=Di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Bo,Ho,sn),sn.x===1&&sn.y===1&&sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bo,Ho,sn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Bo,Ho,sn),sn.x===1&&sn.y===1&&sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bo,Ho,sn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},is=new I,yf=new De,_f=new De,Ct=class extends Ua{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ha*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(is.x,is.y).multiplyScalar(-e/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(is.x,is.y).multiplyScalar(-e/is.z)}getViewSize(e,t){return this.getViewBounds(e,yf,_f),t.subVectors(_f,yf)}setViewOffset(e,t,i,n,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ha*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Th=class extends Cr{constructor(){super(new Ct(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=Ps*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||n!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=n,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Os=class extends os{constructor(e,t,i=0,n=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=i,this.angle=n,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Th}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Eh=class extends Cr{constructor(){super(new Ct(90,1,.5,500)),this.isPointLightShadow=!0}},di=class extends os{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Eh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Us=class extends Ua{constructor(e=-1,t=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},wh=class extends Cr{constructor(){super(new Us(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Zi=class extends os{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new wh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Fa=class extends os{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Gn=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var _h=new WeakMap,za=class extends un{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ae("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ae("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=rn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{_h.has(a)===!0?(n&&n(_h.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return rn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){n&&n(c),_h.set(l,c),rn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});rn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var dr=-90,fr=1,Ir=class extends ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Ct(dr,fr,e,t);n.layers=this.layers,this.add(n);let r=new Ct(dr,fr,e,t);r.layers=this.layers,this.add(r);let a=new Ct(dr,fr,e,t);a.layers=this.layers,this.add(a);let o=new Ct(dr,fr,e,t);o.layers=this.layers,this.add(o);let l=new Ct(dr,fr,e,t);l.layers=this.layers,this.add(l);let c=new Ct(dr,fr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Di)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xr)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,n),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,n),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,n),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,n),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,n),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,n),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},dl=class extends Ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var fl=class{constructor(e,t,i){this.binding=e,this.valueSize=i;let n,r,a;switch(t){case"quaternion":n=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let i=this.buffer,n=this.valueSize,r=e*n+n,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==n;++o)i[r+o]=i[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(i,r,0,o,n)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,n,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,i=this.buffer,n=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(i,n,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){o.setValue(i,n);break}}saveOriginalState(){let e=this.binding,t=this.buffer,i=this.valueSize,n=i*this._origIndex;e.getValue(t,n);for(let r=i,a=n;r!==a;++r)t[r]=t[n+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,n,r){if(n>=.5)for(let a=0;a!==r;++a)e[t+a]=e[i+a]}_slerp(e,t,i,n){gt.slerpFlat(e,t,e,t,e,i,n)}_slerpAdditive(e,t,i,n,r){let a=this._workIndex*r;gt.multiplyQuaternionsFlat(e,a,e,t,e,i),gt.slerpFlat(e,t,e,t,e,a,n)}_lerp(e,t,i,n,r){let a=1-n;for(let o=0;o!==r;++o){let l=t+o;e[l]=e[l]*a+e[i+o]*n}}_lerpAdditive(e,t,i,n,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[i+a]*n}}},su="\\[\\]\\.:\\/",k0=new RegExp("["+su+"]","g"),ru="[^"+su+"]",B0="[^"+su.replace("\\.","")+"]",H0=/((?:WC+[\/:])*)/.source.replace("WC",ru),G0=/(WCOD+)?/.source.replace("WCOD",B0),V0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ru),W0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ru),X0=new RegExp("^"+H0+G0+V0+W0+"$"),q0=["material","materials","bones","map"],Ah=class{constructor(e,t,i){let n=i||ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},ht=class s{constructor(e,t,i){this.path=t,this.parsedPath=i||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,i):new s(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(k0,"")}static parseTrackName(e){let t=X0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);q0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ae("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[n];if(a===void 0){let c=t.nodeName;ze("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ht.Composite=Ah;ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray];ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var pl=class{constructor(e,t,i=null,n=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=n;let r=t.tracks,a=r.length,o=new Array(a),l={endingStart:ws,endingEnd:ws};for(let c=0;c!==a;++c){let h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=ic,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i=!1){if(e.fadeOut(t),this.fadeIn(t),i===!0){let n=this._clip.duration,r=e._clip.duration,a=r/n,o=n/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i=!1){return e.crossFadeFrom(this,t,i)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){let n=this._mixer,r=n.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=n._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+i,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,n){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Xf:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case nc:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(n,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let i=this._weightInterpolant;if(i!==null){let n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let i=this._timeScaleInterpolant;if(i!==null){let n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,i=this.loop,n=this.time+e,r=this._loopCount,a=i===Wf;if(e===0)return r===-1?n:a&&(r&1)===1?t-n:n;if(i===qa){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(n>=t)n=t;else if(n<0)n=0;else{this.time=n;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),n>=t||n<0){let o=Math.floor(n/t);n-=t*o,r+=Math.abs(o);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=e>0?t:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=n;if(a&&(r&1)===1)return t-n}return n}_setEndings(e,t,i){let n=this._interpolantSettings;i?(n.endingStart=As,n.endingEnd=As):(e?n.endingStart=this.zeroSlopeAtStart?As:ws:n.endingStart=da,t?n.endingEnd=this.zeroSlopeAtEnd?As:ws:n.endingEnd=da)}_scheduleFading(e,t,i){let n=this._mixer,r=n.time,a=this._weightInterpolant;a===null&&(a=n._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=i,this}},Y0=new Float32Array(1),Pr=class extends Yi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let i=e._localRoot||this._root,n=e._clip.tracks,r=n.length,a=e._propertyBindings,o=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){let d=n[u],f=d.name,m=h[f];if(m!==void 0)++m.referenceCount,a[u]=m;else{if(m=a[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}let x=t&&t._propertyBindings[u].binding.parsedPath;m=new fl(ht.create(i,f,x),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),a[u]=m}o[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let i=(e._localRoot||this._root).uuid,n=e._clip.uuid,r=this._actionsByClip[n];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,n,i)}let t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){let r=t[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){let r=t[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){let n=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=n.length,n.push(e),a.actionByRoot[i]=e}_removeInactiveAction(e){let t=this._actions,i=t[t.length-1],n=e._cacheIndex;i._cacheIndex=n,t[n]=i,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){let r=t[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,i=e._cacheIndex,n=this._nActiveActions++,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_takeBackAction(e){let t=this._actions,i=e._cacheIndex,n=--this._nActiveActions,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_addInactiveBinding(e,t,i){let n=this._bindingsByRootAndName,r=this._bindings,a=n[t];a===void 0&&(a={},n[t]=a),a[i]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,i=e.binding,n=i.rootNode.uuid,r=i.path,a=this._bindingsByRootAndName,o=a[n],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[n]}_lendBinding(e){let t=this._bindings,i=e._cacheIndex,n=this._nActiveBindings++,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_takeBackBinding(e){let t=this._bindings,i=e._cacheIndex,n=--this._nActiveBindings,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,i=e[t];return i===void 0&&(i=new Na(new Float32Array(2),new Float32Array(2),1,Y0),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){let t=this._controlInterpolants,i=e.__cacheIndex,n=--this._nActiveControlInterpolants,r=t[n];e.__cacheIndex=n,t[n]=e,r.__cacheIndex=i,t[i]=r}clipAction(e,t,i){let n=t||this._root,r=n.uuid,a=typeof e=="string"?Hn.findByName(n,e):e,o=a!==null?a.uuid:e,l=this._actionsByClip[o],c=null;if(i===void 0&&(a!==null?i=a.blendMode:i=nc),l!==void 0){let u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===i)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let h=new pl(this,a,t,i);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){let i=t||this._root,n=i.uuid,r=typeof e=="string"?Hn.findByName(i,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[n]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;let t=this._actions,i=this._nActiveActions,n=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(n,e,r,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,i=e.uuid,n=this._actionsByClip,r=n[i];if(r!==void 0){let a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete n[i]}}uncacheRoot(e){let t=e.uuid,i=this._actionsByClip;for(let a in i){let o=i[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let n=this._bindingsByRootAndName,r=n[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}};var Rh=class{static{this.prototype.isMatrix2=!0}constructor(e,t,i,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=n,this}};function au(s,e,t,i){let n=K0(i);switch(t){case Xh:return s*e;case bl:return s*e/n.components*n.byteLength;case Sl:return s*e/n.components*n.byteLength;case cs:return s*e*2/n.components*n.byteLength;case Tl:return s*e*2/n.components*n.byteLength;case qh:return s*e*3/n.components*n.byteLength;case Fi:return s*e*4/n.components*n.byteLength;case El:return s*e*4/n.components*n.byteLength;case Ba:case Ha:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ga:case Va:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Al:case Cl:return Math.max(s,16)*Math.max(e,8)/4;case wl:case Rl:return Math.max(s,8)*Math.max(e,8)/2;case Il:case Pl:case Nl:case Dl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ll:case Wa:case Ol:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ul:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Fl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case zl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case kl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Hl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Vl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Wl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case ql:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Yl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Kl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case $l:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Zl:case Jl:case jl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ql:case ec:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Xa:case tc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function K0(s){switch(s){case gi:case Hh:return{byteLength:1,components:1};case Ur:case Gh:case Qi:return{byteLength:2,components:1};case vl:case Ml:return{byteLength:2,components:4};case ji:case _l:case Si:return{byteLength:4,components:1};case Vh:case Wh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Ip(){let s=null,e=!1,t=null,i=null;function n(r,a){i=s.requestAnimationFrame(n),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Z0(s){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let x=u[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}var J0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,j0=`#ifdef USE_ALPHAHASH
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
#endif`,Q0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ig=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ng=`#ifdef USE_AOMAP
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
#endif`,sg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rg=`#ifdef USE_BATCHING
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
#endif`,ag=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,og=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hg=`#ifdef USE_IRIDESCENCE
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
#endif`,ug=`#ifdef USE_BUMPMAP
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
#endif`,dg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_g=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,vg=`#define PI 3.141592653589793
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
} // validated`,Mg=`vec3 transformedNormal = objectNormal;
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
#endif`,bg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Eg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ag=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rg=`#ifdef USE_ENVMAP
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
#endif`,Cg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Ig=`#ifdef USE_ENVMAP
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
#endif`,Pg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lg=`#ifdef USE_ENVMAP
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
#endif`,Ng=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Og=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ug=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fg=`#ifdef USE_GRADIENTMAP
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
}`,zg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Gg=`#ifdef USE_ENVMAP
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
#endif`,Vg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yg=`PhysicalMaterial material;
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
#endif`,Kg=`uniform sampler2D dfgLUT;
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
}`,$g=`
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
#endif`,Zg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jg=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Qg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ex=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ix=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ax=`#if defined( USE_POINTS_UV )
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
#endif`,ox=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hx=`#if defined( USE_MORPHCOLORS )
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
#endif`,ux=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dx=`#ifdef USE_MORPHTARGETS
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
#endif`,fx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,px=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,_x=`#ifdef USE_NORMALMAP
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
#endif`,vx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ex=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ax=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ix=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Px=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ox=`float getShadowMask() {
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
}`,Ux=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fx=`#ifdef USE_SKINNING
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
#endif`,zx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kx=`#ifdef USE_SKINNING
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
#endif`,Bx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wx=`#ifdef USE_TRANSMISSION
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
#endif`,Xx=`#ifdef USE_TRANSMISSION
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
#endif`,qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$x=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Zx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jx=`uniform sampler2D t2D;
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
}`,jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qx=`uniform float backgroundBlurriness;
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
}`,ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ty=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iy=`#include <common>
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
}`,ny=`#if DEPTH_PACKING == 3200
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
}`,sy=`#define DISTANCE
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
}`,ry=`#define DISTANCE
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
}`,ay=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ly=`uniform float scale;
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
}`,cy=`uniform vec3 diffuse;
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
}`,hy=`#include <common>
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
}`,uy=`uniform vec3 diffuse;
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
}`,dy=`#define LAMBERT
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
}`,fy=`#define LAMBERT
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
}`,py=`#define MATCAP
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
}`,my=`#define MATCAP
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
}`,gy=`#define NORMAL
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
}`,xy=`#define NORMAL
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
}`,yy=`#define PHONG
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
}`,_y=`#define PHONG
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
}`,vy=`#define STANDARD
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
}`,My=`#define STANDARD
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
}`,by=`#define TOON
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
}`,Sy=`#define TOON
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
}`,Ty=`uniform float size;
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
}`,Ey=`uniform vec3 diffuse;
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
}`,wy=`#include <common>
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
}`,Ay=`uniform vec3 color;
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
}`,Ry=`uniform float rotation;
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
}`,Cy=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:J0,alphahash_pars_fragment:j0,alphamap_fragment:Q0,alphamap_pars_fragment:eg,alphatest_fragment:tg,alphatest_pars_fragment:ig,aomap_fragment:ng,aomap_pars_fragment:sg,batching_pars_vertex:rg,batching_vertex:ag,begin_vertex:og,beginnormal_vertex:lg,bsdfs:cg,iridescence_fragment:hg,bumpmap_pars_fragment:ug,clipping_planes_fragment:dg,clipping_planes_pars_fragment:fg,clipping_planes_pars_vertex:pg,clipping_planes_vertex:mg,color_fragment:gg,color_pars_fragment:xg,color_pars_vertex:yg,color_vertex:_g,common:vg,defaultnormal_vertex:Mg,displacementmap_pars_vertex:bg,displacementmap_vertex:Sg,emissivemap_fragment:Tg,emissivemap_pars_fragment:Eg,colorspace_fragment:wg,colorspace_pars_fragment:Ag,envmap_fragment:Rg,envmap_common_pars_fragment:Cg,envmap_pars_fragment:Ig,envmap_pars_vertex:Pg,envmap_physical_pars_fragment:Gg,envmap_vertex:Lg,fog_vertex:Ng,fog_pars_vertex:Dg,fog_fragment:Og,fog_pars_fragment:Ug,gradientmap_pars_fragment:Fg,lightmap_pars_fragment:zg,lights_lambert_fragment:kg,lights_lambert_pars_fragment:Bg,lights_pars_begin:Hg,lights_toon_fragment:Vg,lights_toon_pars_fragment:Wg,lights_phong_fragment:Xg,lights_phong_pars_fragment:qg,lights_physical_fragment:Yg,lights_physical_pars_fragment:Kg,lights_fragment_begin:$g,lights_fragment_maps:Zg,lights_fragment_end:Jg,lightprobes_pars_fragment:jg,logdepthbuf_fragment:Qg,logdepthbuf_pars_fragment:ex,logdepthbuf_pars_vertex:tx,logdepthbuf_vertex:ix,map_fragment:nx,map_pars_fragment:sx,map_particle_fragment:rx,map_particle_pars_fragment:ax,metalnessmap_fragment:ox,metalnessmap_pars_fragment:lx,morphinstance_vertex:cx,morphcolor_vertex:hx,morphnormal_vertex:ux,morphtarget_pars_vertex:dx,morphtarget_vertex:fx,normal_fragment_begin:px,normal_fragment_maps:mx,normal_pars_fragment:gx,normal_pars_vertex:xx,normal_vertex:yx,normalmap_pars_fragment:_x,clearcoat_normal_fragment_begin:vx,clearcoat_normal_fragment_maps:Mx,clearcoat_pars_fragment:bx,iridescence_pars_fragment:Sx,opaque_fragment:Tx,packing:Ex,premultiplied_alpha_fragment:wx,project_vertex:Ax,dithering_fragment:Rx,dithering_pars_fragment:Cx,roughnessmap_fragment:Ix,roughnessmap_pars_fragment:Px,shadowmap_pars_fragment:Lx,shadowmap_pars_vertex:Nx,shadowmap_vertex:Dx,shadowmask_pars_fragment:Ox,skinbase_vertex:Ux,skinning_pars_vertex:Fx,skinning_vertex:zx,skinnormal_vertex:kx,specularmap_fragment:Bx,specularmap_pars_fragment:Hx,tonemapping_fragment:Gx,tonemapping_pars_fragment:Vx,transmission_fragment:Wx,transmission_pars_fragment:Xx,uv_pars_fragment:qx,uv_pars_vertex:Yx,uv_vertex:Kx,worldpos_vertex:$x,background_vert:Zx,background_frag:Jx,backgroundCube_vert:jx,backgroundCube_frag:Qx,cube_vert:ey,cube_frag:ty,depth_vert:iy,depth_frag:ny,distance_vert:sy,distance_frag:ry,equirect_vert:ay,equirect_frag:oy,linedashed_vert:ly,linedashed_frag:cy,meshbasic_vert:hy,meshbasic_frag:uy,meshlambert_vert:dy,meshlambert_frag:fy,meshmatcap_vert:py,meshmatcap_frag:my,meshnormal_vert:gy,meshnormal_frag:xy,meshphong_vert:yy,meshphong_frag:_y,meshphysical_vert:vy,meshphysical_frag:My,meshtoon_vert:by,meshtoon_frag:Sy,points_vert:Ty,points_frag:Ey,shadow_vert:wy,shadow_frag:Ay,sprite_vert:Ry,sprite_frag:Cy},ge={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},mn={basic:{uniforms:ai([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:ai([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new be(0)},envMapIntensity:{value:1}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:ai([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:ai([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:ai([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new be(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:ai([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:ai([ge.points,ge.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:ai([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:ai([ge.common,ge.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:ai([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:ai([ge.sprite,ge.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distance:{uniforms:ai([ge.common,ge.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distance_vert,fragmentShader:qe.distance_frag},shadow:{uniforms:ai([ge.lights,ge.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};mn.physical={uniforms:ai([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Be},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var rc={r:0,b:0,g:0},Iy=new Pe,Pp=new Be;Pp.set(-1,0,0,0,1,0,0,0,1);function Py(s,e,t,i,n,r){let a=new be(0),o=n===!0?0:1,l,c,h=null,u=0,d=null;function f(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){let v=_.backgroundBlurriness>0;M=e.get(M,v)}return M}function m(_){let M=!1,v=f(_);v===null?p(a,o):v&&v.isColor&&(p(v,1),M=!0);let b=s.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(_,M){let v=f(M);v&&v.isCubeTexture?(c===void 0&&(c=new ke(new wt(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:Vs(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,S,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Iy.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Pp),c.material.toneMapped=Ye.getTransfer(v.colorSpace)!==rt,(h!==v||u!==v.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ke(new $i(2,2),new cn({name:"BackgroundMaterial",uniforms:Vs(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(v.colorSpace)!==rt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,M){_.getRGB(rc,nu(s)),t.buffers.color.setClear(rc.r,rc.g,rc.b,M,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,M=1){a.set(_),o=M,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,p(a,o)},render:m,addToRenderList:x,dispose:g}}function Ly(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=d(null),r=n,a=!1;function o(D,N,B,P,z){let H=!1,F=u(D,P,B,N);r!==F&&(r=F,c(r.object)),H=f(D,P,B,z),H&&m(D,P,B,z),z!==null&&e.update(z,s.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,v(D,N,B,P),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return s.createVertexArray()}function c(D){return s.bindVertexArray(D)}function h(D){return s.deleteVertexArray(D)}function u(D,N,B,P){let z=P.wireframe===!0,H=i[N.id];H===void 0&&(H={},i[N.id]=H);let F=D.isInstancedMesh===!0?D.id:0,Y=H[F];Y===void 0&&(Y={},H[F]=Y);let G=Y[B.id];G===void 0&&(G={},Y[B.id]=G);let q=G[z];return q===void 0&&(q=d(l()),G[z]=q),q}function d(D){let N=[],B=[],P=[];for(let z=0;z<t;z++)N[z]=0,B[z]=0,P[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:B,attributeDivisors:P,object:D,attributes:{},index:null}}function f(D,N,B,P){let z=r.attributes,H=N.attributes,F=0,Y=B.getAttributes();for(let G in Y)if(Y[G].location>=0){let te=z[G],fe=H[G];if(fe===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(fe=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(fe=D.instanceColor)),te===void 0||te.attribute!==fe||fe&&te.data!==fe.data)return!0;F++}return r.attributesNum!==F||r.index!==P}function m(D,N,B,P){let z={},H=N.attributes,F=0,Y=B.getAttributes();for(let G in Y)if(Y[G].location>=0){let te=H[G];te===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(te=D.instanceColor));let fe={};fe.attribute=te,te&&te.data&&(fe.data=te.data),z[G]=fe,F++}r.attributes=z,r.attributesNum=F,r.index=P}function x(){let D=r.newAttributes;for(let N=0,B=D.length;N<B;N++)D[N]=0}function p(D){g(D,0)}function g(D,N){let B=r.newAttributes,P=r.enabledAttributes,z=r.attributeDivisors;B[D]=1,P[D]===0&&(s.enableVertexAttribArray(D),P[D]=1),z[D]!==N&&(s.vertexAttribDivisor(D,N),z[D]=N)}function _(){let D=r.newAttributes,N=r.enabledAttributes;for(let B=0,P=N.length;B<P;B++)N[B]!==D[B]&&(s.disableVertexAttribArray(B),N[B]=0)}function M(D,N,B,P,z,H,F){F===!0?s.vertexAttribIPointer(D,N,B,z,H):s.vertexAttribPointer(D,N,B,P,z,H)}function v(D,N,B,P){x();let z=P.attributes,H=B.getAttributes(),F=N.defaultAttributeValues;for(let Y in H){let G=H[Y];if(G.location>=0){let q=z[Y];if(q===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(q=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(q=D.instanceColor)),q!==void 0){let te=q.normalized,fe=q.itemSize,we=e.get(q);if(we===void 0)continue;let Z=we.buffer,oe=we.type,ve=we.bytesPerElement,Ce=oe===s.INT||oe===s.UNSIGNED_INT||q.gpuType===_l;if(q.isInterleavedBufferAttribute){let xe=q.data,Ve=xe.isInterleavedBuffer===!0?xe.stride:xe.itemSize,Lt=q.offset;if(xe.isInstancedInterleavedBuffer||xe.isInstancedBufferAttribute){for(let Fe=0;Fe<G.locationSize;Fe++)g(G.location+Fe,xe.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Fe=0;Fe<G.locationSize;Fe++)p(G.location+Fe);s.bindBuffer(s.ARRAY_BUFFER,Z);for(let Fe=0;Fe<G.locationSize;Fe++)M(G.location+Fe,fe/G.locationSize,oe,te,Ve*ve,(Lt+fe/G.locationSize*Fe)*ve,Ce)}else{if(q.isInstancedBufferAttribute){for(let xe=0;xe<G.locationSize;xe++)g(G.location+xe,q.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let xe=0;xe<G.locationSize;xe++)p(G.location+xe);s.bindBuffer(s.ARRAY_BUFFER,Z);for(let xe=0;xe<G.locationSize;xe++)M(G.location+xe,fe/G.locationSize,oe,te,fe*ve,fe/G.locationSize*xe*ve,Ce)}}else if(F!==void 0){let te=F[Y];if(te!==void 0)switch(te.length){case 2:s.vertexAttrib2fv(G.location,te);break;case 3:s.vertexAttrib3fv(G.location,te);break;case 4:s.vertexAttrib4fv(G.location,te);break;default:s.vertexAttrib1fv(G.location,te)}}}}_()}function b(){L();for(let D in i){let N=i[D];for(let B in N){let P=N[B];for(let z in P){let H=P[z];for(let F in H)h(H[F].object),delete H[F];delete P[z]}}delete i[D]}}function S(D){if(i[D.id]===void 0)return;let N=i[D.id];for(let B in N){let P=N[B];for(let z in P){let H=P[z];for(let F in H)h(H[F].object),delete H[F];delete P[z]}}delete i[D.id]}function y(D){for(let N in i){let B=i[N];for(let P in B){let z=B[P];if(z[D.id]===void 0)continue;let H=z[D.id];for(let F in H)h(H[F].object),delete H[F];delete z[D.id]}}}function E(D){for(let N in i){let B=i[N],P=D.isInstancedMesh===!0?D.id:0,z=B[P];if(z!==void 0){for(let H in z){let F=z[H];for(let Y in F)h(F[Y].object),delete F[Y];delete z[H]}delete B[P],Object.keys(B).length===0&&delete i[N]}}}function L(){R(),a=!0,r!==n&&(r=n,c(r.object))}function R(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:L,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfObject:E,releaseStatesOfProgram:y,initAttributes:x,enableAttribute:p,disableUnusedAttributes:_}}function Ny(s,e,t){let i;function n(l){i=l}function r(l,c){s.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,i,1)}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Dy(s,e,t,i){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let y=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(y){return!(y!==Fi&&i.convert(y)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(y){let E=y===Qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==gi&&y!==Si&&!E&&i.convert(y)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(y){if(y==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ae("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Ae("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Ae("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),S=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:v,maxSamples:b,samples:S}}function Oy(s){let e=this,t=null,i=0,n=!1,r=!1,a=new qi,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,g=s.get(u);if(!n||m===null||m.length===0||r&&!p)r?h(null):c();else{let _=r?0:i,M=_*4,v=g.clippingState||null;l.value=v,v=h(m,d,M,f);for(let b=0;b!==M;++b)v[b]=t[b];g.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,m){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=l.value,m!==!0||p===null){let g=f+x*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(p===null||p.length<g)&&(p=new Float32Array(g));for(let M=0,v=f;M!==x;++M,v+=4)a.copy(u[M]).applyMatrix4(_,o),a.normal.toArray(p,v),p[v+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}var Ja=class extends bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Ea(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new wt(5,5,5),r=new cn({name:"CubemapFromEquirect",uniforms:Vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jt,blending:zs});r.uniforms.tEquirect.value=t;let a=new ke(n,r),o=t.minFilter;return t.minFilter===Ui&&(t.minFilter=Ft),new Ir(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(r)}},cp=256,Uy=3,Fy=20,Lp=256,Np=16,zy=3,ky=new I,By=new be,kr=class s{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ir(1,10,null),this._boxMesh=new ke(new wt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,n=100,r={}){let{size:a=256,position:o=ky}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,m=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(By));let p=new Ir(i,n,h);return p.position.copy(o),p.update(l,e),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=m,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=up(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(cp,eu(e))}_fromTexture(e,t){e.mapping===Bs||e.mapping===Dr?this._setSize(e.image.length===0?cp:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=hp(e,!1,!1),i=Math.log2(e)-Uy;for(let n=0;n<=i;n++)t.texture.mipmaps.push({width:e>>n,height:e>>n});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=hp(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let n=this._boxMesh,r=this._cubeCamera;n.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,n),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Bs||e.mapping===Dr?(this._cubemapMaterial===null&&(this._cubemapMaterial=dp()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=up()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Hy(),this._integrationMaterial=Gy());let t=this._cubeSize,i=e.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Np);for(let a=0;a<=i;a++){let o=s.lodToRoughness(a,i);if(a>i-zy)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(Lp*Math.pow(o,4)))+.5:0;n.roughness.value=o,n.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Vy());let i=this._blurMaterial,n=i.uniforms,r=this._sourceTarget;n.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,n.envMap.value=r.texture,this._renderCube(e,0,i),n.envMap.value=e.texture,this._renderCube(r,0,i)}};function hp(s,e,t){return new Ja(s,{minFilter:Ui,generateMipmaps:e,type:Qi,colorSpace:hi,depthBuffer:t})}function ja(s,e,t){return new cn({name:s,uniforms:e,vertexShader:qe.cube_vert,fragmentShader:t,side:jt,blending:zs,depthTest:!1,depthWrite:!1})}function Hy(){return ja("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Lp}u

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
	`)}function Gy(){return ja("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Np}},`

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
	`)}function Vy(){return ja("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Fy}
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
	`)}function up(){return ja("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function dp(){return ja("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Wy(s){let e=new WeakMap,t=new WeakMap,i=null;function n(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===gl||f===xl)if(e.has(d)){let m=e.get(d).texture;return o(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let x=new Ja(m.height);return x.fromEquirectangularTexture(s,d),e.set(d,x),d.addEventListener("dispose",c),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,m=f===gl||f===xl,x=f===Bs||f===Dr;if(m||x){let p=t.get(d),g=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return i===null&&(i=new kr(s)),p=m?i.fromEquirectangular(d,p):i.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{let _=d.image;return m&&_&&_.height>0||x&&_&&l(_)?(i===null&&(i=new kr(s)),p=m?i.fromEquirectangular(d):i.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function o(d,f){return f===gl?d.mapping=Bs:f===xl&&(d.mapping=Dr),d}function l(d){let f=0,m=6;for(let x=0;x<m;x++)d[x]!==void 0&&f++;return f===m}function c(d){let f=d.target;f.removeEventListener("dispose",c);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:u}}function Xy(s){let e={};function t(i){if(e[i]!==void 0)return e[i];let n=s.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&Rs("WebGLRenderer: "+i+" extension not supported."),n}}}function qy(s,e,t,i){let n={},r=new WeakMap,a=new FinalizationRegistry(m=>delete n[m]);function o(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(let p in m.attributes)e.remove(m.attributes[p]);m.removeEventListener("dispose",o),delete n[m.id],a.unregister(m);let x=r.get(m);x&&(e.remove(x),r.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(m,x){return n[x.id]!==void 0||(x.addEventListener("dispose",o),n[x.id]=new WeakRef(x),a.register(x,x.id,x),t.memory.geometries++),x}function h(m){let x=m.attributes;for(let p in x)e.update(x[p],s.ARRAY_BUFFER)}function u(m){let x=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let _=x!==null?x.array.length:p.array.length/3-1,M=p.count>=65535?_a:ya,v=new M(Math.ceil(_/3)*6,1),b=v.array;if(x!==null){let y=x.array;g=x.version;for(let E=0,L=0;E<_;E+=3){let R=y[E+0],D=y[E+1],N=y[E+2];b[L++]=R,b[L++]=D,b[L++]=D,b[L++]=N,b[L++]=N,b[L++]=R}}else{g=p.version;for(let y=0,E=0;y<_;y+=3){let L=y+0,R=y+1,D=y+2;b[E++]=L,b[E++]=R,b[E++]=R,b[E++]=D,b[E++]=D,b[E++]=L}}v.version=g;let S=r.get(m);S&&e.remove(S),r.set(m,v)}function d(m){let x=r.get(m);if(x){let p=m.index;p!==null&&x.version<p.version&&u(m)}else u(m);return r.get(m)}function f(){for(let m in n){let x=n[m].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function Yy(s,e,t){let i;function n(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){s.drawElements(i,d,r,u*a),t.update(d,i,1)}function c(u,d,f){f!==0&&(s.drawElementsInstanced(i,d,r,u*a,f),t.update(d,i,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,f);let x=0;for(let p=0;p<f;p++)x+=d[p];t.update(x,i,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Ky(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:ze("WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function $y(s,e,t){let i=new WeakMap,n=new ct;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let L=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",L)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],M=0;f===!0&&(M=1),m===!0&&(M=2),x===!0&&(M=3);let v=o.attributes.position.count*M,b=1;v>e.maxTextureSize&&(b=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let S=new Float32Array(v*b*4*u),y=new ma(S,v,b,u);y.type=Si,y.needsUpdate=!0;let E=M*4;for(let R=0;R<u;R++){let D=p[R],N=g[R],B=_[R],P=v*b*4*R;for(let z=0;z<D.count;z++){let H=z*E;f===!0&&(n.fromBufferAttribute(D,z),S[P+H+0]=n.x,S[P+H+1]=n.y,S[P+H+2]=n.z,S[P+H+3]=0),m===!0&&(n.fromBufferAttribute(N,z),S[P+H+4]=n.x,S[P+H+5]=n.y,S[P+H+6]=n.z,S[P+H+7]=0),x===!0&&(n.fromBufferAttribute(B,z),S[P+H+8]=n.x,S[P+H+9]=n.y,S[P+H+10]=n.z,S[P+H+11]=B.itemSize===4?n.w:1)}}d={count:u,texture:y,size:new De(v,b)},i.set(o,d),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Zy(s,e,t,i,n){let r=new WeakMap;function a(c){let h=n.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Jy={[Dh]:"LINEAR_TONE_MAPPING",[Oh]:"REINHARD_TONE_MAPPING",[Uh]:"CINEON_TONE_MAPPING",[ka]:"ACES_FILMIC_TONE_MAPPING",[zh]:"AGX_TONE_MAPPING",[kh]:"NEUTRAL_TONE_MAPPING",[Fh]:"CUSTOM_TONE_MAPPING"};function jy(s,e,t,i,n,r){let a=new bi(e,t,{type:s,depthBuffer:n,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new at;h.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ke([0,2,0,0,2,0],2));let u=new nl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new ke(h,u),f=new Us(-1,1,1,-1,0,1),m=null,x=null,p=!1,g,_=null,M=[],v=!1;this.setSize=function(b,S){a.setSize(b,S),o!==null&&o.setSize(b,S),l!==null&&l.setSize(b,S);for(let y=0;y<M.length;y++){let E=M[y];E.setSize&&E.setSize(b,S)}},this.setEffects=function(b){M=b,v=M.length>0&&M[0].isRenderPass===!0;let S=a.width,y=a.height;M.length>0&&o===null&&(o=new bi(S,y,{type:Qi,depthBuffer:!1,stencilBuffer:!1}),l=new bi(S,y,{type:Qi,depthBuffer:!1,stencilBuffer:!1}));let E=n===!0&&M.some(L=>L.needsDepthTexture===!0);E!==(a.depthTexture!==null)&&(E===!0&&c===null&&(c=new On(S,y),r===!0&&(c.format=Vn,c.type=Gs)),a.dispose(),a.depthTexture=E?c:null,a.resolveDepthBuffer=E,a.storeMultisampledDepthBuffer=E);for(let L=0;L<M.length;L++){let R=M[L];R.setSize&&R.setSize(S,y),E&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(b,S){if(p||b.toneMapping===dn&&M.length===0)return!1;if(_=S,S!==null){let y=S.width,E=S.height;(a.width!==y||a.height!==E)&&this.setSize(y,E)}return v===!1&&b.setRenderTarget(a),g=b.toneMapping,b.toneMapping=dn,!0},this.hasRenderPass=function(){return v},this.end=function(b,S){b.toneMapping=g,p=!0;let y=a,E=o;for(let L=0;L<M.length;L++){let R=M[L];R.enabled!==!1&&(R.render(b,E,y,S),R.needsSwap!==!1&&(y=E,E=E===o?l:o))}if(m!==b.outputColorSpace||x!==b.toneMapping){m=b.outputColorSpace,x=b.toneMapping,u.defines={},Ye.getTransfer(m)===rt&&(u.defines.SRGB_TRANSFER="");let L=Jy[x];L&&(u.defines[L]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=y.texture,b.setRenderTarget(_),b.render(d,f),_=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var Dp=new zt,Op=new On(1,1),Up=new wa(1),Fp=new ma,zp=new Qo,kp=new Ea,fp=[],pp=[],mp=new Float32Array(16),gp=new Float32Array(9),xp=new Float32Array(4);function Br(s,e,t){let i=s[0];if(i<=0||i>0)return s;let n=e*t,r=fp[n];if(r===void 0&&(r=new Float32Array(n),fp[n]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function kt(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function Bt(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function lc(s,e){let t=pp[e];t===void 0&&(t=new Int32Array(e),pp[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function Qy(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function e_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;s.uniform2fv(this.addr,e),Bt(t,e)}}function t_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;s.uniform3fv(this.addr,e),Bt(t,e)}}function i_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;s.uniform4fv(this.addr,e),Bt(t,e)}}function n_(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,i))return;xp.set(i),s.uniformMatrix2fv(this.addr,!1,xp),Bt(t,i)}}function s_(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,i))return;gp.set(i),s.uniformMatrix3fv(this.addr,!1,gp),Bt(t,i)}}function r_(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,i))return;mp.set(i),s.uniformMatrix4fv(this.addr,!1,mp),Bt(t,i)}}function a_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function o_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;s.uniform2iv(this.addr,e),Bt(t,e)}}function l_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;s.uniform3iv(this.addr,e),Bt(t,e)}}function c_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;s.uniform4iv(this.addr,e),Bt(t,e)}}function h_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function u_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;s.uniform2uiv(this.addr,e),Bt(t,e)}}function d_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;s.uniform3uiv(this.addr,e),Bt(t,e)}}function f_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;s.uniform4uiv(this.addr,e),Bt(t,e)}}function cc(s){return s.version===0&&(s.compareFunction=Zh,s.needsUpdate=!0),s}function p_(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?r=cc(Op):r=Dp,t.setTexture2D(e||r,n)}function m_(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||zp,n)}function g_(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=cc(Up):r=kp,t.setTextureCube(e||r,n)}function x_(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Fp,n)}function y_(s){switch(s){case 5126:return Qy;case 35664:return e_;case 35665:return t_;case 35666:return i_;case 35674:return n_;case 35675:return s_;case 35676:return r_;case 5124:case 35670:return a_;case 35667:case 35671:return o_;case 35668:case 35672:return l_;case 35669:case 35673:return c_;case 5125:return h_;case 36294:return u_;case 36295:return d_;case 36296:return f_;case 35678:case 36198:case 36298:case 36306:case 35682:return p_;case 35679:case 36299:case 36307:return m_;case 35680:case 36300:case 36308:case 36293:return g_;case 36289:case 36303:case 36311:case 36292:return x_}}function __(s,e){s.uniform1fv(this.addr,e)}function v_(s,e){let t=Br(e,this.size,2);s.uniform2fv(this.addr,t)}function M_(s,e){let t=Br(e,this.size,3);s.uniform3fv(this.addr,t)}function b_(s,e){let t=Br(e,this.size,4);s.uniform4fv(this.addr,t)}function S_(s,e){let t=Br(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function T_(s,e){let t=Br(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function E_(s,e){let t=Br(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function w_(s,e){s.uniform1iv(this.addr,e)}function A_(s,e){s.uniform2iv(this.addr,e)}function R_(s,e){s.uniform3iv(this.addr,e)}function C_(s,e){s.uniform4iv(this.addr,e)}function I_(s,e){s.uniform1uiv(this.addr,e)}function P_(s,e){s.uniform2uiv(this.addr,e)}function L_(s,e){s.uniform3uiv(this.addr,e)}function N_(s,e){s.uniform4uiv(this.addr,e)}function D_(s,e,t){let i=this.cache,n=e.length,r=lc(t,n);kt(i,r)||(s.uniform1iv(this.addr,r),Bt(i,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=cc(Op):a=Dp;for(let o=0;o!==n;++o)t.setTexture2D(e[o]||a,r[o])}function O_(s,e,t){let i=this.cache,n=e.length,r=lc(t,n);kt(i,r)||(s.uniform1iv(this.addr,r),Bt(i,r));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||zp,r[a])}function U_(s,e,t){let i=this.cache,n=e.length,r=lc(t,n);kt(i,r)||(s.uniform1iv(this.addr,r),Bt(i,r));let a;this.type===s.SAMPLER_CUBE_SHADOW?a=cc(Up):a=kp;for(let o=0;o!==n;++o)t.setTextureCube(e[o]||a,r[o])}function F_(s,e,t){let i=this.cache,n=e.length,r=lc(t,n);kt(i,r)||(s.uniform1iv(this.addr,r),Bt(i,r));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||Fp,r[a])}function z_(s){switch(s){case 5126:return __;case 35664:return v_;case 35665:return M_;case 35666:return b_;case 35674:return S_;case 35675:return T_;case 35676:return E_;case 5124:case 35670:return w_;case 35667:case 35671:return A_;case 35668:case 35672:return R_;case 35669:case 35673:return C_;case 5125:return I_;case 36294:return P_;case 36295:return L_;case 36296:return N_;case 35678:case 36198:case 36298:case 36306:case 35682:return D_;case 35679:case 36299:case 36307:return O_;case 35680:case 36300:case 36308:case 36293:return U_;case 36289:case 36303:case 36311:case 36292:return F_}}var cu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=y_(t.type)}},hu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=z_(t.type)}},uu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let r=0,a=n.length;r!==a;++r){let o=n[r];o.setValue(e,t[o.id],i)}}},ou=/(\w+)(\])?(\[|\.)?/g;function yp(s,e){s.seq.push(e),s.map[e.id]=e}function k_(s,e,t){let i=s.name,n=i.length;for(ou.lastIndex=0;;){let r=ou.exec(i),a=ou.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){yp(t,c===void 0?new cu(o,s,e):new hu(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new uu(o),yp(t,u)),t=u}}}var zr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);k_(o,l,this)}let n=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(a):r.push(a);n.length>0&&(this.seq=n.concat(r))}setValue(e,t,i,n){let r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,r=e.length;n!==r;++n){let a=e[n];a.id in t&&i.push(a)}return i}};function _p(s,e,t){let i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}var B_=37297,H_=0;function G_(s,e){let t=s.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=n;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var vp=new Be;function V_(s){Ye._getMatrix(vp,Ye.workingColorSpace,s);let e=`mat3( ${vp.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(s)){case fa:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return Ae("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Mp(s,e,t){let i=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+G_(s.getShaderSource(e),o)}else return r}function W_(s,e){let t=V_(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var X_={[Dh]:"Linear",[Oh]:"Reinhard",[Uh]:"Cineon",[ka]:"ACESFilmic",[zh]:"AgX",[kh]:"Neutral",[Fh]:"Custom"};function q_(s,e){let t=X_[e];return t===void 0?(Ae("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ac=new I;function Y_(){Ye.getLuminanceCoefficients(ac);let s=ac.x.toFixed(4),e=ac.y.toFixed(4),t=ac.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function K_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Za).join(`
`)}function $_(s){let e=[];for(let t in s){let i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Z_(s,e){let t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(e,n),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Za(s){return s!==""}function bp(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Sp(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var J_=/^[ \t]*#include +<([\w\d./]+)>/gm;function du(s){return s.replace(J_,j_)}function j_(s,e){let t=qe[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return du(t)}var Q_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tp(s){return s.replace(Q_,ev)}function ev(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Ep(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}var tv={[Fs]:"SHADOWMAP_TYPE_PCF",[Lr]:"SHADOWMAP_TYPE_VSM"};function iv(s){return tv[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var nv={[Dr]:"ENVMAP_MODE_REFRACTION"};function sv(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":nv[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var rv={[ml]:"ENVMAP_BLENDING_MULTIPLY",[Hf]:"ENVMAP_BLENDING_MIX",[Gf]:"ENVMAP_BLENDING_ADD"};function av(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":rv[s.combine]||"ENVMAP_BLENDING_NONE"}function ov(s,e,t,i){let n=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=iv(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=sv(t),u=av(t),d=K_(t),f=$_(r),m=n.createProgram(),x,p,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Za).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Za).join(`
`),p.length>0&&(p+=`
`)):(x=[Ep(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Za).join(`
`),p=[Ep(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==dn?"#define TONE_MAPPING":"",t.toneMapping!==dn?qe.tonemapping_pars_fragment:"",t.toneMapping!==dn?q_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,W_("linearToOutputTexel",t.outputColorSpace),Y_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Za).join(`
`)),a=du(a),a=bp(a,t),a=Sp(a,t),o=du(o),o=bp(o,t),o=Sp(o,t),a=Tp(a),o=Tp(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=g+x+a,M=g+p+o,v=_p(n,n.VERTEX_SHADER,_),b=_p(n,n.FRAGMENT_SHADER,M);n.attachShader(m,v),n.attachShader(m,b),t.index0AttributeName!==void 0?n.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&n.bindAttribLocation(m,0,"position"),n.linkProgram(m);function S(R){if(s.debug.checkShaderErrors){let D=n.getProgramInfoLog(m)||"",N=n.getShaderInfoLog(v)||"",B=n.getShaderInfoLog(b)||"",P=D.trim(),z=N.trim(),H=B.trim(),F=!0,Y=!0;if(n.getProgramParameter(m,n.LINK_STATUS)===!1)if(F=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,m,v,b);else{let G=Mp(n,v,"vertex"),q=Mp(n,b,"fragment");ze("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(m,n.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+P+`
`+G+`
`+q)}else P!==""?Ae("WebGLProgram: Program Info Log:",P):(z===""||H==="")&&(Y=!1);Y&&(R.diagnostics={runnable:F,programLog:P,vertexShader:{log:z,prefix:x},fragmentShader:{log:H,prefix:p}})}n.deleteShader(v),n.deleteShader(b),y=new zr(n,m),E=Z_(n,m)}let y;this.getUniforms=function(){return y===void 0&&S(this),y};let E;this.getAttributes=function(){return E===void 0&&S(this),E};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=n.getProgramParameter(m,B_)),L},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=H_++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=v,this.fragmentShader=b,this}var lv=0,fu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let n=this._getShaderCacheForMaterial(e);return n.has(t)===!1&&(n.add(t),t.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new pu(e),t.set(e,i)),i}},pu=class{constructor(e){this.id=lv++,this.code=e,this.usedTimes=0}};function cv(s){return s===cs||s===Wa||s===Xa}function hv(s,e,t,i,n,r){let a=new ga,o=new fu,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,E,L,R,D,N){let B=R.fog,P=D.geometry,z=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?R.environment:null,H=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,F=e.get(y.envMap||z,H),Y=d[y.type],G=i.precision;y.precision!==null&&(G=i.getMaxPrecision(y.precision),G!==y.precision&&Ae("WebGLProgram.getParameters:",y.precision,"not supported, using",G,"instead."));let q=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,te=q!==void 0?q.length:0,fe=0;P.morphAttributes.position!==void 0&&(fe=1),P.morphAttributes.normal!==void 0&&(fe=2),P.morphAttributes.color!==void 0&&(fe=3);let we,Z,oe,ve;if(Y){let me=mn[Y];we=me.vertexShader,Z=me.fragmentShader}else{we=y.vertexShader,Z=y.fragmentShader;let me=o.getVertexShaderStage(y),lt=o.getFragmentShaderStage(y);o.update(y,me,lt),oe=me.id,ve=lt.id}let Ce=s.getRenderTarget(),xe=s.state.buffers.depth.getReversed(),Ve=D.isInstancedMesh===!0,Lt=D.isBatchedMesh===!0,Fe=!!y.map,ot=!!y.matcap,ut=!!F,je=ut&&F.isPMREMTexture===!0,$t=!!y.aoMap,Ot=!!y.lightMap,fi=!!y.bumpMap&&y.wireframe===!1,St=!!y.normalMap,nn=!!y.displacementMap,Ht=!!y.emissiveMap,Ri=!!y.metalnessMap,Ci=!!y.roughnessMap,Ii=y.anisotropy>0,k=y.clearcoat>0,Pi=y.diffuseRoughness>0,_t=y.dispersion>0,vt=y.retroreflectivity>0,pe=y.iridescence>0,Ut=y.sheen>0,Oe=y.transmission>0,He=Ii&&!!y.anisotropyMap,C=k&&!!y.clearcoatMap,w=k&&!!y.clearcoatNormalMap,W=k&&!!y.clearcoatRoughnessMap,ie=Pi&&!!y.diffuseRoughnessMap,ee=pe&&!!y.iridescenceMap,re=pe&&!!y.iridescenceThicknessMap,ue=Ut&&!!y.sheenColorMap,J=Ut&&!!y.sheenRoughnessMap,j=!!y.specularMap,le=!!y.specularColorMap,O=!!y.specularIntensityMap,Q=Oe&&!!y.transmissionMap,$=Oe&&!!y.thicknessMap,ce=!!y.gradientMap,se=!!y.alphaMap,ae=y.alphaTest>0,Ie=!!y.alphaHash,Xe=!!y.extensions,ne=dn;y.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(ne=s.toneMapping);let Le=je?F.isCompressedCubeTexture?F.image[0].mipmaps:F.mipmaps:null,We={shaderID:Y,shaderType:y.type,shaderName:y.name,vertexShader:we,fragmentShader:Z,defines:y.defines,customVertexShaderID:oe,customFragmentShaderID:ve,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:G,batching:Lt,batchingColor:Lt&&D._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&D.instanceColor!==null,instancingMorph:Ve&&D.morphTexture!==null,outputColorSpace:Ce===null?s.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:Ye.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Fe,matcap:ot,envMap:ut,envMapMode:ut&&F.mapping,envMapPMREM:je,envMapMaxLod:je?Le.length-1:null,envMapSize:je?Le[0].width:null,aoMap:$t,lightMap:Ot,bumpMap:fi,normalMap:St,displacementMap:nn,emissiveMap:Ht,normalMapObjectSpace:St&&y.normalMapType===Yf,normalMapTangentSpace:St&&y.normalMapType===Ka,packedNormalMap:St&&y.normalMapType===Ka&&cv(y.normalMap.format),metalnessMap:Ri,roughnessMap:Ci,anisotropy:Ii,anisotropyMap:He,clearcoat:k,clearcoatMap:C,clearcoatNormalMap:w,clearcoatRoughnessMap:W,diffuseRoughness:Pi,diffuseRoughnessMap:ie,dispersion:_t,retroreflection:vt,iridescence:pe,iridescenceMap:ee,iridescenceThicknessMap:re,sheen:Ut,sheenColorMap:ue,sheenRoughnessMap:J,specularMap:j,specularColorMap:le,specularIntensityMap:O,transmission:Oe,transmissionMap:Q,thicknessMap:$,gradientMap:ce,opaque:y.transparent===!1&&y.blending===Nr&&y.alphaToCoverage===!1,alphaMap:se,alphaTest:ae,alphaHash:Ie,combine:y.combine,mapUv:Fe&&f(y.map.channel),aoMapUv:$t&&f(y.aoMap.channel),lightMapUv:Ot&&f(y.lightMap.channel),bumpMapUv:fi&&f(y.bumpMap.channel),normalMapUv:St&&f(y.normalMap.channel),displacementMapUv:nn&&f(y.displacementMap.channel),emissiveMapUv:Ht&&f(y.emissiveMap.channel),metalnessMapUv:Ri&&f(y.metalnessMap.channel),roughnessMapUv:Ci&&f(y.roughnessMap.channel),anisotropyMapUv:He&&f(y.anisotropyMap.channel),clearcoatMapUv:C&&f(y.clearcoatMap.channel),clearcoatNormalMapUv:w&&f(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&f(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ie&&f(y.diffuseRoughnessMap.channel),iridescenceMapUv:ee&&f(y.iridescenceMap.channel),iridescenceThicknessMapUv:re&&f(y.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&f(y.sheenColorMap.channel),sheenRoughnessMapUv:J&&f(y.sheenRoughnessMap.channel),specularMapUv:j&&f(y.specularMap.channel),specularColorMapUv:le&&f(y.specularColorMap.channel),specularIntensityMapUv:O&&f(y.specularIntensityMap.channel),transmissionMapUv:Q&&f(y.transmissionMap.channel),thicknessMapUv:$&&f(y.thicknessMap.channel),alphaMapUv:se&&f(y.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(St||Ii),vertexNormals:!!P.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!P.attributes.uv&&(Fe||se),fog:!!B,useFog:y.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||P.attributes.normal===void 0&&St===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xe,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:fe,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:N.filter(me=>me.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:ne,decodeVideoTexture:Fe&&y.map.isVideoTexture===!0&&Ye.getTransfer(y.map.colorSpace)===rt,decodeVideoTextureEmissive:Ht&&y.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(y.emissiveMap.colorSpace)===rt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===qt,flipSided:y.side===jt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Xe&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&y.extensions.multiDraw===!0||Lt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return We.vertexUv1s=l.has(1),We.vertexUv2s=l.has(2),We.vertexUv3s=l.has(3),l.clear(),We}function x(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let L in y.defines)E.push(L),E.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(p(E,y),g(E,y),E.push(s.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function p(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapPMREM),y.push(E.envMapMaxLod),y.push(E.envMapSize),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.diffuseRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.numSunLights),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numSunLightShadows),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.numLightProbeGrids),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function g(y,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.diffuseRoughness&&a.enable(25),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function _(y){let E=d[y.type],L;if(E){let R=mn[E];L=ap.clone(R.uniforms)}else L=y.uniforms;return L}function M(y,E){let L=h.get(E);return L!==void 0?++L.usedTimes:(L=new ov(s,E,y,n),c.push(L),h.set(E,L)),L}function v(y){if(--y.usedTimes===0){let E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function b(y){o.remove(y)}function S(){o.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:_,acquireProgram:M,releaseProgram:v,releaseShaderCache:b,programs:c,dispose:S}}function uv(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:r}}function dv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function wp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ap(){let s=[],e=0,t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,m,x,p,g){let _=s[e];return _===void 0?(_={id:d.id,object:d,geometry:f,material:m,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:p,group:g},s[e]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=m,_.materialVariant=a(d),_.groupOrder=x,_.renderOrder=d.renderOrder,_.z=p,_.group=g),e++,_}function l(d,f,m,x,p,g,_){_.reversedDepth===!0&&(p=-p);let M=o(d,f,m,x,p,g);m.transmission>0?i.push(M):m.transparent===!0?n.push(M):t.push(M)}function c(d,f,m,x,p,g){let _=o(d,f,m,x,p,g);m.transmission>0?i.unshift(_):m.transparent===!0?n.unshift(_):t.unshift(_)}function h(d,f){t.length>1&&t.sort(d||dv),i.length>1&&i.sort(f||wp),n.length>1&&n.sort(f||wp)}function u(){for(let d=e,f=s.length;d<f;d++){let m=s[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:l,unshift:c,finish:u,sort:h}}function fv(){let s=new WeakMap;function e(i,n){let r=s.get(i),a;return r===void 0?(a=new Ap,s.set(i,[a])):n>=r.length?(a=new Ap,r.push(a)):a=r[n],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function pv(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new be};break;case"SpotLight":t={position:new I,direction:new I,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new be,groundColor:new be};break;case"RectAreaLight":t={color:new be,position:new I,halfWidth:new I,halfHeight:new I};break}return s[e.id]=t,t}}}function mv(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var gv=0;function xv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function yv(s){let e=new pv,t=mv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let n=new I,r=new Pe,a=new Pe;function o(c){let h=0,u=0,d=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let f=0,m=0,x=0,p=0,g=0,_=0,M=0,v=0,b=0,S=0,y=0,E=0,L=0,R=0;c.sort(xv);for(let N=0,B=c.length;N<B;N++){let P=c[N],z=P.color,H=P.intensity,F=P.distance,Y=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===cs?Y=P.shadow.map.texture:Y=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=z.r*H,u+=z.g*H,d+=z.b*H;else if(P.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(P.sh.coefficients[G],H);R++}else if(P.isSunLight){let G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let q=P.shadow,te=t.get(P);te.shadowIntensity=q.intensity,te.shadowBias=q.bias,te.shadowNormalBias=q.normalBias,te.shadowRadius=q.radius,te.shadowMapSize.copy(q.mapSize).multiply(q.getFrameExtents()),i.sunShadow[m]=te,i.sunShadowMap[m]=Y;let fe=q.getViewportCount();for(let we=0;we<fe;we++)i.sunShadowMatrix[x+we]=q.getMatrix(we),i.sunShadowCascade[x+we]=q._cascadeData[we];x+=fe,m++}i.sun[f]=G,f++}else if(P.isDirectionalLight){let G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let q=P.shadow,te=t.get(P);te.shadowIntensity=q.intensity,te.shadowBias=q.bias,te.shadowNormalBias=q.normalBias,te.shadowRadius=q.radius,te.shadowMapSize=q.mapSize,i.directionalShadow[p]=te,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=P.shadow.matrix,b++}i.directional[p]=G,p++}else if(P.isSpotLight){let G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(z).multiplyScalar(H),G.distance=F,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,i.spot[_]=G;let q=P.shadow;if(P.map&&(i.spotLightMap[E]=P.map,E++,q.updateMatrices(P),P.castShadow&&L++),i.spotLightMatrix[_]=q.matrix,P.castShadow){let te=t.get(P);te.shadowIntensity=q.intensity,te.shadowBias=q.bias,te.shadowNormalBias=q.normalBias,te.shadowRadius=q.radius,te.shadowMapSize=q.mapSize,i.spotShadow[_]=te,i.spotShadowMap[_]=Y,y++}_++}else if(P.isRectAreaLight){let G=e.get(P);G.color.copy(z).multiplyScalar(H),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),i.rectArea[M]=G,M++}else if(P.isPointLight){let G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){let q=P.shadow,te=t.get(P);te.shadowIntensity=q.intensity,te.shadowBias=q.bias,te.shadowNormalBias=q.normalBias,te.shadowRadius=q.radius,te.shadowMapSize=q.mapSize,te.shadowCameraNear=q.camera.near,te.shadowCameraFar=q.camera.far,i.pointShadow[g]=te,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=P.shadow.matrix,S++}i.point[g]=G,g++}else if(P.isHemisphereLight){let G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(H),G.groundColor.copy(P.groundColor).multiplyScalar(H),i.hemi[v]=G,v++}}M>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let D=i.hash;(D.sunLength!==f||D.directionalLength!==p||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==M||D.hemiLength!==v||D.numSunShadows!==m||D.numDirectionalShadows!==b||D.numPointShadows!==S||D.numSpotShadows!==y||D.numSpotMaps!==E||D.numLightProbes!==R)&&(i.sun.length=f,i.directional.length=p,i.spot.length=_,i.rectArea.length=M,i.point.length=g,i.hemi.length=v,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=y,i.spotShadowMap.length=y,i.spotLightMatrix.length=y+E-L,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=R,D.sunLength=f,D.directionalLength=p,D.pointLength=g,D.spotLength=_,D.rectAreaLength=M,D.hemiLength=v,D.numSunShadows=m,D.numDirectionalShadows=b,D.numPointShadows=S,D.numSpotShadows=y,D.numSpotMaps=E,D.numLightProbes=R,i.version=gv++)}function l(c,h){let u=0,d=0,f=0,m=0,x=0,p=0,g=h.matrixWorldInverse;for(let _=0,M=c.length;_<M;_++){let v=c[_];if(v.isSunLight){let b=i.sun[u];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(g),u++}else if(v.isDirectionalLight){let b=i.directional[d];b.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(g),d++}else if(v.isSpotLight){let b=i.spot[m];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(g),m++}else if(v.isRectAreaLight){let b=i.rectArea[x];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),a.identity(),r.copy(v.matrixWorld),r.premultiply(g),a.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){let b=i.point[f];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){let b=i.hemi[p];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(g),p++}}}return{setup:o,setupView:l,state:i}}function Rp(s){let e=new yv(s),t=[],i=[],n=[];function r(u){h.camera=u,t.length=0,i.length=0,n.length=0}function a(u){u.isLightProbeGrid?n.push(u):t.push(u)}function o(u){i.push(u)}function l(){e.setup(t),n.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function _v(s){let e=new WeakMap;function t(n,r=0){let a=e.get(n),o;return a===void 0?(o=new Rp(s),e.set(n,[o])):r>=a.length?(o=new Rp(s),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var vv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mv=`uniform sampler2D shadow_pass;
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
}`,bv=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],Sv=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Cp=new Pe,$a=new I,lu=new I;function Tv(s,e,t){let i=new on,n=new De,r=new De,a=new ct,o=new sl,l=new rl,c={},h=t.maxTextureSize,u={[Oi]:jt,[jt]:Oi,[qt]:qt},d=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:vv,fragmentShader:Mv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new at;m.setAttribute("position",new nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ke(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fs;let g=this.type;this.render=function(S,y,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;this.type===bf&&(Ae("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Fs);let L=s.getRenderTarget(),R=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),N=s.state;N.setBlending(zs),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let B=g!==this.type;B&&y.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(z=>z.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,z=S.length;P<z;P++){let H=S[P],F=H.shadow;if(F===void 0){Ae("WebGLShadowMap:",H,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;n.copy(F.mapSize);let Y=F.getFrameExtents();n.multiply(Y),r.copy(F.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/Y.x),n.x=r.x*Y.x,F.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/Y.y),n.y=r.y*Y.y,F.mapSize.y=r.y));let G=s.state.buffers.depth.getReversed();if(F.camera._reversedDepth=G,F.map===null||B===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Lr){if(H.isPointLight){Ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new bi(n.x,n.y,{format:cs,type:Qi,minFilter:Ft,magFilter:Ft,generateMipmaps:!1}),F.map.texture.name=H.name+".shadowMap",F.map.depthTexture=new On(n.x,n.y,Si),F.map.depthTexture.name=H.name+".shadowMapDepth",F.map.depthTexture.format=In,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=It,F.map.depthTexture.magFilter=It}else H.isPointLight?(F.map=new Ja(n.x),F.map.depthTexture=new wa(n.x,ji)):(F.map=new bi(n.x,n.y),F.map.depthTexture=new On(n.x,n.y,ji)),F.map.depthTexture.name=H.name+".shadowMap",F.map.depthTexture.format=In,this.type===Fs?(F.map.depthTexture.compareFunction=G?$h:Kh,F.map.depthTexture.minFilter=Ft,F.map.depthTexture.magFilter=Ft):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=It,F.map.depthTexture.magFilter=It);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==n.x||F.map.height!==n.y)&&F.map.setSize(n.x,n.y);let q=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();H.isPointLight!==!0&&F.updateMatrices(H,E);let te=(F.camera.layers.mask&4294967294)!==0?F.camera.layers:E.layers;for(let fe=0;fe<q;fe++){let we=F.getCamera(fe);if(H.isPointLight){let Z=F.camera,oe=F.matrix,ve=H.distance||Z.far;ve!==Z.far&&(Z.far=ve,Z.updateProjectionMatrix()),$a.setFromMatrixPosition(H.matrixWorld),Z.position.copy($a),lu.copy(Z.position),lu.add(bv[fe]),Z.up.copy(Sv[fe]),Z.lookAt(lu),Z.updateMatrixWorld(),oe.makeTranslation(-$a.x,-$a.y,-$a.z),Cp.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Cp,Z.coordinateSystem,Z.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)s.setRenderTarget(F.map,fe),s.clear();else{fe===0&&(s.setRenderTarget(F.map),s.clear());let Z=F.getViewport(fe);a.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),N.viewport(a)}i=F.getFrustum(fe),v(y,E,we,H,te,this.type)}F.isPointLightShadow!==!0&&this.type===Lr&&_(F,E),F.needsUpdate=!1}g=this.type,p.needsUpdate=!1,s.setRenderTarget(L,R,D)};function _(S,y){let E=e.update(x);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new bi(n.x,n.y,{format:cs,type:Qi}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),d.uniforms.shadow_pass.value=S.map.depthTexture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(y,null,E,d,x,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(y,null,E,f,x,null)}function M(S,y,E,L){let R=null,D=E.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(D!==void 0)R=D;else if(R=E.isPointLight===!0?l:o,s.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let N=R.uuid,B=y.uuid,P=c[N];P===void 0&&(P={},c[N]=P);let z=P[B];z===void 0&&(z=R.clone(),P[B]=z,y.addEventListener("dispose",b)),R=z}if(R.visible=y.visible,R.wireframe=y.wireframe,L===Lr?R.side=y.shadowSide!==null?y.shadowSide:y.side:R.side=y.shadowSide!==null?y.shadowSide:u[y.side],R.alphaMap=y.alphaMap,R.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,R.map=y.map,R.clipShadows=y.clipShadows,R.clippingPlanes=y.clippingPlanes,R.clipIntersection=y.clipIntersection,R.displacementMap=y.displacementMap,R.displacementScale=y.displacementScale,R.displacementBias=y.displacementBias,R.wireframeLinewidth=y.wireframeLinewidth,R.linewidth=y.linewidth,E.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let N=s.properties.get(R);N.light=E}return R}function v(S,y,E,L,R,D){if(S.visible===!1)return;if(S.layers.test(R)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&D===Lr)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,S.matrixWorld);let P=e.update(S),z=S.material;if(Array.isArray(z)){let H=P.groups;for(let F=0,Y=H.length;F<Y;F++){let G=H[F],q=z[G.materialIndex];if(q&&q.visible){let te=M(S,q,L,D);S.onBeforeShadow(s,S,y,E,P,te,G),s.renderBufferDirect(E,null,P,te,S,G),S.onAfterShadow(s,S,y,E,P,te,G)}}}else if(z.visible){let H=M(S,z,L,D);S.onBeforeShadow(s,S,y,E,P,H,null),s.renderBufferDirect(E,null,P,H,S,null),S.onAfterShadow(s,S,y,E,P,H,null)}}let B=S.children;for(let P=0,z=B.length;P<z;P++)v(B[P],y,E,L,R,D)}function b(S){S.target.removeEventListener("dispose",b);for(let E in c){let L=c[E],R=S.target.uuid;R in L&&(L[R].dispose(),delete L[R])}}}function Ev(s,e){function t(){let O=!1,Q=new ct,$=null,ce=new ct(0,0,0,0);return{setMask:function(se){$!==se&&!O&&(s.colorMask(se,se,se,se),$=se)},setLocked:function(se){O=se},setClear:function(se,ae,Ie,Xe,ne){ne===!0&&(se*=Xe,ae*=Xe,Ie*=Xe),Q.set(se,ae,Ie,Xe),ce.equals(Q)===!1&&(s.clearColor(se,ae,Ie,Xe),ce.copy(Q))},reset:function(){O=!1,$=null,ce.set(-1,0,0,0)}}}function i(){let O=!1,Q=!1,$=null,ce=null,se=null;return{setReversed:function(ae){if(Q!==ae){let Ie=e.get("EXT_clip_control");ae?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),Q=ae;let Xe=se;se=null,this.setClear(Xe)}},getReversed:function(){return Q},setTest:function(ae){ae?xe(s.DEPTH_TEST):Ve(s.DEPTH_TEST)},setMask:function(ae){$!==ae&&!O&&(s.depthMask(ae),$=ae)},setFunc:function(ae){if(Q&&(ae=np[ae]),ce!==ae){switch(ae){case Wo:s.depthFunc(s.NEVER);break;case Xo:s.depthFunc(s.ALWAYS);break;case qo:s.depthFunc(s.LESS);break;case mr:s.depthFunc(s.LEQUAL);break;case Yo:s.depthFunc(s.EQUAL);break;case Ko:s.depthFunc(s.GEQUAL);break;case $o:s.depthFunc(s.GREATER);break;case Zo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ce=ae}},setLocked:function(ae){O=ae},setClear:function(ae){se!==ae&&(se=ae,Q&&(ae=1-ae),s.clearDepth(ae))},reset:function(){O=!1,$=null,ce=null,se=null,Q=!1}}}function n(){let O=!1,Q=null,$=null,ce=null,se=null,ae=null,Ie=null,Xe=null,ne=null;return{setTest:function(Le){O||(Le?xe(s.STENCIL_TEST):Ve(s.STENCIL_TEST))},setMask:function(Le){Q!==Le&&!O&&(s.stencilMask(Le),Q=Le)},setFunc:function(Le,We,me){($!==Le||ce!==We||se!==me)&&(s.stencilFunc(Le,We,me),$=Le,ce=We,se=me)},setOp:function(Le,We,me){(ae!==Le||Ie!==We||Xe!==me)&&(s.stencilOp(Le,We,me),ae=Le,Ie=We,Xe=me)},setLocked:function(Le){O=Le},setClear:function(Le){ne!==Le&&(s.clearStencil(Le),ne=Le)},reset:function(){O=!1,Q=null,$=null,ce=null,se=null,ae=null,Ie=null,Xe=null,ne=null}}}let r=new t,a=new i,o=new n,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,m=[],x=null,p=!1,g=null,_=null,M=null,v=null,b=null,S=null,y=null,E=new be(0,0,0),L=0,R=!1,D=null,N=null,B=null,P=null,z=null,H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,Y=0,G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(G)[1]),F=Y>=1):G.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),F=Y>=2);let q=null,te={},fe=s.getParameter(s.SCISSOR_BOX),we=s.getParameter(s.VIEWPORT),Z=new ct().fromArray(fe),oe=new ct().fromArray(we);function ve(O,Q,$,ce){let se=new Uint8Array(4),ae=s.createTexture();s.bindTexture(O,ae),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ie=0;Ie<$;Ie++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(Q,0,s.RGBA,1,1,ce,0,s.RGBA,s.UNSIGNED_BYTE,se):s.texImage2D(Q+Ie,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,se);return ae}let Ce={};Ce[s.TEXTURE_2D]=ve(s.TEXTURE_2D,s.TEXTURE_2D,1),Ce[s.TEXTURE_CUBE_MAP]=ve(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ce[s.TEXTURE_2D_ARRAY]=ve(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ce[s.TEXTURE_3D]=ve(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),xe(s.DEPTH_TEST),a.setFunc(mr),fi(!1),St(Ch),xe(s.CULL_FACE),$t(zs);function xe(O){h[O]!==!0&&(s.enable(O),h[O]=!0)}function Ve(O){h[O]!==!1&&(s.disable(O),h[O]=!1)}function Lt(O,Q){return d[O]!==Q?(s.bindFramebuffer(O,Q),d[O]=Q,O===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=Q),O===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=Q),!0):!1}function Fe(O,Q){let $=m,ce=!1;if(O){$=f.get(Q),$===void 0&&($=[],f.set(Q,$));let se=O.textures;if($.length!==se.length||$[0]!==s.COLOR_ATTACHMENT0){for(let ae=0,Ie=se.length;ae<Ie;ae++)$[ae]=s.COLOR_ATTACHMENT0+ae;$.length=se.length,ce=!0}}else $[0]!==s.BACK&&($[0]=s.BACK,ce=!0);ce&&s.drawBuffers($)}function ot(O){return x!==O?(s.useProgram(O),x=O,!0):!1}let ut={[ks]:s.FUNC_ADD,[Tf]:s.FUNC_SUBTRACT,[Ef]:s.FUNC_REVERSE_SUBTRACT};ut[wf]=s.MIN,ut[Af]=s.MAX;let je={[Rf]:s.ZERO,[Cf]:s.ONE,[If]:s.SRC_COLOR,[Lh]:s.SRC_ALPHA,[Uf]:s.SRC_ALPHA_SATURATE,[Df]:s.DST_COLOR,[Lf]:s.DST_ALPHA,[Pf]:s.ONE_MINUS_SRC_COLOR,[Nh]:s.ONE_MINUS_SRC_ALPHA,[Of]:s.ONE_MINUS_DST_COLOR,[Nf]:s.ONE_MINUS_DST_ALPHA,[Ff]:s.CONSTANT_COLOR,[zf]:s.ONE_MINUS_CONSTANT_COLOR,[kf]:s.CONSTANT_ALPHA,[Bf]:s.ONE_MINUS_CONSTANT_ALPHA};function $t(O,Q,$,ce,se,ae,Ie,Xe,ne,Le){if(O===zs){p===!0&&(Ve(s.BLEND),p=!1);return}if(p===!1&&(xe(s.BLEND),p=!0),O!==Sf){if(O!==g||Le!==R){if((_!==ks||b!==ks)&&(s.blendEquation(s.FUNC_ADD),_=ks,b=ks),Le)switch(O){case Nr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ji:s.blendFunc(s.ONE,s.ONE);break;case Ih:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ph:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ze("WebGLState: Invalid blending: ",O);break}else switch(O){case Nr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ji:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Ih:ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ph:ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ze("WebGLState: Invalid blending: ",O);break}M=null,v=null,S=null,y=null,E.set(0,0,0),L=0,g=O,R=Le}return}se=se||Q,ae=ae||$,Ie=Ie||ce,(Q!==_||se!==b)&&(s.blendEquationSeparate(ut[Q],ut[se]),_=Q,b=se),($!==M||ce!==v||ae!==S||Ie!==y)&&(s.blendFuncSeparate(je[$],je[ce],je[ae],je[Ie]),M=$,v=ce,S=ae,y=Ie),(Xe.equals(E)===!1||ne!==L)&&(s.blendColor(Xe.r,Xe.g,Xe.b,ne),E.copy(Xe),L=ne),g=O,R=!1}function Ot(O,Q){O.side===qt?Ve(s.CULL_FACE):xe(s.CULL_FACE);let $=O.side===jt;Q&&($=!$),fi($),O.blending===Nr&&O.transparent===!1?$t(zs):$t(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let ce=O.stencilWrite;o.setTest(ce),ce&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ht(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?xe(s.SAMPLE_ALPHA_TO_COVERAGE):Ve(s.SAMPLE_ALPHA_TO_COVERAGE)}function fi(O){D!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),D=O)}function St(O){O!==vf?(xe(s.CULL_FACE),O!==N&&(O===Ch?s.cullFace(s.BACK):O===Mf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ve(s.CULL_FACE),N=O}function nn(O){O!==B&&(F&&s.lineWidth(O),B=O)}function Ht(O,Q,$){O?(xe(s.POLYGON_OFFSET_FILL),(P!==Q||z!==$)&&(P=Q,z=$,a.getReversed()&&(Q=-Q,$=-$),s.polygonOffset(Q,$))):Ve(s.POLYGON_OFFSET_FILL)}function Ri(O){O?xe(s.SCISSOR_TEST):Ve(s.SCISSOR_TEST)}function Ci(O){O===void 0&&(O=s.TEXTURE0+H-1),q!==O&&(s.activeTexture(O),q=O)}function Ii(O,Q,$){$===void 0&&(q===null?$=s.TEXTURE0+H-1:$=q);let ce=te[$];ce===void 0&&(ce={type:void 0,texture:void 0},te[$]=ce),(ce.type!==O||ce.texture!==Q)&&(q!==$&&(s.activeTexture($),q=$),s.bindTexture(O,Q||Ce[O]),ce.type=O,ce.texture=Q)}function k(){let O=te[q];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Pi(){try{s.compressedTexImage2D(...arguments)}catch(O){ze("WebGLState:",O)}}function _t(){try{s.compressedTexImage3D(...arguments)}catch(O){ze("WebGLState:",O)}}function vt(){try{s.texSubImage2D(...arguments)}catch(O){ze("WebGLState:",O)}}function pe(){try{s.texSubImage3D(...arguments)}catch(O){ze("WebGLState:",O)}}function Ut(){try{s.compressedTexSubImage2D(...arguments)}catch(O){ze("WebGLState:",O)}}function Oe(){try{s.compressedTexSubImage3D(...arguments)}catch(O){ze("WebGLState:",O)}}function He(){try{s.texStorage2D(...arguments)}catch(O){ze("WebGLState:",O)}}function C(){try{s.texStorage3D(...arguments)}catch(O){ze("WebGLState:",O)}}function w(){try{s.texImage2D(...arguments)}catch(O){ze("WebGLState:",O)}}function W(){try{s.texImage3D(...arguments)}catch(O){ze("WebGLState:",O)}}function ie(O){return u[O]!==void 0?u[O]:s.getParameter(O)}function ee(O,Q){u[O]!==Q&&(s.pixelStorei(O,Q),u[O]=Q)}function re(O){Z.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),Z.copy(O))}function ue(O){oe.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),oe.copy(O))}function J(O,Q){let $=c.get(Q);$===void 0&&($=new WeakMap,c.set(Q,$));let ce=$.get(O);ce===void 0&&(ce=s.getUniformBlockIndex(Q,O.name),s.uniformBlockBinding(Q,ce,ce),$.set(O,ce))}function j(O,Q,$){let se=c.get(Q).get(O);l[se]!==$&&(s.bindBufferBase(s.UNIFORM_BUFFER,se,$),l[se]=$)}function le(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},q=null,te={},d={},l={},f=new WeakMap,m=[],x=null,p=!1,g=null,_=null,M=null,v=null,b=null,S=null,y=null,E=new be(0,0,0),L=0,R=!1,D=null,N=null,B=null,P=null,z=null,Z.set(0,0,s.canvas.width,s.canvas.height),oe.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:xe,disable:Ve,bindFramebuffer:Lt,drawBuffers:Fe,useProgram:ot,setBlending:$t,setMaterial:Ot,setFlipSided:fi,setCullFace:St,setLineWidth:nn,setPolygonOffset:Ht,setScissorTest:Ri,activeTexture:Ci,bindTexture:Ii,unbindTexture:k,compressedTexImage2D:Pi,compressedTexImage3D:_t,texImage2D:w,texImage3D:W,pixelStorei:ee,getParameter:ie,updateUBOMapping:J,uniformBlockBinding:j,texStorage2D:He,texStorage3D:C,texSubImage2D:vt,texSubImage3D:pe,compressedTexSubImage2D:Ut,compressedTexSubImage3D:Oe,scissor:re,viewport:ue,reset:le}}function wv(s,e,t,i,n,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new De,h=new WeakMap,u=new Set,d,f=new WeakMap,m=new Set,x=new FinalizationRegistry(C=>m.delete(C)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,w){return p?new OffscreenCanvas(C,w):yr("canvas")}function _(C,w,W){let ie=1,ee=He(C);if((ee.width>W||ee.height>W)&&(ie=W/Math.max(ee.width,ee.height)),ie<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let re=Math.floor(ie*ee.width),ue=Math.floor(ie*ee.height);d===void 0&&(d=g(re,ue));let J=w?g(re,ue):d;return J.width=re,J.height=ue,J.getContext("2d").drawImage(C,0,0,re,ue),Ae("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+re+"x"+ue+")."),J}else return"data"in C&&Ae("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),C;return C}function M(C){return C.generateMipmaps}function v(C){s.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(C,w,W,ie,ee,re=!1){if(C!==null){if(s[C]!==void 0)return s[C];Ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ue;ie&&(ue=e.get("EXT_texture_norm16"),ue||Ae("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=w;if(w===s.RED&&(W===s.FLOAT&&(J=s.R32F),W===s.HALF_FLOAT&&(J=s.R16F),W===s.UNSIGNED_BYTE&&(J=s.R8),W===s.UNSIGNED_SHORT&&ue&&(J=ue.R16_EXT),W===s.SHORT&&ue&&(J=ue.R16_SNORM_EXT)),w===s.RED_INTEGER&&(W===s.UNSIGNED_BYTE&&(J=s.R8UI),W===s.UNSIGNED_SHORT&&(J=s.R16UI),W===s.UNSIGNED_INT&&(J=s.R32UI),W===s.BYTE&&(J=s.R8I),W===s.SHORT&&(J=s.R16I),W===s.INT&&(J=s.R32I)),w===s.RG&&(W===s.FLOAT&&(J=s.RG32F),W===s.HALF_FLOAT&&(J=s.RG16F),W===s.UNSIGNED_BYTE&&(J=s.RG8),W===s.UNSIGNED_SHORT&&ue&&(J=ue.RG16_EXT),W===s.SHORT&&ue&&(J=ue.RG16_SNORM_EXT)),w===s.RG_INTEGER&&(W===s.UNSIGNED_BYTE&&(J=s.RG8UI),W===s.UNSIGNED_SHORT&&(J=s.RG16UI),W===s.UNSIGNED_INT&&(J=s.RG32UI),W===s.BYTE&&(J=s.RG8I),W===s.SHORT&&(J=s.RG16I),W===s.INT&&(J=s.RG32I)),w===s.RGB_INTEGER&&(W===s.UNSIGNED_BYTE&&(J=s.RGB8UI),W===s.UNSIGNED_SHORT&&(J=s.RGB16UI),W===s.UNSIGNED_INT&&(J=s.RGB32UI),W===s.BYTE&&(J=s.RGB8I),W===s.SHORT&&(J=s.RGB16I),W===s.INT&&(J=s.RGB32I)),w===s.RGBA_INTEGER&&(W===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),W===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),W===s.UNSIGNED_INT&&(J=s.RGBA32UI),W===s.BYTE&&(J=s.RGBA8I),W===s.SHORT&&(J=s.RGBA16I),W===s.INT&&(J=s.RGBA32I)),w===s.RGB&&(W===s.UNSIGNED_SHORT&&ue&&(J=ue.RGB16_EXT),W===s.SHORT&&ue&&(J=ue.RGB16_SNORM_EXT),W===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),W===s.UNSIGNED_INT_10F_11F_11F_REV&&(J=s.R11F_G11F_B10F)),w===s.RGBA){let j=re?fa:Ye.getTransfer(ee);W===s.FLOAT&&(J=s.RGBA32F),W===s.HALF_FLOAT&&(J=s.RGBA16F),W===s.UNSIGNED_BYTE&&(J=j===rt?s.SRGB8_ALPHA8:s.RGBA8),W===s.UNSIGNED_SHORT&&ue&&(J=ue.RGBA16_EXT),W===s.SHORT&&ue&&(J=ue.RGBA16_SNORM_EXT),W===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),W===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function y(C,w){let W;return C?w===null||w===ji||w===Gs?W=s.DEPTH24_STENCIL8:w===Si?W=s.DEPTH32F_STENCIL8:w===Ur&&(W=s.DEPTH24_STENCIL8,Ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ji||w===Gs?W=s.DEPTH_COMPONENT24:w===Si?W=s.DEPTH_COMPONENT32F:w===Ur&&(W=s.DEPTH_COMPONENT16),W}function E(C,w){return M(C)===!0||C.isFramebufferTexture&&C.minFilter!==It&&C.minFilter!==Ft?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function L(C){let w=new WeakRef(C);i.get(C).__ref=w,m.add(w),x.register(C,w,w)}function R(C){let w=i.get(C).__ref;w!==void 0&&(m.delete(w),x.unregister(w))}function D(C){B(C.target)}function N(C){P(C.target)}function B(C){C.removeEventListener("dispose",D),R(C),H(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&u.delete(C)}function P(C){C.removeEventListener("dispose",N),R(C),Y(C)}function z(){for(let C of m){let w=C.deref();w!==void 0&&(w.isRenderTarget===!0?P(w):B(w))}m.clear(),u.clear()}function H(C){let w=i.get(C);if(w.__webglInit===void 0)return;let W=C.source,ie=f.get(W);if(ie){let ee=ie[w.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&F(C),Object.keys(ie).length===0&&f.delete(W)}i.remove(C)}function F(C){let w=i.get(C);s.deleteTexture(w.__webglTexture);let W=C.source,ie=f.get(W);delete ie[w.__cacheKey],a.memory.textures--}function Y(C){let w=i.get(C);w.__depthDisposeCallback&&w.__depthDisposeCallback();let W=C.depthTexture;if(W&&W.renderTarget===C&&B(W),C.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(w.__webglFramebuffer[ee]))for(let re=0;re<w.__webglFramebuffer[ee].length;re++)s.deleteFramebuffer(w.__webglFramebuffer[ee][re]);else s.deleteFramebuffer(w.__webglFramebuffer[ee]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[ee])}else{if(Array.isArray(w.__webglFramebuffer))for(let ee=0;ee<w.__webglFramebuffer.length;ee++)s.deleteFramebuffer(w.__webglFramebuffer[ee]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ee=0;ee<w.__webglColorRenderbuffer.length;ee++)w.__webglColorRenderbuffer[ee]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[ee]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let ie=C.textures;for(let ee=0,re=ie.length;ee<re;ee++){let ue=i.get(ie[ee]);ue.__webglTexture&&(s.deleteTexture(ue.__webglTexture),a.memory.textures--),i.remove(ie[ee])}i.remove(C)}let G=0;function q(){G=0}function te(){return G}function fe(C){G=C}function we(){let C=G;return C>=n.maxTextures&&Ae("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+n.maxTextures),G+=1,C}function Z(C){let w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.mipmapsAutoUpdate),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function oe(C,w){let W=i.get(C);if(C.isVideoTexture&&Ut(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&W.__version!==C.version){let ie=C.image;if(ie===null)Ae("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)Ae("WebGLRenderer: Texture marked for update but image is incomplete");else{Ot(W,C,w);return}}else C.isExternalTexture&&(W.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,W.__webglTexture,s.TEXTURE0+w)}function ve(C,w){let W=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){Ot(W,C,w);return}else C.isExternalTexture&&(W.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,W.__webglTexture,s.TEXTURE0+w)}function Ce(C,w){let W=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){Ot(W,C,w);return}t.bindTexture(s.TEXTURE_3D,W.__webglTexture,s.TEXTURE0+w)}function xe(C,w){let W=i.get(C);if(C.version>0&&W.__version!==C.version){fi(W,C,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture,s.TEXTURE0+w)}let Ve={[an]:s.REPEAT,[Ni]:s.CLAMP_TO_EDGE,[gr]:s.MIRRORED_REPEAT},Lt={[It]:s.NEAREST,[yl]:s.NEAREST_MIPMAP_NEAREST,[Hs]:s.NEAREST_MIPMAP_LINEAR,[Ft]:s.LINEAR,[Or]:s.LINEAR_MIPMAP_NEAREST,[Ui]:s.LINEAR_MIPMAP_LINEAR},Fe={[$f]:s.NEVER,[Zh]:s.ALWAYS,[Zf]:s.LESS,[Kh]:s.LEQUAL,[Jf]:s.EQUAL,[$h]:s.GEQUAL,[jf]:s.GREATER,[Qf]:s.NOTEQUAL};function ot(C,w){if(w.type===Si&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Ft||w.magFilter===Or||w.magFilter===Hs||w.magFilter===Ui||w.minFilter===Ft||w.minFilter===Or||w.minFilter===Hs||w.minFilter===Ui)&&Ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,Ve[w.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,Ve[w.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,Ve[w.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,Lt[w.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,Lt[w.minFilter]),w.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,Fe[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===It||w.minFilter!==Hs&&w.minFilter!==Ui||w.type===Si&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,n.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function ut(C,w){let W=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",D),L(w));let ie=w.source,ee=f.get(ie);ee===void 0&&(ee={},f.set(ie,ee));let re=Z(w);if(re!==C.__cacheKey){ee[re]===void 0&&(ee[re]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,W=!0),ee[re].usedTimes++;let ue=ee[C.__cacheKey];ue!==void 0&&(ee[C.__cacheKey].usedTimes--,ue.usedTimes===0&&F(w)),C.__cacheKey=re,C.__webglTexture=ee[re].texture}return W}function je(C,w,W){return Math.floor(Math.floor(C/W)/w)}function $t(C,w,W,ie){let re=C.updateRanges;if(re.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,W,ie,w.data);else{re.sort((O,Q)=>O.start-Q.start);let ue=0;for(let O=1;O<re.length;O++){let Q=re[ue],$=re[O],ce=Q.start+Q.count,se=je($.start,w.width,4),ae=je(Q.start,w.width,4);$.start<=ce+1&&se===ae&&je($.start+$.count-1,w.width,4)===se?Q.count=Math.max(Q.count,$.start+$.count-Q.start):(++ue,re[ue]=$)}re.length=ue+1;let J=t.getParameter(s.UNPACK_ROW_LENGTH),j=t.getParameter(s.UNPACK_SKIP_PIXELS),le=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let O=0,Q=re.length;O<Q;O++){let $=re[O],ce=Math.floor($.start/4),se=Math.ceil($.count/4),ae=ce%w.width,Ie=Math.floor(ce/w.width),Xe=se,ne=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ie),t.texSubImage2D(s.TEXTURE_2D,0,ae,Ie,Xe,ne,W,ie,w.data)}C.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,J),t.pixelStorei(s.UNPACK_SKIP_PIXELS,j),t.pixelStorei(s.UNPACK_SKIP_ROWS,le)}}function Ot(C,w,W){let ie=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ie=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ie=s.TEXTURE_3D);let ee=ut(C,w),re=w.source;t.bindTexture(ie,C.__webglTexture,s.TEXTURE0+W);let ue=i.get(re);if(re.version!==ue.__version||ee===!0){if(t.activeTexture(s.TEXTURE0+W),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let ne=Ye.getPrimaries(Ye.workingColorSpace),Le=w.colorSpace===Wn?null:Ye.getPrimaries(w.colorSpace),We=w.colorSpace===Wn||ne===Le?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,We)}t.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment);let j=_(w.image,!1,n.maxTextureSize);j=Oe(w,j);let le=r.convert(w.format,w.colorSpace),O=r.convert(w.type),Q=S(w.internalFormat,le,O,w.normalized,w.colorSpace,w.isVideoTexture);ot(ie,w);let $,ce=w.mipmaps,se=w.isVideoTexture!==!0,ae=ue.__version===void 0||ee===!0,Ie=re.dataReady,Xe=E(w,j);if(w.isDepthTexture)Q=y(w.format===Vn,w.type),ae&&(se?t.texStorage2D(s.TEXTURE_2D,1,Q,j.width,j.height):t.texImage2D(s.TEXTURE_2D,0,Q,j.width,j.height,0,le,O,null));else if(w.isDataTexture)if(ce.length>0){se&&ae&&t.texStorage2D(s.TEXTURE_2D,Xe,Q,ce[0].width,ce[0].height);for(let ne=0,Le=ce.length;ne<Le;ne++)$=ce[ne],se?Ie&&t.texSubImage2D(s.TEXTURE_2D,ne,0,0,$.width,$.height,le,O,$.data):t.texImage2D(s.TEXTURE_2D,ne,Q,$.width,$.height,0,le,O,$.data);w.generateMipmaps=!1}else se?(ae&&t.texStorage2D(s.TEXTURE_2D,Xe,Q,j.width,j.height),Ie&&$t(w,j,le,O)):t.texImage2D(s.TEXTURE_2D,0,Q,j.width,j.height,0,le,O,j.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){se&&ae&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Xe,Q,ce[0].width,ce[0].height,j.depth);for(let ne=0,Le=ce.length;ne<Le;ne++)if($=ce[ne],w.format!==Fi)if(le!==null)if(se){if(Ie)if(w.layerUpdates.size>0){let We=au($.width,$.height,w.format,w.type);for(let me of w.layerUpdates){let lt=$.data.subarray(me*We/$.data.BYTES_PER_ELEMENT,(me+1)*We/$.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,me,$.width,$.height,1,le,lt)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,$.width,$.height,j.depth,le,$.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ne,Q,$.width,$.height,j.depth,0,$.data,0,0);else Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?Ie&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,$.width,$.height,j.depth,le,O,$.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ne,Q,$.width,$.height,j.depth,0,le,O,$.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{se&&ae&&t.texStorage2D(s.TEXTURE_2D,Xe,Q,ce[0].width,ce[0].height);for(let ne=0,Le=ce.length;ne<Le;ne++)$=ce[ne],w.format!==Fi?le!==null?se?Ie&&t.compressedTexSubImage2D(s.TEXTURE_2D,ne,0,0,$.width,$.height,le,$.data):t.compressedTexImage2D(s.TEXTURE_2D,ne,Q,$.width,$.height,0,$.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?Ie&&t.texSubImage2D(s.TEXTURE_2D,ne,0,0,$.width,$.height,le,O,$.data):t.texImage2D(s.TEXTURE_2D,ne,Q,$.width,$.height,0,le,O,$.data)}else if(w.isDataArrayTexture)if(se){if(ae&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Xe,Q,j.width,j.height,j.depth),Ie)if(w.layerUpdates.size>0){let ne=au(j.width,j.height,w.format,w.type);for(let Le of w.layerUpdates){let We=j.data.subarray(Le*ne/j.data.BYTES_PER_ELEMENT,(Le+1)*ne/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Le,j.width,j.height,1,le,O,We)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,le,O,j.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Q,j.width,j.height,j.depth,0,le,O,j.data);else if(w.isData3DTexture)se?(ae&&t.texStorage3D(s.TEXTURE_3D,Xe,Q,j.width,j.height,j.depth),Ie&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,le,O,j.data)):t.texImage3D(s.TEXTURE_3D,0,Q,j.width,j.height,j.depth,0,le,O,j.data);else if(w.isFramebufferTexture){if(ae)if(se)t.texStorage2D(s.TEXTURE_2D,Xe,Q,j.width,j.height);else{let ne=j.width,Le=j.height;for(let We=0;We<Xe;We++)t.texImage2D(s.TEXTURE_2D,We,Q,ne,Le,0,le,O,null),ne>>=1,Le>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in s){let ne=s.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),j.parentNode!==ne){ne.appendChild(j),u.add(w),ne.onpaint=Le=>{let We=Le.changedElements;for(let me of u)We.includes(me.image)&&(me.needsUpdate=!0)},ne.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,j);else{let We=s.RGBA,me=s.RGBA,lt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,We,me,lt,j)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ce.length>0){if(se&&ae){let ne=He(ce[0]);t.texStorage2D(s.TEXTURE_2D,Xe,Q,ne.width,ne.height)}for(let ne=0,Le=ce.length;ne<Le;ne++)$=ce[ne],se?Ie&&t.texSubImage2D(s.TEXTURE_2D,ne,0,0,le,O,$):t.texImage2D(s.TEXTURE_2D,ne,Q,le,O,$);w.generateMipmaps=!1}else if(se){if(ae){let ne=He(j);t.texStorage2D(s.TEXTURE_2D,Xe,Q,ne.width,ne.height)}Ie&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,le,O,j)}else t.texImage2D(s.TEXTURE_2D,0,Q,le,O,j);M(w)&&w.mipmapsAutoUpdate===!0&&v(ie),ue.__version=re.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function fi(C,w,W){if(w.image.length!==6)return;let ie=ut(C,w),ee=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+W);let re=i.get(ee);if(ee.version!==re.__version||ie===!0){t.activeTexture(s.TEXTURE0+W);let ue=Ye.getPrimaries(Ye.workingColorSpace),J=w.colorSpace===Wn?null:Ye.getPrimaries(w.colorSpace),j=w.colorSpace===Wn||ue===J?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let le=w.isCompressedTexture||w.image[0].isCompressedTexture,O=w.image[0]&&w.image[0].isDataTexture,Q=[];for(let me=0;me<6;me++)!le&&!O?Q[me]=_(w.image[me],!0,n.maxCubemapSize):Q[me]=O?w.image[me].image:w.image[me],Q[me]=Oe(w,Q[me]);let $=Q[0],ce=r.convert(w.format,w.colorSpace),se=r.convert(w.type),ae=S(w.internalFormat,ce,se,w.normalized,w.colorSpace),Ie=w.isVideoTexture!==!0,Xe=re.__version===void 0||ie===!0,ne=ee.dataReady,Le=E(w,$);ot(s.TEXTURE_CUBE_MAP,w);let We;if(w.isDepthTexture){if(ae=y(w.format===Vn,w.type),Xe)if(Ie)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,ae,$.width,$.height);else for(let me=0;me<6;me++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ae,$.width,$.height,0,ce,se,null)}else if(le){Ie&&Xe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Le,ae,$.width,$.height);for(let me=0;me<6;me++){We=Q[me].mipmaps;for(let lt=0;lt<We.length;lt++){let Gt=We[lt];w.format!==Fi?ce!==null?Ie?ne&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,lt,0,0,Gt.width,Gt.height,ce,Gt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,lt,ae,Gt.width,Gt.height,0,Gt.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,lt,0,0,Gt.width,Gt.height,ce,se,Gt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,lt,ae,Gt.width,Gt.height,0,ce,se,Gt.data)}}}else{if(We=w.mipmaps,Ie&&Xe){We.length>0&&Le++;let me=He(Q[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Le,ae,me.width,me.height)}for(let me=0;me<6;me++)if(O){Ie?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Q[me].width,Q[me].height,ce,se,Q[me].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ae,Q[me].width,Q[me].height,0,ce,se,Q[me].data);for(let lt=0;lt<We.length;lt++){let Zn=We[lt].image[me].image;Ie?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,lt+1,0,0,Zn.width,Zn.height,ce,se,Zn.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,lt+1,ae,Zn.width,Zn.height,0,ce,se,Zn.data)}}else{Ie?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,ce,se,Q[me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ae,ce,se,Q[me]);for(let lt=0;lt<We.length;lt++){let Gt=We[lt];Ie?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,lt+1,0,0,ce,se,Gt.image[me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,lt+1,ae,ce,se,Gt.image[me])}}}M(w)&&w.mipmapsAutoUpdate===!0&&v(s.TEXTURE_CUBE_MAP),re.__version=ee.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function St(C,w,W,ie,ee,re){let ue=r.convert(W.format,W.colorSpace),J=r.convert(W.type),j=S(W.internalFormat,ue,J,W.normalized,W.colorSpace),le=i.get(w),O=i.get(W);if(O.__renderTarget=w,!le.__hasExternalTextures){let Q=Math.max(1,w.width>>re),$=Math.max(1,w.height>>re);ee===s.TEXTURE_3D||ee===s.TEXTURE_2D_ARRAY?t.texImage3D(ee,re,j,Q,$,w.depth,0,ue,J,null):t.texImage2D(ee,re,j,Q,$,0,ue,J,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),pe(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ie,ee,O.__webglTexture,0,vt(w)):(ee===s.TEXTURE_2D||ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ie,ee,O.__webglTexture,re),t.bindFramebuffer(s.FRAMEBUFFER,null)}function nn(C,w,W){if(s.bindRenderbuffer(s.RENDERBUFFER,C),w.depthBuffer){let ie=w.depthTexture,ee=ie&&ie.isDepthTexture?ie.type:null,re=y(w.stencilBuffer,ee),ue=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;pe(w)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,vt(w),re,w.width,w.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,vt(w),re,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,re,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ue,s.RENDERBUFFER,C)}else{let ie=w.textures;for(let ee=0;ee<ie.length;ee++){let re=ie[ee],ue=r.convert(re.format,re.colorSpace),J=r.convert(re.type),j=S(re.internalFormat,ue,J,re.normalized,re.colorSpace);pe(w)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,vt(w),j,w.width,w.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,vt(w),j,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,j,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ht(C,w,W){let ie=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ee=i.get(w.depthTexture);ee.__renderTarget=w;let re=ie?w.depthTexture.image[0]:w.depthTexture.image;(!ee.__webglTexture||re.width!==w.width||re.height!==w.height)&&(re.width=w.width,re.height=w.height,w.depthTexture.needsUpdate=!0),ie?xe(w.depthTexture,0):oe(w.depthTexture,0);let ue=ee.__webglTexture,J=vt(w),j=ie?s.TEXTURE_CUBE_MAP_POSITIVE_X+W:s.TEXTURE_2D,le=w.depthTexture.format===Vn?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(w.depthTexture.format===In)pe(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,le,j,ue,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,le,j,ue,0);else if(w.depthTexture.format===Vn)pe(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,le,j,ue,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,le,j,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ri(C){let w=i.get(C),W=C.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==C.depthTexture){let ie=C.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ie){let ee=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ie.removeEventListener("dispose",ee)};ie.addEventListener("dispose",ee),w.__depthDisposeCallback=ee}w.__boundDepthTexture=ie}if(C.depthTexture&&!w.__autoAllocateDepthBuffer)if(W)for(let ie=0;ie<6;ie++)Ht(w.__webglFramebuffer[ie],C,ie);else C.texture.mipmaps.length>0?Ht(w.__webglFramebuffer[0],C,0):Ht(w.__webglFramebuffer,C,0);else if(W){w.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[ie]),w.__webglDepthbuffer[ie]===void 0)w.__webglDepthbuffer[ie]=s.createRenderbuffer(),nn(w.__webglDepthbuffer[ie],C,!1);else{let ee=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=w.__webglDepthbuffer[ie];s.bindRenderbuffer(s.RENDERBUFFER,re),s.framebufferRenderbuffer(s.FRAMEBUFFER,ee,s.RENDERBUFFER,re)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),nn(w.__webglDepthbuffer,C,!1);else{let ee=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,re),s.framebufferRenderbuffer(s.FRAMEBUFFER,ee,s.RENDERBUFFER,re)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ci(C,w,W){let ie=i.get(C);w!==void 0&&St(ie.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),W!==void 0&&Ri(C)}function Ii(C){let w=C.texture,W=i.get(C),ie=i.get(w);C.addEventListener("dispose",N),L(C);let ee=C.textures,re=C.isWebGLCubeRenderTarget===!0,ue=ee.length>1;if(ue||(ie.__webglTexture===void 0&&(ie.__webglTexture=s.createTexture()),ie.__version=w.version,a.memory.textures++),re){W.__webglFramebuffer=[];for(let J=0;J<6;J++)if(w.mipmaps.length>0){W.__webglFramebuffer[J]=[];for(let j=0;j<w.mipmaps.length;j++)W.__webglFramebuffer[J][j]=s.createFramebuffer()}else W.__webglFramebuffer[J]=s.createFramebuffer()}else{if(w.mipmaps.length>0){W.__webglFramebuffer=[];for(let J=0;J<w.mipmaps.length;J++)W.__webglFramebuffer[J]=s.createFramebuffer()}else W.__webglFramebuffer=s.createFramebuffer();if(ue)for(let J=0,j=ee.length;J<j;J++){let le=i.get(ee[J]);le.__webglTexture===void 0&&(le.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&pe(C)===!1){W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let J=0;J<ee.length;J++){let j=ee[J];W.__webglColorRenderbuffer[J]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,W.__webglColorRenderbuffer[J]);let le=r.convert(j.format,j.colorSpace),O=r.convert(j.type),Q=S(j.internalFormat,le,O,j.normalized,j.colorSpace,C.isXRRenderTarget===!0),$=vt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,$,Q,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+J,s.RENDERBUFFER,W.__webglColorRenderbuffer[J])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),nn(W.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(re){t.bindTexture(s.TEXTURE_CUBE_MAP,ie.__webglTexture),ot(s.TEXTURE_CUBE_MAP,w);for(let J=0;J<6;J++)if(w.mipmaps.length>0)for(let j=0;j<w.mipmaps.length;j++)St(W.__webglFramebuffer[J][j],C,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,j);else St(W.__webglFramebuffer[J],C,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);M(w)?v(s.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}else if(ue){for(let J=0,j=ee.length;J<j;J++){let le=ee[J],O=i.get(le),Q=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Q=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Q,O.__webglTexture),ot(Q,le),St(W.__webglFramebuffer,C,le,s.COLOR_ATTACHMENT0+J,Q,0),M(le)&&v(Q)}t.unbindTexture()}else{let J=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(J,ie.__webglTexture),ot(J,w),w.mipmaps.length>0)for(let j=0;j<w.mipmaps.length;j++)St(W.__webglFramebuffer[j],C,w,s.COLOR_ATTACHMENT0,J,j);else St(W.__webglFramebuffer,C,w,s.COLOR_ATTACHMENT0,J,0);M(w)?v(J):w.mipmaps.length>0&&s.texParameteri(J,s.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&Ri(C)}function k(C){let w=C.textures;for(let W=0,ie=w.length;W<ie;W++){let ee=w[W];if(M(ee)&&ee.mipmapsAutoUpdate===!0){let re=b(C),ue=i.get(ee).__webglTexture;t.bindTexture(re,ue),v(re),t.unbindTexture()}}}let Pi=[];function _t(C){if(C.samples>0){if(pe(C)===!1){let w=C.textures,W=C.width,ie=C.height,ee=s.COLOR_BUFFER_BIT,re=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=i.get(C),J=w.length>1;if(J)for(let le=0;le<w.length;le++)t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let le=0;le<w.length;le++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ee|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ee|=s.STENCIL_BUFFER_BIT)),J){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ue.__webglColorRenderbuffer[le]);let O=i.get(w[le]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,O,0)}s.blitFramebuffer(0,0,W,ie,0,0,W,ie,ee,s.NEAREST),l===!0&&(Pi.length=0,Pi.push(s.COLOR_ATTACHMENT0+le),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&Pi.push(re),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Pi))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),J)for(let le=0;le<w.length;le++){t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,ue.__webglColorRenderbuffer[le]);let O=i.get(w[le]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.TEXTURE_2D,O,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let w=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function vt(C){return Math.min(n.maxSamples,C.samples)}function pe(C){let w=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ut(C){let w=a.render.frame;h.get(C)!==w&&(h.set(C,w),C.update())}function Oe(C,w){let W=C.colorSpace,ie=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||W!==hi&&W!==Wn&&(Ye.getTransfer(W)===rt?(ie!==Fi||ee!==gi)&&Ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ze("WebGLTextures: Unsupported texture color space:",W)),w}function He(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=we,this.resetTextureUnits=q,this.getTextureUnits=te,this.setTextureUnits=fe,this.setTexture2D=oe,this.setTexture2DArray=ve,this.setTexture3D=Ce,this.setTextureCube=xe,this.rebindTextures=Ci,this.setupRenderTarget=Ii,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=Ri,this.setupFrameBufferTexture=St,this.useMultisampledRTT=pe,this.dispose=z}function Av(s,e){function t(i,n=Wn){let r,a=Ye.getTransfer(n);if(i===gi)return s.UNSIGNED_BYTE;if(i===vl)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Ml)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Vh)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Wh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===Hh)return s.BYTE;if(i===Gh)return s.SHORT;if(i===Ur)return s.UNSIGNED_SHORT;if(i===_l)return s.INT;if(i===ji)return s.UNSIGNED_INT;if(i===Si)return s.FLOAT;if(i===Qi)return s.HALF_FLOAT;if(i===Xh)return s.ALPHA;if(i===qh)return s.RGB;if(i===Fi)return s.RGBA;if(i===In)return s.DEPTH_COMPONENT;if(i===Vn)return s.DEPTH_STENCIL;if(i===bl)return s.RED;if(i===Sl)return s.RED_INTEGER;if(i===cs)return s.RG;if(i===Tl)return s.RG_INTEGER;if(i===El)return s.RGBA_INTEGER;if(i===Ba||i===Ha||i===Ga||i===Va)if(a===rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ba)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ba)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ha)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ga)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Va)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===wl||i===Al||i===Rl||i===Cl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===wl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Al)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Rl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Cl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Il||i===Pl||i===Ll||i===Nl||i===Dl||i===Wa||i===Ol)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Il||i===Pl)return a===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ll)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Nl)return r.COMPRESSED_R11_EAC;if(i===Dl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Wa)return r.COMPRESSED_RG11_EAC;if(i===Ol)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ul||i===Fl||i===zl||i===kl||i===Bl||i===Hl||i===Gl||i===Vl||i===Wl||i===Xl||i===ql||i===Yl||i===Kl||i===$l)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ul)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===zl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===kl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Bl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Hl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Gl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ql)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Yl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Kl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$l)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Zl||i===Jl||i===jl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Zl)return a===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Jl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===jl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ql||i===ec||i===Xa||i===tc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ql)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ec)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===tc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Gs?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}var Rv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cv=`
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

}`,mu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Aa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new cn({vertexShader:Rv,fragmentShader:Cv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ke(new $i(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gu=class extends Yi{constructor(e,t){super();let i=this,n=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null,x=typeof XRWebGLBinding<"u",p=new mu,g={},_=t.getContextAttributes(),M=null,v=null,b=[],S=[],y=new De,E=null,L=null,R=new Ct;R.viewport=new ct;let D=new Ct;D.viewport=new ct;let N=[R,D],B=new dl,P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let oe=b[Z];return oe===void 0&&(oe=new Mr,b[Z]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Z){let oe=b[Z];return oe===void 0&&(oe=new Mr,b[Z]=oe),oe.getGripSpace()},this.getHand=function(Z){let oe=b[Z];return oe===void 0&&(oe=new Mr,b[Z]=oe),oe.getHandSpace()};function H(Z){let oe=S.indexOf(Z.inputSource);if(oe===-1)return;let ve=b[oe];ve!==void 0&&(ve.update(Z.inputSource,Z.frame,c||a),ve.dispatchEvent({type:Z.type,data:Z.inputSource}))}function F(){n.removeEventListener("select",H),n.removeEventListener("selectstart",H),n.removeEventListener("selectend",H),n.removeEventListener("squeeze",H),n.removeEventListener("squeezestart",H),n.removeEventListener("squeezeend",H),n.removeEventListener("end",F),n.removeEventListener("inputsourceschange",Y);for(let Z=0;Z<b.length;Z++){let oe=S[Z];oe!==null&&(S[Z]=null,b[Z].disconnect(oe))}P=null,z=null,p.reset();for(let Z in g)delete g[Z];if(e.setRenderTarget(M),f=null,d=null,u=null,n=null,v=null,we.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(y.width,y.height,!1),L!==null){let Z=L.camera;Z.fov=L.fov,Z.zoom=L.zoom,Z.updateProjectionMatrix(),L=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&Ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&Ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(n,t)),u},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(Z){if(n=Z,n!==null){if(M=e.getRenderTarget(),n.addEventListener("select",H),n.addEventListener("selectstart",H),n.addEventListener("selectend",H),n.addEventListener("squeeze",H),n.addEventListener("squeezestart",H),n.addEventListener("squeezeend",H),n.addEventListener("end",F),n.addEventListener("inputsourceschange",Y),_.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(y),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Ce=null,xe=null;_.depth&&(xe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=_.stencil?Vn:In,Ce=_.stencil?Gs:ji);let Ve={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ve),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new bi(d.textureWidth,d.textureHeight,{format:Fi,type:gi,depthTexture:new On(d.textureWidth,d.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ve={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,t,ve),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new bi(f.framebufferWidth,f.framebufferHeight,{format:Fi,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),we.setContext(n),we.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Y(Z){for(let oe=0;oe<Z.removed.length;oe++){let ve=Z.removed[oe],Ce=S.indexOf(ve);Ce>=0&&(S[Ce]=null,b[Ce].disconnect(ve))}for(let oe=0;oe<Z.added.length;oe++){let ve=Z.added[oe],Ce=S.indexOf(ve);if(Ce===-1){for(let Ve=0;Ve<b.length;Ve++)if(Ve>=S.length){S.push(ve),Ce=Ve;break}else if(S[Ve]===null){S[Ve]=ve,Ce=Ve;break}if(Ce===-1)break}let xe=b[Ce];xe&&xe.connect(ve)}}function G(Z,oe){oe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(oe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(n===null)return;let oe=Z.near,ve=Z.far;p.texture!==null&&(p.depthNear>0&&(oe=p.depthNear),p.depthFar>0&&(ve=p.depthFar)),B.near=D.near=R.near=oe,B.far=D.far=R.far=ve,(P!==B.near||z!==B.far)&&(n.updateRenderState({depthNear:B.near,depthFar:B.far}),P=B.near,z=B.far),B.layers.mask=Z.layers.mask|6,R.layers.mask=B.layers.mask&-5,D.layers.mask=B.layers.mask&-3;let Ce=Z.parent,xe=B.cameras;G(B,Ce);for(let Ve=0;Ve<xe.length;Ve++)G(xe[Ve],Ce);B.projectionMatrix.copy(R.projectionMatrix),B.projectionMatrixInverse.copy(R.projectionMatrixInverse),L===null&&Z.isPerspectiveCamera&&(L={camera:Z,fov:Z.fov,zoom:Z.zoom}),q(Z,B,Ce)};function q(Z,oe,ve){ve===null?Z.matrix.copy(oe.matrixWorld):(Z.matrix.copy(ve.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(oe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ps*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(B)},this.getCameraTexture=function(Z){return g[Z]};let te=null;function fe(Z,oe){if(h=oe.getViewerPose(c||a),m=oe,h!==null){let ve=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Ce=!1;ve.length!==B.cameras.length&&(B.cameras.length=0,Ce=!0);for(let Fe=0;Fe<ve.length;Fe++){let ot=ve[Fe],ut=null;if(f!==null)ut=f.getViewport(ot);else{let $t=u.getViewSubImage(d,ot);ut=$t.viewport,Fe===0&&(e.setRenderTargetTextures(v,$t.colorTexture,$t.depthStencilTexture),e.setRenderTarget(v))}let je=N[Fe];je===void 0&&(je=new Ct,je.layers.enable(Fe),je.viewport=new ct,N[Fe]=je),je.matrix.fromArray(ot.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(ot.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(ut.x,ut.y,ut.width,ut.height),Fe===0&&(B.matrix.copy(je.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ce===!0&&B.cameras.push(je)}let xe=n.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&x){u=i.getBinding();let Fe=u.getDepthInformation(ve[0]);Fe&&Fe.isValid&&Fe.texture&&p.init(Fe,n.renderState)}if(xe&&xe.includes("camera-access")&&x){e.state.unbindTexture(),u=i.getBinding();for(let Fe=0;Fe<ve.length;Fe++){let ot=ve[Fe].camera;if(ot){let ut=g[ot];ut||(ut=new Aa,g[ot]=ut);let je=u.getCameraImage(ot);ut.sourceTexture=je}}}}for(let ve=0;ve<b.length;ve++){let Ce=S[ve],xe=b[ve];Ce!==null&&xe!==void 0&&xe.update(Ce,oe,c||a)}te&&te(Z,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),m=null}let we=new Ip;we.setAnimationLoop(fe),this.setAnimationLoop=function(Z){te=Z},this.dispose=function(){}}},Iv=new Pe,Bp=new Be;Bp.set(-1,0,0,0,1,0,0,0,1);function Pv(s,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function i(p,g){g.color.getRGB(p.fogColor.value,nu(s)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function n(p,g,_,M,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),u(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),d(p,g),g.isMeshPhysicalMaterial&&f(p,g,v)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),x(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,_,M):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===jt&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===jt&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let _=e.get(g),M=_.envMap,v=_.envMapRotation;M&&(p.envMap.value=M,p.envMapRotation.value.setFromMatrix4(Iv.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Bp),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,_,M){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*_,p.scale.value=M*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,_){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===jt&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){let _=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Lv(s,e,t,i){let n={},r={};function a(_,M){let v=M.program;i.uniformBlockBinding(_,v,n[_.id])}function o(_,M){let v=n[_.id];v===void 0&&(m(_),v=l(_),n[_.id]=v,_.addEventListener("dispose",p));let b=M.program;i.updateUBOMapping(_,b);let S=e.render.frame;r[_.id]!==S&&(c(_),r[_.id]=S)}function l(_){let M=s.createBuffer(),v=_.__size,b=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,v,b),s.bindBuffer(s.UNIFORM_BUFFER,null),M}function c(_){let M=n[_.id],v=_.uniforms,b=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let S=0,y=v.length;S<y;S++){let E=v[S];if(Array.isArray(E))for(let L=0,R=E.length;L<R;L++)h(E[L],S,L,b);else h(E,S,0,b)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(_,M,v,b){if(d(_,M,v,b)===!0){let S=_.__offset,y=_.value;if(Array.isArray(y)){let E=0;for(let L=0;L<y.length;L++){let R=y[L],D=x(R,!0);u(R,_.__data,E),E+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else u(y,_.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,S,_.__data)}}function u(_,M,v){typeof _=="number"||typeof _=="boolean"?M[v]=_:_.isMatrix3?(M[v]=_.elements[0],M[v+1]=_.elements[1],M[v+2]=_.elements[2],M[v+3]=0,M[v+4]=_.elements[3],M[v+5]=_.elements[4],M[v+6]=_.elements[5],M[v+7]=0,M[v+8]=_.elements[6],M[v+9]=_.elements[7],M[v+10]=_.elements[8],M[v+11]=0):ArrayBuffer.isView(_)?M.set(_.subarray(0,M.length-v),v):_.toArray(M,v)}function d(_,M,v,b){let S=_.value,y=M+"_"+v;if(Array.isArray(S)){b[y]===void 0&&(b[y]=[]);let E=b[y],L=!1;for(let R=0;R<S.length;R++)f(S[R],E,R)===!0&&(L=!0);return L}return f(S,b,y)}function f(_,M,v){if(M[v]===void 0)return typeof _=="number"||typeof _=="boolean"?M[v]=_:ArrayBuffer.isView(_)?M[v]=_.slice():M[v]=_.clone(),!0;{let b=M[v];if(typeof _=="number"||typeof _=="boolean"){if(b!==_)return M[v]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(b.equals(_)===!1)return b.copy(_),!0}}return!1}function m(_){let M=_.uniforms,v=0,b=16;for(let y=0,E=M.length;y<E;y++){let L=Array.isArray(M[y])?M[y]:[M[y]];for(let R=0,D=L.length;R<D;R++){let N=L[R],B=Array.isArray(N.value)?N.value:[N.value],P=Array.isArray(M[y])||Array.isArray(N.value),z=v;for(let F=0,Y=B.length;F<Y;F++){let G=B[F],q=x(G,P),te=v%b,fe=te%q.boundary,we=te+fe;v+=fe,we!==0&&b-we<q.storage&&(v+=b-we),F===0&&(z=v),v+=q.storage}let H=N.type==="int"?Int32Array:N.type==="uint"?Uint32Array:Float32Array;N.__data=new H((v-z)/Float32Array.BYTES_PER_ELEMENT),N.__offset=z}}let S=v%b;return S>0&&(v+=b-S),_.__size=v,_.__cache={},this}function x(_,M){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=16,v.storage=48):_.isMatrix4?(v.boundary=16,v.storage=64):_.isTexture?Ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(v.boundary=16,v.storage=_.byteLength):Ae("WebGLRenderer: Unsupported uniform value type.",_),M===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function p(_){let M=_.target;M.removeEventListener("dispose",p),s.deleteBuffer(n[M.id]),delete n[M.id],delete r[M.id]}function g(){for(let _ in n)s.deleteBuffer(n[_]);n={},r={}}return{bind:a,update:o,dispose:g}}var Nv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),pn=null;function Dv(){return pn===null&&(pn=new Tr(Nv,16,16,cs,Qi),pn.name="DFG_LUT",pn.minFilter=Ft,pn.magFilter=Ft,pn.wrapS=Ni,pn.wrapT=Ni,pn.generateMipmaps=!1,pn.needsUpdate=!0),pn}var oc=class{constructor(e={}){let{canvas:t=ep(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=gi}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;let x=f,p=new Set([El,Tl,Sl]),g=new Set([gi,ji,Ur,Gs,vl,Ml]),_=new Uint32Array(4),M=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},b=null,S=null,y=[],E=[],L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,D=!1,N=null,B=null,P=null,z=null;this._outputColorSpace=Rt;let H=0,F=0,Y=null,G=-1,q=null,te=new ct,fe=new ct,we=null,Z=new be(0),oe=0,ve=t.width,Ce=t.height,xe=1,Ve=null,Lt=null,Fe=new ct(0,0,ve,Ce),ot=new ct(0,0,ve,Ce),ut=!1,je=new on,$t=new el,Ot=!1,fi=!1,St=new Pe,nn=new I,Ht=new ct,Ri={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ci=!1;function Ii(){return Y===null?xe:1}let k=i;function Pi(A,U){return t.getContext(A,U)}let _t,vt,pe,Ut,Oe,He,C,w,W,ie,ee,re,ue,J,j,le,O,Q,$,ce,se,ae,Ie;try{let A={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",We,!1),t.addEventListener("webglcontextcreationerror",me,!1),k===null){let U="webgl2";if(k=Pi(U,A),k===null)throw Pi(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Xe()}catch(A){throw t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",me,!1),ze("WebGLRenderer: "+A.message),A}function Xe(){_t=new Xy(k),_t.init(),se=new Av(k,_t),vt=new Dy(k,_t,e,se),pe=new Ev(k,_t),vt.reversedDepthBuffer&&d&&pe.buffers.depth.setReversed(!0),B=k.createFramebuffer(),P=k.createFramebuffer(),z=k.createFramebuffer(),Ut=new Ky(k),Oe=new uv,He=new wv(k,_t,pe,Oe,vt,se,Ut),C=new Wy(R),w=new Z0(k),ae=new Ly(k,w),W=new qy(k,w,Ut,ae),ie=new Zy(k,W,w,ae,Ut),Q=new $y(k,vt,He),j=new Oy(Oe),ee=new hv(R,C,_t,vt,ae,j),re=new Pv(R,Oe),ue=new fv,J=new _v(_t),O=new Py(R,C,pe,ie,m,l),le=new Tv(R,ie,vt),Ie=new Lv(k,Ut,vt,pe),$=new Ny(k,_t,Ut),ce=new Yy(k,_t,Ut),Ut.programs=ee.programs,R.capabilities=vt,R.extensions=_t,R.properties=Oe,R.renderLists=ue,R.shadowMap=le,R.state=pe,R.info=Ut}x!==gi&&(L=new jy(x,t.width,t.height,o,n,r));let ne=new gu(R,k);this.xr=ne,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let A=_t.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=_t.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(A){A!==void 0&&(xe=A,this.setSize(ve,Ce,!1))},this.getSize=function(A){return A.set(ve,Ce)},this.setSize=function(A,U,K=!0){if(ne.isPresenting){Ae("WebGLRenderer: Can't change size while VR device is presenting.");return}ve=A,Ce=U,t.width=Math.floor(A*xe),t.height=Math.floor(U*xe),K===!0&&(t.style.width=A+"px",t.style.height=U+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set(ve*xe,Ce*xe).floor()},this.setDrawingBufferSize=function(A,U,K){ve=A,Ce=U,xe=K,t.width=Math.floor(A*K),t.height=Math.floor(U*K),this.setViewport(0,0,A,U)},this.setEffects=function(A){if(x===gi){ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let U=0;U<A.length;U++)if(A[U].isOutputPass===!0){Ae("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(te)},this.getViewport=function(A){return A.copy(Fe)},this.setViewport=function(A,U,K,V){A.isVector4?Fe.set(A.x,A.y,A.z,A.w):Fe.set(A,U,K,V),pe.viewport(te.copy(Fe).multiplyScalar(Ii()).round())},this.getScissor=function(A){return A.copy(ot)},this.setScissor=function(A,U,K,V){A.isVector4?ot.set(A.x,A.y,A.z,A.w):ot.set(A,U,K,V),pe.scissor(fe.copy(ot).multiplyScalar(Ii()).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(A){pe.setScissorTest(ut=A)},this.setOpaqueSort=function(A){Ve=A},this.setTransparentSort=function(A){Lt=A},this.getClearColor=function(A){return A.copy(O.getClearColor())},this.setClearColor=function(){O.setClearColor(...arguments)},this.getClearAlpha=function(){return O.getClearAlpha()},this.setClearAlpha=function(){O.setClearAlpha(...arguments)},this.clear=function(A=!0,U=!0,K=!0){let V=0;if(A){let X=!1;if(Y!==null){let de=Y.texture.format;X=p.has(de)}if(X){let de=Y.texture.type,Me=g.has(de),he=O.getClearColor(),ye=O.getClearAlpha(),Ee=he.r,Ge=he.g,Qe=he.b;Me?(_[0]=Ee,_[1]=Ge,_[2]=Qe,_[3]=ye,k.clearBufferuiv(k.COLOR,0,_)):(M[0]=Ee,M[1]=Ge,M[2]=Qe,M[3]=ye,k.clearBufferiv(k.COLOR,0,M))}else V|=k.COLOR_BUFFER_BIT}U&&(V|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(V|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&k.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),N=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",me,!1),O.dispose(),ue.dispose(),J.dispose(),He.dispose(),Oe.dispose(),C.dispose(),ie.dispose(),W.dispose(),ae.dispose(),Ie.dispose(),ee.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Md),ne.removeEventListener("sessionend",bd),_s.stop()};function Le(A){A.preventDefault(),pa("WebGLRenderer: Context Lost."),D=!0}function We(){pa("WebGLRenderer: Context Restored."),D=!1;let A=Ut.autoReset,U=le.enabled,K=le.autoUpdate,V=le.needsUpdate,X=le.type;Xe(),Ut.autoReset=A,le.enabled=U,le.autoUpdate=K,le.needsUpdate=V,le.type=X}function me(A){ze("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function lt(A){let U=A.target;U.removeEventListener("dispose",lt),Gt(U)}function Gt(A){Zn(A),Oe.remove(A)}function Zn(A){let U=Oe.get(A).programs;U!==void 0&&(U.forEach(function(K){ee.releaseProgram(K)}),A.isShaderMaterial&&ee.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,K,V,X,de){U===null&&(U=Ri);let Me=X.isMesh&&X.matrixWorld.determinantAffine()<0,he=Vm(A,U,K,V,X);pe.setMaterial(V,Me);let ye=K.index,Ee=1;if(V.wireframe===!0){if(ye=W.getWireframeAttribute(K),ye===void 0)return;Ee=2}let Ge=K.drawRange,Qe=K.attributes.position,Se=Ge.start*Ee,et=(Ge.start+Ge.count)*Ee;de!==null&&(Se=Math.max(Se,de.start*Ee),et=Math.min(et,(de.start+de.count)*Ee)),ye!==null?(Se=Math.max(Se,0),et=Math.min(et,ye.count)):Qe!=null&&(Se=Math.max(Se,0),et=Math.min(et,Qe.count));let Nt=et-Se;if(Nt<0||Nt===1/0)return;ae.setup(X,V,he,K,ye);let pt,dt=$;if(ye!==null&&(pt=w.get(ye),dt=ce,dt.setIndex(pt)),X.isMesh)V.wireframe===!0?(pe.setLineWidth(V.wireframeLinewidth*Ii()),dt.setMode(k.LINES)):dt.setMode(k.TRIANGLES);else if(X.isLine){let ei=V.linewidth;ei===void 0&&(ei=1),pe.setLineWidth(ei*Ii()),X.isLineSegments?dt.setMode(k.LINES):X.isLineLoop?dt.setMode(k.LINE_LOOP):dt.setMode(k.LINE_STRIP)}else X.isPoints?dt.setMode(k.POINTS):X.isSprite&&dt.setMode(k.TRIANGLES);if(X.isBatchedMesh)if(_t.get("WEBGL_multi_draw"))dt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let ei=X._multiDrawStarts,Te=X._multiDrawCounts,li=X._multiDrawCount,it=ye?w.get(ye).bytesPerElement:1,vs=Oe.get(V).currentProgram.getUniforms();for(let ti=0;ti<li;ti++)vs.setValue(k,"_gl_DrawID",ti),dt.render(ei[ti]/it,Te[ti])}else if(X.isInstancedMesh)dt.renderInstances(Se,Nt,X.count);else if(K.isInstancedBufferGeometry){let ei=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Te=Math.min(K.instanceCount,ei);dt.renderInstances(Se,Nt,Te)}else dt.render(Se,Nt)};function vd(A,U,K,V){N!==null&&A.isNodeMaterial&&N.setObject(V,A),Ot===!0&&j.setState(A,K,!1),A.transparent===!0&&A.side===qt&&A.forceSinglePass===!1?(A.side=jt,A.needsUpdate=!0,Jr(A,U,V),A.side=Oi,A.needsUpdate=!0,Jr(A,U,V),A.side=qt):Jr(A,U,V)}this.compile=function(A,U,K=null){K===null&&(K=A),N!==null&&N.renderStart(A,U,K),S=J.get(K),S.init(U),E.push(S),K.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(S.pushLight(X),X.castShadow&&S.pushShadow(X))}),A!==K&&A.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(S.pushLight(X),X.castShadow&&S.pushShadow(X))}),S.setupLights(),N!==null&&N.updateLights(S.state.lightsArray),fi=this.localClippingEnabled,Ot=j.init(this.clippingPlanes,fi),Ot===!0&&j.setGlobalState(this.clippingPlanes,U),N!==null&&le.render(S.state.shadowsArray,K,U);let V=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let de=X.material;if(de)if(Array.isArray(de))for(let Me=0;Me<de.length;Me++){let he=de[Me];vd(he,K,U,X),V.add(he)}else vd(de,K,U,X),V.add(de)}),S=E.pop(),N!==null&&N.renderEnd(),V},this.compileAsync=function(A,U,K=null){let V=this.compile(A,U,K);return new Promise(X=>{function de(){if(V.forEach(function(Me){let ye=Oe.get(Me).currentProgram;(ye===void 0||ye.isReady())&&V.delete(Me)}),V.size===0){X(A);return}setTimeout(de,10)}_t.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Yc=null;function Hm(A){Yc&&Yc(A)}function Md(){_s.stop()}function bd(){_s.start()}let _s=new Ip;_s.setAnimationLoop(Hm),typeof self<"u"&&_s.setContext(self),this.setAnimationLoop=function(A){Yc=A,ne.setAnimationLoop(A),A===null?_s.stop():_s.start()},ne.addEventListener("sessionstart",Md),ne.addEventListener("sessionend",bd),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;N!==null&&N.renderStart(A,U);let K=ne.enabled===!0&&ne.isPresenting===!0,V=L!==null&&(Y===null||K)&&L.begin(R,Y);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(U),U=ne.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,U,Y),S=J.get(A,E.length),S.init(U),S.state.textureUnits=He.getTextureUnits(),E.push(S),St.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?$t.setFromArrayCamera(U):je.setFromProjectionMatrix(St,Di,U.reversedDepth),fi=this.localClippingEnabled,Ot=j.init(this.clippingPlanes,fi),b=ue.get(A,y.length),b.init(),y.push(b),this.info.render.frame++,ne.enabled===!0&&ne.isPresenting===!0){let Me=R.xr.getDepthSensingMesh();Me!==null&&Kc(Me,U,-1/0,R.sortObjects)}Kc(A,U,0,R.sortObjects),b.finish(),N!==null&&N.updateLights(S.state.lightsArray),R.sortObjects===!0&&b.sort(Ve,Lt),Ci=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,Ci&&O.addToRenderList(b,A),this.info.autoReset===!0&&this.info.reset(),Ot===!0&&j.beginShadows();let X=S.state.shadowsArray;if(le.render(X,A,U),Ot===!0&&j.endShadows(),(V&&L.hasRenderPass())===!1){let Me=b.opaque,he=b.transmissive;if(S.setupLights(),U.isArrayCamera){let ye=U.cameras;if(he.length>0)for(let Ee=0,Ge=ye.length;Ee<Ge;Ee++){let Qe=ye[Ee];Td(Me,he,A,Qe)}Ci&&O.render(A);for(let Ee=0,Ge=ye.length;Ee<Ge;Ee++){let Qe=ye[Ee];Sd(b,A,Qe,Qe.viewport)}}else he.length>0&&Td(Me,he,A,U),Ci&&O.render(A),Sd(b,A,U)}Y!==null&&F===0&&(He.updateMultisampleRenderTarget(Y),He.updateRenderTargetMipmap(Y)),V&&L.end(R),A.isScene===!0&&A.onAfterRender(R,A,U),ae.resetDefaultState(),G=-1,q=null,E.pop(),E.length>0?(S=E[E.length-1],He.setTextureUnits(S.state.textureUnits),Ot===!0&&j.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,y.pop(),y.length>0?b=y[y.length-1]:b=null,N!==null&&N.renderEnd()};function Kc(A,U,K,V){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLight)S.pushLight(A),A.castShadow&&S.pushShadow(A);else if(A.isSprite){let Me=U.isArrayCamera?$t:je;if(!A.frustumCulled||A.intersectsFrustum(Me)){V&&Ht.setFromMatrixPosition(A.matrixWorld).applyMatrix4(St);let he=ie.update(A),ye=A.material;ye.visible&&b.push(A,he,ye,K,Ht.z,null,U)}}else if(A.isMesh||A.isLine||A.isPoints){let Me=U.isArrayCamera?$t:je;if(!A.frustumCulled||A.intersectsFrustum(Me)){let he=ie.update(A),ye=A.material;if(V&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ht.copy(A.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Ht.copy(he.boundingSphere.center)),Ht.applyMatrix4(A.matrixWorld).applyMatrix4(St)),Array.isArray(ye)){let Ee=he.groups;for(let Ge=0,Qe=Ee.length;Ge<Qe;Ge++){let Se=Ee[Ge],et=ye[Se.materialIndex];et&&et.visible&&b.push(A,he,et,K,Ht.z,Se,U)}}else ye.visible&&b.push(A,he,ye,K,Ht.z,null,U)}}}let de=A.children;for(let Me=0,he=de.length;Me<he;Me++)Kc(de[Me],U,K,V)}function Sd(A,U,K,V){let{opaque:X,transmissive:de,transparent:Me}=A;S.setupLightsView(K),Ot===!0&&j.setGlobalState(R.clippingPlanes,K),V&&pe.viewport(te.copy(V)),X.length>0&&uo(X,U,K),de.length>0&&uo(de,U,K),Me.length>0&&uo(Me,U,K),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Td(A,U,K,V){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[V.id]===void 0){let Se=_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[V.id]=new bi(1,1,{generateMipmaps:!0,type:Se?Qi:gi,minFilter:Ui,samples:Math.max(4,vt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}let de=S.state.transmissionRenderTarget[V.id],Me=V.viewport||te;de.setSize(Me.z*R.transmissionResolutionScale,Me.w*R.transmissionResolutionScale);let he=R.getRenderTarget(),ye=R.getActiveCubeFace(),Ee=R.getActiveMipmapLevel();R.setRenderTarget(de),R.getClearColor(Z),oe=R.getClearAlpha(),oe<1&&R.setClearColor(16777215,.5),R.clear(),Ci&&O.render(K);let Ge=R.toneMapping;R.toneMapping=dn;let Qe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),S.setupLightsView(V),Ot===!0&&j.setGlobalState(R.clippingPlanes,V),uo(A,K,V),He.updateMultisampleRenderTarget(de),He.updateRenderTargetMipmap(de),_t.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let et=0,Nt=U.length;et<Nt;et++){let pt=U[et],{object:dt,geometry:ei,material:Te,group:li}=pt;if(Te.side===qt&&dt.layers.test(V.layers)){let it=Te.side;Te.side=jt,Te.needsUpdate=!0,Ed(dt,K,V,ei,Te,li),Te.side=it,Te.needsUpdate=!0,Se=!0}}Se===!0&&(He.updateMultisampleRenderTarget(de),He.updateRenderTargetMipmap(de))}R.setRenderTarget(he,ye,Ee),R.setClearColor(Z,oe),Qe!==void 0&&(V.viewport=Qe),R.toneMapping=Ge}function uo(A,U,K){let V=U.isScene===!0?U.overrideMaterial:null;for(let X=0,de=A.length;X<de;X++){let Me=A[X],{object:he,geometry:ye,group:Ee}=Me,Ge=Me.material;Ge.allowOverride===!0&&V!==null&&(Ge=V),he.layers.test(K.layers)&&Ed(he,U,K,ye,Ge,Ee)}}function Ed(A,U,K,V,X,de){N!==null&&X.isNodeMaterial&&N.setObject(A,X),A.onBeforeRender(R,U,K,V,X,de),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(R,U,K,V,A,de),X.transparent===!0&&X.side===qt&&X.forceSinglePass===!1?(X.side=jt,X.needsUpdate=!0,R.renderBufferDirect(K,U,V,X,A,de),X.side=Oi,X.needsUpdate=!0,R.renderBufferDirect(K,U,V,X,A,de),X.side=qt):R.renderBufferDirect(K,U,V,X,A,de),A.onAfterRender(R,U,K,V,X,de)}function wd(A){let U=0;for(let K of A)K.texture!==null&&U++;return U}function Jr(A,U,K){U.isScene!==!0&&(U=Ri);let V=Oe.get(A),X=S.state.lights,de=S.state.shadowsArray,Me=X.state.version,he=ee.getParameters(A,X.state,de,U,K,S.state.lightProbeGridArray),ye=ee.getProgramCacheKey(he),Ee=V.programs;V.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?U.environment:null,V.fog=U.fog;let Ge=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;V.envMap=C.get(A.envMap||V.environment,Ge),V.envMapRotation=V.environment!==null&&A.envMap===null?U.environmentRotation:A.envMapRotation,Ee===void 0&&(A.addEventListener("dispose",lt),Ee=new Map,V.programs=Ee,V.programVariants=new Map);let Qe=Ee.get(ye);if(Qe!==void 0){if(V.currentProgram===Qe&&V.lightsStateVersion===Me)return Rd(A,he),Qe}else he.uniforms=ee.getUniforms(A),N!==null&&A.isNodeMaterial&&N.build(A,K,he),A.onBeforeCompile(he,R),Qe=ee.acquireProgram(he,ye),Ee.set(ye,Qe),V.uniforms=he.uniforms;let Se=V.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Se.clippingPlanes=j.uniform),Rd(A,he),V.needsLights=Xm(A),V.lightsStateVersion=Me,V.needsLights&&(Se.ambientLightColor.value=X.state.ambient,Se.lightProbe.value=X.state.probe,Se.sunLights.value=X.state.sun,Se.sunLightShadows.value=X.state.sunShadow,Se.directionalLights.value=X.state.directional,Se.directionalLightShadows.value=X.state.directionalShadow,Se.spotLights.value=X.state.spot,Se.spotLightShadows.value=X.state.spotShadow,Se.rectAreaLights.value=X.state.rectArea,Se.ltc_1.value=X.state.rectAreaLTC1,Se.ltc_2.value=X.state.rectAreaLTC2,Se.pointLights.value=X.state.point,Se.pointLightShadows.value=X.state.pointShadow,Se.hemisphereLights.value=X.state.hemi,Se.sunShadowMatrix.value=X.state.sunShadowMatrix,Se.sunShadowCascade.value=X.state.sunShadowCascade,Se.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Se.spotLightMatrix.value=X.state.spotLightMatrix,Se.spotLightMap.value=X.state.spotLightMap,Se.pointShadowMatrix.value=X.state.pointShadowMatrix),V.numLightProbeGrids=wd(S.state.lightProbeGridArray),V.currentProgram=Qe,V.uniformsList=null,Qe}function Gm(A,U,K,V,X){let de=Oe.get(A),Me=de.currentProgram.id+","+V+","+X,he=de.programVariants.get(Me);return he===void 0?(he=Jr(A,U,K),de.programVariants.set(Me,he)):(de.currentProgram=he,de.uniformsList=null,de.outputColorSpace=V,de.toneMapping=X),he}function Ad(A){if(A.uniformsList===null){let U=A.currentProgram.getUniforms();A.uniformsList=zr.seqWithValue(U.seq,A.uniforms)}return A.uniformsList}function Rd(A,U){let K=Oe.get(A);K.outputColorSpace=U.outputColorSpace,K.batching=U.batching,K.batchingColor=U.batchingColor,K.instancing=U.instancing,K.instancingColor=U.instancingColor,K.instancingMorph=U.instancingMorph,K.skinning=U.skinning,K.morphTargets=U.morphTargets,K.morphNormals=U.morphNormals,K.morphColors=U.morphColors,K.morphTargetsCount=U.morphTargetsCount,K.numClippingPlanes=U.numClippingPlanes,K.numIntersection=U.numClipIntersection,K.vertexAlphas=U.vertexAlphas,K.vertexTangents=U.vertexTangents,K.toneMapping=U.toneMapping}function Vm(A,U,K,V,X){U.isScene!==!0&&(U=Ri),He.resetTextureUnits();let de=U.fog,Me=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?U.environment:null,he=Y===null?R.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Ye.workingColorSpace,ye=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ee=C.get(V.envMap||Me,ye),Ge=V.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Qe=!!K.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Se=!!K.morphAttributes.position,et=!!K.morphAttributes.normal,Nt=!!K.morphAttributes.color,pt=dn;V.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(pt=R.toneMapping);let dt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ei=dt!==void 0?dt.length:0,Te=Oe.get(V),li=S.state.lights;if(Ot===!0&&(fi===!0||A!==q)){let Tt=A===q&&V.id===G;j.setState(V,A,Tt)}let it=!1,vs=!1;V.version===Te.__version?Te.needsLights&&Te.lightsStateVersion!==li.state.version||X.isBatchedMesh&&Te.batching===!1||!X.isBatchedMesh&&Te.batching===!0||X.isBatchedMesh&&Te.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Te.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Te.instancing===!1||!X.isInstancedMesh&&Te.instancing===!0||X.isSkinnedMesh&&Te.skinning===!1||!X.isSkinnedMesh&&Te.skinning===!0||X.isInstancedMesh&&Te.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Te.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Te.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Te.instancingMorph===!1&&X.morphTexture!==null||Te.envMap!==Ee||V.fog===!0&&Te.fog!==de||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==j.numPlanes||Te.numIntersection!==j.numIntersection)||Te.vertexAlphas!==Ge||Te.vertexTangents!==Qe||Te.morphTargets!==Se||Te.morphNormals!==et||Te.morphColors!==Nt||Te.morphTargetsCount!==ei||Te.numLightProbeGrids!==wd(S.state.lightProbeGridArray)?it=!0:(Te.outputColorSpace!==he||Te.toneMapping!==pt)&&(vs=!0):(it=!0,Te.__version=V.version);let ti=Te.currentProgram;(it===!0||vs===!0)&&(ti=vs===!0?Gm(V,U,X,he,pt):Jr(V,U,X),N&&V.isNodeMaterial&&N.onUpdateProgram(V,ti,Te));let fo=!1,Jn=!1,Ms=!1,tt=ti.getUniforms(),Zt=Te.uniforms;if(pe.useProgram(ti.program)&&(fo=!0,Jn=!0,Ms=!0),V.id!==G&&(G=V.id,Jn=!0),fo||q!==A){pe.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),tt.setValue(k,"projectionMatrix",A.projectionMatrix),tt.setValue(k,"viewMatrix",A.matrixWorldInverse);let Vt=tt.map.cameraPosition;Vt!==void 0&&Vt.setValue(k,nn.setFromMatrixPosition(A.matrixWorld)),vt.logarithmicDepthBuffer&&tt.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&tt.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),q!==A&&(q=A,Jn=!0,Ms=!0)}if(Te.needsLights&&(li.state.sunShadowMap.length>0&&tt.setValue(k,"sunShadowMap",li.state.sunShadowMap,He),li.state.directionalShadowMap.length>0&&tt.setValue(k,"directionalShadowMap",li.state.directionalShadowMap,He),li.state.spotShadowMap.length>0&&tt.setValue(k,"spotShadowMap",li.state.spotShadowMap,He),li.state.pointShadowMap.length>0&&tt.setValue(k,"pointShadowMap",li.state.pointShadowMap,He)),X.isSkinnedMesh){tt.setOptional(k,X,"bindMatrix"),tt.setOptional(k,X,"bindMatrixInverse");let Tt=X.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),tt.setValue(k,"boneTexture",Tt.boneTexture,He))}X.isBatchedMesh&&(tt.setOptional(k,X,"batchingTexture"),tt.setValue(k,"batchingTexture",X._matricesTexture,He),tt.setOptional(k,X,"batchingIdTexture"),tt.setValue(k,"batchingIdTexture",X._indirectTexture,He),tt.setOptional(k,X,"batchingColorTexture"),X._colorsTexture!==null&&tt.setValue(k,"batchingColorTexture",X._colorsTexture,He));let Gi=K.morphAttributes;if((Gi.position!==void 0||Gi.normal!==void 0||Gi.color!==void 0)&&Q.update(X,K,ti),(Jn||Te.receiveShadow!==X.receiveShadow)&&(Te.receiveShadow=X.receiveShadow,tt.setValue(k,"receiveShadow",X.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&U.environment!==null&&(Zt.envMapIntensity.value=U.environmentIntensity),Zt.dfgLUT!==void 0&&(Zt.dfgLUT.value=Dv()),Jn){if(tt.setValue(k,"toneMappingExposure",R.toneMappingExposure),Te.needsLights&&Wm(Zt,Ms),de&&V.fog===!0&&re.refreshFogUniforms(Zt,de),re.refreshMaterialUniforms(Zt,V,xe,Ce,S.state.transmissionRenderTarget[A.id]),Te.needsLights&&Te.numLightProbeGrids>0){let Tt=v,Vt=0;for(let Mn of S.state.lightProbeGridArray)Mn.texture!==null&&(Tt.textures[Vt]=Mn.texture,Tt.min[Vt]=Mn.boundingBox.min,Tt.max[Vt]=Mn.boundingBox.max,Tt.resolution[Vt]=Mn.resolution,Vt++);for(let Mn in Tt)Tt[Mn].length=Vt;Zt.probesSH.value=Tt.textures,Zt.probesMin.value=Tt.min,Zt.probesMax.value=Tt.max,Zt.probesResolution.value=Tt.resolution}zr.upload(k,Ad(Te),Zt,He)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(zr.upload(k,Ad(Te),Zt,He),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&tt.setValue(k,"center",X.center),tt.setValue(k,"modelViewMatrix",X.modelViewMatrix),tt.setValue(k,"normalMatrix",X.normalMatrix),tt.setValue(k,"modelMatrix",X.matrixWorld),V.uniformsGroups!==void 0){let Tt=V.uniformsGroups;for(let Vt=0,Mn=Tt.length;Vt<Mn;Vt++){let Id=Tt[Vt];Ie.update(Id,ti),Ie.bind(Id,ti)}}return ti}function Wm(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.sunLights.needsUpdate=U,A.sunLightShadows.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function Xm(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(A,U,K){let V=Oe.get(A);V.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Oe.get(A.texture).__webglTexture=U,Oe.get(A.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:K,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,U){let K=Oe.get(A);K.__webglFramebuffer=U,K.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(A,U=0,K=0){Y=A,H=U,F=K;let V=null,X=!1,de=!1;if(A){let he=Oe.get(A);if(he.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(k.FRAMEBUFFER,he.__webglFramebuffer),te.copy(A.viewport),fe.copy(A.scissor),we=A.scissorTest,pe.viewport(te),pe.scissor(fe),pe.setScissorTest(we),G=-1;return}else if(he.__webglFramebuffer===void 0)He.setupRenderTarget(A);else if(he.__hasExternalTextures)He.rebindTextures(A,Oe.get(A.texture).__webglTexture,Oe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Ge=A.depthTexture;if(he.__boundDepthTexture!==Ge){if(Ge!==null&&Oe.has(Ge)&&(A.width!==Ge.image.width||A.height!==Ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");He.setupDepthRenderbuffer(A)}}let ye=A.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(de=!0);let Ee=Oe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ee[U])?V=Ee[U][K]:V=Ee[U],X=!0):A.samples>0&&He.useMultisampledRTT(A)===!1?V=Oe.get(A).__webglMultisampledFramebuffer:Array.isArray(Ee)?V=Ee[K]:V=Ee,te.copy(A.viewport),fe.copy(A.scissor),we=A.scissorTest}else te.copy(Fe).multiplyScalar(xe).floor(),fe.copy(ot).multiplyScalar(xe).floor(),we=ut;if(K!==0&&(V=B),pe.bindFramebuffer(k.FRAMEBUFFER,V)&&pe.drawBuffers(A,V),pe.viewport(te),pe.scissor(fe),pe.setScissorTest(we),X){let he=Oe.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+U,he.__webglTexture,K)}else if(de){let he=U;for(let ye=0;ye<A.textures.length;ye++){let Ee=Oe.get(A.textures[ye]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+ye,Ee.__webglTexture,K,he)}}else if(A!==null&&K!==0){let he=Oe.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,he.__webglTexture,K)}G=-1};function Cd(A){let U=Oe.get(A);return(U.__readFormat!==A.format||U.__readType!==A.type)&&(U.__readFormat=A.format,U.__readType=A.type,U.__formatReadable=vt.textureFormatReadable(A.format),U.__typeReadable=vt.textureTypeReadable(A.type)),U}this.readRenderTargetPixels=function(A,U,K,V,X,de,Me,he=0){if(!(A&&A.isWebGLRenderTarget)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(ye=ye[Me],Array.isArray(ye)&&(ye=ye[0])),ye){pe.bindFramebuffer(k.FRAMEBUFFER,ye);try{let Ee=A.textures[he],Ge=Ee.format,Qe=Ee.type;A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+he);let Se=Cd(Ee);if(Se.__formatReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Se.__typeReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=A.width-V&&K>=0&&K<=A.height-X&&k.readPixels(U,K,V,X,se.convert(Ge),se.convert(Qe),de)}finally{let Ee=Y!==null?Oe.get(Y).__webglFramebuffer:null;pe.bindFramebuffer(k.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(A,U,K,V,X,de,Me,he=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(ye=ye[Me],Array.isArray(ye)&&(ye=ye[0])),ye)if(U>=0&&U<=A.width-V&&K>=0&&K<=A.height-X){pe.bindFramebuffer(k.FRAMEBUFFER,ye);let Ee=A.textures[he],Ge=Ee.format,Qe=Ee.type;A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+he);let Se=Cd(Ee);if(Se.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Se.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let et=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,et),k.bufferData(k.PIXEL_PACK_BUFFER,de.byteLength,k.STREAM_READ),k.readPixels(U,K,V,X,se.convert(Ge),se.convert(Qe),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let Nt=Y!==null?Oe.get(Y).__webglFramebuffer:null;pe.bindFramebuffer(k.FRAMEBUFFER,Nt);let pt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await ip(k,pt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,et),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,de),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(et),k.deleteSync(pt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,U=null,K=0){let V=Math.pow(2,-K),X=Math.floor(A.image.width*V),de=Math.floor(A.image.height*V),Me=U!==null?U.x:0,he=U!==null?U.y:0;He.setTexture2D(A,0),k.copyTexSubImage2D(k.TEXTURE_2D,K,0,0,Me,he,X,de),pe.unbindTexture()},this.copyTextureToTexture=function(A,U,K=null,V=null,X=0,de=0){let Me,he,ye,Ee,Ge,Qe,Se,et,Nt,pt=A.isCompressedTexture?A.mipmaps[de]:A.image;if(K!==null)Me=K.max.x-K.min.x,he=K.max.y-K.min.y,ye=K.isBox3?K.max.z-K.min.z:1,Ee=K.min.x,Ge=K.min.y,Qe=K.isBox3?K.min.z:0;else{let tt=Math.pow(2,-X);Me=Math.floor(pt.width*tt),he=Math.floor(pt.height*tt),A.isDataArrayTexture?ye=pt.depth:A.isData3DTexture?ye=Math.floor(pt.depth*tt):ye=1,Ee=0,Ge=0,Qe=0}V!==null?(Se=V.x,et=V.y,Nt=V.z):(Se=0,et=0,Nt=0);let dt=se.convert(U.format),ei=se.convert(U.type),Te;U.isData3DTexture?(He.setTexture3D(U,0),Te=k.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(He.setTexture2DArray(U,0),Te=k.TEXTURE_2D_ARRAY):(He.setTexture2D(U,0),Te=k.TEXTURE_2D),pe.activeTexture(k.TEXTURE0),pe.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,U.flipY),pe.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),pe.pixelStorei(k.UNPACK_ALIGNMENT,U.unpackAlignment);let li=pe.getParameter(k.UNPACK_ROW_LENGTH),it=pe.getParameter(k.UNPACK_IMAGE_HEIGHT),vs=pe.getParameter(k.UNPACK_SKIP_PIXELS),ti=pe.getParameter(k.UNPACK_SKIP_ROWS),fo=pe.getParameter(k.UNPACK_SKIP_IMAGES);pe.pixelStorei(k.UNPACK_ROW_LENGTH,pt.width),pe.pixelStorei(k.UNPACK_IMAGE_HEIGHT,pt.height),pe.pixelStorei(k.UNPACK_SKIP_PIXELS,Ee),pe.pixelStorei(k.UNPACK_SKIP_ROWS,Ge),pe.pixelStorei(k.UNPACK_SKIP_IMAGES,Qe);let Jn=A.isDataArrayTexture||A.isData3DTexture,Ms=U.isDataArrayTexture||U.isData3DTexture;if(A.isDepthTexture){let tt=Oe.get(A),Zt=Oe.get(U),Gi=Oe.get(tt.__renderTarget),Tt=Oe.get(Zt.__renderTarget);pe.bindFramebuffer(k.READ_FRAMEBUFFER,Gi.__webglFramebuffer),pe.bindFramebuffer(k.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Vt=0;Vt<ye;Vt++)Jn&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Oe.get(A).__webglTexture,X,Qe+Vt),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Oe.get(U).__webglTexture,de,Nt+Vt)),k.blitFramebuffer(Ee,Ge,Ee+Me,Ge+he,Se,et,Se+Me,et+he,k.DEPTH_BUFFER_BIT,k.NEAREST);pe.bindFramebuffer(k.READ_FRAMEBUFFER,null),pe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(X!==0||A.isRenderTargetTexture||Oe.has(A)){let tt=Oe.get(A),Zt=Oe.get(U);pe.bindFramebuffer(k.READ_FRAMEBUFFER,P),pe.bindFramebuffer(k.DRAW_FRAMEBUFFER,z);for(let Gi=0;Gi<ye;Gi++)Jn?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,tt.__webglTexture,X,Qe+Gi):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,tt.__webglTexture,X),Ms?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Zt.__webglTexture,de,Nt+Gi):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Zt.__webglTexture,de),X!==0?k.blitFramebuffer(Ee,Ge,Ee+Me,Ge+he,Se,et,Se+Me,et+he,k.COLOR_BUFFER_BIT,k.NEAREST):Ms?k.copyTexSubImage3D(Te,de,Se,et,Nt+Gi,Ee,Ge,Me,he):k.copyTexSubImage2D(Te,de,Se,et,Ee,Ge,Me,he);pe.bindFramebuffer(k.READ_FRAMEBUFFER,null),pe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Ms?A.isDataTexture||A.isData3DTexture?k.texSubImage3D(Te,de,Se,et,Nt,Me,he,ye,dt,ei,pt.data):U.isCompressedArrayTexture?k.compressedTexSubImage3D(Te,de,Se,et,Nt,Me,he,ye,dt,pt.data):k.texSubImage3D(Te,de,Se,et,Nt,Me,he,ye,dt,ei,pt):A.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,de,Se,et,Me,he,dt,ei,pt.data):A.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,de,Se,et,pt.width,pt.height,dt,pt.data):k.texSubImage2D(k.TEXTURE_2D,de,Se,et,Me,he,dt,ei,pt);pe.pixelStorei(k.UNPACK_ROW_LENGTH,li),pe.pixelStorei(k.UNPACK_IMAGE_HEIGHT,it),pe.pixelStorei(k.UNPACK_SKIP_PIXELS,vs),pe.pixelStorei(k.UNPACK_SKIP_ROWS,ti),pe.pixelStorei(k.UNPACK_SKIP_IMAGES,fo),de===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&k.generateMipmap(Te),pe.unbindTexture()},this.initRenderTarget=function(A){Oe.get(A).__webglFramebuffer===void 0&&He.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?He.setTextureCube(A,0):A.isData3DTexture?He.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?He.setTexture2DArray(A,0):He.setTexture2D(A,0),pe.unbindTexture()},this.resetState=function(){H=0,F=0,Y=null,pe.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}};var hc=class extends Pn{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new wt;e.deleteAttribute("uv");let t=new Pt({side:jt}),i=new Pt,n=new di(16777215,900,28,2);n.position.set(.418,16.199,.3),this.add(n);let r=new ke(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Ki(e,i,6),o=new ft;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new ke(e,Hr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new ke(e,Hr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new ke(e,Hr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new ke(e,Hr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new ke(e,Hr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new ke(e,Hr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Hr(s){return new ri({color:0,emissive:16777215,emissiveIntensity:s})}function Gr(s,e=!1){let t=s[0].index!==null,i=new Set(Object.keys(s[0].attributes)),n=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new at;l.morphTargetsRelative=o;let c=0;for(let h=0;h<s.length;++h){let u=s[h],d=0,f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in u.attributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(u.attributes[m]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in u.morphAttributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[m].length!==s[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;a[m]===void 0&&(a[m]=[]),a[m].push(u.morphAttributes[m]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let m;if(t)m=u.index.count;else if(u.attributes.position!==void 0)m=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,h),c+=m}}if(t){let h=0,u=[];for(let d=0;d<s.length;++d){let f=s[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Hp(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][d]);let m=Hp(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function Hp(s){let e,t,i,n=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new nt(a,t,i),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<t;m++){let x=h.getComponent(d,m);o.setComponent(d+u,m,x)}}else a.set(h.array,l);l+=h.count*t}return n!==void 0&&(o.gpuType=n),o}function xu(s,e){if(e===Yh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Fr||e===Ya){let t=s.getIndex();if(t===null){let r=[],a=s.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let i=t.count-2,n=[];if(e===Fr)for(let r=1;r<=i;r++)n.push(t.getX(0)),n.push(t.getX(r)),n.push(t.getX(r+1));else for(let r=0;r<i;r++)r%2===0?(n.push(t.getX(r)),n.push(t.getX(r+1)),n.push(t.getX(r+2))):(n.push(t.getX(r+2)),n.push(t.getX(r+1)),n.push(t.getX(r)));return n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(n),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function Qa(s){let e=new Map,t=new Map,i=s.clone();return Gp(s,i,function(n,r){e.set(r,n),t.set(n,r)}),i.traverse(function(n){if(!n.isSkinnedMesh)return;let r=n,a=e.get(n),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),i}function Gp(s,e,t){t(s,e);for(let i=0;i<s.children.length;i++)Gp(s.children[i],e.children[i],t)}var uc=class extends un{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Tu(t)}),this.register(function(t){return new Eu(t)}),this.register(function(t){return new wu(t)}),this.register(function(t){return new Ou(t)}),this.register(function(t){return new Uu(t)}),this.register(function(t){return new Fu(t)}),this.register(function(t){return new Ru(t)}),this.register(function(t){return new Cu(t)}),this.register(function(t){return new Iu(t)}),this.register(function(t){return new Pu(t)}),this.register(function(t){return new Su(t)}),this.register(function(t){return new Lu(t)}),this.register(function(t){return new Au(t)}),this.register(function(t){return new Du(t)}),this.register(function(t){return new Nu(t)}),this.register(function(t){return new Mu(t)}),this.register(function(t){return new dc(t,$e.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new dc(t,$e.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new zu(t)})}load(e,t,i,n){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Gn.extractUrlBase(e);a=Gn.resolveURL(c,this.path)}else a=Gn.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){n?n(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Rr(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Yp){try{a[$e.KHR_BINARY_GLTF]=new ku(e)}catch(u){n&&n(u);return}r=JSON.parse(a[$e.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new qu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case $e.KHR_MATERIALS_UNLIT:a[u]=new bu;break;case $e.KHR_DRACO_MESH_COMPRESSION:a[u]=new Bu(r,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:a[u]=new Hu;break;case $e.KHR_MESH_QUANTIZATION:a[u]=new Gu;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,n)}parseAsync(e,t){let i=this;return new Promise(function(n,r){i.parse(e,t,n,r)})}};function Uv(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function Et(s,e,t){let i=s.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}var $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Mu=class{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,n=t.cache.get(i);if(n)return n;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new be(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],hi);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Zi(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new di(h),c.distance=u;break;case"spot":c=new Os(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),gn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),n=Promise.resolve(c),t.cache.add(i,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}},bu=class{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return st}extendParams(e,t,i){let n=[];e.color=new be(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],hi),e.opacity=a[3]}r.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",r.baseColorTexture,Rt))}return Promise.all(n)}},Su=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=Et(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}},Tu=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Et(this.parser,e,this.name)!==null?ui:null}extendMaterialParams(e,t){let i=Et(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&n.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&n.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(n.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){let r=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new De(r,r)}return Promise.all(n)}},Eu=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Et(this.parser,e,this.name)!==null?ui:null}extendMaterialParams(e,t){let i=Et(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return t.diffuseRoughness=i.diffuseRoughnessFactor!==void 0?i.diffuseRoughnessFactor:0,i.diffuseRoughnessTexture!==void 0&&n.push(this.parser.assignTexture(t,"diffuseRoughnessMap",i.diffuseRoughnessTexture)),Promise.all(n)}},wu=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Et(this.parser,e,this.name)!==null?ui:null}extendMaterialParams(e,t){let i=Et(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}},Au=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Et(this.parser,e,this.name)!==null?ui:null}extendMaterialParams(e,t){let i=Et(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&n.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&n.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(n)}},Ru=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){return Et(this.parser,e,this.name)!==null?ui:null}extendMaterialParams(e,t){let i=Et(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(t.sheenColor=new be(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){let r=i.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],hi)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&n.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,Rt)),i.sheenRoughnessTexture!==void 0&&n.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(n)}},Cu=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Et(this.parser,e,this.name)!==null?ui:null}extendMaterialParams(e,t){let i=Et(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&n.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(n)}},Iu=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){return Et(this.parser,e,this.name)!==null?ui:null}extendMaterialParams(e,t){let i=Et(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&n.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;let r=i.attenuationColor||[1,1,1];return t.attenuationColor=new be().setRGB(r[0],r[1],r[2],hi),Promise.all(n)}},Pu=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){return Et(this.parser,e,this.name)!==null?ui:null}extendMaterialParams(e,t){let i=Et(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Lu=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Et(this.parser,e,this.name)!==null?ui:null}extendMaterialParams(e,t){let i=Et(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&n.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));let r=i.specularColorFactor||[1,1,1];return t.specularColor=new be().setRGB(r[0],r[1],r[2],hi),i.specularColorTexture!==void 0&&n.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,Rt)),Promise.all(n)}},Nu=class{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){return Et(this.parser,e,this.name)!==null?ui:null}extendMaterialParams(e,t){let i=Et(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&n.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(n)}},Du=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Et(this.parser,e,this.name)!==null?ui:null}extendMaterialParams(e,t){let i=Et(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&n.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(n)}},Ou=class{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;let r=n.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Uu=class{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=n.images[a.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}},Fu=class{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=n.images[a.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}},dc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let n=i.extensions[this.name],r=this.parser.getDependency("buffer",n.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=n.byteOffset||0,c=n.byteLength||0,h=n.count,u=n.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,n.mode,n.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,n.mode,n.filter),f})})}else return null}},zu=class{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let n=t.meshes[i.mesh];for(let c of n.primitives)if(c.mode!==ki.TRIANGLES&&c.mode!==ki.TRIANGLE_STRIP&&c.mode!==ki.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=i.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let m of u){let x=new Pe,p=new I,g=new gt,_=new I(1,1,1),M=new Ki(m.geometry,m.material,d);for(let b=0;b<d;b++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,b),l.SCALE&&_.fromBufferAttribute(l.SCALE,b),M.setMatrixAt(b,x.compose(p,g,_));let v=null;for(let b in l)if(b==="_COLOR_0"){let S=l[b];M.instanceColor=new Ln(S.array,S.itemSize,S.normalized)}else if(b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"){if(v===null){let y=M.geometry;v=new at,v.name=y.name;for(let E in y.attributes)v.setAttribute(E,y.attributes[E]);for(let E in y.morphAttributes)v.morphAttributes[E]=y.morphAttributes[E];y.index!==null&&v.setIndex(y.index),v.morphTargetsRelative=y.morphTargetsRelative;for(let E of y.groups)v.addGroup(E.start,E.count,E.materialIndex);y.boundingBox!==null&&(v.boundingBox=y.boundingBox.clone()),y.boundingSphere!==null&&(v.boundingSphere=y.boundingSphere.clone()),v.drawRange.start=y.drawRange.start,v.drawRange.count=y.drawRange.count,v.userData=Object.assign({},y.userData),M.geometry=v}let S=l[b];v.setAttribute(b,new Ln(S.array,S.itemSize,S.normalized))}ft.prototype.copy.call(M,m),this.parser.assignFinalMaterial(M),f.push(M)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Yp="glTF",eo=12,Vp={JSON:1313821514,BIN:5130562},ku=class{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,eo),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Yp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let n=this.header.length-eo,r=new DataView(e,eo),a=0;for(;a<n;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Vp.JSON){let c=new Uint8Array(e,eo+a,o);this.content=i.decode(c)}else if(l===Vp.BIN){let c=eo+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Bu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,n=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=Wu[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Wu[h]||h.toLowerCase();if(a[h]!==void 0){let d=i.accessors[e.attributes[h]],f=Vr[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){n.decodeDracoFile(h,function(f){for(let m in f.attributes){let x=f.attributes[m],p=l[m];p!==void 0&&(x.normalized=p)}u(f)},o,c,hi,d)})})}},Hu=class{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let i=Math.cos(e.rotation),n=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*n,e.offset.x,-e.repeat.x*n,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Gu=class{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}},fc=class extends hn{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n*3+n;for(let a=0;a!==n;a++)t[a]=i[r+a];return t}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=n-t,u=(i-t)/h,d=u*u,f=d*u,m=e*c,x=m-c,p=-2*f+3*d,g=f-d,_=1-p,M=g-d+u;for(let v=0;v!==o;v++){let b=a[x+v+o],S=a[x+v+l]*h,y=a[m+v+o],E=a[m+v]*h;r[v]=_*b+M*S+p*y+g*E}return r}},Fv=new gt,Vu=class extends fc{interpolate_(e,t,i,n){let r=super.interpolate_(e,t,i,n);return Fv.fromArray(r).normalize().toArray(r),r}},ki={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Vr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Wp={9728:It,9729:Ft,9984:yl,9985:Or,9986:Hs,9987:Ui},Xp={33071:Ni,33648:gr,10497:an},yu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Wu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},hs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},zv={CUBICSPLINE:void 0,LINEAR:Is,STEP:Cs},_u={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function kv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Pt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Oi})),s.DefaultMaterial}function Ws(s,e,t){for(let i in t.extensions)s[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function gn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Bv(s,e,t){let i=!1,n=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(n=!0),u.COLOR_0!==void 0&&(r=!0),i&&n&&r)break}if(!i&&!n&&!r)return Promise.resolve(s);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(i){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(n){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return i&&(s.morphAttributes.position=h),n&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function Hv(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++)s.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Gv(s){let e,t=s.extensions&&s.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+vu(t.attributes):e=s.indices+":"+vu(s.attributes)+":"+s.mode,s.targets!==void 0)for(let i=0,n=s.targets.length;i<n;i++)e+=":"+vu(s.targets[i]);return e}function vu(s){let e="",t=Object.keys(s).sort();for(let i=0,n=t.length;i<n;i++)e+=t[i]+":"+s[t[i]]+";";return e}function Xu(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Vv(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Wv=new Pe,qu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Uv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);n=i&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&n<17||r&&a<98?(this.textureLoader=new Oa(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new za(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Rr(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,n=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){let o={scene:a[0][n.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:n.asset,parser:i,userData:{}};return Ws(r,o,n),gn(o,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){let a=t[n].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let n=0,r=e.length;n<r;n++){let a=e[n];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let n=i.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let n=e(t[i]);if(n)return n}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let n=0;n<t.length;n++){let r=e(t[n]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":n=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(r,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);let n=this.options;return new Promise(function(r,a){i.load(Gn.resolveURL(t.uri,n.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let n=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+n)})}loadAccessor(e){let t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){let a=yu[n.type],o=Vr[n.componentType],l=n.normalized===!0,c=new o(n.count*a);return Promise.resolve(new nt(c,a,l))}let r=[];return n.bufferView!==void 0?r.push(this.getDependency("bufferView",n.bufferView)):r.push(null),n.sparse!==void 0&&(r.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=yu[n.type],c=Vr[n.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=n.byteOffset||0,f=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,m=n.normalized===!0,x,p;if(f&&f!==u){let g=Math.floor(d/f),_="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+g+":"+n.count,M=t.cache.get(_);M||(x=new c(o,g*f,n.count*f/h),M=new Ls(x,f/h),t.cache.add(_,M)),p=new ss(M,l,d%f/h,m)}else o===null?x=new c(n.count*l):x=new c(o,d,n.count*l),p=new nt(x,l,m);if(n.sparse!==void 0){let g=yu.SCALAR,_=Vr[n.sparse.indices.componentType],M=n.sparse.indices.byteOffset||0,v=n.sparse.values.byteOffset||0,b=new _(a[1],M,n.sparse.count*g),S=new c(a[2],v,n.sparse.count*l);o!==null&&(p=new nt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let y=0,E=b.length;y<E;y++){let L=b[y];if(p.setX(L,S[y*l]),l>=2&&p.setY(L,S[y*l+1]),l>=3&&p.setZ(L,S[y*l+2]),l>=4&&p.setW(L,S[y*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=m}return p})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,i){let n=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Wp[d.magFilter]||Ft,h.minFilter=Wp[d.minFilter]||Ui,h.wrapS=Xp[d.wrapS]||an,h.wrapT=Xp[d.wrapT]||an,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==It&&h.minFilter!==Ft,n.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,n=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=n.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)h=i.getDependency("bufferView",a.bufferView).then(function(d){return new Promise(function(f,m){t.parse(d,f,m)})});else{if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(d){c=!0;let f=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(l).then(function(d){return new Promise(function(f,m){let x=f;t.isImageBitmapLoader===!0&&(x=function(p){let g=new zt(p);g.needsUpdate=!0,f(g)}),t.load(Gn.resolveURL(d,r.path),x,void 0,m)})})}let u=h.then(function(d){return c===!0&&o.revokeObjectURL(l),gn(d,a),d.userData.mimeType=a.mimeType||Vv(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,i,n){let r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),r.extensions[$e.KHR_TEXTURE_TRANSFORM]){let o=i.extensions!==void 0?i.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return n!==void 0&&(a.colorSpace=n),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,i=e.material,n=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new ln,si.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){let o="LineBasicMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new Er,si.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(n||r||a){let o="ClonedMaterial:"+i.uuid+":";n&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Pt}loadMaterial(e){let t=this,i=this.json,n=this.extensions,r=i.materials[e],a,o={},l=r.extensions||{},c=[];if(l[$e.KHR_MATERIALS_UNLIT]){let u=n[$e.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new be(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],hi),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Rt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=qt);let h=r.alphaMode||_u.OPAQUE;if(h===_u.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===_u.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==st&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new De(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==st&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==st){let u=r.emissiveFactor;o.emissive=new be().setRGB(u[0],u[1],u[2],hi)}return r.emissiveTexture!==void 0&&a!==st&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Rt)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),gn(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ws(n,u,r),u})}createUniqueName(e){let t=ht.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,n=this.primitiveCache;function r(o){return i[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return qp(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=Gv(c),u=n[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=qp(new at,c,t),c.mode===ki.TRIANGLE_STRIP?d=d.then(f=>xu(f,Ya)):c.mode===ki.TRIANGLE_FAN&&(d=d.then(f=>xu(f,Fr))),n[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,i=this.json,n=this.extensions,r=i.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?kv(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,m=h.length;f<m;f++){let x=h[f],p=a[f],g,_=c[f];if(p.mode===ki.TRIANGLES||p.mode===ki.TRIANGLE_STRIP||p.mode===ki.TRIANGLE_FAN||p.mode===void 0){let M=r.isSkinnedMesh===!0,v=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");M&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=M&&v?new Ma(x,_):new ke(x,_),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(p.mode===ki.LINES)g=new Sa(x,_);else if(p.mode===ki.LINE_STRIP)g=new Ds(x,_);else if(p.mode===ki.LINE_LOOP)g=new Ta(x,_);else if(p.mode===ki.POINTS)g=new Nn(x,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(g.geometry.morphAttributes).length>0&&Hv(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),gn(g,r),p.extensions&&Ws(n,g,p),t.assignFinalMaterial(g),u.push(g)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Ws(n,u[0],r),u[0];let d=new Mt;r.extensions&&Ws(n,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t,i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Ct(Ti.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new Us(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),gn(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let n=0,r=t.joints.length;n<r;n++)i.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){let r=n.pop(),a=n,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new Pe;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ba(o,l)})}loadAnimation(e){let t=this.json,i=this,n=t.animations[e],r=n.name?n.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=n.channels.length;u<d;u++){let f=n.channels[u],m=n.samplers[f.sampler],x=f.target,p=x.node,g=n.parameters!==void 0?n.parameters[m.input]:m.input,_=n.parameters!==void 0?n.parameters[m.output]:m.output;x.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",_)),c.push(m),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],m=u[2],x=u[3],p=u[4],g=[];for(let M=0,v=d.length;M<v;M++){let b=d[M],S=f[M],y=m[M],E=x[M],L=p[M];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();let R=i._createAnimationTracks(b,S,y,E,L);if(R)for(let D=0;D<R.length;D++)g.push(R[D])}let _=new Hn(r,void 0,g);return gn(_,n),_})}createNodeMesh(e){let t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(r){let a=i._getNodeRef(i.meshCache,n.mesh,r);return n.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=n.weights.length;l<c;l++)o.morphTargetInfluences[l]=n.weights[l]}),a})}loadNode(e){let t=this.json,i=this,n=t.nodes[e],r=i._loadNodeShallow(e),a=[],o=n.children||[];for(let c=0,h=o.length;c<h;c++)a.push(i.getDependency("node",o[c]));let l=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Wv)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,m=u[0];h.pivot=new I().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],m.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?n.createUniqueName(r.name):"",o=[],l=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(n.getDependency("camera",r.camera).then(function(c){return n._getNodeRef(n.cameraCache,r.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Sr:c.length>1?h=new Mt:c.length===1?h=c[0]:h=new ft,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),gn(h,r),r.extensions&&Ws(i,h,r),r.matrix!==void 0){let u=new Pe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!n.associations.has(h))n.associations.set(h,{});else if(r.mesh!==void 0&&n.meshCache.refs[r.mesh]>1){let u=n.associations.get(h);n.associations.set(h,{...u})}return n.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],n=this,r=new Mt;i.name&&(r.name=n.createUniqueName(i.name)),gn(r,i),i.extensions&&Ws(t,r,i);let a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(n.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){let d=l[h];d.parent!==null?r.add(Qa(d)):r.add(d)}let c=h=>{let u=new Map;for(let[d,f]of n.associations)(d instanceof si||d instanceof zt)&&u.set(d,f);return h.traverse(d=>{let f=n.associations.get(d);f!=null&&u.set(d,f)}),u};return n.associations=c(r),r})}_createAnimationTracks(e,t,i,n,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}hs[r.path]===hs.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(hs[r.path]){case hs.weights:h=zn;break;case hs.rotation:h=kn;break;case hs.translation:case hs.scale:h=as;break;default:switch(i.itemSize){case 1:h=zn;break;case 2:case 3:default:h=as;break}break}let u=n.interpolation!==void 0?zv[n.interpolation]:Is,d=this._getArrayFromAccessor(i);for(let f=0,m=l.length;f<m;f++){let x=new h(l[f]+"."+hs[r.path],t.array,d,u);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),a.push(x)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=Xu(t.constructor),n=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)n[r]=t[r]*i;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let n=this instanceof kn?Vu:fc;return new n(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Xv(s,e,t){let i=e.attributes,n=new Jt;if(i.POSITION!==void 0){let o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(n.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),o.normalized){let h=Xu(Vr[o.componentType]);n.min.multiplyScalar(h),n.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new I,l=new I;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let x=Xu(Vr[d.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(o)}s.boundingBox=n;let a=new Xt;n.getCenter(a.center),a.radius=n.min.distanceTo(n.max)/2,s.boundingSphere=a}function qp(s,e,t){let i=e.attributes,n=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(let a in i){let o=Wu[a]||a.toLowerCase();o in s.attributes||n.push(r(i[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});n.push(a)}return Ye.workingColorSpace!==hi&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ye.workingColorSpace}" not supported.`),gn(s,e),Xv(s,e,t),Promise.all(n).then(function(){return e.targets!==void 0?Bv(s,e.targets,t):s})}var At={models:{},clips:{},parts:{},ready:!1},qv={Black:{c:1513755,m:.35,r:.55},DarkMetal:{c:2764081,m:.85,r:.42},Metal:{c:6317419,m:.9,r:.35},LightMetal:{c:10133670,m:.95,r:.25},LightMetal2:{c:8291466,m:.95,r:.3},DarkWood:{c:5978399,m:0,r:.62},Wood:{c:7227430,m:0,r:.6},Glass:{c:791576,m:.9,r:.08},Main:{c:1842720,m:.3,r:.6},Green:{c:3950128,m:.1,r:.7},DarkGreen:{c:2897188,m:.1,r:.7}};function Yv(s){s.traverse(e=>{if(!e.isMesh)return;e.castShadow=!0;let t=i=>{let n=qv[i.name];return n?(i.color.setHex(n.c),i.metalness=n.m,i.roughness=n.r):(i.metalness=Math.min(i.metalness,.3),i.roughness=Math.max(i.roughness,.6)),i};e.material=Array.isArray(e.material)?e.material.map(t):t(e.material)})}function Kv(s,e){e.updateMatrixWorld(!0);let t=[],i=new Jt;e.traverse(n=>{if(!n.isMesh)return;let r=n.geometry.clone().applyMatrix4(n.matrixWorld),a=n.material,o=/Lea|Grass/.test(a.name);r.computeBoundingBox(),i.union(r.boundingBox);let l=new ri({map:a.map,color:a.map?16777215:a.color,alphaTest:o?.45:0,side:o?qt:Oi});/Light/.test(a.name)&&(l.emissive=new be(a.name==="BrakeLight"?3145728:0)),t.push({geo:r,mat:l,leaf:o})}),At.parts[s]={parts:t,box:i}}function $v(s){let e=atob(s),t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t.buffer}async function Kp(s=()=>{}){let e=window.SP_ASSETS||{},t=Object.keys(e),i=new uc,n=0;for(let r of t){let a=await new Promise((o,l)=>i.parse($v(e[r]),"",o,l));if(r==="soldier")for(let o of a.animations)At.clips[o.name]=o;else r.startsWith("prop_")?Kv(r.slice(5),a.scene):Yv(a.scene);At.models[r]=a.scene,s(++n/t.length)}At.ready=!0}var Zv={ak:{s:.162,grip:[.02,.05],muzzle:[3.85,.58],sight:.9,rail:[.7,.8],hand:[1.95,.42],eject:[.9,.66],mag:[1.15,0]},sniper:{s:.165,grip:[.3,.05],muzzle:[5.3,.36],sight:.65,hand:[2,.16],eject:[.6,.45],scope:[.02,.65],mag:[.85,.08]},m4:{s:.162,grip:[.1,.05],muzzle:[3.6,.65],sight:1.05,rail:[.2,.93],hand:[1.8,.5],eject:[.65,.68],mag:[.92,.1]},dmr:{s:.15,grip:[.25,-.1],muzzle:[5.2,.22],sight:.5,hand:[1.9,.05],eject:[.6,.25],scope:[-.22,.5],mag:[.75,-.02]},shotgun:{s:.175,grip:[.15,0],muzzle:[3.8,.24],sight:.37,rail:[.8,.33],hand:[2.2,-.04],eject:[.9,.2],mag:[1.05,0]},smg:{s:.16,grip:[-.05,0],muzzle:[2.25,.55],sight:.78,rail:[.7,.72],hand:[1.45,.38],eject:[.6,.5],mag:[.87,.02]},pistol:{s:.11,grip:[0,.1],muzzle:[1.45,.42],sight:.56,hand:[.05,.02],eject:[.5,.5],mag:[0,-.12]},carbine:{s:.162,grip:[.15,.1],muzzle:[3.25,.62],sight:.9,hand:[2,.5],eject:[.9,.66]}};function pc(s){let e=Zv[s],t=new Mt,i=At.models["gun_"+s].clone(!0);return i.scale.setScalar(e.s),i.rotation.y=Math.PI/2,i.position.set(0,-e.grip[1]*e.s,e.grip[0]*e.s),t.add(i),t.model=i,t.def=e,t.pt=(n,r=0)=>new I(r*e.s,(n[1]-e.grip[1])*e.s,-(n[0]-e.grip[0])*e.s),t.muzzle=t.pt(e.muzzle),t}var Re=(s=1,e)=>e===void 0?Math.random()*s:s+Math.random()*(e-s);function ju(s){let e=s>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Yu={};function $p(s){if(Yu[s])return Yu[s];let e=128,t=document.createElement("canvas");t.width=t.height=e;let i=t.getContext("2d"),n=ju(s.length*977+13);if(s==="fence"){i.clearRect(0,0,e,e),i.strokeStyle="#c8ccd0",i.lineWidth=3;for(let a=-e;a<e*2;a+=16)i.beginPath(),i.moveTo(a,0),i.lineTo(a+e,e),i.stroke(),i.beginPath(),i.moveTo(a+e,0),i.lineTo(a,e),i.stroke()}else{let a=i.createImageData(e,e);for(let o=0;o<e;o++)for(let l=0;l<e;l++){let c;s==="grass"?c=140+n()*115:s==="dirt"?c=165+n()*80:s==="concrete"?c=195+n()*45:s==="metal"?c=180+Math.sin(l/e*Math.PI*16)*42+n()*22:s==="wood"?c=170+Math.sin(o/e*Math.PI*12+Math.sin(l*.08)*1.5)*35+n()*35:c=235+n()*20;let h=(o*e+l)*4;a.data[h]=a.data[h+1]=a.data[h+2]=c,a.data[h+3]=255}if(i.putImageData(a,0,0),s==="grass"||s==="dirt"||s==="concrete")for(let o=0;o<26;o++)i.fillStyle=`rgba(0,0,0,${.05+n()*.1})`,i.beginPath(),i.arc(n()*e,n()*e,4+n()*14,0,7),i.fill();if(s==="wood"){i.fillStyle="rgba(0,0,0,.35)";for(let o=0;o<4;o++)i.fillRect(0,o*32,e,2)}s==="concrete"&&(i.strokeStyle="rgba(0,0,0,.22)",i.strokeRect(.5,.5,e-1,e-1))}let r=new Dn(t);return r.wrapS=r.wrapT=an,r.colorSpace=Rt,r.anisotropy=4,Yu[s]=r}var Jv=[[[1,0,0],[0,0,-1],[0,1,0]],[[-1,0,0],[0,0,1],[0,1,0]],[[0,1,0],[1,0,0],[0,0,-1]],[[0,-1,0],[1,0,0],[0,0,1]],[[0,0,1],[1,0,0],[0,1,0]],[[0,0,-1],[-1,0,0],[0,1,0]]],jv={grass:6,dirt:5,wood:1.6,concrete:4,metal:1.3,plain:1,fence:1.1,emis:1},Zp=new gt,Jp=new pi;function Kt(s,e,t,i=0,n=0,r=0,a=1,o=a,l=a){return Jp.set(i,n,r),Zp.setFromEuler(Jp),new Pe().compose(new I(s,e,t),Zp,new I(a,o,l))}var $u=class{constructor(){this.b={},this.col=[],this.rng=ju(4242),this.inst={},this.canopy=[],this.lod={},this.lodInst={}}prop(e,t,i,n,r=0,a=1,o={}){let l=At.parts[e];if(!l)return null;let c=Array.isArray(a)?a[0]:a,h=Array.isArray(a)?a[1]:a,u=Array.isArray(a)?a[2]:a,d=o.cell||48,f=e+"|"+d+"|"+Math.floor((t+200)/d)+"|"+Math.floor((n+200)/d)+(o.shadow===!1?"|n":"");if((this.inst[f]||(this.inst[f]={name:e,shadow:o.shadow!==!1,list:[],cell:o.cell?im(t,n):null})).list.push({m:Kt(t,i,n,0,r,0,c,h,u),tint:o.tint}),o.col){let m=l.box,x=Math.abs(Math.cos(r)),p=Math.abs(Math.sin(r)),g=o.shrink??1,_=(Math.max(Math.abs(m.min.x),Math.abs(m.max.x))*c*x+Math.max(Math.abs(m.min.z),Math.abs(m.max.z))*u*p)*g,M=(Math.max(Math.abs(m.min.x),Math.abs(m.max.x))*c*p+Math.max(Math.abs(m.min.z),Math.abs(m.max.z))*u*x)*g;o.mat||(o={...o,mat:/container|barrel|truck|pipes|tower|street|wheels/.test(e)?"metal":/rock|cinder/.test(e)?"concrete":/barrier/.test(e)?"plastic":"wood"}),this.collider(t-_,i,n-M,t+_,i+m.max.y*h*(o.shrinkY??1),n+M,o)}return l}lodCell(e){return this.lod[e]||(this.lod[e]={x:(+e.split("|")[0]+.5)*to-200,z:(+e.split("|")[1]+.5)*to-200,full:[],lod:null,near:!0})}buf(e){return this.b[e]||(this.b[e]={p:[],n:[],u:[],c:[]})}color(e,t){let i=new be(e),n=t===0?1:1+(this.rng()-.5)*(t??.14);return[i.r*n,i.g*n,i.b*n]}box(e,t,i,n,r,a,o,l,c={}){let h=this.buf(e),u=this.color(t,c.tint),d=jv[e],f=a/2,m=o/2,x=l/2,p=Math.cos(c.rot||0),g=Math.sin(c.rot||0),_=n+m,M=this.rng()*7,v=this.rng()*7;for(let[b,S,y]of Jv){let E=B=>Math.abs(B[0])*f+Math.abs(B[1])*m+Math.abs(B[2])*x,L=E(b),R=E(S),D=E(y),N=(B,P)=>{let z=b[0]*L+S[0]*R*B+y[0]*D*P,H=b[1]*L+S[1]*R*B+y[1]*D*P,F=b[2]*L+S[2]*R*B+y[2]*D*P;h.p.push(i+z*p+F*g,_+H,r-z*g+F*p),h.n.push(b[0]*p+b[2]*g,b[1],-b[0]*g+b[2]*p),h.u.push(B*R/d+M,P*D/d+v),h.c.push(u[0],u[1],u[2])};N(-1,-1),N(1,-1),N(1,1),N(-1,-1),N(1,1),N(-1,1)}if(c.col!==!1){let b=Math.abs(p)*f+Math.abs(g)*x,S=Math.abs(g)*f+Math.abs(p)*x;this.collider(i-b,n,r-S,i+b,n+o,r+S,c.mat?c:{...c,mat:cM[e]||"concrete"})}return this}collider(e,t,i,n,r,a,o={}){this.col.push({x0:e,x1:n,y0:t,y1:r,z0:i,z1:a,solid:o.solid!==!1,sight:o.sight!==!1,bullet:o.bullet!==!1,walk:!!o.walk,nocover:!!o.nocover,mat:o.mat||"concrete"})}geo(e,t,i,n,r={}){let a=this.buf(e),o=this.color(t,r.tint);if(i.index){let d=i.toNonIndexed();i.dispose(),i=d}i.applyMatrix4(n);let l=i.attributes.position.array,c=i.attributes.normal.array,h=i.attributes.uv&&i.attributes.uv.array,u=r.uv||1;for(let d=0;d<l.length/3;d++)a.p.push(l[d*3],l[d*3+1],l[d*3+2]),a.n.push(c[d*3],c[d*3+1],c[d*3+2]),a.u.push(h?h[d*2]*u:0,h?h[d*2+1]*u:0),a.c.push(o[0],o[1],o[2]);i.dispose()}finish(e){let t=[];for(let r in this.b){let a=this.b[r],o=new at;o.setAttribute("position",new Ke(a.p,3)),o.setAttribute("normal",new Ke(a.n,3)),o.setAttribute("uv",new Ke(a.u,2)),o.setAttribute("color",new Ke(a.c,3));let l;r==="emis"?l=new st({vertexColors:!0}):r==="fence"?l=new ri({map:$p("fence"),vertexColors:!0,alphaTest:.5,side:qt}):l=new ri({map:r==="plain"?null:$p(r),vertexColors:!0});let c=new ke(o,l);c.castShadow=r!=="emis"&&r!=="fence",c.receiveShadow=r!=="emis",c.frustumCulled=!1,e.add(c),t.push(c)}let i=new be(1,1,1),n=new be;for(let r in this.inst){let a=this.inst[r];for(let o of At.parts[a.name].parts){let l=new Ki(o.geo,o.mat,a.list.length);a.list.forEach((c,h)=>{l.setMatrixAt(h,c.m),l.setColorAt(h,c.tint?n.setHex(c.tint):i)}),l.castShadow=a.shadow&&!o.leaf,l.receiveShadow=!o.leaf,l.userData.detail=/grass|fern/.test(a.name),l.computeBoundingSphere(),l.userData.shared=!0,e.add(l),t.push(l),a.cell&&this.lodCell(a.cell).full.push(l)}}for(let r in this.lodInst){let a=this.lodInst[r],o=new Ki(rM(),sM,a.length);a.forEach((l,c)=>{o.setMatrixAt(c,l.m),o.setColorAt(c,n.setHex(l.tint))}),o.castShadow=!1,o.receiveShadow=!1,o.computeBoundingSphere(),o.userData.shared=!0,e.add(o),t.push(o),r==="border"?o.userData.always=!0:(o.visible=!1,this.lodCell(r).lod=o)}if(this.canopy.length){let r=new Ki(new rs(1,1,7),new st({colorWrite:!1,depthWrite:!1}),this.canopy.length);this.canopy.forEach((a,o)=>r.setMatrixAt(o,a)),r.castShadow=!0,r.frustumCulled=!1,e.add(r),t.push(r)}return t}},Xs={rays:0,boxes:0},Yt=4;function Qv(s){let e=1/0,t=1/0,i=-1/0,n=-1/0;for(let c of s)e=Math.min(e,c.x0),t=Math.min(t,c.z0),i=Math.max(i,c.x1),n=Math.max(n,c.z1);e-=.5,t-=.5,i+=.5,n+=.5;let r=Math.ceil((i-e)/Yt),a=Math.ceil((n-t)/Yt),o=Array.from({length:r*a},()=>[]);s.forEach((c,h)=>{let u=Math.max(0,Math.floor((c.x0-.01-e)/Yt)),d=Math.min(r-1,Math.floor((c.x1+.01-e)/Yt)),f=Math.max(0,Math.floor((c.z0-.01-t)/Yt)),m=Math.min(a-1,Math.floor((c.z1+.01-t)/Yt));for(let x=f;x<=m;x++)for(let p=u;p<=d;p++)o[x*r+p].push(h)});let l={n:s.length,x0:e,z0:t,x1:e+r*Yt,z1:t+a*Yt,nx:r,nz:a,cells:o.map(c=>Int32Array.from(c)),mark:new Uint32Array(s.length),stamp:0};return Object.defineProperty(s,"grid",{value:l,enumerable:!1,writable:!0}),l}var Zu=0;function jp(s,e,t,i,n,r,a,o){let l=(s.x0-e)*n,c=(s.x1-e)*n,h=l<c?l:c,u=l<c?c:l,d=0;l=(s.y0-t)*r,c=(s.y1-t)*r;let f=l<c?l:c,m=l<c?c:l;return f>h&&(h=f,d=1),m<u&&(u=m),u<h||(l=(s.z0-i)*a,c=(s.z1-i)*a,f=l<c?l:c,m=l<c?c:l,f>h&&(h=f,d=2),m<u&&(u=m),u<h||h<0||h>=o)?-1:(Zu=d,h)}function xi(s,e,t,i,n,r,a,o,l){Xs.rays++,n===0&&(n=1e-9),r===0&&(r=1e-9),a===0&&(a=1e-9);let c=1/n,h=1/r,u=1/a,d=s.grid,f=o,m=null,x=0,p=0,g=0;if(d){p=d.n;let v=0,b=o,S=(d.x0-e)*c,y=(d.x1-e)*c;if(v=Math.max(v,Math.min(S,y)),b=Math.min(b,Math.max(S,y)),S=(d.z0-i)*u,y=(d.z1-i)*u,v=Math.max(v,Math.min(S,y)),b=Math.min(b,Math.max(S,y)),v<=b){let E=d.mark;++d.stamp>4e9&&(E.fill(0),d.stamp=1);let L=e+n*v,R=i+a*v,D=Math.min(d.nx-1,Math.max(0,Math.floor((L-d.x0)/Yt))),N=Math.min(d.nz-1,Math.max(0,Math.floor((R-d.z0)/Yt))),B=n>0?1:-1,P=a>0?1:-1,z=Math.abs(Yt*c),H=Math.abs(Yt*u),F=(d.x0+(D+(B>0?1:0))*Yt-e)*c,Y=(d.z0+(N+(P>0?1:0))*Yt-i)*u;for(;;){let G=d.cells[N*d.nx+D];for(let te=0;te<G.length;te++){let fe=G[te];if(E[fe]===d.stamp)continue;E[fe]=d.stamp;let we=s[fe];if(!we[l])continue;g++;let Z=jp(we,e,t,i,c,h,u,f);Z>=0&&(f=Z,m=we,x=Zu)}let q=Math.min(F,Y);if(f<=q||q>=b)break;if(F<Y){if(D+=B,F+=z,D<0||D>=d.nx)break}else if(N+=P,Y+=H,N<0||N>=d.nz)break}}}for(let v=p;v<s.length;v++){let b=s[v];if(!b[l])continue;g++;let S=jp(b,e,t,i,c,h,u,f);S>=0&&(f=S,m=b,x=Zu)}if(Xs.boxes+=g,!m)return null;let _=x===0?n:x===1?r:a,M=_>0?-1:1;return{d:f,c:m,nx:x===0?M:0,ny:x===1?M:0,nz:x===2?M:0}}function tm(s,e,t,i,n,r){let a=s.grid,o=0;if(a){o=a.n,++a.stamp>4e9&&(a.mark.fill(0),a.stamp=1);let l=a.stamp,c=Math.max(0,Math.floor((e-a.x0)/Yt)),h=Math.min(a.nx-1,Math.floor((t-a.x0)/Yt)),u=Math.max(0,Math.floor((i-a.z0)/Yt)),d=Math.min(a.nz-1,Math.floor((n-a.z0)/Yt));for(let f=u;f<=d;f++)for(let m=c;m<=h;m++){let x=a.cells[f*a.nx+m];for(let p=0;p<x.length;p++){let g=x[p];if(a.mark[g]!==l&&(a.mark[g]=l,r(s[g])))return s[g]}}}for(let l=o;l<s.length;l++)if(r(s[l]))return s[l];return null}var eM=[1,-1,0,0,1,1,-1,-1],tM=[0,0,1,-1,1,-1,1,-1],Ju=class{constructor(e,t){this.x0=t.x0,this.z0=t.z0,this.w=Math.ceil(t.x1-t.x0),this.h=Math.ceil(t.z1-t.z0);let i=this.w*this.h,n=.42,r=this.w;this.blk=new Uint8Array(i),this.ht=new Float32Array(i),this.gs=new Float32Array(i),this.pa=new Int32Array(i),this.st=new Uint32Array(i),this.cl=new Uint32Array(i),this.via=new Array(i),this.stamp=0,this.hk=[],this.hv=[],this.links=new Map;let a=(o,l,c,h)=>[Math.max(0,Math.ceil(o-c-.5)),Math.min(h-1,Math.floor(l-c-.5))];for(let o of e){if(!o.walk)continue;let[l,c]=a(o.x0+.05,o.x1-.05,this.x0,r),[h,u]=a(o.z0+.05,o.z1-.05,this.z0,this.h);for(let d=h;d<=u;d++)for(let f=l;f<=c;f++)o.y1>this.ht[d*r+f]&&(this.ht[d*r+f]=o.y1)}for(let o of e){if(!o.solid)continue;let[l,c]=a(o.x0-n,o.x1+n,this.x0,r),[h,u]=a(o.z0-n,o.z1+n,this.z0,this.h);for(let d=h;d<=u;d++)for(let f=l;f<=c;f++){let m=this.ht[d*r+f];o.y1>m+.55&&o.y0<m+1.5&&(this.blk[d*r+f]=1)}}this.buildLinks(e,n)}addLink(e,t,i,n,r){this.links.has(e)||this.links.set(e,[]),this.links.get(e).push({to:t,type:i,h:n,cost:r})}buildLinks(e,t){let i=this.w,n=(a,o)=>a>=0&&o>=0&&a<i&&o<this.h&&!this.blk[o*i+a],r=(a,o,l)=>{let c=this.center(a),h=this.center(o),u=h.x-c.x,d=h.z-c.z,f=Math.hypot(u,d);return!xi(e,c.x,l,c.z,u/f,0,d/f,f,"solid")};for(let a of e){if(!a.solid)continue;let o=!a.walk&&a.y0<.3&&a.y1>=.45&&a.y1<=1.2,l=a.walk&&a.y1>=.6&&a.y1<=1.3&&Math.min(a.x1-a.x0,a.z1-a.z0)>=2;if(!(!o&&!l))for(let c of[0,1]){let h=c?a.z0:a.x0,u=c?a.z1:a.x1,d=c?this.z0:this.x0,f=c?a.x0:a.z0,m=c?a.x1:a.z1,x=c?this.x0:this.z0,p=Math.floor(h-t-d-.5),g=Math.ceil(u+t-d-.5),_=Math.ceil(f+.15-x-.5),M=Math.floor(m-.15-x-.5),v=(S,y)=>c?S*i+y:y*i+S,b=(S,y)=>c?n(y,S):n(S,y);for(let S=_;S<=M;S++){if(o&&u-h<=1.4&&b(p,S)&&b(g,S)){let y=v(p,S),E=v(g,S);if(Math.abs(this.ht[y]-this.ht[E])<.3&&r(y,E,a.y1+.35)&&r(y,E,a.y1+1.3)){let L=g-p+2.2;this.addLink(y,E,"vault",a.y1,L),this.addLink(E,y,"vault",a.y1,L)}}if(l)for(let[y,E]of[[p,Math.ceil(h+.05-d-.5)],[g,Math.floor(u-.05-d-.5)]]){if(!b(y,S)||!b(E,S))continue;let L=v(y,S),R=v(E,S),D=this.ht[R]-this.ht[L];Math.abs(this.ht[R]-a.y1)>.05||D<.6||D>1.3||!r(L,R,a.y1+.4)||!r(L,R,a.y1+1.4)||(this.addLink(L,R,"climb",a.y1,3.6),this.addLink(R,L,"drop",a.y1,2.6))}}}}}idx(e,t){let i=Math.floor(e-this.x0),n=Math.floor(t-this.z0);return i<0||n<0||i>=this.w||n>=this.h?-1:n*this.w+i}blocked(e,t){let i=this.idx(e,t);return i<0||this.blk[i]===1}height(e,t){let i=this.idx(e,t);return i<0?0:this.ht[i]}center(e){return{x:this.x0+e%this.w+.5,z:this.z0+(e/this.w|0)+.5,y:this.ht[e]}}snap(e,t){let i=this.idx(e,t);return i<0||this.blk[i]?null:this.center(i)}near(e,t){let i=this.idx(e,t);if(i>=0&&!this.blk[i])return i;let n=-1,r=1e9;for(let a=1;a<=8&&n<0;a++)for(let o=-a;o<=a;o++)for(let l=-a;l<=a;l++){if(Math.max(Math.abs(o),Math.abs(l))!==a)continue;let c=this.idx(e+o,t+l);if(c>=0&&!this.blk[c]){let h=o*o+l*l;h<r&&(r=h,n=c)}}return n}nearest(e,t){let i=this.near(e,t);return i<0?null:this.center(i)}line(e,t){let i=t.x-e.x,n=t.z-e.z,r=Math.hypot(i,n);if(r<.01)return!0;let a=Math.ceil(r/.35),o=-n/r*.3,l=i/r*.3,c=this.height(e.x,e.z);for(let h=0;h<=a;h++){let u=e.x+i*h/a,d=e.z+n*h/a;if(this.blocked(u,d)||this.blocked(u+o,d+l)||this.blocked(u-o,d-l))return!1;let f=this.height(u,d);if(Math.abs(f-c)>.56||Math.abs(this.height(u+o,d+l)-f)>.56||Math.abs(this.height(u-o,d-l)-f)>.56)return!1;c=f}return!0}path(e,t,i,n,r=1e9){let a=this.near(e,t),o=this.near(i,n);if(a<0||o<0)return null;let l=this.w,c=this.h,h=this.blk,u=this.gs,d=this.pa,f=this.st,m=this.cl,x=this.ht,p=this.via,g=++this.stamp,_=this.hk,M=this.hv;_.length=M.length=0;let v=o%l,b=o/l|0,S=z=>{let H=Math.abs(z%l-v),F=Math.abs((z/l|0)-b);return H+F-.586*Math.min(H,F)},y=(z,H)=>{let F=_.length;for(_.push(z),M.push(H);F>0;){let Y=F-1>>1;if(_[Y]<=z)break;_[F]=_[Y],M[F]=M[Y],F=Y}_[F]=z,M[F]=H},E=()=>{let z=M[0],H=_.pop(),F=M.pop(),Y=_.length;if(Y){let G=0;for(;;){let q=G*2+1;if(q>=Y||(q+1<Y&&_[q+1]<_[q]&&q++,_[q]>=H))break;_[G]=_[q],M[G]=M[q],G=q}_[G]=H,M[G]=F}return z},L=(z,H,F,Y)=>{f[H]===g&&F>=u[H]||(f[H]=g,u[H]=F,d[H]=z,p[H]=Y,y(F+S(H),H))};u[a]=0,d[a]=-1,f[a]=g,p[a]=null,y(S(a),a);let R=0,D=a===o;for(;_.length&&!D;){let z=E();if(z===o){D=!0;break}if(m[z]===g)continue;if(m[z]=g,++R>14e3||u[z]>r)return null;let H=z%l,F=z/l|0,Y=x[z];for(let q=0;q<8;q++){let te=H+eM[q],fe=F+tM[q];if(te<0||fe<0||te>=l||fe>=c)continue;let we=fe*l+te;h[we]||Math.abs(x[we]-Y)>.56||q>3&&(h[F*l+te]||h[fe*l+H])||L(z,we,u[z]+(q>3?1.414:1),null)}let G=this.links.get(z);if(G)for(let q of G)L(z,q.to,u[z]+q.cost,q)}if(!D)return null;let N=[];for(let z=o;z!==-1;z=d[z]){let H=this.center(z);p[z]&&(H.link=p[z]),N.push(H)}if(N.reverse(),this.idx(i,n)===o&&(N[N.length-1].x=i,N[N.length-1].z=n),N.length<2)return N;let B=[],P=0;for(;P<N.length-1;){if(N[P+1].link){B.push(N[P+1]),P++;continue}let z=Math.min(N.length-1,P+40);for(let H=P+1;H<=z;H++)if(N[H].link){z=H-1;break}for(;z>P+1&&!this.line(N[P],N[z]);)z--;B.push(N[z]),P=z}return B.cost=u[o],B}};function iM(s,e){let t=[],i=(n,r,a,o=.27)=>{for(let l of s)if(l.solid&&l.y1>a+.5&&l.y0<a+1.6&&n+o>l.x0&&n-o<l.x1&&r+o>l.z0&&r-o<l.z1)return!1;return!0};for(let n of s){if(!n.solid||!n.sight||!n.bullet||n.walk||n.nocover)continue;let r=n.x1-n.x0,a=n.z1-n.z0,o=(n.x0+n.x1)/2,l=(n.z0+n.z1)/2;if(!(Math.max(r,a)<.8||Math.max(r,a)>70))for(let[c,h]of[[1,0],[-1,0],[0,1],[0,-1]]){let u=c?a:r,d=c?0:1,f=c?1:0,m=o+c*r/2,x=l+h*a/2,p=u<=.95?[[0,[1,-1]]]:[[u/2-.3,[1]],[-(u/2-.3),[-1]]];if(u>3.2)for(let g=-(u/2)+1.6;g<u/2-1.5;g+=1.7)p.push([g,[]]);for(let[g,_]of p){let M=m+c*.48+d*g,v=x+h*.48+f*g;if(e.idx(M,v)<0)continue;let b=e.height(M,v),S=n.y1-b;if(S<.85||n.y0>b+.45||!i(M,v,b))continue;let y=S>=1.6,E=e.nearest(M,v);if(!E||Math.hypot(E.x-M,E.z-v)>1.5||Math.abs(E.y-b)>.3||!i((M+E.x)/2,(v+E.z)/2,b,.2))continue;let L=_.filter(R=>i(M+d*R*.62,v+f*R*.62,b,.18)&&i(M+d*R*.62-c*.5,v+f*R*.62-h*.5,b,.12));!L.length&&y||t.push({x:M,z:v,y:b,nx:c,nz:h,tx:d,tz:f,sides:L,over:!y,high:y,cell:E,id:t.length,user:null})}}}return t}function bt(s,e,t,i,n,r,a,o,l=[],c=.3,h={}){let u=n===a,d=u?i:n,f=u?r:a,m=(p,g,_,M)=>{if(g-p<.02||M-_<.02)return;let v=(p+g)/2,b=g-p;u?s.box(e,t,v,_,n,b,M-_,c,h):s.box(e,t,i,_,v,c,M-_,b,h)},x=d-c/2;for(let p of[...l].sort((g,_)=>g.a-_.a))m(x,p.a,0,o),p.sill&&m(p.a,p.b,0,p.sill),m(p.a,p.b,p.top??2.3,o),x=p.b;m(x,f+c/2,0,o)}function gc(s,e,t,i,n,r,a,o,l={},c=.3){bt(s,e,t,i,n,r,n,o,l.n,c),bt(s,e,t,i,a,r,a,o,l.s,c),bt(s,e,t,i,n,i,a,o,l.w,c),bt(s,e,t,r,n,r,a,o,l.e,c)}function mt(s,e,t,i=1,n=0,r=6114356){s.box("wood",r,e,n,t,i,i,i,{rot:0})}function en(s,e,t,i=4872776){if(s.prop("barrel",e,0,t,s.rng()*6,.92,{tint:i===4872776?9083520:16777215}))return s.collider(e-.33,0,t-.33,e+.33,1.05,t+.33,{mat:"metal"});s.geo("metal",i,new xt(.33,.33,1,10),Kt(e,.5,t)),s.collider(e-.33,0,t-.33,e+.33,1,t+.33)}function tn(s,e,t,i,n){let r=n?i:.75,a=n?.75:i;s.box("plain",6971462,e,0,t,r,.7,a,{col:!1}),s.box("plain",6248255,e,.7,t,r*.96,.35,a*.7,{col:!1}),s.collider(e-r/2,0,t-a/2,e+r/2,1.05,t+a/2,{mat:"dirt"})}function nM(s,e,t,i,n,r=1){let a=i?6.1:2.5,o=i?2.5:6.1;for(let l=0;l<r;l++){let c=l?.15:0;s.prop((n>>4)%2?"container_red":"container_green",e+c,l*2.6-.04,t,i?0:Math.PI/2,[6.1/5.71,1,2.5/2.56],{tint:[11580600,9344152,10789016][(n>>8)%3]})?s.collider(e+c-a/2,l*2.6,t-o/2,e+c+a/2,l*2.6+2.6,t+o/2,{mat:"metal"}):s.box("metal",n,e+c,l*2.6,t,a,2.6,o,{tint:.2})}}function xc(s,e,t,i,n=4015410,r=5198656){let a=Math.cos(i),o=Math.sin(i),l=(m,x)=>[e+m*a+x*o,t-m*o+x*a],c=Math.abs(a)*1.3+Math.abs(o)*3.3,h=Math.abs(o)*1.3+Math.abs(a)*3.3,[u,d]=l(0,-.5);if(s.collider(u-c,0,d-h,u+c,2.9,d+h,{mat:"metal"}),s.prop("vehicle_truck",e,0,t,i,1.18,{tint:n===4015410?6186576:7370108}))return;let f=(m,x,p,g,_,M,v,b)=>{let[S,y]=l(p,_);s.box(m,x,S,g,y,M,v,b,{rot:i,col:!1})};f("plain",1842463,0,.55,0,1.2,.35,6.2),f("plain",n,0,.9,-2.3,2.3,1.75,1.7),f("plain",n,0,.9,-3.5,2.1,.9,.9),f("plain",n,0,.95,1,2.4,.25,4.3),f("plain",r,0,1.2,1,2.3,1.6,4.2)}var Qp=["pine_1","pine_2"],to=16,im=(s,e)=>Math.floor((s+200)/to)+"|"+Math.floor((e+200)/to),sM=new ri({vertexColors:!0}),mc=null;function rM(){if(mc)return mc;let s=(t,i,n,r)=>{let a=t.attributes.position.count,o=new Float32Array(a*3);for(let l=0;l<a;l++)o[l*3]=i,o[l*3+1]=n,o[l*3+2]=r;return t.setAttribute("color",new nt(o,3)),t},e=[s(new xt(.1,.24,4.2,5,1,!0).translate(0,2.1,0),.2,.12,.08)];return[[2.35,2.6,2.2],[1.8,2.5,3.8],[1.15,2.4,5.3]].forEach(([t,i,n],r)=>e.push(s(new rs(t,i,7,1,!0).rotateY(r*.5).translate(0,n+i/2-.6,0),.085,.15,.07))),mc=Gr(e.map(t=>{let i=t.toNonIndexed();return i.deleteAttribute("uv"),i})),mc}function nm(s,e){let t=s.lodDist||34;for(let i in s.lod){let n=s.lod[i],r=Math.hypot(n.x-e.x,n.z-e.z),a=r<(n.near?t+3:t-3);if(!(a===n.near&&n.init)){n.near=a,n.init=!0;for(let o of n.full)o.visible=a;n.lod&&(n.lod.visible=!a)}}}function em(s,e,t,i=!0){let n=s.rng,r=7+n()*5,a=.2+n()*.16;if(At.parts.pine_1){let o=i?Qp[Math.floor(n()*Qp.length)]:"pine_2",l=1.25+n()*.55,c=n()*6.283,h=[8162432,7241332,6582888][Math.floor(n()*3)];i&&s.prop(o,e,-.1,t,c,l,{shadow:!0,tint:h,cell:to});let u=i?im(e,t):"border";(s.lodInst[u]||(s.lodInst[u]=[])).push({m:Kt(e,-.1,t,0,c,0,l,l,l),tint:h}),i&&s.canopy.push(Kt(e,4.6*l,t,0,0,0,2.3*l,5.2*l,2.3*l)),i&&s.collider(e-.3,0,t-.3,e+.3,6,t+.3,{mat:"wood"});return}s.geo("wood",3483935,new xt(a*.55,a,r,6),Kt(e,r/2,t),{uv:2}),i&&s.collider(e-a,0,t-a,e+a,r,t+a);for(let o=0;o<3;o++){let l=r*.34+o*r*.22,c=(2.5-o*.65)*(.8+n()*.4);s.geo("grass",1781020,new rs(c,r*.36,7),Kt(e,l+r*.18,t,0,n()*6,0),{uv:3})}}function Ku(s,e,t,i,n=!0){let r=s.rng,a=i*(.8+r()*.5),o=i*(.6+r()*.5),l=i*(.8+r()*.5);if(At.parts.rock_medium_1){let c="rock_medium_"+(1+Math.floor(r()*3)),h=At.parts[c].box,u=2/(h.max.x-h.min.x),d=Math.floor(r()*4)*Math.PI/2;s.prop(c,e,-.12*o,t,d,[a*u,o*.95/h.max.y,l*u],{tint:8028294}),n&&s.collider(e-a*.86,0,t-l*.86,e+a*.86,o*.9,t+l*.86,{mat:"concrete"});return}s.geo("concrete",4672332,new Ia(1,0),Kt(e,o*.3,t,r()*3,r()*3,r()*3,a,o,l),{uv:2}),n&&s.collider(e-a*.72,0,t-l*.72,e+a*.72,o*.95,t+l*.72)}function aM(s,e,t){let i=s.rng;if(!s.prop("bush_common",e,-.05,t,i()*6.283,[.85+i()*.3,.8+i()*.25,.85+i()*.3],{shadow:!1,tint:6977122}))for(let n=0;n<3;n++)s.geo("grass",2241823,new Pa(.65+i()*.35,0),Kt(e+(i()-.5)*.9,.5+i()*.3,t+(i()-.5)*.9,i()*3,i()*3,0),{uv:2});s.collider(e-.8,0,t-.8,e+.8,1.3,t+.8,{solid:!1,bullet:!1})}function xn(s,e,t,i,n,r,a,o,l){let c=new di(t,i,n,1.6);return c.position.set(r,a,o),e.add(c),c.userData.base=i,s.lights.push(c),l&&s.dyn.push({l:c,base:i,kind:l}),c}function oM(s,e,t){let i=s.rng;s.box("grass",3095847,0,-1,0,180,1,180,{col:!1,tint:0});let n=[[-6,62],[-8,36],[0,18],[0,2]];for(let u=0;u<n.length-1;u++){let[d,f]=n[u],[m,x]=n[u+1],p=m-d,g=x-f;s.box("dirt",4800048,(d+m)/2,0,(f+x)/2,3.6,.02+u*.004,Math.hypot(p,g)+2,{rot:Math.atan2(p,g),col:!1,tint:0})}s.box("dirt",4602927,0,0,-12,37,.015,31,{col:!1,tint:0});let r={sight:!1},a=(u,d,f,m,x)=>{bt(s,"fence",9080982,u,d,f,m,2.4,x.map(_=>({..._,top:99})),.1,r);let p=d===m,g=Math.round((p?f-u:m-d)/3.7);for(let _=0;_<=g;_++){let M=(p?u:d)+(p?f-u:m-d)*_/g;x.some(v=>M>v.a-.2&&M<v.b+.2)||s.box("plain",3948612,p?M:u,0,p?d:M,.12,2.5,.12,{col:!1})}};a(-18.5,3.5,18.5,3.5,[{a:-3,b:3}]),a(-18.5,-27.5,18.5,-27.5,[{a:-14,b:-10}]),a(-18.5,-27.5,-18.5,3.5,[{a:-8,b:-5}]),a(18.5,-27.5,18.5,3.5,[{a:-14,b:-10}]),gc(s,"wood",4931635,-14.5,-24.5,-5.5,-16.5,3,{s:[{a:-11,b:-9}],w:[{a:-22,b:-20}],e:[{a:-21.5,b:-19.5,sill:1,top:2.1}]}),s.box("metal",3422774,-10,3,-20.5,9.8,.18,8.8),s.box("wood",4011049,-10,0,-20.5,9,.04,8,{col:!1}),s.box("wood",5917238,-7.3,0,-23.3,2,.8,.9),s.box("wood",4470824,-12.6,0,-23.7,2.2,1.9,.5),s.box("emis",16767392,-10,2.78,-20.5,.25,.06,.25,{col:!1,tint:0}),xn(e,t,16763274,14,13,-10,2.5,-20.5),gc(s,"wood",4538938,5.5,-24.5,15.5,-17.5,3,{s:[{a:9,b:11}],e:[{a:-22,b:-20}],w:[{a:-22.5,b:-20.5,sill:1,top:2.1}]}),s.box("metal",3422774,10.5,3,-21,10.8,.18,7.8),s.box("plain",4475448,7,0,-23.4,.95,.6,2),s.box("plain",4475448,14.2,0,-19.2,.95,.6,2),s.box("emis",12593696,7.5,1.3,-17.3,.3,.4,.06,{col:!1,tint:0});for(let[u,d]of[[-1.4,-1.4],[1.4,-1.4],[-1.4,1.4],[1.4,1.4]])s.box("wood",4142376,14+u,0,-1+d,.25,5,.25),s.box("wood",4142376,14+u,5.2,-1+d,.12,2,.12,{col:!1});s.box("wood",4865582,14,5,-1,3.4,.2,3.4),s.box("metal",3422774,14,7.2,-1,3.9,.15,3.9);for(let u of[-1,1])s.box("wood",4865582,14+u*1.65,5.2,-1,.08,.9,3.4,{col:!1}),s.box("wood",4865582,14,5.2,-1+u*1.65,3.4,.9,.08,{col:!1});s.box("emis",16773320,12.5,5.9,.6,.3,.3,.3,{col:!1,tint:0});let o=new Os(16771520,500,60,.42,.6,1.5);o.position.set(12.5,6,.6),o.target.position.set(1,0,11),t.add(o,o.target),o.userData.base=500,e.lights.push(o),xc(s,-9,-6,0),xc(s,5,-10.5,Math.PI/2),mt(s,-2,-20.5,1.2),mt(s,-.8,-21.6,1),mt(s,-2,-20.5,.8,1.2),mt(s,10,-12,1.2),mt(s,11.3,-12.3,1),mt(s,-15,-1,1.2),mt(s,-15,-2.4,1),mt(s,15.5,-8,1.1),tn(s,-5.5,6,3.4,!0),tn(s,5.5,6,3.4,!0),tn(s,-3,-13,3,!1),tn(s,9,.5,3,!0),en(s,1,-22.5),en(s,1.8,-22.9,5914676),en(s,-16.5,-12),en(s,16.5,-24.5),s.box("metal",4936008,2.5,0,-16,1.8,1.2,1),s.box("plain",2895665,3.6,0,-16,.1,3.6,.1,{col:!1}),s.box("emis",16769192,3.6,3.6,-16,.3,.12,.3,{col:!1,tint:0}),xn(e,t,16766106,30,20,3.6,3.4,-16),s.box("plain",2895665,-16,0,-25,.12,9,.12,{col:!1}),bt(s,"concrete",5790295,-42.5,4.5,-34.5,4.5,2.6,[{a:-39,b:-37,top:99}]),bt(s,"concrete",5790295,-42.5,4.5,-42.5,11.5,1.4),bt(s,"concrete",5790295,-34.5,4.5,-34.5,9.5,2.6,[{a:6,b:7.5,sill:1,top:2}]),bt(s,"concrete",5790295,-42.5,11.5,-39.5,11.5,2.2),Ku(s,-36,11,.8,!1),Ku(s,-40.5,2.5,.7,!1),mt(s,-41,9.8,1);for(let[u,d,f]of[[32.5,17.5,.9],[38.5,15.5,.4]])s.geo("plain",5001019,new xt(.05,2,1.9,4),Kt(u,.95,d,0,f,0)),s.collider(u-1.2,0,d-1.2,u+1.2,1.9,d+1.2);s.geo("wood",2760729,new xt(.12,.12,1,6),Kt(35,.12,12,0,.5,Math.PI/2)),s.geo("wood",2760729,new xt(.12,.12,1,6),Kt(35,.14,12,0,2.1,Math.PI/2)),s.geo("emis",16747056,new rs(.22,.5,5),Kt(35,.4,12),{tint:0}),xn(e,t,16747066,26,16,35,.9,12,"fire"),s.geo("wood",3483935,new xt(.3,.3,2.6,7),Kt(33,.3,10.5,0,.3,Math.PI/2)),s.collider(31.8,0,10.1,34.2,.6,10.9),mt(s,37.5,11,.9),s.box("dirt",4866099,44,0,-46,9,.02,9,{col:!1,tint:0}),mt(s,48,-50,1.1),mt(s,40,-50.5,.9);let l=[[-6.6,54,5],[-38,8,7.5],[35,14,7.5],[44,-46,7],[54,22,4.5],[-54,-10,4.5],[-46,46,6],[48,44,6],[-38.5,-40.5,7.5]];gc(s,"concrete",5198672,-41.5,-43.5,-35.5,-39.5,2.6,{s:[{a:-39.5,b:-37.5}],e:[{a:-42.5,b:-41,sill:1,top:1.9}]}),s.box("concrete",4606535,-38.5,2.6,-41.5,6.6,.25,4.6),tn(s,-35,-37.2,3,!0),mt(s,-43.3,-38.5,1.1),s.box("dirt",4602927,-38.5,0,-39,9,.015,9,{col:!1,tint:0}),s.box("dirt",4866099,-46,0,46,8,.02,8,{col:!1,tint:0}),s.box("dirt",4866099,48,0,44,8,.02,8,{col:!1,tint:0});let c=(u,d,f=0)=>{if(u>-21-f&&u<21+f&&d>-30-f&&d<6+f)return!1;for(let[m,x,p]of l)if(Math.hypot(u-m,d-x)<p+f)return!1;for(let m=0;m<n.length-1;m++){let[x,p]=n[m],[g,_]=n[m+1],M=g-x,v=_-p,b=Math.max(0,Math.min(1,((u-x)*M+(d-p)*v)/(M*M+v*v)));if(Math.hypot(u-x-M*b,d-p-v*b)<3+f)return!1}return!0},h=[];for(let u=0;u<900&&h.length<150;u++){let d=(i()-.5)*114,f=(i()-.5)*114;!c(d,f)||h.some(m=>Math.hypot(m[0]-d,m[1]-f)<3.4)||(h.push([d,f]),em(s,d,f))}for(let u=0;u<46;u++){let d=u/46*6.283,f=60+i()*9,m=Math.cos(d),x=Math.sin(d),p=f/Math.max(Math.abs(m),Math.abs(x));em(s,m*p,x*p,!1)}for(let u=0,d=0;u<200&&d<24;u++){let f=(i()-.5)*108,m=(i()-.5)*108;c(f,m,1)&&(Ku(s,f,m,1+i()*1.3),d++)}for(let u=0,d=0;u<200&&d<10;u++){let f=(i()-.5)*100,m=(i()-.5)*100;if(!c(f,m,2))continue;let x=i()*3.14,p=4+i()*2;s.geo("wood",3155228,new xt(.36,.42,p,7),Kt(f,.36,m,0,x,Math.PI/2),{uv:2});let g=Math.abs(Math.cos(x))*p/2+.3,_=Math.abs(Math.sin(x))*p/2+.3;s.collider(f-g,0,m-_,f+g,.75,m+_),d++}for(let u=0,d=0;u<300&&d<55;u++){let f=(i()-.5)*110,m=(i()-.5)*110;c(f,m,.5)&&(aM(s,f,m),d++)}for(let u=0;u<520;u++){let d=(i()-.5)*112,f=(i()-.5)*112;c(d,f,-1.5)&&s.prop("grass_common_short",d,0,f,i()*6.283,[.7+i()*.6,.35+i()*.3,.7+i()*.6],{shadow:!1,tint:5267530})}for(let u=0;u<110;u++){let d=(i()-.5)*108,f=(i()-.5)*108;c(d,f,0)&&s.prop("fern_1",d,0,f,i()*6.283,.09+i()*.05,{shadow:!1,tint:5925458})}s.prop("watertower",15.5,0,-13.5,0,.85,{tint:9080724})&&(s.collider(14.4,0,-14.6,16.6,5.4,-12.4,{sight:!1,bullet:!1,nocover:!0}),s.collider(14.4,5.4,-14.6,16.6,8,-12.4)),s.prop("wheels_stack",-16.8,0,-16,.4,1.5,{col:!0,shrink:.9}),s.prop("wheels_stack",12.5,0,-15.8,1.2,1.5,{col:!0,shrink:.9}),s.prop("pallet",-2,0,-20.5,0,1.4,{}),s.prop("pallet",10.5,0,-12.1,.2,1.7,{}),s.prop("trafficbarrier_1",-1.9,0,9.5,.15,1,{col:!0,shrink:.85,sight:!1}),s.prop("trafficbarrier_1",2.2,0,12.5,-.1,1,{col:!0,shrink:.85,sight:!1});for(let[u,d,f,m]of[[-59,-59,59,-58],[-59,58,59,59],[-59,-59,-58,59],[58,-59,59,59]])s.collider(u,0,d,f,12,m,{sight:!1});return{name:"FOREST OUTPOST",bounds:{x0:-60,x1:60,z0:-60,z1:60},spawn:{x:-6.6,z:54,yaw:0},env:{fog:[659479,.021],bg:461586,hemi:[8427200,2305052,2.9],moon:[10795494,3.4,[-35,60,30]],viewRange:40,detect:.75,shotMul:1,amb:"forest",ground:"dirt"},objective:{pos:[-7.3,.8,-23.3],kind:"intel",hold:0,prompt:"Take intelligence package",text:"Locate the intelligence package in the outpost command hut",done:"INTEL SECURED"},extraction:{pos:[44,0,-46],text:"Reach the extraction flare in the north-east clearing"},routes:[{p:[[-3,-3],[-3,-14],[8,-14],[8,-3]],must:1},{p:[[0,7],[3.5,8]]},{p:[[-22,2],[-22,-29],[-10,-31]]},{p:[[22,-26],[22,2],[12,8]]},{p:[[-8,20],[-8,12],[1,10]]},{p:[[-36,9],[-39,2],[-32,2]]},{p:[[34,9],[39,11],[30,13]]},{p:[[10,-36],[30,-40],[36,-30],[20,-31]]},{p:[[-9,-14],[-3,-18]],must:1},{p:[[25,35],[40,30],[30,23]]}],posts:{objective:[[-9.5,-14.5],[-16.5,-21],[-10,-20.5],[-3.5,-19]],entrance:[[-4.5,1.5,"south gate"],[16,-12,"east breach"],[-12,-25.6,"north-west gap"],[-16.5,-6.5,"west gap"],[12,2,"watchtower"]]},panel:{x:7.5,z:-16.4,face:[0,-1],n:"barracks alarm"},guards:10,anchors:[{id:"hut",name:"command hut",at:[-7.3,.8,-23.3],stand:[-7.3,-22],indoor:1,posts:[[-9.5,-14.5],[-16.5,-21],[-10,-20.5],[-3.5,-19]]},{id:"barracks",name:"barracks",at:[12.8,0,-21.6],stand:[12,-20.6],indoor:1,posts:[[10,-15.5],[17,-21],[8,-20.5]]},{id:"tower",name:"watchtower",at:[11.6,0,2.2],stand:[10.8,1.6],indoor:1,posts:[[9.5,-2],[16.5,2.4],[12,6]]},{id:"ruin",name:"western ruin",at:[-40.3,0,8],stand:[-39.5,7],indoor:1,posts:[[-38,2.5],[-36,11],[-33,6]]},{id:"camp",name:"eastern camp",at:[36.3,0,13.6],stand:[35.6,14.3],indoor:1,posts:[[33,9],[39.5,11.5],[30.5,15]]},{id:"motorpool",name:"vehicle park",at:[-6.1,0,-4],stand:[-5.5,-3.2],posts:[[-3,-3],[-12,-1.5],[-6,-10.5]]},{id:"generator",name:"generator yard",at:[3.4,0,-17.5],stand:[3.4,-18.5],indoor:1,posts:[[0,-14],[6.5,-14.5],[-1,-18.5]]},{id:"bunker",name:"remote bunker",at:[-39.8,0,-42.2],stand:[-39,-41.5],indoor:1,posts:[[-38.5,-37.5],[-34,-41.5],[-37,-41.5]]}],entries:[{id:"south",name:"south road",x:-6.6,z:54,yaw:0},{id:"east",name:"eastern woods",x:54,z:22,yaw:Math.PI/2},{id:"west",name:"western woods",x:-54,z:-10,yaw:-Math.PI/2}],exits:[{id:"ne",name:"north-east clearing",pos:[44,0,-46]},{id:"sw",name:"south-west clearing",pos:[-46,0,46]},{id:"se",name:"south-east clearing",pos:[48,0,44]}],reinforce:[{x:-30,z:-55,n:"north treeline"},{x:-54,z:-18,n:"western treeline"},{x:-44,z:46,n:"south-west treeline"}],pickups:[["med",12.6,-23.6],["med",36.6,16.4],["ammo",-40,6.5],["ammo",-1,-19]]}}function lM(s,e,t){let i=s.rng,n=8,r=5660006,a=6579807;s.box("concrete",3684667,0,-1,0,120,1,80,{col:!1,tint:0}),s.box("concrete",5921886,-7.5,0,0,56,.02,51,{col:!1,tint:0}),gc(s,"concrete",5264213,-47.5,-31.5,47.5,31.5,3.6,{},.4),s.box("metal",3422784,47.2,0,0,.15,3.2,7,{col:!1}),bt(s,"metal",r,-35.5,-25.5,20.5,-25.5,n,[{a:4,b:6,top:2.4}],.4),bt(s,"metal",r,-35.5,25.5,20.5,25.5,n,[{a:-8,b:-6,top:2.4}],.4),bt(s,"metal",r,-35.5,-25.5,-35.5,25.5,n,[{a:-1,b:1,top:2.4}],.4),bt(s,"metal",r,20.5,-25.5,20.5,25.5,n,[{a:-13,b:-7,top:4.6},{a:7,b:13,top:4.6}],.4),s.box("metal",2895926,-7.5,n,0,57,.3,52);for(let c=-31;c<=17;c+=8)s.box("plain",2303530,c,7.3,0,.25,.5,51,{col:!1});bt(s,"concrete",a,-20.5,-25.5,-20.5,-12.5,4,[{a:-20,b:-18}]),bt(s,"concrete",a,-35.5,-12.5,-20.5,-12.5,4,[{a:-29,b:-27},{a:-25,b:-22.5,sill:1,top:2.2}]),s.box("concrete",5592922,-28,4,-19,15.3,.25,13.3),mt(s,-24,-16,1.2,4.25),mt(s,-30,-21,1,4.25,5200456),s.box("metal",4080714,-34.3,0,-22,1,.8,2.4);for(let c=-33;c<=-24;c+=1.5)s.box("plain",1382170,c,0,-24.7,.9,2.1,.8),s.box("emis",i()<.5?3735418:16756784,c-.2,1.5+i()*.3,-24.28,.06,.03,.02,{col:!1,tint:0});s.box("metal",4541008,-26.5,0,-18,2.2,.8,1.1),bt(s,"concrete",a,-35.5,10.5,-20.5,10.5,n,[{a:-29,b:-27,top:2.6}]),bt(s,"concrete",a,-20.5,10.5,-20.5,25.5,n,[{a:17,b:19,top:2.6}]),s.box("metal",4477515,-31.5,0,19,3,2.6,5.5),s.box("metal",3819072,-31.5,2.6,19,1.6,1.2,2,{col:!1}),s.geo("metal",5919558,new xt(1.2,1.2,3.4,12),Kt(-24.5,1.7,22.5)),s.collider(-25.6,0,21.4,-23.4,3.4,23.6),s.box("metal",4477515,-25,0,13.2,2.6,1.5,1.4),s.box("emis",16750648,-25,1.1,13.92,.5,.2,.02,{col:!1,tint:0}),s.geo("metal",4869973,new xt(.16,.16,14,8),Kt(-28,5.2,24.8,0,0,Math.PI/2));for(let c of[-15,-11,-7])for(let h of[-12,12]){for(let u of[h-7.9,h,h+7.9])for(let d of[-.55,.55])s.box("plain",3033706,c+d,0,u,.1,6.9,.1,{col:!1});for(let u of[.12,2.3,4.4,6.3])if(s.box("plain",9064998,c,u,h,1.25,.1,16,{col:!1}),!(u>6))for(let d=h-7.8;d<h+7.2;){let f=.9+i()*1.1,m=u<4?1.75+i()*.3:.6+i()*1.1;(u<4||i()<.7)&&s.box("wood",i()<.5?7232064:5525567,c,u+.1,d+f/2,1.05,m,f,{col:!1,tint:.3}),d+=f+(u<4?.04:.3)}s.collider(c-.62,0,h-8,c+.62,6.9,h+8)}let o=[4282730,7224372,4481098,8153660,5133144];[[6,-19,1,2],[14.5,-18,0,1],[8,-12,1,1],[3,-4,0,1],[11,0,1,2],[5,9,1,1],[13,15,0,2],[4,19.5,1,1],[30,-24,1,1],[36,-15,0,2],[31,8,1,1],[40,22,1,1],[26,-2,0,1]].forEach(([c,h,u,d],f)=>nM(s,c,h,!!u,o[f%5],d)),s.box("plain",9073696,-24,0,5,1.3,1.5,2.2),s.box("plain",1842463,-24,0,3.4,1.1,2.3,.15,{col:!1});for(let[c,h,u]of[[-31,-8,1.3],[-29.6,-8.2,1],[-31,-8,.9],[-30,6.5,1.2],[-3,22.5,1.2],[-1.6,22.8,1],[-2.5,-9,1.2],[17,-3,1.1],[9.5,5,1],[-18.5,-6,1.1],[-3,12,1.2]])mt(s,c,h,u,u===.9?1.3:0,i()<.5?6114356:5002304);en(s,-22,-9.5,3493994),en(s,-22.8,-8.8,6965812),en(s,18.5,3,3493994),en(s,-4,-23.5,6965812),en(s,1,14,3493994),s.box("concrete",6316644,13.9,0,22.65,11.8,1,5.3,{walk:!0}),[[7.8,.83],[7.4,.67],[7,.5],[6.6,.33],[6.2,.17]].forEach(([c,h])=>s.box("concrete",5790300,c,0,22.5,.4,h,3,{walk:!0,tint:0}));for(let c=8.2;c<=19.6;c+=1.9)s.box("plain",9073696,c,1,20.08,.06,1,.06,{col:!1});s.box("plain",9073696,13.9,1.95,20.08,11.6,.06,.06,{col:!1}),s.box("plain",9073696,13.9,1.5,20.08,11.6,.04,.04,{col:!1}),mt(s,17.3,24.2,1.1,1),mt(s,11,24.4,1,1,5002304),mt(s,14.5,21,1,1),s.box("emis",12593696,-20.3,1.3,-15,.06,.4,.3,{col:!1,tint:0}),s.box("metal",3751492,-3,5,-24.3,32,.12,1.7);for(let c=-19;c<=13;c+=4)s.box("plain",2764081,c,0,-23.55,.12,5,.12,{col:!1}),s.box("plain",2764081,c,5.1,-23.5,.06,1,.06,{col:!1});s.box("plain",2764081,-3,6.05,-23.5,32,.06,.06,{col:!1}),s.geo("metal",6048314,new xt(.22,.22,54,8),Kt(-7.5,6.6,24.6,0,0,Math.PI/2)),s.geo("metal",4805210,new xt(.15,.15,50,8),Kt(-34.9,6.2,0,Math.PI/2,0,0));let l=(c,h,u,d,f,m,x)=>{s.box("plain",1710877,c,h+.1,u,.03,7.25-h,.03,{col:!1}),s.box("plain",2369322,c,h+.06,u,.7,.12,.7,{col:!1}),s.box("emis",d,c,h,u,.5,.06,.5,{col:!1,tint:0}),xn(e,t,d,f,m,c,h-.3,u,x)};l(-3,6.2,0,16769712,95,26),l(9,6.2,-15,16769712,80,24,"flicker"),l(10,6.2,12,16769712,80,24),l(-13,6.2,-22.5,14674175,50,20),l(-27,6.2,-1,16769712,70,22),l(-13,6.2,22.5,14674175,36,18),s.box("emis",13624575,-28,3.94,-19,1.2,.04,.3,{col:!1,tint:0}),xn(e,t,12375807,20,14,-28,3.5,-19),xn(e,t,16751178,22,15,-28,4,17);for(let[c,h]of[[31,-11],[35,14]])s.box("plain",2764081,c,0,h,.18,6,.18),s.box("emis",16773328,c,5.9,h+.3,.3,.1,.5,{col:!1,tint:0}),xn(e,t,16772300,70,26,c,5.6,h+.3);s.box("emis",16773328,-35.9,4.4,4,.1,.2,.5,{col:!1,tint:0}),xn(e,t,16772300,40,20,-36.6,4.2,4),xc(s,27,19,Math.PI/2,3817286,3093304),xc(s,-43.5,-11,0,2895667,2895667),s.box("metal",3494202,-38,0,7.5,1.4,1.3,2.4),s.box("metal",3494202,-12,0,-30.2,2.4,1.3,1.4),s.box("metal",3494202,6,0,30.2,2.4,1.3,1.4),mt(s,-25,30.3,1.2),mt(s,14,-30.3,1.2),mt(s,-40,13,1.1),mt(s,44,-8,1.2),mt(s,23,-27,1.2),en(s,22.5,14.5),en(s,-45.5,10),tn(s,24.5,-10,3,!1),tn(s,24.5,10,3,!1);for(let[c,h,u]of[[33,2,0],[34.8,2.2,.1],[29,-17,1.57],[-39.5,-3,1.57],[-10,29.6,0],[10,-29.4,0],[-4,5.5,0],[-2.2,5.6,.05],[-4.5,-6,0]])s.prop("plasticbarrier",c,0,h,u,1.65,{col:!0,shrink:.9});for(let[c,h,u]of[[-18.6,7,0],[18.6,-20,0],[-33.5,24,1.57],[43,12,0],[-45.6,-3,0]])s.prop("pipes",c,0,h,u,1.5,{col:!0,shrink:.92});for(let[c,h]of[[-3.2,-12],[15,6.5],[-31.5,2],[38,-26],[-22.5,12.2]])s.prop("pallet",c,0,h,i()*.4,1.5,{}),s.prop("cinderblock",c-.2,.2,h,.2,1.6,{}),s.prop("cinderblock",c+.4,.2,h+.3,1.4,1.6,{});return s.prop("wheels_stack",22.3,0,-18.5,0,1.6,{col:!0,shrink:.9}),s.prop("wheels_stack",-46,0,14,.5,1.6,{col:!0,shrink:.9}),s.prop("wheels_stack",17.8,0,17,.9,1.6,{col:!0,shrink:.9}),s.prop("streetlights",31,0,-11,Math.PI/2,.92,{}),s.prop("streetlights",35,0,14,Math.PI/2,.92,{}),s.box("emis",1456672,-43,0,4,3.4,.03,3.4,{col:!1,tint:0}),{name:"INDUSTRIAL WAREHOUSE",bounds:{x0:-48,x1:48,z0:-32,z1:32},spawn:{x:44.5,z:27,yaw:Math.PI/2},env:{fog:[395275,.012],bg:329482,hemi:[5924480,1447964,.75],moon:[9414358,1.5,[30,60,-22]],viewRange:44,detect:1,shotMul:.85,amb:"warehouse",ground:"concrete"},objective:{pos:[-34.3,.8,-22],kind:"terminal",hold:3,prompt:"Hold to access secured terminal",text:"Access the secured terminal in the warehouse office",done:"DATA EXTRACTED"},extraction:{pos:[-43,0,4],text:"Exfiltrate through the west back lot"},routes:[{p:[[-18,0],[-2,0],[-2,-22],[-18,-22]]},{p:[[-18,2],[-18,22],[-3,20],[-2,3]]},{p:[[11,-22],[17.5,-22],[17.5,-9],[12,-6]]},{p:[[9,4],[17,10],[12,22.5],[18,22.5]]},{p:[[-28,-18],[-23.5,-15]],must:1},{p:[[-28,-8],[-28,5],[-23,-1]],must:1},{p:[[-28,14],[-23,18],[-28,23]]},{p:[[24,-20],[34,-20.5],[42,-9],[30,-6]]},{p:[[-30,-28.5],[15,-28.5]]},{p:[[-30,28.5],[2,28.5]]},{p:[[-41,-4],[-41,13],[-38,1]]}],posts:{objective:[[-28,-19],[-27.5,-11.3],[-19.2,-19],[-24,-21]],entrance:[[18,-10,"north loading door"],[18,10,"south loading door"],[-33,0,"west door"],[5,-23.5,"north door"],[-7,23.5,"south door"]]},panel:{x:-19.5,z:-15,face:[-1,0],n:"office alarm"},guards:10,anchors:[{id:"office",name:"administration office",at:[-34.3,.8,-22],stand:[-33,-22],indoor:1,posts:[[-28,-19],[-27.5,-11.3],[-19.2,-19],[-24,-21]]},{id:"machine",name:"machine room",at:[-27,0,15.2],stand:[-27.8,16],indoor:1,posts:[[-28,13.5],[-27,21],[-22.5,16.5]]},{id:"dock",name:"loading dock",at:[15.6,1,23.9],stand:[15.6,22.9],indoor:1,posts:[[12,22.5],[18.4,21.6],[9.5,17.5]]},{id:"containers",name:"container storage",at:[11.3,0,-16.2],stand:[11.3,-15.3],indoor:1,posts:[[11,-22.2],[16.8,-13.5],[1,-15]]},{id:"westbay",name:"west bay",at:[-33.7,0,-5],stand:[-32.8,-4.4],indoor:1,posts:[[-28,-8],[-25,2],[-31,8.6]]},{id:"yard",name:"loading yard",at:[31.8,0,19],stand:[32.6,18.2],posts:[[33,12.5],[25.5,14],[38,19]]},{id:"alley",name:"north service alley",at:[-22,0,-30.3],stand:[-22,-29.3],posts:[[-28,-28.8],[-14,-28.8],[-22,-27.5]]}],entries:[{id:"yard",name:"south-east yard",x:44.5,z:27,yaw:Math.PI/2},{id:"nw",name:"north-west corner",x:-45,z:-29,yaw:-Math.PI/2},{id:"south",name:"south alley",x:-24,z:29.4,yaw:-Math.PI/2}],exits:[{id:"west",name:"west back lot",pos:[-43,0,4]},{id:"east",name:"east gate",pos:[44.5,0,-2]},{id:"north",name:"north alley",pos:[17.5,0,-29.2]}],reinforce:[{x:45,z:-1,n:"east gate"},{x:45,z:-28,n:"north-east service gate"}],pickups:[["med",-33.8,12.2],["med",-22,-24],["ammo",-17.6,-2.6],["ammo",23,16]]}}var cM={metal:"metal",fence:"metal",wood:"wood",concrete:"concrete",plain:"plastic",dirt:"dirt",grass:"dirt",emis:"metal"},sm={};function rm(s,e){sm[s]=e}function am(s,e){let t=new $u,i={id:s,dyn:[],lights:[]};Object.assign(i,(sm[s]||(s==="forest"?oM:lM))(t,i,e)),i.meshes=t.finish(e),i.colliders=t.col,i.nav=new Ju(t.col,i.bounds),i.cover=iM(t.col,i.nav),i.lod=t.lod,Qv(i.colliders);let n=i.env;e.fog=new xa(n.fog[0],n.fog[1]),e.background=new be(n.bg),i.hemi=new ls(n.hemi[0],n.hemi[1],n.hemi[2]),e.add(i.hemi);let r=i.moon=new Zi(n.moon[0],n.moon[1]);i.moonDir=new I(...n.moon[2]).normalize(),r.castShadow=!0,r.shadow.mapSize.set(2048,2048);let a=r.shadow.camera;a.left=a.bottom=-48,a.right=a.top=48,a.near=1,a.far=220,r.shadow.bias=-6e-4,r.shadow.normalBias=.06,e.add(r,r.target);let o=[],l=ju(7);for(let u=0;u<500;u++){let d=l()*6.283,f=.08+l()*.9,m=Math.sqrt(1-f*f);o.push(Math.cos(d)*m*380,f*380,Math.sin(d)*m*380)}let c=new at;c.setAttribute("position",new Ke(o,3)),e.add(new Nn(c,new ln({color:11452392,size:1.4,sizeAttenuation:!1,fog:!1})));let h=new ke(new Ca(13,24),new st({color:14674175,fog:!1}));return h.position.copy(i.moonDir).multiplyScalar(360),h.lookAt(0,0,0),e.add(h),i}var yt={ak:{slot:"primary",name:"AK-47",desc:"Hard hitting, heavy recoil",auto:!0,dmg:36,rpm:600,mag:30,reserve:120,recoil:1.45,recoilH:.5,hip:2.1,ads:.2,reload:2.6,adsT:.24,move:.93,kick:.07,noise:44,falloff:[35,.75],optics:["iron","reddot","holo","scope"],muzzle:1,grip:1,laser:1},m4:{slot:"primary",name:"M4A1",desc:"Balanced, controllable",auto:!0,dmg:28,rpm:780,mag:30,reserve:150,recoil:.82,recoilH:.26,hip:1.5,ads:.13,reload:2.1,adsT:.19,move:.97,kick:.045,noise:42,falloff:[40,.8],optics:["iron","reddot","holo","scope"],muzzle:1,grip:1,laser:1},sniper:{slot:"primary",name:"L96 SNIPER",desc:"Bolt-action precision rifle, 4\u201310x scope",auto:!1,bolt:1.25,dmg:115,rpm:46,mag:5,reserve:25,recoil:5.2,recoilH:.9,hip:6,ads:0,reload:3.3,adsT:.36,move:.86,kick:.17,noise:62,optics:["vscope","scope"],muzzle:1,head:3,rk:"bolt",ins:.55},dmr:{slot:"primary",name:"SR-9 DMR",desc:"Semi-auto marksman rifle, scoped",auto:!1,dmg:68,rpm:230,mag:10,reserve:50,recoil:2.7,recoilH:.5,hip:3.4,ads:.03,reload:2.8,adsT:.3,move:.9,kick:.11,noise:50,optics:["scope","vscope"],muzzle:1,head:3},pistol:{slot:"secondary",name:"P9 PISTOL",desc:"Fast handling sidearm",auto:!1,dmg:30,rpm:420,mag:15,reserve:60,recoil:1.25,recoilH:.3,hip:1.2,ads:.3,reload:1.4,adsT:.12,move:1.06,kick:.085,noise:36,falloff:[20,.65],optics:["iron"],muzzle:1,laser:1,rk:"pistol",ins:.55},smg:{slot:"secondary",name:"VK-9 SMG",desc:"High rate of fire, short range",auto:!0,dmg:21,rpm:900,mag:30,reserve:120,recoil:.6,recoilH:.36,hip:1.3,ads:.3,reload:1.9,adsT:.14,move:1.03,kick:.035,noise:38,falloff:[16,.6],optics:["iron","reddot","holo"],muzzle:1,grip:1,laser:1},shotgun:{slot:"secondary",name:"M590 SHOTGUN",desc:"8 pellets, devastating up close",auto:!1,pellets:8,dmg:15,rpm:72,mag:6,reserve:30,recoil:4.4,recoilH:.8,hip:3.2,ads:2.5,reload:.62,shells:1,rk:"shell",ins:.6,adsT:.2,move:.95,kick:.15,noise:48,falloff:[9,.35],optics:["iron","reddot"],laser:1},knife:{slot:"melee",name:"COMBAT KNIFE",desc:"Silent. Lethal from behind",melee:!0,dmg:70,range:2.1,rate:.6,move:1.1,mag:0,reserve:0}},qs={iron:{name:"Iron sights",fov:58,eye:.3},reddot:{name:"Red dot",fov:55,eye:.19,ret:"dot"},holo:{name:"Holographic",fov:52,eye:.19,ret:"holo"},scope:{name:"4x scope",zoom:[4,4],eye:.085,ret:"scope",adsT:.06,desc:"fixed 4x"},vscope:{name:"4\u201310x variable",zoom:[4,10],eye:.085,ret:"scope",adsT:.1,desc:"mouse wheel adjusts zoom"}},Xn={assault:{name:"ASSAULT",desc:"3 frag \xB7 1 flash \xB7 1 medkit \xB7 2 stims",frag:3,flash:1,smoke:0,med:1,stim:2},recon:{name:"RECON",desc:"1 frag \xB7 2 flash \xB7 2 smoke \xB7 2 medkits \xB7 1 stim",frag:1,flash:2,smoke:2,med:2,stim:1},medic:{name:"MEDIC",desc:"1 frag \xB7 1 flash \xB7 1 smoke \xB7 3 medkits \xB7 3 stims",frag:1,flash:1,smoke:1,med:3,stim:3}},hM=s=>({optic:yt[s].optics?yt[s].optics[0]:"iron",muzzle:!1,grip:!1,laser:s==="m4"});function uM(){let s={};for(let e in yt)yt[e].melee||(s[e]=hM(e));return{primary:"m4",secondary:"pistol",kit:"assault",att:s}}function lm(){let s=uM();try{let e=JSON.parse(localStorage.getItem("sp2_loadout")||"null");if(e&&yt[e.primary]&&yt[e.secondary]&&Xn[e.kit]){s.primary=e.primary,s.secondary=e.secondary,s.kit=e.kit;for(let t in s.att)e.att&&e.att[t]&&Object.assign(s.att[t],e.att[t])}}catch{}for(let e in s.att){let t=yt[e],i=s.att[e];t.optics.includes(i.optic)||(i.optic=t.optics[0]),t.muzzle||(i.muzzle=!1),t.grip||(i.grip=!1),t.laser||(i.laser=!1)}return s}function cm(s){try{localStorage.setItem("sp2_loadout",JSON.stringify(s))}catch{}}function no(s,e={}){let t=yt[s],i={...t,id:s,att:e,sup:!!e.muzzle,optic:qs[e.optic]||qs.iron};return t.melee||(i.flash={ak:.9,m4:.8,dmr:1.05,sniper:1.3,pistol:.55,smg:.65,shotgun:1.35}[s]||.8,i.rk=t.rk||"rifle",i.ins=t.ins||.6,e.muzzle&&(i.noise=Math.round(t.noise*.3),i.recoil*=.92,i.falloff&&(i.falloff=[i.falloff[0]*.85,i.falloff[1]])),e.grip&&(i.recoil*=.8,i.recoilH*=.8,i.hip*=.88,i.adsT*=1.06),i.adsT+=i.optic.adsT||0),i}function vc(s,e){if(yt[s].melee)return"";let t=[];return e.optic&&e.optic!=="iron"&&t.push(qs[e.optic].name.toUpperCase()),e.muzzle&&t.push("SUPPRESSOR"),e.grip&&t.push("FOREGRIP"),e.laser&&t.push("LASER"),t.join(" \xB7 ")}var om={},Wr=(s,e=.6,t=.2,i)=>{let n=s+"_"+e+"_"+t;return om[n]||(om[n]=new Pt({color:s,roughness:e,metalness:t,...i}))},yc=()=>Wr(1776670,.85,0),dM=()=>Wr(4673852,.95,0),yn=()=>Wr(1382170,.5,.6);function Ei(s,e,t,i,n,r,a=0,o=0,l=0){let c=new ke(e,t);return c.position.set(i,n,r),c.rotation.set(a,o,l),s.add(c),c}var _n=(s,e,t)=>new wt(s,e,t),fM=(s,e)=>new Ra(s,e,3,8);function io(s,e,t,i,n){let r=new I().subVectors(t,e),a=new ke(fM(i,Math.max(.01,r.length()-i)),n);return a.position.copy(e).addScaledVector(r,.5),a.quaternion.setFromUnitVectors(new I(0,1,0),r.normalize()),s.add(a),a}function _c(s,e,t,i,n){let r=new Mt;s.add(r);let a=(l,c,h)=>new I(e.x+l,e.y+c,e.z+h),o=a(0,0,0).lerp(t,.2);io(r,a(0,0,0),o,.034,yc()),io(r,o,t,.043,dM()),Ei(r,_n(.05,.022,.022),yn(),o.x,o.y,o.z).lookAt(t);for(let l=0;l<4;l++){let c=(l-1.5)*.021;n==="y"?io(r,a(-i*.012,c*.95,-.012),a(i*.03,c*.95,-.042),.0098,yc()):io(r,a(-i*.02,-.005,c),a(-i*.036,.04,c),.0098,yc())}return io(r,a(i*.022,.02,.008),a(i*.03,.036,-.03),.011,yc()),r}function pM(s){let e=new Mt;if(s==="reddot")Ei(e,_n(.03,.012,.05),yn(),0,.006,0),Ei(e,new xt(.017,.017,.045,14,1,!0),Wr(1513755,.5,.6,{side:qt}),0,.03,0,Math.PI/2),Ei(e,new Ar(.017,.0028,6,16),yn(),0,.03,-.022),Ei(e,new Ar(.017,.0028,6,16),yn(),0,.03,.022),Ei(e,_n(.012,.012,.012),yn(),.022,.03,0),e.center=.03;else{Ei(e,_n(.038,.016,.075),yn(),0,.008,0),Ei(e,_n(.038,.02,.03),yn(),0,.022,.028);for(let i of[-1,1])Ei(e,_n(.004,.036,.03),yn(),i*.019,.034,-.02);Ei(e,_n(.042,.004,.03),yn(),0,.053,-.02),e.center=.034}let t=new st({color:7319744,transparent:!0,opacity:.1,depthWrite:!1});return Ei(e,new $i(.03,.03),t,0,e.center,s==="reddot"?0:-.02),e}function so(s,e={},t){let i=yt[s],n=new Mt;if(i.melee){let x=At.models.acc_knife.clone(!0);return x.scale.setScalar(.24),x.rotation.y=Math.PI/2,n.add(x),t||_c(n,new I(0,-.005,0),new I(.1,-.2,.4),1,"y"),n.hip=new I(.2,-.17,-.42),n.adsPos=n.hip.clone(),n.muzzle=new I(0,0,-.25),n.eject=n.muzzle,n.fov=75,n.melee=!0,n}let r=pc(s),a=r.def;n.add(r);let o=(a.sight-a.grip[1])*a.s,l=a.rail?r.pt(a.rail).z+.02:.02,c=qs[e.optic||"iron"].eye,h=e.optic;if(a.scope){let x=r.pt(a.scope);o=x.y,l=x.z}else if(h==="reddot"||h==="holo"){let x=pM(h),p=r.pt(a.rail);x.position.copy(p),n.add(x),o=p.y+x.center,l=p.z}else if(h==="scope"||h==="vscope"){let x=At.models.acc_scope.clone(!0),p=r.pt(a.rail);x.scale.setScalar(.115),x.rotation.y=Math.PI/2,x.position.set(0,p.y+.006,p.z-.02),n.add(x),o=p.y+.006+.19*.115,l=p.z-.02+1.09*.115}if(n.muzzle=r.muzzle.clone(),e.muzzle){let x=At.models.acc_suppressor.clone(!0);x.scale.setScalar(.115),x.rotation.y=Math.PI/2,x.position.copy(n.muzzle).z+=.012,n.add(x),n.muzzle.z-=.19}let u=r.pt(a.hand),d=u.clone();if(d.y-=.03,e.grip){let x=At.models.acc_grip.clone(!0);x.scale.setScalar(.12),x.position.set(0,u.y-.42*.12,u.z-.03),n.add(x),d=new I(0,u.y-.055,u.z-.03)}if(e.laser){let x=s==="pistol"?-.06:u.z-.05,p=s==="pistol"?(a.muzzle[1]-a.grip[1])*a.s-.022:u.y+.035,g=s==="pistol"?0:.028;Ei(n,_n(.02,.022,.06),yn(),g,p,x),Ei(n,_n(.008,.008,.003),new st({color:16722474}),g,p,x-.031),n.laser=new I(g,p,x-.033)}n.lh=new Mt,n.add(n.lh),t||(s==="pistol"?_c(n.lh,new I(-.012,-.035,0),new I(-.2,-.25,.38),-1,"y"):_c(n.lh,d,new I(-.26,-.3,d.z+.42),-1,e.grip?"y":"z")),t||(n.rh=_c(n,new I(0,-.02,.012),new I(.13,-.26,.42),1,"y")),n.lhRest=s==="pistol"?new I(-.012,-.035,0):d.clone(),n.magWell=r.pt(a.mag),n.magWell.y-=.03;let f=i.shells,m=n.magProxy=new ke(f?new xt(.011,.011,.06,8):_n(.026,s==="pistol"?.1:s==="sniper"||s==="dmr"?.06:.13,.05),f?Wr(9054754,.5,.1):Wr(s==="ak"?2761760:2500908,.5,.5));return f&&(m.rotation.x=Math.PI/2),m.position.copy(n.lhRest),m.position.y+=f?.03:.05,m.visible=!1,n.lh.add(m),n.gun=r,n.eject=r.pt(a.eject,.5),n.hip=s==="pistol"?new I(.13,-.14,-.42):new I(.16,-.165,-.37),n.adsPos=new I(0,-o,-c-l),n.sightY=o,n}var oi={x:0,y:0,z:0,h:0,r:0},mM=s=>s.solid&&oi.x+oi.r>s.x0&&oi.x-oi.r<s.x1&&oi.z+oi.r>s.z0&&oi.z-oi.r<s.z1&&oi.y<s.y1-.001&&oi.y+oi.h>s.y0,us=(s,e)=>1-Math.exp(-s*e),yi=(s,e,t)=>s<e?e:s>t?t:s,gM=.34,Qu=["frag","flash","smoke"],hm={frag:"FRAG",flash:"FLASH",smoke:"SMOKE"},Mc=class{constructor(e,t,i){this.g=e,this.pos=new I(t.x,0,t.z),this.vel=new I,this.yaw=t.yaw,this.pitch=0,this.eye=1.62,this.height=1.8,this.hp=100,this.dead=!1,this.grounded=!0,this.crouch=!1,this.crouchToggle=!1,this.speed=0,this.bob=0,this.dip=0,this.sinceHit=99,this.noSprint=0,this.sprintF=0,this.sprinting=!1,this.lean=0,this.leanX=0,this.leanZ=0,this.mantle=null,this.stimT=0,this.blind=0,this.shake=0;let n=[i.primary,i.secondary,"knife"];this.slots=n.map(c=>{let h=i.att[c]||{},u=no(c,h),d=so(c,h);return d.visible=!1,e.wscene.add(d),{id:c,st:u,view:d,mag:u.mag,reserve:u.reserve,zoom:u.optic&&u.optic.zoom?u.optic.zoom[0]:0}}),this.cur=0,this.slots[0].view.visible=!0,this.shown=0,this.next=-1,this.swT=0,this.relT=0,this.reloading=!1,this.fireT=0,this.adsF=0,this.rp=0,this.ry=0,this.kick=0,this.burst=0,this.laserOn=!0,this.spread=1,this.swayX=0,this.swayY=0,this.scoped=!1;let r=Xn[i.kit];this.inv={frag:r.frag,flash:r.flash,smoke:r.smoke,med:r.med,stim:r.stim},this.throwSel=Qu.find(c=>this.inv[c]>0)||"frag",this.use=null;let a=document.createElement("canvas");a.width=a.height=64;let o=a.getContext("2d"),l=o.createRadialGradient(32,32,2,32,32,32);l.addColorStop(0,"rgba(255,255,230,1)"),l.addColorStop(.3,"rgba(255,200,90,.8)"),l.addColorStop(1,"rgba(255,120,20,0)"),o.fillStyle=l,o.fillRect(0,0,64,64),this.flash=new ke(new $i(.2,.2),new st({map:new Dn(a),transparent:!0,blending:Ji,depthWrite:!1})),this.flash.visible=!1,this.flashT=0,e.wscene.add(this.flash),this.boltT=0,this.relDur=1,this.relIn=!1,this.pumpT=0,this.breath=4,this.steady=!1,this.swT2=0,this.fwd=new I,this._v=new I,this._v2=new I,this.muzzleW=new I,this.laserW=new I,this.eyePos=new I}setSlot(e,t,i){let n=this.g,r=this.slots[e],a=no(t,i),o=so(t,i);n.wscene.remove(r.view),o.visible=this.shown===e,n.wscene.add(o),this.slots[e]={id:t,st:a,view:o,mag:a.mag,reserve:a.reserve,zoom:a.optic&&a.optic.zoom?a.optic.zoom[0]:0},this.reloading=!1,this.boltT=0,this.pumpT=0,this.fireT=0,this.adsF=0}get slot(){return this.slots[this.cur]}get w(){return this.slots[this.cur].st}busy(){return this.swT>0||this.reloading||!!this.use||!!this.mantle}hits(e,t,i,n=this.height,r=gM){return oi.x=e,oi.y=t,oi.z=i,oi.h=n,oi.r=r,tm(this.g.world.colliders,e-r,e+r,i-r,i+r,mM)}switchTo(e){e===this.cur||this.swT>0||this.dead||this.use||!this.slots[e]||(this.next=e,this.swT=.4,this.reloading=!1,this.g.audio.click(.35))}reload(){let e=this.slot;this.busy()||e.st.melee||e.mag>=e.st.mag||e.reserve<=0||(this.reloading=!0,this.relT=this.relDur=e.st.reload,this.relIn=!1,this.g.audio.reload(e.st.reload,e.st.rk,e.st.ins))}damage(e,t,i){this.dead||(this.hp-=e,this.sinceHit=0,this.lastHit=i,this.g.onHurt(t,e),this.hp<=0&&(this.hp=0,this.dead=!0))}zoomStep(e){let t=this.slot,i=t.st.optic;return t.st.melee||!i||!i.zoom||i.zoom[1]<=i.zoom[0]||this.adsF<.5?!1:(t.zoom=yi(Math.round((t.zoom+e*.25)*4)/4,i.zoom[0],i.zoom[1]),!0)}adsFov(){let e=this.slot,t=e.st.optic;return t.zoom?2*Math.atan(Math.tan(this.g.fov*Math.PI/360)/e.zoom)*180/Math.PI:t.fov}cycleThrow(){let e=Qu.indexOf(this.throwSel);for(let t=1;t<=3;t++){let i=Qu[(e+t)%3];if(this.inv[i]>0){this.throwSel=i;break}}this.g.audio.click(.3)}startUse(e){if(this.busy()||this.dead)return;let t=this.g;if(e==="throw"){if(this.inv[this.throwSel]<=0&&(this.cycleThrow(),this.inv[this.throwSel]<=0))return;this.use={type:e,t:0,dur:.6,at:.3}}else if(e==="med"){if(this.inv.med<=0||this.hp>=100)return;this.use={type:e,t:0,dur:2.4,at:2.3},t.audio.medkit()}else if(e==="stim"){if(this.inv.stim<=0)return;this.use={type:e,t:0,dur:.75,at:.45}}else e==="melee"&&(this.use={type:e,t:0,dur:yt.knife.rate,at:.16},this.show(2),t.audio.swish());this.adsF=Math.min(this.adsF,.5)}show(e){this.shown!==e&&(this.slots[this.shown].view.visible=!1,this.slots[e].view.visible=!0,this.shown=e)}finishUse(e){let t=this.g,i=t.camera;if(e.type==="throw"){let n=this.throwSel,r=this._v.set(1,0,0).applyQuaternion(i.quaternion),a=this._v2.copy(i.position).addScaledVector(this.fwd,.45).addScaledVector(r,.18);a.y-=.08;let o=new I().copy(this.fwd).multiplyScalar(this.crouch?11:15);o.y+=3.6,o.x+=this.vel.x*.5,o.z+=this.vel.z*.5,t.spawnGrenade(n,a.clone(),o,"player"),this.inv[n]--,this.inv[n]<=0&&this.cycleThrow()}else e.type==="med"?(this.inv.med--,this.hp=Math.min(100,this.hp+65),t.audio.pickup()):e.type==="stim"?(this.inv.stim--,this.hp=Math.min(100,this.hp+25),this.stimT=8,t.audio.stim()):e.type==="melee"&&t.melee()}moveStep(e,t,i,n,r){let a=this.g,o=this.pos,l=Math.sin(this.yaw),c=Math.cos(this.yaw),h=(t.KeyW?1:0)-(t.KeyS?1:0),u=(t.KeyD?1:0)-(t.KeyA?1:0),d=Math.hypot(h,u)||1;h/=d,u/=d,this.noSprint-=e;let f=(t.ShiftLeft||t.ShiftRight)&&h>0&&!this.crouch&&this.noSprint<=0&&!i.rmb&&this.grounded&&!this.use;this.sprinting=f;let m=(this.crouch?2.3:f?6.9:4.5)*n.move*(1-.42*this.adsF)*(this.use&&this.use.type==="med"?.55:1)*(this.stimT>0?1.12:1)*(1-Math.abs(this.lean)*.5),x=(-l*h+c*u)*m,p=(-c*h-l*u)*m,g=this.vel.x,_=this.vel.z,M=(this.grounded?h||u?60:48:9)*e,v=x-this.vel.x,b=p-this.vel.z,S=Math.hypot(v,b);S>M?(this.vel.x+=v/S*M,this.vel.z+=b/S*M):(this.vel.x=x,this.vel.z=p),r&&i.jump&&this.grounded&&(this.vel.y=this.crouch?5.2:6.6,this.grounded=!1,a.audio.step(.25));let y=this.vel.y;this.vel.y-=21*e;let E=this.grounded,L=(g+this.vel.x)*.5*e,R=(_+this.vel.z)*.5*e,D=P=>{let z=P==="x"?o.x+L:o.z+R,H=P==="x"?z:o.x,F=P==="x"?o.z:z,Y=this.hits(H,o.y,F);if(!Y){o[P]=z;return}let G=Y.y1-o.y;if(E&&G<=.45&&!this.hits(H,Y.y1,F)){o[P]=z,o.y=Y.y1;return}if(t.Space&&G>.45&&G<=1.4&&!this.mantle&&!this.use){let q=Math.sign(this.vel[P])||1,te=P==="x"?o.x+q*.75:o.x,fe=P==="x"?o.z:o.z+q*.75;this.hits(te,Y.y1+.02,fe,1.2)||(this.mantle={t:0,x0:o.x,z0:o.z,y0:o.y,x1:te,z1:fe,y1:Y.y1},this.crouchToggle=this.crouchToggle||!!this.hits(te,Y.y1+.02,fe,1.8),a.audio.step(.3))}this.vel[P]=0};D("x"),D("z");let N=this.vel.y,B=o.y+(y+this.vel.y)*.5*e;if(this.grounded=!1,B<=0)B=0,this.grounded=!0,this.vel.y=0;else{let P=this.hits(o.x,B,o.z);P&&(this.vel.y<=0?(B=P.y1,this.grounded=!0):B=o.y,this.vel.y=0)}if(this.mantle||(o.y=B),this.grounded&&!E&&N<-4&&(this.dip=Math.min(.16,-N*.014),a.audio.land(),a.sound(o,9,"step"),N<-13&&this.damage((-N-13)*6,o,{name:"a fall",dist:0,x:o.x,z:o.z,fall:!0})),this.speed=Math.hypot(this.vel.x,this.vel.z),this.grounded&&this.speed>.6){let P=this.bob;this.bob+=this.speed*e*1.75,Math.floor(P/Math.PI)!==Math.floor(this.bob/Math.PI)&&(a.audio.step(this.crouch?.06:f?.26:.15),this.crouch||a.sound(o,f?13:6.5,"step"))}}update(e){let t=this.g,i=t.inp,n=i.k,r=this.slot,a=r.st,o=a.melee?1:1+(Math.tan(this.adsFov()*Math.PI/360)/Math.tan(t.fov*Math.PI/360)-1)*this.adsF,l=.0022*t.sens*o;this.yaw-=i.mx*l,this.pitch=yi(this.pitch-i.my*l,-1.5,1.5);let c=t.weaponSway??1,h=1/(60*Math.max(e,.001));this.swayX+=(yi(-i.mx*h*5e-4,-.03,.03)*c-this.swayX)*us(10,e),this.swayY+=(yi(i.my*h*5e-4,-.03,.03)*c-this.swayY)*us(10,e);let u=this.pos,d=Math.sin(this.yaw),f=Math.cos(this.yaw);if(!!(n.ControlLeft||n.ControlRight)||this.crouchToggle?(this.crouch=!0,this.height=1.2):this.crouch&&(this.height=1.8,this.hits(u.x,u.y,u.z)?this.height=1.2:this.crouch=!1),this.eye+=((this.crouch?1:1.62)-this.eye)*us(12,e),this.stimT=Math.max(0,this.stimT-e),this.mantle){let F=this.mantle;F.t+=e/.42;let Y=Math.min(1,F.t),G=Y*Y*(3-2*Y);u.y=F.y0+(F.y1-F.y0)*Math.min(1,G*1.5),u.x=F.x0+(F.x1-F.x0)*Math.max(0,G*1.6-.6),u.z=F.z0+(F.z1-F.z0)*Math.max(0,G*1.6-.6),this.vel.set(0,0,0),this.grounded=!0,Y>=1&&(this.mantle=null)}else{let F=Math.max(1,Math.ceil(e*120-1e-6)),Y=e/F;for(let G=0;G<F&&!this.mantle;G++)this.moveStep(Y,n,i,a,G===0);i.jump=!1}this.dip+=(0-this.dip)*us(9,e),this.sprintF+=((this.sprinting?1:0)-this.sprintF)*us(9,e);let x=this.sprinting||this.mantle?0:(n.KeyF?1:0)-(n.KeyQ?1:0);this.lean+=(x-this.lean)*us(9,e);let p=this.lean*.46;for(let F=0;F<4&&Math.abs(p)>.02&&this.hits(u.x+f*p,u.y+this.eye-.25,u.z-d*p,.4,.14);F++)p*=.6,F===3&&(p=0);if(this.leanX=f*p,this.leanZ=-d*p,this.sinceHit+=e,this.sinceHit>5&&this.hp<20&&(this.hp=Math.min(20,this.hp+4*e)),this.stimT>2&&(this.hp=Math.min(100,this.hp+2.5*e)),this.blind=Math.max(0,this.blind-e*(this.blind>1?1:.55)),this.shake=Math.max(0,this.shake-e*2.5),this.use){let F=this.use;F.t+=e,!F.done&&F.t>=F.at&&(F.done=!0,this.finishUse(F)),F.t>=F.dur&&(this.use=null,this.show(this.cur))}if(this.swT>0&&(this.swT-=e,this.swT<=.2&&this.next>=0&&(this.cur=this.next,this.next=-1,this.show(this.cur))),this.reloading){this.relT-=e;let F=1-this.relT/this.relDur;if(!this.relIn&&F>=a.ins)if(this.relIn=!0,a.shells)r.mag++,r.reserve--;else{let Y=Math.min(a.mag-r.mag,r.reserve);r.mag+=Y,r.reserve-=Y}this.relT<=0&&(a.shells&&r.mag<a.mag&&r.reserve>0&&!i.lmb?(this.relT=this.relDur=a.reload,this.relIn=!1,t.audio.reload(a.reload,"shell",a.ins)):(this.reloading=!1,a.shells&&(this.pumpT=.45,t.audio.pump())))}this.pumpT>0&&(this.pumpT-=e),this.boltT>0&&(this.boltT-=e);let g=i.rmb&&!this.sprinting&&this.swT<=0&&!this.reloading&&!this.use&&!a.melee&&!this.mantle;this.adsF=yi(this.adsF+(g?1:-1)*e/(a.adsT||.15),0,1),this.scoped=!a.melee&&a.optic.ret==="scope"&&this.adsF>.9,this.steady=this.scoped&&!!(n.ShiftLeft||n.ShiftRight)&&this.breath>0,this.breath=yi(this.breath+(this.steady?-e:e*.6),0,4),this.swT2+=e;let _=this.scoped?85e-5*r.zoom*(this.crouch?.55:1)*(1+this.speed*.9)*(this.steady?.18:1):0;this.scopeX=Math.sin(this.swT2*1.07)*_+Math.sin(this.swT2*2.3)*_*.3,this.scopeY=Math.sin(this.swT2*.81+1.3)*_*.8,this.fireT-=e,this.fireT<-.22&&(this.burst=0),(a.auto?i.lmb:i.lmbPressed)&&this.fireT<=0&&this.boltT<=0&&this.pumpT<=0&&this.swT<=0&&!this.use&&!this.mantle&&(a.melee?this.startUse("melee"):this.reloading?a.shells&&r.mag>0&&(this.reloading=!1,this.pumpT=.4,t.audio.pump()):r.mag>0?this.shoot():(i.lmbPressed&&t.audio.click(.5),this.reload())),i.lmbPressed=!1;let v=this.speed/4.5;a.melee||(this.spread=a.hip*(1+v*.9+(this.grounded?0:2))*(this.crouch?.75:1)*(a.att.laser&&this.laserOn?.6:1)*(1-this.adsF)+a.ads*(1+v*.6)*this.adsF+this.burst*.03);let b=us(7,e);this.rp-=this.rp*b,this.ry-=this.ry*b,this.kick-=this.kick*us(14,e);let S=t.camera,y=t.camMotion??.5,E=t.weaponSway??1,L=Math.min(1,v),R=this.swT2,D=Math.sin(this.bob*2)*.028*L*(1-this.adsF*.6),N=Math.cos(this.bob)*.02*L,B=this.shake*.05*y,P=B*(Math.sin(R*31)+Math.sin(R*47)*.5),z=B*(Math.sin(R*37+1)+Math.sin(R*53)*.5);S.position.set(u.x+this.leanX+P*f,u.y+this.eye+D*y-this.dip*y-Math.abs(p)*.08+z,u.z+this.leanZ-P*d),S.rotation.set(this.pitch+this.rp+(this.scopeY||0),this.yaw+this.ry+(this.scopeX||0),-p*.3*y);let H=t.fov+((a.melee?t.fov:this.adsFov())-t.fov)*this.adsF*this.adsF*(3-2*this.adsF)+this.sprintF*4*y;Math.abs(S.fov-H)>.01&&(S.fov=H,S.updateProjectionMatrix()),S.updateMatrixWorld(),S.getWorldDirection(this.fwd),this.eyePos.copy(S.position),this.animate(e,N*E,D*E)}shoot(){let e=this.g,t=this.slot,i=t.st,n=e.camera;t.mag--,this.fireT=Math.max(this.fireT,-.02)+60/i.rpm,this.noSprint=.3,this.burst++,i.bolt&&t.mag>0?(this.boltT=i.bolt,e.audio.bolt()):i.pellets&&t.mag>0&&(this.pumpT=.5,e.audio.pump(.12));let r=this.spread*Math.PI/180;for(let h=0;h<(i.pellets||1);h++){let u=Math.random()*6.283,d=Math.sqrt(Math.random())*r,f=this._v.set(Math.cos(u)*Math.tan(d),Math.sin(u)*Math.tan(d),-1).normalize().applyQuaternion(n.quaternion);e.playerShot(n.position,f,i,this.muzzleW,h===0)}let a=1-this.adsF*.25,o=this.burst;this.rp+=i.recoil*(o<3?1.15:.85)*Math.PI/180*a*(this.crouch?.85:1);let l=i.id==="ak"&&o>4?Math.sin(o*.8)*1.5+(Math.random()-.5):(Math.random()-.5)*2;this.ry+=l*i.recoilH*Math.PI/180*a,this.kick=Math.min(.13,this.kick+i.kick),i.sup||(this.flashT=.045,this.flash.rotation.z=Math.random()*6,this.flash.scale.setScalar(i.flash*(.8+Math.random()*.45)),e.fx.muzzle(n.position,i.flash)),e.audio.shot(i.id,i.sup),e.sound(this.pos,i.noise*e.world.env.shotMul,"shot"),e.stats.shots++;let c=t.view;e.fx.shell(this._v.copy(c.eject).applyMatrix4(c.matrixWorld).applyQuaternion(n.quaternion).add(n.position),this._v2.set(1,.6,0).applyQuaternion(n.quaternion))}animate(e,t,i){let n=this.g,r=this.slots[this.shown].view,a=this.slots[this.shown].st,o=a.melee?0:this.adsF,l=r.hip,c=r.adsPos,h=l.x+(c.x-l.x)*o,u=l.y+(c.y-l.y)*o,d=l.z+(c.z-l.z)*o,f=0,m=.03*(1-o),x=-this.lean*.12*(1-o*.5),p=1-o*.88,g=Math.sin(performance.now()*.0016)*.0025*p;if(h+=this.swayX*p+t*.5*p,u+=this.swayY*p+i*.45*p-this.dip*.4+g,d+=this.kick*(1-o*.35),f+=this.kick*1*(1-o*.65),this.swT>0){let R=Math.sin((1-this.swT/.4)*Math.PI);u-=R*.3,f-=R*.7}let _=0,M=0,v=0,b=!1;if(this.reloading){let R=yi(1-this.relT/this.relDur,0,1),D=a.rk,N=Math.sin(Math.min(1,R*1.04)*Math.PI),B=r.magWell,P=r.lhRest;D==="shell"?(u+=.01,f+=.1,x+=.3,h-=.03):D==="pistol"?(u+=N*.03,f+=N*.28,x+=N*.3,h-=N*.04):(u+=N*.015,f+=N*.12,x+=N*.42,h-=N*.05);let z=B.x-P.x,H=B.y-P.y,F=B.z-P.z,Y=a.ins,G=q=>q*q*(3-2*q);if(D==="shell"){let q=R<Y?G(R/Y):1-G((R-Y)/(1-Y));_=z*q,M=H*q-(1-q)*.1*Math.sin(R*Math.PI),v=F*q,b=R<Y}else{let q=Y*.3,te=Y*.55,fe=Y*.72,we=Math.min(.97,Y+.2),Z=D==="pistol"?.16:.22,oe=0,ve=0;if(R<q?oe=G(R/q):R<te?(oe=1,ve=G((R-q)/(te-q)),b=!0):R<fe?(oe=1,ve=1,b=R>(te+fe)/2):R<Y?(oe=1,ve=1-G((R-fe)/(Y-fe)),b=!0):R<we&&(oe=1-G((R-Y)/(we-Y))),_=z*oe-ve*.03,M=H*oe-ve*Z,v=F*oe+ve*.06,R>we&&D!=="pistol"){let Ce=Math.sin(yi((R-we)/(1-we),0,1)*Math.PI);d+=Ce*.03,x-=Ce*.25}if(R>Y&&D==="pistol"){let Ce=Math.sin(yi((R-Y)/(1-Y),0,1)*Math.PI);d-=Ce*.02,f-=Ce*.15}}}if(this.boltT>0&&a.bolt){let R=1-this.boltT/a.bolt,D=Math.sin(yi((R-.15)/.7,0,1)*Math.PI);x+=D*.2,f+=D*.07,d+=Math.sin(yi((R-.3)/.4,0,1)*Math.PI)*.04,u-=D*.015}if(this.pumpT>0){let R=Math.sin(yi(1-this.pumpT/.45,0,1)*Math.PI);v+=R*.07,f+=R*.05}r.magProxy&&(r.magProxy.visible=b);let S=this.use;if(S){let R=Math.sin(yi(S.t/S.dur,0,1)*Math.PI);if(S.type==="melee"){let D=yi(S.t/.22,0,1),N=Math.sin(D*Math.PI);d-=N*.32,h-=N*.16,m+=.5-D*1.1,f+=.25-N*.5,x+=.6}else u-=R*.34,f-=R*.8}this.mantle&&(u-=.3,f-=.6);let y=this.sprintF*(a.melee?.4:1);u-=y*.05,m+=y*.5,f-=y*.18,h-=y*.04,r.position.set(h,u,d),r.rotation.set(f,m,x),r.lh&&r.lh.position.set(_,M,v),r.visible=!this.scoped,r.updateMatrixWorld();let E=n.camera.quaternion,L=n.camera.position;this.muzzleW.copy(r.muzzle).applyMatrix4(r.matrixWorld).applyQuaternion(E).add(L),r.laser&&this.laserW.copy(r.laser).applyMatrix4(r.matrixWorld).applyQuaternion(E).add(L),this.flashT>0&&!this.scoped?(this.flashT-=e,this.flash.visible=!0,this.flash.position.copy(r.muzzle).applyMatrix4(r.matrixWorld),this.flash.position.z-=.03):(this.flash.visible=!1,this.flashT=0)}};var xM=/^(root|pelvis|thigh|calf|foot|ball)/,Tc={idle:"Idle_Loop",walk:"Walk_Loop",jog:"Jog_Fwd_Loop",sprint:"Sprint_Loop",cidle:"Crouch_Idle_Loop",cwalk:"Crouch_Fwd_Loop"},id={aimN:"Pistol_Aim_Neutral",aimU:"Pistol_Aim_Up",aimD:"Pistol_Aim_Down"},Ec=Object.keys(Tc),nd=Object.keys(id),Bi=new Float32Array(Ec.length),Xr=new Float32Array(nd.length),bc=(s,e)=>1-Math.exp(-s*e),yM=["Pistol_Reload","OverhandThrow","Interact","Idle_TalkingPhone_Loop","Hit_Chest","Hit_Head"],_M=["Death01","Hit_Knockback","ClimbUp_1m","Roll","Jump_Start"],um={guard:{jacket:4147253,pants:3554607,gear:2501408,helmet:3093799},aggressor:{jacket:5260599,pants:4274222,gear:2762015,helmet:3419686},cautious:{jacket:3686986,pants:3094333,gear:2106923,helmet:2633525},elite:{jacket:2303530,pants:1974564,gear:1184790,helmet:1513756},hostage:{jacket:11034668,pants:11034668,civ:"hostage",skin:9399125},hvt:{jacket:10130312,pants:2895411,civ:"hvt",skin:9399125}},Ne=null,dm=new I,fm=new I,pm=new I,ed=new I,vM=new I,MM=new I,bM=new I,Hi=new gt,td=new gt,SM=new I(0,1,0);function Sc(s,e){let t=At.clips[s];return new Hn(s+(e?"_L":"_U"),t.duration,t.tracks.filter(i=>xM.test(i.name)===e))}function TM(){let s=At.models.soldier;s.updateMatrixWorld(!0);let e=[];s.traverse(g=>g.isSkinnedMesh&&e.push(g));let t=e.find(g=>g.material.name==="M_Main")||e[0],i=t.skeleton.bones,n=t.geometry,r=n.attributes.position.count,a=new Uint8Array(r),o=n.attributes.skinIndex,l=n.attributes.skinWeight;for(let g=0;g<r;g++){let _=0,M=-1;for(let b=0;b<4;b++)l.getComponent(g,b)>M&&(M=l.getComponent(g,b),_=o.getComponent(g,b));let v=i[_].name;a[g]=/^(Head|neck)/.test(v)?2:/^(hand|index|middle|ring|pinky|thumb)/.test(v)?3:/^(foot|ball)/.test(v)?4:/^(thigh|calf|pelvis)/.test(v)?1:0}let c={},h={};for(let g of i)c[g.name]=g.getWorldPosition(new I),h[g.name]=g.matrixWorld.clone();let u=Math.sign(c.ball_l.z-c.foot_l.z)||1;Ne={body:t,meshes:e,region:a,rest:c,boneRest:h,F:u,geos:{},clips:{},mats:{},gear:{},full:{},guns:{}};for(let g in Tc)Ne.clips[g]=Sc(Tc[g],!0),Ne.clips[g+"U"]=Sc(Tc[g],!1);for(let g in id)Ne.clips[g]=Sc(id[g],!1);for(let g of yM)Ne.clips[g]=Sc(g,!1);for(let g of _M)Ne.clips[g]=At.clips[g];let d=Qa(s),f=new Pr(d);f.clipAction(At.clips.Pistol_Aim_Neutral).play(),f.setTime(.01),d.updateMatrixWorld(!0);let m=d.getObjectByName("hand_r"),x=m.getWorldQuaternion(new gt).invert(),p=new gt().setFromAxisAngle(SM,u>0?Math.PI:0);Ne.gunQuat=x.clone().multiply(p),Ne.gunPos=new I(0,-.035,.075*u).applyQuaternion(x),Ne.mats.joint=new Pt({color:1316119,roughness:.95,metalness:0}),Ne.mats.body=new Pt({vertexColors:!0,roughness:.92,metalness:0}),Ne.mats.gunMerged=new Pt({vertexColors:!0,roughness:.5,metalness:.55}),Ne.mats.gear=new Pt({vertexColors:!0,roughness:.85,metalness:.05}),Ne.mats.flash=new st({color:16767120,transparent:!0,blending:Ji,depthWrite:!1}),Ne.geo={helmet:new Un(.128,14,10,0,6.283,0,1.75),box:new wt(1,1,1),flash:new La(.09,0)}}function EM(s,e){if(!Ne.guns[e]){s.updateMatrixWorld(!0);let i=new Pe().copy(s.matrixWorld).invert(),n=[];s.model.traverse(r=>{if(!r.isMesh)return;let a=r.geometry.clone().applyMatrix4(new Pe().multiplyMatrices(i,r.matrixWorld)),o=a.attributes.position.count,l=new Float32Array(o*3),c=r.material.color;for(let h=0;h<o;h++)l[h*3]=c.r,l[h*3+1]=c.g,l[h*3+2]=c.b;for(let h of Object.keys(a.attributes))h!=="position"&&h!=="normal"&&a.deleteAttribute(h);a.setAttribute("color",new nt(l,3)),n.push(a.index?a.toNonIndexed():a)}),Ne.guns[e]=Gr(n)}s.remove(s.model);let t=new ke(Ne.guns[e],Ne.mats.gunMerged);t.castShadow=!1,s.add(t),s.model=t}function wM(s,e){if(Ne.full[s]!==void 0)return Ne.full[s];let t=Ne.body,i=Ne.meshes.find(m=>m!==t),n=t.skeleton.bones,r=t.geometry.attributes.skinIndex,a=t.geometry.attributes.skinWeight;if(i&&(!((m,x)=>m.elements.every((p,g)=>Math.abs(p-x.elements[g])<1e-5))(i.bindMatrix,t.bindMatrix)||i.skeleton.bones.some((m,x)=>m.name!==n[x].name)))return Ne.full[s]=null;let l=m=>{let x=m.count,p=m.itemSize,g=m.isInterleavedBufferAttribute?m.data.array.constructor:m.array.constructor,_=new g(x*p);for(let M=0;M<x;M++)for(let v=0;v<p;v++)_[M*p+v]=m.isInterleavedBufferAttribute?m.data.array[M*m.data.stride+m.offset+v]:m.array[M*p+v];return new nt(_,p,m.normalized)},c=m=>{let x=new at;for(let p of["position","normal","color","skinIndex","skinWeight"])x.setAttribute(p,l(m.attributes[p]));return x.setIndex(m.index?Array.from(m.index.array):null),x},h=[c(mm(s).clone())];if(i){let m=i.geometry.clone(),x=m.attributes.position.count,p=new Float32Array(x*3).fill(.0067);m.setAttribute("color",new nt(p,3)),h.push(c(m))}let u=new Pe().copy(t.matrixWorld).invert();for(let m in e){let x=n.findIndex(p=>p.name===m);for(let p of e[m]){let g=p.clone().applyMatrix4(u),_=g.attributes.position.count,M=new r.array.constructor(_*4),v=new a.array.constructor(_*4);for(let b=0;b<_;b++)M[b*4]=x,v[b*4]=a.normalized?255:1;g.setAttribute("skinIndex",new nt(M,4,r.normalized)),g.setAttribute("skinWeight",new nt(v,4,a.normalized)),h.push(c((g.index,g)))}}let d=Gr(h.map(m=>(m.index,m)));if(!d)return Ne.full[s]=null;let f=new I;return t.matrixWorld.decompose(new I,new gt,f),d.boundingSphere=new Xt(new I(0,.9,0).applyMatrix4(u),2.2/Math.max(f.x,f.y,f.z)),Ne.full[s]=d}function mm(s){if(Ne.geos[s])return Ne.geos[s];let e=um[s],t=Ne.body.geometry,i=new at,n=t.attributes.position.count,r=new Float32Array(n*3);for(let o in t.attributes)i.setAttribute(o,t.attributes[o]);i.setIndex(t.index),i.boundingSphere=t.boundingSphere,i.boundingBox=t.boundingBox;let a=[e.jacket,e.pants,e.skin||1513755,e.skin||921360,789517].map(o=>new be(o));for(let o=0;o<n;o++){let l=a[Ne.region[o]];r[o*3]=l.r,r[o*3+1]=l.g,r[o*3+2]=l.b}return i.setAttribute("color",new nt(r,3)),Ne.geos[s]=i}function Ys(s,e){s.parent.getWorldQuaternion(td),s.quaternion.premultiply(td).premultiply(e).premultiply(td.invert())}function AM(s,e,t,i,n){s.updateWorldMatrix(!0,!1),e.updateWorldMatrix(!1,!1),t.updateWorldMatrix(!1,!1);let r=dm.setFromMatrixPosition(s.matrixWorld),a=fm.setFromMatrixPosition(e.matrixWorld),o=pm.setFromMatrixPosition(t.matrixWorld),l=a.distanceTo(r),c=o.distanceTo(a),h=ed.copy(i).sub(r),u=Ti.clamp(h.length(),Math.abs(l-c)+.01,l+c-.004);h.normalize();let d=(l*l-c*c+u*u)/(2*u),f=Math.sqrt(Math.max(0,l*l-d*d)),x=vM.copy(n).addScaledVector(h,-n.dot(h)).normalize().multiplyScalar(f).addScaledVector(h,d).add(r);Ys(s,Hi.setFromUnitVectors(a.sub(r).normalize(),ed.copy(x).sub(r).normalize())),s.updateWorldMatrix(!1,!1),e.updateWorldMatrix(!1,!1),t.updateWorldMatrix(!1,!1),a.setFromMatrixPosition(e.matrixWorld),o.setFromMatrixPosition(t.matrixWorld),Ys(e,Hi.setFromUnitVectors(o.sub(a).normalize(),ed.copy(i).sub(a).normalize()))}var ds=class{constructor(e="guard",t="carbine"){Ne||TM();let i=this.root=new Mt,n=this.inner=Qa(At.models.soldier);i.rotation.order="YXZ",n.rotation.y=Ne.F>0?Math.PI:0,i.add(n),this.bones={};let r=wM(e,this.dress(e)),a=[];n.traverse(l=>{if(l.isBone&&(this.bones[l.name]=l),!l.isSkinnedMesh)return;let c=l.geometry===Ne.body.geometry;if(r){c?(l.geometry=r,l.material=Ne.mats.body,l.castShadow=!0,l.frustumCulled=!0):a.push(l);return}l.geometry=c?mm(e):l.geometry,l.material=c?Ne.mats.body:Ne.mats.joint,l.castShadow=!0,l.frustumCulled=!1});for(let l of a)l.parent.remove(l);if(n.updateMatrixWorld(!0),r||this.addGear(e),t){let l=this.gun=pc(t);EM(l,t),l.quaternion.copy(Ne.gunQuat),l.position.copy(Ne.gunPos),this.bones.hand_r.add(l),this.flash=new ke(Ne.geo.flash,Ne.mats.flash),this.flash.position.copy(l.muzzle).z-=.08,this.flash.scale.set(1,1,2.2),this.flash.visible=!1,l.add(this.flash),this.gripL=l.pt(l.def.hand),this.gripL.y-=.035,this.gripL.z+=.03}else this.gun=null,this.flash={visible:!1};let o=this.mixer=new Pr(n);this.act={};for(let l in Ne.clips){let c=this.act[l]=o.clipAction(Ne.clips[l]);c.setEffectiveWeight(0),c.play()}o.update(0);for(let l in this.act)this.act[l].stop();this.locoA=Ec.map(l=>this.act[l]),this.locoU=Ec.map(l=>this.act[l+"U"]),this.upA=nd.map(l=>this.act[l]),this.wl=new Float32Array(Ec.length),this.wu=new Float32Array(nd.length),this.wl[0]=1,this.setW(this.locoA[0],1,null),this.uOne=null,this.fOne=null,this.dead=!1,this.lean=0,this.kick=0,this.flashT=0,this.aimW=0,this.crouchW=0,this.ikW=0,this.zones=null,this.zoneFrame=-1,o.update(.01)}dress(e){if(!Ne.gear[e]){let t=um[e],i=Ne.rest,n=Ne.F,r={},a=new Pe,o=new Pe,l=new pi,c=new gt,h=(_,M,v,b,S,y,E,L,R)=>{let D=M.clone().applyMatrix4(a.compose(new I(b,S,y*n),c.setFromEuler(l.set(0,0,0)),new I(E,L,R))),N=new be(v),B=D.attributes.position.count,P=new Float32Array(B*3);for(let z=0;z<B;z++)P[z*3]=N.r,P[z*3+1]=N.g,P[z*3+2]=N.b;D.setAttribute("color",new nt(P,3)),(r[_]||(r[_]=[])).push(D)},u=Ne.geo.box,d=t.gear,f=t.helmet,m=855567,x=i.Head,p=i.spine_03,g=i.pelvis;if(t.civ==="hostage")h("Head",u,14211280,x.x,x.y+.07,x.z+.02,.2,.045,.2),h("spine_03",u,13684936,p.x,p.y+.02,p.z+.1,.2,.12,.02);else if(t.civ==="hvt"){h("Head",Ne.geo.helmet,7215128,x.x+.02,x.y+.13,x.z,.95,.42,1);for(let _ of[-1,1])h("spine_03",u,12098106,p.x+_*.17,p.y+.16,p.z,.09,.025,.12);h("spine_03",u,7215128,p.x,p.y-.03,p.z+.1,.05,.3,.02)}else{h("Head",Ne.geo.helmet,f,x.x,x.y+.105,x.z+.005,1,1.02,1.12),h("Head",u,f,x.x,x.y+.085,x.z+.118,.2,.025,.07),h("Head",u,658704,x.x,x.y+.062,x.z+.108,.17,.05,.03),h("Head",u,m,x.x,x.y+.165,x.z+.11,.05,.05,.05);for(let _ of[-1,1])h("Head",u,m,x.x+_*.118,x.y+.06,x.z,.035,.08,.07);h("spine_03",u,d,p.x,p.y-.02,p.z+.085,.33,.36,.09),h("spine_03",u,d,p.x,p.y-.02,p.z-.105,.32,.36,.08);for(let _ of[-1,1])h("spine_03",u,d,p.x+_*.13,p.y+.17,p.z-.01,.06,.03,.2);for(let _ of[-1,0,1])h("spine_03",u,m,p.x+_*.095,p.y-.11,p.z+.145,.075,.15,.05);h("spine_03",u,m,p.x-.09,p.y+.05,p.z-.165,.11,.17,.06),h("spine_03",u,m,p.x-.09,p.y+.2,p.z-.165,.012,.16,.012),h("pelvis",u,m,g.x,g.y+.06,g.z,.37,.06,.25),h("thigh_r",u,m,i.thigh_r.x+.085*Math.sign(i.thigh_r.x),i.thigh_r.y-.14,i.thigh_r.z,.05,.17,.1);for(let _ of["l","r"])h("calf_"+_,u,m,i["calf_"+_].x,i["calf_"+_].y-.02,i["calf_"+_].z+.055,.105,.13,.05)}Ne.gear[e]=r}return Ne.gear[e]}setShadow(e){this.shadowOn!==e&&(this.shadowOn=e,this.inner.traverse(t=>{t.isSkinnedMesh&&(t.castShadow=e)}))}addGear(e){for(let t in Ne.gear[e]){let i=new Pe().copy(Ne.boneRest[t]).invert(),n=Gr(Ne.gear[e][t].map(a=>a.clone().applyMatrix4(i))),r=new ke(n,Ne.mats.gear);this.bones[t].add(r)}}setW(e,t,i){t>.002?(e.isRunning()||(e.reset(),e.play(),i&&i.isRunning()&&(e.time=i.time/i.getClip().duration*e.getClip().duration)),e.setEffectiveWeight(t)):e.isRunning()&&(e.setEffectiveWeight(0),e.stop())}tick(e,t,i=1){if(this.accDt=(this.accDt||0)+e,this.tickN=(this.tickN||0)+1,this.tickN<i)return!1;let n=this.accDt;return this.accDt=0,this.tickN=0,this.update(n,t),!0}playUpper(e,{loop:t=!1,speed:i=1,fade:n=.15}={}){if(this.dead)return 0;let r=this.act[e];return r.reset(),r.setLoop(t?ic:qa,t?1/0:1),r.clampWhenFinished=!0,r.timeScale=i,r.play(),this.uOne&&this.uOne.a!==r&&(this.uOne.old=!0),this.uOne={a:r,name:e,t:0,dur:t?1/0:r.getClip().duration/i,fade:n,w:0},this.uOne.dur}stopUpper(){this.uOne&&(this.uOne.dur=Math.min(this.uOne.dur,this.uOne.t))}playFull(e,{speed:t=1,fade:i=.12,hold:n=!1}={}){let r=this.act[e];return r.reset(),r.setLoop(qa,1),r.clampWhenFinished=!0,r.timeScale=t,r.play(),this.fOne={a:r,name:e,t:0,dur:n?1/0:r.getClip().duration/t,fade:i,w:0},r.getClip().duration/t}die(e){this.dead||(this.dead=!0,this.uOne=null,this.flash.visible=!1,this.playFull(e?"Hit_Knockback":"Death01",{hold:!0,speed:1.15}),e&&(this.root.userData.knock=1))}fire(){this.kick=1,this.flashT=.05,this.flash.visible=!0,this.flash.rotation.z=Math.random()*6}update(e,t){let i=bc(9,e);Bi.fill(0),Xr.fill(0);let n=0,r=0;if(this.fOne){let p=this.fOne;p.t+=e,p.w=p.t>p.dur-p.fade?Math.max(0,(p.dur-p.t)/p.fade):Math.min(1,p.t/p.fade),this.dead&&(p.w=Math.min(1,p.t/.08)),n=p.w,p.a.setEffectiveWeight(n),p.t>=p.dur&&(p.a.stop(),this.fOne=null)}if(this.uOne){let p=this.uOne;p.t+=e,p.w=p.t>p.dur-p.fade?Math.max(0,(p.dur-p.t)/p.fade):Math.min(1,p.t/p.fade),r=p.w*(1-n),p.a.setEffectiveWeight(r),p.t>=p.dur&&(p.a.stop(),this.uOne=null)}if(!this.dead){this.crouchW+=((t.crouch?1:0)-this.crouchW)*i;let p=t.speed,g=1-this.crouchW,_=Math.min(1,p/.8);if(p<.15)Bi[0]=g;else if(p<1.9)Bi[0]=Math.max(0,1-p/.9)*g,Bi[1]=Math.min(1,p/.9)*g;else if(p<3.6){let S=(p-1.9)/1.7;Bi[1]=(1-S)*g,Bi[2]=S*g}else{let S=Math.min(1,(p-3.6)/1.4);Bi[2]=(1-S)*g,Bi[3]=S*g}Bi[4]=this.crouchW*(1-_),Bi[5]=this.crouchW*_,this.act.walk.timeScale=this.act.walkU.timeScale=p<1.9?Ti.clamp(p/1.45,.6,1.5):1.2,this.act.cwalk.timeScale=this.act.cwalkU.timeScale=Ti.clamp(p/1.3,.6,1.6),this.aimW+=((t.aim?1:0)-this.aimW)*bc(7,e);let M=this.aimW,v=Ti.clamp((t.pitch||0)/.7,-1,1),b=1-r;Xr[0]=(M*(1-Math.abs(v))+(1-M)*.45)*b,Xr[1]=M*Math.max(0,v)*b,Xr[2]=(M*Math.max(0,-v)+(1-M)*.55)*b}let a=1-n,o=this.wl,l=this.wu,c=!!this.gun,h=null;for(let p=0;p<o.length;p++)this.locoA[p].isRunning()&&(!h||o[p]>o[h])&&(h=p);let u=h===null?null:this.locoA[h],d=h===null?null:this.locoU[h];for(let p=0;p<o.length;p++)o[p]+=(Bi[p]-o[p])*i,Bi[p]===0&&o[p]<.002&&(o[p]=0),this.setW(this.locoA[p],o[p]*a,u),c||this.setW(this.locoU[p],o[p]*a*(1-r),d);for(let p=0;p<l.length;p++)l[p]+=(Xr[p]-l[p])*i,Xr[p]===0&&l[p]<.002&&(l[p]=0),c&&this.setW(this.upA[p],l[p]*a,null);if(this.mixer.update(e),this.dead)return;this.lean+=((t.lean||0)-this.lean)*bc(6,e),this.kick=Math.max(0,this.kick-e*9),this.flashT>0&&(this.flashT-=e)<=0&&(this.flash.visible=!1);let f=this.bones,m=this.lean;if(this.inner.position.x=m*.24,Math.abs(m)>.01||this.kick>.01){this.root.getWorldQuaternion(Hi);let p=dm.set(0,0,-1).applyQuaternion(Hi),g=fm.set(1,0,0).applyQuaternion(Hi);Math.abs(m)>.01&&(Ys(f.spine_01,Hi.setFromAxisAngle(p,m*.27)),Ys(f.spine_02,Hi.setFromAxisAngle(p,m*.2)),Ys(f.spine_03,Hi.setFromAxisAngle(p,m*.15)),Ys(f.Head,Hi.setFromAxisAngle(p,-m*.3))),this.kick>.01&&Ys(f.spine_03,Hi.setFromAxisAngle(g,this.kick*.035))}let x=this.uOne||this.fOne?0:1;if(this.ikW+=(x-this.ikW)*bc(8,e),this.ikW>.5&&this.gun){this.gun.updateWorldMatrix(!0,!1);let p=pm.copy(this.gripL).applyMatrix4(this.gun.matrixWorld),g=p.x,_=p.y,M=p.z;this.root.getWorldQuaternion(Hi);let v=MM.set(-.55,-.8,.2).applyQuaternion(Hi);AM(f.upperarm_l,f.lowerarm_l,f.hand_l,bM.set(g,_,M),v)}}refresh(){this.root.updateWorldMatrix(!0,!0)}muzzle(e){return e.copy(this.gun.muzzle).applyMatrix4(this.gun.matrixWorld)}eye(e){return e.setFromMatrixPosition(this.bones.Head.matrixWorld).setY(e.y+.07)}bone(e,t){return t.setFromMatrixPosition(this.bones[e].matrixWorld)}rayHit(e,t,i,n){if(this.zoneFrame!==n){this.refresh(),this.zoneFrame=n;let a=l=>new I().setFromMatrixPosition(this.bones[l].matrixWorld),o=a("Head");o.y+=.075,this.zones=[[o,o,.125,"head",2.5],[a("neck_01"),a("spine_03"),.075,"torso",1],[a("spine_03"),a("spine_02"),.185,"torso",1],[a("spine_02"),a("pelvis"),.175,"torso",1],[a("upperarm_l"),a("lowerarm_l"),.058,"arm",.6],[a("lowerarm_l"),a("hand_l"),.05,"arm",.6],[a("upperarm_r"),a("lowerarm_r"),.058,"arm",.6],[a("lowerarm_r"),a("hand_r"),.05,"arm",.6],[a("thigh_l"),a("calf_l"),.088,"leg",.7],[a("calf_l"),a("foot_l"),.068,"leg",.7],[a("thigh_r"),a("calf_r"),.088,"leg",.7],[a("calf_r"),a("foot_r"),.068,"leg",.7]]}let r=null;for(let a of this.zones){let o=a[0],l=a[1],c=a[2],h=l.x-o.x,u=l.y-o.y,d=l.z-o.z,f=e.x-o.x,m=e.y-o.y,x=e.z-o.z,p=h*h+u*u+d*d,g=h*t.x+u*t.y+d*t.z,_=h*f+u*m+d*x,M=t.x*f+t.y*m+t.z*x,v=p-g*g,b=v>1e-9?Ti.clamp((_-g*M)/v,0,1):0;p<1e-9&&(b=0);let S=g*b-M;if(S<0)continue;let y=o.x+h*b-(e.x+t.x*S),E=o.y+u*b-(e.y+t.y*S),L=o.z+d*b-(e.z+t.z*S),R=y*y+E*E+L*L;R>c*c||(S-=Math.sqrt(c*c-R),S<i&&(!r||S<r.d)&&(r={d:Math.max(0,S),part:a[3],mult:a[4]}))}return r}};var qr={recruit:{label:"RECRUIT",react:[.8,1.4],detect:.75,spread:4,settle:1.5,burst:[3,6],pause:[.6,1.3],hold:[1.5,4],memory:8,searchPts:[1,2],searchTime:10,share:12,radio:[3,5.5],radioFail:.3,mistake:.3,decide:[.9,1.6],hear:.8,hide:[1.5,3.6],expose:[1.4,3.2],glance:.15,switchSide:.1,peeks:[3,6],flank:.05,suppress:0,bound:!1,nades:0,investigate:.6,alarmDelay:[9,16],alarmChance:.5,coverDelay:[1.5,3.5]},tactical:{label:"TACTICAL",react:[.42,.8],detect:1,spread:3,settle:1.1,burst:[2,4],pause:[.35,.8],hold:[1.5,3.5],memory:15,searchPts:[3,4],searchTime:18,share:20,radio:[1.4,2.6],radioFail:.05,mistake:.1,decide:[.55,1],hear:1,hide:[.8,2.6],expose:[.8,1.8],glance:.35,switchSide:.3,peeks:[2,4],flank:.35,suppress:.25,bound:!1,nades:0,investigate:.95,alarmDelay:[4,8],alarmChance:.9,coverDelay:[.2,.8]},elite:{label:"ELITE SQUAD",react:[.3,.65],detect:1.1,spread:2.7,settle:.85,burst:[2,4],pause:[.3,.7],hold:[1,3],memory:22,searchPts:[4,5],searchTime:26,share:26,radio:[.8,1.5],radioFail:0,mistake:.06,decide:[.4,.8],hear:1.15,hide:[.5,2.2],expose:[.6,1.4],glance:.45,switchSide:.45,peeks:[1,3],flank:.6,suppress:.6,bound:!0,nades:1,investigate:1,alarmDelay:[2,4],alarmChance:1,coverDelay:[.1,.5]}},RM={guard:{name:"Rifleman",aggr:.5,caut:.5},aggressor:{name:"Pointman",aggr:.85,caut:.25},cautious:{name:"Marksman",aggr:.25,caut:.85}},gm=15,CM={speed:0},IM={speed:0,crouch:!0,aim:!1,lean:0},Qt=s=>Re(s[0],s[1]),wc=s=>Math.floor(Re(s[0],s[1]+1)),ro=(s,e)=>{let t=s-e;for(;t>Math.PI;)t-=6.2832;for(;t<-Math.PI;)t+=6.2832;return t},xm=()=>(Math.random()+Math.random()+Math.random()-1.5)*1.4,fs=(s,e)=>Math.atan2(-s,-e),Ac=new I,ym=new I,Rc=class{constructor(e,t,i,n,r,a,o={}){this.g=e,this.pr=a,this.type=RM[r],this.typeId=r;let l=a.bound?.2:.1;this.aggr=Ti.clamp(this.type.aggr+Re(-l,l),.05,1),this.caut=Ti.clamp(this.type.caut+Re(-l,l),.05,1),this.pos=new I(t,e.world.nav.height(t,i),i),this.yaw=Re(6.28),this.hp=100,this.dead=!1,this.deadT=0,this.baseYaw=this.yaw,this.route=n,this.wi=0,this.dir=Math.random()<.5?1:-1,this.waitT=Re(0,3),this.waitR=o.wait||[1,4.5],this.duty=o.duty||"patrol",this.home=o.home||n[0],this.order=null,this.holdPost=!1,this.tac=null,this.state="PATROL",this.stateT=0,this.phase="",this.t=Re(10),this.path=null,this.pi=0,this.trav=null,this.approach=null,this.lkp=new I,this.lkpVel=new I,this.hasLkp=!1,this.lkpAge=99,this.detect=0,this.los=!1,this.seeBody=!1,this.seeing=!1,this.seenT=0,this.unseen=99,this.pd=99,this.percT=Re(.15),this.bodyT=Re(1),this.react=0,this.burst=0,this.shotT=0,this.ammo=30,this.reloading=!1,this.reloadT=0,this.blockT=0,this.blindT=0,this.decT=0,this.holdT=0,this.waited=0,this.supp=0,this.stun=0,this.shoutT=0,this.radioT=0,this.radioCool=0,this.openT=0,this.alerted=!1,this.crouch=!1,this.moved=0,this.leanW=0,this.suppLeft=0,this.nades=a.nades&&(r!=="cautious"||Math.random()<.5)?1:0,this.throwT=0,this.sus=new I,this.susT=0,this.after="check",this.search=[],this.searchEnd=0,this.spot=null,this.modes=[],this.mode=null,this.peeks=0,this.maxPeeks=3,this.hideT=0,this.phaseT=0,this.bad=new Set,this.wasHit=!1,this.ch=new ds(a.bound?"elite":r,"carbine"),e.scene.add(this.ch.root),this.sync(),this.ch.refresh()}sync(){let e=this.ch.root;e.position.copy(this.pos),e.rotation.y=this.yaw}engaged(){return!this.dead&&this.hasLkp&&this.lkpAge<10&&(this.state==="COMBAT"||this.state==="COVER"||this.state==="MOVE")}combat(){return this.state==="COMBAT"||this.state==="COVER"||this.state==="MOVE"}set(e,t=""){this.state=e,this.stateT=0,this.phase=t,e!=="COVER"&&(this.crouch=!1)}release(){this.spot&&(this.spot.user===this&&(this.spot.user=null),this.spot=null),this.approach=null}goTo(e,t){return this.path=this.g.world.nav.path(this.pos.x,this.pos.z,e,t),this.pi=0,this.approach=null,!!this.path}follow(e,t){let i=this.pos;if(this.trav){let n=this.trav;n.t+=e/n.dur;let r=Math.min(1,n.t),a=r*r*(3-2*r);return i.x=n.x0+(n.x1-n.x0)*a,i.z=n.z0+(n.z1-n.z0)*a,i.y=n.type==="vault"?n.y0+(n.y1-n.y0)*a+(n.h-Math.min(n.y0,n.y1)+.1)*Math.sin(Math.PI*r):n.type==="climb"?n.y0+(n.y1-n.y0)*Math.min(1,r*1.7):n.y0+(n.y1-n.y0)*r*r,this.moved=2,this.moveYaw=fs(n.x1-n.x0,n.z1-n.z0),r>=1&&(this.trav=null,this.pi++),!1}if(this.path&&this.pi<this.path.length){let n=this.path[this.pi];if(n.link){let h=n.link.type==="vault"?.9:n.link.type==="climb"?1.05:.55;return this.trav={x0:i.x,z0:i.z,y0:i.y,x1:n.x,z1:n.z,y1:n.y,h:n.link.h,type:n.link.type,t:0,dur:h},n.link.type!=="drop"&&this.ch.playFull("ClimbUp_1m",{speed:1.9/h,fade:.12}),!1}let r=n.x-i.x,a=n.z-i.z,o=Math.hypot(r,a);if(o<.2)return this.pi++,this.pi>=this.path.length&&!this.approach;let l=Math.min(o,t*e);i.x+=r/o*l,i.z+=a/o*l,this.moved=t,this.moveYaw=fs(r,a);let c=this.g.world.nav.height(i.x,i.z);return i.y+=(c-i.y)*Math.min(1,e*10),!1}if(this.approach){let n=this.approach,r=n.x-i.x,a=n.z-i.z,o=Math.hypot(r,a);if(o<.08)return this.approach=null,!0;let l=Math.min(o,Math.min(t,2.2)*e);return i.x+=r/o*l,i.z+=a/o*l,this.moved=1.6,this.moveYaw=fs(r,a),!1}return!0}canSee(){let e=this.g,t=e.player;if(t.dead||this.stun>0)return!1;let i=this.ch.eye(Ac),n=t.pos.x-i.x,r=t.pos.z-i.z,a=Math.hypot(n,r);if(a>e.world.env.viewRange)return!1;let o=this.alerted||this.combat()?1.85:1.05;return a>2&&Math.abs(ro(fs(n,r),this.yaw))>o?!1:(this.seeBody=e.los(i.x,i.y,i.z,t.pos.x+t.leanX*.4,t.pos.y+t.height*.5,t.pos.z+t.leanZ*.4),this.seeBody||e.los(i.x,i.y,i.z,t.eyePos.x,t.eyePos.y,t.eyePos.z))}hear(e,t,i){if(this.dead||this.seeing||this.stun>0)return;let n=t==="step"?1.5:1+i*.12,r=e.x+Re(-n,n),a=e.z+Re(-n,n),o=this.state==="PATROL"||this.state==="SEARCH";if(t==="ally"){o&&!this.holdPost&&(this.alerted=!0,this.suspect(r,a,"investigate",Re(.5,1.5)));return}if(t==="shot"||t==="explosion"){if(this.alerted=!0,this.g.sec.suspicious(),(this.lkpAge>1.5||!this.hasLkp)&&(this.lkp.set(r,0,a),this.lkpVel.set(0,0,0),this.lkpAge=.5,this.hasLkp=!0),this.holdPost&&this.state==="COVER")return;o?this.suspect(r,a,this.duty==="objective"?"defend":"investigate",Re(.4,1.2)/this.pr.detect):this.state==="SUSPICIOUS"?(this.sus.set(r,0,a),this.after==="check"&&(this.after="investigate")):this.state==="INVESTIGATE"&&Math.hypot(r-this.inv.x,a-this.inv.z)>8&&this.goInvestigate(r,a)}else o?this.suspect(r,a,"check",Re(1,2)):this.combat()&&this.lkpAge>2&&(this.lkp.set(r,0,a),this.lkpAge=1)}suspect(e,t,i,n){this.release(),this.sus.set(e,0,t),this.after=i,this.susT=n,this.set("SUSPICIOUS"),this.path=null}onAlert(e,t){this.dead||this.seeing||this.stun>0||(this.alerted=!0,(this.lkpAge>2||!this.hasLkp)&&(this.lkp.set(e,0,t),this.lkpVel.set(0,0,0),this.lkpAge=1,this.hasLkp=!0),(this.state==="PATROL"||this.state==="SEARCH")&&this.suspect(e,t,this.duty==="objective"?"defend":Math.random()<this.pr.flank?"flank":"investigate",Re(.3,1.2)))}evade(e,t){if(this.dead||this.stun>0||this.trav||this.state==="ALARM"||Math.random()>(this.pr.label==="RECRUIT"?.6:.95))return!1;let i=this.g.world.nav,n=Math.atan2(this.pos.z-t,this.pos.x-e);for(let r of[0,.6,-.6,1.2,-1.2,1.9,-1.9]){let a=i.snap(e+Math.cos(n+r)*10,t+Math.sin(n+r)*10);if(!a)continue;let o=i.path(this.pos.x,this.pos.z,a.x,a.z,40);if(o)return this.release(),this.path=o,this.pi=0,this.alerted=!0,this.set("MOVE","retreat"),this.evading=2.5,this.hasLkp||(this.lkp.set(e,0,t),this.hasLkp=!0,this.lkpAge=1),!0}return!1}flashbang(e){this.dead||(this.stun=Math.max(this.stun,e),this.detect=0,this.seeing=!1,this.los=!1,this.ch.playUpper("Hit_Head",{speed:.5}),this.trav||(this.path=null))}damage(e,t,i){if(!this.dead){if(this.hp-=e,this.supp=Math.min(1.5,this.supp+.6),this.wasHit=!0,this.hp<=0){this.dead=!0,this.release(),this.ch.die(i==="blast"),this.g.onKill(this);return}if(this.stun<=0&&this.ch.playUpper(i==="head"?"Hit_Head":"Hit_Chest",{speed:1.7,fade:.08}),this.state==="COVER"&&this.phase!=="hide"&&this.toHide(),!this.seeing){let n=Math.hypot(t.x-this.pos.x,t.z-this.pos.z),r=3+n*.1;this.alerted=!0,this.detect=Math.max(this.detect,.6),this.lkp.set(t.x+Re(-r,r),0,t.z+Re(-r,r)),this.lkpAge=.5,this.hasLkp=!0,this.react=Qt(this.pr.react)*.6,!this.combat()&&this.state!=="ALARM"&&this.engage()}}}rayHit(e,t,i){let n=this.pos,r=(n.x-e.x)*t.x+(n.y+.9-e.y)*t.y+(n.z-e.z)*t.z;if(r<-1.5||r>i+1.5)return null;let a=e.x+t.x*r-n.x,o=e.y+t.y*r-n.y-.9,l=e.z+t.z*r-n.z;return a*a+o*o+l*l>2.2?null:this.ch.rayHit(e,t,i,this.g.frame)}modesFor(e,t){let i=this.g,n=t.y+1.45;if(i.los(e.x,e.y+(e.high?1.35:.7),e.z,t.x,n,t.z))return null;let r=[];for(let a of e.sides)i.los(e.x+e.tx*a*.5,e.y+(e.high?1.5:1),e.z+e.tz*a*.5,t.x,n,t.z)&&i.losB(e.x+e.tx*a*.5,e.y+(e.high?1.4:.95),e.z+e.tz*a*.5,t.x,n-.3,t.z)&&r.push({type:"side",side:a});return e.over&&i.los(e.x,e.y+1.55,e.z,t.x,n,t.z)&&i.losB(e.x,e.y+1.42,e.z,t.x,n-.3,t.z)&&r.push({type:"over"}),r}pickCover(e,t,i,n){let r=this.g,a=r.world,o=i?i.x:this.pos.x,l=i?i.z:this.pos.z,c=n||(e==="retreat"?26:18),h=r.enemies.filter(f=>f!==this&&!f.dead&&f.engaged()).map(f=>Math.atan2(f.pos.z-t.z,f.pos.x-t.x)),u=a.objective.pos,d=[];for(let f of a.cover){if(f.user&&f.user!==this&&!f.user.dead||this.bad.has(f.id)||this.spot===f&&e!=="defend")continue;let m=Math.hypot(f.x-o,f.z-l);if(m>c)continue;let x=Math.hypot(f.x-t.x,f.z-t.z);if(x<5||x>46||((t.x-f.x)*-f.nx+(t.z-f.z)*-f.nz)/x<.3)continue;let p=-Math.hypot(f.x-this.pos.x,f.z-this.pos.z)*.55+(f.high?1.5:0)+f.sides.length*.6+Re(0,2.5);if(e==="hold")p-=Math.abs(x-17)*.15;else if(e==="push")p-=x*.55;else if(e==="retreat"){if(x<this.pd+4)continue;p+=x*.4}else if(e==="flank"){let g=3.14,_=Math.atan2(f.z-t.z,f.x-t.x);for(let M of h)g=Math.min(g,Math.abs(ro(_,M)));p+=Math.min(g,1.9)*4.5-Math.abs(x-14)*.2}else e==="defend"&&(p-=m*1.2+Math.hypot(f.x-u[0],f.z-u[2])*.15);d.push([p,f])}d.sort((f,m)=>m[0]-f[0]);for(let f=0;f<Math.min(d.length,12);f++){let m=d[f][1],x=this.modesFor(m,t);if(x&&(x.length||e==="retreat"||e==="defend"))return{s:m,modes:x}}return null}takeCover(e,t=this.lkp,i,n){let r=this.pickCover(e,t,i,n);return!r||!this.goTo(r.s.cell.x,r.s.cell.z)?!1:(this.release(),this.spot=r.s,r.s.user=this,this.modes=r.modes,this.approach={x:r.s.x,z:r.s.z},this.set("MOVE",e),this.peeks=0,this.maxPeeks=wc(this.pr.peeks),this.wasHit=!1,!0)}toHide(e=0){if(this.phase="hide",this.hideT=Qt(this.pr.hide)+e,this.suppLeft=0,this.extended=!1,this.hidden=0,(this.peeks>=this.maxPeeks||this.wasHit)&&!this.holdPost&&this.g.sec.mayMove(this)){let t=this.tac;this.takeCover(t==="flank"?"flank":t==="push"?"push":this.hp<40?"retreat":"hold")}}afterHide(){let e=this.g,t=this.pr,i=this.spot;if(!this.hasLkp){if(this.modes=i.sides.map(a=>({type:"side",side:a})),i.over&&this.modes.push({type:"over"}),!this.modes.length){this.hideT=3;return}this.mode=this.modes[Math.floor(Math.random()*this.modes.length)],this.phase="glance",this.phaseT=Re(.7,1.6);return}if(this.lkpAge>t.memory){this.holdPost?(this.hasLkp=!1,this.hideT=Re(1,3)):this.startSearch(this.lkp.x,this.lkp.z);return}let n=this.modesFor(i,this.lkp);if(!n){this.bad.add(i.id),this.takeCover(this.hp<40?"retreat":"hold")||this.engage(!0);return}if(this.modes=n,this.tryGrenade()){this.hideT=1.6;return}if(this.unseen>this.holdT&&!this.holdPost&&this.nextMove())return;if(!n.length){this.hideT=Re(.8,1.6),this.waited++,this.waited>2&&!this.holdPost&&!this.takeCover("hold")&&this.goInvestigate(this.lkp.x,this.lkp.z);return}if(t.mistake>.2&&Math.random()<t.mistake*.4&&this.unseen<3){this.engage(!0),this.openT=Re(2,4);return}let r=n[Math.floor(Math.random()*n.length)];this.mode&&n.length>1&&Math.random()<t.switchSide?r=n.find(a=>a.type!==this.mode.type||a.side!==this.mode.side)||r:this.mode&&Math.random()>t.switchSide&&(r=n.find(a=>a.type===this.mode.type&&a.side===this.mode.side)||r),this.mode=r,this.blockT=0,this.blindT=0,Math.random()<t.glance&&this.unseen>1.2?(this.phase="glance",this.phaseT=Re(.35,.9)):(this.phase="fire",this.phaseT=Qt(t.expose),this.peeks++,this.shotT=Math.min(this.shotT,.12),this.burst=0,this.suppLeft=Math.random()<t.suppress||this.tac==="suppress"?wc([1,2]):0)}nextMove(){let e=this.g,t=this.pr,i=this.tac,n=Math.random(),r=Math.hypot(this.lkp.x-this.pos.x,this.lkp.z-this.pos.z);if(!e.sec.mayMove(this))return this.hideT=Re(.6,1.4),!0;let a;if(i==="flank")a=n<.75?"flank":"push";else if(i==="push")a=n<.7?"push":"flank";else if(i)a=this.waited<3?"wait":"push";else{let o=.3+this.aggr,l=t.flank*(.5+this.aggr),c=(.3+this.caut)*(this.waited<2?1:.2),h=n*(o+l+c);a=h<o?"push":h<o+l?"flank":"wait"}return a==="wait"?(this.holdT=this.unseen+Qt(t.hold),this.waited++,this.hideT=Qt(t.hide),!0):(this.waited=0,a==="push"&&r<10?(this.goInvestigate(this.lkp.x,this.lkp.z),!0):(this.takeCover(a)||this.goInvestigate(this.lkp.x,this.lkp.z),!0))}tryGrenade(){let e=this.g,t=this.lkp;if(this.nades<=0||e.sec.nadeCool>0||this.seeing||this.lkpAge<2.5||this.lkpAge>9)return!1;let i=this.ch.eye(Ac),n=Math.hypot(t.x-i.x,t.z-i.z);if(n<9||n>26||e.enemies.some(c=>!c.dead&&Math.hypot(c.pos.x-t.x,c.pos.z-t.z)<7.5))return!1;let r=(i.x+t.x)/2,a=(i.z+t.z)/2,o=i.y+1.2+n*.16;if(!e.los(i.x,i.y+.3,i.z,r,o,a)||!e.los(r,o,a,t.x,t.y+.4,t.z))return!1;let l=this.tac==="push"||e.enemies.some(c=>!c.dead&&c.tac==="push"&&c.engaged())?Math.random()<.7:Math.random()<.3;return this.nades--,e.sec.nadeCool=14,this.throwT=.5,this.throwKind=l?"flash":"frag",this.throwAt={x:t.x+Re(-1.5,1.5),y:t.y,z:t.z+Re(-1.5,1.5),d:n},this.ch.playUpper("OverhandThrow",{speed:1.5}),e.say(this,l?"Flash out!":"Frag out!"),!0}engage(e){this.holdPost=this.holdPost&&this.duty==="objective",this.holdT=Qt(this.pr.hold),this.waited=0,this.decT=Qt(this.pr.decide),this.wantCrouch=Math.random()<.3*this.caut+.1,!(this.state==="COVER"&&!e)&&(this.release(),this.path=null,this.set("COMBAT"),this.openT=Qt(this.pr.coverDelay))}goInvestigate(e,t){this.release();let i=this.g.world.nav.nearest(e,t);if(!i||!this.goTo(i.x,i.z))return this.startSearch(this.pos.x,this.pos.z);this.inv=i,this.set("INVESTIGATE")}startSearch(e,t){let i=this.g,n=i.world.nav,r=this.pr,a=wc(r.searchPts),o=Math.random()<r.mistake;this.release(),this.search=[];let l=this.lkpVel,c=Math.hypot(l.x,l.z);for(let h=0;h<a;h++){let u=null;for(let d=0;d<(r.bound?5:2);d++){let f=Re(6.283),m=o?Re(9,17):Re(3,11),x=e+Math.cos(f)*m,p=t+Math.sin(f)*m;h===0&&c>1.5&&r.label!=="RECRUIT"&&(x=e+l.x/c*Re(5,10)+Re(-2,2),p=t+l.z/c*Re(5,10)+Re(-2,2));let g=n.snap(x,p);if(g&&(u||(u=g),!i.los(g.x,g.y+1.2,g.z,e,g.y+1.4,t))){u=g;break}}u&&this.search.push(u)}this.searchEnd=this.t+r.searchTime,this.waitT=Re(.5,1.5),this.path=null,this.set("SEARCH")}resume(){if(this.release(),this.hasLkp=!1,this.order&&this.doOrder())return;this.holdPost=!1,this.set("PATROL");let e=this.route[this.wi];this.goTo(e[0],e[1]),this.waitT=0,this.g.sec.level<2&&(this.alerted=!1)}setOrder(e){this.order=e,(this.state==="PATROL"||this.state==="SEARCH"||this.state==="COVER"&&this.holdPost&&!this.hasLkp)&&this.doOrder()}doOrder(){let e=this.order;return e?(this.alerted=!0,e.type==="investigate"?(this.order=null,this.holdPost=!1,this.goInvestigate(e.x,e.z),!0):(this.holdPost=!0,this.hasLkp=!1,this.lkp.set(e.tx,0,e.tz),this.spot&&this.state==="COVER"&&Math.hypot(this.spot.x-e.x,this.spot.z-e.z)<7&&this.modesFor(this.spot,this.lkp)||this.takeCover("defend",this.lkp,e,7)||(this.release(),this.route=[[e.x,e.z]],this.wi=0,this.waitR=[4,9],this.goTo(e.x,e.z),this.set("PATROL")),!0)):!1}goAlarm(){let e=this.g.world.panel;return this.release(),this.goTo(e.x,e.z)?(this.holdPost=!1,this.set("ALARM","run"),!0):!1}fire(e){let t=this.g,i=t.player,n=this.pr,r=this.ch;r.refresh();let a=r.muzzle(Ac),o=a.x,l=a.y,c=a.z,h,u,d;e?(h=this.lkp.x,u=this.lkp.y+1.1,d=this.lkp.z):this.seeBody?(h=i.pos.x+i.leanX*.5,u=i.pos.y+i.height*.58,d=i.pos.z+i.leanZ*.5):(h=i.eyePos.x,u=i.eyePos.y-.06,d=i.eyePos.z);let f=h-o,m=u-l,x=d-c,p=Math.hypot(f,m,x);if(xi(t.world.colliders,o,l,c,f/p,m/p,x/p,Math.min(p,e?1.7:p-.35),"bullet"))return this.blockT+=.3,!1;this.ammo--;let g=n.spread*(1+this.pd/40)*(1+Math.min(i.speed,7)/7*.8)*(1+Math.max(0,1-(this.seenT+(this.state==="COVER"?n.settle*.4:0))/n.settle)*.9)*(this.supp>.5?1.35:1)*(e?1.7:1)*(i.crouch?1.15:1)*Math.PI/180,_=Math.atan2(f,x)+xm()*g,M=Math.atan2(m,Math.hypot(f,x))+xm()*g*.7,v=Math.cos(M),b=t.v3.set(Math.sin(_)*v,Math.sin(M),Math.cos(_)*v),S=t.v1.set(o,l,c),y=t.trace(S,b,120,this),E=t.v2.set(o+b.x*y.d,l+b.y*y.d,c+b.z*y.d);return t.fx.tracer(S,E,16756848),y.kind==="player"?i.damage(gm,this.pos,{name:this.type.name,dist:this.pd,x:this.pos.x,z:this.pos.z}):(y.kind==="world"?t.fx.impact(E,ym.set(y.wh.nx,y.wh.ny,y.wh.nz),y.wh.c.mat):y.kind==="civ"&&y.e.damage(gm),t.nearMiss(o,l,c,b.x,b.y,b.z)),r.fire(),t.enemyShotSound(this),t.sound(this.pos,30,"ally",this),!0}update(e){let t=this.g,i=t.player,n=this.pr,r=this.ch;if(this.dead){this.deadT<4&&(this.deadT+=e,r.tick(e,CM,t.animEvery(this.pos)),this.pos.y>t.world.nav.height(this.pos.x,this.pos.z)+.02&&(this.pos.y=Math.max(t.world.nav.height(this.pos.x,this.pos.z),this.pos.y-e*4),this.sync()));return}if(this.t+=e,this.stateT+=e,this.moved=0,this.supp=Math.max(0,this.supp-e*.25),this.radioCool-=e,this.stun>0){this.stun-=e,this.crouch=!0,this.seeing=!1,this.los=!1,this.lkpAge+=e*2,this.unseen+=e,this.trav&&this.follow(e,0),r.tick(e,IM,t.animEvery(this.pos)),this.sync(),this.stun<=0&&(r.stopUpper(),this.react=Qt(n.react)+.4,this.state!=="COVER"?this.hasLkp&&!this.takeCover("hold")&&this.startSearch(this.pos.x,this.pos.z):this.toHide());return}(this.percT-=e)<=0&&(this.percT=.1+Math.random()*.05,this.los=this.canSee(),r.setShadow(this.pd<34));let a=i.pos.x-this.pos.x,o=i.pos.z-this.pos.z;if(this.pd=Math.hypot(a,o),this.los){let M=n.detect*t.world.env.detect*(2.2*(1-this.pd/t.world.env.viewRange)+.25);this.pd<6&&(M*=3),i.crouch&&(M*=.55),i.speed>5.5?M*=1.4:i.speed<.5&&(M*=.8),this.seeBody||(M*=.6),this.alerted&&(M*=3),this.detect=Math.min(1,this.detect+M*e)}else this.detect=Math.max(0,this.detect-.3*e);let l=this.seeing;if(this.seeing=this.los&&this.detect>=1,this.seeing?(this.lkp.copy(i.pos),this.lkpVel.copy(i.vel),this.lkpAge=0,this.hasLkp=!0,this.unseen=0,this.seenT+=e,l||(this.react=Math.max(this.react,Qt(n.react)*(this.combat()?this.unseen<5?.25:.5:1)+(Math.random()<n.mistake*.5?Re(.4,1):0)),this.alerted=!0,(this.state==="ALARM"?this.pd<12:!this.combat())&&this.engage(),this.shoutT<=0&&(this.shoutT=.7),this.radioCool<=0&&this.radioT<=0&&(this.radioT=Qt(n.radio)))):(this.lkpAge+=e,this.unseen+=e,this.seenT=0,l&&(this.holdT=Qt(n.hold),this.waited=0)),this.shoutT>0&&(this.shoutT-=e)<=0&&this.lkpAge<3&&t.shout(this),this.radioT>0&&(this.radioT-=e*(this.seeing&&this.state!=="COVER"?.5:1),this.radioT<=0&&(this.radioCool=7,Math.random()>=n.radioFail&&this.lkpAge<6&&(t.sec.radio(this,"contact",this.lkp.x,this.lkp.z),this.seeing||r.playUpper("Idle_TalkingPhone_Loop",{speed:1,fade:.2,loop:!1})))),!this.combat()&&this.state!=="ALARM"&&(this.bodyT-=e)<=0){this.bodyT=.8;for(let M of t.enemies)if(!(!M.dead||M.found||Math.hypot(M.pos.x-this.pos.x,M.pos.z-this.pos.z)>16)&&!(Math.abs(ro(fs(M.pos.x-this.pos.x,M.pos.z-this.pos.z),this.yaw))>1.1||!t.los(this.pos.x,this.pos.y+1.6,this.pos.z,M.pos.x,M.pos.y+.4,M.pos.z))){M.found=!0,this.alerted=!0,this.suspect(M.pos.x,M.pos.z,"investigate",Re(1,2)),this.bodyCall={x:M.pos.x,z:M.pos.z,t:Qt(n.radio)+1};break}}if(this.bodyCall&&(this.bodyCall.t-=e)<=0&&(Math.random()>=n.radioFail&&t.sec.radio(this,"body",this.bodyCall.x,this.bodyCall.z),this.bodyCall=null),this.reloading&&(this.reloadT-=e)<=0&&(this.reloading=!1,this.ammo=30),this.ammo<=0&&!this.reloading&&(this.reloading=!0,this.reloadT=2.3,r.playUpper("Pistol_Reload",{speed:.9})),this.throwT>0&&(this.throwT-=e)<=0){r.refresh();let M=r.bone("hand_r",ym),v=this.throwAt,b=1+v.d/20,S=14;t.spawnGrenade(this.throwKind,M.clone(),new I((v.x-M.x)/b,(v.y+.2-M.y+.5*S*b*b)/b,(v.z-M.z)/b),this)}let c=null,h=0,u=this.alerted||this.state!=="PATROL",d=!1,f=M=>fs(M.x-this.pos.x,M.z-this.pos.z);switch(this.state){case"PATROL":if(this.waitT>0)this.waitT-=e,c=(this.baseYaw??this.yaw)+Math.sin(this.t*.6)*.9;else if(this.follow(e,this.alerted?2.2:1.45)){this.wi=(this.wi+this.dir+this.route.length)%this.route.length;let M=this.route[this.wi];this.goTo(M[0],M[1]),this.waitT=this.route.length<3||Math.random()<.6?Qt(this.waitR):0,this.baseYaw=this.yaw}this.los&&this.detect>.35&&(t.sec.suspicious(),this.suspect(i.pos.x+Re(-2,2),i.pos.z+Re(-2,2),"check",Re(1.2,2.5))),u=!1;break;case"SUSPICIOUS":c=f(this.sus),(this.susT-=e)<=0&&(this.after==="defend"?(this.order=this.order||{type:"defend",x:this.home[0],z:this.home[1],tx:this.sus.x,tz:this.sus.z},this.doOrder()):this.after==="flank"&&this.hasLkp&&this.takeCover("flank")||(this.after!=="check"||Math.random()<n.investigate?this.goInvestigate(this.sus.x,this.sus.z):this.resume()));break;case"INVESTIGATE":{let M=this.follow(e,this.alerted?3.1:2.3),v=Math.hypot(this.inv.x-this.pos.x,this.inv.z-this.pos.z);v<6&&(c=f(this.inv)),(M||this.stateT>35||v<5&&this.stateT>1&&t.los(this.pos.x,this.pos.y+1.5,this.pos.z,this.inv.x,this.inv.y+1,this.inv.z))&&this.startSearch(this.inv.x,this.inv.z);break}case"SEARCH":if(this.waitT>0)this.waitT-=e,c=(this.baseYaw??this.yaw)+Math.sin(this.t*1.3)*1.3;else if(this.follow(e,2.2))if(this.baseYaw=this.yaw,this.t>this.searchEnd||!this.search.length)this.resume();else{let M=this.search.shift();this.goTo(M.x,M.z),this.waitT=Re(1,2.5)}break;case"ALARM":if(this.phase==="run")this.follow(e,4.4)&&(this.phase="press",this.phaseT=1.1,r.playUpper("Interact",{speed:1.3}));else{let M=t.world.panel.face;c=fs(M[0],M[1]),(this.phaseT-=e)<=0&&(t.sec.lockdown("ALARM TRIGGERED"),this.resume())}break;case"COMBAT":if(c=f(this.lkp),this.crouch=!!this.wantCrouch&&!this.moved,this.reloading&&this.openT>0&&(this.openT=0),this.blockT>1){this.blockT=0,this.openT=0,this.decT=0,this.wantCrouch=!1,!this.takeCover("flank")&&!this.takeCover("push")&&this.goInvestigate(this.lkp.x,this.lkp.z);break}if(this.path&&this.pi<this.path.length&&this.follow(e,1.7),(this.openT-=e)<=0&&(this.decT-=e)<=0){this.decT=Qt(n.decide);let M=this.hp<40&&Math.random()<.5+this.caut*.5;if(this.takeCover(M?"retreat":this.tac==="flank"?"flank":"hold"))break;if(this.tryGrenade()){this.openT=1.2;break}if(!this.seeing&&this.unseen>this.holdT){this.lkpAge>n.memory?this.startSearch(this.lkp.x,this.lkp.z):this.goInvestigate(this.lkp.x,this.lkp.z);break}if(this.wantCrouch=Math.random()<.3+this.caut*.3,Math.random()<.5){let v=this.yaw+(Math.random()<.5?1.57:-1.57),b=t.world.nav.snap(this.pos.x-Math.sin(v)*2.2,this.pos.z-Math.cos(v)*2.2);b&&this.goTo(b.x,b.z)}}break;case"MOVE":{let M=this.phase!=="defend"&&!(this.evading>0)&&this.seeing&&this.pd<7&&this.stateT>.6;if(this.evading>0&&(this.evading-=e),M){this.engage(!0),this.openT=Re(.8,1.6);break}if(this.follow(e,this.phase==="retreat"?4.6:this.phase==="defend"?3.4:4.3)){if(!this.spot){this.engage(!0);break}this.set("COVER","hide"),this.hideT=Re(.3,1),this.mode=null,this.ammo<15&&!this.reloading&&(this.reloading=!0,this.reloadT=2.3,r.playUpper("Pistol_Reload",{speed:.9}))}break}case"COVER":{let M=this.spot,v=this.mode;if(c=f(this.hasLkp||this.holdPost?this.lkp:Ac.set(M.x-M.nx*5,0,M.z-M.nz*5)),this.phase==="hide")this.crouch=!M.high,this.hideT-=e*(this.supp>.6?.3:1),this.hidden=(this.hidden||0)+e,this.hideT<=0&&!this.reloading&&this.throwT<=0?this.afterHide():this.hidden>9&&this.hasLkp&&!this.holdPost&&!this.reloading&&(this.hidden=0,this.supp=0,this.holdT=0,this.nextMove()||this.afterHide());else{let b=this.phase==="glance"?.75:1+Math.min(.3,this.blockT);v.type==="side"?(this.crouch=!M.high,h=(M.tx*v.side*Math.cos(this.yaw)-M.tz*v.side*Math.sin(this.yaw))*b):this.crouch=!1,this.phaseT-=e,this.phase==="glance"?this.phaseT<=0&&(this.seeing&&this.hasLkp?(this.phase="fire",this.phaseT=Qt(n.expose),this.peeks++,this.shotT=Math.min(this.shotT,.12),this.burst=0):this.toHide(this.hasLkp?0:Re(1,3))):(this.seeing?this.blindT=0:(this.blindT+=e,d=this.suppLeft>0&&this.lkpAge<4&&this.blindT>.3),this.blockT>.9?(this.modes=this.modes.filter(S=>S!==v),this.modes.length||this.bad.add(M.id),this.peeks=99,this.toHide()):this.phaseT<=0&&this.seeing&&!this.extended&&this.supp<.4&&this.ammo>4&&Math.random()<.4?(this.extended=!0,this.phaseT=Re(.5,1.1)):(this.phaseT<=0||this.ammo<=0||this.blindT>.7&&!d)&&this.toHide())}break}}if(this.seeing||d){let M=this.seeing?fs(a,o):f(this.lkp);this.moved<3&&(c=M),this.react>0&&(this.react-=e);let v=this.state!=="COVER"||this.phase==="fire"&&Math.abs(r.lean-h)<.3&&r.crouchW<(this.crouch?1.1:.35);!this.reloading&&!this.trav&&this.throwT<=0&&this.moved<2.5&&v&&(this.state==="COMBAT"||this.state==="COVER")&&this.react<=0&&Math.abs(ro(M,this.yaw))<.3&&r.aimW>.8&&(this.shotT-=e)<=0&&(this.burst<=0&&(this.burst=wc(n.burst),d&&this.suppLeft--),this.fire(d)?(this.burst--,this.shotT=this.burst>0?.115:Qt(n.pause)):this.shotT=.15)}this.moved>1.2&&this.pd<16&&(this.stepT=(this.stepT||0)+this.moved*e)>1.5&&(this.stepT=0,t.enemyStep(this));let m=c??(this.moved?this.moveYaw:this.yaw),x=(this.combat()?7:3.5)*e,p=ro(m,this.yaw);this.yaw+=Math.max(-x,Math.min(x,p));let g=this.seeing?Math.atan2(i.pos.y+i.height*.6-(this.pos.y+1.4),Math.max(1,this.pd)):0,_=this.as||(this.as={});_.speed=this.trav?0:this.moved,_.crouch=this.crouch&&!this.moved,_.aim=u&&this.moved<3.5&&!this.trav,_.pitch=g,_.lean=h,r.tick(e,_,this.state==="COVER"&&this.phase!=="hide"?1:t.animEvery(this.pos)),this.sync()}};var sd=["NORMAL","SUSPICIOUS","ALERT","LOCKDOWN"],_m=s=>Re(s[0],s[1]),Cc=class{constructor(e,t){this.g=e,this.pr=t,this.level=0,this.t=0,this.calm=0,this.report=null,this.tick=0,this.commsDown=!1,this.panelDown=!1,this.sector=new Float32Array(8),this.runner=null,this.alarmAt=-1,this.nadeCool=6,this.reinforced=!1,this.reinAt=-1,this.assigned=-1}raise(e,t){if(this.calm=0,e<=this.level)return!1;if(this.level=e,this.g.onSecurity(e,t),e>=2)for(let i of this.g.enemies)i.dead||(i.alerted=!0);return!0}sectorOf(e,t){let i=this.g.world.objective.pos;return(Math.round(Math.atan2(e-i[0],t-i[2])/(Math.PI/4))%8+8)%8}hotSector(){let e=-1,t=1.5;for(let i=0;i<8;i++)this.sector[i]>t&&(t=this.sector[i],e=i);return e}setReport(e,t,i,n){let r=n==="body"?0:3.5;this.report={x:e+Re(-r,r),z:t+Re(-r,r),t:this.t,by:i,kind:n},this.sector[this.sectorOf(e,t)]+=1,this.assign()}radio(e,t,i,n){if(this.commsDown){this.g.say(e,"Radio is dead \u2014 no signal!"),this.g.shout(e);return}let r=this.raise(2,t==="body"?"MAN DOWN REPORTED":"INTRUDER REPORTED");this.setReport(i,n,e,t),this.g.say(e,t==="body"?"Man down! Sweep the area!":r?"Contact! Intruder on site!":"Contact, updating position!"),r&&this.g.world.panel&&(this.alarmAt=Math.random()<this.pr.alarmChance?this.t+_m(this.pr.alarmDelay):1/0)}suspicious(){this.raise(1,"")}relocateDetail(e){let t=e.posts,i=0;for(let n of this.g.enemies)if(!n.dead&&n.duty==="objective"){let r=t[i++%t.length];n.home=r,n.setOrder({type:"defend",x:r[0],z:r[1],tx:n.pos.x,tz:n.pos.z}),n.order&&n.state!=="COVER"&&!n.engaged()&&n.doOrder()}}sealExits(){let e=this.g,t=new Set,i=e.world.objective.pos;for(let n of e.world.exits){let r=e.enemies.filter(a=>!a.dead&&!t.has(a)&&!a.engaged()&&a.stun<=0&&a.state!=="ALARM").sort((a,o)=>Math.hypot(a.pos.x-n.pos[0],a.pos.z-n.pos[2])-Math.hypot(o.pos.x-n.pos[0],o.pos.z-n.pos[2]))[0];if(!r)break;t.add(r),r.duty="post",r.alerted=!0,r.setOrder({type:"defend",x:n.pos[0],z:n.pos[2],tx:i[0],tz:i[2],name:n.name}),r.order&&!r.engaged()&&r.doOrder()}return t.size}discover(e){let t=this.g,i=t.enemies.filter(n=>!n.dead&&!n.engaged()&&n.stun<=0&&n.state!=="ALARM").sort((n,r)=>Math.hypot(n.pos.x-e.at[0],n.pos.z-e.at[2])-Math.hypot(r.pos.x-e.at[0],r.pos.z-e.at[2]))[0];i&&(this.raise(1,""),i.alerted=!0,i.setOrder({type:"investigate",x:e.stand[0],z:e.stand[1]}),t.say(i,`Checking the ${e.name}.`))}lockdown(e){this.raise(3,e)&&(!this.reinforced&&!this.commsDown&&(this.reinforced=!0,this.reinAt=this.t+Re(12,18)),this.assign(!0))}mayMove(e){if(!this.pr.bound)return!0;let t=this.g.enemies.filter(r=>!r.dead&&r!==e&&r.engaged());if(!t.length)return!0;let i=t.filter(r=>r.state==="MOVE").length;return t.filter(r=>r.state==="COVER"||r.seeing).length>=1&&i<Math.ceil((t.length+1)/2)}assign(e){let t=this.g,i=this.report,n=t.world;if(!i||this.level<2)return;this.assigned=i.t;let r=t.enemies.filter(f=>!f.dead&&!f.engaged()&&f!==this.runner&&f.stun<=0&&f.state!=="ALARM"),a=(f,m,x)=>Math.hypot(f.pos.x-m,f.pos.z-x),o=t.enemies.filter(f=>!f.dead&&f.duty==="objective");for(let f of r)f.duty==="objective"&&f.setOrder({type:"defend",x:f.home[0],z:f.home[1],tx:i.x,tz:i.z});let l=r.filter(f=>f.duty!=="objective").sort((f,m)=>a(f,i.x,i.z)-a(m,i.x,i.z)),c=this.level===3?1:2,h=n.objective.pos;if(l.splice(0,c).forEach((f,m)=>f.setOrder({type:"investigate",x:i.x+(m?Re(-5,5):0),z:i.z+(m?Re(-5,5):0),flank:m>0&&this.pr.flank>.3})),this.pr===void 0||this.pr.label==="RECRUIT")return;if(o.length<2&&l.length){let f=l.shift(),m=n.posts.objective[0];f.duty="objective",f.home=m,f.setOrder({type:"defend",x:m[0],z:m[1],tx:i.x,tz:i.z})}let u=this.hotSector(),d=new Set;for(let f of l){let m=null,x=1e9;if(n.posts.entrance.forEach((g,_)=>{if(d.has(_))return;let M=Math.hypot(g[0]-i.x,g[1]-i.z)+Math.hypot(g[0]-h[0],g[1]-h[2])*.6+a(f,g[0],g[1])*.3;u>=0&&this.sectorOf(g[0],g[1])===u&&(M-=8),M<x&&(x=M,m=_)}),m===null)break;d.add(m);let p=n.posts.entrance[m];f.setOrder({type:"defend",x:p[0],z:p[1],tx:i.x,tz:i.z,name:p[2]})}}update(e){let t=this.g;this.t+=e,this.calm+=e,this.nadeCool-=e;let i=t.enemies.filter(r=>!r.dead),n=i.filter(r=>r.engaged());if(n.length&&(this.calm=0),this.level===1&&this.calm>30&&(this.level=0,t.onSecurity(0,"")),this.level===2&&this.calm>80){this.level=1,this.calm=0,t.onSecurity(1,"SEARCH CALLED OFF");for(let r of i)r.order=null}if(this.reinAt>0&&this.t>=this.reinAt&&(this.reinAt=-1,t.reinforce()),!((this.tick-=e)>0)){if(this.tick=.6,this.pr.label!=="RECRUIT"){let r=0;for(let a of n){if(a.duty==="objective"){a.tac="hold";continue}this.pr.bound?a.tac=a.aggr>.65?"push":a.caut>.65?"overwatch":r%2?"flank":"suppress":a.tac=["hold","flank","hold","push"][r%4],r++}this.pr.bound&&n.length>1&&!n.some(a=>a.tac==="suppress"||a.tac==="overwatch")&&(n[0].tac="suppress")}if(this.runner&&(this.runner.dead||this.runner.state!=="ALARM")&&(this.level<3&&this.runner.dead&&(this.alarmAt=this.t+_m(this.pr.alarmDelay)),this.runner=null),this.level===2&&t.world.panel&&!this.panelDown&&!this.runner&&this.alarmAt>=0&&this.t>=this.alarmAt){let r=t.world.panel,a=i.filter(o=>!o.engaged()&&o.stun<=0).sort((o,l)=>Math.hypot(o.pos.x-r.x,o.pos.z-r.z)-Math.hypot(l.pos.x-r.x,l.pos.z-r.z))[0];a&&a.goAlarm()?(this.runner=a,t.say(a,"Going for the alarm!")):this.alarmAt=this.t+3}this.level>=2&&this.report&&this.assigned!==this.report.t&&this.assign()}}};var PM={frag:2.8,flash:1.9,smoke:1.6},LM=14,NM={frag:new Un(.045,10,8),flash:new xt(.03,.03,.11,10),smoke:new xt(.033,.033,.13,10)},DM={frag:new Pt({color:3095078,roughness:.6,metalness:.3}),flash:new Pt({color:9080724,roughness:.4,metalness:.7}),smoke:new Pt({color:5989488,roughness:.5,metalness:.5})},Ic=class{constructor(e){this.g=e,this.list=[],this.smokes=[],this._v=new I}spawn(e,t,i,n){let r=new ke(NM[e],DM[e]);r.position.copy(t),r.castShadow=!0,this.g.scene.add(r),this.list.push({type:e,pos:t,vel:i,owner:n,fuse:PM[e],mesh:r,rest:!1}),this.g.audio.swish()}update(e){let t=this.g,i=t.world.colliders;for(let n=this.list.length-1;n>=0;n--){let r=this.list[n],a=r.pos,o=r.vel;if(r.fuse-=e,!r.rest){o.y-=LM*e;let l=o.length(),c=l*e,h=c>1e-4?xi(i,a.x,a.y,a.z,o.x/l,o.y/l,o.z/l,c+.05,"solid"):null;if(h){let u=o.x*h.nx+o.y*h.ny+o.z*h.nz;a.addScaledVector(o,Math.max(0,(h.d-.05)/l)),o.x-=1.35*u*h.nx,o.y-=1.35*u*h.ny,o.z-=1.35*u*h.nz,o.multiplyScalar(.72),l>2.5&&(t.audio.bounce(Math.min(.3,l*.03)),r.owner==="player"&&t.sound(a,7,"step")),this.warn(r)}else a.addScaledVector(o,e);a.y<.05&&(a.y=.05,this.warn(r),Math.abs(o.y)>1.5&&t.audio.bounce(.15),o.y*=-.3,o.x*=.6,o.z*=.6),o.lengthSq()<.09&&a.y<.08&&(r.rest=!0),r.mesh.position.copy(a),r.mesh.rotation.x+=e*l*2,r.mesh.rotation.z+=e*l}r.fuse<=0&&(this.detonate(r),t.scene.remove(r.mesh),this.list.splice(n,1))}for(let n=this.smokes.length-1;n>=0;n--){let r=this.smokes[n];if(r.t-=e,(r.puff-=e)<=0&&r.t>2.5&&(r.puff=.22,t.fx.puff(this._v.set(r.x+(Math.random()-.5)*4,r.y+.4+Math.random()*2,r.z+(Math.random()-.5)*4),3.2+Math.random()*1.6,3.6,10133668,.12,.6)),r.t<=0){let a=i.indexOf(r.col);a>=0&&i.splice(a,1),this.smokes.splice(n,1)}}}warn(e){if(e.type!=="frag"||e.warned||e.fuse<.35)return;e.warned=!0;let t=this.g,i=e.pos,n=!1;for(let r of t.enemies)r.dead||r===e.owner||Math.hypot(r.pos.x-i.x,r.pos.z-i.z)>7.5||r.evade(i.x,i.z)&&!n&&(n=!0,t.say(r,"Grenade!"))}detonate(e){let t=this.g,i=t.player,n=e.pos,r=n.y+.35,a=Math.hypot(i.pos.x-n.x,i.pos.z-n.z);if(e.type==="frag"){t.fx.explosion(n),t.audio.explosion(a),t.sound(n,70,"explosion"),t.range&&t.range.onBlast(n);let o=(c,h,u,d)=>{let f=Math.hypot(c-n.x,h+d*.5-r,u-n.z);if(f>8)return 0;let m=t.losB(n.x,r,n.z,c,h+d*.55,u)?1:t.losB(n.x,r,n.z,c,h+d*.9,u)?.45:0;return 150*Math.pow(1-f/8,1.3)*m};for(let c of t.civs||[]){if(c.dead)continue;let h=o(c.pos.x,c.pos.y,c.pos.z,1.7);h>1&&c.damage(h)}for(let c of t.enemies){if(c.dead)continue;let h=o(c.pos.x,c.pos.y,c.pos.z,c.crouch?1.1:1.75);h>1&&(c.damage(h,n,"blast"),c.dead||(c.supp=1.5))}let l=o(i.pos.x,i.pos.y,i.pos.z,i.height);l>1&&i.damage(l,n,{name:e.owner==="player"?"your own grenade":e.owner==="charge"?"your own demolition charge":"a fragmentation grenade",dist:a,x:n.x,z:n.z,blast:!0}),a<25&&(i.shake=Math.max(i.shake,1.2*(1-a/25)))}else if(e.type==="flash"){t.fx.boom.position.set(n.x,r,n.z),t.fx.boom.intensity=2500,t.sound(n,40,"explosion");for(let l of t.enemies){if(l.dead)continue;let c=Math.hypot(l.pos.x-n.x,l.pos.z-n.z);if(c>17)continue;let h=l.ch.eye(this._v);if(!t.los(n.x,r,n.z,h.x,h.y,h.z))continue;let u=Math.atan2(-(n.x-l.pos.x),-(n.z-l.pos.z))-l.yaw;for(;u>Math.PI;)u-=6.2832;for(;u<-Math.PI;)u+=6.2832;let d=5*(1-c/19)*(Math.abs(u)<1.7?1:.4);d>.6&&l.flashbang(d)}let o=0;if(a<22&&t.los(n.x,r,n.z,i.eyePos.x,i.eyePos.y,i.eyePos.z)){let l=(i.fwd.x*(n.x-i.eyePos.x)+i.fwd.y*(r-i.eyePos.y)+i.fwd.z*(n.z-i.eyePos.z))/(Math.hypot(n.x-i.eyePos.x,r-i.eyePos.y,n.z-i.eyePos.z)||1);o=2.8*(1-a/24)*(l>.2?1:l>-.3?.55:.25),i.blind=Math.max(i.blind,o)}t.audio.flashbang(o)}else{let o={x0:n.x-2.8,x1:n.x+2.8,y0:0,y1:n.y+3.4,z0:n.z-2.8,z1:n.z+2.8,solid:!1,bullet:!1,sight:!0,smoke:!0};t.world.colliders.push(o),this.smokes.push({x:n.x,y:n.y,z:n.z,t:15,puff:0,col:o}),t.audio.noise(1.2,{f:3e3,f2:800,type:"bandpass",q:1,vol:.2});for(let l=0;l<10;l++)t.fx.puff(this._v.set(n.x+(Math.random()-.5)*3.5,n.y+.4+Math.random()*2,n.z+(Math.random()-.5)*3.5),3.5,4,10133668,.12,.6)}}};var Yr=320,Pc=class{constructor(e){this.tr=[];let t=new wt(.02,.02,1);t.translate(0,0,.5);for(let u=0;u<28;u++){let d=new ke(t,new st({color:16769696,transparent:!0,opacity:0,blending:Ji,depthWrite:!1,fog:!1}));d.visible=!1,d.life=0,e.add(d),this.tr.push(d)}this.ti=0,this.pp=new Float32Array(Yr*3).fill(-999),this.pc=new Float32Array(Yr*3),this.pv=new Float32Array(Yr*3),this.pl=new Float32Array(Yr);let i=this.pg=new at;i.setAttribute("position",new nt(this.pp,3)),i.setAttribute("color",new nt(this.pc,3));let n=new Nn(i,new ln({size:.07,vertexColors:!0,transparent:!0,depthWrite:!1}));n.frustumCulled=!1,e.add(n),this.pi=0,this.dec=[];let r=new $i(.13,.13),a=new st({color:526602,transparent:!0,opacity:.85,polygonOffset:!0,polygonOffsetFactor:-4});for(let u=0;u<48;u++){let d=new ke(r,a);d.visible=!1,e.add(d),this.dec.push(d)}this.di=0,this.flash=new di(16760944,0,16,1.5),e.add(this.flash),this.boom=new di(16756832,0,40,1.4),e.add(this.boom);let o=document.createElement("canvas");o.width=o.height=64;let l=o.getContext("2d"),c=l.createRadialGradient(32,32,2,32,32,32);c.addColorStop(0,"rgba(255,255,255,0.9)"),c.addColorStop(.5,"rgba(255,255,255,0.45)"),c.addColorStop(1,"rgba(255,255,255,0)"),l.fillStyle=c,l.fillRect(0,0,64,64);let h=new Dn(o);this.puffs=[];for(let u=0;u<48;u++){let d=new va(new br({map:h,transparent:!0,opacity:0,depthWrite:!1,color:8947848}));d.visible=!1,d.life=0,e.add(d),this.puffs.push(d)}this.pfi=0,this._v=new I}tracer(e,t,i=16769696){let n=this.tr[this.ti++%this.tr.length];n.position.copy(e),n.lookAt(t),n.scale.z=Math.max(.1,e.distanceTo(t)),n.material.color.setHex(i),n.material.opacity=.55,n.visible=!0,n.life=.07}spray(e,t,i,n,r,a,o,l){for(let c=0;c<i;c++){let h=this.pi++%Yr,u=h*3;this.pp[u]=e.x,this.pp[u+1]=e.y,this.pp[u+2]=e.z,this.pv[u]=(t.x+(Math.random()-.5)*1.4)*n*Math.random(),this.pv[u+1]=(t.y+(Math.random()-.3)*1.4)*n*Math.random(),this.pv[u+2]=(t.z+(Math.random()-.5)*1.4)*n*Math.random();let d=.6+Math.random()*.4;this.pc[u]=r*d,this.pc[u+1]=a*d,this.pc[u+2]=o*d,this.pl[h]=l*(.5+Math.random()*.5)}}impact(e,t,i="concrete"){i==="metal"?(this.spray(e,t,6,7,1,.85,.45,.22),this.spray(e,t,2,2,.5,.5,.5,.3)):i==="wood"?(this.spray(e,t,7,3,.55,.38,.22,.5),this.spray(e,t,2,4,.75,.6,.4,.3)):i==="dirt"?this.spray(e,t,9,2.6,.42,.34,.25,.55):i==="plastic"?this.spray(e,t,5,3,.9,.78,.2,.35):(this.spray(e,t,7,3.2,.75,.73,.68,.45),this.spray(e,t,3,6,1,.8,.4,.15)),this.lastMat=i;let n=this.dec[this.di++%this.dec.length];n.position.set(e.x+t.x*.012,e.y+t.y*.012,e.z+t.z*.012),n.lookAt(this._v.set(e.x+t.x,e.y+t.y,e.z+t.z)),n.rotation.z=Math.random()*6,n.scale.setScalar(1),n.visible=!0}blood(e,t){this.spray(e,t,10,2.6,.5,.04,.03,.5)}muzzle(e,t=1){this.flash.position.copy(e),this.flash.intensity=45*t}shell(e,t){this.spray(e,t,1,2.6,.9,.68,.25,.7)}puff(e,t,i,n=9079434,r=.4,a=.5){let o=this.puffs[this.pfi++%this.puffs.length];o.position.copy(e),o.scale.setScalar(t*.5),o.size=t,o.life=o.max=i,o.rise=r,o.op=a,o.material.color.setHex(n),o.material.rotation=Math.random()*6,o.visible=!0}explosion(e){this.boom.position.set(e.x,e.y+.6,e.z),this.boom.intensity=900;let t=this._v.set(0,1,0);this.spray(e,t,40,14,1,.7,.25,.5),this.spray(e,t,30,9,.35,.33,.3,1.1);for(let n=0;n<6;n++)this.puff(new I(e.x+(Math.random()-.5)*2,e.y+.5+Math.random(),e.z+(Math.random()-.5)*2),3+Math.random()*2,2.2+Math.random(),5591114,.9,.55);let i=this.dec[this.di++%this.dec.length];i.position.set(e.x,Math.max(.02,e.y-.04),e.z),i.rotation.set(-Math.PI/2,0,Math.random()*6),i.scale.setScalar(14),i.visible=!0}update(e){for(let r of this.tr)r.visible&&(r.life-=e,r.material.opacity=Math.max(0,r.life/.07)*.55,r.life<=0&&(r.visible=!1));let{pp:t,pv:i,pl:n}=this;for(let r=0;r<Yr;r++){if(n[r]<=0)continue;let a=r*3;n[r]-=e,i[a+1]-=9*e,t[a]+=i[a]*e,t[a+1]+=i[a+1]*e,t[a+2]+=i[a+2]*e,n[r]<=0&&(t[a+1]=-999)}this.pg.attributes.position.needsUpdate=!0,this.pg.attributes.color.needsUpdate=!0,this.flash.intensity>0&&(this.flash.intensity=Math.max(0,this.flash.intensity-e*700)),this.boom.intensity>0&&(this.boom.intensity=Math.max(0,this.boom.intensity-e*4500));for(let r of this.puffs)if(r.visible){r.life-=e;let a=1-r.life/r.max;r.scale.setScalar(r.size*(.5+a*.7)),r.position.y+=r.rise*e,r.material.opacity=r.op*Math.min(1,a*6)*Math.min(1,r.life/r.max*2.2),r.life<=0&&(r.visible=!1)}}};function vm(s){function e(r,a,o,l){let h=xi(s.world.colliders,r.x,r.y,r.z,a.x,a.y,a.z,o,"bullet");if(a.y<-1e-4){let d=-r.y/a.y;d>0&&d<(h?h.d:o)&&(h={d,c:{mat:s.world.env.ground||"dirt",ground:!0},nx:0,ny:1,nz:0})}let u={d:h?h.d:o,kind:h?"world":null,wh:h,e:null,part:null,mult:1};for(let d of s.enemies){if(d.dead||d===l)continue;let f=d.rayHit(r,a,u.d);f&&(u.d=f.d,u.kind="enemy",u.e=d,u.part=f.part,u.mult=f.mult)}for(let d of s.civs||[]){if(d.dead)continue;let f=d.ch.rayHit(r,a,u.d,s.frame);f&&(u.d=f.d,u.kind="civ",u.e=d,u.part=f.part,u.mult=f.mult)}if(l!=="player"&&!s.player.dead){let d=xi(s.playerBox(),r.x,r.y,r.z,a.x,a.y,a.z,u.d,"bullet");d&&(u.d=d.d,u.kind="player",u.e=null)}return u}let t={x:0,y:0,z:0},i={x:0,y:0,z:0};function n(r,a,o){let l=e(r,a,250,"player");t.x=r.x+a.x*l.d,t.y=r.y+a.y*l.d,t.z=r.z+a.z*l.d;let c=o.x-r.x,h=o.y-r.y,u=o.z-r.z,d=Math.hypot(c,h,u);if(d>.05){let x=xi(s.world.colliders,r.x,r.y,r.z,c/d,h/d,u/d,d,"bullet");if(x)return{d:x.d,kind:"world",wh:x,from:r,dir:{x:c/d,y:h/d,z:u/d},blocked:!0}}i.x=t.x-o.x,i.y=t.y-o.y,i.z=t.z-o.z;let f=Math.hypot(i.x,i.y,i.z)||1;i.x/=f,i.y/=f,i.z/=f;let m=e(o,i,l.kind?f+.6:250,"player");return m.from=o,m.dir=i,m}return{trace:e,playerRound:n}}var OM=[[-8,-10],[-2.5,-10],[5,-10],[-6,-25],[1.2,-25],[-4.4,-50],[2.6,-50],[-7.2,-75],[-.6,-75],[5.6,-75],[-3.3,-100],[.4,-100],[3.6,-100]],UM=[{x:8,z:-25,amp:4,sp:1.4},{x:8,z:-50,amp:4,sp:2.4}],FM=[{x:-11,z:-18,note:"steel plate"},{x:-11,z:-32,note:"chain-link fence"}],zM=[[10,-11.5],[11.6,-13],[9.2,-14.2]];rm("range",(s,e,t)=>{s.box("grass",3359019,0,-1,-50,90,1,160,{col:!1,tint:0}),s.box("dirt",4866099,0,0,-50,28,.015,122,{col:!1,tint:0}),s.box("concrete",5921886,0,0,8,28,.03,7,{col:!1,tint:0}),bt(s,"concrete",5264213,-14.5,-110.5,14.5,-110.5,6),bt(s,"concrete",5264213,-14.5,11.5,14.5,11.5,3.2),bt(s,"concrete",5264213,-14.5,-110.5,-14.5,11.5,3.2),bt(s,"concrete",5264213,14.5,-110.5,14.5,11.5,3.2);for(let i of[-9,-3,3,9])s.box("wood",5917238,i,0,4.6,2.4,.9,.5),s.box("plain",2764081,i-2.9,0,5,.12,3,.12,{col:!1});s.box("metal",3422774,0,3,7.5,28,.15,7.6);for(let i of[10,25,50,75,100])s.box("plain",14211280,-13.6,0,-i,.12,1.6,.12,{col:!1,tint:0}),s.box("emis",15249482,-13.6,1.6,-i,.5,.22,.06,{col:!1,tint:0});s.box("metal",4870232,-11,0,-17,2,2.2,.12),bt(s,"fence",9080982,-12.6,-31,-9.4,-31,2.4,[],.1,{sight:!1}),mt(s,-6,-6,1.1),tn(s,5,-6,3,!0),tn(s,10.3,-9.4,4.6,!0),tn(s,7.6,-12.6,5,!1),bt(s,"concrete",5790295,12.2,-15.5,14.3,-15.5,1.6);for(let i of[-8,-30,-55,-80,-104])xn(e,t,16773336,i>-20?55:85,44,0,7,i);return{name:"TRAINING RANGE",range:!0,bounds:{x0:-16,x1:16,z0:-112,z1:13},spawn:{x:0,z:7,yaw:0},env:{fog:[725015,.005],bg:527378,hemi:[9676488,2764836,3.2],moon:[11847402,3.4,[-30,60,25]],viewRange:40,detect:1,shotMul:1,amb:"forest",ground:"dirt"},objective:{pos:[0,0,-50]},extraction:{pos:[0,0,9999]},anchors:[],entries:[{id:"line",name:"firing line",x:0,z:7,yaw:0}],exits:[],routes:[],posts:{objective:[],entrance:[]},panel:null,guards:0,reinforce:[],pickups:[["ammo",-12.5,8.5],["med",12.5,8.5]]}});var kM=new wt(.5,.95,.04),BM=new wt(.26,.3,.04),HM=new wt(.06,.5,.06),GM=new wt(.16,.16,.045),Lc=class{constructor(e){this.g=e,this.targets=[],this.t=0,this.s={shots:0,hits:0,heads:0},this.last=null,this.msg="",this.att=JSON.parse(JSON.stringify(e.loadout.att)),this.dummies=[];let t=(i,n,r={})=>{let a=new Mt,o=new ri({color:11048040}),l=(u,d,f)=>{let m=new ke(u,d);return m.position.y=f,m.castShadow=!0,a.add(m),m};l(HM,new ri({color:2764081}),.25),l(kM,o,.975),l(BM,o,1.6),l(GM,new st({color:14209216}),1.05),a.position.set(i,0,n),e.scene.add(a);let c=(u,d,f,m)=>{let x={x0:i-f,x1:i+f,y0:u,y1:d,z0:n-.03,z1:n+.03,solid:!1,sight:!1,bullet:!0,zone:m};return e.world.colliders.push(x),x},h={g:a,body:o,x:i,z:n,cols:[c(.5,1.45,.25,"body"),c(1.45,1.75,.13,"head")],down:0,flash:0,dmg:0,...r};return h.cols.forEach(u=>u.target=h),this.targets.push(h),h};OM.forEach(([i,n])=>t(i,n)),UM.forEach(i=>t(i.x,i.z,{move:i})),FM.forEach(i=>t(i.x,i.z,{note:i.note})),zM.forEach(([i,n])=>t(i,n,{pit:!0})),t(13.2,-17,{pit:!0,note:"behind the wall"}),this.spawnDummies()}spawnDummies(){let e=this.g;for(let[t,i]of[[-10.5,-8.5],[11,-40]]){if(this.dummies.some(r=>!r.dead&&r.pos.x===t))continue;let n=e.spawnEnemy(t,i,[[t,i]],{duty:"post",wait:[1e9,1e9]});n.pos.set(t,0,i),n.yaw=n.baseYaw=Math.PI,n.waitT=1e9,n.passive=!0,n.hear=()=>{},n.onAlert=()=>{},n.engage=()=>{},n.evade=()=>!1,n.sync(),this.dummies.push(n)}}falloff(e,t){return e.falloff&&t>e.falloff[0]?1-(1-e.falloff[1])*Math.min(1,(t-e.falloff[0])/(e.falloff[0]*1.5)):1}onShot(e,t,i,n){n&&(this.s.shots++,this.cur=null);let r=e.kind==="world"&&e.wh.c.target,a=r?e.wh.c.zone:e.kind==="enemy"?e.part:null;if(!a)return;let o=Math.hypot(t.x-this.g.player.pos.x,t.z-this.g.player.pos.z),l=i.dmg*(a==="head"?i.head||2.5:r?1:e.mult)*this.falloff(i,e.d);this.cur||(this.s.hits++,a==="head"&&this.s.heads++,this.cur=this.last={dist:o,zone:a,dmg:0,n:0}),this.cur.dmg+=l,this.cur.n++,a==="head"&&(this.cur.zone="head"),r&&(r.flash=.18,r.dmg+=l,r.body.color.setHex(a==="head"?16734794:16765024),r.dmg>=100&&this.drop(r),this.g.audio.tone(a==="head"?1900:1300,.07,{vol:.12,type:"triangle"}))}drop(e){e.down=1.8,e.dmg=0,e.cols.forEach(t=>t.bullet=!1)}onBlast(e){let t=0;for(let i of this.targets)i.down>0||Math.hypot(i.x-e.x,i.z-e.z)>7||!this.g.losB(e.x,e.y+.35,e.z,i.x,1.1,i.z+.06)||(this.drop(i),t++);this.msg=`GRENADE: ${t} target${t===1?"":"s"} knocked down`,this.msgT=5}key(e){let t=this.g.player,i=(r,a)=>r[(r.indexOf(a)+1)%r.length];if(t.busy()||t.adsF>.1)return;let n=r=>Object.keys(yt).filter(a=>yt[a].slot===r);if(e==="Digit5"||e==="Digit6"){let r=e==="Digit5"?0:1,a=i(n(r?"secondary":"primary"),t.slots[r].id);t.setSlot(r,a,this.att[a]),t.switchTo(r)}else if(t.cur<2){let r=t.slot.id,a=this.att[r],o=yt[r];if(e==="Digit7")a.optic=i(o.optics,a.optic);else if(e==="Digit8"&&o.muzzle)a.muzzle=!a.muzzle;else return;t.setSlot(t.cur,r,a)}this.g.audio.click(.4)}update(e){let t=this.g,i=t.player;this.t+=e;for(let n of this.targets){if(n.move){let r=n.move.x+Math.sin(this.t*n.move.sp/n.move.amp)*n.move.amp;n.x=r,n.g.position.x=r,n.cols[0].x0=r-.25,n.cols[0].x1=r+.25,n.cols[1].x0=r-.13,n.cols[1].x1=r+.13}n.flash>0&&(n.flash-=e)<=0&&n.body.color.setHex(11048040),n.down>0&&(n.down-=e,n.g.rotation.x+=((n.down>.3?-1.45:0)-n.g.rotation.x)*Math.min(1,e*12),n.down<=0&&(n.g.rotation.x=0,n.cols.forEach(r=>r.bullet=!0)))}for(let n of this.dummies)n.percT=1e9,n.los=!1,n.detect=0,n.waitT=1e9,n.dead&&!n.gone&&n.deadT>2.5&&(n.gone=!0,t.scene.remove(n.ch.root),t.enemies.splice(t.enemies.indexOf(n),1));this.dummies.some(n=>n.gone)&&(this.dummies=this.dummies.filter(n=>!n.gone),this.spawnDummies());for(let n of i.slots)!n.st.melee&&n.reserve<n.st.mag&&(n.reserve=n.st.reserve);for(let n of["frag","flash","smoke"])i.inv[n]<=0&&!t.gren.list.length&&(i.inv[n]=3);i.dead&&(i.dead=!1,i.hp=100,i.pos.set(0,0,7),i.vel.set(0,0,0)),this.msgT>0&&(this.msgT-=e)<=0&&(this.msg="")}hud(){let e=this.s,t=this.last,i=e.shots?Math.round(e.hits/e.shots*100):0;return`<div class="o-now">SHOTS ${e.shots} \xB7 HITS ${e.hits} \xB7 HEAD ${e.heads} \xB7 ${i}%</div><div class="o-now">${t?`LAST HIT ${t.dist.toFixed(0)} M \xB7 ${t.zone.toUpperCase()} \xB7 ${Math.round(t.dmg)} DMG${t.n>1?" ("+t.n+" pellets)":""}`:"LAST HIT \u2014"}</div>`+(this.msg?`<div class="o-now">${this.msg}</div>`:"")+'<div class="o-todo">[5] primary \xB7 [6] secondary \xB7 [7] optic \xB7 [8] suppressor</div><div class="o-todo">Targets at 10 / 25 / 50 / 75 / 100 m \xB7 two moving \xB7 two behind cover \xB7 grenade pit right</div>'}};var Nc=(s,e)=>Math.atan2(-s,-e),Dc=class{constructor(e,t,i,n,r){this.g=e,this.kind=t,this.fallback=r,this.hp=100,this.dead=!1,this.deadT=0,this.pos=new I(i,e.world.nav.height(i,n),n),this.yaw=Math.random()*6.28,this.state=t==="hostage"?"held":"idle",this.path=null,this.pi=0,this.trav=null,this.rep=0,this.moved=!1,this.reachedHint=!1,this.seenByPlayer=!1,this.speed=0,this.t=Math.random()*9,this.ch=new ds(t,null),e.scene.add(this.ch.root),this.sync(),this.ch.refresh()}sync(){this.ch.root.position.copy(this.pos),this.ch.root.rotation.y=this.yaw}canSecure(){return!this.dead&&(this.state==="held"||this.state==="surrender")}secure(){this.state="follow",this.rep=0,this.g.audio.pickup()}alarm(){if(this.kind!=="hvt"||this.state!=="idle"||!this.fallback)return;let e=this.fallback.stand;this.path=this.g.world.nav.path(this.pos.x,this.pos.z,e[0],e[1]),this.pi=0,this.path&&(this.state="flee",this.moved=!0,this.g.sec.relocateDetail(this.fallback))}damage(e){this.dead||(this.hp-=e,this.hp<=0?(this.dead=!0,this.ch.die()):this.kind==="hvt"&&this.state==="idle"&&this.alarm())}follow(e,t){let i=this.pos,n=this.g.world.nav;if(this.trav){let h=this.trav;h.t+=e/.8;let u=Math.min(1,h.t);return i.x=h.x0+(h.x1-h.x0)*u,i.z=h.z0+(h.z1-h.z0)*u,i.y=h.y0+(h.y1-h.y0)*u+Math.sin(Math.PI*u)*(h.h-Math.min(h.y0,h.y1)+.1)*(h.vault?1:.3),u>=1&&(this.trav=null,this.pi++),this.speed=2,!1}if(!this.path||this.pi>=this.path.length)return!0;let r=this.path[this.pi];if(r.link)return this.trav={x0:i.x,z0:i.z,y0:i.y,x1:r.x,z1:r.z,y1:r.y,h:r.link.h,vault:r.link.type==="vault",t:0},r.link.type!=="drop"&&this.ch.playFull("ClimbUp_1m",{speed:2.3}),!1;let a=r.x-i.x,o=r.z-i.z,l=Math.hypot(a,o);if(l<.25)return this.pi++,this.pi>=this.path.length;let c=Math.min(l,t*e);return i.x+=a/l*c,i.z+=o/l*c,i.y+=(n.height(i.x,i.z)-i.y)*Math.min(1,e*10),this.yaw=Nc(a,o),this.speed=t,!1}update(e){let t=this.g,i=t.player;if(this.dead){this.deadT<4&&(this.deadT+=e,this.ch.tick(e,{speed:0},t.animEvery(this.pos)));return}this.t+=e,this.speed=0;let n=i.pos.x-this.pos.x,r=i.pos.z-this.pos.z,a=Math.hypot(n,r),o=a<40&&t.los(this.pos.x,this.pos.y+1.5,this.pos.z,i.eyePos.x,i.eyePos.y,i.eyePos.z);this.vis=o&&a<35,this.vis&&(this.seenByPlayer=!0,this.lastSeen=[this.pos.x,this.pos.y,this.pos.z]);let l=!1;if(this.state==="held")l=!0,a<6&&(this.yaw=Nc(n,r));else if(this.state==="idle")this.yaw+=Math.sin(this.t*.4)*e*.3,(t.sec.level>=2||o&&a<13)&&this.alarm(),o&&a<4.5&&(this.state="surrender");else if(this.state==="flee")this.follow(e,4.6)&&(this.state="cower"),o&&a<3.2&&(this.state="surrender",this.path=null);else if(this.state==="cower")l=!0,o&&a<5&&(this.state="surrender");else if(this.state==="surrender")l=!0,this.yaw=Nc(n,r);else if(this.state==="follow"){if((this.rep-=e)<=0)if(this.rep=.45,a>2.6&&!this.trav){let h=t.world.nav.path(this.pos.x,this.pos.z,i.pos.x,i.pos.z,400);h&&(this.path=h,this.pi=0)}else a<=2.6&&(this.path=null);a>2.2?this.follow(e,a>7?5.6:3.8):this.trav||(this.yaw=Nc(n,r)),l=i.crouch&&this.speed===0}this.moved&&this.fallback&&!this.reachedHint&&Math.hypot(i.pos.x-this.g.mission.stage?.anchors[0].at[0],i.pos.z-this.g.mission.stage?.anchors[0].at[2])<7&&(this.reachedHint=!0);let c=this.as||(this.as={aim:!1,lean:0});c.speed=this.trav?0:this.speed,c.crouch=l,this.ch.tick(e,c,this.state==="follow"?1:t.animEvery(this.pos)),this.sync()}};var _i={intel:{name:"INTELLIGENCE RECOVERY",short:"Intel recovery",desc:"Obtain classified material and extract",lengths:["quick","standard","extended"]},capture:{name:"HIGH-VALUE TARGET CAPTURE",short:"HVT capture",desc:"Take the target alive and bring him out",lengths:["quick","standard","extended"]},sabotage:{name:"SABOTAGE OPERATION",short:"Sabotage",desc:"Disable facility infrastructure",lengths:["quick","standard","extended"]},rescue:{name:"HOSTAGE RESCUE",short:"Hostage rescue",desc:"Free the hostage and escort them out",lengths:["quick","standard","extended"]},multi:{name:"TACTICAL OPERATION",short:"Tactical operation",desc:"Linked objectives across the site",lengths:["standard","extended"]}},ps={quick:{name:"QUICK",desc:"1 objective \xB7 about 4\u20138 min",extra:0},standard:{name:"STANDARD",desc:"2 linked objectives \xB7 about 7\u201312 min",extra:1},extended:{name:"EXTENDED",desc:"3 linked objectives \xB7 stronger security",extra:2}},VM={intel:{quick:[["retrieve"],["hack"]],standard:[["keycard","hack"],["search","hack"]],extended:[["sab:security","keycard","hack"],["sab:power","search","hack"]]},capture:{quick:[["capture"]],standard:[["sab:comms","capture"],["hack","capture"]],extended:[["sab:comms","hack","capture"],["sab:power","keycard","capture"]]},sabotage:{quick:[["sab:comms"],["sab:security"],["sab:power"],["sab:charge"]],standard:[["sab:comms","sab:charge"],["sab:security","sab:power"],["sab:power","sab:charge"],["sab:comms","sab:security"]],extended:[["sab:comms","sab:security","sab:charge"],["sab:power","sab:comms","sab:charge"]]},rescue:{quick:[["rescue"]],standard:[["keycard","rescue"],["sab:security","rescue"]],extended:[["sab:comms","keycard","rescue"],["sab:power","hack","rescue"]]},multi:{standard:[["sab:security","retrieve"],["sab:comms","hack"],["keycard","sab:charge"]],extended:[["sab:comms","retrieve","rescue"],["sab:security","hack","capture"],["keycard","hack","sab:charge"]]}},ao={retrieve:{title:"Recover the intelligence package",obj:"intel",hold:0,prompt:"Take intelligence package",done:"INTEL SECURED"},hack:{title:"Access the secure terminal",obj:"terminal",hold:3,prompt:"Hold to access secure terminal",done:"DATA EXTRACTED",indoor:1},keycard:{title:"Obtain the access credential",obj:"keycard",hold:0,prompt:"Take access credential",done:"CREDENTIAL ACQUIRED"},search:{title:"Find the classified file (3 possible locations)",obj:"case",hold:1.2,prompt:"Hold to search document case",done:"CLASSIFIED FILE FOUND",anchors:3},"sab:comms":{title:"Disable the communications relay",obj:"radio",hold:2.5,prompt:"Hold to disable communications",done:"COMMUNICATIONS DOWN \u2014 NO RADIO REPORTS, NO REINFORCEMENTS",indoor:1},"sab:security":{title:"Disable the security control system",obj:"secpanel",hold:2.5,prompt:"Hold to disable security control",done:"SECURITY CONTROL OFFLINE \u2014 THE ALARM CANNOT BE RAISED",indoor:1},"sab:power":{title:"Shut down the generator",obj:"generator",hold:2.5,prompt:"Hold to shut down generator",done:"POWER DOWN \u2014 THE SITE IS DARK",fixed:{forest:"generator",warehouse:"machine"}},"sab:charge":{title:"Plant a demolition charge",obj:"charge",hold:3,prompt:"Hold to plant charge",done:"CHARGE PLANTED \u2014 12 SECONDS, GET CLEAR"},capture:{title:"Capture the target alive",civ:"hvt",hold:1.5,prompt:"Hold to restrain target",done:"TARGET IN CUSTODY \u2014 ESCORT HIM TO EXTRACTION"},rescue:{title:"Free the hostage",civ:"hostage",hold:1.5,prompt:"Hold to free hostage",done:"HOSTAGE FREED \u2014 ESCORT THEM TO EXTRACTION"}};function WM(s){let e=s>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var qn=(s,e)=>Math.hypot(s[0]-e[0],s[s.length-1]-e[e.length-1]),Mm="sp21_history";function bm(){try{return JSON.parse(localStorage.getItem(Mm)||"{}")}catch{return{}}}function XM(s){try{localStorage.setItem(Mm,JSON.stringify(s))}catch{}}function Sm(s,e){let t=s[e.map]||(s[e.map]={zones:[],entry:null,exit:null,plan:null});t.zones=[e.primary.id,...t.zones.filter(i=>i!==e.primary.id)].slice(0,5),t.entry=e.entry.id,t.exit=e.exit.id,t.plan=e.plan.join(">"),XM(s)}function qM(s,e,t,i,n){let r=WM(t),a=y=>y[Math.floor(r()*y.length)],o=i[s.id]||{zones:[]},l=VM[e.type][e.length],c=l.filter(y=>y.join(">")!==o.plan);c.length&&(l=c);let h=a(l),u=s.entries.filter(y=>y.id!==o.entry||s.entries.length===1||n),d=a(u.length?u:s.entries),f=[d.x,d.z],m=new Set,x=[],p=s.anchors.find(y=>y.id===o.zones[0]),g=(y,E)=>{let L=ao[y];if(L.fixed){let N=s.anchors.find(B=>B.id===L.fixed[s.id]);if(N&&!m.has(N.id))return N}let R=null,D=-1e9;for(let N of s.anchors){if(m.has(N.id)||qn(N.at,f)<(n?14:24)||(L.indoor||L.civ)&&!N.indoor&&!n)continue;let B=o.zones.indexOf(N.id),P=r()*2;B>=0&&(P-=E?6-B:1.5),E&&p&&N!==p&&qn(N.at,p.at)<16&&(P-=2);for(let z of x)for(let H of z.anchors)qn(N.at,H.at)<12&&(P-=1.5);P>D&&(D=P,R=N)}return R};for(let y=0;y<h.length;y++){let E=h[y],L=ao[E],R=L.anchors||1,D=[];for(let N=0;N<R;N++){let B=g(E,y===h.length-1&&N===0);if(!B)return null;m.add(B.id),D.push(B)}x.push({kind:E,...L,anchors:D,correct:Math.floor(r()*R),done:!1})}let _=x[x.length-1].anchors[0],M=null;if(x.some(y=>y.civ==="hvt")){let y=s.anchors.filter(E=>!m.has(E.id)&&qn(E.at,_.at)>14&&qn(E.at,_.at)<60);M=y.length?a(y):null}let v=s.exits.filter(y=>qn(y.pos,_.at)>18&&qn(y.pos,f)>12);v.length||(v=s.exits);let b=v.filter(y=>y.id!==o.exit),S=a(b.length?b:v);return{map:s.id,type:e.type,length:e.length,seed:t,plan:h,entry:d,stages:x,primary:_,fallback:M,exit:S}}function rd(s,e){let t=s.nav,i=[[e.entry.x,e.entry.z]];for(let n of e.stages)for(let r of n.anchors){let a=t.nearest(r.stand[0],r.stand[1]);if(!a||Math.hypot(a.x-r.stand[0],a.z-r.stand[1])>1.3||Math.hypot(a.x-r.at[0],a.z-r.at[2])>2.3||Math.abs(a.y-(r.at[1]>.5&&!r.indoor?0:a.y))>2)return`anchor ${r.id} not standable`;i.push([a.x,a.z])}if(e.fallback&&i.splice(i.length,0,e.fallback.stand),i.push([e.exit.pos[0],e.exit.pos[2]]),t.blocked(e.entry.x,e.entry.z))return"entry blocked";for(let n=0;n<i.length-1;n++)if(!t.path(i[n][0],i[n][1],i[n+1][0],i[n+1][1]))return`no route between waypoint ${n} and ${n+1}`;return null}function Tm(s,e,t={}){let i=e.seed!=null?e.seed>>>0:Math.random()*4294967296>>>0;for(let a=0;a<28;a++){let o=qM(s,e,i+a*7919>>>0,t,a>14);if(o&&!rd(s,o))return o}let n=e.type==="capture"?"capture":e.type==="rescue"?"rescue":e.type==="sabotage"?"sab:comms":"retrieve",r=s.anchors[0];return{map:s.id,type:e.type,length:"quick",seed:i,plan:[n],entry:s.entries[0],stages:[{kind:n,...ao[n],anchors:[r],correct:0,done:!1}],primary:r,fallback:null,exit:s.exits[0],fallbackUsed:!0}}function Em(s){let e=s.stages.map((t,i)=>`${i+1}. ${t.title}${t.civ||t.kind==="search"?"":" \u2014 "+t.anchors[0].name}`);return e.push(`${s.stages.length+1}. Extract via the ${s.exit.name}`),e}function wm(s,e,t){let i=[e.entry.x,e.entry.z],n=[],r=(l,c=26)=>qn(l,i)>c,a=l=>[...l].sort(()=>Math.random()-.5);a(e.primary.posts).filter(l=>r(l)).slice(0,3).forEach(l=>n.push({p:l,duty:"objective",wait:[5,12]}));for(let l of e.stages)for(let c of l.anchors)c!==e.primary&&a(c.posts).filter(h=>r(h)).slice(0,l.kind==="search"?1:2).forEach((h,u)=>u<(e.stages.length>2?1:2)&&n.push({p:h,duty:"post",wait:[6,14]}));let o=l=>n.some(c=>qn(c.p,l)<3);for(let l of a(s.posts.entrance.map(c=>[c[0],c[1]]))){if(n.length>=t-3)break;r(l,30)&&!o(l)&&n.push({p:l,duty:"post",wait:[6,14]})}for(let l of a(s.routes)){if(n.length>=t)break;let c=l.p.filter(h=>r(h,30));c.length&&n.push({p:c[Math.floor(Math.random()*c.length)],duty:"patrol",route:l.p})}return n}var Oc=class{constructor(e,t){this.g=e,this.def=t,this.i=0,this.hold=0,this.items=[],this.civ=null,this.failed=null,this.timers=[],this.t=0,this.hasKey=!1}get stage(){return this.def.stages[this.i]||null}get complete(){return this.i>=this.def.stages.length}begin(){let e=this.g;this.def.stages.forEach((t,i)=>{if(t.civ){let n=t.anchors[0];this.civ=new Dc(e,t.civ,n.stand[0],n.stand[1],this.def.fallback),t.civRef=this.civ,e.civs.push(this.civ);return}t.anchors.forEach((n,r)=>this.items.push({stage:i,k:r,kind:t.obj,pos:n.at,mesh:e.makeInteractable(t.obj,n.at[0],n.at[1],n.at[2]),taken:!1}))}),this.refocus()}focus(){let e=this.stage;if(!e)return this.def.exit.pos;if(e.civ){let t=e.civRef;return t.state==="follow"||t.vis?[t.pos.x,t.pos.y,t.pos.z]:t.lastSeen?t.lastSeen:t.moved&&t.reachedHint?this.def.fallback.at:e.anchors[0].at}if(e.kind==="search"){let t=this.items.find(i=>i.stage===this.i&&!i.taken);return t?t.pos:e.anchors[0].at}return e.anchors[0].at}refocus(){let e=this.g.world,t=this.stage,i=t?t.anchors[0]:this.def.primary;e.objective.pos=i.at,e.posts.objective=i.posts}lines(){let e=this.def.stages.map((t,i)=>({t:t.title+(t.civ&&t.civRef.moved&&i===this.i&&t.civRef.state!=="follow"?" \u2014 he has moved":""),state:i<this.i?"done":i===this.i?"now":"todo"}));return e.push({t:`Extract \u2014 ${this.def.exit.name}`+(this.civ&&this.complete&&!this.civNear()?" (bring "+(this.civ.kind==="hvt"?"the target":"the hostage")+")":""),state:this.complete?"now":"locked"}),e}civNear(){let e=this.civ,t=this.def.exit.pos;return!e||!e.dead&&Math.hypot(e.pos.x-t[0],e.pos.z-t[2])<8}fail(e){this.failed||(this.failed=e)}finish(e){let t=this.g,i=t.sec,n=e.anchors[0],r=this.i===this.def.stages.length-1;e.done=!0,this.i++,this.hold=0,t.audio.objective(),t.toast(e.done2||ao[e.kind].done,4),e.civ&&!i.commsDown&&this.timers.push({t:4,fn:()=>{i.sealExits()&&t.say(t.enemies.find(a=>!a.dead)||{pos:t.player.pos},"Seal the exits! Nobody leaves!")}}),e.kind==="keycard"?this.hasKey=!0:e.kind==="sab:comms"?i.commsDown=!0:e.kind==="sab:security"?i.panelDown=!0:e.kind==="sab:power"?t.setPower(!1):e.kind==="sab:charge"&&this.timers.push({t:12,fn:()=>{t.gren.detonate({type:"frag",pos:new I(n.at[0],n.at[1]+.3,n.at[2]),owner:"charge"}),i.raise(2,"EXPLOSION ON SITE"),i.setReport(n.at[0],n.at[2],null,"body")}}),r&&e.kind!=="sab:charge"?i.panelDown?t.toast(ao[e.kind].done+" \u2014 NO ALARM: SECURITY CONTROL IS OFFLINE",4):(i.report={x:n.at[0],z:n.at[2],t:i.t,kind:"alarm"},i.lockdown(e.civ?"SITE LOCKDOWN \u2014 THEY KNOW":"SILENT ALARM \u2014 LOCKDOWN")):r||this.timers.push({t:Re(25,45),fn:()=>i.discover(n)}),this.refocus()}update(e,t){let i=this.g,n=i.player,r=this.stage;this.t+=e;for(let h=this.timers.length-1;h>=0;h--)if((this.timers[h].t-=e)<=0){let u=this.timers[h].fn;this.timers.splice(h,1),u()}if(this.civ&&this.civ.dead&&this.fail(this.civ.kind==="hvt"?"THE TARGET WAS KILLED":"THE HOSTAGE WAS KILLED"),!r)return"";let a=(h,u=2.5)=>Math.hypot(h[0]-n.pos.x,h[2]-n.pos.z)<u&&Math.abs(h[1]-n.pos.y)<2.2,o=null,l="";if(r.civ){let h=r.civRef;h.canSecure()&&a([h.pos.x,h.pos.y,h.pos.z],2.4)?o=h:!h.dead&&h.kind==="hvt"&&h.state!=="surrender"&&a([h.pos.x,h.pos.y,h.pos.z],9)&&h.seenByPlayer&&(l="Get close \u2014 he will give up")}else o=this.items.find(h=>h.stage===this.i&&!h.taken&&a(h.pos));if(!o)return this.hold=Math.max(0,this.hold-e*2),l;l=`<b>E</b>${r.prompt}`;let c=r.hold;if(c?t.k.KeyE:t.e){if(this.hold+=e,!c||this.hold>=c)if(this.hold=0,r.civ)o.secure(),this.finish(r);else if(r.kind==="search"&&o.k!==r.correct&&this.items.filter(h=>h.stage===this.i&&!h.taken).length>1)o.taken=!0,i.scene.remove(o.mesh),i.toast("NOTHING HERE \u2014 CHECK THE NEXT LOCATION",2.5),i.audio.click(.5);else{o.taken=!0,o.mesh.screen?o.mesh.screen.material.color.setHex(16758344):r.kind!=="sab:charge"&&i.scene.remove(o.mesh);for(let h of this.items)h.stage===this.i&&!h.taken&&r.kind==="search"&&(h.taken=!0,i.scene.remove(h.mesh));this.finish(r)}}else this.hold=Math.max(0,this.hold-e*2);return l}};var Uc=class{init(){if(this.ctx){this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e,i=t.createDynamicsCompressor();this.master=t.createGain(),this.master.gain.value=.75,this.master.connect(i),i.connect(t.destination);let n=t.sampleRate*2,r=this.nb=t.createBuffer(1,n,t.sampleRate),a=r.getChannelData(0);for(let f=0;f<n;f++)a[f]=Math.random()*2-1;this.amb=[];let o=this.tailIn=t.createGain(),l=t.createDelay(.5),c=t.createDelay(.5),h=t.createBiquadFilter(),u=this.tailFb=t.createGain(),d=t.createGain();l.delayTime.value=.083,c.delayTime.value=.137,h.type="lowpass",h.frequency.value=1700,u.gain.value=.32,d.gain.value=.55,o.connect(l),o.connect(c),l.connect(h),c.connect(h),h.connect(d),h.connect(u),u.connect(l),u.connect(c),d.connect(this.master),this._rev=0}send(e){if(this._rev>0&&this.tailIn){let t=this.ctx.createGain();t.gain.value=this._rev,e.connect(t),t.connect(this.tailIn)}}out(e){if(!e||!this.ctx.createStereoPanner)return this.master;let t=this.ctx.createStereoPanner();return t.pan.value=Math.max(-1,Math.min(1,e)),t.connect(this.master),t}noise(e,{f:t=2e3,f2:i,q:n=.7,type:r="lowpass",vol:a=1,pan:o=0,at:l=0}={}){let c=this.ctx;if(!c)return;let h=c.currentTime+l,u=c.createBufferSource(),d=c.createBiquadFilter(),f=c.createGain();u.buffer=this.nb,u.loop=!0,d.type=r,d.Q.value=n,d.frequency.setValueAtTime(t,h),i&&d.frequency.exponentialRampToValueAtTime(i,h+e),f.gain.setValueAtTime(a,h),f.gain.exponentialRampToValueAtTime(.001,h+e),u.connect(d),d.connect(f),f.connect(this.out(o)),this.send(f),u.start(h,Math.random()),u.stop(h+e+.02)}tone(e,t,{f2:i,type:n="sine",vol:r=.3,pan:a=0,at:o=0}={}){let l=this.ctx;if(!l)return;let c=l.currentTime+o,h=l.createOscillator(),u=l.createGain();h.type=n,h.frequency.setValueAtTime(e,c),i&&h.frequency.exponentialRampToValueAtTime(i,c+t),u.gain.setValueAtTime(r,c),u.gain.exponentialRampToValueAtTime(.001,c+t),h.connect(u),u.connect(this.out(a)),h.start(c),h.stop(c+t+.02)}shot(e,t){this._rev=t?.06:.3,this._shot(e,t),this._rev=0}_shot(e,t){if(t){this.noise(.09,{f:1700,f2:500,q:1.2,type:"bandpass",vol:e==="dmr"?.5:.36}),this.tone(170,.05,{f2:70,vol:.2,type:"triangle"}),this.click(.22);return}e==="ak"?(this.noise(.26,{f:2600,f2:300,vol:1}),this.tone(130,.2,{f2:38,vol:.9,type:"triangle"}),this.noise(.05,{f:5e3,type:"highpass",vol:.35})):e==="m4"?(this.noise(.17,{f:4200,f2:600,vol:.8}),this.tone(190,.12,{f2:60,vol:.55,type:"triangle"}),this.noise(.04,{f:6500,type:"highpass",vol:.4})):e==="sniper"?(this.noise(.55,{f:1800,f2:120,vol:1.3}),this.tone(80,.45,{f2:24,vol:1.2,type:"triangle"}),this.noise(.07,{f:4e3,type:"highpass",vol:.45}),this.noise(1.1,{f:420,f2:90,vol:.28,at:.1})):e==="dmr"?(this.noise(.4,{f:2200,f2:180,vol:1.1}),this.tone(95,.32,{f2:30,vol:1,type:"triangle"}),this.noise(.06,{f:4500,type:"highpass",vol:.4}),this.noise(.7,{f:500,f2:120,vol:.2,at:.08})):e==="shotgun"?(this.noise(.36,{f:1500,f2:160,vol:1.2}),this.tone(85,.3,{f2:28,vol:1.1,type:"triangle"})):e==="smg"?(this.noise(.1,{f:3800,f2:900,vol:.6}),this.tone(240,.07,{f2:100,vol:.4,type:"triangle"})):(this.noise(.11,{f:3400,f2:700,vol:.7}),this.tone(260,.09,{f2:90,vol:.5,type:"square"}))}enemyShot(e,t){this._rev=.4,this._enemyShot(e,t),this._rev=0}_enemyShot(e,t){let i=Math.max(.05,.75/(1+e*.07));this.noise(.22,{f:Math.max(500,2600-e*35),f2:250,vol:i,pan:t}),this.tone(120,.16,{f2:45,vol:i*.7,pan:t,type:"triangle"})}reload(e,t="rifle",i=.6){if(t==="shell"){this.noise(.05,{f:1500,type:"bandpass",q:3,vol:.4,at:e*i}),this.tone(520,.03,{vol:.08,type:"square",at:e*i});return}this.noise(.05,{f:t==="pistol"?2600:1700,type:"bandpass",q:4,vol:.4,at:e*i*.32}),this.tone(300,.04,{f2:150,vol:.12,at:e*i*.34}),this.noise(.06,{f:t==="pistol"?2200:1300,type:"bandpass",q:3,vol:.55,at:e*i}),this.tone(190,.05,{f2:90,vol:.2,type:"triangle",at:e*i});let n=e*Math.min(.97,i+(t==="pistol"?.28:.3));this.click(.6,n),this.noise(.07,{f:3e3,f2:1200,type:"bandpass",q:2,vol:.4,at:n+.07})}bolt(){this.click(.5,.28),this.noise(.08,{f:2400,f2:900,type:"bandpass",q:2,vol:.35,at:.36}),this.noise(.08,{f:900,f2:2600,type:"bandpass",q:2,vol:.35,at:.78}),this.click(.6,.92)}pump(e=0){this.noise(.07,{f:1100,f2:500,type:"bandpass",q:2,vol:.5,at:e}),this.noise(.07,{f:600,f2:1300,type:"bandpass",q:2,vol:.5,at:e+.16})}thud(e=.5,t="concrete"){t==="metal"?(this.tone(2400+Math.random()*900,.06,{f2:1500,vol:.06*e,type:"triangle"}),this.noise(.03,{f:4200,type:"bandpass",q:3,vol:.12*e})):t==="wood"?this.noise(.06,{f:700,f2:260,type:"bandpass",q:2.5,vol:.2*e}):t==="dirt"?this.noise(.07,{f:380,f2:140,vol:.2*e}):this.noise(.05,{f:900,f2:300,type:"bandpass",q:1.5,vol:.16*e})}swish(){this.noise(.16,{f:900,f2:3200,type:"bandpass",q:2,vol:.3})}stab(e){this.noise(.12,{f:500,f2:150,vol:.6}),this.tone(e?110:180,.12,{f2:60,vol:.4})}medkit(){for(let e=0;e<5;e++)this.noise(.12,{f:1200+e*200,type:"bandpass",q:2,vol:.14,at:e*.42})}stim(){this.noise(.25,{f:5e3,f2:1500,type:"highpass",vol:.2}),this.tone(440,.3,{f2:880,vol:.12,type:"sine",at:.1})}bounce(e=.3){this.tone(900,.04,{f2:500,vol:e,type:"square"}),this.noise(.03,{f:2500,type:"bandpass",q:4,vol:e})}explosion(e){this._rev=.6,this._explosion(e),this._rev=0}_explosion(e){let t=Math.max(.15,1.4/(1+e*.05));this.noise(.9,{f:900,f2:60,vol:t}),this.tone(70,.7,{f2:22,vol:t,type:"triangle"}),this.noise(1.6,{f:300,f2:60,vol:t*.35,at:.15})}flashbang(e){this.noise(.25,{f:6e3,type:"highpass",vol:.9}),this.tone(140,.25,{f2:50,vol:.7}),e>.3&&this.tone(3400,1.2+e*1.6,{vol:.09*Math.min(1.5,e),type:"sine",at:.05})}radio(){this.noise(.07,{f:2400,type:"bandpass",q:3,vol:.22}),this.tone(1250,.06,{vol:.07,type:"square",at:.07}),this.noise(.05,{f:2400,type:"bandpass",q:3,vol:.18,at:.5})}alert(e){(e>=3?[660,880,660,880]:e===2?[440,587]:[392]).forEach((i,n)=>this.tone(i,.22,{vol:.16,type:"sawtooth",at:n*.2}))}siren(e){let t=this.ctx;if(!t)return;if(this.sir){try{this.sir[0].stop(),this.sir[1].stop()}catch{}this.sir=null}if(!e)return;let i=t.createOscillator(),n=t.createOscillator(),r=t.createGain(),a=t.createGain();i.type="sawtooth",i.frequency.value=620,n.frequency.value=.45,r.gain.value=140,a.gain.value=.035,n.connect(r),r.connect(i.frequency),i.connect(a),a.connect(this.master),i.start(),n.start(),a.gain.setValueAtTime(.035,t.currentTime+14),a.gain.linearRampToValueAtTime(.012,t.currentTime+20),this.sir=[i,n]}click(e=.5,t=0){this.noise(.035,{f:3200,type:"bandpass",q:5,vol:e,at:t}),this.tone(900,.02,{vol:e*.2,type:"square",at:t})}step(e=.2){let t=.8+Math.random()*.4;this.noise(.07+Math.random()*.04,{f:(420+Math.random()*330)*t,f2:120+Math.random()*60,vol:e*t}),Math.random()<.4&&this.noise(.03,{f:2200,type:"bandpass",q:2,vol:e*.25,at:.02})}land(){this.noise(.16,{f:420,f2:90,vol:.45})}hit(e,t){this.tone(e?520:1500,e?.16:.05,{f2:e?240:1100,vol:.22,type:"square"}),t&&this.tone(2600,.07,{f2:2100,vol:.13,type:"triangle",at:.02})}hurt(){this.noise(.18,{f:700,f2:120,vol:.7}),this.tone(90,.2,{f2:50,vol:.5})}whiz(e){this.noise(.09,{f:2500,f2:6e3,type:"bandpass",q:6,vol:.18,pan:e})}pickup(){this.tone(660,.08,{vol:.2,type:"triangle"}),this.tone(990,.12,{vol:.2,type:"triangle",at:.08})}beep(e){this.tone(e?700:1100,.07,{f2:e?1300:600,vol:.14,type:"square"})}objective(){[523,659,784].forEach((e,t)=>this.tone(e,.18,{vol:.2,type:"triangle",at:t*.11}))}win(){[392,523,659,784,1047].forEach((e,t)=>this.tone(e,.5,{vol:.22,type:"triangle",at:t*.16}))}lose(){[330,262,196,131].forEach((e,t)=>this.tone(e,.6,{vol:.25,type:"sawtooth",at:t*.22}))}ambient(e){let t=this.ctx;if(!t)return;this.tailFb&&(this.tailFb.gain.value=e==="warehouse"?.5:.26),this.stopAmbient();let i=t.createGain();i.gain.value=0,i.gain.linearRampToValueAtTime(1,t.currentTime+2),i.connect(this.master);let n=t.createBufferSource(),r=t.createBiquadFilter(),a=t.createGain(),o=t.createOscillator(),l=t.createGain();if(n.buffer=this.nb,n.loop=!0,r.type="lowpass",r.frequency.value=e==="forest"?520:180,a.gain.value=e==="forest"?.16:.22,o.frequency.value=.11,l.gain.value=e==="forest"?.09:.03,o.connect(l),l.connect(a.gain),n.connect(r),r.connect(a),a.connect(i),n.start(),o.start(),this.amb=[n,o],e==="warehouse")for(let[c,h]of[[50,.05],[100,.02]]){let u=t.createOscillator(),d=t.createGain();u.frequency.value=c,d.gain.value=h,u.connect(d),d.connect(i),u.start(),this.amb.push(u)}this.ambGain=i,this.ambTimer=setInterval(()=>{if(t.state!=="running")return;let c=Math.random()*1.6-.8;if(e==="forest")if(Math.random()<.7)for(let h=0;h<3;h++)this.tone(4100+Math.random()*300,.04,{vol:.018,pan:c,at:h*.07});else this.tone(380,.5,{f2:300,vol:.02,pan:c});else Math.random()<.5&&this.tone(1400+Math.random()*900,.5,{vol:.02,pan:c,type:"triangle"})},1700)}stopAmbient(){clearInterval(this.ambTimer);for(let e of this.amb||[])try{e.stop()}catch{}this.ambGain&&this.ambGain.disconnect(),this.amb=[],this.ambGain=null,this.siren(!1)}};var _e=s=>document.getElementById(s),$n=location.search.includes("test"),ys=_e("c"),Vc=!1;try{Vc=!!JSON.parse(localStorage.getItem("sp2_settings")||"{}").lowlat}catch{}var YM=Vc?ys.getContext("webgl2",{antialias:!0,alpha:!1,desynchronized:!0,powerPreference:"high-performance",stencil:!0,depth:!0}):null,Ze=new oc({canvas:ys,context:YM||void 0,antialias:!0,powerPreference:"high-performance"});Ze.shadowMap.type=Fs;Ze.autoClear=!1;Ze.toneMapping=ka;Ze.toneMappingExposure=1.5;var ld=new kr(Ze).fromScene(new hc,.04).texture,T={state:"load",sel:{map:"forest",ai:"tactical",quality:"med",mission:"intel",length:"quick",seed:null},hist:bm(),civs:[],sens:1,fov:75,loadout:lm(),inp:{k:{},mx:0,my:0,lmb:!1,rmb:!1,lmbPressed:!1,jump:!1,e:!1},camera:new Ct(75,1,.08,600),wcam:new Ct(50,1,.01,5),audio:new Uc,enemies:[],stats:{},nv:!1,frame:0,v1:new I,v2:new I,v3:new I,pbox:[{bullet:!0}]};T.camera.rotation.order="YXZ";window.__SP=T;window.__rayBoxes=xi;window.__SPrenderer=Ze;T.debugRender=()=>{let s=performance.now(),e=Ze.getContext();return Ze.info.autoReset=!1,Ze.info.reset(),Ze.setViewport(0,0,innerWidth,innerHeight),Ze.clear(),Ze.render(T.scene,T.camera),Ze.clearDepth(),Ze.render(T.wscene,T.wcam),e.readPixels(0,0,1,1,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array(4)),{ms:Math.round(performance.now()-s),calls:Ze.info.render.calls,tris:Ze.info.render.triangles}};try{let s=JSON.parse(localStorage.getItem("sp2_settings")||"{}");s.sens&&(T.sens=s.sens),s.fov&&(T.fov=s.fov),s.quality&&(T.sel.quality=s.quality),s.vol!=null&&(T.vol=s.vol),s.adaptive!=null&&(T.adaptive=s.adaptive),s.overlay!=null&&(T.overlay=s.overlay),s.raw!=null&&(T.rawInput=s.raw),s.cam!=null&&(T.camMotion=s.cam),s.wsway!=null&&(T.weaponSway=s.wsway),s.target&&(T.fpsTarget=s.target),T.lowLatency=!!s.lowlat}catch{}T.adaptive==null&&(T.adaptive=!0);T.camMotion==null&&(T.camMotion=.5);T.weaponSway==null&&(T.weaponSway=1);T.fpsTarget!=="refresh"&&(T.fpsTarget="60");T.rawInput==null&&(T.rawInput=!0);T.overlay=!!T.overlay;var co=()=>{try{localStorage.setItem("sp2_settings",JSON.stringify({sens:T.sens,fov:T.fov,quality:T.sel.quality,vol:T.vol,adaptive:T.adaptive,overlay:T.overlay,raw:T.rawInput,cam:T.camMotion,wsway:T.weaponSway,target:T.fpsTarget,lowlat:!!T.lowLatency}))}catch{}},Rm=s=>(e,t,i,n,r,a)=>{let o=n-e,l=r-t,c=a-i,h=Math.hypot(o,l,c);return h<.01||!xi(T.world.colliders,e,t,i,o/h,l/h,c/h,h,s)};T.los=Rm("sight");T.losB=Rm("bullet");T.sound=(s,e,t,i)=>{for(let n of T.enemies){if(n===i||n.dead)continue;let r=Math.hypot(n.pos.x-s.x,n.pos.z-s.z);r<e*n.pr.hear&&n.hear(s,t,r)}if(t==="shot"||t==="explosion")for(let n of T.civs)Math.hypot(n.pos.x-s.x,n.pos.z-s.z)<e*.7&&n.alarm()};T.shout=s=>{for(let e of T.enemies)e===s||e.dead||Math.hypot(e.pos.x-s.pos.x,e.pos.z-s.pos.z)<s.pr.share&&e.onAlert(s.lkp.x+Re(-2.5,2.5),s.lkp.z+Re(-2.5,2.5))};T.say=(s,e)=>{Math.hypot(s.pos.x-T.player.pos.x,s.pos.z-T.player.pos.z)>45||(T.audio.radio(),_e("subt").innerHTML=`<b>RADIO</b>${e}`,_e("subt").style.opacity=1,Hc=2.8)};T.playerBox=()=>{let s=T.player,e=s.pos,t=T.pbox[0],i=s.leanX*.6,n=s.leanZ*.6;return t.x0=e.x+i-.3,t.x1=e.x+i+.3,t.z0=e.z+n-.3,t.z1=e.z+n+.3,t.y0=e.y,t.y1=e.y+s.height,T.pbox};var fd=(s,e)=>{let t=T.player,i=s-t.pos.x,n=e-t.pos.z,r=Math.hypot(i,n)||1;return(i*Math.cos(t.yaw)-n*Math.sin(t.yaw))/r};T.enemyShotSound=s=>T.audio.enemyShot(s.pd,fd(s.pos.x,s.pos.z));T.enemyStep=s=>T.audio.noise(.08,{f:420,f2:140,vol:(s.moved>3?.22:.1)*(1-s.pd/16),pan:fd(s.pos.x,s.pos.z)});T.nearMiss=(s,e,t,i,n,r)=>{let a=T.camera.position,o=(a.x-s)*i+(a.y-e)*n+(a.z-t)*r;o>0&&Math.hypot(s+i*o-a.x,e+n*o-a.y,t+r*o-a.z)<1.4&&T.audio.whiz(fd(s,t))};var Cm=vm(T);T.trace=Cm.trace;T.playerShot=(s,e,t,i,n)=>{let r=Cm.playerRound(s,e,i),a=T.v1.set(r.from.x+r.dir.x*r.d,r.from.y+r.dir.y*r.d,r.from.z+r.dir.z*r.d);if((n||Math.random()<.4)&&T.fx.tracer(i,a),T.range&&T.range.onShot(r,a,t,n),r.kind==="enemy"){let o=r.e,l=t.dmg*(r.part==="head"?t.head||2.5:r.mult);t.falloff&&r.d>t.falloff[0]&&(l*=1-(1-t.falloff[1])*Math.min(1,(r.d-t.falloff[0])/(t.falloff[0]*1.5))),o.damage(l,T.player.pos,r.part),T.fx.blood(a,T.v2.copy(e).negate());for(let c of T.enemies)!c.dead&&c!==o&&!c.seeing&&(c.supp=Math.min(1.5,c.supp+(Math.hypot(c.pos.x-a.x,c.pos.z-a.z)<3?.35:0)));n&&T.stats.hits++,r.part==="head"&&T.stats.heads++,ud(o.dead,r.part==="head"),T.audio.hit(o.dead,r.part==="head")}else if(r.kind==="civ")r.e.damage(t.dmg*r.mult),T.fx.blood(a,T.v2.copy(e).negate()),ud(!1);else if(r.kind==="world"){T.fx.impact(a,T.v2.set(r.wh.nx,r.wh.ny,r.wh.nz),r.wh.c.mat),n&&T.audio.thud(Math.min(1,8/(4+r.d)),r.wh.c.mat);for(let o of T.enemies){if(o.dead)continue;Math.hypot(o.pos.x-a.x,o.pos.z-a.z)<2.5&&(o.supp=Math.min(1.5,o.supp+.35),n&&!o.combat()&&o.hear(T.player.pos,"shot",Math.hypot(o.pos.x-s.x,o.pos.z-s.z)))}}};T.melee=()=>{let s=T.player,e=T.camera.position,t=s.fwd,i=yt.knife,n=null,r=i.range;for(let l of T.enemies){if(l.dead)continue;let c=l.pos.x-e.x,h=l.pos.y+1.1-e.y,u=l.pos.z-e.z,d=Math.hypot(c,h,u);d>r||(c*t.x+h*t.y+u*t.z)/d<.72||!T.losB(e.x,e.y,e.z,l.pos.x,l.pos.y+1.1,l.pos.z)||(n=l,r=d)}if(!n){let l=xi(T.world.colliders,e.x,e.y,e.z,t.x,t.y,t.z,1.5,"bullet");l&&(T.fx.impact(T.v1.copy(t).multiplyScalar(l.d).add(e),T.v2.set(l.nx,l.ny,l.nz)),T.audio.click(.4));return}let o=Math.cos(n.yaw)*(s.pos.z-n.pos.z)+Math.sin(n.yaw)*(s.pos.x-n.pos.x)>.2*r||!n.seeing&&!n.combat()||n.stun>0;n.damage(o?999:i.dmg,s.pos,"torso"),T.fx.blood(T.v1.set(n.pos.x,n.pos.y+1.2,n.pos.z),T.v2.copy(t).negate()),T.audio.stab(n.dead),ud(n.dead),n.dead&&T.stats.knife++};T.spawnGrenade=(s,e,t,i)=>T.gren.spawn(s,e,t,i);T.onKill=()=>{T.stats.kills++};T.spawnEnemy=(...s)=>Bc(...s);T.onHurt=(s,e)=>{T.audio.hurt(),$r=Math.min(1,$r+.3+e*.012),jM(s.x,s.z,"#ff4a3a",1.2)};T.onSecurity=(s,e)=>{let t=_e("sec");t.className="hp l"+s,t.textContent="SECURITY \xB7 "+sd[s],s>0&&T.audio.alert(s),s>=2&&e&&$s(e,3.5),s===3&&(T.audio.siren(!0),T.panelLight&&(T.panelLight.intensity=30))};T.reinforce=()=>{let s=T.world,e=T.player,t=T.sel.ai==="recruit"?2:3,i=[...s.reinforce].sort((r,a)=>Math.hypot(a.x-e.pos.x,a.z-e.pos.z)-Math.hypot(r.x-e.pos.x,r.z-e.pos.z))[0];if(Math.hypot(i.x-e.pos.x,i.z-e.pos.z)<30){T.sec.reinAt=T.sec.t+8;return}let n=T.sec.report||{x:s.objective.pos[0],z:s.objective.pos[2]};for(let r=0;r<t;r++)T.spawnQ.push(()=>{let a=Bc(i.x+r*1.6,i.z+r%2*1.5,[[n.x,n.z]],{duty:"response"});a.alerted=!0,a.setOrder(r===0?{type:"investigate",x:n.x,z:n.z}:{type:"defend",x:s.posts.objective[r%s.posts.objective.length][0],z:s.posts.objective[r%s.posts.objective.length][1],tx:n.x,tz:n.z})});$s(`RESPONSE TEAM ENTERING FROM THE ${i.n.toUpperCase()}`,4.5)};function Im(){if(T.world){for(let s of T.world.meshes||[])s.userData.shared?s.dispose():(s.geometry.dispose(),s.material.dispose());T.audio.stopAmbient(),T.world=null,T.scene=null}}function Pm(s,e,t,i){let n=new Mt,r=(o,l,c,h,u,d,f,m)=>{let x=new ke(new wt(l,c,h),m?new st({color:o}):new ri({color:o}));return x.position.set(u,d,f),n.add(x),x},a=t>.5?.42:1;if(s==="intel")r(1842978,.5,.14,.36,0,.07,0),r(16758344,.42,.02,.05,0,.15,0,!0),r(16758344,.06,.06,.02,0,.07,.19,!0);else if(s==="terminal"){a===1&&r(2764081,.7,.8,.5,0,.4,0);let o=a===1?.8:0;r(1382170,.08,.5,.8,0,o+.3,0),n.screen=r(3211128,.02,.4,.68,.05,o+.31,0,!0),r(1842978,.3,.03,.6,.3,o+.02,0)}else if(s==="keycard"){a===1&&r(2764081,.4,.9,.4,0,.45,0);let o=a===1?.9:0;r(15263968,.09,.012,.14,0,o+.01,0),r(4249855,.07,.014,.03,0,o+.012,.03,!0)}else if(s==="case"){a===1&&r(3813414,.7,.5,.5,0,.25,0);let o=a===1?.5:0;r(2892057,.46,.12,.32,0,o+.06,0),r(16758344,.05,.03,.02,0,o+.07,.17,!0)}else s==="radio"?(r(3159610,.7*(a<1?.8:1),1.15*a,.4,0,.575*a,0),r(1711134,.02,1.1,.02,.25,1.15*a+.55,0),n.screen=r(3735418,.3,.1,.02,0,.9*a,.21,!0),r(16756784,.05,.05,.02,-.22,.6*a,.21,!0)):s==="secpanel"?(r(4870232,.75,1.35*a,.3,0,.675*a,0),n.screen=r(4235519,.5,.32*a+.05,.02,0,.95*a,.16,!0),r(12593696,.08,.08,.03,.26,.45*a,.16,!0)):s==="generator"?(r(6969890,1.1,.85*a,.6,0,.425*a,0),r(1842463,.9,.2*a,.5,0,.95*a,0),n.screen=r(3735418,.1,.1,.02,.38,.6*a,.31,!0)):s==="charge"?(r(8022558,.9,1*a,.9,0,.5*a,0),r(1118740,.92,.12*a,.92,0,.5*a,0),n.screen=r(4202528,.22,.12,.03,0,.75*a,.46,!0)):s==="med"?(r(14212312,.5,.3,.34,0,.15,0),r(13908528,.2,.06,.02,0,.17,.18,!0),r(13908528,.06,.2,.02,0,.17,.18,!0)):(r(4016688,.6,.32,.36,0,.16,0),r(15249482,.6,.05,.37,0,.2,0,!0));return n.position.set(e,t,i),T.scene.add(n),n}T.makeInteractable=Pm;T.missionCheck=()=>rd(T.world,T.mission.def);T.toast=(s,e)=>$s(s,e);T.setPower=s=>{let e=T.world,t=s?1:.12;e.powerOff=!s;for(let i of e.lights)i.userData.base==null&&(i.userData.base=i.intensity),i.intensity=i.userData.base*t;for(let i of e.dyn)i.base=i.l.userData.base*t;e.env.detect=e.env.detect0*(s?1:.6),e.env.viewRange=e.env.viewRange0*(s?1:.78)};var zc=[];function Bc(s,e,t,i){zc.length||(zc=["guard","guard","aggressor","cautious","guard","aggressor","cautious","guard"].sort(()=>Math.random()-.5));let n=T.world.nav.nearest(s,e)||{x:s,z:e},r=new Rc(T,n.x,n.z,t,zc.pop(),qr[T.sel.ai],i);return T.enemies.push(r),r}function pd(){let s=T.sel.quality;return s==="low"?1:Math.min(window.devicePixelRatio||1,s==="high"?2:1.25)}function md(){T.pacing.scale=1,Ze.setPixelRatio(pd()),Ze.shadowMap.enabled=T.sel.quality!=="low",Wc()}var Yn=Ze.getContext(),oo=Yn.getExtension("EXT_disjoint_timer_query_webgl2");T.pacing={ring:new Float32Array(240),ri:0,n:0,ema:16.7,worst:0,scale:1,min:.6,changes:0,active:!$n,over:0,ok:0,ceilT:0,ceil:1,refreshMs:16.7,med:16.7,stutters:0,log:[],cpuMs:0,simMs:0,renderMs:0,gpuMs:-1,inputAge:0,q:[],qFree:[],gpuBad:0,gpuOff:!1,targetMs(){return T.fpsTarget==="refresh"?Math.min(1e3/60,Math.max(1e3/240,this.refreshMs)):1e3/60},stats(){let s=Math.min(this.n,this.ring.length),e=Array.from(this.ring.subarray(0,s)).sort((i,n)=>i-n),t=i=>e[Math.min(s-1,Math.floor(i*s))]||0;return{avg:e.reduce((i,n)=>i+n,0)/(s||1),p50:t(.5),p99:t(.99),max:e[s-1]||0,low1:1e3/(t(.99)||1)}},feed(s){if(s>250||s<=0)return!1;if(this.ema+=(s-this.ema)*.08,this.ring[this.ri]=s,this.ri=(this.ri+1)%this.ring.length,this.n++,this.n%30===0){let a=Math.min(this.n,this.ring.length),o=Array.from(this.ring.subarray(0,a)).sort((c,h)=>c-h),l=o[Math.floor(a*.1)];this.refreshMs=l<this.refreshMs?l:this.refreshMs+(l-this.refreshMs)*.02,this.med=o[a>>1],this.worst=o[a-1]}if(s>Math.max(this.med*2,this.med+8)&&this.n>60&&(this.stutters++,this.log.unshift({t:performance.now(),ms:s,sim:T.prof.total,render:this.renderMs,gpu:this.gpuMs}),this.log.length>6&&this.log.pop()),!T.adaptive)return this.scale!==1?this.setScale(1):!1;if(!this.active||T.state!=="playing")return this.over=this.ok=0,!1;let e=this.targetMs(),t=this.gpuMs>=0,i=this.ema>e*1.2&&(!t||this.gpuMs>e*.7),n=t?this.gpuMs<e*.55&&this.ema<e*1.2:this.ema<e*1.06,r=s/1e3;return i?(this.over+=r,this.ok=0):n?(this.ok+=r,this.over=0):(this.over=Math.max(0,this.over-r),this.ok=0),this.ceilT>0&&(this.ceilT-=r,this.ceilT<=0&&(this.ceil=1)),this.over>1&&this.scale>this.min?(this.recent&&performance.now()-this.recent<6e3&&(this.ceil=this.scale-.1,this.ceilT=20),this.setScale(Math.max(this.min,this.scale-.1))):this.ok>4&&this.scale<Math.min(1,this.ceil)?(this.recent=performance.now(),this.setScale(Math.min(1,this.ceil,this.scale+.1))):!1},setScale(s){return s=Math.round(s*10)/10,s===this.scale?!1:(this.scale=s,this.changes++,this.over=this.ok=0,Ze.setPixelRatio(pd()*s),Wc(),!0)},gpuBegin(){if(!oo||this.gpuOff)return null;let s=this.qFree.pop()||Yn.createQuery();return Yn.beginQuery(oo.TIME_ELAPSED_EXT,s),s},gpuEnd(s){s&&(Yn.endQuery(oo.TIME_ELAPSED_EXT),this.q.push(s))},gpuPoll(){if(!oo||this.gpuOff)return;let s=Yn.getParameter(oo.GPU_DISJOINT_EXT);for(;this.q.length&&Yn.getQueryParameter(this.q[0],Yn.QUERY_RESULT_AVAILABLE);){let e=this.q.shift(),t=Yn.getQueryParameter(e,Yn.QUERY_RESULT)/1e6;if(this.qFree.push(e),!s){if(!(t>=0&&t<250)){++this.gpuBad>20&&(this.gpuOff=!0,this.gpuMs=-1);continue}this.gpuMs=this.gpuMs<0?t:this.gpuMs+(t-this.gpuMs)*.1}}this.q.length>8&&this.q.splice(0,this.q.length-8).forEach(e=>this.qFree.push(e))}};function KM(){Im(),md(),km();let s=T.scene=new Pn,e=T.wscene=new Pn;s.environment=ld,s.environmentIntensity=.12,e.environment=ld,e.environmentIntensity=.2,T.wlight=new ls(11188432,2106408,.4),e.add(T.wlight);let t=new Zi(16773856,.75);t.position.set(-1,2,1.5),e.add(t);let i=T.sel.mode==="range",n=T.world=am(i?"range":T.sel.map,s);if(T.sel.quality!=="med"&&n.moon.shadow.mapSize.setScalar(T.sel.quality==="high"?4096:1024),T.sel.quality==="low")for(let d of n.meshes)d.userData.detail&&(d.visible=!1);n.lodDist={low:22,med:34,high:52}[T.sel.quality],T.nvLight=new Fa(16777215,0),s.add(T.nvLight),T.fx=new Pc(s),T.gren=new Ic(T),n.env.detect0=n.env.detect,n.env.viewRange0=n.env.viewRange;let r=T.sel.layout==="classic",a=T.sel.length,o=i?{map:"range",type:"range",length:"quick",seed:0,plan:[],entry:n.entries[0],exit:{id:"-",name:"-",pos:[0,0,9999]},primary:{id:"range",name:"range",at:[0,0,-50],stand:[0,-50],posts:[]},fallback:null,stages:[]}:r?{map:n.id,type:"intel",length:"quick",seed:0,plan:[n.id==="forest"?"retrieve":"hack"],entry:n.entries[0],exit:n.exits[0],primary:n.anchors[0],fallback:null,stages:[n.id==="forest"?{kind:"retrieve",title:"Recover the intelligence package",obj:"intel",hold:0,prompt:"Take intelligence package",anchors:[n.anchors[0]],correct:0}:{kind:"hack",title:"Access the secure terminal",obj:"terminal",hold:3,prompt:"Hold to access secure terminal",anchors:[n.anchors[0]],correct:0}]}:Tm(n,{type:T.sel.mission,length:_i[T.sel.mission].lengths.includes(a)?a:_i[T.sel.mission].lengths[0],seed:T.sel.seed},T.hist);!r&&!i&&Sm(T.hist,o),T.civs=[],T.player=new Mc(T,o.entry,T.loadout),T.enemies=[],zc=[],T.spawnQ=[],T.sec=new Cc(T,qr[T.sel.ai]);let l=n.nav;for(let d of i?[]:wm(n,o,n.guards+ps[o.length].extra)){if(d.route){let p=Bc(d.p[0],d.p[1],d.route,{duty:"patrol"});p.wi=Math.floor(Math.random()*d.route.length);continue}let f=Re(6.28),m=l.snap(d.p[0]+Math.cos(f)*2.5,d.p[1]+Math.sin(f)*2.5),x=l.nearest(d.p[0],d.p[1]);Bc(d.p[0],d.p[1],m&&x&&l.line(x,m)?[[d.p[0],d.p[1]],[m.x,m.z]]:[[d.p[0],d.p[1]]],{duty:d.duty,home:d.p,wait:d.wait})}T.mission=new Oc(T,o),T.mission.begin(),T.range=i?new Lc(T):null,T.pickups=n.pickups.map(([d,f,m])=>({kind:d,x:f,z:m,mesh:Pm(d,f,l.height(f,m),m)}));let c=o.exit.pos;T.exMesh=new ke(new xt(.06,.06,.5,6),new st({color:4259696})),T.exMesh.position.set(c[0],.25,c[2]),s.add(T.exMesh),T.exLight=new di(4259696,6,16,1.5),T.exLight.position.set(c[0],1.2,c[2]),s.add(T.exLight),n.panel&&(T.panelLight=new di(16722458,0,22,1.4),T.panelLight.position.set(n.panel.x,2.2,n.panel.z),s.add(T.panelLight)),T.laserDot=new ke(new Un(1,8,6),new st({color:16719904,fog:!1,toneMapped:!1})),s.add(T.laserDot);let h=new wt(.004,.004,1);if(h.translate(0,0,.5),T.laserBeam=new ke(h,new st({color:16719904,transparent:!0,opacity:.35,blending:Ji,depthWrite:!1,fog:!1})),s.add(T.laserBeam),T.laserDot.visible=T.laserBeam.visible=!1,T.time=0,T.stats={shots:0,hits:0,kills:0,heads:0,knife:0,maxSec:0},$r=0,Kn.forEach(d=>d.t=0),Hc=0,_e("subt").style.opacity=0,xd(!1),T.onSecurity(0,""),T.audio.ambient(n.env.amb),_e("hud").classList.add("on"),Ai={},i){vn(null),T.state="playing",$s("TRAINING RANGE \u2014 WEAPONS FREE",3),$n||Zr();return}let u=_i[o.type];_e("brt").textContent=u.name,_e("brs").textContent=`${n.name} \xB7 ${ps[o.length].name} \xB7 ENEMY ${qr[T.sel.ai].label}`,_e("brl").innerHTML=`<div><i>INSERTION</i>${o.entry.name}</div>`+Em(o).map(d=>`<div>${d}</div>`).join("")+(o.fallbackUsed?"<div><i>NOTE</i>fallback layout used</div>":""),$n||r?(vn(null),T.state="playing",$s(u.name+" \u2014 "+o.stages[0].title.toUpperCase(),4),$n||Zr()):(T.state="brief",vn("briefov"),T.player.update(.016))}function $M(){T.state==="brief"&&(vn(null),T.state="playing",Gc=performance.now(),$s(_i[T.mission.def.type].name+" \u2014 "+T.mission.def.stages[0].title.toUpperCase(),4),Zr())}function Zr(){let s=()=>{_e("phint").textContent="CLICK RESUME AGAIN TO RE-CAPTURE THE MOUSE"},e=()=>{try{let t=ys.requestPointerLock();t&&t.catch&&t.catch(s)}catch{s()}};if(!T.rawInput)return e();try{let t=ys.requestPointerLock({unadjustedMovement:!0});t&&t.catch&&t.catch(e)}catch{e()}}T.lock=Zr;var Lm=new on,ZM=new Pe,Am=new Xt(new I,1.3);T.animEvery=s=>{let e=T.camera.position,t=Math.hypot(s.x-e.x,s.z-e.z);return t<22?1:(Am.center.set(s.x,s.y+.9,s.z),Lm.intersectsSphere(Am)?t<45?1:t<75?2:3:t<40?2:4)};function vn(s){for(let e of["menu","pause","end","load","briefov"])_e(e).classList.toggle("on",e===s)}function Nm(){T.state==="playing"&&(T.state="paused",_e("phint").textContent="MISSION ON HOLD",vn("pause"),T.inp.k={},T.inp.lmb=T.inp.rmb=!1)}function Dm(){T.state==="paused"&&($n?(T.state="playing",vn(null)):Zr())}function gd(){T.state="menu",Im(),_e("hud").classList.remove("on"),xd(!1),_e("scope").style.display="none",_e("flashov").style.opacity=0,vn("menu"),document.pointerLockElement&&document.exitPointerLock(),_d()}function cd(s,e){T.state=s?"won":"dead",document.pointerLockElement&&document.exitPointerLock(),T.audio.siren(!1),_e("scope").style.display="none",_e("flashov").style.opacity=0;let t=T.player,i=T.stats,n=Math.floor(T.time);_e("endt").textContent=s?"MISSION COMPLETE":"OPERATOR DOWN",_e("endt").style.color=s?"var(--g)":"#ff6a5a",_e("endt").textContent=s?"MISSION COMPLETE":e?"MISSION FAILED":"OPERATOR DOWN";let r=s?"EXTRACTION SUCCESSFUL":e||"MISSION FAILED";if(!s&&!e&&t.lastHit){let l=t.lastHit;r=l.fall?"KILLED BY A FALL":l.blast?`KILLED BY ${l.name.toUpperCase()}`:`KILLED BY ${l.name.toUpperCase()} \u2014 RIFLE FIRE FROM THE ${JM(l.x-t.pos.x,l.z-t.pos.z)}, ${Math.round(l.dist)} M`}_e("ends").textContent=r;let a=T.mission.def,o=[["Mission",_i[a.type].short+" \xB7 "+ps[a.length].name],["Map",T.world.name],["Enemy intelligence",qr[T.sel.ai].label],["Time",`${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`],["Hostiles neutralised",`${i.kills} / ${T.enemies.length}`],["Headshots / knife kills",`${i.heads} / ${i.knife}`],["Accuracy",i.shots?Math.round(i.hits/i.shots*100)+"%":"\u2014"],["Highest security level",sd[i.maxSec]],["Health remaining",Math.ceil(t.hp)],["Objectives completed",`${Math.min(T.mission.i,a.stages.length)} / ${a.stages.length}`]];_e("endstats").innerHTML=o.map(([l,c])=>`<span>${l}</span><b>${c}</b>`).join(""),vn("end"),s?T.audio.win():T.audio.lose()}var JM=(s,e)=>["NORTH","NORTH-EAST","EAST","SOUTH-EAST","SOUTH","SOUTH-WEST","WEST","NORTH-WEST"][(Math.round(Math.atan2(s,-e)/(Math.PI/4))%8+8)%8];function xd(s){T.nv=s,_e("nv").classList.toggle("on",s),ys.style.filter=s?"grayscale(1) contrast(1.15) brightness(1.3)":"",T.world&&(T.nvLight.intensity=s?2.6:0,T.scene.fog.density=T.world.env.fog[1]*(s?.5:1),T.wlight.intensity=s?1.6:.4,T.scene.environmentIntensity=s?.7:.12)}var $r=0,hd=0,kc=0,Hc=0,Ai={},Kn=[];for(let s=0;s<8;s++){let e=document.createElement("div");e.className="ind",_e("inds").appendChild(e),Kn.push({el:e,t:0,x:0,z:0,life:1})}function jM(s,e,t,i){let n=Kn.find(r=>r.t<=0)||Kn[0];n.x=s,n.z=e,n.t=n.life=i,n.src=null,n.el.style.color=t}function $s(s,e){_e("toast").textContent=s,_e("toast").style.opacity=1,hd=e}function ud(s,e){kc=s?.3:e?.2:.14,_e("hitm").className=s?"k":e?"h":""}function wi(s,e){Ai[s]!==e&&(Ai[s]=e,_e(s).innerHTML=e)}function xs(s,e,t){let i=s+e;Ai[i]!==t&&(Ai[i]=t,_e(s).style[e]=t)}function QM(s){let e=T.player,t=e.slot,i=t.st,n=T.world;wi("hpn",Math.ceil(e.hp));let r=Math.round(e.hp)+"%";Ai.hw!==r&&(Ai.hw=r,_e("hpf").style.width=r,_e("hpf").style.background=e.hp<35?"#ff5a4a":e.hp<60?"#e8b04a":"var(--g)");let a=e.use;wi("medi",a&&a.type==="med"?"APPLYING MEDKIT\u2026":`MEDKIT <b>${e.inv.med}</b> [H] \xB7 STIM <b>${e.inv.stim}</b> [X]`),wi("wn",i.name+(e.reloading?" \u2014 RELOADING":"")),wi("am",i.melee?"\u2014":`${t.mag}<span> / ${t.reserve}</span>`);let o=!i.melee&&!e.reloading&&t.mag<=Math.max(1,Math.floor(i.mag*.25));xs("am","color",o?t.mag===0?"#ff5a4a":"#e8b04a":""),wi("ammohint",i.melee||e.reloading?"":t.mag===0?t.reserve>0?"RELOAD [R]":"NO AMMO":o?"LOW AMMO":""),wi("watt",vc(t.id,i.att||{})),wi("slots",e.slots.map((b,S)=>S===e.cur?`<b>${S+1} ${b.st.name}</b>`:`${S+1} ${b.st.name}`).join(" \xB7 ")),wi("equip",["frag","flash","smoke"].map(b=>`<span class="${e.throwSel===b?"s":""}">${hm[b]} <b>${e.inv[b]}</b></span>`).join("<br>")+"<br>[G] THROW \xB7 [4] CYCLE"),wi("stat",`ENEMY AI <b>${qr[T.sel.ai].label}</b><br>NIGHT VISION <b class="${T.nv?"":"off"}">${T.nv?"ON":"OFF"}</b>`+(i.att&&i.att.laser?`<br>LASER <b class="${e.laserOn?"":"off"}">${e.laserOn?"ON":"OFF"}</b>`:"")+`<br>HOSTILES <b>${T.enemies.filter(b=>!b.dead).length}</b>`);let l=!i.melee&&e.adsF>.85?i.optic.ret:null,c=5+e.spread*5.5,h=e.adsF>.6||e.sprintF>.6||i.melee?0:1,u=8,d=Math.round(c*2)+"|"+h;if(Ai.cross!==d){Ai.cross=d;let b=[[-1,-c-u,2,u],[-1,c,2,u],[-c-u,-1,u,2],[c,-1,u,2]];for(let S=0;S<4;S++){let y=_e("c"+S).style;y.left=b[S][0]+"px",y.top=b[S][1]+"px",y.width=b[S][2]+"px",y.height=b[S][3]+"px",y.opacity=h}}xs("ret","display",l==="dot"||l==="holo"?"block":"none"),l&&l!=="scope"&&Ai.retc!==l&&(Ai.retc=l,_e("ret").className=l),xs("scope","display",e.scoped?"block":"none"),e.scoped&&wi("zoomv",`${t.zoom.toFixed(2)}&times;`+(i.optic.zoom[1]>i.optic.zoom[0]?" <i>WHEEL</i>":"")+(e.steady?" <i>STEADY</i>":e.breath>1?" <i>SHIFT: HOLD BREATH</i>":"")),xs("flashov","opacity",Math.min(1,e.blind).toFixed(2)),xs("stimv","opacity",e.stimT>0?"1":"0"),kc>0?(kc-=s,_e("hitm").style.opacity=Math.min(1,kc*8)):xs("hitm","opacity","0"),$r=Math.max(0,$r-s*1.3),_e("vig").style.opacity=Math.max($r,e.hp<30?.35:0),hd>0&&(hd-=s)<=0&&(_e("toast").style.opacity=0),Hc>0&&(Hc-=s)<=0&&(_e("subt").style.opacity=0);for(let b of T.enemies){if(b.dead||b.seeing||b.detect<.15||!b.los)continue;let S=Kn.find(y=>y.src===b&&y.t>0);if(!S){if(S=Kn.find(y=>y.t<=0),!S)continue;S.src=b,S.el.style.color="#e8b04a"}S.x=b.pos.x,S.z=b.pos.z,S.t=.25,S.life=.25/Math.max(.2,b.detect)}let f=!1;for(let b of T.gren.list){if(b.type==="smoke"||b.owner==="player"||Math.hypot(b.pos.x-e.pos.x,b.pos.z-e.pos.z)>13)continue;f=!0;let S=Kn.find(y=>y.src===b&&y.t>0);if(!S){if(S=Kn.find(y=>y.t<=0),!S)continue;S.src=b,S.el.style.color="#ff9a30"}S.x=b.pos.x,S.z=b.pos.z,S.t=S.life=.2}xs("warn","display",f?"block":"none");for(let b of Kn){if(b.t<=0){b.on&&(b.el.style.opacity=0,b.on=!1,b.src=null);continue}b.t-=s,b.on=!0;let S=Math.atan2(b.x-e.pos.x,-(b.z-e.pos.z))+e.yaw;b.el.style.transform=`rotate(${S}rad)`,b.el.style.opacity=Math.min(1,b.t/b.life)}let m=T.mission.focus(),x=T.v3.set(m[0],m[1]+1,m[2]),p=Math.hypot(m[0]-e.pos.x,m[2]-e.pos.z);x.project(T.camera);let g=x.x,_=x.y;x.z>1&&(g=-g,_=-1);let M=Math.max(Math.abs(g),Math.abs(_));if(M>.9||x.z>1){let b=.9/(M||1);g*=b,_*=b}let v=_e("mark").style;v.left=(g+1)/2*innerWidth+"px",v.top=(1-_)/2*innerHeight+"px",v.opacity=e.scoped?0:1,T.range?(wi("objt",T.range.hud()),v.opacity=0):wi("objt",T.mission.lines().map(b=>`<div class="o-${b.state}">${b.state==="done"?"&#10003;":b.state==="now"?"&#9656;":"&middot;"} ${b.t}</div>`).join("")),wi("mark",T.range?"":(T.mission.complete?"EXTRACT ":"OBJECTIVE ")+Math.round(p)+" M")}function e1(s){let e=T.player,t=T.world,i=T.inp;T.time+=s,T.stats.maxSec=Math.max(T.stats.maxSec,T.sec.level);let n=(f,m,x)=>Math.hypot(f-e.pos.x,m-e.pos.z)<x,r=T.mission,a=r.def.exit.pos,o=r.update(s,i);if(r.failed)return cd(!1,r.failed);if(r.complete&&n(a[0],a[2],3.2)){if(r.civNear())return cd(!0);o=`Wait for the ${r.civ.kind==="hvt"?"target":"hostage"} to reach you`}for(let f of T.pickups){if(f.taken||!n(f.x,f.z,1.9))continue;let m=f.kind==="med";if(o=o||`<b>E</b>${m?"Take medical supplies":"Take ammunition and grenades"}`,i.e&&!o.includes(r.stage?r.stage.prompt:"\0")){if(f.taken=!0,T.scene.remove(f.mesh),T.audio.pickup(),m)e.inv.med=Math.min(4,e.inv.med+1),e.inv.stim=Math.min(4,e.inv.stim+1);else{for(let x of e.slots)x.st.melee||(x.reserve=Math.min(x.st.reserve*2,x.reserve+x.st.mag*2));e.inv.frag=Math.min(4,e.inv.frag+1),e.inv.flash=Math.min(4,e.inv.flash+1)}$s(m?"+1 MEDKIT  +1 STIM":"AMMUNITION RESUPPLIED  +1 FRAG  +1 FLASH",1.8)}}i.e=!1;let l=_e("prompt");Ai.pr!==o&&(Ai.pr=o,l.innerHTML=o,l.style.display=o?"block":"none");let c=e.use&&e.use.type==="med",h=r.hold>0||c;xs("hack","display",h?"block":"none"),h&&(_e("hackf").style.width=(c?e.use.t/e.use.dur:r.hold/(r.stage&&r.stage.hold||1))*100+"%");for(let f of t.dyn)f.l.intensity=f.base*(f.kind==="fire"?.75+Math.sin(T.time*11)*.12+Math.random()*.2:Math.sin(T.time*31)>.86||Math.random()<.02?.25:1);T.exLight.intensity=r.complete?14+Math.sin(T.time*4)*5:3,T.panelLight&&T.sec.level===3&&(T.panelLight.intensity=18+Math.sin(T.time*7)*16);let u=e.w,d=!u.melee&&u.att.laser&&e.laserOn&&e.swT<=0&&!e.reloading&&!e.use&&e.sprintF<.5&&!e.scoped;if(T.laserDot.visible=T.laserBeam.visible=d,d){let f=T.camera.position,m=e.fwd,x=xi(t.colliders,f.x,f.y,f.z,m.x,m.y,m.z,150,"bullet"),p=x?x.d:150;for(let g of T.enemies){if(g.dead)continue;let _=g.rayHit(f,m,p);_&&(p=_.d)}T.laserDot.position.copy(m).multiplyScalar(p-.02).add(f),T.laserDot.scale.setScalar(.006+p*.0022),T.laserBeam.position.copy(e.laserW),T.laserBeam.lookAt(T.laserDot.position),T.laserBeam.scale.z=e.laserW.distanceTo(T.laserDot.position)}Om(t.moon,t.moonDir,e.pos)}var Fc=new I,ad=new I,od=new I,Kr=new I;function Om(s,e,t){let i=s.shadow.camera,n=(i.right-i.left)/s.shadow.mapSize.x;od.copy(e).negate(),Fc.set(0,1,0).cross(od).normalize(),ad.copy(od).cross(Fc).normalize(),Kr.set(t.x,0,t.z);let r=Kr.dot(Fc),a=Kr.dot(ad);Kr.addScaledVector(Fc,Math.round(r/n)*n-r).addScaledVector(ad,Math.round(a/n)*n-a),s.target.position.copy(Kr),s.position.copy(e).multiplyScalar(110).add(Kr),s.target.updateMatrixWorld()}T.followShadow=Om;var ms=T.prof={player:0,ai:0,world:0,mission:0,hud:0,total:0,rays:0,boxes:0};function Um(s){T.frame++;let e=performance.now();Xs.rays=Xs.boxes=0,T.player.update(s),T.inp.mx=T.inp.my=0,Lm.setFromProjectionMatrix(ZM.multiplyMatrices(T.camera.projectionMatrix,T.camera.matrixWorldInverse));let t=performance.now();for(let o of T.enemies)o.update(s);for(let o of T.civs)o.update(s);T.sec.update(s),T.spawnQ.length&&T.spawnQ.shift()();let i=performance.now();T.gren.update(s),T.range&&T.range.update(s),T.frame%6===0&&nm(T.world,T.camera.position),T.fx.update(s);let n=performance.now();e1(s);let r=performance.now();T.state==="playing"&&!T.player.dead&&QM(s);let a=performance.now();if(ms.player=t-e,ms.ai=i-t,ms.world=n-i,ms.mission=r-n,ms.hud=a-r,ms.total=a-e,ms.rays=Xs.rays,ms.boxes=Xs.boxes,T.state==="playing"&&T.player.dead)return cd(!1)}T.step=Um;var Gc=performance.now();Ze.info.autoReset=!1;var dd=0,lo=0;function Fm(s){requestAnimationFrame(Fm);let e=T.pacing,t=s-Gc,i=Math.min(.05,t/1e3);Gc=s;let n=performance.now();if(e.feed(t),e.gpuPoll(),T.state==="playing"){if(lo){let o=n-lo;o>=0&&o<500&&(e.inputAge=e.inputT&&n-e.inputT<2e3?e.inputAge+(o-e.inputAge)*.1:o,e.inputT=n),lo=0}Um(i)}let r=performance.now();if(Ze.info.reset(),T.state==="menu")s1(i);else if(T.scene){let o=e.gpuBegin();Ze.setViewport(0,0,innerWidth,innerHeight),Ze.clear(),Ze.render(T.scene,T.camera),Ze.clearDepth(),Ze.render(T.wscene,T.wcam),e.gpuEnd(o)}let a=performance.now();e.simMs=r-n,e.renderMs=a-r,e.cpuMs+=(a-n-e.cpuMs)*.1,T.overlay&&(dd-=t)<=0&&(dd=250,zm())}var Ks=null;function zm(){let s=T.pacing,e=s.stats(),t=Ze.info.render,i=Ze.getPixelRatio(),n=T.prof,r=_e("perfov");Ks||(Ks=document.createElement("canvas"),Ks.width=240,Ks.height=56,Ks.style.cssText="display:block;margin-top:5px;width:240px;height:56px");let a=Ks.getContext("2d"),o=Math.min(s.n,s.ring.length),l=s.targetMs(),c=56/Math.max(l*2.5,34);a.clearRect(0,0,240,56),a.fillStyle="rgba(255,255,255,.15)",a.fillRect(0,56-l*c,240,1),a.fillRect(0,56-33.3*c,240,1);for(let u=0;u<o;u++){let d=s.ring[(s.ri-o+u+s.ring.length)%s.ring.length];a.fillStyle=d>Math.max(s.med*2,s.med+8)?"#ff5a4a":d>l*1.2?"#e8b04a":"#9fe8b0";let f=Math.min(56,d*c);a.fillRect(240-o+u,56-f,1,f)}let h=u=>((performance.now()-u)/1e3).toFixed(0)+"s";r.innerHTML=`<b>${Math.round(1e3/e.avg)} FPS</b> \xB7 1% LOW ${Math.round(e.low1)} \xB7 DISPLAY ~${Math.round(1e3/s.refreshMs)} HZ<br>FRAME ms  avg ${e.avg.toFixed(1)}  p50 ${e.p50.toFixed(1)}  p99 ${e.p99.toFixed(1)}  max ${e.max.toFixed(1)}<br>CPU ms  sim ${n.total.toFixed(2)} (ai ${n.ai.toFixed(2)} \xB7 player ${n.player.toFixed(2)} \xB7 hud ${n.hud.toFixed(2)})  render ${s.renderMs.toFixed(2)}<br>GPU ms  ${s.gpuMs>=0?s.gpuMs.toFixed(2):s.gpuOff?"n/a (driver reports invalid timings)":"n/a (no timer query in this browser)"}  \xB7 INPUT AGE ${s.inputT&&performance.now()-s.inputT<2e3?s.inputAge.toFixed(1)+" ms":"\u2014 (move the mouse)"}<br>RES ${Ze.domElement.width}\xD7${Ze.domElement.height} \xB7 SCALE ${Math.round(s.scale*100)}%${T.adaptive?"":" fixed"} \xB7 DPR ${i.toFixed(2)}${Vc?" \xB7 LOW-LATENCY":""}<br>${t.calls} CALLS \xB7 ${Math.round(t.triangles/1e3)}K TRIS \xB7 RAYS ${n.rays}/frame \xB7 STUTTERS ${s.stutters}`+(s.log.length?"<br>"+s.log.slice(0,3).map(u=>`<span style="color:#ff8a7a">${u.ms.toFixed(0)} ms ${h(u.t)} ago \u2014 sim ${u.sim.toFixed(1)} render ${u.render.toFixed(1)}${u.gpu>=0?" gpu "+u.gpu.toFixed(1):""}${u.sim+u.render<u.ms*.4?" (outside the game loop: GC / browser / GPU)":""}</span>`).join("<br>"):""),r.appendChild(Ks)}function yd(s){T.overlay=s,_e("perfov").style.display=s?"block":"none",s&&(dd=250,zm()),_e("ovchk").checked=s,co()}function Wc(){Ze.setSize(innerWidth,innerHeight,!1),T.camera.aspect=T.wcam.aspect=innerWidth/innerHeight,T.camera.updateProjectionMatrix(),T.wcam.updateProjectionMatrix()}addEventListener("resize",Wc);addEventListener("keydown",s=>{if(T.state==="paused"&&s.code==="Escape")return Dm();if(T.state!=="playing"||((["Space","Tab","KeyS","KeyD","KeyA","KeyR","KeyN","KeyL","KeyE","KeyC","KeyQ","KeyF","KeyG","KeyH","KeyX","KeyV"].includes(s.code)||s.ctrlKey)&&s.preventDefault(),s.repeat))return;let e=T.player;T.inp.k[s.code]=!0,s.code==="Space"?T.inp.jump=!0:s.code==="KeyR"?e.reload():s.code==="KeyE"?T.inp.e=!0:s.code==="KeyC"?e.crouchToggle=!e.crouchToggle:s.code==="KeyN"?(xd(!T.nv),T.audio.beep(T.nv)):s.code==="KeyL"?(e.laserOn=!e.laserOn,T.audio.beep(e.laserOn)):s.code==="KeyG"?e.startUse("throw"):s.code==="KeyH"?e.startUse("med"):s.code==="KeyX"?e.startUse("stim"):s.code==="KeyV"?e.startUse("melee"):s.code==="Digit4"?e.cycleThrow():s.code==="F3"?(s.preventDefault(),yd(!T.overlay)):T.range&&/^Digit[5678]$/.test(s.code)?T.range.key(s.code):/^Digit[123]$/.test(s.code)?e.switchTo(+s.code[5]-1):s.code==="Escape"&&$n&&Nm()});addEventListener("keyup",s=>{T.inp.k[s.code]=!1});addEventListener("blur",()=>{T.inp.k={},T.inp.lmb=T.inp.rmb=!1});addEventListener("mousemove",s=>{T.state==="playing"&&(document.pointerLockElement===ys||$n)&&(lo||(lo=s.timeStamp||performance.now()),T.inp.mx+=s.movementX,T.inp.my+=s.movementY)});addEventListener("mousedown",s=>{if(T.state==="playing"){if(!$n&&document.pointerLockElement!==ys)return Zr();s.button===0?(T.inp.lmb=!0,T.inp.lmbPressed=!0):s.button===2&&(T.inp.rmb=!0)}});addEventListener("mouseup",s=>{s.button===0?T.inp.lmb=!1:s.button===2&&(T.inp.rmb=!1)});addEventListener("wheel",s=>{T.state==="playing"&&(s.preventDefault(),T.player.zoomStep(s.deltaY<0?1:-1)||T.player.cycleThrow())},{passive:!1});addEventListener("contextmenu",s=>s.preventDefault());document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===ys?T.state==="paused"&&(T.state="playing",vn(null),Gc=performance.now()):T.state==="playing"&&!$n&&Nm()});var t1={forest:"FOREST OUTPOST \u2014 a fenced compound, a remote bunker, a ruin and a camp spread through dark woodland. Night vision recommended.",warehouse:"INDUSTRIAL WAREHOUSE \u2014 main hall, office, machine room, raised dock, yards and service alleys. Close quarters, many routes."},i1={recruit:"RECRUIT \u2014 inexperienced guards: slow decisions, long clumsy exposures, unreliable radio calls.",tactical:"TACTICAL \u2014 trained guards: use cover properly, lean to fire, flank, radio contacts and defend the objective.",elite:"ELITE SQUAD \u2014 a coordinated team: bounding movement, suppressive fire, multiple angles, grenades and flashbangs."},Ue={tab:"play",edit:"primary",scene:null,obj:null,spin:0};function km(){Ue.obj&&Ue.scene&&Ue.scene.remove(Ue.obj),Ue.obj=null,Ue.ch&&(Ue.scene.remove(Ue.ch.root),Ue.ch=null)}function n1(){if(Ue.scene)return Ue.scene;let s=Ue.scene=new Pn;s.environment=ld,s.environmentIntensity=.55;let e=new Zi(16773340,2.6);e.position.set(2,3,3),s.add(e);let t=new Zi(8368383,1.6);return t.position.set(-3,2,-3),s.add(t),s.add(new ls(8425632,1053720,.5)),Ue.cam=new Ct(30,1,.05,50),s}function _d(){if(T.state!=="menu")return;let s=n1();if(km(),Ue.tab==="loadout"){let e=T.loadout[Ue.edit];Ue.obj=so(e,T.loadout.att[e],!0),s.add(Ue.obj)}else Ue.ch=new ds(T.sel.ai==="elite"?"elite":T.sel.ai==="recruit"?"guard":"cautious","carbine"),s.add(Ue.ch.root),Ue.ch.root.rotation.y=Math.PI+.5}function s1(s){if(!Ue.scene)return;let e=_e("side").offsetWidth+_e("content").offsetWidth,t=innerWidth-e;if(Ze.setViewport(0,0,innerWidth,innerHeight),Ze.setClearColor(395532),Ze.clear(),!(t<260)){if(Ze.setViewport(e,0,t,innerHeight),Ue.cam.aspect=t/innerHeight,Ue.spin+=s,Ue.obj){let i=new Jt().setFromObject(Ue.obj),n=i.getCenter(T.v1),r=i.getSize(T.v2).length();Ue.obj.rotation.y=Math.PI/2+Math.sin(Ue.spin*.5)*.55,Ue.cam.position.set(n.x,n.y+r*.12,n.z+r*2.3*Math.max(1,1.25/Ue.cam.aspect)),Ue.cam.lookAt(n.x,n.y,n.z)}else Ue.ch&&(Ue.ch.update(s,{speed:0,aim:Math.sin(Ue.spin*.35)>0,crouch:Math.sin(Ue.spin*.22)<-.6}),Ue.cam.position.set(0,1.25,5.2*Math.max(1,.75/Ue.cam.aspect)),Ue.cam.lookAt(0,.95,0));Ue.cam.updateProjectionMatrix(),Ze.render(Ue.scene,Ue.cam)}}function gs(s,e,t,i,n=""){return`<button class="opt ${n} ${i?"sel":""}" data-v="${s}">${e}${t?`<small>${t}</small>`:""}</button>`}function Bm(){let s=T.loadout,e=o=>document.querySelector(`.opts[data-k="${o}"]`);_i[T.sel.mission].lengths.includes(T.sel.length)||(T.sel.length=_i[T.sel.mission].lengths[0]),e("mission").innerHTML=Object.keys(_i).map(o=>gs(o,_i[o].short,_i[o].desc,T.sel.mission===o)).join(""),e("length").innerHTML=_i[T.sel.mission].lengths.map(o=>gs(o,ps[o].name[0]+ps[o].name.slice(1).toLowerCase(),ps[o].desc,T.sel.length===o)).join("");for(let o of["primary","secondary"])e(o).innerHTML=Object.keys(yt).filter(l=>yt[l].slot===o).map(l=>gs(l,yt[l].name,yt[l].desc,s[o]===l)).join("");e("kit").innerHTML=Object.keys(Xn).map(o=>gs(o,Xn[o].name,Xn[o].desc,s.kit===o)).join("");let t=s[Ue.edit],i=yt[t],n=s.att[t];_e("attl").textContent="ATTACHMENTS \u2014 "+i.name,_e("edit").innerHTML=gs("primary","Edit primary","",Ue.edit==="primary","sm")+gs("secondary","Edit secondary","",Ue.edit==="secondary","sm"),_e("optic").innerHTML=i.optics.map(o=>gs(o,qs[o].name,qs[o].desc||(o==="iron"?"no zoom":o==="reddot"?"1x, clean dot":"1x, ring reticle"),n.optic===o,"sm")).join(""),_e("atts").innerHTML=[["muzzle","Suppressor","quiet: guards hear it only at close range"],["grip","Foregrip","-20% recoil, steadier hip fire"],["laser","Laser sight","tighter hip fire (L toggles)"]].map(([o,l,c])=>gs(o,l,c,n[o],i[o]?"":"off")).join("");let r=no(t,n),a=(o,l)=>`<span>${o}</span><i><b style="width:${Math.round(Math.max(4,Math.min(100,l)))}%"></b></i>`;_e("bars").innerHTML=a("DAMAGE",r.dmg*(r.pellets||1)/1.2)+a("FIRE RATE",r.rpm/9)+a("CONTROL",100-r.recoil*20)+a("HANDLING",100-r.adsT*230)+a("STEALTH",100-r.noise*1.9),_e("losum").innerHTML=`${yt[s.primary].name} <span style="color:var(--a)">${vc(s.primary,s.att[s.primary])}</span><br>${yt[s.secondary].name} <span style="color:var(--a)">${vc(s.secondary,s.att[s.secondary])}</span><br>Combat knife \xB7 ${Xn[s.kit].name} kit \u2014 ${Xn[s.kit].desc}`,_e("brief").innerHTML=`<b style="color:#fff">${_i[T.sel.mission].name}</b> \u2014 ${_i[T.sel.mission].desc}. ${ps[T.sel.length].desc}.<br>${t1[T.sel.map]}<br>${i1[T.sel.ai]}<br><span style="color:#74838a">Insertion point, objective locations and extraction change from run to run; the exact sequence is shown before you begin.</span>`,cm(s),_d()}document.querySelectorAll(".nav").forEach(s=>s.addEventListener("click",()=>{Ue.tab=s.dataset.tab,document.querySelectorAll(".nav").forEach(e=>e.classList.toggle("sel",e===s)),document.querySelectorAll(".tab").forEach(e=>e.classList.toggle("on",e.id==="t-"+Ue.tab)),_d()}));_e("content").addEventListener("click",s=>{let e=s.target.closest(".opt");if(!e||!e.dataset.v)return;let t=e.parentElement,i=t.dataset.k,n=e.dataset.v,r=T.loadout;i==="mission"||i==="length"?T.sel[i]=n:i==="map"||i==="ai"||i==="quality"?(T.sel[i]=n,t.querySelectorAll(".opt").forEach(a=>a.classList.toggle("sel",a===e)),i==="quality"&&(co(),md())):i==="primary"||i==="secondary"?(r[i]=n,Ue.edit=i):i==="kit"?r.kit=n:t.id==="edit"?Ue.edit=n:t.id==="optic"?r.att[r[Ue.edit]].optic=n:t.id==="atts"&&(r.att[r[Ue.edit]][n]=!r.att[r[Ue.edit]][n]),Bm()});var ho=(s,e,t,i)=>{let n=_e(s);n.value=T[e],_e(s+"v").textContent=t(T[e]),n.addEventListener("input",()=>{T[e]=+n.value,_e(s+"v").textContent=t(T[e]),co(),i&&i()})};T.vol==null&&(T.vol=.75);ho("sens","sens",s=>s.toFixed(2));ho("cammo","camMotion",s=>s?Math.round(s*100)+"%":"OFF");ho("wsway","weaponSway",s=>s?Math.round(s*100)+"%":"OFF");ho("fov","fov",s=>s);ho("vol","vol",s=>Math.round(s*100),()=>{T.audio.master&&(T.audio.master.gain.value=T.vol)});var Xc=(s,e,t)=>{let i=_e(s);i.checked=!!T[e],i.addEventListener("change",()=>{T[e]=i.checked,co(),t&&t()})};Xc("adchk","adaptive",()=>{T.adaptive||(T.pacing.scale=1,Ze.setPixelRatio(pd()),Wc())});Xc("ovchk","overlay",()=>yd(T.overlay));Xc("rawchk","rawInput");Xc("llchk","lowLatency",()=>{_e("llnote").style.display=T.lowLatency!==Vc?"inline":"none"});_e("fpstarget").value=T.fpsTarget;_e("fpstarget").addEventListener("change",s=>{T.fpsTarget=s.target.value,co()});yd(T.overlay);document.querySelectorAll('.opts[data-k="quality"] .opt').forEach(s=>s.classList.toggle("sel",s.dataset.v===T.sel.quality));var qc=()=>{T.audio.init(),T.audio.master&&(T.audio.master.gain.value=T.vol),KM()};_e("start").onclick=()=>{T.sel.mode="mission",qc()};_e("train").onclick=()=>{T.sel.mode="range",qc()};_e("again").onclick=qc;_e("prestart").onclick=qc;_e("brgo").onclick=$M;_e("brback").onclick=gd;_e("resume").onclick=Dm;_e("pmenu").onclick=gd;_e("emenu").onclick=gd;{let s=document.createElement("canvas");s.width=s.height=128;let e=s.getContext("2d"),t=e.createImageData(128,128);for(let i=0;i<t.data.length;i+=4)t.data[i]=t.data[i+1]=t.data[i+2]=Math.random()*255,t.data[i+3]=255;e.putImageData(t,0,0),_e("nvn").style.background=`url(${s.toDataURL()})`}md();Kp(s=>{_e("loadf").style.width=s*100+"%"}).then(()=>{T.state="menu",vn("menu"),Bm()}).catch(s=>{_e("load").firstElementChild.textContent="FAILED TO LOAD ASSETS: "+s.message});requestAnimationFrame(Fm);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
