# Deployment Guide

## Quick Start - GitHub Pages

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `slow-breathing-platform`
3. Description: `Research platform for 0.1 Hz breathing studies`
4. Make it **PUBLIC**
5. **DO NOT** check "Add a README file"
6. Click "Create repository"

### Step 2: Upload Files

Two options:

#### Option A: Upload via Web Interface (Easiest)

1. On your new repository page, click "uploading an existing file"
2. Drag and drop all your files
3. Commit with message: "Initial commit"

#### Option B: Using Git (Recommended)
```bash
git init
git add .
git commit -m "Initial commit: Slow Breathing Research Platform"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/slow-breathing-platform.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to repository **Settings**
2. Click **Pages** in left sidebar
3. Under "Source":
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**
5. Wait 1-2 minutes

### Step 4: Access Your Site

Visit: `https://YOUR_USERNAME.github.io/slow-breathing-platform/`

## Troubleshooting

**Site shows 404:**
- Wait 2-3 minutes for deployment
- Check Settings → Pages shows "Your site is live"
- Verify branch is set to `main`

**JavaScript not working:**
- Open browser console (F12)
- Check for errors
- Verify all file paths are correct

## Updating Your Site

After making changes:
```bash
git add .
git commit -m "Description of changes"
git push origin main
```

Changes appear in 1-2 minutes.

## Contact

Questions? Email: satyamtiwaript@gmail.com
