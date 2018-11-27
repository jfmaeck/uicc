## Modal

### Modal (default)

    @example
    <div class="uicc-modal" id="test-modal-open">
       <div class="uicc-modal__dialog">
           <div class="uicc-modal__header">
               <span class="uicc-modal__headerAction">
                 <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="./assets/icons.svg#star-border"></use></svg>
               </span>
                <div class="uicc-modal__headerContent">
                    <div class="uicc-row uicc-row--extraSmallMargin"><h1 class="uicc-headline uicc-headline--h4 uicc-headline--primary">Modal Headline</h1></div>
                    <h2 class="uicc-headline uicc-headline--h6 uicc-headline--primary">Subheadline</h2>
                </div>
                <button class="uicc-modal__headerClose uicc-clickable uicc-clickable--touchy" aria-hidden="true" onclick="document.getElementById('test-modal-open').classList.remove('is-open');document.querySelector('html').classList.remove('is-uicc-modal-open');">
                    <svg class="uicc-icon">
                       <use xlink:href="./assets/icons.svg#clear"></use>
                    </svg>
                </button>
           </div>
           <div class="uicc-modal__content uicc-region">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.
           </div>
           <div class="uicc-modal__footer">
                <div class="uicc-modal__footerButtons">
                     <button type="button" class="uicc-button uicc-button--secondary uicc-button--wide" onclick="document.getElementById('test-modal-open').classList.remove('is-open');document.querySelector('html').classList.remove('is-uicc-modal-open');">Close</button>
                     <button type="button" class="uicc-button uicc-button--primary uicc-button--wide">Submit</button>
                </div>
           </div>
       </div>
    </div>
    <button class="uicc-button uicc-button--primary" onclick="document.getElementById('test-modal-open').classList.add('is-open');document.querySelector('html').classList.add('is-uicc-modal-open');">Open modal</button>

### Modal (fullWidth)

    @example
    <div class="uicc-modal uicc-modal--fullWidth" id="test-modal-fullWidth-open">
       <div class="uicc-modal__dialog">
           <div class="uicc-modal__header">
                <div class="uicc-modal__headerContent">
                    <div class="uicc-row uicc-row--extraSmallMargin"><h1 class="uicc-headline uicc-headline--h4 uicc-headline--primary">Modal Headline</h1></div>
                    <h2 class="uicc-headline uicc-headline--h6 uicc-headline--primary">Subheadline</h2>
                </div>
                <button class="uicc-modal__headerClose uicc-clickable uicc-clickable--touchy" aria-hidden="true" onclick="document.getElementById('test-modal-fullWidth-open').classList.remove('is-open');document.querySelector('html').classList.remove('is-uicc-modal-open');">
                    <svg class="uicc-icon">
                       <use xlink:href="./assets/icons.svg#clear"></use>
                    </svg>
                </button>
           </div>
           <div class="uicc-modal__content uicc-region">
               Modal Content
           </div>
       </div>
    </div>
    <button class="uicc-button uicc-button--primary" onclick="document.getElementById('test-modal-fullWidth-open').classList.add('is-open');document.querySelector('html').classList.add('is-uicc-modal-open');">Open modal</button>


### Modal (fullHeight)

    @example
    <div class="uicc-modal uicc-modal--fullHeight" id="test-modal-fullHeight-open">
       <div class="uicc-modal__dialog">
           <div class="uicc-modal__header">
                <div class="uicc-modal__headerContent">
                    <div class="uicc-row uicc-row--extraSmallMargin"><h1 class="uicc-headline uicc-headline--h4 uicc-headline--primary">Modal Headline</h1></div>
                    <h2 class="uicc-headline uicc-headline--h6 uicc-headline--primary">Subheadline</h2>
                </div>
                <button class="uicc-modal__headerClose uicc-clickable uicc-clickable--touchy" aria-hidden="true" onclick="document.getElementById('test-modal-fullHeight-open').classList.remove('is-open');document.querySelector('html').classList.remove('is-uicc-modal-open');">
                    <svg class="uicc-icon">
                       <use xlink:href="./assets/icons.svg#clear"></use>
                    </svg>
                </buttoncd >
           </div>
           <div class="uicc-modal__content uicc-region">
               Modal Content
           </div>
       </div>
    </div>
    <button class="uicc-button uicc-button--primary" onclick="document.getElementById('test-modal-fullHeight-open').classList.add('is-open');document.querySelector('html').classList.add('is-uicc-modal-open');">Open modal</button>
