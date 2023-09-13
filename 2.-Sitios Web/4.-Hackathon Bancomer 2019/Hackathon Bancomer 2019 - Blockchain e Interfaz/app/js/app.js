// const request =
const tmortcsv = "Edad,Hombres,Mujeres\n0, 0.01132 , 0.00783 \n1, 0.00060 , 0.00033 \n2, 0.00054 , 0.00032 \n3, 0.00044 , 0.00028 \n4, 0.00036 , 0.00024 \n5, 0.00029 , 0.00020 \n6, 0.00024 , 0.00018 \n7, 0.00019 , 0.00015 \n8, 0.00021 , 0.00015 \n9, 0.00024 , 0.00016 \n10, 0.00027 , 0.00017 \n11, 0.00030 , 0.00018 \n12, 0.00033 , 0.00019 \n13, 0.00040 , 0.00021 \n14, 0.00047 , 0.00022 \n15, 0.00053 , 0.00024 \n16, 0.00058 , 0.00025 \n17, 0.00063 , 0.00026 \n18, 0.00069 , 0.00029 \n19, 0.00075 , 0.00032 \n20, 0.00080 , 0.00034 \n21, 0.00085 , 0.00036 \n22, 0.00089 , 0.00039 \n23, 0.00090 , 0.00040 \n24, 0.00092 , 0.00042 \n25, 0.00094 , 0.00043 \n26, 0.00096 , 0.00045 \n27, 0.00099 , 0.00047 \n28, 0.00097 , 0.00049 \n29, 0.00096 , 0.00051 \n30, 0.00096 , 0.00053 \n31, 0.00098 , 0.00057 \n32, 0.00101 , 0.00059 \n33, 0.00102 , 0.00061 \n34, 0.00104 , 0.00062 \n35, 0.00108 , 0.00065 \n36, 0.00112 , 0.00068 \n37, 0.00117 , 0.00073 \n38, 0.00130 , 0.00079 \n39, 0.00144 , 0.00086 \n40, 0.00158 , 0.00095 \n41, 0.00173 , 0.00106 \n42, 0.00188 , 0.00119 \n43, 0.00200 , 0.00129 \n44, 0.00215 , 0.00141 \n45, 0.00234 , 0.00156 \n46, 0.00259 , 0.00173 \n47, 0.00275 , 0.00193 \n48, 0.00292 , 0.00214 \n49, 0.00301 , 0.00237 \n50, 0.00038 , 0.00263 \n51, 0.00132 , 0.00292 \n52, 0.00196 , 0.00324 \n53, 0.00203 , 0.00358 \n54, 0.00487 , 0.00396 \n55, 0.00552 , 0.00435 \n56, 0.00626 , 0.00476 \n57, 0.00709 , 0.00518 \n58, 0.00800 , 0.00572 \n59, 0.00901 , 0.00633 \n60, 0.01013 , 0.00707 \n61, 0.01137 , 0.00800 \n62, 0.01274 , 0.00920 \n63, 0.01399 , 0.00916 \n64, 0.01540 , 0.00947 \n65, 0.01697 , 0.01012 \n66, 0.01872 , 0.01114 \n67, 0.02067 , 0.01256 \n68, 0.02250 , 0.01393 \n69, 0.02458 , 0.01564 \n70, 0.02693 , 0.01763 \n71, 0.02959 , 0.01984 \n72, 0.03259 , 0.02220 \n73, 0.03504 , 0.02620 \n74, 0.03754 , 0.03012 \n75, 0.03977 , 0.03376 \n76, 0.04138 , 0.03697 \n77, 0.04205 , 0.03955 \n78, 0.04980 , 0.04580 \n79, 0.05652 , 0.05115 \n80, 0.06245 , 0.05550 \n81, 0.06783 , 0.05878 \n82, 0.06999 , 0.06086 \n83, 0.07215 , 0.06434 \n84, 0.07475 , 0.06810 \n85, 0.07735 , 0.07367 \n86, 0.08673 , 0.08262 \n87, 0.09520 , 0.09105 \n88, 0.10367 , 0.09949 \n89, 0.11215 , 0.10251 \n90, 0.12062 , 0.10862 \n91, 0.12909 , 0.11318 \n92, 0.13756 , 0.12382 \n93, 0.14604 , 0.13180 \n94, 0.16414 , 0.14032 \n95, 0.22929 , 0.19270 \n96, 0.26486 , 0.21840 \n97, 0.36328 , 0.31300 \n98, 0.51387 , 0.46785 \n99, 0.69769 , 0.66196 \n100, 1.00000 , 1.00000 "

