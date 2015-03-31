##Steps to deploy in gh-pages

1. git clone https://github.com/codeforfarmers/codeforfarmers.github.io
2. git pull origin master
3. git checkout gh-pages
4. git status
5. git fetch
6. git merge master

##add below line in _config.yml
#github_project_name: /codeforfarmers.github.io
##(add this line only if this is not present in _config.yml in gh-pages)

7. git add .
8. git commit -m “adding line in config.yml”
9. git status
10. git push origin gh-pages
##(latest changes will be auto deployed to gh-pages. check the changes in below link)

##http://github.com/codeforfarmers/codeforfarmers.github.io