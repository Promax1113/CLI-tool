echo "Starting setup..."
cd ../..
mkdir testProject
cd testProject
npm init -y
cd ../CLI-tool
npm install
npm link
cd ../testProject
npm link snutils
