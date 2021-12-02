let precio=30000;
let descuento=0;

let preciodescuento= descuento > 0 ? precio-(precio*descuento/100): precio;

console.log(preciodescuento)