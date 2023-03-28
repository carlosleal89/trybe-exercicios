async function teste() {
 try {
    const cep = '30130-010'; 
 const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
 const data = await response.json();
 console.log(data);
 } catch (error) {
    console.log('error foi '+error.message)
 }
}
console.log(teste());