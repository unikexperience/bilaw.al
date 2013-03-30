---
layout: post
title: Hacking the &lt;a&gt; tag in 100 characters
categories: ['hello', 'world']
excerpt: A short while ago, I discovered that JavaScript allows you to change a link after you click on it, causing the possibility for phishing.
hackernews: https://news.ycombinator.com/item?id=5389565
---

Recently, I *accidently* discovered that JavaScript allows you to **change the `<a>` href attribute *after* you click on it**. As *obvious* as it may sound, many internet users do trust the "status bar" displaying where a link directs to, when in actual fact it can direct you elsewhere (without your consent, in as short as 65 characters).

Let me show you an example. <a href="http://www.paypal.co.uk/" class="hijack">This link should take you to PayPal</a>.

You'll see that you **do not** end up on PayPal (*except on Opera, where it appears to have been fixed*). That's because when you clicked on the link, I ran code that changed the `"href"` attribute **after** you clicked on it, and the browser *sent you to the new link*. **That shouldn't happen** (and [plenty of others agree](https://twitter.com/search?q=http%3A%2F%2Fbilaw.al%2F2013%2F03%2F17%2Fhacking-the-a-tag-in-100-characters.html&src=typd)). Website visitors (including most tech-savvy people) can and will presume this sort of "flaw" can actually be a genuine redirection. Last year, PayPal redirected their UK homepage to www.paypal-business.co.uk for marketing reasons. My assumption is that website visitors have grown accustom to redirections, and if this flaw acts as such, it can pose a real threat.

Let's take a look at the JavaScript:
{% highlight javascript %}
// Uncompressed
var links = document.links;
for(i in links) {
    links[i].onclick = function(){
        this.href = 'http://bit.ly/141nisR';
    };
}

// Compressed (was 100; now 65 characters exc. the link)
// Thanks to sgoel from HN
for(i in o=document.links){o[i].onclick=function(){this.href='//bit.ly/141nisR'}}

{% endhighlight %}

It's not easy to detect, either. Most JavaScript-powered websites bind events to `<a>` tags, so to unbind every `<a>` tag would break the website. Any JavaScript-based fix would be able to be overwritten through the use of `setTimeout`. Random snippets of code on the web, XSS exploitations and shady website owners will utilise this to "trick" you into presuming you are on a legitimate website. Whilst it may not be programmatically complex, it's a simple but effective way to steal information.

Whilst the concept of "hijacking" your [links are not new](http://www.reddit.com/r/netsec/comments/1ah2gq/hacking_the_a_tag_in_100_characters_deviously/c8xcw4l), it doesn't mean it should be ignored (or, at least, be this simple). This, plain and simple, **misleads internet users** into thinking they're going to a legitimate site. It isn't a huge problem, but it still remains *a problem*. I previously suggested to disable the code above, but since retracted it after considering it can break websites such as Google and Facebook who use this. Alternatively, I suggest for browsers to **throw a warning** when a link takes you to a **different domain** to the one stated in the status bar. This doesn't break Google or Facebook, and fixes what is arguably a simple interpreter flaw.

<p class='update'><i>Update (19/3) &mdash;</i> I've suggested the fix to Firefox, and waiting for a response.</p>

<p class='update'><i>Update (20/3) &mdash;</i> Rumours have circulated that Google Chrome will release a fix, though I'm yet to hear confirmation.</p>