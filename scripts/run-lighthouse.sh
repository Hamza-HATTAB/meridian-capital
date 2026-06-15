#!/bin/bash

# Create reports directory
mkdir -p public/reports/lighthouse

ROUTES=("/" "/about" "/contact" "/advisory-services" "/investment-intelligence" "/insights" "/track-record" "/transactions")

for route in "${ROUTES[@]}"; do
  # Format filename
  name=$(echo $route | sed 's/\//_/g')
  if [ "$name" == "_" ]; then
    name="_home"
  fi
  
  echo "Running Lighthouse Mobile for $route"
  npx lighthouse http://localhost:3000$route \
    --output=html \
    --output-path=./public/reports/lighthouse/mobile${name}.html \
    --only-categories=performance,accessibility,best-practices,seo \
    --chrome-flags="--headless"
    
  echo "Running Lighthouse Desktop for $route"
  npx lighthouse http://localhost:3000$route \
    --output=html \
    --output-path=./public/reports/lighthouse/desktop${name}.html \
    --preset=desktop \
    --only-categories=performance,accessibility,best-practices,seo \
    --chrome-flags="--headless"
done
