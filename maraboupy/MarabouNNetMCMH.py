
#from MarabouNetworkNNetIPQ import *
#from MarabouNetworkNNetProperty import *
from MarabouNetworkNNetExtended import *


import re
import sys
import parser



import numpy as np



class MarabouNNetMCMH:

    def __init__(self,filename,property_filename):
        self.marabou_nnet = MarabouNetworkNNetIPQ(filename=filename,property_filename=property_filename)
        self.ipq = self.marabou_nnet.ipq2
        self.marabou_nnet.tightenBounds()
        self.good_set = []
        self.bad_set = []

    def createRandomInputsList(self):
        """

        :type marabou_nnet: MarabouNetwokNNetIPQ
        """
        inputs = []
        for input_var in self.marabou_nnet.inputVars.flatten():
            assert self.marabou_nnet.upperBoundExists(input_var)
            assert self.marabou_nnet.lowerBoundExists(input_var)
            random_value = np.random.uniform(low=self.marabou_nnet.lowerBounds[input_var],
                                             high=self.marabou_nnet.upperBounds[input_var])
            inputs.append(random_value)
        return inputs

    def createInitialGoodSet(self,layer,N):
        good_set =[]
        for i in range(N):
            inputs = self.createRandomInputsList()

            if self.badInput(inputs): #Normalizes outputs!
                print ('A counter example found! input = ', inputs)

                sys.exit()
            layer_output = self.marabou_nnet.evaluateNetworkToLayer(inputs,last_layer=layer, normalize_inputs=True, normalize_outputs=False)
            good_set.append(layer_output)
        self.good_set = good_set




    #returns TRUE if variable is within bounds
    #asserts that the variable is legal

    def variableWithinBounds(self,variable,value):
        assert variable >= 0
        assert variable < self.marabou_nnet.numVars

        return  not ((self.marabou_nnet.lowerBoundExists(variable) and \
                value<self.marabou_nnet.lowerBounds[variable]) or \
                (self.marabou_nnet.upperBoundExists(variable) and \
                value>self.marabou_nnet.upperBounds[variable]))


    # If one of the variables in the list  of outputs is out of bounds, returns a list of True and the first such variable
    def outputOutOfBounds(self,output):
        output_variable_index = 0
        for output_variable in self.marabou_nnet.outputVars.flatten():
            if not self.variableWithinBounds(output_variable,output[output_variable_index]):
                    return [True,output_variable]
            output_variable_index+=1
        return [False]


    # Asserts that a legal input is given (all variables are within bounds)
    # returns TRUE if the input is legal (within bounds for input variables) but leads to an illegal output
    def badInput(self,inputs):
        assert len(inputs) == self.marabou_nnet.inputSize
        for input_variable in self.marabou_nnet.inputVars.flatten():
            value = inputs[input_variable]
            assert value >= self.marabou_nnet.lowerBounds[input_variable]
            assert value <= self.marabou_nnet.upperBounds[input_variable]
        output = self.marabou_nnet.evaluateNetworkToLayer(inputs,last_layer=0,normalize_inputs=False,normalize_outputs=True)
        return self.outputOutOfBounds(output)[0]



    def outputVariableToIndex(self,output_variable):
        return output_variable-self.marabou_nnet.numVars+self.marabou_nnet.outputSize


    #Creates a list of outputs of the input "extreme"
    #Checks whether all these outputs are legal (within bounds)
    #Creates a list of "empiric bounds" for the output variables based on the results
    def outputsOfInputExtremes(self):
        outputs = []
        input_size = self.marabou_nnet.inputSize
        output_lower_bounds = dict()
        output_upper_bounds = dict()


        #print 2 ** input_size

        #We don't want to deal with networks that have a large input layer
        assert input_size < 20

        for i in range(2 ** input_size):
            #turning the number i into a bit string of a specific length
            bit_string =  '{:0{size}b}'.format(i,size=input_size)

            #print bit_string #debugging

            inputs = [0 for i in range(input_size)]

            # creating an input: a sequence of lower and upper bounds, determined by the bit string
            for input_var in self.marabou_nnet.inputVars.flatten():
                if bit_string[input_var] == '1':
                    assert self.marabou_nnet.upperBoundExists(input_var)
                    inputs[input_var] = self.marabou_nnet.upperBounds[input_var]
                else:
                    assert self.marabou_nnet.lowerBoundExists(input_var)
                    inputs[input_var] = self.marabou_nnet.lowerBounds[input_var]

            print ("input = ", inputs)

            #Evaluating the network on the input

            output = self.marabou_nnet.evaluateNetworkToLayer(inputs,last_layer=0,normalize_inputs=False,normalize_outputs=True)
            print("output = ", output)
            outputs.append(output)

            if self.outputOutOfBounds(output)[0]: #Normalizing outputs!
                print('A counterexample found! input = ', inputs)

                sys.exit()


            # Computing the smallest and the largest ouputs for output variables
            for output_var in self.marabou_nnet.outputVars.flatten():
                output_var_index = self.outputVariableToIndex(output_var)
                if not output_var in output_lower_bounds or output_lower_bounds[output_var]>output[output_var_index]:
                    output_lower_bounds[output_var] = output[output_var_index]
                if not output_var in output_upper_bounds or output_upper_bounds[output_var]<output[output_var_index]:
                    output_upper_bounds[output_var] = output[output_var_index]


        #print len(outputs)
        print ("lower bounds = ", output_lower_bounds)
        print ("upper bounds = ", output_upper_bounds)

        #print(outputs)





