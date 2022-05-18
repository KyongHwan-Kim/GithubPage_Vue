npm run build
echo "npm run build"

cd ../../KyongHwan-Kim.github.io
$nowTime = Get-Date -Format "yyyy-MM-dd"
echo "CurrentTime : $nowTime"

git add -A
git commit -m "update $nowTime"
echo "git commit -m update $nowTime"

git push origin master
