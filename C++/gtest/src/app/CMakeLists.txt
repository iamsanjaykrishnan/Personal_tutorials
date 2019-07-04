add_executable(TEST1 test/test.cc)
find_package(GTest REQUIRED)

target_include_directories(TEST1 PUBLIC include)
target_include_directories(TEST1 PRIVATE ${GTEST_INCLUDE_DIRS})
target_link_libraries(TEST1 ${GTEST_LIBRARIES} pthread)

add_test(TEST_GTEST TEST1)

