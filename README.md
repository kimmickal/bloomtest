# Bloom Jekyll website

A ready-to-publish GitHub Pages website for Bloom, a nonprofit food distribution organization serving Kobe, Japan.

## Publish on GitHub Pages

1. Create a new public GitHub repository, for example `bloom-kobe`.
2. Upload every file and folder from this project to the repository root.
3. Make sure the default branch is named `main`.
4. Open **Settings → Pages** in the repository.
5. Under **Build and deployment**, select **GitHub Actions**.
6. Push a commit or run the included Pages workflow manually.
7. GitHub will provide the public website URL after deployment.

## Customize before launch

Search the project for these placeholders and replace them:

- `hello@example.org`
- `+81 00-0000-0000`
- Distribution dates and locations
- Donation link
- Impact statistics
- Leadership and registration details

## Add a custom domain

In **Settings → Pages**, enter the domain under **Custom domain** and follow GitHub's DNS instructions.

## Edit locally

Install Ruby and Bundler, then run:

```bash
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000` in a browser.
