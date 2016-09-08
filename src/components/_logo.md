## Logo

This is just an intentionally ugly dummy logo. Replace the svg code with yor custom logo. you can use the color settings currentColor (brand primary) and fillColor (brand tertiarty).

## Logo (default) 

The default logo consists of two colors `brand primary` (circle) and `brand tertiary` (square) 

    @example
    <svg class="uicc-logo" viewBox="0 0 744 500">
        <g>
            <rect
               y="100"
               x="520"
               height="188"
               width="188"
               style="fill: fillColor" />
          </g>
          <g>
              <circle
                 r="228"
                 cy="230"
                 cx="251"
                 style="fill: currentColor" />
          </g>
    </svg>


## Logo (light)

Use this variant on darker backgrounds 

    @example
    <div class="uicc-region uicc-region--secondary">
        <svg class="uicc-logo uicc-logo--light" viewBox="0 0 744 500">
            <g>
                <rect
                   y="100"
                   x="520"
                   height="188"
                   width="188"
                   style="fill: fillColor" />
              </g>
              <g>
                  <circle
                     r="228"
                     cy="230"
                     cx="251"
                     style="fill: currentColor" />
              </g>
        </svg>
    </div>
