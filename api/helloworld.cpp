#include <iostream>
#include <cmath>
#include <cstdlib>
#include <time.h>

using namespace std;

int generateRandom(int minimum, int maximum){
    int num = rand() % (maximum-minimum+1) + minimum;
    return num;
}

int gcd(int a, int b){
    if (a == 0) return b;
    if (b == 0) return a;
    if (a == b) return a;
    if (a > b) return gcd(a-b, b);
    return gcd(a, b-a);
}

string getBinary(int n){
    string s = "";
    while(n > 0){
        s += n % 2;
        n = n / 2;
    }
    return s;
}

int fast(int a, int g, int N){
    string g2 = getBinary(g);
    int n = g2.length();
    int x = a;
    int d = 1;
    for(int i=0; i<n; i++){
        if(g2[i]==1){
            d = d * x % N;
        }
        x = x * x % N;
    }
    return d;
}

int getPrimeFactor(int N){
    int k = N-1;
    if(k % 2 > 0) return -1;
    int t, r;
    for(int i=k/2; i>=1; i--){
        if(i % 2 == 0) continue;
        double t2 = k / (double)i;
        double T = log2(t2);
        if(floor(t2) == t2 && floor(T) == T){
            r = i;
            t = T;
        }
    }
    for(int i=0; i<N; i++){
        int g = generateRandom(0, N-1);
        int y = fast(g, r, N);
        int x;
        if(y == 1 || y == N-1){
            continue;
        }
        for(int j=1; j<t; j++){
            x = y * y % N;
            if(x==1){
                return gcd(y-1, N);
            }else if(x==N-1){
                continue;
            }
            y = x;
        }
        x = y * y % N;
        if(x == 1){
            return gcd(y-1, N);
        }
    }
    return -1;
}

int main()
{
    //Initialize random
    srand (time(NULL));

    for(int i=0; i<50; i++){
        
        cout << generateRandom(0, 100000) << endl;
        
    }
    return 0;
}
