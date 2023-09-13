'use strict';

const aws = require('aws-sdk');
const dynamoDb = new aws.DynamoDB.DocumentClient();
const S3 = new aws.S3();
const csv2 = require('csvtojson');

const tmortcsv = "Edad,Hombres,Mujeres\n0, 0.01132 , 0.00783 \n1, 0.00060 , 0.00033 \n2, 0.00054 , 0.00032 \n3, 0.00044 , 0.00028 \n4, 0.00036 , 0.00024 \n5, 0.00029 , 0.00020 \n6, 0.00024 , 0.00018 \n7, 0.00019 , 0.00015 \n8, 0.00021 , 0.00015 \n9, 0.00024 , 0.00016 \n10, 0.00027 , 0.00017 \n11, 0.00030 , 0.00018 \n12, 0.00033 , 0.00019 \n13, 0.00040 , 0.00021 \n14, 0.00047 , 0.00022 \n15, 0.00053 , 0.00024 \n16, 0.00058 , 0.00025 \n17, 0.00063 , 0.00026 \n18, 0.00069 , 0.00029 \n19, 0.00075 , 0.00032 \n20, 0.00080 , 0.00034 \n21, 0.00085 , 0.00036 \n22, 0.00089 , 0.00039 \n23, 0.00090 , 0.00040 \n24, 0.00092 , 0.00042 \n25, 0.00094 , 0.00043 \n26, 0.00096 , 0.00045 \n27, 0.00099 , 0.00047 \n28, 0.00097 , 0.00049 \n29, 0.00096 , 0.00051 \n30, 0.00096 , 0.00053 \n31, 0.00098 , 0.00057 \n32, 0.00101 , 0.00059 \n33, 0.00102 , 0.00061 \n34, 0.00104 , 0.00062 \n35, 0.00108 , 0.00065 \n36, 0.00112 , 0.00068 \n37, 0.00117 , 0.00073 \n38, 0.00130 , 0.00079 \n39, 0.00144 , 0.00086 \n40, 0.00158 , 0.00095 \n41, 0.00173 , 0.00106 \n42, 0.00188 , 0.00119 \n43, 0.00200 , 0.00129 \n44, 0.00215 , 0.00141 \n45, 0.00234 , 0.00156 \n46, 0.00259 , 0.00173 \n47, 0.00275 , 0.00193 \n48, 0.00292 , 0.00214 \n49, 0.00301 , 0.00237 \n50, 0.00038 , 0.00263 \n51, 0.00132 , 0.00292 \n52, 0.00196 , 0.00324 \n53, 0.00203 , 0.00358 \n54, 0.00487 , 0.00396 \n55, 0.00552 , 0.00435 \n56, 0.00626 , 0.00476 \n57, 0.00709 , 0.00518 \n58, 0.00800 , 0.00572 \n59, 0.00901 , 0.00633 \n60, 0.01013 , 0.00707 \n61, 0.01137 , 0.00800 \n62, 0.01274 , 0.00920 \n63, 0.01399 , 0.00916 \n64, 0.01540 , 0.00947 \n65, 0.01697 , 0.01012 \n66, 0.01872 , 0.01114 \n67, 0.02067 , 0.01256 \n68, 0.02250 , 0.01393 \n69, 0.02458 , 0.01564 \n70, 0.02693 , 0.01763 \n71, 0.02959 , 0.01984 \n72, 0.03259 , 0.02220 \n73, 0.03504 , 0.02620 \n74, 0.03754 , 0.03012 \n75, 0.03977 , 0.03376 \n76, 0.04138 , 0.03697 \n77, 0.04205 , 0.03955 \n78, 0.04980 , 0.04580 \n79, 0.05652 , 0.05115 \n80, 0.06245 , 0.05550 \n81, 0.06783 , 0.05878 \n82, 0.06999 , 0.06086 \n83, 0.07215 , 0.06434 \n84, 0.07475 , 0.06810 \n85, 0.07735 , 0.07367 \n86, 0.08673 , 0.08262 \n87, 0.09520 , 0.09105 \n88, 0.10367 , 0.09949 \n89, 0.11215 , 0.10251 \n90, 0.12062 , 0.10862 \n91, 0.12909 , 0.11318 \n92, 0.13756 , 0.12382 \n93, 0.14604 , 0.13180 \n94, 0.16414 , 0.14032 \n95, 0.22929 , 0.19270 \n96, 0.26486 , 0.21840 \n97, 0.36328 , 0.31300 \n98, 0.51387 , 0.46785 \n99, 0.69769 , 0.66196 \n100, 1.00000 , 1.00000 "

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.prima = async event => {
  const tmort = [];
  const bucket_params = {
    Bucket: 'blockvision-dev-serverlessdeploymentbucket-5q30h057v832',
    Key: 'tmort.csv'
  }
  async function csvToJSON() {  // get csv file and create stream
    // const stream = S3.getObject(bucket_params).createReadStream();  // convert csv file (stream) to JSON format data
    // const json = await csv2().fromStream(stream);
    const json = await csv2().fromString(tmortcsv);
    return Promise.resolve(json);
  }
  await csvToJSON().then((tmort)=>{
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

      // const data = JSON.parse(event.body);
      const data = event.body;
      const sexo = data.sexo;
      const b = data.sumaAsegurada;
      /**
       * Valores Aceptados para la calificacion
       * Bien
       * Regular
       * Malo
       */
      const calificacionMedica = data.calificacionMedica;
      //tasa de interes
      let i = 0;
      const params = {
        TableName : process.env.DYNAMODB_TABLE,
        Key:{
          id: "1"
        }
      }
      i=.05;

        const v = 1/(1+i);
      //logaritmo natural
      const delta =  Math.log(1+i);
      const c = i/delta;
      const gastosPPrima = 530;
      const a = 1; //anualidad
      const gastosXX = 200;
      const gastosSA = .00075;
      const x = data.edad;

      let q;
      if(calificacionMedica == "Bien"){
        q = 1;
      } else if (calificacionMedica == "Regular"){
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

      const response = {
        statusCode: 200,
        body: JSON.stringify(
          {
            prima: primaTarifa,
          }
        )
      };
      console.log(response);

      return response
    });

  // });
  // await fs.createReadStream('tmort.csv')
  //   .pipe(csv())
  //   .on('data', (data) => tmort.push(data))
  //   .on('end', () => {
  //     /**
  //      * Se calcula el costo de prima
  //      * Parametros POST
  //      *  -Edad
  //      *  -Sexo
  //      *  -Calificación médica
  //      *  -suma asegurada
  //      * Parametros BD
  //      *  -Tasa de interes
  //      */
  //     console.log("parseo completado");

  //     // const data = JSON.parse(event.body);
  //     const data = event.body;
  //     const sexo = data.sexo;
  //     const b = data.sumaAsegurada;
  //     /**
  //      * Valores Aceptados para la calificacion
  //      * Bien
  //      * Regular
  //      * Malo
  //      */
  //     const calificacionMedica = data.calificacionMedica;
  //     //tasa de interes
  //     let i = 0;
  //     const params = {
  //       TableName : process.env.DYNAMODB_TABLE,
  //       Key:{
  //         id: "1"
  //       }
  //     }
  //     dynamoDb.get(params, (error, result) => {
  //       // handle potential errors
  //       if (error) {
  //         console.error(error);
  //         return {
  //           statusCode: error.statusCode || 501,
  //           headers: { 'Content-Type': 'text/plain' },
  //           body: 'Couldn\'t fetch the todo item.',
  //         };
  //       }
  //       console.log(result);
  //       // create a response
  //       i=result.Item.tasa;
  //       console.log("tasa:", i);

  //       const v = 1/(1+i);
  //     //logaritmo natural
  //     const delta =  Math.log(1+i);
  //     const c = i/delta;
  //     const gastosPPrima = 530;
  //     const a = 1; //anualidad
  //     const gastosXX = 200;
  //     const gastosSA = .00075;
  //     const x = data.edad;

  //     let q;
  //     if(calificacionMedica == "Bien"){
  //       q = 1;
  //     } else if (calificacionMedica == "Regular"){
  //       q = 1.0001;
  //     } else {
  //       q = 1.0002;
  //     }
  //     //TODO: Corregir prima -Val
  //     let seg;
  //     if(sexo == "M"){
  //       seg = Number(q*v*tmort[x].Mujeres);
  //     } else if(sexo == "H"){
  //       seg = Number(q*v*tmort[x].Hombres);
  //     }

  //     const premium = seg*c;
  //     const primaTarifa = ((b*(premium + gastosSA)) + gastosPPrima + (gastosXX * premium));

  //     const response = {
  //       statusCode: 200,
  //       body: JSON.stringify(
  //         {
  //           prima: primaTarifa,
  //         }
  //       )
  //     };
  //     console.log(response);

  //     return response
  //   });
  // });
};

module.exports.cambioTasaInteres = async event  => {
  /**
   * Actualiza en base de datos los valores:
   * tasa de interes
   * gastosPPrima
   * gastosXX
   * gastosSA
   */
  const timestamp = new Date().getTime();
  // const data = JSON.parse(event.body);
  const data = event.body;

  const params = {
    TableName : process.env.DYNAMODB_TABLE,
    Key: {
      id: 1+"",
    },
    ExpressionAttributeValues: {
      ':tasa': data.tasa,
      ':gastosPPrima': data.gastosPPrima,
      ':gastosSA': data.gastosSA,
      ':gastosXX': data.gastosXX,
      ':updatedAt': timestamp,
    },
    UpdateExpression: 'SET tasa = :tasa, gastosPPrima = :gastosPPrima, gastosSA = :gastosSA, gastosXX = :gastosXX, updatedAt = :updatedAt',
    ReturnValues: 'ALL_NEW',
  }
  dynamoDb.update(params,(error, result)=>{
    // handle potential errors
    if (error) {
      console.error(error);
      return {
        statusCode:502,
        body: JSON.stringify({body: 'Couldn\'t create the todo item.',})
      };
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify({item: result.Item}),
    };
    console.log(response);
    return response;
  });

}

module.exports.initializeData = async event => {

  const timestamp = new Date().getTime();
  // const data = JSON.parse(event.body);
  const data = event.body;
  /**
   * Actualiza en base de datos el valor de la tasa de interes
   */
  const params = {
    TableName : process.env.DYNAMODB_TABLE,
    Item:{
      id: 1+"",
      tasa :  ""+data.tasa,
      gastosPPrima: data.gastosPPrima,
      gastosSA: data.gastosSA,
      gastosXX: data.gastosXX,
      updatedAt: timestamp,
    }
  }
  dynamoDb.put(params,(error)=>{
    // handle potential errors
    if (error) {
      console.error(error);
      return {
        statusCode:502,
        body: JSON.stringify({body: 'Couldn\'t create the todo item.',})
      };
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify({item: params.Item}),
    };
    console.log(response);
    return response;
  });
}

module.exports.crearSiniestro = async event => {
  /**
   * Params
   * @folio acta defuncion
   */
  const response = {
    statusCode: 200,
    body: JSON.stringify({item: "respuesta"}),
  };
  console.log(response);
  return response;
}

module.exports.connectWeb3 = async event =>{
  /**
   * @Deprecated
   *
   * */

  // const data = JSON.parse(event.body);
  // const owner_account = data.account;

  let web3js;
  if (typeof web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    web3js = new Web3(web3.currentProvider);
  } else {
    web3js = new Web3(new Web3.providers.HttpProvider('http://189.240.228.100:7545'));
  }
  fs.readFile('./contracts/Seguro.json', 'utf8', (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err);
        return
    }
    //console.log('File data:', jsonString);
    const seguroJSON = JSON.parse(jsonString);
    const seguroABI = seguroJSON.abi;
    var seguroContract = new web3js.eth.Contract(seguroABI, seguroJSON.networks.address);

    seguroContract

    console.log(seguroContract);
    //console.log(Web3);
    //console.log(web3js.eth.accounts);
    const response = {
      statusCode: 200,
      body: JSON.stringify({item: 'web3.eth.accounts'}),
    }
    return response;
  })

}