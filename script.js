	ns4 = (document.layers)? true:false
	ie4 = (document.all)? true:false
	var width = window.innerWidth;
	var height = window.innerHeight;
	p = document.querySelector('#tile');
	p1 = document.querySelector('#tile1');
	p2 = document.querySelector('#tile2');


	!function(r){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var t;"undefined"!=typeof window?t=window:"undefined"!=typeof global?t=global:"undefined"!=typeof self&&(t=self),t.numbers=r()}}(function(){return function r(t,e,n){function o(i,u){if(!e[i]){if(!t[i]){var f="function"==typeof require&&require;if(!u&&f)return f(i,!0);if(a)return a(i,!0);var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}var h=e[i]={exports:{}};t[i][0].call(h.exports,function(r){var e=t[i][1][r];return o(e?e:r)},h,h.exports,r,t,e,n)}return e[i].exports}for(var a="function"==typeof require&&require,i=0;i<n.length;i++)o(n[i]);return o}({1:[function(r,t){t.exports=r("./lib/numbers.js")},{"./lib/numbers.js":2}],2:[function(r,t,e){var n=e;n.basic=r("./numbers/basic"),n.calculus=r("./numbers/calculus"),n.complex=r("./numbers/complex"),n.dsp=r("./numbers/dsp"),n.matrix=r("./numbers/matrix"),n.prime=r("./numbers/prime"),n.statistic=r("./numbers/statistic"),n.generate=r("./numbers/generators"),n.random=r("./numbers/random"),n.EPSILON=.001},{"./numbers/basic":3,"./numbers/calculus":4,"./numbers/complex":5,"./numbers/dsp":6,"./numbers/generators":7,"./numbers/matrix":8,"./numbers/prime":9,"./numbers/random":10,"./numbers/statistic":11}],3:[function(r,t,e){var n=e;n.sum=function(r){if("[object Array]"===Object.prototype.toString.call(r)){for(var t=0,e=0;e<r.length;e++){if("number"!=typeof r[e])throw new Error("All elements in array must be numbers");t+=r[e]}return t}throw new Error("Input must be of type Array")},n.subtraction=function(r){if("[object Array]"===Object.prototype.toString.call(r)){var t=r[0];if("number"!=typeof t)throw new Error("All elements in array must be numbers");for(var e=1,n=r.length;n>e;e++){if("number"!=typeof r[e])throw new Error("All elements in array must be numbers");t-=r[e]}return t}throw new Error("Input must be of type Array")},n.product=function(r){if("[object Array]"===Object.prototype.toString.call(r)){var t=r[0];if("number"!=typeof t)throw new Error("All elements in array must be numbers");for(var e=1,n=r.length;n>e;e++){if("number"!=typeof r[e])throw new Error("All elements in array must be numbers");t*=r[e]}return t}throw new Error("Input must be of type Array")},n.square=function(r){if("number"!=typeof r)throw new Error("Input must be a number.");return r*r},n.binomial=function(r,t){function e(r,t){return r>=0&&0===t?1:0===r&&t>0?0:n[r]&&n[r][t]>0?n[r][t]:(n[r]||(n[r]=[]),n[r][t]=e(r-1,t-1)+e(r-1,t),n[r][t])}var n=[];return e(r,t)},n.factorial=function(r){for(var t=2,e=1;r>=t;)e*=t++;return e},n.gcd=function(r,t){var e;if(r=+r,t=+t,r!==r||t!==t)return 0/0;if(1/0===r||r===-1/0||1/0===t||t===-1/0)return 1/0;if(r%1!==0||t%1!==0)throw new Error("Can only operate on integers");for(;t;)e=r%t,r=t,t=e;return r>0?r:-r},n.lcm=function(r,t){return Math.abs(r*t)/n.gcd(r,t)},n.random=function(r,t,e){if(0===r.length)throw new Error("Empty array");if(t>r.length&&!e)throw new Error("Quantity requested exceeds size of array");if(e===!0){var o,a=[];for(o=0;t>o;o++)a[o]=r[Math.floor(Math.random()*r.length)];return a}return n.shuffle(r).slice(0,t)},n.shuffle=function(r){for(var t,e,n=r.length;n;)e=Math.floor(Math.random()*n--),t=r[n],r[n]=r[e],r[e]=t;return r},n.max=function(r){if(!Array.isArray(r))throw new Error("Input must be of type Array");for(var t,e=-1/0,n=0,o=r.length;o>n;n++)if(t=+r[n],t>e&&(e=t),t!==t)return 0/0;return e},n.min=function(r){if(!Array.isArray(r))throw new Error("Input must be of type Array");for(var t,e=+1/0,n=0,o=r.length;o>n;n++)if(t=+r[n],e>t&&(e=t),t!==t)return 0/0;return e},n.range=function(r,t,e){var n,o,a=0;for(arguments.length<=1&&(t=r||0,r=0),e=e||1,r>t&&(e=0-Math.abs(e)),o=Math.max(Math.ceil((t-r)/e)+1,0),n=new Array(o);o>a;)n[a++]=r,r+=e;return n},n.isInt=function(r){return r%1===0},n.divMod=function(r,t){return n.isInt(r)&&n.isInt(t)?[Math.floor(r/t),r%t]:!1},n.powerMod=function(r,t,e){if(-1>t)return Math.pow(r,t)%e;if(0===t)return 1%e;if(t>=1){for(var o=1;t>0;)t%2===1&&(o=o*r%e),r=r*r%e,t>>=1;return o}return-1===t?n.modInverse(r,e):1>t?n.powerMod(r,Math.pow(t,-1),e):void 0},n.egcd=function(r,t){if(r=+r,t=+t,r!==r||t!==t)return[0/0,0/0,0/0];if(1/0===r||r===-1/0||1/0===t||t===-1/0)return[1/0,1/0,1/0];if(r%1!==0||t%1!==0)throw new Error("Can only operate on integers");var e,n,o,a,i=0>r?-1:1,u=0>t?-1:1,f=0,s=1,h=1,l=0;for(r=Math.abs(r),t=Math.abs(t);0!==r;)e=Math.floor(t/r),n=t%r,o=f-h*e,a=s-l*e,t=r,r=n,f=h,s=l,h=o,l=a;return[t,i*f,u*s]},n.modInverse=function(r,t){var e=n.egcd(r,t);if(1!=e[0])throw new Error("No modular inverse exists");return e[1]%t},n.numbersEqual=function(r,t,e){return e>r-t&&r-t>-e},n.fallingFactorial=function(r,t){var e=r-t+1,n=1;if(0>r)throw new Error("n cannot be negative");if(t>r)return 0;for(;r>=e;)n*=e++;return n}},{}],4:[function(r,t,e){function n(r,t,e){var n=(t+e)/2,o=Math.abs(e-t)/6;return o*(r(t)+4*r(n)+r(e))}function o(r,t,e,a,i){var u=t+e,f=n(r,t,u),s=n(r,u,e);return Math.abs(f+s-a)<=15*i?f+s+(f+s-a)/15:o(r,t,u,i/2,f)+o(r,u,e,i/2,s)}var a=r("../numbers"),i=e;i.pointDiff=function(r,t){var e=r(t-.001),n=r(t+.001);return(n-e)/.002},i.Riemann=function(r,t,e,n,o){var a,i=(e-t)/n,u=0;if("function"==typeof o)for(a=t;e>a;a+=i)u+=r(o(a,a+i));else for(a=t;e>a;a+=i)u+=r(a);return u*i},i.adaptiveSimpson=function(r,t,e,i){return i="undefined"==typeof i?a.EPSILON:i,o(r,t,e,n(r,t,e),i)},i.limit=function(r,t,e){if("left"===e)return r(t-1e-15);if("right"===e)return r(t+1e-15);if("middle"===e)return(i.limit(r,t,"left")+i.limit(r,t,"right"))/2;throw new Error("Approach not provided")},i.StirlingGamma=function(r){return Math.sqrt(2*Math.PI/r)*Math.pow(r/Math.E,r)},i.LanczosGamma=function(r){var t,e=[.9999999999998099,676.5203681218851,-1259.1392167224028,771.3234287776531,-176.6150291621406,12.507343278686905,-.13857109526572012,9984369578019572e-21,1.5056327351493116e-7],n=7;if(.5>r)return Math.PI/(Math.sin(Math.PI*r)*i.LanczosGamma(1-r));r-=1;var o=e[0],a=r+n+.5;for(t=1;t<e.length;t++)o+=e[t]/(r+t);return Math.sqrt(2*Math.PI)*Math.pow(a,r+.5)*Math.exp(-a)*o},i.MonteCarlo=function(r,t){if(arguments.length<2)throw new Error("Please enter at least one interval.");if(0>=t)throw new Error("Please use a positive integer for N.");var e=[];t=Math.ceil(t);for(var n=2;n<arguments.length;n++)e.push(arguments[n]);var o=e.map(function(r){return r[1]-r[0]}).reduce(function(r,t){return r*t})/t,i=a.matrix.transpose(e.map(function(r){return a.statistic.randomSample(r[0],r[1],t)})).map(function(t){return r.apply(null,[t[0],t[1],t[2]])});return o*i.reduce(function(r,t){return r+t})}},{"../numbers":2}],5:[function(r,t){var e=r("../numbers"),n=e.basic,o=function(r,t){this.re=r,this.im=t,this.r=this.magnitude(),this.t=this.phase()};o.prototype.add=function(r){return new o(this.re+r.re,this.im+r.im)},o.prototype.subtract=function(r){return new o(this.re-r.re,this.im-r.im)},o.prototype.multiply=function(r){var t=this.re*r.re-this.im*r.im,e=this.im*r.re+this.re*r.im;return new o(t,e)},o.prototype.divide=function(r){var t=r.re*r.re+r.im*r.im,e=(this.re*r.re+this.im*r.im)/t,n=(this.im*r.re-this.re*r.im)/t;return new o(e,n)},o.prototype.magnitude=function(){return Math.sqrt(this.re*this.re+this.im*this.im)},o.prototype.phase=function(){return Math.atan2(this.im,this.re)},o.prototype.conjugate=function(){return new o(this.re,-1*this.im)},o.prototype.pow=function(r){var t=Math.pow(this.magnitude(),r);return new o(t*Math.cos(r*this.phase()),t*Math.sin(r*this.phase()))},o.prototype.complexPow=function(r){var t=Math.pow(this.re,2)+Math.pow(this.im,2),e=Math.pow(t,r.re/2)*Math.pow(Math.E,-r.im*this.phase()),n=r.re*this.phase()+.5*r.im*Math.log(t);return new o(e*Math.cos(n),e*Math.sin(n))},o.prototype.roots=function(r){for(var t=new Array(r),e=0;r>e;e++){var n=(this.phase()+2*Math.PI*e)/r,a=Math.pow(this.magnitude(),1/r);t[e]=new o(a*Math.cos(n),a*Math.sin(n))}return t},o.prototype.sin=function(){var r=new o(Math.E,0),t=new o(0,1),e=new o(0,-1),n=r.complexPow(t.multiply(this)).subtract(r.complexPow(e.multiply(this)));return n.divide(new o(0,2))},o.prototype.cos=function(){var r=new o(Math.E,0),t=new o(0,1),e=new o(0,-1),n=r.complexPow(t.multiply(this)).add(r.complexPow(e.multiply(this)));return n.divide(new o(2,0))},o.prototype.tan=function(){return this.sin().divide(this.cos())},o.prototype.equals=function(r,t){return n.numbersEqual(this.re,r.re,t)&&n.numbersEqual(this.im,r.im,t)},t.exports=o},{"../numbers":2}],6:[function(r,t,e){var n=r("../numbers"),o=n.complex,a=e;a.segment=function(r,t,e){for(var n=[],o=t;o<r.length;o+=e)n.push(r[o]);return n},a.fft=function(r){var t=r.length;if(1>=t)return[new o(r[0],0)];if(Math.log(t)/Math.LN2%1!==0)throw new Error("Array length must be integer power of 2");for(var e=a.fft(a.segment(r,0,2)),n=a.fft(a.segment(r,1,2)),i=[],u=t/2,f=0;t>f;f++){var s=-2*Math.PI*f/t,h=new o(Math.cos(s),Math.sin(s));i[f]=u>f?e[f].add(h.multiply(n[f])):e[f-u].subtract(h.multiply(n[f-u]))}return i}},{"../numbers":2}],7:[function(r,t,e){var n=e;n.fibonacci=function(r){for(var t,e=function(r){for(var t,e=[];r>0;)t=2>r?r:r%2,r=Math.floor(r/2),e.push(t);return e.reverse()},n=1,o=0,a=1,i=e(r),u=0;u<i.length;u++){var f=i[u];f?(t=[(n+a)*o,o*o+a*a],n=t[0],o=t[1]):(t=[n*n+o*o,(n+a)*o],n=t[0],o=t[1]),a=n+o}return o},n.collatz=function(r,t){t.push(r),1!==r&&(r%2===0?n.collatz(r/2,t):n.collatz(3*r+1,t))}},{}],8:[function(r,t,e){var n=e,o="Matrix must be square.",a="Only two dimensional operations are supported at this time.";n._check2DVector=function(r){if(2!==r.length)throw new Error(a)},n.deepCopy=function(r){if(!Array.isArray(r))throw new Error("Input must be a matrix.");if(void 0===r[0][0])throw new Error("Input cannot be a vector.");for(var t=new Array(r.length),e=0;e<r.length;e++)t[e]=r[e].slice();return t},n.isSquare=function(r){if(!Array.isArray(r))throw new Error("Input must be a matrix.");if(void 0===r[0][0])throw new Error("Input cannot be a vector.");for(var t=r.length,e=0;t>e;e++)if(r[e].length!==t)return!1;return!0},n.addition=function(r,t){if(r.length!==t.length||r[0].length!==t[0].length)throw new Error("Matrix mismatch");var e,n=new Array(r.length);if(r[0].length)for(e=0;e<r.length;e++){n[e]=new Array(r[e].length);for(var o=0;o<r[e].length;o++)n[e][o]=r[e][o]+t[e][o]}else for(e=0;e<r.length;e++)n[e]=r[e]+t[e];return n},n.subtraction=function(r,t){if(r.length!==t.length||r[0].length!==t[0].length)throw new Error("Matrix mismatch");var e,n=new Array(r.length);if(r[0].length)for(e=0;e<r.length;e++){n[e]=new Array(r[e].length);for(var o=0;o<r[e].length;o++)n[e][o]=r[e][o]-t[e][o]}else for(e=0;e<r.length;e++)n[e]=r[e]-t[e];return n},n.scalar=function(r,t){for(var e=0;e<r.length;e++)for(var n=0;n<r[e].length;n++)r[e][n]=t*r[e][n];return r},n.transpose=function(r){for(var t=new Array(r[0].length),e=0;e<r[0].length;e++){t[e]=new Array(r.length);for(var n=0;n<r.length;n++)t[e][n]=r[n][e]}return t},n.identity=function(r){for(var t=new Array(r),e=0;r>e;e++){t[e]=new Array(r);for(var n=0;r>n;n++)t[e][n]=e===n?1:0}return t},n.dotproduct=function(r,t){if(r.length!==t.length)throw new Error("Vector mismatch");for(var e=0,n=0;n<r.length;n++)e+=r[n]*t[n];return e},n.multiply=function(r,t){if(r[0].length!==t.length)throw new Error("Matrix mismatch");for(var e=new Array(r.length),o=0;o<r.length;o++)e[o]=new Array(t[0].length);for(var a=n.transpose(t),i=0;i<e.length;i++)for(var u=0;u<e[i].length;u++)e[i][u]=n.dotproduct(r[i],a[u]);return e},n.determinant=function(r){var t,e,a,i,u=r.length,f=r[0].length,s=0;if(!n.isSquare(r))throw new Error(o);if(1===u)return r[0][0];if(2===u)return r[0][0]*r[1][1]-r[0][1]*r[1][0];for(e=0;f>e;e++){for(a=r[0][e],i=r[0][e],t=1;u>t;t++)i*=r[t][((e+t)%f+f)%f],a*=r[t][((e-t)%f+f)%f];s+=i-a}return s},n.lupDecomposition=function(r){if(!n.isSquare(r))throw new Error(o);var t,e=r.length,a=n.deepCopy(r),i=n.transpose(n.identity(e)),u=new Array(e);this.getL=function(r){for(var t=r[0].length,e=n.identity(t),o=0;t>o;o++)for(var a=0;t>a;a++)o>a&&(e[o][a]=r[o][a]);return e},this.getU=function(r){for(var t=r[0].length,e=n.identity(t),o=0;t>o;o++)for(var a=0;t>a;a++)a>=o&&(e[o][a]=r[o][a]);return e};for(var f=0;e>f;f++){var s;for(s=0;e>s;s++)u[s]=a[s][f];for(s=0;e>s;s++){t=a[s];for(var h=Math.min(s,f),l=0,c=0;h>c;c++)l+=t[c]*u[c];t[f]=u[s]-=l}var m=f;for(s=f+1;e>s;s++)Math.abs(u[s])>Math.abs(u[m])&&(m=s);if(m!=f&&(a=n.rowSwitch(a,m,f),i=n.rowSwitch(i,m,f)),e>f&&0!==a[f][f])for(s=f+1;e>s;s++)a[s][f]/=a[f][f]}return[this.getL(a),this.getU(a),i]},n.rotate=function(r,t,e){n._check2DVector(r);var o="clockwise"===e?-1:1,a=t*(Math.PI/180),i=[[Math.cos(a),-1*o*Math.sin(a)],[o*Math.sin(a),Math.cos(a)]];return n.multiply(i,r)},n.scale=function(r,t,e){n._check2DVector(r);var o=[[t,0],[0,e]];return n.multiply(o,r)},n.shear=function(r,t,e){n._check2DVector(r);var o="xaxis"===e?t:0,a="yaxis"===e?t:0,i=[[1,o],[a,1]];return n.multiply(i,r)},n.affine=function(r,t,e){n._check2DVector(r);var o=[[1,0,t],[0,1,e],[0,0,1]],a=[[r[0][0]],[r[1][0]],[1]],i=n.multiply(o,a);return[[i[0][0]],[i[1][0]]]},n.rowScale=function(r,t,e){for(var n=new Array(r.length),o=0;o<r.length;o++){n[o]=new Array(r[o].length);for(var a=0;a<r[o].length;a++)n[o][a]=o===t?e*r[o][a]:r[o][a]}return n},n.rowSwitch=function(r,t,e){for(var n=new Array(r.length),o=0;o<r.length;o++){n[o]=new Array(r[o].length);for(var a=0;a<r[o].length;a++)n[o][a]=o===t?r[e][a]:o===e?r[t][a]:r[o][a]}return n},n.rowAddMultiple=function(r,t,e,n){for(var o=new Array(r.length),a=0;a<r.length;a++){o[a]=new Array(r[a].length);for(var i=0;i<r[a].length;i++)a===e?o[e][i]=r[e][i]+n*r[t][i]:o[a][i]=r[a][i]}return o},n.GaussJordanEliminate=function(r,t){for(var e,n,o,a="undefined"==typeof t?1e-10:t,i=r.length,u=r[0].length,f=-1;++f<i;){var s=f;for(e=f;++e<i;)Math.abs(r[e][f])>Math.abs(r[s][f])&&(s=e);var h=r[f];if(r[f]=r[s],r[s]=h,Math.abs(r[f][f])<=a)return r;for(e=f;++e<i;)for(o=r[e][f]/r[f][f],n=f-1;++n<u;)r[e][n]-=r[f][n]*o}for(f=i;--f>=0;){for(o=r[f][f],e=-1;++e<f;)for(n=u;--n>=f;)r[e][n]-=r[f][n]*r[e][f]/o;for(r[f][f]/=o,n=i-1;++n<u;)r[f][n]/=o}return r},n.rowReduce=function(r,t){return n.GaussJordanEliminate(r,t)},n.inverse=function(r){if(!n.isSquare(r))throw new Error(o);var t,e=r.length,a=n.identity(e);for(t=0;e>t;t++)r[t]=r[t].concat(a[t]);for(r=n.GaussJordanEliminate(r),t=0;e>t;t++)r[t]=r[t].slice(e);return r},n.getCol=function(r,t){var e=new Array(r.length);if(0>t)throw new Error("The specified column must be a positive integer.");if(t>=r[0].length)throw new Error("The specified column must be between 0 and the number of columns - 1.");for(var n=0;n<r.length;n++)e[n]=r[n][t];return e},n.reorderRows=function(r,t){var e=[];if(void 0===t)throw new Error("A reordering array must be entered.");if(t.length!==r.length)throw new Error("The reordered matrix must have the same number of rows as the original matrix.");for(var n=0;n<t.length;n++){if(t[n]<0)throw new Error("The desired order of the rows must be positive integers.");if(t[n]>=t.length)throw new Error("The desired order of the rows must start at 0 and end at the number of rows - 1.");e.push(r[t[n]])}return e},n.reorderCols=function(r,t){var e=[];if(void 0===t)throw new Error("Please enter a desired reordering array.");if(t.length!==r[0].length)throw new Error("The reordered matrix must have the same number of columns as the original matrix.");for(var o=0;o<t.length;o++){if(t[o]<0)throw new Error("The desired order of the columns must be positive integers.");if(t[o]>=t.length)throw new Error("The desired order of the columns must start at 0 and end at the number of columns - 1.");e.push(n.getCol(r,t[o]))}return n.transpose(e)},n.reverseRows=function(r){for(var t=[],e=r.length-1;e>-1;e--)t.push(e);return n.reorderRows(r,t)},n.reverseCols=function(r){for(var t=[],e=r.length-1;e>-1;e--)t.push(e);return n.reorderCols(r,t)},n.zeros=function(r,t){var e=new Array(r);if(1>r||1>t)throw new Error("The matrix dimensions must be positive integers.");r=Math.ceil(r),t=Math.ceil(t);for(var n=0;r>n;n++){for(var o=new Array(t),a=0;t>a;a++)o[a]=0;e[n]=o}return e},n.zigzag=function(r,t,e){if(1>=r)throw new Error("Matrix size must be at least 2x2.");r=Math.ceil(r);var o=n.zeros(r,r),a=function(t){var e,n,o,a,i,u=!1,f=r*r,s=1,h=1;for(t[0][0]=f,t[r-1][r-1]=s,a=1;r>a;a++)u?(f-=4*h,s+=4*h,h++):(f--,s++),t[0][a]=f,t[r-1][r-1-a]=s,u=!u;var l=!0;for(a=1;r>a;a++){for(e=0,n=a,o=t[e][n],i=1;a+1>i;i++)l?o-=1:o+=1,e++,n--,t[e][n]=o;l=!l}for(l=r%2===0?!0:!1,a=1;r-1>a;a++){for(e=r-1,n=a,o=t[e][n],i=1;r-a>i;i++)l?o--:o++,e--,n++,t[e][n]=o;l=!l}return t},i=function(r){return n.transpose(a(r))},u=function(r){return n.reverseCols(a(r))},f=function(r){return n.reverseRows(c(u(r)))},s=function(r){return n.reverseRows(a(r))},h=function(r){return n.reverseRows(i(r))},l=function(r){return n.reverseCols(n.reverseRows(a(r)))},c=function(r){return n.transpose(l(r))};if("BR"===t&&"H"===e)return a(o);if("BR"===t&&"V"===e)return i(o);if("BL"===t&&"H"===e)return u(o);if("BL"===t&&"V"===e)return f(o);if("TR"===t&&"H"===e)return s(o);if("TR"===t&&"V"===e)return h(o);if("TL"===t&&"H"===e)return l(o);if("TL"===t&&"V"===e)return c(o);throw new Error("Enter the direction (V,H) and corner (BR,BL,TR,TL) correctly.")},n.vectorNorm=function(r,t){if(!Array.isArray(r)||0===r.length)throw new Error("Vector must be an array of at least length 1.");if("undefined"!=typeof t&&"number"!=typeof t)throw new Error("Norm order must be a number.");t="undefined"==typeof t?2:t;var e,n,o=r.length,a=0;switch(t){case 1/0:for(n=0;o>n;n++)e=Math.abs(r[n]),e>a&&(a=e);break;case-1/0:for(a=1/0,n=0;o>n;n++)e=Math.abs(r[n]),a>e&&(a=e);break;default:for(n=0;o>n;n++)a+=Math.pow(Math.abs(r[n]),t);a=Math.pow(a,1/t)}return a},n.matrixNorm=function(r,t){if(!Array.isArray(r)||0===r.length||!Array.isArray(r[0]))throw new Error("Matrix must be an array of at least length 1.");if("undefined"!=typeof t&&"number"!=typeof t&&null!==t)throw new Error("Norm order must be a number or null.");t="undefined"==typeof t?null:t;var e,n,o,a=r.length,i=r[0].length,u=0;switch(t){case 1/0:for(n=0;a>n;n++){for(e=0,o=0;i>o;o++)e+=Math.abs(r[n][o]);e>u&&(u=e)}break;case-1/0:for(u=1/0,n=0;a>n;n++){for(e=0,o=0;i>o;o++)e+=Math.abs(r[n][o]);u>e&&(u=e)}break;case 1:for(n=0;i>n;n++){for(e=0,o=0;a>o;o++)e+=Math.abs(r[o][n]);e>u&&(u=e)}break;case-1:for(u=1/0,n=0;i>n;n++){for(e=0,o=0;a>o;o++)e+=Math.abs(r[o][n]);u>e&&(u=e)}break;case null:for(n=0;a>n;n++)for(o=0;i>o;o++)u+=Math.pow(r[n][o],2);u=Math.pow(u,.5);break;case 2:throw new Error("Singular values are not yet supported in numbers.js.");case-2:throw new Error("Singular values are not yet supported in numbers.js.");default:for(n=0;a>n;n++)for(o=0;i>o;o++)u+=Math.pow(Math.abs(r[n][o]),t);u=Math.pow(u,1/t)}return u},n.isUpperBand=function(r,t){if(!Array.isArray(r)||!Array.isArray(r[0])||r.length<2)throw new Error("Matrix must be an array of at least dimension 2.");if("number"!=typeof t||0>t||t%1!==0)throw new Error("Upper bandwidth must be a nonzero integer.");for(var e=!0,n=r[0].length,o=0,a=t+1;n>a;a++){if(0!==r[o][a]){e=!1;break}o++}return e},n.isLowerBand=function(r,t){if(!Array.isArray(r)||!Array.isArray(r[0])||r.length<2)throw new Error("Matrix must be an array of at least dimension 2.");if("number"!=typeof t||0>t||t%1!==0)throw new Error("Lower bandwidth must be a nonzero integer.");for(var e=!0,n=r.length,o=0,a=t+1;n>a;a++){if(0!==r[a][o]){e=!1;break}o++}return e},sumNondiagonalElements=function(r,t){var e,n=0;for(e=0;t>e;e++)n+=Math.abs(r[e]);for(e=t+1;e<r.length;e++)n+=Math.abs(r[e]);return n},n.isRowDD=function(r){var t=r.length;if(!n.isSquare(r))throw new Error(o);for(var e=0;t>e;e++){var a=r[e],i=a[e],u=sumNondiagonalElements(a,e);if(Math.abs(i)<u)return!1}return!0},n.isStrictlyRowDD=function(r){if(!n.isSquare(r))throw new Error(o);for(var t=r.length,e=0;t>e;e++){var a=r[e],i=a[e],u=sumNondiagonalElements(a,e);if(Math.abs(i)<=u)return!1}return!0},n.isColumnDD=function(r){if(!n.isSquare)throw new Error(o);for(var t=r.length,e=0;t>e;e++){var a=n.getCol(r,e),i=a[e],u=sumNondiagonalElements(a,e);if(Math.abs(i)<u)return!1}return!0},n.isStrictlyColumnDD=function(r){if(!n.isSquare(r))throw new Error(o);for(var t=r.length,e=0;t>e;e++){var a=n.getCol(r,e),i=a[e],u=sumNondiagonalElements(a,e);if(Math.abs(i)<=u)return!1}return!0}},{}],9:[function(r,t,e){var n=r("./basic"),o=e;o.simple=function(r){if(isNaN(r)||!isFinite(r)||r%1||2>r)return!1;if(r%2===0)return 2===r;if(r%3===0)return 3===r;for(var t=5,e=Math.sqrt(r);e>=t;t+=6)if(r%t===0||r%(t+2)===0)return!1;return!0},o.factorization=function(r){r=Math.floor(r);for(var t,e,n=[],o=Math.sqrt,a=r>1&&isFinite(r);a;){if(t=o(r),e=2,r%e)for(e=3;r%e&&(e+=2)<t;);e=e>t?r:e,n.push(e),a=e!==r,r/=e}return n},o.millerRabin=function(r,t){if(1===arguments.length&&(t=20),2===r)return!0;if(!n.isInt(r)||1>=r||r%2===0)return!1;for(var e=0,o=r-1;;){var a=n.divMod(o,2),i=a[0],u=a[1];if(1===u)break;e+=1,o=i}for(var f=function(t){if(1===n.powerMod(t,o,r))return!1;for(var a=0;e>a;a++)if(n.powerMod(t,Math.pow(2,a)*o,r)===r-1)return!1;return!0},s=0;t>s;s++){var h=2+Math.floor(Math.random()*(r-2-2));if(f(h))return!1}return!0},o.sieve=function(r){if(2>r)return[];for(var t=[2],e=3;r>=e;e++){var n=!1;for(var o in t)n=n||0===e%t[o];n||t.push(e)}return t},o.coprime=function(r,t){return 1===n.gcd(r,t)},o.getPerfectPower=function(r){var t=o.getPrimePower(r);return t&&t[1]>1?t:!1},o.getPrimePower=function(r){if(2>r)return!1;if(o.millerRabin(r))return[r,1];if(r%2===0)return[2,r.toString(2).length-1];var t=o.factorization(r);if(!t)return!1;for(var e=t.length,n=0;e>n;n++)for(var a=0,i=0;r>=a;){if(a=Math.pow(t[n],i),a/r===1)return[t[n],i];i++}return!1}},{"./basic":3}],10:[function(r,t,e){var n=(r("./basic"),e),o=Math.random;n.setGenerator=function(r){if("function"!=typeof r)throw new Error("Must pass a function");o=r},n.sample=function(r,t,e){var n=[];n.length=e;for(var a=0;e>a;a++)n[a]=r+(t-r)*o();return n},n.boxMullerTransform=function(r,t){arguments.length<=1&&(t=1),0===arguments.length&&(r=0);var e,n=0,a=0;do n=2*o()-1,a=2*o()-1,e=n*n+a*a;while(0===e||e>1);var i=Math.sqrt(-2*Math.log(e)/e),u=n*i,f=a*i;return u=r+u*t,f=r+f*t,[u,f]},n.irwinHall=function(r,t){1===arguments.length&&(t=0);for(var e=0,n=0;r>n;n++)e+=o();return e-t},n.bates=function(r,t,e){arguments.length<=2&&(e=0),1===arguments.length&&(t=1);for(var n=0,a=0;r>a;a++)n+=(t-e)*o()+e;return n/r},n.distribution={},n.distribution.normal=function(r,t,e){return arguments.length<=2&&(e=1),1===arguments.length&&(t=0),n.distribution.boxMuller(r,t,e)},n.distribution.logNormal=function(r,t,e){arguments.length<=2&&(e=1),1===arguments.length&&(t=0);var o=function(r){return Math.exp(r)};return n.distribution.boxMuller(r,t,e).map(o)},n.distribution.boxMuller=function(r,t,e,o){arguments.length<=3&&(o=!1),arguments.length<=2&&(e=1),1===arguments.length&&(t=0);for(var a=[],i=0;r>i;i++){var u=n.boxMullerTransform(t,e);a.push(o?u:u[0])}return a},n.distribution.irwinHall=function(r,t,e){arguments.length<=2&&(e=0),1===arguments.length&&(t=r);for(var o=new Array(r),a=0;r>a;a++)o[a]=n.irwinHall(t,e);return o},n.distribution.irwinHallNormal=function(r){return n.distribution.irwinHall(r,12,6)},n.distribution.bates=function(r,t,e){arguments.length<=2&&(e=0),1===arguments.length&&(t=r);for(var o=new Array(r),a=0;r>a;a++)o[a]=n.bates(r,t,e);return o}},{"./basic":3}],11:[function(r,t,e){var n=r("./basic"),o=e;o.mean=function(r){var t=r.length,e=n.sum(r);return e/t},o.median=function(r){return o.quantile(r,1,2)},o.mode=function(r){for(var t={},e=0,n=r.length;n>e;e++)void 0===t[r[e]]?t[r[e]]=0:t[r[e]]++;var o;for(var a in t)t.hasOwnProperty(a)&&(void 0===o||t[a]>t[o])&&(o=a);return Number(o)},o.quantile=function(r,t,e){var n,o,a;return 0===t?Math.min.apply(null,r):t===e?Math.max.apply(null,r):(n=r.slice(0),n.sort(function(r,t){return r-t}),o=n.length,a=o*t/e,a%1===0?.5*n[a-1]+.5*n[a]:n[Math.floor(a)])},o.report=function(r){return{mean:o.mean(r),firstQuartile:o.quantile(r,1,4),median:o.median(r),thirdQuartile:o.quantile(r,3,4),standardDev:o.standardDev(r)}},o.standardDev=function(r){for(var t=r.length,e=o.mean(r),a=[],i=0;i<r.length;i++)a[i]=Math.pow(r[i]-e,2);return Math.sqrt(1/t*n.sum(a))},o.correlation=function(r,t){if(r.length==t.length){var e=o.covariance(r,t),n=o.standardDev(r),a=o.standardDev(t);return e/(n*a)}throw new Error("Array mismatch")},o.rSquared=function(r,t){var e=n.sum(r.map(function(r,e){return n.square(r-t[e])})),a=n.sum(r.map(function(t){return n.square(t-o.mean(r))}));return 1-e/a},o.exponentialRegression=function(r){var t=r.length,e=n.range(1,t),a=n.sum(e),i=(n.sum(r),o.mean(r),r.map(function(r){return Math.log(r)})),u=e.map(function(r){return r*r}),f=n.sum(u),s=n.sum(i),h=e.map(function(r,t){return r*i[t]}),l=n.sum(h),c=(s*f-a*l)/(t*f-a*a),m=(t*l-a*s)/(t*f-a*a),w=function(r){return"number"==typeof r?Math.exp(c)*Math.exp(m*r):r.map(function(r){return Math.exp(c)*Math.exp(m*r)})};return w.rSquared=o.rSquared(r,e.map(w)),w},o.linearRegression=function(r,t){var e=r.length,a=n.sum(r),i=n.sum(t),u=n.sum(r.map(function(r,e){return r*t[e]})),f=n.sum(r.map(function(r){return r*r})),s=o.mean(r),h=o.mean(t),l=(u-1/e*a*i)/(f-1/e*a*a),c=h-l*s;return function(r){return"number"==typeof r?c+l*r:r.map(function(r){return c+l*r})}},o.covariance=function(r,t){if(r.length==t.length){for(var e=r.length,o=0,a=n.sum(r),i=n.sum(t),u=0;e>u;u++)o+=r[u]*t[u];return(o-a*i/e)/e}throw new Error("Array mismatch")}},{"./basic":3}]},{},[1])(1)});

	// var numbers = require('numbers');
	function init() {
	    if (ns4) {document.captureEvents(Event.MOUSEMOVE);}
	    document.onmousemove=mousemove;
	}
	function mousemove(event) {
	    var mouse_x = y = 0;
	    if (document.attachEvent != null) {
	        mouse_x = window.event.clientX;
	        mouse_y = window.event.clientY;
	    } else if (!document.attachEvent && document.addEventListener) {
	        mouse_x = event.clientX;
	        mouse_y = event.clientY;
	    }
	    // p.style = "transform-origin center 50% 0px; transform: matrix3d(0.999054 + "," + 0 + "," + -0.0434784 + "," + 4.34784e-05 + "," + -0.000430794 + "," + 0.999951 + "," + -0.00989885 + "," + 9.89885e-06 + "," + 0.0434763 + "," + 0.00990822 + "," + 0.999005 + "," + -0.000999005 + "," + 0 + "," + 0 + "," + 0 + "," + 1);"
	    var x = (mouse_y - height / 2) * (-1) * Math.PI / 3600;
	    var y = (mouse_x -width / 2) * (-1) * Math.PI / 9000;

	    var ar = [[1,0,0], [0,1,0], [0,0,1]];
	    var yrot = [[Math.cos(y),0,Math.sin(-y)], [0,1,0], [Math.sin(y),0,Math.cos(y)]];
	    var xrot = [[1,0,0], [0,Math.cos(x),Math.sin(-x)], [0,Math.sin(x),Math.cos(x)]];

	    ar = numbers.matrix.multiply(xrot, yrot);
	    // console.log(ar);
	    console.log(ar[0][1]);

	    p.style = " transform: matrix3d(" +
	    ar[0][0] + "," + ar[0][1] + "," + ar[0][2] + "," + 0 + ","+
	    ar[1][0] + "," + ar[1][1] + "," + ar[1][2] + "," + 0 + ","+
	    ar[2][0] + "," + ar[2][1] + "," + ar[2][2] + "," + 0 + ","+
	    0 + "," + 0 + "," + 0 + "," + 1 + ");";

	    document.getElementById('xy').innerHTML = "x = " + x + " y = " + y;

	}
	init();