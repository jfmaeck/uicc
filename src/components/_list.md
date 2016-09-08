## List

### List (default / no bullets)

    @example
    <ul class="uicc-list">
       <li>List item 1</li>
       <li>List item 2</li>
       <li>List item 3</li>
    </ul>

### List (bulleted)
  
    @example
    <ul class="uicc-list uicc-list--bulleted">
       <li>List item 1</li>
       <li>List item 2, that has content that goes over more than one line, it contains a lot of words. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</li>
       <li>List item 3</li>
    </ul>

### List (numbered)
  
    @example
    <ol class="uicc-list uicc-list--numbered">
       <li>List item 1</li>
       <li>List item 2, that has content that goes over more than one line, it contains a lot of words. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</li>
       <li>List item 3</li>
    </ol>

### List (without li elements)
  
If you need to force the list style on non-li elements, simply add the class `uicc-list__item` to the list items.
  
    @example
    <div class="uicc-list uicc-list--bulleted">
       <div class="uicc-list__item">List item 1</div>
       <div class="uicc-list__item">List item 2, that has content that goes over more than one line, it contains a lot of words. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</div>
       <div class="uicc-list__item">List item 3</div>
    </div>
