

from maraboupy import Marabou
from maraboupy import MarabouCore
import networkx as nx
import copy
import matplotlib.pyplot as plt
from math import ceil
from maraboupy import MarabouNetworkNX as mnx
from collections import deque

def l2str(layer_i):
    N = 26
    if layer_i == 0:
        return "a"
    out_str = ""
    while layer_i > 0:
        out_str = chr((layer_i % N) + ord('a')) + out_str
        return out_str
    
def n2str(layer_i,node_i):
    return l2str(layer_i) + str(node_i)

class Filter:    
    def __init__(self, weights):
        self.window_size = len(weights)
        self.weights = weights

class Cnn(nx.DiGraph):

    red = '#ff293e'
    blue = '#1f78b4'
    #-------------Graphics: print the network-------------#
    
    def draw_layer(self,layer):      
        self.layout.update({n : ((i * self.draw_scale), - self.next_lyr_pos* self.draw_scale) for i,n in enumerate(layer)})
        self.next_lyr_pos += self.draw_scale

    def cnn_layout(self):
        return self.layout
    
    def print_to_file(self,file, mark=[]):
        fog_x_w = 0.7 * len(self.in_l)
        fig_y_w = 0.7 * max(self.l_num, ceil( 1 * self.l_num))#(2/3)
        plt.figure(figsize=(fog_x_w, fig_y_w), dpi=100)
        labels = {n : n for n in self.nodes()}
        if mark:
            node_colors = [Cnn.red if n in mark else Cnn.blue for n in self.nodes()]
        else :
            node_colors = Cnn.blue       
        nx.draw_networkx(self, pos=self.cnn_layout(), with_labels=True, labels=labels, node_color=node_colors)
        plt.savefig(file)    

    def __str__(self):
        out = ""
        for u,v,w in self.edges.data('weight'):
            out = out + "({},{}), w:={}".format(u,v,w)+ "\n"
        return out

    #-------------Add filters and layers-------------#

    def add_filter(self, f):
        new_l = list()
        self.l_num += 1
        for i in range(len(self.out_l) - f.window_size + 1):
            act_n = n2str(self.l_num, i)
            self.add_node(act_n)
            new_l.append(act_n) 
            for j, w in enumerate(f.weights):
                self.add_edge(self.out_l[i + j], act_n, weight=w)
        self.out_l = new_l
        self.draw_layer(new_l)

    def add_layer(self, w_dict): #Assume some element will be added. in the form of int->int dict.
        self.l_num += 1
        new_l = []
        max_node_new_l = -1
        new_l = list()
        for i in range(len(self.out_l)):
            new_wn = w_dict[i]
            if len(new_wn) == 0:
                continue
            max_n_ind = max(nw[0] for nw in new_wn)
            if max_node_new_l < max_n_ind:
                last_max = max_node_new_l
                max_node_new_l = max_n_ind
                for j in range(last_max + 1, max_node_new_l + 1):
                    self.add_node(n2str(self.l_num, j))
                    new_l.append(n2str(self.l_num, j))
            i_str = n2str(self.l_num - 1, i)
            #print("For i={} we have list={}".format(i,new_wn))
            for wn in new_wn:
                n_str = n2str(self.l_num, wn[0])
                w = wn[1]
                self.add_edge(i_str, n_str, weight=w)
        self.out_l = new_l
        self.draw_layer(new_l)

    #-------------Solve the network-------------#        
        
    def solve(in_prop, out_props):
        #example:
        #in_prop = {n : (-mnx.large, mnx.large) for n in cnn.in_l}
        #out_prop = {n : (-mnx.large, mnx.large) for n in cnn.out_l}
        iq = mnx.networkxToInputQuery(self, in_prop, out_prop)

        print("Start solving")
        vars1, stats1 = MarabouCore.solve(iq, Marabou.createOptions())
        print("Finish solving")
        
        if len(vars1)>0:
            print("SAT")
            print(vars1)
        else:
            print("UNSAT")

    #-------------Init-------------#            

    def __init__(self, in_l_size):
        super().__init__()
        self.out_l = list() # L is for layer.        
        self.in_l = list()  # L is for layer.
        self.l_num = 0  # L is for layer.
        self.next_lyr_pos = 0
        self.layout = dict()
        self.draw_scale = 1
        for i in range(in_l_size):
            new_n = n2str(0,i)
            self.add_node(new_n)
            self.out_l.append(new_n)
            self.in_l.append(new_n)
        self.draw_layer(self.in_l)

    #-------------Find the Cone of Influence of a set of vertices-------------#

    def coi(graph, vertices): # Cone of Influencers
        ancestors = set()
        for vertex in vertices:
            ancestors = set.union(ancestors, nx.algorithms.dag.ancestors(graph, vertex))
        graph_copy = copy.deepcopy(graph)
        for u in graph:
                if (u not in ancestors) and (u not in vertices):
                    graph_copy.remove_node(u)
        return graph_copy


    #https://gist.github.com/Tal-Golan/94d968001b5065260e5dae4774bc6f7a#file-build_networkx_subgraph_from_tf_graph-py
    def tf_graph_to_nx(startingPoints,endPoints):

        def childNodes(curNode):
            isGradientNode=lambda node: node.name.split(sep='/')[0]=='gradients'            
            return set([childNode for op in curNode.consumers() for childNode in op.outputs if not isGradientNode(childNode)])
          
        # visit all nodes in the graph between startingPoint (deep net input) and endPoint (predictions)
        # and build a networkx directed graph        
        DG=nx.DiGraph()
        nodesToVisit=deque(list(startingPoints))
        nodesVisited=deque()
        while nodesToVisit:
            curNode=nodesToVisit.popleft()
            nodesVisited.append(curNode)      
            DG.add_node(curNode)
            if not curNode in endPoint:
                nodesToVisit.extend(childNodes(curNode)-set(nodesVisited)-set(nodesToVisit))
                for childNode in childNodes(curNode):
                    DG.add_edge(curNode,childNode) 
        
        # make sure it's acyclic
        assert nx.is_directed_acyclic_graph(DG), "loops detected in the graph"
        return DG