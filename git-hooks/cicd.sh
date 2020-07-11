#!/bin/bash
# Get the current branch name
branch_name=$(git branch | grep "*" | sed "s/\* //")

# Get the name of the branch that was just merged
reflog_message=$(git reflog -1)
merged_branch_name=$(echo $reflog_message | cut -d" " -f 4 | sed "s/://")

# if the merged branch was not master, don't do anything
if [[ $merged_branch_name != "master" ]]; then
    exit 0
fi

# Begin output
echo " "
echo "You've just merged the branch \"$merged_branch_name\" into \"$branch_name\". "
echo "now running ci-cd"
npm run build
exit 1
