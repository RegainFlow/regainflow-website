/**
 * Analytics utilities for Microsoft Clarity and Apollo.io
 */

export const getClarityScript = (clarityId: string): string => {
  return `
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${clarityId}");
  `;
};

export const getApolloScript = (appId: string): string => {
  return `
    function initApollo(){
      var n=Math.random().toString(36).substring(7),o=document.createElement("script");
      o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,
      o.onload=function(){window.trackingFunctions.onLoad({appId:"${appId}"})},
      document.head.appendChild(o)
    }
    initApollo();
  `;
};
