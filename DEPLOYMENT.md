# Vercel Deployment Guide

This guide will help you deploy your Devsters SIH25 project on Vercel.

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **GitHub Repository**: Your code should be pushed to GitHub
3. **Database**: You'll need a PostgreSQL database (recommended: Neon, Supabase, or Railway)

## Step 1: Database Setup

Since Vercel doesn't support persistent databases, you'll need an external PostgreSQL service:

### Option A: Neon (Recommended)
1. Go to [neon.tech](https://neon.tech)
2. Create a free account
3. Create a new project
4. Copy your connection string

### Option B: Supabase
1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Go to Settings > Database
4. Copy your connection string

### Option C: Railway
1. Go to [railway.app](https://railway.app)
2. Create a new project
3. Add PostgreSQL service
4. Copy your connection string

## Step 2: Environment Variables

In your Vercel dashboard, add these environment variables:

```
DB_HOST=your-database-host
DB_PORT=5432
DB_USER=your-database-user
DB_PASSWORD=your-database-password
DB_NAME=your-database-name
```

## Step 3: Deploy to Vercel

### Method 1: Vercel CLI (Recommended)

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy from your project directory**:
   ```bash
   cd /Users/kanishkchaurasia/Downloads/Devsters_SIH25
   vercel
   ```

4. **Follow the prompts**:
   - Link to existing project? No
   - Project name: devsters-sih25 (or your preferred name)
   - Directory: ./
   - Override settings? No

### Method 2: GitHub Integration

1. **Push your code to GitHub** (if not already done)
2. **Go to Vercel Dashboard**
3. **Click "New Project"**
4. **Import your GitHub repository**
5. **Configure settings**:
   - Framework Preset: Other
   - Root Directory: ./
   - Build Command: `cd frontend && npm run build`
   - Output Directory: `frontend/dist`

## Step 4: Database Migration

After deployment, you'll need to set up your database:

1. **Connect to your database** using any PostgreSQL client
2. **Run the init-db.sql script** to create tables and sample data
3. **Verify the connection** by checking the health endpoint: `https://your-app.vercel.app/api/health`

## Step 5: Configure Custom Domain (Optional)

1. **In Vercel Dashboard**, go to your project
2. **Go to Settings > Domains**
3. **Add your custom domain**
4. **Follow DNS configuration instructions**

## Important Notes

### Database Considerations
- Vercel serverless functions have a 10-second execution limit
- Database connections should be optimized for serverless
- Consider using connection pooling (PgBouncer)

### File Structure for Vercel
```
/
├── api/
│   └── index.py          # Serverless API functions
├── frontend/
│   ├── src/
│   ├── dist/             # Built React app
│   └── package.json
├── backend/              # Shared backend code
├── vercel.json           # Vercel configuration
└── requirements.txt      # Python dependencies
```

### Build Process
1. Vercel builds the React frontend using `npm run build`
2. Python API functions are deployed as serverless functions
3. Static files are served from the `frontend/dist` directory

## Troubleshooting

### Common Issues

1. **Database Connection Errors**:
   - Verify environment variables are set correctly
   - Check if your database allows external connections
   - Ensure SSL is configured properly

2. **Build Failures**:
   - Check Node.js version compatibility
   - Verify all dependencies are in package.json
   - Check for TypeScript errors

3. **API Routes Not Working**:
   - Ensure API routes are in the `/api` directory
   - Check that `vercel.json` routes are configured correctly
   - Verify Python dependencies are installed

### Debugging

1. **Check Vercel Function Logs**:
   ```bash
   vercel logs
   ```

2. **Test API endpoints locally**:
   ```bash
   vercel dev
   ```

3. **Check deployment status**:
   ```bash
   vercel ls
   ```

## Environment-Specific Configuration

### Development
- Use `vercel dev` for local development
- Set up local environment variables in `.env.local`

### Production
- Environment variables are set in Vercel dashboard
- Database should be production-ready
- Enable monitoring and logging

## Security Considerations

1. **Environment Variables**: Never commit sensitive data to Git
2. **Database Security**: Use strong passwords and enable SSL
3. **API Security**: Implement proper authentication and rate limiting
4. **CORS**: Configure CORS settings for your frontend domain

## Monitoring and Analytics

1. **Vercel Analytics**: Enable in project settings
2. **Function Monitoring**: Check Vercel dashboard for function performance
3. **Database Monitoring**: Use your database provider's monitoring tools

## Cost Optimization

1. **Free Tier Limits**: 
   - 100GB bandwidth per month
   - 100GB-hours of serverless function execution
   - 1,000 serverless function invocations per month

2. **Optimization Tips**:
   - Use edge functions for static content
   - Optimize database queries
   - Implement caching strategies

## Support

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Community**: [vercel.com/community](https://vercel.com/community)
- **GitHub Issues**: Create issues in your repository for project-specific problems
