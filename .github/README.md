# GitHub Actions Setup

## Quick Setup

1. **Generate Firebase token:**

   ```bash
   firebase login:ci
   ```

2. **Add to GitHub:**

   - Go to Settings → Secrets and variables → Actions
   - Add new secret: `FIREBASE_TOKEN`
   - Paste the token from step 1

3. **Done!** The workflow will:
   - **On PRs:** Build and test
   - **On main:** Build, test, and deploy

## Features

- ✅ Automatic caching for fast builds
- ✅ Cancels redundant runs
- ✅ Node.js 22 support
- ✅ Deploys Functions, Firestore rules, and Hosting
