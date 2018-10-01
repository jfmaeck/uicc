## Tooltip

### Tooltip (Default)
    @example
    <div class="uicc-centered uicc-centered--horizontally">
      <div class="uicc-row">
          <div class="uicc-tooltip uicc-tooltip--left">
            <span class="uicc-tooltip__trigger">left</span>
            <div class="uicc-tooltip__content uicc-region uicc-region--small uicc-region--primary" style="width: 250px"><div class="uicc-headline uicc-headline--h4 uicc-headline--text uicc-headline--firstInText">Tooltip content</div>HTML allowed</div>
          </div>
      </div>
      <div class="uicc-row">
          <div class="uicc-tooltip uicc-tooltip--right">
            <span class="uicc-tooltip__trigger">right</span>
            <div class="uicc-tooltip__content uicc-region uicc-region--small uicc-region--primary" style="width: 250px"><div class="uicc-headline uicc-headline--h4 uicc-headline--text uicc-headline--firstInText">Tooltip content</div>HTML allowed</div>
          </div>
      </div>
      <div class="uicc-row">
          <div class="uicc-tooltip uicc-tooltip--bottom">
            <span class="uicc-tooltip__trigger">bottom</span>
            <div class="uicc-tooltip__content uicc-region uicc-region--small uicc-region--primary" style="width: 250px"><div class="uicc-headline uicc-headline--h4 uicc-headline--text uicc-headline--firstInText">Tooltip content</div>HTML allowed</div>
          </div>
      </div>
      <div class="uicc-row">
          <div class="uicc-tooltip uicc-tooltip--top">
            <span class="uicc-tooltip__trigger">top</span>
            <div class="uicc-tooltip__content uicc-region uicc-region--small uicc-region--primary" style="width: 250px"><div class="uicc-headline uicc-headline--h4 uicc-headline--text uicc-headline--firstInText">Tooltip content</div>HTML allowed</div>
          </div>
      </div>
      <div class="uicc-row">
          <div class="uicc-tooltip uicc-tooltip--top uicc-tooltip--left">
            <span class="uicc-tooltip__trigger">top left</span>
            <div class="uicc-tooltip__content uicc-region uicc-region--small uicc-region--primary" style="width: 250px"><div class="uicc-headline uicc-headline--h4 uicc-headline--text uicc-headline--firstInText">Tooltip content</div>HTML allowed</div>
          </div>
      </div>
      <div class="uicc-row">
          <div class="uicc-tooltip uicc-tooltip--bottom uicc-tooltip--right">
            <span class="uicc-tooltip__trigger">bottom right</span>
            <div class="uicc-tooltip__content uicc-region uicc-region--small uicc-region--primary" style="width: 250px"><div class="uicc-headline uicc-headline--h4 uicc-headline--text uicc-headline--firstInText">Tooltip content</div>HTML allowed</div>
          </div>
      </div>
      <div class="uicc-row">
          <div class="uicc-tooltip uicc-tooltip--bottom uicc-tooltip--right">
            <span class="uicc-tooltip__trigger">image content</span>
            <img class="uicc-tooltip__content" src="https://placeholdit.imgix.net/~text?txtsize=16&bg=1cdcb5&txtclr=ffffff&txt=Tooltip%20Left&w=300&h=200">
          </div>
      </div>
    </div>


### Tooltip (Icon Trigger)

    @example
    <div class="uicc-tooltip uicc-tooltip--styled uicc-tooltip--bottom uicc-tooltip--right">
      <svg class="uicc-tooltip__trigger uicc-tooltip__trigger--icon uicc-icon uicc-icon--hoverPrimary"><use xlink:href="./assets/icons.svg#info-circle"></use></svg>
      <div class="uicc-tooltip__content" style="width: 250px">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.<br>
        Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.<br>
      </div>
    </div>


### Tooltip (styled)

    @example
    <div class="uicc-tooltip uicc-tooltip--bottom uicc-tooltip--right uicc-tooltip--styled">
      <svg class="uicc-tooltip__trigger uicc-tooltip__trigger--help uicc-tooltip__trigger--icon uicc-icon uicc-icon--hoverPrimary"><use xlink:href="./assets/icons.svg#arrow-left"></use></svg>
      <img class="uicc-tooltip__content" src="https://placeholdit.imgix.net/~text?txtsize=16&bg=1cdcb5&txtclr=ffffff&txt=Tooltip%20Preview&w=300&h=200">
    </div>
    <div class="uicc-tooltip uicc-tooltip--bottom uicc-tooltip--right uicc-tooltip--styled">
      <svg class="uicc-tooltip__trigger uicc-tooltip__trigger--help uicc-tooltip__trigger--icon uicc-icon uicc-icon--hoverPrimary"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg>
      <div class="uicc-tooltip__content" style="width: 250px">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.<br>
        Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.<br>
      </div>
    </div>
    

### Tooltip (only if hover is supported)

Add the class `uicc-tooltip--onlyIfHover` if you only want the tooltip to be displayed on devices with hovering capabilities.
The tooltip will then not be displayed e.g. on regular touch screens (you can still programatically open/cose the tooltip, see below).

    @example
    <div class="uicc-tooltip uicc-tooltip--styled uicc-tooltip--onlyIfHover">
      <svg class="uicc-tooltip__trigger uicc-tooltip__trigger--icon uicc-icon uicc-icon--hoverPrimary"><use xlink:href="./assets/icons.svg#info-circle"></use></svg>
      <div class="uicc-tooltip__content" style="width: 250px">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.<br>
        Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.<br>
      </div>
    </div>


### Tooltip (programatically set open state / no hover)

Add class `is-open` to force the tooltip to be open regardless of its hover state

This can be used either in conjunction with `uicc-tooltip--onlyIfHover` (see above) or with `uicc-tooltip--noHover` if you do not want the tooltip to automatically appear on hover.


    @example
    <div style="margin-bottom: 280px">
      <div class="uicc-tooltip uicc-tooltip--noHover uicc-tooltip--bottom uicc-tooltip--right uicc-tooltip--styled is-open" id="uicc-tooltip-demoNoHover">
        <svg class="uicc-tooltip__trigger uicc-tooltip__trigger--icon uicc-icon uicc-icon--hoverPrimary uicc-clickable" onclick="document.getElementById('uicc-tooltip-demoNoHover').classList.toggle('is-open')"><use xlink:href="./assets/icons.svg#info-circle"></use></svg>
        <img class="uicc-tooltip__content" src="https://placeholdit.imgix.net/~text?txtsize=16&bg=1cdcb5&txtclr=ffffff&txt=Tooltip%20Preview&w=300&h=200">
      </div>
    </div>
    
    
