"""the correct answers are stored in different file below to mantain security and mantain modularity....""" 
ind = ['v0', 'v1', 'v2', 'v3', 'd0', 'd1', 'd2', 'd3', 'n0', 'n1', 'n2', 'n3']
ans_arr = [0, 0, 0.5, 0, 0.165, 0, 0, 0, 0, 0.165, 0, 0]

ans = {}

for index in range(12):
	ans[ind[index]] = ans_arr[index]

