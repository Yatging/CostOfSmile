# Cost of Smile

FYP process website and living research archive. Built with Astro, published on GitHub Pages, and edited through Pages CMS.

## Public site and editor

- Website: `https://yatging.github.io/CostOfSmile/`
- Admin entry: `https://yatging.github.io/CostOfSmile/admin/`
- CMS: `https://app.pagescms.org/`

Pages CMS edits the Markdown collections directly in this repository. Every save to `main` triggers the GitHub Pages deployment workflow.

## First-time CMS connection

1. Sign in at [Pages CMS](https://app.pagescms.org/) with the GitHub account that owns this repository.
2. Install the Pages CMS GitHub App and grant access to **Yatging/CostOfSmile only**.
3. Open the repository. Pages CMS automatically reads `.pages.yml` and displays the configured editing forms.

No access token, OAuth secret, or password belongs in this repository.

## Publishing a process update

1. In Pages CMS, open **Process / Timeline** and choose **New entry**.
2. Add a title, date, record type, stage, short summary, tags, optional image/video/link, and the full entry.
3. Leave **Draft** on while working. Turn it off when the record is ready for the supervisor.
4. Save. The public website normally rebuilds within one to three minutes.

The same workflow applies to Research, Experiments, Material Archive and Supervisor Feedback.

## Content structure

```text
src/content/
├── process/       # dated work log
├── materials/     # physical and digital source archive
├── research/      # Theory / Artwork / Context
├── experiments/   # successful, failed and in-progress tests
└── feedback/      # meetings, responses and next actions
```

Images upload to `public/uploads/images`. Other media uploads to `public/uploads/media`. Draft entries remain in the repository but are excluded from the built site.

## Local development

Requires Node.js 22+ and pnpm 10.

```sh
pnpm install
pnpm dev
pnpm build
```

## GitHub Pages setup

The repository includes `.github/workflows/deploy.yml`. In the repository settings, open **Pages** and set **Build and deployment → Source** to **GitHub Actions**. No separate hosting account is required.

## Privacy

Remove names, avatars, phone numbers, clinic staff details and unrelated private conversation before publishing medical or chat records. Confirm permission before publishing clinic-provided models, scans or ClinCheck materials.