App = {
    loading: false,
    contracts: {},

    load: async () => {
      await App.loadWeb3()
      await App.loadAccount()
      await App.loadContract()
      await App.render()
      // ya no es obligatorio
      await App.testContract()
      //await App.altaPoliza()
    },

    // https://medium.com/metamask/https-medium-com-metamask-breaking-change-injecting-web3-7722797916a8
    loadWeb3: async () => {
      if (typeof web3 !== 'undefined') {
        App.web3Provider = web3.currentProvider
        web3 = new Web3(web3.currentProvider)
      } else {
        window.alert("Please connect to Metamask.")
      }
      // Modern dapp browsers...
      if (window.ethereum) {
        window.web3 = new Web3(ethereum)
        try {
          // Request account access if needed
          await ethereum.enable()
          // Acccounts now exposed
          web3.eth.sendTransaction({/* ... */})
        } catch (error) {
          // User denied account access...
        }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        App.web3Provider = web3.currentProvider
        window.web3 = new Web3(web3.currentProvider)
        // Acccounts always exposed
        web3.eth.sendTransaction({/* ... */})
      }
      // Non-dapp browsers...
      else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!')
      }
    },

    loadAccount: async () => {
      // Set the current blockchain account
      App.account = web3.eth.accounts[0]
    },

    loadContract: async () => {
      // Create a JavaScript version of the smart contract
      const seguro = await $.getJSON('Seguro.json');
      App.contracts.Seguro = TruffleContract(seguro);
      App.contracts.Seguro.setProvider(App.web3Provider);

      // Hydrate the smart contract with values from the blockchain
      App.seguro = await App.contracts.Seguro.deployed()
    },

    render: async () => {
      // Prevent double render
      if (App.loading) {
        return
      }

      // Update app loading state
      App.setLoading(true)

      // Render Account
      console.log(App.account);

      // Render Tasks
      //await App.renderTasks()

      // Update loading state
      App.setLoading(false)
    },

    renderTasks: async () => {
      // Load the total task count from the blockchain
      const taskCount = await App.todoList.taskCount()
      const $taskTemplate = $('.taskTemplate')
  
      // Render out each task with a new task template
      for (var i = 1; i <= taskCount; i++) {
        // Fetch the task data from the blockchain
        const task = await App.todoList.tasks(i)
        const taskId = task[0].toNumber()
        const taskContent = task[1]
        const taskCompleted = task[2]
  
        // Create the html for the task
        const $newTaskTemplate = $taskTemplate.clone()
        $newTaskTemplate.find('.content').html(taskContent)
        $newTaskTemplate.find('input')
                        .prop('name', taskId)
                        .prop('checked', taskCompleted)
                        .on('click', App.toggleCompleted)
  
        // Put the task in the correct list
        if (taskCompleted) {
          $('#completedTaskList').append($newTaskTemplate)
        } else {
          $('#taskList').append($newTaskTemplate)
        }
  
        // Show the task
        $newTaskTemplate.show()
      }
    },

    createTask: async () => {
      App.setLoading(true)
      const content = $('#newTask').val()
      await App.todoList.createTask(content)
      window.location.reload()
    },

    toggleCompleted: async (e) => {
      App.setLoading(true)
      const taskId = e.target.name
      await App.todoList.toggleCompleted(taskId)
      window.location.reload()
    },

    setLoading: (boolean) => {
      App.loading = boolean
      const loader = $('#loader')
      const content = $('#content')
      if (boolean) {
        loader.show()
        content.hide()
      } else {
        loader.hide()
        content.show()
      }
    },

    //Aqui empiezan metodos de csmart contracts
    testContract: async () => {
      console.log(App.seguro);

      a = await App.seguro.prueba();
      console.log(a);
    },

    crearPoliza: async () => {
      /**
       * Nombre del asegurado
       * Sexo del asegurado
       * Edad del asegurado
       *
       * Nombre del beneficiario
       * Address del beneficiario
       *
       * Suma Asegurada
       * Prima
       */
      const fuma = $("input[name='Fumar']:checked").val() == "si" ? true : false;
      const toma = $("input[name='Tomar']:checked").val() == "si" ? true : false;
      const enfermedad = $("input[name='Enfermedad']:checked").val() == "si" ? true : false;
      let califiacionMed;
      if(fuma && toma && enfermedad){
        califiacionMed="Malo"
      } else if((fuma && toma) || (fuma && enfermedad) || (toma && enfermedad)){
        califiacionMed="Regular"
      } else {
        califiacionMed="Bien"
      }
      const prima = await calcPrima();
      console.log(prima);
      alert("Tu prima es de: $" + prima);
      window.location.href ="/";

   },

    asegurame: async num_poliza => {

    },
    jalarPrima: async num_poliza =>{
      prima = await App.seguro.miPrima(1);
      const enfermedad = $("#prima").val(2300);
    },
    
    probabReclamo: async ()=>{
      const causaDeMuerte = $('#CausaMuerte').val();
      console.log($('#NumPoliza').val());
      const asegurado = asegurados[$('#NumPoliza').val()-1];
      const fuma = asegurado.fuma;
      const toma = asegurado.toma;
      const enfermedad = asegurado.enfermedad;
      let probab = (0.0005844595)*causaDeMuerte
                  +(-0.5491587838)*fuma
                  +(-0.3440608108)*toma
                  +(-0.1886835586)*enfermedad
                  +(0.9970777025);
      console.log(probab);
      const msg = probab > 0.8 ? "Se le tranferiran los fondos al beneficiario registrado en el blockchain"
                                :"Tu caso sera revisado por un ajustador que se comunicara contigo";
      alert(msg);
      window.location.href="/";

    }
  }

  $(() => {
    $(window).load(() => {
      App.load()
      $('#prima').append("Tu prima es de: $" + 2300);
    })
  })

