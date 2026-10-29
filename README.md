# SR³ ENT & Surgical Centre Website

A public-facing clinic website for SR³ ENT & Surgical Centre in Lucknow. It is intended to help visitors learn about the clinic, review published service information, and find contact or appointment pathways.

> Website copy and medical/service claims should be reviewed by the clinic's authorized staff before release. This website is not a substitute for professional medical advice.

## Technology stack

- React and TypeScript
- Vite
- React Router
- Lucide icons
- ESLint and TypeScript build checks

See `package.json` for the authoritative dependencies and scripts.

## Requirements

- Node.js
- npm

## Run locally

```bash
git clone https://github.com/EllowDigital/SR3CLINIC-IN.git
cd SR3CLINIC-IN
npm ci
npm run dev
```

## Build and preview

```bash
npm run build
npm run lint
npm run preview
```

Run a production build before publishing and review the browser console for errors.

## Content and privacy

- Verify clinic name, contact details, service information, appointment instructions, and medical wording with the clinic.
- Do not store patient records, test results, prescriptions, or health histories in static frontend code, source control, or public issue attachments.
- If a contact or appointment form is connected to an external service, review that service's privacy/security configuration and disclose relevant data handling.
- Keep private provider credentials on a trusted backend; never embed them in client-side environment variables.
- Review third-party analytics and embedded services against the clinic's privacy notice.

## Deployment checklist

Verify the intended production domain, canonical URL, redirects, page metadata, mobile layouts, accessibility, and contact links. Do not publish changes to live clinical content without authorization.

## Security reporting

Do not publish patient information or secrets in GitHub issues. Report security concerns privately to the maintainer.

## License

See [LICENSE](LICENSE). No open-source license for project-specific code, branding, clinic content, or assets is granted by this repository unless the applicable rights holder explicitly authorizes it. Third-party components remain subject to their own licenses.
