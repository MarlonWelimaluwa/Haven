# Haven — Burnout Recovery Coach Landing Page

A warm, fully responsive coaching landing page built for burnout recovery and mindset coaching professionals. Designed to create a safe, trustworthy first impression that converts exhausted high-achievers into discovery call bookings.

---

## 🔥 Live Demo

https://havenrecoverycoach.vercel.app/

---


## ✨ Features

- **Fully Responsive** — seamless experience across mobile, tablet, and desktop
- **Mobile Hamburger Menu** — smooth full-screen mobile navigation
- **Scroll Reveal Animations** — elements animate in gently as you scroll
- **Scroll Spy** — active nav link updates as you move through sections
- **FAQ Accordion** — clean expandable FAQ section
- **EmailJS Contact Form** — sends enquiries directly to email, no backend needed
- **Form Validation** — client-side validation with clear error messages
- **Success State** — confirmation message shown after form submission
- **Smooth Anchor Scrolling** — with fixed navbar offset
- **Auto Year Update** — footer year updates automatically

---

## 📄 Sections

1. **Hero** — Empathetic headline, dual CTAs, client trust indicators
2. **Recognition Bar** — Press mentions and credentials (Forbes Health, ICF Certified etc.)
3. **Mirror Section** — Pain point list that resonates with burnt-out professionals
4. **About** — Coach backstory, certifications, experience badge
5. **Services** — Three coaching programmes with full feature breakdowns
6. **Process** — 4-step timeline of what working together looks like
7. **Transformations** — Real client recovery stories
8. **Testimonials** — 5-star client reviews
9. **Pricing** — Three tiered pricing cards with featured plan
10. **FAQ** — Six common questions with accordion answers
11. **Contact** — EmailJS powered discovery call booking form
12. **Footer** — Navigation, links, socials, copyright

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Structure |
| CSS3 | Styling, animations, responsive layout |
| Vanilla JavaScript | Interactions, scroll effects, form handling |
| [EmailJS](https://emailjs.com) | Contact form email delivery |
| Google Fonts | Cormorant Garamond, Plus Jakarta Sans, Lora |

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/haven-coaching.git
cd haven-coaching
```

### 2. Open the project

No build tools or dependencies needed. Just open `index.html` in your browser.

```bash
open index.html
```

---

## 📧 EmailJS Setup

This project uses [EmailJS](https://emailjs.com) to deliver contact form submissions directly to your inbox — no backend required.

### Steps:

1. Sign up at [emailjs.com](https://emailjs.com)
2. Go to **Email Services** → connect your Gmail or preferred email provider → copy your **Service ID**
3. Go to **Email Templates** → create a new template using these variables:

| Variable | Description |
|---|---|
| `{{from_name}}` | Sender's full name |
| `{{from_email}}` | Sender's email address |
| `{{situation}}` | Selected burnout situation |
| `{{message}}` | Sender's personal message |
| `{{reply_to}}` | Auto reply-to address |

4. Save the template and copy your **Template ID**
5. Go to **Account** → copy your **Public Key**
6. Open `main.js` and update these three lines:

```js
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
```

> ⚠️ Make sure all three values are wrapped in single quotes.

### Allowed Origins (Security)

In your EmailJS dashboard go to **Account → Security** and add your live domain to **Allowed Origins** so your keys only work from your site.

---

## 📁 Project Structure

```
haven-coaching/
├── index.html       # Main HTML file
├── style.css        # All styles and responsive design
├── main.js          # All JavaScript functionality
└── README.md        # Project documentation
```

---

## 🙌 Credits

Designed & developed by [Marlon](https://github.com/MarlonWelimaluwa)
