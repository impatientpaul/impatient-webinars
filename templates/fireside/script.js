(() => {
  const select = document.querySelector('[data-country-select]');
  if (!select || !('DisplayNames' in Intl)) return;

  const codes = 'AD AE AF AG AI AL AM AO AQ AR AS AT AU AW AX AZ BA BB BD BE BF BG BH BI BJ BL BM BN BO BQ BR BS BT BV BW BY BZ CA CC CD CF CG CH CI CK CL CM CN CO CR CU CV CW CX CY CZ DE DJ DK DM DO DZ EC EE EG EH ER ES ET FI FJ FK FM FO FR GA GB GD GE GF GG GH GI GL GM GN GP GQ GR GS GT GU GW GY HK HM HN HR HT HU ID IE IL IM IN IO IQ IR IS IT JE JM JO JP KE KG KH KI KM KN KP KR KW KY KZ LA LB LC LI LK LR LS LT LU LV LY MA MC MD ME MF MG MH MK ML MM MN MO MP MQ MR MS MT MU MV MW MX MY MZ NA NC NE NF NG NI NL NO NP NR NU NZ OM PA PE PF PG PH PK PL PM PN PR PS PT PW PY QA RE RO RS RU RW SA SB SC SD SE SG SH SI SJ SK SL SM SN SO SR SS ST SV SX SY SZ TC TD TF TG TH TJ TK TL TM TN TO TR TT TV TW TZ UA UG UM US UY UZ VA VC VE VG VI VN VU WF WS YE YT ZA ZM ZW'.split(' ');
  const priority = ['GB', 'FR', 'DE', 'IT', 'ES', 'CH', 'DK', 'US', 'CA'];
  const names = new Intl.DisplayNames(['en-GB'], { type: 'region' });
  const add = code => {
    const option = document.createElement('option');
    option.value = code;
    option.textContent = names.of(code);
    select.append(option);
  };
  priority.forEach(add);
  const divider = document.createElement('option');
  divider.disabled = true;
  divider.textContent = '──────────';
  select.append(divider);
  codes.map(code => ({ code, name: names.of(code) }))
    .sort((a, b) => a.name.localeCompare(b.name, 'en-GB'))
    .forEach(({ code }) => add(code));
})();

(() => {
  const container = document.querySelector('[data-custom-questions]');
  const event = window.WEBINAR_CONFIG?.event;
  if (!container || !event) return;

  for (const question of event.questions || []) {
    const label = document.createElement('label');
    label.append(document.createTextNode(question.title));
    const select = document.createElement('select');
    select.name = question.field;
    select.required = true;
    const placeholder = document.createElement('option');
    placeholder.value = '';
    placeholder.textContent = 'Choose one';
    select.append(placeholder);
    for (const answer of question.options || []) {
      const option = document.createElement('option');
      option.value = answer;
      option.textContent = answer;
      select.append(option);
    }
    label.append(select);
    container.append(label);
  }

  const consent = document.createElement('label');
  consent.className = 'consent-field';
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.name = 'marketing_consent';
  checkbox.value = 'Yes';
  checkbox.required = true;
  const wording = document.createElement('span');
  wording.textContent = event.consent_question;
  consent.append(checkbox, wording);
  container.append(consent);
})();

(() => {
  const mobileBar = document.querySelector('.mobile-registration');
  const heroRegistration = document.getElementById('hero-registration');
  const closing = document.getElementById('reserve');
  if (!mobileBar || !heroRegistration || !closing) return;
  const mq = window.matchMedia('(max-width: 720px)');
  let heroHasPassed = false;
  let closingVisible = false;
  const update = () => {
    const show = mq.matches && heroHasPassed && !closingVisible;
    mobileBar.classList.toggle('is-visible', show);
    mobileBar.setAttribute('aria-hidden', String(!show));
    mobileBar.inert = !show;
    mobileBar.querySelector('.js-register').tabIndex = show ? 0 : -1;
  };
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.target === heroRegistration) heroHasPassed = !entry.isIntersecting && entry.boundingClientRect.bottom < 0;
      if (entry.target === closing) closingVisible = entry.isIntersecting;
    }
    update();
  }, { threshold: 0 });
  observer.observe(heroRegistration);
  observer.observe(closing);
  mq.addEventListener('change', update);
})();