network_filename = "../resources/nnet/acasxu/ACASXU_experimental_v2a_1_9.nnet"
property_filename = "../resources/properties/acas_property_4.txt"
property_filename1 = "../resources/properties/acas_property_1.txt"

#network_filename = "../regress/acas_nnet/ACASXU_run2a_1_9_batch_2000.nnet"


#marabou_nnet = MarabouNetworkNNetIPQ("../resources/nnet/acasxu/ACASXU_experimental_v2a_1_1.nnet","../resources/properties/acas_property_1.txt",compute_ipq=True)
#marabou_nnet.readProperty("../resources/properties/acas_property_1.txt")

#marabou_nnet = MarabouNetworkNNetIPQ("../resources/nnet/acasxu/ACASXU_experimental_v2a_1_1.nnet",perform_sbt=True,compute_ipq=True)

#print marabou_nnet.ipq2 == marabou_nnet.ipq1


#marabou_nnet.testInputBounds()
#marabou_nnet.tightenInputBounds()
#marabou_nnet.testInputBounds()
#marabou_nnet.testOutputBounds()
#marabou_nnet.tightenOutputBounds()


#marabou_nnet.testOutputBounds()


#marabou_nnet.tightenBounds()

#marabou_nnet.testInputBounds()
#marabou_nnet.testOutputBounds()


#input_var_list = marabou_nnet.ipq2.getInputVariables()

#print np.random.uniform(size=5)





#print marabou_nnet.evaluateNetworkToLayer(random_inputs_list,0,normalize_inputs=True,normalize_outputs=True)
#print marabou_nnet.evaluateNetwork(random_inputs_list,normalize_inputs=True,normalize_outputs=False)
#print marabou_nnet.evaluateNetworkMultipleToLayer(random_inputs_list,0,normalize_inputs=True,normalize_outputs=True)
#print marabou_nnet.evaluateNetworkMultiple(random_inputs_list,normalize_inputs=True,normalize_outputs=True)



nnet_object = MarabouNNetMCMH(filename=network_filename,property_filename=property_filename)


random_inputs_list = nnet_object.createRandomInputsList()

print(nnet_object.marabou_nnet.evaluateNetworkToLayer(random_inputs_list, 0, normalize_inputs=True,
                                                      normalize_outputs=False))

nnet_object.marabou_nnet.testInputBounds()
nnet_object.marabou_nnet.testOutputBounds()




nnet_object.outputsOfInputExtremes()

nnet_object.createInitialGoodSet(layer=5,N=10)


#print(nnet_object.good_set)


print("success!")
#x = compiler.parse('x+y<=5')
#print(x)
x = parser.expr('x+y<=5').compile()
print(x)

str = 'x0+y1'

regexp = r'([x|y])(\d+)([+|-])([(x|y])(\d+)'

match = re.search(regexp,str)
print(match.start(), match.end())

print(str)
new_str = re.sub(regexp,r'\4\2\3\1\5',str)
print(new_str)

regexp = r'[x](\d+)'
match = re.search(regexp,str)
print(match.start(), match.end())

str = 'x50 + y4 - x2 - y1'

new_str = str

print(str)

reg_input = re.compile(r'[x](\d+)')
reg_output = re.compile(r'[y](\d+)')

new_str = reg_input.sub(r"inputs[\1]",new_str)

new_str = reg_output.sub(r"output[\1]",new_str)

print(new_str)

inputs = [i for i in range(100)]
output = [i*10 for i in range(10)]

print(inputs[50], '+', output[4], '-', inputs[2], '-', output[1])

reg_equation = re.compile(r'.*[x|y](\d+).*[x|y](\d+)')
print(reg_equation.match(str))
print(reg_equation.match('0>=x1'))
if reg_equation.match(str):
    print('MATCH')

reg_bound = re.compile(r'[x|y](\d+) (<=|>=|=) [+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$')

reg_equation = re.compile(r'[+-][xy](\d+) ([+-][xy](\d+) )+(<=|>=|=) [+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$')

if reg_bound.match('x1 = +00.156e05'):
    print('MATCH2')

if reg_equation.match('+y0 +x1 >= -0.5'):
    print('MATCH')

x = parser.expr(new_str).compile()
print(eval(x))

print(str)

#nnet_object = MarabouNetworkNNetProperty(network_filename,property_filename)

#print nnet_object.property.equations
#print nnet_object.property.bounds


nnet_object = MarabouNetworkNNetExtended(filename=network_filename,property_filename=property_filename)




nnet_object.tightenBounds()
nnet_object.testInputBounds()
nnet_object.testOutputBounds()

print(nnet_object.property.equations)
print(nnet_object.property.bounds)