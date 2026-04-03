  function toggleFunction(toggleElement){
    const el = document.getElementById(toggleElement);
    const current = window.getComputedStyle(el).display;

    if (current === "none") {
      el.style.display = "block";
    } else {
      el.style.display = "none";
    }
  }

    (function (d) {
    var f = d.getElementsByTagName('SCRIPT')[0],
      p = d.createElement('SCRIPT');
    p.type = 'text/javascript';
    p.async = true;
    p.src = '//assets.pinterest.com/js/pinit.js';
    f.parentNode.insertBefore(p, f);
  })(document);