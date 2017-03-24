## Checkbox

### Checkbox (default)

    @example
    <label class="uicc-checkbox">
        <input type="checkbox" class="uicc-checkbox__control">
        <span class="uicc-checkbox__label">Checkbox 1</span>
    </label>
    <label class="uicc-checkbox">
        <input type="checkbox" class="uicc-checkbox__control">
        <span class="uicc-checkbox__label">Checkbox 2</span>
    </label>

### Checkbox (inline)
  
    @example
    <label class="uicc-checkbox uicc-checkbox--inline">
        <input type="checkbox" class="uicc-checkbox__control">
        <span class="uicc-checkbox__label">Checkbox 1</span>
    </label>
    <label class="uicc-checkbox uicc-checkbox--inline">
        <input type="checkbox" class="uicc-checkbox__control">
        <span class="uicc-checkbox__label">Checkbox 2</span>
    </label>

### Checkbox (small)
  
    @example
    <label class="uicc-checkbox uicc-checkbox--small">
        <input type="checkbox" class="uicc-checkbox__control">
        <span class="uicc-checkbox__label">Checkbox 1</span>
    </label>
    <label class="uicc-checkbox uicc-checkbox--small">
        <input type="checkbox" class="uicc-checkbox__control">
        <span class="uicc-checkbox__label">Checkbox 2</span>
    </label>

### Checkbox (big)

    @example
    <label class="uicc-checkbox uicc-checkbox--big">
        <input type="checkbox" class="uicc-checkbox__control">
        <span class="uicc-checkbox__label">Yes, please subscribe me to your email list. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</span>
    </label>

### Checkbox (Fake)

You can visually fake checkboxes without using ```<input type="checkbox">``` form elements.
Please make sure to toggle the class ```is-checked``` on the ```uicc-checkbox``` element.

    @example
    <label class="uicc-checkbox">
        <span class="uicc-checkbox__label" onclick="this.parentElement.classList.toggle('is-checked')">Checkbox 1</span>
    </label>
    <label class="uicc-checkbox">
        <span class="uicc-checkbox__label" onclick="this.parentElement.classList.toggle('is-checked')">Checkbox 2</span>
    </label>
