# Comquick

Version: 1.0

Comquick (pronounced like comic with a Q or "come-quick", whichever you prefer) is a Publii theme intended for webcomics and related media: webtoons, webmanga, multimedia sequential art, etc. It's a work in progress, and I am not a professional coder, so contributions are welcome.

## How to install

1. [Install and run Publii for Mac, Windows, or Linux.](https://getpublii.com/download/)
1. Name your site.
1. Download this repo as a zip.
1. [Follow the instructions in the Publii docs.](https://getpublii.com/docs/installing-and-updating-publii-themes.html)
1. Have fun!

## Why should I use Comquick for my webcomics and not Wordpress / Tapas / Tumblr / whatever I'm using now?

1. Hosting programs like Wordpress or Tumblr can change without warning, breaking your plugins and themes. You decide if and when Comquick updates, so you can make the best decisions for your site.
1. Relying on webcomic hosting companies means trusting their terms of service, [which don't always have artists' rights in mind](https://bleedingcool.com/comics/controversial-change-tapastaptastic-terms-service-claims-right-first-refusal-webcomics/). Comquick doesn't claim any rights to your work to begin with.
1. Want to switch hosting companies entirely? You can rebuild it in a snap on the new server.
1. Publii produces static websites, which are generally smaller (read: faster and more eco-friendly) than dynamic websites.
1. Pages made with Comquick contain no scripts, trackers, or ads unless you put them there yourself. Unlike major corporations, I don't want your data. (This also increases page load speed.)
1. Publii runs offline on your computer; you only need an internet connection to upload your changes to the web. So if you travel a lot, or internet access is limited in your area, you have more opportunities to work on your projects.
1. It's $0 for life, even if you make money off your work. 100% of your profits are yours to keep.

## Features

- Customizable colors and sizes of page elements
- Image alt text without character limit
- Back-dating of posts
- Text-only posts and media embeds
- Custom post preview images

## Planned Features

- An optional custom frontpage that doesn't show posts, to provide more control to users
- A demo site describing how various features work
- Single image or tiled backgrounds
- Option to show first page as home instead of latest
- RTL support

If you have any other features you'd like to see, make a feature request in Issues!

## Known Issues and / or Quirks

- The code needs more comments than it has. I'm working on it.
- Accessibility (a11y) optimization: Comquick passes automated a11y tests, but further human testing is needed. If you find an a11y error, please file a bug report explaining what is happening and what should be happening instead.
- Currently, Publii and Comquick are only available in English. Comquick itself can be translated rather easily (a template is included in `/translations`), but Publii doesn't run in other languages. This is out of my hands, though Publii does intend to release multilanguage support in 2021. Translations are welcome; please download the template and read through it beforehand.
- The previous and next buttons behave differently on index pages vs. individual posts, and aren't currently interoperable.
- Many comic sites have a "random" button in the center of the navigation menu. This currently isn't supported; if you know how to implement it, please make a commit!
- Links on the post navigation menu can't be changed without custom HTML. Please get in touch if you have a better solution. (In all fairness, it's not that complicated—if I can't find a fix, a tutorial should be fine.)

## Credits

Bob Mitro at TidyCustoms ([@tidycustoms](http://twitter.com/tidycustoms) - [https://tidycustoms.net/](https://tidycustoms.net/)) created the Blank theme this is based on, which you can download here: [blank.zip](https://cdn.getpublii.com/themes/blank.zip). Code from the Blank theme included under the MIT license:

> Copyright (c) 2020 Publii
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## License

Comquick is distributed under the Nonviolent Public License v7+ (NVPLv7+).

Human-readable summary, not a replacement for the license: You may use, share, modify, and distribute modifications of this code, for free or for pay, so long as you are not in doing so **committing harm to others.** Of especial importance to webcomic creators is that **hate speech and tracking others for financial gain are prohibited.** This doesn't prevent you from advertising: for instance, a non-affiliate link to your Patreon, a sponsor, your Kickstarter, your store, etc. is fine, but an ad with a tracking pixel would be a violation.