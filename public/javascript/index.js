const charactersAPI = new APIHandler('http://localhost:8000');


window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
    try {
      const characters = await charactersAPI.getFullList();
      showCharacters(characters);
    } catch (error) {
      console.error('Error retrieving characters: ', error);
    }
  });

  document.getElementById('fetch-one').addEventListener('click', async function (event) {
    try {
      const characterId = document.getElementById('character-id').value;
      const character = await charactersAPI.getOneRegister(characterId);
      showCharacter(character);
    } catch (error) {
      console.error('Error retrieving character:', error);
    }
  });

  document.getElementById('delete-one').addEventListener('click', async function (event) {
    try {
      const characterId = document.getElementById('character-id').value;
      await charactersAPI.deleteOneRegister(characterId);
      setButtonBackgroundColor('delete-one', 'green');
    } catch (error) {
      console.error('Error deleting character:', error);
      setButtonBackgroundColor('delete-one', 'red');
    }
  });

  document.getElementById('edit-character-form').addEventListener('submit', async function (event) {
    try {
      const form = event.target;
      const characterId = form.elements.id.value;
      const characterData = {
        name: form.elements.name.value,
        occupation: form.elements.occupation.value,
        weapon: form.elements.weapon.value,
        cartoon: form.elements.cartoon.checked
      };
  
      await charactersAPI.updateOneRegister(characterId, characterData);
      setButtonBackgroundColor('update-button', 'green');
    } catch (error) {
      console.error('Error updating character:', error);
      setButtonBackgroundColor('update-button', 'red');
    }
  });

  document.getElementById('new-character-form').addEventListener('submit', async function (event) {
    try {
      const form = event.target;
      const characterData = {
        name: form.elements.name.value,
        occupation: form.elements.occupation.value,
        weapon: form.elements.weapon.value,
        cartoon: form.elements.cartoon.checked
      };
  
      await charactersAPI.createOneRegister(characterData);
      setButtonBackgroundColor('submit-button', 'green');
    } catch (error) {
      console.error('Error creating character:', error);
      setButtonBackgroundColor('submit-button', 'red');
    }
  });
});

function showCharacters(characters) {
  const charactersContainer = document.getElementById('characters-container');
  charactersContainer.innerHTML = '';

  characters.forEach(character => {
    const characterCard = createCharacterCard(character);
    charactersContainer.appendChild(characterCard);
  });
};

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
};

function showCharacter(character) {
  const characterContainer = document.getElementById('character-container');
  characterContainer.innerHTML = '';

  const characterCard = createCharacterCard(character);
  characterContainer.appendChild(characterCard);
};

function setButtonBackgroundColor(buttonId, color) {
  const button = document.getElementById(buttonId);
  button.style.backgroundColor = color;
};

function setButtonBackgroundColor(buttonId, color) {
  const button = document.getElementById(buttonId);
  button.style.backgroundColor = color;
};

function setButtonBackgroundColor(buttonId, color) {
  const button = document.getElementById(buttonId);
  button.style.backgroundColor = color;
};