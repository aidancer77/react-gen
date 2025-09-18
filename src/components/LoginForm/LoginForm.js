import React from 'react';
import './LoginForm.css';

function LoginForm() {

  const submitBtn = document.getElementById('submit');
  const regForm = document.getElementById('regForm');

//   regForm.addEventListener('submit', async function (e) {
//     e.preventDefault();

//   const regFormData = {
//     login: document.getElementById('login').value,
//     password: document.getElementById('password').value
//   };

//   try {
//     const response = await fetch('/api/employee', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(regFormData)
//     });

//     if (response.ok) {
//       regForm.reset();
//       loadEmployees();
//     }
//   } catch (error) {
//     console.error('Ошибка при добавлении сотрудника:', error);
//   }
// });


return (
  <main>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <form id="regForm" action="">
                <div class="form-group">
                  <label for="email">Логин</label>
                  <input type="email" class="form-control" id="login" placeholder="" required />
                </div>
                <div class="form-group">
                  <label for="password">Пароль</label>
                  <input type="password" class="form-control" id="password" placeholder="" required />
                </div>
                <button class="btn btn-danger" id='submit' type='submit'>Вход</button>
              </form>
              {/* <p class="mt-3">Not registered?
                  <a href="#">Create an account</a>
                </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);
}

export default LoginForm;