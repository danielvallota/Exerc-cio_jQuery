//$(document).ready(function(){
//    alert('ola jquery')
//})
//esse comando de cima confirma que tudo esta funcionando


/*const inputForm = document.getElementById('form');
const tarefa = [];
let linhas = '';

inputForm.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha ();
    atualizaTabela ();
})

function adicionaLinha () {
    const inputTarefa = document.getElementById('input');

    if (tarefa.includes (inputTarefa.value)) {
        alert ('Essa tarefa já foi cadastrada!')
    } else {
        tarefa.push (inputTarefa.value)

        let linha = `<tr>`;
        linha += `<td>${inputTarefa.value} </td>`;
        linha += `</tr>`;

        linhas += linha;
    }
    inputTarefa.value = '';
}

function atualizaTabela () {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
*/

/*$(document).ready(function(){

    $("#task-form").hide();

    $('header button').click(function () {
        $("#task-form").slideToggle();
    })

    // Adiciona tarefa ao submeter o formulário
    $('#task-form').submit(function(event){
        event.preventDefault();
        var taskName = $('#task-manager').val();
        if(taskName.trim() !== ''){
            $('#task-list').append('<li><span class="task-name">' + taskName + '</span><span class="task-actions"><button class="complete-btn">Concluir</button><button class="delete-btn">Excluir</button></span></li>');
            $('#task-manager').val('');
        }
    });

    // Marca tarefa como concluída ao clicar no botão "Concluir"
    $(document).on('click', '.complete-btn', function(){
        $(this).closest('li').find('.task-name').toggleClass('completed');
    });

    // Exclui a tarefa ao clicar no botão "Excluir"
    $(document).on('click', '.delete-btn', function(){
        $(this).closest('li').remove();
    });
});;*/

$(document).ready(function () {

$('#form').submit(function(e) {
  e.preventDefault();
  var taskName = $('#input').val();
  if (taskName.trim() !== '' ){
    $('#task-list').append('<li><span class="task-name">' + taskName + '</span><span class="task-actions"><button class="complete-btn">Concluir</button><button class="delete-btn">Excluir</button></span></li>');
    $('#input').val('');
  }
});

$(document).on('click', '.complete-btn', function(){
  $(this).closest('li').find('.task-name').toggleClass('completed');
});

$(document).on('click', '.delete-btn', function(){
  $(this).closest('li').remove();
});

});