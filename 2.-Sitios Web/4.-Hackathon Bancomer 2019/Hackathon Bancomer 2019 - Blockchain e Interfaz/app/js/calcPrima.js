module.exports.calcPrima = async () => {
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
  
        const sexo = $('#Sexo').val();
        const b = $('#SumaAsegurada').val();
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
        console.log(sexo);
        console.log(b);
        console.log(calificacionMedica);
        console.log(sexo);

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
}