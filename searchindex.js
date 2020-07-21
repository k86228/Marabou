Search.setIndex({docnames:["API/0_Marabou","API/1_MarabouNetwork","API/2_MarabouNetworkNNet","API/3_MarabouNetworkTF","API/4_MarabouNetworkONNX","API/5_MarabouUtils","API/6_MarabouCore","Develop/0_Guide","Develop/1_PullRequests","Develop/2_CodingStyle","Develop/3_Tests","Develop/4_Examples","Develop/5_Documentation","Examples/0_NNetExample","Examples/1_TensorflowExample","Examples/2_ONNXExample","Examples/3_MarabouCoreExample","Examples/4_DncExample","Examples/index","Setup/0_Installation","Setup/1_Testing","Setup/2_Troubleshooting","index"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,sphinx:56},filenames:["API/0_Marabou.rst","API/1_MarabouNetwork.rst","API/2_MarabouNetworkNNet.rst","API/3_MarabouNetworkTF.rst","API/4_MarabouNetworkONNX.rst","API/5_MarabouUtils.rst","API/6_MarabouCore.rst","Develop/0_Guide.md","Develop/1_PullRequests.md","Develop/2_CodingStyle.md","Develop/3_Tests.md","Develop/4_Examples.md","Develop/5_Documentation.md","Examples/0_NNetExample.rst","Examples/1_TensorflowExample.rst","Examples/2_ONNXExample.rst","Examples/3_MarabouCoreExample.rst","Examples/4_DncExample.rst","Examples/index.rst","Setup/0_Installation.md","Setup/1_Testing.md","Setup/2_Troubleshooting.md","index.rst"],objects:{"maraboupy.Marabou":{createOptions:[0,1,1,""],load_query:[0,1,1,""],read_nnet:[0,1,1,""],read_onnx:[0,1,1,""],read_tf:[0,1,1,""],solve_query:[0,1,1,""]},"maraboupy.MarabouCore":{Equation:[6,2,1,""],InputQuery:[6,2,1,""],Options:[6,2,1,""],PiecewiseLinearFunctionType:[6,2,1,""],Statistics:[6,2,1,""],addMaxConstraint:[6,1,1,""],addReluConstraint:[6,1,1,""],createInputQuery:[6,1,1,""],loadQuery:[6,1,1,""],saveQuery:[6,1,1,""],solve:[6,1,1,""]},"maraboupy.MarabouCore.Equation":{EquationType:[6,2,1,""],addAddend:[6,3,1,""],setScalar:[6,3,1,""]},"maraboupy.MarabouCore.Equation.EquationType":{name:[6,3,1,""]},"maraboupy.MarabouCore.InputQuery":{addEquation:[6,3,1,""],dump:[6,3,1,""],getLowerBound:[6,3,1,""],getNumInputVariables:[6,3,1,""],getNumOutputVariables:[6,3,1,""],getNumberOfVariables:[6,3,1,""],getSolutionValue:[6,3,1,""],getUpperBound:[6,3,1,""],inputVariableByIndex:[6,3,1,""],markInputVariable:[6,3,1,""],markOutputVariable:[6,3,1,""],outputVariableByIndex:[6,3,1,""],setLowerBound:[6,3,1,""],setNumberOfVariables:[6,3,1,""],setUpperBound:[6,3,1,""]},"maraboupy.MarabouCore.PiecewiseLinearFunctionType":{name:[6,3,1,""]},"maraboupy.MarabouCore.Statistics":{getMaxDegradation:[6,3,1,""],getMaxStackDepth:[6,3,1,""],getNumConstraintFixingSteps:[6,3,1,""],getNumMainLoopIterations:[6,3,1,""],getNumPops:[6,3,1,""],getNumPrecisionRestorations:[6,3,1,""],getNumSimplexPivotSelectionsIgnoredForStability:[6,3,1,""],getNumSimplexUnstablePivots:[6,3,1,""],getNumSplits:[6,3,1,""],getNumTableauPivots:[6,3,1,""],getNumVisitedTreeStates:[6,3,1,""],getTimeSimplexStepsMicro:[6,3,1,""],getTotalTime:[6,3,1,""],hasTimedOut:[6,3,1,""]},"maraboupy.MarabouNetwork":{MarabouNetwork:[1,2,1,""]},"maraboupy.MarabouNetwork.MarabouNetwork":{addEquality:[1,3,1,""],addEquation:[1,3,1,""],addInequality:[1,3,1,""],addMaxConstraint:[1,3,1,""],addRelu:[1,3,1,""],clear:[1,3,1,""],equList:[1,4,1,""],evaluate:[1,3,1,""],evaluateWithMarabou:[1,3,1,""],findError:[1,3,1,""],getMarabouQuery:[1,3,1,""],inputVars:[1,4,1,""],lowerBoundExists:[1,3,1,""],lowerBounds:[1,4,1,""],maxList:[1,4,1,""],numVars:[1,4,1,""],outputVars:[1,4,1,""],participatesInPLConstraint:[1,3,1,""],reluList:[1,4,1,""],saveQuery:[1,3,1,""],setLowerBound:[1,3,1,""],setUpperBound:[1,3,1,""],solve:[1,3,1,""],upperBoundExists:[1,3,1,""],upperBounds:[1,4,1,""],varsParticipatingInConstraints:[1,4,1,""]},"maraboupy.MarabouNetworkNNet":{MarabouNetworkNNet:[2,2,1,""]},"maraboupy.MarabouNetworkNNet.MarabouNetworkNNet":{addEquality:[2,3,1,""],addEquation:[2,3,1,""],addInequality:[2,3,1,""],addMaxConstraint:[2,3,1,""],addRelu:[2,3,1,""],biases:[2,4,1,""],clear:[2,3,1,""],evaluate:[2,3,1,""],evaluateWithMarabou:[2,3,1,""],findError:[2,3,1,""],getInputMaximum:[2,3,1,""],getInputMinimum:[2,3,1,""],getMarabouQuery:[2,3,1,""],inputMaximums:[2,4,1,""],inputMeans:[2,4,1,""],inputMinimums:[2,4,1,""],inputRanges:[2,4,1,""],inputSize:[2,4,1,""],layerSizes:[2,4,1,""],lowerBoundExists:[2,3,1,""],maxLayersize:[2,4,1,""],numLayers:[2,4,1,""],numberOfVariables:[2,3,1,""],outputMean:[2,4,1,""],outputRange:[2,4,1,""],outputSize:[2,4,1,""],participatesInPLConstraint:[2,3,1,""],saveQuery:[2,3,1,""],setLowerBound:[2,3,1,""],setUpperBound:[2,3,1,""],solve:[2,3,1,""],upperBoundExists:[2,3,1,""],weights:[2,4,1,""]},"maraboupy.MarabouNetworkONNX":{MarabouNetworkONNX:[4,2,1,""]},"maraboupy.MarabouNetworkONNX.MarabouNetworkONNX":{addEquality:[4,3,1,""],addEquation:[4,3,1,""],addInequality:[4,3,1,""],addMaxConstraint:[4,3,1,""],addRelu:[4,3,1,""],clear:[4,3,1,""],evaluate:[4,3,1,""],evaluateWithMarabou:[4,3,1,""],evaluateWithoutMarabou:[4,3,1,""],findError:[4,3,1,""],getMarabouQuery:[4,3,1,""],lowerBoundExists:[4,3,1,""],participatesInPLConstraint:[4,3,1,""],saveQuery:[4,3,1,""],setLowerBound:[4,3,1,""],setUpperBound:[4,3,1,""],solve:[4,3,1,""],upperBoundExists:[4,3,1,""]},"maraboupy.MarabouNetworkTF":{MarabouNetworkTF:[3,2,1,""]},"maraboupy.MarabouNetworkTF.MarabouNetworkTF":{addEquality:[3,3,1,""],addEquation:[3,3,1,""],addInequality:[3,3,1,""],addMaxConstraint:[3,3,1,""],addRelu:[3,3,1,""],clear:[3,3,1,""],evaluate:[3,3,1,""],evaluateWithMarabou:[3,3,1,""],evaluateWithoutMarabou:[3,3,1,""],findError:[3,3,1,""],getMarabouQuery:[3,3,1,""],lowerBoundExists:[3,3,1,""],participatesInPLConstraint:[3,3,1,""],readTF:[3,3,1,""],saveQuery:[3,3,1,""],setLowerBound:[3,3,1,""],setUpperBound:[3,3,1,""],solve:[3,3,1,""],upperBoundExists:[3,3,1,""]},"maraboupy.MarabouUtils":{Equation:[5,2,1,""]},"maraboupy.MarabouUtils.Equation":{EquationType:[5,4,1,""],addAddend:[5,3,1,""],addendList:[5,4,1,""],scalar:[5,4,1,""],setScalar:[5,3,1,""]},maraboupy:{Marabou:[0,0,0,"-"],MarabouCore:[6,0,0,"-"],MarabouNetwork:[1,0,0,"-"],MarabouNetworkNNet:[2,0,0,"-"],MarabouNetworkONNX:[4,0,0,"-"],MarabouNetworkTF:[3,0,0,"-"],MarabouUtils:[5,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:attribute"},terms:{"0_nnetexampl":13,"1_tensorflowexampl":14,"2_onnxexampl":15,"3_maraboucoreexampl":16,"4_dncexampl":17,"64bit":21,"8x16":15,"abstract":1,"break":8,"case":[8,9,20],"class":[1,2,3,4,5,6],"default":[0,1,2,3,4,6,9,14,15,19,21],"export":13,"float":[0,1,2,3,4,5,6],"function":[0,1,2,3,4,9,10,11,20],"import":[9,10,11,13,14,15,16,17,21],"int":[0,1,2,3,4,5,6],"new":[1,2,3,4,8,9,10,11,12,18,20],"return":[0,1,2,3,4,6,9,13,16,17,22],"true":[0,1,2,3,4,17],"try":[4,10],"var":[1,2,3,4,16],"while":[8,9,21],Adding:18,For:[9,10,19],RHS:5,The:[0,2,3,7,9,10,11,12,14,15,16,18,19,20,21],Then:10,There:9,These:[18,20],Use:9,__file__:10,about:[7,9,10,18],abov:9,abs:[13,14,15],absolutevalu:6,acas_exampl:[13,17],acasxu_run2a_1_1_tiny_2:[13,17],access:[7,8,20],accomod:20,add:[1,2,3,4,5,6,8,9,10,12,16,19,20],addaddend:[5,6,16],added:[10,18,19,20,22],addend:5,addendlist:5,addequ:[1,2,3,4,6,16],addinequ:[1,2,3,4],adding:[10,11,12,20],addit:[7,12,19],addmaxconstraint:[1,2,3,4,6],addrelu:[1,2,3,4],addreluconstraint:[6,16],adjust:2,affili:[0,1,2,3,4,5,9,13,14,15,16,17],after:[0,1,2,3,4,7,8,9,11,18,19,20],against:15,all:[0,1,2,3,4,5,7,8,9,12,13,14,15,16,17,18,20,22],allow:[9,10,11,12,20],alongsid:[19,20],alreadi:2,also:[0,3,9,10,11,19,20],altern:[11,18],alwai:8,andrew:[0,1,2,16,17],ani:[1,2,3,4,10,21],anyth:9,api:[9,10,19,20,22],appear:[9,11,12],append:[13,17,18],appropri:10,approv:8,approxim:[14,15],arg0:6,arg1:[6,9],arg2:[6,9],arg:9,argument:[9,10],arrai:[1,2,3,4,13],assert:[10,13,15,17],assign:22,attempt:20,attr1:9,attr2:9,attribut:9,author:[0,1,2,3,4,5,8,9,13,14,15,16,17],automat:[8,9,11,18,19],avail:[19,20],backward:1,base:[1,2,3,4,5,6,22],basic:[10,18],batch:[14,15],becaus:10,been:[9,10,18,19,20],befor:[0,8,11,20],begin:[9,10,11,18],behav:10,being:11,below:9,benefit:8,best:7,between:[1,2,3,4,9,20],bia:2,bias:2,big:8,binari:19,bind:6,bit:19,block:[9,11,18],bold:11,bool:[0,1,2,3,4,6],boost:19,both:[14,19,20],bottom:11,bound:[1,2,3,4,13,14,15,16],branch:[8,11],brief:9,briefli:9,build:[7,9,11,20,21],built:[9,18,19,20,21],call:[14,15],camelcas:9,can:[0,3,7,8,9,10,11,12,14,15,18,19,20,21,22],cannot:[1,2,3,4],capit:9,caption:12,caught:10,caus:21,cav:16,chanc:9,chang:[7,8,10,19],charact:18,check:[1,2,3,4,9,11,15,19],chelsea:3,choos:[14,15],christoph:[0,1,2,3,5,13,14,16],chunk:8,clang:21,clear:[1,2,3,4],click:[13,14,15,16,17],clone:19,cmake:[19,21],cmakelist:20,code:[5,10,11,13,14,15,16,17,18,20,22],coeff:[1,2,3,4],coeffici:[1,2,3,4,5],coeffs_i:[1,2,3,4],collect:18,colon:9,com:19,combin:10,command:[19,20,21],comment:[7,8,9,11,18],commit:8,common:21,compil:[19,21],compon:20,comput:[1,2,3,4],conatin:1,concis:9,config:19,configur:21,consequ:21,consist:9,constant:[1,2,3,4],constraint:[1,2,3,4,6,13,15,16,17,20,22],construct:[0,2,3,4],contain:[0,1,2,3,4,5,6,7,8,9,10,11,18],contribut:22,contributer1:9,contributer2:9,contributor:[0,1,2,3,4,5,7,9,13,14,15,16,17],control:19,conv_mp1:15,conveni:5,convert:[1,2,3,4],copi:[0,1,2,3,4,5,9,13,14,15,16,17,19],copyright:[0,1,2,3,4,5,9,13,14,15,16,17],correct:[9,11,18],correctli:[9,10,11,20],correspond:[0,2,3,4],could:11,cover:10,creat:[0,3,6,7,8,9,10,11,12,14,15,18,19,20,21],createinputqueri:6,createopt:[0,15,16,17],ctest:20,current:[0,1,2,3,4,5,8,9,11,13,14,15,16,17],cygwin:21,date:8,dbuild_python:[19,21],dcmake_build_typ:19,debug:[8,19],decdi:20,deep:12,defin:[0,1,6,9,10,20],delta:15,demonstr:11,denot:18,depend:19,deploi:11,deriv:[2,3,4,18],describ:[7,20],descript:[6,9,20],descripton:9,desir:22,desktop:19,determin:12,develop:[7,8,9,19,22],dict:[0,1,2,3,4,6],dictionari:[0,1,2,3,4,6],did:13,differ:[9,11,21],dimens:[14,15],direct:6,directli:[7,11,20],directori:[0,1,2,3,4,5,9,10,12,13,14,15,16,17,18,19,20,21],dirnam:10,disabl:8,discourag:8,disjunct:6,displai:[11,12],divid:[0,20],dnc:[0,18,22],doc:[9,11,12,18],docst:9,docstr:10,document:[7,8,9,10,11,18,22],doe:9,doesn:5,done:[8,12],doubt:9,down:8,download:[11,13,14,15,16,17,18,19],dpython_execut:21,dump:6,durat:0,dure:19,each:[1,2,3,4,5,8,9,10,20],easier:9,edit:12,either:[0,3,8,19,22],element:[1,2,3,4,6],els:16,empti:[0,1,2,3,4,6,9],enabl:19,encod:22,encount:21,encourag:8,end:[9,11,20],engin:20,ensur:[9,10,11,19,20],environment:19,equal:[1,2,3,4,11],equat:[1,2,3,4,5,6,9,15,16,22],equation1:16,equation2:16,equation3:16,equationtyp:[5,6],equlist:1,error:[1,2,3,4,9,10,21],etc:11,eval:13,evalu:[1,2,3,4,13,15],evaluatewithmarab:[1,2,3,4,13,15],evaluatewithoutmarab:[3,4,15],everyon:8,everyth:[8,20],exampl:[9,18,20,22],examples_jupyt:18,examples_python:18,except:[7,9],execut:[11,19],exist:[9,10,12,18,22],expect:[7,8,20],explain:[9,10,22],extens:[9,20],factor:0,fail:20,failur:20,fals:[0,2],fc1:[14,15],featur:8,few:9,file:[0,1,2,3,4,5,6,11,12,13,14,15,16,17,18,19,20,21],filenam:[0,1,2,3,4,6,10,14,15,20],filepath:6,fill:12,find:[1,2,3,4,10],finderror:[1,2,3,4],finish:[0,1,2,3,4,8],first:[0,13,14,15,19],fit:5,fix:[8,13],flatten:13,focus:9,folder:[10,11,12,13,18,19,20],follow:[9,10,11,12,18],forc:21,fork:[7,8],form:9,format:[0,2,3,4,9,10,11,12,20,22],forward:1,found:[7,9,10,11,13,21],from:[0,2,3,4,6,7,8,9,10,11,13,14,15,16,17,19,20,21],frozen:[0,3],frozen_graph:14,full:[13,14,15,16,17],futur:[9,11,20],galleri:[11,13,14,15,16,17,18],gcc:21,gener:[1,7,8,9,10,11,13,14,15,16,17,18,19,22],get:[2,8,14,15,19],getinputmaximum:2,getinputminimum:2,getinputqueri:0,getlowerbound:6,getmarabouqueri:[1,2,3,4],getmaxdegrad:6,getmaxstackdepth:6,getnumberofvari:6,getnumconstraintfixingstep:6,getnuminputvari:6,getnummainloopiter:6,getnumoutputvari:6,getnumpop:6,getnumprecisionrestor:6,getnumsimplexpivotselectionsignoredforst:6,getnumsimplexunstablepivot:6,getnumsplit:[6,13],getnumtableaupivot:6,getnumvisitedtreest:6,getsolutionvalu:6,gettimesimplexstepsmicro:6,gettotaltim:[6,13],getupperbound:6,git:[8,13,19],github:[8,19],give:[9,18],given:[0,1,2,3,4,6,20],glob:12,going:11,good:11,googl:[9,10],graph:[0,3],grayscal:15,greater:20,guid:[9,22],guidelin:[7,22],hand:[1,2,3,4],handl:[6,10],has:[8,10,11,14,15,18,19,20],hastimedout:6,have:[8,9,10,18,19,20,21],header:11,help:[11,20],helper:10,here:[7,9,11,13,14,15,16,17,19,21],highli:8,histori:8,home:13,how:[0,1,2,3,4,6,10,12,18,21,22],howev:[11,19],html:[9,11,12],http:19,idea:11,ideal:10,identifi:20,imag:15,immedi:9,implement:22,improv:[9,12],includ:[9,18,20],incorpor:[0,2,11],index:[2,12],indic:[11,12,18],individu:20,inequ:[1,2,3,4],inform:[0,1,2,3,4,5,7,9,10,11,13,14,15,16,17,18],init:9,initi:[0,9],initialdivid:[0,17],initialtimeout:0,input:[0,1,2,3,4,6,13,14,15,20],input_pars:[13,17],inputmaximum:2,inputmean:2,inputminimum:2,inputnam:[0,3,4,14,15],inputpoint:15,inputqueri:[0,1,2,3,4,6,16],inputrang:2,inputs:2,inputvalu:[1,2,3,4],inputvar:[1,2,14,15],inputvariablebyindex:6,instal:[20,21,22],instead:[9,20,21],institut:[0,1,2,3,4,5,9,13,14,15,16,17],instruct:[9,11],integ:20,interest:8,interfac:[0,8,19,21,22],intermedi:8,intern:20,investig:21,involv:1,ipq:0,ipynb:[13,14,15,16,17],issu:[20,21],its:21,join:10,julian:[0,1,2,3,4,5,13,14,15,16,17],jupyt:[13,14,15,16,17,18],just:9,kei:0,kj_tinytaxinet:15,known:[1,2,3,4],kyle:[0,1,2,3,4,5,13,14,15,16,17],larg:16,largest:2,last:[0,14,15,19],later:19,layer:[0,2],layers:2,lazaru:[0,1,2,3,5,13,14,16],least:[8,20,21],len:[15,16,17],less:[8,15],letter:9,level:[0,1,2,3,4,5,9,12,13,14,15,16,17,20],leverag:11,librari:[19,20],licens:[0,1,2,3,4,5,9,13,14,15,16,17],like:[9,19,21],line:[9,11,18,21],linear:[1,2,3,4,8,22],link:[9,11],linux:21,list:[0,1,2,3,4,5,9,13,14,15,16,17],live:[10,11],load:[0,3,6,13,17],load_queri:0,loadqueri:6,local:[11,15],locat:[9,10,19,20],log:[1,2,3,4,14],longer:9,look:[9,11,18,21],lower:[1,2,3,4,9,13,16],lowerbound:1,lowerboundexist:[1,2,3,4],machin:19,made:8,mai:[7,20,21],main:[0,8,10],major:8,make:[0,8,9,10,11,18,20,21],mani:12,map:15,marab:[1,2,3,4,5,6,8,9,10,13,14,15,16,17,18,21,22],marabopi:9,maraboucor:[18,19,20,22],marabouev:15,marabouin:0,marabounetwork:[2,3,4,22],marabounetworknnet:[0,22],marabounetworkonnx:[0,22],marabounetworktf:[0,22],marabouopt:6,maraboupi:[0,1,2,3,4,5,6,7,9,10,11,12,13,14,15,16,17,18,19,21],maraboupoi:20,marabouutil:[9,22],markdown:12,markinputvari:6,markoutputvari:6,master:[7,8,11],match:9,matric:2,max:[1,2,3,4,6,13],maxdepth:12,maximum:2,maxlayers:2,maxlist:1,mean:2,member:6,menu:[11,12],merg:[7,8,11],meta:9,method:10,minimum:2,minor:[7,8],minut:[13,14,15,16,17],miss:[8,20],mkdir:[10,19],mode:[0,17,19],model:[0,3],modeltyp:[0,3],modifi:9,monthli:20,more:[8,9,10,11,15],most:8,mps:20,multipl:9,multiprocess:19,must:[0,2,3,19],name:[0,3,4,6,9,11,12,14,15,18,19,20],nconvolut:15,ndiffer:15,necessari:[9,20],need:[8,9,10,12,17,19,20],net1:13,net2:13,net:17,network:[0,1,2,3,4,6,10,13,14,17,18,20,22],neural:[1,2,3,4,10,20,22],neuralnetworkverif:19,nnet:[0,1,2,3,4,17,18,20,22],nnet_file_nam:17,nnetfil:13,node:[0,4],none:[0,1,2,3,4,6],nonnx:15,normal:[0,2],note:[10,12,20],notebook:[11,13,14,15,16,17,18],notic:21,num:20,number:[0,1,2,3,4,5,8,11,12,14,15,18,20],numberofvari:2,numlay:2,numpi:[1,4,13,14,15,17,20],numvar:1,numwork:0,object:[0,1,2,3,4,5,6],obtain:0,older:19,omit:[9,19],ommit:9,onc:20,one:[8,18,21],ones:15,onli:[7,8,9,19],onlin:[0,11],onlinedivid:0,onnx:[0,1,2,3,4,18,20,22],onnxev:15,onnxruntim:[15,20],onto:7,open:19,oper:[0,3,14,15],option:[0,1,2,3,4,6,9,12,15,16,17,20],order:[8,11,12,18,19],origin:[7,8],other:[5,9,10,13,19,20],otherwis:[0,1,2,3,4,6],out:[0,1,2,3,4],outer:2,output:[0,1,2,3,4,6,11,13,14,15,17,20],outputmean:2,outputnam:[0,3,4,14,15],outputrang:2,outputs:2,outputsexpect:13,outputsmarab:13,outputvalu:3,outputvar:[1,13,14,15,17],outputvariablebyindex:6,over:8,own:[7,8,21],packag:20,page:[8,9,10,11,12],pain:8,paper:16,parallel:20,paramet:[0,1,2,3,4,5,6],parent:9,parser:20,part:[0,1,2,3,4,5,9,13,14,15,16,17],particip:[1,2,3,4],participatesinplconstraint:[1,2,3,4],particular:[20,21],partit:0,pass:20,path:[0,1,2,3,4,10,13,17,19,20,21],perform:[0,1,2,3,4,6,8],piecewis:[1,2,3,4,22],piecewiselinearfunctiontyp:6,pip:20,place:[17,19,20],placehold:[14,15],plot:11,point:[1,2,3,4,10,13,15],portion:10,possibl:[8,21],practic:7,preced:18,prefer:[8,9,19],prefix:[10,11,12,18],present:19,primarili:8,print:[0,1,2,3,4,15,16],privat:9,privileg:8,problem:[0,21],proc:20,proc_num:19,process:[19,20],produc:[15,18,19],progress:8,project:[0,1,2,3,4,5,9,13,14,15,16,17],prompt:19,properli:20,properti:[2,6,20,22],protobuf:[0,3],provid:22,pull:[7,10,11,12,20,22],purpos:[8,10],push:[7,8],pybind11:[6,19,22],pybind11_builtin:6,pybind11_object:6,pytest:[10,20],python2:21,python3:[19,21],python:[5,9,11,13,14,15,16,17,18,19,22],pythoninterp:21,pythonpath:[10,18,19],queri:[0,1,2,3,4,6,13,15,16,17,22],rang:[2,15],rather:21,read:[0,3],read_nnet:[0,13,17],read_onnx:[0,15],read_tf:[0,14],readabl:9,readm:[9,11],readtf:3,reason:[9,10],rebas:8,recommend:[8,20],redirect:[0,1,2,3,4,6],reduc:9,regardless:10,regress:20,regresslevel:20,rel:10,relat:8,releas:19,relev:9,relu:[1,2,3,4,6,16],relulist:1,remain:18,remov:8,replac:20,repo:19,repositori:[7,8,19],repres:[0,1,2,3,4,5],request:[7,10,20,22],requir:[8,10,20],reserv:[0,1,2,3,4,5,9,13,14,15,16,17],reset:[1,2,3,4],resid:8,resourc:[10,14,15,18,20],respect:[0,3,20],restrict:15,restructredtext:11,restructuredtext:[11,12],restucturedtext:11,result:[15,20],return1:9,return2:9,review:[7,8],right:[0,1,2,3,4,5,9,13,14,15,16,17],robust:15,root:[10,18,19,20,21],rst:12,rule:[7,18],run:[10,11,13,14,15,16,17,18,19,20,21],sai:11,same:[13,15],sat:[15,16,20,22],satisfi:[0,1,2,3,4,6,17,22],save:6,savedmodel:[0,3],savedmodel_v1:[0,3],savedmodel_v2:[0,3],savedmodeltag:[0,3],savequeri:[1,2,3,4,6],scalar:[1,2,3,4,5],script:[11,13,14,15,16,17],second:[0,11,13,14,15,16,17],section:[9,12],see:[0,1,2,3,4,5,9,12,13,14,15,16,17,18,19],select:[8,19],self:[6,8],separ:8,sepear:9,serial:[0,1,2,3,4,6],set:[1,2,3,4,5,6,10,13,14,15,16,20,21],setlowerbound:[1,2,3,4,6,13,14,15,16,17],setnumberofvari:[6,16],setscalar:[5,6,16],setup:[12,15,16,21,22],setupperbound:[1,2,3,4,6,14,15,16],shantanu:[1,3,5],shape:15,share:[8,19,20],should:[0,2,7,8,9,10,11,12,15,16,17,18,20,21],shouldn:9,show:[9,11,12,18,21,22],shown:9,side:[1,2,3,4],sidran:3,sign:11,similar:9,simpl:11,simpli:19,sinc:[14,15],size:[2,14,15],skip:9,small:[8,20],smaller:8,smt:22,solut:[0,1,2,3,4,6],solv:[0,1,2,3,4,6,13,14,15,16,17,22],solve_queri:0,solver:[1,2,3,4,14,15,22],some:[1,7,9,10,20,21],someth:9,sourc:[0,1,2,3,4,5,6,9,13,14,15,16,17,18,19],space:9,specif:20,specifi:[0,1,2,3,4,12,14,15,20],sphinx:[11,13,14,15,16,17,18],split:8,squash:8,src:[13,17,20],standard:[6,11],start:9,stat:[0,1,2,3,4,6,14,15,16,17],statement:10,statist:[0,1,2,3,4,6,13],stats1:13,step:[8,18],still:[20,21],sto:0,store:18,str:[0,1,2,3,4,6],string:[1,2,3,4],strpath:10,style:22,sub:[0,20],subfold:12,submit:[7,8],subsect:18,succeed:[7,8],sum_i:[1,2,3,4],suppli:22,support:[5,20],sure:[10,18,20,21],syntax:10,sys:[13,17],system:[1,2,3,4,20],tab:9,tag:[0,3],take:[6,9],team:[8,9],tempfil:10,tensorflow:[0,3,18,20,22],term:5,test:[8,9,13,15,19,21,22],test_nnet:20,test_requir:20,text:[11,18],thakoor:[1,3,5],than:[8,20,21],thei:[8,9,18],themselv:8,therefor:[8,9],thi:[0,1,2,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],thorugh:20,those:20,though:[9,10],three:[20,21],time:[0,13,14,15,16,17,20],timeout:0,timeoutfactor:0,timeoutinsecond:0,titl:[8,18],tmpdir:10,tmpfolder:10,toctre:12,too:8,tool:22,top:[0,1,2,3,4,5,9,13,14,15,16,17,18],total:[1,13,14,15,16,17],train:[14,15],travi:[7,8],troubleshoot:22,tupl:[0,1,2,3,4,5,6,9],turn:17,two:[8,15],txt:20,type:[0,1,2,3,4,5,6,9,19,20],typo:7,underscor:9,understand:9,unit:20,unsat:[0,1,2,3,4,6,15,16,20,22],until:20,updat:[8,9],upper:[1,2,3,4,13,16],upperbound:1,upperboundexist:[1,2,3,4],use:[0,1,2,3,4,8,9,10,18,20,21],used:[0,3,6,8,9,10,11,18,19],useful:8,usemarab:[1,2,3,4],user:[0,3,9,10,11,13,21],uses:[19,22],using:[1,2,3,4,8,9,10,11,20,21,22],val:[0,1,2,3,4,6,14,15,17],valid:9,vals1:13,valu:[0,1,2,3,4,6,9,13,15,17,22],var1:6,var2:6,variabl:[0,1,2,3,4,5,6,9,10,13,14,15,16,17,19,20,22],varieti:11,vars_i:[1,2,3,4],varsparticipatinginconstraint:1,vector:2,verbos:[0,1,2,3,4,15,17],veri:[7,9],verif:22,version:[0,1,2,3,4,5,9,13,14,15,16,17,19,20,21],via:[6,7,8,20],wai:[10,11],want:[20,21],warn:20,weekli:20,weight:2,well:[10,19,21],what:20,when:[0,8,9,10,11,13,21],where:[1,2,10,19,20,21],whether:[0,1,2,3,4,19],which:[0,7,11,12,17,19],why:11,wiki:[7,9],win64:19,window:21,within:20,without:10,word:9,work:[8,19],worker:[0,8],workload:19,write:[1,2,3,4,7,8,9,11,18],written:[2,9,10,19],x1b:16,x1f:16,x2b:16,x2f:16,x86:21,y_out:[14,15],yet:9,yml:21,you:[8,9,10,12,13,14,15,19,20,21],your:[8,9,10,12,19,21],zip:18},titles:["Marabou","MarabouNetwork","MarabouNetworkNNet","MarabouNetworkTF","MarabouNetworkONNX","MarabouUtils","MarabouCore","Contributing to Marabou","Pull Requests","Coding Style Guidelines","Tests","Examples","Documentation","NNet Example","Tensorflow Example","ONNX Example","MarabouCore Example","DNC Example","&lt;no title&gt;","Installation","Testing","Troubleshooting","Maraboupy"],titleterms:{"32bit":21,"class":9,build:19,code:9,comparison:21,connect:15,contribut:7,convolut:15,correct:21,dnc:17,docstr:9,document:12,ensur:21,exampl:[11,13,14,15,16,17],execut:[20,21],file:[9,10],fulli:15,guidelin:9,instal:19,instruct:19,linux:19,maco:19,marab:[0,7,19,20],maraboucor:[6,16],marabounetwork:1,marabounetworknnet:2,marabounetworkonnx:4,marabounetworktf:3,maraboupi:[20,22],marabouutil:5,max:15,method:9,network:15,neural:15,nnet:13,onnx:15,output:21,pool:15,pull:8,python:[20,21],request:8,studio:19,style:9,temporari:10,tensorflow:14,test:[10,20],travi:21,troubleshoot:21,used:21,using:19,visual:19,window:19,write:10}})