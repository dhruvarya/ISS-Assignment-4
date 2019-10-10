class Trellis:
    trell = []
    def __init__(self, hmm, words):
        self.trell = []
        temp = {}
        for label in hmm.labels:
           temp[label] = [0,None]
        for word in words:
            self.trell.append([word,copy.deepcopy(temp)])
        self.fill_in(hmm)

    def fill_in(self,hmm):
        for i in range(len(self.trell)):
            for token in self.trell[i][1]:
                word = self.trell[i][0]
                if i == 0:
                    self.trell[i][1][token][0] = hmm.e(token,word)
                else:
                    max = None
                    guess = None
                    c = None
                    for k in self.trell[i-1][1]:
                        c = self.trell[i-1][1][k][0] + hmm.t(k,token)
                        if max == None or c > max:
                            max = c
                            guess = k
                    max += hmm.e(token,word)
                    self.trell[i][1][token][0] = max
                    self.trell[i][1][token][1] = guess

    def return_max(self):
        tokens = []
        token = None
        for i in range(len(self.trell)-1,-1,-1):
            if token == None:
                max = None
                guess = None
                for k in self.trell[i][1]:
                    if max == None or self.trell[i][1][k][0] > max:
                        max = self.trell[i][1][k][0]
                        token = self.trell[i][1][k][1]
                        guess = k
                tokens.append(guess)
            else:
                tokens.append(token)
                token = self.trell[i][1][token][1]
        tokens.reverse()
        return tokens