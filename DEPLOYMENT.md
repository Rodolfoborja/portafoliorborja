# Deployment Guide - Portafolio Rodolfo Borja

This guide explains how to deploy the portfolio to a VPS using Dockploy.

## Prerequisites

1. A VPS with Docker and Dockploy installed
2. Docker Hub account
3. GitHub repository configured with GitHub Actions

## Setup GitHub Secrets

Configure the following secrets in your GitHub repository (Settings > Secrets and variables > Actions):

- `DOCKER_USERNAME`: Your Docker Hub username
- `DOCKER_PASSWORD`: Your Docker Hub password or access token

## Dockploy Configuration

### 1. Connect to your Dockploy instance

Access your Dockploy dashboard on your VPS (typically at `http://your-vps-ip:3000`)

### 2. Create a new Application

1. Click on "New Application"
2. Choose "Docker Image" as the deployment type
3. Configure the following:
   - **Name**: portafolio-rborja
   - **Image**: `your-dockerhub-username/portafolio-rborja:latest`
   - **Port**: 3000
   - **Auto Deploy**: Enable (this will automatically pull new images when pushed)

### 3. Environment Variables (Optional)

If needed, add any environment variables in the Dockploy interface:
- `NODE_ENV=production`
- Add any other custom environment variables your app needs

### 4. Domain Configuration (Optional)

If you want to use a custom domain:
1. In Dockploy, go to your application settings
2. Add your domain name
3. Enable SSL/HTTPS if needed
4. Make sure your domain's DNS A record points to your VPS IP

## Deployment Process

### Automatic Deployment (Recommended)

1. Push changes to the `main` branch
2. GitHub Actions will automatically:
   - Build the Next.js application
   - Create a Docker image
   - Push the image to Docker Hub
3. Dockploy will detect the new image and automatically deploy it

### Manual Deployment

If you need to deploy manually:

```bash
# Build the Docker image locally
docker build -t your-dockerhub-username/portafolio-rborja:latest .

# Push to Docker Hub
docker push your-dockerhub-username/portafolio-rborja:latest

# In Dockploy, click "Redeploy" to pull the latest image
```

## Testing the Deployment

1. Access your application at `http://your-vps-ip:3000`
2. If using a domain, access at `https://your-domain.com`
3. Verify:
   - Language switching works (ES/EN)
   - All sections load correctly
   - Images and assets are displayed
   - Contact form functions properly

## Monitoring

- Check Dockploy logs for any deployment issues
- Monitor container health in Dockploy dashboard
- Set up alerts for failed deployments (optional)

## Troubleshooting

### Container won't start
- Check Dockploy logs for error messages
- Verify the Docker image was built successfully
- Ensure port 3000 is not already in use

### Image pull fails
- Verify Docker Hub credentials in GitHub Secrets
- Check that the image exists in your Docker Hub repository
- Ensure Dockploy has internet access to pull images

### Application shows 404 errors
- Verify the Next.js build completed successfully
- Check that `output: 'standalone'` is set in `next.config.ts`
- Review the Dockerfile to ensure all files are copied correctly

### Changes not reflecting
- Verify the GitHub Action completed successfully
- Check that Dockploy auto-deploy is enabled
- Manually trigger a redeploy in Dockploy if needed

## CI/CD Workflows

### CI Workflow (`ci.yml`)
- Runs on: Push to `main` or `develop` branches, and all PRs
- Checks: Linting and build
- Purpose: Ensure code quality before merging

### Docker Deploy Workflow (`docker-deploy.yml`)
- Runs on: Push to `main` branch
- Actions: Build Docker image and push to Docker Hub
- Tags: Creates `latest`, branch-specific, and SHA tags

## Updating CV Data

To update the CV data displayed on the portfolio:

1. Edit `public/locales/es/common.json` for Spanish content
2. Edit `public/locales/en/common.json` for English content
3. Commit and push changes to `main` branch
4. GitHub Actions will automatically rebuild and deploy

## Security Notes

- Never commit secrets or API keys to the repository
- Use GitHub Secrets for sensitive information
- Keep Docker Hub credentials secure
- Regularly update dependencies for security patches

## Support

For issues or questions:
- Check GitHub Actions logs for build errors
- Review Dockploy logs for deployment issues
- Contact: rodolfoborja25@gmail.com
