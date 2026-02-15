<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1UQ_i480rxb4j-4dJWgQcnnqS-Sbyyh81

## Run Locally

**Prerequisites:**  Node.js 18+ and npm

### Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file from the `.env.example` template:
   ```bash
   cp .env.example .env.local
   ```

4. Add your Gemini API key to `.env.local`:
   ```
   GEMINI_API_KEY=your_gemini_api_key_here
   ```
   Get your API key from: https://makersuite.google.com/app/apikey

5. Run the development server:
   ```bash
   npm run dev
   ```

The app will be available at `http://localhost:3000`

## Build for Production

```bash
npm run build
```

This generates a `dist` folder ready for deployment.

## Deploy to Vercel

### Option 1: Manual Deployment

1. Push your code to GitHub
2. Go to https://vercel.com and sign in
3. Click "Add New..." > "Project"
4. Import your GitHub repository
5. Vercel will auto-detect your Vite configuration
6. Add environment variables:
   - `GEMINI_API_KEY`: Your Gemini API key
7. Click "Deploy"

### Option 2: Vercel CLI

```bash
npm i -g vercel
vercel
```

### Environment Variables on Vercel

Make sure to add `GEMINI_API_KEY` in your Vercel project settings under Environment Variables.
