## Screen Margin

### Screen Margin (default)

Add left/right margin to block to avoid clashing with the screen border.

    @example
    <div class="uicc-screenMargin">
       <div style="background: green">Test</div>
    </div>

### Screen Margin (smallNone):

No margin on small screens

    @example
    <div class="uicc-screenMargin uicc-screenMargin--smallNone">
       <div style="background: green">Test</div>
    </div>

### Screen Margins (Nested):

Nested screen margins get ignored

    @example
    <div class="uicc-screenMargin">
        <div style="background: green">
            Outer
            <div class="uicc-screenMargin">
               <div style="background: orange">Inner</div>
            </div>
        </div>
    </div>
