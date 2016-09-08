## Slider

You have to adjust two attributes: `data-slides-count` should contain the total number of slides and `data-active-slide` should contain the index of the currently active slide.
You need to provide your own navigation controls to alter the `data-active-slide` attribute value.

### Slider (unstyled)

This slider works with a minimum of styling in order to be very versatile.

    @example
    <div class="uicc-slider uicc-row" id="uicc-slider-demo" data-slides-count="5" data-active-slide="1">      
        <div class="uicc-slider__slides">
                
            <article class="uicc-slider__slide">
                <div class="uicc-centered uicc-centered--vertically uicc-centered--horizontally" style="height: 100px; background: coral">Slide 1</div>
            </article>
            
            <article class="uicc-slider__slide">
                <div class="uicc-centered uicc-centered--vertically uicc-centered--horizontally" style="height: 120px; background: gold">Slide 2</div>
            </article>
            
            <article class="uicc-slider__slide">
                <div class="uicc-centered uicc-centered--vertically uicc-centered--horizontally" style="height: 70px; background: silver">Slide 3</div>
            </article>
            
            <article class="uicc-slider__slide">
                <div class="uicc-centered uicc-centered--vertically uicc-centered--horizontally" style="height: 150px; background: pink">Slide 4</div>
            </article>
            
            <article class="uicc-slider__slide">
                <div class="uicc-centered uicc-centered--vertically uicc-centered--horizontally" style="height: 100px; background: lightblue">Slide 5</div>
            </article>
        
        </div>
        <div class="uicc-slider__counter"></div>
    </div>

    <!-- this is just a dummy navigation - please at least replace the inline onclick handlers when copying -->
    <div class="uicc-centered uicc-centered--horizontally">
        <ol class="uicc-col uicc-pagination">
            <li class="uicc-pagination__item is-active">
                <span class="uicc-pagination__link uicc-clickable uicc-clickable--touchy" onclick="this.parentNode.parentNode.querySelector('.is-active').classList.remove('is-active'); this.parentNode.classList.add('is-active'); document.getElementById('uicc-slider-demo').setAttribute('data-active-slide', '1');">1</span>
            </li>
            <li class="uicc-pagination__item">
                <span class="uicc-pagination__link uicc-clickable uicc-clickable--touchy" onclick="this.parentNode.parentNode.querySelector('.is-active').classList.remove('is-active'); this.parentNode.classList.add('is-active'); document.getElementById('uicc-slider-demo').setAttribute('data-active-slide', '2');">2</span>
            </li>
            <li class="uicc-pagination__item">
                <span class="uicc-pagination__link uicc-clickable uicc-clickable--touchy" onclick="this.parentNode.parentNode.querySelector('.is-active').classList.remove('is-active'); this.parentNode.classList.add('is-active'); document.getElementById('uicc-slider-demo').setAttribute('data-active-slide', '3');">3</span>
            </li>
            <li class="uicc-pagination__item">
                <span class="uicc-pagination__link uicc-clickable uicc-clickable--touchy" onclick="this.parentNode.parentNode.querySelector('.is-active').classList.remove('is-active'); this.parentNode.classList.add('is-active'); document.getElementById('uicc-slider-demo').setAttribute('data-active-slide', '4');">4</span>
            </li>
            <li class="uicc-pagination__item">
                <span class="uicc-pagination__link uicc-clickable uicc-clickable--touchy" onclick="this.parentNode.parentNode.querySelector('.is-active').classList.remove('is-active'); this.parentNode.classList.add('is-active'); document.getElementById('uicc-slider-demo').setAttribute('data-active-slide', '5');">5</span>
            </li>
        </ol>
    </div>

    
### Slider (cards)

    @example
    <div class="uicc-slider uicc-row" id="uicc-slider-demo-cards" data-slides-count="4" data-active-slide="1">      
        <div class="uicc-slider__slides">
                
            <article class="uicc-slider__slide uicc-slider__slide--card">
                <div class="uicc-slider__card" style="height: 100px;">Slide 1</div>
            </article>
            
            <article class="uicc-slider__slide uicc-slider__slide--card">
                <div class="uicc-slider__card" style="height: 120px;">Slide 2</div>
            </article>
            
            <article class="uicc-slider__slide uicc-slider__slide--card">
                <div class="uicc-slider__card" style="height: 70px;">Slide 3</div>
            </article>
            
            <article class="uicc-slider__slide uicc-slider__slide--card">
                <div class="uicc-slider__card" style="height: 150px;">Slide 4</div>
            </article>
                    
        </div>
        <div class="uicc-slider__counter"></div>
    </div>

    <!-- this is just a dummy navigation - please at least replace the inline onclick handlers when copying -->
    <div class="uicc-centered uicc-centered--horizontally">
        <ol class="uicc-col uicc-pagination">
            <li class="uicc-pagination__item is-active">
                <span class="uicc-pagination__link uicc-clickable uicc-clickable--touchy" onclick="this.parentNode.parentNode.querySelector('.is-active').classList.remove('is-active'); this.parentNode.classList.add('is-active'); document.getElementById('uicc-slider-demo-cards').setAttribute('data-active-slide', '1');">1</span>
            </li>
            <li class="uicc-pagination__item">
                <span class="uicc-pagination__link uicc-clickable uicc-clickable--touchy" onclick="this.parentNode.parentNode.querySelector('.is-active').classList.remove('is-active'); this.parentNode.classList.add('is-active'); document.getElementById('uicc-slider-demo-cards').setAttribute('data-active-slide', '2');">2</span>
            </li>
            <li class="uicc-pagination__item">
                <span class="uicc-pagination__link uicc-clickable uicc-clickable--touchy" onclick="this.parentNode.parentNode.querySelector('.is-active').classList.remove('is-active'); this.parentNode.classList.add('is-active'); document.getElementById('uicc-slider-demo-cards').setAttribute('data-active-slide', '3');">3</span>
            </li>
            <li class="uicc-pagination__item">
                <span class="uicc-pagination__link uicc-clickable uicc-clickable--touchy" onclick="this.parentNode.parentNode.querySelector('.is-active').classList.remove('is-active'); this.parentNode.classList.add('is-active'); document.getElementById('uicc-slider-demo-cards').setAttribute('data-active-slide', '4');">4</span>
            </li>
        </ol>
    </div>
