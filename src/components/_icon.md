## Icon

### Icon (default):

By default, icons inherit their color from the parent element 

    @example
    <i class="uicc-icon">★</i>

### Icon (primary brand color)
  
    @example
    <i class="uicc-icon uicc-icon--primary">★</i>
    <svg class="uicc-icon uicc-icon--primary"><use xlink:href="#check"></use></svg>

### Icon (light color)
  
    @example
    <i class="uicc-icon uicc-icon--light">☰</i>
    <svg class="uicc-icon uicc-icon--light"><use xlink:href="#edit"></use></svg>

### Icon (generic font icons)

Use arbitrary unicode icon characters.

    @example
    <i class="uicc-icon uicc-icon--char">⟲</i>
    <i class="uicc-icon uicc-icon--char">⟲</i>

### Icon (SVG icons)

Due to browser security restrictions it is not possible to leverage the full potential of svg files when they are referenced as external files. Thus, in order to use the svg icons in your own website, you need to include the contents of the generate file `dist/assets/icons.svg.html` directly in your html document.

    @example
    <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#add"></use></svg>
    <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#arrow-down"></use></svg>
    <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#arrow-downward"></use></svg>
    <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#arrow-left"></use></svg>
    <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#arrow-right"></use></svg>
    <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#arrow-up"></use></svg>
    <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#arrow-upward"></use></svg>
    <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#check"></use></svg>
    <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#clear"></use></svg>
    <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#delete"></use></svg>
    <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#edit"></use></svg>
