## Postfix

Postfixed elements consist of one or more fixed elements plus one ore more fluid elements taking up all the remaining space.

The modifiers `uicc-postfix--gutters` or `uicc-postfix--bigGutters` add spacing between the postfix contents. Just leave them out, if you don't need spacing.


### Postfix (Default)

    @example
    <div class="uicc-postfix uicc-postfix--gutters uicc-row">
        <div class="uicc-postfix__fluid">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
        <button class="uicc-postfix__fixed uicc-button uicc-button--primary" type="submit"><svg class="uicc-button__icon uicc-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg></button>
    </div>

### Postfix (as Prefix)

By changing the order of the `uicc-postfix__fixed` and `uicc-postfix__fluid` elements in the markup, you can use "postfix" as "prefix".

    @example
    <div class="uicc-postfix uicc-postfix--gutters uicc-row">
        <button class="uicc-postfix__fixed uicc-button uicc-button--primary" type="submit"><svg class="uicc-button__icon uicc-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg></button>
        <div class="uicc-postfix__fluid">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
    </div>

### Postfix (Stacked on tiny screens)
  
    @example
    <div class="uicc-postfix uicc-postfix--gutters uicc-postfix--tiny-stacked">
        <div class="uicc-postfix__fluid">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
        <button class="uicc-postfix__fixed uicc-button uicc-button--primary" type="submit"><svg class="uicc-button__icon uicc-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg></button>
    </div>

### Postfix (Stacked on small and tiny screens)
  
    @example
    <div class="uicc-postfix uicc-postfix--gutters uicc-postfix--small-stacked">
        <div class="uicc-postfix__fluid">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
        <button class="uicc-postfix__fixed uicc-button uicc-button--primary" type="submit"><svg class="uicc-button__icon uicc-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg></button>
    </div>

### Postfix (Stacked on medium and smaller screens)
  
    @example
    <div class="uicc-postfix uicc-postfix--gutters uicc-postfix--medium-stacked">
        <div class="uicc-postfix__fluid">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
        <button class="uicc-postfix__fixed uicc-button uicc-button--primary" type="submit"><svg class="uicc-button__icon uicc-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg></button>
    </div>

### Postfix (center)
  
Vertically centered contents
  
    @example
    <div class="uicc-postfix uicc-postfix--gutters uicc-postfix--center">
        <div class="uicc-postfix__fluid">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
        <svg class="uicc-postfix__fixed uicc-icon uicc-icon--primary uicc-icon--big">
          <use xlink:href="./assets/icons.svg#check"></use>
        </svg>
    </div>

### Postfix (bottom)
  
Vertically bottom aligned contents
  
    @example
    <div class="uicc-postfix uicc-postfix--gutters uicc-postfix--bottom">
        <div class="uicc-postfix__fluid">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
        <svg class="uicc-postfix__fixed uicc-icon uicc-icon--primary uicc-icon--big">
          <use xlink:href="./assets/icons.svg#more-horizontal"></use>
        </svg>
    </div>

### Postfix (between)
  
Use maximum spacing between the elements 
  
    @example
    <div class="uicc-postfix uicc-postfix--between">
        <svg class="uicc-postfix__fixed uicc-icon uicc-icon--primary uicc-icon--big">
          <use xlink:href="./assets/icons.svg#arrow-left"></use>
        </svg>
        <svg class="uicc-postfix__fixed uicc-icon uicc-icon--primary uicc-icon--big">
          <use xlink:href="./assets/icons.svg#arrow-right"></use>
        </svg>
    </div>
