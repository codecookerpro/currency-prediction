import numpy as np

t = [0]
for i in range(10):
    t.append(t[0] + (i+1) * 60)
print(t)

a = np.array([[1, 2, 3]])
a = a.flatten()
print(a[0])

b = [(1, 'a'), (1, 'a')]
print(b)