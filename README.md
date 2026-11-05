# web-lab

Tiny front-end project used to practise Git Flow.

## Theme toggle

The button in the header flips `data-theme` on `<body>` between `light` and `dark`.
`script.js` handles the click, and `styles.css` styles `[data-theme="dark"]`.
The choice is not persisted between page loads.

## Run locally

    python3 -m http.server 8000 --bind 127.0.0.1

## Verification

### Checks

```console
rolandog@debian:~/projects/ironhack/w01/d01/git-flow$ ./rg-gitflow-verify.sh ./web-lab/
ok   local branch main
ok   origin/main
ok   local branch develop
ok   origin/develop
ok   tag v0.1.0 annotated
ok   tag v0.1.0 signature
ok   tag v0.1.0 on origin
ok   tag v0.1.1 annotated
ok   tag v0.1.1 signature
ok   tag v0.1.1 on origin
ok   tag v1.0.0 annotated
ok   tag v1.0.0 signature
ok   tag v1.0.0 on origin
ok   main is at v1.0.0
ok   develop contains main
ok   no leftover feature/hotfix/release branches
ok   worktree clean
per-commit signature status (G good, N none, E cannot check):
33b7e56 G Merge tag 'v1.0.0' into develop
e0e4b93 G Merge branch 'release/1.0.0'
1012901 G chore: lint HTML, minify CSS, add changelog
5b9f31a G Merge tag 'vv0.1.1' into develop
91da76a G Merge branch 'hotfix/contrast-text'
727e37a G fix: improve contrast in dark mode
1a2cc48 G Merge tag 'v0.1.0' into develop
23621a7 G Merge branch 'release/0.1.0'
655f144 G chore: add version comment 0.1.0
4cdcd7a E Merge pull request #2 from rolandog/feature/cta-button
66e93ec G docs: document theme toggle behaviour
8cdf1cf G feat: add dark theme toggle button
ccbdf67 E Merge pull request #1 from rolandog/feature/header-banner
e8ee34c G feat: add header banner with nav links
33737aa G chore: add .gitignore
e05ba68 G chore: project scaffold (HTML, CSS, JS)
84c9184 E Initial commit
```

### Log

```console
rolandog@debian:~/projects/ironhack/w01/d01/git-flow/web-lab$ git log --oneline --graph --decorate --all
*   33b7e56 (HEAD -> develop, origin/develop) Merge tag 'v1.0.0' into develop
|\  
| *   e0e4b93 (tag: v1.0.0, origin/main, main) Merge branch 'release/1.0.0'
| |\  
| | * 1012901 chore: lint HTML, minify CSS, add changelog
| |/  
|/|   
* | 5b9f31a Merge tag 'vv0.1.1' into develop
|\| 
| *   91da76a (tag: v0.1.1) Merge branch 'hotfix/contrast-text'
| |\  
| | * 727e37a fix: improve contrast in dark mode
| |/  
* | 1a2cc48 Merge tag 'v0.1.0' into develop
|\| 
| *   23621a7 (tag: v0.1.0) Merge branch 'release/0.1.0'
| |\  
| | * 655f144 chore: add version comment 0.1.0
| |/  
|/|   
* |   4cdcd7a Merge pull request #2 from rolandog/feature/cta-button
|\ \  
| * | 66e93ec docs: document theme toggle behaviour
| * | 8cdf1cf feat: add dark theme toggle button
|/ /  
* |   ccbdf67 Merge pull request #1 from rolandog/feature/header-banner
|\ \  
| * | e8ee34c feat: add header banner with nav links
|/ /  
* / 33737aa chore: add .gitignore
|/  
* e05ba68 chore: project scaffold (HTML, CSS, JS)
* 84c9184 Initial commit
```
