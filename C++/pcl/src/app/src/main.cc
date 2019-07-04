#include <pcl/visualization/cloud_viewer.h>
#include <pcl/io/pcd_io.h>
#include <pcl/point_types.h>
int main()
 {
  //pcl::PointCloud<pcl::PointXYZ>::Ptr cloud (new pcl::PointCloud<pcl::PointXYZ>);
  pcl::PointCloud<pcl::PointXYZ> cloud ;
  if (pcl::io::loadPCDFile<pcl::PointXYZ> ("/home/sanjay/Sanjay_c++/C++/pcl/src/app/src/milk.pcd", cloud) == -1) //* load the file
  {
    PCL_ERROR ("Couldn't read file test_pcd.pcd \n");
    return (-1);
  }
   pcl::visualization::CloudViewer viewer("Simple Cloud Viewer");
//   viewer.showCloud (cloud);
pcl::PointCloud<pcl::PointXYZ>::Ptr cloud_constptr (new pcl::PointCloud<pcl::PointXYZ>);
//cloud_constptr=cloud.makeShared();
//*cloud_constptr = cloud; // imp for pointer
// viewer.showCloud (cloud_constptr);
viewer.showCloud (cloud.makeShared());
   while (!viewer.wasStopped ())
   {
   }
 }


/*/// Example program
#include <iostream>
#include <string>
void changer (std::string & name)
{
  name = "hololaloalo";
}

int main ()
{
  std::string name0;
  std::string * nameptr;
  std::cout << "What is your name? ";
  getline (std::cin, name0);
  nameptr = &name0;
  changer(name0)
  changer (*nameptr);
  std::cout << "Hello, " << name0 << "!\n";
}
*/
