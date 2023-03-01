// ІМПОРТУЄМО БІБЛІОТЕКИ БЕЗ ЯКИХ НЕ МОЖЕМО ПИСАТИ КОД
import React from "react";
import styled from "styled-components";
// ІМПОРТУЄМО ПОТРІБНІ КОМПОНЕНТИ
import Page from "./component/Page";
import Header from "./component/Header";
import Balance from "./component/Balance";
import Menu from "./component/Menu";
import Payment from "./component/Payment";

// КОНФІГУРАЦІЯ ========================================
const START_BALANCE = 1000;
const LIMIT_BALANCE = 250000;
const GET_MONEY = 100;
const TAKE_MONEY = 100;
const GET_SALLARY = 2500;
const BUY = 300;
export default function App() {
  // ФУНКЦІОНАЛ БАЛАНСУ ========================

  // Ось тут тримаємо актуальне значення балансу

  const [balance, setBalance] = React.useState(START_BALANCE);

  // Функція для прямого поповнення балансу
  const getMoney = () => {
    setBalance(balance + GET_MONEY);
    setpeyment([
      {
        name: "Нараховано:",
        amount: GET_MONEY,
        type: "+",
        ...payment
      }
    ]);
  };
  const takeMoney = () => {
    setBalance(balance - TAKE_MONEY);
    setpeyment([
      {
        name: "Куплено",
        amount: TAKE_MONEY,
        type: "-",
        ...payment
      }
    ]);
  };
  const getSallary = () => {
    setBalance(balance + GET_SALLARY);
    setpeyment([
      {
        name: "Зарплата:",
        amount: GET_SALLARY,
        type: "+",
        ...payment
      }
    ]);
  };
  const buy = () => {
    setBalance(balance - BUY);
    setpeyment([
      {
        name: "Донат на ЗСУ",
        amount: BUY,
        type: "-",
        ...payment
      }
    ]);
  };

  // Функція яка виконується кожен раз коли наш баланс змінився
  React.useEffect(() => {
    // Перевірка на ліміт балансу
    if (balance > LIMIT_BALANCE) {
      alert(`Ваш ліміт балансу: ${LIMIT_BALANCE}`);
      setBalance(START_BALANCE);
    }

    // Перевірка на мінусовий баланс
    if (balance < 0) {
      alert(`Ви використали усі свої гроші. Поповніть картку`);
      // setBalance(0);
    }
    // Сюди записуються змінні при оновленні яких буде виконуватися функція
  }, [balance]);

  const [payment, setpeyment] = React.useState([]);
  // ВЕРСТКА ІНТЕРФЕЙСУ ==========================================

  const LOGIN = "mortes";
  const PASSWORD = "1234";
  const [islogged, setlogged] = React.useState(false);
  const doLogin = () => {
    const login = prompt("Ваш логін");
    const password = prompt("Ваш пароль");
    if (login === LOGIN && password === PASSWORD) {
      alert("Ви увійшли");
      setlogged(true);
    } else {
      if (login != LOGIN) {
        return alert("Помилка в логіні");
      }
      if (password != PASSWORD) {
        return alert("Помилка в паролі");
      }
    }
  };
  return (
    <Page>
      {/* компонент шапки з нашою назвою
          також при кліку мишкою на шапку
          в нас визивається функція HelloWorld
      */}

      <Header name="ATB Bank" onClick={doLogin} />

      {/* Компонент баланса в який передається
          Актуальне значення балансу  */}
      {islogged && <Balance balance={balance} />}

      {/* Компонент меню з кнопками */}
      {islogged && (
        <Menu
          // ось сюди ми передаємо конфігурацію кнопок
          config={[
            {
              name: "Нарахування від мами",
              onClick: getMoney,
              img: "/icon/apple.svg"
            },
            {
              name: "Купити щось",
              onClick: takeMoney,
              img: "/icon/dog.svg"
            },
            {
              name: "Отримати зарплату",
              onClick: getSallary,
              img: "/icon/payment.svg"
            },
            {
              name: "Донат ЗСУ",
              onClick: buy,
              img: "/icon/another.svg"
            }
          ]}
        />
      )}
      {/* компонент списка наших транзакцій
          цей функціонал ми будемо робити на 3 уроці
      */}
      {islogged && <Payment payment={payment} />}
      {islogged === false && (
        <Notlogged>Вам потрібно увійти в акаунт</Notlogged>
      )}
    </Page>
  );
}
const Notlogged = styled.div`
  padding: 100px 50px;
  background: linear-gradient(
    0deg,
    rgba(100, 100, 10) 10%,
    rgba(255, 140, 0) 100%
  );
  color: #006400;
  text-align: center;
  margin-top: 350px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;
