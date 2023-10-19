// Вы разрабатываете веб-страницу для отображения расписания занятий в спортивном клубе. Каждое занятие имеет название, время проведения, максимальное количество участников и текущее количество записанных участников.
// Создайте веб-страницу с заголовком "Расписание занятий" и областью для отображения занятий.

// Загрузите информацию о занятиях из предоставленных JSON-данных. Каждое занятие должно отображаться на странице с указанием его названия, времени проведения, максимального количества участников и текущего количества записанных участников.

// Пользователь может нажать на кнопку "Записаться" для записи на занятие. Если максимальное количество участников уже достигнуто, кнопка "Записаться" становится неактивной.

// После успешной записи пользователя на занятие, обновите количество записанных участников и состояние кнопки "Записаться".

// Запись пользователя на занятие можно отменить путем нажатия на кнопку "Отменить запись". После отмены записи, обновите количество записанных участников и состояние кнопки.

// Все изменения (запись, отмена записи) должны сохраняться и отображаться в реальном времени на странице.

// При разработке используйте Bootstrap для стилизации элементов.

const listOfActivities = [
    {
        name: 'Йога',
        time: '15-00',
        maxParticipant: 15,
        occupiedSeats: 5,
    },
    {
        name: 'Гимнастика',
        time: '16-00',
        maxParticipant: 25,
        occupiedSeats: 7,
    },
    {
        name: 'Dance аэробика',
        time: '17-00',
        maxParticipant: 12,
        occupiedSeats: 3,
    },
];

function renderList() {
    const classDiv = document.querySelector('.class');
    listOfActivities.forEach(element => {
        const classItem = document.createElement('div');
        classItem.classList.add('item');
        const itemName = document.createElement('h2');
        itemName.textContent = element.name;
        const itemTime = document.createElement('p');
        itemTime.textContent = `время проведения: ` + element.time;
        const maxParticipant = document.createElement('p');
        const maxParticipantPar = document.createElement('p');
        maxParticipantPar.textContent = 'кол-во участников всего: '
        maxParticipant.classList.add('maxParticipant');
        maxParticipant.textContent = element.maxParticipant;
        const occupiedSeats = document.createElement('p');
        occupiedSeats.classList.add('occupiedSeats');
        occupiedSeats.textContent = element.occupiedSeats;
        const occupiedSeatsPar = document.createElement('p');
        occupiedSeatsPar.textContent = 'занято: ';
        const addBtn = document.createElement('button');
        addBtn.textContent = 'Записаться';
        addBtn.classList.add('addBtn');
        const delBtn = document.createElement('button');
        delBtn.textContent = 'Отменить запись';
        delBtn.classList.add('delBtn');
        classItem.append(itemName);
        classItem.append(itemTime);
        classItem.append(maxParticipantPar);
        classItem.append(maxParticipant);
        classItem.append(occupiedSeatsPar);
        classItem.append(occupiedSeats);
        classItem.append(addBtn);
        classItem.append(delBtn);
        classDiv.append(classItem);

    });
}

function signUp() {
    const signUp = document.querySelectorAll('.addBtn');
    signUp.forEach((button) => {
        button.addEventListener('click', () => {
            const item = button.closest('.item');
            const name = item.querySelector('h2').textContent;
            const maxParticipant = Number(item.querySelector('.maxParticipant').textContent);
            let occupiedSeats = item.querySelector('.occupiedSeats');
            let count = Number(occupiedSeats.textContent);
            if (count < maxParticipant) {
                occupiedSeats.textContent = count + 1;
                if (count + 1 === maxParticipant) {
                    button.setAttribute('disabled', 'true');
                }
            }
            recordArray(name, occupiedSeats.textContent);
            console.log(listOfActivities);
        })
    });
}
function cancelRecording() {
    const cancelRecording = document.querySelectorAll('.delBtn');
    cancelRecording.forEach((button) => {
        button.addEventListener('click', () => {
            const item = button.closest('.item');
            const name = item.querySelector('h2').textContent;
            const maxParticipant = Number(item.querySelector('.maxParticipant').textContent);
            let occupiedSeats = item.querySelector('.occupiedSeats');
            let count = Number(occupiedSeats.textContent);
            if (count === maxParticipant) {
                item.querySelector('.addBtn').removeAttribute('disabled', 'false');
            }
            if (count > 0) {
                occupiedSeats.textContent = count - 1;
            }
            recordArray(name, occupiedSeats.textContent);
            console.log(listOfActivities);
        })
    });
}

function recordArray(name, occupiedSeats) {
    listOfActivities.forEach(element => {
        if (element.name === name) {
            element.occupiedSeats = occupiedSeats;
        }
    });
}



renderList();
signUp();
cancelRecording();
console.log(listOfActivities);