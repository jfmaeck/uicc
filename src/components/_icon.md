## Icon

### Icons (SVG icons)

Due to browser security restrictions it is not possible to leverage the full potential of svg files when they are referenced as external files. Thus, in order to use the svg icons in your own website, you need to include the contents of the generate file `dist/assets/icons.svg.html` directly in your html document.

    @example
    <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#add"></use></svg>
    <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#arrow-down"></use></svg>
    <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#arrow-downward"></use></svg>
    <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#arrow-left"></use></svg>
    <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#arrow-right"></use></svg>
    <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#arrow-up"></use></svg>
    <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#arrow-upward"></use></svg>
    <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#calendar"></use></svg>
    <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#check"></use></svg>
    <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#clear"></use></svg>
    <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#delete"></use></svg>
    <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#edit"></use></svg>
    <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#visibility-on"></use></svg>
    <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#visibility-off"></use></svg>

### Icon (default):

By default, icons inherit their color from the parent element 

    @example
    <svg class="uicc-icon"><use xlink:href="#check"></use></svg>

### Icon (primary brand color)
  
    @example
    <svg class="uicc-icon uicc-icon--primary"><use xlink:href="#check"></use></svg>

### Icon (light color)
  
    @example
    <svg class="uicc-icon uicc-icon--light"><use xlink:href="#edit"></use></svg>

### Icon (inverted color)
  
    @example
    <div class="uicc-region uicc-region--primary">
      <svg class="uicc-icon uicc-icon--inverted"><use xlink:href="#edit"></use></svg>
    </div>

### Icon (with circle)

    @example
    <div class="uicc-region uicc-region--default">
      <svg class="uicc-icon uicc-icon--circle"><use xlink:href="#arrow-right"></use></svg>
    </div>

    <div class="uicc-region uicc-region--primary">
      <svg class="uicc-icon uicc-icon--circle uicc-icon--inverted"><use xlink:href="#arrow-right"></use></svg>
    </div>