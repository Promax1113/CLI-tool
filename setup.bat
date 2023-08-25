@ECHO OFF
echo "Starting setup..."
cd ..
mkdir testProject
cd testProject
npm init -y
cd ../tool
npm install
npm link
cd ../testProject
npm link tool