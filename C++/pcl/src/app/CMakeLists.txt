


find_package(PCL 1.2 REQUIRED)

include_directories(${PCL_INCLUDE_DIRS})
link_directories(${PCL_LIBRARY_DIRS})
add_definitions(${PCL_DEFINITIONS})

add_executable(app src/main.cc)
target_include_directories(app PUBLIC include)
target_link_libraries (app ${PCL_LIBRARIES})
