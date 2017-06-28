/*! modernizr 3.1.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-pointerevents-touchevents !*/
!function(e,n,t){function o(e,n){return typeof e===n}function s(){var e,n,t,s,i,a,r;for(var f in d)if(d.hasOwnProperty(f)){if(e=[],n=d[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=o(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)a=e[i],r=a.split("."),1===r.length?Modernizr[r[0]]=s:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=s),l.push((s?"":"no-")+r.join("-"))}}function i(e){var n=c.className,t=Modernizr._config.classPrefix||"";if(p&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),p?c.className.baseVal=n:c.className=n)}function a(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):p?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function r(){var e=n.body;return e||(e=a(p?"svg":"body"),e.fake=!0),e}function f(e,t,o,s){var i,f,l,d,u="modernizr",p=a("div"),v=r();if(parseInt(o,10))for(;o--;)l=a("div"),l.id=s?s[o]:u+(o+1),p.appendChild(l);return i=a("style"),i.type="text/css",i.id="s"+u,(v.fake?v:p).appendChild(i),v.appendChild(p),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),p.id=u,v.fake&&(v.style.background="",v.style.overflow="hidden",d=c.style.overflow,c.style.overflow="hidden",c.appendChild(v)),f=t(p,e),v.fake?(v.parentNode.removeChild(v),c.style.overflow=d,c.offsetHeight):p.parentNode.removeChild(p),!!f}var l=[],d=[],u={_version:"3.1.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){d.push({name:e,fn:n,options:t})},addAsyncTest:function(e){d.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=u,Modernizr=new Modernizr;var c=n.documentElement,p="svg"===c.nodeName.toLowerCase(),v=u._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];u._prefixes=v;var h="Moz O ms Webkit",m=u._config.usePrefixes?h.toLowerCase().split(" "):[];u._domPrefixes=m;var g=function(e){function t(n,t){var s;return n?(t&&"string"!=typeof t||(t=a(t||"div")),n="on"+n,s=n in t,!s&&o&&(t.setAttribute||(t=a("div")),t.setAttribute(n,""),s="function"==typeof t[n],t[n]!==e&&(t[n]=e),t.removeAttribute(n)),s):!1}var o=!("onblur"in n.documentElement);return t}();u.hasEvent=g,Modernizr.addTest("pointerevents",function(){var e=!1,n=m.length;for(e=Modernizr.hasEvent("pointerdown");n--&&!e;)g(m[n]+"pointerdown")&&(e=!0);return e});var w=u.testStyles=f;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",v.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");w(o,function(e){t=9===e.offsetTop})}return t}),s(),i(l),delete u.addTest,delete u.addAsyncTest;for(var y=0;y<Modernizr._q.length;y++)Modernizr._q[y]();e.Modernizr=Modernizr}(window,document);
function mobileMenu(e) {
    $(".menu").toggleClass("nav--mobile");
        $(this).toggleClass("close");
        e.stopPropagation();
        e.preventDefault();
}

function buttonClick(e) {
    $(".nd-site-header__nav-trigger").trigger("click");
    e.stopPropagation();
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

    if ($(".menu").hasClass("nav--mobile")) {
        $(document).on("click", "body", buttonClick);
    }
}

$(document).ready(function(){
    main();
});

$(window).resize(function() {
    main();
});