const charactersAPI = new APIHandler('http://localhost:8000');


window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
    try {
      const characters = await charactersAPI.getFullList();
      showCharacters(characters);
    } catch (error) {
      console.error('Error retrieving characters:', error);
    }
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});

function showCharacters(characters) {
  const charactersContainer = document.getElementById('characters-container');
  charactersContainer.innerHTML = '';

  characters.forEach(character => {
    const characterCard = createCharacterCard(character);
    charactersContainer.appendChild(characterCard);
  });
}

function createCharacterCard(character) {
  const characterCard = document.createElement('div');
  characterCard.classList.add('character-card');

  const characterInfo = document.createElement('div');
  characterInfo.classList.add('character-info');
  characterCard.appendChild(characterInfo);

  const name = document.createElement('div');
  name.classList.add('name');
  name.textContent = character.name;
  characterInfo.appendChild(name);

  const occupation = document.createElement('div');
  occupation.classList.add('occupation');
  occupation.textContent = character.occupation;
  characterInfo.appendChild(occupation);

  const cartoon = document.createElement('div');
  cartoon.classList.add('cartoon');
  cartoon.textContent = character.cartoon ? 'Is a Cartoon' : 'Is not a Cartoon';
  characterInfo.appendChild(cartoon);

  const weapon = document.createElement('div');
  weapon.classList.add('weapon');
  weapon.textContent = character.weapon;
  characterInfo.appendChild(weapon);

  return characterCard;
}