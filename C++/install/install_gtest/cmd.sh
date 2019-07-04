#sudo apt-get install libgtest-dev
cd /usr/src/gtest
sudo cmake /usr/src/gtest/CMakeLists.txt
sudo make
 
# copy or symlink libgtest.a and libgtest_main.a to your /usr/lib folder
sudo cp *.a /usr/lib
