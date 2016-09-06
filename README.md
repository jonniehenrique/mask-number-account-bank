# mask-number-account-bank
- Function de aplicação em tempo real (ou não) de máscara para números de conta de banco 
- Pode ser usada na forma funcional, apenas chamando a função e passando o parâmetro 
- Pode ser chamda dentro de um event/listener tipo <b> keyup, keydown, focusout </b> passando por parâmetro o próprio elemento

# Uso como function global
<pre>
loadMaskAccountBank(555898);
// retorna 55589-9
</pre>

# Uso dentro de um event/listener
<pre>
$(elementContaBancaria).keyup(function() {
    loadMaskAccountBank(elementContaBancaria);
});

$(elementContaBancaria).keydown(function() {
    loadMaskAccountBank(elementContaBancaria);
});

$(elementContaBancaria).focusout(function() {
    loadMaskAccountBank(elementContaBancaria);
});

</pre>
