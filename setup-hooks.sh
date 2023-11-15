#!/bin/bash

# Path to the git_hooks directory in the repository
HOOKS_DIR=$(git rev-parse --show-toplevel)/git_hooks

# Path to the .git/hooks directory
GIT_HOOKS_DIR=$(git rev-parse --show-toplevel)/.git/hooks

# Copy or symlink the hooks
cp -a "$HOOKS_DIR/." "$GIT_HOOKS_DIR"

# Alternatively, you can create symlinks instead of copying
# ln -s "$HOOKS_DIR/"* "$GIT_HOOKS_DIR"

echo "Git hooks set up successfully."
