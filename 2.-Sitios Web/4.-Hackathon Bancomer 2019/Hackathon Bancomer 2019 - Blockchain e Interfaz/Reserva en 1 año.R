#asumimos DUM
mort<- read.csv("tmort.csv")$Hombres

b=1000000
tasa=0.045
v=1/(1+tasa)
PrimaTarifa=2000
pagos_ano= 5
k=4
x=40
q1 =mort[x+1]/5
cancelacion<- c(.2,.1,.05,.05,.05)
rescate<- c(0,0,100,200,0)
gastos<-c(.5,.1,.05,.05,.05)

im <- pagos_ano*((1+tasa)^(1/pagos_ano)-1)
vm <- 1/(1+im)
kPxt = 1
v_VPAk <- c()
Ak = 0
axtn = 0
for (i in 0:k) {
  qxs <- cancelacion[i+1]*(1-q1)
  pxt <- (1-qxs)*(1-qx)
  VPAk <- (b*q1*vm)+(rescate[i+1]*qxs*vm)+(PrimaTarifa*gastos[i+1])
  v_VPAk <- c(v_VPAk,VPAk)
  Ak <- (vm^(i))*kPxt*((b*q1*vm)+(rescate[i+1]*qxs)+(PrimaTarifa*gastos[i+1]))+Ak
  axtn<-(vm^i)*kPxt+axtn
  kPxt = kPxt*pxt
}

Axtempn<- Ak

Ah <- c()
ah <- c()
qx <- mort[x+1]
qxs <- cancelacion[1]*(1-q1)
pxt <- (1-qxs)*(1-q1)

Ah[1]<-(Axtempn-v_VPAk[1])*(1+im)/pxt
ah[1]<-((axtn-1)*(1+im))/pxt
for (i in 2:5) {
  qx <- mort[x+i]
  qxs <- cancelacion[i]*(1-q1)
  pxt <- (1-qxs)*(1-qx)
  Ah[i]<-((Ah[i-1]-v_VPAk[i])*(1+im))/pxt
  ah[i]<-((ah[i-1]-1)*(1+im))/pxt
}

hV = Ah-(PrimaTarifa/5)*ah
hV


