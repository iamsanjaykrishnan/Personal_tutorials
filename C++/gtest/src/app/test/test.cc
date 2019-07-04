#include <gtest/gtest.h>


TEST(Gtest_run, test0)
{
    
    double result = 11;
    ASSERT_EQ(11, result);
}

TEST(Gtest_run, test1)
{
    
    double result = 1;
    ASSERT_EQ(11, result);
}
int main(int argc, char **argv)
{
    testing::InitGoogleTest(&argc, argv);
    return RUN_ALL_TESTS();
}
