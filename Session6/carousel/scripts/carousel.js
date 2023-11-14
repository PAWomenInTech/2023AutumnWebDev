/*
 Handle the `click` event for the footer and all it's child elements.

 This works as events "bubble" up through the DOM tree until it's handled.
 */
 document
    .querySelector("section.carousel > footer")
    .addEventListener("click", (event) => {
        // use the href attribute on the clicked element and see if there's a slide with the matching id
        const $slide = document.querySelector(event.target.getAttribute("href"));
        // if there's no slide element found, don't do anything.  The element isn't a properly setup carousel link
        if (!$slide) return;

        // Check to see if the browser supports the best method for a needs `scrollIntoViewIfNeeded`.
        // If the method exists, it will be `truthy` otherwise it will be `falsey`.
        if ($slide.scrollIntoViewIfNeeded) {
            // if the method is available, prevent the event from bubbling up further
            event.preventDefault();
            // call the scroll method on the slide to perform the minimum amount of scrolling to get the element into the browsers view area
            $slide.scrollIntoViewIfNeeded();
            // diagnostic log message
            console.log('Scrolling into View if Needed');
          } else if ($slide.scrollIntoView) { // if the best method isn't available, look for the second best `scrollIntoView` method
            // if the method is available, prevent the event from bubbling up further
            event.preventDefault();
            // call the scroll method to mimimise any vertical scrolling by making sure the bottom of the slide only is visible
            $slide.scrollIntoView({ block: "end", inline: "nearest" });
            console.log('Scrolling into View');
          }
          // if we get here, the user has clicked a correctly configured link but the browser doesn't support any of the more advanced scroll methods so we have to fallback to normal behaviour
          console.log('Browser is handling click normally');
    });
