## Checkbox

### Checkbox (default)

    @example
    <div class="uicc-checkbox">
        <input type="checkbox" class="uicc-checkbox__control" id="checkbox1">
        <label class="uicc-checkbox__label" for="checkbox1">Checkbox 1</label>
    </div>
    <div class="uicc-checkbox">
        <input type="checkbox" class="uicc-checkbox__control" id="checkbox2">
        <label class="uicc-checkbox__label" for="checkbox2">Checkbox 2</label>
    </div>

### Checkbox (inline)
  
    @example
    <div class="uicc-checkbox uicc-checkbox--inline">
        <input type="checkbox" class="uicc-checkbox__control" id="checkbox3">
        <label class="uicc-checkbox__label" for="checkbox3">Checkbox 3</label>
    </div>
    <div class="uicc-checkbox uicc-checkbox--inline">
        <input type="checkbox" class="uicc-checkbox__control" id="checkbox4">
        <label class="uicc-checkbox__label" for="checkbox4">Checkbox 4</label>
    </div>

### Checkbox (small)
  
    @example
    <div class="uicc-checkbox uicc-checkbox--small">
        <input type="checkbox" class="uicc-checkbox__control" id="checkbox14">
        <label class="uicc-checkbox__label" for="checkbox14">Checkbox 1</label>
    </div>
    <div class="uicc-checkbox uicc-checkbox--small">
        <input type="checkbox" class="uicc-checkbox__control" id="checkbox15">
        <label class="uicc-checkbox__label" for="checkbox15">Checkbox 2</label>
    </div>

### Checkbox (big)

    @example
    <div class="uicc-checkbox uicc-checkbox--big">
        <input type="checkbox" class="uicc-checkbox__control" id="checkbox16">
        <label class="uicc-checkbox__label" for="checkbox16">Yes, please subscribe me to your email list. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</label>
    </div>

### Checkbox (Fake)

You can visually fake checkboxes without using ```<input type="checkbox">``` form elements.
Please make sure to toggle the class ```is-checked``` on the ```uicc-checkbox``` element.

    @example
    <div class="uicc-checkbox">
        <span class="uicc-checkbox__label" onclick="this.parentElement.classList.toggle('is-checked')">Checkbox 1</span>
    </div>
    <div class="uicc-checkbox">
        <span class="uicc-checkbox__label" onclick="this.parentElement.classList.toggle('is-checked')">Checkbox 2</span>
    </div>
