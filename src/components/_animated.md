## Animated

    @example
    <script>
    function uiccAnimatedDemo(id, effect) {
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
    <div style="overflow:hidden" class="uicc-region uicc-region--primary uicc-row">
        <div id="uicc-animated-demo" class="uicc-region uicc-region--secondary">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
        </div>
    </div>
    
    <button class="uicc-button uicc-button--primary" onclick="uiccAnimatedDemo('uicc-animated-demo', 'fadeIn');">Fade in</button>
    <button class="uicc-button uicc-button--primary" onclick="uiccAnimatedDemo('uicc-animated-demo', 'zoomIn');">Zoom in</button>
    <button class="uicc-button uicc-button--primary" onclick="uiccAnimatedDemo('uicc-animated-demo', 'slideInUp');">slideInUp</button>
    <button class="uicc-button uicc-button--primary" onclick="uiccAnimatedDemo('uicc-animated-demo', 'slideOutDown');">slideOutDown</button>
    <button class="uicc-button uicc-button--primary" onclick="uiccAnimatedDemo('uicc-animated-demo', 'bounceInDown');">bounceInDown</button>
    
