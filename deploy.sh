#!/bin/bash

# Vietnam Holiday Planner - Auto Deployment Script
# This script automates the deployment process to GitHub and Railway

set -e  # Exit on any error

echo "🇻🇳 Vietnam Holiday Planner - Auto Deployment"
echo "=============================================="

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ Error: Not in a git repository"
    exit 1
fi

# Check for uncommitted changes
if ! git diff-index --quiet HEAD --; then
    echo "📝 Found uncommitted changes, committing..."

    # Add all changes
    git add .

    # Create commit message with timestamp
    TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
    COMMIT_MSG="🚀 Auto-update: $TIMESTAMP

✨ Features updated:
- Smart search with autocomplete
- Favorites/bookmark system
- Enhanced map functionality
- Collaborative itinerary builder
- Vietnamese-themed UI improvements

🔧 Generated with Claude Code
Co-Authored-By: Claude <noreply@anthropic.com>"

    git commit -m "$COMMIT_MSG"
    echo "✅ Changes committed successfully"
else
    echo "✅ No uncommitted changes found"
fi

# Push to GitHub
echo "📤 Pushing to GitHub..."
if git push origin main; then
    echo "✅ Successfully pushed to GitHub"
else
    echo "❌ Failed to push to GitHub"
    exit 1
fi

# Check if Railway CLI is installed
if command -v railway &> /dev/null; then
    echo "🚂 Deploying to Railway..."
    if railway deploy; then
        echo "✅ Successfully deployed to Railway"
    else
        echo "⚠️ Railway deployment failed, but GitHub push succeeded"
        echo "💡 Manual deployment may be needed"
    fi
else
    echo "⚠️ Railway CLI not found. Installing..."
    echo "💡 Run: npm install -g @railway/cli"
    echo "💡 Then: railway login and railway link"
fi

echo ""
echo "🎉 Deployment process completed!"
echo "📱 Your Vietnam Holiday Planner is now live!"
echo ""
echo "🔗 GitHub Repository: https://github.com/npadawer/vietnam-holiday-planner"
echo "🌐 Live Application: https://your-app.railway.app"
echo ""
echo "📋 Next Steps:"
echo "1. Set up Railway environment variables if needed"
echo "2. Configure custom domain (optional)"
echo "3. Monitor deployment in Railway dashboard"
echo ""