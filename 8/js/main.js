import {createCard} from './cardGenerate.js';
import {generateCard} from './similarElements.js';
import {inactiveForm, activateForm} from './form.js';

import './validateForm.js';
import './form.js';


inactiveForm();

const connectionArrayCard  = createCard();
generateCard(connectionArrayCard[0]);


activateForm();
