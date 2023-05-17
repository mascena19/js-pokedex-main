const modal = document.getElementById('modal')

document.getElementById('pokemonList').addEventListener('click', function (event) {
   if (event.target.closest('li')) {
      var firstName = event.target.closest('li').querySelector('.name').textContent;

      // Busca pelo nome do Pokémon"
      const conteudoName = todosPokemons.find((pokemon) => pokemon.name === firstName);

      // Verifica se encontrou o Pokémon e acessa suas informações
      if (conteudoName) {
         modal.innerHTML = convertPokemonModal(conteudoName);
      } else {
         console.log("Pokémon não encontrado.");
      }

      document.getElementById('modal').style.display = 'block';

      document.getElementById('fecharModal').addEventListener('click', function () {
         document.getElementById('modal').style.display = 'none';
      });
   }
});



document.addEventListener('click', function (event) {
   if (event.target === document.getElementById('modal')) {
      document.getElementById('modal').style.display = 'none';
   }
});

function mostrarDiv(divId) {
   // Oculta todas as divs de conteúdo
   var divs = document.getElementsByClassName('contentModal');
   for (var i = 0; i < divs.length; i++) {
      divs[i].style.display = 'none';
   }
   // Exibe a div de conteúdo clicada
   document.getElementById(divId).style.display = 'block';

   // Adiciona a classe de borda à div clicada e remove das outras duas
   var aboutDiv = document.getElementById('aboutDiv');
   var baseStatsDiv = document.getElementById('baseStatsDiv');
   var movesDiv = document.getElementById('movesDiv');
   var baseStatsDiv = document.getElementById('baseStatsDiv');
   aboutDiv.classList.remove('border');
   baseStatsDiv.classList.remove('border');
   movesDiv.classList.remove('border');
   baseStatsDiv.classList.remove('border');
   document.getElementById(divId + 'Div').classList.add('border');
}