//alumno:Hector paolo barazorda cuellar

#include <iostream>
#include <vector>
#include <omp.h>

using namespace std;

// Función para multiplicar dos polinomios

vector<int> multiPolinomios(const vector<int>& A, const vector<int>& B) {
    //grados de los polinomios
    int m = A.size();
    int n = B.size();
    vector<int> result(m + n - 1, 0);

    //paralelizamos el siclo for para multiplicar los polinomios
    
    //usamos dos ciclos for para calcular la multiplicacion de polinomios
    #pragma omp parallel for
    for (int i = 0; i < m; ++i) {
        for (int j = 0; j < n; ++j) {
            //usamos atomic para proteger 'result'
            #pragma omp atomic
            result[i + j] += A[i] * B[j];
        }
    }

    return result;
}

int main() {
    //teniendo en cuenta el olinomio del ejemplo  -2x^3 + 5x^2 + 6x - 3 representado como [-3, 6, 5, -2]
    vector<int> poly1 = {-3, 6, 5, -2};

    // teniendo en cuenta el polinomio del ejemplo 3x^2 + x - 4 se representa como [-4,1,3]
    vector<int> poly2 = {-4, 1, 3};

    // invocamos la funcion "multiPolinomios"
    vector<int> result = multiPolinomios(poly1, poly2);

    // Imprimir el polinomio resultante
    cout << "El polinomio resultante es: ";
    for (int i = result.size() - 1; i >= 0; --i) {
        if (i != result.size() - 1 && result[i] >= 0) {
            cout << "+";
        }
        //imprimimos cada elemento de nuestro polinomio resultante con su grado respectivo que seria el indice
        cout << result[i] << "x^" << i << " ";
    }
    cout << endl;

    return 0;
}

