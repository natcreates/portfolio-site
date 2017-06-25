/*! modernizr 3.1.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-pointerevents-touchevents !*/
!function(e,n,t){function o(e,n){return typeof e===n}function s(){var e,n,t,s,i,a,r;for(var f in d)if(d.hasOwnProperty(f)){if(e=[],n=d[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=o(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)a=e[i],r=a.split("."),1===r.length?Modernizr[r[0]]=s:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=s),l.push((s?"":"no-")+r.join("-"))}}function i(e){var n=c.className,t=Modernizr._config.classPrefix||"";if(p&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),p?c.className.baseVal=n:c.className=n)}function a(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):p?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function r(){var e=n.body;return e||(e=a(p?"svg":"body"),e.fake=!0),e}function f(e,t,o,s){var i,f,l,d,u="modernizr",p=a("div"),v=r();if(parseInt(o,10))for(;o--;)l=a("div"),l.id=s?s[o]:u+(o+1),p.appendChild(l);return i=a("style"),i.type="text/css",i.id="s"+u,(v.fake?v:p).appendChild(i),v.appendChild(p),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),p.id=u,v.fake&&(v.style.background="",v.style.overflow="hidden",d=c.style.overflow,c.style.overflow="hidden",c.appendChild(v)),f=t(p,e),v.fake?(v.parentNode.removeChild(v),c.style.overflow=d,c.offsetHeight):p.parentNode.removeChild(p),!!f}var l=[],d=[],u={_version:"3.1.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){d.push({name:e,fn:n,options:t})},addAsyncTest:function(e){d.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=u,Modernizr=new Modernizr;var c=n.documentElement,p="svg"===c.nodeName.toLowerCase(),v=u._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];u._prefixes=v;var h="Moz O ms Webkit",m=u._config.usePrefixes?h.toLowerCase().split(" "):[];u._domPrefixes=m;var g=function(e){function t(n,t){var s;return n?(t&&"string"!=typeof t||(t=a(t||"div")),n="on"+n,s=n in t,!s&&o&&(t.setAttribute||(t=a("div")),t.setAttribute(n,""),s="function"==typeof t[n],t[n]!==e&&(t[n]=e),t.removeAttribute(n)),s):!1}var o=!("onblur"in n.documentElement);return t}();u.hasEvent=g,Modernizr.addTest("pointerevents",function(){var e=!1,n=m.length;for(e=Modernizr.hasEvent("pointerdown");n--&&!e;)g(m[n]+"pointerdown")&&(e=!0);return e});var w=u.testStyles=f;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",v.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");w(o,function(e){t=9===e.offsetTop})}return t}),s(),i(l),delete u.addTest,delete u.addAsyncTest;for(var y=0;y<Modernizr._q.length;y++)Modernizr._q[y]();e.Modernizr=Modernizr}(window,document);
/*! modernizr 3.1.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-pointerevents-touchevents !*/
!function(e,n,t){function o(e,n){return typeof e===n}function s(){var e,n,t,s,i,a,r;for(var f in d)if(d.hasOwnProperty(f)){if(e=[],n=d[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=o(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)a=e[i],r=a.split("."),1===r.length?Modernizr[r[0]]=s:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=s),l.push((s?"":"no-")+r.join("-"))}}function i(e){var n=c.className,t=Modernizr._config.classPrefix||"";if(p&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),p?c.className.baseVal=n:c.className=n)}function a(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):p?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function r(){var e=n.body;return e||(e=a(p?"svg":"body"),e.fake=!0),e}function f(e,t,o,s){var i,f,l,d,u="modernizr",p=a("div"),v=r();if(parseInt(o,10))for(;o--;)l=a("div"),l.id=s?s[o]:u+(o+1),p.appendChild(l);return i=a("style"),i.type="text/css",i.id="s"+u,(v.fake?v:p).appendChild(i),v.appendChild(p),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),p.id=u,v.fake&&(v.style.background="",v.style.overflow="hidden",d=c.style.overflow,c.style.overflow="hidden",c.appendChild(v)),f=t(p,e),v.fake?(v.parentNode.removeChild(v),c.style.overflow=d,c.offsetHeight):p.parentNode.removeChild(p),!!f}var l=[],d=[],u={_version:"3.1.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){d.push({name:e,fn:n,options:t})},addAsyncTest:function(e){d.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=u,Modernizr=new Modernizr;var c=n.documentElement,p="svg"===c.nodeName.toLowerCase(),v=u._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];u._prefixes=v;var h="Moz O ms Webkit",m=u._config.usePrefixes?h.toLowerCase().split(" "):[];u._domPrefixes=m;var g=function(e){function t(n,t){var s;return n?(t&&"string"!=typeof t||(t=a(t||"div")),n="on"+n,s=n in t,!s&&o&&(t.setAttribute||(t=a("div")),t.setAttribute(n,""),s="function"==typeof t[n],t[n]!==e&&(t[n]=e),t.removeAttribute(n)),s):!1}var o=!("onblur"in n.documentElement);return t}();u.hasEvent=g,Modernizr.addTest("pointerevents",function(){var e=!1,n=m.length;for(e=Modernizr.hasEvent("pointerdown");n--&&!e;)g(m[n]+"pointerdown")&&(e=!0);return e});var w=u.testStyles=f;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",v.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");w(o,function(e){t=9===e.offsetTop})}return t}),s(),i(l),delete u.addTest,delete u.addAsyncTest;for(var y=0;y<Modernizr._q.length;y++)Modernizr._q[y]();e.Modernizr=Modernizr}(window,document);
var mobileMenu = function() {
    
    $(document).on("click", ".nd-site-header__nav-trigger", function(){
        $(".menu").toggleClass("nav--mobile");
        $(this).toggleClass("close");
    })

    if($(".nd-site-header__nav-trigger").hasClass("close")) {
        $(document).on("click", "body", function() {
            $(this).trigger("click");
        })
    }
}

var main = function() {
    //WebFont.load({
    //    google: {
    //      families: ['Yellowtail', 'Source Sans Pro:400,600']
     //   }

     //   custom: {
     //       families: ['League Gothic']
     //   }
    //});

    var viewport = $(window).width();

	if (Modernizr.touch) {
        // handle the adding of hover class when clicked
        $("figure").click(function(e){
            if (!$(this).hasClass("hover")) {
                $(this).addClass("hover");
            }
        });
        // handle the closing of the overlay
        $(".mouse-tap-overlay").click(function(e){
            e.preventDefault();
            e.stopPropagation();
            if ($(this).hasClass("hover")) {
                $(this).removeClass("hover");
            }
        });
    } else {

	// handle the mouseenter functionality
    $("figure").mouseenter(function(){
        $(this).addClass("hover");
    })
        // handle the mouseleave functionality
        $(".mouse-tap-overlay").mouseleave(function(){
            $("figure").removeClass("hover");
        });
    }


    if (viewport < 750) {
		$('.nd-site-footer__social').removeClass("five columns"); // change the Skeleton class
		$('.nd-site-footer__contact').removeClass("five columns");
        $('.nd-site-footer__detail').removeClass("two columns");
	}

}

$(document).ready(function(){
	main();
    mobileMenu();
});

$(window).resize(function() {
    main();
    mobileMenu()
});
/*! modernizr 3.1.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-pointerevents-touchevents !*/
!function(e,n,t){function o(e,n){return typeof e===n}function s(){var e,n,t,s,i,a,r;for(var f in d)if(d.hasOwnProperty(f)){if(e=[],n=d[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=o(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)a=e[i],r=a.split("."),1===r.length?Modernizr[r[0]]=s:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=s),l.push((s?"":"no-")+r.join("-"))}}function i(e){var n=c.className,t=Modernizr._config.classPrefix||"";if(p&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),p?c.className.baseVal=n:c.className=n)}function a(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):p?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function r(){var e=n.body;return e||(e=a(p?"svg":"body"),e.fake=!0),e}function f(e,t,o,s){var i,f,l,d,u="modernizr",p=a("div"),v=r();if(parseInt(o,10))for(;o--;)l=a("div"),l.id=s?s[o]:u+(o+1),p.appendChild(l);return i=a("style"),i.type="text/css",i.id="s"+u,(v.fake?v:p).appendChild(i),v.appendChild(p),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),p.id=u,v.fake&&(v.style.background="",v.style.overflow="hidden",d=c.style.overflow,c.style.overflow="hidden",c.appendChild(v)),f=t(p,e),v.fake?(v.parentNode.removeChild(v),c.style.overflow=d,c.offsetHeight):p.parentNode.removeChild(p),!!f}var l=[],d=[],u={_version:"3.1.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){d.push({name:e,fn:n,options:t})},addAsyncTest:function(e){d.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=u,Modernizr=new Modernizr;var c=n.documentElement,p="svg"===c.nodeName.toLowerCase(),v=u._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];u._prefixes=v;var h="Moz O ms Webkit",m=u._config.usePrefixes?h.toLowerCase().split(" "):[];u._domPrefixes=m;var g=function(e){function t(n,t){var s;return n?(t&&"string"!=typeof t||(t=a(t||"div")),n="on"+n,s=n in t,!s&&o&&(t.setAttribute||(t=a("div")),t.setAttribute(n,""),s="function"==typeof t[n],t[n]!==e&&(t[n]=e),t.removeAttribute(n)),s):!1}var o=!("onblur"in n.documentElement);return t}();u.hasEvent=g,Modernizr.addTest("pointerevents",function(){var e=!1,n=m.length;for(e=Modernizr.hasEvent("pointerdown");n--&&!e;)g(m[n]+"pointerdown")&&(e=!0);return e});var w=u.testStyles=f;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",v.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");w(o,function(e){t=9===e.offsetTop})}return t}),s(),i(l),delete u.addTest,delete u.addAsyncTest;for(var y=0;y<Modernizr._q.length;y++)Modernizr._q[y]();e.Modernizr=Modernizr}(window,document);
var mobileMenu = function() {
    
    $(document).on("click", ".nd-site-header__nav-trigger", function(){
        $(".menu").toggleClass("nav--mobile");
        $(this).toggleClass("close");
    })

    if($(".nd-site-header__nav-trigger").hasClass("close")) {
        $(document).on("click", "body", function() {
            $(this).trigger("click");
        })
    }
}

var main = function() {
    //WebFont.load({
    //    google: {
    //      families: ['Yellowtail', 'Source Sans Pro:400,600']
     //   }

     //   custom: {
     //       families: ['League Gothic']
     //   }
    //});

    var viewport = $(window).width();

	if (Modernizr.touch) {
        // handle the adding of hover class when clicked
        $("figure").click(function(e){
            if (!$(this).hasClass("hover")) {
                $(this).addClass("hover");
            }
        });
        // handle the closing of the overlay
        $(".mouse-tap-overlay").click(function(e){
            e.preventDefault();
            e.stopPropagation();
            if ($(this).hasClass("hover")) {
                $(this).removeClass("hover");
            }
        });
    } else {

	// handle the mouseenter functionality
    $("figure").mouseenter(function(){
        $(this).addClass("hover");
    })
        // handle the mouseleave functionality
        $(".mouse-tap-overlay").mouseleave(function(){
            $("figure").removeClass("hover");
        });
    }


    if (viewport < 750) {
		$('.nd-site-footer__social').removeClass("five columns"); // change the Skeleton class
		$('.nd-site-footer__contact').removeClass("five columns");
        $('.nd-site-footer__detail').removeClass("two columns");
	}

}

$(document).ready(function(){
	main();
    mobileMenu();
});

$(window).resize(function() {
    main();
    mobileMenu()
});
/*! modernizr 3.1.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-pointerevents-touchevents !*/
!function(e,n,t){function o(e,n){return typeof e===n}function s(){var e,n,t,s,i,a,r;for(var f in d)if(d.hasOwnProperty(f)){if(e=[],n=d[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=o(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)a=e[i],r=a.split("."),1===r.length?Modernizr[r[0]]=s:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=s),l.push((s?"":"no-")+r.join("-"))}}function i(e){var n=c.className,t=Modernizr._config.classPrefix||"";if(p&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),p?c.className.baseVal=n:c.className=n)}function a(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):p?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function r(){var e=n.body;return e||(e=a(p?"svg":"body"),e.fake=!0),e}function f(e,t,o,s){var i,f,l,d,u="modernizr",p=a("div"),v=r();if(parseInt(o,10))for(;o--;)l=a("div"),l.id=s?s[o]:u+(o+1),p.appendChild(l);return i=a("style"),i.type="text/css",i.id="s"+u,(v.fake?v:p).appendChild(i),v.appendChild(p),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),p.id=u,v.fake&&(v.style.background="",v.style.overflow="hidden",d=c.style.overflow,c.style.overflow="hidden",c.appendChild(v)),f=t(p,e),v.fake?(v.parentNode.removeChild(v),c.style.overflow=d,c.offsetHeight):p.parentNode.removeChild(p),!!f}var l=[],d=[],u={_version:"3.1.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){d.push({name:e,fn:n,options:t})},addAsyncTest:function(e){d.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=u,Modernizr=new Modernizr;var c=n.documentElement,p="svg"===c.nodeName.toLowerCase(),v=u._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];u._prefixes=v;var h="Moz O ms Webkit",m=u._config.usePrefixes?h.toLowerCase().split(" "):[];u._domPrefixes=m;var g=function(e){function t(n,t){var s;return n?(t&&"string"!=typeof t||(t=a(t||"div")),n="on"+n,s=n in t,!s&&o&&(t.setAttribute||(t=a("div")),t.setAttribute(n,""),s="function"==typeof t[n],t[n]!==e&&(t[n]=e),t.removeAttribute(n)),s):!1}var o=!("onblur"in n.documentElement);return t}();u.hasEvent=g,Modernizr.addTest("pointerevents",function(){var e=!1,n=m.length;for(e=Modernizr.hasEvent("pointerdown");n--&&!e;)g(m[n]+"pointerdown")&&(e=!0);return e});var w=u.testStyles=f;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",v.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");w(o,function(e){t=9===e.offsetTop})}return t}),s(),i(l),delete u.addTest,delete u.addAsyncTest;for(var y=0;y<Modernizr._q.length;y++)Modernizr._q[y]();e.Modernizr=Modernizr}(window,document);
var mobileMenu = function() {
    
    $(document).on("click", ".nd-site-header__nav-trigger", function(){
        $(".menu").toggleClass("nav--mobile");
        $(this).toggleClass("close");
    })

    if($(".nd-site-header__nav-trigger").hasClass("close")) {
        $(document).on("click", "body", function() {
            $(this).trigger("click");
        })
    }
}

var main = function() {
    //WebFont.load({
    //    google: {
    //      families: ['Yellowtail', 'Source Sans Pro:400,600']
     //   }

     //   custom: {
     //       families: ['League Gothic']
     //   }
    //});

    var viewport = $(window).width();

	if (Modernizr.touch) {
        // handle the adding of hover class when clicked
        $("figure").click(function(e){
            if (!$(this).hasClass("hover")) {
                $(this).addClass("hover");
            }
        });
        // handle the closing of the overlay
        $(".mouse-tap-overlay").click(function(e){
            e.preventDefault();
            e.stopPropagation();
            if ($(this).hasClass("hover")) {
                $(this).removeClass("hover");
            }
        });
    } else {

	// handle the mouseenter functionality
    $("figure").mouseenter(function(){
        $(this).addClass("hover");
    })
        // handle the mouseleave functionality
        $(".mouse-tap-overlay").mouseleave(function(){
            $("figure").removeClass("hover");
        });
    }


    if (viewport < 750) {
		$('.nd-site-footer__social').removeClass("five columns"); // change the Skeleton class
		$('.nd-site-footer__contact').removeClass("five columns");
        $('.nd-site-footer__detail').removeClass("two columns");
	}

}

$(document).ready(function(){
	main();
    mobileMenu();
});

$(window).resize(function() {
    main();
    mobileMenu()
});
/*! modernizr 3.1.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-pointerevents-touchevents !*/
!function(e,n,t){function o(e,n){return typeof e===n}function s(){var e,n,t,s,i,a,r;for(var f in d)if(d.hasOwnProperty(f)){if(e=[],n=d[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=o(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)a=e[i],r=a.split("."),1===r.length?Modernizr[r[0]]=s:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=s),l.push((s?"":"no-")+r.join("-"))}}function i(e){var n=c.className,t=Modernizr._config.classPrefix||"";if(p&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),p?c.className.baseVal=n:c.className=n)}function a(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):p?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function r(){var e=n.body;return e||(e=a(p?"svg":"body"),e.fake=!0),e}function f(e,t,o,s){var i,f,l,d,u="modernizr",p=a("div"),v=r();if(parseInt(o,10))for(;o--;)l=a("div"),l.id=s?s[o]:u+(o+1),p.appendChild(l);return i=a("style"),i.type="text/css",i.id="s"+u,(v.fake?v:p).appendChild(i),v.appendChild(p),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),p.id=u,v.fake&&(v.style.background="",v.style.overflow="hidden",d=c.style.overflow,c.style.overflow="hidden",c.appendChild(v)),f=t(p,e),v.fake?(v.parentNode.removeChild(v),c.style.overflow=d,c.offsetHeight):p.parentNode.removeChild(p),!!f}var l=[],d=[],u={_version:"3.1.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){d.push({name:e,fn:n,options:t})},addAsyncTest:function(e){d.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=u,Modernizr=new Modernizr;var c=n.documentElement,p="svg"===c.nodeName.toLowerCase(),v=u._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];u._prefixes=v;var h="Moz O ms Webkit",m=u._config.usePrefixes?h.toLowerCase().split(" "):[];u._domPrefixes=m;var g=function(e){function t(n,t){var s;return n?(t&&"string"!=typeof t||(t=a(t||"div")),n="on"+n,s=n in t,!s&&o&&(t.setAttribute||(t=a("div")),t.setAttribute(n,""),s="function"==typeof t[n],t[n]!==e&&(t[n]=e),t.removeAttribute(n)),s):!1}var o=!("onblur"in n.documentElement);return t}();u.hasEvent=g,Modernizr.addTest("pointerevents",function(){var e=!1,n=m.length;for(e=Modernizr.hasEvent("pointerdown");n--&&!e;)g(m[n]+"pointerdown")&&(e=!0);return e});var w=u.testStyles=f;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",v.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");w(o,function(e){t=9===e.offsetTop})}return t}),s(),i(l),delete u.addTest,delete u.addAsyncTest;for(var y=0;y<Modernizr._q.length;y++)Modernizr._q[y]();e.Modernizr=Modernizr}(window,document);
var mobileMenu=function(){$(document).on("click",".nd-site-header__nav-trigger",function(){$(".menu").toggleClass("nav--mobile"),$(this).toggleClass("close")}),$(".nd-site-header__nav-trigger").hasClass("close")&&$(document).on("click","body",function(){$(this).trigger("click")})},main=function(){var e=$(window).width();Modernizr.touch?($("figure").click(function(e){$(this).hasClass("hover")||$(this).addClass("hover")}),$(".mouse-tap-overlay").click(function(e){e.preventDefault(),e.stopPropagation(),$(this).hasClass("hover")&&$(this).removeClass("hover")})):($("figure").mouseenter(function(){$(this).addClass("hover")}),$(".mouse-tap-overlay").mouseleave(function(){$("figure").removeClass("hover")})),e<750&&($(".nd-site-footer__social").removeClass("five columns"),$(".nd-site-footer__contact").removeClass("five columns"),$(".nd-site-footer__detail").removeClass("two columns"))};$(document).ready(function(){main(),mobileMenu()}),$(window).resize(function(){main(),mobileMenu()}),function(e,n,o){function t(e,n){return typeof e===n}function s(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):u?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function i(){var e=n.body;return e||(e=s(u?"svg":"body"),e.fake=!0),e}var a=[],r=[],l={_version:"3.1.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var o=this;setTimeout(function(){n(o[e])},0)},addTest:function(e,n,o){r.push({name:e,fn:n,options:o})},addAsyncTest:function(e){r.push({name:null,fn:e})}},c=function(){};c.prototype=l,c=new c;var f=n.documentElement,u="svg"===f.nodeName.toLowerCase(),d=l._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];l._prefixes=d;var v=l._config.usePrefixes?"Moz O ms Webkit".toLowerCase().split(" "):[];l._domPrefixes=v;var h=function(e){var o=!("onblur"in n.documentElement);return function(n,t){var i;return!!n&&(t&&"string"!=typeof t||(t=s(t||"div")),n="on"+n,!(i=n in t)&&o&&(t.setAttribute||(t=s("div")),t.setAttribute(n,""),i="function"==typeof t[n],t[n]!==e&&(t[n]=e),t.removeAttribute(n)),i)}}();l.hasEvent=h,c.addTest("pointerevents",function(){var e=!1,n=v.length;for(e=c.hasEvent("pointerdown");n--&&!e;)h(v[n]+"pointerdown")&&(e=!0);return e});var m=l.testStyles=function(e,o,t,a){var r,l,c,u,d="modernizr",v=s("div"),h=i();if(parseInt(t,10))for(;t--;)c=s("div"),c.id=a?a[t]:d+(t+1),v.appendChild(c);return r=s("style"),r.type="text/css",r.id="s"+d,(h.fake?h:v).appendChild(r),h.appendChild(v),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(n.createTextNode(e)),v.id=d,h.fake&&(h.style.background="",h.style.overflow="hidden",u=f.style.overflow,f.style.overflow="hidden",f.appendChild(h)),l=o(v,e),h.fake?(h.parentNode.removeChild(h),f.style.overflow=u,f.offsetHeight):v.parentNode.removeChild(v),!!l};c.addTest("touchevents",function(){var o;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)o=!0;else{var t=["@media (",d.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");m(t,function(e){o=9===e.offsetTop})}return o}),function(){var e,n,o,s,i,l,f;for(var u in r)if(r.hasOwnProperty(u)){if(e=[],(n=r[u]).name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(o=0;o<n.options.aliases.length;o++)e.push(n.options.aliases[o].toLowerCase());for(s=t(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)l=e[i],1===(f=l.split(".")).length?c[f[0]]=s:(!c[f[0]]||c[f[0]]instanceof Boolean||(c[f[0]]=new Boolean(c[f[0]])),c[f[0]][f[1]]=s),a.push((s?"":"no-")+f.join("-"))}}(),function(e){var n=f.className,o=c._config.classPrefix||"";if(u&&(n=n.baseVal),c._config.enableJSClass){var t=new RegExp("(^|\\s)"+o+"no-js(\\s|$)");n=n.replace(t,"$1"+o+"js$2")}c._config.enableClasses&&(n+=" "+o+e.join(" "+o),u?f.className.baseVal=n:f.className=n)}(a),delete l.addTest,delete l.addAsyncTest;for(var p=0;p<c._q.length;p++)c._q[p]();e.Modernizr=c}(window,document);var mobileMenu=function(){$(document).on("click",".nd-site-header__nav-trigger",function(){$(".menu").toggleClass("nav--mobile"),$(this).toggleClass("close")}),$(".nd-site-header__nav-trigger").hasClass("close")&&$(document).on("click","body",function(){$(this).trigger("click")})},main=function(){var e=$(window).width();Modernizr.touch?($("figure").click(function(e){$(this).hasClass("hover")||$(this).addClass("hover")}),$(".mouse-tap-overlay").click(function(e){e.preventDefault(),e.stopPropagation(),$(this).hasClass("hover")&&$(this).removeClass("hover")})):($("figure").mouseenter(function(){$(this).addClass("hover")}),$(".mouse-tap-overlay").mouseleave(function(){$("figure").removeClass("hover")})),e<750&&($(".nd-site-footer__social").removeClass("five columns"),$(".nd-site-footer__contact").removeClass("five columns"),$(".nd-site-footer__detail").removeClass("two columns"))};$(document).ready(function(){main(),mobileMenu()}),$(window).resize(function(){main(),mobileMenu()}),function(e,n,o){function t(e,n){return typeof e===n}function s(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):u?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function i(){var e=n.body;return e||(e=s(u?"svg":"body"),e.fake=!0),e}var a=[],r=[],l={_version:"3.1.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var o=this;setTimeout(function(){n(o[e])},0)},addTest:function(e,n,o){r.push({name:e,fn:n,options:o})},addAsyncTest:function(e){r.push({name:null,fn:e})}},c=function(){};c.prototype=l,c=new c;var f=n.documentElement,u="svg"===f.nodeName.toLowerCase(),d=l._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];l._prefixes=d;var v=l._config.usePrefixes?"Moz O ms Webkit".toLowerCase().split(" "):[];l._domPrefixes=v;var h=function(e){var o=!("onblur"in n.documentElement);return function(n,t){var i;return!!n&&(t&&"string"!=typeof t||(t=s(t||"div")),n="on"+n,!(i=n in t)&&o&&(t.setAttribute||(t=s("div")),t.setAttribute(n,""),i="function"==typeof t[n],t[n]!==e&&(t[n]=e),t.removeAttribute(n)),i)}}();l.hasEvent=h,c.addTest("pointerevents",function(){var e=!1,n=v.length;for(e=c.hasEvent("pointerdown");n--&&!e;)h(v[n]+"pointerdown")&&(e=!0);return e});var m=l.testStyles=function(e,o,t,a){var r,l,c,u,d="modernizr",v=s("div"),h=i();if(parseInt(t,10))for(;t--;)c=s("div"),c.id=a?a[t]:d+(t+1),v.appendChild(c);return r=s("style"),r.type="text/css",r.id="s"+d,(h.fake?h:v).appendChild(r),h.appendChild(v),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(n.createTextNode(e)),v.id=d,h.fake&&(h.style.background="",h.style.overflow="hidden",u=f.style.overflow,f.style.overflow="hidden",f.appendChild(h)),l=o(v,e),h.fake?(h.parentNode.removeChild(h),f.style.overflow=u,f.offsetHeight):v.parentNode.removeChild(v),!!l};c.addTest("touchevents",function(){var o;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)o=!0;else{var t=["@media (",d.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");m(t,function(e){o=9===e.offsetTop})}return o}),function(){var e,n,o,s,i,l,f;for(var u in r)if(r.hasOwnProperty(u)){if(e=[],(n=r[u]).name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(o=0;o<n.options.aliases.length;o++)e.push(n.options.aliases[o].toLowerCase());for(s=t(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)l=e[i],1===(f=l.split(".")).length?c[f[0]]=s:(!c[f[0]]||c[f[0]]instanceof Boolean||(c[f[0]]=new Boolean(c[f[0]])),c[f[0]][f[1]]=s),a.push((s?"":"no-")+f.join("-"))}}(),function(e){var n=f.className,o=c._config.classPrefix||"";if(u&&(n=n.baseVal),c._config.enableJSClass){var t=new RegExp("(^|\\s)"+o+"no-js(\\s|$)");n=n.replace(t,"$1"+o+"js$2")}c._config.enableClasses&&(n+=" "+o+e.join(" "+o),u?f.className.baseVal=n:f.className=n)}(a),delete l.addTest,delete l.addAsyncTest;for(var p=0;p<c._q.length;p++)c._q[p]();e.Modernizr=c}(window,document);var mobileMenu=function(){$(document).on("click",".nd-site-header__nav-trigger",function(){$(".menu").toggleClass("nav--mobile"),$(this).toggleClass("close")}),$(".nd-site-header__nav-trigger").hasClass("close")&&$(document).on("click","body",function(){$(this).trigger("click")})},main=function(){var e=$(window).width();Modernizr.touch?($("figure").click(function(e){$(this).hasClass("hover")||$(this).addClass("hover")}),$(".mouse-tap-overlay").click(function(e){e.preventDefault(),e.stopPropagation(),$(this).hasClass("hover")&&$(this).removeClass("hover")})):($("figure").mouseenter(function(){$(this).addClass("hover")}),$(".mouse-tap-overlay").mouseleave(function(){$("figure").removeClass("hover")})),e<750&&($(".nd-site-footer__social").removeClass("five columns"),$(".nd-site-footer__contact").removeClass("five columns"),$(".nd-site-footer__detail").removeClass("two columns"))};$(document).ready(function(){main(),mobileMenu()}),$(window).resize(function(){main(),mobileMenu()}),function(e,n,o){function t(e,n){return typeof e===n}function s(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):u?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function i(){var e=n.body;return e||(e=s(u?"svg":"body"),e.fake=!0),e}var a=[],r=[],l={_version:"3.1.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var o=this;setTimeout(function(){n(o[e])},0)},addTest:function(e,n,o){r.push({name:e,fn:n,options:o})},addAsyncTest:function(e){r.push({name:null,fn:e})}},c=function(){};c.prototype=l,c=new c;var f=n.documentElement,u="svg"===f.nodeName.toLowerCase(),d=l._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];l._prefixes=d;var v=l._config.usePrefixes?"Moz O ms Webkit".toLowerCase().split(" "):[];l._domPrefixes=v;var h=function(e){var o=!("onblur"in n.documentElement);return function(n,t){var i;return!!n&&(t&&"string"!=typeof t||(t=s(t||"div")),n="on"+n,!(i=n in t)&&o&&(t.setAttribute||(t=s("div")),t.setAttribute(n,""),i="function"==typeof t[n],t[n]!==e&&(t[n]=e),t.removeAttribute(n)),i)}}();l.hasEvent=h,c.addTest("pointerevents",function(){var e=!1,n=v.length;for(e=c.hasEvent("pointerdown");n--&&!e;)h(v[n]+"pointerdown")&&(e=!0);return e});var m=l.testStyles=function(e,o,t,a){var r,l,c,u,d="modernizr",v=s("div"),h=i();if(parseInt(t,10))for(;t--;)c=s("div"),c.id=a?a[t]:d+(t+1),v.appendChild(c);return r=s("style"),r.type="text/css",r.id="s"+d,(h.fake?h:v).appendChild(r),h.appendChild(v),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(n.createTextNode(e)),v.id=d,h.fake&&(h.style.background="",h.style.overflow="hidden",u=f.style.overflow,f.style.overflow="hidden",f.appendChild(h)),l=o(v,e),h.fake?(h.parentNode.removeChild(h),f.style.overflow=u,f.offsetHeight):v.parentNode.removeChild(v),!!l};c.addTest("touchevents",function(){var o;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)o=!0;else{var t=["@media (",d.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");m(t,function(e){o=9===e.offsetTop})}return o}),function(){var e,n,o,s,i,l,f;for(var u in r)if(r.hasOwnProperty(u)){if(e=[],(n=r[u]).name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(o=0;o<n.options.aliases.length;o++)e.push(n.options.aliases[o].toLowerCase());for(s=t(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)l=e[i],1===(f=l.split(".")).length?c[f[0]]=s:(!c[f[0]]||c[f[0]]instanceof Boolean||(c[f[0]]=new Boolean(c[f[0]])),c[f[0]][f[1]]=s),a.push((s?"":"no-")+f.join("-"))}}(),function(e){var n=f.className,o=c._config.classPrefix||"";if(u&&(n=n.baseVal),c._config.enableJSClass){var t=new RegExp("(^|\\s)"+o+"no-js(\\s|$)");n=n.replace(t,"$1"+o+"js$2")}c._config.enableClasses&&(n+=" "+o+e.join(" "+o),u?f.className.baseVal=n:f.className=n)}(a),delete l.addTest,delete l.addAsyncTest;for(var p=0;p<c._q.length;p++)c._q[p]();e.Modernizr=c}(window,document);
var mobileMenu = function() {
    
    $(document).on("click", ".nd-site-header__nav-trigger", function(){
        $(".menu").toggleClass("nav--mobile");
        $(this).toggleClass("close");
    })

    if($(".nd-site-header__nav-trigger").hasClass("close")) {
        $(document).on("click", "body", function() {
            $(this).trigger("click");
        })
    }
}

var main = function() {
    //WebFont.load({
    //    google: {
    //      families: ['Yellowtail', 'Source Sans Pro:400,600']
     //   }

     //   custom: {
     //       families: ['League Gothic']
     //   }
    //});

    var viewport = $(window).width();

	if (Modernizr.touch) {
        // handle the adding of hover class when clicked
        $("figure").click(function(e){
            if (!$(this).hasClass("hover")) {
                $(this).addClass("hover");
            }
        });
        // handle the closing of the overlay
        $(".mouse-tap-overlay").click(function(e){
            e.preventDefault();
            e.stopPropagation();
            if ($(this).hasClass("hover")) {
                $(this).removeClass("hover");
            }
        });
    } else {

	// handle the mouseenter functionality
    $("figure").mouseenter(function(){
        $(this).addClass("hover");
    })
        // handle the mouseleave functionality
        $(".mouse-tap-overlay").mouseleave(function(){
            $("figure").removeClass("hover");
        });
    }


    if (viewport < 750) {
		$('.nd-site-footer__social').removeClass("five columns"); // change the Skeleton class
		$('.nd-site-footer__contact').removeClass("five columns");
        $('.nd-site-footer__detail').removeClass("two columns");
	}

}

$(document).ready(function(){
	main();
    mobileMenu();
});

$(window).resize(function() {
    main();
    mobileMenu()
});
!function(e,n,o){function t(e,n){return typeof e===n}function s(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):u?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function i(){var e=n.body;return e||(e=s(u?"svg":"body"),e.fake=!0),e}var a=[],r=[],l={_version:"3.1.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var o=this;setTimeout(function(){n(o[e])},0)},addTest:function(e,n,o){r.push({name:e,fn:n,options:o})},addAsyncTest:function(e){r.push({name:null,fn:e})}},c=function(){};c.prototype=l,c=new c;var f=n.documentElement,u="svg"===f.nodeName.toLowerCase(),d=l._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];l._prefixes=d;var v=l._config.usePrefixes?"Moz O ms Webkit".toLowerCase().split(" "):[];l._domPrefixes=v;var h=function(e){var o=!("onblur"in n.documentElement);return function(n,t){var i;return!!n&&(t&&"string"!=typeof t||(t=s(t||"div")),n="on"+n,!(i=n in t)&&o&&(t.setAttribute||(t=s("div")),t.setAttribute(n,""),i="function"==typeof t[n],t[n]!==e&&(t[n]=e),t.removeAttribute(n)),i)}}();l.hasEvent=h,c.addTest("pointerevents",function(){var e=!1,n=v.length;for(e=c.hasEvent("pointerdown");n--&&!e;)h(v[n]+"pointerdown")&&(e=!0);return e});var m=l.testStyles=function(e,o,t,a){var r,l,c,u,d="modernizr",v=s("div"),h=i();if(parseInt(t,10))for(;t--;)c=s("div"),c.id=a?a[t]:d+(t+1),v.appendChild(c);return r=s("style"),r.type="text/css",r.id="s"+d,(h.fake?h:v).appendChild(r),h.appendChild(v),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(n.createTextNode(e)),v.id=d,h.fake&&(h.style.background="",h.style.overflow="hidden",u=f.style.overflow,f.style.overflow="hidden",f.appendChild(h)),l=o(v,e),h.fake?(h.parentNode.removeChild(h),f.style.overflow=u,f.offsetHeight):v.parentNode.removeChild(v),!!l};c.addTest("touchevents",function(){var o;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)o=!0;else{var t=["@media (",d.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");m(t,function(e){o=9===e.offsetTop})}return o}),function(){var e,n,o,s,i,l,f;for(var u in r)if(r.hasOwnProperty(u)){if(e=[],(n=r[u]).name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(o=0;o<n.options.aliases.length;o++)e.push(n.options.aliases[o].toLowerCase());for(s=t(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)l=e[i],1===(f=l.split(".")).length?c[f[0]]=s:(!c[f[0]]||c[f[0]]instanceof Boolean||(c[f[0]]=new Boolean(c[f[0]])),c[f[0]][f[1]]=s),a.push((s?"":"no-")+f.join("-"))}}(),function(e){var n=f.className,o=c._config.classPrefix||"";if(u&&(n=n.baseVal),c._config.enableJSClass){var t=new RegExp("(^|\\s)"+o+"no-js(\\s|$)");n=n.replace(t,"$1"+o+"js$2")}c._config.enableClasses&&(n+=" "+o+e.join(" "+o),u?f.className.baseVal=n:f.className=n)}(a),delete l.addTest,delete l.addAsyncTest;for(var p=0;p<c._q.length;p++)c._q[p]();e.Modernizr=c}(window,document);var mobileMenu=function(){$(document).on("click",".nd-site-header__nav-trigger",function(){$(".menu").toggleClass("nav--mobile"),$(this).toggleClass("close")}),$(".nd-site-header__nav-trigger").hasClass("close")&&$(document).on("click","body",function(){$(this).trigger("click")})},main=function(){var e=$(window).width();Modernizr.touch?($("figure").click(function(e){$(this).hasClass("hover")||$(this).addClass("hover")}),$(".mouse-tap-overlay").click(function(e){e.preventDefault(),e.stopPropagation(),$(this).hasClass("hover")&&$(this).removeClass("hover")})):($("figure").mouseenter(function(){$(this).addClass("hover")}),$(".mouse-tap-overlay").mouseleave(function(){$("figure").removeClass("hover")})),e<750&&($(".nd-site-footer__social").removeClass("five columns"),$(".nd-site-footer__contact").removeClass("five columns"),$(".nd-site-footer__detail").removeClass("two columns"))};$(document).ready(function(){main(),mobileMenu()}),$(window).resize(function(){main(),mobileMenu()}),function(e,n,o){function t(e,n){return typeof e===n}function s(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):u?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function i(){var e=n.body;return e||(e=s(u?"svg":"body"),e.fake=!0),e}var a=[],r=[],l={_version:"3.1.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var o=this;setTimeout(function(){n(o[e])},0)},addTest:function(e,n,o){r.push({name:e,fn:n,options:o})},addAsyncTest:function(e){r.push({name:null,fn:e})}},c=function(){};c.prototype=l,c=new c;var f=n.documentElement,u="svg"===f.nodeName.toLowerCase(),d=l._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];l._prefixes=d;var v=l._config.usePrefixes?"Moz O ms Webkit".toLowerCase().split(" "):[];l._domPrefixes=v;var h=function(e){var o=!("onblur"in n.documentElement);return function(n,t){var i;return!!n&&(t&&"string"!=typeof t||(t=s(t||"div")),n="on"+n,!(i=n in t)&&o&&(t.setAttribute||(t=s("div")),t.setAttribute(n,""),i="function"==typeof t[n],t[n]!==e&&(t[n]=e),t.removeAttribute(n)),i)}}();l.hasEvent=h,c.addTest("pointerevents",function(){var e=!1,n=v.length;for(e=c.hasEvent("pointerdown");n--&&!e;)h(v[n]+"pointerdown")&&(e=!0);return e});var m=l.testStyles=function(e,o,t,a){var r,l,c,u,d="modernizr",v=s("div"),h=i();if(parseInt(t,10))for(;t--;)c=s("div"),c.id=a?a[t]:d+(t+1),v.appendChild(c);return r=s("style"),r.type="text/css",r.id="s"+d,(h.fake?h:v).appendChild(r),h.appendChild(v),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(n.createTextNode(e)),v.id=d,h.fake&&(h.style.background="",h.style.overflow="hidden",u=f.style.overflow,f.style.overflow="hidden",f.appendChild(h)),l=o(v,e),h.fake?(h.parentNode.removeChild(h),f.style.overflow=u,f.offsetHeight):v.parentNode.removeChild(v),!!l};c.addTest("touchevents",function(){var o;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)o=!0;else{var t=["@media (",d.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");m(t,function(e){o=9===e.offsetTop})}return o}),function(){var e,n,o,s,i,l,f;for(var u in r)if(r.hasOwnProperty(u)){if(e=[],(n=r[u]).name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(o=0;o<n.options.aliases.length;o++)e.push(n.options.aliases[o].toLowerCase());for(s=t(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)l=e[i],1===(f=l.split(".")).length?c[f[0]]=s:(!c[f[0]]||c[f[0]]instanceof Boolean||(c[f[0]]=new Boolean(c[f[0]])),c[f[0]][f[1]]=s),a.push((s?"":"no-")+f.join("-"))}}(),function(e){var n=f.className,o=c._config.classPrefix||"";if(u&&(n=n.baseVal),c._config.enableJSClass){var t=new RegExp("(^|\\s)"+o+"no-js(\\s|$)");n=n.replace(t,"$1"+o+"js$2")}c._config.enableClasses&&(n+=" "+o+e.join(" "+o),u?f.className.baseVal=n:f.className=n)}(a),delete l.addTest,delete l.addAsyncTest;for(var p=0;p<c._q.length;p++)c._q[p]();e.Modernizr=c}(window,document);var mobileMenu=function(){$(document).on("click",".nd-site-header__nav-trigger",function(){$(".menu").toggleClass("nav--mobile"),$(this).toggleClass("close")}),$(".nd-site-header__nav-trigger").hasClass("close")&&$(document).on("click","body",function(){$(this).trigger("click")})},main=function(){var e=$(window).width();Modernizr.touch?($("figure").click(function(e){$(this).hasClass("hover")||$(this).addClass("hover")}),$(".mouse-tap-overlay").click(function(e){e.preventDefault(),e.stopPropagation(),$(this).hasClass("hover")&&$(this).removeClass("hover")})):($("figure").mouseenter(function(){$(this).addClass("hover")}),$(".mouse-tap-overlay").mouseleave(function(){$("figure").removeClass("hover")})),e<750&&($(".nd-site-footer__social").removeClass("five columns"),$(".nd-site-footer__contact").removeClass("five columns"),$(".nd-site-footer__detail").removeClass("two columns"))};$(document).ready(function(){main(),mobileMenu()}),$(window).resize(function(){main(),mobileMenu()}),function(e,n,o){function t(e,n){return typeof e===n}function s(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):u?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function i(){var e=n.body;return e||(e=s(u?"svg":"body"),e.fake=!0),e}var a=[],r=[],l={_version:"3.1.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var o=this;setTimeout(function(){n(o[e])},0)},addTest:function(e,n,o){r.push({name:e,fn:n,options:o})},addAsyncTest:function(e){r.push({name:null,fn:e})}},c=function(){};c.prototype=l,c=new c;var f=n.documentElement,u="svg"===f.nodeName.toLowerCase(),d=l._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];l._prefixes=d;var v=l._config.usePrefixes?"Moz O ms Webkit".toLowerCase().split(" "):[];l._domPrefixes=v;var h=function(e){var o=!("onblur"in n.documentElement);return function(n,t){var i;return!!n&&(t&&"string"!=typeof t||(t=s(t||"div")),n="on"+n,!(i=n in t)&&o&&(t.setAttribute||(t=s("div")),t.setAttribute(n,""),i="function"==typeof t[n],t[n]!==e&&(t[n]=e),t.removeAttribute(n)),i)}}();l.hasEvent=h,c.addTest("pointerevents",function(){var e=!1,n=v.length;for(e=c.hasEvent("pointerdown");n--&&!e;)h(v[n]+"pointerdown")&&(e=!0);return e});var m=l.testStyles=function(e,o,t,a){var r,l,c,u,d="modernizr",v=s("div"),h=i();if(parseInt(t,10))for(;t--;)c=s("div"),c.id=a?a[t]:d+(t+1),v.appendChild(c);return r=s("style"),r.type="text/css",r.id="s"+d,(h.fake?h:v).appendChild(r),h.appendChild(v),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(n.createTextNode(e)),v.id=d,h.fake&&(h.style.background="",h.style.overflow="hidden",u=f.style.overflow,f.style.overflow="hidden",f.appendChild(h)),l=o(v,e),h.fake?(h.parentNode.removeChild(h),f.style.overflow=u,f.offsetHeight):v.parentNode.removeChild(v),!!l};c.addTest("touchevents",function(){var o;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)o=!0;else{var t=["@media (",d.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");m(t,function(e){o=9===e.offsetTop})}return o}),function(){var e,n,o,s,i,l,f;for(var u in r)if(r.hasOwnProperty(u)){if(e=[],(n=r[u]).name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(o=0;o<n.options.aliases.length;o++)e.push(n.options.aliases[o].toLowerCase());for(s=t(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)l=e[i],1===(f=l.split(".")).length?c[f[0]]=s:(!c[f[0]]||c[f[0]]instanceof Boolean||(c[f[0]]=new Boolean(c[f[0]])),c[f[0]][f[1]]=s),a.push((s?"":"no-")+f.join("-"))}}(),function(e){var n=f.className,o=c._config.classPrefix||"";if(u&&(n=n.baseVal),c._config.enableJSClass){var t=new RegExp("(^|\\s)"+o+"no-js(\\s|$)");n=n.replace(t,"$1"+o+"js$2")}c._config.enableClasses&&(n+=" "+o+e.join(" "+o),u?f.className.baseVal=n:f.className=n)}(a),delete l.addTest,delete l.addAsyncTest;for(var p=0;p<c._q.length;p++)c._q[p]();e.Modernizr=c}(window,document);var mobileMenu=function(){$(document).on("click",".nd-site-header__nav-trigger",function(){$(".menu").toggleClass("nav--mobile"),$(this).toggleClass("close")}),$(".nd-site-header__nav-trigger").hasClass("close")&&$(document).on("click","body",function(){$(this).trigger("click")})},main=function(){var e=$(window).width();Modernizr.touch?($("figure").click(function(e){$(this).hasClass("hover")||$(this).addClass("hover")}),$(".mouse-tap-overlay").click(function(e){e.preventDefault(),e.stopPropagation(),$(this).hasClass("hover")&&$(this).removeClass("hover")})):($("figure").mouseenter(function(){$(this).addClass("hover")}),$(".mouse-tap-overlay").mouseleave(function(){$("figure").removeClass("hover")})),e<750&&($(".nd-site-footer__social").removeClass("five columns"),$(".nd-site-footer__contact").removeClass("five columns"),$(".nd-site-footer__detail").removeClass("two columns"))};$(document).ready(function(){main(),mobileMenu()}),$(window).resize(function(){main(),mobileMenu()}),function(e,n,o){function t(e,n){return typeof e===n}function s(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):u?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function i(){var e=n.body;return e||(e=s(u?"svg":"body"),e.fake=!0),e}var a=[],r=[],l={_version:"3.1.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var o=this;setTimeout(function(){n(o[e])},0)},addTest:function(e,n,o){r.push({name:e,fn:n,options:o})},addAsyncTest:function(e){r.push({name:null,fn:e})}},c=function(){};c.prototype=l,c=new c;var f=n.documentElement,u="svg"===f.nodeName.toLowerCase(),d=l._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];l._prefixes=d;var v=l._config.usePrefixes?"Moz O ms Webkit".toLowerCase().split(" "):[];l._domPrefixes=v;var h=function(e){var o=!("onblur"in n.documentElement);return function(n,t){var i;return!!n&&(t&&"string"!=typeof t||(t=s(t||"div")),n="on"+n,!(i=n in t)&&o&&(t.setAttribute||(t=s("div")),t.setAttribute(n,""),i="function"==typeof t[n],t[n]!==e&&(t[n]=e),t.removeAttribute(n)),i)}}();l.hasEvent=h,c.addTest("pointerevents",function(){var e=!1,n=v.length;for(e=c.hasEvent("pointerdown");n--&&!e;)h(v[n]+"pointerdown")&&(e=!0);return e});var m=l.testStyles=function(e,o,t,a){var r,l,c,u,d="modernizr",v=s("div"),h=i();if(parseInt(t,10))for(;t--;)c=s("div"),c.id=a?a[t]:d+(t+1),v.appendChild(c);return r=s("style"),r.type="text/css",r.id="s"+d,(h.fake?h:v).appendChild(r),h.appendChild(v),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(n.createTextNode(e)),v.id=d,h.fake&&(h.style.background="",h.style.overflow="hidden",u=f.style.overflow,f.style.overflow="hidden",f.appendChild(h)),l=o(v,e),h.fake?(h.parentNode.removeChild(h),f.style.overflow=u,f.offsetHeight):v.parentNode.removeChild(v),!!l};c.addTest("touchevents",function(){var o;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)o=!0;else{var t=["@media (",d.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");m(t,function(e){o=9===e.offsetTop})}return o}),function(){var e,n,o,s,i,l,f;for(var u in r)if(r.hasOwnProperty(u)){if(e=[],(n=r[u]).name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(o=0;o<n.options.aliases.length;o++)e.push(n.options.aliases[o].toLowerCase());for(s=t(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)l=e[i],1===(f=l.split(".")).length?c[f[0]]=s:(!c[f[0]]||c[f[0]]instanceof Boolean||(c[f[0]]=new Boolean(c[f[0]])),c[f[0]][f[1]]=s),a.push((s?"":"no-")+f.join("-"))}}(),function(e){var n=f.className,o=c._config.classPrefix||"";if(u&&(n=n.baseVal),c._config.enableJSClass){var t=new RegExp("(^|\\s)"+o+"no-js(\\s|$)");n=n.replace(t,"$1"+o+"js$2")}c._config.enableClasses&&(n+=" "+o+e.join(" "+o),u?f.className.baseVal=n:f.className=n)}(a),delete l.addTest,delete l.addAsyncTest;for(var p=0;p<c._q.length;p++)c._q[p]();e.Modernizr=c}(window,document);var mobileMenu=function(){$(document).on("click",".nd-site-header__nav-trigger",function(){$(".menu").toggleClass("nav--mobile"),$(this).toggleClass("close")}),$(".nd-site-header__nav-trigger").hasClass("close")&&$(document).on("click","body",function(){$(this).trigger("click")})},main=function(){var e=$(window).width();Modernizr.touch?($("figure").click(function(e){$(this).hasClass("hover")||$(this).addClass("hover")}),$(".mouse-tap-overlay").click(function(e){e.preventDefault(),e.stopPropagation(),$(this).hasClass("hover")&&$(this).removeClass("hover")})):($("figure").mouseenter(function(){$(this).addClass("hover")}),$(".mouse-tap-overlay").mouseleave(function(){$("figure").removeClass("hover")})),e<750&&($(".nd-site-footer__social").removeClass("five columns"),$(".nd-site-footer__contact").removeClass("five columns"),$(".nd-site-footer__detail").removeClass("two columns"))};$(document).ready(function(){main(),mobileMenu()}),$(window).resize(function(){main(),mobileMenu()}),function(e,n,o){function t(e,n){return typeof e===n}function s(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):u?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function i(){var e=n.body;return e||(e=s(u?"svg":"body"),e.fake=!0),e}var a=[],r=[],l={_version:"3.1.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var o=this;setTimeout(function(){n(o[e])},0)},addTest:function(e,n,o){r.push({name:e,fn:n,options:o})},addAsyncTest:function(e){r.push({name:null,fn:e})}},c=function(){};c.prototype=l,c=new c;var f=n.documentElement,u="svg"===f.nodeName.toLowerCase(),d=l._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];l._prefixes=d;var v=l._config.usePrefixes?"Moz O ms Webkit".toLowerCase().split(" "):[];l._domPrefixes=v;var h=function(e){var o=!("onblur"in n.documentElement);return function(n,t){var i;return!!n&&(t&&"string"!=typeof t||(t=s(t||"div")),n="on"+n,!(i=n in t)&&o&&(t.setAttribute||(t=s("div")),t.setAttribute(n,""),i="function"==typeof t[n],t[n]!==e&&(t[n]=e),t.removeAttribute(n)),i)}}();l.hasEvent=h,c.addTest("pointerevents",function(){var e=!1,n=v.length;for(e=c.hasEvent("pointerdown");n--&&!e;)h(v[n]+"pointerdown")&&(e=!0);return e});var m=l.testStyles=function(e,o,t,a){var r,l,c,u,d="modernizr",v=s("div"),h=i();if(parseInt(t,10))for(;t--;)c=s("div"),c.id=a?a[t]:d+(t+1),v.appendChild(c);return r=s("style"),r.type="text/css",r.id="s"+d,(h.fake?h:v).appendChild(r),h.appendChild(v),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(n.createTextNode(e)),v.id=d,h.fake&&(h.style.background="",h.style.overflow="hidden",u=f.style.overflow,f.style.overflow="hidden",f.appendChild(h)),l=o(v,e),h.fake?(h.parentNode.removeChild(h),f.style.overflow=u,f.offsetHeight):v.parentNode.removeChild(v),!!l};c.addTest("touchevents",function(){var o;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)o=!0;else{var t=["@media (",d.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");m(t,function(e){o=9===e.offsetTop})}return o}),function(){var e,n,o,s,i,l,f;for(var u in r)if(r.hasOwnProperty(u)){if(e=[],(n=r[u]).name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(o=0;o<n.options.aliases.length;o++)e.push(n.options.aliases[o].toLowerCase());for(s=t(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)l=e[i],1===(f=l.split(".")).length?c[f[0]]=s:(!c[f[0]]||c[f[0]]instanceof Boolean||(c[f[0]]=new Boolean(c[f[0]])),c[f[0]][f[1]]=s),a.push((s?"":"no-")+f.join("-"))}}(),function(e){var n=f.className,o=c._config.classPrefix||"";if(u&&(n=n.baseVal),c._config.enableJSClass){var t=new RegExp("(^|\\s)"+o+"no-js(\\s|$)");n=n.replace(t,"$1"+o+"js$2")}c._config.enableClasses&&(n+=" "+o+e.join(" "+o),u?f.className.baseVal=n:f.className=n)}(a),delete l.addTest,delete l.addAsyncTest;for(var p=0;p<c._q.length;p++)c._q[p]();e.Modernizr=c}(window,document);var mobileMenu=function(){$(document).on("click",".nd-site-header__nav-trigger",function(){$(".menu").toggleClass("nav--mobile"),$(this).toggleClass("close")}),$(".nd-site-header__nav-trigger").hasClass("close")&&$(document).on("click","body",function(){$(this).trigger("click")})},main=function(){var e=$(window).width();Modernizr.touch?($("figure").click(function(e){$(this).hasClass("hover")||$(this).addClass("hover")}),$(".mouse-tap-overlay").click(function(e){e.preventDefault(),e.stopPropagation(),$(this).hasClass("hover")&&$(this).removeClass("hover")})):($("figure").mouseenter(function(){$(this).addClass("hover")}),$(".mouse-tap-overlay").mouseleave(function(){$("figure").removeClass("hover")})),e<750&&($(".nd-site-footer__social").removeClass("five columns"),$(".nd-site-footer__contact").removeClass("five columns"),$(".nd-site-footer__detail").removeClass("two columns"))};$(document).ready(function(){main(),mobileMenu()}),$(window).resize(function(){main(),mobileMenu()}),function(e,n,o){function t(e,n){return typeof e===n}function s(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):u?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function i(){var e=n.body;return e||(e=s(u?"svg":"body"),e.fake=!0),e}var a=[],r=[],l={_version:"3.1.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var o=this;setTimeout(function(){n(o[e])},0)},addTest:function(e,n,o){r.push({name:e,fn:n,options:o})},addAsyncTest:function(e){r.push({name:null,fn:e})}},c=function(){};c.prototype=l,c=new c;var f=n.documentElement,u="svg"===f.nodeName.toLowerCase(),d=l._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];l._prefixes=d;var v=l._config.usePrefixes?"Moz O ms Webkit".toLowerCase().split(" "):[];l._domPrefixes=v;var h=function(e){var o=!("onblur"in n.documentElement);return function(n,t){var i;return!!n&&(t&&"string"!=typeof t||(t=s(t||"div")),n="on"+n,!(i=n in t)&&o&&(t.setAttribute||(t=s("div")),t.setAttribute(n,""),i="function"==typeof t[n],t[n]!==e&&(t[n]=e),t.removeAttribute(n)),i)}}();l.hasEvent=h,c.addTest("pointerevents",function(){var e=!1,n=v.length;for(e=c.hasEvent("pointerdown");n--&&!e;)h(v[n]+"pointerdown")&&(e=!0);return e});var m=l.testStyles=function(e,o,t,a){var r,l,c,u,d="modernizr",v=s("div"),h=i();if(parseInt(t,10))for(;t--;)c=s("div"),c.id=a?a[t]:d+(t+1),v.appendChild(c);return r=s("style"),r.type="text/css",r.id="s"+d,(h.fake?h:v).appendChild(r),h.appendChild(v),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(n.createTextNode(e)),v.id=d,h.fake&&(h.style.background="",h.style.overflow="hidden",u=f.style.overflow,f.style.overflow="hidden",f.appendChild(h)),l=o(v,e),h.fake?(h.parentNode.removeChild(h),f.style.overflow=u,f.offsetHeight):v.parentNode.removeChild(v),!!l};c.addTest("touchevents",function(){var o;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)o=!0;else{var t=["@media (",d.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");m(t,function(e){o=9===e.offsetTop})}return o}),function(){var e,n,o,s,i,l,f;for(var u in r)if(r.hasOwnProperty(u)){if(e=[],(n=r[u]).name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(o=0;o<n.options.aliases.length;o++)e.push(n.options.aliases[o].toLowerCase());for(s=t(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)l=e[i],1===(f=l.split(".")).length?c[f[0]]=s:(!c[f[0]]||c[f[0]]instanceof Boolean||(c[f[0]]=new Boolean(c[f[0]])),c[f[0]][f[1]]=s),a.push((s?"":"no-")+f.join("-"))}}(),function(e){var n=f.className,o=c._config.classPrefix||"";if(u&&(n=n.baseVal),c._config.enableJSClass){var t=new RegExp("(^|\\s)"+o+"no-js(\\s|$)");n=n.replace(t,"$1"+o+"js$2")}c._config.enableClasses&&(n+=" "+o+e.join(" "+o),u?f.className.baseVal=n:f.className=n)}(a),delete l.addTest,delete l.addAsyncTest;for(var p=0;p<c._q.length;p++)c._q[p]();e.Modernizr=c}(window,document);var mobileMenu=function(){$(document).on("click",".nd-site-header__nav-trigger",function(){$(".menu").toggleClass("nav--mobile"),$(this).toggleClass("close")}),$(".nd-site-header__nav-trigger").hasClass("close")&&$(document).on("click","body",function(){$(this).trigger("click")})},main=function(){var e=$(window).width();Modernizr.touch?($("figure").click(function(e){$(this).hasClass("hover")||$(this).addClass("hover")}),$(".mouse-tap-overlay").click(function(e){e.preventDefault(),e.stopPropagation(),$(this).hasClass("hover")&&$(this).removeClass("hover")})):($("figure").mouseenter(function(){$(this).addClass("hover")}),$(".mouse-tap-overlay").mouseleave(function(){$("figure").removeClass("hover")})),e<750&&($(".nd-site-footer__social").removeClass("five columns"),$(".nd-site-footer__contact").removeClass("five columns"),$(".nd-site-footer__detail").removeClass("two columns"))};$(document).ready(function(){main(),mobileMenu()}),$(window).resize(function(){main(),mobileMenu()}),function(e,n,o){function t(e,n){return typeof e===n}function s(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):u?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function i(){var e=n.body;return e||(e=s(u?"svg":"body"),e.fake=!0),e}var a=[],r=[],l={_version:"3.1.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var o=this;setTimeout(function(){n(o[e])},0)},addTest:function(e,n,o){r.push({name:e,fn:n,options:o})},addAsyncTest:function(e){r.push({name:null,fn:e})}},c=function(){};c.prototype=l,c=new c;var f=n.documentElement,u="svg"===f.nodeName.toLowerCase(),d=l._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];l._prefixes=d;var v=l._config.usePrefixes?"Moz O ms Webkit".toLowerCase().split(" "):[];l._domPrefixes=v;var h=function(e){var o=!("onblur"in n.documentElement);return function(n,t){var i;return!!n&&(t&&"string"!=typeof t||(t=s(t||"div")),n="on"+n,!(i=n in t)&&o&&(t.setAttribute||(t=s("div")),t.setAttribute(n,""),i="function"==typeof t[n],t[n]!==e&&(t[n]=e),t.removeAttribute(n)),i)}}();l.hasEvent=h,c.addTest("pointerevents",function(){var e=!1,n=v.length;for(e=c.hasEvent("pointerdown");n--&&!e;)h(v[n]+"pointerdown")&&(e=!0);return e});var m=l.testStyles=function(e,o,t,a){var r,l,c,u,d="modernizr",v=s("div"),h=i();if(parseInt(t,10))for(;t--;)c=s("div"),c.id=a?a[t]:d+(t+1),v.appendChild(c);return r=s("style"),r.type="text/css",r.id="s"+d,(h.fake?h:v).appendChild(r),h.appendChild(v),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(n.createTextNode(e)),v.id=d,h.fake&&(h.style.background="",h.style.overflow="hidden",u=f.style.overflow,f.style.overflow="hidden",f.appendChild(h)),l=o(v,e),h.fake?(h.parentNode.removeChild(h),f.style.overflow=u,f.offsetHeight):v.parentNode.removeChild(v),!!l};c.addTest("touchevents",function(){var o;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)o=!0;else{var t=["@media (",d.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");m(t,function(e){o=9===e.offsetTop})}return o}),function(){var e,n,o,s,i,l,f;for(var u in r)if(r.hasOwnProperty(u)){if(e=[],(n=r[u]).name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(o=0;o<n.options.aliases.length;o++)e.push(n.options.aliases[o].toLowerCase());for(s=t(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)l=e[i],1===(f=l.split(".")).length?c[f[0]]=s:(!c[f[0]]||c[f[0]]instanceof Boolean||(c[f[0]]=new Boolean(c[f[0]])),c[f[0]][f[1]]=s),a.push((s?"":"no-")+f.join("-"))}}(),function(e){var n=f.className,o=c._config.classPrefix||"";if(u&&(n=n.baseVal),c._config.enableJSClass){var t=new RegExp("(^|\\s)"+o+"no-js(\\s|$)");n=n.replace(t,"$1"+o+"js$2")}c._config.enableClasses&&(n+=" "+o+e.join(" "+o),u?f.className.baseVal=n:f.className=n)}(a),delete l.addTest,delete l.addAsyncTest;for(var p=0;p<c._q.length;p++)c._q[p]();e.Modernizr=c}(window,document);var mobileMenu=function(){$(document).on("click",".nd-site-header__nav-trigger",function(){$(".menu").toggleClass("nav--mobile"),$(this).toggleClass("close")}),$(".nd-site-header__nav-trigger").hasClass("close")&&$(document).on("click","body",function(){$(this).trigger("click")})},main=function(){var e=$(window).width();Modernizr.touch?($("figure").click(function(e){$(this).hasClass("hover")||$(this).addClass("hover")}),$(".mouse-tap-overlay").click(function(e){e.preventDefault(),e.stopPropagation(),$(this).hasClass("hover")&&$(this).removeClass("hover")})):($("figure").mouseenter(function(){$(this).addClass("hover")}),$(".mouse-tap-overlay").mouseleave(function(){$("figure").removeClass("hover")})),e<750&&($(".nd-site-footer__social").removeClass("five columns"),$(".nd-site-footer__contact").removeClass("five columns"),$(".nd-site-footer__detail").removeClass("two columns"))};$(document).ready(function(){main(),mobileMenu()}),$(window).resize(function(){main(),mobileMenu()});
var mobileMenu = function() {
    
    $(document).on("click", ".nd-site-header__nav-trigger", function(){
        $(".menu").toggleClass("nav--mobile");
        $(this).toggleClass("close");
    })

    if($(".nd-site-header__nav-trigger").hasClass("close")) {
        $(document).on("click", "body", function() {
            $(this).trigger("click");
        })
    }
}

var main = function() {
    //WebFont.load({
    //    google: {
    //      families: ['Yellowtail', 'Source Sans Pro:400,600']
     //   }

     //   custom: {
     //       families: ['League Gothic']
     //   }
    //});

    var viewport = $(window).width();

	if (Modernizr.touch) {
        // handle the adding of hover class when clicked
        $("figure").click(function(e){
            if (!$(this).hasClass("hover")) {
                $(this).addClass("hover");
            }
        });
        // handle the closing of the overlay
        $(".mouse-tap-overlay").click(function(e){
            e.preventDefault();
            e.stopPropagation();
            if ($(this).hasClass("hover")) {
                $(this).removeClass("hover");
            }
        });
    } else {

	// handle the mouseenter functionality
    $("figure").mouseenter(function(){
        $(this).addClass("hover");
    })
        // handle the mouseleave functionality
        $(".mouse-tap-overlay").mouseleave(function(){
            $("figure").removeClass("hover");
        });
    }


    if (viewport < 750) {
		$('.nd-site-footer__social').removeClass("six columns"); // change the Skeleton class
		$('.nd-site-footer__contact').removeClass("six columns");
	}

}

$(document).ready(function(){
	main();
    mobileMenu();
});

$(window).resize(function() {
    main();
    mobileMenu()
});