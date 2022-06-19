import numpy as np
import sys
from FairEnvyFreeAllocationProblem import FairEnvyFreeAllocationProblem
from FairProportionalAllocationProblem import FairProportionalAllocationProblem

def str_to_matrix(str,parts):
    return np.asmatrix(np.array_split(np.fromstring(str, dtype=int, sep=',').tolist(), parts)).tolist()

if __name__ == '__main__':
    try:
            # BUILD THE INPUT
            matrix = str_to_matrix(sys.argv[1],int(sys.argv[2]))
            # INSERT THE INPUT (BY THE PROBLEM TYPE ENVY-FREE OR PROPORTIONAL)
            if sys.argv[4] == 'envy-free':
                algoObject = FairEnvyFreeAllocationProblem(matrix)
            else:
                algoObject = FairProportionalAllocationProblem(matrix)
            # THE ALGO EXECUTION
            ans = algoObject.find_allocation_with_min_shering()
            # RETURN THE RESULT
            print(ans)
    except Exception as e:
            print("ERROR : "+str(e))

