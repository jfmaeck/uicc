## Input

### Input (default)
  
    @example
    <input type="text" class="uicc-input" placeholder="Placeholder ...">


### Input (big)
  
    @example
    <input type="text" class="uicc-input uicc-input--big" placeholder="Placeholder ...">


### Input (floating label)
  
    @example
    <div style="position: relative">
        <input id="inputFloating" type="text" class="uicc-input uicc-input--floatingLabel" onchange="if (this.value === '') { this.classList.remove('is-dirty'); } else { this.classList.add('is-dirty'); }">
        <label for="inputFloating"><span>Placeholder ...</span></label>
    </div>

### Input (unobtrusive)
  
    @example
    <input type="text" class="uicc-input uicc-input--unobtrusive" placeholder="Placeholder ...">

### Input (stateful)
  
    @example
    <input type="text" class="uicc-input uicc-input--stateful is-valid">
    <input type="text" class="uicc-input uicc-input--stateful is-invalid">

### Input (disabled)

    @example
    <input type="text" class="uicc-input is-disabled" disabled value="input value">

### Input (textarea)
  
    @example
    <textarea class="uicc-input" placeholder="Type something in ..."></textarea>
