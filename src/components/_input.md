## Input

### Input (default)
  
    @example
    <input type="text" class="uicc-input" placeholder="Placeholder ...">

### Input (big)
  
    @example
    <input type="text" class="uicc-input uicc-input--big" placeholder="Placeholder ...">

### Input (stateful)
  
    @example
    <input type="text" class="uicc-input uicc-input--stateful is-invalid">

### Input (disabled)

    @example
    <input type="text" class="uicc-input is-disabled" disabled value="input value">
    
### Input (readonly)

    @example
    <input type="text" class="uicc-input is-readonly" readonly value="input value">
    
### Input (hidden)

Hide input element while still preserving accessibility features (i.e. tab order) and ensuring that its value gets submitted properly.
CSS properties such as display: none or visibility: hidden will not work out. The reasons are:
* the input value will not be sent to the server on form submit
* the input will be excluded out of tab order.


    @example
    <input type="text" class="uicc-input" value="visible input (press tab to focus next input - the hidden one)"> 
    <input type="text" class="uicc-input is-hidden" value="input value">
    <input type="text" class="uicc-input" value="another visible input (after the hidden one)">

### Input (textarea)
  
    @example
    <textarea class="uicc-input" placeholder="Type something in ..."></textarea>

### File Input as Button

    @example
    <label class="uicc-button uicc-button--primary">
        <input type="file" class="uicc-input is-hidden">
        Choose File
    </label>