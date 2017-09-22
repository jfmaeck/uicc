## Radio Button

### Radio Button (default)

    @example
    <label class="uicc-radio">
        <input type="radio" class="uicc-radio__control" name="uicc-radio-demo-default">
        <span class="uicc-radio__label">Radio Button 1</span>
    </label>
    <label class="uicc-radio">
        <input type="radio" class="uicc-radio__control" name="uicc-radio-demo-default">
        <span class="uicc-radio__label">Radio Button 2</span>
    </label>

### Radio Button (inline)
  
    @example
    <label class="uicc-radio uicc-radio--inline">
        <input type="radio" class="uicc-radio__control" name="uicc-radio-demo-inline">
        <span class="uicc-radio__label">Radio Button 1</span>
    </label>
    <label class="uicc-radio uicc-radio--inline">
        <input type="radio" class="uicc-radio__control" name="uicc-radio-demo-inline">
        <span class="uicc-radio__label">Radio Button 2</span>
    </label>

### Radio Button (small)
  
    @example
    <label class="uicc-radio uicc-radio--small">
        <input type="radio" class="uicc-radio__control" name="uicc-radio-demo-small">
        <span class="uicc-radio__label">Radio Button 1</span>
    </label>
    <label class="uicc-radio uicc-radio--small">
        <input type="radio" class="uicc-radio__control" name="uicc-radio-demo-small">
        <span class="uicc-radio__label">Radio Button 2</span>
    </label>

### Radio Button (big)

    @example
    <label class="uicc-radio uicc-radio--big">
        <input type="radio" class="uicc-radio__control" name="uicc-radio-demo-big">
        <span class="uicc-radio__label">Yes, please subscribe me to your email list.</span>
    </label>
    <label class="uicc-radio uicc-radio--big">
        <input type="radio" class="uicc-radio__control" name="uicc-radio-demo-big">
        <span class="uicc-radio__label">No, please leave me alone</span>
    </label>

### Radio Button (Fake)

You can visually fake radioes without using ```<input type="radio">``` form elements.
Please make sure to toggle the class ```is-checked``` on the ```uicc-radio``` element.

    @example
    <label class="uicc-radio">
        <span class="uicc-radio__label" onclick="this.parentElement.classList.toggle('is-checked')">Radio Button 1</span>
    </label>
    <label class="uicc-radio">
        <span class="uicc-radio__label" onclick="this.parentElement.classList.toggle('is-checked')">Radio Button 2</span>
    </label>
