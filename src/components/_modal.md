## Modal

### Modal (default)

    @example
    <script>
    function shpModalDemoOpen(id, animationClass) {
      var animationClasses = ['uicc-modal--bounceInDown', 'uicc-modal--slideInUp', 'uicc-modal--zoomIn', 'uicc-modal--fadeIn'];
      var element = document.getElementById(id);
      
      if (animationClass) {
        animationClasses.forEach(function(className) { element.classList.remove(className); });
        element.classList.add(animationClass);
      }
    
      var demoElement = document.getElementById(id);
      demoElement.classList.add('is-open');
      document.querySelector('html').classList.add('is-uicc-modal-open');
    }
    
    function shpModalDemoClose(id) {
      document.getElementById(id).classList.remove('is-open');
      document.querySelector('html').classList.remove('is-uicc-modal-open');
    }
    </script>
    <div class="uicc-modal" id="test-modal-open">
       <div class="uicc-modal__dialog">
           <div class="uicc-modal__header uicc-region">
                <div class="uicc-modal__headerContent">
                    <div class="uicc-row uicc-row--extraSmallMargin"><h1 class="uicc-headline uicc-headline--h4 uicc-headline--primary">Modal Headline</h1></div>
                    <h2 class="uicc-headline uicc-headline--h6 uicc-headline--primary">Subheadline</h2>
                </div>
                <div class="uicc-modal__headerClose uicc-clickable uicc-clickable--touchy" aria-hidden="true" onclick="shpModalDemoClose('test-modal-open')">
                    <svg class="uicc-icon">
                       <use xlink:href="./assets/icons.svg#clear"></use>
                    </svg>
                </div>
           </div>
           <div class="uicc-modal__content uicc-region">
                <div class="uicc-readingBlock">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.
                </div>
           </div>
           <div class="uicc-modal__footer uicc-region">
                <div class="uicc-postfix uicc-postfix--between">
                     <div class="uicc-postfix__fixed">
                         <button type="button" class="uicc-button uicc-button--secondary uicc-button--wide" onclick="shpModalDemoClose('test-modal-open')">Close</button>
                     </div>
                     <div class="uicc-postfix__fixed">
                         <button type="button" class="uicc-button uicc-button--primary uicc-button--wide">Submit</button>
                     </div>
                </div>
           </div>
       </div>
    </div>
    <button class="uicc-button uicc-button--primary" onclick="shpModalDemoOpen('test-modal-open')">Open modal</button>

### Modal (fullWidth)

    @example
    <div class="uicc-modal uicc-modal--fullWidth" id="test-modal-fullWidth-open">
       <div class="uicc-modal__dialog">
           <div class="uicc-modal__header uicc-region">
                <div class="uicc-modal__headerContent">
                    <div class="uicc-row uicc-row--extraSmallMargin"><h1 class="uicc-headline uicc-headline--h4 uicc-headline--primary">Modal Headline</h1></div>
                </div>
                <span class="uicc-modal__headerClose uicc-clickable uicc-clickable--touchy" aria-hidden="true" onclick="shpModalDemoClose('test-modal-fullWidth-open')">
                    <svg class="uicc-icon">
                       <use xlink:href="./assets/icons.svg#clear"></use>
                    </svg>
                </span>
           </div>
           <div class="uicc-modal__content uicc-region">
               Modal Content
           </div>
       </div>
    </div>
    <button class="uicc-button uicc-button--primary" onclick="shpModalDemoOpen('test-modal-fullWidth-open')">Open modal</button>


### Modal (fullHeight)

    @example
    <div class="uicc-modal uicc-modal--fullHeight uicc-modal--zoomIn" id="test-modal-fullHeight-open">
       <div class="uicc-modal__dialog">
           <div class="uicc-modal__header uicc-region">
                <div class="uicc-modal__headerContent">
                    <div class="uicc-row uicc-row--extraSmallMargin"><h1 class="uicc-headline uicc-headline--h4 uicc-headline--primary">Modal Headline</h1></div>
                </div>
                <span class="uicc-modal__headerClose uicc-clickable uicc-clickable--touchy" aria-hidden="true" onclick="shpModalDemoClose('test-modal-fullHeight-open')">
                    <svg class="uicc-icon">
                       <use xlink:href="./assets/icons.svg#clear"></use>
                    </svg>
                </span>
           </div>
           <div class="uicc-modal__content uicc-region">
               Modal Content
           </div>
       </div>
    </div>
    <button class="uicc-button uicc-button--primary" onclick="shpModalDemoOpen('test-modal-fullHeight-open')">Open modal</button>

### Modal (custom animation)

You can control the entry animation by adding these modifiers: `uicc-modal--zoomIn`, `uicc-modal--fadeIn`, `uicc-modal--slideInUp`, `uicc-modal--bounceInDown` (if the animation component is included).

    @example
    <div class="uicc-modal uicc-modal--fadeIn" id="test-modal-animation">
       <div class="uicc-modal__dialog">
           <div class="uicc-modal__content uicc-region" style="width: 300px; height: 250px;">
               Modal Content
           </div>
           <div class="uicc-modal__footer uicc-region">
                <button type="button" class="uicc-button uicc-button--secondary uicc-button--wide" onclick="shpModalDemoClose('test-modal-animation')">Close</button>
           </div>
       </div>
    </div>
    <button class="uicc-button uicc-button--primary" onclick="shpModalDemoOpen('test-modal-animation', 'uicc-modal--zoomIn')">zoomIn</button>
    <button class="uicc-button uicc-button--primary" onclick="shpModalDemoOpen('test-modal-animation', 'uicc-modal--fadeIn')">fadeIn</button>
    <button class="uicc-button uicc-button--primary" onclick="shpModalDemoOpen('test-modal-animation', 'uicc-modal--slideInUp')">slideInUp</button>
    <button class="uicc-button uicc-button--primary" onclick="shpModalDemoOpen('test-modal-animation', 'uicc-modal--bounceInDown')">bounceInDown</button>
