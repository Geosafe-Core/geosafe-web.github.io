# geosafe-web.github.io

## Setup

### Global Variables
1. BRANCH
2. TAG
3. BRANCH_VERSION

### Branch Variables
1. VERSION

### Staging

#### How to build staging
1. git add --all .
2. git commit -m "Extract test tag from commit"
3. git push

#### How to deploy staging
1. git add --all .
2. git commit -m "Extract test tag from commit"
3. git tag -a stage-v1.0.0 -m "Extract test tag from commit" 
4. git push -f origin stage-v1.0.0 --tags

### Production

#### How to build production
1. git add --all .
2. git commit -m "Extract test tag from commit"
3. git push

#### How to deploy production
1. git add --all .
2. git commit -m "Extract test tag from commit"
3. git tag -a prod-v1.0.0 -m "Extract test tag from commit"
4. git push -f origin prod-v1.0.0 --tags


## Tag parsing
only one hyphen allowed to separate between stage-v1.0.0 and prod-v1.0.0 
one hyphen parsed,
the rest will be the version number returned exluding the hyphen

keep tags in format <(main|stage|prod)-(v1.0.0)>
for example, main-v1.0.0, stage-v1.0.0 and prod-v1.0.0

## Branches

### Main
For development purposes

### Staging
For staging purposes

### Production
For production purposes

## Variables and Secrets
Make sure all "Branch Variables" are set
and 
all "Staging Secrets" are set for main and/or staging branch
and 
all "Production Secrets" are set for production branch


## Triggers
Build and test triggers on push of branch
Deployment trigger on push of tag

### Run locally
run the following commands

1. npm ci
2. npm run build