from __future__ import division
import math
from decimal import Decimal as D
from decimal import getcontext

getcontext().prec = 1136
pi = D(0)
n = int(input())

for k in range(n):
    pi += D(math.pow(16, -k)) * (D(4 / (8 * k + 1)) -
                                 D(2 / (8 * k + 4)) - D(1 / (8 * k + 5)) - D(1 / (8 * k + 6)))

print(pi)
