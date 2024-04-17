import { SITE_URL } from "../lib/constants.js";

export function tweet(s, ms) {
  let formattedTimeForTweet = `${s}.${String(ms).padStart(3, "0").slice(0, 2)}`;
  let text = `❤️⏱️ Played the 10-second game and scored ${formattedTimeForTweet} seconds 🐇♣️ #10SecondGame\n`;

  let url = encodeURIComponent(SITE_URL);
  text = encodeURIComponent(text);

  const tweetUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;

  window.open(tweetUrl, '_blank');
}