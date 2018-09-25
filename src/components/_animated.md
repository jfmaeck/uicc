## Animated

    @example
    <script>
    function shpAnimatedDemo(id, effect) {
      var removeAllClassesFromElement = function(element) {
        var classNamesToRemove =  Array.prototype.slice.call(element.classList, 0).filter(function(className) {
          return /^uicc-animated/.test(className);
        });
        
        classNamesToRemove.forEach(function(className) {
          element.classList.remove(className);
        });
      }
    
      var demoElement = document.getElementById(id);
      demoElement.classList.add('uicc-animated');
      demoElement.classList.add('uicc-animated--' + effect);
      
      setTimeout(removeAllClassesFromElement.bind(null, demoElement), 500);
    }
    </script>
    <div id="uicc-animated-demo" class="uicc-region uicc-region--secondary uicc-row">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
    </div>
    
    <button class="uicc-button uicc-button--primary" onclick="shpAnimatedDemo('uicc-animated-demo', 'fadeIn');">Fade in</button>
    <button class="uicc-button uicc-button--primary" onclick="shpAnimatedDemo('uicc-animated-demo', 'zoomIn');">Zoom in</button>
    