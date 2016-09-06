/**
 * Retorna objeto passado com o padrão de mascára de conta bancária com dígito
 * 
 * @param {element} object
**/

function loadMaskContaBancaria(contaBancaria) {
	
	var valSemDigito = contaBancaria.val().replace(/[^0-9]/g, '');
        
	if (contaBancaria.val().length === 0) {
		contaBancaria.val('');
		return false;
	}
            
	if (contaBancaria.val().length >= 1) {
		contaBancaria.val(valSemDigito.slice(0, valSemDigito.length - 1) + '-' + valSemDigito.slice(valSemDigito.length - 1, valSemDigito.length));
	}
};

<br><br>
