cd test
git remote rename origin old-origin
git remote add origin ssh://git@gitlab:8022/root/test.git
git push -u origin --all
git push -u origin --tags