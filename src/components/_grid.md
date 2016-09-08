## Grid

### Grid (equal columns)

The grid cells below do not specify any widths, they just naturally space themselves equally and expand to fit the entire row. They’re also equal height by default.

    @example
    <div class="uicc-grid">
        <div class="uicc-grid__cell uicc-grid__example">cell 1</div>
        <div class="uicc-grid__cell uicc-grid__example">cell 2</div>
        <div class="uicc-grid__cell uicc-grid__example">cell 3</div>
    </div>

### Grid (gutters/padding)

By default, grid cells do not have any padding between each other.
This is especially useful for non-textual content like images, video, street maps etc.
However, if you do need padding, you can simply add the class `uicc-grid--gutters` to your grid container element,
as done in most of the examples that follow.

    @example
    <div class="uicc-grid uicc-grid--gutters">
        <div class="uicc-grid__cell uicc-grid__example">cell 1</div>
        <div class="uicc-grid__cell uicc-grid__example">cell 2</div>
        <div class="uicc-grid__cell uicc-grid__example">cell 3</div>
    </div>

### Grid (2 equal, 1 double column)
  
    @example
    <div class="uicc-grid uicc-grid--gutters">
        <div class="uicc-grid__cell uicc-grid__example">cell 1</div>
        <div class="uicc-grid__cell uicc-grid__cell--double uicc-grid__example">cell 2 (double)</div>
        <div class="uicc-grid__cell uicc-grid__example">cell 3</div>
    </div>

### Grid (2 equal, 1 tripe column)
  
    @example
    <div class="uicc-grid uicc-grid--gutters">
        <div class="uicc-grid__cell uicc-grid__example">cell 1</div>
        <div class="uicc-grid__cell uicc-grid__cell--triple uicc-grid__example">cell 2 (triple)</div>
        <div class="uicc-grid__cell uicc-grid__example">cell 3</div>
    </div>
    
### Grid (1 shrink, 2 equal column)
  
    @example
    <div class="uicc-grid uicc-grid--gutters">
        <div class="uicc-grid__cell uicc-grid__example">cell 1</div>
        <div class="uicc-grid__cell uicc-grid__cell--shrink uicc-grid__example">cell 2 (shrink)</div>
        <div class="uicc-grid__cell uicc-grid__example">cell 3</div>
    </div>
    
        
### Grid (vertical - 1 shrink, 2 equal column)

Stack your grid vertically by adding the `uicc-grid--vertical` modifier
  
    @example
    <div style="height: 400px;">
        <div class="uicc-grid uicc-grid--vertical uicc-grid--gutters">
            <div class="uicc-grid__cell uicc-grid__example">cell 1</div>
            <div class="uicc-grid__cell uicc-grid__cell--shrink uicc-grid__example">cell 2 (shrink)</div>
            <div class="uicc-grid__cell uicc-grid__example">cell 3</div>
        </div>
    </div>

### Grid (unequal, based on 12 columns)
  
    @example
    <div class="uicc-grid uicc-grid--gutters">
        <div class="uicc-grid__cell uicc-grid__cell--1of12 uicc-grid__example">1of12</div>
        <div class="uicc-grid__cell uicc-grid__cell--2of12 uicc-grid__example">2of12</div>
        <div class="uicc-grid__cell uicc-grid__cell--3of12 uicc-grid__example">3of12</div>
        <div class="uicc-grid__cell uicc-grid__cell--6of12 uicc-grid__example">6of12</div>
        <div class="uicc-grid__cell uicc-grid__cell--8of12 uicc-grid__example">8of12</div>
        <div class="uicc-grid__cell uicc-grid__cell--4of12 uicc-grid__example">4of12</div>
    </div>

### Grid (unequal, responsive)
  
    @example
    <div class="uicc-grid uicc-grid--gutters">
        <div class="uicc-grid__cell uicc-grid__cell--6of12 uicc-grid__cell--medium-3of12 uicc-grid__example">small 6of12; medium 3of12</div>
        <div class="uicc-grid__cell uicc-grid__cell--6of12 uicc-grid__cell--medium-9of12 uicc-grid__example">small 6of12; medium 9of12</div>
    </div>

### Grid (nesting)
  
    @example
    <div class="uicc-grid uicc-grid--gutters">
        <div class="uicc-grid__cell uicc-grid__example">cell 1</div>
        <div class="uicc-grid__cell uicc-grid__example">
           <div class="uicc-grid uicc-grid--gutters">
               <div class="uicc-grid__cell uicc-grid__example">cell 2.a</div>
               <div class="uicc-grid__cell uicc-grid__example">cell 2.b</div>
           </div>
        </div>
        <div class="uicc-grid__cell uicc-grid__example">cell 3</div>
    </div>

### Grid (responsive)

Responsive Grids work by adding media classes to the Grid cells or containers. When those media values are met, the grids automatically adjust accordingly.

    @example
    <div class="uicc-grid uicc-grid--full uicc-grid--medium-fit uicc-grid--gutters">
        <div class="uicc-grid__cell uicc-grid__example">cell 1 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="uicc-grid__cell uicc-grid__example">cell 2 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="uicc-grid__cell uicc-grid__example">cell 3 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
    </div>