(() => {
  const dialog = document.querySelector('.registration-dialog');
  const form = dialog?.querySelector('.registration-form');
  const success = dialog?.querySelector('.registration-success');
  const error = dialog?.querySelector('.form-error');
  const submit = dialog?.querySelector('.form-submit');
  const startedAt = dialog?.querySelector('[name="form_started_at"]');
  const openers = document.querySelectorAll('.js-register');
  const eventDefinition = window.WEBINAR_CONFIG?.event;
  if (!dialog || !form || !success || !error || !submit || !startedAt || !openers.length) return;

  let returnFocus;
  const close = () => dialog.close();
  const open = clickEvent => {
    returnFocus = clickEvent.currentTarget;
    startedAt.value = String(Date.now());
    error.hidden = true;
    dialog.showModal();
    window.setTimeout(() => form.elements.first_name?.focus(), 50);
  };
  const tracking = new URLSearchParams(window.location.search);
  const trackingSource = tracking.get('partner') || tracking.get('source') || tracking.get('partner_id') || tracking.get('utm_source') || '';

  openers.forEach(button => button.addEventListener('click', open));
  dialog.querySelector('.dialog-close')?.addEventListener('click', close);
  dialog.querySelector('.dialog-done')?.addEventListener('click', close);
  dialog.addEventListener('click', clickEvent => {
    if (clickEvent.target === dialog) close();
  });
  dialog.addEventListener('close', () => returnFocus?.focus());

  form.addEventListener('submit', async submitEvent => {
    submitEvent.preventDefault();
    error.hidden = true;
    if (!form.reportValidity()) return;
    if (!eventDefinition || eventDefinition.id === 'REPLACE_WITH_ZOOM_EVENT_ID') {
      error.textContent = 'Registration is not connected to Zoom yet.';
      error.hidden = false;
      return;
    }

    submit.disabled = true;
    const label = submit.childNodes[0].textContent;
    submit.childNodes[0].textContent = 'Registering… ';

    try {
      const values = Object.fromEntries(new FormData(form));
      const answers = {};
      for (const question of eventDefinition.questions || []) answers[question.field] = values[question.field] || '';
      const payload = {
        ...values,
        answers,
        event: {
          ...eventDefinition,
          registration_source: trackingSource || eventDefinition.registration_source,
        },
        tracking: {
          utm_source: tracking.get('utm_source') || '',
          utm_medium: tracking.get('utm_medium') || '',
          utm_campaign: tracking.get('utm_campaign') || '',
          utm_content: tracking.get('utm_content') || '',
          source: tracking.get('source') || '',
          partner_id: tracking.get('partner_id') || '',
          uid: tracking.get('uid') || '',
          salesContactID: tracking.get('salesContactID') || '',
        },
      };
      const response = await fetch('api/register', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.message || 'Registration could not be completed. Please try again.');
      form.hidden = true;
      success.hidden = false;
      dialog.scrollTop = 0;
      success.querySelector('h3')?.focus();
    } catch (requestError) {
      error.textContent = requestError.message;
      error.hidden = false;
      error.focus();
    } finally {
      submit.disabled = false;
      submit.childNodes[0].textContent = label;
    }
  });
})();

(() => {
  const countdowns = Array.from(document.querySelectorAll('[data-countdown]'), countdown => ({
    countdown,
    value: countdown.querySelector('[data-countdown-value]'),
    startsAt: Date.parse(countdown.dataset.start),
  })).filter(item => item.value && Number.isFinite(item.startsAt));
  if (!countdowns.length) return;

  let intervalId;
  const pad = number => String(number).padStart(2, '0');
  const spoken = (number, unit) => `${number} ${unit}${number === 1 ? '' : 's'}`;
  const render = () => {
    const now = Date.now();
    let active = false;
    for (const { countdown, value, startsAt } of countdowns) {
      const remaining = startsAt - now;
      if (remaining <= 0) {
        countdown.textContent = 'The webinar has started';
        countdown.hidden = false;
        continue;
      }
      active = true;
      const totalSeconds = Math.ceil(remaining / 1000);
      const days = Math.floor(totalSeconds / 86400);
      const hours = Math.floor(totalSeconds % 86400 / 3600);
      const minutes = Math.floor(totalSeconds % 3600 / 60);
      const seconds = totalSeconds % 60;
      value.textContent = `${days}d ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;
      value.setAttribute('aria-label', [spoken(days, 'day'), spoken(hours, 'hour'), spoken(minutes, 'minute'), spoken(seconds, 'second')].join(', '));
      countdown.hidden = false;
    }
    if (!active && intervalId !== undefined) window.clearInterval(intervalId);
    return active;
  };

  if (render()) intervalId = window.setInterval(render, 1000);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) render();
  });
})();
