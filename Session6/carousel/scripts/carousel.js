document
    .querySelector("section.carousel > footer")
    .addEventListener("click", (event) => {
        const $slide = document.querySelector(event.target.getAttribute("href"));
        if (!$slide) return;

        if ($slide.scrollIntoViewIfNeeded) {
            event.preventDefault();
            $slide.scrollIntoViewIfNeeded();
            console.log('Scrolling into View if Needed');
          } else if ($slide.scrollIntoView) {
            event.preventDefault();
            $slide.scrollIntoView({ block: "end", inline: "nearest" });
            console.log('Scrolling into View');
          }
          console.log('Browser is handling click normally');
    });
