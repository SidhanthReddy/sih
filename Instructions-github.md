Cloning  a repository:
  git clone <link>
  go to the sub folders and run npm install in each of them
Merging Changes to your branch from Another:
  git fetch origin(assuming you have already initialized origin)
  git checkout your-branch
  git merge origin/another branch
  git push origin your-branch
With this, your branch is up to date with the other branch.
Merging changes from your branch to another branch:
 git fetch origin
 git checkout another-branch
 git merge your-branch
 git push origin main
With this,the another branch is up to date with your branch