### Grid (Responsive, flowing)
  
    @example
    <div class="uicc-grid uicc-grid--tiny-full uicc-grid--small-1of2 uicc-grid--medium-1of3 uicc-grid--large-1of4 uicc-grid--gutters">
        <div class="uicc-grid__cell uicc-grid__example">cell 1 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="uicc-grid__cell uicc-grid__example">cell 2 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="uicc-grid__cell uicc-grid__example">cell 3 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="uicc-grid__cell uicc-grid__example">cell 4 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="uicc-grid__cell uicc-grid__example">cell 5 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="uicc-grid__cell uicc-grid__example">cell 6 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="uicc-grid__cell uicc-grid__example">cell 7 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
    </div>

### Grid (Responsive, flowing, center widow line)
  
    @example
    <div class="uicc-grid uicc-grid--tiny-full uicc-grid--small-1of2 uicc-grid--medium-1of3 uicc-grid--large-1of4 uicc-grid--gutters uicc-grid--centerWidowLine">
        <div class="uicc-grid__cell uicc-grid__example">cell 1 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="uicc-grid__cell uicc-grid__example">cell 2 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="uicc-grid__cell uicc-grid__example">cell 3 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="uicc-grid__cell uicc-grid__example">cell 4 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="uicc-grid__cell uicc-grid__example">cell 5 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="uicc-grid__cell uicc-grid__example">cell 6 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="uicc-grid__cell uicc-grid__example">cell 7 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
    </div>

### Grid (responsive, re-ordering)

The two cells swap ordering when switching from small to medium

    @example
    <div class="uicc-grid uicc-grid--gutters">
        <div class="uicc-grid__cell uicc-grid__example">Small first, medium last</div>
        <div class="uicc-grid__cell uicc-grid__example uicc-grid__cell--medium-orderFirst">Small last, medium first</div>
    </div>

### Grid (stretched alignment / default)
  
    @example
    <div class="uicc-grid uicc-grid--gutters">
        <div class="uicc-grid__cell uicc-grid__example">cell 1. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
        <div class="uicc-grid__cell uicc-grid__example">cell 2</div>
        <div class="uicc-grid__cell uicc-grid__example">cell 3</div>
    </div>

### Grid (top alignment)
  
    @example
    <div class="uicc-grid uicc-grid--top uicc-grid--gutters">
        <div class="uicc-grid__cell uicc-grid__example">cell 1. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
        <div class="uicc-grid__cell uicc-grid__example">cell 2</div>
        <div class="uicc-grid__cell uicc-grid__example">cell 3</div>
    </div>

### Grid (center alignment)
  
    @example
    <div class="uicc-grid uicc-grid--center uicc-grid--gutters">
        <div class="uicc-grid__cell uicc-grid__example">cell 1. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
        <div class="uicc-grid__cell uicc-grid__example">cell 2</div>
        <div class="uicc-grid__cell uicc-grid__example">cell 3</div>
    </div>

### Grid (bottom alignment)
  
    @example
    <div class="uicc-grid uicc-grid--bottom uicc-grid--gutters">
        <div class="uicc-grid__cell uicc-grid__example">cell 1. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
        <div class="uicc-grid__cell uicc-grid__example">cell 2</div>
        <div class="uicc-grid__cell uicc-grid__example">cell 3</div>
    </div>

### Grid (mixed alignment)
  
    @example
    <div class="uicc-grid uicc-grid--gutters" style="height: 300px">
        <div class="uicc-grid__cell uicc-grid__cell--top uicc-grid__example">.uicc-grid__cell--top</div>
        <div class="uicc-grid__cell uicc-grid__cell--center uicc-grid__example">.uicc-grid__cell--center</div>
        <div class="uicc-grid__cell uicc-grid__cell--bottom uicc-grid__example">.uicc-grid__cell--bottom</div>
    </div>

### Grid (with row and column gutters)
  
    @example
    <div class="uicc-grid uicc-grid--1of2 uicc-grid--gutters">
        <div class="uicc-grid__cell uicc-grid__example">cell 1 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="uicc-grid__cell uicc-grid__example">cell 2 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="uicc-grid__cell uicc-grid__example">cell 3 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="uicc-grid__cell uicc-grid__example">cell 4 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
    </div>

### Grid (with big row and column gutters)
  
    @example
    <div class="uicc-grid uicc-grid--1of2 uicc-grid--gutters uicc-grid--bigGutters">
        <div class="uicc-grid__cell uicc-grid__example">cell 1 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="uicc-grid__cell uicc-grid__example">cell 2 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="uicc-grid__cell uicc-grid__example">cell 3 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="uicc-grid__cell uicc-grid__example">cell 4 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
    </div>

### Grid (with row gutters)
  
    @example
    <div class="uicc-grid uicc-grid--1of2 uicc-grid--rowGutters">
        <div class="uicc-grid__cell uicc-grid__example">cell 1 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="uicc-grid__cell uicc-grid__example">cell 2 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="uicc-grid__cell uicc-grid__example">cell 3 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="uicc-grid__cell uicc-grid__example">cell 4 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
    </div>

### Grid (with column gutters)
  
    @example
    <div class="uicc-grid uicc-grid--1of2 uicc-grid--columnGutters">
        <div class="uicc-grid__cell uicc-grid__example">cell 1 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="uicc-grid__cell uicc-grid__example">cell 2 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="uicc-grid__cell uicc-grid__example">cell 3 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="uicc-grid__cell uicc-grid__example">cell 4 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
    </div>
