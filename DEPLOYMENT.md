# GitHub Pages Deployment Guide

## Quick Setup

1. **Create a GitHub Repository**:
   - Go to https://github.com/new
   - Name your repository (e.g., `Reem-Travel`)
   - **Don't** initialize with README, .gitignore, or license
   - Click "Create repository"

2. **Add GitHub Remote and Push**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

3. **Set the Base Path** (if deploying to a project page):
   - If your repository is `username/Reem-Travel`, you need to set the base path
   - Create a `.env` file in the root directory:
     ```
     VITE_BASE_PATH=/Reem-Travel/
     ```
   - Replace `Reem-Travel` with your actual repository name
   - **Note**: If deploying to `username.github.io` (user/organization page), leave base path as `/`

4. **Install Dependencies and Deploy**:
   ```bash
   npm install
   npm run deploy
   ```

5. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **Deploy from a branch**
   - Select branch: `gh-pages`
   - Select folder: `/ (root)`
   - Click **Save**

6. **Your site will be available at**:
   - Project page: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
   - User page: `https://YOUR_USERNAME.github.io/` (if repo name is `username.github.io`)

## Deployment

To deploy your site:
```bash
npm run deploy
```

This will:
1. Build your project
2. Deploy the built files to the `gh-pages` branch
3. GitHub Pages will automatically serve your site

## Updating Your Site

After making changes:
```bash
npm run deploy
```

Your changes will be live in a few minutes!
