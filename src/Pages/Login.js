  import React, { Component } from 'react'
import { Container, CardDeck, Card} from 'react-bootstrap'
  
  export default class Login extends Component {
      render() {
            return (
              <>
              <Container style={{ width: '500px'}}>
              
                <form className="m-5" method="post" action="#" autocomplete="off">
                  <div class="form-group">
                    <label for="email">Email адрес</label>
                    <input name="email" type="email" class="form-control" id="email" placeholder="Введите email" />
                  </div>
                  <div class="form-group">
                    <label for="password">Password</label>
                    <input name="password" type="password" class="form-control" id="password" placeholder="Введите пароль"/>
                  </div>
                  <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="save"/>
                    <label name="save" class="form-check-label" for="save">Запомнить меня</label>
                  </div>
                  <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="yes"/>
                    <label name="yes" class="form-check-label" for="yes">Да, отправлять мне информацию о скидках</label>
                  </div>
                 <button type="submit" class="btn btn-primary">Регистрация</button>
                </form>
                
              </Container>
              </>
          )
      }
  }
  
