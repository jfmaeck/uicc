## Modal

    @example
    <div class="uicc-modal" id="test-modal-open">
       <div class="uicc-modal__dialog">
           <div class="uicc-modal__header">
                <span class="uicc-modal__headerClose uicc-clickable uicc-clickable--touchy" aria-hidden="true" onclick="document.getElementById('test-modal-open').classList.remove('is-open');">
                    <svg class="uicc-icon">
                       <use xlink:href="#close"></use>
                    </svg>
                </span>
                <div class="uicc-modal__headerContent">
                    <div class="uicc-row uicc-row--extraSmallMargin"><h1 class="uicc-headline uicc-headline--h4 uicc-headline--primary">Modal Headline</h1></div>
                    <h2 class="uicc-headline uicc-headline--h6 uicc-headline--primary">Subheadline</h2>
                </div>
           </div>
           <div class="uicc-modal__content uicc-region">
               <div class="uicc-screenMargin">Modal Content</div>
           </div>
           <div class="uicc-modal__footer">
                <div class="uicc-modal__footerButtons">
                     <button type="button" class="uicc-button uicc-button--secondary uicc-button--wide" onclick="document.getElementById('test-modal-open').classList.remove('is-open');">Close</button>
                     <button type="button" class="uicc-button uicc-button--primary uicc-button--wide">Submit</button>
                </div>
           </div>
       </div>
    </div>
    <button class="uicc-button uicc-button--primary" onclick="document.getElementById('test-modal-open').classList.add('is-open');">Open modal</button>
