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


### Region (example layout):

    @example
    <div class="uicc-pageWrapper">
        <div class="uicc-region">
            <div class="uicc-region uicc-centered uicc-centered--horizontally uicc-row uicc-row--bigMargin">
                [LOGO]
            </div>
            <div class="uicc-region uicc-region--big uicc-region--primary">               
                <h2 class="uicc-headline uicc-headline--h3 uicc-headline--text uicc-headline--firstInText ">Sie haben Ihr Passwort vergessen?</h2>
                <p class="uicc-row uicc-row--extraBigMargin">Geben Sie Ihre E-Mail-Adresse an, um Ihr Passwort zurückzusetzen:</p>
                <div class="uicc-inputGroup">
                  <input id="region-sample-layout-email" type="email" class="uicc-input uicc-input--big uicc-input--unobtrusive uicc-input--floatingLabel" name="email" required onchange="if (this.value === '') { this.classList.remove('is-dirty'); } else { this.classList.add('is-dirty'); }">
                  <label for="region-sample-layout-email">
                    <span>E-Mail-Adresse</span>
                  </label>
                </div>
            </div>
        </div>
    </div>
