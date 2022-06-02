#include <iostream>
#include <string>
#include <curl/curl.h>
using namespace std;

int main()
{
    auto easyHandle = curl_easy_init();
    size_t get_data(void *buffer, size_t size, size_t nmemb, void *userp);
    curl_easy_setopt(easyHandle, CURLOPT_WRITEDATA, get_data);
    curl_easy_setopt(easyHandle, CURLOPT_URL, 'https://api.dmoain.com');
    return 0;
}