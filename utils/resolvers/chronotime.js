const chrono = require("chrono-node");

async function chronoTimeResolver(date) {
var date = chrono.parse(date, new Date(), {
    forwardDate:true
});
if(date === null){
    throw new Error(`Data, hora ou duração de tempo não reconhecida fornecida para ${date}`)
}
if(moment().isAfter(moment(date))){
    return moment(date).add(1, "days").toDate();
}
return date;
}

exports.chronoTimeResolver = chronoTimeResolver
