const PUBLIC_KEY = 'TU_CLAVE_PUBLICA_AQUI'; // Reemplaza esto con la clave pública real

var handler = ePayco.checkout.configure({
    key: `${PUBLIC_KEY}`,
    test: true // Ambiente de pruebas = true, Ambiente produccion = false.
});

var data={
    //Parametros compra (obligatorio)
    name: "Vestido Mujer Primavera",
    description: "Vestido Mujer Primavera",
    invoice: "FAC-12342", //Factura o ID de la orden debe ser unico en cada transaccion
    currency: "cop",
    amount: "5000",
    tax_base: "4000",
    tax: "500",
    tax_ico: "500",
    country: "co",
    lang: "en",
    external: "false", //Onpage="false" - Standard="true"

    //Atributos opcionales
    extra1: "extra1",
    extra2: "extra2",
    extra3: "extra3",
    confirmation: "http://secure2.payco.co/prueba_curl.php",
    response: "http://secure2.payco.co/prueba_curl.php",

    //Atributos cliente
    name_billing: "Jhon Doe",
    address_billing: "Carrera 19 numero 14 91",
    type_doc_billing: "cc",
    mobilephone_billing: "3050000000",
    number_doc_billing: "100000000",
    email_billing: "jhondoe@epayco.com",

  //atributo deshabilitación método de pago
    methodsDisable: []
    }

    const checkout = document.getElementById('checkout').addEventListener('click', function(){
        handler.open(data)
    })