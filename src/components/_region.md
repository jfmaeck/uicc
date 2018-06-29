## Region

Regions have nice paddings and different background colors depending on their type

### Region (default)

    @example
    <div class="uicc-region uicc-region--default">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet <a href="javascript:;">dolore magna aliquam erat volutpat</a>.
    </div>

### Region (primary)

    @example
    <div class="uicc-region uicc-region--primary">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet <a href="javascript:;">dolore magna aliquam erat volutpat</a>.
    </div>

### Region (secondary)
  
    @example
    <div class="uicc-region uicc-region--secondary">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet <a href="javascript:;">dolore magna aliquam erat volutpat</a>.
    </div>

### Region (focusable)

Highlight the region if an element inside that region is focused

    @example
    <div class="uicc-region uicc-region--secondary uicc-region--focusable">
        <input type="text" class="uicc-input" placeholder="Placeholder ...">
    </div>

### Region (small)
  
    @example
    <div class="uicc-region uicc-region--secondary uicc-region--small">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet <a href="javascript:;">dolore magna aliquam erat volutpat</a>.
    </div>

### Region (big)
  
    @example
    <div class="uicc-region uicc-region--secondary uicc-region--big">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet <a href="javascript:;">dolore magna aliquam erat volutpat</a>.
    </div>

### Region (rounded)
  
    @example
    <div class="uicc-region uicc-region--secondary uicc-region--rounded">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet <a href="javascript:;">dolore magna aliquam erat volutpat</a>.
    </div>

### Region (vertical only)
  
    @example
    <div class="uicc-region uicc-region--secondary uicc-region--verticalOnly">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet <a href="javascript:;">dolore magna aliquam erat volutpat</a>.
    </div>

### Region (horizontal only)
  
    @example
    <div class="uicc-region uicc-region--secondary uicc-region--horizontalOnly">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet <a href="javascript:;">dolore magna aliquam erat volutpat</a>.
    </div>

### Region (example layout):

    @example
    <div class="uicc-pageWrapper">
        <div class="uicc-region uicc-region--secondary">
            <div class="uicc-region uicc-centered uicc-centered--horizontally uicc-row uicc-row--bigMargin">
                [LOGO]
            </div>
                <h2 class="uicc-headline uicc-headline--h3 uicc-headline--text uicc-headline--firstInText ">Sie haben Ihr Passwort vergessen?</h2>
            <div class="uicc-region uicc-region--big uicc-region--primary uicc-region--focusable">               
                <label class="uicc-row uicc-row--extraBigMargin">Geben Sie Ihre E-Mail-Adresse an, um Ihr Passwort zurückzusetzen:
                  <input type="text" class="uicc-input" placeholder="me@mail.com">
                </label>
            </div>
        </div>
    </div>
