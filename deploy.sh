#!/bin/bash
# Deployment script for GP Consulting website

echo "🚀 Starting deployment process for GP Consulting..."

# Step 1: Run tests and checks
echo "🧪 Running tests and checks..."
npm run lint
if [ $? -ne 0 ]; then
  echo "❌ Linting failed. Please fix the issues and try again."
  exit 1
fi

npm run build
if [ $? -ne 0 ]; then
  echo "❌ Build failed. Please fix the issues and try again."
  exit 1
fi

# Step 2: Push to GitHub
echo "📤 Pushing to GitHub..."
git add .
git commit -m "Deploy: $(date +%Y-%m-%d-%H-%M-%S)"
git push

# Step 3: Deploy to Vercel
echo "🌐 Deploying to Vercel..."
npx vercel --prod

echo "✅ Deployment process completed successfully!" 