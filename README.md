# Impatient webinar pages

This repository publishes the numbered Impatient Health webinar landing pages at `www.impatient.health/webinars/webinarNN/`.

## Create a new page

1. Copy `templates/panel` for a panel webinar or `templates/fireside` for a two-person conversation.
2. Rename the copy `webinarNN`, using the next number in the sequence.
3. Replace the sample copy, dates and images in `index.html`.
4. Put the Zoom event ID, two registration questions and consent wording in `event-config.js`.
5. Commit the new folder to `main`. GitHub Pages publishes it automatically.

The registration form sends each completed registration to the correct Zoom event. Partner and campaign tracking parameters are retained. No Zoom or Cloudflare credentials belong in this repository.

`webinar84` to `webinar93` are archive pages using the standard panel layout. `webinar94` is the archived Within3 fireside chat. Existing WordPress pages up to `webinar83` and the live Oxford debate at `webinar95` are routed separately and aren't changed by edits here.
