!function(){var e=jQuery("#modalSearch"),t="#local-search-input",r="#local-search-result";e.on("show.bs.modal",function(){!function(e,t,r){"use strict";var l=jQuery(t),s=jQuery(r);if(0===l.length)throw Error("No element selected by the searchSelector");if(0===s.length)throw Error("No element selected by the resultSelector");-1===s.attr("class").indexOf("list-group-item")&&s.html('<div class="m-auto text-center"><div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div><br/>Loading...</div>'),jQuery.ajax({url:e,dataType:"xml",success:function(e){var t=jQuery("entry",e).map(function(){return{title:jQuery("title",this).text(),content:jQuery("content",this).text(),url:jQuery("url",this).text()}}).get();-1===s.html().indexOf("list-group-item")&&s.html(""),l.on("input",function(){var e=l.val(),u="",h=e.trim().toLowerCase().split(/[\s-]+/);return s.html(""),e.trim().length<=0?l.removeClass("invalid").removeClass("valid"):(t.forEach(function(e){var r,l,s=!0,t=(e.title&&""!==e.title.trim()||(e.title="Untitled"),e.title.trim()),n=t.toLowerCase(),i=e.content.trim().replace(/<[^>]+>/g,""),a=i.toLowerCase(),e=e.url,o=-1,c=-1;CONFIG.include_content_in_search&&""===a?s=!1:h.forEach(function(e,t){r=n.indexOf(e),o=a.indexOf(e),r<0&&o<0?s=!1:(o<0&&(o=0),0===t&&(c=o))}),s&&(u+="<a href='"+e+"' class='list-group-item list-group-item-action font-weight-bolder search-list-title'>"+t+"</a>",e=i,0<=c)&&(t=c+80,(t=0===(i=(i=c-20)<0?0:i)?100:t)>e.length&&(t=e.length),l=e.substring(i,t),h.forEach(function(e){var t=new RegExp(e,"gi");l=l.replace(t,'<span class="search-word">'+e+"</span>")}),u+="<p class='search-list-content'>"+l+"...</p>")}),-1===u.indexOf("list-group-item")?l.addClass("invalid").removeClass("valid"):(l.addClass("valid").removeClass("invalid"),void s.html(u)))})}})}(CONFIG.search_path||"/local-search.xml",t,r)}),e.on("shown.bs.modal",function(){jQuery("#local-search-input").focus()}),e.on("hidden.bs.modal",function(){!function(e,t){"use strict";if(e=jQuery(e),t=jQuery(t),0===e.length)throw Error("No element selected by the searchSelector");if(0===t.length)throw Error("No element selected by the resultSelector");e.val("").removeClass("invalid").removeClass("valid"),t.html("")}(t,r)})}();