'use strict';

function tweet(formattedTime) {

  let text = `⏱️ Played the 10-second game and scored ${formattedTime} seconds 👾 #10SecondGame\n`;
  text = encodeURIComponent(text);
  let url = encodeURIComponent(SITE_URL);

  const tweetUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
  window.open(tweetUrl, '_blank');
}