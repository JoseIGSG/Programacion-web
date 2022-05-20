
let url = "http://worldtimeapi.org/api/timezone/America/Santiago"
$.get(url, function(respuesta){

        console.log(respuesta)

        let tiempo = respuesta

        $("#tiempo").text(tiempo.utc_datetime + " - " + tiempo.timezone)
    }, "json")