calcPrima = async () => {
    const bucket_params = {
      Bucket: 'blockvision-dev-serverlessdeploymentbucket-5q30h057v832',
      Key: 'tmort.csv'
    }
    function csvToJSON() {  // get csv file and create stream
      // const stream = S3.getObject(bucket_params).createReadStream();  // convert csv file (stream) to JSON format data
      // const json = await csv2().fromStream(stream);
      const json = $.csv.toObjects(tmortcsv);
      return json
    }
    const tmort =  csvToJSON();
      /**
         * Se calcula el costo de prima
         * Parametros POST
         *  -Edad
         *  -Sexo
         *  -Calificación médica
         *  -suma asegurada
         * Parametros BD
         *  -Tasa de interes
         */
        console.log(tmort);
  
        const sexo = $('#Sexo').val();
        const b = $('#SumaAsegurada').val();
        const fuma = $("input[name='Fumar']:checked").val() == "si" ? true : false;
        const toma = $("input[name='Tomar']:checked").val() == "si" ? true : false;
        const enfermedad = $("input[name='Enfermedad']:checked").val() == "si" ? true : false;
        const edad = $("#Edad").val();
        let calificacionMed;
        if(fuma && toma && enfermedad){
          calificacionMed="Malo"
        } else if((fuma && toma) || (fuma && enfermedad) || (toma && enfermedad)){
          calificacionMed="Regular"
        } else {
          calificacionMed="Bien"
        }
        console.log(sexo);
        console.log(b);
        console.log(calificacionMed);
        console.log(edad);

        /**
         * Valores Aceptados para la calificacion
         * Bien
         * Regular
         * Malo
         */
        //tasa de interes
        let i = 0;
        
        i=.05;
  
        const v = 1/(1+i);
        //logaritmo natural
        const delta =  Math.log(1+i);
        const c = i/delta;
        const gastosPPrima = 800;
        const a = 1; //anualidad
        const gastosXX = 200;
        const gastosSA = .00075;
        const x = edad;
  
        let q;
        if(calificacionMed == "Bien"){
          q = 1;
        } else if (calificacionMed == "Regular"){
          q = 1.0001;
        } else {
          q = 1.0002;
        }
        let seg;
        if(sexo == "M"){
          seg = Number(q*v*tmort[x].Mujeres);
        } else if(sexo == "H"){
          seg = Number(q*v*tmort[x].Hombres);
        }
  
        const premium = seg*c;
        const primaTarifa = ((b*(premium + gastosSA)) + gastosPPrima + (gastosXX * premium));
  
        const response = primaTarifa;
        console.log(response);
  
        return response
}

const asegurados = [
    {
      num_poliza:1,
      nombre:"Pedro Perez Fernandez",
      curp:"PEPF03050819",
      edad:45,
      sexo: "H",
      correo: "peroperez@correo.com",
      contraseña:"1234",
      sumaAsegurada: 1000000,
      fuma:1,
      toma:1,
      enfermedad:1
      },
      {
        num_poliza:2,
        nombre:"Lorena Garcia Flores",
        curp:"LGC04100899",
        edad:30,
        sexo: "M",
        correo: "lalore@gmail.com",
        contraseña:"5678",
        sumaAsegurada: 5000,
        fuma:1,
        toma:0,
        enfermedad:1
        },
      {
        num_poliza:3,
        nombre:"Jorge Valdez Osorio",
        curp:"JVO19603781",
        edad:23,
        sexo: "H",
        correo: "gordou@hotmail.com",
        contraseña:"negrorox",
        sumaAsegurada: 6700,
        fuma:0,
        toma:0,
        enfermedad:0
      },
      {
        num_poliza:4,
        nombre:"Ana Castillo Larrinaga",
        curp:"ACL10863029",
        edad:23,
        sexo: "M",
        correo: "anitauysi@ipn.com",
        contraseña:"anitashiquitita",
        sumaAsegurada: 89000,
        fuma:0,
        toma:1,
        enfermedad:1
      },
      {
        num_poliza:5,
        nombre:"Mini Cooper Audi Gonzales",
        curp:"MCG08651083",
        edad:50,
        sexo: "M",
        correo: "rapidayfuriosa@correo.com",
        contraseña:"contraseña",
        sumaAsegurada: 2000,
        fuma:1,
        toma:0,
        enfermedad:0
      },
  ]