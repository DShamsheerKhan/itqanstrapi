# Use Debian-based Node image instead of Alpine
FROM node:18

# Set environment variables to prevent interactive prompts during package installations
ENV DEBIAN_FRONTEND=noninteractive

# Set working directory
WORKDIR /app

# Copy only package.json and yarn.lock to leverage Docker layer caching
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Remove any cached files and previous builds
RUN rm -rf .cache build

# Build the Strapi admin panel
RUN yarn build

# Expose the port Strapi will run on
EXPOSE 1337

# Start the application, ensuring .cache and build are removed on each startup
CMD ["sh", "-c", "rm -rf .cache build && yarn start"]
